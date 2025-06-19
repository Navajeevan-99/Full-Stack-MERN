import React from 'react'

const Cartoon = ({item}) => {
  return (
    <div>
        <ol>
             {item.map((cartoon, index) => (
          <li key={index}>{cartoon}</li>
        ))}
        </ol>
    </div>
  )
}

export default Cartoon