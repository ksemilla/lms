import { RouterProvider } from "react-router-dom"
import "./App.css"
import router from "./router"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          error: {
            style: {
              backgroundColor: "rgb(239, 68, 68)",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "red",
            },
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  )
}

export default App
