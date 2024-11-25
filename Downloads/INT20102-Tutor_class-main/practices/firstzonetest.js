// function rollDice() {
//     // Your logic here
//     return Math.floor(Math.random() * 6  + 1)
// }
// console.log(rollDice())

// function generateRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max-min + 1)  + min)
// }
// console.log(generateRandomNumber(50, 100))



// function categorizeAge(age) {
//     if (age < 13) {
//         return "child"
//     } else if(age >= 13 && age <= 19) {
//         return "teen"
//     }
//     else if(age >= 20 && age <= 59){
//         return "adult"
//     }
//     else{
//         return "senior"
//     }
// }

// // Example Calls:
// console.log(categorizeAge(10)) // Output: child
// console.log(categorizeAge(16)) // Output: teen
// console.log(categorizeAge(35)) // Output: adult
// console.log(categorizeAge(70)) // Output: senior


// วิธีแรก
// function sumArray(arr) { 
//     const totalnumber = arr.reduce((total,currentValues) => total + currentValues)
//     return totalnumber
// }

// const numbers = [5, 10, 15, 20]
// console.log('The sum is:', sumArray(numbers))
// วิธีสอง
// function sumArray(arr) { 
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total = total + arr[i]
//     }
//     return total
// }

// const numbers = [5, 10, 15, 20]
// console.log('The sum is:', sumArray(numbers))

// วิธีสาม
// function sumArray(arr) { 
//     let total = 0;
//     for (const i in arr) {
//         total = total + arr[i]
//     }
//     return total
// }   



// const numbers = [5, 10, 15, 20]
// console.log('The sum is:', sumArray(numbers))





//     function groupByParity(arr) {
//         Even = []
//         Odd = []

//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] % 2 === 0) {
//                 Even.push(arr[i])
//             }else {
//                 Odd.push(arr[i])
//             }
//         }
//         return [Even,Odd]
//     }

//     const numbers = [1, 2, 3, 4, 5, 6]
//     console.log(groupByParity(numbers)) // Output: [[2, 4, 6], [1, 3, 5]]
// }

// {
//     function groupByParity(arr) {
//         const Even =  arr.filter(num => num % 2 === 0)
//         const Odd = arr.filter(num => num % 2 !== 0)

//         return [Even,Odd]
//     }

//     const numbers = [1, 2, 3, 4, 5, 6]
//     console.log(groupByParity(numbers)) // Output: [[2, 4, 6], [1, 3, 5]]
// }

//2. findMax element in an array
//  {
//     function findMax(arr) {
//         let maxvalue = 0;

//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > maxvalue) {
//                 maxvalue = arr[i]
//             }
//         }
//         return maxvalue
//     }

//     const numbers = [1, 5, 3, 9, 2]
//     console.log(findMax(numbers)) // Output: 9
// }



// 3. count occurrences in an array
// function countOccurrences(arr) {
//     let counts = {}; // สร้างอ็อบเจ็กต์เก็บจำนวนการเกิดของแต่ละตัวเลข

//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i]; // ดึงค่าปัจจุบันจากอาร์เรย์
//         if (counts[num]) {
//             counts[num]++; // ถ้าตัวเลขนี้เคยเกิดขึ้นแล้ว ให้เพิ่มค่าไปอีก 1
//         } else {
//             counts[num] = 1; // ถ้ายังไม่เคยเกิดขึ้น กำหนดค่าเป็น 1
//         }
//     }

//     return counts;
// }

// const numbers = [1, 2, 2, 3, 1, 4, 3, 3];
// 



//     function processStudentScores(students) {
//         // Your logic here
//         return students
//         .map((student) =>{
//             const average = student.scores.reduce((sum,score) => sum + score ,0) / student.scores.length
//             return {...student ,average}
//         })
//         .filter((student) => student.average >= 50)
//         .map((student) => {
//             let grade = student.average >= 90 ? 'A' : student.average >= 80 ? 'B' : student.average >= 70 ? 'C' : student.average >= 60 ? 'D' : 'F'
//             return {name : student.name,average: student.average,grade}
//         })

//     }

//     const students = [
//         { name: 'James', scores: [85, 90, 78] },
//         { name: 'Sophia', scores: [45, 55, 65] },
//         { name: 'Mike', scores: [95, 92, 88] },
//         { name: 'Alex', scores: [60, 70, 80] },
//         { name: 'Ella', scores: [35, 40, 50] },
//     ]

