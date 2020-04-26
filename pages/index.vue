<template>
  <div :class="$style.container">
    <div>
      <h1 ref="mainHeading" :class="$style.title" tabindex="-1">
        {{ $t('index.title') }}
      </h1>
      <p>
        {{ $t('index.description') }}
      </p>
      <b-button
        variant="outline-primary"
        pill
        block
        size="lg"
        :class="$style.button"
        to="/fragebogen"
      >
        {{ $t('index.cta') }}
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  mounted() {
    this.focusMainHeading()
  },
  methods: {
    focusMainHeading() {
      this.$refs.mainHeading.focus()
    }
  }
}
</script>

<style module>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.button {
  max-width: 10em;
  margin: 0 auto;
}

.title {
  margin-bottom: 2rem;
}
</style>
