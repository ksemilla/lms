import { Outlet, useNavigate } from "react-router-dom"
import { useAuthStore } from "../stores/auth"
import { useEffect } from "react"

export function AuthContainer() {
  const authStore = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!authStore.user) {
      navigate("/")
    }
  }, [authStore.user, navigate])

  return <Outlet />
}
