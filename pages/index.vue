<template>
  <div>
    <LayoutNav />
    <section id="home" class="main-section bg-gray-900">
      <div class="min-h-96 h-full" data-aos="fade-right" data-aos-duration="1000">Home</div>
    </section>
    <section id="tours-events" class="px-6 pt-12 pb-16 bg-gray-800">
      <div class="flex flex-col sm:flex-row gap-12 sm:gap-10 max-w-screen-xl mx-auto">
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
      </div>
    </section>
    <section id="artists" class="px-6 pt-12 pb-16 bg-gray-900">
      <div class="max-w-screen-xl mx-auto">
        <h2 class="text-3xl font-bold" data-aos="fade-right" data-aos-duration="1000">Artists</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto mt-8">
          <ArtistCard
            :image="artist.image"
            :instagram="artist.instagram"
            :name="artist.name"
            :role="artist.role"
            v-for="artist in artists" />
        </div>
      </div>
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

const artists = [
  {
    image: '/images/artists/mark-talur.jpeg',
    instagram: 'https://www.instagram.com/talur_devendra_kumar/',
    name: 'Mark Talur',
    role: 'Keyboardist',
  },
  {
    image: '/images/artists/datta-sai-prasa.jpeg',
    instagram: 'https://www.instagram.com/datta_sai/',
    name: 'Datta Sai Prasa',
    role: 'Violinist',
  },
  {
    image: '/images/artists/tarun-vishal.jpeg',
    instagram: 'https://www.instagram.com/tarun_vishal/',
    name: 'Tarun Vishal',
    role: 'Drummer',
  },
  {
    image: '/images/artists/imtiakum.jpeg',
    instagram: 'https://www.instagram.com/imtiakum_vibegroove/',
    name: 'Imtiakum',
    role: 'Bassist',
  },
  {
    image: '/images/artists/sentilong.jpeg',
    instagram: 'https://www.instagram.com/sentialong/',
    name: 'Sentilong Ao',
    role: 'Guitarist',
  },
  {
    image: '/images/artists/syntyche-mongro.jpeg',
    instagram: 'https://www.instagram.com/synth_mongro/',
    name: 'Syntyche Mongro',
    role: 'Female Vocalist',
  },
  {
    image: '/images/artists/akhileshwar-chennu.jpeg',
    instagram: 'https://www.instagram.com/akhileshwarrc/',
    name: 'Akhileshwar Chennu',
    role: 'Male Vocalist',
  },
  {
    image: '/images/artists/irfan-ahmed-khan.jpeg',
    instagram: 'https://www.instagram.com/irfan_ahmed_khan_sitarist/',
    name: 'Irfan Ahmed Khan',
    role: 'Sitarist',
  },
  {
    image: '/images/artists/pavan-kumar.jpeg',
    instagram: 'https://www.instagram.com/pavantabla/',
    name: 'Pavan Kumar MS',
    role: 'Tablist',
  },
];
</script>

<style>
.main-section {
  min-height: 100vh !important;
  @apply px-6 py-12;
}
</style>
