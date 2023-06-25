import ProfilePhoto from "@/components/profilePhoto";
import bgMobile from '../public/videos/sky-mobile.mp4';
import Menu from "@/components/menu";

export default function Home() {
  return (
    
    <main className="flex flex-col items-center">
      
      {/* background video MOBILE */}
      <video 
        src={bgMobile}
        autoPlay loop muted
        className="fixed min-w-[600px] min-h-screen
        w-auto h-auto overscroll-y-auto -z-10"
      />

      <ProfilePhoto>

        <Menu />
        
      </ProfilePhoto>

    </main>
  )
}
