import React from 'react';
import Modal from './Modal';

class ProjectTwo extends React.Component {
    render() {
        this.state = [
            {
            'id': '1',
            'Image': 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/279108859_3198925103722081_8253677170800460798_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHnfw8E-x_rIi1C1YbKINikju1FkAjw4M-O7UWQCPDgz5aD7BqPXfkM-HGu1DLVqcZSMeyvv8Ec1gdU4gbyVHge&_nc_ohc=0NjzQB9t5A4AX_OpYIV&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT8h9RUZ_mmU8nT26cUEmsXklafGwBoRIv_leWRN4CwIEw&oe=626C575D', 
            'Laravel': 'Laravel',
            'MYSQL': 'MYSQL',
            'Bootstrap': 'Bootstrap',
            },
            {
            'id': '2',
            'Image': 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/279108859_3198925103722081_8253677170800460798_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHnfw8E-x_rIi1C1YbKINikju1FkAjw4M-O7UWQCPDgz5aD7BqPXfkM-HGu1DLVqcZSMeyvv8Ec1gdU4gbyVHge&_nc_ohc=0NjzQB9t5A4AX_OpYIV&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT8h9RUZ_mmU8nT26cUEmsXklafGwBoRIv_leWRN4CwIEw&oe=626C575D', 
            'description': 'hello',
            'age': '22'
            },
            {
            'id': '3',
            'Image': 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/279108859_3198925103722081_8253677170800460798_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHnfw8E-x_rIi1C1YbKINikju1FkAjw4M-O7UWQCPDgz5aD7BqPXfkM-HGu1DLVqcZSMeyvv8Ec1gdU4gbyVHge&_nc_ohc=0NjzQB9t5A4AX_OpYIV&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT8h9RUZ_mmU8nT26cUEmsXklafGwBoRIv_leWRN4CwIEw&oe=626C575D', 
            'description': 'hello',
            'age': '22'
            },
        ];
    
        return (
            <div className="flex flex-col w-full h-screen text-black">
                <h2 className="text-4xl text-black py-4 text-center">Projects</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 m-2 hover:cursor-pointer">
                {this.state.map((User) => {
                    return (
                        <div key={User.id} className="flex relative shadow border h-[200px] lg:h-[300px]">
                            <img className="absolute inset-0 w-full h-full object-cover" src={User.Image} alt="Talusan"  />
                            <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
                            <div className="flex justify-center items-center w-full h-full gap-2 z-10">
                                <span className="text-teal-50 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">{User.Laravel}</span>
                                <span className="text-teal-50 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">{User.MYSQL}</span>
                                <span className="text-teal-50 text-md p-3 mt-2 border-4 border-blue-400 rounded outline-none shadow">{User.Bootstrap}</span>
                            </div>
                        </div>
                    )
                })}
                </div>
                {/* <Modal /> */}
            </div>
        );
    }
}

export default ProjectTwo 