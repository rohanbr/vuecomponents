<template>
  <div>
    <ul class="list-group" @click="expand">
      <div v-for="tree in treecontent" :key="tree.id">
        <li v-if="tree.hasSubTree===false" class="list-group-item fa fa-plus-square">
          <span>{{tree.title}}</span>
          <font-awesome-icon icon="book"/>
        </li>
        <treesubview v-if="tree.hasSubTree" :treesuview="tree.sub_content" :padding="padding" :title="tree.title"></treesubview>
      </div>
    </ul>
  </div>
</template>

<script type="text/javascript">
import Treesubview from '@/components/Treesubview.vue'
export default {
  name: 'Treeview',
  components: {
    'Treesubview': Treesubview
  },
  data () {
    return {
      'treecontent': [
        {
          'id': 1,
          'title': 'title 1',
          'content': 'csdacsdc',
          'sub_content': [
            {
              'id': 1,
              'title': 'title 11',
              'content': 'adfsfsdf',
              'sub_content': [
                {
                  'id': 1,
                  'title': 'title 111',
                  'content': 'adfsfsdf'
                },
                {
                  'id': 2,
                  'title': 'title 222',
                  'content': 'sdkfjhds'
                },
                {
                  'id': 3,
                  'title': 'title 333',
                  'content': 'jkasfhbdf'
                }
              ]
            },
            {
              'id': 2,
              'title': 'title 22',
              'content': 'sdkfjhds',
              'sub_content': [
                {
                  'id': 1,
                  'title': 'title 111',
                  'content': 'adfsfsdf'
                },
                {
                  'id': 2,
                  'title': 'title 222',
                  'content': 'sdkfjhds'
                },
                {
                  'id': 3,
                  'title': 'title 333',
                  'content': 'jkasfhbdf'
                }
              ]
            },
            {
              'id': 3,
              'title': 'title 33',
              'content': 'jkasfhbdf',
              'sub_content': [
                {
                  'id': 1,
                  'title': 'title 111',
                  'content': 'adfsfsdf'
                },
                {
                  'id': 2,
                  'title': 'title 222',
                  'content': 'sdkfjhds'
                },
                {
                  'id': 3,
                  'title': 'title 333',
                  'content': 'jkasfhbdf'
                }
              ]
            }
          ]
        },
        {
          'id': 2,
          'title': 'title 2',
          'content': 'csdacsdc',
          'sub_content': [
            {
              'id': 1,
              'title': 'title 111',
              'content': 'adfsfsdf'
            },
            {
              'id': 2,
              'title': 'title 222',
              'content': 'sdkfjhds'
            },
            {
              'id': 3,
              'title': 'title 333',
              'content': 'jkasfhbdf'
            }
          ]
        },
        {
          'id': 3,
          'title': 'title 3',
          'content': 'dvxvx',
          'sub_content': [
            {
              'id': 1,
              'title': 'title 111',
              'content': 'adfsfsdf'
            },
            {
              'id': 2,
              'title': 'title 222',
              'content': 'sdkfjhds'
            },
            {
              'id': 3,
              'title': 'title 333',
              'content': 'jkasfhbdf'
            }
          ]
        }
      ],
      padding: '10px'
    }
  },
  methods: {
    expand (event) {

    }
  },
  mounted () {
    let treecont = this.treecontent
    for (var i = 0; i < treecont.length; i++) {
      this.$set(treecont[i], 'hasSubTree', treecont[i].sub_content && treecont[i].sub_content.length > 0)
      treecont[i].hasSubTree = treecont[i].hasSubTree || false
    }
  }
}
</script>
