import React from 'react'

const Content = ({sd : {name,age}}) => {
  return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
    </div>
  )
}

export default Content