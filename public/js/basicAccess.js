// This is the function responsible for translating an unauthenticated user's text comment into only pirate speak
window.onload = function() {
    const input = document.querySelector("#input");
    const btnTest = document.querySelector("#btn-test");
    const output = document.querySelector("#output");

    function sampleTranslation(event) {
        event.preventDefault();
        console.log('button pressed')
        const inputText = input.value;
        fetch('/api/basic/pirate',{ 
            method: 'POST',
            body: JSON.stringify({input: inputText}),
            headers: {"Content-Type": "application/json"}
        })
            .then(request => request.json())
            .then(json => {
                const translatedText = json.output;
                output.innerText = translatedText;
                console.log(json);
        })
        .catch(errorHandler)
    }
    function errorHandler(){
        alert('nooooooooooo')
    }

    btnTest.addEventListener("click", sampleTranslation);
}