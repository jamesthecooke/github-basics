//  objects
// collection of key value pairs
//  if a function is part of an object, it is called a method

let circle = {
    raius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); // method


// Factory Function


function createCircle(raius) {
    return {
        raius, // can just qrite raius, since it is the same as raius: raius
        draw(){
            console.log('draw');
        }
    };
}


const circle1 = createCircle(1);
console.log(circle1);


const circle2 = createCircle(2);
console.log(circle2);


// Constructor Function
// use Pascal Notation (OneTwoThreeFour)

function Circle(raius) {
    this.raius = raius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle3 = new Circle(1); // new operator creates an empty object, then sets this to point to that object, then returns the object from the function 
console.log(circle3);


// constructor property
// every object has a constructor property that references the function that was used to create that object
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...


// Functions are objects
//  they have properties and methods
