
import ProfilePhoto from "@/components/profilePhoto";
// import bgMobile from '../public/videos/sky-mobile.mp4';
import Menu from "@/components/menu";
// import bgPc from '../public/videos/earth-pc.mp4';


export default function Home() {
  
  return (
    
    <main className="flex flex-col items-center h-screen
    overscroll-x-none overflow-x-hidden">
      
      
      <iframe src="https://player.vimeo.com/video/840283518?h=0be9a2311a" width="640" height="564"
      seamless frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>  
     
      <iframe 
      src="https://player.vimeo.com/video/840283461?h=f8c1667088" width="640" height="564" 
      seamless frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
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
