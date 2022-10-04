/**
 * The random number program 
 *
 *
 * By: Igor Zhelezniak
 * Version: 1.0
 * Since:   2022-10-04
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()
const min = 1
const max = 6
const randomNumber = Math.floor(Math.random() * max) + min
let numberOfGuesses = 1

while (true) {
  try {
    const sUserNumber = prompt('Guess a number between 1-6: ')
    const userNumber = parseInt(sUserNumber)

    if (isNaN(userNumber)) {
      throw new Error('not a number')
    }
    if (userNumber < 1 || userNumber > 6) {
      console.log('Invalid input. Enter number between 1-6.')
    } else if (userNumber === randomNumber) {
      console.log('\nYou guessed correctly!')
      console.log(`It took ${numberOfGuesses} tries.`)
      break
    } else if (userNumber > randomNumber) {
      console.log('Your number is too high.')
    } else {
      console.log('Your number is too low.')
    }
  } catch (e) {
    console.log('Invalid input')
  }
  numberOfGuesses = numberOfGuesses + 1
}
console.log('\nDone.')
