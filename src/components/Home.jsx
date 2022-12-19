import React from "react";
import PawanImage from "../assets/PawanImage.png";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        {/* <p className='text-pink-600'>Hi, my name is</p> */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Pawan Kumar</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Determinant full-stack web-developer with a specialization in MERN
          stack.Excellent teamwork, self-motivated and curious, with a keen
          interest in building user-centric products.{" "}
        </p>
        <div>
        <div>
            <a href="https://drive.google.com/file/d/1DRf0GnZJqaJNzyJnBATBSv5rfoxb7o8o/view?usp=sharing"
              smooth
              duration={500}
              target={"_blank"}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
              Resume
              <span className="group-hover:rotate-90 duration-300">
            </span>
              </a>
             
          </div>
        </div>
       <div className='hidden lg:flex absolute right-[90px]' >
          <img src={PawanImage} alt="" className="w-[300px] rounded-full" />
      </div>
      </div>
    </div>
  );
};

export default Home;
        

    //     <div
    //   name="home"
    //   className="h-screen w-full bg-[#0a192f]  from-black via-black to-gray-800"
    // >
    //   <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
    //     <div className="flex flex-col justify-center h-full">
    //       <h2 className="text-4xl sm:text-7xl font-bold text-white">
    //         I'm a Full Stack Developer
    //       </h2>
    //       <p className="text-gray-500 py-4 max-w-md">
    //         A full-stack web-developer with a specialization in MERN stack.
    //          I love to work on web application using technologies like
    //         React, Redux, Javascript,Bootstrap, Material UI, Html, CSS, Node JS and Mongodb.
    //       </p>

          
    //     </div>

    //     <div>
    //       <img
          
    //         src={PawanImage}
    //         alt="my profile"

    //     style={{width:"550px",height:"400px",borderRadius:"300px"}}
    //         className="rounded-2xl mx-auto w-2/3 md:w-full"
    //       />
    //     </div>
    //   </div>
    // </div>