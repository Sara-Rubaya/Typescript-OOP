// access >> modify

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  private addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }

  public callHiddenMethod(balance: number) {
    this.addBalance(balance);
  }

  // optional: safe way to see balance
  public getBalance() {
    return this._userBalance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    // ❌ this._userBalance  // not accessible (private)
    // ❌ this.addBalance()   // not accessible (private)

    // ✅ correct way:
    this.callHiddenMethod(50);
    console.log(this.getBalance());
  }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);

// usage examples
mezbaBhaiAccount.callHiddenMethod(30);
console.log(mezbaBhaiAccount.getBalance());