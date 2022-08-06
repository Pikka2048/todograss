import { useState } from 'react';
import './Tooltip.css';

const Tooltip = (props) => {
    return (
        <div className="container">
            {props.show && <div className={"tooltio"}>{props.content}</div>}
        </div>
    );
};

export default Tooltip;