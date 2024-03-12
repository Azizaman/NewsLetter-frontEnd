import React from "react";
import Laptop from "../assets/laptop.jpg";

export function Analytics() {
    return (
        <div className="w-full bg-white py-16 px-8 flex flex-wrap items-center">
            <div className="max-w-[1240px] mx-auto flex-1 flex justify-center md:justify-start">
                <img className="max-h-96 md:w-auto md:h-auto" src={Laptop} alt="Laptop" />
            </div>
            <div className="flex-1 px-3">
                <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analysts Centrally</h1>
                <p className="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at voluptates cupiditate nobis totam fugit aliquam iusto rem sapiente ea? Maiores cum cupiditate explicabo expedita quam modi impedit inventore id.</p>
                <button className="bg-black w-[200px] rounded-md font-medium py-3 text-white p-8 mx-0">Get Started</button>
            </div>
            
        </div>
    );
}
