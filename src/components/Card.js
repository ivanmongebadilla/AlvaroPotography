import React from 'react'

function Card(props) {
  return (
    <div className='card' style={{backgroundImage: `linear-gradient(to right, transparent, mistyrose), url(${props.background})`}}>
        <h1 className='card__title'>{props.title}</h1>
        <p className='card__description'>{props.description}</p>
        <h3 className='card__price'>{props.price}</h3>
    </div>
  )
}

export default Card;