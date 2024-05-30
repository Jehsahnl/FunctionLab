// Part 1: thinking Functionally
// write functions that accomplish the following:




//  - Take a number, n, and print every number between 1 and n without using loops. Use recursion.

//  - Take an array of numbers and return the sum.
function add() {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i]
    }
    return total
    
  } 
  let numbers = [1, 7, 20, 49, 60]
  let result = add(numbers)
  console.log(result)


  //  - Take an array of numbers and return the average.
  function average(){
    let totalAverage = result / numbers.length
    return totalAverage
  }

  let sumAverage = average()
  console.log(sumAverage)

  //  - Take an array of strings and return the longest string.

  function longestName(){
    let bookLength = 0
  for(let i = 0; i < Books.length; i++ ){
    if(bookLength < Books[i].length){
        bookLength = Books[i].length
       
    } else {
        continue
    }
    }
    // managed to get function to return longest string but I'm blanking on how to return it as the name instead of the number
     return bookLength
    function bookName(){
        if(Books[i].length == bookLength){
            Books.length[i]  = bookLength
        }
    }
    

  }

  let Books = ["Artemis Fowl", "Dune", "The Martian", "Fire Punch", "The Theater Of Dusk", "Goodbye Eri"]
let longest = longestName(Books)

  
    console.log(longest)

    /**Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"]. */

let stringsLongerThan = ["The", "beauty", "of", "the", "sunset", "was", "obscured", "by", "the", "industrial", "cranes", ]

function reduceWords(){
    let wordLength = 6
    for(i = 0; i < stringsLongerThan.length; i++){
        if(wordLength < stringsLongerThan[i].length){
            let i = stringsLongerThan.length > wordLength
        }
             
    }
}



// Part 2: Thinking Methodically
// Use callback functions alongside Array methods to accomplish the following:

const info = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// - Sort the array by age.
sortAge = info.sort((a, b) => a.age - b.age)

console.log(sortAge)

// - Filter the array to remove entries with an age greater than 50.
function over50(x){
    return x.age <= 50
}

const under50 = info.filter(over50)
console.log(under50)


// - Map the array to change the “occupation” key to “job” and increment every age by 1.

// wanna come back to this but couldn't figure out how to implement 

// - Use the reduce method to calculate the sum of the ages.
//      Then use the result to calculate the average age.

// Part 3: Thinking Critically

// Take an object and increment its age field.

let testAge = [22, 33, 44, 56]

function addAge(j){
    let addBy = 12
    for(i = 0; i < addBy; i++){
        return j + i
    }
    
}

// was testing other mthods but having problems gettnig them to work... I'll be back to work on these later

console.log(incrementAge)

// Take an object, make a copy, and increment the age field of the copy. Return the copy.

