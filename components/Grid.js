import React, { createElement } from 'react'
import Lines from './Lines'

function Grid({
    labels
}) {
    return (
        <div className="inputGrid">
            <div className="gridRow">
                <Lines description={labels[0]} />
                <Lines description={labels[1]} />
                <Lines description={labels[2]} />
            </div>
            <div className="gridRow">
                <Lines description={labels[3]} />
                <Lines description={labels[4]} />
                <Lines description={labels[5]} />
            </div>
        </div>
    );
}

export default Grid
