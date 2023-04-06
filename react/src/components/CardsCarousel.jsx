import React from 'react';
import '../assets/Card.css';
import Low from '../img/slides/low.png'
import Lowrate from '../img/slides/lowrate.png'
import Slide1 from '../img/slides/slide1.jpg'
import Slide2 from '../img/slides/slide2.jpg'
import Slide3 from '../img/slides/slide3.jpg'

export default function CardsCarousel() {

  return (
    <section className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8 pt-16">

      <section class='galeria'>
        <input type="radio" id="uno" value="1" name="tractor" checked='checked' />
        <input type="radio" id="dole" value="2" name="tractor" />
        <input type="radio" id="tele" value="3" name="tractor" />
        <article class='card una overscroll-none'>
          {/* <div className='relative'> */}
          <img className='w-full shadow-xl relative' src={Slide1} alt="" />
          <div className='absolute md:flex lg:flex top-8 left-8 md:top-[2rem] md:left-[9rem] lg:top-[12rem] lg:left-[9rem]'>
            <div className='w-[20vh] sm:w-[80vh] lg:w-[80vh] md:w-[80vh] space-y-4'>
              <div className='h-max lg:space-y-6 md:space-y-6'>
                <h1 className=' text-[#f9ac8d] font-semibold text-lg sm:text-6xl md:text-6xl lg:text-6xl'>Global Logistic</h1>
                <p className='text-white h-max text-[0.5rem] md:text-xl lg:text-xl max-w-md sm:text-xs font-base lg:pt-6'>Trusted way to transport all your goods from there to here.
                  Providing the most realiable, hassle-free, with full transparency, customer centric shipping experience.</p>
              </div>
              <div className='flex lg:pt-2 space-x-4'>
                <a href="https://cal.tasoko.com/register"> <button className='text-white font-semibold w-[10vh] sm:w-[50vh] md:w-[50vh] lg:w-[50vh] text-[0.5rem] sm:text-base md:text-base lg:text-base bg-gradient-to-tr from-[#f42888] via-[#c831bb87] to-[#8010f8] hover:scale-125 transition-all duration-300 hover:bg-[#8010f8] md:px-4 md:py-2 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full border ring ring-[#8010f8]'>Register Now</button></a>
              </div>
            </div>
          </div>
          {/* </div> */}
          <label for='dole' class='entypo-left-bold otra'></label>
          <label for='tele' class='entypo-right-bold otra'></label>
          <label for='uno' class='entypo-arrows-ccw afin'></label>
        </article>

        <article class='card dos'>
          <img className='w-full shadow-xl relative' src={Slide2} alt="" />
          <div className='absolute md:flex lg:flex top-6 left-8 md:top-[4rem] md:left-[9rem] lg:top-[4rem] lg:left-[9rem]'>
            <div className='w-[25vh] sm:w-[80vh] lg:w-[80vh] md:w-[80vh] space-y-4'>
              <div className='md:flex lg:flex flex'>
                <img src={Low} className="w-[8vh] md:block lg:block sm:w-[50vh] md:w-[50vh] lg:w-[50vh]" alt="opps" />
                <img src={Lowrate} className="w-[4vh] h-[4vh] ml-6 md:block lg:block sm:h-[30vh] md:h-[30vh] lg:h-[30vh] sm:w-[30vh] md:w-[30vh] lg:w-[30vh]" alt="opps" />
              </div>
              <div className='h-max'>
                <p className='text-white h-max text-[0.5rem] md:text-2xl lg:text-2xl sm:text-2xl font-base'>Register today and receive 15% off your first shipment.</p>
              </div>
              <div className='flex lg:space-x-8 md:space-x-8 sm:space-x-8 space-x-4'>
                <button className='text-white font-semibold w-[10vh] sm:w-[50vh] md:w-[50vh] lg:w-[50vh] text-[0.45rem] sm:text-base md:text-base lg:text-base  bg-gradient-to-tr from-[#f42888] via-[#c831bb87] to-[#8010f8] hover:scale-125 transition-all duration-300 hover:bg-[#8010f8] md:px-4 md:py-2 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full border ring ring-[#8010f8]'><a href="/Rates">See Rates</a></button>
                <button className='text-white font-semibold w-[10vh] sm:w-[50vh] md:w-[50vh] lg:w-[50vh] text-[0.45rem] sm:text-base md:text-base lg:text-base hover:scale-125 transition-all duration-300 md:px-4 md:py-2 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full border ring ring-[#8010f8]'><a href="https://cal.tasoko.com/register">Register Now</a></button>
              </div>
            </div>
          </div>
          <label for='tele' class='entypo-left-bold otra'></label>
          <label for='uno' class='entypo-right-bold otra'></label>
          <label for='dole' class='entypo-arrows-ccw afin'></label>
        </article>

        <article class='card tres'>
          <img className='w-full shadow-xl relative' src={Slide3} alt="" />
          <div className='absolute md:flex lg:flex top-6 left-8 md:top-[4rem] md:left-[9rem] lg:top-[16rem] lg:left-[9rem]'>
            <div className='w-[25vh] sm:w-[80vh] lg:w-[80vh] md:w-[80vh] space-y-4'>
              <div className='h-max space-y-2 md:space-y-8 lg:space-y-8'>
                <h1 className=' text-[#1ba0bb] font-semibold text-lg sm:text-6xl md:text-6xl lg:text-6xl'>Shop Calypso</h1>
                <p className='text-white h-max text-[0.5rem] md:text-2xl lg:text-2xl sm:text-2xl font-base'>Visit our online store for the best affordable gifts, latest electronics, appliances and more. </p>
              </div>
              <div className='flex lg:space-x-8 md:space-x-8 sm:space-x-8 space-x-2'>
                <a href="/Store"> <button className='text-white font-semibold w-[10vh] sm:w-[50vh] md:w-[50vh] lg:w-[50vh] text-[0.5rem] sm:text-base md:text-base lg:text-base  bg-[#de4dc2] hover:scale-125 transition-all duration-300 hover:bg-[#1ba0bb] md:px-4 md:py-2 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full border ring ring-[#de4dc2] hover:ring-[#de4dc2]'>Our Store</button></a>
              </div>
            </div>
          </div>
          <label for='uno' class='entypo-left-bold otra'></label>
          <label for='dole' class='entypo-right-bold otra'></label>
          <label for='tele' class='entypo-arrows-ccw afin'></label>
        </article>
      </section>
    </section>
  );
}