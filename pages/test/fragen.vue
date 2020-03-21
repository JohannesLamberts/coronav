<template>
  <div>
    <h1>Fragen</h1>
    <radio-checkbox v-model="form.hadCold" label="Had Cold?" />
    <radio-checkbox
      v-model="form.hadSoreThroatOrCaugh"
      label="hadSoreThroatOrCaugh"
    />
    <radio-checkbox v-model="form.hadBeenFatigued" label="hadBeenFatigued" />
    <radio-checkbox v-model="form.shortOfBreath" label="shortOfBreath" />
    <radio-checkbox
      v-model="form.coughWithShortnessOfBreath"
      label="coughWithShortnessOfBreath"
    />
    <radio-checkbox
      v-model="form.problemsClimbingStairs"
      label="problemsClimbingStairs"
    />
    <radio-checkbox v-model="form.highFever" label="highFever" />
    <radio-checkbox
      v-model="form.reducedPerformance"
      label="reducedPerformance"
    />
    <radio-checkbox
      v-model="form.contactWithPositivelyTested"
      label="contactWithPositivelyTested"
    />
    <radio-checkbox
      v-model="form.contactWithPeopleFromRiskArea"
      label="contactWithPeopleFromRiskArea"
    />
    <radio-checkbox
      v-model="form.hadBeenInRiskArea"
      label="hadBeenInRiskArea"
    />
    Result: {{ result }}
    <a href="/test/ergebnis?ok=false">OK</a>
  </div>
</template>

<script>
import RadioCheckbox from '../../components/radio-checkbox'
export default {
  components: { RadioCheckbox },
  data() {
    return {
      form: {
        hadCold: null,
        hadSoreThroatOrCaugh: null,
        hadBeenFatigued: null,
        shortOfBreath: null,
        coughWithShortnessOfBreath: null,
        problemsClimbingStairs: null,
        highFever: null,
        reducedPerformance: null,
        contactWithPositivelyTested: null,
        contactWithPeopleFromRiskArea: null,
        hadBeenInRiskArea: null
      }
    }
  },
  computed: {
    // TODO: filter optionals
    isComplete() {
      return !Object.values(this.form).some((value) => value === null)
    },
    hadRiskContact() {
      return (
        this.form.contactWithPeopleFromRiskArea || this.form.hadBeenInRiskArea
      )
    },
    hasRedFlag() {
      return (
        this.form.highFever ||
        this.form.reducedPerformance ||
        this.form.contactWithPositivelyTested
      )
    },
    hasGeneralSymptoms() {
      return (
        this.form.hadCold ||
        this.form.hadSoreThroatOrCaugh ||
        this.form.hadBeenFatigued
      )
    },
    hasSevereGeneralSymptoms() {
      return (
        this.hasGeneralSymptoms &&
        this.form.shortOfBreath &&
        (this.form.coughWithShortnessOfBreath ||
          this.form.problemsClimbingStairs)
      )
    },
    result() {
      if (!this.isComplete) {
        return 'incomplete'
      }
      return 'done'
    }
  }
}
</script>
