<template>
  <div class="container">
    <div>
      <h1 class="title">
        Corona-Virus
      </h1>
      <b-button
        variant="primary"
        pill
        block
        size="lg"
        :class="$style.button"
        to="/fragebogen"
      >
        Zum Test
      </b-button>
    </div>
  </div>
</template>

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
</style>
