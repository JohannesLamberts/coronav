<template>
  <div>
    <questionnaire-development v-if="showDev" :config="config" />
    <div v-else :class="$style.wrapper">
      <test-progress ref="testProgress" :max="totalSteps" :current="step" />
      <question
        v-if="!isComplete"
        :config="currentQuestionConfig"
        @decision="onDecision"
      />
      <component
        :is="resultComponent"
        v-else
        :results="choicesWithDerived"
        :response-config="responseConfig"
      />
    </div>
  </div>
</template>

<script>
import Result from './result'
import Question from './question'
import TestProgress from '~/components/test-progress'
import { matchesSome } from '@/utils'
import {
  computeResultIdent,
  shouldIncludeQuestion
} from '@/utils/questionnaire'
const QuestionnaireDevelopment = () =>
  import('@/components/questionnaire/questionnaire-development')

export default {
  name: 'Questionnaire',
  injectModels: ['Partner'],
  components: { QuestionnaireDevelopment, TestProgress, Question },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      step: 0,
      choices: {},
      showDev: false
    }
  },
  computed: {
    resultComponent() {
      return this.Partner.config?.resultComponent || Result
    },
    questions() {
      return this.config.questions.filter((questionConfig) =>
        shouldIncludeQuestion(
          questionConfig,
          this.choicesWithDerived,
          this.choices
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
  mounted() {
    this.showDev = this.$route.query.development
  },
  methods: {
    onDecision(choice) {
      this.$set(this.choices, this.currentQuestionConfig.ident, choice)
      this.step += 1
      this.focusProgressBar()
    },
    focusProgressBar() {
      this.$refs.testProgress.focus()
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
