// Encapsulation is the technique of making state private. 
// Encapsulation means that the class which owns the state decides the degree to which state can be accessed and changed. 
// This is done through the use of public methods.

// Encapsulation can be viewed as a shield that protects data from getting accessed by outside code. 

// This is a programming style where implementation details are hidden. 
// It reduces software development complexity greatly. With Encapsulation, only methods are exposed. 
// The programmer does not have to worry about implementation details but is only concerned with the operations. 
// For example, if a developer wants to use a dynamic link library to display date and time, 
// he does not have to worry about the codes in the date and time class 
// rather he would simply use the data and time class by using public variables to call it up


// In essence, Encapsulation binds data and code as a single unit and enforces modularity. 



// Let’s continue to demonstrate with the washing machine example. 
// Depending on the washing machine’s current state, some behaviours are valid while others are invalid.

// For example, if the machine is currently ON , it is valid to call turnOff() to turn the machine OFF.
//  If the machine is in the WASH state, it’s OK to call pause() to put the machine into the PAUSED state. 
//  But if the machine is OFF (or ON for that matter) it would not be valid to call PAUSE.

// Why? Because a washing machine can’t go from being OFF to PAUSED. It doesn’t make sense.

type WashState = 'OFF' | 'ON' | 'WASH' | 'PAUSED' | 'DONE';
type Cycle = undefined | 'COOL' | 'WARM';

type MachineState = {
  washState: WashState;
  currentCycle: Cycle;
}

class WashingMachine {
  // Encapsulation of state is achieved here by making
  // state private and inaccessible directly.
  private state: MachineState;
	
  // Access is provided via public methods
  public getWashState () : WashState {
    return this.state.washState;
  }
  
  public getCurrentCycle (): Cycle {
    return this.state.currentCycle;
  }

  // State is changed only through the use of public
  // mutator methods
  public pause (): void {
    // Note this important business logic which is encapsulated
    // to the correct place. The related data and behavior live
    // together.

    // We ONLY do the pause logic if the current state is
    // 'WASH'
    if (this.state.washState === 'WASH') {
      // Stop washing
    //   ...
      // Cue pause sound
    //   ...
      // Set new state
      this.state.washState = 'PAUSED'
    }
  }

	// ...
}

washer.startCycle({
    dryLevel: 'medium',
    temperature: 'cold',
    duration: 'hour',
    ecoEnabled: false
  });
  
  console.log(washer.getWashState()); // 'WASH'
  washer.pause();
  console.log(washer.getWashState()); // 'PAUSED'


//   Encapsulation keeps state private so that we can better enforce business rules,
//   protect model invariants, and develop a single source of truth for related data and logic.