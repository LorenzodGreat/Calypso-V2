import React from 'react';
import adminimg from '../../img/image.jpg';
import Calp from '../../img/Calypso.png';
import bell from '../../img/bell.png';
import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
    AcademicCapIcon,
    BadgeCheckIcon,
    BellIcon,
    CashIcon,
    ClockIcon,
    MenuIcon,
    ReceiptRefundIcon,
    UsersIcon,
    XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'

const user = {
    name: 'Administrator',
    role: 'Calypso Shipping',
    imageUrl:
        adminimg,
}
const navigation = [
    { name: 'Home', href: '/admin-portal/dashboard', current: true },
    { name: 'Profile', href: '/admin-portal/profile', current: false },
    { name: 'Shop Products', href: '/admin-portal/shop', current: false },
    { name: 'Customer Orders', href: '/admin-portal/orders', current: false },
    { name: 'News Feeds', href: '/admin-portal/news-feed', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '/admin-portal/profile' },
    { name: 'Settings', href: '/admin-portal/profile/settings' },
    { name: 'Sign out', href: '#' },
]
const actions = [
    {
        icon: ClockIcon,
        name: 'Request time off',
        href: '#',
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
    },
    {
        icon: BadgeCheckIcon,
        name: 'Benefits',
        href: '#',
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
    },
    {
        icon: UsersIcon,
        name: 'Schedule a one-on-one',
        href: '#',
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50',
    },
    { icon: CashIcon, name: 'Payroll', href: '#', iconForeground: 'text-yellow-700', iconBackground: 'bg-yellow-50' },
    {
        icon: ReceiptRefundIcon,
        name: 'Submit an expense',
        href: '#',
        iconForeground: 'text-rose-700',
        iconBackground: 'bg-rose-50',
    },
    {
        icon: AcademicCapIcon,
        name: 'Training',
        href: '#',
        iconForeground: 'text-indigo-700',
        iconBackground: 'bg-indigo-50',
    },
]
const productList = [
    {
        name: 'Leonard Krasner',
        handle: 'leonardkrasner',
        imageUrl:
            bell,
        href: '#',
    },
    {
        name: 'Floyd Miles',
        handle: 'floydmiles',
        imageUrl:
            bell,
        href: '#',
    },
    {
        name: 'Emily Selman',
        handle: 'emilyselman',
        imageUrl:
            bell,
        href: '#',
    },
    {
        name: 'Kristin Watson',
        handle: 'kristinwatson',
        imageUrl:
            bell,
        href: '#',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Layout() {
    return (
        <>
            <div className="min-h-full">
                <Popover as="header" className="pb-24 bg-gradient-to-r from-violet-800 to-[#593196b0]">
                    {({ open }) => (
                        <>
                            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                                    {/* Logo */}
                                    <div className="absolute left-0 py-5 flex-shrink-0 lg:static">
                                        <a href="/admin/dashboard">
                                            <span className="sr-only">Calypso Shipping</span>
                                            <img src={Calp} alt="Calypso Shipping" className='h-20 w-auto' />
                                        </a>
                                    </div>

                                    {/* Right section on desktop */}
                                    <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                                        {/* Profile dropdown */}
                                        <Menu as="div" className="ml-4 relative flex-shrink-0">
                                            <div>
                                                <Menu.Button className="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {userNavigation.map((item) => (
                                                        <Menu.Item key={item.name}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700'
                                                                    )}
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>

                                    <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                                        <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                                            {/* Left nav */}
                                            <div className="hidden lg:block lg:col-span-2">
                                                <nav className="flex space-x-4">
                                                    {navigation.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current ? 'text-white' : 'text-cyan-100',
                                                                'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
                                                            )}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    ))}
                                                </nav>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Menu button */}
                                    <div className="absolute right-0 flex-shrink-0 lg:hidden">
                                        {/* Mobile menu button */}
                                        <Popover.Button className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>

                            <Transition.Root as={Fragment}>
                                <div className="lg:hidden">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="duration-150 ease-out"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="duration-150 ease-in"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Popover.Overlay className="z-20 fixed inset-0 bg-black bg-opacity-25" />
                                    </Transition.Child>

                                    <Transition.Child
                                        as={Fragment}
                                        enter="duration-150 ease-out"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="duration-150 ease-in"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Popover.Panel
                                            focus
                                            className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                                        >
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                                                <div className="pt-3 pb-2">
                                                    <div className="flex items-center justify-between px-4">
                                                        <div>
                                                            <img
                                                                className="h-8 w-auto"
                                                                src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                                                                alt="Workflow"
                                                            />
                                                        </div>
                                                        <div className="-mr-2">
                                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                                                <span className="sr-only">Close menu</span>
                                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                                            </Popover.Button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 px-2 space-y-1">
                                                        {navigation.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                                                            >
                                                                {item.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="pt-4 pb-2">
                                                    <div className="flex items-center px-5">
                                                        <div className="flex-shrink-0">
                                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                                        </div>
                                                        <div className="ml-3 min-w-0 flex-1">
                                                            <div className="text-base font-medium text-gray-800 truncate">{user.name}</div>
                                                            <div className="text-sm font-medium text-gray-500 truncate">{user.email}</div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                                        >
                                                            <span className="sr-only">View notifications</span>
                                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                    <div className="mt-3 px-2 space-y-1">
                                                        {userNavigation.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                                                            >
                                                                {item.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition.Child>
                                </div>
                            </Transition.Root>
                        </>
                    )}
                </Popover>
                <main className="-mt-24 pb-8">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="sr-only">Profile</h1>
                        {/* Main 3 column grid */}
                        <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                            {/* Left column */}
                            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                                {/* Welcome panel */}
                                <section aria-labelledby="profile-overview-title">
                                    <div className="rounded-lg bg-white overflow-hidden shadow">
                                        <h2 className="sr-only" id="profile-overview-title">
                                            Profile Overview
                                        </h2>
                                        <div className="bg-white p-6">
                                            <div className="sm:flex sm:items-center sm:justify-between">
                                                <div className="sm:flex sm:space-x-5">
                                                    <div className="flex-shrink-0">
                                                        <img className="mx-auto h-20 w-20 rounded-full" src={user.imageUrl} alt="" />
                                                    </div>
                                                    <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                                        <p className="text-sm font-medium text-gray-600">Welcome back,</p>
                                                        <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user.name}</p>
                                                        <p className="text-sm font-medium text-gray-600">{user.role}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-5 flex justify-center sm:mt-0">
                                                    <a
                                                        href="/admin-portal/profile"
                                                        className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                    >
                                                        View profile
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Actions panel */}
                                <section aria-labelledby="quick-links-title">
                                    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                                        <h2 className="sr-only" id="quick-links-title">
                                            Quick links
                                        </h2>
                                        {actions.map((action, actionIdx) => (
                                            <div
                                                key={action.name}
                                                className={classNames(
                                                    actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                                                    actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                                                    actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                                                    actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                                                    'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500'
                                                )}
                                            >
                                                <div>
                                                    <span
                                                        className={classNames(
                                                            action.iconBackground,
                                                            action.iconForeground,
                                                            'rounded-lg inline-flex p-3 ring-4 ring-white'
                                                        )}
                                                    >
                                                        <action.icon className="h-6 w-6" aria-hidden="true" />
                                                    </span>
                                                </div>
                                                <div className="mt-8">
                                                    <h3 className="text-lg font-medium">
                                                        <a href={action.href} className="focus:outline-none">
                                                            {/* Extend touch target to entire panel */}
                                                            <span className="absolute inset-0" aria-hidden="true" />
                                                            {action.name}
                                                        </a>
                                                    </h3>
                                                    <p className="mt-2 text-sm text-gray-500">
                                                        Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at
                                                        blanditiis et quo et molestiae.
                                                    </p>
                                                </div>
                                                <span
                                                    className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                                                    aria-hidden="true"
                                                >
                                                    <svg
                                                        className="h-6 w-6"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                                    </svg>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Right column */}
                            <div className="grid grid-cols-1 gap-4">

                                {/* Product Listing */}
                                <section aria-labelledby="news-feed-title">
                                    <div className="rounded-lg bg-white overflow-hidden shadow">
                                        <div className="p-6">
                                            <h2 className="text-base font-medium text-gray-900" id="news-feed-title">
                                                Product Listing
                                            </h2>
                                            <div className="flow-root mt-6">
                                                <ul role="list" className="-my-5 divide-y divide-gray-200">
                                                    {productList.map((person) => (
                                                        <li key={person.handle} className="py-4">
                                                            <div className="flex items-center space-x-4">
                                                                <div className="flex-shrink-0">
                                                                    <img className="h-8 w-8 rounded-full" src={person.imageUrl} alt="" />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                                                                    <p className="text-sm text-gray-500 truncate">{'@' + person.handle}</p>
                                                                </div>
                                                                <div className=' space-x-4'>
                                                                    <a
                                                                        href={person.href}
                                                                        className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                                                                    >
                                                                        View
                                                                    </a>
                                                                    <a
                                                                        href={person.href}
                                                                        className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                                                                    >
                                                                        View
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                >
                                                    View all
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                        <div className="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
                            <span className="block sm:inline">&copy; 2022 Calypso Shipping.</span>{' '}
                            <span className="block sm:inline">All rights reserved.</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
