/***********************************************************************************************************
 * TABLE OF CONTENTS 
 * Content
 *  - Data Types
 *  - Variable Mutation and Type Coercion
 *  - Basic Operators
 *  - Operator Precedence
 *  - Coding Challenge #1
 *  - If/Else Statements
 *  - Boolean Logic
 *  - The Ternary Operator and Switch Statments
 *  - Truthy & falsey values and equality operators
 *  -Coding Challenge #2 
 *  - Functions
 */





/**************
Data Types:
 Number: Floating point numbers (also called floats), for decimals and integets (also called ints)
 String: sequence of characters (also known as chars), used for text
 Boolean (also known as bool): logical data type that can be only true or false
 Undefined: data type of any variable that doesnt have a value yet
 Null: doenst exist
 NaN: no a number
*/

// writing a variable: 

// var means to initalize the next word as a variable to hold the data

var int = 3; // numbers are plain numbers, can also be decimals, negatives or fractions written like 2/3;
var sentance = "this is a sentance"; // Can be written with either ' ' or " "
var isTrue = true; // Bool statements are also plain 
var isFalse = false;
var job; // undefined varible, there is no value asssigned to the vaiable

/**************************************************************************************************
 * variable Mutation and type coercion
  when you have two types of data types and want to combine them together
  with the right syntax JS automatially combines them to print or show as 
  whatever you need to be shown as. Variable mutation is changing variable 
  data from any var you had.
 */


// Type Coercion
var firstName = 'John';
var age = 28;

console.log(firstName + '' + age); // (string + ' ' + int) 

var job, IsMarried; // declaring two variables with different data types that are undefined 

job = 'teacher'; //adding first data type
isMarried = false; // adding 2nd data type

console.log(firstName + 'is a' + age + ' year old and is a ' + job + 'and is he married? ' + isMarried); // (string + ' ' + int + '' string + '' + bool)

// Variable mutation

age = 'twenty-eight'; // now we override the first age of 28 (int) to a string, overwrites all age vars from entire file to new var
job = 'driver'; // override the string for job

/**************************************************************************************************
 * Basic Operator
  - = minus
  + = adding 
  * = multiply
  / = divide
  % = with remainder
  ** = exponent

  * Logical Operators 
  < = less than
  > = greater than
  <= = less than or equal to
  >= = greater than or equal to
  Appear as boolean when logged 

  * Type Of Operator 
  shows type of var
 */


// Operators 
var sub = 2018 - 28;
var add = 2018 + 28;
var mult = 5 * 2;
var divide = 5 / 2;
var remainder = 5 % 2;
var exponent = 5 ** 2; // means 5^2

var year = 2020; // you can aslo make vars for the ints
var int = 13;

year - int;
year * int;
year + int;
year / int;
year % int;

// Logical operators 

var johnOlder = 12;
var johnYounger = 10;

johnOlder > johnYounger // = true
johnOlder < johnYounger // = false 

// Type of operator 
var olderOrYounger = johnOlder > johnYounger;
var name = 'John';

console.log(typeof olderOrYounger); // type of = bool
console.log(typeof johnOlder); // type of = int 
console.log(typeof name); // type of = string 

/**************************************************************************************************
 * operator precedence
 * works like PEDMAS but look at precedence table on mozzila for intense calculations. 
 * Groupins is for first calculations (3-2)*5 | 3 x 2 = 6 then 6 * 5
 */

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now = yearJohn >= fullAge; // this makes a new var and makes it 2018 - 1989 and if its greater than or equal to 18; would be true or false

// multiple assignments 

x = (3 + 5) * 4 - 6; // 26
y = x

console.log(x * y)



// Coding Challenge #1 

/****************************************************************************************************
 * mark and john are trying to compate thier BMI, which is calculated using the formula
 * BMI = mass / height^2. mass has to be in KG and height in meters
 
 1. store marks and johns mass & height into vars
 2. calculate both BMI 
 3. create a boolean var containing the info about wheteher Mark has a higher BMI than john
 4. Print a string to the console containing the var from Step 3. ("Is marks BMI higher than Johns? true/false")
 */

