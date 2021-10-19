
const routes = [
  {
    path: '/',
    component: () => import('layouts/PublicLayout.vue'),
    children: [
      { path: '', name:"landing", component: () => import('pages/Landing.vue') },
      { path: 'login', name:"login", component: () => import('pages/Login.vue') },
      { path: 'faq', name:"faq", component: () => import('pages/Faq.vue') }
    ]
  },

    {
    path: '/auth',
    component: () => import('layouts/AuthenticatedLayout.vue'),
    children: [
      { path: 'balance-inquiry', name:"balanceInquiry", component: () => import('pages/auth/BalanceInquiry.vue') },
      { path: 'payment', name:"payment", component: () => import('pages/auth/Payment.vue') },
      { path: 'purchase', name:"purchase", component: () => import('pages/auth/Purchase.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
