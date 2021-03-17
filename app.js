//defining variables
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#input-txt");
var txtOutput = document.querySelector("#output-txt");

//providing the server api url
var serverURL = "https://api.funtranslations.com/translate/minion.json"

//modifying the url to add the input from our website
function serverTranslation(text) {
   return serverURL + "?text=" + text
}

//defining an error handler if there is an error with fetching the api
function errorHandler(error) {
    alert("Sorry Something went wrong! It could be due to excessive use of the limited API or because the server is down. Please try again later. Meanwhile you can check my other projects.")
}

//function to perform when you click the button
function clickHandler() {
    
    var input = txtInput.value; //taking the input given by user

    fetch(serverTranslation(input)) //fetch- fetches the url given to it
    .then(response => response.json()) //then take response and convert to json
    .then(json => {
            var translatedTxt = json.contents.translated;
            txtOutput.innerText = translatedTxt;
    }) //take the json and perform the commands withtin the curly brackets
    .catch (errorHandler) //perform errorHandler function if there is an error

};

btnTranslate.addEventListener("click",clickHandler) //if there is a click event, the do the function called clickHandler