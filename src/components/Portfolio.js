"use Client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Portfolio() {
  return (
    // all cards

    <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mt-10 m-4">
      {/* project 1 card*/}

      <div className=" bg-brand-textActive mx-auto mb-5 p-4 rounded-xl w-4/5">
        {/* picture */}
        <img
          className="h-auto mx-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dahlia_x_hybrida.jpg/800px-Dahlia_x_hybrida.jpg"
        ></img>
        {/* text content */}
        <div className="flex flex-col ">
          {/* title bar */}
          <div className="flex flex-row justify-between mt-3">
            <p className=" text-2xl">OIO Dev</p>
            <div className="flex-shrink-0 h-[1px] w-2/5 my-auto bg-red-700"></div>
            <FontAwesomeIcon className="my-auto" icon={faGithub} />
          </div>

          <Link href="https://github.com/CodeByDex/OIODev">OIO Dev</Link>
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
