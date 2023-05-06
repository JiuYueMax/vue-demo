<template>
  <div>
    <ul>
      <li> <router-link :to="'/newDetails/'+'百度'">百度新闻</router-link> </li>
      <li> <router-link to="/newDetails/网易">网易新闻</router-link> </li>
      <li> <router-link :to="{path: '/newDetails',query: {user}}">头条新闻</router-link> </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
        return {
            user:{
              username: "张三",
              age: 29
            }
        }
    }
}
</script>

<style>

</style>