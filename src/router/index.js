import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import store from '../store/index'
import dashboard from '../views/dashboard.vue'
import AddCollectionForm from '../views/AddCollectionForm.vue'
import dashoverview from '../views/dashoverview.vue'
import showCollections from '../views/showCollections.vue'
import showfavorite from '../views/showfavorite.vue'
import addSearchComic from '../views/addSearchComic.vue'

Vue.use(VueRouter)

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: 'showCollection',
          name: 'collectionPublic',
          component: showCollections,
        }
      ],
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
      {
        path:"/addcollections",
        name:"AddCollections",
        component: AddCollectionForm
      },
      {
        path: "/addComic",
        name: "addComic",
        component: addSearchComic
      },
   
    {
      path: "/dashboard",
      name:"dashboard",
      component:dashboard,
      children:[
         {
          path:"overview",
          name:"overview",
          component: dashoverview
         },
         {
          path: 'favorite',
          name: 'favorite',
          component: showfavorite,
        },
        {
          path: 'showmycollection',
          name: 'mycollection',
          component: showCollections,
        } 
      ],
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});

export default router;