var mHeight = 1.69;
var mMass = 78;

var jHeight = 1.95;
var jMass = 92;

var mBMI = mMass / mHeight ** 2;
var jBMI = jMass / jHeight ** 2;

var isHigher = mBMI > jBMI;

console.log("Is Marks BMI higher than Johns?" + ' ' + isHigher);
console.log(mBMI);
console.log(jBMI);


/*************************************************************************************************
 * If / else statments
 * if(logic statement) { code}
 * else {code}
 * else if (added logic statment) {code}

  // see lines 201 for logic
  && (and) = true if ALL are true
  === (strict equal) = both data types have to be the same // see line 350 for example
  == (equals) = uses coercian to match each data type // see line 350 for example
  || (or) = true if ONE is true
  ! (not) = inverts true/false variable

 */

var firstName = 'John';
var civilStatus = 'Single';

if (civilStatus === 'married') {

    console.log(firstName + 'is married');
} else { // if first statment is not true then goes to else

    console.log(firstName + ' will hopefully be married soon');
}

var isMarried = true;

if (isMarried) { // dont need === true, since the var is already true
    console.log(firstName + 'is married');
} else { // if first statment is not true then goes to else

    console.log(firstName + ' will hopefully be married soon');
}

// Check if else for whos BMI is greater

var mHeight = 1.69;
var mMass = 78;

var jHeight = 1.95;
var jMass = 92;

var mBMI = mMass / mHeight ** 2;
var jBMI = jMass / jHeight ** 2;

var isHigher = mBMI > jBMI;

if (isHigher) { // already true based on calculations, if calculations were done then it would be written as (mBMI > jBMI)

    console.log('Marks BMI is higher');
} else {
    console.log('Johns BMI is higher');
}


/*************************************************************************************************
 boolean logic

 else if blocks contain more options rather than true or false

 var age = 16; 

 age >= 20 // false; age is greater than or equal to 20 
 age < 30 // true;  age is less than 30
 !(age < 30) // false; reverse <; becomes age > 30;
 age >= 20 && age < 30 // false; age is greater than or equal 20 AND age is less than 30, even though one is true the && mean both have to be true to be shown as true
 age >= 20 || age < 30 // true; age is greater than or equal to 20 OR age is less than 30. even through one is false the || mean either or have to be true to be shown are true
 */

var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) { //between 13-20  / age >= 13 AND age < 20
    console.log(firstName + ' is a teen');
} else { // anything greater than or euqal 20 goes to this block. The reason its greater than or euqal to is because we put < 20 on the if else, which means 20 is covered in that block
    console.log(firstName + ' is a man');
}


/**************************************************************************************************
 * The Ternary Operator and Switch Statments
 * ternary makes an if else statement all in one line, for simple if elses
 * Switch statements are huge if elses
 */

var firstName = 'John';
var age = 21;

// age >= 18 - condition (if block)
// ? - code block for if 
// : starts else statement + block

age >= 21 ? console.log(firstName + ' can drink wine') : console.log(firstName + ' can only drink juice'); // if age is greater than or equal to 21 / ? then ...drink wine / : else ...drink juice 

// can be used in var as well 
// var drink - sets var
// = age >= 18 ? starts if
// : starts else

var drink = age >= 21 ? 'wine' : 'juice'; // sets varibale drink based on conditional statement. If age >= 21, (?) then set var drink to wine, if not (:) set drink to juicde
console.log(drink); // if age is less than 21 then juice

// full if else for example on line 239

if (age >= 21) {
    console.log(firstName + ' can drink wine');
} else {
    console.log(firstName + ' can drink juice');
}

// full if else for example on line 246

if (age >= 21) {
    var drink = 'wine';
} else {
    var drink = 'juice';
}


// Switch statments 

// //switch( variable name) {
// case 'value': 
//      action
// case'value':
//      actiom
// }

var job = 'teacher';

