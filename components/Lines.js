import React from 'react'

function Lines({description}) {
    return (
        <>
            <div className="line">
                <input type="text"/>
                <div>{description}</div>
            </div>
        </>
    )
}

export default Lines
