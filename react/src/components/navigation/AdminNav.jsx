import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { PlusSmIcon } from '@heroicons/react/solid'
import CalypsoLogo from '../../img/Calypso.png'
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../axios-client";
import CalypsoICON from '../../img/admin.jpg';


const userNavigation = [
  { name: 'Your Dashboard', href: '/admin-portal/dashboard' },
  { name: 'Settings', href: '/admin-portal/settings' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function AdminNav(props) {
    
    const navigation = [
        { name: 'Dashboard', href: '/admin-portal/dashboard', current: props.dashboard },
        { name: 'News Feed', href: '/admin-portal/feed', current: props.feed },
        { name: 'Shop', href: '/admin-portal/shop', current: props.shop },
        { name: 'Settings', href: '/admin-portal/settings', current: props.settings },
    ]

  const { user, token, setUser, setToken, notification } = useStateContext();

  // if (!token) {
  //   return <Navigate to="/home" />
  // }

  const onLogout = ev => {
    ev.preventDefault()

    axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
  }

  useEffect(() => {
    axiosClient.get('/user')
      .then(({ data }) => {
        setUser(data)
      })
  }, [])

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  const info = {
    // name: user.name,
    email: 'tom@example.com',
    imageUrl: CalypsoICON,
  }


  return (
    <Disclosure as="nav" className={color ? " fixed bg-[#2606578e] text-white backdrop-blur-sm z-20 shadow-lg w-screen" : "fixed bg-[#270657] text-[#fdfdfd] transition-all duration-300 z-20 w-screen"}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                    <a href="/home">

                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={CalypsoLogo}
                    alt="Calypso Logo"
                  />
                  <img
                    className="hidden lg:block h-14 w-auto"
                    src={CalypsoLogo}
                    alt="Calypso Logo"
                    />
                    </a>
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gradient-to-br from-[#52cbe4] via-[#9f55f2] to-[#8d44de] text-white' : 'text-gray-300 hover:bg-gradient-to-br hover:from-[#52cbe4] hover:via-[#9f55f2] hover:to-[#8d44de] hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                {!token ?
                  <div class="hidden pr-6 lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a target='_blank' href="https://cal.tasoko.com/login" class="text-sm font-medium text-white hover:text-indigo-400">Sign in</a>
                    <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                    <a href="https://cal.tasoko.com/register" class="text-sm font-medium text-white hover:text-indigo-400">Create account</a>
                  </div>
                  :
                  <>

                    <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                      {/* Dashboard dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={info.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                            <button onClick={onLogout}
                              className='block px-4 w-full text-left py-2 text-sm text-gray-700'

                            >
                              Sign Out
                            </button>
                          </Menu.Items>
                          
                        </Transition>
                      </Menu>
                    </div>
                  </>
                }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            {user &&
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5 sm:px-6">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={info.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">{user.name}</div>
                    <div className="text-sm font-medium text-gray-400">{user.email}</div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1 sm:px-3">

                  {
                    userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))
                  }
                  <button onClick={onLogout}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            }
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
