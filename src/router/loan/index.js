import Vue from 'vue'
import VueRouter from 'vue-router'

import LoanAvailable from '@/components/loan/LoanAvailable.vue'
import AmountAvailableForLoan from '@/components/loan/AmountAvailableForLoan.vue'

Vue.use(VueRouter)

const loanRoutes = [
      {
        path: '/loan-page',
        name: 'LoanAvailable',
        component: LoanAvailable
      },
      {
        path: '/amount-available-loan-page',
        name: 'AmountAvailableForLoan',
        component: AmountAvailableForLoan
      },
      

]



export default loanRoutes
