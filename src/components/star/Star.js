
import React from 'react'

function Star({rating}) {
    let emptyArray = new Array(rating)
    emptyArray.map((item) => {
        return (
            <p></p>
        )
    })
}

export default Star