import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
const Section = ({
  title,
  description,
  leftButtonText,
  rightButtonText,
  backgroundImg,
  downArrow,
}) => {
  return (
    <Wrap bgImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p style={{ marginTop: "10px" }}>{description}</p>
        </ItemText>
      </Fade>

      <Button>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton rightbutton={rightButtonText}>
              {leftButtonText}
            </LeftButton>
            {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
          </ButtonGroup>
        </Fade>
        {downArrow && <DownArrow src="/images/down-arrow.svg" />}
      </Button>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-image: ${({ bgImg }) => `url("/images/${bgImg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Button = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: ${(props) =>
    props.rightButtonText ? `rgba(23, 26, 32, 0.8)` : "black"};
  height: 40px;
  width: 256px;
  color: white;
  display: flex;

  justify-content: center;
  align-items: center;
  border-radius: 6px;
  opacity: 0.85;

  font-size: 15px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
