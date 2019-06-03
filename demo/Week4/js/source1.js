// Purpose of this demo is to illustrate javascript scope

var x = 1;
var message = "global msg";

function a() {
	var message = "a msg";
	console.log("inside a: message = " + message);
	b();
}

function b() {
	console.log("inside b: message = " + message);
}

a();