class Telephone {
          constructor() {
                    this.phoneNumbers = new Set();
                    this.observers = new Set();
          }

          AddPhoneNumber(number) {
                    this.phoneNumbers.add(number);
          }

          RemovePhoneNumber(number) {
                    this.phoneNumbers.delete(number);
          }

          DialPhoneNumber(number) {
                    if (this.phoneNumbers.has(number)) {
                              this.notifyObservers(number);
                    } else {
                              console.log("Number not found!");
                    }
          }

          // Observer pattern methods
          addObserver(observer) {
                    this.observers.add(observer);
          }

          removeObserver(observer) {
                    this.observers.delete(observer);
          }

          notifyObservers(number) {
                    this.observers.forEach(observer => observer.update(number));
          }
}

// Observer class
class Observer {
          constructor(action) {
                    this.action = action;
          }

          update(number) {
                    this.action(number);
          }
}

const telephone = new Telephone();

// Create observers
const printNumberObserver = new Observer(number => console.log(number));
const diallingObserver = new Observer(number => console.log(`Now Dialling ${number}`));

// Add observers to telephone
telephone.addObserver(printNumberObserver);
telephone.addObserver(diallingObserver);

telephone.AddPhoneNumber("07023232910");
telephone.AddPhoneNumber("08133458141");
telephone.DialPhoneNumber("07023232910");