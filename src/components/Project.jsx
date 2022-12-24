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
      demoLink:"https://kindmeal-clone-website.vercel.app",
      codeLink:"https://github.com/priyankadora20/blessed-toes-567",
      about: "KindMeal.my is Malaysia's leading meat-free lifestyle platform , indulging you with delicious discounted vegetarian meals to save animals, health, environment and money.",
      tech:"React | Redux | JavaScript | Html | Css",
    },
    {
      id: 2,
      src: Mythersa,
      demoLink:"https://marvelous-torrone-9bbbc5.netlify.app/index.html",
      codeLink:"https://github.com/rajpawanku/Mytheresa",
      about : "This is collaborative project of Mythressa Clone. It was completed in five days. Five members were working in this project.  Signup, login, filter, sort, cart functionality are created.",
      tech:"Html | Css | JavaScript | BootStrap",
    },
    {
      id: 3,
      src: Bewakoof,
      demoLink:"https://peaceful-paprenjak-26fb40.netlify.app/",
      codeLink:"https://github.com/rajpawanku/Unit2ProjectBewakoof",
      about:"This is collaborative project of Bewakoof Clone.Three members were working in this project. Signup, login, cart functionality are created.",
      tech:"Html | Css | JavaScript | BootStrap",
    },
    {
      id: 4,
      src: OutLook,
      demoLink:"https://moonlit-sable-152afd.netlify.app",
      codeLink:"https://github.com/rajpawanku/OutLook",
      about:"This is Individual Project of OutLook. It was completed in five days.Login,Sign-up,Filter,Sort are created.",
      tech:"Html | Css | JavaScript | BootStrap",
    },
  ];

  return (
    <div
      name="project"
     className="bg-[#0a192f]  text-white md:h-screen "
    style={{height:"auto"}}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"  >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 px-12 sm:px-0">
          {portfolios.map(({ id, src,about,tech,codeLink,demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div style={{marginTop:'15px'}}>
                <h2 style={{marginLeft:"10px",textAlign:"left"}}>{about}</h2>
              </div>
              <div style={{height:"3rem",border:"",marginTop:'20px'}}>
                <h style={{marginLeft:"26px"}}>{tech}</h>
              </div>
              <div className="flex items-center justify-center">
              <a href={demoLink}  target="_blank" rel="noreferrer"> 
               <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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
