// ให้สร้าง object ชื่อ user
// - เพิ่ม property ชื่อ name ให้มีค่าเท่ากับ John
// - เพิ่ม property ชื่อ surname ให้มีค่าเท่ากับ Doe
// - Update property name ให้มีค่าเป็น Matt
// - ลบ property name

const user = {};
    user.name = 'John';
    user.surname = 'Doe';
    user.name = 'Matt';
    
console.log('Before deletion:', user);
delete user.name;
console.log('After deletion:', user);







