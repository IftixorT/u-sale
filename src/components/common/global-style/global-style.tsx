import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
  font-family: "fc-pro";
  box-sizing: border-box;
 }
`;

export const Container = styled.div`
  padding: 0 4rem;
  @media (max-width: 600px) {
    padding: 0;
    background-color: red;
  }
`;

export default GlobalStyle;
