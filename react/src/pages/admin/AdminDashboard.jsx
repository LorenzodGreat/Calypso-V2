import React from 'react'
import CalypsoLogo from '../../img/Calypso.png';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'
import AdminNav from '../../Components/navigation/AdminNav';
import { CogIcon, ShoppingCartIcon } from '@heroicons/react/solid';

const supportLinks = [

    {
        name: 'Calypso Shop',
        href: '#',
        description:
            'Here you can add, delete & edit any product you would like to sell at anytime.Let us manage payments and so much more.',
        icon: ShoppingCartIcon,
    },
    {
        name: 'News Feed',
        href: '#',
        description:
            ' With our CRUD capabilities, you can easily create, read, update, and delete news items in real-time, as well as share and collaborate with others on news stories of interest. Our goal is to ensure that our Customers have access to the most relevant and up-to-date news, delivered in a way that is tailored to their unique needs and interests..',
        icon: NewspaperIcon,
    },
    {
        name: 'Settings',
        href: '#',
        description:
            'We understand the importance of providing our users with a customizable and personalized experience, which is why we are pleased to offer a comprehensive Settings section within our application. ',
        icon: CogIcon,
    },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const AdminDashboard = () => {
    return (
        <div className="h-screen">
            <AdminNav dashboard={true} />
            <section>
                <div className="bg-transparent">
                    {/* Header */}
                    <div className="relative pb-32 bg-gray-800">
                        <div className="absolute inset-0">
                            <img
                                className="w-full h-full object-cover"
                                src="https://img.freepik.com/free-photo/industrial-container-cargo-freight-ship-habor-logistic-import-export_1150-18279.jpg?w=900&t=st=1680809407~exp=1680810007~hmac=6363afc43da254a3bffa39fb50b76674fb756a250ebeae81d64b2dc3b352bd05"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
                        </div>
                        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Welcome to the Admin Dashboard for our shipping company!</h1>
                            <p className="mt-6 max-w-3xl text-xl text-gray-300">
                                Here you can manage and monitor aspects of our shipping operations, including blog post we look forward to working with you to deliver success!
                            </p>
                        </div>
                    </div>

                    {/* Overlapping cards */}
                    <section
                        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                        aria-labelledby="contact-heading"
                    >
                        <h2 className="sr-only" id="contact-heading">
                            Contact us
                        </h2>
                        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                            {supportLinks.map((link) => (
                                <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
                                    <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                        <div className="absolute top-0 p-5 inline-block bg-gradient-to-br from-[#52cbe4] via-[#9f55f2] to-[#8d44de] rounded-xl shadow-lg transform -translate-y-1/2">
                                            <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                                        <p className="mt-4 text-base text-gray-500">{link.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default AdminDashboard