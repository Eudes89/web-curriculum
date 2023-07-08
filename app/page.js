'use client'

import ProfilePhoto from "@/components/profilePhoto";
import Image from "next/image";
import Menu from "@/components/menu";
import bgMobile from '../public/images/bg-mobile-image.jpg';
import bgPc from '../public/images/bg-pc-image.jpg';
import { useState } from "react";

export default function Home() {
  
  const [loading, setLoading] = useState(true);
  const [showPage, setShowPage] = useState(false);

  return (
    
    <main className="flex flex-col items-center h-screen
    overscroll-x-none overflow-x-hidden ">

      {loading &&
        <div className="h-screen mt-[50%]"> 
          <p className="font-bold text-xl text-white animate-twPulse
          animate-infinite bg-black p-8 rounded-full">
              CARREGANDO...
          </p> 
        </div>
      }

      
      <Image 
        src={bgMobile}
        alt="Background Image galaxy"
        className="fixed w-screen h-screen -z-10
        3xl:hidden 2xl:hidden xl:hidden lg:hidden md:hidden"
        priority={true}
        placeholder="blur"
        onLoadingComplete={() => {
          setLoading(false);
          setShowPage(true);
        }}
      />
      
      <Image 
        src={bgPc}
        alt="Background Image galaxy"
        className="hidden
        3xl:flex 3xl:fixed 3xl:w-screen 3xl:h-screen 3xl:-z-10
        2xl:flex 2xl:fixed 2xl:w-screen 2xl:h-screen 2xl:-z-10
        xl:flex xl:fixed xl:w-screen xl:h-screen xl:-z-10
        lg:flex lg:fixed lg:w-screen lg:h-screen lg:-z-10 
        md:flex md:fixed md:w-screen md:h-screen md:-z-10"
        priority={true}
        placeholder="blur"
        onLoadingComplete={() => {
          setLoading(false);
          setShowPage(true);
        }}
      />

      {showPage && 
        <ProfilePhoto>
          <Menu />
        </ProfilePhoto>
      }

    </main>
  )
}
