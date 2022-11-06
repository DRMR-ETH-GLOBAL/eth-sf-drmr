import React from 'react';
import { useSession } from '@supabase/auth-helpers-react'
import { Popover } from '@headlessui/react'

export default function Header() {
  const session = useSession()

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <Popover className="relative bg-grey-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              {/* <a href="#">
              <span className="sr-only">BlockRM</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a> */}
              <a href="/" className="text-2xl font-medium text-gray-500 hover:text-gray-900">
                DRMR
              </a>
            </div>
            {!session ? (
              <Popover.Group as="nav" className="hidden space-x-10 md:flex items-center">
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Products
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Pricing
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Guides
                </a>
                {/* <a href="#" className="text-base font-medium text-blue-600 hover:text-blue-700 rounded-md border px-4 py-2 items-center justify-center"> */}
                <a
                  href="#"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 text-base font-medium text-blue-600 shadow-sm hover:text-blue-700"
                >
                  Request Demo
                </a>
              </Popover.Group>
            ) : (
              <div></div>
            )}

            {!session ? (
              <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
                <a
                  href="/login"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Log in
                </a>
              </div>
            ) : (
              <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
                <a
                  href="/account"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  {session.user.email}
                </a>
              </div>
            )}
          </div>
        </div>
      </Popover >
    </div>
  )
}
