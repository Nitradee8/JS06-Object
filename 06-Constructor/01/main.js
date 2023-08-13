  // ให้สร้าง Object calculator ซึ่งมี 3 method  
  // (ให้ใช้วิธี Constructor Function)
  // - read() ให้รับค่า input 2 ค่า
  // - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
  // - mul() ให้ return ค่าผลคูณของเลขทั้งสอง
  
function Calculator() {
  this.read = function() {
    this.x = +prompt('Enter num1');
    this.y = +prompt('Enter num2');
  };
  
  this.sum = function() {
    return this.x + this.y;
  };
  
  this.mul = function() {
    return this.x * this.y;
  };
}

let calculator = new Calculator();

console.log(calculator);
calculator.read();
alert(calculator.sum());
alert(calculator.mul());





