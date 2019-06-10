// The purpose of this script is to
// demonstrate that it is legal for javascript functions
// to have more arguments as input than necessary

function Dog(name) {
	this.name = name;
}

// Prototype object function. Won't get overriden each time
// an object is created. Defined only once in the definition
// of the class.
Dog.prototype.bark = function() {
	console.log(this.name + " likes barking. Bark!");
};

var newDog = new Dog("JY", "Liu");
newDog.bark();