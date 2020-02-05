import React from 'react'

const Total = ({course}) => {

    const total = course.parts.reduce((sum, part)=>{
        return sum + part.exercises 
    }, 0)
    return (
        <>
        <p>
            <b>Number of exercises {total}</b>
        </p>
        </>
    )
}

export default Total