switch (job) {
    case 'teacher': // if job is teacher then 
        console.log(firstName + ' is a teacher'); // if teacher
        break; // if this is the case stop code, if not continue; this stops code from running if there is no need

    case 'driver': //else if job is driver then
        console.log(firstName + ' is a driver'); // if driver
        break; //else if this is the case stop code, if not continue; this stops code from running if there is no need

    case 'designer': // else if job is designer
        console.log(firstName + ' is a designer'); // if designer
        break; // if this is the case stop code, if not continue; this stops code from running if there is no need

    default: // else all above are false then defualt to this case
        console.log(firstName + '  does something else');
}

// Switch statement example from line 215

var age = 75;

switch (true) { // reason we use true is to force whichever is true
    case age < 13:
        console.log(firstName + ' is a boy');
        break;

    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;

    case age >= 20 && age < 30:
        console.log(firstName + ' is a youngman');
        break;

    default:
        console.log(firstName + ' is a man');
}


/**************************************************************************************************
 * Truthy & falsey values and equality operators
 * falsy values: undefined, null, 0, '' (empty string), NaN (not a number). If any of these are evaluated in an if/else statment they are shown as false. or Consol.log(). or cl. go to line 2 for these defenitions. 
 * truthy values: all values that are NOT falsy
 */

// falsy example
var height; //undefined
console.log(height)

if (height) {
    console.log('variable is defined');
} else { // wil automatically come here since there is no value for the var
    console.log('variable is not defined');
}

// truthy example
var height = 16;

//OR 
var height;
height = 16; //becomes truthy based on value given to undefined var

console.log(height); //will show 16

if (height) { // will come to this block since there is a value for the var
    console.log('variable is defined');
} else { // wil automatically come here since there is no value for the var
    console.log('variable is not defined');
}

// Equality Operators 

if (height == '16') {
    console.log('sees that they are the same, converts height var to string since what we are eualing it to is a string');
}
if (height === '16') {
    console.log('will show as false, string 16 is NOT the same as int 16');
}

// Coding Challenge #2 

/****************************************************************************************************
 *John and mike both play basketball in different teams. In the latest 3 games, Johns team scored 89, 
 120, and 103 points. Mikes team scored 116, 94, and 123 points

 1. Calculate the average score for each team
 2. Decide which teams wins in average (highest average score), and print the winner to the console with average score.
 3. Then change the scores from above and show the winners. (take into account there may be ties in average score)
 4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points. like before, log the average winner
 to the console. HINT: you will need to use the && operator to make the decision.
 */

var name;

var johnSum = 89 + 120 + 103;
var johnAverage = johnSum / 3;

var mikeSum = 116 + 94 + 123;
var mikeAverage = mikeSum / 3;


if (johnAverage > mikeAverage) {
    var name = 'John';
    console.log('the winner is ' + name + ' with a avg score of ' + johnAverage);
} else if (johnAverage === mikeAverage) { // to get average make johnSum = 110 + 120 + 103
    console.log('its a tie, with both teams averaging ' + johnAverage);
} else {
    var name = 'Mike';
    console.log('the winner is ' + name + 'with an avg score of ' + mikeAverage);
}

//Bonus question
var marySum = 97 + 134 + 105;
var maryAverage = marySum / 3;

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    var name = 'John';
    console.log('the winner is ' + name + ' with a avg score of ' + johnAverage);
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    var name = 'Mike';
    console.log('the winner is ' + name + 'with an avg score of ' + mikeAverage);
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    var name = 'Mary';
    console.log('the winner is ' + name + 'with an avg score of ' + mikeAverage);
} else { // case for tying; get draw by making mikeSum = 119 + 94 + 123

    console.log('its a tie, with both teams averaging ' + johnAverage);

}


/**************************************************************************************************
 * Functions
 * are like containers that hold some statments that can pass arguments and can return results 
 */

//  function - makes functions
//  nameOfFunction - names the func
//  (arguement) - this is where argument is passed. can be no, or as many as you want, if you have more than one argument seperate with comma. (,);
//  {     starts function
//  return - returns something from function
//   } - ends function

function noArgument() {

}

function oneArgument(argumentOne) {

}

