import React, { useState } from "react";

const Todo = (props) => {
  // const [toDoName, setTodoName] = useState("");
  // const [toDoList, setToDoList] = useState([]);

  const [toDoState, setToDoState] = useState({ userInput: "", toDoList: [] });

  const inputChangeHandler = (event) => {
    // setTodoName(event.target.value);
    setToDoState({
      userInput: event.target.value,
      toDoList: toDoState.toDoList,
    });
  };

  const toDoAddHandler = () => {
    // setToDoList(toDoList.concat(toDoName));
    setToDoState({
      userInput: toDoState.userInput,
      toDoList: toDoState.toDoList.concat(toDoState.userInput),
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={toDoState.userInput}
      />
      <button type="button" onClick={toDoAddHandler}>
        Add
      </button>
      <ul>
        {toDoState.toDoList.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
