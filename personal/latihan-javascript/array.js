/*

Direction:

- Buatlah sebuah function untuk array yang berisi kumpulan string
- Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array 
  yang dikumpulkan sesuai dengan abjad depannya (berurut a-z)


Contoh:
jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

*/


function groupAnimals(animal) {
  var result = [];
  
  for (let i = 0; i < animal.length; i++) {
    if (animal[i][0] == "a" ) {
      result.push(animal[i]);
    } else if (animal[i][0] == "b") {
      result.push(animal[i]);
    } else if (animal[i][0] == "c") {
      result.push(animal[i]);
    } else if (animal[i][0] == "d") {
      result.push(animal[i]);
    } else if (animal[i][0] == "e") {
      result.push(animal[i]);
    } else if (animal[i][0] == "f") {
      result.push(animal[i]);
    } else if (animal[i][0] == "g") {
      result.push(animal[i]);
    } else if (animal[i][0] == "h") {
      result.push(animal[i]);
    } else if (animal[i][0] == "i") {
      result.push(animal[i]);
    } else if (animal[i][0] == "j") {
      result.push(animal[i]);
    } else if (animal[i][0] == "k") {
      result.push(animal[i]);
    } else if (animal[i][0] == "l") {
      result.push(animal[i]);
    } else if (animal[i][0] == "m") {
      result.push(animal[i]);
    } else if (animal[i][0] == "n") {
      result.push(animal[i]);
    } else if (animal[i][0] == "o") {
      result.push(animal[i]);
    } else if (animal[i][0] == "p") {
      result.push(animal[i]);
    } else if (animal[i][0] == "q") {
      result.push(animal[i]);
    } else if (animal[i][0] == "r") {
      result.push(animal[i]);
    } else if (animal[i][0] == "s") {
      result.push(animal[i]);
    } else if (animal[i][0] == "t") {
      result.push(animal[i]);
    } else if (animal[i][0] == "u") {
      result.push(animal[i]);
    } else if (animal[i][0] == "v") {
      result.push(animal[i]);
    } else if (animal[i][0] == "w") {
      result.push(animal[i]);
    } else if (animal[i][0] == "x") {
      result.push(animal[i]);
    } else if (animal[i][0] == "y") {
      result.push(animal[i]);
    } else if (animal[i][0] == "z") {
      result.push(animal[i]);
    }
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]