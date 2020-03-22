<template>
  <b-progress
    :max="max"
    variant="success"
    show-progress
    show-value
    height="1rem"
  >
    <b-progress-bar :value="current">
      <strong>{{ current }} / {{ max }}</strong>
    </b-progress-bar>
  </b-progress>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    }
  }
}
</script>
