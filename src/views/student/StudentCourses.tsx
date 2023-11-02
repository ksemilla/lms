import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import { useNavigate } from "react-router-dom"
import { classNames } from "../../utils"

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
    title: "Implementation and Management",
    trainer: "John Doe",
    grade: "B",
  },
  {
    code: "ICTASD534",
    title: "Implementation and Management",
    trainer: "John Doe",
    grade: "F",
  },
  {
    code: "ICTNWK654",
    title: "Implementation and Management",
    trainer: "John Doe",
    grade: "B+",
  },
  {
    code: "ICTICT124",
    title: "Implementation and Management",
    trainer: "John Doe",
    grade: "F",
  },
  {
    code: "ICTPMG894",
    title: "Implementation and Management",
    trainer: "John Doe",
    grade: "G",
  },
  {
    code: "ICTASD535",
    title: "Implementation and Management",
    trainer: "John Doe",
    grade: "H",
  },
]

export function StudentCourses() {
  const navigate = useNavigate()
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div>
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search course"
            />
          </div>
        </div>
      </div>
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
  )
}
