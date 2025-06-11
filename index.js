// 1. Declare a global variable customerName using var
var customerName = 'bob';

// 2. Function to uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to set bestCustomer as a global variable (bad practice on purpose)
function setBestCustomer() {
  bestCustomer = 'not bob'; // no var/let/const = creates global variable (not recommended normally)
}

// 4. Function to overwrite the value of bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // changes global variable declared in setBestCustomer
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'Karen';

// 6. Function to try changing the constant (will throw an error)
function changeLeastFavoriteCustomer() {
  // This will cause an error because you can't reassign a const
  leastFavoriteCustomer = 'not Karen';
}
