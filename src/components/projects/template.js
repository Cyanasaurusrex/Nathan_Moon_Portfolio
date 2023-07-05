import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";





export default function Template( props ) {

    const handleAppClick = () => {
        window.open(`${props.AppURL}`, "_blank");
      };
      const handleGithubClick = () => {
        window.open(`${props.gitHubURL}`, "_blank");
      };

      const techItems = props.tech.map((item, index) => (
        <p key={index} className=" bg-brand-gamma rounded-lg p-1 px-2 pb-0">
          {item}
        </p>
      ));

      return(
      <div
      onClick={handleAppClick}
      className=" bg-brand-secondary mx-auto mb-5 p-4 rounded-xl w-4/5 cursor-pointer hover:bg-brand-teriary"
    >
      {/* picture */}
      <Image
        alt={props.projectTitle}
        className="h-auto mx-auto"
        src={props.imgSrc}
        width={640}
        height={360}
      />
      {/* text content */}
      <div className="flex flex-col ">
        {/* title bar */}
        <div className="flex flex-row justify-between mt-3">
          <p className=" text-2xl text-brand-textHightlight">{props.projectTitle}</p>
          <FontAwesomeIcon
            onClick={handleGithubClick}
            className="my-auto cursor-pointer w-6 h-6 text-xl"
            icon={faGithub}
          />
        </div>
        <p>
           {props.desc}
        </p>
        <div className="flex flex-row flex-wrap gap-3 p-2 pb-0">
        {techItems}
        </div>
      </div>
    </div>
      )
}