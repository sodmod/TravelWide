import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Rootlayout";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <RootLayout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
