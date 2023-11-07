import {
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  UsersIcon,
} from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"

export function ClassVideo(props: {
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [volume, setVolume] = useState("50")
  const [lastPositiveVolume, setLastPositiveVolume] = useState("50")
  const [play, setPlay] = useState(false)
  const [messages, setMessages] = useState<
    { message: string; imageUrl: string; author: string }[]
  >([])
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (volume !== "0") {
      setLastPositiveVolume(volume)
    }
  }, [volume])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessages((prevState) => [
        ...prevState,
        {
          author: "Jane Doe",
          message: "Lorem Ipsum",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ])
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="w-full grid gap-4 sm:grid-cols-4">
      <div className="col-span-3">
        <div className="bg-white p-4 space-y-2">
          <div className="flex items-center space-x-2">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Online Class
            </h1>
          </div>
          <img
            src="https://slideuplift.com/wp-content/uploads/2020/10/ezgif.com-gif-maker-2021-02-08T123944.582.gif"
            className="w-full"
          />
          <div className="flex justify-between">
            <div className="flex space-x-1 items-center">
              {play ? (
                <div className="p-1 text-gray-700 rounded-sm cursor-pointer hover:bg-gray-100">
                  <PauseIcon
                    className="h-6"
                    onClick={() => setPlay((prevState) => !prevState)}
                  />
                </div>
              ) : (
                <div className="p-1 text-gray-700 rounded-sm cursor-pointer hover:bg-gray-100">
                  <PlayIcon
                    className="h-6 "
                    onClick={() => setPlay((prevState) => !prevState)}
                  />
                </div>
              )}
              {volume === "0" ? (
                <div className="p-1 text-gray-700 rounded-sm cursor-pointer hover:bg-gray-100">
                  <SpeakerXMarkIcon
                    className="h-6"
                    onClick={() => setVolume(lastPositiveVolume)}
                  />
                </div>
              ) : (
                <div className="p-1 text-gray-700 rounded-sm cursor-pointer hover:bg-gray-100">
                  <SpeakerWaveIcon
                    className="h-6"
                    onClick={() => setVolume("0")}
                  />
                </div>
              )}{" "}
              <input
                type="range"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
              />
            </div>
            <div className="flex space-x-2 items-center">
              <div className="flex space-x-1 text-red-500">
                <UsersIcon className="h-6" /> <span>24</span>
              </div>
              <button
                type="button"
                className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => {
                  props.setShowVideo(false)
                }}
              >
                Leave
              </button>
            </div>
          </div>
        </div>
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
          {messages.map((m, i) => (
            <div key={i} className="flex space-x-2">
              <div>
                <img
                  src={m.imageUrl}
                  className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold">{m.author}</p>
                <p className="text-gray-700 break-all">{m.message}</p>
              </div>
            </div>
          ))}
          <textarea
            rows={3}
            name="comment"
            id="comment"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed"
            placeholder="Add chat here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={messages.length >= 3}
          />
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed"
            onClick={() => {
              if (message !== "") {
                setMessages((prevState) => [
                  ...prevState,
                  {
                    author: "Tom Cook",
                    message,
                    imageUrl:
                      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
                  },
                ])
                setMessage("")
              }
            }}
            disabled={messages.length >= 3}
          >
            Send chat
          </button>
        </div>
      </div>
    </div>
  )
}
