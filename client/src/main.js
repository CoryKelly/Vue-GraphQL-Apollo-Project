import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
Vue.use(VueApollo);

// Setup ApolloClient
export const defaultClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",

  // Include auth token with request made to backend
  fetchOptions: {
    credentials: "include"
  },

  request: operation => {
    // if no token with key of 'token' in localStorage, add it
    if (!localStorage.token) {
      localStorage.setItem("token", "");
    }

    // operation adds the token to an authorization header, which is sent to the backend
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  },
  onError: ({ graphQLError, networkError }) => {
    if (networkError) {
      console.log("[networkError]", networkError);
    }

    if (graphQLError) {
      for (let err of graphQLError) {
        console.dir(err);
      }
    }
  }
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
