import * as React from "react";
import Section from "../components/Section";
import tw from "twin.macro";

const links = [
  {
    title: "Amazon",
    url: "https://www.amazon.com/wedding/alyssa-bottesi-ryan-hartman--may-2024/registry/307QDK8OOCGCW ",
  },
  {
    title: "Target",
    url: "https://www.target.com/gift-registry/gift/alyssa-ryan-wedding ",
  },
  {
    title: "Crate & Barrel",
    url: "https://www.crateandbarrel.com/gift-registry/alyssa-bottesi/r6764518 ",
  },
];

const Wrapper = tw.div`flex flex-col items-center justify-center self-center my-20`;
const Icon = tw.div`w-32 [svg]:fill-primary`;
const Text = tw.p`text-center text-xl leading-loose font-light max-w-[50rem] py-20`;

const Links = tw.div`flex flex-wrap items-center gap-6 justify-center self-center w-full`;
const Link = tw.a`text-center w-[14rem] bg-secondary text-white uppercase font-bold leading-loose font-light py-3 duration-500 border-2 border-secondary hover:(bg-transparent text-secondary)`;

const Registry = () => {
  return (
    <Section title="Registry">
      <Wrapper>
        <Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M365.1 32c-17.6 0-33.9 9-43.2 23.9l-45 72.1H288h80c26.5 0 48-21.5 48-48s-21.5-48-48-48h-2.9zm-130 96l-45-72.1C180.8 41 164.5 32 146.9 32H144c-26.5 0-48 21.5-48 48s21.5 48 48 48h80 11.1zM256 101l38.8-62c15.2-24.2 41.7-39 70.3-39H368c44.2 0 80 35.8 80 80c0 18-6 34.6-16 48h48 32v32 96 32H480V480v32H448 64 32V480 288H0V256 160 128H32 80C70 114.6 64 98 64 80C64 35.8 99.8 0 144 0h2.9c28.6 0 55.2 14.7 70.3 39L256 101zM144 160H32v96H64 240V160H224 144zm128 0v96H448h32V160H368 288 272zM240 288H64V480H240V288zm32 192H448V288H272V480z" />
          </svg>
        </Icon>
        <Text>
          Your presence at our wedding is the greatest gift of all. However, if
          you would like to honor us with a gift, we have registered at the
          following locations:
        </Text>
        <Links>
          {links.map(({ title, url }) => (
            <Link
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
          ))}
        </Links>
      </Wrapper>
    </Section>
  );
};

export default Registry;
