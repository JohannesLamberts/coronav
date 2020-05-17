<template>
  <div :class="$style.container">
    <div>
      <h1 ref="mainHeading" :class="$style.title" tabindex="-1">
        {{ $t('index.title') }}
      </h1>
      <b-container>
        <b-row>
          <b-col cols="12" class="mb-4">
            <b-card>
              <b-card-title>Coronavirus-Infektion?</b-card-title>
              <b-card-text>
                Hier erfahren Sie, ob bei Ihnen eine Infektion wahrscheinlich
                ist, ob ein Test empfohlen wird und warum.
              </b-card-text>
              <b-btn
                variant="secondary"
                pill
                block
                :to="
                  localePath('questionaires-should-i-get-testet-for-covid-19')
                "
                >weiter</b-btn
              >
            </b-card>
          </b-col>
          <b-col cols="12" class="mb-4">
            <b-card>
              <b-card-title>Coronavirus-Antikörpertest?</b-card-title>
              <b-card-text>
                Bald erfahren Sie hier:zum Beispiel: ob ein Antikörpertest bei
                Ihnen empfohlen wird und warum.
              </b-card-text>
              <b-btn variant="secondary" pill block>weiter</b-btn>
            </b-card>
          </b-col>
          <b-col cols="12">
            <b-card>
              <b-card-title>Coronavirus-Impfung?</b-card-title>
              <b-card-text>
                Wenn es einen zugelassenen Impfstoff gibt, erfahren Sie hier zum
                Beispiel: ob und wann eine Impfung bei Ihnen empfohlen wird.
              </b-card-text>
              <b-btn variant="secondary" pill block>weiter</b-btn>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
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
}

.textContent {
  margin-bottom: 2rem;
}

.title {
  margin-bottom: 2rem;
}
</style>
