import React from "react";
import styled from "styled-components";
import Section from "./Section";
const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Schedule a Demo Drive"
        leftButtonText="Custom Order"
        rightButtonText="Demo Drive"
        backgroundImg="model-s.jpg"
        downArrow={true}
      />
      <Section
        title="Model Y"
        description="Schedule a Demo Drive"
        leftButtonText="Custom Order"
        rightButtonText="Demo Drive"
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Model X"
        description="Schedule a Demo Drive"
        leftButtonText="Custom Order"
        rightButtonText="View Inventory"
        backgroundImg="model-x.jpg"
      />
      <Section
        title="Model 3"
        description="Schedule a Demo Drive"
        leftButtonText="Custom Order"
        rightButtonText="View Inventory"
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
        backgroundImg="solar-panel.jpg"
      />{" "}
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
        backgroundImg="solar-roof.jpg"
      />{" "}
      <Section
        title="Accessories"
        leftButtonText="Order Now"
        backgroundImg="accessories.jpg"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100hv;
`;
