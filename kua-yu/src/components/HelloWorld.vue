<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>跨域解决方案</h3>
  </div>
</template>

<script>

  import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    axios.get("/api/FingerUnion/list.php")
    .then(function(res){
      console.log(res);
    },function(err){
      console.log(err);
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
