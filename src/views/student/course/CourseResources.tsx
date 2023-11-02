import {
  DocumentIcon,
  MusicalNoteIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"

const navigation = [
  {
    name: "Audio narration",
    href: "dashboard",
    icon: MusicalNoteIcon,
    current: true,
  },
  {
    name: "Student Resources",
    href: "courses",
    icon: UsersIcon,
    current: false,
  },
  { name: "Template", href: "grades", icon: DocumentIcon, current: false },
]

export function CourseResources() {
  return (
    <div className="bg-white p-4 divide-y-2 space-y-4">
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Resources
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          In egestas erat imperdiet sed.
        </p>
      </div>
      <ul role="list" className="-mx-2 pt-4 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <div className="group flex gap-x-3 text-gray-600 rounded-md p-2 text-sm cursor-pointer leading-6 font-semibold hover:bg-gray-50">
              <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
