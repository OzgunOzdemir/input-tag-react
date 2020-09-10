import React, { Fragment, useState, useEffect } from 'react'
import './Tags.css'

const Tag = ({ key, item, onRemove, selectedTheme }) => {
    const [color, setColor] = useState()
    const [theme, setTheme] = useState([{
        type: "primary",
        color: "#004085"
    }, {
        type: "success",
        color: "#D5EDD8"
    }, {
        type: "secondary",
        color: "#383d41"
    }, {
        type: "info",
        color: "#0c5460"
    }, {
        type: "warning",
        color: "#856404"
    }, {
        type: "danger",
        color: "#721c24"
    }]);

    useEffect(() => {
        if (selectedTheme) {
            theme.map(i => {
                if (i.type === selectedTheme) {
                    setColor(i.color)
                }
            })
        } else {
            setColor(theme[0].color)
        }
    }, [])

    return (
        <Fragment>
            <span className="tag" style={{ backgroundColor: color }} key={key}>
                <span className="content">{item}    </span>
                <span className="close" onClick={() => onRemove(key)}>X</span>
            </span>
        </Fragment>
    )
}

export default Tag;
