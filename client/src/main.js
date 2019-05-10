import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
Vue.use(VueApollo);

// Setup ApolloClient
const defaultClient = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const apolloProvider = new VueApollo({ defaultClient });

//3rd Party Plugin
import VuePageTransition from "vue-page-transition";
Vue.use(VuePageTransition);

Vue.config.productionTip = false;
new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
