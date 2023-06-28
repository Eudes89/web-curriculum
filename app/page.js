
import ProfilePhoto from "@/components/profilePhoto";
// import bgMobile from '../public/videos/sky-mobile.mp4';
import Menu from "@/components/menu";
// import bgPc from '../public/videos/earth-pc.mp4';


export default function Home() {
  
  return (
    
    <main className="flex flex-col items-center h-screen
    overscroll-x-none overflow-x-hidden">
      
      
      <div className="w-auto h-auto flex justify-center items-center" >
      <iframe width="3840" height="2160" src="https://www.youtube.com/embed/FTMHpSgLMa0?controls=0" 
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen autoplay='1'
      className="2xl:min-w-[3840px] 2xl:min-h-[2160px]
      xl:min-w-[1980px] xl:min-h-[1080px]
      lg:min-w-[1260px] lg:min-h-[720px]
      md:min-w-[980px] md:min-h-[600px]">

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
