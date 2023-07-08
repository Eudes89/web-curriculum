'use client'
import Image from "next/image";
import profilePhoto from '../public/images/circle-profile-photo.png';
import { useState } from "react";
import Typewriter from "./typewriter";

export default function ProfilePhoto ({children}) {
    
    const [classname, setClassName] = useState(false);
    const [click, setClick] = useState(false);
    const [hiddenWrite, setHiddenWrite] = useState(true);

    function handleProfileClick(){
        
        setClassName(true);
        setClick(true);
        setHiddenWrite(false);
        
        
    }

    return(
        
        <>
        
            <div id="profile-div" onClick={handleProfileClick}
            className= {classname ? 
            'mt-16 animate-flip 2xl:mt-36 xl:mt-2 lg:mt-2 md:mt-2 sm:mt-2'
            : 
            'mt-16 2xl:mt-36 xl:mt-2 lg:mt-8 md:mt-4 sm:mt-1 animate-zoomIn'}>

                <Image
                 src={profilePhoto}
                 width={250}
                 alt="Foto de Perfil de Eudes Azevedo"
                 className="border-2 rounded-full border-purple-900 hover:cursor-pointer
                 hover:animate-headShake w-[200px] shadow-xl shadow-purple-900
                 2xl:w-[300px] xl:w-[200px] lg:w-[180px] md:w-[150px]"
                />

            </div>

            {click &&
                children
            }

            {hiddenWrite &&
                <Typewriter />
            }
            
        </>
    )
}