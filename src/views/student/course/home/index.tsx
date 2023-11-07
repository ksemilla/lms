import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { CourseAnnoucement } from "./Announcements"
import { CourseActivities } from "./Activities"
import { ClassVideo } from "./ClassVideo"

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
      <img src="https://slideuplift.com/wp-content/uploads/2020/10/ezgif.com-gif-maker-2021-02-08T123944.582.gif" />
      <button
        type="button"
        className="rounded bg-white px-2 py-1 text-xs font-semibold text-indigo-900 shadow-sm ring-1 ring-inset ring-indigo-300 hover:bg-indigo-50"
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
    <ClassVideo setShowVideo={setShowVideo} />
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
