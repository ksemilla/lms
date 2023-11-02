import { Fragment, useEffect, useState } from "react"
import {
  ChatBubbleLeftEllipsisIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid"
import { classNames } from "../../../utils"
import { useLocation } from "react-router-dom"

const activity = [
  {
    id: 0,
    type: "comment",
    person: { name: "Jason Meyers", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "35m ago",
  },
  {
    id: 1,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "1h ago",
  },
  {
    id: 2,
    type: "assignment",
    person: { name: "Hilary Mahy", href: "#" },
    assigned: { name: "Kristin Watson", href: "#" },
    date: "1d ago",
  },
  {
    id: 3,
    type: "tags",
    person: { name: "Hilary Mahy", href: "#" },
    tags: [
      { name: "Bug", href: "#", color: "fill-red-500" },
      { name: "Accessibility", href: "#", color: "fill-indigo-500" },
    ],
    date: "2d ago",
  },
  {
    id: 4,
    type: "comment",
    person: { name: "Jason Meyers", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id.",
    date: "3d ago",
  },
]

function CourseAnnoucement() {
  return (
    <div className="flow-root bg-white p-8">
      <div className="border-b border-gray-200 pb-5">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Annoucements
        </h3>
      </div>
      <div className="mt-2 space-y-8 divide-y-2 divide-gray-50">
        <figure className="pt-6 flex flex-auto flex-col justify-between">
          <blockquote className="text-lg leading-8 text-gray-700">
            <p>
              “Amet amet eget scelerisque tellus sit neque faucibus non
              eleifend. Integer eu praesent at a. Ornare arcu gravida natoque
              erat et cursus tortor consequat at. Vulputate gravida sociis enim
              nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui
              pellentesque sagittis.”
            </p>
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-x-6">
            <img
              className="h-14 w-14 rounded-full bg-gray-800"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="text-base">
              <div className="font-semibold text-gray-700">Rick Astley</div>
              <div className="mt-1 text-gray-400">Professor</div>
            </div>
          </figcaption>
        </figure>
        <figure className="pt-10 flex flex-auto flex-col justify-between">
          <blockquote className="text-lg leading-8 text-gray-700">
            <p>
              “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
              proident duis dolore nulla veniam reprehenderit nisi officia
              voluptate incididunt exercitation exercitation elit. Nostrud
              veniam sint dolor nisi ullamco.”
            </p>
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-x-6">
            <img
              className="h-14 w-14 rounded-full bg-gray-800"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="text-base">
              <div className="font-semibold text-gray-700">Rick Astley</div>
              <div className="mt-1 text-gray-400">Professor</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

function CourseActivities() {
  return (
    <div className="flow-root bg-white p-8">
      <div className="border-b border-gray-200 pb-5">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Recent Activities
        </h3>
      </div>
      <ul role="list" className="-mb-8 mt-4">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              {activityItemIdx !== activity.length - 1 ? (
                <span
                  className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                {activityItem.type === "comment" ? (
                  <>
                    <div className="relative">
                      <img
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                        src={activityItem.imageUrl}
                        alt=""
                      />

                      <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                        <ChatBubbleLeftEllipsisIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <a
                            href={activityItem.person.href}
                            className="font-medium text-gray-900"
                          >
                            {activityItem.person.name}
                          </a>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Commented {activityItem.date}
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-700">
                        <p>{activityItem.comment}</p>
                      </div>
                    </div>
                  </>
                ) : activityItem.type === "assignment" ? (
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                          <UserCircleIcon
                            className="h-5 w-5 text-gray-500"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-1.5">
                      <div className="text-sm text-gray-500">
                        <a
                          href={activityItem.person.href}
                          className="font-medium text-gray-900"
                        >
                          {activityItem.person.name}
                        </a>{" "}
                        assigned{" "}
                        <a
                          href={activityItem?.assigned?.href}
                          className="font-medium text-gray-900"
                        >
                          {activityItem?.assigned?.name}
                        </a>{" "}
                        <span className="whitespace-nowrap">
                          {activityItem.date}
                        </span>
                      </div>
                    </div>
                  </>
                ) : activityItem.type === "tags" ? (
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                          <TagIcon
                            className="h-5 w-5 text-gray-500"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-sm leading-8 text-gray-500">
                        <span className="mr-0.5">
                          <a
                            href={activityItem.person.href}
                            className="font-medium text-gray-900"
                          >
                            {activityItem.person.name}
                          </a>{" "}
                          added tags
                        </span>{" "}
                        <span className="mr-0.5">
                          {activityItem.tags?.map((tag) => (
                            <Fragment key={tag.name}>
                              <a
                                href={tag.href}
                                className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
                              >
                                <svg
                                  className={classNames(
                                    tag.color,
                                    "h-1.5 w-1.5"
                                  )}
                                  viewBox="0 0 6 6"
                                  aria-hidden="true"
                                >
                                  <circle cx={3} cy={3} r={3} />
                                </svg>
                                {tag.name}
                              </a>{" "}
                            </Fragment>
                          ))}
                        </span>
                        <span className="whitespace-nowrap">
                          {activityItem.date}
                        </span>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function OnlineClass(props: {
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div className="bg-white p-8 space-y-2">
      <div className="border-b border-gray-200 pb-5 flex space-x-2">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Online Class
        </h3>
        <span className="inline-flex flex-shrink-0 items-center rounded-md bg-red-50 px-1.5 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
          Live
        </span>
      </div>
      <img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2020/10/Zoom-Share-Computer-Audio-1.png?w=690&ssl=1" />
      <button
        type="button"
        className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => {
          props.setShowVideo(true)
        }}
      >
        Join
      </button>
    </div>
  )
}

export function CourseHome() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const paramValue = searchParams.get("resource")
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    if (!!paramValue && paramValue === "join") {
      setTimeout(() => {
        setShowLoading(true)
      }, 300)
      setTimeout(() => {
        setShowLoading(false)
      }, 1000)
      setTimeout(() => {
        setShowVideo(true)
      }, 1000)
    }
  }, [paramValue])
  const [showVideo, setShowVideo] = useState(false)

  if (showLoading) {
    return (
      <div className="flex flex-col items-center space-y-4 mt-24 justify-center">
        <svg
          className="animate-spin h-20 w-20 text-gray"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <p>Joining Class...</p>
      </div>
    )
  }

  return showVideo ? (
    <div className="w-full grid gap-4 sm:grid-cols-3">
      <div className="col-span-2 bg-white p-4 space-y-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Online Class
          </h1>
          <button
            type="button"
            className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={() => {
              setShowVideo(false)
            }}
          >
            Leave
          </button>
        </div>
        <img
          src="https://assets.zoom.us/images/en-us/desktop/mac/side-by-side-mode-stopped.png"
          className="w-full"
        />
      </div>
      <div className="bg-white p-4 flex flex-col justify-between">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Chat Messages
        </h1>
        <div className="space-y-2 flex flex-col justify-end">
          <div className="flex space-x-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-700">Hey guys</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold">Jane Doe</p>
              <p className="text-gray-700">I found this awesome link</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold">Jane Doe</p>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                className="text-blue-500"
              >
                video lecture
              </a>
            </div>
          </div>
          <div className="flex space-x-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold">John Doe</p>
              <p className="text-gray-700">
                Dignissim convallis aenean et tortor at risus viverra. Gravida
                dictum fusce ut placerat orci.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
            <label htmlFor="comment" className="sr-only">
              Add your comment
            </label>
            <textarea
              rows={2}
              name="comment"
              id="comment"
              className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Add chat here"
            />
          </div>
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send chat
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="col-span-2">
        <CourseAnnoucement />
      </div>
      <div className="col-span-2 space-y-4 sm:col-span-1">
        <OnlineClass setShowVideo={setShowVideo} />
        <CourseActivities />
      </div>
    </div>
  )
}
