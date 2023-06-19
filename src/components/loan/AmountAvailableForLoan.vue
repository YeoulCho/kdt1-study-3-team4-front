<template lang="">
    <v-container>
        <v-card class="box" width="460">
                        <v-card-text class="text-center px-12 py-16">
                            <v-form @submit.prevent="onSubmit" ref="form">
                                <div >
                                    <v-text-field
                                        v-model="income"
                                        label="수입"
                                        required>
                                    </v-text-field>
                                    <v-text-field
                                        v-model="private_loan_outstanding_amount"
                                        label="사채빚(대출이 불가할 수 있습니다.)"
                                        required>
                                    </v-text-field>
                                    <v-text-field
                                        v-model="outstanding_amount"
                                        label="은행빚"
                                        required>
                                    </v-text-field>
                                </div>

                                <v-btn type="submit" block x-large rounded
                                        color="teal lighten-1" class="mt-5"
                                        style="color:white"
                                        >대출가능금액 조회하기</v-btn>    
                            </v-form>
                            <br>
                            <p v-if="question">대출 가능 금액은 : {{received}}</p>
                        </v-card-text>
                    </v-card>
    </v-container>
  </template>
  <script>
  import axiosInst from '@/utility/axiosInst'
  
  export default {
    data() {
      return {
        income: 0,
        outstanding_amount: 0,
        private_loan_outstanding_amount: 0,
        received: '',
        question: false
        
      }
    },
    methods: {
      onSubmit() {
        const { income, private_loan_outstanding_amount, outstanding_amount } = this
        axiosInst.fastApiAxiosInst.post('/loan-amount', { income, private_loan_outstanding_amount, outstanding_amount })
          .then((res) => {
            this.received = res.data
            this.question = !this.question
          })
          
      }
    }
  }
  </script>
<style>
p {
    font-size: 20px;
  }
</style>
  