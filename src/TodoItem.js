import React, { useState, props } from 'react'


function TodoItem(props) {
    function ClickItem() {
        props.PushDeleteTodoButton(props.name);
    }
    return (
        <div className="Todo-Item" onClick={ClickItem}>
            <h1>{props.name}</h1>
        </div>
    );
}

export default TodoItem;
