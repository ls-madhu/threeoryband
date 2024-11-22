<template>
  <div>
    <div :v-element-visibility="onElementVisibility">
      <LayoutNav :hidden="isHeaderNavIsVisible" />
    </div>
    <section id="home" class="relative main-section bg-gray-900" ref="heroSection">
      <!-- <div class="mist-layer"></div> -->
      <div class="min-h-20"></div>

      <NuxtImg
        class="object-cover hidden sm:block absolute top-0 left-0 w-full h-full opacity-60"
        src="/images/main-image.jpg" />
      <NuxtImg
        class="object-cover sm:hidden absolute top-0 left-0 w-full h-full opacity-60"
        src="/images/hero-mobile.jpeg" />
      <div class="absolute bottom-2 left-0 right-0 flex flex-col min-h-[60vh] sm:hidden">
        <div class="w-full" ref="mobileLogoRef" id="mobile-logo"></div>
        <transition name="fade" mode="out-in">
          <NuxtImg
            v-show="isMobileLogoVisible"
            alt="Three Logo"
            class="relative w-full mx-auto"
            src="/images/logo.png" />
        </transition>
      </div>
      <div class="absolute bottom-2 left-0 right-0 sm:flex flex-col min-h-[55vh] hidden">
        <div ref="headerNavRef" id="header-nav"></div>
        <transition name="fade" mode="out-in">
          <NuxtImg
            v-show="isHeaderNavIsVisible"
            alt="Three Logo"
            class="relative w-auto h-64 mx-auto hidden sm:block"
            src="/images/logo-white.webp" />
        </transition>
        <transition name="fade" mode="out-in">
          <div class="mx-auto mt-5 sm:flex hidden" v-show="isHeaderNavIsVisible">
            <ul
              class="header-nav landing-nav px-10 gap-x-10 flex flex-row items-center justify-around relative h-12 rounded-full">
              <li @click="scrollTo('#shows')">Shows</li>
              <li @click="scrollTo('#artists')">Artists</li>
              <li @click="scrollTo('#videos')">Videos</li>
              <li @click="scrollTo('#gallery')">Gallery</li>
              <li @click="scrollTo('#shop')">Shop</li>
              <li @click="scrollTo('#about')">About</li>
            </ul>
          </div>
        </transition>
      </div>
      <div class="mx-2 py-2 px-4 bg-orange-700 rounded-lg relative sm:hidden">
        <TourItemSmall />
      </div>
      <div class="absolute bottom-6 left-0 right-0 flex flex-row justify-center">
        <a
          class="rounded mx-auto mt-12 text-xs uppercase px-4 py-1"
          style="border: solid 1px white; border-radius: 20px; background: rgba(0, 0, 0, 0.4)">
          Scroll
        </a>
      </div>
    </section>
    <section id="shows" class="relative min-h-screen sm:px-4 md:px-6 pt-12 pb-16 bg-gray-900">
      <div
        class="absolute inset-0 blur-[1px] w-full h-full bg-fixed bg-cover bg-center bg-[url(/images/shows-bg.png)]"></div>
      <div class="relative max-w-screen-xl mx-auto">
        <h2
          class="text-3xl px-2 sm:px-0 font-bold mb-8"
          data-aos="fade-right"
          data-aos-duration="1000">
          Shows
        </h2>
        <ShowCalendar :events="result?.items" v-if="result?.items" />
      </div>
    </section>
    <section id="artists" class="relative px-2 sm:px-4 md:px-6 pt-12 pb-16 bg-gray-800">
      <div
        class="absolute inset-0 blur-[1px] w-full h-full bg-fixed bg-cover bg-center bg-[url(/images/artists-bg.png)]"></div>
      <div class="relative max-w-screen-xl mx-auto">
        <h2 class="text-3xl font-bold" data-aos="fade-right" data-aos-duration="1000">Artists</h2>
        <div
          class="mx-auto mt-8 grid max-w-screen-2xl grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3">
          <ArtistCard
            :image="artist.image"
            :instagram="artist.instagram"
            :name="artist.name"
            :role="artist.role"
            :with-texture="true"
            v-for="artist in artists" />
        </div>
        <!-- <h2 class="text-3xl font-bold mt-12" data-aos="fade-right" data-aos-duration="1000">
          Artists Alt
        </h2>
        <div
          class="mx-auto mt-8 grid max-w-screen-2xl grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ArtistCard
            :image="artist.image"
            :instagram="artist.instagram"
            :name="artist.name"
            :role="artist.role"
            v-for="artist in artistsAlt" />
        </div> -->
      </div>
    </section>
    <section id="clients" class="relative px-2 sm:px-4 md:px-6 pt-12 pb-16 bg-gray-800">
      <div
        class="absolute inset-0 blur-[1px] w-full h-full bg-fixed bg-cover bg-center bg-[url(/images/gallery-bg.png)]"></div>
      <div class="relative max-w-screen-xl mx-auto">
        <h2 class="text-3xl font-bold" data-aos="fade-right" data-aos-duration="1000">Clients</h2>
        <div
          class="mx-auto mt-8 grid max-w-screen-2xl grid-cols-2 justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
          <NuxtImg src="/images/client.webp" v-for="client in 8" />
        </div>
      </div>
    </section>
    <section id="videos" class="relative bg-gray-900 px-2 sm:px-4 md:px-6 pt-12 pb-16">
      <div
        class="absolute inset-0 blur-[1px] w-full h-full bg-fixed bg-cover bg-center bg-[url(/images/videos-bg.png)]"></div>
      <div class="relative max-w-screen-xl mx-auto">
        <h2 class="text-3xl font-bold" data-aos="fade-right" data-aos-duration="1000">Videos</h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded-2xl p-4 bg-black/70 gap-x-6 gap-y-4 max-w-7xl mx-auto mt-8">
          <VideoCard
            :href="video.href"
            :image="video.image"
            :title="video.title"
            v-for="video in videos" />
        </div>
      </div>
    </section>
    <section id="gallery" class="relative bg-gray-800 px-2 sm:px-4 md:px-6 pt-12 pb-16">
      <div
        class="absolute inset-0 blur-[1px] w-full h-full bg-fixed bg-cover bg-center bg-[url(/images/gallery-bg.png)]"></div>
      <div class="relative max-w-screen-xl mx-auto">
        <h2 class="text-3xl font-bold" data-aos="fade-right" data-aos-duration="1000">Gallery</h2>
        <div class="grid auto-rows-[300px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div
            class="row-span-1 rounded-xl overflow-hidden"
            :class="index === 4 || index === 7 ? 'lg:col-span-2' : ''"
            data-aos="fade-up"
            data-aos-duration="500"
            v-for="(image,index) in images"
            :key="index">
            <NuxtImg class="object-cover w-full h-80 opacity-85 hover:opacity-100" 
            :src="image"  />
          </div>
        </div>
      </div>
    </section>
    <section id="shop" class="relative bg-gray-900 px-6 pt-8 pb-10">
      <div
        class="absolute inset-0 blur-[1px] w-full h-full bg-fixed bg-cover bg-center bg-[url(/images/shop-bg.png)]"></div>
      <div class="relative mx-auto max-w-screen-xl py-4 sm:pt-8 md:pt-12">
        <h2 class="text-3xl font-bold" data-aos="fade-right" data-aos-duration="1000">Shop</h2>
        <div
          class="mx-auto p-4 bg-black/40 rounded-2xl mt-8 grid max-w-screen-2xl grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <MerchandiseCard
            :name="merch.name"
            :price="merch.price"
            v-for="merch in merchandiseData" />
        </div>
      </div>
    </section>
    <section id="team" class="relative px-2 sm:px-4 md:px-6 pt-12 pb-16 bg-gray-800">
      <div
        class="absolute inset-0 blur-[1px] w-full h-full bg-fixed bg-cover bg-center bg-[url(/images/artists-bg.png)]"></div>
      <div class="relative max-w-screen-xl mx-auto">
        <h2 class="text-3xl font-bold" data-aos="fade-right" data-aos-duration="1000">
          Support Team
        </h2>
        <div
          class="mx-auto mt-8 grid max-w-screen-2xl grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ArtistCard
            :image="artist.image"
            :instagram="artist.instagram"
            :name="artist.name"
            :role="artist.role"
            :with-texture="true"
            v-for="artist in artists.slice(0, 4)" />
        </div>
      </div>
    </section>
    <section id="about" class="relative bg-gray-900 px-2 sm:px-4 md:px-6 pt-8 pb-10">
      <div
        class="absolute inset-0 blur-[1px] w-full h-full bg-fixed bg-cover grayscale bg-center bg-[url(/images/about-bg.png)]"></div>
      <div class="relative mx-auto max-w-screen-xl py-4 sm:pt-8 md:pt-12">
        <h2 class="text-3xl font-bold" data-aos="fade-right" data-aos-duration="1000">About Us</h2>
        <p class="mt-2 bg-black/40 p-4 md:p-8 rounded-2xl text-justify">
          Welcome to Threeory Bands, Hyderabad's premier musical ensemble, known and celebrated
          around the world for our eclectic blend of genres and unforgettable performances. Formed
          by a group of passionate musicians in the heart of Hyderabad, Threeory Bands combines the
          essence of traditional Indian music with contemporary sounds, creating a unique auditory
          experience that resonates globally. Our journey began in this vibrant city, and over the
          years, we have evolved, experimenting with various styles and expanding our repertoire to
          include rock, jazz, classical, and fusion. Today, we perform on stages across the world,
          sharing our dynamic and versatile sound with diverse audiences. Each member brings a
          wealth of talent and creativity, contributing to our mission of pushing musical
          boundaries, entertaining, and inspiring with every note. Join us as we continue to
          captivate and enchant listeners everywhere
        </p>
        <div class="mt-8 flex flex-col gap-4 md:flex-row">
          <div class="flex-1 md:basis-1/2 bg-black/40 p-4 md:p-8 rounded-2xl">
            <p class="font-primary font-bold text-gray-400 sm:text-lg">
              For inquiries, wholesale ticket purchases, and accessibility arrangements, please
              reach out to us at :
            </p>
            <div class="grid grid-cols-1 gap-x-4 gap-y-8 px-4 py-8 min-[480px]:grid-cols-2">
              <ContactInfo icon="fe:phone" name="Phone">
                <a class="hover-underline text-xs uppercase text-sand/80" href="tel:+1234567890"
                  >+(123) 456-7890</a
                >
              </ContactInfo>
              <ContactInfo icon="heroicons:envelope-solid" name="Email">
                <a
                  class="hover-underline text-xs uppercase text-sand/80"
                  href="mailto:help@threeory.com"
                  >help@threeory.com</a
                >
              </ContactInfo>
              <ContactInfo icon="fluent:location-ripple-16-filled" name="Location">
                <span class="text-xs uppercase text-sand/80">Hyderabad</span>
              </ContactInfo>
              <ContactInfo icon="bxl:instagram-alt" name="Socials">
                <div class="flex gap-x-4 text-xs uppercase">
                  <NuxtLink
                    class="hover-underline text-xs text-sand/80"
                    :external="true"
                    target="_blank"
                    to="https://www.instagram.com/threeoryband">
                    Instagram
                  </NuxtLink>
                  <NuxtLink
                    class="hover-underline text-xs text-sand/80"
                    :external="true"
                    target="_blank"
                    to="https://www.youtube.com/@threeoryband">
                    Youtube
                  </NuxtLink>
                </div>
              </ContactInfo>
            </div>
          </div>
          <form class="flex flex-1 flex-col gap-y-3 text-sm font-medium md:basis-1/2">
            <ContactInput placeholder="Name" type="text" />
            <ContactInput placeholder="Email" type="email" />
            <ContactInput placeholder="Phone" type="tel" />
            <textarea
              class="resize-none rounded-sm border border-white/40 bg-gray-900 px-4 py-3 transition-colors focus-visible:border focus-visible:border-white focus-visible:outline-none"
              placeholder="Message"
              rows="5" />
            <button class="rounded-sm bg-orange-500 p-4" type="button">Submit</button>
          </form>
        </div>
      </div>
    </section>
    <button
      aria-label="Scroll To Top"
      class="rounded-full bg-white w-12 h-12 text-black fixed bottom-0 right-0 m-8"
      @click="scrollToTop"
      v-if="!heroSectionIsVisible">
      <Icon name="radix-icons:arrow-up" />
    </button>
    <footer class="bg-gray-900 border-t border-gray-700 footer">
      <div
        class="mx-auto flex max-w-screen-xl flex-col justify-between gap-x-8 gap-y-6 px-4 py-6 text-xs font-medium uppercase text-gray-400 sm:flex-row">
        <p>&copy; Threeory 2024.</p>
        <div class="flex gap-x-4 sm:gap-x-8">
          <NuxtLink class="hover-underline" to="/"> Terms & Conditions </NuxtLink>
          <NuxtLink class="hover-underline" to="/"> Privacy Policy </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import type { VNodeRef } from 'vue';

