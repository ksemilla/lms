import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { classNames } from "../../../utils"

type Post = {
  id: string
  title?: string
  content: string
  children?: Post[]
  imageUrl: string
  date: string
  isLiked?: boolean
}

const posts: Post[] = [
  {
    id: uuidv4(),
    title: "Questions to assessment task 1",
    content:
      "Enim nunc faucibus a pellentesque. Sed faucibus turpis in eu. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Vitae et leo duis ut diam. Blandit libero volutpat sed cras ornare. Tempor commodo ullamcorper a lacus vestibulum sed arcu non.",
    children: [
      {
        id: uuidv4(),
        content: "Testing 123",
        imageUrl:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
        date: "5m",
      },
      {
        id: uuidv4(),
        content: "pellentesque. Sed faucibus turpis in eu.",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        date: "12m",
        children: [
          {
            id: uuidv4(),
            content: "pellentesque. Sed faucibus turpis in eu.",
            imageUrl:
              "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            date: "2m",
          },
          {
            id: uuidv4(),
            content: "pellentesque. Sed faucibus turpis in eu.",
            imageUrl:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
            date: "3m",
            isLiked: true,
          },
          {
            id: uuidv4(),
            content: "pellentesque. Sed faucibus turpis in eu.",
            imageUrl:
              "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            date: "45m",
            isLiked: true,
          },
        ],
      },
      {
        id: uuidv4(),
        content: "vestibulum sed arcu non",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        date: "24m",
        isLiked: true,
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2d",
  },
  {
    id: uuidv4(),
    title: "Welcome to class",
    content:
      "Aliquam ut porttitor leo a diam sollicitudin. Mollis nunc sed id semper risus. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Cras tincidunt lobortis feugiat vivamus. Sodales ut eu sem integer vitae justo eget magna fermentum.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "3d",
    isLiked: true,
  },
]

function CoursePost(props: { post: Post }) {
  const [post, setPost] = useState<Post>()
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [comment, setComment] = useState("")

  useEffect(() => {
    setPost(props.post)
  }, [props.post])

  return (
    <div className="flex gap-2">
      <div>
        <img
          className="h-10 w-10 rounded-full bg-gray-800"
          src={post?.imageUrl}
          alt=""
        />
      </div>
      <div className="flex-1">
        <h3 className="text-md text-lg font-semibold text-gray-900">
          {post?.title}
        </h3>
        <p className="text-sm text-gray-700">{post?.content}</p>
        <div className="text-xs font-semibold text-gray-800 space-x-2">
          <span
            className={classNames(
              "cursor-pointer hover:text-blue-300",
              post?.isLiked ? "text-blue-500" : ""
            )}
            onClick={() =>
              setPost((prevState) => {
                if (!!prevState) {
                  return { ...prevState, isLiked: !prevState.isLiked }
                } else {
                  prevState
                }
              })
            }
          >
            Like
          </span>
          <span
            className="cursor-pointer hover:text-blue-500"
            onClick={() => setShowReplyForm(true)}
          >
            Reply
          </span>
          <span>{post?.date}</span>
        </div>
        {showReplyForm && (
          <div>
            <div className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={2}
                name="comment"
                id="comment"
                className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Add your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="space-x-2">
              <button
                className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  setPost((prevState) => {
                    if (!!prevState && !!comment) {
                      return {
                        ...prevState,
                        children: prevState.children
                          ? [
                              {
                                id: uuidv4(),
                                content: comment,
                                imageUrl:
                                  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
                                date: "1s",
                              },
                              ...prevState.children,
                            ]
                          : [
                              {
                                id: uuidv4(),
                                content: comment,
                                imageUrl:
                                  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
                                date: "1s",
                              },
                            ],
                      }
                    } else {
                      return prevState
                    }
                  })
                  setComment("")
                  setShowReplyForm(false)
                }}
              >
                Add comment
              </button>
              <button
                className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => {
                  setComment("")
                  setShowReplyForm(false)
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        <div className="space-y-2 pt-2">
          {post?.children?.map((c) => (
            <CoursePost key={c.id} post={c} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function CourseForum() {
  return (
    <div className="bg-white p-4">
      <div className="space-y-8 divide-y-2 first:pt-4">
        {posts.map((p) => (
          <div key={p.id} className="[&:not(:first-child)]:pt-8">
            <CoursePost post={p} />
          </div>
        ))}
      </div>
    </div>
  )
}
