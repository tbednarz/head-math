# quick-head-math

I created this app for anybody who has problems performing mental calculations
practice makes perfect!
Randomly generated numbers will be put on screen at a variable speed determined by the slider position
(1-10 seconds) 
Enjoy!

<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1 style="font-size:10vw" id="app-head">Addition</h1>

    <div class="container">
      Pick your operator
      <!-- operation picker -->
      <div id="operationPick">
        <button class="picker" onclick="changeAdd()">+</button>
        <button class="picker" onclick="changeSub()">-</button>
        <button class="picker" onclick="changeMult()">*</button>
        <button class="picker" onclick="changeDiv()">/</button>
      </div>
      <!-- Equation setup -->
      <div class="wrapper">
        <div id="numOne"></div>
        <div id="operation">+</div>
        <div id="numTwo"></div>
        =
        <div id="answer"></div>
        <!-- input range is in milliseconds -->
        <input
          type="range"
          name="range"
          id="slider-range"
          min="1000"
          max="10000"
        />

        <div id="practice">Mental Math Practice</div>
      </div>
      <div id="about-app">
        I created this application for anyone who has a hard time with mental
        math <br />
        Use the slider to change the speed of the numbers changing <br />
        Perform the operation in your head!
      </div>
    </div>
    <footer>Created by Tres Bednarz</footer>
    <script src="app.js" async defer></script>
  </body>
</html>

