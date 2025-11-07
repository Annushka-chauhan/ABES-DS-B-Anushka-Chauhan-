import React from 'react'
import Card from './Component/Card'
import Nav from './Component/nav'
import './App.css'
import Count from './Component/Count'
const App = () => {
  return (
    <div>
    <Nav/>
    <div id='cards'>
      <Card name='mohan' edu= "10"/>
      <Card name='rohan' edu="11"/>
    <Card name='sohan' edu="12"/>
    </div>
    <Count/>
    </div>
  )
}
export default App




