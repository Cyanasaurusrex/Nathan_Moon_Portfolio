"use Client";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <Link href="https://github.com/CodeByDex/OIODev">OIO Dev</Link>
        <p className=" italic">In Progress</p>
        <p>
          Connect with skilled Technology Professionals who specialize in
          creating exceptional websites and server applications. We bring your
          digital vision to life!
        </p>
      </div>
      <div className="flex flex-row justify-between">
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
      </div>
    </div>
  );
}
