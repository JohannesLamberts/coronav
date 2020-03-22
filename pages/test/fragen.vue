<template>
  <div>
    <h1>Fragen</h1>
    <div>
      {{ currentStepObject.name }}
      <b-button-group>
        <b-button @click="nextStep(true)">Ja</b-button>
        <b-button @click="nextStep(false)">Nein</b-button>
      </b-button-group>
      <b-progress :max="totalSteps" show-progress show-value height="2rem">
        <b-progress-bar :value="currentStepIndex">
          <strong>{{ currentStepIndex }} / {{ totalSteps }}</strong>
        </b-progress-bar>
      </b-progress>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: null,
      currentStepIndex: 0,
      steps: [
        {
          name: 'covid',
          value: null
        },
        {
          name: 'otherSymptoms',
          value: null
        },
        {
          name: 'risk',
          value: null
        }
      ]
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
      this.$router.push({
        path: '/test/ergebnis',
        query: {
          symptoms: 'covid',
          risk: 'no'
        }
      })
    },
    prevStep() {
      if (this.currentStepIndex === 0) {
        return
      }
      this.currentStepIndex -= 1
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
    }
  }
}
</script>
