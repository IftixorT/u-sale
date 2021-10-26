import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --crimson: #FB574C;
  --gray: "#818181",
  --gray2: "#505050",
}
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;
export const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  @media (mix-width: 2000px) {
    width: 1500px;
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const FlexItem50 = styled.div`
  width: 48%;
  @media (max-width: 900px) {
    width: 100% !important;
    margin-top: 50px;
  }
`;
export default GlobalStyle;
