/* This example requires Tailwind CSS v2.0+ */
import { LocationMarkerIcon, HeartIcon } from "@heroicons/react/outline";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const incentives = [
  {
    name: "Review the delivery",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description: "You can now review wether your order was delivered on time.",
  },
  {
    name: "Rate the service",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description: "Rate your customer experience and give your feedback.",
  },
  {
    name: "Value for money",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description: "Rate wether the purchase's value worth the cost.",
  },
];

export default function Example() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="mt-24 mb-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-primary">
                  <LocationMarkerIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Video reviews both in online and offline stores with Tribeto
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Now you can create video reviews in the physical stores you
                  visit. It can be anything from your favorite restaurant,
                  mechanic, hairdresser or something completely different.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="Assets/img/images/restaurant.jpg"
                alt="QR"
              />
            </div>
          </div>
        </div>
      </div>

      {/* New section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                  Delivery, Service & Value for money
                </h2>
                <p className="mt-4 text-gray-500">
                  With Tribeto you are able to rate your shopping experience on
                  more than just the regular 5 stars. You can rate your
                  experience in regards to how good the service and delivery
                  was, and wether you got value for your hard earned money. We
                  sincerly belive in quality experiences and wish for you to
                  have them.
                </p>
              </div>
              <div className=" aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src="Assets/img/images/value.png"
                  alt=""
                  className="object-center object-cover"
                />
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src={incentive.imageSrc}
                      alt=""
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">
                      {incentive.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New section */}
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-primary">
                  <HeartIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Get rewards and discounts for your valuable feedback
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Each store can choose to reward their customers with a variety
                  of discounts. Free shipping the next time you visit the store,
                  or even cashback and precentage discounts.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="Assets/img/images/discount.jpg"
                alt="Discounts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
