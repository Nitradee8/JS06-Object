// - ให้สร้าง Object calculator ซึ่งมี 3 method 
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

let calculator = {
  read() {
    this.x = +prompt('Enter num1');
    this.y = +prompt('Enter num2');
    },
    sum() {
      return this.x + this.y;
    },
    mul() {
      return this.x * this.y;
    },
  }

console.log(calculator);
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
