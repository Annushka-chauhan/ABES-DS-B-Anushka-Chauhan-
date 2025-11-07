import React from 'react'
import './book.css'
function Book(){
  return(
    <div id="book">
      <img src= "https://cod.pressbooks.pub/app/uploads/sites/11/2020/08/Psychology.jpg"></img>
      <h1>Title:{props.title} </h1>
      <h1>Price:{props.price}</h1>
    </div>
    
  )
}