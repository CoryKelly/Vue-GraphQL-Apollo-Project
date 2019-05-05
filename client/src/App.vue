<template>
  <v-app class="primary">
    <v-toolbar fixed dark color="secondary" app>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="headline ">
        <router-link to="/">
          <span>YOU</span>
          <span class="font-weight-light">share</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field color="accent" flex prepend-icon="search" placeholder="Search posts" single-line hide-details></v-text-field>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat class="text-UpperCase" v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<style>
a {
  text-decoration: none;
}
</style>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
    }
  },
    computed: {
      horizontalNavItems(){
        return [
          {icon: 'chat', title: 'Posts', link: '/posts'},
          {icon: 'lock_open', title: 'Sign In', link: '/signin'},
          {icon: 'create', title: 'Sign Up', link: '/signup'}
        ]
      }
    }
  };
</script>
