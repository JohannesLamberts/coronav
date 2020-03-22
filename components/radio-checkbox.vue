<template>
  <b-form-group>
    <slot name="label" slot="label">
      {{ label }}
      <b-button variant="link" @click="toggleInfo"
        ><b-icon icon="info"></b-icon> Info</b-button
      >
    </slot>
    <b-form-radio-group
      :checked="radioValue"
      :options="options"
      :name="name"
      @input="onChange"
    ></b-form-radio-group>
    <p v-if="showInfo">
      Information
    </p>
  </b-form-group>
</template>

<script>
export default {
  name: 'RadioCheckbox',
  props: {
    label: { type: String, required: true },
    name: { type: String, required: true },
    value: Boolean
  },
  data() {
    return {
      showInfo: false,
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
      this.$emit('input', newValue === 'yes')
    },
    toggleInfo() {
      this.showInfo = !this.showInfo
    }
  }
}
</script>
