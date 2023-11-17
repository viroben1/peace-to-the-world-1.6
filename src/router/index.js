// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';
import RefundPolicy from '../views/RefundPolicy.vue';
import DeliveryPolicy from '../views/DeliveryPolicy.vue';
import TermsAndConditions from '../views/TermsAndConditions.vue';
import FlagView from '../views/FlagView.vue'; // Import your FlagView

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
