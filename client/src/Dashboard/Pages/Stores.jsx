import React, { useState, useEffect } from "react";
import { BiStoreAlt } from "react-icons/bi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const people = [
  {
    name: "Shaping New Tomorrow",
    title: "E-commerce",
    role: "96%",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
  },
  {
    name: "Shaping New Tomorrow",
    title: "Østerågade 4A",
    role: "85%",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
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
                  Stores
                </h1>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  {date}
                </p>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
              >
                Add store
              </button>
            </div>
          </div>

          <ul
            role="list"
            className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {people.map((person) => (
              <li
                key={person.email}
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
              >
                <div className="flex-1 flex flex-col p-8">
                  <img
                    className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9H794LkVseXk0y5bZsoT9La8n-rg1_QVug&usqp=CAU"
                  />
                  <h3 className="mt-6 text-gray-900 text-sm font-medium">
                    {person.name}
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm">{person.title}</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        Customer satisfaction {person.role}
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="-ml-px w-0 flex-1 flex">
                      <a
                        href="#"
                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                      >
                        <BiStoreAlt
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">Select</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
