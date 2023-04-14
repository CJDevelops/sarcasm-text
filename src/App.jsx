import React, { useState } from "react";
import "./App.css";

function App() {
	const [input, setInput] = useState("");
	const [startUppercase, setStartUppercase] = useState(true);

	const toSarcasmCase = (text, startUppercase) => {
		let sarcasmText = "";
		let isUppercase = startUppercase;

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
		setInput(toSarcasmCase(event.target.value, startUppercase));
	};

	const handleCheckboxChange = (event) => {
		setStartUppercase(event.target.checked);
		setInput(toSarcasmCase(input, event.target.checked));
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Sarcasm Case Converter</h1>
				<div>
					<input type="text" value={input} onChange={handleInputChange} placeholder="Type here..." />
				</div>
				<div>
					<span class="label">Start Upper</span>
					<input type="checkbox" checked={startUppercase} onChange={handleCheckboxChange} style={{ marginLeft: "1rem" }} />
				</div>
				<p>{input}</p>
			</header>
		</div>
	);
}

export default App;
