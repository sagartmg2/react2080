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
      {
        path: "products",
        children:[
          {
            path: "",
            element: <Products />,
          },
          {
            path: ":slug",
            element: <Slug />,
          },
        ]
        
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
