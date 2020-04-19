<template>
  <div :class="$style.container">
    <div>
      <h1 ref="mainHeading" :class="$style.title" tabindex="-1">
        {{ $t('index.title') }}
      </h1>
      <p :class="$style.textContent">
        {{ $t('index.description') }}
      </p>
      <b-button
        variant="outline-primary"
        pill
        block
        size="lg"
        :class="$style.button"
        :to="localePath('questionaires-should-i-get-testet-for-covid-19')"
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

<style lang="scss" module>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.textContent {
  margin-bottom: 2rem;
}

.button {
  max-width: 10em;
  margin: 0 auto;
}

.title {
  margin-bottom: 2rem;
}
</style>
