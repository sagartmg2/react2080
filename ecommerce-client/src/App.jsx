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
import Cart from "./pages/Cart";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setReduxUser } from "./redux/slice/userSlice";
import { useState } from "react";
import SellerProducts from "./pages/seller/Products";
import AddProducts from "./pages/seller/AddProducts";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootComponent />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "sellers",
        children: [
          {
            path: "products",
            children: [
              {
                path: "",
                element: <SellerProducts />,
              },
              {
                path: "add",
                element: <AddProducts/>,
              },
            ],
          },
          {
            path: ":slug",
            element: <Slug />,
          },
        ],
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

function App() {
  const [isLoading, setisLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) {
      axios
        .get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setReduxUser(res.data));
          setisLoading(false);
        })
        .catch((err) => {
          setisLoading(false);
        });
    } else {
      setisLoading(false);
    }
  }, []);

  return (
    <>
      {/* <Signup/> */}

      {isLoading ? (
        <div className=" flex h-screen items-center justify-center">
          is loading....
        </div>
      ) : (
        <div className="font-lato">
          <RouterProvider router={router} />
        </div>
      )}
    </>
  );
}

export default App;
