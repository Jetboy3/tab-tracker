<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email">
    <br>
    <input type="password" name="password" placeholder="password">
    <br>
    <button @click="register">
      register
    </button>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email:'',
      password:''
    }
  },
  methods:{
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.passwords
      })
      console.log(response.data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