function multipleArguments(argumentOne, argumentTwo, argumentThree) {

}

// Lets cacluate a birth year for example 

function calculateBirthYear(birthYear) {

    return 2018 - birthYear; // grabs birthyears once the argument is called later in the code and is held 
}

var age = calculateBirthYear(1990); // You can also write multiple callbacks and have every single one ran with out overwriting any args
var age2 = calculateBirthYear(1998);
var age3 = calculateBirthYear(2002);
console.log(age, age2, age3); // adds 1990 as an argument, so once its back in the function it relaced everthing with birthYear as its actual var

// More complicated Functions. Calculate how many years until retirement based on Age

function yearsUntilRetirement(year, firstName) {

    var age = calculateBirthYear(year); // you can call other functions inside one function to run before the rest of the function is ran
    var retirment = 65 - age;

    console.log(firstName + ' retires in ' + retirment + ' years');
}

yearsUntilRetirement(1990, 'Richard'); // in the yearsUntlRetirment function we are calling two arguments, year + firstName. Make sure you call both if using two args

/**************************************************************************************************
 * Function statements and expressions
 * Expressions are code that always provide a value (console.log(), 2+5, function()). When JS makes a value its an expression
 * Statements preform actions (if/else, undefined, loops)
 */


// Function expression produce immediate results
var whatDoYouDo = function(job, firstName) {

    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids'; // theres no need for a break statement if we have a return value it goes back and doesnt continue

        case 'driver':
            return firstName + ' drives a car';

        case 'designer':
            return firstName + ' is a designer';

        default:
            return firstName + ' does something else';

    }

}
console.log(whatDoYouDo('teacher', 'John'));


// Function Declaration do not produce immediate results
function whatDoYouDo(job, firstName) {

}

/**************************************************************************************************
 * Arrays
 * bundles variables in one huge variable
 * arrays are 0 based.
 */

var names = ['ally', 'Jason', 'John', 'David']; // values are seperated by commas
var years = new Array('1998', '1999', '2000', '2001') // another way to write an array

console.log(names[0]); // since array is 0 based Ally is first [1] would be jason

console.log(names.length); //produces number of elements in array. this would be 4

// Mutate Arrys

names[1] = 'Ben'; // changes the [1] value of the array

names[7] = 'Mary' // even though this number of postion in the array is more than what we have JS will skip those positions and leave the, as 'empty' until we want to fufill them

names[names.length] = 'Jaime'; // adds that value the the last postion of the array
// //john.push(); / / .push() adds an element to the end of the array
// john.unshift('Mr'); // .unshift() adds an element to the begninng of an array
// john.pop(); // removes the last index of an array and doesnt add anything, the more you add the more you take away
// john.shift(); // removes the first index 

// john.indexOf(1998); //finds the value of given value. 1998 in this case would be [0]; if there is no value in the array of what youre looking for it returns -1;


//Different Data types

var john = ['John', 'Smith', 1998, 'teacher', false]; // you can hold diffrerent data types in an array. Strings, ints, bools

// Adding function in an array

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is  a designer'; //grabs the index of the value 'designer'. SInce its not a value in the array it returns -1. So if index === -1 then show statement



// Coding Challenge #3

/****************************************************************************************************
 John and his family went on a holiday and went to 3 different restaurants.
  The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is 
between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

*/

function calcTip(bill) {

    var percentage;
    if (bill < 50) {

        percentage = 0.2;

    } else if (bill >= 50 && bill <= 200) {

        percentage = 0.15;

    } else {

        percentage = 0.10;
    }
    return percentage * bill;
}

var bill = [124, 48, 256];
var tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

var finalBill = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]]

console.log(bill);
console.log(tips);


/**************************************************************************************************
 * Objects and Properties
 * objects group variabls and dont have a specific order unlike an array 
 */

//objects are written with { } while arrays are with [ ]

//Object literal
var john = {
    name: 'John', // key: value; key-value pair
    lastName: 'Smith', // new lines are seperate with ,
    birthYear: 1998,
    family: ['Jane', 'Mark', 'Bob'], // you can even make arrays as an object  
    job: 'teacher',
    isMarried: false // last one has no comma
}; //ends with ;

