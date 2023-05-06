<template>
  <div>
    <h3>新闻详情</h3>
    <p>{{ $route.params.name }}</p>
    <p>{{ $route.query.user.username }}</p>
    <p>{{ $route.query.user.age }}</p>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>