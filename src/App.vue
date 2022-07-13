<template>
  <form>
    <!-- Startbildschirm -->
    <div id="startScreen" class="startScreen text-white text-center py-5 px-5" v-if="value1">
		<h1 class="text">Welcome to Cyber Range Quiz!</h1> 
		<div class="my-3">
			<div class="input-group my-3">
				<span class="input-group-text" id="basic-addon1" @click="getUsername">{{ Username }}</span>
				<input aria-label="Username" aria-describedby="basic-addon1" class="form-control" id="username" name="username" required type="text" placeholder="Gib hier deinen Username ein!" />
			</div>
			<button @click="startGame()" class="btn btn-light my-3 w-100 raise" id="start-btn ">Click here to start the Quiz!</button>
		</div>
		
	</div>

  <!-- Quiz -->
	<div id="quizScreen" class="text-white text-center py-5 px-5" v-if="value2">
		<h1>CyberRange Quiz</h1>
		<hr/>
		<div class="panel my-3" id="p1"></div>

    <!--<div v-if="questionIndex < questions.length">-->
      <label> {{ questions }}</label>
      <div v-for="answer of questions.answers" :key="answer">
      <input type="radio" name="answer" v-model="chosenAnswer" :value="answer"/>
        {{ answer }}
      </div>
      <div>
        <button type="button" id="answer-btn" @click="getNextQuestion">next</button>
      </div>
      <div class="text-center">
        {{ currentQuestion }}
      </div>
    </div>
    <!--</div>-->

    <!-- Endbildschirm -->
	<div id="endScreen" class="endScreen text-white text-center py-5 px-5" v-if="value3">
		<h1 class="text">Congratulation, you finished the Quiz! :)</h1>
    <div class="text-center">{{ finalScore }}</div>
    <textarea id="review" rows="4" cols="50"> {{ review }}</textarea>
	</div>
  </form>
</template>


<script>
  import questions from "./data/questions.js";
  
  export default {
    name: "App",
    components: {
      
    },

    data() {
      return {
        username: "Username",
        questions,
        questionIndex: 0,
        question: questions[0],
        chosenAnswer: "",
        score: 0,
        review: "Wenn du noch was los werden willst, ist hier die Möglichkeit!",
        value1: false,
        value2: true,
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
        JSON.stringify({name: username})
      },

      getNextQuestion() {
          const {chosenAnswer, question, questions, questionIndex} = this;
          if(question.answer == true) {
            score++;
            JSON.stringify({questionIndex: chosenAnswer})
          } else {
            JSON.stringify({questionIndex: chosenAnswer})
          }

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
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  body {
    background-color: rgb(130, 212, 235);
    height:100vh;
    color: aliceblue;
  }

  #answer-btn{
    border-color: #c23c3e;
    background-color: #dcd6e9;
  }

  #answer-btn:hover, #answer-btn:focus{
    box-shadow: inset 0 0 0 2em #c23c3e;
}
</style>
