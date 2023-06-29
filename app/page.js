
import ProfilePhoto from "@/components/profilePhoto";
import Image from "next/image";
import Menu from "@/components/menu";
import bgMobile from '../public/images/bg-mobile-image.jpg';
import bgPc from '../public/images/bg-pc-image.jpg';

export default function Home() {
  
  return (
    
    <main className="flex flex-col items-center h-screen
    overscroll-x-none overflow-x-hidden">

      <Image 
      
        src={bgMobile}
        alt="Background Image galaxy"
        className="fixed w-screen h-screen -z-10
        3xl:hidden 2xl:hidden xl:hidden lg:hidden md:hidden"

      />
      
      <Image 
      
        src={bgPc}
        alt="Background Image galaxy"
        className="hidden
        3xl:flex 3xl:fixed 3xl:w-screen 3xl:h-screen 3xl:-z-10
        2xl:flex 2xl:fixed 2xl:w-screen 2xl:h-screen 2xl:-z-10
        lg:flex lg:fixed lg:w-screen lg:h-screen lg:-z-10" 

      />

      <ProfilePhoto>

        <Menu />
        
      </ProfilePhoto>

    </main>
  )
}
