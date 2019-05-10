import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import AddPost from "./views/Posts/AddPost.vue";
import Posts from "./views/Posts/Posts.vue";

import Profile from "./views/Auth/Profile.vue";
import Signin from "./views/Auth/Signin.vue";
import Signup from "./views/Auth/Signup.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  //base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/posts/add",
      name: "AddPost",
      component: AddPost
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    }
  ]
});
