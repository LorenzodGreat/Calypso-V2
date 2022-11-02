import React from 'react'
import { useState } from 'react';
import { MantineProvider, Text } from '@mantine/core';
import Navbar from './../components/Navbar';
import Foot from '../components/Footer';
import Banner from './../img/Banner.jpg';

function Rates() {
    const [weightCost, setWeightCost] = useState(0)
    const [itemCost, setItemCost] = useState(0)

    const changeweightCost = (e) => {
        e.preventDefault();
        setWeightCost(Number(e.target.value))

        if (weightCost === 9) {
            setItemCost(Math.ceil(weightCost * 1.5))
        }
        else if (weightCost === 0 || !weightCost) {
            setItemCost(0)
        }
        else {
            setItemCost(Math.ceil(weightCost * 1.2))
        }

    }

    return (<>
        <MantineProvider withGlobalStyles withNormalizeCSS>

            <div className='relative'>
                <img className=' sm:absolute md:absolute hidden mb:block sm:block w-screen ' src={Banner} alt="opps error loading image" />
                <Navbar />
            </div>
            <div className="bg-white py-24 sm:py-24">
                <div className="relative sm:py-16">
                    <div aria-hidden="true" className="hidden sm:block">
                        <div className="absolute inset-y-0 left-0 w-1/2 bg-white rounded-r-3xl" />
                        <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
                            <defs>
                                <pattern
                                    id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
                        </svg>
                    </div>
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 1463 360"
                                >
                                    <path
                                        className="text-indigo-500 text-opacity-40"
                                        fill="currentColor"
                                        d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                                    />
                                    <path
                                        className="text-indigo-700 text-opacity-40"
                                        fill="currentColor"
                                        d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                                    />
                                </svg>
                            </div>
                            <div className="relative">
                                <div className="sm:text-center">
                                    <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                                        Calculate Shipping Rate
                                    </h2>
                                    <p className="mt-2 mx-auto text-center max-w-2xl text-lg text-indigo-200">
                                        Enter expected item weight below
                                    </p>
                                    <div className="inset-0 mt-4 grid place-content-center">
                                        <h1
                                            className="inline-block rounded-lg bg-gradient-to-br duration-300 from-[#47abc1] via-[#be01df] to-[#a141e5] p-[2px] focus:outline-none focus:ring active:text-opacity-75"
                                        >
                                            <span className="block rounded-lg bg-black m-1 border-4 border-black text-white px-8 py-3 text-3xl sm:text-sm md:text-3xl font-medium">
                                                ${itemCost}.00 <span className='text-2xl sm:text-xs md:text-xl'>USD</span>
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                                <div className="mt-6 sm:mx-auto sm:max-w-lg">
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                                            placeholder="0.00"
                                            onChange={changeweightCost}
                                            aria-describedby="price-currency"
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 ml-8 sm:text-sm" id="price-currency">
                                                LBS
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-6 mx-auto text-center max-w-4xl text-lg text-indigo-200">
                                    Packages deemed by Customs as intended for personal use, valued in excess of $50.00 (C.I.F.) may be subject to Customs Duty Charges.
                                    Please Note: It is the Importer’s responsibility to familiarize his or herself with the most recent Customs Regulations as it relates to the policies, procedures, import requirements, duties and taxes that may be applicable to importing packages into Jamaica.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Foot />
        </MantineProvider>
    </>);
}

export default Rates;