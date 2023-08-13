import * as React from "react";
import Section from "./Section";
import Timeline from "./timeline/Timeline";

const events = [
  {
    date: "10/01/16",
    title: "Met for the first time",
    location: "Brooklyn, NY",
    image: "esl.jpg",
  },
  {
    date: "10/01/16",
    title: "Prom",
    location: "Rochester Hills, MI",
    image: "prom.png",
  },
  {
    date: "10/01/16",
    title: "Moved to New Jersey",
    location: "Voorhees, NJ",
    image: "nj.jpg",
  },
  {
    date: "10/01/16",
    title: "Moved to California",
    location: "El Segundo, CA",
    image: "spacex.jpg",
  },
];

const Story = () => {
  return (
    <Section title="Our Story" noPadding>
      <Timeline events={events} />
    </Section>
  );
};

export default Story;
