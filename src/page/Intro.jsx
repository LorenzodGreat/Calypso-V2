import React, { useEffect, useState } from 'react'
import main from "../img/INTRO.mp4"
import main2 from "../img/INTROMOBILE.mov"

export default function Intro() {
  const [clientWidth, setClientWidth] = useState([]);

  useEffect(() => {
    setClientWidth(document.body.clientWidth)
  }, [])

  return (
    <>
      <div className='relative'>
        <div className='w-screen h-screen'>
          <video className='w-full h-full object-cover' muted autoPlay playsInline >
            {clientWidth < 400 ? (

              <source src={main2} type="video/mp4" />
            ):(
              <source src={main} type="video/mp4" />
            )}
          </video>
        </div>
        <div className='fixed inset-0 mt-[70vh] grid place-content-center'>
          <a
            class="inline-block hover:scale-125 hover:duration-300 rounded-full bg-gradient-to-r duration-300 from-violet-300 via-pink-500 to-sky-300 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            href="/Home"
          >
            <span
              class="block rounded-full bg-black m-2 hover:text-black border-4 border-black text-white px-8 py-3 text-3xl sm:text-sm md:text-3xl font-medium hover:bg-transparent"
            >
              Click To Continue
            </span>
          </a>
        </div>
      </div>
    </>
  );
}