
import ProfilePhoto from "@/components/profilePhoto";
// import bgMobile from '../public/videos/sky-mobile.mp4';
import Menu from "@/components/menu";
// import bgPc from '../public/videos/earth-pc.mp4';


export default function Home() {
  
  return (
    
    <main className="flex flex-col items-center h-screen
    overscroll-x-none overflow-x-hidden">
      
      <iframe 
      src="https://player.vimeo.com/video/840283461?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
      width="3840" height="2160" 
      title="earth-pc" className="fixed min-w-[600px] min-h-screen
      w-auto h-auto -z-10
      md:hidden lg:hidden xl:hidden"
      autoplay loop muted>

      </iframe>
        
     
      
      {/* <video 
        src={bgMobile}
        autoPlay loop muted
        className="fixed min-w-[600px] min-h-screen
        w-auto h-auto -z-10
        md:hidden lg:hidden xl:hidden"
      /> */}

      <iframe 
      src="https://player.vimeo.com/video/840283518?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
      width="1440" height="2160" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen title="sky-mobile" className="hidden
      2xl:flex xl:flex lg:flex md:flex
      fixed min-w-[1840px] min-h-[960px] w-auto h-auto
      -z-10 2xl:min-w-[3840px] 2xl:min-h-[2160]
      3xl:min-w-[3840px] 3xl:min-h-[2160]
      xl:min-w-[2240px] xl:min-h-[1600]">
      
      </iframe>

      {/* <video
        src={bgPc}
        autoPlay loop muted
        className="hidden
        2xl:flex xl:flex lg:flex md:flex
        fixed min-w-[1840px] min-h-[960px] w-auto h-auto
        -z-10 2xl:min-w-[3840px] 2xl:min-h-[2160]
        3xl:min-w-[3840px] 3xl:min-h-[2160]
        xl:min-w-[2240px] xl:min-h-[1600]"
      
      /> */}
      
      <ProfilePhoto>

        <Menu />
        
      </ProfilePhoto>

    </main>
  )
}
