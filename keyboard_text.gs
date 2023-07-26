/**
 * This code snippet defines an object called keyboard_text in JavaScript. 
 * It has a property called inline_keyboard which is an array of arrays. 
 * Each inner array represents a row of buttons. 
 * Each button is represented by an object with properties text and callback_data. 
 * The text property represents the label of the button, 
 * and the callback_data property represents the data to be sent when the button is clicked. 
 * The parse_mode property is set to "HTML".
 */

let keyboard_text = {
  "inline_keyboard": [
    [{ text: '😜', callback_data: '1' }, { text: '😜😜', callback_data: '2' }],
    [{ text: '😜😜😜', callback_data: '3' }, { text: '😜😜😜😜', callback_data: '4' }],
    [{ text: '😜😜😜😜😜', callback_data: '5' }]
  ],
  parse_mode: "HTML",
}

