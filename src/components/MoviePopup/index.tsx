import { useMovieContext } from "@/context";
import MovieI from "@/interfaces";

import {
  Container, 
  Wrapper,
  MoviePopupContainer, 
  PlotContainer, 
  ImageBox,
  ImageContainer, 
  ImageWrapper, 
  Title,
  Description,
  CloseButtonContainer
} from "./style"

const MoviePopup = () => {
  const { moviePopupData, setMoviePopupData } = useMovieContext()

  if (!moviePopupData?.id) return null

  const { title, poster_path, genres, release_date, direction, overview } = moviePopupData
  const year = new Date(release_date).getFullYear()
  const displayedGenre = genres.join(', ')

  const hanleClosePopup = () => setMoviePopupData({} as MovieI)

  return (
    <Container>
      <Wrapper>
        <MoviePopupContainer>
          <CloseButtonContainer onClick={hanleClosePopup}>
            <img src="/close.png" alt="close_icon" />
          </CloseButtonContainer>
          <Title>{title}</Title>
          <ImageBox>
            <ImageContainer>
              <ImageWrapper
                src={poster_path}
                alt="Picture of the author"
                width={200}
                height={200}
              />
            </ImageContainer>
          </ImageBox>
          <Description>
          {year}, {direction}, {displayedGenre}
          </Description>
          <PlotContainer>
            {overview}
          </PlotContainer>
        </MoviePopupContainer>
      </Wrapper>
      
    </Container>
  )
}

export default MoviePopup
