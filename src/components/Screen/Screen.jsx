import React from "react";
import './screen.css'

const Screen = (props) => {
    return(
        <div>
            <section className="screen-btn">
                <div className="btn screen-1"><span>x</span></div>
                <div className="btn screen-2"><span>-</span></div>
                <div className="btn screen-3"><span>z</span></div>
            </section>
            <section className="screen-value">
                <div className="screen" value={'0'}>{props.value}</div>
            </section>
        </div>
    )
}

export default Screen;