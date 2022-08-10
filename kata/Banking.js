class Banking {
    balance = 0
    lastAmoutDepositOrWithdraw
    dateLastAction
    printStatementString = ''
    historyStatement = ['Date        Amount  Balance']
    log(){
        return 'OK'
    }
    deposit(depositAmout){
        this.#balanceUpdate(depositAmout)       
    }
    withdraw(withdrawAmout){
        this.#balanceUpdate(-withdrawAmout)
    }
    #balanceUpdate(amount){
        this.balance = this.balance + amount;
        this.#modifyHistoryStatement(amount);
    }
    #modifyHistoryStatement(amount){
        this.#modifyDateLastActionDateMonthYear();
        this.lastAmoutDepositOrWithdraw = amount;
        this.historyStatement.push(this.#generateNewLineHistoryStatement(amount));
    }
    #modifyDateLastActionDateMonthYear(){
        const currentDate = new Date();
        const date = currentDate.getDate();
        const month = currentDate.getMonth(); 
        const year = currentDate.getFullYear();
        const text = date+'.'+month+'.'+year;
        this.dateLastAction = text;
    }
    #generateNewLineHistoryStatement(amount){
        let newLineStatement = `${this.dateLastAction}`;
        newLineStatement = newLineStatement.padEnd(13,' '); 
        let textAmount ='';
        if (amount >=0){
            textAmount = `+${amount}`;
        } else {
            textAmount = `${amount}`;
        }
        newLineStatement = newLineStatement + textAmount.padEnd(10,' ');
        newLineStatement = newLineStatement + this.balance.toString().padEnd(10,' ');
        return newLineStatement;
    }
    printStatement(){
        this.#generatePrintStatementString();
        return this.printStatementString;
    }
    #generatePrintStatementString(){
        this.historyStatement.forEach(item => {
            this.printStatementString += item;
            this.printStatementString += '\n';
        })
    }

}

module.exports = Banking;