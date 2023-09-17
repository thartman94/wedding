import * as React from "react";
import tw, { styled, css } from "twin.macro";
import { StaticImage } from "gatsby-plugin-image";

import Section from "../components/Section";
import PartySlider from "../components/PartySlider";

const imgConfig = {
  placeholder: "blurred",
  style: { height: "100%", width: "100%" },
  width: "100%",
};

const data = [
  [
    {
      name: "Thomas Hartman",
      img: (
        <StaticImage
          src="../images/wedding-party/hartmans.jpg"
          {...imgConfig}
        />
      ),
    },
    {
      name: "Tyler Turnure",
      img: (
        <StaticImage
          src="../images/wedding-party/turnures.jpg"
          {...imgConfig}
        />
      ),
    },
    {
      name: "Richard Kanson",
      img: (
        <StaticImage src="../images/wedding-party/kansons.jpg" {...imgConfig} />
      ),
    },
    {
      name: "Luke Jacob",
      img: (
        <StaticImage
          src="../images/wedding-party/luke-audry.jpg"
          {...imgConfig}
        />
      ),
    },
  ],
  [
    {
      name: "Felisha Hartman",
      img: (
        <StaticImage
          src="../images/wedding-party/hartmans.jpg"
          {...imgConfig}
        />
      ),
    },
    {
      name: "Christina Turnure",
      img: (
        <StaticImage
          src="../images/wedding-party/turnures.jpg"
          {...imgConfig}
        />
      ),
    },
    {
      name: "Erica Kanson",
      img: (
        <StaticImage
          src="../images/wedding-party/kansons.jpg"
          {...imgConfig}
          objectPosition="bottom"
        />
      ),
    },
    {
      name: "Audrey Chriss",
      img: (
        <StaticImage
          src="../images/wedding-party/luke-audry.jpg"
          {...imgConfig}
        />
      ),
    },
  ],
  [
    {
      name: "Andre Bottesi",
      img: <StaticImage src="../images/wedding-party/man.png" {...imgConfig} />,
    },
    {
      name: "Nick Bottesi",
      img: (
        <StaticImage src="../images/wedding-party/nick.jpg" {...imgConfig} />
      ),
    },
  ],
];

const navItems = ["Groomsmen", "Bridesmaids", "Ushers"];

const NavBar = tw.div`hidden md:flex w-full relative items-center justify-center gap-2 border-b-2 border-gray-200 pb-4 mb-4 mt-32 mx-auto max-w-[50rem]`;
const NavButton = styled.button(({ $isActive }) => [
  tw`text-xl xl:text-2xl w-1/3 capitalize font-light px-4 text-gray-400 hover:text-primary transition-colors duration-200`,
  $isActive && tw`text-primary`,
]);

const Underline = styled.div(({ curr }) => [
  tw`absolute top-full w-1/6 h-0.5 bg-primary rounded-full duration-500 ease-in-out`,
  css`
    left: calc(33.3333% * ${curr} + 33.3333% / 4);
  `,
]);

const Status = tw.div`text-2xl md:hidden text-center font-light relative flex justify-center w-full`;

const WeddingParty = () => {
  const [current, setCurrent] = React.useState(1);

  return (
    <Section title="Wedding Party" id="party" noPadding>
      <NavBar>
        {navItems.map((item, i) => (
          <NavButton
            key={item}
            $isActive={navItems[current] === item}
            onClick={() => setCurrent(i)}
          >
            {item}
          </NavButton>
        ))}
        <Underline curr={current} />
      </NavBar>
      <Status>{navItems[current]}</Status>
      <PartySlider current={current} setCurrent={setCurrent} data={data} />
    </Section>
  );
};

export default WeddingParty;
