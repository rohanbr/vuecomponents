<template>
  <div class="collapse navbar-collapse" id="navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item" v-for="tab in tabs" :key="tab.id">
        <a class="nav-link" :class="{'active': tab.isSelected }" href="#">{{tab.name}}</a>
      </li>
    </ul>
    <div class="content-tab">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      tabs: []
    }
  },
  mounted () {
    this.tabs = this.$children
  }
}
</script>
