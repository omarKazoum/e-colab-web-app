import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";

import { Fragment } from "react";


  function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
  }
export default function Members(selectedDay1) {

    let selectedDayMeetings = selectedDay1.selectedDay1;

    return (
    <section className="pt-14 px-8 md:mt-0 h-full  bg-blue-quarter md:p-7 ">
        <form>
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
                Search
            </label>
            <div className="relative">
                <input
                    type="search"
                    id="default-search"
                    className="block px-4 py-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    required
                ></input>
                <button
                    type="submit"
                    className="text-white absolute  right-0 top-0 bottom-0 bg-pink-600 hover:bg-pink-700 focus:ring-4 font-medium rounded-lg text-sm px-2 py-2"
                >
                    <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </button>
            </div>
        </form>
        <ol className="mt-4 space-y-2 text-sm leading-6 p-2 rounded-lg h-5/6 text-gray-500 bg-white">
            {selectedDayMeetings?.length > 0 ? (
                selectedDayMeetings?.map((meeting) => (
                    <Meeting meeting={meeting} key={meeting.id} />
                ))
            ) : (
                <p>No data for this day.</p>
            )}
        </ol>
    </section>
    );
}

function Meeting({ meeting }) {
  
    return (
      <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl bg-gradient-to-r from-blue-principale to-blue-grad focus-within:bg-sky-500 hover:bg-sky-500">
        <img
          src={meeting.imageUrl}
          alt=""
          className="flex-none w-10 h-10 rounded-full"
        />
        <div className="flex-auto">
          <p className="text-white font-bold">{meeting.name}</p>
          
          <div className="flex justify-between mt-2">
            <p>
              {meeting.numberOfRemoteDays}/{meeting.remoteDaysLimite}
            </p>
            <p>{meeting.type}</p>
          </div>
        </div>
        <Menu
          as="div"
          className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
        >
          <div>
            <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
              <span className="sr-only">Open options</span>
              <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
            </Menu.Button>
          </div>
  
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Edit
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Cancel
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </li>
    );
  }