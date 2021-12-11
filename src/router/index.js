import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cities from '../views/Cities.vue';
import City from '../views/City.vue';
import Cards from '../views/Cards.vue';
import MapPage from '../views/Map.vue';
import Adoption from '../views/Adoption.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cities/:change?',
    name: 'Cities',
    component: Cities,
  },
  {
    path: '/city/:id/:name?',
    name: 'City',
    props: true,
    component: City,
  },
  {
    path: '/map',
    name: 'Map',
    component: MapPage,
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Cards,
  },
  {
    path: '/report',
    name: 'Report',
  },
  {
    path: '/adoption',
    name: 'Adoption',
    component: Adoption,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
