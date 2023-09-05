import * as React from "react";
import tw from "twin.macro";
import Event from "./Event";

const Component = tw.div`flex flex-col relative gap-12 after:([content: ''] z-10 rounded-full bg-primary h-full absolute w-1 top-0 left-0 right-0 mx-auto)`;

const Timeline = ({ events }) => {
  return (
    <Component>
      {events.map((event, i) => (
        <Event flip={i % 2 === 1} key={event.title} {...event} />
      ))}
    </Component>
  );
};

export default Timeline;
