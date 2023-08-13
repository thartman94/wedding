import * as React from "react";
import FrontHero from "../components/FrontHero";
import RSVP from "../components/RSVP";
import Section from "../components/Section";
import Story from "../components/Story";

const IndexPage = () => {
  return (
    <main>
      <FrontHero />
      <Story />
      <Section title="The Event"></Section>
      <Section title="Registry"></Section>
      <Section title="Wedding Party"></Section>
      <RSVP />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
