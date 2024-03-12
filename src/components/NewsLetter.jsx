import React from "react";
import {Input,button} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
export function NewsLetter(){
    return(
        <div className="bg-black flex text-white justify-around w-full py-48">
            <div >
                <h1 className="font-bold text-3xl">Want tips & tricks to optimize your flow?</h1>
                <p>sign up to our newsletter and stay up to date </p>

            </div>
            <div>
            <div className="flex px-2 p-4 justify-center space-x-6 " >
            <Input className="bg-white text-black h-9 rounded-xl px-4 " type="email" placeholder="Enter your email" />
            <button className="bg-[#00df9a] w-60 rounded-md font-medium py-2 h-9 text-black">Get Started</button>
            
            </div>
            <p className="p-2">we care about your privacy.Read our <span className="text-[#00df9a]">privacy policy.</span></p>
            </div>
            
            
        </div>
        

    )
}