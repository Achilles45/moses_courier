import Index from '../views/Index.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Tracking from '../views/Tracking.vue'
import Request from '../views/Request.vue'
const routes = [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/tracking/:id',
      name: 'Tracking',
      component: Tracking
    },
    {
      path: '/request',
      name: 'Request',
      component: Request
    },
  ]

  export default routes;