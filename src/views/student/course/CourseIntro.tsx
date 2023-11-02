import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid"

const features = [
  {
    name: "Spaghetti",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Pork Ribs",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Shrimp Bucket",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
    icon: ArrowPathIcon,
  },
]

export function CourseIntro() {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="px-6 lg:px-12">
        <div>
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Introduction
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Vestibulum imperdiet imperdiet justo eget rhoncus. Nulla facilisi.
            Aenean arcu nisi, molestie eget nisl a, fringilla venenatis diam.
            Duis sit amet ligula sed velit venenatis hendrerit vel ac mauris.
            Suspendisse malesuada porttitor velit elementum suscipit. Fusce
            auctor vulputate libero id lobortis. Maecenas pulvinar iaculis lorem
            ut viverra. Nunc sit amet turpis quis nisl vehicula finibus.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Suspendisse mollis libero nec pharetra ultrices. Suspendisse et
            ligula facilisis, pharetra tellus sit amet, ultrices odio. Fusce vel
            iaculis libero, quis dictum urna. Aliquam at efficitur arcu, quis
            scelerisque felis. Morbi aliquet nibh turpis, vel accumsan tellus
            pretium id. Fusce vel sodales felis. Aenean vel pharetra ante, eu
            commodo ante. Nulla quis dapibus felis, in lacinia eros. Nullam
            mollis quis erat ac fringilla. In id tellus mi.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pellentesque id convallis mauris. Duis eu ante sed arcu tempus
            luctus eu at dui. Ut nec porta diam. Aliquam lobortis semper enim,
            pharetra ullamcorper nisl dapibus quis. In ultrices auctor pharetra.
            Duis a eros eros. Vestibulum hendrerit, metus at commodo convallis,
            eros lorem dictum sapien, ac elementum metus purus quis ex. Aliquam
            fringilla metus eget mi ultrices sodales. Pellentesque vehicula quis
            sapien sed tristique. Quisque sed erat vel sem cursus finibus. Nunc
            at nisi in nibh ultricies bibendum.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-12 gap-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
            Intro video course by{" "}
            <span className="text-blue-600">Rick Astley</span>
          </h1>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/j5a0jTc9S10?si=D1uIS7DTKS9CQAYO"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
