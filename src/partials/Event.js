import * as React from "react";
import tw from "twin.macro";
import { StaticImage } from "gatsby-plugin-image";
import { BsCalendarHeart } from "react-icons/bs";
import { PiChurchDuotone } from "react-icons/pi";
import { GiPartyPopper } from "react-icons/gi";

import Section from "../components/Section";

const Wrapper = tw.div`w-full flex relative py-20`;
const Third = tw.div`w-full sm:w-1/3 h-full flex flex-col items-center justify-center gap-1`;
const Title = tw.h3`font-bold text-xl`;
const Icon = tw.span`text-8xl text-primary mb-12`;
const Border = tw.div`border-[3px] z-20 border-white border-solid absolute h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] `;

const Location = tw.div`flex flex-col items-center justify-center gap-2  py-20`;
const LocTitle = tw.h3`text-6xl font-allura`;
const LocBottom = tw.p`w-full items-center flex mt-12`;
const LocHalf = tw.div`w-1/2 flex h-full text-xl relative flex-col items-center justify-center gap-2 [.title]:(font-bold text-3xl) [&.right]:(shadow-xl)`;
const Directions = tw.a`text-primary underline hover:text-secondary duration-300 ease-in-out`;

const info = [
  {
    icon: <BsCalendarHeart />,
    title: "Our Wedding Day",
    desc: "Sunday, May 19, 2024",
  },
  {
    icon: <PiChurchDuotone />,
    title: "Ceremony",
    desc: "4:00 PM",
  },
  {
    icon: <GiPartyPopper />,
    title: "Reception",
    desc: "5:00 PM",
  },
];

const Event = () => {
  return (
    <Section id="event" title="Event">
      <Wrapper>
        {info.map(({ title, desc, icon }, index) => (
          <Third key={index}>
            <Icon>{icon}</Icon>
            <Title>{title}</Title>
            <p>{desc}</p>
          </Third>
        ))}
      </Wrapper>
      <Location>
        <LocTitle>Location</LocTitle>
        <LocBottom>
          <LocHalf>
            <span className="title">Lake Oak Meadows</span>
            <span>36101 Glen Oaks Rd A</span>
            <span>Temecula, CA 92592</span>

            <Directions
              href="https://goo.gl/maps/iHUjXzJvCLM6xSZh8"
              target="_blank"
              rel="noreferrer"
            >
              Map & Directions
            </Directions>
          </LocHalf>
          <LocHalf className="right">
            <Border />
            <StaticImage
              src="../images/location.jpg"
              placeholder="blurred"
              alt=""
              objectPosition="bottom"
              style={{ height: "100%" }}
            />
          </LocHalf>
        </LocBottom>
      </Location>
    </Section>
  );
};

export default Event;
