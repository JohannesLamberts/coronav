<template>
  <div :class="$style.wrapper">
    <test-progress :max="totalSteps" :current="step" />
    <question
      v-if="!isComplete"
      :config="currentQuestionConfig"
      @decision="onDecision"
    />
    <result v-else :response-config="responseConfig" />
  </div>
</template>

<script>
import Result from './result'
import Question from './question'
import TestProgress from '~/components/test-progress'
import { matches, matchesSome } from '@/utils'
import { computeResultIdent } from '@/utils/questionnaire'

export default {
  name: 'Questionnaire',
  components: { TestProgress, Question, Result },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      step: 0,
      choices: {}
    }
  },
  computed: {
    questions() {
      return this.config.questions.filter(
        ({ skipIf, ident }) =>
          !(
            skipIf &&
            matches(this.choicesWithDerived, skipIf) &&
            // do not skip already answered questions
            !Object.hasOwnProperty.call(this.choices, ident)
          )
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
      this.config.derived.forEach(({ ident, matchers }) => {
        result[ident] = matchesSome(result, matchers)
      })
      return result
    },
    responseIdent() {
      if (!this.isComplete) {
        return ''
      }
      return computeResultIdent(
        this.config.resultComputation,
        this.choicesWithDerived
      )
    },
    responseConfig() {
      if (!this.responseIdent) {
        return null
      }
      return this.config.results.find(
        ({ ident }) => ident === this.responseIdent
      )
    }
  },
  methods: {
    onDecision(choice) {
      this.$set(this.choices, this.currentQuestionConfig.ident, choice)
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
