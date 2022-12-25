import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ToggleNavModal from "./ToggleNavModal";
import { BiSun, BiMoon } from "react-icons/bi";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="flex justify-between mx-auto pt-6 px-4 sm:px-16 md:px-0 md:max-w-2xl lg:px-28 lg:max-w-7xl xl:px-32">
        <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
          <NavLink className="pointer-events-auto" to="/">
            <img
              src="/images/dp.png"
              className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
            />
          </NavLink>
        </div>

        <div className="flex flex-1 justify-end md:justify-center">
          <div className="pointer-events-auto md:hidden">
            <button
              onClick={() => setToggleNav(true)}
              className="group flex items-center rounded-full bg-white/90 px-4 py-[9.6px] text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
            >
              Menu
              <svg
                viewBox="0 0 8 6"
                aria-hidden="true"
                className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
              >
                <path
                  d="M1.75 1.75 4 4.25l2.25-2.5"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="pointer-events-auto hidden md:block">
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
              <li>
                <NavLink
                  to="/"
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-3">
          <button
            onClick={handleTheme}
            className={
              theme === "dark"
                ? "rounded-full text-white bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                : "hidden"
            }
          >
            <BiSun className="h-6 w-6" />
          </button>

          <button
            onClick={handleTheme}
            className={
              theme === "light"
                ? "rounded-full text-teal-500 bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                : "hidden"
            }
          >
            <BiMoon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <ToggleNavModal toggleNav={toggleNav} setToggleNav={setToggleNav} />
    </>
  );
};

export default Header;
