const Math = equation => {
    
    return new Promise((resolve, reject) => {
        let pieces = equation.split(' ')
        let a = parseInt(pieces[0])
        let op = pieces[1]
        let b = parseInt(pieces[2])


// ABSOLUTELY NO CLUE WHAT IS WRONG WITH ELSE STATEMENT, OR WHATS GOING ON WITH COMMENTED OUT TEXT, ITS GREEN
//         if (!isNaN(a) && !isNaN(b) && '+-*/'.includes(op)) {
//             switch (op) {
//                 case '+':
//                     resolve(a + b)
//                     break
//                 case '-':
//                     resolve(a - b)
//                     break
//                 case '*':
//                     resolve(a * b)
//                     break
//                 case '/':
//                     resolve(a / b)
//                     break
//             } 
//             else {
//                 reject(new Error('Invalid Equation'))
//               }
//         }
//     })
// }
// Math('12 + 15')
// .then(result => {
//     console.log(result)
// })
// .catch(err => console.log(err))

// NOT SURE WHAT WENT WRONG WITH LINES 2 THROUGH 22
// const greeting = (message) => {
//     return new Promise((resolve, reject) => {
//         if (message) {
//             resolve(message)
//         } else {
//             reject(new Error('No message'))
//         }

//     })
// }
// greeting()
//     .then(message => {
//         console.log(message)
//     })
//     .catch(err => console.log(err))

//     Math('5 + 5')
//         .then(result => {
//             console.log(result)
//         })
//         .catch(err => console.log(err))

