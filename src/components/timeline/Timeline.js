import * as React from "react";
import { styled } from "styled-components";
import Event from "./Event";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: relative;
  height: 65rem;
  padding: 2rem 0;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #bdc2c9;
    top: 50%;
    transform: translateY(-50%);
  }
  max-width: 100%;
  overflow: auto visible;
`;

const Timeline = ({ events }) => {
  return (
    <Wrapper>
      {events.map((event, i) => {
        return <Event key={i} {...event} />;
      })}
    </Wrapper>
  );
};

export default Timeline;
