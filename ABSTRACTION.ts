// ABSTRACTION

//  Are you really aware of how your car starts when you turn your key in the ignition? 
//  Do you, as a driver, need to know about the ignition switch, how the voltage from the battery hits the ignition coil, how an engine spark gets directed to the spark plugs, and how that ignites the fuel to make the car run? 
//  Or is turning the key and hearing a ding-ding enough?

//  we strive to abstract objects in a way that makes them intention-revealing, simple to use, and simple to understand.

// the Rule of Three which specifies that upon seeing duplication three times, we should refactor it into an abstraction.
// Options for the wash cycle


// Abstraction in Java and Python is a programming methodology 
// in which details of the programming codes are hidden away from the user, 
// and only the essential things are displayed to the user

type WashOptions = {
    dryLevel: 'low' | 'medium' | 'high'
    temperature: 'cold',
    duration: 'hour',
    ecoEnabled: false
  }
  
  // The abstraction
  class WashingMachine {
      
    // Private instance variables
    // ... 
  
    public startCycle (options: WashOptions): void {
        // Parse the options
      // Get access to the physical layer
      // Convert options into commands
      // Lots of low-level code
      // And so on...
      // ...
    }
      
//     // More methods
//     ...
  
  }

  // ALL YOU NEED TO KNOW IS THE EXISTENCE OFF THE startCycle METHOD AND HOW TO CALL IT
  // ALL OTHER DETAILS ARE ABSTRACED AWAY IN THE CLASS




  // Abstraction lets us selectively focus on the high-level and abstract way the low-level details.