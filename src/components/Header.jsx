import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "react-reveal/Fade";

const Header = () => {
  const [sideBarStatus, setSideBarStatus] = useState(false);

  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="">Model S</a>

        <a href="">Model 3</a>

        <a href="">Model X</a>

        <a href="">Solar Roof</a>
        <a href="">Solar Roof</a>
        <a href="">Solar Roof</a>
      </Menu>
      <RightMenu>
        <a href="">Shop </a>
        <a href="">Tesla Account</a>
        <a onClick={() => setSideBarStatus(true)}>Menu{/* <MenuIcon  /> */}</a>
      </RightMenu>

      <BurgerNav show={sideBarStatus}>
        <CloseWrapper>
          <Icon onClick={() => setSideBarStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="">Model S</a>
        </li>{" "}
        <li>
          <a href="">Model X</a>
        </li>{" "}
        <li>
          <a href="">Existing Inventroy</a>
        </li>{" "}
        <li>
          <a href="">Existing Inventroy</a>
        </li>{" "}
        <li>
          <a href="">Existing Inventroy</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    cursor: pointer;
    font-weight: 600;
    padding: 0 10px;
    margin-right: 10px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s;
  li {
    padding: 15px 0;

    a {
      font-weight: 600;
    }
  }
`;

const Icon = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
