<template>
  <div>
    <LayoutNav />
    <section id="home" class="main-section bg-gray-900">
      <div class="min-h-96 h-full" data-aos="fade-right" data-aos-duration="1000">Home</div>
    </section>
    <section
      id="tours-events"
      class="flex flex-col sm:flex-row gap-12 sm:gap-10 px-6 pt-12 pb-16 bg-gray-800">
      <div class="flex-1 flex flex-col items-start">
        <h2 class="text-3xl font-bold" data-aos="fade-right" data-aos-duration="1000">Tours</h2>
        <div class="flex flex-col gap-8 mt-8">
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
        </div>
        <NuxtLink
          class="flex items-center gap-2 rounded-full px-6 py-2 mt-8 border border-white transition-colors hover:text-gray-900 hover:bg-white group"
          to="shows">
          <div>Show More</div>
          <Icon
            class="relative left-0 group-hover:left-1 transition-all"
            name="ri:arrow-right-line"
        /></NuxtLink>
      </div>
      <div class="flex-1 flex flex-col items-start">
        <h2 class="text-3xl font-bold" data-aos="fade-right" data-aos-duration="1000">Shows</h2>
        <div class="flex flex-col gap-8 mt-8">
          <ShowItem />
          <ShowItem />
          <ShowItem />
          <ShowItem />
        </div>
        <NuxtLink
          class="flex items-center gap-2 rounded-full px-6 py-2 mt-8 border border-white transition-colors hover:text-gray-900 hover:bg-white group"
          to="shows">
          <div>Show More</div>
          <Icon
            class="relative left-0 group-hover:left-1 transition-all"
            name="ri:arrow-right-line"
        /></NuxtLink>
      </div>
    </section>
    <section id="artists" class="main-section bg-gray-900">
      <div class="min-h-96 h-full" data-aos="fade-right" data-aos-duration="1000">Artists</div>
    </section>
    <section id="gallery" class="main-section bg-gray-800">
      <div class="min-h-96 h-full" data-aos="fade-right" data-aos-duration="1000">Gallery</div>
    </section>
    <section id="about" class="main-section bg-gray-900">
      <div class="min-h-96 h-full" data-aos="fade-right" data-aos-duration="1000">About</div>
    </section>
  </div>
</template>
<script lang="ts" setup>
useSeoMeta({
  title: 'Threeory | Amazing music for all',
  description: 'Amazing music',
});
</script>
<style>
.main-section {
  min-height: 100vh !important;
  @apply px-6 py-12;
}
</style>
