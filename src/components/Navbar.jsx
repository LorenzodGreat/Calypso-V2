import React from 'react';
import Calypso from '../img/Calypso.png'; // Tell webpack this JS file uses this image
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  CalculatorIcon,
  CalendarIcon,
  MenuIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
} from '@heroicons/react/outline'
import { useState } from 'react';
import ServiceList from './Services';

const solutions = [
  {
    name: 'Our Services',
    description: 'Get a better understanding of what we do.',
    href: '/Services',
    icon: SupportIcon,
  },
  {
    name: 'Items not acceptable for Carriage',
    description: 'Learn about what you can ship in.',
    href: '/Services1',
    icon: SupportIcon,
  },
  {
    name: 'Customer’s obligations:',
    description: 'Speak directly to  customers requirements for getting their packages.',
    href: '/Services2',
    icon: SupportIcon,
  },
  { name: 'Inspection', description: "Your customers' data will be safe and secure.", href: '/Services3', icon: SupportIcon },
  {
    name: 'Collection/Delivery of packages',
    description: "Connect with third-party tools that you're already using.",
    href: '/Services4',
    icon: SupportIcon,
  },
  {
    name: 'Collection/Delivery of packages',
    description: 'Speaks on collecting your packages.',
    href: '/Services5',
    icon: SupportIcon,
  },
  {
    name: 'Procedure for Claims in case of loss or damage to packages',
    description: 'Collecting lost packages needed',
    href: '/Services1',
    icon: SupportIcon,
  },
  {
    name: 'Services',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '/Services1',
    icon: SupportIcon,
  },
  {
    name: 'Services',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '/Services1',
    icon: SupportIcon,
  },
]
const resources = [
  {
    name: 'Rate Calculator',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '/Rate',
    icon: CalculatorIcon,
  },
  {
    name: 'About',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '/About',
    icon: SupportIcon,
  },
  {
    name: 'Login',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Register', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar() {

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  return (
    <Popover id='nav' className={color ? "fixed bg-[#593196b0] text-white backdrop-blur-sm z-20 shadow-lg w-screen" : "fixed bg-[#ffffff00] text-[#fdfdfd] transition-all duration-300 z-20 w-screen"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/Home">
              <span className="sr-only">Calypso</span>
              <img
                // className="h-20 w-auto sm:h-10"
                width={100}
                height={74}
                src={Calypso}
                alt="Calypso"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">

            <a href="/Home" className={color ? 'text-sm font-medium font-sans hover:text-amber-400' : 'text-base font-medium  hover:text-amber-400'}>
              Home
            </a>
            <ServiceList Services={color ? "text-sm inline-flex font-semibold font-sans hover:text-amber-400" : "text-base inline-flex font-semibold font-sans hover:text-amber-400"}/>
            <a href="/Rate" className={color ? "text-sm font-medium font-sans hover:text-amber-400" : "text-md font-medium font-sans hover:text-amber-400"}>
              Rate Calculator
            </a>
            <a href="/About" className={color ? "text-sm font-medium font-sans hover:text-amber-400" : "text-md font-medium font-sans hover:text-amber-400"}>
              About Us
            </a>
            <a href="#" className={color ? "text-sm font-medium font-sans hover:text-amber-400" : "text-md font-medium font-sans hover:text-amber-400"}>
              Shop Calypso
            </a>

          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="https://cal.tasoko.com/login" className="whitespace-nowrap text-sm font-medium hover:text-amber-400">
              Login
            </a>
            <a
              href="https://cal.tasoko.com/register"
              className={color ? "ml-8 bg-[#593196] text-white whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-2 border-white rounded-md shadow-md text-base font-medium  hover:bg-[#AD44F6] " : "ml-8 bg-[#593196] text-white whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-2 border-white rounded-md shadow-md text-base font-medium  hover:bg-[#AD44F6] "}
            >
              Register Today
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-12 w-auto"
                    src={Calypso}
                    alt="Calypso"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="/Home" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Home
                </a>

                <a href="/Shop" className="text-base font-medium text-gray-900 hover:text-gray-700">
                Shop Calypso
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a href="https://cal.tasoko.com/register"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium  bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="https://cal.tasoko.com/login"
                    className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}