import React from "react";
import Mythersa from "../assets/portfolio/mytheresa.png";
import Bewakoof from "../assets/portfolio/Bewakoof.png";
import OutLook from "../assets/portfolio/OutLook.png";
import KindMeal from "../assets/portfolio/KindMeal.png"

const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: KindMeal,
      demoLink:"https://blessed-toes-567-ten.vercel.app",
      codeLink:"https://github.com/priyankadora20/blessed-toes-567",
      about: "This Is Our team his Is Our team his Is Our team his Is Our team Is Our team his Is Our team his Is Our team"
    },
    {
      id: 2,
      src: Mythersa,
      demoLink:"https://marvelous-torrone-9bbbc5.netlify.app/index.html",
      codeLink:"https://github.com/rajpawanku/Mytheresa",
      about : "This is collaborative project of Mythressa Clone. It was completed in five days. Five members were working in this project.  Signup, login, filter, sort, cart functionality are created."
    },
    {
      id: 3,
      src: Bewakoof,
      demoLink:"https://peaceful-paprenjak-26fb40.netlify.app/",
      codeLink:"https://github.com/rajpawanku/Unit2ProjectBewakoof",
    },
    {
      id: 4,
      src: OutLook,
      demoLink:"https://moonlit-sable-152afd.netlify.app",
      codeLink:"https://github.com/rajpawanku/OutLook",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          {/* <p className="py-6">Check out some of my work right here</p> */}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,about,codeLink,demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div>{about}</div>
              <div className="flex items-center justify-center">
              <a href={demoLink}  target="_blank" rel="noreferrer">  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button></a>
                <a href={codeLink}  target="_blank" rel="noreferrer" >
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
