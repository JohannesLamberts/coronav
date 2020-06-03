<template>
  <b-navbar :class="$style.navbar" toggleable="md">
    <div :class="$style.navbarBrand">
      <b-navbar-brand
        tabindex="-1"
        tag="h1"
        :to="Navigation.toWithContext(localePath('/'))"
        :title="$t('index.logoTitle')"
      >
        <img
          src="@/assets/images/logo_coronav.png"
          alt="CoroNav Logo"
          :class="$style.logo"
        />
      </b-navbar-brand>
      <a
        v-if="Partner.config"
        :href="Partner.config.url"
        :title="Partner.config.name"
        target="_blank"
        rel="noopener"
      >
        <img
          :class="$style.partnerLogo"
          :src="Partner.config.logo"
          :alt="Partner.config.name"
        />
      </a>
    </div>
    <b-navbar-toggle
      target="nav-collapse"
      :class="$style.navbarToggle"
      :variant="'primary'"
      :label="$t('components.navbar.toggleNavbarLabel')"
    />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav :class="$style.navbarNav">
        <b-nav-item
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :to="Navigation.toWithContext(switchLocalePath(locale.code))"
          :class="$style.navItem"
        >
          <img
            :class="$style.localeIcons"
            :src="localeIcons[locale.code]"
            :alt="locale.name"
          />
          {{ locale.name }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  injectModels: ['Partner', 'Navigation'],
  computed: {
    localeIcons() {
      return this.$i18n.locales.reduce((acc, { code }) => {
        acc[code] = require(`@/assets/images/icon-${code}.png`)
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss" module>
$navbarHeight: 44px;

.navbar {
  display: grid;
  grid-template-columns: auto auto 3.5rem [toggle-end];
  grid-template-rows: $navbarHeight;
  width: 100%;
  padding: 0;

  li {
    list-style: none;
  }

  .navbarToggle {
    grid-column-end: toggle-end;
    border-color: transparent;
    padding: 0;
  }
}

.navbarBrand {
  padding: 0;
  font-size: inherit;

  img {
    height: $navbarHeight;
  }
}

.navbarNav {
  width: 100%;
  justify-content: flex-end;
}

.localeIcons {
  width: 1.5rem;
  height: 1.5rem;
  top: -2px;
  position: relative;
}

@media (min-width: 768px) {
  .navbar {
    grid-template-columns: auto 1fr;
  }
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
</style>
