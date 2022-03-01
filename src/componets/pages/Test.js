import React, { useState } from 'react'
import '../../assets/css/main-style.css'


const Star = ({ starID, rating, onMouseOver, onMouseLeave, onClick }) => {
    let styleclass = 'defalutstar'
    if (rating >= starID) {
        styleclass = 'redstar'
    }
    return (
        <div
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <li className={styleclass}>*</li>
        </div>
    )
}

const Test = () => {

    const [rating, setratingState] = useState(0)
    const [hoverval, sethoverState] = useState(0)

    const start = [1, 2, 3, 4, 5]



    return (
        <>
            <div>
                <ul className='rating'>
                    {

                        start.map((elm, i) => {
                            return (
                                <Star
                                    key={i + 1}
                                    starID={i + 1}
                                    rating={hoverval || rating}
                                    onMouseOver={() => sethoverState(i)}
                                    onMouseLeave={() => sethoverState(0)}
                                    onClick={() => setratingState(i)}

                                />
                            )
                        })

                    }
                </ul>
            </div>
        </>
    )
}

export default Test