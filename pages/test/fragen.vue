<template>
  <div>
    <h1>Fragen</h1>
    <div :class="$style.wrapper">
      <b-progress
        :max="totalSteps"
        variant="success"
        show-progress
        show-value
        height="1rem"
      >
        <b-progress-bar :value="currentStepIndex">
          <strong>{{ currentStepIndex }} / {{ totalSteps }}</strong>
        </b-progress-bar>
      </b-progress>
      <section :class="$style.question">
        {{ currentStepObject.name }}
      </section>
      <div :class="$style.buttons">
        <b-button variant="primary" pill @click="nextStep(true)">
          {{ $t('global.yes') }}
        </b-button>
        <b-button variant="secondary" pill @click="nextStep(false)">
          {{ $t('global.no') }}
        </b-button>
      </div>
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

<style module>
.wrapper {
  display: grid;
  grid-template-rows: 1fr 64px 16px;
  grid-gap: 12px;
  padding: 12px;
  height: 100%;
}
.question {
  width: 100%;
  min-height: 50vw;
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  height: 64px;
}
</style>
