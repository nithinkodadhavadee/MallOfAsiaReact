import styled from "styled-components";

export const Cont = styled.div`
  max-width: 660px;
  background: none;
  position: relative;
  padding-left: 60px;
  padding-right: 60px;
  .coverflow__container__1P-xE {
    background: none !important;
  }
  figure {
    box-shadow: none;
  }
  .coverflow__actions__1D5QO {
    justify-content: space-between;
    bottom: 48%;
  }
`;
export const NavigationContainer = styled.div`
  display: flex;
  position: absolute;
  top: calc(50% - 40px);
  width: 100%;
  left: 0;
  justify-content: space-between;
  .nav-btn {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #ffffff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Img = styled.img`
  border-radius: 4%;
  box-shadow: none !important;
`;
