import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

import Card from './components/Card'

function App() {

	const createIndexRandom = array => {
		return Math.floor(Math.random() * array.length)
	}

	const getElementRandom = array => {
		const i = createIndexRandom(array)
		return array[i]
	}

	const [quoteRandom, setQuoteRandom] = useState(getElementRandom(quotes))
	const [colorRandom, setColorRandom] = useState(getElementRandom(colors))


	const clickButton = () => {
		setQuoteRandom(getElementRandom(quotes))
		setColorRandom(getElementRandom(colors))
	}

	const appStyleColor = {
		backgroundColor: colorRandom.hex
	}


	return (
		<div style={appStyleColor} className="App flex">
			<Card
				quoteRandom={quoteRandom}
				colorRandom={colorRandom}
				clickButton ={clickButton}
			/>
		</div>
	)
}

export default App
