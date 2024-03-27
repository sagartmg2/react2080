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
];

export default function Todos() {
  return (
    <>
      {/* Fragment */}
      <h2>Todos</h2>
      <div id="todos" className="todos">
        {/*  using component */}
        {todos.map((el) => {
          return (
            <SingleTodo
              status="completed"
              title={el.title}
              description={el.description}
            />
          );
        })}
        {/* <SingleTodo
          status="completed"
          title="react"
          description="react description"
        />
        <SingleTodo
          status="completed"
          title="git"
          description="git description"
        /> */}
      </div>
    </>
  );
}
