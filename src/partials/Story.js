import * as React from "react";
import Section from "../components/Section";
import Timeline from "../components/timeline/Timeline";
import tw from "twin.macro";

const events = [
  {
    date: "October 01, 2016",
    title: "Met in Person for the First Time",
    location: "Brooklyn, NY",
    image: "esl.png",
    rotate: 5,
    content: null,
  },
  {
    date: "May 25, 2017",
    title: "Prom",
    location: "Rochester Hills, MI",
    image: "prom.png",
    content: null,
  },
  {
    date: "August 8, 2017",
    title: "Visited Ryan in NJ for the First Time",
    location: "Barnegat NJ",
    image: "barnegat.png",
    content: null,
  },
  {
    date: " August 12, 2021",
    title: "Moved to New Jersey",
    location: "Voorhees, NJ",
    image: "move-nj.png",
    content: null,
  },
  {
    date: "March 18, 2022",
    title: "Moved to California",
    location: "El Segundo, CA",
    image: "spacex.png",
    content: null,
  },
  {
    date: "December 27, 2022",
    title: "Engaged!",
    location: "Philadelphia, PA",
    image: "engaged.png",
    content: null,
  },
];

const StyledSection = tw(Section)`hidden xl:flex`;

const Story = () => {
  return (
    <StyledSection title="Our Story" noPadding>
      <Timeline events={events} />
    </StyledSection>
  );
};

export default Story;