//     console.log(processStudentScores(students))
// }




// function processStudentScores(students){
//     return students.map((student) =>{
//         const average = student.scores.reduce((sum,score) => sum + score , 0) / student.scores.length
//         return {...student,average}
//     })
//     .filter((student) => student.average >= 50)
//     .map((student) =>{
//         let grade = student.grade >= 90 ? 'A' : student.grade >= 80 ? 'B' : student.grade >= 70 ? 'D' : student.grade >= 60 ? 'D' : 'F'
//         return {name: student.name,average: student.average,gra}
//     })
//
// }


// const students = [
//     { name: 'James', scores: [85, 90, 78] },
//     { name: 'Sophia', scores: [45, 55, 65] },
//     { name: 'Mike', scores: [95, 92, 88] },
//     { name: 'Alex', scores: [60, 70, 80] },
//     { name: 'Ella', scores: [35, 40, 50] },
// ]

// console.log(processStudentScores(students))



// function formatString(str, type) {
//     if (typeof str !== "string" || str === undefined || str === null) {
//         return ("In valid input")
//     } else if (typeof type !== "string" || type === undefined || type === null) {
//         return ("In valid input")
//     } else if (type === 'lower'){
//         return str.toLowerCase()
//     } else if (type ==='upper'){
//         return str.toUpperCase()
//     }
//     else{
//         return str
//     }

// if (str === undefined || str === null || typeof type !== 'string') {
//     return undefined
// }
// return type === 'lower' ? str.toLowerCase() : type ==='upper' ? str.toUpperCase() : str





// Test case
// console.log(formatString(7,"upper")) // Expected output: 123
// console.log(formatString('Test', 'upper')) // Expected output: '123'


const  totalPages = (arrayItems, rowsPerPage) => {
    if (arrayItems === null || arrayItems === undefined) {
        return undefined
    }
    else if(rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0){
        return 1
    }else{
        const totalitem = arrayItems.length
        return Math.ceil(totalitem/rowsPerPage)
    }

}


// const arrayItems = Array.from({ length: 40 }, (_, i) => i + 1)

// console.log(arrayItems.slice(0, 15)) // Output: [1, 2, 3, 4, 5, ..., 15]
// console.log(arrayItems) // Output: [16, 17, 18, 19, 20, ..., 40]

// // Test cases
// console.log(totalPages(arrayItems.slice(0, 35), 15)) // Expected output: 3
// console.log(totalPages(arrayItems.slice(0, 10), 20)) // Expected output: 1
// console.log(totalPages(arrayItems, 10)) // Expected output: 4
// console.log(totalPages(arrayItems.slice(0, 25), 0)) // Expected output: 1
// console.log(totalPages(arrayItems.slice(0, 25), null)) // Expected output: 1
// console.log(totalPages(arrayItems.slice(0, 25), undefined)) // Expected output: 1
// console.log(totalPages(null, 20)) // Expected output: undefined
// console.log(totalPages(undefined, 20)) // Expected output: undefined




// const validatePassword = (password) => {
//     if (password === null || password === undefined || password.length === 0)
//         return false
//     if (password.length < 8)
//         return false;

//     let hasUppercase = false
//     let hasLowerCase = false
//     let hasDigitCheck = false
//     let hasSpecialchar = false
//     for (const char of password) {
//         const Specialchar = /[@#$%^&*!]/
//         if (char >= 'A' && char <= 'Z') {
//             hasUppercase = true
//         } else if (char >= 'a' && char <= 'z') {
//             hasLowerCase = true
//         } else if (char >= "0" && char <= "9") {
//             hasDigitCheck = true
//         } else if (Specialchar.test(char)) {
//             hasSpecialchar = true
//         }
//     }
//     return hasUppercase && hasLowerCase && hasDigitCheck && hasSpecialchar
// }

// // Test case
// console.log(validatePassword('Zky543#@')) // Expected output: true
// console.log(validatePassword('1234abcd')) // Expected output: false
// console.log(validatePassword('hvhcfgcbgvgvhgc')) // Expected output: false



// function findFirstAndLast(str, char) {
//     const firstindex = str.indexOf(char)
//     const lastindex = str.lastIndexOf(char)
//     return {firstindex , lastindex}
// }

// // Test case
// console.log(findFirstAndLast('javascript', 'a')) // output: { firstIndex: 1, lastIndex: 3 }