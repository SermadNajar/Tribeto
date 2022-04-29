import React from "react";
import ICLineChart from "../Inner/Charts/ICLineChart";
import InvitationConversionBar from "./Bars/InvitationConversionBar";
import InvitationToReviewConversion from "./Charts/InvitationToReviewConversionChart";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";

const stats = [
  {
    id: 1,
    name: "Overall Score",
    stat: "4%",
    icon: ArrowSmDownIcon,
    change: "3.2%",
    changeType: "increase",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
                  Invitation Conversion
                </h1>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  {date}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1">
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
              <InvitationConversionBar />

              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      className="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                    >
                      Invitation Conversion
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
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <ICLineChart />
                  </div>
                </div>
              </section>
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      className="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                    >
                      Invitations Delivered
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-white">
                      The Invitation-to-review conversion chart shows a
                      conversion funnel containing four steps as shown below.
                      <p className="font-bold text-gray-900 dark:text-white"></p>
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <InvitationToReviewConversion />
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
