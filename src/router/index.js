import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase'
import Users from '../views/Users.vue'
import AddUser from '../views/AddUser.vue'
import UpdateUser from '../views/UpdateUser.vue'
import SignIn from '../views/SignIn.vue'


const routerHistory = createWebHistory()

const routes = [

    {
        path: '/',
        redirect: '/signin'
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/signin'
    },
    {
        path: '/signin',
        name: SignIn,
        component: SignIn
    },
    {
        path: '/users',
        name: Users,
        component: Users,
      
    },
    {
        path: '/adduser',
        name: AddUser,
        component: AddUser,
        
    },
    {
        path: '/updateuser/:userId',
        name: 'UpdateUser',
        component: UpdateUser,
      
    }
]

const router = createRouter({
    history: routerHistory,
    routes
})



export default router