import Layout from '@/layout'
export default {
    path:'/vm',
    component:Layout,
    redirect: '/vm/index',
    name: 'vm',
    meta: {
      title: '设备管理',
      icon: 'nested'
    },
    children:[
      {
        path: 'index',
        component: () => import('@/views/vm/index'),
        name: 'index',
        meta: { title: '设备管理' }
      },
      {
        path: 'status',
        component: () => import('@/views/vm/status'),
        name: 'status',
        meta: { title: '设备状态' }
      },
      {
        path: 'type',
        component: () => import('@/views/vm/type'),
        name: 'type',
        meta: { title: '设备类型管理' }
      }
    ]
}