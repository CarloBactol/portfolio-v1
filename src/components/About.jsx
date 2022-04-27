import React from 'react'

function About() {
  return (
    <div id="about" className="w-full h-[100%] lg:h-[100vh] grid lg:grid-cols-2 lg:gap-2">
        <div className="border m-2 shadow justify-center items-center flex flex-col relative">
            <img className="absolute inset-0 w-full h-full object-cover" src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/279030323_3198430433771548_5171207194476712298_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeE-s47wx0A2ws4IgzMUOs3piQ9Q7BW6YU-JD1DsFbphT8-n677jxsxnUZ9WebUc8tfeBJLResF54SC3d7FsLEsW&_nc_ohc=Mr7pbcEyDTEAX9JFVel&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT_lfs7VEtsse_WmYH2Hwd9iTfmc22CNF2E6iypn4fohlw&oe=626B21E3" alt="" />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
            <h2 className="text-4xl text-teal-50 text-center py-3 lg:py-2 z-10">About Me</h2>
            <p className="text-md md:text-2xl lg:text-2xl text-teal-50 p-6 md:p-4 lg:p-4 italic tracking-wider z-10" >"Experienced Web Developer with a demonstrated history of working in the information technology and services industry. Strong engineering professional with a Bachelor's degree focused in Information Technology from Access Computer College."</p>
        </div>
        <div className="border shadow m-2">
            <h2 className="text-4xl text-center py-2">Skills</h2>
            <div className="flex flex-col px-5">
                <h2 className="text-3xl">Languages</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-center">
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-pink-400 rounded outline-none shadow">PHP</span>
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-pink-400 rounded outline-none shadow">javascript</span>
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-pink-400 rounded outline-none shadow">HTML/CSS</span>
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">MYSQL</span>
                </div>
            </div>
            <div className="flex flex-col px-5 mt-4">
                <h2 className="text-3xl">Framework/Libraries</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 text-center lg:grid-cols-5 gap-2">
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-pink-400 rounded outline-none shadow">Laravel</span>
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-pink-400 rounded outline-none shadow">Vue</span>
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-pink-400 rounded outline-none shadow">React</span>
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">Tailwind</span>
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">Bootstrap</span>
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">Node</span>
                </div>
            </div>
            <div className="flex flex-col px-5 mt-4 mb-3">
                <h2 className="text-3xl">Tools</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 text-center lg:grid-cols-4 gap-2">
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-pink-400 rounded outline-none shadow">VS Code</span>
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-pink-400 rounded outline-none shadow">Github</span>
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-pink-400 rounded outline-none shadow">Git Bash</span>
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-pink-400 rounded outline-none shadow">Heroku</span>
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-pink-400 rounded outline-none shadow">Hostinger</span>
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">Canva</span>
                <span className="text-gray-900 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">Figma</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About