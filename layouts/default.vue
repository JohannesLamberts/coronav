<template>
  <div :class="$style.wrapper">
    <div :class="$style.gridWrapper">
      <header :class="$style.header">
        <h1 class="h1" tabindex="-1">
          <nuxt-link :to="localePath('/')" :title="$t('index.logoTitle')">
            <img
              src="@/assets/images/logo_coronav.png"
              alt="CoroNav Logo"
              :class="$style.logo"
            />
          </nuxt-link>
        </h1>
      </header>
      <main :class="$style.content">
        <nuxt />
      </main>
    </div>
    <footer :class="$style.footer">
      <section :class="$style.footerImages">
        <img src="@/assets/images/wirvsvirus_logo_1_footer.png" />
      </section>
      <section :class="$style.footerLinks">
        <p>
          <nuxt-link
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            >{{ locale.name }}</nuxt-link
          >
        </p>
        <p>
          <nuxt-link to="/impressum">{{ $t('impressum.title') }}</nuxt-link>
        </p>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    }
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const localeConfig = this.$i18n.locales.find(
      ({ code }) => this.$i18n.locale === code
    )
    return {
      ...i18nSeo,
      htmlAttrs: {
        dir: localeConfig.dir || 'LTR',
        ...i18nSeo.htmlAttrs
      }
    }
  }
}
</script>

<style lang="scss" module>
.gridWrapper {
  display: grid;
  grid-template-rows: 90px 1fr;
  grid-gap: 16px;
  flex-grow: 1;
}

.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
}

.logo {
  width: 180px;
}

.content {
  margin: 0 auto;
  width: 100vw;
  max-width: 40em;
  padding: 0 20px;
  padding-bottom: 36px;
}

.footerImages {
  text-align: center;
  margin-top: 2rem;
  img {
    height: 100px;
  }
}

.footerLinks {
  margin-top: 2rem;
  padding-top: 1rem;
  background-color: #0a558c;
  min-height: 6rem;
  a {
    color: white;
    font-size: 0.8rem;
    margin: 0 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
    text-align: center;
  }
}

.wrapper {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
}

@media (min-width: 768px) {
  .gridWrapper {
    grid-template-rows: auto 1fr;
    grid-template-columns: 200px minmax(540px, 50em);
    padding: 12px;
  }
  .header {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 16px;
  }
  .logo {
    width: 100%;
  }
  .content {
    width: 60vw;
    grid-row: 2;
    grid-column: 2;
  }
}
</style>

<style>
@import 'assets/styles/base.scss';
</style>
