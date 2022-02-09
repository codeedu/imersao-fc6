// @flow
import * as React from "react";
import { toggleTheme } from "../utils/theme";
import Link from "next/link";
type Props = {};
export const Navbar = (props: Props) => {
  return (
    <nav className="px-8 sm:px-4 py-2.5">
      {/* <nav className="bg-default px-2 sm:px-4 py-2.5 dark:bg-gray-800"> */}
      <div className="container flex flex-wrap space-x-7 items-center mx-auto">
        <a href="#" className="dark:text-white flex space-x-2 items-center">
          <i className="fab fa-twitter fa-2x" />
          <span className="text-lg font-semibold">Tweecycle</span>
        </a>
        <div
          //          className="w-full md:block md:w-auto"
          className="w-full md:w-auto md:grow flex flex-col md:flex-row md:items-center"
        >
          <ul
            // className="flex flex-col md:flex-row md:space-x-8 mt-0 text-sm font-medium"
            className="flex flex-col text-sm font-medium md:grow md:flex-row md:space-x-8"
          >
            <li className="border-b border-gr sm:border-none">
              <Link href="/tweets">
                <a
                  //className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  className="block py-2 pr-4 pl-3 text-gray-700 md:p-0 hover:text-blue-500 dark:text-gray-400 dark:hover:text-white"
                >
                  Tweets
                </a>
              </Link>
            </li>
            <li>
              <Link href="/emails">
                <a className="block py-2 pr-4 pl-3 text-gray-700 md:p-0 hover:text-blue-500 dark:text-gray-400 dark:hover:text-white">
                  E-mails
                </a>
              </Link>
            </li>
          </ul>
          <div className="flex flex-row-reverse">
            <button
              type="button"
              className="p-2 ml-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => toggleTheme()}
            >
              <span className="sr-only">Theme</span>
              <i className="fas fa-sun fa-1x right-2" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
