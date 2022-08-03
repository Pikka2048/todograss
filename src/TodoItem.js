import React, { useState, props } from 'react'
import './CssHelper.css'

function TodoItem(props) {
    function ClickItem() {
        props.PushDeleteTodoButton(props.name);
    }
    return (
        <div className="pure-g" onClick={ClickItem}>
            <p className='pure-u-1 pure-u-sm-1-6 .center-item-h' >{props.name}</p>
            <div className='pure-u-1 pure-u-sm-1-6'>
                <button className='pure-button'
                    type="button">完了</button>
            </div>
        </div>
    );
}

export default TodoItem;
