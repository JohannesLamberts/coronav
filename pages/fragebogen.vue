<template>
  <div :class="$style.wrapper">
    <test-progress :max="totalSteps" :current="step" />
    <question
      v-if="!isComplete"
      :config="currentQuestionConfig"
      @decision="onDecision"
    />
    <questionnaire-result v-else :response-config="responseConfig" />
  </div>
</template>

<script>
import QuestionnaireResult from '~/components/questionnaire-result'
import Question from '~/components/question'
import TestProgress from '~/components/test-progress'
import { matchesOnce } from '@/utils'
import questionaire from '~/config/questionaire.yml'

console.log(questionaire)

export default {
  name: 'Fragebogen',
  components: { TestProgress, Question, QuestionnaireResult },
  data() {
    return {
      step: 0,
      choices: {}
    }
  },
  computed: {
    questions() {
      return questionaire.questions.filter(
        ({ skipIf }) =>
          !(skipIf && matchesOnce(this.choicesWithDerived, skipIf))
      )
    },
    currentQuestionConfig() {
      return this.questions[this.step]
    },
    totalSteps() {
      return this.questions.length
    },
    isComplete() {
      return this.step === this.totalSteps
    },
    choicesWithDerived() {
      const result = this.choices
      questionaire.derived.forEach(({ ident, matchers }) => {
        result[ident] = matchesOnce(result, matchers)
      })
      return result
    },
    responseIdent() {
      if (!this.isComplete) {
        return ''
      }
      return this.computeResultStep(questionaire.resultComputation)
    },
    responseConfig() {
      if (!this.responseIdent) {
        return null
      }
      return questionaire.results.find(
        ({ ident }) => ident === this.responseIdent
      )
    }
  },
  methods: {
    onDecision(choice) {
      this.$set(this.choices, this.currentQuestionConfig.ident, choice)
      this.step += 1
    },
    computeResultStep(config) {
      const value = this.choicesWithDerived[config.ident]
      const options = Object.keys(config).filter(
        (key) => !['ident', 'default'].includes(key)
      )
      const matchedOption = options.find((option) => {
        const parsedOption = option === 'true' ? true : option
        return parsedOption === value
      })
      const nextConfig = config[matchedOption || 'default']

      return typeof nextConfig === 'string'
        ? nextConfig
        : this.computeResultStep(nextConfig)
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
