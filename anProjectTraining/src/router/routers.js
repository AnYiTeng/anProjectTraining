import Classify from '../pages/Classify/Classify.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import LookGoods from '../pages/LookGoods/LookGoods.vue'
import Person from '../pages/Person/Person.vue'
import ShoppingCar from '../pages/ShoppingCar/ShoppingCar.vue'
import Register from '../pages/Register/Register.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import ClassContent from '../pages/Classify/ClassContent.vue'

export default [
    {
        path: '/classify',
        redirect: '/classify/classcontent/0',
        component: Classify,
        meta: {
            showFooter: true
        },
        children: [
            {
                path: 'classcontent/:id',
                component: ClassContent,
                meta: {
                    showFooter: true
                }
            }
        ]
    },
    {
        path: '/homePage',
        component: HomePage,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/lookGoods',
        redirect: '/lookGoods/0',
        component: LookGoods,
        meta: {
            showFooter: true
        },
        children: [
            {
                path: ':id',
                meta: {
                    showFooter: true
                }
            },
        ]
    },
    {
        path: '/person',
        component: Person
    },
    {
        path: '/shoppingCar',
        component: ShoppingCar,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/login/:id',
        component: Login
    },
    {
        path:'/',
        redirect: '/homePage'
    }
]