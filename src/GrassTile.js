import React, { useState, props } from 'react'
import Tooltip from './Tooltip';



function GrassColorByColor(m_power) {
    let power = m_power;
    if (power <= 0) {
        return "rgb(220,220,220)";
    }
    else if (1 <= power && power < 3) {
        return "rgb(155, 233, 168)";
    }
    else if (3 <= power && power < 10) {
        return "rgb(65, 195, 100)";
    }
    else if (10 <= power) {
        return "rgb(32, 111, 56)";
    }
    console.log(power);
    return "err";
}

function GrassTile(props) {
    const [show, setShow] = useState(false);
    const SIZE = 12;
    return (
        <div className="container"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <Tooltip show={show} content={props.date}></Tooltip>
            <svg width={SIZE} height={SIZE} style={{ position: 'absolute', left: props.col, top: props.line }}>
                <rect x="0" y="0" width={SIZE} height={SIZE} fill={GrassColorByColor(props.power)} />
            </svg>
        </div>
    );
}

export default GrassTile;