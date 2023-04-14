import React, { useState } from "react";
import "./App.css";

function App() {
	const [input, setInput] = useState("");

	const toSarcasmCase = (text) => {
		let sarcasmText = "";
		let isUppercase = true;

		for (const char of text) {
			if (char.match(/[a-zA-Z]/)) {
				sarcasmText += isUppercase ? char.toUpperCase() : char.toLowerCase();
				isUppercase = !isUppercase;
			} else {
				sarcasmText += char;
			}
		}
		return sarcasmText;
	};

	const handleInputChange = (event) => {
		setInput(toSarcasmCase(event.target.value));
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Sarcasm Case Converter</h1>
				<input type="text" value={input} onChange={handleInputChange} placeholder="Type here..." />
				<p>{input}</p>
			</header>
		</div>
	);
}

export default App;
