<template>
  <div
    class="group/merch rounded-lg relative aspect-square h-auto w-full overflow-hidden"
    data-aos="fade-up"
    data-aos-duration="500">
    <NuxtImg
      class="object-cover object-[50%_30%] transition-all duration-500 group-hover/merch:scale-105"
      src="https://www.umusicstore.co.id/cdn/shop/files/DSC00223_1.jpg?v=1698220077&width=2000" />
    <div
      class="absolute left-0 top-0 h-full w-full bg-[linear-gradient(180deg,rgba(255,255,255,0)_60%,rgba(80,80,80,1)_100%)]"></div>
    <div class="absolute bottom-0 left-0 w-full px-4 py-3">
      <h3 class="text-sm font-bold text-background">
        {{ name }}
      </h3>
      <p class="text-[10px] font-semibold uppercase tracking-wide">₹ {{ price }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  image?: string;
  name: string;
  price: number;
  category?: string;
};

defineProps<Props>();
</script>
