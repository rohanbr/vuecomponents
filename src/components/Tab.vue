<template>
  <div>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    name: { required: true },
    isSelected: { default: false }
  },
  data () {
    return {}
  }
}
</script>