useSeoMeta({
  title: 'Threeory | Amazing music for all',
  description: 'Amazing music',
});

const artists = [
  {
    image: '/images/artists-alt/talur-devendra-kumar.jpeg',
    instagram: 'https://www.instagram.com/talur_devendra_kumar/',
    name: 'Talur Devendra Kumar',
    role: 'Keyboardist',
  },
  {
    image: '/images/artists-alt/datta-sai-prasa.jpeg',
    instagram: 'https://www.instagram.com/datta_sai/',
    name: 'Datta Sai Prasa',
    role: 'Violinist',
  },
  {
    image: '/images/artists-alt/tarun-vishal.jpeg',
    instagram: 'https://www.instagram.com/tarun_vishal/',
    name: 'Tarun Vishal',
    role: 'Drummer',
  },
  {
    image: '/images/artists-alt/imtiakum.jpeg',
    instagram: 'https://www.instagram.com/imtiakum_vibegroove/',
    name: 'Imtiakum',
    role: 'Bassist',
  },
  {
    image: '/images/artists-alt/sentilong.jpeg',
    instagram: 'https://www.instagram.com/sentialong/',
    name: 'Sentilong Ao',
    role: 'Guitarist',
  },
  {
    image: '/images/artists-alt/syntyche-mongro.jpeg',
    instagram: 'https://www.instagram.com/synth_mongro/',
    name: 'Syntyche Mongro',
    role: 'Female Vocalist',
  },
  {
    image: '/images/artists-alt/akhileshwar-chennu.jpeg',
    instagram: 'https://www.instagram.com/artsofakhil/',
    name: 'Akhileshwar Chennu',
    role: 'Male Vocalist',
  },
  {
    image: '/images/artists-alt/irfan-ahmed-khan.jpeg',
    instagram: 'https://www.instagram.com/irfan_ahmed_khan_sitarist/',
    name: 'Irfan Ahmed Khan',
    role: 'Sitarist',
  },
  {
    image: '/images/artists-alt/pavan-kumar.jpeg',
    instagram: 'https://www.instagram.com/pavantabla/',
    name: 'Pavan Kumar MS',
    role: 'Tablist',
  },
];

