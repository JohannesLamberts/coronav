<template>
  <div :class="$style.container">
    <div>
      <h1 ref="mainHeading" :class="$style.title" tabindex="-1">
        {{ $t('index.title') }}
      </h1>
      <b-container>
        <b-row>
          <b-col v-for="card of cards" :key="card.ident" cols="12" class="mb-4">
            <b-card>
              <b-card-title>{{ card.i18n.title }}</b-card-title>
              <b-card-text>
                {{ card.i18n.description }}
              </b-card-text>
              <b-btn variant="secondary" pill block :to="card.to">{{
                card.i18n.buttonLabel
              }}</b-btn>
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
  data() {
    return {
      cardPaths: [
        {
          i18n: 'infection',
          nav: 'questionaires-should-i-get-testet-for-covid-19'
        },
        {
          i18n: 'antibodyTest',
          nav: 'antibody-test'
        },
        {
          i18n: 'vaccination',
          nav: 'vaccination'
        }
      ]
    }
  },
  computed: {
    cards() {
      return this.cardPaths.map(({ i18n, nav }) => ({
        ident: nav,
        i18n: this.$t(`${i18n}.indexCard`),
        to: this.localePath(nav)
      }))
    }
  },
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
