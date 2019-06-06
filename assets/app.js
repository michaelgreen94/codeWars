function iqTest(numbers) {
  let numbersMap = new Map()
  let evenCounter = 0
  let oddCounter = 0
  let newNumbers = numbers.split(' ')
  let out = ''
  for (let i = 0; i < newNumbers.length; i++) {
    let val = parseInt(newNumbers[i])
    if (val % 2 == 0) {
      evenCounter++
      numbersMap.set('true', i + 1)
    } else {
      oddCounter++
      numbersMap.set('false', i + 1)
    }
  }
  debugger
  if (evenCounter >= 2) {
    out = numbersMap.get('false')
  } else {
    out = numbersMap.get('true')
  }
  return out
}

iqTest("2 4 7 8 10")
// iqTest("1 2 2")