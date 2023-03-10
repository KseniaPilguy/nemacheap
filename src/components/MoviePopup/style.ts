import styled from 'styled-components';
import Image from 'next/image'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000b3;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Wrapper = styled.div`
  width: 600px;
  background: #cadeef;
  border-radius: 5px;
  overflow: auto;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 700px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const MoviePopupContainer = styled.div`
  padding: 40px 30px 60px;
  @media screen and (max-width: 700px) {
    padding: 20px 20px 40px;
  }
`;

export const CloseButtonContainer = styled.div`
  width: max-content; 
  margin: 0 0 0 auto;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  color: #0d0d43;
  margin: 30px 0;
  @media screen and (max-width: 650px) {
    font-size: 24px;
    margin: 15px 0;
  }
`;

export const ImageBox = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  
  border: 1px solid #0000004a;
  border-radius: 20px;
  @media screen and (max-width: 650px) {
    width: 200px;
    height: 200px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: 50% 50%;
`;

export const Description = styled.p`
  font-size: 24px;
  color: #0d0d43;
  margin: 25px 0 35px;
  text-align: center;
  @media screen and (max-width: 650px) {
    font-size: 18px;
    margin: 10px 0 20px;
  }
`;

export const PlotContainer = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #0d0d43;
  text-align: center;
  margin: 0;
  @media screen and (max-width: 650px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
