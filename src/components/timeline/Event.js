import * as React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  /* background-color: black; */
  height: 100%;
  display: flex;
  position: relative;
  --gap: 2rem;

  & > div {
    flex-direction: column-reverse;
    margin-bottom: var(--gap);
  }

  &:nth-child(even) {
    align-items: flex-end;
    & > div {
      flex-direction: column;
      margin-bottom: 0;
      margin-top: var(--gap);
      &:after {
        top: 50%;
      }
      & > div {
        border-bottom: none;
        border-top: 2px solid var(--secondary-color);
      }
    }
  }

  &:after {
    content: "";
    left: 50%;
    top: 50%;
    border: 0.2rem solid #bdc2c9;
    background-color: white;
    z-index: 2;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
`;

const Container = styled.div`
  height: calc(50% - var(--gap));
  width: 300px;
  display: flex;
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--secondary-color);
  &:after {
    content: "";
    width: 0.2rem;
    height: 50%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    background-color: #bdc2c9;
    z-index: -1;
  }
`;

const Image = styled.img`
  object-fit: cover;
  object-position: bottom;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  padding: 1rem;
  text-align: center;
  * {
    margin: 0;
  }
  background-color: white;
  position: relative;
  border-bottom: 2px solid var(--secondary-color);
`;

const Title = styled.p`
  font-family: "Allura";
  font-size: 2rem;
`;

const Subtitle = styled.p`
  color: var(--secondary-color);
  font-size: 0.8rem;
`;

const Event = ({ title, location, date, image, props }) => {
  return (
    <Wrapper {...props}>
      <Container>
        <Image src={`/images/${image}`} />
        <Content>
          <Title>{title}</Title>
          <Subtitle>
            {location} - {date}
          </Subtitle>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Event;
