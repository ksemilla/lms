import { Outlet } from "react-router-dom"

export function AdminContainer() {
  return (
    <div>
      Admin dashboard <Outlet />
    </div>
  )
}
