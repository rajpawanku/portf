import React from "react";
import PawanImage from "../assets/PawanImage.jpeg";


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
        <div id="resume-link-1">
            <a href="https://drive.google.com/file/d/1zAN9Ab5Xm3o4EdHA7e-JvHdDHfXLdMSE/view?usp=sharing"
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
          <img src={PawanImage} alt="" className="w-[385px] rounded-full" />
      </div>
      </div>
    </div>
  );
};

export default Home;
        

    