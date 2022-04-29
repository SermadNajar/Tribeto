/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import {
  TruckIcon,
  CurrencyDollarIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";

const stats = [
  {
    id: 1,
    name: "Delivery Succes Rate",
    stat: "86.26%",
    icon: TruckIcon,
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Service Succes Rate",
    stat: "88.42%",
    icon: ChatAlt2Icon,
    change: "5.4%",
    changeType: "increase",
  },
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
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white dark:bg-gray-900 pt-5 px-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-primary rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 dark:text-gray-300 truncate">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 pb-5 flex items-baseline">
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
      </dl>
    </div>
  );
}
