import React, { useState, props } from 'react'
import Grass from './Grass';

function GrassColorByColor(m_power) {
    let power = m_power;
    if (power <= 0) {
        return "rgb(20,20,20)";
    }
    else if (1 <= power && power < 3) {
        return "rgb(100,20,20)";
    }
    else if (3 <= power && power < 10) {
        return "rgb(20,200,20)";
    }
    else if (10 <= power) {
        return "rgb(20,20,200)";
    }
    console.log(power);
    return "err";
}

function GrassTile(props) {

    return (
        <div>
            <svg width="200" height="150">
                <rect x="10" y="10" width="16" height="16" fill={GrassColorByColor(props.power)} />
            </svg>
        </div>
    );
}

export default GrassTile;