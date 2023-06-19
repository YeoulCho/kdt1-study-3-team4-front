<template>
  <v-app>
    <v-app-bar
      app
      color="teal"
      dark
    >
      <div class="d-flex align-center">
        <a href="/">
          <span style="font-size: 20px; color: white;">
            ho<v-icon>mdi-home</v-icon>me
          </span>
        </a>
      </div>
      <router-link class="listLink" :to="orderHistoryPage">
          <abbr title="내 정보">            
          <v-icon>mdi-account-box</v-icon>
        </abbr>  
      </router-link>
        <v-row justify="end">
          <v-col cols="auto"> 
            <router-link v-if="!login" to="/account-creation-page">
              <v-btn color="teal lighten-2">
                <span>회원가입</span>
                  <v-icon right>mdi-account-plus-outline</v-icon>
              </v-btn>
            </router-link>
            <router-link v-if="!login" to="/account-login-page">
              <v-btn color="teal lighten-2">
                <span>로그인</span>
                  <v-icon right>mdi-account-check-outline</v-icon>
              </v-btn>
            </router-link>
            <router-link v-if="login" to="/">
              <v-btn color="teal lighten-2" @click="logout">
                <span>로그아웃</span>
                  <v-icon right>mdi-account-check-outline</v-icon>
              </v-btn>
            </router-link>
    </v-col>
  </v-row>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import router from './router';
const MemberModule = 'MemberModule'

export default {
  data(){
    return{
      login: false
    }
  },
  name: 'App',

  computed: {
      ...mapState(MemberModule, ['member']),
      orderHistoryPage() {
        return '/order-history-page/' + (this.member ? this.member.userToken : '');
      },
    },
    created(){
      this.check() 
    },
    beforeUpdate() {
      this.check()
    },
    methods:{
    check(){
      if (localStorage.getItem("login")) {
        this.login = true;
        //router.go("/")
      }},
    logout() {
      localStorage.clear()
      this.login = false;
    }
    },
  }
</script>
<style scoped>
.listLink{
  color: white !important;
  height: 18px;
  padding-left: 20px;
  text-decoration: none;
  right: 0;
}

abbr {
  position: relative;
}

abbr[title]:hover::after {
  content: ' (' attr(title) ') ';
  position: absolute;
  left: 110%;
  width: 500px;
  text-decoration: none;
}
</style>