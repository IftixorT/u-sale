/** @format */

import styled from "styled-components";

const CaruselStyle = styled.div`
  position: relative;
  margin: 100px 2rem;
  .slides {
    opacity: 0;
    transition-duration: 1s ease;
    transform: scale(0.96);
    margin: 50px 0;
  }
  .slides.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1);
  }
  .slide {
    position: absolute;
    width: 62px;
    height: 107px;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0.5;
    border-radius: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    cursor: pointer;
    z-index: 10;
    &:nth-child(1) {
      left: -32px;
    }
    &:nth-child(2) {
      right: -32px;
    }
    &:hover {
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
    &:active {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
        rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    }
  }
  @media screen and (max-width: 540px) {
    padding: 0;
    margin: 0;
    .slide {
      &:nth-child(1) {
        width: 40px;
        height: 80px;
        left: -15px;
      }
      &:nth-child(2) {
        right: -15px;
        width: 40px;
        height: 80px;
      }
    }
  }
`;

export default CaruselStyle;
