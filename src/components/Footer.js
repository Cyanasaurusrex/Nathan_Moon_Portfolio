"use Client";
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  return (
    <ScrollLink
          className="cursor-pointer mx-auto pb-6 text-brand-accent hover:text-brand-textHover"
              activeClass="active"
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
            >
              ↑ Return to top ↑
            </ScrollLink>
      
  );
}
