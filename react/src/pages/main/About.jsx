import MainFoot from '../../Components/MainFoot'
import MainNav from '../../Components/MainNav'
import SlideCarousel from '../../Components/SlideCarousel'
import '../../assets/index2.css';
import Load from '../../components/loading';
import deliver from '../../img/deliver.jpg';
import wavy from '../../img/wavy.jpg';
import CAlypso from './../../videos/Calypso.mp4';
import { useEffect, useState } from 'react';

const About = () => {
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
                    <div>
                        <MainNav />
                        <div className='pt-16' aria-label="Progress">
                            <SlideCarousel />
                            <div class="py-1 bg-gray-50 overflow-hidden lg:py-4">
                                <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                                    <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                                        <defs>
                                            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                            </pattern>
                                        </defs>
                                        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                                    </svg>

                                    <div class="relative">
                                        <h2 class="text-base text-indigo-600 text-center font-semibold tracking-wide uppercase">ABOUT US</h2>
                                        <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Who’s Calypso Shipping ?</h2>
                                        <p class="mt-4 max-w-6xl mx-auto text-center text-base text-gray-500">
                                            Calypso Shipping is a global freight forwarding service with our prime location situated in Jamaica. Our service used Air and Sea Freight to move our cargos. We provide the solution for online shoppers whether for individuals or businesses. Our platform allows businesses, persons shopping online or persons who have family and friends overseas with the ability to utilise our service in order to receive their package(s) in Jamaica. Feel secure when you ship your goods to our secured location in Miami, Florida. With further consideration, we also facilitate persons who do not have a credit card but want to shop online with the option to do so using Calypso Assist Credit Card*. Additionally, we provide you with free* deliver service islandwide once your package arrives in Jamaica.
                                            Calypso Shipping continues to make your experience exceptional by taking away the hassle of dealing with customs clearance out of your hands, so you may shop, and ship, while we take care of the rest promptly and efficiently.
                                        </p>

                                        <div class="overflow-hidden mx-auto">
                                            <div class="px-4 py-5 max-w-3xl mx-auto sm:p-6">
                                                <video
                                                    className="rounded-lg shadow-lg object-cover object-center"
                                                    alt="Calypso company video"
                                                    width={1184}
                                                    height={1376}
                                                    controls
                                                    autoPlay
                                                    playsInline
                                                >
                                                    <source src={CAlypso} type="video/mp4" />

                                                </video>
                                                {/* <!-- Content goes here --> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="relative mt-2 lg:mt-2 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                                        <div class="relative">
                                            {/* <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Transfer funds world-wide</h3> */}
                                            <p class="mt-3 text-base text-gray-500">
                                                With over 10 years combined in the field of customer service, logistics and customs clearance, our experience is what sets us apart from the other conventional companies in this field. There is no shipment that we cannot handle and once you have made Calypso Shipping your only choice, our guarantee is that you will receive your package in a timely manner, at the most affordable rates. Calypso Shipping is aware of your desire for the best and we intend on providing exceptional customer service, delivery time, reliability, efficiency, communication and lastly our affordable rate that is second to none.

                                                Once again, our customers are our #1 priority and we aim to please you. Thank you for making the best choice.</p>

                                            <dl class="mt-10 space-y-10">
                                                <div class="relative">
                                                    <dt>
                                                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-tr from-[#52cbe4] via-[#9f55f2] to-[#8d44de]  text-white">
                                                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                            </svg>
                                                        </div>
                                                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Our years of experience in the logistics and customs clearance</p>
                                                    </dt>
                                                    {/* <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd> */}
                                                </div>

                                                <div class="relative">
                                                    <dt>
                                                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-tr from-[#52cbe4] via-[#9f55f2] to-[#8d44de]  text-white">
                                                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                            </svg>
                                                        </div>
                                                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Earn while you ship through our referral or membership program</p>
                                                    </dt>
                                                    {/* <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd> */}
                                                </div>

                                                <div class="relative">
                                                    <dt>
                                                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-tr from-[#52cbe4] via-[#9f55f2] to-[#8d44de]  text-white">
                                                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                            </svg>
                                                        </div>
                                                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">We have a team that provides that is ready to provide you with your most exceptional Customer Service experience</p>
                                                    </dt>
                                                    {/* <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd> */}
                                                </div>
                                            </dl>
                                        </div>

                                        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                                            <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
                                                <defs>
                                                    <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                                    </pattern>
                                                </defs>
                                                <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                                            </svg>
                                            <img class="relative mx-auto" width="490" src={deliver} alt="" />
                                        </div>
                                    </div>

                                    <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                                        <defs>
                                            <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                            </pattern>
                                        </defs>
                                        <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                                    </svg>

                                    <div class="relative mt-12 sm:mt-16 lg:mt-24">
                                        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                                            <div class="lg:col-start-2">
                                                {/* <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Always in the loop</h3> */}
                                                {/* <p class="mt-3 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.</p> */}

                                                <dl class="mt-10 space-y-10">
                                                    <div class="relative">
                                                        <dt>
                                                            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-tr from-[#52cbe4] via-[#9f55f2] to-[#8d44de]  text-white">
                                                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                                </svg>
                                                            </div>
                                                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">We provide persons who do not own or prefer not to use their debit or credit card with our Calypso Assist by using our card to make any purchase for you.</p>
                                                        </dt>
                                                        {/* <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd> */}
                                                    </div>

                                                    <div class="relative">
                                                        <dt>
                                                            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-tr from-[#52cbe4] via-[#9f55f2] to-[#8d44de]  text-white">
                                                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                                </svg>
                                                            </div>
                                                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">You will have access to goods to purchase through our own online store with the most unbeatable rates.</p>
                                                        </dt>
                                                        {/* <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd> */}
                                                    </div>

                                                    <div class="relative">
                                                        <dt>
                                                            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-tr from-[#52cbe4] via-[#9f55f2] to-[#8d44de]  text-white">
                                                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                                </svg>
                                                            </div>
                                                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Our delivery time is unmatched*</p>
                                                        </dt>
                                                        {/* <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd> */}
                                                    </div>

                                                    <div class="relative">
                                                        <dt>
                                                            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-tr from-[#52cbe4] via-[#9f55f2] to-[#8d44de]  text-white">
                                                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                                </svg>
                                                            </div>
                                                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Reminder emails</p>
                                                        </dt>
                                                        {/* <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd> */}
                                                    </div>
                                                </dl>
                                            </div>

                                            <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                                                <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
                                                    <defs>
                                                        <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                                        </pattern>
                                                    </defs>
                                                    <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                                                </svg>
                                                <img class="relative mx-auto" width="490" src={wavy} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <MainFoot />
                    </div>
            }
        </>
    )
}

export default About