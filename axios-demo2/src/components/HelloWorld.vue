<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
  // import axios from 'axios';
   import qs from 'querystring'


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    //get请求复杂写法
    this.axios({
        method: "get",
        url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
    }).then(res => {
        console.log("get请求复杂写法",res.data);
    })

    //post请求复杂写法
    this.axios({
      method:"post",
      url:"http://iwenwiki.com/api/blueberrypai/login.php",
      data:qs.stringify({
          user_id:"iwen@qq.com",
          password:"iwen123",
          verification_code:"crfvw"
      })
      }).then(res =>{
        console.log("post请求复杂写法",res.data);
    })

    //get请求简洁写法
    this.axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
    .then(res =>{
        console.log("get请求简洁写法",res.data);
    })

    //post请求简洁写法
    this.axios.post("http://iwenwiki.com/api/blueberrypai/login.php", qs.stringify({
      user_id: "iwen@qq.com",
      password: "iwen123",
      verification_code: "crfvw"
    }))
    .then(res => {
        console.log("post请求简洁写法",res.data);
    })


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
