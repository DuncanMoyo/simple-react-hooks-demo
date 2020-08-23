import React, { useState } from "react";
import axios from "axios";

const Todo = (props) => {
  const [toDoName, setTodoName] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const inputChangeHandler = (event) => {
    setTodoName(event.target.value);
  };

  const toDoAddHandler = () => {
    setToDoList(toDoList.concat(toDoName));
    axios
      .post("https://hooks-tuts-57aa9.firebaseio.com/todos.json", {
        name: toDoName,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={toDoName}
      />
      <button type="button" onClick={toDoAddHandler}>
        Add
      </button>
      <ul>
        {toDoList.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
