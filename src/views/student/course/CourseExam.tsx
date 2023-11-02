import { useState } from "react"
import { classNames } from "../../../utils"

export function CourseExam() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      choices: [
        {
          id: 1,
          text: "dolor sit amet",
        },
        {
          id: 2,
          text: "adipiscing elit",
        },
        {
          id: 3,
          text: "incididunt ut labore",
        },
        {
          id: 4,
          text: "et dolore magna aliqua",
        },
      ],
      answer: 0,
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      choices: [
        {
          id: 5,
          text: "dolor sit amet",
        },
        {
          id: 6,
          text: "adipiscing elit",
        },
        {
          id: 7,
          text: "incididunt ut labore",
        },
        {
          id: 8,
          text: "et dolore magna aliqua",
        },
      ],
      answer: 0,
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      choices: [
        {
          id: 9,
          text: "dolor sit amet",
        },
        {
          id: 10,
          text: "adipiscing elit",
        },
        {
          id: 11,
          text: "incididunt ut labore",
        },
        {
          id: 12,
          text: "et dolore magna aliqua",
        },
      ],
      answer: 0,
    },
  ])

  return (
    <div className="bg-white p-4">
      <div className="ml-7 border-b-2 border-gray-700 pb-4">
        <h1 className="block text-xl font-bold leading-6 text-gray-900">
          Final Exam
        </h1>
        <p className="mt-1">Instructions</p>
        <p className="mt-1 text-gray-700 text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="space-y-8 mt-4">
        {questions.map((q, i) => (
          <div className="flex gap-4">
            <div>{i + 1}. </div>
            <div key={q.id}>
              <p>{q.text}</p>
              {q.choices.map((c, j) => (
                <div
                  key={c.id}
                  className={classNames(
                    "flex gap-2 cursor-pointer p-4 rounded-md border-2 hover:bg-gray-100",
                    q.answer === c.id ? "border-blue-500" : "border-transparent"
                  )}
                  onClick={() =>
                    setQuestions((prevState) =>
                      prevState.map((_q) => {
                        if (_q.id === q.id) {
                          if (c.id === q.answer) {
                            return { ..._q, answer: 0 }
                          } else return { ..._q, answer: c.id }
                        } else {
                          return _q
                        }
                      })
                    )
                  }
                >
                  <div>{String.fromCharCode(65 + j)}.</div>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex gap-4">
          <div>{4}. </div>
          <div>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <textarea
              id="about"
              name="about"
              placeholder="Enter your answer here"
              rows={3}
              className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Submit
        </button>
      </div>
    </div>
  )
}
