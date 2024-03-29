
    // FUNCTIONS
    // =====================================
    // Debugging Code
    // debugPrint = function(ii) {
    //     console.log ("i = " + i + ", ii = " + ii + ", dwarfNum[ii] = ", dwarfNum[ii]);
    //     console.log ("randNum = ", randNum);
    //     console.log ("dwarfName[dwarfNum[ii]] = ", dwarfName[dwarfNum[ii]]);
    //     console.log ("dwarfNum.length = ", dwarfNum.length);
    //     console.log ("dwarfsFound = ", dwarfsFound);
    //     console.log ("found = ", found);
    //     console.log ("Array dwarfName = " + dwarfName);
    //     console.log ("Array dwarfNum = " + dwarfNum);
    //     console.log ("Array activity = " + activity);
    //     console.log ("activity[actNum[i]] = " + activity[actNum[i]]);
    //     console.log ("-----------------------------------");
    // };



// <script type="text/javascript">

var snowWhite = {
    
    // VARS
    // =====================================
    randDwarfName: "",
    name: "Snow White",
    dwarfName: ["Sleepy", "Sneezy", "Grumpy", "Happy", "Doc", "Bashful", "Dopey"],
    // dwarfCount : function() { return this.dwarfName.length; },
    // isSleeping: true,
    activity: ["walk", "run", "stroll", "swim", "RV trip", "water-slide adventure", "joy ride in a Humvee"],

    actCount: 7,
    i : 0,
    ii: 0,
    printAllDwarfs: "y", // prompt("Do you want to see what the dwarfs are doing? (y / n)");

    dwarfNum: [],
    dwarfsFound: 0, // Count of ints found for randomization of DWARFS
    actNum: [], // Separate random number for randomizing the activity, too
    actsFound: 0, // Count of ints found for randomization of ACTIVITIES
    randNum : 0,  // Used for both randomizaions

    // Create object for Hangman game display output...
     word2guess : {          // OBJECT
        word : [],
        show : [],
        wrongLtrs : [],
        guessesLeft : 0,
        wonThisGame : false
    },

    playerStats : {
        wins : 0,
        losses : 0
    },



    // FUNCTIONS
    // =====================================
    // Debugging Code
    // debugPrint: function(ii) {
    //     console.log ("i = " + i + ", ii = " + ii + ", dwarfNum[ii] = ", dwarfNum[ii]);
    //     console.log ("randNum = ", randNum);
    //     console.log ("dwarfName[dwarfNum[ii]] = ", dwarfName[dwarfNum[ii]]);
    //     console.log ("dwarfNum.length = ", dwarfNum.length);
    //     console.log ("dwarfsFound = ", dwarfsFound);
    //     console.log ("found = ", found);
    //     console.log ("Array dwarfName = " + dwarfName);
    //     console.log ("Array dwarfNum = " + dwarfNum);
    //     console.log ("Array activity = " + activity);
    //     console.log ("activity[actNum[i]] = " + activity[actNum[i]]);
    //     console.log ("-----------------------------------");
    // },


    // Initialize the Snow White Dwarf Enrichment Activities, used in hangDwarf too!
    initWords: function() {
        this.randDwarfName = "";
        this.i = 0;
        this.ii = 0;
        this.dwarfNum = [];
        this.dwarfsFound = 0;
        this.actNum = [];
        this.actsFound = 0;
        this.randNum;
        this.word2guess = {          // OBJECT
            word : [],
            show : [],
            wrongLtrs : [],
            guessesLeft : 0,
            wonThisGame : false
        }
        // FOR RANDOMIZING the DWARFS...
        // Set up first random num outside while loop, then enter loop
        // Pick a random number, but only keep it if it is NOT one already selected.
        this.randNum = Math.floor(Math.random() * this.dwarfName.length);
        this.dwarfNum.push(this.randNum);
        this.dwarfsFound++;
        // debug_print(0);
        while (this.dwarfsFound < this.dwarfName.length) {
            this.randNum = Math.floor(Math.random() * this.dwarfName.length);
            var found = false;
            for (i=0; i< this.dwarfNum.length; i++) {
                if (this.randNum === this.dwarfNum[i] )
                    found = true;
            };
            if (!found) {
                this.dwarfNum.push(this.randNum);
                this.dwarfsFound++;
            };
            // console.log("dwarfsFound = " + this.dwarfsFound);
            // debug_print(this.dwarfsFound);
        };
        // console.log("dwarfNum = " + this.dwarfNum);

        // FOR RANDOMIZING the ACTIVITIES...
        // Set up first random num outside while loop, then enter loop
        // Pick a random number, but only keep it if it is NOT one already selected.
        this.randNum = Math.floor(Math.random() * this.activity.length);
        this.actNum.push(this.randNum);
        this.actsFound++;
        // debug_print(0);
        while (this.actsFound < this.actCount) {
            this.randNum = Math.floor(Math.random() * this.activity.length);
            var found = false;
            for (i=0; i< this.activity.length; i++) {
                if (this.randNum === this.actNum[i] )
                    found = true;
            }
            if (!found) {
                this.actNum.push(this.randNum);
                this.actsFound++;
            }
            // debug_print(actsFound);
        };
        this.selRandDwarf();
        // this.hypeDwarfs();
        // this.printSched();
    },

    // Select a random dwarf for the hanging!
    selRandDwarf : function () {
        console.log("actNum = " + this.actNum);
        console.log("dwarfNum = " + this.dwarfNum);
        console.log("actNum[3] = " + this.actNum[3]);
        console.log("dwarfNum[actNum[3]] = " + this.dwarfNum[this.actNum[3]]);
        this.randDwarfName = this.dwarfName[this.dwarfNum[this.actNum[3]]];
        console.log(this.dwarfName[this.dwarfNum[this.actNum[3]]]);
        console.log(this.randDwarfName);
    },

    hypeDwarfs : function() {
        // Hype the experience!
        if (this.printAllDwarfs.toLowerCase() === "y") {
            document.getElementById("number").innerHTML = "<h1>We're gonna have some fun!!!</h1>"; /* 5+6*/
        } else {
            document.getElementById("number").innerHTML = "Sorry you don't want to continue.";  /* 6-5 */
        }
    },

    // Generate Snow White's schedule for this week!
    printSched : function () {
        if (this.printAllDwarfs === "y") {
            var htmlTable = "<table style='width:80%'> <h1><tr><th>Snow White's Dwarf Enrichment Activities Week of Aug. 19, 2018!</th></th><h1>";
            for (var i = 0; i < this.dwarfNum.length; i++) {
                htmlTable += "<h2><tr><td>" + this.name + " and " + this.dwarfName[this.dwarfNum[i]] + " went for a " + this.activity[this.actNum[i]] + ".</td></tr></h2>";//try table row instead
            };
            htmlTable += "</table>";
            document.getElementById("table").innerHTML = htmlTable;
        } else {
            document.getElementById("nextTime").innerHTML = "Sorry you didn't want to continue.";
        };
        // document.getElementById("goodBye").innerHTML = "<h1>Game Over!</h1>";
    },



    // Functions
    // ===================================

    // Print Letter Received
    myDisplayLetter : function (letter) {
        var myHtmlLetter = letter;
        var myDontLike = "";
        document.getElementById("hangLetter").innerHTML =  myHtmlLetter + "    <-- I LIKE this Character!!!";
        document.getElementById("hangWrong").innerHTML =  myDontLike;
    },

    // Print WRONG CHARACTER received!
    myDontLike : function (letter) {
        var myDontLike = letter;
        var myHtmlLetter = "";
        console.log("Input NOT a letter = " + myDontLike + "    <-- I Don't Like this Character");
        // document.getElementById("hangWrong").innerHTML =  myDontLike + "    <-- I Don't Like this Character";
        // document.getElementById("hangLetter").innerHTML =  myHtmlLetter;
    },


    // Test for letters (only good up to char 127)
    // This retruns true for A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    // a b c d e f g h i j k l m n o p q r s t u v w x y z
    isAlpha : function (aChar) {
        myCharCode = aChar.charCodeAt(0);
        console.log ("Char = " + aChar + "; Code = " + myCharCode)
        if (((myCharCode > 64) && (myCharCode < 91)) ||
            ((myCharCode > 96) && (myCharCode < 123))) {
                console.log ("TRUE Leg: Char = " + aChar + "; Code = " + myCharCode)
                return true;
        }
        console.log ("FALSE Leg: Char = " + aChar + "; Code = " + myCharCode)
        return false;
    },

    // Get random dwarf from the two random numbers arrays for dwarfs and activities above
    initHangmanOut : function () {
        this.word2guess.word = this.randDwarfName;
        this.word2guess.wrongLtrs = [];
        this.word2guess.guessesLeft = this.word2guess.word.length + 5;
        this.word2guess.wonThisGame = false;
        console.log("word " + this.word2guess.word); 
        console.log("wrongLtrs " + this.word2guess.wrongLtrs); 
        console.log("guessesLeft " + this.word2guess.guessesLeft); 
        console.log("wonThisGame " + this.word2guess.wonThisGame); 
        
        // Initialize all letters to NOT show
        for (var j=0; j<this.word2guess.word.length; j++ ) {
            this.word2guess.show[j] = false;
        };
    },
    
    // Print out Stats
    printStats : function () {
        console.log("word " + this.word2guess.word); 
        console.log("wrongLtrs " + this.word2guess.wrongLtrs); 
        console.log("guessesLeft " + this.word2guess.guessesLeft); 
        console.log("wonThisGame " + this.word2guess.wonThisGame); 

        // Update wrong-guesses display...
        var wrongGuessesHtml = "";
        for (var j=0; j<this.word2guess.wrongLtrs.length; j++) {
            wrongGuessesHtml += this.word2guess.wrongLtrs[j] + ", ";
        }
        document.getElementById("wrong-guesses").innerHTML = "&nbsp " + wrongGuessesHtml;
        document.getElementById("guesses-left").innerHTML = "&nbsp " + this.word2guess.guessesLeft;
        document.getElementById("win-counter").innerHTML = "&nbsp " + this.playerStats.wins;
        document.getElementById("loss-counter").innerHTML = "&nbsp " + this.playerStats.losses;
        if ( (this.word2guess.guessesLeft === 0 ) || this.word2guess.wonThisGame ) {
            if ( this.word2guess.wonThisGame ) {
                document.getElementById("goodBye").innerHTML = "<h3>!!!  YOU WON  !!!</h3>"; 
            } else {
                document.getElementById("goodBye").innerHTML = "<h3>Sorry, You Lost</h3>";
            }
            document.getElementById("goodBye").innerHTML += "<h3>Game Over!</h3>" ; // + 
            // <button onclick="snowWhite.playerClickedExit()">Click to Exit</button>;
        }
    },
      
    // Check letter player pressed against each letter of word2guess...
    myCompareLetter : function (letterPressed) {
        // Main compare of word[j] and guessed letter
        var matchFound = false;
        for (var j=0; j < this.word2guess.word.length; j++) {
            console.log("letter_pressed = " + letterPressed + "; word2guess.word[j] = " + this.word2guess.word[j] );
            if (this.word2guess.word[j].toLowerCase() === letterPressed) {
                // CORRECT Guess...
                this.word2guess.show[j] = true;
                matchFound = true;
                console.log("letter_pressed = " + letterPressed + "; word2guess.word[j] = " + this.word2guess.word[j] );
                console.log(this.word2guess.show[i] + " Show Letter");
                this.word2guess.guessesLeft--;
            }
        };
        // WRONG Guess...
        if (!matchFound) {
            // Test to see if wrong letter has been guessed before
            var newWrongLetter = true;
            for (var j=0; j<this.word2guess.wrongLtrs.length; j++) {
                if (this.word2guess.wrongLtrs[j] === letterPressed) {
                    // WRONG Letter, but PREVIOUSLY SEEN Guess
                    newWrongLetter = false;
                }
            }
    
            // Now push since this is a new wrong letter
            if ( newWrongLetter ) {
                this.word2guess.wrongLtrs.push(letterPressed);
                // Subtract 1 from guesses remaining, ONLY IF this is a NEW wrong letter
                this.word2guess.guessesLeft--;
            }
        };


        // Check if all letters have been guess correctly, 
        var testForAllTrue = true ;
        for (var j=0; j<this.word2guess.word.length; j++ ) {
            // Any false show[j] will make testForAllTrue be false...
            testForAllTrue &= this.word2guess.show[j];
        };

        // Set property in word2guess object
        this.word2guess.wonThisGame = testForAllTrue;
        if ( testForAllTrue) {
            this.playerStats.wins++;
        } else {
            if ( !this.word2guess.guessesLeft) {
                this.playerStats.losses++;
            }
        }
    },

    // Display Output of the hangman game...
    dispHangmanOut : function () {

        var html2show = "<h2> ";
        var i;

        // Main re-display of word / guess state
        for (i=0; i < this.word2guess.word.length; i++) {
            if (this.word2guess.show[i]) {
                html2show += this.word2guess.word[i];
                console.log(html2show);
                console.log(this.word2guess.show[i] + " Show Letter");
            } else {
                html2show += "_";
                console.log(html2show);
                console.log(this.word2guess.word.length);
                console.log(this.word2guess.show[i] + " Show Underscore");

            };
            // Add space between characters.
            html2show += " ";
            if (i === this.word2guess.word.length-1) {
                html2show += "</h2>";
            };
        };

        document.getElementById("word-blanks").innerHTML =  html2show;
    },

    // Check for exit case - BiG TBD
    // playerClickedExit : false,
    // playerClickedExit : function () {
    //     document.getElementById("player-leaves").innerHTML =  "Player Clicked Exit! Good Bye.";
    //     break;
    // },

     // Hang Dwarf Script - Main entry after initWords initializes the game
    hangDwarf : function () {

        // Initial Dispaly to start getting input
        this.initHangmanOut();
        this.dispHangmanOut();

        // Print out starting stats
        this.printStats();
        // document.getElementById("wrong-guesses").innerHTML = "wrong-guesses: " + wrongGuessesHtml;
        // document.getElementById("guesses-left").innerHTML = "guesses-left: " + this.word2guess.guessesLeft;
        // document.getElementById("win-counter").innerHTML = "win-counter: " + this.playerStats.wins;
        // document.getElementById("loss-counter").innerHTML = "loss-counter: " + this.playerStats.losses;

        // Check for exit case - BiG TBD
        // document.onclick = function (ev) {
        //     document.getElementById("number").innerHTML = "Sorry you don't want to continue.";
        //     return ;
        //     playerClickedExit = true;
        // }
        // TBD
        // if ( (this.word2guess.guessesLeft === 0 ) || this.word2guess.wonThisGame ) {
        //     if ( this.word2guess.wonThisGame ) {
        //         document.getElementById("goodBye").innerHTML = "<strong><strong><h1>!!!  YOU WON  !!!</h1></strong></strong>"; 
        //     } else {
        //         document.getElementById("goodBye").innerHTML = "<h1>Sorry, You Lost</h1>";
        //     }
        //     document.getElementById("goodBye").innerHTML += "<strong><h1>Game Over!</h1></strong>";
        // }



        // Get User Input...
        document.onkeyup = function (event) {

            var actionLetter = event.key;
            actionLetter = actionLetter.toLowerCase();
            var validLetter = snowWhite.isAlpha(actionLetter);
            console.log ("validLetter = " + validLetter + "; actionLetter = " + actionLetter)


            if (validLetter) {
                // snowWhite.myDisplayLetter(actionLetter);
                console.log("Hello from onkeyup, calling myCompareLetter with actionLetter = " + actionLetter + "... ")
                snowWhite.myCompareLetter(actionLetter); // myCompareLetter
            } else {
                snowWhite.myDontLike(actionLetter);
            };
        snowWhite.dispHangmanOut();
        snowWhite.printStats();
        };
        return;
    }, // End of hangDwarf


    // Printing Test

    // myFunction : function () {
    //     var city = 'New York ' + 5 +' City';
    //     var htmlOut = " ";
    //     var i;
    //     for (i=0;i<city.length;i++) {
    //         console.log(city[i] + "   is a    " + typeof(city[i]) + "  myNaN = " + Number.isNaN(city[i]));
    //         htmlOut +=  " _ " + city[i];
    //         document.getElementById("demo").innerHTML =  htmlOut;
    //     };
    // }
}; // End of snowWhite



    /************* ADDITIONAL and/or IMPROVEMENT IDEAS ******************
     * // Snow White Hang Dwarf Game ==> children's learning app
    // Add Songs
    // Heigh Ho



    // Characters
    // evil step mother


    // Phrases
    // mirror mirror on the wall, who's the fariest of them all?



    // Trivia
    // 1. First Disney full-length animated release, 1937 in LA, Feb 1938 nationally
    // 2. Critics called it Walt disney's Folly  because they thought it would fail.



    // Maybe go Disney vs just snow white
    // Add paragraph to read and important words to remember to hangman game
    // Number of important words in paragraph / reading
    // Count down to get all words
    // Then get next topic
    // Next topic could come from a database assigned to that child by parent / teacher /cirruicuulm 
    ************* End of ADDITIONAL and/or IMPROVEMENT IDEAS ******************/



