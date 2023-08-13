// บรรทัดที่มี * และ ** ให้ผลลัพธ์เป็นอะไร เพราะอะไร


const user = {
  email: 'cc@gmail.com',
  isActive: true
};

// user.isActive = false;
// console.log(user); 
    // * {email: 'cc@gmail.com', isActive: false}
    // email: "cc@gmail.com"
    // isActive: false
    // [[Prototype]]: Object 

// user = {};
console.log(user); 
    // ** {email: 'cc@gmail.com', isActive: true}
    // email: "cc@gmail.com"
    // isActive: true
    // [[Prototype]]: Object
