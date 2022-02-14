<!--
 * @Author: leung
 * @Date: 2022-02-10 12:36:37
 * @LastEditTime: 2022-02-14 13:04:21
 * @LastEditors: leung
 * @Description: Home container component
-->
<template>
    <div class="home-container">
        <div class="content">
            <div class="sub-content">
                <div class="home-content">
                    <div class="home-desc">
                        <h1>Hi, this is Catware.</h1>
                        <p>We are software engineer, hardware engineer</p>
                        <p>OR... a cat</p>
                        <button>AboutUs</button>
                        <img src="../assets/cat.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "HomeContainer"
}
</script>

<style scoped>
    .home-container{
        margin-top: 10px;
        height: 100%;
        display: block;
    }

    .content{
        position: relative;
        height: calc(100rem - 8rem);
        max-height: 1300px;
        padding-top: 3.6rem;
    }

    .sub-content{
        height: 90%;
        padding: 2rem 5rem;
    }

    .home-content{
        height: 100%;
        margin: 0px auto;
    }

    .home-desc{
        position: relative;
        padding-top: 1rem;
        height: calc(100vh - 8rem);
        max-height: 1300px;
    }

    .home-desc h1{
        font-style: normal;
        font-size: 3.25rem;
        line-height: 4rem;
        color: #1a1a26;
    }

    .home-desc p{
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 40px;
        letter-spacing: 4px;
    }

    .home-desc img{
        width: 50vw;
        position: absolute;
        right: 0;
        bottom: 50px;
    }

    .home-desc button{
        display: block;
        border: 0;
        outline: 0;
        cursor: pointer;
        font-size: 1rem;
        line-height: 1.75rem;
        letter-spacing: 4px;
        color: #fff;
        padding: 8px 32px;
        background: #000;
        border-radius: 8px;
    }
</style>