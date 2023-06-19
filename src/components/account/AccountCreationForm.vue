<template lang="">
  <v-container class="background">      
      <v-card class="box" width="460">
                        <v-card-text class="text-center px-12 py-16">
                            <v-form @submit.prevent="onSubmit" ref="form">
                              <label>
                                <input type="radio" checked v-model="roleType" value="NORMAL"/>
                                일반회원  
                              </label>
                              <label>
                                <input type="radio" v-model="roleType" value="BUSINESS"/>
                                사업자  
                              </label>
                                <div >
                                    <v-text-field
                                        v-model="email"
                                        label="이메일"
                                        required>
                                    </v-text-field>
                                    <v-text-field
                                        v-model="password"
                                        label="비밀번호"
                                        required>
                                    </v-text-field>
                                </div>

                                <v-btn type="submit" block x-large rounded
                                        color="teal lighten-1" class="mt-5"
                                        style="color:white"
                                        >회원가입</v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
  </v-container>
</template>

<script>
import axiosInst from '@/utility/axiosInst';
export default {
    data () {
        return {
            email: '',
            password: '',
            roleType: '',
            redo: null,
        }
    },
    methods: {
        onSubmit () {
            const { email, password, roleType } = this
            axiosInst.axiosInst.post('/account/register', { email, password, roleType })
                .then((res) => {
                    this.redo = res.data
                    if (this.redo) {
                        alert('등록 성공!')
                    } else {
                        alert('이메일이 중복되었습니다!')
                    }
                })
        }
    }
}
</script>

<style scoped>
.box{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}    
</style>