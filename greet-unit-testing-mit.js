/* First, Write a function called Greet(name) that takes an argument called name, and returns a simple greeting message. 
For example, if the name is “Elizabeth” the function should return “Hello, Elizabeth”.

Next, handle null values by introducing a default. For example, when the name parameter is null, 
then the method should return the string “Hello there!”.

Next, add shouting. When “name” is all uppercase, then the method should shout back to the user. 
For example, when the name is "JOSE" then the method should return the string "HELLO JOSE!".

Next, Handle two names as input. If the name parameter is an array containing two names, 
then both names should be greeted. For example, if the input parameter is [‘Jose’,’Pep’], 
the method should return the string: “Hello, Jose, Pep”. 

Finally, Handle an arbitrary number of names as input. If the name parameter is an 
array of multiple names, all names must be greeted. 
For example, if the input parameter is [‘Alex’,’Arsene’,’Jose’,’Zidane’], 
the method should return the string: “Hello, Alex, Arsene, Jose, Zidane” */

function greet(name){
    if (name == null){
        return "Hello there!"
    } else if (typeof name =='string' && name === name.toUpperCase()){
        return `HELLO ${name.toUpperCase()}!`
    } else if(typeof name == 'string'){
      return `Hello, ${name}`
    } else if (name.length == 2){
        return `Hello, ${name[0]}, ${name[1]}`
    } else if (name.length > 2){
        let result = [];
        name.forEach(function(n) {
        result += n + ", ";
        });
        result = result.substring(0, result.length - 2);
        return "Hello, " + result   
    }
};

/*console.log(greet())

let person = "Joe";
console.log(greet(person))

let loud = "JOSE";
console.log(greet(loud));

let people = ["Joe", "Bob"];
console.log(greet(people));

let morePeople = ["Joe", "Bob", "Fred", "Suzie"];
console.log(greet(morePeople));*/

module.exports = {greet}