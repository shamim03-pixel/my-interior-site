import { createBrowserRouter } from "react-router"
import HomePage from "../App"
import {
  AboutPage,
  ConsultationPage,
  NotFoundPage,
  ProjectsPage,
  ServicePage,
  SiteLayout,
} from "../pages/InnerPages"

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  {
    Component: SiteLayout,
    children: [
      { path: "about", Component: AboutPage },
      { path: "projects", Component: ProjectsPage },
      { path: "services/:serviceId", Component: ServicePage },
      { path: "consultation", Component: ConsultationPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
])
