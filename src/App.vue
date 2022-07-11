<template>
  <form>
    <!-- Startbildschirm -->
    <div id="startScreen" class="startScreen text-white text-center py-5 px-5" v-show="true">
		<h1 class="text">Welcome to Cyber Range Quiz!</h1> 
		<div class="my-3">
			<div class="input-group my-3">
				<span class="input-group-text" id="basic-addon1">Username</span>
				<input aria-label="Username" aria-describedby="basic-addon1" class="form-control" id="username" name="username" required type="text" placeholder="Gib hier deinen Username ein!" />
			</div>
			<button @click="startGame()" class="btn btn-light my-3 w-100 raise" id="start-btn ">Click here to start the Quiz!</button>
		</div>
		
	</div>

  <!-- Quiz -->
	<div id="quizScreen" class="text-white text-center py-5 px-5" v-show="false">
		<h1>CyberRange Quiz</h1>
		<hr/>
		<div class="panel my-3" id="p1">
		</div>
	</div>

  <!-- Endbildschirm -->
	<div id="endScreen" class="endScreen text-white text-center py-5 px-5" v-show="false">
		<h1 class="text">Congratulation, you finished the Quiz! :)</h1>
	</div>


    <div v-if="questionIndex < questions.length">
      <label> {{ questions.question }}</label>
      <div v-for="answer of questions.answers" :key="answer">
      <input type="radio" name="answer" v-model="chosenAnswer" :value="answer"/>
        {{ answer }}
      </div>
      <div>
        <button type="button" @click="getNextQuestion">next</button>
      </div>
    </div>
  </form>
</template>


<script>
  import questions from "./data/questions.json";
  
  export default {
    name: "App",
    components: {
      
    },

    data() {
      return {
        questions,
        questionIndex: 0,
        question: questions[0],
        chosenAnswer: "",
        score: 0
      };
    },
    methods: {

      startGame(){
        document.getElementById("startScreen").vShow = 'false';
        document.getElementById("quizScreen").vShow = 'true';
      },

      getNextQuestion() {
          const {chosenAnswer, question, questions, questionIndex} = this;
          if(question.answer == true) {
            score++;
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
        document.getElementById("quizScreen").vShow = 'false';
        document.getElementById("endScreen").vShow = 'true';
      },
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
    background-color: rgb(86, 18, 149);
    color: aliceblue;
  }
</style>
