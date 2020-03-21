<template>
  <b-form-group :label="label">
    <b-form-radio-group
      :value="radioValue"
      :options="options"
      @input="onChange"
    ></b-form-radio-group>
  </b-form-group>
</template>

<script>
export default {
  name: 'RadioCheckbox',
  props: {
    label: { type: String, required: true },
    value: Boolean
  },
  data() {
    return {
      options: [
        { text: 'Ja', value: 'yes' },
        { text: 'Nein', value: 'no' }
      ]
    }
  },
  computed: {
    radioValue() {
      if (this.value === false) {
        return 'no'
      }
      if (this.value === true) {
        return 'yes'
      }
      return ''
    }
  },
  methods: {
    onChange(newValue) {
      this.value = newValue
      this.$emit('input', this.value === 'yes')
    }
  }
}
</script>
