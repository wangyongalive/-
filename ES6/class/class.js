// let User = function (name,email) {
//     this.name = name;
//     this.email = email;
// }
// User.prototype.info =function () {
//     console.log(`Hi,I am ${this.name}`);
// }
// class 语法糖
// 类就是一个特殊的函数 但是不存在函数提升
let User = class {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    info() {
        console.log(`Hi,I am ${this.name}`);
    }

    // 不能在实例上面调用
    static description() {
        console.log(`这是一个静态方法`);
    }

    // get set 是一个属性 不是方法
    set github(value) {
        this.githubName = value;
    }

    get github(){
        return `https://github.com/${this.githubName}`;
    }
}
const wangyong = new User('wang', '104234@qq.com');
wangyong.info();
wangyong.github = 'wangyongalive';
console.log(wangyong.github);
wangyong.info();
