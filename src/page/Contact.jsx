import React from 'react';
import { useState, useEffect } from 'react'
import Load from './../components/loading';
import Navbar from '../components/Navbar';
import Foot from '../components/Footer';
import Banner from './../img/Banner.jpg';
import { NewspaperIcon, PhoneIcon, MailIcon, SupportIcon } from '@heroicons/react/outline'
import { MantineProvider, Text } from '@mantine/core';

export default function Contact() {
    const [loading, setLoading] = useState(false)
    const supportLinks = [
        {
            name: 'Socials',
            description:
                'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
            icon: PhoneIcon,
        },
        {
            name: 'Calypso WhatsApp Chat',
            icon: SupportIcon,
        },
        {
            name: 'Location Info',
            description:
                'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
            icon: NewspaperIcon,
        },
    ]
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    return (<>
        {
            loading
                ?
                <Load />
                :
                <MantineProvider withGlobalStyles withNormalizeCSS>
                    <div className='relative'>
                        <img className=' sm:absolute md:absolute hidden mb:block sm:block w-screen ' src={Banner} alt="opps error loading image" />
                        <Navbar />
                    </div>

                    <div className=' py-32 md:py-32 lg:py-32'>

                        <div className="text-lg py-6 mx-auto">
                            <h1>
                                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    Wanna Get Intouch With Us No Problem
                                </span>
                            </h1>
                            <p className="mt-8 text-xl w-[88%] text-center mx-auto text-gray-500 leading-8">
                                Get in touch with us right away! Call us, stop by our office, or fill out the form below.
                            </p>
                        </div>
                        <div>
                            <div className="max-w-7xl mx-auto py-1 px-4 sm:py-2 sm:px-6 lg:px-8">
                                <div className="relative bg-white shadow-xl">
                                    <h2 className="sr-only">Contact us</h2>

                                    <div className="grid grid-cols-1 lg:grid-cols-3">
                                        {/* Contact information */}
                                        <div className="relative overflow-hidden py-10 px-6 bg-[#463f60] sm:px-10 xl:p-12">
                                            <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                                                <svg
                                                    className="absolute inset-0 w-full h-full"
                                                    width={343}
                                                    height={388}
                                                    viewBox="0 0 343 388"
                                                    fill="none"
                                                    preserveAspectRatio="xMidYMid slice"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                                        fill="url(#linear1)"
                                                        fillOpacity=".1"
                                                    />
                                                    <defs>
                                                        <linearGradient
                                                            id="linear1"
                                                            x1="254.553"
                                                            y1="107.554"
                                                            x2="961.66"
                                                            y2="814.66"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#fff" />
                                                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div
                                                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    className="absolute inset-0 w-full h-full"
                                                    width={359}
                                                    height={339}
                                                    viewBox="0 0 359 339"
                                                    fill="none"
                                                    preserveAspectRatio="xMidYMid slice"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                                        fill="url(#linear2)"
                                                        fillOpacity=".1"
                                                    />
                                                    <defs>
                                                        <linearGradient
                                                            id="linear2"
                                                            x1="192.553"
                                                            y1="28.553"
                                                            x2="899.66"
                                                            y2="735.66"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#fff" />
                                                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div
                                                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    className="absolute inset-0 w-full h-full"
                                                    width={160}
                                                    height={678}
                                                    viewBox="0 0 160 678"
                                                    fill="none"
                                                    preserveAspectRatio="xMidYMid slice"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                                        fill="url(#linear3)"
                                                        fillOpacity=".1"
                                                    />
                                                    <defs>
                                                        <linearGradient
                                                            id="linear3"
                                                            x1="192.553"
                                                            y1="325.553"
                                                            x2="899.66"
                                                            y2="1032.66"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#fff" />
                                                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-medium text-white">Contact information</h3>
                                            <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                                                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                                                lacus arcu.
                                            </p>
                                            <dl className="mt-8 space-y-6">
                                                <dt>
                                                    <span className="sr-only">Phone number</span>
                                                </dt>
                                                <dd className="flex text-base text-indigo-50">
                                                    <PhoneIcon className="flex-shrink-0 w-6 h-6 text-indigo-200" aria-hidden="true" />
                                                    <span className="ml-3">+1 (876) 791-9541</span>
                                                </dd>
                                                <dt>
                                                    <span className="sr-only">Email</span>
                                                </dt>
                                                <dd className="flex text-base text-indigo-50">
                                                    <MailIcon className="flex-shrink-0 w-6 h-6 text-indigo-200" aria-hidden="true" />
                                                    <span className="ml-3">info@calypsoshipping.com</span>
                                                </dd>
                                            </dl>
                                            <ul role="list" className="mt-8 flex space-x-12">
                                                <li>
                                                    <a className="text-indigo-200 hover:text-indigo-100" href="https://www.facebook.com/profile.php?id=100086224426556">
                                                        <span className="sr-only">Facebook</span>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-6 h-6"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-indigo-200 hover:text-indigo-100" href="https://instagram.com/calypsoshipping?igshid=YmMyMTA2M2Y=">
                                                        <span className="sr-only">Instagram</span>
                                                        <svg fill="currentColor" viewBox="0 0 24 24"
                                                            width={24}
                                                            height={24}>
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <span className="sr-only">Whatsapp</span>
                                                    <i class="fa-brands text-indigo-200 hover:text-indigo-100 fa-whatsapp -mt-1 text-2xl"></i>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Contact form */}
                                        <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                            <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
                                            <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                                <div>
                                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                                        First name
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                                                        Last name
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                                        Email
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            autoComplete="email"
                                                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex justify-between">
                                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                                            Phone
                                                        </label>
                                                        <span id="phone-optional" className="text-sm text-gray-500">
                                                            Optional
                                                        </span>
                                                    </div>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            id="phone"
                                                            autoComplete="tel"
                                                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                                            aria-describedby="phone-optional"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                                                        Subject
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            name="subject"
                                                            id="subject"
                                                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <div className="flex justify-between">
                                                        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                                                            Message
                                                        </label>
                                                        <span id="message-max" className="text-sm text-gray-500">
                                                            Max. 500 characters
                                                        </span>
                                                    </div>
                                                    <div className="mt-1">
                                                        <textarea
                                                            id="message"
                                                            name="message"
                                                            rows={4}
                                                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                                                            aria-describedby="message-max"
                                                            defaultValue={''}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-2 sm:flex sm:justify-end">
                                                    <button
                                                        type="submit"
                                                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
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
