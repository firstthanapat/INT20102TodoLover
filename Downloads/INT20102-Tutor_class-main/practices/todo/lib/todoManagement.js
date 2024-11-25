// const Todo = require('./Todo.js')
import Todo from './Todo.js'
function todoManagement() {
    const todos = []
    function addTodo(id, desc, done) {
        const todo = new Todo(id, desc, done)
        todos.push(todo)
        return todo.id
    }
    function findTodo(searchId) {
        return todos.find((todo) => todo.id === searchId)
    }
    function findIndexTodo(searchId) {
        return todos.findIndex((todo) => todo.id === searchId)
    }
    function removeTodo(removeId) {
        const foundIndex = findIndexTodo(removeId)
        todos.splice(foundIndex, 1)
    }
    function getTodos() {
        return todos
    }
    function getNumberOfDone() {
        return todos.filter((todo) => todo.done).length
    }
    function getNumberOfNotDone() {
        return todos.filter((todo) => !todo.done).length
    }
    function clearTodo() {
        todos.splice(0, todos.length)
    }

    //ค้นหา todo ที่มีค่าตรงกัน doneId จากนั้นให้เรียกฟังก์ชัน setDone() เพื่อกำหนด done ให้เป็น true
    function setItemToDone(doneId) {
        const todo = findTodo(doneId)
        todo.setDone(true)
    }
    // funcion นี้คือจะเซตสถานะของ todo ให้เป็น done ก็คือเสร็จแล้ว
    // เรียกใช้ฟังก์ชัน findTodo เพื่อค้นหา Todo ที่ตรงกับ done id
    // ใช้เมธอด setDone(true) เพื่อเปลี่ยนสถานะของ Todo นั้นให้เป็น done
    
    return { addTodo, findTodo, removeTodo, getTodos, getNumberOfDone, getNumberOfNotDone, clearTodo, setItemToDone }
}
export default  todoManagement 
