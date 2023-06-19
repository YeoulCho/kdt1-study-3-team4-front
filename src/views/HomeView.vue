<template>
  <v-container>
    <div>
      <nav>
        <router-link to="/product-list-page">상품 리스트 | </router-link>
        <router-link v-if="login" to="/loan-page">대출 가능 금액 확인해보기 | </router-link> 
      </nav>
      
    </div>
  </v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    data(){
      return{
        login: false,
      }
    },
    name: 'Home',

    components: {
      HelloWorld,
    },
    created(){
      this.check() 
    },
    beforeUpdate(){
      this.check() 
    },
    methods:{
      check(){
      if (localStorage.getItem("login")) {
        this.login = true
      }},
    }
  }
</script>
