<template>
  <article
    class="flex flex-col sm:flex-row items-start gap-4 text-xs font-semibold"
    data-aos="fade-up"
    data-aos-duration="500">
    <div
      class="flex flex-row sm:flex-col items-center rounded-lg overflow-hidden text-sm font-semibold border border-white">
      <div class="px-2 sm:px-4 py-0.5 sm:py-2 bg-white text-gray-900">JUN</div>
      <div class="px-2 sm:px-4 py-0.5 sm:py-2">06</div>
    </div>
    <div class="flex flex-col gap-1.5">
      <h3 class="text-base font-bold line-clamp-2">
        Winchendon MA - Damian McGinty: A Million Little Ways Tour
      </h3>
      <div class="flex items-center gap-1.5 font-normal text-gray-300">
        <Icon name="ri:alarm-line" />
        <div class="">Thu, Jun 6</div>
      </div>
      <div class="flex items-center gap-1.5 font-normal text-gray-300">
        <Icon name="ri:map-pin-2-line" />
        <div class="line-clamp-1">Winchendon History and Cultural Center, Winchendon MA</div>
      </div>
      <div class="mt-2 flex gap-4">
        <NuxtLink
          class="flex items-center gap-1 rounded-full px-3 py-1 border border-white transition-colors hover:text-gray-900 hover:bg-white"
          :external="true"
          target="_blank"
          to="/">
          <span>Book Tickets</span>
          <Icon name="ri:external-link-fill" />
        </NuxtLink>
        <button class="hover:underline hover:underline-offset-2">Know More</button>
      </div>
    </div>
  </article>
</template>
