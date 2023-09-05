import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Countdown from "react-countdown";
import { styled } from "styled-components";
import tw from "twin.macro";

const Section = tw.div`relative h-[850px] max-h-screen w-full overflow-hidden flex justify-end flex-col text-white font-lora text-center gap-2`;
const Border = tw.div`border-[4px] border-white pointer-events-none border-solid absolute top-4 left-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] z-10`;
const Content = tw.div`flex justify-between items-end w-full px-16 pb-12 h-[33%] bg-gradient-to-t from-black`;
const Detz = tw.div`flex flex-col gap-1 text-xl text-right pb-4`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: -2;

  img {
    object-position: 50% 20% !important;
  }

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

const Title = tw.h1`font-allura font-light sm:text-9xl text-lg`;

const TimeUntil = tw.div`font-bold text-sm`;
const Location = tw.div`text-lg`;

const LineBreak = styled.br`
  @media only screen and (min-width: 640px) {
    display: none;
  }
`;

const EVENT_DATE = new Date("May 19, 2024");

const FrontHero = () => {
  return (
    <Section id="hero">
      <Background>
        <StaticImage
          src="../images/hero.jpg"
          placeholder="blurred"
          layout="fullWidth"
          objectFit="cover"
          alt=""
          style={{ height: "100%" }}
        />
        <StaticImage
          layout="fullWidth"
          src="../images/hero-mobile.jpg"
          placeholder="blurred"
          alt=""
          objectPosition="bottom"
          style={{ height: "100%" }}
        />
      </Background>
      <Border />
      <Content>
        <Title>
          Ryan &<LineBreak />
          Alyssa
        </Title>
        <Detz>
          <Location
            href="https://goo.gl/maps/QHtzNjKwxa3kBtKG9"
            target="_blank"
          >
            May 19, 2024 - Temecula, CA
          </Location>
          <Countdown
            date={EVENT_DATE}
            renderer={({ days }) => <TimeUntil>{days} DAYS LEFT</TimeUntil>}
          ></Countdown>
          {/* <Button href="#rsvp">RSVP</Button> */}
        </Detz>
      </Content>
    </Section>
  );
};

export default FrontHero;
