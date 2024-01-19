// these are primative/ value types
// String, Number, Boolean, undefined, null

    let name = 'james'; // String Literal
    let age = 30; // Number Literal
    let isApproved = true; // Boolean Literal
    let favName = undefined;
    let selectedColor = null; //null is a object

  //-----------------------------

    let firstName = 'James';
    let lastName = 'Cooke';
    let fullName = firstName + ' ' + lastName;

    console.log(firstName + ' ' + lastName);
    console.log(`${firstName} ${lastName}`)
    console.log(fullName);


// Reference Types
// Object, Array, Function

// object tp hold related data
    //  key value pairs
    let person = {
        name: 'bill',
        age: 30
    };
    console.log(person);


    person.name = 'john';
    // Dot Notation
    console.log(person.name);


    person['name'] = 'mary';
    // bracket notation
    console.log(person['name']);


// Arrays
    // data structure to represent a list of items
    // index starts at 0
    // can hold multiple data types
    // arrays are dynamic, can change
    let selectedColors = ['red', 'blue'];
    console.log(selectedColors);
    console.log(selectedColors[0]);
    selectedColors[2] = 1;
    console.log(selectedColors.length);




// Functions
    // set of statements that perform a task or calculate a value
    // reusable
    // parameters are placeholders - name
    // arguments are the actual values - 'papa'

    // perform a task
    function greet(name, lastName){
        console.log('hello ' + name + ' ' + lastName);
    }

    // call the function
    greet('papa', 'smirh');

//---------------------------------------------

    // calculate a value
    function square(number){
        return number * number;
    }

    console.log(square(2));

    // called function can be stored in a variable
    let number = square(2);
    console.log(number);






