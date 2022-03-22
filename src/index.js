import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n";
import { ThemeProvider } from "./components/themeContext";
import flowbite from "flowbite";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ThemeProvider>
    <body className="bg-gray-50 dark:bg-gray-900">
      <Suspense fallback={<div></div>}>
        <App />
      </Suspense>
    </body>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
