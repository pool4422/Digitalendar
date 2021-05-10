import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  
  apiKey: "AIzaSyBPdmNfIhDvlpDorikWOnoc3D3H3NSwgMs",
  authDomain: "vue-calendar-f1d97.firebaseapp.com",
  databaseURL: "https://vue-calendar-f1d97-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vue-calendar-f1d97",
  storageBucket: "vue-calendar-f1d97.appspot.com",
  messagingSenderId: "1094170882992",
  appId: "1:1094170882992:web:c7a8968d87eafa5a9c1c75"

});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
