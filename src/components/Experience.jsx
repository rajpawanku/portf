import React from "react";
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import redux from "../assets/redux.png"
import typescript from "../assets/typescript.png"
import express from "../assets/express.png"
import node from "../assets/node.png"
import mongodb from "../assets/mongodb.png"
import github from "../assets/github.png";

const Experience = () => {
  
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen '>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-pink-800 inline'>Skills</p>
            <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={css} alt="CSS icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={javascript} alt="JAVASCRIPT icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={reactImage} alt="REACT icon" />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={redux} alt="REDUX icon" />
                <p className='my-4'>REDUX</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={typescript} alt="TYPESCRIPT icon" />
                <p className='my-4'>TYPESCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={node} alt="NODE icon" />
                <p className='my-4'>NODE</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={mongodb} alt="MONGODB icon" />
                <p className='my-4'>MONGODB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={express} alt="EXPRESS icon" />
                <p className='my-4'>EXPRESS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={github} alt="GITHUB icon" />
                <p className='my-4'>GITHUB</p>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Experience;
