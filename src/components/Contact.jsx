import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
    
      name="contact"
      className="w-full h-screen bg-[#0a192f]  p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full" >
        <div className="pb-8" >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center" >
          <form
            action="https://getform.io/f/8ad2a8d7-ebd6-4be6-9355-513d7f453eb3"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              required
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
        <div style={{display:'flex',border:"",
         width:'20%',marginLeft:"30%",gap:'60px'}} >

 <a href="https://www.linkedin.com/in/pawangrk00" target="_blank">
 <FaLinkedin size={50} /></a>         
<a href="https://github.com/rajpawanku" target="_blank">
<FaGithub size={50} />
</a>

        </div>
      </div>

    </div>
  );
};

export default Contact;
