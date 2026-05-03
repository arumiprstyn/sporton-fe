import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-3 flex flex-col md:flex-row items-center">
        
        <div className="relative self-center">
          <Image
            src="/images/img-basketball.png"
            width={360}
            height={360}
            alt="bg-basketball"
            className="grayscale absolute -left-30 -top-3" 
          />
          <div className="relative ml-20 w-full">
          <div className="text-primary italic">Friday Sale, 50%</div>
          <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
          </h1>
          <p className="max-w-lg mt-8 text-gray-700 text-lg leading-relaxed">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          
          <div className="flex gap-5 mt-10">
            <Button className="flex items-center gap-2">
              Explore More <FiFastForward />
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              Watch Video
              <Image src="/images/icon-play-video.svg" alt="icon" width={24} height={24} />
            </Button>
          </div>
        </div>
        </div>
        <div>
          <Image
            src="/images/img-hero.png"
            width={600}
            height={598}
            alt="Hero Racket"
            className="absolute -right-8 top-1/4 -translate-y-1/3"
          />
        </div>
      </div>

      <Image
        src="/images/img-ornament-hero.svg"
        width={200}
        height={200}
        alt="ornament"
        className="absolute -right-17 top-1/3 -translate-y-1/2"
      />
    </section>
  );
};
export default HeroSection;