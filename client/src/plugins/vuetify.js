import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#F4F4F4",
    secondary: "#515a62",
    accent: "#949a9e",
    error: "#C1292E",
    warning: "#F1D302",
    info: "#7699d4",
    success: "#0CCE6B"
  }
});
