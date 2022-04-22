let axios = require("axios");

//grab content os JSON fromURL and print with console.log
//more easilt changeing of details way
myJson = axios({
    method: 'get',
    url: 'https://inwerk-files.s3-eu-west-1.amazonaws.com/opdracht3.json',
    responseType: 'json'
}).then(function (response){
    console.log(JSON.stringify(response.data));
})

//simple way
axios.get('https://inwerk-files.s3-eu-west-1.amazonaws.com/opdracht3.json')
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })

//turn JSOn into string with JSON.stringify(myJson)
let stringJSON = JSON.stringify(myJson);
//console.log(stringJSON);