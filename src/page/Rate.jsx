import React, { useEffect } from 'react'
import { useState } from 'react';
import { MantineProvider, Text } from '@mantine/core';
import Navbar from './../components/Navbar';
import Foot from '../components/Footer';
import Banner from './../img/Banner.jpg';
import Load from '../components/loading';

function Rates() {
    const [weightCost, setWeightCost] = useState(0)
    const [itemCost, setItemCost] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);

    }, [])

    useEffect(() => {
        // console.log(weightCost)
        if (weightCost === 0) { setItemCost(0.00) }
        if (weightCost === 1) { setItemCost(3.95) }
        if (weightCost === 2) { setItemCost(6.05) }
        if (weightCost === 3) { setItemCost(7.75) }
        if (weightCost === 4) { setItemCost(9.45) }
        if (weightCost === 5) { setItemCost(11.15) }
        if (weightCost === 6) { setItemCost(12.85) }
        if (weightCost === 7) { setItemCost(14.55) }
        if (weightCost === 8) { setItemCost(16.25) }
        if (weightCost === 9) { setItemCost(17.95) }
        if (weightCost === 10) { setItemCost(19.65) }
        if (weightCost === 11) { setItemCost(21.35) }
        if (weightCost === 12) { setItemCost(23.05) }
        if (weightCost === 13) { setItemCost(24.75) }
        if (weightCost === 14) { setItemCost(26.45) }
        if (weightCost === 15) { setItemCost(28.15) }
        if (weightCost === 16) { setItemCost(29.85) }
        if (weightCost === 17) { setItemCost(31.55) }
        if (weightCost === 18) { setItemCost(33.25) }
        if (weightCost === 19) { setItemCost(34.95) }
        if (weightCost === 20) { setItemCost(36.65) }
        if (weightCost === 21) { setItemCost(38.35) }
        if (weightCost === 22) { setItemCost(40.05) }
        if (weightCost === 23) { setItemCost(41.75) }
        if (weightCost === 24) { setItemCost(43.45) }
        if (weightCost === 25) { setItemCost(45.15) }
        if (weightCost === 26) { setItemCost(46.85) }
        if (weightCost === 27) { setItemCost(48.55) }
        if (weightCost === 28) { setItemCost(50.25) }
        if (weightCost === 29) { setItemCost(51.95) }
        if (weightCost === 30) { setItemCost(53.65) }
        if (weightCost === 31) { setItemCost(55.35) }
        if (weightCost === 32) { setItemCost(57.05) }
        if (weightCost === 33) { setItemCost(58.75) }
        if (weightCost === 34) { setItemCost(60.45) }
        if (weightCost === 35) { setItemCost(62.15) }
        if (weightCost === 36) { setItemCost(63.85) }
        if (weightCost === 37) { setItemCost(66.55) }
        if (weightCost === 38) { setItemCost(67.25) }
        if (weightCost === 39) { setItemCost(68.95) }
        if (weightCost === 40) { setItemCost(70.65) }
        if (weightCost === 41) { setItemCost(72.35) }
        if (weightCost === 42) { setItemCost(74.05) }
        if (weightCost === 43) { setItemCost(75.75) }
        if (weightCost === 44) { setItemCost(77.45) }
        if (weightCost === 45) { setItemCost(79.15) }
        if (weightCost === 46) { setItemCost(80.85) }
        if (weightCost === 47) { setItemCost(82.55) }
        if (weightCost === 48) { setItemCost(84.25) }
        if (weightCost === 49) { setItemCost(85.95) }
        if (weightCost === 50) { setItemCost(87.65) }
        if (weightCost === 51) { setItemCost(89.35) }
        if (weightCost === 52) { setItemCost(91.05) }
        if (weightCost === 53) { setItemCost(92.75) }
        if (weightCost === 54) { setItemCost(94.45) }
        if (weightCost === 55) { setItemCost(96.15) }
        if (weightCost === 56) { setItemCost(97.85) }
        if (weightCost === 57) { setItemCost(99.55) }
        if (weightCost === 58) { setItemCost(101.25) }
        if (weightCost === 59) { setItemCost(102.95) }
        if (weightCost === 60) { setItemCost(104.65) }
        if (weightCost === 61) { setItemCost(106.35) }
        if (weightCost === 62) { setItemCost(108.05) }
        if (weightCost === 63) { setItemCost(109.75) }
        if (weightCost === 64) { setItemCost(111.45) }
        if (weightCost === 65) { setItemCost(113.15) }
        if (weightCost === 66) { setItemCost(114.85) }
        if (weightCost === 67) { setItemCost(116.55) }
        if (weightCost === 68) { setItemCost(118.25) }
        if (weightCost === 69) { setItemCost(119.95) }
        if (weightCost === 70) { setItemCost(121.65) }
        if (weightCost === 71) { setItemCost(123.35) }
        if (weightCost === 72) { setItemCost(125.05) }
        if (weightCost === 73) { setItemCost(126.75) }
        if (weightCost === 74) { setItemCost(128.45) }
        if (weightCost === 75) { setItemCost(130.15) }
        if (weightCost === 76) { setItemCost(131.85) }
        if (weightCost === 77) { setItemCost(133.55) }
        if (weightCost === 78) { setItemCost(135.25) }
        if (weightCost === 79) { setItemCost(136.95) }
        if (weightCost === 80) { setItemCost(138.65) }
        if (weightCost === 81) { setItemCost(140.35) }
        if (weightCost === 82) { setItemCost(142.05) }
        if (weightCost === 83) { setItemCost(143.75) }
        if (weightCost === 84) { setItemCost(145.45) }
        if (weightCost === 85) { setItemCost(147.15) }
        if (weightCost === 86) { setItemCost(148.85) }
        if (weightCost === 87) { setItemCost(150.55) }
        if (weightCost === 88) { setItemCost(152.25) }
        if (weightCost === 89) { setItemCost(153.95) }
        if (weightCost === 90) { setItemCost(155.65) }
        if (weightCost === 91) { setItemCost(157.35) }
        if (weightCost === 92) { setItemCost(159.05) }
        if (weightCost === 93) { setItemCost(160.75) }
        if (weightCost === 94) { setItemCost(162.45) }
        if (weightCost === 95) { setItemCost(164.15) }
        if (weightCost === 96) { setItemCost(165.85) }
        if (weightCost === 97) { setItemCost(167.55) }
        if (weightCost === 98) { setItemCost(169.25) }
        if (weightCost === 99) { setItemCost(170.95) }
        if (weightCost === 100) { setItemCost(172.65) }
        if (weightCost >= 100) { setItemCost('0.00 Contact Us Today Rates In') }
    }, [weightCost])



    const ChangeWeightCost = (e) => {
        // console.log(e)
        e.preventDefault();
        // const newValue = 
        setWeightCost(Number(e.target.value))
    }


    return (<>
        {
            loading ?
                <Load />
                :
                <MantineProvider withGlobalStyles withNormalizeCSS>

                    <div className='relative'>
                        <img className='sm:absolute md:absolute hidden mb:block sm:block w-screen' src={Banner} alt="oops" />
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
                                                        ${itemCost}<span className='text-2xl sm:text-xs md:text-xl'>&nbsp; USD</span>
                                                    </span>
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="mt-6 sm:mx-auto sm:max-w-lg">
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <input
                                                    type="text"
                                                    name="price"
                                                    id="price"
                                                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                                                    placeholder="0.00"
                                                    maxLength={4}
                                                    onChange={(e) => ChangeWeightCost(e)}
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
        }
    </>);
}

export default Rates;