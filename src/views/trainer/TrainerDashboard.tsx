import { useNavigate } from "react-router-dom"
import { classNames } from "../../utils"

const people = [
  {
    name: "LS101",
    title: "Leadership Skills 101",
    role: "Ongoing",
    email: "janecooper@example.com",
    telephone: "Class",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
]

export function TrainerDashboard() {
  const navigate = useNavigate()
  return (
    <div className="space-y-4 py-10 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex-auto">
        <h1 className="text-2xl font-bold leading-6 text-gray-900">
          Upcoming events
        </h1>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {people.map((person, i) => (
          <li
            key={person.email}
            className={classNames(
              "col-span-1 divide-y divide-gray-200 cursor-pointer rounded-lg bg-white shadow hover:bg-gray-50",
              i === 0 ? "cursor-pointer" : "cursor-not-allowed"
            )}
            onClick={() => {
              if (i === 0) {
                navigate("/trainer/classes/leadership-skills-101?resource=join")
              }
            }}
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-xl font-medium text-gray-900">
                    {person.name}
                  </h3>
                  {person.role === "Ongoing" ? (
                    <span className="inline-flex flex-shrink-0 items-center rounded-full bg-red-50 px-1.5 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                      {person.role}
                    </span>
                  ) : (
                    <span className="inline-flex flex-shrink-0 items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20">
                      {person.role}
                    </span>
                  )}
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  {person.title}
                </p>
              </div>
              <img
                className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                src={person.imageUrl}
                alt=""
              />
            </div>
            <div className="p-2">
              {person.telephone === "Class" && (
                <span className="inline-flex flex-shrink-0 items-center rounded-md bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20">
                  {person.telephone}
                </span>
              )}
              {person.telephone === "Test" && (
                <span className="inline-flex flex-shrink-0 items-center rounded-md bg-purple-50 px-1.5 py-0.5 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20">
                  {person.telephone}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
