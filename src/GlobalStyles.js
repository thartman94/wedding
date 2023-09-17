import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles, css } from "twin.macro";

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`antialiased m-0 font-lora`,
  },
  root: {
    ...css`
      @media (min-width: 2000px) {
        font-size: 20px;
      }
      @media (min-width: 3000px) {
        font-size: 24px;
      }
    `,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
