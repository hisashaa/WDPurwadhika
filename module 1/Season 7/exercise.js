/////////////////////////////////////////////////////////////
/////////////// EXERCISE ///////////////////////////////////

const check = (obj1, obj2) => {
    const n1 = Object.values(obj1);
    const n2 = Object.values(obj2);
    return n1 == n2 ? true : false;
  };
  
  const result = check({ a: 1 }, { a: 1 });
  console.log(result);
  /* ---------------------------------------*/
  
  const checkObj = (obj1, obj2) => {
    let result = {};
    for (let key in obj1) {
      if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
        result[key] = obj1[key];
      }
    }
    return result;
  };
  
  const data1 = { a: 1, b: 2 };
  const data2 = { a: 1, c: 3 };
  console.log(checkObj(data1, data2));
  /* ---------------------------------------*/
  
  const merge = (obj1, obj2) => {
    const merger = [...obj1, ...obj2];
    const unique = new Set(merger.map(JSON.stringify));
    return Array.from(unique).map(JSON.parse);
  };
  
  const object = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
  ];
  const object1 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
  ];
  console.log(merge(object, object1));
  /* ---------------------------------------*/
  
  const switchArr = (obj) => {
    const a = { name: "David", age: 20 };
    for (let b in a) {
      b;
    }
  
    const check = obj.map((item) => {
      const result = {};
      for (let key in item) {
        result[item[key]] = key;
      }
      return result;
    });
    return check;
  };
  
  const data = [{ name: "David", age: 20 }];
  console.log(switchArr(data));
  /* ---------------------------------------*/
  
  const factNum = (input) => {
    let result = 1;
    let step = "";
  
    for (let i = input; i > 0; i--) {
      result *= i;
      step += i;
      if (i !== 1) {
        step += " x ";
      }
    }
    return `${input}! = ${step} = ${result}`;
  };
  
  console.log(factNum(5));
  
  /* ---------------------------------------*/
  
  //Shooting game //
  // Two player, each player has property of name, health and power //
  
  const Player = class {
    constructor(name, health = 100, power = 10) {
      this.name = name;
      this.health = health;
      this.power = power;
    }
    hit(opponent) {
      opponent.health -= this.power;
    }
    useItem(item) {
      this.health += item.health;
      this.power += item.power;
    }
    showStatus() {
      console.log(
        `${this.name} (Health => ${this.health}, Power => ${this.power})`
      );
    }
  };
  
  const Player2 = class {
    constructor(name, health = 100, power = 10) {
      this.name = name;
      this.health = health;
      this.power = power;
    }
    hit(opponent) {
      opponent.health -= this.power;
    }
    useItem(item) {
      this.health += item.health;
      this.power += item.power;
    }
    showStatus() {
      console.log(
        `${this.name} (Health => ${this.health}, Power => ${this.power})`
      );
    }
  };
  
  class ShootingGame {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
  
    getRandomItem() {
      const health = Math.random() < 0.5 ? 0 : 10;
      const power = Math.random() < 0.5 ? 0 : 10;
      return `${health}, ${power}`;
    }
  
    start() {
      while (this.player1.health > 0 && this.player2.health > 0) {
        this.player1.showStatus();
        this.player2.showStatus();
        console.log("Player Status Before Shooting:");
  
        const item1 = this.getRandomItem();
        const item2 = this.getRandomItem();
        console.log("Player Status After Getting Items:");
  
        this.player1.useItem(item1);
        this.player2.useItem(item2);
  
        this.player1.showStatus();
        this.player2.showStatus();
  
        this.player1.hit(this.player2);
        this.player2.hit(this.player1);
        console.log("Player Shooting: ");
  
        console.log("Player Status after Shooting: ");
  
        this.player1.showStatus();
        this.player2.showStatus();
  
        if (this.player1.health <= 0) {
          console.log(`Winner: ${this.player2.name}`);
        } else {
          console.log(`Winner: ${this.player1.name}`);
        }
      }
    }
  }
  
  const player1 = new Player("Player A");
  const player2 = new Player2("Player B");
  const game = new ShootingGame(player1, player2);
  
  console.log(game.start());