import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding: 20px 50px;
  max-width: 1300px;
  min-height: 100vh;
  margin: 0 auto;
  @media screen and (max-width: 550px) {
    padding: 40px 15px;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  letter-spacing: 2px;
  color: #0d0d43;
  margin: 0;
  @media screen and (max-width: 650px) {
    font-size: 40px;
  }
`;

export const MovieCardWrapper = styled.div`
  width: 20%;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  border: 1px solid #0000004a;
  border-radius: 20px;
  margin: 10px;
  padding: 0 0 20px;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 11px #00000033;
    cursor: pointer;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    min-width: auto;
    margin: 0 0 10px;
  }
`;

