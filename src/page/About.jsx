import React from 'react'
import { MantineProvider, Text } from '@mantine/core';
import Navbar from './../components/Navbar';
import Foot from '../components/Footer';
import { CameraIcon } from '@heroicons/react/solid'
import Banner from './../img/Banner.jpg';
import CAlypso from './../img/Calypso.mp4';
import Slide from '../components/Slide';

export default function About() {
    return (
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
                                            muted
                                            loop
                                            autoPlay
                                            playsInline
                                        >
                                            <source src={CAlypso} type="video/mp4" />

                                        </video>
                                    </div>
                                    <figcaption className="mt-3 flex text-sm text-gray-500">
                                        <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2">Calypso Shipping</span>
                                    </figcaption>
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
                                    We are passionate about serving you as we stand to provide you with the full transparency, immaculate customer service and most of all reliable shipping. We seek to incorporate industry best practices at all times and always incorporate and utilize the latest technology and other resources to ensure we deliver above and beyond our customers’ expectations.
                                </p>
                                <p>
                                    Being owners and users of the same service, we provide, we are not separated from the concerns and queries that arise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Foot />
        </MantineProvider>
    )
}
