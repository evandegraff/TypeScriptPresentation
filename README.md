# TypeScriptPresentation

install typescript with sudo npm install -g typescript (only need sudo on mac)

EXAMPLES 

function compact(arr) {
    if(orr.length > 10)
    return arr.trim(0, 10)
    return arr
}
// This code will run normally but crash at runtime



@ts-check
 // adding this to a JS file shows errors in the editor 

function compact(arr) {
    if(orr.length > 10)

    //  will give back that "cannot find name 'orr' 
      //Because the parameter is arr not orr"

    return arr.trim(0, 10)
    return arr
}

EXAMPLE END

Object-oriented programming refers to the concept in high-level languages such as Java and Python that uses Objects and classes in their implementations. OOP has four major building blocks which are, Polymorphism, Encapsulation, Abstraction, and Inheritance.