// Grabing Data
console.log(john.firstName); // gets key with value of first name
console.log(john['lastName']) // another way to call a key & object

var year = 'birthYear';
console.log(john[year]); // makes year the value of birthyear

// Mutating Data
john.job = 'designer'; // makes jobs value of designer now
john['isMarried'] = true; // another way to change value


// Another way to make an object
var jane = new Object();

jane.name = 'Jane'; // grabs jane var and adds name as an object
jane.birthYear = '1990';
jane['lastName'] = 'Smith'; // when using this style you dont need to add a .


/**************************************************************************************************
 * Objects and Methods
 * functions that are attatched to methods
 */

var john = {
    name: 'John',
    lastName: 'Smith',
    birthYear: 1998,
    family: ['Jane', 'Mark', 'Bob'],
    job: 'teacher',
    isMarried: false,
    //method attatchment
    calculateAge: function(birthYear) { //insantaite key (calculateAge) and value is function
        return 2020 - birthYear; // one way to getting birthyear key
        // return 2020 = this.birthYear // this means current object, replaces the need for john.birthYear later in other code snippets; see how to call comment below
        //this.age = 2020 - this.birthYear // this adds the key of age & adds the value of birthyear - 2020; see store comment below
    }
};


// How to call
john.calculateAge(1998); // how to call the function in an object with the 2020 - birthyear
john.calculateAge(); // how to call when we have this.birthYear

// How to store result in object
var age = john.calculateAge();
john.age = john.calculateAge(); // another way and easier way




/**********************************************************************************************************************************************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

*/

var mark = {

    name: 'Mark Davis',
    mass: 198,
    height: 2.5,
    calcBMI: function(getBMI) {
        return this.mass / this.height ** 2;
    }

};

mark.bmi = mark.calcBMI();
console.log(mark)

var john = {
    name: 'John Smith',
    mass: 147,
    height: 1.5,
    calcBMI: function(getBMI) {
        this.bmi = this.mass / this.height ** 2;
    }
};

john.bmi = john.calcBMI();
console.log(john)

if (john['bmi'] > mark['bmi']) {

    console.log(john['name'] + ' has the biggest BMI with a BMI of ' + john['bmi']);
} else if (john['bmi'] < mark['bmi']) {
    console.log(mark['name'] + ' has the biggest BMI with a BMI of ' + mark['bmi'])
} else {
    console.log(mark['name'] + ' and ' + john['name'] + ' both have the same BMI index of ' + mark['bmi']);
}



/**************************************************************************************************
 * Loops and iterations
 * made for repetitce tasks
 */

// For Loop 
// print numbers 0 - 9 

for (var i = 0; i <= 9; i++) { //  i = 0, then checks if i less than or equal to 9, then if it is then i++ (i = i + 1); 

    console.log(i);
}

//FOr looop in array 

var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) { //i starts at 0 becuase array starts at 0; we compare i to length of array; 

    console.log(john[i]); // i = array of john and can parse all data

}

//while loop

var i = 0;

while (i < john.length) {
    console.log(john[i]);
    i++;
}

// Continue statements 

var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {

    if (typeof john[i] !== 'string') continue; // !== is not different; this says if current index of smith is not different to a string then continue, if its different then skip and continue until all are indexed
    console.log(john[i]);

}

// Break statement

for (var i = 0; i < john.length; i++) {

    if (typeof john[i] !== 'string') break; // this means once you hit something that is not a string, stop the entire index search
    console.log(john[i]);

}

// Reverse Loop (backwards)


for (i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}


/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

*/

var john = {

    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {

        this.tips = [];
        this.finalValue = [];

        for (var i = 0; i < this.bills.length; i++) {

            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.15
            } else {
                percentage = 0.1
            }

            this.tips[1] = bill * percentage;
            this.finalValue[1] = bill + bill * percentage;
        }

    }
};

john.calcTip();

console.log(john)