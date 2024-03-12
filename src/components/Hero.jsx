import React from "react"
import { ReactTyped } from "react-typed";
export function Hero(){
    return(
        <div className="text-white py-16 px-4">
            <div className="max-w-96  items-center min-h-80 mx-auto text-center flex flex-col justify-center ">
               <p className="text-[#00df9a] font-bold p-2 text-1xl">GROWING WITH DATA ANALYTICS</p>
               <h1  className="text-5xl font-bold ">Grow With data.</h1>
               <div className="flex justify-center">
                <p className="text-2xl font-bold py-4">Fast,Flexible,Financing for </p>
                <ReactTyped className="text-3xl font-bold pl-2 py-4" 
                 strings={[" BTB"," BTC"," SASS"]} typeSpeed={120} backSpeed={140} loop />
               </div>
               <p className="text-2xl font-bold text-gray-500 whitespace-nowrap py-4">Monitor your data analytics to increase revenue for BTB,BTC, and SASS platfrms</p>
               <button className="bg-[#00df9a] w-[200px] rounded-md font-medium py-3 text-black">Get Started</button>
            </div>
            

        </div>
    )
}