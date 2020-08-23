import React, { useState } from "react";

const Todo = (props) => {
  const [toDoName, setTodoName] = useState("");

  const inputChangeHandler = event => {
    setTodoName(event.target.value)
  }

  return (
    <>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={toDoName}
      />
      <button type="button">Add</button>
    </>
  );
};

export default Todo;
