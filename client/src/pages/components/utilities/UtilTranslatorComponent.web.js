import React from "react";

const UtilTranslatorComponent = () => {
  React.useLayoutEffect(() => {
    const dropdown = document.querySelectorAll(".dropdown-trigger");
    const options = {
      constrainWidth: false,
      coverTrigger: false,
      hover: true,
      closeOnClick: false
    };
    M.Dropdown.init(dropdown, options);
  });

  const setToEnglish = () => {
    document.cookie = `googtrans=/en/en; path=/; domain=.${location.hostname};`;
    document.cookie = `googtrans=/en/en; path=/;`;
    location.reload();
  };

  const setToRussian = () => {
    document.cookie = `googtrans=/en/ru; path=/; domain=.${location.hostname};`;
    document.cookie = `googtrans=/en/ru; path=/;`;
    location.reload();
  };

  const cookiesString = document.cookie;
  const cookiesArray = cookiesString.split(";");
  const translateCookie = cookiesArray.find(i => i.startsWith(" googtrans="));
  let language = "EN";

  if (translateCookie == "googtrans=/en/ru") {
    language = "RU";
  }

  return (
    <React.Fragment>
      <li className="hide-on-small-only">
        <a className="dropdown-trigger" data-target="translator">
          {language}
        </a>
      </li>
      <ul id="translator" className="dropdown-content">
        <li>
          <a onClick={setToEnglish}>EN</a>
        </li>
        <li>
          <a onClick={setToRussian}>RU</a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default UtilTranslatorComponent;
