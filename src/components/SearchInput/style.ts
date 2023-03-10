import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  @media screen and (max-width: 650px) {
   flex-direction: column;
  }
`;

export const SubmitButton = styled.button`
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-family: inherit;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid #0000004a;
  border-radius: 15px;
  color: #0d0d43;
  &:hover {
    background: #00000012;
  }
  @media screen and (max-width: 650px) {
    margin-top: 15px;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  outline: none;
  font-size: 16px;
  font-family: inherit;
  width: 350px;
  height: 40px;
  padding-left: 20px;
  margin-right: 15px;
  background-color: transparent;
  border: 1px solid #0000004a;
  border-radius: 15px;
  color: #0d0d43;
  @media screen and (max-width: 650px) {
    margin: 0;
    width: 100%;
    max-width: 320px;
    font-size: 14px;
  }
`;