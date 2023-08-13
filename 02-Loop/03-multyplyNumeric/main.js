// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object  
// คูณเฉพาะ value ที่เป็น number เท่านั้น

// --before 
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu'
// };

// --after call function multiplyNumeric(menu, 3)
// menu = {
//   width: 600,
//   height: 900,
//   title: 'My menu'
// };
//--------------------------------------------------------------------------

const multiplyNumeric = (Object, num) => {
    for (let key in Object[key]) {
        // console.log(key);
        let value = Object[key];
        if(typeof value === 'number') {
            // console.log(value, num);
            // updaet value
            // Object[key] = Object[key] * num;
            Object[key] *= num;
            // menu['width' = 200 * 3]
            // menu['height' = 300 * 3]
        }
    }
};

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

multiplyNumeric(menu, 10);
console.log(menu);

//---------------------------------------------------------------------------

let menuObj ={
    width: 200,
}

menuObj.width = menuObj.width

