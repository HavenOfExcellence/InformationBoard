<template>
 <div v-on:click="gotoarticle()" class="transition-all duration-300 ease-linear bg-gray-800 text-green-500 hover:bg-green-600 hover:text-white p-4 m-4 rounded-xl relative flex items-center justify-center mt-2 mb-2 shadow-lg">
  Losing your 11B
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "Home",
  components: {
    },
    methods: {
      gotoarticle(){
        
        this.$router.push("/about");
      }
    }
});
</script>
