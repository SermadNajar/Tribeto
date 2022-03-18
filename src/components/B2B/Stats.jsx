/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="bg-white pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Seeing is believing with video reviews.
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Video reviews are little snippets of your products in the real
            world, and they really do drive sales. <br />
            In fact, having video reviews on your website - and using them in
            marketing - has proven to increase conversions by around 20%.
          </p>
        </div>
      </div>
      <div className="mt-10 pt-12 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-white" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Higher conversion over standard reviews
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-primary">
                    35%
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Higher trust signal than text or image content.
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-primary">
                    3x
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Higher engagement than brand-generated content
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-primary">
                    7x
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
