import React, { useCallback, useState, ReactNode } from 'react';

import './styles.css'

interface Props {
    children: ReactNode;
    position: 'top' | 'right' | 'left' | 'bottom';
    color: string;
    text: string;
}

export const Tooltip = ({ children, position, color, text }: Props) => {
    const [isTootipShow, setTooltipShow] = useState<boolean>(false);
    const handleOnMouseOver = useCallback(() => setTooltipShow(true), [setTooltipShow]);
    const handleOnMouseLeave = useCallback(() => setTooltipShow(false), [setTooltipShow]);

    return <div className="tooltip-container">
        <div onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>{children}</div>
        {isTootipShow && <div style={{ color, borderColor: color }} className={`tooltip tooltip-${position}`}>{text}</div>}
    </div>;
}