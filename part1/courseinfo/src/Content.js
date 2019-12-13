import React from 'react'

import Part from './Part'

export default (props) => {
    return (
        <>
            <Part part={props.parts[0].name} exercises={props.parts.exercises} />
            <Part part={props.parts[1].name} exercises={props.parts.exercises} />
            <Part part={props.parts[2].name} exercises={props.parts.exercises} />
        </>
  )
}