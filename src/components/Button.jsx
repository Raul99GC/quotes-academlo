import React from 'react'

const Button = ({colorRandom,clickButton}) => {

   const appStyleColor = {
		backgroundColor: colorRandom.hex
	}


   return (
      <div className='card__btn-content flex'>
         <button onClick={clickButton} style={appStyleColor} className='card__button flex'>
            <i className='bx bx-right-arrow-alt clard__i'></i>
         </button>
      </div>
   )
}

export default Button