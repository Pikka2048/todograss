import React, { useState } from 'react'

import './App.css';
import TodoItem from './TodoItem';
import Grass from './Grass';

//Now
const dtStart = new Date();
let GrassDate = [];
for (let i = 0; i < 364; i++) {
  dtStart.setDate(dtStart.getDate() + 1);
  let set = String(dtStart.getFullYear()) + "/" + String(dtStart.getMonth() + 1) + "/" + String(dtStart.getDate());
  GrassDate.push([set, 0]);
}
let GrassDate2 = [
  ["2022/10/21", 0],
  ["2022/10/22", 1],
  ["2022/10/23", 2],
  ["2022/10/24", 3],
  ["2022/10/25", 4],
  ["2022/10/26", 5],
  ["2022/10/27", 6],
  ["2022/10/28", 7],
  ["2022/10/29", 8],
  ["2022/10/30", 9],
  ["2022/10/31", 10],
  ["2022/11/01", 11],
]
// If the dates match, we overwrite them in the second array.
// let a = [["hello",1],["good",3],["bye",4]]
// let b = [["hi",1],   ["good",2],["bye",5]]
// result :[["hello",1],["good",2],["bye",5]]

function MergeArrayOverWriteSecound(base, added) {
  let len_base = Object.keys(base).length;
  let len_added = Object.keys(added).length;

  for (let b = 0; b < len_base; b++) {
    for (let a = 0; a < len_added; a++) {
      if (base[b][0] == added[a][0]) {
        base[b] = added[a];
      }
    }
  }
  return base;
}

let mergetest = MergeArrayOverWriteSecound(GrassDate, GrassDate2);

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
      <div className='Grass'>
        <Grass data={mergetest}></Grass>
      </div>
    </div>

  );
}

export default App;
