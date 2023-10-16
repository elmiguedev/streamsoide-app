import App from "../App";
import { ErrorPage } from "../pages/Error/ErrorPage";
import { Home } from "../pages/Home/Home";
import { Messages } from "../pages/Messages/Messages";
import { createBrowserRouter } from "react-router-dom"

export const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />
  },
  {
    name: "Messages",
    path: "/messages",
    element: <Messages />
  }
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
    errorElement: <ErrorPage />,
  },
]);