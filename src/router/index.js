import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/shouye'
import HelloWorld from '@/components/HelloWorld'
import hw from '@/components/hw'
import hu from '@/components/hu'
import user from '@/components/user'
import element from '@/components/element'
import cont from '@/components/cont'
import login from '@/components/login'
import page from '@/components/index'
import totalplan from '@/views/Mtotal/totalplan'
import needplan from '@/views/needplan/needplan'
import pact from '@/views/Pact/pact'//合同配置
import admission from '@/views/Admission/admission'//材料入场
import delivery from '@/views/Delivery/delivery'//材料出库
import cntent from '@/views/Cntent/content'//材料盘点
import vendor from '@/views/Vendor/vendor'//供应商配置
import warehouse from '@/views/Warehouse/warehouse'//仓库管理
import basicmaterials from '@/views/Basicmaterials/basicmaterials'//基础物资
Vue.use(Router)
export default new Router({
  // mode:"history",
  linkExactActiveClass:"qj",
  routes: [
    {
      path: '/',
      redirect:"page",
    },  
    {
      path:"/page",
      name:"page",
      component:page,
      children:[
        {
          path:'totalplan',
          name:'totalplan',
          component:totalplan
        },
        {
          path:'needplan',
          name:'needplan',
          component:needplan
        },
        {
          path:'pact',
          name:'pact',
          component:pact
        },
        {
          path:'admission',
          name:'admission',
          component:admission
        },
        {
          path:'delivery',
          name:'delivery',
          component:delivery
        },
        {
          path:'cntent',
          name:'cntent',
          component:cntent
        },
        {
          path:'vendor',
          name:'vendor',
          component:vendor
        },
        {
          path:'warehouse',
          name:'warehouse',
          component:warehouse
        },
        {
          path:'basicmaterials',
          name:'basicmaterials',
          component:basicmaterials
        },
      ]
    },
    {
      path:'/shouye',
      name:'shouye',
      component:shouye
    },
    {
      path:'/cont',
      name:'cont',
      component:cont
    },
    {
      path:'/hw',
      name:'cainaio',
      component:hw
    },
    {
      path:'/hu',
      name:'caiaio',
      component:hu
    },
    {
      path:"/user/:id",
      name:"user",
      component:user,
      children:[
        {
          path:'hu',
          component:hu
        },
        {
          path:'hw',
          component:hw
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/element',
      name:'hello',
      component:element
    },
    
  ]
})
