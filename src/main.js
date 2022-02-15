import Vue from "vue";
import App from "./App.vue";
import VueAnalytics from "vue-analytics";
import VueGtm from "vue-gtm";
import router from "./router";
import store from "./store";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import Vue2Filters from "vue2-filters";
import Vuelidate from "vuelidate";
import VueCardFormat from "vue-credit-card-validation";
import Config from "./services/config";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
import VueTheMask from 'vue-the-mask';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import StoryblokVue from 'storyblok-vue';
import VueCompositionApi from '@vue/composition-api';
import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer';
import DescriptionComponent from "./components/Storyblok/Description";
import StoryblokClient from 'storyblok-js-client';

Vue.use(Vuelidate);
Vue.use(VueCardFormat);
Vue.use(Vuesax);
Vue.use(Vue2Filters);
Vue.use(VueTheMask)

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(StoryblokVue)
Vue.use(VueCompositionApi)
Vue.use(VueRichTextRenderer, {
  resolvers: {
    components: {
      description: DescriptionComponent
    }
  }
});

Object.defineProperty(Vue.prototype, '$StoryblokClient', { value:StoryblokClient });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(VueGtm, {
  id: process.env.VUE_APP_GTM_ID, // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryPararms: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}]
  defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
  enabled: process.env.NODE_ENV == "production", // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: process.env.NODE_ENV == "development", // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  ignoredViews: ["homepage"], // Don't trigger events for specified router names (case insensitive) (optional)
  trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
});

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_UA_ID,
  router,
  debug: {
    enabled: process.env.NODE_ENV == "development",
  },
  ecommerce: {
    enabled: true,
  },
});
Vue.use(Vuelidate);

Sentry.init({
  Vue: Vue,
  dsn: Config.SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
