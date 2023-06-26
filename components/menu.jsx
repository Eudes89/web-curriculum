'use client'
import { useState } from "react";
import AboutMe from "./aboutMe";
import Knowledge from "./knowledge";
import Projects from "./projects";
import Contact from "./contact";

export default function Menu (){

    return(
        <>
            <h3 className="
             animate-flip font-bold border bg-white bg-opacity-50
             p-2 mt-2 rounded-md">
                Toque ou clique em uma das opções abaixo.
            </h3>

            <div id="menuBar"
            className="grid grid-cols-2 grid-rows-2 mx-2
            border border-white p-1 gap-2 mt-2 rounded-lg
             animate-flip ring-2 ring-blue-400 bg-blue-800
             bg-opacity-50 py-2
             lg:w-auto">

                <AboutMe />
                <Knowledge />
                <Projects />
                <Contact />

            </div> 
            

        </>
    )
}