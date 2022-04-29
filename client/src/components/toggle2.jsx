import React from "react";
import { ThemeContext } from "./themeContext";

const LogoToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <a href="./">
          <img
            className="block h-8 w-auto"
            src={window.location.origin + "/Assets/logo-dark.svg"}
            alt="Tribeto logo"
          />
        </a>
      ) : (
        <a href="./">
          <img
            className="block h-8 w-auto"
            src={window.location.origin + "/Assets/logo-light.svg"}
            alt="Tribeto logo"
          />
        </a>
      )}
    </div>
  );
};

export default LogoToggle;
