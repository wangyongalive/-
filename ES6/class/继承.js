class Animal {
    constructor(name) {
        this.name = name;
        this.belly = [];
    }

    eat(food) {
        this.belly.push(food);
    }
}

// 通过extends和super关键字实现继承
class Dog extends Animal {
    constructor(name, age) {
        super(name); // super 做了很多原本es5的事情
        this.age = age;
    }

    bark() {
        console.log(`Barl bark`);
    }
}

const lucky = new Dog('lucky', 3);
lucky.eat('apple');
console.log(lucky.belly);
lucky.bark();