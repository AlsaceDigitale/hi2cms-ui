import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import moment from "moment";
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false;

Vue.filter('frStartTimeFormat', function (value) {
  moment.locale('fr');
  return moment(value).format("dddd D MMMM YYYY [de] H[h]mm [à] ");
});

Vue.filter('frStartTimeFormat1', function (value) {
  moment.locale('fr');
  return moment(value).format("ddd D MMM");
});

Vue.filter('frStartTimeFormat2', function (value) {
  moment.locale('fr');
  return moment(value).format("H[h]mm");
});

Vue.filter('enStartTimeFormat', function (value) {
  moment.locale('en');
  return moment(value).format("dddd D MMMM YYYY [from] H[h]mm [to] ");
});

Vue.filter('endTimeFormat', function (value) {
  return moment(value).format("H[h]mm");
});
// Vue.filter('enEndTimeFormat', function (value) {
//   return moment(value).format("H[h]mm");
// });

Vue.filter('capitalize', function (value) {
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('timesDifference', function (value) {
  const eventTime = moment(value);
  return moment().diff(eventTime, 'hours');
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
