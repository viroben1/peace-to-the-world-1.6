<template>
    <div :class="{ 'MainPage': true, 'bg-gray-100': true, 'p-8': true, 'hidden': isPolicyPage }">
      <header class="text-center">
        <h1 class="text-4xl font-bold text-blue-600">Welcome to the International Flag of Peace</h1>
      </header>
      <section class="mt-8">
        <h2 class="text-2xl font-semibold text-blue-700">About Us</h2>
        <p class="text-gray-800">
          We are dedicated to promoting peace, unity, and understanding among all people.
          Our flag symbolizes the hope for a more peaceful world.
        </p>
      </section>
      <section class="mt-8">
        <h2 class="text-2xl font-semibold text-blue-700">Our Mission</h2>
        <p class="text-gray-800">
          Our mission is to spread awareness about
          the International Flag of Peace and to encourage acts of kindness
          and charity.
        </p>
      </section>
      <section class="mt-8">
        <h2 class="text-2xl font-semibold text-blue-700">Contact Us</h2>
        <p class="text-gray-800">
          If you have any questions or would like to get involved,
          please don't hesitate to reach out to us.
        </p>
        <p class="mt-2 text-blue-600">Email: contact@internationalflagofpeace.com</p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainPage',
    data() {
      return {
        // Assuming isPolicyPage is passed as a prop or calculated in the component
        isPolicyPage: false,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  