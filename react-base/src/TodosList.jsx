import React, { useState } from "react";

export default function TodosList() {
  // console.log("re-render");

  let initialTodos = ["html", "css", "jvascript"];
  const [todos, setTodos] = useState(initialTodos);
  let [inputValue, setInputValue] = useState("hello");

  function handleInputChange(e) {
    // inputValue = e.target.value; // donot change the state variable directly
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.title.value);
    // todos.push(inputValue); // donot change the state variable directly

    // let temp = todos; // wrong // temp also points to location of todos // reference-datatype
    let temp = [...todos]; // createing new array  and copyting valuees of todos
    temp.push(inputValue); // ["html", "css", "jvascript","React"]
    setTodos(temp);
  }

  function deleteTodo(deleteableIndex) {
    /* 
    let temp = [...todos]; // ["html", "css", "jvascript"]
    temp.splice(index, 1); // index = 0 //  [ "css", "jvascript"]
    setTodos(temp);
    */

    let newTodos = todos.filter((el, index) => {
      if (index != deleteableIndex) {
        return true;
      }
    });
    setTodos(newTodos);
  }

  console.log({ todos });

  return (
    <div>
      <h2>user is typing: {inputValue} </h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} name="title" type="text" />
        <button>create</button>
      </form>
      <h3>Todos</h3>
      <ul>
        {todos.map((el, index) => {
          return (
            <li key={index}>
              {el}
              <button
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
      {todos.length == 0 ? <p>empty( 0 ) todos </p> : null}
      {todos.length === 0 && <p>empty( 0 ) todos </p>}
    </div>
  );
}
