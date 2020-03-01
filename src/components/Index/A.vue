<template>
  <div>
    <p>我是A页面</p>
    <p><router-link to="/">返回</router-link></p>
    <p><router-link to="/a1">转向A1</router-link></p>
    <router-view></router-view>
  </div>
</template>
