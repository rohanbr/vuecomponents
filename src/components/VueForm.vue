<template>
  <div>
    <input type="checkbox" name="" v-model="checkedBox" id="name" value="rohan">
    <input type="checkbox" name="" v-model="checkedBox" id="roll" value="roja">
    <p>{{checkedBox}}</p>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      checkedBox: []
    }
  }
}
</script>
