import * as React from "react";
import tw from "twin.macro";

import useEmblaCarousel from "embla-carousel-react";

const Embla = tw.div``;
const Viewport = tw.div`flex overflow-hidden`;
const Container = tw.div`flex w-full`;
const Slide = tw.div`flex flex-wrap justify-evenly gap-4 my-24 basis-full grow-0 shrink-0`;

const Person = tw.div`flex flex-col gap-6 items-center`;
const Img = tw.div`w-full aspect-square rounded-full overflow-hidden shadow-lg relative`;
const Name = tw.span`text-5xl text-center w-min font-allura mt-4`;

const Slider = ({ current, setCurrent, data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    startIndex: 1,
  });

  const onSelect = React.useCallback((emblaApi) => {
    setCurrent(emblaApi.selectedScrollSnap());
  }, []);

  const scrollTo = React.useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),

    [emblaApi]
  );

  React.useEffect(() => {
    if (!emblaApi) {
      return;
    }
    scrollTo(current);
    emblaApi.on("select", onSelect);
  }, [current, emblaApi]);

  return (
    <Embla>
      <Viewport ref={emblaRef}>
        <Container>
          {data.map((slide, i) => (
            <Slide>
              {slide.map(({ name, img }) => {
                return (
                  <Person key={name}>
                    <Img>{img}</Img>
                    <Name>{name}</Name>
                  </Person>
                );
              })}
            </Slide>
          ))}
        </Container>
      </Viewport>
    </Embla>
  );
};

export default Slider;
