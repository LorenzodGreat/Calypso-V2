import React from 'react';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
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

        <Carousel.Slide ><div className='relative'><img className='w-full shadow-xl relative' src={Slide1} alt="" /><div className='absolute hidden md:flex lg:flex bottom-28 left-[3rem]'><button className='text-red-500'>here</button></div></div></Carousel.Slide>
        <Carousel.Slide ><div className='relative'><img className='w-full shadow-xl relative' src={Slide2} alt="" /><div className='absolute hidden md:flex lg:flex bottom-28 left-[3rem]'><button className='text-red-500'>here</button></div></div></Carousel.Slide>
        <Carousel.Slide ><div className='relative'><img className='w-full shadow-xl relative' src={Slide3} alt="" /><div className='absolute hidden md:flex lg:flex bottom-28 left-[3rem]'><button className='text-red-500'>here</button></div></div></Carousel.Slide>
        
        {/* ...other slides */}
      </Carousel>
  );
}