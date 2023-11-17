<template>
    <div>
      <HomeContent v-if="isPolicyPage" />
      <MainPage v-else />
    </div>
  </template>
  
  <script>
  import HomeContent from '@/components/HomeContent.vue';
  import MainPage from '@/components/MainPage.vue';
  
  export default {
    name: 'MainPageView',
    components: {
      HomeContent,
      MainPage,
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
  