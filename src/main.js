// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyA4zzvADNx19sihECgFfiR2hWSoFnKDLYA',
  authDomain: 'vue-login-0000.firebaseapp.com',
  databaseURL: 'https://vue-login-0000.firebaseio.com',
  projectId: 'vue-login-0000',
  storageBucket: 'vue-login-0000.appspot.com',
  messagingSenderId: '597296934999'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
