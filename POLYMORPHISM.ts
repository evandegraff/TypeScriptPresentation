// Polymorphism is about “taking on many shapes”. 
// It's about designing your use cases and algorithms in such a way that we always get the same high-level behavior, 
// but we allow for dynamic low-level behavior at runtime.



// It’s clear that each of the employees does their job slightly differently, 
// but they still perform the responsibilities that a clerk should perform. 
// That is, they are concrete classes which implement the contract of a Clerk.

// Let's represent the contract using an interface.

interface Clerk {
    answerQuestion (question: string): Answer;
    scanProduct (product: Product): void;
    bagProduct (product: Product): void;
    promptForPayment (customer: Customer): Promise<PaymentResult>
  }


//   Then, we could realize the concretions by implementing the Clerk interface, 
//   handling things with slighly different behavior if we wish.

class ClerkJames implements Clerk {

    answerQuestion (question: string): Answer {
      ... // Implement uniquely to James
    }
  
    scanProduct (product: Product): void {
      ... // Implement uniquely to James
    }
  
    bagProduct (product: Product): void {
      ... // Implement uniquely to James
    }
  
    promptForPayment (customer: Customer): Promise<PaymentResult> {
      ... // Implement uniquely to James
    }
  
  }
  
  class ClerkMariah implements Clerk {
  
    answerQuestion (question: string): Answer {
      ... // Implement uniquely to Mariah
    }
  
    scanProduct (product: Product): void {
      ... // Implement uniquely to Mariah
    }
  
    bagProduct (product: Product): void {
      ... // Implement uniquely to Mariah
    }
  
    promptForPayment (customer: Customer): Promise<PaymentResult> {
      ... // Implement uniquely to Mariah
    }
  
  }
  
  // Implement the others


//   And then finally, in the code that relies on a Clerk, we'd provide a Clerk and a Customer to check out.

  function checkoutCustomer (clerk: Clerk, customer: Customer): Promise<PaymentResult> {
    for (let question of customer.getQuestions()) {
      clerk.answer(question);
    }
  
    for (let product of customer.getProductsInCart()) {
      clerk.scanProduct(product);
      clerk.bagProduct(product);
    }
  
    await clerk.promptForPayment(customer);
  }

//   Note that this function relies on a Clerk, not a ClerkJames or a ClerkMariah (or so on). 
//   Therefore, it doesn’t matter who shows up to work to fill the role. 
//   It could be James, Mariah, Max, or Mark — doesn’t matter. 
//   All that matters is that some object with the role of clerk is supplied and that fully implements 
//   the requirements of the contract for a Clerk:


let customer: Customer = { ... };

let clerkJames: ClerkJames = new ClerkJames();
let clerkMariah: ClerkMariah = new ClerkMariah();

checkoutCustomer(clerkJames, customer); // Valid
checkoutCustomer(clerkMariah, customer); // Also valid since it's a `Clerk`

Do you see how this works?
 By relying on a contract instead of a concretion, we gain the ability to sub in for different possible implementations.
 This is what polymorphism is about. Dynamic runtime behavior. Substitutability.

//  Polymorphism provides the ability for us to design for dynamic runtime behavior, 
// easy extensibility, and substitutability.