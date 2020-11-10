/*
In javascript strings are not only a type of data, they're also objects that have properties,
such length property. Example below;
*/

var nameLength = 'What is your Name?';
console.log(nameLength.length); 

//NB check out the console to inspect the output value, which is 18.

/* The dot(.) between the the object.length is used to access the property of the object like
length.
A property is like a variable in that it holds information,
A property is dynamic and can change. Refering to the above example, if you remove the question
mark the value changes to 17.

*/

console.log(nameLength.toLowerCase()); // all the letters are lowercase icluding the W and N
                                    // the method does not change th string it gives a new
                                    //which is all lowercase.

console.log(nameLength.toUpperCase()); // Unlike the toLowercase method, toUpperCase changes
                                         //the string completely to all capital letters                                  