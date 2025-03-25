import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="py-4 px-2 md:px-5 fixed w-full z-50 duration-300 bg-gray-200 text-gray-900 dark:bg-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-800 shadow-2xs">
      <div className="container mx-auto flex justify-between items-center relative">
        <a href="#home" className="text-[18px] md:text-2xl font-bold">
          Jyotish Kumar
        </a>

        <ul className="hidden md:flex space-x-6 text-[18px] border rounded-3xl border-slate-400 dark:border-slate-800 dark:shadow-2xl px-5 py-2.5 mr-18">
          <li>
            <a href="#home" className="hover:text-blue-600 px-3">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600 px-3">
              Skills
            </a>
          </li>
          <li>
            <a href="#project" className="hover:text-blue-600 px-3">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 px-3">
              Contact
            </a>
          </li>
        </ul>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hidden md:block"
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-yellow-500" />
          ) : (
            <Moon size={20} className="text-gray-900" />
          )}
        </button>
        <button
          className="h-8 w-8 cursor-pointer md:hidden absolute right-8 mr-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        <div
          className={`absolute z-100 bg-gray-200 top-16 right-4 w-48 dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out md:hidden 
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"}`}
        >
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#home"
                className="block px-4 py-2 hover:bg-gray-700 rounded-lg"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block px-4 py-2 hover:bg-gray-700 rounded-lg"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="block px-4 py-2 hover:bg-gray-700 rounded-lg"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 hover:bg-gray-700 rounded-lg"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          <button
            onClick={() => {
              setIsOpen(false), toggleTheme();
            }}
            className="mt-4 w-full py-2 rounded-lg dark:text-white"
          >
            {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
