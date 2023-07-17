import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Countdown from "react-countdown";
import { styled } from "styled-components";

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  font-family: "Lora";
  text-align: center;
`;

const Border = styled.div`
  border: 4px solid white;
  position: absolute;
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
  z-index: -1;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -2;
  filter: brightness(40%);
  & > :nth-child(2) {
    display: none;
  }
  @media (max-width: 800px) {
    & > :nth-child(1) {
      display: none;
    }
    & > :nth-child(2) {
      display: block;
    }
  }
`;

const Title = styled.h1`
  font-size: 8rem;
  line-height: 1.2;
  font-family: "Allura";
  font-weight: 300;

  @media only screen and (max-width: 640px) {
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const TimeUntil = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const WaitForMore = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
  padding: 0 1rem;
  @media only screen and (min-width: 640px) {
    transform: translateY(-50%);
    bottom: 20%;
    font-size: 2rem;
    position: absolute;
  }
`;

const Location = styled.a`
  margin-top: -6rem;
  font-size: 2rem;
  text-decoration: none;
  color: white;

  @media only screen and (max-width: 640px) {
    font-size: 1rem;
    margin-top: -3rem;
  }
`;

const LineBreak = styled.br`
  @media only screen and (min-width: 640px) {
    display: none;
  }
`;

const EVENT_DATE = new Date("May 19, 2024");

const renderer = ({ days }) => {
  return <TimeUntil>{days} days left</TimeUntil>;
};

const FrontHero = () => {
  return (
    <Section>
      <Background>
        <StaticImage
          src="../images/hero.jpg"
          placeholder="blurred"
          objectFit="cover"
          objectPosition="bottom"
          style={{ height: "100%" }}
        />
        <StaticImage
          src="../images/hero-mobile.jpg"
          placeholder="blurred"
          style={{ height: "100%" }}
        />
      </Background>
      <Title>
        Alyssa <LineBreak />& Ryan
      </Title>
      <Location href="https://goo.gl/maps/QHtzNjKwxa3kBtKG9" target="_blank">
        May 19, 2024 - Temecula, CA
      </Location>
      <Countdown date={EVENT_DATE} renderer={renderer}></Countdown>
      <WaitForMore>More details coming... check back soon!</WaitForMore>
      <Border />
    </Section>
  );
};

export default FrontHero;
