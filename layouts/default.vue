<template>
  <div :class="$style.wrapper">
    <header :class="$style.header">
      <navbar />
    </header>
    <main :class="$style.content">
      <nuxt />
    </main>
    <footer :class="$style.footer">
      <section :class="$style.footerImages">
        <img src="@/assets/images/wirvsvirus_logo_1.svg" />
      </section>
      <section :class="$style.footerLinks">
        <p>
          <nuxt-link to="/impressum">{{ $t('impressum.title') }}</nuxt-link>
        </p>
      </section>
    </footer>
  </div>
</template>

<script>
import Navbar from '../components/layout/navbar'
export default {
  components: { Navbar },
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
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  margin-bottom: 1rem;
}

.content {
  margin: 0 auto;
  width: 100vw;
  max-width: 40em;
  padding: 0 20px 20px 20px;
  flex-grow: 1;
}

.footerImages {
  text-align: center;
  img {
    height: 100px;
  }
}

.footerLinks {
  margin-top: 1rem;
  padding-top: 1rem;
  background-color: #0a558c;
  min-height: 4rem;
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
  .header {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 16px;
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
