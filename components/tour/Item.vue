<script setup lang="ts"></script>

<template>
  <article
    class="flex flex-col sm:flex-row items-start gap-4 text-xs font-semibold"
    data-aos="fade-up"
    data-aos-duration="500">
    <NuxtImg class="size-20 rounded-lg shadow-sm border border-white/10" src="/images/tour.jpeg" />
    <div class="flex flex-col gap-1.5 items-start">
      <h3 class="text-base font-bold line-clamp-2">
        Winchendon MA - Damian McGinty: A Million Little Ways Tour
      </h3>
      <div class="flex items-center gap-1.5 text-gray-400">
        <Icon name="ri:alarm-line" />
        <div class="">Thu, Jun 6 - Fri, June 21</div>
      </div>
      <div class="flex items-center gap-1.5 text-gray-400">
        <Icon name="ri:map-pin-2-line" />
        <div class="line-clamp-1">United States</div>
      </div>
      <button class="py-1.5 mt-1.5 hover:underline hover:underline-offset-2">Know More</button>
    </div>
  </article>
</template>
