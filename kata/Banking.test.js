const Banking = require('./Banking');

describe('Banking class', () => {
    
    const instance = new Banking();
    
    beforeEach(() => {
      instance.balance = 0;
      instance.historyAmount = []
      instance.historyDate = []
      instance.historyBalance = []
      instance.historyStatement = ['Date        Amount  Balance']

        // console.log('beforeEach');
      })
    
      test('log() return OK', () => {
          expect(instance.log()).toEqual('OK');
      });
    
      test('balance return 0', () => {
          expect(instance.balance).toEqual(0);
      });
      test('.historyStatement[0] toEqual  Date        Amount  Balance', () => {
        expect(instance.historyStatement[0]).toEqual('Date        Amount  Balance');
      });
    
        test('deposit return 100', () => {
          instance.balance = 0;
          instance.deposit(100);
          expect(instance.lastAmoutDepositOrWithdraw).toEqual(100);
        });
        test('lastAmoutDepositOrWithdraw return 200', () => {
          instance.balance = 0;
          instance.deposit(200);
          expect(instance.lastAmoutDepositOrWithdraw).toEqual(200);
        });
        test('dateLastAction toMatch(/[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$/', () => {
          instance.balance = 0;
          instance.deposit(200);
          console.log(instance.dateLastAction)
          expect(instance.dateLastAction).toMatch(/[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$/);
        });
        test('balanceUpdate toEqual 200', () => {
          instance.balance = 0;
          instance.deposit(100);
          instance.deposit(200);
          expect(instance.balance).toEqual(300);
        });
        test('withdraw return 100', () => {
          instance.balance = 0;
          instance.withdraw(100);
          expect(instance.lastAmoutDepositOrWithdraw).toEqual(-100);
        });
        test('balance return 100', () => {
          instance.balance = 0;
          instance.withdraw(100);
          instance.withdraw(100);
          instance.withdraw(100);
          instance.deposit(100); 
          instance.deposit(100);
          expect(instance.balance).toEqual(-100);
        });



        test('.historyStatement[1] and [2] regexp - and length', () => {
          instance.balance = 0;
          instance.withdraw(100);
          instance.withdraw(500);
          expect(instance.historyStatement[1]).toMatch(/[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}.{3,5}\+|\-[0-9]{1,10}\+|\-[0-9]{1,10}/);
          expect(instance.historyStatement[2]).toMatch(/[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}.{3,5}\+|\-[0-9]{1,10}\+|\-[0-9]{1,10}/);
          expect(instance.historyStatement).toHaveLength(3);
        });
        test(`printStatement().split('\\n')  length toEqual 4`, () => {
          instance.balance = 0;
          instance.withdraw(100);
          instance.withdraw(500);
          expect(instance.printStatement().split('\n')).toHaveLength(4);
        });
    
      
})