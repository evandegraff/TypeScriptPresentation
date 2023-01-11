// INHERTICANCE 
// For any bird, there are a set of predefined properties which are common for all the birds 
// and there are a set of properties which are specific for a particular bird.
//  Therefore, intuitively, we can say that all the birds inherit the common features like wings, legs, eyes, etc. 
//  Therefore, in the object-oriented way of representing the birds, 
//  we first declare a bird class with a set of properties which are common to all the birds. By doing this, 
//  we can avoid declaring these common properties in every bird which we create. 
// Instead, we can simply inherit the bird class in all the birds which we create. 
// he following is an example of how the concept of inheritance is implemented.

// Java program to demonstrate
// the bird class

// Implementing the bird class
public class Bird {

	// Few properties which
	// define the bird
	String color;
	int legs;

	// Few operations which the
	// bird performs
	public void eat()
	{
		System.out.println(
			"This bird has eaten");
	}

	public void fly()
	{
		System.outp.println(
			"This bird is flying");
	}
}


// After the bird class is implemented, if we wish to create a pigeon, then we simply inherit the above Bird class.

// Java program to demonstrate the
// Inheritance

// Creating the Pigeon class which
// extends the bird class
public class Pigeon extends Bird {

	// Overriding the fly method
	// which makes this pigeon fly
	public void fly()
	{
		System.out.println(
			"Pigeon flys!!!!");
	}
}
