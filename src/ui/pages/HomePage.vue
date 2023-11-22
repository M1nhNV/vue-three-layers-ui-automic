<script setup lang="ts">
import { getList } from '@/services/api/user-list'
import MainLayout from "@/ui/organisms/main-layout.vue";

</script>

<template>
  <MainLayout>
    <main>
      <h1>home page</h1>
    </main>
  </MainLayout>
</template>
<style lang="scss">
main {
  background-color: #fff;
}
</style>