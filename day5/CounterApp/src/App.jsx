import React, { useState } from 'react'
import "./App.css"
const App = () => {
  let [count,setcount]=useState(0);
  function addCounter(){
    setcount(count+1);
  }

  return (
    <div id="div">
    <h3 id="header">{count}</h3>
    <button onClick={addCounter} id="add">Add</button>
    </div>
  )
}

export default App