import { addTodoHandler } from './eventHandler/eventController.js'

//main
const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', addTodoHandler)
