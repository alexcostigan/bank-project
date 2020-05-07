import React from 'react'
import './displaybox.css'
import background from './background.jpg'
const DisplayBox = () => {
    return (
        <div className="display-box">
                <div className="display-container">
                    <img src={background}  className="display-background"  alt="avatar" />
                        <div className="box-title">
                            <span className="box-letter-blink">M</span>
                            <span className="box-letter-2">y</span>
                            <span className="box-letter-blink">B</span>
                            <span className="box-letter-1">a</span>
                            <span className="box-letter-2">n</span>
                            <span className="box-letter-">k</span>
                            <span className="box-letter-blink">A</span>
                            <span className="box-letter-1">p</span>
                            <span className="box-letter-2">p</span>
                        </div>
                </div>
            
        </div>
    )
}

export default DisplayBox
