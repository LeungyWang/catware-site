<!--
 * @Author: leung
 * @Date: 2022-02-02 21:22:11
 * @LastEditTime: 2022-02-15 13:01:08
 * @LastEditors: leung
 * @Description: Navigator bar component
-->
<template>
    <div class="nav-bar">
        <div class="toggle-sidebar-button">
            <div class="icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <span>
            <span class="site-name">Catware</span>
        </span>
        <div class="nav-links-wrapper">
        <nav class="nav-links can-hide">
            <div class="nav-links-item">
                <a href="/home" aria-label="Software">Software</a>
            </div>
            <div class="nav-links-item">
                <a href="/home" aria-label="Hardware">Hardware</a>
            </div>
            <div class="nav-links-item">
                <a href="/home" aria-label="Cat">Cat</a>
            </div>
            <div class="nav-links-item">
                <a href="/home" aria-label="AboutUs">AboutUs</a>
            </div>
            <div class="nav-links-item">
                <a href="/home" aria-label="JoinUs">JoinUs</a>
            </div>
        </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>

.nav-bar{
    display: block;
    padding-left: 4rem;
    position: fixed;
    border-bottom: 2px solid #eaecef;
    background-color: #ffffff;
    box-sizing: border-box;
    top: 0;
    left: 0;
    z-index: 20;
    height: 3.6rem;
    width: 100%;
    padding-top:0.9rem;
}

.nav-bar .site-name{
    widows: calc(100vw - 9.4rem);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.3rem;
    font-weight: 600;
    color: #20202f;
    position: relative;
}

.nav-bar .nav-links-wrapper{
    display: flex;
    position: absolute;
    box-sizing: border-box;
    top: 0.7rem;
    right: 7rem;
    height: 2.5rem;
    padding-left: 1.5rem;
    white-space: nowrap;
    font-size: .9rem;
}

.nav-bar .can-hide{
    display: none;
}

.nav-bar .nav-links{
    display: inline-block;
}

.nav-links .nav-links-item{
    position: relative;
    display: inline-block;
    line-height: 32px;
    margin-left: 1.5rem;
    font-size: 1rem;
}

.nav-links a{
    line-height: 1.4rem;
    color: #1a1a26;
}

.nav-links, .nav-links a {
    display: inline-block;
}

a {
    font-weight: 500;
    overflow-wrap: break-word;
    text-decoration: none;
}

a, p a code {
    color: #1a1a26;
}

a:link{
    text-decoration: none;
}

a:hover{
    cursor: pointer;
    border-bottom: 2px solid #1a1a26;
    padding-bottom: 6px;
}

.toggle-sidebar-button{
    display: block;
    position: absolute;
    top: 0.6rem;
    left: 1rem;
    padding: 0.6rem;
    cursor: pointer;
    width: 20px;
    height: 20px;
}

.toggle-sidebar-button .icon{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    cursor: inherit;
}

.toggle-sidebar-button .icon span{
    display: inline-block;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color: #20202f;
}

.toggle-sidebar-button .icon span:nth-child(2){
    margin: 6px 0;
}
</style>