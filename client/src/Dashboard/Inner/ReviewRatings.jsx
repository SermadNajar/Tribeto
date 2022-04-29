import React, { useState, useEffect } from "react";
import LineChart from "./Charts/LineChart";
import ChartBar from "./Bars/ChartBar";
import ReviewRatingsChart from "./Bars/ReviewRatingsBar";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import Stats from "./Bars/StatsBar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const stats = [
  {
    id: 1,
    name: "Overall Score",
    stat: "92",
    icon: ArrowSmDownIcon,
    change: "87",
    changeType: "increase",
  },
];

export default function Welcome() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()},  ${current.getHours()}:${current.getMinutes()}`;

  return (
    <>
      <div className="min-h-full">
        <main className="py-8">
          {/* Page header */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Review Ratings
                </h1>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  {date}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1">
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
              <ReviewRatingsChart />
              {/* Description list*/}
              <div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2
                    id="applicant-information-title"
                    className="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                  >
                    Overall Score
                  </h2>
                  {stats.map((item) => (
                    <div key={item.id}>
                      <dd className=" py-2 flex items-baseline">
                        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                          {item.stat}
                        </p>
                        <p
                          className={classNames(
                            item.changeType === "increase"
                              ? "text-green-600 dark:text-green-400 "
                              : "text-red-600",
                            "ml-2 flex items-baseline text-sm font-semibold"
                          )}
                        >
                          {item.changeType === "increase" ? (
                            <ArrowSmUpIcon
                              className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <ArrowSmDownIcon
                              className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                              aria-hidden="true"
                            />
                          )}

                          <span className="sr-only">
                            {item.changeType === "increase"
                              ? "Increased"
                              : "Decreased"}{" "}
                            by
                          </span>
                          {item.change}
                        </p>
                      </dd>
                    </div>
                  ))}
                  <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-white">
                    See what's happening with
                    <p className="font-bold text-gray-900 dark:text-white">
                      www.test.com
                    </p>
                  </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <LineChart />
                </div>
              </div>
              <Stats />
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      className="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                    >
                      Customer Satisfaction
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-white">
                      Discover customer reviews in regards to Delivery, Customer
                      service and Perception.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <ChartBar />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
