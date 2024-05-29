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
        bookLength = Books.length[i]
       
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


  
    console.log(longestName(Books))

    //  - Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//       For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].