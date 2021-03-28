// https://www.codewars.com/kata/54ba84be607a92aa900000f1/javascript
// 7 Kyu

function isIsogram(str){
    if (str.length == 0 || str == null || str == undefined) {
      return true;
    }
    let array = str.toLowerCase().split("")
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < i; j++) {
        if (array[i] == array[j]) {
          return false;
        }
      }
    }
    return true;
}

// Best Answer on Codewars
// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
// }