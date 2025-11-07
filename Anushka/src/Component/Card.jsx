import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div id='card'>
      <img src="https://www.shutterstock.com/image-vector/cute-cat-wear-dino-costume-600nw-2457633459.jpg" alt="" height={100} width={100}/>
      <h1>{props.name}</h1>
      <h1>{props.edu}</h1>
    </div>
  )
}

export default Card