<template>
    <div class="PolicyPage p-6 bg-gray-100">
      <h1 class="text-3xl font-semibold mb-4 text-blue-600">{{ pageTitle }}</h1>
      <p class="text-lg mb-4  text-lime-500">{{ pageContent }}</p>
  
      <!-- Additional content as needed -->
      <PolicyFooter />
    </div>
  </template>
  
  <script>
  import PolicyFooter from '@/components/PolicyFooter';
  
  export default {
    components: {
      PolicyFooter
    },
    props: {
      pageTitle: String,
      pageContent: String
    }
  };
  </script>
  