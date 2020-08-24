import React, { useState, useEffect } from "react";
import axios from "axios";

const Todo = (props) => {
  const [toDoName, setTodoName] = useState("");
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    axios.get('https://hooks-tuts-57aa9.firebaseio.com/todos.json').then(result => {
      console.log(result);
      const toDoData = result.data
      const toDos = []
      for (const key in toDoData) {
        toDos.push({id: key, name: toDoData[key].name})
      }
      setToDoList(toDos);
    })
    return () => {
      console.log('Cleanup');
    }
  }, [])

  const mouseMoveHandler = event => {
    console.log(event.clientX, event.clientY);
  }

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler)
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
    
  }, [])

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
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
