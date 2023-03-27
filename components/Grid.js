import React, { createElement } from 'react'
import Lines from './Lines'
import Row from './Row'

function Grid({
    rows,
    cols,
    labels
}) {
    
    var children = []

    var ptr = 0
    for (var i = 0; i < rows; i++) {
        children.push([])
        for (var j = 0; j < cols; j++) {
            children[i].push(<Lines description={labels[ptr]} />)
            ptr++
        }
    }

    // console.log("children")
    // console.log(children)

    // add lines to row array
    // add rows to grid

    var rowDivs = []
    for (var i = 0; i < rows; i++) {
        rowDivs.push(<Row lines={children[i]} />)
    }

    // console.log(rowDivs)

    return (
        createElement("div", {id: "grid"}, rowDivs)
        // <div id="grid">
        //     <Row lines={[
        //         <Lines description={labels[0]} />,
        //         <Lines description={labels[3]} />
        //     ]} />
        //     <Row lines={[
        //         <Lines description={labels[1]} />,
        //         <Lines description={labels[4]} />
        //     ]} />
        //     <Row lines={[
        //         <Lines description={labels[2]} />,
        //         <Lines description={labels[5]} />
        //     ]} />
        // </div>
    );
}

export default Grid
