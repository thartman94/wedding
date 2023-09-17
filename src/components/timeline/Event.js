import * as React from "react";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div(({ $flip }) => [
  tw`h-full w-full items-start flex relative z-20`,
  $flip && tw`flex-row-reverse`,
]);

const ImgWrapper = tw.div`w-1/2 flex flex-col items-center justify-center`;
const Img = tw.img`w-3/5`;

const DetailsWrapper = styled.div(({ $flip }) => [
  tw`p-4 w-1/2 pl-8 flex flex-col items-start pt-20 text-left relative 
  before:([content: ''] bg-primary absolute w-4 aspect-square rounded-full top-[6rem] right-full mr-[-0.5rem])
  after:([content: ''] bg-[#f2f6f7] absolute w-[0.5rem] aspect-square rounded-full top-[6.25rem] right-full mr-[-0.25rem])`,

  $flip &&
    tw`pr-8 pl-4 text-right items-end 
    before:(right-0 mr-[-0.5rem]) 
    after:(right-0 mr-[-0.25rem])`,
]);

const Date = tw.span`text-lg mb-2`;
const Subtitle = tw.span`text-secondary text-sm mb-12`;
const Title = tw.span`font-allura text-6xl mb-12`;
const Content = tw.p`leading-loose max-w-[50rem]`;

const Event = ({ title, location, date, image, props, content, flip }) => {
  return (
    <Wrapper {...props} $flip={flip}>
      <ImgWrapper>
        <Img src={`/images/${image}`} className="image" />
      </ImgWrapper>
      <DetailsWrapper $flip={flip}>
        <Date>{date}</Date>
        <Subtitle>{location}</Subtitle>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </DetailsWrapper>
    </Wrapper>
  );
};

export default Event;
