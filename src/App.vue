<template>
  <div id="app">
    <div class="container-fluid">
      <navbar>
        <tabs>
          <tab name="Home" :isSelected="true">
          </tab>
          <tab name="About Us"></tab>
          <tab name="Contact"></tab>
        </tabs>
      </navbar>
      <treeview></treeview>
      <!-- <vue-editor v-model="content"></vue-editor> -->
    </div>
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'
import Navbar from './components/Navbar.vue'
import Treeview from './components/Treeview.vue'
import { VueEditor } from 'vue2-editor'

export default {
  components: { Navbar, Tabs, Tab, VueEditor, Treeview },
  name: 'App',
  data () {
    return {
      content: '',
      firstName: 'rohan',
      lastName: 'kharvi'
    }
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + this.lastName
      },
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  }
}
</script>
