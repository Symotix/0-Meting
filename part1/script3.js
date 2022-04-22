//part 3

let axios = require("axios");

//grab content os JSON fromURL and print with console.log
//turn JSOn into string with JSON.stringify(myJson)
//let stringJSON = JSON.stringify(myJson);

//more expansive way
myJson = axios({
    method: 'get',
    url: 'https://inwerk-files.s3-eu-west-1.amazonaws.com/opdracht3.json',
    responseType: 'json'
}).then(function (response){
    console.log(JSON.stringify(response.data));
})

//straighforward way
axios.get('https://inwerk-files.s3-eu-west-1.amazonaws.com/opdracht3.json')
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })

