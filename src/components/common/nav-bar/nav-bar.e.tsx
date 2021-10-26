import styled from "styled-components";

export const Header = styled.header`
  margin: 50px 0;
  .navbar-controller {
    font-size: 24px;
    cursor: pointer;
    color: var(--crimson);
    display: none;
  }
  @media (max-width: 900px) {
    margin: 40px 0;
    .navbar-controller {
      display: block;
    }
  }
`;
export const Navbar = styled.ul`
  width: 540px;
  @media (max-width: 1100px) {
    width: 450px;
  }
`;
export const ResNav = styled.div`
  width: 80%;
  transition: 1s all ease-in-out;
  .navbar-closer {
    position: absolute;
    top: 50px;
    right: 60px;
    font-size: 28px;
    color: #fff;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--crimson);
    color: #fff;
    .flex {
      flex-direction: column;
      a {
        &:hover {
          color: #fff;
        }
      }
      * {
        color: #fff;
      }
      ul {
        margin-top: 60px;
      }
      li {
        margin: 24px 0;
        a {
          font-size: 18px;
        }
      }
    }
  }
`;
export const NavItem = styled.li`
  a {
    color: var(--gray2);
    transition: 0.3s all ease-in-out;
    &:hover {
      color: var(--crimson);
    }
  }
  @media (max-width: 1100px) {
    a {
      font-size: 14px;
    }
  }
`;
export const NavPanel = styled.div`
  * {
    margin-left: 15px;
  }
`;
const btn = `
  padding: 16px 32px;
  border-radius: 10px;
  border: 1px solid transparent;
  @media (max-width: 1100px) {
    padding: 8px 16px;
    font-size: 15px;
  }
  @media (max-width: 900px) {
    & {
      border-color: #fff;
      display: block;
      margin-bottom: 8px;
      text-align: center;
      padding: 16px 32px;
    }
  }
`;
export const WhiteBtn = styled.a`
  ${btn}
  color: var(--crimson);
  border-color: var(--crimson);
`;
export const CrimsonBtn = styled.a`
  ${btn}
  color: #fff;
  background-color: var(--crimson);
  border-color: var(--crimson);
`;
