<template>
  <form>
    <!-- Startbildschirm -->
    <div id="startScreen" class="startScreen" v-if="value1">
		<h1 class="text title is-1" >Welcome to Cyber Range Quiz!</h1>
    <img src="src/assets/rocket2.svg" alt="CyberRangeLogo" height="350" width="350">
		<div class="my-3">
			<div class="input-group my-3">
				<span class="input-group-text" id="basic-addon1" ></span>
				<input 
        @keyup.enter="startGame(), getUsername()"
        v-model="username"
        class="form-control input is-primary is-medium is-rounded block" 
        required type="text" 
        placeholder="Gib hier deinen Username ein!"
        style="font-family: Consolas"/>
        {{ username }}
      </div>
			<button 
        v-if="username === null"
        class="button is-primary is-rounded"
        id="start-btn"
        style="font-family: Consolas"
        disabled>
        Click here to start the Quiz!</button>
      <button
      v-else
      class="button is-primary is-rounded"
      @click="startGame(), getUsername()" 
      type="submit"
      id="start-btn"
      style="font-family: Consolas">
        Click here to start the Quiz!</button>
		</div>
		
	</div>

  <!-- Quiz Änderung-->
	<div id="quizScreen" class="quizScreen" v-if="value2">
		<h1 class="title is-1 block">CyberRange Quiz</h1>
		<hr/>

    <div v-if="questionIndex < questions.length">
      <label class="block title">{{ question.question }}</label>
      <div v-for="(value, key) in question.choices" class="block" >
        <radio 
          class="button is-primary is-outlined"
          type="button"
          :value="value" 
          @click="getNextQuestion()"
          style="font-family: Consolas"
          v-model="this.answer"
        >{{ key }}</radio>
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
    <textarea 
      class="textarea is-primary block"
      v-model="review" 
      id="review"
      ></textarea>
    <button class="button is-primary" @click="submit()" style="font-family: Consolas">submit</button>
	</div>
  </form>
</template>


<script>
  import questions from "./data/quizQuestions.js";
  var evalFileComplete = [];
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
        switch: false,
        evalFile: new Object(),
      };
    },
    methods: {

      startGame(){
        this.value1 = false
        this.value2 = true
        console.log("Started")
      },

      getUsername(){
        console.log(this.username);
        console.log(JSON.stringify(this.username));
        
      },

      getNextQuestion() {
          const {answer, question, questions, questionIndex} = this;
          /*questions[questionIndex].choices.forEach((key, value) => {
            if(answer === key && value === true) {
              score++
            }
          });*/

          console.log("Answer:" + this.answer);
          if(questionIndex === 0){

          }
          
          this.dataInJson();

          if (questionIndex < questions.length-1) {
            this.questionIndex++;

            this.question = { ...questions[this.questionIndex]};
          } else {
            this.endGame()
          }
      },

      endGame(){
        this.value2 = false
        this.value3 = true
        this.jsonToCsv();
      },

      /*submit(){
        
      },*/

      jsonToCsv(){
        console.log("LOG1" + evalFileComplete);

        var jsonString2 = JSON.stringify(evalFileComplete);
        console.log("LOG2" + jsonString2);
        var jsonObject2 = JSON.parse(jsonString2);
        console.log(jsonObject2);

        var json = jsonObject2
        var fields = Object.keys(json[0])
        var replacer = function(key, value) { return value === null ? '' : value } 
        var csv = json.map(function(row){
        return fields.map(function(fieldName){
        return JSON.stringify(row[fieldName], replacer)
        }).join(',')
        })
        csv.unshift(fields.join(',')) // add header column
        csv = csv.join('\r\n');
        console.log("CSVLOG:");
        console.log(csv);

        /*download csv-File, Problem: downloads every time and at the 
        users computer*/
        /*var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'userData.csv';
        hiddenElement.click();*/
      },

      dataInJson(){
        this.evalFile.name = this.username;
        this.evalFile.question = this.questions[this.questionIndex].question;
        this.evalFile.answer = this.answer;

          var jsonString = JSON.stringify(this.evalFile);
          var jsonObject = JSON.parse(jsonString);
          console.log(jsonObject);
          console.log(evalFileComplete);
          evalFileComplete.push(jsonObject);
      }
    },
    computed: {
      //displaying current question x/n
      currentQuestion() {
        return 'Question ' + (this.questionIndex + 1) + ' of ' + this.questions.length
      },
      finalScore() {
        return 'You scored ' + this.score + ' out of ' + this.questions.length + ' points!'
      },
      percent() {
        return ((this.questionIndex + 1) / this.questions.length) * 100
      }
    }
  };

</script>
