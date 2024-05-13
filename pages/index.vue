<template>
  <div>
    <LayoutNav />
    <section id="home" class="main-section bg-gray-900">
      <div class="min-h-96 h-full" data-aos="fade-right" data-aos-duration="1000">Home</div>
    </section>
    <section id="tours-events" class="main-section bg-gray-800">
      <div class="min-h-96 h-full" data-aos="fade-right" data-aos-duration="1000">
        Tours and Events
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
  padding-top: 50px !important;
  @apply px-6;
}
</style>
