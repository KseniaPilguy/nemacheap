import { useRef, useState } from "react"

import MovieCard from "@/components/MovieCard"
import { useMovieContext } from "@/context"
import MovieI from "@/interfaces"
import { BlurBox, Container, MoviesListWrapper } from "@/styles/list"
import MoviePopup from "@/components/MoviePopup"
import { MovieCardWrapper } from "@/styles"

interface MoviesListI {
  movies: MovieI[]
}

const List = ({ movies }: MoviesListI) => {
  const { setMoviePopupData } = useMovieContext()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isShowShadow, setIsShowShadow] = useState(true)

  const handleScroll = (e: any) => {
    const bottom = Math.floor(e.target.scrollHeight) - Math.floor(e.target.scrollTop)
      === Math.floor(e.target.clientHeight)
    if (bottom) {
      return setIsShowShadow(false)
    }
    setIsShowShadow(true)
  }

  const handleOpenCard = (movie: MovieI) => setMoviePopupData(movie)

  if (!movies?.length) return (
    <Container ref={containerRef} onScroll={handleScroll}>
      No movies found
    </Container>
  )
  
  return (
    <>
      <Container ref={containerRef} onScroll={handleScroll}>
        <MoviesListWrapper>
          {movies?.map((movie: MovieI) => (
            <MovieCardWrapper key={movie.id} onClick={() => handleOpenCard(movie)}>
              <MovieCard {...movie} />
            </MovieCardWrapper>
          ))}
        </MoviesListWrapper>

        {movies?.length && <BlurBox className={`${isShowShadow ? 'visible' : ''}`} />}
      </Container>

      <MoviePopup />
    </>
  )
}

export default List

export async function getServerSideProps({ query }: {query: any}) {
  const { search } = query;
  let response: Response
  if (search) {
    response = await fetch(`http://localhost:3004/api/v1/movies/search?searchValue=${search}`)
  } else {
    response = await fetch('http://localhost:3004/api/v1/movies/list')
  }
  
  const movies = await response.json();

  return {
    props: { movies }
  };
}
