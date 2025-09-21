class VendingMachine {
  #balance = 0;
  #inventory = {
    chips: { price: 25, stock: 5 },
    soda: { price: 40, stock: 1 },
    candy: { price: 15, stock: 10 }
  };

  constructor(password) {
    this.devPassword = password; 
  }

 
  insertMoney(amount) {
    if (amount <= 0) {
      console.log("Insert a valid amount.");
      return;
    }
    this.#balance += amount;
    console.log("You inserted " + amount + ". Current balance: " + this.#balance);

  }

  selectItem(itemName) {
    const item = this.#inventory[itemName];

    if (!item) {
      console.log("Item not found.");
      return;
    }

    if (item.stock <= 0) {
      console.log( itemName + " is out of stock.");
      return;
    }

    if (this.#balance < item.price) {
      console.log("Not enough balance. " + itemName + " costs " + item.price + ".");

      return;
    }

 
    item.stock--;
    this.#balance -= item.price;

    console.log("You bought a " + itemName + ". Remaining balance: " + this.#balance);

  }


  developerMode(password) {
    if (password !== this.devPassword) {
      console.log("Access Denied: Wrong password.");
      return;
    }

    console.log(" Developer Mode Access Granted.");
    console.log("Balance:", this.#balance);
    console.log("Inventory:", this.#inventory);
  }
}


let vm = new VendingMachine("group3");

vm.insertMoney(500);
vm.selectItem("chips");
vm.selectItem("soda");
vm.selectItem("soda");
vm.selectItem("soda");

vm.developerMode("group3");s