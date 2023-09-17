import * as React from "react";
import tw, { styled } from "twin.macro";

const Wrapper = styled.section(({ noPadding }) => [
  tw`relative flex flex-col items-center odd:bg-[#f2f6f7] py-16 2xl:px-48`,
  noPadding && tw`px-0!`,
]);

const Title = tw.h2`text-6xl lg:text-7xl xl:text-8xl text-center font-light my-10 font-allura px-8`;

const Section = ({ title, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default Section;
