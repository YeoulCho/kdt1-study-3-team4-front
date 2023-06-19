<template lang="">
    <v-container>
        <v-card class="box" width="460">
                        <v-card-text class="text-center px-12 py-16">
                            <v-form @submit.prevent="onSubmit" ref="form">
                                <div >
                                    <v-text-field
                                        v-model="email"
                                        label="이메일"
                                        required>
                                    </v-text-field>
                                    <v-text-field
                                        v-model="password"
                                        type="password"
                                        label="비밀번호"
                                        required>
                                    </v-text-field>
                                </div>

                                <v-btn type="submit" block x-large rounded
                                        color="teal lighten-1" class="mt-5"
                                        style="color:white"
                                        >인증요청</v-btn>
                            </v-form>
                                <v-form>
                                    <div>
                                        <v-text-field
                                            v-model="number2"
                                            label="인증번호"
                                            required>
                                        </v-text-field>
                                        <v-btn @click="certification" block x-large rounded
                                                color="teal lighten-1" class="mt-5"
                                                style="color:white"
                                                >인증번호확인</v-btn>
                                    </div>
                                </v-form>
                        </v-card-text>
                    </v-card>
    </v-container>
  </template>
  <script>
  import axiosInst from '@/utility/axiosInst'
import axios from 'axios'
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        userToken: '',
        role: '',
        number2: '',
      }
    },
    methods: {
      onSubmit() {
        const { email, password } = this
        axiosInst.axiosInst.post('/loan/account-certify', { email, password })
          .then((res) => {
            console.log(res)
            let certify = res.data
            if (!certify) {
                alert('입력 정보가 잘못되었습니다!')
            } else {
                alert('인증번호가 전송되었습니다!')
            }
          })
          
      },
      certification(){
        const { number2 } = this
        axiosInst.fastApiAxiosInst.post('/certification', {number2} )
        .then((res)=>{
            let certify = res.data
            if(certify == "no"){
                alert('인증번호가 다릅니다.')
            }else {
                alert('인증되었습니다.')
                this.$router.push({
                    name: 'AmountAvailableForLoan'
                })
            }
        })
      },
    }
  }
  </script>