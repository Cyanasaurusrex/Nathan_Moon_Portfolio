"use Client";
import Image from "next/image";
import Resume from "./Resume";

export default function AboutMe() {
  return(
    <div className="flex flex-col sm:flex-row m-4 mb-8 mx-auto max-w-[1400px] bg-brand-secondary p-4 rounded-lg">
      <div className="mx-auto my-auto flex-shrink-0">
      <Image
        alt="Picture of myself, Nathan Moon"
        className="sm:h-auto rounded-lg"
        src="/images/headshot.png"
        width={150}
        height={150}
        />
      </div>
        <div className="m-4">
          <h2 className="text-lg text-brand-textHightlight">About Me</h2>
          <p>Developer with a strong background in manufacturing and engineering, offering a unique perspective that bridges the gap between technology and industry-specific challenges. Skilled in leveraging cutting-edge technologies like React and Node.js to develop intuitive and scalable web applications, constantly seeking opportunities to learn and adapt to emerging trends, fostering innovation and pushing the boundaries of software development. Demonstrates a strong ability to collaborate effectively in cross-functional teams, consistently delivering results on time and exceeding project expectations.</p>
          <Resume/>
        </div>
    </div>
    )
}
