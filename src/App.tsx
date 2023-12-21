import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Rootlayout";
import Home from "./routes/Home";
import Service from "./routes/Service";
import About from "./routes/About";
import Contact from "./routes/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "service", element: <Service /> },
          { path: "about", element: <About /> },
          { path: "contact", element: <Contact /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
