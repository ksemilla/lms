import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useUserStore } from "../stores"
import toast from "react-hot-toast"
import { useAuthStore } from "../stores/auth"
import { UserRole } from "../types"
import { useState } from "react"
import { Loader } from "../components/Loader"

export function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<{ email: string; password: string }>()

  const authStore = useAuthStore()
  const userStore = useUserStore()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const onSubmit = handleSubmit((data) => {
    const user = userStore.getUserByEmail(data.email)

    if (!user) {
      toast.error(`No user found with email ${data.email}`)
    } else if (user?.password !== data.password) {
      toast.error(`Wrong password`)
    } else {
      authStore.setUser(user)
      setLoading(true)
      setTimeout(() => {
        switch (user.role) {
          case UserRole.TRAINER:
            navigate("/trainer/dashboard")
            break
          case UserRole.ADMIN:
            navigate("/trainer/dashboard")
            break
          default:
            navigate("/student/dashboard")
            break
        }
      }, 800)
    }
  })

  return (
    <>
      <div className="flex min-h-[100vh] flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-10 w-auto cursor-pointer"
                src="/src/assets/icon.png"
                alt="Your Company"
                onClick={() => navigate("/")}
              />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Any questions?{" "}
                <a
                  href="contact-us"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Contact our admin
                </a>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        {...register("email", {
                          required: "This field is required",
                          pattern: {
                            value: /^\S+@\S+$/,
                            message: "Enter valid email",
                          },
                        })}
                      />
                    </div>
                    {errors?.email ? (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        {...register("password", {
                          required: "Enter password",
                        })}
                      />
                    </div>
                    {errors?.password ? (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.password.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed"
                      disabled={loading}
                    >
                      {loading ? <Loader size={6} /> : "Sign in"}
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex justify-center mt-4">
                <span className="isolate inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                    onClick={() => {
                      setValue("email", "student@student.com")
                      setValue("password", "student")
                    }}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                    onClick={() => {
                      setValue("email", "trainer@trainer.com")
                      setValue("password", "trainer")
                    }}
                  >
                    Trainer
                  </button>
                  <button
                    type="button"
                    className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                    onClick={() => {
                      setValue("email", "admin@admin.com")
                      setValue("password", "admin")
                    }}
                  >
                    Admin
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  )
}
