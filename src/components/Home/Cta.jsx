import { Link } from "react-router-dom";

export default function Example() {
  return (
    <div className="bg-primary">
      <div className="max-w-2xl mx-auto text-center pt-16 px-4 sm:pt-16 sm:pb-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Experiences that matter.</span>
          <span className="block">Start using Tribeto today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-white">
          Make safe purchases online and offline with Tribeto.
          <br />
          Download the Tribeto app now on and get started.
        </p>
      </div>

      <div className="max-w-md mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:mt-0 lg:grid-cols-2">
          <div className="col-span-1 flex justify-center pb-16">
            <a href="https://www.apple.com/app-store/">
              <img
                className="max-h-24"
                src="Assets/img/app/AppStore.svg"
                alt="App Store"
              />
            </a>
          </div>

          <div className="col-span-1 flex justify-center bp-16">
            <a href=" https://play.google.com/store/">
              <img
                className="max-h-24"
                src="Assets/img/app/GooglePlay.svg"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
