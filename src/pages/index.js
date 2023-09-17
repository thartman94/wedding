import * as React from "react";
import GlobalStyles from "../GlobalStyles";

import Header from "../partials/Header";
import FrontHero from "../partials/FrontHero";
import Story from "../partials/Story";
import Event from "../partials/Event";
import Party from "../partials/Party";
import Registry from "../partials/Registry";
import Rsvp from "../partials/RSVP";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <Header />
        <FrontHero />
        <Story />
        <Event />
        <Party />
        <Registry />
        <Rsvp />
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
