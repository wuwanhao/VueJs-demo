import Vue from "vue"
import Router from "vue-router"
import Login from "../views/Login"
import Main from "../views/Main";
import UserProfile from "../views/user/UserProfile";
import UserList from "../views/user/UserList";
import NotFound from "../views/error/NotFound";


Vue.use(Router);

export default new Router({
  //去掉请求路径中的 #
  mode: "history",
  routes: [
    //登录页
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    //首页
    {
      path: "/main",
      name: "Main",
      component: Main,
      children: [  //子路由
        // :id 路径变量，路径参数
        {path: '/user/profile/:id', name : "UserProfile", component: UserProfile},
        {path: '/user/list', name : "UserList", component: UserList}
      ]
    },
    //重定向
    {
      path: "/goMain",
      redirect: "/main"
    },
    //404
    {
      path:"*",
      component: NotFound

    }
  ]
})
