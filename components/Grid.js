import React, { createElement } from 'react'
import Lines from './Lines'
import Row from './Row'

function Grid({
    // rows,
    // cols,
    labels
}) {

    var ptr = 0;
    
    return (
        <div id="grid">
            <Row lines={[
                <Lines description={labels[0]} />,
                <Lines description={labels[3]} />
            ]} />
            <Row lines={[
                <Lines description={labels[1]} />,
                <Lines description={labels[4]} />
            ]} />
            <Row lines={[
                <Lines description={labels[2]} />,
                <Lines description={labels[5]} />
            ]} />
        </div>
    );
}

export default Grid
