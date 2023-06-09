import React, { useEffect, useState } from "react";
import PromoVideos from "../../videos/INTRO.mp4";
import PromoVideos2 from "../../videos/INTROMOBILE.mp4";

export default function IntroVideo() {
  const [clientWidth, setClientWidth] = useState(400);

  useEffect(() => {
    setClientWidth(document.body.clientWidth);

    console.log(clientWidth);
  }, [clientWidth]);

  return (
    <>
      <div className="relative">
        <div className="w-full h-screen">
          <video
            className="w-full h-full object-cover hidden sm:block md:block lg:block "
            muted
            autoPlay
            playsInline
          >
            <source src={PromoVideos} type="video/mp4" />

          </video>

          <video
            className="w-full h-full object-cover block sm:hidden md:hidden lg:hidden "
            muted
            autoPlay
            playsInline
          >
            <source src={PromoVideos2} type="video/mp4" />

          </video>

        </div>
        <div className="fixed inset-0 mt-[70vh] grid place-content-center">
          <a
            className="inline-block hover:scale-125 hover:duration-300 rounded-full bg-gradient-to-r duration-300 from-violet-300 via-pink-500 to-sky-300 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            href="/home"
          >
            <span className="block rounded-full bg-black m-2 hover:text-black border-4 border-black text-white px-8 py-3 text-3xl sm:text-sm md:text-3xl font-medium hover:bg-transparent">
              Click To Continue
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
