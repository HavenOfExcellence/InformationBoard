<template>
  <p class="w-full prose max-w-none prose-indigo leading-6 rounded-b-md shadow-sm border border-gray-300 p-5 bg-white overflow-y-auto">
    <vue3-markdown-it class="" :source='this.markdown' />
  </p>
</template>

<script>
import VueMarkdownIt from 'vue3-markdown-it';


export default {
  component: {
    VueMarkdownIt
  },
  data() {
    return {
    }
  },
  props:["markdown"]
}
</script>