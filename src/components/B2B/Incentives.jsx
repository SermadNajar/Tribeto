import {
  FiSmartphone,
  FiTrendingUp,
  FiShare2,
  FiBarChart2,
} from "react-icons/fi";

import { RiUserSmileLine, RiQrCodeLine } from "react-icons/ri";

const transferFeatures = [
  {
    id: 1,
    name: "Use the potential of smart devices",
    description:
      "Device technology means customers can now create high-quality video content with their phones. They love making it - and they love watching it.",
    icon: FiSmartphone,
  },
  {
    id: 2,
    name: "User generated content",
    description:
      "UGC is far more effective and insightful than pushy sales tactics and dry product descriptions - boosting the performance of your content.",
    icon: FiTrendingUp,
  },
  {
    id: 3,
    name: "Boost the performance of your content",
    description:
      "We’ll notify you of new video reviews by email. It’s then a matter of a couple of clicks to get them published on your site and across your social networks.",
    icon: FiShare2,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "Collect valuable, actionable, and credible feedback",
    description:
      "When you know exactly what the customers are experiencing and what you can do to improve the customer's journey, then it is much easier to do something about it.",
    icon: RiUserSmileLine,
  },
  {
    id: 2,
    name: "Charts, statistics and much more",
    description:
      "We at tribeto have developed some intuitive and powerful tools that you can access through your business dashboard.",
    icon: FiBarChart2,
  },
];

const physicalstores = [
  {
    id: 1,
    name: "It works like a charm",
    description:
      "Print an auto-generated QR code and place it either on the table or anywhere the customer has access to. Then you're allready set to collect some amazing feedback. Watch the video for more information.",
    icon: RiQrCodeLine,
  },
];

export default function Example() {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Seeing is believing with video reviews.{" "}
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-center text-xl text-gray-500 dark:text-gray-300">
            Video reviews are little snippets of your products in the real
            world, and they really do drive sales.
          </p>
          <p className="mt-1 max-w-4xl mx-auto text-center text-xl text-gray-500 dark:text-gray-300">
            In fact, having video reviews on your website - and using them in
            marketing - has proven to increase conversions by around 20%.
          </p>
        </div>
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl">
              Collect and publish with ease
            </h3>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
              ‍When surveyed, 76% of consumers said they trust content shared by
              real customers more than product descriptions. Video builds on
              that trust by making the people and products in a review visibly
              real. And more trust means more sales.
            </p>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
              And now with Tribeto you can automatically request UGC from your
              happiest customers, and get publish ready content at your
              fingertips.
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-primary">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200 dark:text-gray-300"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img
              className="relative mx-auto"
              width={250}
              src="Assets/img/images/Iphone.png"
              alt=""
            />
          </div>
        </div>
        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200 dark:text-gray-900"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>
        {/* Stats */}
        <div className="mt-16 pt-12 pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white dark:bg-gray-700 shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 dark:border-gray-800 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-gray-300">
                      Higher conversion over standard reviews
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-900 dark:text-white">
                      35%
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-800 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-gray-300">
                      Higher trust signal than text or image content.
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-900 dark:text-white">
                      3x
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 dark:border-gray-800 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-gray-300">
                      Higher engagement than brand-generated content
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-900 dark:text-white">
                      7x
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl">
                Gain insight
              </h3>
              <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                With Tribeto you and your company will be able to pinpoint
                exactly what the customers pain points are. Resulting in
                exceptional customer retention rates, loyalty to your brand and
                overall custommer satisfaction.
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-primary">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <img
                className="relative mx-auto"
                width={490}
                src="https://tailwindui.com/img/features/feature-example-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Video section Start */}
        <div className="bg-gray-50 dark:bg-gray-800 pt-16 sm:pt-24">
          <div className="relative sm:pt-16">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="relative rounded-2xl px-6 py-10 bg-primary overflow-hidden shadow-xl sm:px-12 sm:py-20">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                  >
                    <path
                      className="text-white text-opacity-40"
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                    />
                    <path
                      className="text-secondary text-opacity-40"
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <div className="sm:text-center">
                    <h3 className="text-base font-semibold uppercase tracking-wider text-gray-900">
                      DID WE MENTION
                    </h3>
                    <h2 className="text-2xl font-extrabold text-white tracking-tight sm:text-3xl">
                      Tribeto also works in offline stores
                    </h2>
                    <p className="mt-2 mx-auto max-w-2xl text-lg text-white">
                      We believe that some of the most amazing experiences can
                      only be experienced in physical stores. Therefore Tribeto
                      also works in restaurants, mechanics, salons and the list
                      goes on.
                    </p>
                  </div>
                </div>
                <div className="relative mt-8 mx-auto w-full rounded-lg shadow-lg lg:max-w-xl">
                  <button
                    type="button"
                    className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <span className="">Watch our video to learn more</span>
                    <img
                      className="w-full"
                      src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      alt=""
                    />
                    <div
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-20 w-20 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 84 84"
                      >
                        <circle
                          opacity="0.9"
                          cx={42}
                          cy={42}
                          r={42}
                          fill="white"
                        />
                        <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Video section Start */}
          </div>
        </div>
      </div>
    </div>
  );
}
