<template>
    <div>
      <CommonContent v-if="!isAboutOrFlagPage" />
    </div>
  </template>
  
  <script>
  import CommonContent from './CommonContent.vue';
  
  export default {
    components: {
      CommonContent,
    },
    data() {
      return {
        isAboutOrFlagPage: false,
      };
    },
    mounted() {
      this.isAboutOrFlagPage = this.$route.path.includes('/about') || this.$route.path.includes('/flag');
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  