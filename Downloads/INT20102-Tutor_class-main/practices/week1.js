// function switchItUp(number){
//     switch(number){
//         case 1 :
//             return 'One';
//         case 2 :
//             return 'Two';
//         default:
//             return 'Unknow Number';
//     }
// }

// console.log(switchItUp(2)) // change 0-9 to one-nine



//-----------------------
// const name ='James'

// const greeting = (n) => {
//    console.log('Hello ' + n)
//    console.log("Hello " + n)
//    console.log(`Hello ${n}`)
// }
// greeting(name) //output Hello James




//---------------------

// function getCharacterInfo(str){
//     if(str.length === 0){
//         return "String is empty"
//     }
//     return {
//         length: + str.length,
//         firstCharacter: str[0],
//         lastCharacter : str[str.length - 1]
       
//     }
// }

// console.log(getCharacterInfo("Javascript")) // { length: 10, firstCharacter: 'J', lastCharacter: 't' }


//---------------------
// function checkWord(setence,word){
//    return setence.includes(word) 
// }

//  console.log(checkWord("I love JavaScript","JavaScript")) //true
//  console.log(checkWord("I love JavaScript","Python")) //false




//------------------------
// function replaceWord(sentence,findword,replaceword){
//     return sentence.replace(findword,replaceword)
// }
// console.log(replaceWord("I Love JavaScript", "JavaScript" , "Python"))


//------------------------
// function capitalizeFirstletter(sentence){
//    return  sentence
//    .split(" ")
//    .map (word => word.charAt(0).toUpperCase() + word.slice(1))
//    .join(" ")

// }

// console.log(capitalizeFirstletter("javascript is awesome")) // Javascript Is Awesome


//------------------------
// function checkDataType(value){
//     return typeof value
// }
// console.log(checkDataType(42))
// console.log(checkDataType("Hello"))




//------------------------

// function checkCondition(value){
//     if(value){
//         return true
//     }
//     return false
// }
// console.log(checkCondition(0))
// console.log(checkCondition("Hello"))
// console.log(checkCondition(null))
// console.log(checkCondition([]))