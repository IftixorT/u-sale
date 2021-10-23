import styled, { createGlobalStyle } from "styled-components";

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
   @font-face {
      font-family: "SF pro";
      src: url(./assets/fonts/sf-pro/sf-pro-regular.OTF);
   }
   :root {
      --main-color: #fb574c;
      --main-font: "SF pro";
   }
`;

export default GlobalStyle;
