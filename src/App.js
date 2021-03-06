import React, { useState } from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import Auth from "./components/Auth";

const App = props => {
  const [page, setPage] = useState("auth");

  const switchPage = pageName => {
    setPage(pageName);
  };

  return (
    <div className="App">
      <Header
        onLoadToDos={switchPage.bind(this, "todos")}
        onLoadAuth={switchPage.bind(this, "auth")}
      />
      <hr />
      {page === "auth" ? <Auth /> : <Todo />}
    </div>
  );
};

export default App;
