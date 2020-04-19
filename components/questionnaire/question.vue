<template>
  <div>
    <h2 ref="questionText" class="h5 mb-3" tabindex="-1">
      {{ labelText }}
    </h2>
    <div :class="$style.wrapper">
      <section v-if="infoParsedText" v-html="infoParsedText" />
      <div :class="$style.buttons">
        <b-button
          v-for="choice of config.choices"
          :key="choice.ident"
          :variant="choice.variant || 'secondary'"
          pill
          size="lg"
          @click="decide(choice.ident)"
        >
          {{ $t(`choices.${choice.ident}`) }}
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  computed: {
    labelText() {
      return this.$t(`questions.${this.config.ident}.label`)
    },
    infoText() {
      const key = `questions.${this.config.ident}.info`
      return this.$te(key) ? this.$t(key) : ''
    },
    infoParsedText() {
      if (!this.infoText) {
        return ''
      }
      return this.$md.render(this.infoText)
    }
  },
  mounted() {
    this.focusQuestionText()
  },
  methods: {
    decide(choice) {
      this.$emit('decision', choice)
    },
    focusQuestionText() {
      this.$refs.questionText.focus()
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  display: grid;
  grid-template-rows: auto auto;
  height: 100%;
}

.buttons {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 12px;
  height: 64px;
}
</style>
