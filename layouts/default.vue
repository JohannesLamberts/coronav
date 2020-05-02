<template>
  <div>
    <div :class="$style.wrapper">
      <header :class="$style.header">
        <h1 class="h1" tabindex="-1">
          <nuxt-link to="/" :title="$t('index.logoTitle')">
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
      <nuxt-link to="/impressum">{{ $t('impressum.title') }}</nuxt-link>
    </footer>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 20px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: hsl(210, 36%, 99%);
  padding-bottom: 48px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<style lang="scss" module>
.wrapper {
  display: grid;
  grid-template-rows: 90px 1fr;
  grid-gap: 16px;
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

.footer {
  background-color: #0a558c;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.3rem;
  text-align: right;
  a {
    color: white;
    font-size: 0.8rem;
  }
}

@media (min-width: 768px) {
  .wrapper {
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
