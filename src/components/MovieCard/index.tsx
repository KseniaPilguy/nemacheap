import MovieI from "@/interfaces"

import { Title, Description, ImageContainer, ImageWrapper } from "./style"

const MovieCard = ({ title, genres, release_date, poster_path }: MovieI) => {
  const displayedGenre = genres.join(', ')
  const year = new Date(release_date).getFullYear()

  return (
    <>
      <ImageContainer>
        <ImageWrapper
          src={poster_path}
          alt="Picture of the author"
          width={200}
          height={200}
        />
      </ImageContainer>
      <Title>
        {title}
      </Title>
      <Description>
        {displayedGenre} <br />
        {year}
      </Description>
    </>
  )
}

export default MovieCard
