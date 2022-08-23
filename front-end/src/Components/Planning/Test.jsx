import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Members from "./MembersComp";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfWeek,
  format,
  getDay,
  getWeekOfMonth,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { useState } from "react";

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-08-11T13:00",
    endDatetime: "2022-08-11T14:30",
    numberOfRemoteDays: "1",
    remoteDaysLimite: "3",
    type: "Remote",
  },
  {
    id: 2,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-08-20T09:00",
    endDatetime: "2022-08-20T11:30",
    numberOfRemoteDays: "1",
    remoteDaysLimite: "3",
    type: "Remote",
  },
  {
    id: 3,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-08-20T17:00",
    endDatetime: "2022-08-20T18:30",
    numberOfRemoteDays: "1",
    remoteDaysLimite: "3",
    type: "Remote",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-09-09T13:00",
    endDatetime: "2022-09-09T14:30",
    numberOfRemoteDays: "1",
    remoteDaysLimite: "3",
    type: "Office",
  },
  {
    id: 5,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-08-13T14:00",
    endDatetime: "2022-08-13T14:30",
    numberOfRemoteDays: "1",
    remoteDaysLimite: "3",
    type: "Office",
  },
  {
    id: 6,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-08-20T17:00",
    endDatetime: "2022-08-20T18:30",
    numberOfRemoteDays: "1",
    remoteDaysLimite: "3",
    type: "Office",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  return (
    <div className=" bg-blue-page h-screen">
      {/* <div className="mx-auto h-full px-4 sm:px-6 md:px-8">
        <div className="pt-16 md:h-full">
          <div className=" px-4 mx-auto  sm:px-6 md:px-8  h-full "> */}
      <div className="md:flex h-full md:divide-x md:divide-gray-200">
        <div className="w-5/6 sm:px-7 mx-auto md-px-14 pt-14 pb-7 flex-1">
          <div className="flex items-center">
            <h2 className="flex-auto font-semibold text-gray-900">
              {format(firstDayCurrentMonth, "MMMM yyyy")}
            </h2>
            <button
              type="button"
              onClick={previousMonth}
              className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              onClick={nextMonth}
              type="button"
              className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
          <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
          <div className="border-l border-b border-gray-200 grid grid-cols-7 mt-2 text-sm">
            {days.map((day, dayIdx) => (
              <div
                key={day.toString()}
                onClick={() => setSelectedDay(day)}
                className={classNames(
                  "bg-white",
                  !isEqual(day, selectedDay) && "hover:bg-gray-200",
                  isEqual(day, selectedDay) && "text-white  bg-sky-300",
                  dayIdx === 0 && colStartClasses[getDay(day)],
                  "border-t border-r border-gray-200 p-4"
                )}
              >
                <button
                  type="button"
                  className={classNames(
                    "font-semibold",
                    isEqual(day, selectedDay) && "text-white",
                    (!isEqual(day, selectedDay) &&
                      // isToday(day) && 'text-red-500',
                      !isEqual(day, selectedDay)) ||
                      (isToday(day) && "text-white"),
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      "text-gray-900",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      "text-gray-400",
                    isToday(day) && "bg-blue-100",
                    isEqual(day, selectedDay) && !isToday(day) && "bg-sky-400",
                    (isEqual(day, selectedDay) || isToday(day)) && "font-bold",
                    "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                  )}
                >
                  <time dateTime={format(day, "yyyy-MM-dd")}>
                    {format(day, "d")}
                  </time>
                </button>

                <div className="w-1 h-1 mx-auto mt-1">
                  {meetings.some((meeting) =>
                    isSameDay(parseISO(meeting.startDatetime), day)
                  ) && <div className="w-1 h-1 rounded-full bg-sky-500"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Members selectedDay1={selectedDayMeetings} />
      </div>
    </div>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
