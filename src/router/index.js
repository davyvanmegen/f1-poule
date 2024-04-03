import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Feed from '../views/Feed.vue'
import Standings from '../views/Standings.vue'
import Admin from '../views/Admin.vue'
import History from '../views/History.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/init.js'
import db from '../firebase/init.js'
import { query, collection, getDocs, setDoc, doc, getDoc } from 'firebase/firestore'


let isAdmin = false
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
    // meta: {
    //   requiresAuth: true,
    //   requiresAdmin: true
    // },
    beforeEnter(to) {
      console.log(isAdmin)
      if (!isAdmin===true) {
          alert('You need to be admin')
          return '/'
      } else {
        console.log('Welkom admin')
      }
      
  },
  },
  {
    path: '/history',
    name: 'History',
    component: History
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})





router.beforeEach(async (to, from, next) => {
  isAdmin = false
  if (from.path !== '/signup') {
    if (await getCurrentUser()) {
      const querySnap = await getDoc(query(doc(db, 'users', (await getCurrentUser()).displayName)))
      isAdmin = querySnap.data().isAdmin
    }
  }
  
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // if (to.matched.some((record) => record.meta.requiresAdmin)) {
    //   const user = (await getCurrentUser()).displayName
    //   if (user === 'Davy' || user === 'Simon') {
    //   //if (true) {
    //     next()
    //   } else {
    //     alert("You dont have access, you need to be Admin!")
    //     next("/")
    //   }
    // }
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
