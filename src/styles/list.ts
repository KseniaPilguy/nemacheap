import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;

  max-height: 75vh;
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 2px;
  }
   
  &::-webkit-scrollbar-thumb {
    background-color: #0d0d43;
    outline: 1px solid transparent;
  }

  @media screen and (max-width: 650px) {
    margin-top: 30px;
  }
`;

export const MoviesListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  padding: 0 20px 20px;
  @media screen and (max-width: 650px) {
    padding: 0 10px;
  }
`;

export const BlurBox = styled.div`
  width: 95.3%;
  height: 30px;
  position: sticky;
  bottom: 0;
  left: 0;
  background-color: #ffffff99;
  margin: 0 auto;
  box-shadow: 0px -10px 20px 16px #ffffff99;
  opacity: 0;
  transition: all .5s ease-out;
  &.visible {
    opacity: 1;
  }
`;
