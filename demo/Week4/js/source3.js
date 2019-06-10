// Array examples

// Ex 1: create array as object
var array1 = new Array();
array1[0] = "0";
array1[1] = 1;
array1[2] = function f2() {
	// body...
	return 2;
}
console.log(array1);

// array can have elements with different types


// Ex 2: easy definition of array
var array2 = ["Joseph", "Yang", 1];
console.log(array2);


// Ex 3: iterate over elements
function iterate(array) {
	for (var elt in array1) {
		console.log(array[elt]);
	}
}

iterate(array1);
iterate(array2);