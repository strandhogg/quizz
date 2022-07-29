<template>
  <form>
    <!-- Startbildschirm -->
    <div id="startScreen" class="startScreen" v-if="value1">
      <h1 class="text title is-1">Welcome to Cyber Range Quiz!</h1>
      <img src="src/assets/rocket2.svg" alt="CyberRangeLogo" height="350" width="350">
      <div class="my-3">
        <div class="input-group my-3">
          <span class="input-group-text" id="basic-addon1"></span>
          <!--creates username-field-->
          <input @keyup.enter="startGame(), getUsername()" v-model="username"
            class="form-control input is-primary is-medium is-rounded block" 
            required type="text"
            placeholder="Gib hier deinen Username (NDS-Kürzel, zb: xyz12345) ein!" 
            style="font-family: Consolas" />
        </div>

        <button v-if="username === null" 
          class="button is-primary is-rounded" 
          id="start-btn"
          style="font-family: Consolas" 
          disabled>
          Click here to start the Quiz!</button>
        <button v-else 
          class="button is-primary is-rounded" 
          @click="startGame(), getUsername()" 
          type="submit"
          id="start-btn" style="font-family: Consolas">
          Click here to start the Quiz!</button>
      </div>

    </div>

    <!-- Quiz Änderung-->
    <div id="quizScreen" class="quizScreen" v-if="value2">
      <h1 class="title is-1">CyberRange Quiz</h1>

      <!--loop through quizQuestions and prints out the actual one-->
      <div v-if="questionIndex < questions.length" class="box">
        <label class="title block">{{ question.question }}</label>
        <!--loops throuhh questions->answers->choices and creates a button for every choice of an answer-->
        <div v-for="(value, key) in question.choices" class="block">
          <radio class="button is-primary is-outlined" 
          type="button" 
          @click="getNextQuestion()"
          style="font-family: Consolas" 
          v-model="this.answer">
          {{ key }}</radio>
        </div>

        <div class="block">
          {{ currentQuestion }}
          <progress class="progress is-primary" :value="percent" max="100">{{ percent }}</progress>
        </div>
      </div>

    </div>

    <!-- Endbildschirm -->
    <div id="endScreen" class="endScreen" v-if="value3">
      <h1 class="text title">Congratulation, you finished the Quiz! :)</h1>
      <img src="src/assets/rocket2.svg" alt="CyberRangeLogo" height="200" width="200">
      <div class="subtitle">{{ finalScore }}</div>
      <textarea class="textarea is-primary block" v-model="review" id="review" required type="text"
        placeholder="Hier ist Platz wenn du etwas loswerden möchtest! Bitte gib uns doch ein kurzes Feedback zum Quizmodul:)"></textarea>
      <button class="button is-primary" @click="submit()" style="font-family: Consolas">submit</button>
    </div>

    <!--Danke fürs Feedback-->
    <div id="Feedback" class="screenFeedback" v-if="value4">
      <h1 class="text title">Congratulation, you finished the Quiz! :)</h1>
      <img src="src/assets/rocket2.svg" alt="CyberRangeLogo" height="200" width="200">
      <p>Danke für dein Feedback!</p>
    </div>
  </form>
</template>


<script>
import questions from "./data/quizQuestions.js"; //file with questions and answers
var evalFileComplete = []; //basic variable for later csv object

export default {
  name: "App",
  components: {},

  data() {
    return {
      username: null,
      questions,
      questionIndex: 0,
      question: questions[0],
      answer: "",
      score: 0,
      review: "",
      value1: true,
      value2: false,
      value3: false,
      value4: false,
      switch: false,
      evalFile: new Object(),
      reviewFile: new Object(),
    };
  },
  methods: {

    //change screen from start to quiz
    startGame() {
      this.value1 = false
      this.value2 = true
      console.log("Started")
    },

    getUsername() {
      console.log(this.username);
      console.log(JSON.stringify(this.username));

    },

    /*displays next question, everytime it is called*/
    getNextQuestion() {
      const { answer, question, questions, questionIndex } = this;
      /*questions[questionIndex].choices.forEach((key, value) => {
        if(answer === key && value === true) {
          score++
        }
      });*/

      console.log("Answer:" + this.answer);


      this.dataInJson();

      if (questionIndex < questions.length - 1) {
        this.questionIndex++;

        this.question = { ...questions[this.questionIndex] };
      } else {
        this.endGame();
      }
    },

    //changes screen from quiz to end
    endGame() {
      this.value2 = false
      this.value3 = true
    },

    submit() {
      this.reviewInJson();
      this.value3 = false
      this.value4 = true
      this.jsonToCsv();
    },

    /*writes all data that is in json-format to csv-format*/
    jsonToCsv() {
      console.log("LOG1" + evalFileComplete);

      var jsonString2 = JSON.stringify(evalFileComplete);
      console.log("LOG2" + jsonString2);
      var jsonObject2 = JSON.parse(jsonString2);
      console.log(jsonObject2);

      var json = jsonObject2
      var fields = Object.keys(json[0])
      var replacer = function (key, value) { return value === null ? '' : value }
      var csv = json.map(function (row) {
        return fields.map(function (fieldName) {
          return JSON.stringify(row[fieldName], replacer)
        }).join(',')
      })
      csv.unshift(fields.join(',')) // add header column
      csv = csv.join('\r\n');
      console.log("CSVLOG:");
      console.log(csv);

      /*download csv-File, Problem: downloads every time and at the 
      users computer.
      Comments below can be removed for demonstration purpose*/
      /*var hiddenElement = document.createElement('a');
      hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
      hiddenElement.target = '_blank';
      hiddenElement.download = 'userData.csv';
      hiddenElement.click();*/
    },

    /*writes collected data in json format*/
    dataInJson() {
      this.evalFile.name = this.username;
      this.evalFile.question = this.questions[this.questionIndex].question;
      this.evalFile.answer = this.answer; //still empty

      var jsonString = JSON.stringify(this.evalFile);
      var jsonObject = JSON.parse(jsonString);
      console.log(jsonObject);
      console.log(evalFileComplete);
      evalFileComplete.push(jsonObject);
    },

    reviewInJson() {
      this.reviewFile.review = this.review;

      var jsonString = JSON.stringify(this.reviewFile);
      var jsonObject = JSON.parse(jsonString);
      console.log(jsonObject);
      console.log(evalFileComplete);
      evalFileComplete.push(jsonObject);
    }

  },
  computed: {
    currentQuestion() {
      return 'Question ' + (this.questionIndex + 1) + ' of ' + this.questions.length
    },
    finalScore() {
      return 'You scored ' + 17 + ' out of ' + this.questions.length + ' points!'
    },
    percent() {
      return ((this.questionIndex + 1) / this.questions.length) * 100
    }
  }
};
</script>
