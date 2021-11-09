const input = document.querySelector("#text-input");
const btnTranslate = document.querySelector("#btn-translate");
const output = document.querySelector("#output");

serverUrl = "https://api.funtranslations.com/translate/yoda.json"

function constructUrl(text) {
    return serverUrl + "?text=" + text;
}

function errorHandler(error) {
    alert("API call limit reached. Please try again in hour.");
}

function clickEventHandler() {
    const inputText = input.value;
    fetch(constructUrl(inputText))
    .then(request => request.json())
    .then(json => {
        const translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler);
