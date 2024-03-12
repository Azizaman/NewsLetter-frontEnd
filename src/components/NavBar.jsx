import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export function NavBar() {
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        
        <div className="text-white">
            
            <ul className="flex justify-end">
            <h1 className="font-bold w-full text-3xl text-[#00df9a] m-4">React.</h1>
            
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contacts</li>
                <div onClick={handleNav} className="pt-4 p-4">
                {!nav ? <FiMenu size={25}/> : <IoMdClose size={25}/>}
            </div>
            </ul>
            {/* <div onClick={handleNav}>
                {!nav ? <FiMenu size={25}/> : <IoMdClose size={25}/>}
            </div> */}
            
            {nav && (
                <ul className="absolute top-0 right-0 mt-12 mr-4 bg-[#000300] border border-gray-600 rounded-lg">
                   
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4 border-b border-gray-600">Contacts</li>
                </ul>
            )}
        </div>
    );
}

