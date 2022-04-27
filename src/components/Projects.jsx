import React, {useState} from 'react'

function Projects() {


  return (
   <div id="projects" className="flex flex-col justify-center h-[100%] relative">
     <h2 className="text-4xl py-8 text-center mt-4">Projects</h2>
     <div className="w-full h-full lg:h-[100%]  grid lg:grid-cols-3">
      <div className="shadow flex flex-cols m-4 w-auto lg:w-auto h-[200px] lg:h-[300px] relative">
        <a href="#!">
          <img className="absolute inset-0 w-full h-full object-cover" src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/279108859_3198925103722081_8253677170800460798_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHnfw8E-x_rIi1C1YbKINikju1FkAjw4M-O7UWQCPDgz5aD7BqPXfkM-HGu1DLVqcZSMeyvv8Ec1gdU4gbyVHge&_nc_ohc=0NjzQB9t5A4AX_OpYIV&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT8h9RUZ_mmU8nT26cUEmsXklafGwBoRIv_leWRN4CwIEw&oe=626C575D" alt="" />
        </a>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="flex flex-col justify-center items-center w-full h-full gap-2 z-10">
        <div className="flex gap-2">
            <span className="text-teal-50 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">Laravel 8</span>
            <span className="text-teal-50 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">MYSQL</span>
        </div>
        <div className="flex gap-2">
            <span className="text-teal-50 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">Bootstrap 5</span>
            <span className="text-teal-50 text-md p-3 mt-2 border-4 border-pink-400 rounded outline-none shadow cursor-pointer">Source Code</span>
            <span className="text-teal-50 text-md p-3 mt-2 border-4 border-pink-400 rounded outline-none shadow cursor-pointer"><a href="https://talusan-city.herokuapp.com/" target="_blank">Demo</a></span>
        </div>
        </div>
      </div>
      <div className="shadow flex flex-cols m-4 h-[200px] lg:h-[300px] relative">
        <a href="#!">
          <img className="absolute inset-0 w-full h-full object-cover" src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/278996148_3199034277044497_3109621802537080601_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeE8x9uwapebDlGZeaaiOzk1Bxhj3A5v2QkHGGPcDm_ZCfcE4TROA9JQJG458dBhjjD8BJSyKrY0ZbUM7jSD8FSn&_nc_ohc=9c3dCoipgcEAX9ls-hI&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT_2GzAWXdrdmnxGK_3rpabxEXqJf7FOgzgkarRJUvnEJw&oe=626C429C" alt="" />
        </a>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="flex flex-col justify-center items-center w-full h-full gap-2 z-10">
          <div className="flex gap-2">
            <span className="text-teal-50 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">Client Project</span>
            <span className="text-teal-50 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">Core PHP</span>
            <span className="text-teal-50 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">MYSQL</span>
          </div>
            <div className="flex gap-2">
              <span className="text-teal-50 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">HTML/CSS/JS</span>
              <span className="text-teal-50 text-md p-3 mt-2 border-4 border-pink-400 rounded outline-none shadow cursor-pointer"><a href="https://client-2022-paging-system.000webhostapp.com/Mirror/1Home.php" target="_blank">Demo</a></span>
            </div>
        </div>
      </div>
      <div className="shadow flex flex-cols m-4 h-[200px] lg:h-[300px] relative">
        <a href="#!">
          <img className="absolute inset-0 w-full h-full object-cover" src="https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/278985643_3199048347043090_5709723865325438203_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEdoXJWnH9G7Q6biq-T1Ws26AxeAz0K3ejoDF4DPQrd6Ap-GruA1BNq6jH5rB6zrdXSGTcsf9gyDP45QNhpGd8O&_nc_ohc=NLS8VRcdEhAAX8lkOes&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT8BTTFRxPaSinGqliPhPiCHyKD0bAFPh1fZvsz7K5QdGQ&oe=626D7B7E" alt="" />
        </a>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="flex justify-center items-center w-full h-full gap-2 z-10">
        <span className="text-teal-50 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">E-commerce | Comming Soon</span>
        </div>
      </div>
      <div className="shadow flex flex-cols m-4 h-[200px] lg:h-[300px] relative">
        <a href="#!">
          <img className="absolute inset-0 w-full h-full object-cover" src="https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/278985643_3199048347043090_5709723865325438203_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEdoXJWnH9G7Q6biq-T1Ws26AxeAz0K3ejoDF4DPQrd6Ap-GruA1BNq6jH5rB6zrdXSGTcsf9gyDP45QNhpGd8O&_nc_ohc=NLS8VRcdEhAAX8lkOes&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT8BTTFRxPaSinGqliPhPiCHyKD0bAFPh1fZvsz7K5QdGQ&oe=626D7B7E" alt="" />
        </a>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="flex justify-center items-center w-full h-full gap-2 z-10">
        <span className="text-teal-50 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">Tiktok Clone | Comming Soon</span>
        </div>
      </div>
      <div className="shadow flex flex-cols m-4 h-[200px] lg:h-[300px] relative">
        <a href="#!">
          <img className="absolute inset-0 w-full h-full object-cover" src="https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/278985643_3199048347043090_5709723865325438203_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEdoXJWnH9G7Q6biq-T1Ws26AxeAz0K3ejoDF4DPQrd6Ap-GruA1BNq6jH5rB6zrdXSGTcsf9gyDP45QNhpGd8O&_nc_ohc=NLS8VRcdEhAAX8lkOes&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT8BTTFRxPaSinGqliPhPiCHyKD0bAFPh1fZvsz7K5QdGQ&oe=626D7B7E" alt="" />
        </a>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="flex justify-center items-center w-full h-full gap-2 z-10">
        <span className="text-teal-50 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">Netflix Clone | Comming Soon</span>
        </div>
      </div>
      <div className="shadow flex flex-cols m-4 h-[200px] lg:h-[300px] relative">
        <a href="#!">
          <img className="absolute inset-0 w-full h-full object-cover" src="https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/278985643_3199048347043090_5709723865325438203_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEdoXJWnH9G7Q6biq-T1Ws26AxeAz0K3ejoDF4DPQrd6Ap-GruA1BNq6jH5rB6zrdXSGTcsf9gyDP45QNhpGd8O&_nc_ohc=NLS8VRcdEhAAX8lkOes&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT8BTTFRxPaSinGqliPhPiCHyKD0bAFPh1fZvsz7K5QdGQ&oe=626D7B7E" alt="" />
        </a>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="flex justify-center items-center w-full h-full gap-2 z-10">
        <span className="text-teal-50 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">Facebook Clone | Comming Soon</span>
        </div>
      </div>

    </div>
   </div>
  )
}

export default Projects