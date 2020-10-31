import Vue from 'vue'
import VueRouter from 'vue-router'
import employerRoutes from '../router/employerRoutes';
import generalRoutes from '../router/generalRoutes';

Vue.use(VueRouter) //This allows me to use the vue router anywhere once i import this file, because it was mounted into vue js here by using Vue.use and as referenced in main.js

let allRoutes = [];
let importedRoutes = allRoutes.concat(generalRoutes, employerRoutes);
let routes = importedRoutes;

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPositions){
    return {x: 0, y: 0}
  }
})
export default router
