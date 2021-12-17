import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [linkActive, setLinkActive] = useState(1);

  const navigation = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "User", to: "/user" },
    { id: 3, name: "Rick and Morty", to: "/rick-and-morty" },
  ];

  const handleClick = (element) => {
    setLinkActive(element);
  };

  const checkActive = (id) =>
    linkActive === id
      ? `text-white bg-blue-700 rounded-md px-3 py-2 hover:bg-blue-600 `
      : `text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`;

  const navt = navigation.map(({ id, name, to }) => (
    <li key={name} className="active:scale-90">
      <Link
        className={checkActive(id)}
        onClick={() => {
          handleClick(id);
        }}
        to={to}
      >
        {name}
      </Link>
    </li>
  ));

  return (
    <div>
      <nav className="bg-white dark:bg-gray-800  shadow ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center w-full justify-between">
              <Link to="/">
                <img
                  className="h-24 w-24"
                  src="https://kodemia.mx/icons/kodemia-logo.svg"
                  alt="Workflow"
                />
              </Link>
              <div className="hidden md:block">
                <nav className="ml-10 flex items-baseline space-x-4">
                  <ul className="w-full block flex-grow md:flex md:items-center md:w-auto">
                    {navt}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
