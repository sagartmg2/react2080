import React from "react";
import SingleTodo from "./SingleTodo";

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
  {
    title: "express",
    description:
      "lorem ipsum dolor, sit amet consectetur adipisicing ipsum dolor",
    status: false,
  },
  {
    title: "express",
    description:
      "lorem ipsum dolor, sit amet consectetur adipisicing ipsum dolor",
    status: false,
  },
];

export default function Todos() {
  return (
    <>
      {/* Fragment */}
      <h2>Todos</h2>
      <div id="todos" className="todos">
        {todos.map((el, index) => {
          return (
            <SingleTodo
              key={index}
              status={el.status}
              title={el.title}
              description={el.description}
            />
          );
        })}

        {/* <SingleTodo
          status={true}
          title="html"
          description={"html description"}
        />
        <SingleTodo
          status={todos[0].status}
          title={todos[0].title}
          description={todos[0].description}
        />
        <SingleTodo
          status={todos[1].status}
          title={todos[1].title}
          description={todos[1].description}
        /> */}
      </div>
    </>
  );
}
