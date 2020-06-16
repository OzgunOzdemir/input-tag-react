import React, { Fragment } from 'react'
import './Tags.css'

const Tag = ({ key, item, onRemove }) => {
    return (
        <Fragment>
            <span className="tag" key={key}>
                <span className="content">{item}    </span>
                <span className="close" onClick={() => onRemove(key)}>X</span>
            </span>
        </Fragment>
    )
}

export default Tag;
