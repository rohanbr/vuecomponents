<template>
  <div>
    <span>{{title}}</span>
    <font-awesome-icon v-if="expanded==false" @click="collapse" icon="plus"/>
    <font-awesome-icon v-if="expanded" @click="collapse" icon="minus"/>
    <ul class="list-group" v-show="expanded" v-bind:style="{ 'padding-left': padding}">
      <div v-for="tree in treesuview" v-bind:key="tree.id">
        <li v-if="tree.hasSubTree===false" class="list-group-item fa fa-plus-square">
          <span>{{tree.title}}</span>
          <font-awesome-icon icon="book"/>
        </li>
        <treesubview v-if="tree.hasSubTree" :padding="padding" :treesuview="tree.sub_content" :title="tree.title"></treesubview>
      </div>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Treesubview',
  data () {
    return {
      'expanded': false
    }
  },
  methods: {
    collapse () {
      this.expanded = !this.expanded
    }
  },
  props: {
    treesuview: Array,
    padding: String,
    collapsed: {
      default: false
    },
    title: String
  },
  mounted () {
    let treecont = this.treesuview
    this.expanded = this.collapsed
    for (var i = 0; i < treecont.length; i++) {
      this.$set(treecont[i], 'hasSubTree', treecont[i].sub_content && treecont[i].sub_content.length > 0)
      treecont[i].hasSubTree = treecont[i].hasSubTree || false
    }
  }
}
</script>
