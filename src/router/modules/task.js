import Layout from '@/layout'
export default {
    path:'/task',
    component:Layout,
    redirect: '/task/business',
    name: 'task',
    meta: {
      title: '工单管理',
      icon: 'nested'
    },
    children:[
      {
        path: 'business',
        component: () => import('@/views/task/business'),
        name: 'business',
        meta: { title: '运营工单' }
      },
      {
        path: 'operation',
        component: () => import('@/views/task/operation'),
        name: 'operation',
        meta: { title: '运维工单' }
      }
    ]
}