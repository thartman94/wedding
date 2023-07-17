import * as React from "react";
import FrontHero from "../components/FrontHero";

const IndexPage = () => {
  return (
    <main>
      <FrontHero />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
