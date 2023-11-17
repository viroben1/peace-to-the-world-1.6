<template>
    <nav class="bg-green-500 p-4">
      <div class="container mx-auto">
        <div class="flex justify-between items-center">
          <router-link to="/" class="text-white text-2xl font-bold">Your Site Name</router-link>
          <ul class="flex space-x-4">
            <li>
              <router-link to="/home" class="text-white" active-class="active">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-white" active-class="active">
                About
              </router-link>
            </li>
            <li>
              <router-link to="/flag" class="text-white" active-class="active">
                Flag
              </router-link>
            </li>
            <li>
              <router-link to="/privacy" class="text-white" active-class="active">
                Privacy Policy
              </router-link>
            </li>
            <li>
              <router-link to="/refund" class="text-white" active-class="active">
                Refund Policy
              </router-link>
            </li>
            <li>
              <router-link to="/delivery" class="text-white" active-class="active">
                Delivery Policy
              </router-link>
            </li>
            <li>
              <router-link to="/terms" class="text-white" active-class="active">
                Terms and Conditions
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'AppNavbar', // Change the name to a multi-word component name
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  .active {
    background-color: white;
    color: black;
  }
  </style>
  