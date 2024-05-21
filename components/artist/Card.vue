<template>
  <div
    class="row-span-1 rounded-xl transition duration-200 shadow-input shadow-none p-4 bg-gray-800 border-white/[0.1] border justify-between flex flex-col space-y-4 group"
    data-aos="fade-up"
    data-aos-duration="500">
    <NuxtImg
      class="flex flex-1 w-full h-full aspect-square rounded-xl bg-gray-800 object-cover object-[50%_10%] transition-all group-hover:object-[50%_20%]"
      :src="image" />
    <div class="flex justify-between items-start">
      <div class="flex flex-col gap-1 pl-2 transition group-hover:translate-x-2">
        <div class="font-bold">{{ name }}</div>
        <div class="text-xs text-gray-400 font-semibold">{{ role }}</div>
      </div>
      <NuxtLink class="px-2" :external="true" target="_blank" :to="instagram">
        <Icon name="radix-icons:instagram-logo" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  image: string;
  instagram: string;
  name: string;
  role: string;
};

defineProps<Props>();
</script>
