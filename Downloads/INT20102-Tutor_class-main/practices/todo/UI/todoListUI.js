function showTodoItem(newId, newDescription) {
    const todoList = document.querySelector('#listTodo')
    const todoItem = document.createElement('div')
    todoItem.setAttribute('id', newId)
    todoItem.setAttribute('class', 'todoItem')

    const todoDesc = document.createElement('p')
    todoDesc.textContent = newDescription
    todoItem.appendChild(todoDesc)

    const todoStatus = document.createElement('button')
    todoStatus.textContent = 'Not Done'
    todoItem.appendChild(todoStatus)

    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'remove'
    todoItem.appendChild(removeBtn)

    todoList.appendChild(todoItem)
}

function showNumberOfDone(numberOfDone) {
    const done = document.querySelector('#done')
    done.textContent = `Number of Done:${numberOfDone}`
}
function showNumberOfNotDone(numberOfNotDone) {
    const notDone = document.querySelector('#notDone')
    notDone.textContent = `Number of Not Done:${numberOfNotDone}`
}

//add on 
//รับค่า removeId เป็นพารามิเตอร์
//removeId: แทน ID ขององค์ประกอบใน DOM (Document Object Model)
// ที่ต้องการลบ เช่น ID ของ <div> หรือ <li> ที่แสดงรายการงานใน Todo List.
//ใช้ document.getElementById() เพื่อค้นหาองค์ประกอบในหน้า HTML ที่มี ID ตรงกับค่าที่ส่งเข้ามา (removeId)
// ผลลัพธ์: ถ้าเจอ ID ที่ต้องการ จะได้ตัวอ้างอิง (reference) ไปยังองค์ประกอบนั้น เช่น <div id="task1">...</div>
function removeTodoItem(removeId) {
    const todoItem = document.getElementById(removeId)
    todoItem.remove()
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }
// module.exports = { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }
