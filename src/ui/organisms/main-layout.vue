<script setup lang="ts">
import headerOrganism from './header.vue'
import sidebarOrganism from './sidebar.vue'
import footerOrganism from './footer.vue'
import Breadcrumb from "@/ui/organisms/breadcrumb.vue";
</script>
<template>
  <div class="main-layout">
    <a-row>
      <a-col :span="24">
        <header-organism />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="6">
        <sidebar-organism />
      </a-col>
      <a-col :span="18" class="main-layout">
        <breadcrumb />
        <slot />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <footer-organism />
      </a-col>
    </a-row>
  </div>
</template>
<style lang="scss">
.main-layout {
  background-color: #fff;
  color: #000;
}
</style>