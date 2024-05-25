<template>
  <div
    class="group/artist rounded-lg relative aspect-[5/6] h-auto w-full overflow-hidden"
    data-aos="fade-up"
    data-aos-duration="500">
    <NuxtImg
      class="object-cover object-[50%_30%] grayscale transition-all duration-500 group-hover/artist:grayscale-0 group-hover/artist:scale-105"
      :src="image" />
    <div
      class="absolute left-0 top-0 h-full w-full bg-[linear-gradient(180deg,rgba(255,255,255,0)_40%,rgba(28,28,28,1)_100%),url(/images/texture.svg)]"></div>
    <div class="absolute bottom-0 left-0 w-full p-4">
      <h3 class="text-sm font-bold text-background">
        {{ name }}
      </h3>
      <div class="flex items-center justify-between gap-4">
        <p class="text-[10px] font-semibold uppercase tracking-wide">
          {{ role }}
        </p>
        <NuxtLink class="p-1" :external="true" target="_blank" :to="instagram">
          <Icon name="radix-icons:instagram-logo" />
          <p class="sr-only">{`${artist.name}'s Instagram`}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  image: string;
  instagram: string;
  name: string;
  role: string;
  withTexture?: boolean;
};

defineProps<Props>();
</script>
