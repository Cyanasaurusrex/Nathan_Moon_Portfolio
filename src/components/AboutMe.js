"use Client";
import Image from "next/image";

export default function AboutMe() {
  return(
    <div className="flex flex-col sm:flex-row m-4 mb-8 mx-auto max-w-[1400px] bg-brand-secondary p-4 rounded-lg hover:bg-brand-teriary">
      <div className="mx-auto my-auto flex-shrink-0">
      <Image
        className="sm:h-auto rounded-lg"
        src="/images/headshot.png"
        width={150}
        height={150}
        />
      </div>
        <div className="m-4">
          <h1>About Me</h1>
          <p>Developer with a strong background in manufacturing and engineering, offering a unique perspective that bridges the gap between technology and industry-specific challenges. Skilled in leveraging cutting-edge technologies like React and Node.js to develop intuitive and scalable web applications, constantly seeking opportunities to learn and adapt to emerging trends, fostering innovation and pushing the boundaries of software development. Demonstrates a strong ability to collaborate effectively in cross-functional teams, consistently delivering results on time and exceeding project expectations.</p>
        </div>
    </div>
    )
}
