import React from 'react'
import './Refresh.css'


export default function Refresh({clicked}) {

    return (
        <div className="container refr">
            <button type="button" className="btn btn-outline-dark" onClick={clicked}>Load More</button>
        </div>
    )
}
