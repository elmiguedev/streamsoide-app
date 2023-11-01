import App from "../App";
import { createBrowserRouter } from "react-router-dom"
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { ErrorPage } from "../pages/Error/ErrorPage";
import { MessagesPage } from "../pages/Messages/MessagesPage";
import { SocialPage } from "../pages/Social/SocialPage";
import { TasksPage } from "../pages/Tasks/TasksPage";
import { CommandsPage } from "../pages/Commands/CommandsPage";
import { StreamPage } from "../pages/Stream/StreamPage";
import { ChatPage } from "../pages/Chat/ChatPage";

export const routes = [
  {
    name: "Dashboard",
    path: "",
    element: <DashboardPage />
  },
  {
    name: "Messages",
    path: "messages",
    element: <MessagesPage />
  },
  {
    name: "Social",
    path: "/social",
    element: <SocialPage />
  },
  {
    name: "Tasks",
    path: "tasks",
    element: <TasksPage />
  },
  {
    name: "Chat",
    path: "/chat",
    element: <ChatPage />
  },
  {
    name: "Commands",
    path: "/commands",
    element: <CommandsPage />
  },
  {
    name: "Stream",
    path: "stream",
    element: <StreamPage />
  },
]

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: routes,
    errorElement: <ErrorPage />,
  },
  {
    path: "stream-layer",
    element: <StreamPage />
  }
]);