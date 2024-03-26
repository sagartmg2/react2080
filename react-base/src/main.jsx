/* ecmascript module(react) vs common js (express) */
import React from "react";
import ReactDOM from "react-dom/client";

import "./main.css";

let title = "React.js";
let description = "Lorem ipsum dolor sit amet consectetur adipisicin";

let todos = [
  {
    title: "html",
    description:
      "lorem ipsum dolor, sit amet consectetur adipisicing ipsum dolor",
    status: true,
  },
  {
    title: "css",
    description:
      "lorem ipsum dolor, sit amet consectetur adipisicing ipsum dolor",
    status: false,
  },
  {
    title: "react",
    description:
      "lorem ipsum dolor, sit amet consectetur adipisicing ipsum dolor",
    status: false,
  },
];


/* functional Component */
function Todo() {
  return (
    <div className="todo">
      <h3>
        React 
      </h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio explicabo nulla sint quia commodi assumenda aliquam amet illo soluta eligendi, voluptas totam sed laboriosam cupiditate a autem repudiandae, voluptate alias.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>{title}</h1>
    <p>{description}</p>

    <h2>Todos</h2>

    {/* props in component */}
    <div className="todos">
      <Todo />
      <Todo />
      <Todo />

      {/* <div className="todo">
        <h3>
          {todos[0].title} ( {todos[0].status ? "complted ✔ " : "pending ❌"} )
        </h3>
        <p>{todos[0].description}</p>
      </div>

      <div className="todo">
        <h3>
          {todos[1].title} ( {todos[1].status ? "comploted ✔ " : "pending ❌"} )
        </h3>
        <p>{todos[1].description}</p>
      </div>

      <div className="todo">
        <h3>
          {todos[2].title} ( {todos[2].status ? "comploted ✔ " : "pending ❌"} )
        </h3>
        <p>{todos[2].description}</p>
      </div> */}
    </div>
  </React.StrictMode>
);
