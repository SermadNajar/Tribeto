import React from "react";
import RepliesBar from "./Bars/RepliesBar";
import ReplyRateTable from "./Tables/ReplyRateTable";

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
                  Replies
                </h1>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  {date}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1">
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
              <RepliesBar />
              <ReplyRateTable/>
              {/* Description list*/}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
