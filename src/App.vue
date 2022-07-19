<template>
  <form>
    <!-- Startbildschirm -->
    <div id="startScreen" class="startScreen" v-if="value1">
		<h1 class="text title is-1" >Welcome to Cyber Range Quiz!</h1> 
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
        {{ Username }}
			</div>
			<button @click="startGame()" class="button is-primary is-rounded" type="submit" id="start-btn">Click here to start the Quiz!</button>
		</div>
		
	</div>

  <!-- Quiz -->
	<div id="quizScreen" class="quizScreen" v-if="value2">
		<h1 class="title is-1">CyberRange Quiz</h1>
		<hr/>

    <div v-if="questionIndex < questions.length">
      <label class="subltitle"> {{ question.question }}</label>
      <div v-for="choice in questions.choices" :value="choice">
        <button class="button is-light" :key="choice"> {{ choice }}</button>
      </div>
      <div>
        <button class="button is-primary" type="button" id="answer-btn" @click="getNextQuestion">next</button>
      </div>
      <div class="progress is-primary">
        {{ currentQuestion }}
      </div>
    </div>

  </div>

    <!-- Endbildschirm -->
	<div id="endScreen" class="endScreen" v-if="value3">
		<h1 class="text">Congratulation, you finished the Quiz! :)</h1>
    <div class="text-center">{{ finalScore }}</div>
    <textarea id="review" rows="4" cols="50"> {{ review }}</textarea>
	</div>
  </form>
</template>


<script>
  //import questions from "./data/questions.js";
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
        username: "Username",
        questions,
        questionIndex: 0,
        question: questions[0],
        answer: "",
        score: 0,
        review: "Wenn du noch was los werden willst, ist hier die Möglichkeit!",
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

          input.answeredQuestions.push[{questionIndex: this.chosenAnswer}]

          if (questionIndex < questions.length) {
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

      }
    },
    computed: {
      //displaying current question x/n
      currentQuestion() {
        return 'Question ' + this.questionIndex + ' of ' + this.questions.length
      },
      finalScore() {
        return 'You scored ' + this.score + ' out of ' + this.questions.length + ' points!'
      }
    }
  };

</script>

<style>
  
</style>
