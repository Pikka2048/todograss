import React, { useState, props } from 'react'
import Grass from './Grass';

function GrassColorByColor(m_power) {
    let power = m_power;
    if (power <= 0) {
        return "rgb(20,40,20)";
    }
    else if (1 <= power && power < 3) {
        return "rgb(20, 100, 20)";
    }
    else if (3 <= power && power < 10) {
        return "rgb(20,170,20)";
    }
    else if (10 <= power) {
        return "rgb(20,240,20)";
    }
    console.log(power);
    return "err";
}

function GrassTile(props) {
    const SIZE = 16;
    return (
        <div>
            <svg width={SIZE} height={SIZE} style={{ position: 'absolute', left: props.col, top: props.line }}>
                <rect x="0" y="0" width={SIZE} height={SIZE} fill={GrassColorByColor(props.power)} />
            </svg>
        </div>
    );
}

export default GrassTile;