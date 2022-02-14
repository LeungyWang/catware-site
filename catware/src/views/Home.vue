<!--
 * @Author: leung
 * @Date: 2022-02-02 20:04:26
 * @LastEditTime: 2022-02-14 13:07:53
 * @LastEditors: leung
 * @Description: 
-->
<template>
    <div class="home">
        <nav-bar></nav-bar>
        <home-container></home-container>
    </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import HomeContainer from '@/components/HomeContainer.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeContainer
  }
}
</script>
<style scoped>
    .home{
      height: 600px;
    }
</style>
