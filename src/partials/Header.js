import * as React from "react";
import tw, { styled } from "twin.macro";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeaderComponent = styled.header(({ $isScolled }) => [
  tw`fixed top-0 flex items-center justify-center text-white pt-12 pb-6 left-0 w-full bg-transparent z-excessive duration-300 ease-in-out`,
  $isScolled && tw`bg-white text-black shadow-md pt-6`,
]);

const Nav = tw.nav`flex items-center justify-center`;
const Link = styled(AnchorLink)`
  ${tw`text-lg px-6 py-1 relative hover:after:w-[calc(100% - 2rem)] after:([content: ""] bg-primary mb-1 h-0.5 block w-0 absolute bottom-0 left-0 right-0 mx-auto duration-500 ease-in-out)`}
`;

const menu = [
  {
    title: "Top",
    href: "#hero",
  },
  {
    title: "Event Details",
    href: "#event",
  },
  {
    title: "Wedding Party",
    href: "#party",
  },
  {
    title: "RSVP",
    href: "#rsvp",
  },
];

const Header = () => {
  const [isScolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderComponent $isScolled={isScolled}>
      <Nav>
        {menu.map(({ title, href }, index) => (
          <Link key={index} href={href} offset="40">
            {title}
          </Link>
        ))}
      </Nav>
    </HeaderComponent>
  );
};

export default Header;
