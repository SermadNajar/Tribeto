export default function Example() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative h-full max-w-7xl mx-auto"></div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-28 mb-48 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Read & Write</span>{" "}
              <span className="block text-indigo-600 xl:inline">
                Genuine Reviews
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow"></div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"></div>

              <div>
                <div className="mt-1 relative flex items-center">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for a company"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-40 sm:text-lg border-gray-300 rounded-md "
                  />
                  <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400 kbd-lg">
                      ⌘K
                    </kbd>
                  </div>
                </div>
                <p
                  className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3x"
                  id="email-description"
                >
                  Are You a Business?{" "}
                  <a href="#" class="underline decoration-2 ;">
                    Click here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
