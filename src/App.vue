<template>
  <form>
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


<script setup>
  import questions from "./questions.json";
  export default {
    name: "App",
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
      getNextQuestion() {
          const {chosenAnswer, question, questions, questionIndex} = this;
          if(chosenAnswer == question.answer) {
            score++;

          }

          if (questionIndex < questions.length) {
            this.questionIndex++;
            this.question = { ...questions[this.questionIndex]};
          }
      },
    },
  };
</script>

<style>

</style>
