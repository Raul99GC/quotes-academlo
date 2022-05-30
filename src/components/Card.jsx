import React, { useState } from 'react'
import CardImage from './CardImage'
import Content from './Content'

const Card = () => {

   return (
      <section className='card'>
         <CardImage />
         <Content />
      </section>
   )
}

export default Card