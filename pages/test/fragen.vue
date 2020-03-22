<template>
  <div>
    <h1>Fragen</h1>
    <radio-checkbox v-model="form.hadCold" name="hadCold" label="Had Cold?" />
    <radio-checkbox
      v-model="form.hadSoreThroatOrCaugh"
      name="hadSoreThroatOrCaugh"
      label="hadSoreThroatOrCaugh"
    />
    <radio-checkbox
      v-model="form.hadBeenFatigued"
      name="hadBeenFatigued"
      label="hadBeenFatigued"
    />
    <radio-checkbox
      v-model="form.shortOfBreath"
      name="shortOfBreath"
      label="shortOfBreath"
    />
    <radio-checkbox
      v-model="form.coughWithShortnessOfBreath"
      name="coughWithShortnessOfBreath"
      label="coughWithShortnessOfBreath"
    />
    <radio-checkbox
      v-model="form.problemsClimbingStairs"
      name="problemsClimbingStairs"
      label="problemsClimbingStairs"
    />
    <radio-checkbox
      v-model="form.highFever"
      name="highFever"
      label="highFever"
    />
    <radio-checkbox
      v-model="form.reducedPerformance"
      name="reducedPerformance"
      label="reducedPerformance"
    />
    <radio-checkbox
      v-model="form.contactWithPositivelyTested"
      name="contactWithPositivelyTested"
      label="contactWithPositivelyTested"
    />
    <radio-checkbox
      v-model="form.contactWithPeopleFromRiskArea"
      name="contactWithPeopleFromRiskArea"
      label="contactWithPeopleFromRiskArea"
    />
    <radio-checkbox
      v-model="form.hadBeenInRiskArea"
      name="hadBeenInRiskArea"
      label="hadBeenInRiskArea"
    />
    <b-card title="Symptome">
      <radio-checkbox
        v-model="form.contactWithPositivelyTested"
        name="contactWithPositivelyTested"
        label="Haben Sie eines der folgenden Symptome?"
      />
    </b-card>
    <b-card title="Kontakt">
      <radio-checkbox
        v-model="form.contactWithPositivelyTested"
        name="contactWithPositivelyTested"
        label="Hatten Sie direkten Kontakt mit einer positiv getesteten Person?"
      />
      <radio-checkbox
        v-model="form.contactWithPeopleFromRiskArea"
        name="contactWithPeopleFromRiskArea"
        label="Waren Sie innerhalb der letzten 14 Tage in einem Risikogebiet?"
      />
    </b-card>
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
        contactWithPositivelyTested: true,
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
