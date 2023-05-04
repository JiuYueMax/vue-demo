<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>

import api from "../api/index.js"

export default {
  name: 'HelloWorld2',
  props: {
    msg: String
  },
  mounted() {
    api.getChengPin().then(res =>{
      console.log(res.data);
    })

    api.getChengPin2().then(res =>{
      console.log(res.data);
    })

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
