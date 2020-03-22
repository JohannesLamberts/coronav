<template>
  <div>
    <div v-if="!disclaimerConfirmed">
      <h1>{{ $t('test.title') }}</h1>
      <p>
        {{ $t('disclaimer') }}
      </p>
      <b-button
        variant="primary"
        pill
        block
        size="lg"
        :class="$style.button"
        @click="onConfirm"
      >
        {{ $t('global.ok') }}
      </b-button>
    </div>
    <questionaire v-else-if="!result" @complete="onComplete" />
    <questionaire-result v-else :result="result" />
  </div>
</template>

<script>
import Questionaire from '../components/questionaire'
import QuestionaireResult from '../components/result'

export default {
  components: { QuestionaireResult, Questionaire },
  data() {
    return {
      disclaimerConfirmed: false,
      result: null
    }
  },
  methods: {
    onConfirm() {
      this.disclaimerConfirmed = true
    },
    onComplete(result) {
      this.result = result
    }
  }
}
</script>
<style module>
.button {
  max-width: 10em;
  margin: 0 auto;
}
</style>
