import { createApp } from 'vue';
// Import the Vue function to create and initialize the app

import App from './App.vue';
// Main application component (entry point for the app)

import router from './router';
// Import the Vue Router instance for navigation between pages

import { IonicVue } from '@ionic/vue';
// Import IonicVue plugin to integrate Ionic components into the Vue app

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
// Provides the fundamental styles required for all Ionic components

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
// Normalizes default browser styles to ensure consistency
import '@ionic/vue/css/structure.css';
// Base structure styles for the app layout
import '@ionic/vue/css/typography.css';
// Typography styles for Ionic components and text

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
// Utility classes for padding customization
import '@ionic/vue/css/float-elements.css';
// Utility classes for floating elements (e.g., float-left, float-right)
import '@ionic/vue/css/text-alignment.css';
// Utility classes for text alignment (e.g., text-left, text-center)
import '@ionic/vue/css/text-transformation.css';
// Utility classes for text transformations (e.g., uppercase, capitalize)
import '@ionic/vue/css/flex-utils.css';
// Utility classes for flexbox layouts
import '@ionic/vue/css/display.css';
// Utility classes for controlling display properties (e.g., block, inline)

/* Optional Dark Mode Palette CSS */
import '@ionic/vue/css/palettes/dark.always.css';
// Ensures dark mode styles are always active
import '@ionic/vue/css/palettes/dark.class.css';
// Dark mode styles are applied based on a CSS class
import '@ionic/vue/css/palettes/dark.system.css';
// Dark mode styles adapt to the system's dark mode settings

/* Theme variables */
import './theme/variables.css';
// Custom CSS variables for theming, including colors and other styles

import { defineCustomElements } from '@ionic/pwa-elements/loader';
// Import function to register custom web components required for Ionic PWAs
defineCustomElements(window);
// Initialize and define custom web components globally (e.g., for camera, file input)

/* Create and configure the Vue app */
const app = createApp(App)
  .use(IonicVue) // Register IonicVue plugin for Ionic integration
  .use(router); // Register Vue Router for page navigation

router.isReady().then(() => {
  // Wait until the router is fully initialized and ready
  app.mount('#app');
  // Mount the app to the HTML element with the ID "app"
});
