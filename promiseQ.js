const Math = equation => {
    
    return new Promise((resolve, reject) => {
      let pieces = equation.split(' ')
      let a = parseInt(pieces[0])
      let op = pieces[1]
      let b = parseInt(pieces[2])

      if (!isNaN(a) && !isNaN(b) && '+-*/'.includes(op)) {

        switch (op) {
          case '+':
            resolve(a + b)
            break
          case '-':
            resolve(a - b)
            break
          case '*':
            resolve(a * b)
            break
          case '/':
            resolve(a / b)
            break
        }
      } else {
        reject(new Error('Invalid Equation'))
      }

    })
  }

  Math('12 / 12')
    .then(result => {
      console.log(result)
    })
    .catch(err => console.log(err))