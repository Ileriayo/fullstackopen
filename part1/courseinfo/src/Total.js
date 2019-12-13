import React from 'react'

export default (props) => {
    const exercises1 = props.parts[0].exercises;
    const exercises2 = props.parts[1].exercises;
    const exercises3 = props.parts[2].exercises;
    return (
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    )
}