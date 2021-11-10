const pirateSpeak = require('pirate-speak');

let english = '';
let pirate = pirateSpeak.translate(english);

form.onsubmit = function (event) {
	event.preventDefault();

	// Validate
	if (english.value === "") return;

	clearTranslation();

	// Call the API
	pirateParameters.text = englishInput.value;
	var pirateApiCaller = new ApiCaller(pirateSpeak, pirateParameters);
	pirateApiCaller.getJson(function (json) {
		for (var i = 0; i < json.translation.length; i += 1) {
			var character = json.translation[i];
			if (character === "\n") pirateText.innerHTML += "<br>";
			else pirateText.innerHTML += character;
		}

	});

}
form.oninput = clearTranslation;
englishInput.focus();

function clearTranslation() {
	pirateText.innerHTML = "";
}