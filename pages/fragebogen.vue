<template>
  <div :class="$style.wrapper">
    <test-progress :max="totalSteps" :current="step" />
    <question
      v-if="!isComplete"
      :config="currentQuestionConfig"
      @decision="onDecision"
    />
    <questionnaire-result v-else :choices="choices" />
  </div>
</template>

<script>
import QuestionnaireResult from '~/components/questionnaire-result'
import Question from '~/components/question'
import TestProgress from '~/components/test-progress'
import { questions } from '~/config/questionaire'

export default {
  name: 'Fragebogen',
  components: { TestProgress, Question, QuestionnaireResult },
  data() {
    return {
      step: 0,
      questions,
      choices: {}
    }
  },
  computed: {
    currentQuestionConfig() {
      return questions[this.step]
    },
    totalSteps() {
      return questions.length
    },
    isComplete() {
      return this.step === this.totalSteps
    }
  },
  methods: {
    onDecision(choice) {
      this.choices[this.currentQuestionConfig.ident] = choice
      this.step += 1
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
