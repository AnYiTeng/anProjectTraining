import Classify from '../pages/Classify/Classify.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import LookGoods from '../pages/LookGoods/LookGoods.vue'
import Person from '../pages/Person/Person.vue'
import ShoppingCar from '../pages/ShoppingCar/ShoppingCar.vue'
import Register from '../pages/Register/Register.vue'
import Search from '../pages/Search/Search.vue'

export default [
    {
        path: '/classify',
        component: Classify,
        meta: {
            showFooter: true
        }
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
        component: LookGoods,
        meta: {
            showFooter: true
        }
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
        path:'/',
        redirect: '/homePage'
    }
]