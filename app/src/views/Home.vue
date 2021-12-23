<template>
 <div v-for="(page,index) in this.$store.state.pages" :key="index" v-on:click="gotoarticle(index)" class="transition-all duration-300 ease-linear bg-gray-800 text-green-500 hover:bg-green-600 hover:text-white p-4 m-4 rounded-xl relative flex items-center justify-center mt-2 mb-2 shadow-lg">
  {{page.Name}}
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data(){
    return{
    }
  },
  components: {
    },
    methods: {
      gotoarticle(id:number){
        this.$store.state.currentindex = id
        this.$router.push("/about");
      }
    }
});
</script>
