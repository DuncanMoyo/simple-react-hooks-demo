import React, { useState } from "react";

const Todo = (props) => {
  const [toDoName, setTodoName] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const inputChangeHandler = (event) => {
    setTodoName(event.target.value);
  };

  const toDoAddHandler = () => {
    setToDoList(toDoList.concat(toDoName));
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
