import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Countdown from "react-countdown";
import tw, { styled, css } from "twin.macro";

const Section = tw.div`relative h-[850px] max-h-screen w-full overflow-hidden flex justify-end flex-col text-white font-lora text-center gap-2`;
const Border = tw.div`border-[4px] border-white pointer-events-none border-solid absolute top-4 left-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] z-10`;
const Content = tw.div`flex flex-col items-center gap-y-12 md:(flex-row items-end h-[33%] justify-between pb-12 bg-gradient-to-t from-black) justify-center w-full px-16 h-full`;
const Detz = tw.div`flex flex-col gap-1 text-xl text-center md:text-right pb-4`;

const Background = styled.div(() => [
  tw`absolute top-0 right-0 h-full w-full z-[-2] brightness-50  [.hero]:hidden md:([.hero]:block! [.mobile-hero]:hidden brightness-100)`,

  css`
    @media (min-width: 756px) {
      img {
        object-position: 50% 20% !important;
      }
    }
  `,
]);

const Title = tw.h1`font-allura font-light xl:text-8xl text-7xl`;

const TimeUntil = tw.div`font-bold text-sm`;
const Location = tw.div`text-lg [span]:whitespace-nowrap`;

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
          className="hero"
          layout="fullWidth"
          objectFit="cover"
          alt=""
          style={{ height: "100%" }}
        />
        <StaticImage
          layout="fullWidth"
          src="../images/hero-mobile.jpg"
          className="mobile-hero"
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
            May 19, 2024 - <span>Temecula, CA</span>
          </Location>
          <Countdown
            date={EVENT_DATE}
            renderer={({ days }) => <TimeUntil>{days} DAYS LEFT</TimeUntil>}
          ></Countdown>
        </Detz>
      </Content>
    </Section>
  );
};

export default FrontHero;
