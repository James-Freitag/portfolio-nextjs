import Image from "next/image";
import resumeImage from "../../public/Screenshot 2024-08-27 154153.png";
import Link from "next/link";

const MyResume = () => {
  return (
    <div className="mx-auto p-4 flex flex-col gap-4 justify-center items-center">
      <button className="text-sky-400 animate-pulse text-xl hover:scale-105 duration-150 ease-in">
        <a target="_blank" rel="noopener noreferrer" href="resume2024.pdf">
          Download &#8595;
        </a>
      </button>
      <Image src={resumeImage} alt="resume" />
    </div>
  );
};

export default MyResume;
