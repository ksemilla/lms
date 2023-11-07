export function CourseAnnoucement() {
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
