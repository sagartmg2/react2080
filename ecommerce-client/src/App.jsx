import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import RootComponent from "./components/common/RootComponent";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootComponent />,
    children: [
      {
        path:"",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="font-lato">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
