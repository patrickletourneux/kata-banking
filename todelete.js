const Banking = require('./kata/Banking');

const instance = new Banking();

instance.withdraw(100);
instance.withdraw(100);
instance.withdraw(100);
instance.deposit(100); 
instance.deposit(100);
instance.withdraw(326);
instance.withdraw(484);
instance.withdraw(259);
instance.deposit(100000); 
instance.deposit(65000);

console.log(instance.printStatement());


