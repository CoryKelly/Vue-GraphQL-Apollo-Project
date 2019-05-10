<template>
  <v-app class="primary">
    <!-- Side Navbar -->
    <v-navigation-drawer
      app
      temporary
      fixed
      v-model="sideNav"
    >
      <v-toolbar color="accent dark flat">
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link to="/">
          <span class="pl-3 drawer-font">YOU</span>
          <span class="font-weight-light">share</span>
        </router-link>
      </v-toolbar>
      <v-divider></v-divider>

      <!--  Side Navbar Links -->
      <v-list>
        <v-list-tile
          v-for="item in sideNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      fixed
      dark
      color="secondary"
      app
    >
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="headline hidden-xs-only">
        <router-link to="/">
          <span>YOU</span>
          <span class="font-weight-light">share</span>
        </router-link>
      </v-toolbar-title>

      <!-- Search Bar -->
      <v-spacer></v-spacer>
      <v-text-field
        color="accent"
        flex
        prepend-icon="search"
        placeholder="Search posts"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>

      <!-- Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          class="text-UpperCase"
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- Main Content -->
    <v-content>
      <v-container class="mt-4">
        <vue-page-transition name="fade">
          <router-view></router-view>
        </vue-page-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>

<script>
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    horizontalNavItems() {
      return [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
    },
    sideNavItems() {
      return [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>
