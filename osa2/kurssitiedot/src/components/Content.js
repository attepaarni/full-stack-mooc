import React from 'react'
import Part from './Part'

const Content = ({course}) => {

    const drawParts = () => course.parts.map(part => {
      return <Part key={part.id} part={part.name} exercises={part.exercises}/>
    })
    

    return  (
        <>
        {drawParts()}
        </>
    ) 
}

export default Content