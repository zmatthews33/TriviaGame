$(document).ready(function() {
  $("#questions-div").hide();
  $("#start-button").on("click", gameState.startTimer);
});

var gameState = {
  timeRemaining: 59,

  startTimer: function() {
    $("#timer").text(gameState.timeRemaining);
    setInterval(gameState.countdown, 1000);
    $("#start-page").hide();

    $("#questions-div").show();

    trivia.displayQuestions();
  },

  countdown: function() {
    gameState.timeRemaining--;
    $("#timer").text(gameState.timeRemaining);
    if (gameState.timeRemaining === 0) {
      gameState.stopTimer();
      $("#timer").empty();
    }
  },

  stopTimer: function() {
    clearInterval();
    trivia.checkAnswers();
  },

  showResults: function(numCorrect, numIncorrect, numUnanswered) {
    $("#results-page").show();
    $("#questions-div").empty();
    $("#questions-div").hide();
    $("#correct-answers").text("Correct: " + numCorrect);
    $("#incorrect-answers").text("Incorrect: " + numIncorrect);
    $("#unanswered").text("Unanswered: " + numUnanswered);
    $("#timer").empty();
    $("#timer").hide();
  }
};

var trivia = {
  displayQuestions: function() {
    var divContainer = $("#questions-div");
    var answerGroup = $(".form-check");
    divContainer.append("<h2>Let's Go!</h2>");

    for (var i = 0; i < questionList.length; i++) {
      divContainer.append(
        '<div id="question">' + questionList[i].question + "</div>"
      );

      var answer1 = questionList[i].answers[0];
      var answer2 = questionList[i].answers[1];
      var answer3 = questionList[i].answers[2];
      var answer4 = questionList[i].answers[3];
      divContainer.append(
        '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios" id="answer1" value="option1" checked><label class="form-check-label" for="exampleRadios1">' +
          answer1 +
          "</label></div>"
      );
      divContainer.append(
        '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios" id="answer2" value="option1" checked><label class="form-check-label" for="exampleRadios1">' +
          answer2 +
          "</label></div>"
      );
      divContainer.append(
        '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios" id="answer3" value="option1" checked><label class="form-check-label" for="exampleRadios1">' +
          answer3 +
          "</label></div>"
      );
      divContainer.append(
        '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios" id="answer4" value="option1" checked><label class="form-check-label" for="exampleRadios1">' +
          answer4 +
          "</label></div>"
      );
    }

    var doneButton =
      '<button class="btn btn-primary btn-lg text-center" id="done-button" type="submit">Done</button>';
    divContainer.append(doneButton);
    $("#done-button").on("click", gameState.stopTimer);
    $("#timer").hide();
  },

  checkAnswers: function() {
    var correctAnswer;
    var userAnswer;
    var numCorrect = 0;
    var numIncorrect = 0;
    var numUnanswered = 0;

    for (var i = 0; i < questionList.length; i++) {
      correctAnswer = questionList[i].correct;
      userAnswer = $("input[id=radio" + i + "]:checked + label").text();

      if (userAnswer === correctAnswer) {
        numCorrect++;
      } else if (userAnswer === "") {
        numUnanswered++;
      } else if (userAnswer !== correctAnswer) {
        {
          numIncorrect++;
        }
      }
    }

    //Show Score
    gameState.showResults(numCorrect, numIncorrect, numUnanswered);
  }
};

var questionList = [
  {
    question:
      "Who was the only team to beat Michael Jordan and the Bulls in a playoff series in the 90's?",
    answers: [
      "New York Knicks",
      "Pheonix Suns",
      "Orlando Magic",
      "Indiana Pacers"
    ],
    correct: "Orlando Magic"
  },

  {
    question: "What team won the most championship in the 80's?",
    answers: [
      "Los Angeles Lakers",
      "Boston Celtics",
      "Detroit Pistons",
      "Philadelphia 76ers"
    ],
    correct: "Los Angeles Lakers"
  },
  {
    question:
      "Who won the dunk contest in 1988 with a dunk from the freethrow line?",
    answers: [
      "Julius Erving",
      "Michael Jordan",
      "Vince Carter",
      "Dominique Wilkins"
    ],
    correct: "Michael Jordan"
  },
  {
    question:
      "Other than Oscar Robertson, who is the only player to lead his team in points per game, rebounds per game, assists per game, steals per game, free throw percentage for starters, and 3-pt percentage for starters, for at least 94% of his career ?",
    answers: [
      "Michael Jordan",
      "Wilt Chamberlain",
      "LeBron James",
      "Larry Bird"
    ],
    correct: "Larry Bird"
  },
  {
    question:
      "What NBA Power Forward played an alter-ego character by the name of 'Grandmama' on the hit TV show 'Family Matters' and in Converse ads?",
    answers: ["Larry Johnson", "Kevin McHale", "Patrick Ewing", "Horace Grant"],
    correct: "Larry Johnson"
  },
  {
    question: "What player has a record 7 rebounding titles?",
    answers: [
      "Larry Bird",
      "Shaquille O'Neal",
      "Bill Laimbeer",
      "Dennis Rodman"
    ],
    correct: "Dennis Rodman"
  },
  {
    question:
      "What team has the most NBA championships, winning 3 in the 80's?",
    answers: [
      "Chicago Bulls",
      "Los Angeles Lakers",
      "Boston Celtics",
      "None of the Above"
    ],
    correct: "Boston Celtics"
  },
  {
    question: "Who is known as the most dominant Center of the 90's?",
    answers: [
      "Shaquille O'Neal",
      "Patrick Ewing",
      "Hakeem Olajuwon",
      "Luc Longley"
    ],
    correct: "Shaquille O'Neal"
  },
  {
    question: "What team won 6 championships in the 90's?",
    answers: [
      "Detroit Pistons",
      "Houston Rockets",
      "Utah Jazz",
      "Chicago Bulls"
    ],
    correct: "Chicago Bulls"
  },
  {
    question: "Who won rookie of the year in the '92-'93 season?",
    answers: [
      "Anfernee Hardaway",
      "Shaquille O'Neal",
      "Chris Webber",
      "Kobe Bryant"
    ],
    correct: "Shaquille O'Neal"
  }
];
