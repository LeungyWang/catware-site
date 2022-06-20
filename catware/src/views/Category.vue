<!--
 * @Author: leung
 * @Date: 2022-06-14 20:47:25
 * @LastEditTime: 2022-06-14 21:01:46
 * @LastEditors: leung
 * @Description: 
-->
<template>
      <nav-bar></nav-bar>
      <category-container></category-container>
</template>

<script>
import CategoryContainer from '@/components/CategoryContainer.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Category',
  components: {
    CategoryContainer,
    NavBar
  }
}
</script>