import React, { useState } from 'react'

import './App.css';
import TodoItem from './TodoItem';
import Grass from './Grass';

const GrassDate = [
  ["10/21", 0],
  ["10/22", 1],
  ["10/23", 2],
  ["10/24", 3],
  ["10/25", 4],
  ["10/26", 5],
  ["10/27", 6],
  ["10/28", 7],
  ["10/29", 8],
  ["10/30", 9],
  ["10/31", 10],
  ["11/01", 11],
]

function App() {
  const [TaskName, setTaskName] = useState('')
  const [TodoList, setTodoList] = useState(['タスクを追加する'])


  const handleChange = (e) => {
    setTaskName(() => e.target.value)
  }
  function PushAddTodoButton() {
    setTodoList([...TodoList, TaskName])
  }
  function PushDeleteTodoButton(ref) {
    var array = [...TodoList];
    var index = array.indexOf(ref)
    if (index !== -1) {
      array.splice(index, 1);
      setTodoList(array);
    }
  }

  return (
    <div className="App">

      <div className="pure-menu pure-menu-horizontal">
        <a href="#" className="pure-menu-heading pure-menu-link">Todo</a>
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">About</a>
          </li>
          <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">Github</a>
          </li>
        </ul>
      </div>
      <h2>あなたのタスク</h2>
      <div>
        {
          TodoList.map(val => <TodoItem name={val}
            PushDeleteTodoButton={e => PushDeleteTodoButton(e)}></TodoItem>
          )}
      </div>
      <div className="Add-Todo">
        <form className="pure-form">
          <input value={TaskName} onChange={handleChange}
            type="text"
            name="example"
            className='pure-input-1-4'
            placeholder="ここにタスクを入力"></input>
          <button className='pure-button pure-button-primary' onClick={PushAddTodoButton}
            type="button">追加</button>
        </form>
      </div>
      <Grass data={GrassDate}></Grass>
    </div>

  );
}

export default App;
