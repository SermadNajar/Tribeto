import React from "react";
import { useTranslation } from "react-i18next";
import RecentReviews from "../Review/RecentReviews";

export default function Example() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Hero section */}
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="mt-12 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-black dark:text-white">
                    Search & Find
                  </span>
                  <span className="block text-primary">Genuine Reviews</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-tertiary dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Discover video reviews by real people.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div>
                  <div className="mt-1 relative flex items-center">
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search for a company"
                      className="shadow-sm focus:ring-secondary focus:border-secondary block w-full pr-40 sm:text-lg border-gray-300 dark:border-gray-800 rounded-md dark:bg-gray-800 dark:placeholder-gray-200"
                    />
                    <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5"></div>
                  </div>
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
