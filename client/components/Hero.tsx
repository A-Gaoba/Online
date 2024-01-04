import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Button from "./Button";


const Hero = () => {
  return (
    <div className="container mx-auto my-2 p-4">
      <div className="bg-[#e9edc9] px-6 lg:px-16 py-4 rounded-3xl ">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center mt-8 items-center gap-5 lg:gap-10 2xl:p-24 xl:p-10">
          <div className="flex flex-col justify-center lg:w-1/2 gap-6 md:gap-10">
            <p className="text-2xl sm:text-4xl md:text-5xl font-bold">
              Igniting Minds, Inspiring Futures
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              At <span className="font-bold">ALNAHDAH SCHOOL</span>, we ignite curiosity and shape futures. With
              devoted educators and an environment fostering innovation, we
              empower students to grow, collaborate, and excel. Join our
              transformative educational journey, where every student&apos;s
              potential is unleashed.
            </p>
            
            <Button
              type="button"
              title="Get Started"
              variant="btn_green"
            />
          </div>
          <div className="lg:w-1/2">
            {/* <img src="/assets/hero.png" alt="" className="w-full h-auto" /> */}
            <Image src="/heroImage.png" alt="hero image" layout="responsive" width={190} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
