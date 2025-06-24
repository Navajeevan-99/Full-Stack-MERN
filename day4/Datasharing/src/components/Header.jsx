import React from 'react'
import Footer from './Footer'

const Header = ({details}) => {
  return (
    <div>
        <h1>{details}</h1>
        <Footer det={details}/>
    </div>
  )
}

export default Header