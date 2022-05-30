import React, { useState } from 'react'
import CardImage from './CardImage'
import Content from './Content'

const Card = ({ quoteRandom, colorRandom, clickButton }) => {

   return (
      <section className='card'>
         <CardImage />
         <Content
            quoteRandom={quoteRandom}
            colorRandom={colorRandom}
            clickButton={clickButton}
         />
      </section>
   )
}

export default Card