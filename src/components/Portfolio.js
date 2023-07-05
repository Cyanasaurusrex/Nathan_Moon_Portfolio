"use Client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Portfolio() {

  const handleGithubClick = () => {
    window.open(`https://github.com/CodeByDex/OIODev`, "_blank");
  };

  const handleClick = () => {
    window.open('https://putasporkinit.co', "_blank")
  }


  return (
    // all cards
    <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 m-4 mx-auto max-w-[1500px]">

      {/* project 1 card*/}
      <div onClick={handleClick} className=" bg-brand-secondary mx-auto mb-5 p-4 rounded-xl w-4/5 cursor-pointer hover:bg-brand-teriary">

        {/* picture */}
        <Image
          className="h-auto mx-auto"
          src="/images/putasporkinit.png"
          width={640}
          height={360}
        />
        {/* text content */}
        <div className="flex flex-col ">
          {/* title bar */}
          <div className="flex flex-row justify-between mt-3">
            <p className=" text-2xl">OIO Dev</p>
            <div className="flex-shrink-0 h-[1px] w-2/5 my-auto bg-brand-teriary"></div>
            <FontAwesomeIcon onClick={handleGithubClick} className="my-auto cursor-pointer w-6 h-6 text-xl" icon={faGithub} />
          </div>
          <p>
            Connect with skilled Technology Professionals who specialize in
            creating exceptional websites and server applications. We bring your
            digital vision to life!
          </p>
        </div>
      </div>

      {/* <div className="flex flex-row justify-between">
        <Link href="https://www.putasporkinit.co/">PutaSporkinit</Link>
        <p>
          Bringing the magic of your favorite movies, TV shows, and video games
          to your plate with mouth-watering recipes!
        </p>
      </div>

      
      <div className="flex flex-row justify-between">
        <Link href="https://moxufo.github.io/Rave-Reviews/">Rave Reviews</Link>
        <p>
          Craft a night out by finding local events, lodging, and dining. Let us
          build you a night to remember!
        </p>
      </div> */}
    </div>
  );
}
