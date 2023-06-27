
import ProfilePhoto from "@/components/profilePhoto";
import bgMobile from '../public/videos/sky-mobile.mp4';
import Menu from "@/components/menu";
import bgPc from '../public/videos/earth-pc.mp4';


export default function Home() {
  
  return (
    
    <main className="flex flex-col items-center h-screen
    overscroll-x-none overflow-x-hidden">
      
      {/* background video MOBILE */}
      <video 
        src={bgMobile}
        autoPlay loop muted
        className="fixed min-w-[600px] min-h-screen
        w-auto h-auto -z-10
        md:hidden lg:hidden xl:hidden"
      />

      <video
        src={bgPc}
        autoPlay loop muted
        className="hidden
        2xl:flex xl:flex lg:flex md:flex
        fixed min-w-[1840px] min-h-[960px] w-auto h-auto
        -z-10 2xl:min-w-[3840px] 2xl:min-h-[2160]
        3xl:min-w-[3840px] 3xl:min-h-[2160]
        xl:min-w-[2240px] xl:min-h-[1600]"
      
      />
      
      <ProfilePhoto>

        <Menu />
        
      </ProfilePhoto>

    </main>
  )
}
