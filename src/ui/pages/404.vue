<script setup lang="ts">
import LessLayout from "@/ui/organisms/less-layout.vue";
</script>
<template>
  <less-layout>
      <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
        <template #extra>
          <router-link to="/">Back Home Page</router-link>
        </template>
      </a-result>
  </less-layout>
</template>


