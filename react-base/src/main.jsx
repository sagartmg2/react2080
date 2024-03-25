/* ecmascript module(react) vs common js (express) */
import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

let title = "React.js";
let description =
  "lorem ipsum dolor, sit amet consectetur adipisicing ipsum dolor, sit amet consectetur adipisicin ipsum dolor, sit amet consectetur adipisicin ipsum dolor, sit amet consectetur adipisicin ipsum dolor, sit amet consectetur adipisicin elit.";

let todos = [
  {
    title: "html",
    description:
      "lorem ipsum dolor, sit amet consectetur adipisicing ipsum dolor",
    status: "completed",
  },
  {
    title: "css",
    description:
      "lorem ipsum dolor, sit amet consectetur adipisicing ipsum dolor",
    status: true,
  },
  {
    title: "reac",
    description:
      "lorem ipsum dolor, sit amet consectetur adipisicing ipsum dolor",
    status: false,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <h1>{title}</h1>
      <hr />
      <p>{description}</p>
      <h2>Todos</h2>

      <div className="todos">
        <div class="todo">
          <h3>
            {todos[0].title} ( {todos[0].status} )
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, ut
            repellat? Quis, adipisci voluptatem! Accusantium aut consequatur
            quisquam nobis nulla debitis. Totam voluptates, aspernatur quos
            impedit corrupti adipisci amet! Laboriosam.
          </p>
        </div>
        <div class="todo">
          <h3>html ( complted )</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, ut
            repellat? Quis, adipisci voluptatem! Accusantium aut consequatur
            quisquam nobis nulla debitis. Totam voluptates, aspernatur quos
            impedit corrupti adipisci amet! Laboriosam.
          </p>
        </div>
        <div class="todo">
          <h3>html ( complted )</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, ut
            repellat? Quis, adipisci voluptatem! Accusantium aut consequatur
            quisquam nobis nulla debitis. Totam voluptates, aspernatur quos
            impedit corrupti adipisci amet! Laboriosam.
          </p>
        </div>
      </div>
    </div>
  </React.StrictMode>
);
