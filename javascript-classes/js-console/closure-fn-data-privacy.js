
// 1. Data privacy (private variables)

function createBankAccount() {
  let balance = 0; // private — cannot be accessed directly
  return {
    deposit(amount) { balance += amount; return balance; },
    getBalance() { return balance; }
  };
}
const acc = createBankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
console.log(acc.balance);      // undefined — truly private