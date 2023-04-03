import React from 'react'

function Lines({description, id}) {
    return (
        <>
            <div className="line" id={id}>
                <input type="text"/>
                <div>{description}</div>
            </div>
        </>
    )
}

export default Lines
