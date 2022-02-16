<!--
 * @Author: leung
 * @Date: 2022-02-02 20:04:26
 * @LastEditTime: 2022-02-15 12:24:53
 * @LastEditors: leung
 * @Description: 
-->
<template>
      <nav-bar></nav-bar>
      <home-container></home-container>
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
