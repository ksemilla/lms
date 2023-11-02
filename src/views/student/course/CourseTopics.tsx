import { Tab } from "@headlessui/react"
import { classNames } from "../../../utils"
import { Link } from "react-router-dom"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

const topics = [
  {
    id: 1,
    slug: "Topic 1",
    title: "Time and Budget Management",
  },
  {
    id: 2,
    slug: "Topic 2",
    title: "Interpersonal Skills",
  },
  {
    id: 3,
    slug: "Topic 3",
    title: "Resource Gathering",
  },
]

export function CourseTopics() {
  return (
    <div className="w-full max-w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-indigo-500 p-1">
          {topics.map((t) => (
            <Tab
              key={t.id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
                  "ring-white/60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow text-black"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {t.slug}: {t.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-12 space-y-8",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
            )}
          >
            <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Time and Budget Management
            </p>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Imperdiet proin fermentum leo vel orci porta non. Ac turpis
              egestas integer eget aliquet nibh praesent tristique magna.
              Tristique senectus et netus et malesuada fames ac. Bibendum at
              varius vel pharetra vel. Vulputate mi sit amet mauris commodo quis
              imperdiet. Praesent tristique magna sit amet. Gravida arcu ac
              tortor dignissim. Ac turpis egestas sed tempus. Fames ac turpis
              egestas integer eget aliquet nibh. Orci porta non{" "}
              <a
                href="https://r.mtdv.me/DDatAOaw9B"
                target="_blank"
                className="text-blue-500 hover:text-blue-800"
              >
                Link to video{" "}
              </a>
              pulvinar neque laoreet suspendisse interdum. Venenatis cras sed
              felis eget. Tortor posuere ac ut consequat semper viverra.
            </p>
            <div className="flex justify-center">
              <img
                src="https://source.unsplash.com/white-and-black-abstract-illustration-PcDGGex9-jA/"
                className="w-96"
              />
            </div>
            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-sm font-medium leading-6 text-gray-900">
                Activity - Report 1
              </h3>
              <Link
                to="/student/courses/leadership-skills-101/requirements?resource=report_1"
                className="flex gap-2 text-md font-semibold leading-6 text-green-600 pointer-events-none"
              >
                You've already submitted your report{" "}
                <CheckCircleIcon className="w-5" />
              </Link>
            </div>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              Imperdiet dui accumsan sit amet nulla facilisi. Facilisis gravida
              neque convallis a cras semper auctor neque vitae. Quis auctor elit
              sed vulputate mi sit amet mauris. Lorem ipsum dolor sit amet
              consectetur adipiscing elit. Tempus iaculis urna id volutpat
              lacus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis
              nunc. Orci sagittis eu volutpat odio facilisis mauris sit. Neque
              convallis a cras semper auctor neque. Quam pellentesque nec nam
              aliquam sem et tortor consequat. Scelerisque purus semper eget
              duis at tellus at urna condimentum. Ac tortor vitae purus faucibus
              ornare. Proin sed libero enim sed. Pharetra vel turpis nunc eget
              lorem dolor sed. Elit ullamcorper dignissim cras tincidunt
              lobortis feugiat. In eu mi bibendum neque{" "}
              <a
                href="https://r.mtdv.me/DDatAOaw9B"
                target="_blank"
                className="text-blue-500 hover:text-blue-800"
              >
                Link to video{" "}
              </a>{" "}
              egestas congue quisque. Mi in nulla posuere sollicitudin aliquam.
              Vestibulum sed arcu non odio euismod lacinia. Volutpat sed cras
              ornare arcu dui vivamus arcu.
            </p>
            <div className="flex justify-center">
              <img
                src="https://source.unsplash.com/green-and-yellow-beaded-necklace-hTtK6tvTRY0"
                className="w-96"
              />
            </div>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              Arcu risus quis varius quam quisque id. Ut morbi tincidunt augue
              interdum velit euismod in pellentesque. Sed risus ultricies
              tristique nulla aliquet enim tortor at. Euismod in pellentesque
              massa placerat duis. In mollis nunc sed id semper risus in
              hendrerit gravida. Vivamus at augue eget arcu dictum varius duis
              at. Nisl rhoncus mattis rhoncus urna neque. Pellentesque habitant
              morbi tristique senectus et netus. Sit amet tellus cras adipiscing
              enim eu turpis egestas. Est sit amet facilisis magna etiam tempor
              orci. Lectus proin nibh nisl condimentum id{" "}
              <a
                href="https://r.mtdv.me/DDatAOaw9B"
                target="_blank"
                className="text-blue-500 hover:text-blue-800"
              >
                Link to video{" "}
              </a>{" "}
              venenatis a. Neque gravida in fermentum et sollicitudin ac orci.
              Id ornare arcu odio ut.
            </p>
            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-sm font-medium leading-6 text-gray-900">
                Activity - Assessment task 1
              </h3>
              <p className="text-sm font-base leading-6 text-gray-700">
                Ac turpis egestas integer eget aliquet nibh praesent tristique
                magna. Tristique senectus et netus et malesuada fames ac.
                Bibendum at varius vel pharetra vel. Vulputate mi sit amet
                mauris commodo quis imperdiet. Praesent tristique magna sit
                amet.
              </p>
              <Link
                to="/student/courses/leadership-skills-101/requirements?resource=assessment_task_1"
                className="flex gap-2 text-md font-semibold leading-6 text-green-600 pointer-events-none"
              >
                You've already submitted your assessment task 1{" "}
                <CheckCircleIcon className="w-5" />
              </Link>
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-12 space-y-8",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
            )}
          >
            <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Interpersonal Skills
            </p>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Facilisi etiam dignissim diam quis enim lobortis. Tristique
              senectus et netus et malesuada. Nunc congue nisi vitae suscipit
              tellus mauris a. Elementum tempus egestas sed sed. Semper eget
              duis at tellus at urna condimentum mattis. Quis varius quam
              quisque id. Egestas fringilla phasellus faucibus scelerisque
              eleifend donec pretium. Augue ut lectus arcu bibendum at. Orci
              phasellus egestas tellus rutrum tellus pellentesque eu tincidunt
              tortor.{" "}
              <a
                href="https://r.mtdv.me/DDatAOaw9B"
                target="_blank"
                className="text-blue-500 hover:text-blue-800"
              >
                Link to video{" "}
              </a>{" "}
              Egestas pretium aenean pharetra magna ac placerat vestibulum
              lectus. Dictumst quisque sagittis purus sit. Velit scelerisque in
              dictum non consectetur a. In iaculis nunc sed augue lacus.
              Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
            </p>
            <div className="flex justify-center">
              <img
                src="https://source.unsplash.com/white-and-black-abstract-illustration-PcDGGex9-jA/"
                className="w-96"
              />
            </div>
            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-sm font-medium leading-6 text-gray-900">
                Activity - Term Paper
              </h3>
              <Link
                to="/student/courses/leadership-skills-101/requirements?resource=term_paper"
                className="flex gap-2 text-md font-semibold leading-6 text-blue-500 hover:text-blue-800"
              >
                Submit term paper here <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              Velit sed ullamcorper morbi tincidunt ornare. Tincidunt lobortis
              feugiat vivamus at augue. Non nisi est sit amet. Turpis massa sed
              elementum tempus egestas. Amet risus nullam eget felis eget.
              Malesuada pellentesque elit eget gravida cum sociis natoque
              penatibus et. Pretium aenean pharetra magna ac placerat vestibulum
              lectus mauris ultrices. Odio ut enim blandit volutpat maecenas
              volutpat blandit aliquam etiam. Lectus mauris ultrices eros in
              cursus turpis massa tincidunt dui. Viverra accumsan in nisl nisi
              scelerisque eu ultrices vitae auctor. Dolor sed viverra ipsum
              nunc. Proin sagittis nisl rhoncus mattis rhoncus urna neque
              viverra justo. Iaculis nunc sed augue lacus viverra vitae congue
              eu consequat. Consectetur adipiscing elit duis tristique
              sollicitudin nibh sit. Ipsum a arcu cursus vitae. Amet cursus sit
              amet dictum. Aliquet porttitor lacus luctus accumsan{" "}
              <a
                href="https://r.mtdv.me/DDatAOaw9B"
                target="_blank"
                className="text-blue-500 hover:text-blue-800"
              >
                Link to video{" "}
              </a>{" "}
              tortor posuere ac ut consequat. Nisl tincidunt eget nullam non
              nisi est sit. Sem integer vitae justo eget magna fermentum
              iaculis.
            </p>
            <div className="flex justify-center">
              <img
                src="https://source.unsplash.com/green-and-yellow-beaded-necklace-hTtK6tvTRY0"
                className="w-96"
              />
            </div>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              Risus feugiat in ante metus. Lobortis elementum nibh{" "}
              <a
                href="https://r.mtdv.me/DDatAOaw9B"
                target="_blank"
                className="text-blue-500 hover:text-blue-800"
              >
                Link to video{" "}
              </a>{" "}
              tellus molestie. In aliquam sem fringilla ut morbi tincidunt augue
              interdum. At augue eget arcu dictum varius. Sit amet dictum sit
              amet. Purus viverra accumsan in nisl nisi scelerisque eu ultrices.
              Eget mauris pharetra et ultrices neque ornare aenean euismod
              elementum. Id consectetur purus ut faucibus pulvinar. Habitant
              morbi tristique senectus et netus et malesuada. Augue lacus
              viverra vitae congue eu consequat ac felis. Ante in nibh mauris
              cursus. Egestas dui id ornare arcu. Ultrices neque ornare aenean
              euismod elementum nisi quis. Interdum posuere lorem ipsum dolor
              sit amet consectetur. Lectus magna fringilla urna porttitor
              rhoncus dolor. Phasellus egestas tellus rutrum tellus
              pellentesque.
            </p>
            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-sm font-medium leading-6 text-gray-900">
                Activity - Assessment Task 2
              </h3>
              <Link
                to="/student/courses/leadership-skills-101/requirements?resource=assessment_task_2"
                className="flex gap-2 text-md font-semibold leading-6 text-blue-500 hover:text-blue-800"
              >
                Submit assessment task 2 here <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-12 space-y-8",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
            )}
          >
            <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Resource Gathering
            </p>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.
              Condimentum id venenatis a condimentum vitae sapien pellentesque
              habitant. Eget aliquet nibh praesent tristique magna sit amet
              purus. Cursus vitae congue mauris rhoncus aenean vel elit{" "}
              <a
                href="https://r.mtdv.me/DDatAOaw9B"
                target="_blank"
                className="text-blue-500 hover:text-blue-800"
              >
                Link to video{" "}
              </a>{" "}
              scelerisque. Elementum nisi quis eleifend quam adipiscing. Et
              malesuada fames ac turpis. Adipiscing elit pellentesque habitant
              morbi tristique senectus et netus et. Tristique nulla aliquet enim
              tortor. At varius vel pharetra vel turpis nunc eget. Mauris in
              aliquam sem fringilla ut. A scelerisque purus semper eget duis at
              tellus at.
            </p>
            <div className="flex justify-center">
              <img
                src="https://source.unsplash.com/green-and-yellow-beaded-necklace-hTtK6tvTRY0"
                className="w-96"
              />
            </div>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              Pulvinar pellentesque habitant morbi tristique. Convallis
              convallis tellus id interdum velit laoreet. Risus nullam eget
              felis eget. Eget nulla facilisi etiam dignissim diam quis enim.
              Velit aliquet sagittis id consectetur purus ut faucibus pulvinar
              elementum. Augue eget arcu dictum varius duis. Malesuada bibendum
              arcu vitae elementum curabitur vitae nunc sed velit. Adipiscing
              elit{" "}
              <a
                href="https://r.mtdv.me/DDatAOaw9B"
                target="_blank"
                className="text-blue-500 hover:text-blue-800"
              >
                Link to video{" "}
              </a>{" "}
              duis tristique sollicitudin nibh sit amet. Integer eget aliquet
              nibh praesent tristique magna. Tristique et egestas quis ipsum
              suspendisse. Nullam non nisi est sit. In egestas erat imperdiet
              sed euismod nisi. Egestas erat imperdiet sed euismod nisi porta.
              Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
              Ultrices vitae auctor eu augue ut lectus arcu.
            </p>
            <div className="flex justify-center">
              <img
                alt="a man holding a microphone up to his face while standing in front of a screen"
                src="https://i.pinimg.com/originals/75/98/d1/7598d103a735d5568964e4967e42823d.gif"
              />
            </div>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              Dignissim convallis{" "}
              <a
                href="https://r.mtdv.me/DDatAOaw9B"
                target="_blank"
                className="text-blue-500 hover:text-blue-800"
              >
                Link to video{" "}
              </a>{" "}
              aenean et tortor at risus viverra. Gravida dictum fusce ut
              placerat orci. Suspendisse in est ante in nibh mauris cursus
              mattis molestie. At consectetur lorem donec massa. Magna ac
              placerat vestibulum lectus mauris ultrices eros. Fermentum leo vel
              orci porta non pulvinar neque laoreet. Cursus euismod quis viverra
              nibh cras pulvinar mattis nunc. Vitae tortor condimentum lacinia
              quis. Libero nunc consequat interdum varius sit amet. Mauris sit
              amet massa vitae. Enim neque volutpat ac tincidunt vitae semper
              quis lectus nulla. Fusce ut placerat orci nulla pellentesque
              dignissim. Et ligula ullamcorper malesuada proin libero nunc
              consequat interdum. Ante metus dictum at tempor commodo
              ullamcorper a lacus vestibulum. Eu non diam phasellus vestibulum
              lorem sed risus ultricies. Vel fringilla est ullamcorper eget
              nulla facilisi etiam. Mauris rhoncus aenean vel elit scelerisque
              mauris pellentesque. Diam maecenas sed enim ut sem viverra aliquet
              eget sit. Accumsan in nisl nisi scelerisque. Dui sapien eget mi
              proin sed libero.
            </p>

            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-sm font-medium leading-6 text-gray-900">
                Activity - Final Exam
              </h3>
              <Link
                to="/student/courses/leadership-skills-101/requirements?resource=final_exam"
                className="flex gap-2 text-md font-semibold leading-6 text-blue-500 hover:text-blue-800"
              >
                Take final exam here <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
