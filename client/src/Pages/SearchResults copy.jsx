import React from "react";
import ReactPlayer from "react-player";

const profile = {
  name: "Elgiganten ApS",
  email: "ricardo.cooper@example.com",
  backgroundImage:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
};

function SearchResults() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 h-full">
      <div>
        <div>
          <img
            className="h-32 w-full object-cover lg:h-48"
            src={profile.backgroundImage}
            alt=""
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-10 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img
                className="h-24 w-24 rounded ring-4 ring-white dark:ring-gray-900 sm:h-32 sm:w-32"
                src="Assets/images/elgig.png"
                alt=""
              />
            </div>
            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white truncate">
                  {profile.name}
                </h1>
                <p className="text-gray-800 dark:text-white leading-tight mb-2 mt-1">
                  Hvidevarer og elektronik / Elektronikbutik
                  <br />
                </p>

              </div>
              
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <span>Besøg dette websted</span>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {profile.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto h-screen max-w-7xl">
        <div>
          <hr class="border-gray-300 mt-10 mb-4 dark:border-gray-800" />

          {/* SCORE TOTAL */}

          <div className="flex items-center mb-2 p-4">
            <p className="bg-primary text-white text-lg font-semibold inline-flex items-center p-3 rounded dark:bg-primary dark:text-white">
              8.7
            </p>
            <p className="ml-2 font-medium text-gray-900 dark:text-white">
              Excellent
            </p>
            <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Based on recent 25 reviews out of 1483
            </p>
          </div>
          {/* SCORES */}
          <div className="gap-8 sm:grid sm:grid-cols-3 px-4 mb-5">
            <div>
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Customer Service
                </dt>
                <dd className="flex items-center mb-3">
                  <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-primary h-2.5 rounded w-1/2"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    5.8
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Delivery
                </dt>
                <dd className="flex items-center mb-3">
                  <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-primary h-2.5 rounded w-3/4"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    8.9
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Value for money
                </dt>
                <dd className="flex items-center mb-3">
                  <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-primary h-2.5 rounded w-3/4"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    8.9
                  </span>
                </dd>
              </dl>
            </div>
          </div>
          <hr class="border-gray-700" />
        </div>

        <div className="flex flex-row justify-center">
          <div className="w-full sm:w-full h-screen">
            {/* REVIEWS GO here*/}

            <div className="md:grid md:grid-cols-3 px-4 py-10">
              <ReactPlayer
                classNameName="btn-modal object-cover"
                url="Assets/video/stephanie.mp4"
                type="video/mp4"
                controls
                width="270px"
              />

              <div className="col-span-2 mt-6 md:mt-0">
                <div className="flex items-start mb-5">
                  <div className="pr-4">
                    <div className="flex items-center mb-3">
                      <div>
                        <img
                          className="inline-block h-11 w-11 rounded-full"
                          src="Assets/images/sermad.jpg"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-m font-bold text-white -mt-1 -mb-1">
                          Sermad Alladin
                        </p>
                        <p className="text-sm font-medium text-gray-50">
                          Elgiganten • 18 t.
                        </p>
                      </div>
                    </div>

                    <footer>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Reviewed:{" "}
                        <time datetime="2022-01-20 19:00">
                          January 20, 2022
                        </time>
                      </p>
                    </footer>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Review
                    </h4>
                  </div>
                  <p className="bg-lightgreen text-primary text-sm font-semibold flex items-center p-1.5 rounded ml-auto">
                    8.7
                  </p>
                </div>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  The flat was spotless, very comfortable, and the host was
                  amazing. I highly recommend this accommodation for anyone
                  visiting Brasov city centre. It's quite a while since we are
                  no longer using hotel facilities but self contained places.
                </p>
                <div className="gap-8 sm:grid sm:grid-cols-2 mt-5">
                  <div>
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Customer Service
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                          <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          8.8
                        </span>
                      </dd>
                      <p className="font-light text-gray-500 dark:text-gray-400">
                        The flat was spotless, very comfortable, and the host
                        was amazing. I highly recommend this accommodation for
                        anyone visiting Brasov city centre.
                      </p>
                    </dl>
                  </div>
                  <div>
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Delivery
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                          <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          8.9
                        </span>
                      </dd>
                      <p className="font-light text-gray-500 dark:text-gray-400">
                        The flat was spotless, very comfortable, and the host
                        was amazing. I highly recommend this accommodation for
                        anyone visiting Brasov city centre.
                      </p>
                    </dl>
                  </div>
                  <div>
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Value for money
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                          <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          8.9
                        </span>
                      </dd>
                      <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                        No remarks.
                      </p>
                    </dl>
                  </div>
                  <aside className="flex items-center space-x-5 mx-auto">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-primary"
                    >
                      <svg
                        className="w-4 h-4 mr-1.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                      </svg>
                      Helpful
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-primary group"
                    >
                      <svg
                        className="w-4 h-4 mr-1.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"></path>
                      </svg>
                      Not helpful
                    </a>
                  </aside>
                </div>
                <hr class="border-gray-300 mt-10 mb-4 dark:border-gray-800" />
              </div>
            </div>

            <div className="md:grid md:grid-cols-3 px-4 py-10">
              <ReactPlayer
                classNameName="btn-modal object-cover"
                url="Assets/video/stephanie.mp4"
                type="video/mp4"
                controls
                width="270px"
              />

              <div className="col-span-2 mt-6 md:mt-0">
                <div className="flex items-start mb-5">
                  <div className="pr-4">
                    <div className="flex items-center mb-3">
                      <div>
                        <img
                          className="inline-block h-11 w-11 rounded-full"
                          src="Assets/images/sermad.jpg"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-m font-bold text-white -mt-1 -mb-1">
                          Sermad Alladin
                        </p>
                        <p className="text-sm font-medium text-gray-50">
                          Elgiganten • 18 t.
                        </p>
                      </div>
                    </div>

                    <footer>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Reviewed:{" "}
                        <time datetime="2022-01-20 19:00">
                          January 20, 2022
                        </time>
                      </p>
                    </footer>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Review
                    </h4>
                  </div>
                  <p className="bg-lightgreen text-primary text-sm font-semibold ml-auto items-center p-1.5 rounded">
                    8.7
                  </p>
                </div>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  The flat was spotless, very comfortable, and the host was
                  amazing. I highly recommend this accommodation for anyone
                  visiting Brasov city centre. It's quite a while since we are
                  no longer using hotel facilities but self contained places.
                </p>
                <div className="gap-8 sm:grid sm:grid-cols-2 mt-5">
                  <div>
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Customer Service
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                          <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          8.8
                        </span>
                      </dd>
                      <p className="font-light text-gray-500 dark:text-gray-400">
                        The flat was spotless, very comfortable, and the host
                        was amazing. I highly recommend this accommodation for
                        anyone visiting Brasov city centre.
                      </p>
                    </dl>
                  </div>
                  <div>
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Delivery
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                          <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          8.9
                        </span>
                      </dd>
                      <p className="font-light text-gray-500 dark:text-gray-400">
                        The flat was spotless, very comfortable, and the host
                        was amazing. I highly recommend this accommodation for
                        anyone visiting Brasov city centre.
                      </p>
                    </dl>
                  </div>
                  <div>
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Value for money
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                          <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          8.9
                        </span>
                      </dd>
                      <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                        No remarks.
                      </p>
                    </dl>
                  </div>
                  <aside className="flex items-center space-x-5 mx-auto">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-primary"
                    >
                      <svg
                        className="w-4 h-4 mr-1.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                      </svg>
                      Helpful
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-primary group"
                    >
                      <svg
                        className="w-4 h-4 mr-1.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"></path>
                      </svg>
                      Not helpful
                    </a>
                  </aside>
                </div>
                <hr class="border-gray-300 mt-10 mb-4 dark:border-gray-800" />
              </div>
            </div>
          </div>

          <div className="hidden md:block w-290 lg:w-350 h-screen mt-6">
            <div className="flex flex-col w-290 lg:w-350 h-screen">
              <div className="bg-gray-50 dark:bg-dim-700 rounded-2xl m-2">
                <h1 className="text-gray-900 dark:text-white text-md font-bold p-3 border-b border-gray-200 dark:border-dim-200">
                  Elgiganten ApS
                </h1>

                <div className="text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300">
                  <h2 className="font-semibold text-md text-gray-800 dark:text-white">
                    WE HELP EVERYONE ENJOY AMAZING TECHNOLOGY
                    <p className="my-4 font-normal text-gray-400">
                      Oplysningerne er skrevet af virksomheden
                    </p>
                  </h2>
                  <p className="text-s text-gray-800 dark:text-gray-200">
                    Det vil vi gøre, ved at være den ledende, mest fleksible og
                    mest effektive og bæredygtige udbyder af elektroniske
                    produkter og services, der leverer varerne med værdi for
                    pengene. Vi tror på, at vores vision lykkes, hvis vi lytter
                    til vores kunder og til hinanden, og hvis vi hjælper,
                    rådgiver og yder den bedste indsats. Vi vil ikke bare sælge
                    dig det, vi tror du ønsker. Vi vil hjælpe dig med at give
                    dig det, du vil have og drømmer om.
                  </p>
                </div>

                <div className="text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300">
                  <h2 className="font-semibold text-md text-gray-800 dark:text-white">
                    Om Elgiganten A/S
                    <p className="my-4 font-normal text-gray-400">
                      Oplysningerne er skrevet af virksomheden
                    </p>
                  </h2>
                  <p className="text-s text-gray-800 dark:text-gray-200">
                    Uanset om du har spørgsmål om produkterne, din ordre eller
                    andet, kan du altid fange os på Facebook. Vi har et stort
                    hold bag, med specialister fra vores varehuse indenfor alle
                    varegrupper - og ydermere håndplukkede ressourcer fra vores
                    kundecenter - til at klare alle typer spørgsmål! Så kom ind
                    på Facebook og mød os!
                  </p>
                </div>

                <div className="text-blue-400 text-sm font-normal p-3 hover:bg-gray-100 dark:hover:bg-dim-300">
                  <h2 className="font-semibold text-md text-gray-800 dark:text-white">
                    Kontakt os
                  </h2>
                  <p className="text-s text-gray-800 dark:text-gray-200 px-10 mt-4 pt-4">
                    70 80 70 70 <br />
                  </p>
                  <p className="text-s text-gray-800 dark:text-gray-200 px-10 mt-4 pb-4">
                    Arne Jacobsens Allé 16, 2 sal 2300 København S Danmark
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-dim-700 rounded-2xl m-2">
                <h1 className="text-gray-900 dark:text-white text-md font-bold p-3 border-b border-gray-200 dark:border-dim-200">
                  Virksomhedsaktiviteter
                </h1>

                <div className="text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300">
                  <h2 className="font-semibold text-md text-gray-800 dark:text-white">
                    Tilegnet profil
                  </h2>
                  <p className="text-s text-gray-800 dark:text-gray-200">
                    Virksomheder, der har tilegnet sig deres profil, kan besvare
                    deres anmeldelser, invitere deres kunder til at skrive
                    anmeldelser og meget mere. Det er gratis for alle
                    virksomheder at tilegne sig deres profil og spørge deres
                    kunder efter feedback. <a> Læs mere.</a>
                  </p>
                </div>
                <div className="text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300">
                  <h2 className="font-semibold text-md text-gray-800 dark:text-white">
                    Beder om anmeldser - positive som negative
                  </h2>
                  <p className="text-s text-gray-800 dark:text-gray-200">
                    Denne virksomhed beder aktivt deres kunder om at skrive
                    anmeldelser via Trustpilots invitationsservices. Dette kan
                    føre til en mere repræsentativ stjernebedømmelse. Læs mere.
                  </p>
                </div>
                <div className="text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300">
                  <h2 className="font-semibold text-md text-gray-800 dark:text-white">
                    Betaler for ekstra funktioner
                  </h2>
                  <p className="text-s text-gray-800 dark:text-gray-200">
                    Virksomheder, der abonnerer på én af Trustpilots
                    betalingspakker, har adgang til flere
                    anmeldelsesinvitationer, support og andre funktioner.
                  </p>
                </div>

                <div className="text-blue-400 text-sm font-normal p-3 hover:bg-gray-100 dark:hover:bg-dim-300">
                  <h2 className="font-semibold text-md text-gray-800 dark:text-white">
                    Har besvaret 99% af deres negative anmeldser
                  </h2>
                  <p className="text-s text-gray-800 dark:text-gray-200">
                    Trustpilot regner 1- og 2-stjernede anmeldelser for
                    negative. Dataene er baseret på anmeldelser fra de seneste
                    12 måneder, og alle ugens 7 dage er inkluderet. Læs mere.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-dim-700 rounded-2xl m-2">
                <h1 className="text-gray-900 dark:text-white text-md font-bold p-3 border-b border-gray-200 dark:border-dim-200">
                  Lokationer
                </h1>

                <div className="text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300">
                  <div className="flex flex-row justify-between p-2">
                    <div className="flex flex-row">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="Assets/images/elgig.png"
                        alt="Joe Biden"
                      />
                      <div className="flex flex-col ml-2">
                        <h1 className="text-gray-900 dark:text-white font-bold text-sm">
                          Elgiganten ApS
                        </h1>
                        <p className="text-gray-400 text-sm">Århus 8000</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex items-center h-full text-gray-800 dark:text-white">
                        <a
                          href="#"
                          className="text-xs font-bold text-primary px-4 py-1 rounded-full border-2 border-primary"
                        >
                          Se nærmere
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300">
                  <div className="flex flex-row justify-between p-2">
                    <div className="flex flex-row">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="Assets/images/elgig.png"
                        alt="Joe Biden"
                      />
                      <div className="flex flex-col ml-2">
                        <h1 className="text-gray-900 dark:text-white font-bold text-sm">
                          Elgiganten ApS
                        </h1>
                        <p className="text-gray-400 text-sm">Aalborg 9000</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex items-center h-full text-gray-800 dark:text-white">
                        <a
                          href="#"
                          className="text-xs font-bold text-primary px-4 py-1 rounded-full border-2 border-primary"
                        >
                          Se nærmere
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 dark:border-dim-200 p-4 max-w-sm w-full mx-auto">
                  <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-gray-400 h-12 w-12"></div>
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-400 rounded"></div>
                        <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-blue-400 text-sm font-normal p-3 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out">
                  Show more
                </div>
              </div>

              <footer>
                <ul className="text-xs text-gray-500 my-4 mx-2">
                  <li className="inline-block mx-2">
                    <a className="hover:underline" href="#">
                      Terms of Service
                    </a>
                  </li>
                  <li className="inline-block mx-2">
                    <a className="hover:underline" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="inline-block mx-2">
                    <a className="hover:underline" href="#">
                      Cookie Policy
                    </a>
                  </li>
                  <li className="inline-block mx-2">
                    <a className="hover:underline" href="#">
                      Ads info
                    </a>
                  </li>
                  <li className="inline-block mx-2">
                    <a className="hover:underline" href="#">
                      More
                    </a>
                  </li>
                  <li className="inline-block mx-2">© 2020 Twitter, Inc.</li>
                </ul>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
