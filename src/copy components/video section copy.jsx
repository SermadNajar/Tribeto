<div className="relative mt-12 sm:mt-16 lg:mt-32 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
  <div className="relative">
    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
      Tribeto also works in offline stores.
    </h3>
    <p className="mt-3 text-lg text-gray-500">
      We believe that some of the most amazing experiences can only be
      experienced in physical stores. Therefore Tribeto also works in
      restaurants, mechanics, salons and the list goes on.
    </p>

    <dl className="mt-10 space-y-10">
      {physicalstores.map((item) => (
        <div key={item.id} className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
              {item.name}
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            {item.description}
          </dd>
        </div>
      ))}
    </dl>
  </div>

  {/* new video section */}
  <div className="relative mt-8 mx-auto w-full rounded-lg shadow-lg lg:max-w-xl">
    <button
      type="button"
      className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      <span className="sr-only">Watch our video to learn more</span>
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
          className="h-20 w-20 text-black"
          fill="currentColor"
          viewBox="0 0 84 84"
        >
          <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
          <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
        </svg>
      </div>
    </button>
  </div>
</div>;
