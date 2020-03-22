<template>
  <div>
    <h1>{{ $t(`test.steps.${currentStepObject.name}.title`) }}</h1>
    <div :class="$style.wrapper">
      <test-progress :max="totalSteps" :current="currentStepIndex" />
      <section :class="$style.question">
        <p>{{ $t(`test.steps.${currentStepObject.name}.label`) }}</p>
        <component
          :is="currentStepObject.component"
          v-if="currentStepObject.component"
        />
      </section>
      <div :class="$style.buttons">
        <b-button variant="primary" pill size="lg" @click="nextStep(true)">
          {{ $t('global.yes') }}
        </b-button>
        <b-button variant="secondary" pill size="lg" @click="nextStep(false)">
          {{ $t('global.no') }}
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import symptoms from './testSteps/symptoms'
import directContact from './testSteps/directContact'
import riskArea from './testSteps/riskArea'
import patientHistoryRisk from './testSteps/patientHistoryRisk'
import TestProgress from './test-progress'

export default {
  name: 'Questionaire',
  components: { TestProgress },
  data() {
    return {
      currentValue: null,
      currentStepIndex: 0,
      steps: [
        {
          name: 'symptoms',
          component: symptoms,
          value: null
        },
        {
          name: 'directContact',
          component: directContact,
          value: null
        },
        {
          name: 'riskArea',
          component: riskArea,
          value: null
        },
        {
          name: 'ageRisk',
          value: null
        },
        {
          name: 'patientHistoryRisk',
          component: patientHistoryRisk,
          value: null
        }
      ]
    }
  },
  computed: {
    currentStepObject() {
      return this.steps[this.currentStepIndex]
    },
    totalSteps() {
      return this.steps.length
    },
    isLastStep() {
      return this.currentStepIndex === this.totalSteps - 1
    },
    values() {
      const values = {}
      this.steps.forEach((step) => {
        values[step.name] = step.value
      })
      return values
    }
  },
  methods: {
    stepValue(name) {
      return this.steps.find((step) => step.name === name).value
    },
    nextStep(selectedValue) {
      this.currentStepObject.value = selectedValue
      if (!this.isLastStep) {
        this.currentStepIndex += 1
        return
      }
      this.$emit('complete', this.values)
    },
    prevStep() {
      if (this.currentStepIndex === 0) {
        return
      }
      this.currentStepIndex -= 1
    }
  }
}
</script>

<style module>
.wrapper {
  display: grid;
  grid-template-rows: 1fr auto 16px;
  grid-gap: 12px;
  padding: 12px;
  height: 100%;
}

.question {
  width: 100%;
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  height: 64px;
}
</style>
