/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition, Menu } from "@headlessui/react";
import { Outlet, NavLink } from "react-router-dom";
import {
  MenuIcon,
  XIcon,
  ViewGridIcon,
  ChartBarIcon,
  SelectorIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { BiStoreAlt } from "react-icons/bi";

import Toggle from "../../components/toggle";
import Toggle2 from "../../components/toggle2";

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
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                  <div className="flex items-center flex-shrink-0 px-4">
                    <Toggle2 />
                  </div>

                  {/* Choose which company Mobile menu */}
                  <Menu
                    as="div"
                    className="px-3 mt-6 relative inline-block text-left"
                  >
                    <div>
                      <Menu.Button className="group w-full bg-gray-100 dark:bg-gray-700 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
                        <span className="flex w-full justify-between items-center">
                          <span className="flex min-w-0 items-center justify-between space-x-3">
                            <img
                              className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9H794LkVseXk0y5bZsoT9La8n-rg1_QVug&usqp=CAU"
                              alt=""
                            />

                            <span className="flex-1 flex flex-col min-w-0">
                              <span className="text-gray-900 dark:text-gray-100 text-sm font-medium truncate">
                                Shaping New Tomorrow
                              </span>
                              <span className="text-gray-500 dark:text-gray-300 text-sm truncate">
                                E-commerce
                              </span>
                            </span>
                          </span>
                          <SelectorIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                      <Menu.Items className="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 dark:bg-gray-800 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <span className="flex w-full justify-between items-center">
                                  <span className="flex min-w-0 items-center justify-between space-x-3">
                                    <img
                                      className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                                      src="Assets/img/images/snt.png"
                                      alt=""
                                    />

                                    <span className="flex-1 flex flex-col min-w-0">
                                      <span className="text-gray-900 dark:text-gray-100 text-sm font-medium truncate">
                                        Shaping New Tomorrow
                                      </span>
                                      <span className="text-gray-500 dark:text-gray-300 text-sm truncate">
                                        Aalborg, Østerågade 4A
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
                                    : "text-gray-700 dark:text-gray-300",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Support
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
                                    : "text-gray-700 dark:text-gray-300",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Logout
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

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
                    <li>
                      <button
                        type="button"
                        class="flex items-center p-2 w-full text-base font-normal text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 inactive-icon px-2 py-2 rounded-md"
                        aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example"
                      >
                        <ChartBarIcon className="group-hover:text-gray-500 dark:group-hover:text-gray-50 ml-2 mr-3 flex-shrink-0 h-6 w-6" />

                        <span
                          class="flex-1 text-left whitespace-nowrap"
                          sidebar-toggle-item
                        >
                          Analytics
                        </span>
                        <svg
                          sidebar-toggle-item
                          class="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <ul id="dropdown-example" class="hidden py-2 space-y-2">
                        <NavLink
                          to="review-ratings"
                          className={({ isActive }) =>
                            classNames(
                              isActive
                                ? "bg-primary  text-white active-icon"
                                : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 inactive-icon",
                              "group flex items-center pl-16 px-2 py-2 text-base font-medium rounded-md"
                            )
                          }
                        >
                          Review Ratings
                        </NavLink>
                        <NavLink
                          to="invitation-conversion"
                          className={({ isActive }) =>
                            classNames(
                              isActive
                                ? "bg-primary  text-white active-icon"
                                : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 inactive-icon",
                              "group flex items-center pl-16 px-2 py-2 text-base font-medium rounded-md"
                            )
                          }
                        >
                          Invitation Conversion
                        </NavLink>
                        <NavLink
                          to="reach-analytics"
                          className={({ isActive }) =>
                            classNames(
                              isActive
                                ? "bg-primary  text-white active-icon"
                                : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 inactive-icon",
                              "group flex items-center pl-16  px-2 py-2 text-base font-medium rounded-md"
                            )
                          }
                        >
                          Reach Analytics
                        </NavLink>
                        <NavLink
                          to="replies"
                          className={({ isActive }) =>
                            classNames(
                              isActive
                                ? "bg-primary  text-white active-icon"
                                : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 inactive-icon",
                              "group flex items-center pl-16  px-2 py-2 text-base font-medium rounded-md"
                            )
                          }
                        >
                          Replies
                        </NavLink>
                        <NavLink
                          to="benchmark"
                          className={({ isActive }) =>
                            classNames(
                              isActive
                                ? "bg-primary  text-white active-icon"
                                : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 inactive-icon",
                              "group flex items-center pl-16  px-2 py-2 text-base font-medium rounded-md"
                            )
                          }
                        >
                          Benchmark
                        </NavLink>
                      </ul>
                    </li>
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

              {/* Choose which company Desktop menu */}
              <Menu
                as="div"
                className="px-3 mt-6 relative inline-block text-left"
              >
                <div>
                  <Menu.Button className="group w-full bg-gray-100 dark:bg-gray-700 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
                    <span className="flex w-full justify-between items-center">
                      <span className="flex min-w-0 items-center justify-between space-x-3">
                        <img
                          className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9H794LkVseXk0y5bZsoT9La8n-rg1_QVug&usqp=CAU"
                          alt=""
                        />

                        <span className="flex-1 flex flex-col min-w-0">
                          <span className="text-gray-900 dark:text-gray-100 text-sm font-medium truncate">
                            Shaping New Tomorrow
                          </span>
                          <span className="text-gray-500 dark:text-gray-300 text-sm truncate">
                            E-commerce
                          </span>
                        </span>
                      </span>
                      <SelectorIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                  <Menu.Items className="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 dark:bg-gray-800 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            <span className="flex w-full justify-between items-center">
                              <span className="flex min-w-0 items-center justify-between space-x-3">
                                <img
                                  className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9H794LkVseXk0y5bZsoT9La8n-rg1_QVug&usqp=CAU"
                                  alt=""
                                />

                                <span className="flex-1 flex flex-col min-w-0">
                                  <span className="text-gray-900 dark:text-gray-100 text-sm font-medium truncate">
                                    Shaping New Tomorrow
                                  </span>
                                  <span className="text-gray-500 dark:text-gray-300 text-sm truncate">
                                    Aalborg, Østerågade 4A
                                  </span>
                                </span>
                              </span>
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className="mx-10 flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 dark:bg-primary hover:bg-primary dark:hover:bg-secondary dark:focus:ring-offset-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                          >
                            <PlusIcon
                              className="ml-4 mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                            Add Store
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
                                : "text-gray-700 dark:text-gray-300",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Logout
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

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
                <li>
                  <button
                    type="button"
                    class="flex items-center p-2 w-full text-base font-normal text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 inactive-icon px-2 py-2 rounded-md"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <ChartBarIcon className="group-hover:text-gray-500 dark:group-hover:text-gray-50 ml-2 mr-3 flex-shrink-0 h-6 w-6" />

                    <span
                      class="flex-1 text-left whitespace-nowrap"
                      sidebar-toggle-item
                    >
                      Analytics
                    </span>
                    <svg
                      sidebar-toggle-item
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul id="dropdown-example" class="hidden py-2 space-y-2">
                    <NavLink
                      to="review-ratings"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-primary  text-white active-icon"
                            : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 inactive-icon",
                          "group flex items-center pl-16 px-2 py-2 text-base font-medium rounded-md"
                        )
                      }
                    >
                      Review Ratings
                    </NavLink>
                    <NavLink
                      to="invitation-conversion"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-primary  text-white active-icon"
                            : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 inactive-icon",
                          "group flex items-center pl-16 px-2 py-2 text-base font-medium rounded-md"
                        )
                      }
                    >
                      Invitation Conversion
                    </NavLink>
                    <NavLink
                      to="reach-analytics"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-primary  text-white active-icon"
                            : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 inactive-icon",
                          "group flex items-center pl-16  px-2 py-2 text-base font-medium rounded-md"
                        )
                      }
                    >
                      Reach Analytics
                    </NavLink>
                    <NavLink
                      to="replies"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-primary  text-white active-icon"
                            : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 inactive-icon",
                          "group flex items-center pl-16  px-2 py-2 text-base font-medium rounded-md"
                        )
                      }
                    >
                      Replies
                    </NavLink>
                    <NavLink
                      to="benchmark"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-primary  text-white active-icon"
                            : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 inactive-icon",
                          "group flex items-center pl-16  px-2 py-2 text-base font-medium rounded-md"
                        )
                      }
                    >
                      Benchmark
                    </NavLink>
                  </ul>
                </li>
                <NavLink
                  to="stores"
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-primary  text-white active-icon"
                        : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 inactive-icon",
                      "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    )
                  }
                >
                  <BiStoreAlt className="group-hover:text-gray-500 dark:group-hover:text-gray-50 ml-2 mr-3 flex-shrink-0 h-6 w-6" />
                  Stores
                </NavLink>
              </nav>
            </div>
            <div className="flex-shrink-0 flex dark:bg-gray-700 p-4">
              <a href="settings" className="flex-shrink-0 w-1/2 group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium dark:text-white text-gray-900">
                      Tom Cook
                    </p>
                    <p className="text-xs font-medium dark:text-gray-300 text-gray-400 group-hover:text-gray-500">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
              <div className="ml-20">
                <Toggle />
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100 dark:bg-gray-900">
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
