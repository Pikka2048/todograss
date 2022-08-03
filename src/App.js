import React, { useState } from 'react'

import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';

function App() {
  const [TaskName, setTaskName] = useState('')
  const [TodoList, setTodoList] = useState(['Hello', "Bye"])

  const handleChange = (e) => {
    setTaskName(() => e.target.value)
  }
  function PushAddTodoButton() {
    setTodoList([...TodoList, TaskName])
  }
  function PushDeleteTodoButton(fig) {
    setTodoList(
      TodoList.filter((fruit, index) => (fruit !== fig))
    )
  }
  return (
    <div className="App">
      <h1>Your Todo</h1>
      <div>
        {
          TodoList.map((val, key) => <TodoItem name={val}
            PushDeleteTodoButton={e => PushDeleteTodoButton(e)}></TodoItem>)
        }
      </div>
      <div className="Add-Todo">
        <form class="pure-form">
          <input value={TaskName} onChange={handleChange}
            type="text"
            name="example"
            className='pure-input-1-2'
            placeholder="ここにタスクを入力"></input>
          <button className='pure-button pure-button-primary' onClick={PushAddTodoButton}
            type="button">追加</button>
        </form>
        <p>{TaskName}</p>
      </div>

    </div>
  );
}

export default App;
