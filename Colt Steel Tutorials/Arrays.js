

////////ARRAYS////////



/// hint: Remeber that the highest index of an array is one less than the length///

var teams = ['barcelona', 'Real madrid', 'Chelasea'];
teams.length();


/// VARIOUS ARRAY METHODS WHICH ARE NORMALLY USED TO MANIPULATE DATA INCLUDE THE FOLLOWING///

/*
PUSH & POP
.SLICE()
INDEXOF
SHIFT/UNSHIFT
*/

/// PUSH AND POP /// 


/// PUSH /// adds a new element in an array


teams.push("Bayern Munich"); // add a new value or elements in array


/// POP //// Removes the last element in an array
teams.pop();
/* 
Removes the last item of an array so
automatically it would remove bayern munichen
*/

/*
//// SHIFT & UNSHIFT ///

They are the opposite of push and pop
 
they mainly add and remove items from the begining of an array

0472424787
Gtbank

*/

teams.unshift("Arsenal");

teams.shift();



/*

/// IndexOf ////


USED TO CHECK THE INDEX OF AN ELEMENT IN AN ARRAY

IT COULD ALSO BE SUED TO CHECK IF AN ELEMETS ISNT IN ANA ARRAY
 WHICH WOULD RETURN NEGATIVE 1 -1



*/


teams.indexOf("Arsenal");


/////SLICE/////

team = ["barcelona", " Chelseas", "Liverpool"]

var clubs = teams.slice(0, 2);


/// NESTED ARRAYS//

/// NESTED ARRAYS ARE ARRAYS WHICH ARE STORED INSIDE OR WITHIN ARRAYS ///


var teams = [
    ["barcelona", "Liverpool", " Chelsea"]
    ["Club Brudge", "Celtic", "Hearth of Midlothian"]
    ["Rangers", "Olympiacos", "Zenith"]
];

console.log(teams[2] [0]);


///ITERATING THROUGH AN ARRAY///

/*

FOR LOOP & FOREACH 











*/

/// FOR LOOP ITERATION///
 for (var i = 0; i < teams.length; i++) {
     console.log(teams[i]);

 }

var colors = ["red", "green", "blue"];

 colors.forEach((colors) => {
     console.log(colors);
 })