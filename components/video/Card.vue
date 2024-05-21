<template>
  <a class="" data-aos="fade-up" data-aos-duration="500" target="_blank" :href="href">
    <NuxtImg class="rounded-md object-cover w-full border border-white/[0.1]" :src="image" />
    <h3 class="font-semibold text-sm line-clamp-1 p-1">{{ title }}</h3>
  </a>
</template>

<script lang="ts" setup>
type Props = {
  href: string;
  image: string;
  title: string;
};

defineProps<Props>();
</script>
