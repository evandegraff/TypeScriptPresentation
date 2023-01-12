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
Static is when the variable is common to the entire class, not specific to any object.
Private is exactly like you'd think, only the class in which it is declared can see it. Private methods and fields are not visible withing subclasses and arent inherited by subclasses. Allows us to use encapsulation and hide data from the outside world.
Protected Provides access mid way between public and private in the sense that the children of this class can also see this variable.Protected access modifiers allow the data members to be accessed by class, package, subclass (same package), subclass (different package). The difference between public and protected is that public can be accessed from outside class but protected cannot be accessed from outside class.

