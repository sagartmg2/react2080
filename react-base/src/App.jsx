import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import Todos from "./Todos";
import Users from "./Users";
import Products from "./Products";
import Counter from "./Counter";
import TodosList from "./TodosList";
import GoogleTabs from "./GoogleTabs";
import ShoppingList from "./ShoppingList";
import ApiProductsList from "./ApiProductsList";
import ComponentLIfeCyle from "./ComponentLIfeCyle";
import ApiProductsListAutoLoad from "./ApiProductsListAutoLoad";

import TodosApi from "./TodosApi";
import Header from "./Header";

let title = "state in react.js";
let description = "Lorem ipsum dolor sit amet consectetur adipisicin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <div>Home Page</div>
        </>
      ),
    },
    {
      path: "/counter",
      element: <Counter />,
    },
    {
      path: "/todos-api",
      element: <TodosApi />,
    },
    {
      path: "/products-autoload",
      element: <ApiProductsListAutoLoad />,
    },
  ]);

  return (
    <div>
      <div>
        

        <RouterProvider router={router} />

        
        {/* <h1>{title}</h1>
        <p>{description}</p> */}
        {/* <Counter /> */}
        {/* <ComponentLIfeCyle /> */}
        {/* <ApiProductsList /> */}
        {/* <ApiProductsListAutoLoad /> */}
        {/* <TodosApi /> */}
        {/* <ShoppingList /> */}
        {/* <TodosList /> */}
        {/* <GoogleTabs/> */}
        {/* <Todos /> */}
        {/* <Users /> */}
        {/* <Products/> */}
        {/* <Courses/> */}
      </div>
    </div>
  );
}

export default App;

{
  /* PrintTodo("react","descritpion") */
}

{
  /* <div className="todo">
          <h3 className="capitalize">react</h3>
          <p>Lorem ipsum dolor sit, amet consectetuimpedit nam</p>
        </div>
        <div className="todo">
          <h3 className="capitalize">git</h3>
          <p>Lorem ipsum dolor sit, amet consectetuimpedit nam</p>
        </div>
        <div className="todo">
          <h3 className="capitalize">exress</h3>
          <p>Lorem ipsum dolor sit, amet consectetuimpedit nam</p>
        </div> */
}
