import React from "react";
import { useTranslation } from "react-i18next";
import RecentReviews from "../components/Review/RecentReviews";
import { SearchIcon } from "@heroicons/react/solid";

export default function Example() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Hero section */}
      <div className="pt-16 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="lg:grid lg:grid-cols-1 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-center">
              <h1>
                <span className="mt-12 block text-4xl font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-black dark:text-white">
                    Discover Genuine
                  </span>
                  <span className="block text-primary">Video Reviews</span>
                </span>
              </h1>
              {/* Search section */}
              <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6 mt-8">
                <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                  <div className="w-full">
                    <label htmlFor="search" className="sr-only">
                      Search for a company
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon
                          className="h-5 w-5 text-gray-400 dark:text-gray-200"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 dark:placeholder-gray-200 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                        placeholder="Search for a company"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Download our app section */}
              <div class="p-4 mt-32 w-full text-center rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-900">
                <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                  Discover some amazing and genuine reviews on iOS & Android.
                  <br />
                  Download our app today.
                </p>
                <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                  <a
                    href="#"
                    class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      class="mr-3 w-7 h-7"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="apple"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                      ></path>
                    </svg>
                    <div class="text-left">
                      <div class="mb-1 text-xs">Download on the</div>
                      <div class="-mt-1 font-sans text-sm font-semibold">
                        Apple Store
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      class="mr-3 w-7 h-7"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google-play"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                      ></path>
                    </svg>
                    <div class="text-left">
                      <div class="mb-1 text-xs">Get in on</div>
                      <div class="-mt-1 font-sans text-sm font-semibold">
                        Google Play
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RecentReviews />
    </div>
  );
}
