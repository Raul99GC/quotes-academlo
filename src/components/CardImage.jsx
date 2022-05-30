import React from 'react'
import homero from '../assets/img/homero.jpg'
const CardImage = () => {
  return (
    <div className='card__img-box' >
         <img className='card__img' src={homero} alt="homero filosofo" />
    </div>
  )
}

export default CardImage