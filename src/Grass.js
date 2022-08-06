import GrassTile from './GrassTile';
import React, { useState, props } from 'react'


function Grass(props) {
    const data = props.data;
    let list = [];
    let col = 0;
    let line = 0;
    for (let i in data) {
        if (i % 7 == 0) {
            col += 18;
            line = 0;
        }
        line += 18;
        list.push(<GrassTile
            power={data[i][1]} col={col}
            line={line}
            date={data[i][0]}>
        </GrassTile>);
    }
    return (
        <div className='GrassRoot'>
            <div>
                {list}
            </div>
        </div >
    );
}

export default Grass;
