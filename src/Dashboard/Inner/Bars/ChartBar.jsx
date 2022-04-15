/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import {
  TruckIcon,
  CurrencyDollarIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";

import DChart from "../Charts/DeliveryChart";
import ServiceChart from "../Charts/ServiceChart";
import PerceptionChart from "../Charts/PerceptionChart";

const stats = [
  {
    id: 1,
    name: "Delivery Succes Rate",
    stat: "86.26%",
    icon: TruckIcon,
    change: "5.4%",
    changeType: "increase",
  },
];

const stats2 = [
  {
    id: 2,
    name: "Service Succes Rate",
    stat: "88.42%",
    icon: ChatAlt2Icon,
    change: "5.4%",
    changeType: "increase",
  },
];

const stats3 = [
  {
    id: 3,
    name: "Customer Perception",
    stat: "91.66%",
    icon: CurrencyDollarIcon,
    change: "5.4%",
    changeType: "increase",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Stats() {
  return (
    <div>
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-3">
        <div className="">
          <h2 className="text-md leading-1 font-medium text-gray-900 dark:text-white">
            Delivery Satisfaction
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
                    {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                    by
                  </span>
                  {item.change}
                </p>
              </dd>
            </div>
          ))}
          <DChart />
        </div>
        <div className="">
          <h2 className="text-md leading-1 font-medium text-gray-900 dark:text-white">
            Customer Service
          </h2>
          {stats2.map((item) => (
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
                    {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                    by
                  </span>
                  {item.change}
                </p>
              </dd>
            </div>
          ))}
          <ServiceChart />
        </div>
        <div className="">
          <h2 className="text-md leading-1 font-medium text-gray-900 dark:text-white">
            Customer Perception
          </h2>
          {stats3.map((item) => (
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
                    {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                    by
                  </span>
                  {item.change}
                </p>
              </dd>
            </div>
          ))}
          <PerceptionChart />
        </div>
      </dl>
    </div>
  );
}
