import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const HoverIcon = ({ icon, color, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleEmailClick = () => {
    const emailAddress = "example@example.com";

    navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error copying email to clipboard:", error);
      });
  };

  return (
    <div className="relative">
      {isCopied && (
        <div className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-xs">
          Copied!
        </div>
      )}
      <FontAwesomeIcon
        className="my-auto cursor-pointer w-6 h-6 text-xl mx-4"
        icon={icon}
        style={{ color: isHovered ? color : undefined }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick || handleEmailClick}
      />
    </div>
  );
};

export default function ContactMe() {
  const handleGithubClick = () => {
    window.open("https://github.com/Cyanasaurusrex/", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/moon-nathan/", "_blank");
  };

  return (
    <div id="contactMe" className="m-4 mb-8 mx-auto max-w-[1400px] bg-brand-secondary p-4 rounded-lg">
      <h1 className="text-center text-brand-textHightlight pb-5"> Contact Me</h1>
      <div className="flex flex-row justify-center">
        <HoverIcon
          icon={faGithub}
          color="#06b6d4"
          onClick={handleGithubClick}
        />
        <HoverIcon
          icon={faLinkedinIn}
          color="#06b6d4"
          onClick={handleLinkedInClick}
        />
        <HoverIcon icon={faEnvelope} color="#06b6d4" />
      </div>
    </div>
  );
};
