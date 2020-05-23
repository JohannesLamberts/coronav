<template>
  <b-nav :class="$style.navbar">
    <h1 class="h1" tabindex="-1" :class="$style.logoWrapperH1">
      <passed-query-link
        :class="$style.logoWrapper"
        :to="localePath('/')"
        :title="$t('index.logoTitle')"
      >
        <img
          src="@/assets/images/logo_coronav.png"
          alt="CoroNav Logo"
          :class="$style.logo"
        />
        <img
          v-if="appContext.partner"
          :class="$style.partnerLogo"
          :src="appContext.partner.logo"
          :alt="appContext.partner.name"
        />
      </passed-query-link>
    </h1>
    <b-nav-item-dropdown
      right
      :text="$t('components.navbar.languageDropdownText')"
      variant="primary"
      :class="$style.languageDropdown"
      class="m-2"
    >
      <b-dropdown-item
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :to="appContext.routeWithPassedQuery(switchLocalePath(locale.code))"
      >
        {{ locale.name }}
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
</template>

<script>
import PassedQueryLink from '@/components/passed-query-link'

export default {
  name: 'Navbar',
  components: { PassedQueryLink },
  inject: ['appContext']
}
</script>

<style lang="scss" module>
$logo-width: 180px;

.navbar {
  display: grid;
  grid-template-columns: $logo-width auto 1fr;
  width: 100%;
}

.languageDropdown {
  grid-column-start: 4;
  grid-column-end: 4;
}

.logo {
  width: $logo-width;
}

.logoWrapperH1 {
  display: flex;
}

.logoWrapper {
  font-weight: normal;
  /*font-size: 2rem;*/
  text-decoration: none !important;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  img {
    height: 40px;
  }
}

.partnerLogo {
  margin-left: 0.7rem;
}
</style>
