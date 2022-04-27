import React from 'react'
import Resume from '../assets/Bactol-Carlo-Resume.pdf'


function Home() {
  return (
    <div id="home" className="w-full h-[100vh] flex justify-center items-center  bg-white-400 mb:flex mb:justify-center mb:items-center mb-4">
        <div className="flex-col text-black justify-center px-3">
            <span className="text-2xl mb:text-base">Hi👋, </span>
            <span className="text-2xl ">my name is</span>
           <div className="flex">
           <h1 className="text-5xl md:text-8xl">Carlo Bactol</h1>
           <span className="text-3xl mt-2 md:text-6xl mb:mt-4 lg:mt-4">🕵</span>
           </div>
            <h3 className="text-3xl md:text-5xl">I am a full-stack developer 💻</h3>
            <div className="flex justify-center">
            <a type="button" className="inline-block mt-4 px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xl leading-tight uppercase rounded-full hover:bg-pink-400 hover:bg-opacity-2 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" href={Resume} download>Download my resume</a>
            </div>
        </div>
    </div>

    
  )
}

export default Home