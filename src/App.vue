<template>
  <form>
    <!-- Startbildschirm -->
    <div id="startScreen" class="startScreen" v-if="value1">
		<h1 class="text title is-1" >Welcome to Cyber Range Quiz!</h1> 
    <img src="src/assets/rocket2.svg" alt="CyberRangeLogo" height="400" width="400">
		<div class="my-3">
			<div class="input-group my-3">
				<span class="input-group-text" id="basic-addon1" ></span>
				<input aria-label="Username" 
        aria-describedby="basic-addon1" 
        class="form-control input is-primary is-medium is-rounded" 
        id="username" 
        name="username" 
        required type="text" 
        placeholder="Gib hier deinen Username ein!" 
        @click="getUsername"/>
        {{ username }}
			</div>
			<button @click="startGame()" class="button is-primary is-rounded" type="submit" id="start-btn">Click here to start the Quiz!</button>
		</div>
		
	</div>

  <!-- Quiz Änderung-->
	<div id="quizScreen" class="quizScreen" v-if="value2">
		<h1 class="title is-1">CyberRange Quiz</h1>
		<hr/>

    <div v-if="questionIndex < questions.length">
      <label class="subltitle">{{ question.question }}</label>
      <div v-for="choice in question.choices" :value="choice">
        <button class="button is-light" :key="choice">{{ choice }}</button>
      </div>
      <div>
        <button class="button is-primary" type="button" id="answer-btn" @click="getNextQuestion">next</button>
      </div>

      <div>
        {{ currentQuestion }}
      </div>
      <progress class="progress is-primary" :value="percent" max="100">{{ percent }}</progress>
    </div>

  </div>

    <!-- Endbildschirm -->
	<div id="endScreen" class="endScreen" v-if="value3">
		<h1 class="text title">Congratulation, you finished the Quiz! :)</h1>
    <div class="subtitle">{{ finalScore }}</div>
    <textarea class="textarea is-primary" id="review"> {{ review }}</textarea>
    <button class="button is-primary" @click="submit">submit</button>
	</div>
  </form>
</template>


<script>
  //import questions from "./data/quizQuestions.js";
  import input from "./data/input.js"
 
  const questions = [
    {
      question: "What is icecream?",
      choices: ["something to eat", "something to wash", "something to play"],
      correctAnswer: "something to eat",
    },
    {
      question: "What the square root of 4?",
      choices: ["3", "2", "1", "0.67777", "7"],
      correctAnswer: "2"
    },
    {
      question: "How do you eat your burger?",
      choices: ["with my hands", "with cutlery"],
      correctAnswer: "with my hands",
    }
  ]

  export default {
    name: "App",
    components: {},

    data() {
      return {
        username: "",
        questions,
        questionIndex: 0,
        question: questions[0],
        answer: "",
        score: 0,
        review: "",
        value1: true,
        value2: false,
        value3: false,
      };
    },
    methods: {

      startGame(){
        this.value1 = false
        this.value2 = true
        console.log("Started")

      },

      getUsername(){
        input.push[{user: this.username}]
      },

      getNextQuestion() {
          const {answer, question, questions, questionIndex} = this;
          if(answer === question.correctAnswer) {
            score++;
          }
          console.log(this.percent)
          //input.answeredQuestions.push[{questionIndex: this.chosenAnswer}]

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
      },
      getUsername(){

      },
      submit(){
        input.push[{review: this.review}]
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

<style>

</style>
