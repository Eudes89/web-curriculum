
import ProfilePhoto from "@/components/profilePhoto";
// import bgMobile from '../public/videos/sky-mobile.mp4';
import Menu from "@/components/menu";
// import bgPc from '../public/videos/earth-pc.mp4';


export default function Home() {
  
  return (
    
    <main className="flex flex-col items-center h-screen
    overscroll-x-none overflow-x-hidden">
      
      
      <div className="w-auto h-auto flex justify-center items-center" >
        <iframe src="https://player.vimeo.com/video/840283461?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameborder="0" allow="autoplay; loop; muted"
        className="fixed -z-10 min-h-[2160px] min-w-[3840px]"
        title="earth-pc">
          </iframe>
      </div>
      
      {/* <video 
        src="https://vimeo.com/840283518?share=copy"
        autoPlay loop muted
        className="fixed min-w-[600px] min-h-screen
        w-auto h-auto -z-10
        md:hidden lg:hidden xl:hidden"
      /> */}

      

      {/*  */}
      
      <ProfilePhoto>

        <Menu />
        
      </ProfilePhoto>

    </main>
  )
}
