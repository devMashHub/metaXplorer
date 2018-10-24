import Vue from 'vue/dist/vue.js'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import AppView from '../src/components/AppView.vue';

Vue.use(Element);

var app = new Vue({

    el: '#app-element',
    components: {
        AppView,
    }

});