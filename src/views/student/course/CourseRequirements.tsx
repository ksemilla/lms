import { CheckIcon } from "@heroicons/react/20/solid"
import { classNames } from "../../../utils"
import {
  DocumentTextIcon,
  EllipsisHorizontalIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import { Transition } from "@headlessui/react"
import { Link, useLocation } from "react-router-dom"

const timeline = [
  {
    id: 2,
    content: "",
    target: "Report 1 - Project management tool",
    href: "#",
    date: "43% - Sep 22",
    datetime: "2020-09-22",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 1,
    content: "",
    target: "Assessment Task 1",
    href: "#",
    date: "100% - Sep 20",
    datetime: "2020-09-20",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "",
    target: "Term Paper",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: EllipsisHorizontalIcon,
    iconBackground: "bg-gray-500",
  },
  {
    id: 3,
    content: "",
    target: "Assessment Task 2",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: EllipsisHorizontalIcon,
    iconBackground: "bg-gray-500",
  },
  {
    id: 5,
    content: "",
    target: "Quiz",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: EllipsisHorizontalIcon,
    iconBackground: "bg-gray-500",
  },
]

export function CourseRequirements() {
  const [currentId, setCurrentId] = useState(1)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const paramValue = searchParams.get("resource")

  useEffect(() => {
    switch (paramValue) {
      case "report_1":
        setCurrentId(2)
        break
      case "term_paper":
        setCurrentId(4)
        break
      case "assessment_task_2":
        setCurrentId(3)
        break
      case "final_exam":
        setCurrentId(5)
        break
      default:
        setCurrentId(1)
        break
    }
  }, [paramValue])

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="col-span-">
        <div className="flow-root bg-white p-4">
          <ul role="list" className="-mb-8">
            {timeline.map((event, eventIdx) => (
              <li
                key={event.id}
                className="cursor-pointer group"
                onClick={() => {
                  setCurrentId(0)
                  setTimeout(() => {
                    setCurrentId(event.id)
                  }, 100)
                }}
              >
                <div className="relative pb-8">
                  {eventIdx !== timeline.length - 1 ? (
                    <span
                      className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={classNames(
                          event.iconBackground,
                          "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                        )}
                      >
                        <event.icon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <div className="text-sm text-gray-500">
                          {event.content}{" "}
                          <div className="font-medium text-gray-900 group-hover:text-blue-500">
                            {event.target}
                          </div>
                        </div>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <time dateTime={event.datetime}>{event.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <Transition
          show={currentId === 1}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="bg-white p-4 space-y-4">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Assessment Task 1 - <span className="text-green-500">100%</span>
            </label>
            <div className="inline-flex items-center">
              <DocumentTextIcon className="w-20 text-gray-700" />
              <p>john_doe_task_1.docx</p>
            </div>
          </div>
        </Transition>
        <Transition
          show={currentId === 2}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="bg-white p-4 space-y-4">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Report 1 - <span className="text-gray-500">43%</span>
            </label>
            <div className="inline-flex items-center">
              <DocumentTextIcon className="w-20 text-gray-700" />
              <p>john_doe_presentation_jebaited.docx</p>
            </div>
          </div>
        </Transition>
        <Transition
          show={currentId === 3}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="bg-white p-4 space-y-4">
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Assessment Task 2
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        <Transition
          show={currentId === 4}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="bg-white p-4 space-y-4">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Term Paper
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </Transition>
        <Transition
          show={currentId === 5}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="bg-white p-4">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Quiz
            </label>
            <div className="mt-2 rounded-lg border-gray-900/25 pt-3 pb-5">
              <Link
                to="/student/courses/leadership-skills-101/quiz"
                className="text-blue-500 hover:text-blue-800"
              >
                Interactive Exam
              </Link>
            </div>
            <p className="text-gray-700">
              Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
              cupidatat mollit aute velit.
            </p>
          </div>
        </Transition>
      </div>
    </div>
  )
}
