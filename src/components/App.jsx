import React, { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [click, setClick] = useState("");
  function Handler(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function clickHandler(event) {
    setClick(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Welcome {click}</h1>
      <form onSubmit={clickHandler}>
        <input onChange={Handler} type="text" placeholder="What's your name?" />
        <button type="submit" onClick={clickHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
