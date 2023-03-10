import styled from 'styled-components';
import Image from 'next/image'

export const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
`;

export const ImageWrapper = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const Title = styled.h3`
  margin: 15px 0 0;
  color: #0d0d43;
  padding: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #00000061;
  margin: 5px 0 0;
  padding: 0 10px;
`;





