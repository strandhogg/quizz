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
        placeholder="Gib hier deinen Username ein!"/>
        {{ username }}
      </div>
			<button @click="startGame(), getUsername()" class="button is-primary is-rounded" type="submit" id="start-btn">Click here to start the Quiz!</button>
		</div>
		
	</div>

  <!-- Quiz Änderung-->
	<div id="quizScreen" class="quizScreen" v-if="value2">
		<h1 class="title is-1 block">CyberRange Quiz</h1>
		<hr/>

    <div v-if="questionIndex < questions.length">
      <label class="block title">{{ question.question }}</label>
      <div v-for="(value, key) in question.choices" class="block">
        <button 
          class="button is-light"
          type="button"
          :value="value"
          @click="getNextQuestion()"
        >{{ key }}</button>
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
    <div class="subtitle">{{ finalScore }}</div>
    <textarea class="textarea is-primary" id="review"> {{ review }}</textarea>
    <button class="button is-primary" @click="submit()">submit</button>
	</div>
  </form>
</template>


<script>
  import questions from "./data/quizQuestions.js";
  import input from "./data/input.js"
 
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
          if(answer === true) {
            score++;
          }
          console.log(this.percent)
          input.push[{questionIndex: this.chosenAnswer}]

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
<<<<<<< HEAD
      getReview(){
        JSON.stringify({review: review})
=======

      submit(){
        input.push[{review: this.review}]
>>>>>>> matthias
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
