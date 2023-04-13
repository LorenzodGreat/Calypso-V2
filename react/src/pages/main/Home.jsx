import React, { useState } from 'react'
import { useEffect } from 'react';
import CardsCarousel from '../../Components/CardsCarousel';
import MainNav from '../../Components/MainNav';
import news from '../../img/news.jpg'
import amazon from '../../img/siteimage/amazon.png'
import shein from '../../img/siteimage/shein.png'
import ebay from '../../img/siteimage/ebay.png'
import ali from '../../img/siteimage/ali.png'
import f21 from '../../img/siteimage/f21.png'
import oldnavy from '../../img/siteimage/oldnavy.png'
import fn from '../../img/siteimage/fn.png'
import HM from '../../img/siteimage/HM.png'
import zara from '../../img/siteimage/zara.png'
import {
  // CalendarIcon,
  CheckIcon,
  PlusIcon,
  UsersIcon,
  ViewBoardsIcon,
  ViewListIcon,
} from '@heroicons/react/outline'
import MainFoot from '../../Components/MainFoot';
import Load from '../../components/loading';

const features = [
  {
    name: 'Air Frieght',
    description:
      'Parcels of any weight or size - Get fast delivery to Jamaica with 5-7 days. If you choose to use the Air Freight then you can expect your item(s) to arrive in Jamaica within 5-7 business days without unforeseen delays)',
    icon: <div class="inline-flex items-center justify-center flex-shrink-0 w-14 lg:w-[150px] md:w-[100px] h-12 mr-3 ">
      <lord-icon
        src="https://cdn.lordicon.com/miilpjag.json"
        trigger="loop"
        class=" w-16 bg-purple-600/50 lg:mr-4 rounded-full h-16"
        delay="2000">
      </lord-icon>
    </div>,
  },
  {
    name: 'Free Cooperate delivery',
    description:
      'With our new free corporate delivery service, businesses in Kingston can enjoy our reliable and efficient shipping services at no extra cost. Whether you need to ship documents, products, or equipment, we have the expertise and resources to get the job done. Contact us today to learn more about our free corporate delivery service and how we can help streamline your business operations.',
    icon: <div class="inline-flex items-center justify-center flex-shrink-0 w-14 lg:w-[150px] md:w-[100px] h-12 mr-3 ">
      <lord-icon
        src="https://cdn.lordicon.com/sdhhsgeg.json"
        trigger="loop"
        class=" w-16 bg-purple-600/50 lg:mr-4 rounded-full h-16"
        delay="4000">
      </lord-icon>
    </div>,

  },
  {
    name: 'Island wide Delivery offered',
    description:
      'Calypso Shipping Ja is excited to announce that we now offer island-wide delivery in Kingston, Jamaica! Our reliable and efficient shipping services are now available across the entire island, making it easier than ever for businesses and individuals to get their packages delivered quickly and securely .',
    icon: <div class="inline-flex items-center justify-center flex-shrink-0 w-14 lg:w-[150px] md:w-[100px] h-12 mr-3 ">
      <lord-icon
        src="https://cdn.lordicon.com/hgvwxhhl.json"
        trigger="loop"
        class=" w-16 bg-purple-600/50 lg:mr-4 rounded-full h-16"
        delay="6000">
      </lord-icon>
    </div>,
  },
  {
    name: 'Sea Freight',
    description:
      'E &D Container, Barrells, Pallets - Get fast delivery to Jamaica within 5-10 days (If you choose to use the Sea Freight then you can expect your item(s) to arrive within Jamaica in 5-10 business days without unforeseen delays.)',
    icon: <div class="inline-flex items-center justify-center flex-shrink-0 w-14 lg:w-[150px] md:w-[100px] h-12 mr-3 ">
      <lord-icon
        src="https://cdn.lordicon.com/mggjggjg.json"
        trigger="loop"
        class=" w-16 bg-purple-600/50 lg:mr-4 rounded-full h-16"
        delay="8000">
      </lord-icon>
    </div>,
  },
]
const checklist = [
  'Unlimited projects',
  'No per user fees',
  'Unlimited storage',
  '24/7 support',
  'Cancel any time',
  '14 days free',
]
const logos = [
  { name: 'Workcation', url: 'https://tailwindui.com/img/logos/workcation-logo-cyan-900.svg' },
  { name: 'Tuple', url: 'https://tailwindui.com/img/logos/tuple-logo-cyan-900.svg' },
  { name: 'Level', url: 'https://tailwindui.com/img/logos/level-logo-cyan-900.svg' },
]
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 3,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Home = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <>
      {
        loading ?
          <Load />
          :
          <div className=''>
            <MainNav />
            <CardsCarousel />
            <section className="bg-[#270657] my-4">
              <div className="mt-4">
                {/* Header section */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div className="text-center mb-6">
                    <h1 className="text-4xl tracking-tight shadow-none font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block text-transparent bg-gradient-to-r from-[#52cbe4] via-[#9f55f2] to-[#8d44de] bg-clip-text xl:inline">WHAT WE OFFER</span>
                    </h1>
                    <p className="uppercase max-w-md mb-1 mx-auto text-base text-white sm:text-lg md:mt-2 md:text-xl md:max-w-3xl">
                      www.calypsoshipping.com
                    </p>
                    <div className="w-40 mt-2 p-1 rounded-lg bg-gradient-to-r from-[#52cbe4] via-[#9f55f2] to-[#8d44de] mx-auto">
                    </div>
                  </div>
                </div>
              </div>

              {/* Split brand panel */}
              <div className="relative">
                <div className="absolute inset-0" aria-hidden="true">
                  <div className="absolute inset-y-0 right-0 w-1/2" />
                </div>
                <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
                  <div className="py-6 px-4 sm:py-4 sm:px-6 lg:px-0 lg:pr-8">
                    <div className="max-w-lg mx-auto lg:mx-0">
                      <dl className="mt-12 space-y-10">
                        {features.map((feature) => (
                          <div key={feature.name} className="relative">
                            <dt>
                              <div className="absolute h-16 w-16 rounded-md flex items-center justify-center">
                                {/* < className="h-16 text-white" aria-hidden="true" /> */}
                                {feature.icon}
                              </div>
                              <p className="ml-16 text-lg leading-6 font-medium text-[#52cbe4]">{feature.name}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-white">{feature.description}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r  rounded-l-xl from-[#52cbe4] via-[#9f55f2] to-[#8d44de] py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:items-center lg:justify-end lg:px-0 lg:pl-8">
                    <p className="mb-6 text-center text-2xl font-extrabold text-white sm:text-3xl">
                      SHOP ONLINE! ITS CHEAPER!
                    </p>
                    <div className="max-w-lg mx-auto w-full flex flex-wrap justify-evenly gap-6 lg:mx-0">

                      <a target={'blank'} href="https://www.amazon.com/">
                        <div className='hover:scale-125 grid bg-[#232f3e] place-content-center border p-2 duration-300 rounded-lg shadow-md'>
                          <img src={amazon} height="50" width="125"
                            alt="amazon" />
                        </div>
                      </a>
                      <a target={'blank'} href="https://us.shein.com/?ici=us_tab01">
                        <div className='hover:scale-125 bg-black grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
                          <img src={shein} className='p-3' height="50" width="130"
                            alt="shein" />
                        </div>
                      </a>
                      <a target={'blank'} href="https://www.ebay.com/">
                        <div className='hover:scale-125 bg-white grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
                          <img src={ebay} className='p-3' height="50" width="130"
                            alt="ebay" />
                        </div>
                      </a>
                      <a target={'blank'} href="https://www.aliexpress.us/home.htm?gatewayAdapt=glo2usa&_randl_shipto=US">
                        <div className='hover:scale-125 bg-[#e62e04] grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
                          <img src={ali} className='p-3' height="50" width="130"
                            alt="aliexpress" />
                        </div>
                      </a>
                      <a target={'blank'} href="https://www.forever21.com/">
                        <div className='hover:scale-125 bg-[#ffe617] grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
                          <img src={f21} className='p-3 ' height="50" width="130"
                            alt="forever 21" />
                        </div>
                      </a>
                      {/* <a target={'blank'} href="https://www.victoriassecret.com/us/">
                <div className='hover:scale-125 bg-white grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
                  <img src={vs} className='p-3' height="50" width="130"
                    alt="victoria secret" />
                </div>
              </a> */}
                      <a target={'blank'} href="https://oldnavy.gap.com/">
                        <div className='hover:scale-125 grid place-content-center bg-white border p-2 duration-300 rounded-lg shadow-md'>
                          <img src={oldnavy} className='p-3' height="50" width="130"
                            alt="Old Navy " />
                        </div>
                      </a>
                      <a target={'blank'} href="https://www.fashionnova.com/">
                        <div className='hover:scale-125 bg-black grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
                          <img src={fn} className='p-3' height="50" width="130"
                            alt="FashionNova " />
                        </div>
                      </a>
                      <a target={'blank'} href="https://www2.hm.com/en_us/index.html">
                        <div className='hover:scale-125 grid place-content-center bg-white border p-2 duration-300 rounded-lg shadow-md'>
                          <img src={HM} className='p-3' height="50" width="130"
                            alt="H&M " />
                        </div>
                      </a>
                      <a target={'blank'} href="https://www.zara.com/us/">
                        <div className='hover:scale-125 bg-black grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
                          <img src={zara} className='p-3' height="50" width="130"
                            alt="Zara" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section >

            {/* Steps */}

            <div class="py-12 bg-white">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="lg:text-center">
                  <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">WWW.CALYPSOSHIPPING.COM</h2>
                  {/* <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"> Who’s Calypso Shipping ?</p> */}
                  <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">With Just Four(4) Easy Steps Start Shopping Today</p>
                </div>

                <div class="mt-10">
                  <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div class="relative">
                      <dt>
                        <div class="absolute flex items-center justify-center h-14 w-14 rounded-md bg-white text-white shadow">
                          <lord-icon
                            src="https://cdn.lordicon.com/rfbqeber.json"
                            trigger="loop"
                            delay="2000"
                            class="h-14 w-14">
                          </lord-icon>
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">1.SIGN UP</p>
                      </dt>
                      <dd class="mt-2 ml-16 text-base text-gray-500">This free and easy process can be done by just clicking Register.</dd>
                    </div>

                    <div class="relative">
                      <dt>
                        <div class="absolute flex items-center justify-center h-14 w-14 rounded-md bg-white text-white shadow">
                          <lord-icon
                            src="https://cdn.lordicon.com/iepbfivp.json"
                            trigger="loop"
                            delay="4000"
                            class="h-14 w-14">
                          </lord-icon>
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">2.NOTE MAILBOX NUMBER</p>
                      </dt>
                      <dd class="mt-2 ml-16 text-base text-gray-500">This is unique to every account and should be used along with the address.</dd>
                    </div>

                    <div class="relative">
                      <dt>
                        <div class="absolute flex items-center justify-center h-14 w-14 rounded-md bg-white text-white shadow">
                          <lord-icon
                            src="https://cdn.lordicon.com/mrjuyheh.json"
                            trigger="loop"
                            delay="6000"
                            class="h-14 w-14">
                          </lord-icon>
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">3.CHECK EMAIL AND DASHBOARD</p>
                      </dt>
                      <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                    </div>

                    <div class="relative">
                      <dt>
                        <div class="absolute flex items-center justify-center h-14 w-14 rounded-md bg-white text-white shadow">
                          <lord-icon
                            src="https://cdn.lordicon.com/iejknaed.json"
                            trigger="loop"
                            delay="8000"
                            class="h-14 w-14">
                          </lord-icon>
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">4.DELIVER/PICKUP PACKAGE</p>
                      </dt>
                      <dd class="mt-2 ml-16 text-base text-gray-500">Once the item is ready for pickup you will be notified by email and dashboard or We will deliver you package to you.</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            {/* CTA section */}
            <section class="z-0 bg-gradient-to-br from-[#52cbe4] via-[#9f55f2] to-[#8d44de] ">
              <div class="max-w-6xl px-6 py-10 mx-auto">
                <p class="text-xl font-medium text-white ">Calypso News</p>

                <h1 class="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                  Always Stay Alert Never miss out on the latest news today</h1>

                <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                  <div class="absolute w-full bg-fuchsia-600 -z-10 md:h-96 rounded-2xl"></div>

                  <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                    <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={news} alt="News Feed" />

                    <div class="mt-2 md:mx-6">
                      <div>
                        {/* <p class="text-xl font-medium tracking-tight text-white">Our News Feed</p> */}
                        {/* <p class="text-blue-200 ">Always Stay Alert Never miss out on the latest news today</p> */}
                      </div>

                      <p class="mt-4 text-lg leading-relaxed text-white md:text-2xl font-semibold"> Stay informed and up to date click the button below to get all the latest shipping news and package updates.

                      </p>

                      <div class="flex items-center justify-between mt-6 md:justify-start">
                        <a href='/feeds' title="right arrow" class="p-2 text-white flex transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-600">
                          <span className='uppercase font-bold'>View News Feed</span>
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </section>

            {/* FAQs */}
            <section class="bg-transparent">
              <div class="container px-6 py-10 mx-auto">
                <h1 class="text-2xl font-semibold text-center text-blue-500 capitalize lg:text-3xl">
                  What our <span class="text-blue-500 ">clients</span> say
                </h1>

                <p class="max-w-6xl mx-auto mt-6 text-center text-fuchsia-800">
                  At our shipping company, we are dedicated to providing our customers with exceptional service and reliable shipping
                  solutions. Our "What Our Clients Say" section is a testament to the satisfaction of our valued clients, who have shared
                  their positive experiences using our services. From timely deliveries to attentive customer support, our clients have
                  highlighted the many benefits and advantages of working with our shipping company. We are committed to building long-lasting
                  relationships with our clients, and their feedback helps us to continually improve and enhance our services. We are grateful for the trust and loyalty of our clients, and we look forward to continuing to exceed their expectations in the future.
                </p>

                <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                  <div class="p-8 border rounded-lg  bg-fuchsia-800">
                    <p class="leading-loose text-white">
                      Great service and fast shipping should I even mention the price...... I love Calypso.”.
                    </p>

                    <div class="flex items-center mt-8  -mx-2">
                      <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-blue-500" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                      <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white">Robert</h1>
                      </div>
                    </div>
                  </div>

                  <div class="p-8 border rounded-lg  bg-fuchsia-800">
                    <p class="leading-loose text-white">
                      “I got my outfit on time thanks to you Calypso.”.
                    </p>

                    <div class="flex items-center mt-8 -mx-2">
                      <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-blue-500" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                      <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white">Jeny Doe</h1>
                      </div>
                    </div>
                  </div>

                  <div class="p-8 border rounded-lg  bg-fuchsia-800">
                    <p class="leading-loose text-white">
                      “Well I never really liked the idea of shopping online but thanks to Calypso shipping and I dont mind.”.
                    </p>

                    <div class="flex items-center mt-8 -mx-2">
                      <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-blue-500" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                      <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white">Ema  </h1>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>

            <MainFoot />
          </div >
      }
    </>
  )
}

export default Home