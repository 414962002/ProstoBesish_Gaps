

<p align="left">
<b>Contributors</b> </br>
  <i>
This project is open source, </br>
and gets better with the hard work </br>
and collaboration of multiple people. </br>
Thanks to the following for their </br>
contributions: </br>
<a href="https://github.com/BOrekhova">@BOrekhova</a>   </br>
<a href="https://github.com/elintendo">@elintendo</a>  
  </i>
</p>  

<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Caprasimo&duration=4500&pause=500&color=E47766&multiline=true&width=435&lines=Google+Apps+Script+and+Telegram+Bot;%22Guess-the-Number%22" alt="Typing SVG" /></a>  
  
<p align="center">
  <img src="https://github.com/414962002/prostobesischgaps_bot/blob/main/img/5555.png">  
  
</p>  

a few boring explanations, but...   

doPost receives an e parameter, which is an event object. The function parses the contents of e.postData as JSON and assigns it to the contents variable.  

The function then generates a random number using the functionGetRandomNumber function, with a range of 1 to 5.  

The function checks if contents has a property called message. If it does, it assigns the ID of the sender to the chatId variable and sends a text message with HTML formatting and a keyboard.  

If contents does not have a message property, the function checks if it has a callback_query property. If it does, it assigns the ID of the callback query to the callback_query_id variable, the data of the callback query to the cbData variable, and the ID of the sender to the chatIdCb variable.  

The function then sends an answer to the callback query with the sendAnswerCallbackQuery function, passing the sender's chat ID, the callback query ID, and a message with the callback data.  

Next, the function checks if the cbData is equal to the randomly generated number. If it is, it sends a text message with an emoji and a message displaying the lucky digit. It also clears the content of cell 'C2' in a Google Sheets spreadsheet.  

If cbData is not equal to the randomly generated number, the function appends an emoji to the value in cell 'C2' of the spreadsheet and sends a text message indicating that the user lost a life. It also sets the values of cells 'A2:B2' with an array containing cbData and the randomly generated number, and sets the value of cell 'C2' with the updated 'smile' value.  

```
| | A              | B                   | C     |  
| | -------------- | ------------------- | ----- |  
|1| User cbData    | Bot randomNumber    | Lives |  
| | -------------- | ------------------- | ----- |  
|2| 2              | 4                   | 🤨    |  
```  

If the 'smile' value reaches "🤨🤨🤨", it sends a text message with an emoji and a different keyboard layout, and clears the content of cell 'C2' in the spreadsheet.  
  
peace!
