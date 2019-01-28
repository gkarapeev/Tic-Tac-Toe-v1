
let boardContent = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];                    // This array will keep track of the state of each square



// Below the relevant indexes that need to be checked in order to tell if a line is complete

let row1 = [0,1,2];
let row2 = [3,4,5];
let row3 = [6,7,8];

let col1 = [0,3,6];
let col2 = [1,4,7];
let col3 = [2,5,8];

let d1 = [0,4,8];
let d2 = [2,4,6];



// Below are the all the lines that a given square might complete

let linesS1 = [row1, d1, col1];
let linesS2 = [row1, col2];
let linesS3 = [row1, d2, col3];
let linesS4 = [row2, col1];
let linesS5 = [row2, col2, d1, d2];
let linesS6 = [row2, col3];
let linesS7 = [row3, d2, col1];
let linesS8 = [row3, col2];
let linesS9 = [row3, d1, col3];


let completeness = [];                                                                 // will eventually contain something like [false, false, true, false]. The function fillValues will fill it with these values


// currentSign will toggle between "X" and "O" on every turn

let currentSign = "X";
let currentSignPath = "img/x.svg";

function currentSignToggle() {                                                         // This function is called by every "playSquareN" function below and essentially toggles between "X" and "O" on every turn

     if (currentSign == "X") {
          currentSign = "O";
          currentSignPath = "img/o.svg";
     }

     else {
          currentSign = "X";
          currentSignPath = "img/x.svg";
     }
}


// Defining a Square object constructor. It contains the checks which need to be performed to see if a line was completed by placing currentSign in this square

function Square(squareIndex, lines) {
     
     this.linesToCheck = lines;


     this.matchesSign = function (sign) {                                              // this will be used by the fillValues method to check if there is a whole line which matches the currentSign and therefore wins the game
          return sign == currentSign;
     }


     this.isTrue = function (entry) {                                                  // Checks if a value is true
          return entry == true;
     }


     this.squareUpdate = function () {                                                 // 1. Updating the relevant field on the board with its new value
          boardContent[squareIndex] = currentSign;
     }


     this.fillValues = function () {

          completeness = [];                                                           // Resetting the completeness log before filling it with relevant values

          for (i = 0; i < this.linesToCheck.length; i++) {                             // 2. Fills the completeness array with boolean values corresponding to the completeness of each possible lines

               let part1 = this.linesToCheck[i][0];                                         // part1 will obtain the index of boardContent which needs to be checked for the current line
               let part2 = this.linesToCheck[i][1];
               let part3 = this.linesToCheck[i][2];

               
               if (boardContent[part1] == currentSign && boardContent[part2] == currentSign && boardContent[part3] == currentSign) {
                    this.isComplete = true;

               } else {
                    this.isComplete = false;
               }

               completeness.push(this.isComplete);

          }
     }


     this.executeTurn = function () {                                                  // Doing everything that's necessary to compute the turn and reflect the results in the GUI

          this.squareUpdate();
          this.fillValues();


          if (completeness.some(this.isTrue)) {                                        // Checks if any of the items in completeness is true, aka if any line is complete
               
               alert(`Player "${currentSign}" wins!`);
          
          } else {
               console.log("No win yet");
          }

          currentSignToggle();
     }

}


// Creating all the square objects

let objectS1 = new Square(0, linesS1);
let objectS2 = new Square(1, linesS2);
let objectS3 = new Square(2, linesS3);
let objectS4 = new Square(3, linesS4);
let objectS5 = new Square(4, linesS5);
let objectS6 = new Square(5, linesS6);
let objectS7 = new Square(6, linesS7);
let objectS8 = new Square(7, linesS8);
let objectS9 = new Square(8, linesS9);



// Obtaining the html elements through their ID tags and storing them in variables

let square01 = document.getElementById("sq1");
let square02 = document.getElementById("sq2");
let square03 = document.getElementById("sq3");
let square04 = document.getElementById("sq4");
let square05 = document.getElementById("sq5");
let square06 = document.getElementById("sq6");
let square07 = document.getElementById("sq7");
let square08 = document.getElementById("sq8");
let square09 = document.getElementById("sq9");





function playSquare1() {                                               // Taking all the necessary action after a sign was placed in this square

     square01.getElementsByTagName("img")[0].src=currentSignPath;
     square01.getElementsByTagName("img")[0].removeAttribute("style");                          // Updating the visual interface of the game to display the newly placed sign on the board

     objectS1.executeTurn();                                           // Doing everything that's necessary to compute the turn and reflect the results in the GUI
}

function playSquare2() {                                               // Taking all the necessary action after a sign was placed in this square

     square02.getElementsByTagName("img")[0].src=currentSignPath;
     square02.getElementsByTagName("img")[0].removeAttribute("style");

     objectS2.executeTurn();                                           // Doing everything that's necessary to compute the turn and reflect the results in the GUI
}

function playSquare3() {                                               // Taking all the necessary action after a sign was placed in this square

     square03.getElementsByTagName("img")[0].src=currentSignPath;
     square03.getElementsByTagName("img")[0].removeAttribute("style");

     objectS3.executeTurn();                                           // Doing everything that's necessary to compute the turn and reflect the results in the GUI
}

function playSquare4() {                                               // Taking all the necessary action after a sign was placed in this square

     square04.getElementsByTagName("img")[0].src=currentSignPath;
     square04.getElementsByTagName("img")[0].removeAttribute("style");

     objectS4.executeTurn();                                           // Doing everything that's necessary to compute the turn and reflect the results in the GUI
}

function playSquare5() {                                               // Taking all the necessary action after a sign was placed in this square

     square05.getElementsByTagName("img")[0].src=currentSignPath;
     square05.getElementsByTagName("img")[0].removeAttribute("style");

     objectS5.executeTurn();                                           // Doing everything that's necessary to compute the turn and reflect the results in the GUI
}

function playSquare6() {                                               // Taking all the necessary action after a sign was placed in this square

     square06.getElementsByTagName("img")[0].src=currentSignPath;
     square06.getElementsByTagName("img")[0].removeAttribute("style");

     objectS6.executeTurn();                                           // Doing everything that's necessary to compute the turn and reflect the results in the GUI
}

function playSquare7() {                                               // Taking all the necessary action after a sign was placed in this square

     square07.getElementsByTagName("img")[0].src=currentSignPath;
     square07.getElementsByTagName("img")[0].removeAttribute("style");

     objectS7.executeTurn();                                           // Doing everything that's necessary to compute the turn and reflect the results in the GUI
}

function playSquare8() {                                               // Taking all the necessary action after a sign was placed in this square

     square08.getElementsByTagName("img")[0].src=currentSignPath;
     square08.getElementsByTagName("img")[0].removeAttribute("style");

     objectS8.executeTurn();                                           // Doing everything that's necessary to compute the turn and reflect the results in the GUI
}

function playSquare9() {                                               // Taking all the necessary action after a sign was placed in this square

     square09.getElementsByTagName("img")[0].src=currentSignPath;
     square09.getElementsByTagName("img")[0].removeAttribute("style");

     objectS9.executeTurn();                                           // Doing everything that's necessary to compute the turn and reflect the results in the GUI
}




square01.onclick = function() {playSquare1()};                      // Triggering the necessary actions by clicking the appropriate squares in the html interface
square02.onclick = function() {playSquare2()};
square03.onclick = function() {playSquare3()};
square04.onclick = function() {playSquare4()};
square05.onclick = function() {playSquare5()};
square06.onclick = function() {playSquare6()};
square07.onclick = function() {playSquare7()};
square08.onclick = function() {playSquare8()};
square09.onclick = function() {playSquare9()};