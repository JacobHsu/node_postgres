var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    console.log(this.readyState, this.status);
    if (this.readyState == 4 && this.status == 200) {
        //var data = JSON.parse(this.responseText);
        console.log(this.responseText);
    }
};
xhttp.open("POST", "http://localhost:3000/fortunes",true);
xhttp.setRequestHeader("Content-Type", "application/json");

var sendData  = JSON.stringify({
	"message":"Love u 3000",
	"lucky_number":22,
	"spirit_animal":"Avengers"
});
xhttp.send(sendData);