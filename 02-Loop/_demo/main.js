const user = {
    'firstName': 'Codecamp',
    'lastName': 'Software Park',
    'age': 20,
    // key:'JaAEEE',
};

// For IN : Loop through Object
// For (let <key_variable> <Obj>) {}

for (let key in user) {
    // let key = "firstName"
    // let key = "lasttName"
    // let key = 'age'
    console.log(key); // auto dynamics assign 
    console.log(user[key]); // need to ass
}




// 'firstName' in user; // true
// 'age' in user; // true
// 'phone' in user; // false