import aboutBg from "../assets/aboutbg.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function About() {
  return (
    <div>
      <h1 className="text-xl text-zinc-700 p-5 font-bold">About Real Estate</h1>

      <div className="relative w-full h-[550px] my-6">
        <img
          src={aboutBg}
          alt="About us"
          className="w-full h-full object-cover rounded-md mb-6"
        />
        <h1 className="absolute top-1/4 left-4 sm:left-20 font-bold text-4xl sm:text-6xl font-popins tracking-wide text-yellow-300 drop-shadow-lg ">
          {" "}
          <span className="text-white">Simplifying property</span> <br />{" "}
          <span className="text-green-200">management</span> and discovery <br /> for everyone .
        </h1>
      </div>
      <div className=" w-full border-t-2  text-slate-400 border-b-2 ">
        <div className="max-w-7xl mx-auto  text-xl p-3 px-2 flex flex-col   ">
          <h1 className="text-2xl font-semibold font-popins text-slate-800 text-center pb-3">
            About Real Estate
          </h1>
          <h1 className="text-sm sm:text-lg font-semibold text-slate-700 mb-3">
            Our platform helps users easily browse, list, and manage rental and
            sale properties. Whether you’re a landlord, buyer, or renter, we’ve
            built tools to make the process smooth and transparent.
          </h1>
        </div>
      </div>

      <div className="border-b-2 text-slate-400 my-5">
        <div className=" flex justify-between max-w-7xl mx-auto pb-5">
          <div className="pl-3">
            <h1 className="text-xl text-slate-600 font-mono pb-1 font-semibold">
              Features
            </h1>
            <ul className="flex flex-col gap-1 text-gray-700 text-sm cursor-pointer">
              <li> Advanced search filters for listings</li>
              <li> User profiles with saved properties</li>
              <li> Easy property listing and editing</li>
              <li> Secure authentication and user management</li>
              <li> Mobile responsive</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl text-slate-600 font-mono pb-1 font-semibold">
              Tech Stack
            </h1>
            <ul className="flex flex-col gap-1 text-gray-700 text-sm cursor-pointer">
              <li>React</li>
              <li>Node</li>
              <li>MongoDB</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-slate-700 text-md sm:text-lg mt-4 px-8 text-center">
        <span className="  text-red-500">This</span> platform was built{" "}
        <span className="text-blue-700">with</span> passion by a solo developer
        who loves crafting clean, functional, and fun web experiences.{" "}
        <span className="text-red-500">Every</span> feature, bug fix, and line
        of code? <span className="text-red-500">Yep</span>— all me! 💻🚀
      </p>

      <p className="text-slate-700 text-md sm:text-lg p-8 text-center">This project is open source! <span className="text-green-700">Contributions</span>, <span className="text-green-700">issues</span>, and <span className="text-green-700">stars</span> are always welcome — check it out on {' '}
         <a href="https://github.com/deepanshurwt06/estate-management" target="_blank" rel="noopener noreferrer" >
         
         <span className="text-blue-700 hover:underline cursor-pointer"> GitHub </span>🚀
         
         </a>
        
     </p>

      <div className="w-full h-[90px] bg-slate-700 ">
        
        <div className="  flex justify-evenly items-center h-full">
          <h1 className="text-white text-md ">Contact us :</h1>
          <a
            href="mailto:uprisingnoob006@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-2xl text-white hover:text-blue-600 transition duration-300 "/>
          </a>
          <a
            href="https://github.com/deepanshurwt06"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-white hover:text-blue-600 transition duration-300 "/>
          </a>
          <a
            href="https://www.linkedin.com/in/deepanshu-rawat06/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-white hover:text-blue-600 transition duration-300 "/>
          </a>
        </div>
      </div>
    </div>
  );
}
