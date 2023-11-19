<template>
    <div>
      <HomeContent v-if="isPolicyPage" />
      <HomePage v-else />
    </div>
  </template>
  
  <script>
  import HomeContent from '@/components/HomeContent.vue';
  import HomePage from '@/components/HomePage.vue';
  
  export default {
    name: 'HomeView',
    components: {
      HomeContent,
      HomePage,
    },
    data() {
      return {
        // Check if the current route is a policy page
        isPolicyPage: this.$route.path.includes('/privacy') ||
                      this.$route.path.includes('/refund') ||
                      this.$route.path.includes('/delivery') ||
                      this.$route.path.includes('/terms'),
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your view-specific styles here */
  </style>
  