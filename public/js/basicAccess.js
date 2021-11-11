const input = document.querySelector("#input");
const btnTest = document.querySelector("#btn-test");
const output = document.querySelector("#output");

// create a function that calls on basicAccessRoutes
// function to fetch the POST route, with the client input.
//print output to the html file as #output var.


// function constructUrl(text) {
//     return serverUrl + "?text=" + text;
// }

// function errorHandler(error) {
//     alert("API call limit reached. Please try again in hour.");
// }

function clickEventHandler() {
    const inputText = input.value;
    fetch('/api/basic/pirate',{ 
        method: 'POST',
        body: JSON.stringify({input: inputText}),
        headers: {"Content-Type": "application/json"}
    })
        .then(request => request.json())
        .then(json => {
            // const translatedText = json.contents.translated;
            // output.innerText = translatedText;
            console.log(json);
    })
    .catch(errorHandler)
}

btnTest.addEventListener("click", clickEventHandler);