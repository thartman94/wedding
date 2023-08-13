import { Link } from "gatsby";
import * as React from "react";
import { styled } from "styled-components";

const Wrapper = styled.a`
  background-color: var(--secondary-color);
  text-decoration: none;
  color: white;
  padding: 0.5rem 2rem;
  letter-spacing: 0.2rem;
  transition: all 0.2s ease-in-out;
  border: 3px solid var(--secondary-color);
  &:hover {
    background: transparent;
  }
`;

const Button = ({ href, onClick, target, rel, children }) => {
  if (href.startsWith("#"))
    onClick = (e) => {
      e.preventDefault();
      const el = document.querySelector(href);

      if (!el) return;

      el.scrollIntoView({ behavior: "smooth" });

      if (window.history.pushState) window.history.pushState(null, null, href);
      else {
        window.location.hash = href;
      }
    };
  return (
    <Wrapper href={href} onClick={onClick} target={target} rel={rel}>
      {children}
    </Wrapper>
  );
};

export default Button;
