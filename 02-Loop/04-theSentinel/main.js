// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด   
// และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

const Object1 = {};

while (true) {
  const key = prompt('Enter a key (or "stop" to finish):');
  
  if (key === 'stop') {
    break;
  }
  const value = prompt(`Enter the value for key "${key}":`);
  newObject[key] = value;
}

console.log('Final Object:', Object1);