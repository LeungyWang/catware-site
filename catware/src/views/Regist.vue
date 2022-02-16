<!--
 * @Author: leung
 * @Date: 2022-02-16 12:46:11
 * @LastEditTime: 2022-02-16 13:32:39
 * @LastEditors: leung
 * @Description: User regist page
-->
<template>
    <nav-bar></nav-bar>
    <div class="regist-container">
        <div class="regist-content">
            <div class="regist-content-container">
                <div class="regist-box"></div>
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'

export default {
    name: "Regist",
    components: {
        NavBar
    }
}
</script>
<style scoped>
    .regist-container{
        height: 1000px;
        margin-top: 10px;
        display: block;
    }

    .regist-content{
        position: relative;
        height: 100%;
        padding-top: 3.6rem;
    }

    .regist-content-container{
        height: 90%;
        margin: 2.5rem 5rem;
    }

    .regist-box{
        
    }
</style>