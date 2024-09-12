<template>
  <NuxtPage class="min-h-full w-full bg-gray-900 text-white" />
</template>
<script lang="ts" setup>
useSeoMeta({
  ogTitle: 'Threeory',
  ogDescription: 'Amazing music for all',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
});
</script>
<style>
body,
html {
  min-height: 100% !important;
  min-width: 100% !important;
}

body.modal-open {
  overflow: hidden;
}
</style>
