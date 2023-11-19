// router/index.js

import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomeView.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';
import RefundPolicy from '../views/RefundPolicy.vue';
import DeliveryPolicy from '../views/DeliveryPolicyView.vue';
import TermsAndConditions from '../views/TermsAndConditions.vue';
import FlagView from '../views/FlagView.vue'; // Import your FlagView
import AboutPage from '../views/AboutView.vue'
const routes = [
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
  {
    path: '/refund',
    name: 'RefundPolicy',
    component: RefundPolicy,
  },
  {
    path: '/delivery',
    name: 'DeliveryPolicy',
    component: DeliveryPolicy,
  },
  {
    path: '/terms',
    name: 'TermsAndConditions',
    component: TermsAndConditions,
  },
  {
    path: '/flag',
    name: 'FlagView',
    component: FlagView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
// router/index.js

