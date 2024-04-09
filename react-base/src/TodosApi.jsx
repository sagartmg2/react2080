import axios from "axios";
import React, { useState, useEffect } from "react";

export default function TodosApi() {
  const [todos, settodos] = useState([]);
  useEffect(() => {
    let url = `http://localhost:8000/api/todos`;
    axios.get(url).then((res) => {
      settodos(res.data);
    });
  }, []); // empty [] depencies, means use effect will run only once.

  function handleSumit() {
    let url = `http://localhost:8000/api/todos`;

    axios
      .post(url, {
        title: "mongodobl",
        status: true,
      })
      .then((res) => {
        settodos(res.data);
      });
  }

  return (
    <div>
      <button onClick={handleSumit}>new </button>
      <ul>
        {todos.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>
    </div>
  );
}
