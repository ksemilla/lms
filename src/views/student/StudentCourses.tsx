import { useNavigate } from "react-router-dom"
import { classNames } from "../../utils"
import { PlusIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { MinusIcon } from "@heroicons/react/24/outline"

const people = [
  {
    code: "LS101",
    title: "Leadership Skills 101",
    trainer: "John Doe",
    grade: "-",
  },
  {
    code: "ICTICT123",
    title: "Implementation and Management",
    trainer: "John Doe",
    grade: "A+",
  },
  {
    code: "ICTPMG893",
    title: "Networking",
    trainer: "John Doe",
    grade: "B",
  },
  {
    code: "ICTASD534",
    title: "IP Addresses",
    trainer: "John Doe",
    grade: "F",
  },
  {
    code: "ICTNWK654",
    title: "CISCO Packet Tracer",
    trainer: "John Doe",
    grade: "B+",
  },
  {
    code: "ICTICT124",
    title: "Project Quality Management",
    trainer: "John Doe",
    grade: "F",
  },
  {
    code: "ICTPMG894",
    title: "Business Analysis and ICT",
    trainer: "John Doe",
    grade: "G",
  },
  {
    code: "ICTASD535",
    title: "Design Digital Applications",
    trainer: "John Doe",
    grade: "H",
  },
]

export function StudentCourses() {
  const navigate = useNavigate()

  // const [showTerm3, setShowTerm3] = useState(true)
  const [showTerm2, setShowTerm2] = useState(false)
  const [showTerm1, setShowTerm1] = useState(false)

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <div>
        <h1 className="text-base font-semibold leading-6 text-gray-900 flex items-center">
          <PlusIcon className="h-5 cursor-pointer hover:text-blue-500" /> Term 3
          (September 2, 2023 - October 10, 2023)
        </h1>
        <div className="mt-4 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-200">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Code
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Grade
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person, i) => (
                      <tr
                        key={person.code}
                        className={classNames(
                          "even:bg-gray-50 hover:bg-gray-100",
                          i !== 0 ? "cursor-not-allowed" : "cursor-pointer"
                        )}
                        onClick={() => {
                          if (i === 0) {
                            navigate("leadership-skills-101")
                          }
                        }}
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {person.code}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.trainer}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.grade}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-base font-semibold leading-6 text-gray-900 flex items-center">
          {showTerm2 ? (
            <MinusIcon
              className="h-5 cursor-pointer hover:text-blue-500"
              onClick={() => setShowTerm2((prevState) => !prevState)}
            />
          ) : (
            <PlusIcon
              className="h-5 cursor-pointer hover:text-blue-500"
              onClick={() => setShowTerm2((prevState) => !prevState)}
            />
          )}{" "}
          Term 2 (August 1, 2023 - September 1, 2023)
        </h1>
        {showTerm2 && (
          <div className="mt-4 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-200">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Code
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Grade
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {people.map((person, i) => (
                        <tr
                          key={person.code}
                          className={classNames(
                            "even:bg-gray-50 hover:bg-gray-100",
                            i !== 0 ? "cursor-not-allowed" : "cursor-pointer"
                          )}
                          onClick={() => {
                            if (i === 0) {
                              navigate("leadership-skills-101")
                            }
                          }}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {person.code}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.title}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.trainer}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.grade}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <h1 className="text-base font-semibold leading-6 text-gray-900 flex items-center">
          {showTerm1 ? (
            <MinusIcon
              className="h-5 cursor-pointer hover:text-blue-500"
              onClick={() => setShowTerm1((prevState) => !prevState)}
            />
          ) : (
            <PlusIcon
              className="h-5 cursor-pointer hover:text-blue-500"
              onClick={() => setShowTerm1((prevState) => !prevState)}
            />
          )}{" "}
          Term 1 (July 1, 2023 - July 31, 2023)
        </h1>
        {showTerm1 && (
          <div className="mt-4 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-200">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Code
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Grade
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {people.map((person, i) => (
                        <tr
                          key={person.code}
                          className={classNames(
                            "even:bg-gray-50 hover:bg-gray-100",
                            i !== 0 ? "cursor-not-allowed" : "cursor-pointer"
                          )}
                          onClick={() => {
                            if (i === 0) {
                              navigate("leadership-skills-101")
                            }
                          }}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {person.code}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.title}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.trainer}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.grade}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
