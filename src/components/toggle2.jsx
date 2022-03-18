import React from "react";
import { ThemeContext } from "./themeContext";

const LogoToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <a href="./">
          <img
            logo={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="block h-8 w-auto"
            src="Assets/img/logo-dark.svg"
            alt="Tribeto logo"
          />
        </a>
      ) : (
        <a href="./">
          <img
            logo={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="block h-8 w-auto"
            src="Assets/img/logo-light.svg"
            alt="Tribeto logo"
          />
        </a>
      )}
    </div>
  );
};

export default LogoToggle;
