import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import {
  SupportIcon,
  ChevronDownIcon,
} from '@heroicons/react/outline'
import { BookOpenIcon, NewspaperIcon, QuestionMarkCircleIcon, ShoppingBagIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ExtraList({ Services }) {
  return (
    <div >
      <Menu as="div" className="hover:text-amber-400 relative inline-block text-left  ">
        <div>
          <Menu.Button className={{ Services }}>
            <span className='flex'>Our Calypso

              <ChevronDownIcon
                className={classNames(
                  'h-5'
                )}
                aria-hidden="true"
              />
            </span>

          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='/about' className={`${active ? 'bg-amber-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 font-bold text-sm`}
                  >
                    {active ? (
                      <QuestionMarkCircleIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <QuestionMarkCircleIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    About Us
                  </a>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <a
                    href='/contact' className={`${active ? 'bg-amber-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 font-bold text-sm`}
                  >
                    {active ? (
                      <BookOpenIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <BookOpenIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Contact
                  </a>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <a
                    href='/feeds' className={`${active ? 'bg-amber-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 font-bold text-sm`}
                  >
                    {active ? (
                      <NewspaperIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <NewspaperIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    News Feed
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

