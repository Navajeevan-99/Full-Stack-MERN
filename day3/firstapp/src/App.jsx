import React from 'react'
import Page from './component/Page'
import Pagedown from './component/Pagedown'
import Pageup from './component/pageup'
import Cartoon from './component/cartoon'
import Counter from './component/counter'
const App = () => {
  var cartoon=["Navajeevan","Naruto","Leo","Ben 10"]
  return (
    
    <div>
      {/* <Page name="Leo"/>
       <Pageup name="Parthiban" age="50" place="Kashmir"/>
      <Page/>
       <Pagedown/>
       <Pagedown name="Parthiban" age="50" place="Kashmir"/>
       <Cartoon item={cartoon}/> */}
       <Counter/>
       
       </div>
     
  )
}

export default App