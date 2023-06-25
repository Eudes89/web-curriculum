'use client'
import Image from "next/image";
import profilePhoto from '../public/images/circle-profile-photo.png';
import { useState } from "react";
import Typewriter from "./typewriter";

export default function ProfilePhoto ({children}) {
    
    const [classname, setClassName] = useState(false);
    const [click, setClick] = useState(false);

    function handleProfileClick(){
        
        setClassName(true);
        setClick(true);
        
        setTimeout(() => {
            setClassName(false);
        }, 1000);
        
        
    }

    return(
        
        <>
        
            <div id="profile-div" onClick={handleProfileClick}
            className= {classname ? 'mt-2 animate-wobble': 
            'mt-2'}>

                <Image
                 src={profilePhoto}
                 width={250}
                 alt="Foto de Perfil de Eudes Azevedo"
                 className="border-4 rounded-full border-blue-400"
                />

            </div>

            {click &&
                children
            }

            <Typewriter />
            
        </>
    )
}