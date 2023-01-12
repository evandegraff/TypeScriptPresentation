// RULE OF THREE 

// upon seeing duplication three times, 
// we should refactor it into an abstraction.

//relies on api endpoints 

// Wouldn’t it be nice if we could reuse code or extend it for more specific use cases? That’s what inheritance is about.

// Inheritance ensures that codes are reused. There are millions of Java and Python libraries that a programmer can use through inheritance. 
// The properties of a class can be inherited and extended by other classes or functions.
//  There are two types of classes.
//  One is the Parent or base class, and the other is the child class which can inherit the properties of the parent class. 
//  Inheritance is a major pillar in Object-Oriented programming. 
//  It is the mechanism by which classes in Java, Python, and other OOP languages inherits the attribute of other classes

class Animal {

    // field and method of the parent class
    String name;
    public void eat() {
      System.out.println("I can eat");
    }
  }
  
  // inherit from Animal
  class Dog extends Animal {
  
    // new method in subclass
    public void display() {
      System.out.println("My name is " + name);
    }
  }
  
  class Main {
    public static void main(String[] args) {
  
      // create an object of the subclass
      Dog labrador = new Dog();
  
      // access field of superclass
      labrador.name = "Rohu";
      labrador.display();
  
      // call method of superclass
      // using object of subclass
      labrador.eat();
  
    }
  }


//   OUTPUT
//   My name is Rohu
//   I can eat


// Inheritance is about code reuse, not hierarchies.