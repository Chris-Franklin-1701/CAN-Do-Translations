// console.log('basic access js loaded.')
// window.onload = function () {
//     console.log('window loaded. onload running')
//     const input = document.querySelector("#input");
//     const btnTest = document.querySelector("#btn-test");
//     const output = document.querySelector("#output");
//     console.log(JSON.stringify(btnTest))
//     // create a function that calls on basicAccessRoutes
//     // function to fetch the POST route, with the client input.
//     //print output to the html file as #output var.


//     // function constructUrl(text) {
//     //     return serverUrl + "?text=" + text;
//     // }

//     // function errorHandler(error) {
//     //     alert("API call limit reached. Please try again in hour.");
//     // }

//     function fullTranslation(event) {
//         event.preventDefault();
//         console.log('button pressed')
//         const inputText = input.value;
//         fetch('/api/comments', {
//             method: 'POST',
//             body: JSON.stringify({ input: inputText }),
//             headers: { "Content-Type": "application/json" }
//         })
//             .then(request => request.json())
//             .then(json => {
//                 const translatedText = json;
//                 output.innerText = translatedText;
//                 console.log(json);
//             })
//             .catch(errorHandler)
//     }
//     function errorHandler() {
//         alert('nooooooooooo')
//     }


//     btnTest.addEventListener("click", fullTranslation);

// }