const artistsAlt = [
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
    instagram: 'https://www.instagram.com/artsofakhil/',
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

const videos = [
  {
    href: 'https://www.youtube.com/embed/caZWZ2iz3mI?si=-i1ABhfZ3pydkpBo',
    image:
      'https://i.ytimg.com/vi/caZWZ2iz3mI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvLc_2sSKHLlpe2H-Mx2s-6S692A',
    title: 'AR Rahman Medley Mashup Cover Part-2',
  },
  {
    href: 'https://www.youtube.com/embed/SIcsSasiuks?si=aP9g2iwhMU8RV5WW',
    image:
      'https://i.ytimg.com/vi/SIcsSasiuks/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-HBS2ejcCSAq-sdy0jVmglDmPkw',
    title: 'Animal Movie Intro',
  },
  {
    href: 'https://www.youtube.com/embed/wLsBYGHgGhY?si=cucGEOIAW26_cqju',
    image:
      'https://i.ytimg.com/vi/wLsBYGHgGhY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBB336I0xz1-7mbC1qFTvW1-CFk9w',
    title: 'A R Rahman Medley Mashup Cover Part-1',
  },
  {
    href: 'https://www.youtube.com/embed/96aSeIN0Ibw?si=VbSu4h08M0XkPtb8',
    image:
      'https://i.ytimg.com/vi/96aSeIN0Ibw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSg4jPflX-Tq4BQJF7iSiz6DXXhQ',
    title: 'Urvasi Urvasi Cover',
  },
  {
    href: 'https://www.youtube.com/embed/KlhnWkrKGGg?si=Hr9aIJ21ICyik2Cz',
    image:
      'https://i.ytimg.com/vi/KlhnWkrKGGg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLo_ydItd9qJQDjK8xgoWu0EZz_g',
    title: 'Threeory at Out of the Box Hyderabad',
  },
  {
    href: 'https://www.youtube.com/embed/C-gErcZGRpY?si=C2AFEscL6GMHzyYA',
    image:
      'https://i.ytimg.com/vi/C-gErcZGRpY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgcVzqAVGZTQV-9wz_-rgLCKjtsg',
    title: 'Iddarammayilatho Violin Song Cover',
  },
  {
    href: 'https://www.youtube.com/embed/pSfAcU6VG1A?si=Kpymhw0xPl_X6B7c',
    image:
      'https://i.ytimg.com/vi/pSfAcU6VG1A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbXpkyAlK1Eoa-ZrQA_-g9Pry85w',
    title: 'Afreen Cover by Nusrat Fateh Ali Khan',
  },
  {
    href: 'https://www.youtube.com/embed/REU57FLy9nU?si=ezhWAlfghXYEduN-',
    image:
      'https://i.ytimg.com/vi/REU57FLy9nU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvnZcyx6u-NBhkRi8p37EfR6mKdw',
    title: 'Love Me Now Cover',
  },
  {
    href: 'https://www.youtube.com/embed/pVDz5ZPLkbA?si=gQZ87Wk6doZs3J9d',
    image:
      'https://i.ytimg.com/vi/pVDz5ZPLkbA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzZXUuls59eQWcSCd4OEtgRPMpTg',
    title: 'Shape Of You Cover',
  },
];
const images = [
  '/images/music_band1.jpg',
  '/images/music_band2.jpg',
  '/images/music_band1.jpg',
  '/images/music_band2.jpg',
  '/images/music_band1.jpg',
  '/images/music_band2.jpg',
  '/images/music_band1.jpg',
  '/images/music_band2.jpg',
  '/images/music_band1.jpg',
];

const merchandiseData = [
  {
    category: '',
    image: '',
    name: 'Merchandise Item 1',
    price: 1999,
  },
  {
    category: '',
    image: '',
    name: 'Merchandise Item 2',
    price: 200,
  },
  {
    category: '',
    image: '',
    name: 'Merchandise Item 3',
    price: 1299,
  },
  {
    category: '',
    image: '',
    name: 'Merchandise Item 4',
    price: 2000,
  },
  {
    category: '',
    image: '',
    name: 'Merchandise Item 5',
    price: 1500,
  },
  {
    category: '',
    image: '',
    name: 'Merchandise Item 6',
    price: 699,
  },
];

const headerNavRef = ref(null);
const isHeaderNavIsVisible = useElementVisibility(headerNavRef);
const mobileLogoRef = ref(null);
const isMobileLogoVisible = useElementVisibility(mobileLogoRef);
const heroSection = ref(null);
const heroSectionIsVisible = useElementVisibility(heroSection);

function onElementVisibility(state: boolean) {
  isHeaderNavIsVisible.value = state;
}

const { scrollToAnchor, scrollToTop } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    },
  },
});

const scrollTo = (id: string) => {
  scrollToAnchor(id);
};

import axios from 'axios';

defineProps<{
  class: any;
}>();
const API_KEY = 'AIzaSyCOxdYNqZiLBb-ieJ5GjpJy0ZXD2iuyM7U';
const CALENDAR_ID = 'madhusudhan.vinta@gmail.com';

const result: any = ref();

onMounted(() => {
  axios
    .get(
      `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?eventTypes=default&key=${API_KEY}`
    )
    .then((resp: any) => {
      result.value = resp.data;
    });
});
</script>

<style lang="scss" scoped>
.main-section {
  min-height: 100vh !important;
}

.header-nav {
  li {
    @apply list-none uppercase cursor-pointer font-bold text-sm;
  }
}
.landing-nav {
  border: solid 2px #fafafa;
  background: rgba(0, 0, 0, 0.4);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
footer {
  min-height: 400px;
  background: url(/images/footerbg.png) no-repeat;
  background-size: 50% auto;
  background-position: center bottom;
}
</style>
