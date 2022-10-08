const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
    return tutorials.map((tutorial) => {
      const words = tutorial.split(" ")
      // console.log(words)
      const clue = words.map((word) => {return word.charAt(0).toUpperCase() + word.slice(1); 
      });
      const fun = clue.join(" ")
      console.log(fun)
      return fun
  })
}



//  { const newArray = array.split(" ")
//   const newWords = newArray.map((word) => { 
//       return word[0].toUpperCase() + word.substring(1); 
//     }).join(" ");
//     console.log(newWords)
// }


// function capitalizeWords(array){
//   const newArray = array.split(" ")
//   const newWords = newArray.map((word) => { 
//       return word[0].toUpperCase() + word.substring(1); 
//     }).join(" ");
//     console.log(newWords)
// }
// console.log(capitalizeWords(tutorials))



// const titleCased = () => {
//   return tutorials
// }



// const mySentence = "i am the coolest lame person";

// const words = mySentence.split(" ");

// const newWords = words.map((word) => { 
//   return word[0].toUpperCase() + word.substring(1); 
// }).join(" ");

// console.log(newWords)
