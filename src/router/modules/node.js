import Layout from '@/layout'
export default {
    path:'/node',
    component:Layout,
    redirect: '/node/region',
    name: 'node',
    meta: {
      title: '点位管理',
      icon: 'nested'
    },
    children:[
      {
        path: 'region',
        component: () => import('@/views/node/region'),
        name: 'region',
        meta: { title: '区域管理' }
      },
      {
        path: 'node',
        component: () => import('@/views/node/node'),
        name: 'node',
        meta: { title: '点位管理' }
      },
      {
        path: 'partner',
        component: () => import('@/views/node/partner'),
        name: 'partner',
        meta: { title: '合作商管理' }
      }
    ]
}