/**
 * This code defines a variable named keyboard_lost 
 * which is an object with a property called inline_keyboard. 
 * The inline_keyboard property is an array of arrays, 
 * where each inner array represents a row of buttons. 
 * Each button is an object with properties text and callback_data. 
 * The code also sets the parse_mode property to "HTML".
 */

let keyboard_lost = {
  "inline_keyboard": [
    [{ text: '😜', callback_data: '1' }, { text: '😜😜', callback_data: '2' }],
    [{ text: '😜😜😜', callback_data: '3' }, { text: '😜😜😜😜', callback_data: '4' }],
    [{ text: '😜😜😜😜😜', callback_data: '5' }]

  ],
  parse_mode: "HTML",
}