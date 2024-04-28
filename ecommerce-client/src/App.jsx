
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import RootComponent from "./components/common/RootComponent";
import Products from "./pages/products/Products";
import Slug from "./pages/products/Slug";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: "",
      element: <RootComponent user={user} setUser={setUser} />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login setUser={setUser}  />,
        },
        {
          path: "signup",
          element: <Signup  />,
        },
        {
          path: "products",
          children: [
            {
              path: "",
              element: <Products />,
            },
            {
              path: ":slug",
              element: <Slug />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      {/* <Signup/> */}
      <div className="font-lato">
        <RouterProvider customText={"customtext"} router={router} />
        <ToastContainer theme="colored" />
      </div>
    </>
  );
}

export default App;
