import React from 'react'
import Header from './components/Header'
import Content from './components/Content'

const App = () => {
  var studetails={name:"Jeevan",age:20}
  return (
    <div>
      <Header details="Student Details"/>
      <Content sd={studetails}/>
    </div>
  )
}

export default App