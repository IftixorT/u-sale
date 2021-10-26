import styled from 'styled-components';
import { InformationETypes } from './information.e-types';

export const Wrapper = styled.div`
  width: 80vw;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;
export const InfoWrapper = styled.div<InformationETypes>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(isReverse) => (isReverse ? 'row-reverse' : 'row')};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
export const InfoText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 80%;
    margin: auto;
    padding: 0 1rem;
    text-align: center;
  }
`;
export const InfoTitle = styled.h1`
  /* font-size: 70px; */
  font-family: var(--main-font);
  color: var(--main-color);
  font-weight: 900;
  @media screen and (max-width: 768px) {
    text-align: center;
    /* font-size: 50px; */
  }
`;
export const InfoP = styled.div`
  color: #505050;
  font-size: medium;
  font-family: var(--main-font);
`;
export const InfoLink = styled.div`
  font-family: var(--main-font);
  color: var(--main-color);
  margin-top: 2rem;
`;
export const InfoImgWrap = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  border-radius: 50%;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: min-content;
  }
`;
export const InfoImg = styled.img`
  width: 100%;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;
