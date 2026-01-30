// components/Home.js

import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Footer from "./footer";
import UpcomingEvent from "./upcomingEvent";
import AfterEvent from "./AfterEvent";
import Video from "./videoPart";
// 1. IMPORT THE NEW COMPONENT HERE
import HorizontalGallery from "./HorizontalGallery"; 

export default function Home({show}) {

  return (
    <>
      <div className="min-h-fit pb-4 sm:pb-0 w-full bg-[#0e0e0e] relative text-[#eceae5] pt-3 font-[Neue]">
        <Nav />
        <div>
          <h1 className="font-[Socilo] lg:text-[28vw] lg:pl-5 xl:text-[30vw] sm:text-[28vw] md:text-[28vw] text-[28vw] leading-none tracking-wide lg:pt-24 sm:pt-18 md:pt-15 pt-10 text-center ">
            Club
          </h1>
        </div>
      </div>

      <UpcomingEvent />
      
      {/* 2. ADD THE COMPONENT HERE */}


      <AfterEvent />
      <Video />
      
      <div className="lg:min-h-[60vh] min-h-[40vh] sm:min-h-[60vh] md:min-h-[60vh] w-full bg-black text-[#eceae5] pt-3 font-[Neue]">
      <HorizontalGallery />
        
        <Footer />

      </div>
    </>
  );
}