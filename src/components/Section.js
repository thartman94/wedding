import * as React from "react";
import { styled } from "styled-components";

const Wrapper = styled.section`
  padding: ${(props) => (props.noPadding ? "4rem 0rem" : "4rem 12rem")};
  position: relative;
  &:nth-child(odd) {
    background-color: #f2f6f7;
  }
`;

const Title = styled.h2`
  font-size: 8rem;
  margin: 0;
  width: 100%;
  text-align: center;
  font-family: "Allura";
  font-weight: 300;
`;

const Section = ({ title, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default Section;
