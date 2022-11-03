import React from 'react';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import Low from '../img/low.png'
import Slide1 from '../img/slide1.jpg'
import Slide2 from '../img/slide2.jpg'
import Slide3 from '../img/slide3.jpg'

export default function CardsCarousel() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <Carousel
      sx={{ maxWidth: '' }}
      mx="auto"
      withIndicators
      withControls='true'
      maxWidth={'full'}
      // height={600}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
   
      <Carousel.Slide ><div className='relative'>
        <img className='w-full shadow-xl relative' src={Slide1} alt="" />
        <div className='absolute md:flex lg:flex top-20 left-8 md:top-[4rem] md:left-[9rem] lg:top-[4rem] lg:left-[9rem]'>
          <div className='w-[25vh] sm:w-[80vh] lg:w-[80vh] md:w-[80vh] space-y-4'>
            <div className='h-max'>
              <h1 className=' text-[#f9ac8d] font-semibold text-lg sm:text-6xl md:text-6xl lg:text-6xl'>Global Logistic</h1>
              <p className='text-white h-max text-[0.5rem] md:text-2xl lg:text-2xl sm:text-2xl font-base'>Trusted way to transport all your goods from there to here.
                Providing the most realiable, hassle-free, with full transparency, customer centric shipping experience.</p>
            </div>
            <div className='flex lg:space-x-8 md:space-x-8 sm:space-x-8 space-x-4'>
              <a href="https://cal.tasoko.com/register"> <button className='text-white font-semibold w-[10vh] sm:w-[50vh] md:w-[50vh] lg:w-[50vh] text-[0.25rem] sm:text-base md:text-base lg:text-base  bg-gradient-to-tr from-[#f42888] via-[#c831bb87] to-[#8010f8] hover:scale-125 transition-all duration-300 hover:bg-[#8010f8] md:px-4 md:py-2 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full border ring ring-[#8010f8]'>Register Now</button></a>
              <a href="/Contact"> <button className='text-white font-semibold w-[10vh] sm:w-[50vh] md:w-[50vh] lg:w-[50vh] text-[0.25rem] sm:text-base md:text-base lg:text-base hover:scale-125 transition-all duration-300 md:px-4 md:py-2 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full border ring ring-[#8010f8]'>Contact Us</button></a>
            </div>
          </div>
        </div>
      </div>
      </Carousel.Slide>
      <Carousel.Slide ><div className='relative'>
        <img className='w-full shadow-xl relative' src={Slide2} alt="" />
        <div className='absolute md:flex lg:flex top-20 left-8 md:top-[4rem] md:left-[9rem] lg:top-[4rem] lg:left-[9rem]'>
          <div className='w-[40vh] sm:w-[80vh] lg:w-[80vh] md:w-[80vh] space-y-4'>
            <div>
              <img src={Low} className="w-[10vh] md:block lg:block sm:w-[50vh] md:w-[50vh] lg:w-[50vh]" alt="opps" />
            </div>
            <div className='h-max'>
              <p className='text-white h-max text-[0.5rem] md:text-2xl lg:text-2xl sm:text-2xl font-base'>Introductory rate low rate of $3.50USD. Register today and receive 15% off your first shipment.</p>
            </div>
            <div className='flex lg:space-x-8 md:space-x-8 sm:space-x-8 space-x-4'>
              <button className='text-white font-semibold w-[10vh] sm:w-[50vh] md:w-[50vh] lg:w-[50vh] text-[0.25rem] sm:text-base md:text-base lg:text-base  bg-gradient-to-tr from-[#f42888] via-[#c831bb87] to-[#8010f8] hover:scale-125 transition-all duration-300 hover:bg-[#8010f8] md:px-4 md:py-2 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full border ring ring-[#8010f8]'><a href="https://cal.tasoko.com/register">Register Now</a></button>
              <button className='text-white font-semibold w-[10vh] sm:w-[50vh] md:w-[50vh] lg:w-[50vh] text-[0.25rem] sm:text-base md:text-base lg:text-base hover:scale-125 transition-all duration-300 md:px-4 md:py-2 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full border ring ring-[#8010f8]'><a href="https://cal.tasoko.com/register">Contact Us</a></button>
            </div>
          </div>
        </div>
      </div>
      </Carousel.Slide>

    </Carousel>
  );
}