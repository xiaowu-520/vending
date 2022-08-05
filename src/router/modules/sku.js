import Layout from '@/layout'
export default {
    path:'/sku',
    component:Layout,
    redirect: '/sku/sku-class',
    name: 'sku',
    meta: {
      title: '商品管理',
      icon: 'nested'
    },
    children:[
      {
        path: 'sku-class',
        component: () => import('@/views/sku/sku-class'),
        name: 'sku-class',
        meta: { title: '商品类型' }
      },
      {
        path: 'sku',
        component: () => import('@/views/sku/sku'),
        name: 'sku',
        meta: { title: '商品管理' }
      }
    ]
}