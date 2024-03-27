import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Feed from '../views/Feed.vue'
import Standings from '../views/Standings.vue'
import Admin from '../views/Admin.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/init.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/standings',
    name: 'Standings',
    component: Standings
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAuth: true,
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
        (user) => {
          removeListener();
          resolve(user);
        },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (to.matched.some((record) => record.meta.requiresAdmin)) {
      const user = (await getCurrentUser()).displayName
      if (user === 'Davy' || user === 'Simon') {
      //if (true) {
        next()
      } else {
        alert("You dont have access, you need to be Admin!")
        next("/")
      }
    }
    if (await getCurrentUser()) {
      next()
    } else {
      alert("You dont have access, you need to be signed in!")
      next("/")
    }
  } else {
    next()
  }
});

export default router
