import React, { Fragment, useState, useEffect } from 'react'
import './Tag.css'

const Tag = ({ key, item, onRemove, selectedTheme }) => {
    const [color, setColor] = useState()
    const [theme, setTheme] = useState([{
        type: "primary",
        color: "#007bff"
    }, {
        type: "success",
        color: "#28a745"
    }, {
        type: "secondary",
        color: "#6c757d"
    }, {
        type: "info",
        color: "#17a2b8"
    }, {
        type: "warning",
        color: "#856404"
    }, {
        type: "danger",
        color: "#dc3545"
    },{
        type: "light",
        color: "#f8f9fa"
    },{
        type: "dark",
        color: "#343a40"
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
