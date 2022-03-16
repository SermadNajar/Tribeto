import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Example() {
  return (
    <div className="relative bg-gray-800 overflow-hidden">
      <div
        className="hidden sm:block sm:absolute sm:inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
          width={364}
          height={384}
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width={364}
            height={384}
            fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
          />
        </svg>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <a
                    href="/partner"
                    className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-btncolor rounded-full">
                      Become a Partner
                    </span>
                    <span className="ml-4 text-sm">Visit our partner page</span>
                    <ChevronRightIcon
                      className="ml-2 w-5 h-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">Credibility through</span>{" "}
                    <span className="text-primary md:block">Transparency</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Tribeto transforms the way companies interact with their
                    customers through video reviews.
                  </p>
                  <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">
                    Used by
                  </p>
                  <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    <div className="flex flex-wrap items-start justify-between">
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                          alt="Tuple"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                          alt="Workcation"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                          alt="StaticKit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div>
                      <p className="text-2xl m-2 text-center font-bold text-gray-700">
                        Create an account for free
                      </p>
                      <p className="text-sm text-center font-medium text-gray-700">
                        And feel the power of video reviews today.
                      </p>
                    </div>

                    <div className="mt-6 relative">
                      <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                      >
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm"></div>
                    </div>

                    <div className="mt-6">
                      <form action="#" method="POST" className="space-y-6">
                        <div>
                          <label htmlFor="company-name" className="sr-only">
                            Company name
                          </label>
                          <input
                            type="text"
                            name="company-name"
                            id="company-name"
                            autoComplete="company-name"
                            placeholder="Company name"
                            required
                            className="block w-full shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="sr-only">
                              First name
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="first-name"
                              placeholder="First name"
                              required
                              className="block w-full shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="sr-only">
                              Last name
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="last-name"
                              placeholder="Last name"
                              required
                              className="block w-full shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="job-title" className="sr-only">
                            Job title
                          </label>
                          <input
                            type="text"
                            name="job-title"
                            id="job-title"
                            autoComplete="job-title"
                            placeholder="Job title"
                            required
                            className="block w-full shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="work-email" className="sr-only">
                            Work email
                          </label>
                          <input
                            type="email"
                            name="work-email"
                            id="work-email"
                            autoComplete="work-email"
                            placeholder="Work email"
                            required
                            className="block w-full shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="sr-only">
                            Work email
                          </label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="phone"
                            placeholder="Phone number"
                            required
                            className="block w-full shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="password" className="sr-only">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            required
                            className="block w-full shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-btnhover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                          >
                            Create your account
                          </button>
                        </div>
                        <fieldset className="">
                          <legend className="sr-only">Notifications</legend>
                          <div className="relative flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="comments"
                                aria-describedby="comments-description"
                                name="comments"
                                type="checkbox"
                                className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="comments"
                                className="font-medium text-gray-700"
                              >
                                Don't be shy
                              </label>
                              <span
                                id="comments-description"
                                className="text-gray-500"
                              >
                                <span className="sr-only"></span> click here if
                                you want to speak to an expert from Tribeto to
                                help you get started.
                              </span>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                  <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      By signing up, you agree to our{" "}
                      <a
                        href="#"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        Terms
                      </a>
                      ,{" "}
                      <a
                        href="#"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        Data Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        Cookies Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
