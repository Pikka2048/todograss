import React, { useState, props } from 'react'

function GrassTile(props) {
    const power = props.power;
    return (
        <svg width="200" height="150">
            <rect X="10" Y="10" width={power} height="16" fill="#39d353" />
        </svg>
    );
}

export default GrassTile;