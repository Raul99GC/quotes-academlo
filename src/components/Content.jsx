import React from 'react'
import Button from './Button'

const Content = ({quoteRandom, colorRandom, clickButton}) => {

    console.log(quoteRandom)
	console.log(colorRandom)



    const appStyleColor = {
		color: colorRandom.hex
	}

    return (
        <div className='card__content flex'>
            <div style={appStyleColor} className="card__detalils">
                <h2 className='card__title'>{quoteRandom.author}</h2>
                <cite className='card__cite'>{quoteRandom.quote}</cite>

                
            </div>
            <Button 
                    colorRandom = {colorRandom}
                    clickButton = {clickButton}
                />
        </div>
    )
}

export default Content