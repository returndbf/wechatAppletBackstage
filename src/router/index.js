//import { Vue } from "vue";
//import VueRouter from "vue-router"
import { createRouter,createWebHistory} from "vue-router";
//Vue.use(VueRouter)

const Login = ()=>import ("../views/Login.vue")

const Main = ()=>import ("../views/Main.vue")

const ChooseManage = ()=>import("../components/choose/ChooseManage.vue")

const AddChoose = ()=>import("../components/choose/AddChoose.vue")

const RainbowFartManage =()=>import("../components/rainbowFart/RainbowFartManage.vue")

const AddRainbowFart = () =>import("../components/rainbowFart/AddRainbowFart.vue")

const BlogManage = ()=>import("../components/blog/BlogManage.vue")
const routes=[{
    path:"",
    redirect:"/login"
},
{
    path:"/login",
    component:Login
},
{
    path:"/main",
    component:Main,
    children:[
        {
            path:"chooseManage",
            component:ChooseManage
        },
        {
            path:"addChoose",
            component:AddChoose
        },
        {
            path:"rainbowFartManage",
            component:RainbowFartManage
        },
        {
            path:"addRainbowFart",
            component:AddRainbowFart
        },
        {
            path:"blogManage",
            component:BlogManage
        }

    ]
}
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
  });
router.beforeEach((to, from ) => {
    if (to.path === '/login') return true
    if (localStorage.getItem("user")!=="login") {
        return false
    } else {
        return true
    }
})
export default router