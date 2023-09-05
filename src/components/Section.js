import * as React from "react";
import tw, { styled } from "twin.macro";

const Wrapper = styled.section`
  padding: ${(props) => (props.noPadding ? "4rem 0rem" : "4rem 12rem")};
  position: relative;
  &:nth-child(odd) {
    background-color: #f2f6f7;
  }
`;

const Title = tw.h2`text-8xl text-center font-light my-10 font-allura`;

const Section = ({ title, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default Section;
