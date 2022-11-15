import React from 'react'
import { MantineProvider, Text } from '@mantine/core';
import Navbar from './../components/Navbar';
import Foot from '../components/Footer';
import { CameraIcon } from '@heroicons/react/solid'
import Banner from './../img/Banner.jpg';
import CAlypso from './../img/Calypso.mp4';
import Slide from '../components/Slide';
import Load from '../components/loading';
import { useState, useEffect } from 'react'

export default function About() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])

    return (
        <>
            {
                loading ?
                    <Load />
                    :
                    <MantineProvider withGlobalStyles withNormalizeCSS>
                        <div className='relative'>
                            <img className=' sm:absolute md:absolute hidden h-22 mb:block sm:block w-screen' src={Banner} alt="opps error loading image" />
                            <Navbar />
                        </div>
                        <div className='sm:pt-24 md:pt-24 sm:block md:block hidden lg:pt-24'>
                            <Slide />
                        </div>
                        <div className="bg-white md:pt-1 lg:pt-1 pt-20 overflow-hidden">
                            <div className="relative max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <div className="hidden lg:block bg-gray-50 relative top-0 bottom-0 left-3/4 w-screen" />
                                <div>
                                    <h3 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        Who’s Calypso Shipping ?
                                    </h3>
                                </div>
                                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                                    <div className="relative lg:row-start-1 lg:col-start-2">
                                        <svg
                                            className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                                            width={404}
                                            height={384}
                                            fill="none"
                                            viewBox="0 0 404 384"
                                            aria-hidden="true"
                                        >
                                            <defs>
                                                <pattern
                                                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                                    x={0}
                                                    y={0}
                                                    width={20}
                                                    height={20}
                                                    patternUnits="userSpaceOnUse"
                                                >
                                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                                </pattern>
                                            </defs>
                                            <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                                        </svg>
                                        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                                            <figure>
                                                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
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
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="mt-8 lg:mt-0">
                                        <div className="text-base max-w-prose mx-auto lg:max-w-none">
                                            <p className="text-lg text-gray-500">
                                                Calypso Shipping family-oriented business formed to make online shopping and shipping to Jamaica a happy and hassle-free experience.
                                            </p>
                                        </div>
                                        <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                                            <p>
                                                Calypso Shipping is a global freight forwarding service with our prime location situated in Jamaica. Our service used Air and Sea Freight to move our cargos. We provide the solution for online shoppers whether for individuals or businesses. Our platform allows businesses, persons shopping online or persons who have family and friends overseas with the ability to utilise our service in order to receive their package(s) in Jamaica. Feel secure when you ship your goods to our secured location in Miami, Florida. With further consideration, we also facilitate persons who do not have a credit card but want to shop online with the option to do so using Calypso Assist Credit Card*. Additionally, we provide you with free* deliver service islandwide once your package arrives in Jamaica.

                                                <br /><br />Calypso Shipping continues to make your experience exceptional by taking away the hassle of dealing with customs clearance out of your hands, so you may shop, and ship, while we take care of the rest promptly and efficiently.

                                                <br /><br />With over 10 years combined in the field of customer service, logistics and customs clearance, our experience is what sets us apart from the other conventional companies in this field. There is no shipment that we cannot handle and once you have made Calypso Shipping your only choice, our guarantee is that you will receive your package in a timely manner, at the most affordable rates. Calypso Shipping is aware of your desire for the best and we intend on providing exceptional customer service, delivery time, reliability, efficiency, communication and lastly our affordable rate that is second to none.

                                                <br /><br />Once again, our customers are our #1 priority and we aim to please you. Thank you for making the best choice.

                                            </p>
                                            <p className='text-red-600'>
                                                <b className='text-black'>Why choose us:</b>
                                                <br></br><br></br>◦	Our years of experience in the logistics and customs clearance
                                                <br></br><br></br>◦	Earn while you ship through our referral or membership program
                                                <br></br><br></br>◦	We have a team that provides that is ready to provide you with your most exceptional Customer Service experience
                                                <br></br><br></br>◦	We provide persons who do not own or prefer not to use their debit or credit card with our Calypso Assist by using our card to make any purchase for you.
                                                <br></br><br></br>◦	You will have access to goods to purchase through our own online store with the most unbeatable rates.
                                                <br></br><br></br>◦	We are reliable
                                                <br></br><br></br>◦	We are cost effective
                                                <br></br><br></br>◦	Our delivery time is unmatched*
                                                <br></br><br></br>◦	We provide free delivery islandwide*

                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Foot />
                    </MantineProvider>
            }
        </>
    )
}
