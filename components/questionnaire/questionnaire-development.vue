<template>
  <div>
    <div
      v-for="question of config.questions"
      :key="question.ident"
      :class="$style.wrapper"
    >
      <h2>Frage: {{ question.ident }}</h2>
      <question :config="question" />
    </div>
    <div
      v-for="result of config.results"
      :key="result.ident"
      :class="$style.wrapper"
    >
      <h2>Ergebnis: {{ result.ident }}</h2>
      <result :response-config="result" />
    </div>
  </div>
</template>

<script>
import Result from './result'
import Question from './question'

export default {
  name: 'QuestionnaireDevelopment',
  components: { Question, Result },
  props: {
    config: {
      type: Object,
      required: true
    }
  }
}
</script>
<style module>
.wrapper {
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 1.5rem;
  height: 100%;
}
</style>
