// Operators

// Arithmetic
    let x = 10;
    let y = 3;

    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
    console.log(x % y); // remainder of division
    console.log(x ** y); // exponentiation - x to the power of y

// Increment (++)
    console.log(++x); // increment then print
    console.log(x++); // print then increment
    console.log(x);

// Decrement (--)
    console.log(--x); // decrement then print
    console.log(x--); // print then decrement
    console.log(x);


// Assignment

    // x = x + 5; - is the same as
    x += 5;

    // x = x * 3; - is the same as
    x *= 3;
    // this is the same for all methods of arithmetic

    console.log(x);


// Comparison - true or false
    console.log(x > 1);
    console.log(x >= 1);
    console.log(x < 1);
    console.log(x <= 1);

// Equality
    console.log(1 === 1); // strict equality - same type and value
    console.log('1' === 1); // strict equality - different type and value
    console.log(1 !== 1); // strict inequality - same type and value

// loose equality - same value
    console.log('1' == 1); // loose equality - different type and value
    console.log(1 == 1); // loose equality - same value
    console.log(true == 1); // loose equality - same value

// Ternary
    // if a customer has more than 100 points
    // they are a gold customer
    // otherwise they are a silver customer

    let points = 110;
    // let points = 90;
    let type = points > 100 ? 'gold' : 'silver';

    console.log(type);


// Logical
// Logical AND (&&)
    // Returns TRUE if both operands are TRUE
    console.log(true && true); // true
    console.log(true && false); // false

    let highIncome = true;
    let goodCreditScore = true;
    let eligibleForLoan = highIncome && goodCreditScore;

    console.log(eligibleForLoan);

// Logical OR (||)
    // Returns TRUE if one of the operands is TRUE
    let goodIncome = false;
    let greatCreditScore = true;
    let yesForLoan = goodIncome || greatCreditScore;

    console.log(yesForLoan);

// NOT (!)
    let gIncome = false;
    let grCreditScore = false;
    let yeForLoan = gIncome || grCreditScore;
    console.log('Eligible', yeForLoan);

    // NOT (!)
    let appRefused = !yeForLoan;
    console.log('Application Refused', appRefused);
    

// Falsy (false)
    // undefined
    // null
    // 0
    // false
    // ''
    // NaN - not a number

// Anything that is not Falsy -> Truth

    let userColor = undefined;
    let defaultColor = 'blue';
    let currentColor = userColor || defaultColor;

    console.log(currentColor);
 

//-------------------------
    let a = 'red';
    let b = 'blue';

    let c = a;
    a = b;
    b = c;


    console.log(a);
    console.log(b);