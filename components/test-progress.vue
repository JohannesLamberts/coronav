<template>
  <b-progress :max="max" variant="info" show-progress show-value height="1rem">
    <b-progress-bar
      ref="progressBar"
      tabindex="-1"
      :value="current"
      :aria-label="$t('testProgress.ariaLabel')"
    >
      <strong>{{ percent }}%</strong>
    </b-progress-bar>
  </b-progress>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    }
  },
  computed: {
    percent() {
      return ((this.current / this.max) * 100).toFixed(0)
    }
  },
  methods: {
    focus() {
      this.$refs.progressBar.$el.focus()
    }
  }
}
</script>
