const log = console.log;
log('Learn Ref.');

// Copied by Value
// Copied by Reference


// PRIMITIVE
let message = 'Hello';

// ****
let word = message;

message = 'Hi';
log(message);
log(word);



// OBJECT
// User ดก็บ address ของ Literral Object
let user = {
    name: 'John'
    age:33,
};

// 
// 
let employee = user;

log(user.name);
log(employee);




user.name = 'Jane';
log(user.name);
employee.name = 'Joe';
