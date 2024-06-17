let names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go-home"];

function golfSCore(par, strokes) {
    if (strokes === 1) {
        return names[0]
    }else if (strokes <= par - 2) {
        return names[1]
    }else if (strokes === par - 1) {
        return names[2]
    }else if (strokes === par) {
        return names[3]
    }else if (strokes === par + 1) {
        return names[4]
    }else if (strokes === par + 2) {
        return names[5]
    }else if (strokes === par + 3) {
        return names[6]
    }
}

//console.log(golfSCore(3, 3))

//The switch statement

function caseInSwitch(val){
    let answer = ""
    switch (val) {
        case 1:
            answer = "alpha";
            break
        case 2:
            answer = "beta";
            break
        case 3:
            answer = "gama";
            break
        case 4:
            answer = "delta";
            break
        default:
            answer = "stuff"

    }
    return answer;
}
//console.log(caseInSwitch(7))

function abTest(a, b) {
    if  (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));

//Card counting function

let count = 0;
function cc(card) {

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
           count--;
           break;
    }
    let holdbet ="Hold"
    if (count >  0) {
        holdbet = "Bet"
    }

    return count + " " + holdbet;
}
cc(2); cc('K'); cc(10); cc('A');

console.log(cc(4))


// Objects in Javascript

let ourDog = {
    "name": "Manga",
    "legs": 3,
    "tails": 9,
}
// Accessing values of objects

let name = ourDog["name"];
let tails = ourDog.tails;

// Deleting objects

let myDog = {
    "name": "Happy coder",
    "legs": 4,
    "tails": 1,
    "friends": ["orpheusmanga"],
    "bark": "woof!"
};
delete myDog.tails;
console.log(myDog);

//Using Objects for Lookups

function phoneticlookup(val) {
    let result = "";

    let lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };
    result = lookup[val];
    return result;
}

console.log(phoneticlookup("alpha"));


// Accessing Nested Objects and Arrays:

let myPlants = [
    {
        type : "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

let secondTree = myPlants[1].list[1];
console.log(secondTree);

//Nesting for Loops

function multiplyAll(arr) {
    let product = 1;
    for (let i=0; i < arr.length; i++){
        for (let j=0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }

    return product;
}

let product = multiplyAll([[1,2], [3,4], [5,6,7]]);

console.log(product)

//Random numbers within the range.

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

let myRandom = randomRange(5, 15);

console.log(myRandom);


// use of parseInt

function convertInteger(str) {
    return parseInt(str, 2)
}

convertInteger("10011")

///use of ternary

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(2))


//preventing object mutation using object.freeze

function freezobj() {
    const MATH_CONSTRAINTS = {
        PI: 3.814
    };
    Object.freeze(MATH_CONSTRAINTS);

    try {
        MATH_CONSTRAINTS.PI = 99;
    }catch ( ex ) {
        console.log(ex);
    }
    return MATH_CONSTRAINTS.PI
}
const PI = freezobj();


//Arrow functions

let myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));


//DESTRUCTURING ASSIGNMENTS

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTomorrow(avgtemperature) {
    'use strict';

    const { tomorrow: tempOfTomorrow } = avgtemperature;

    return tempOfTomorrow;
}

console.log(getTempOfTomorrow(AVG_TEMPERATURES));

//DESTRUCTURING ASSIGNMENTS FOR NESTED OBJECTS

const LOCAL_FORCAST = {
    today: {min:33, max:67 },
    tomorrow: {min:33, max:78 }
};

function getmaxoftomrw (forest) {
    "use strict";

    const { today: {min: maxoftomorw}} =forest;
    return maxoftomorw;
}
console.log(getmaxoftomrw(LOCAL_FORCAST))

//TEMPLATE LITERALS

const person = {
    name: 'orpheus',
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting)