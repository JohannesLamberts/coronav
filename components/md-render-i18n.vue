<template>
  <component :is="tag" v-html="content && $md.render(content)" />
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'span'
    }
  },
  computed: {
    content() {
      return this.$t(this.path)
    }
  }
}
</script>
