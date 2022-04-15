/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Outlet, NavLink } from "react-router-dom";
import { MenuIcon, XIcon, ViewGridIcon, ChartBarIcon } from "@heroicons/react/outline";

import Toggle from "../components/toggle";
import Toggle2 from "../components/toggle2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <Toggle2 />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    <NavLink
                      to="overview"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-primary  text-white active-icon"
                            : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 inactive-icon",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )
                      }
                    >
                      <ViewGridIcon className="group-hover:text-gray-500 dark:group-hover:text-gray-50 ml-2 mr-3 flex-shrink-0 h-6 w-6" />
                      Overview Desk
                    </NavLink>
                    <NavLink
                      to="settings"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-primary  text-white active-icon"
                            : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 inactive-icon",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )
                      }
                    >
                      <ChartBarIcon className="group-hover:text-gray-500 dark:group-hover:text-gray-50 ml-2 mr-3 flex-shrink-0 h-6 w-6" />
                      Analytics
                    </NavLink>
                  </nav>
                </div>
                <div className="flex-shrink-0 flex bg-gray-700 p-4">
                  <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-white">
                          Tom Cook
                        </p>
                        <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                          View profile
                        </p>
                      </div>
                      <div className="ml-28">
                    <Toggle />
                  </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-gray-900">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Toggle2 />
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                <NavLink
                  to="overview"
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-primary  text-white active-icon"
                        : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 inactive-icon",
                      "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    )
                  }
                >
                  <ViewGridIcon className="group-hover:text-gray-500 dark:group-hover:text-gray-50 ml-2 mr-3 flex-shrink-0 h-6 w-6" />
                  Overview Desk
                </NavLink>
                <NavLink
                  to="analytics"
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-primary  text-white active-icon"
                        : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 inactive-icon",
                      "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    )
                  }
                >
                  <ChartBarIcon className="group-hover:text-gray-500 dark:group-hover:text-gray-50 ml-2 mr-3 flex-shrink-0 h-6 w-6" />
                  Analytics
                  
                </NavLink>
                
              </nav>
            </div>
            
            <div className="flex-shrink-0 flex dark:bg-gray-700 p-4">
              <a href="settings" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium dark:text-white text-gray-900">Tom Cook</p>
                    <p className="text-xs font-medium dark:text-gray-300 text-gray-400 group-hover:text-gray-500">
                      View profile
                    </p>
                  </div>
                  <div className="ml-16">
                    <Toggle />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div>
                  <Outlet />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
