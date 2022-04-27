import React, {useState} from 'react'
import {FaBars, FaTimes, FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
import Logo from '../assets/carlo.png'

function Navbar() {

const [nav, setNav] = useState(false);
const handleclick = () => setNav(!nav);

  return (
    <div className="flex justify-between align-center w-full bg-slate-900 h-[80px] fixed text-2xl text-slate-200 z-20">
        <div className="flex items-center">
            <img className="top-1 absolute" src={Logo} alt="Logo" style={{height: '80px'}} />
            <h4 className="text-sm text-blue-500 absolute top-7 left-9">Carlo<span className="text-pink-500"> Bactol</span></h4>
        </div>
        {/* nava__list menu*/}
        <ul  className="hidden sm:flex md:fle">
            <li>
              <a className="nav-link text-white-500 hover:text-blue-700 focus:text-blue-700 p-0" href="#home">Home</a>
            </li>
            <li>
            <a className="nav-link text-white-500 hover:text-blue-700 focus:text-blue-700 p-0" href="#about">About</a>
            </li>
            <li>
            <a className="nav-link text-white-500 hover:text-blue-700 focus:text-blue-700 p-0" href="#projects">Projects</a>
            </li>
            <li>
            <a className="nav-link text-white-500 hover:text-blue-700 focus:text-blue-700 p-0" href="#blog">Blog</a>
            </li>
            <li>
            <a className="nav-link text-white-500 hover:text-blue-700 focus:text-blue-700 p-0" href="#contact">Contact</a>
            </li>
        </ul>

        {/* hamburger*/}
        <div onClick={handleclick} className="sm:hidden absolute top-6 right-5 cursor-pointer hover:text-blue-400">
            <FaBars />
        </div>
        
        {/* close*/}
        <div onClick={handleclick} className="sm:hidden z-10 absolute top-6 right-5 cursor-pointer hover:text-blue-400">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute w-full h-screen flex flex-col justify-center items-center bg-black bg-opacity-90'} >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>


          {/* social media*/}
          <div className="top-[60%] lg:top-[70%] flex flex-col fixed left-0 z-50">
          <ul>
            <li className=" w-[160px] h-[60px] text-gray-200 flex  ml-[-110px]  hover:ml-[-10px] duration-300 bg-blue-600">
               <a className="flex justify-between items-center text-white-400"
                href="">
                facebook <FaFacebook size="40"/>
               </a>
            </li>
            <li className=" w-[160px] h-[60px] text-gray-200 flex  ml-[-110px] hover:ml-[-10px] duration-300 bg-gray-700">
               <a className="flex justify-between items-center text-white-400"
                href="">
                github <FaGithub className="ml-7" size="40"/>
               </a>
            </li>
            <li className=" w-[160px] h-[60px] text-gray-200 flex  ml-[-110px] hover:ml-[-10px] duration-300 bg-blue-700">
               <a className="flex justify-between items-center text-white-400"
                href="">
                linkedin <FaLinkedin className="ml-3"  size="40"/>
               </a>
            </li>    
          </ul>
          </div>
    </div>
  )
}

export default Navbar