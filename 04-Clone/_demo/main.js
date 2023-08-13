const log = console.log;

log('Object Clone');

const todo = {
    task: 'Do Hw',
    complete: false,
    due_date: '13-08-2023',
};

// const newTodo = todo;
// newTodo.complete = true;
// log.(todo.complete);

// Clone
// const newTodo = {}
// log(newTodo);
    // 1.เอาต้นแบบมา loop แล้ว assing ที่ละ key:value ให้ Object ใหม่

    // for (let key in todo) {
    //     // 
    //     newTodo[key] = todo[key];
    // }




// วิธีที่ 2. Object.assing--------------------------------------------------------
// MERGE/OVERRIDE Direction : RIGHT -> LEFT
// Object.assing(newTodo, todo);

// 2A
// const newTodo = {};
// Object.assign(newTodo,todo);

// 2B
const newTodo = Object.assign({}, todo);
log(newTodo);

