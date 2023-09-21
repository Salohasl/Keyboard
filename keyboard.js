<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <title>Экранная клавиатура</title>
    <link rel="stylesheet" href="sass.css">
  </head>
  <body>
    <style>
      body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10%;
      }
      #keyboard{
        padding-top: 50px;
      }
      button{
        height: 50px;
        width: 50px;
        background-color: burlywood;
        color: black;
        font-size: 17px;
        cursor: pointer;
      }
      button:hover{
        background-color: white;
      }
      .space{
        width: 200px;
        margin-top: 5px;
      }
      
    </style>
    <h2></h2>
    <div id="keyboard">
      <button class="str">h</button>
      <button class="str">e</button>
      <button class="str">l</button>
      <button class="str">l</button>
      <button class="str">o</button>
      <button class="str">w</button>
      <button class="str">o</button>
      <button class="str">r</button>
      <button class="str">l</button>
      <button class="str">d</button>
      <button class="delete">DEL</button>
    </div>
    <button class="space">space</button>
    <script>
        const text = document.querySelector('h2');
        const del = document.querySelector('.delete');
        const strs = document.querySelectorAll('.str');
        const space = document.querySelector('.space');
        
        for(let str of strs){
          str.addEventListener('click', ()=>{
            text.textContent += str.textContent;
          });
          space.addEventListener('click', ()=>{
            text.textContent += ' ';
          });
          del.addEventListener('click', ()=>{
            text.textContent = ' ';
          });
        }
    </script>
  </body>
</html>