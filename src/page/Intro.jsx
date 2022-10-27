import React from 'react'
import main from "../img/INTRO.mp4"

export default function Intro() {
  return (
    <>
      {/* <div className='relative'>
        <div className='w-screen h-screen'>
          <video className="absolute z-10 w-auto min-w-full min-h-full max-w-none" muted autoPlay controls='' >
            <source src={main} type="video/mp4" />
          </video>
        </div>
        <div className='fixed inset-0 md:ml-[100vh] mt-[75vh] grid place-content-center'>
          <a
            class="inline-block hover:scale-125 hover:duration-300 rounded-full bg-gradient-to-r duration-300 from-violet-300 via-pink-500 to-sky-300 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            href="/Home"
          >
            <span
              class="block rounded-full bg-black m-2 hover:text-black border-4 border-black text-white px-8 py-3 text-xl sm:text-sm md:text-xl font-medium hover:bg-transparent"
            >
              Click To Continue
            </span>
          </a>
        </div>
      </div> */}

      <header class="relative flex items-center justify-center h-screen overflow-hidden">
        <div class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Welcome to my site!
        </div>
        <video className='absolute z-10 w-auto min-w-full min-h-full max-w-none' muted autoPlay controls=''>
          <source src={main} type="video/mp4" />Your browser does not support the video tag.
        </video>
      </header>
    </>
  );
}