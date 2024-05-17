<template>
  <nav
    :class="[
      'main-nav top-0 fixed w-full h-16 z-50 border-b border-white/10 px-4 transition-all duration-300',
      hidden ? 'sm:-top-36' : 'sm:top-0',
    ]">
    <ul class="flex justify-around font-bold items-center h-full max-w-screen-xl mx-auto">
      <li :class="{ active: activeSection === 'shows' }" @click="scrollTo('#shows')">Shows</li>
      <li :class="{ active: activeSection === 'artists' }" @click="scrollTo('#artists')">
        Artists
      </li>
      <div class="h-full">
        <NuxtImg
          alt="Three Logo"
          class="h-full max-h-full w-auto p-1 md:h-24 md:max-h-none md:p-0"
          src="/images/logo-white.webp"
          @click="scrollTo('#home')" />
      </div>
      <li :class="{ active: activeSection === 'gallery' }" @click="scrollTo('#gallery')">
        Gallery
      </li>
      <li :class="{ active: activeSection === 'about' }" @click="scrollTo('#about')">About</li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  hidden: boolean;
}

defineProps<Props>();

const { y } = useScroll(window);
const { scrollToAnchor, scrollToTop } = useAnchorScroll({
  scrollOptions: {
    behavior: 'smooth',
    offsetTop: -80,
  },
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
    },
  },
});
const sections = ['shows', 'artists', 'home', 'gallery', 'about'];

const activeSection = computed(() => {
  let active = 'home';
  sections.forEach((sectionId) => {
    const el = document?.getElementById(sectionId);
    if (el) {
      const { top, height } = el.getBoundingClientRect();
      const offsetTop = top + window.scrollY - 80;
      if (y.value >= offsetTop && y.value < offsetTop + height) {
        active = sectionId;
      }
    }
  });
  return active;
});
const scrollTo = (id: string) => {
  scrollToAnchor(id);
};
</script>

<style lang="scss" scoped>
.main-nav {
  background: rgba(0, 0, 0, 0.8);
  border: solid 1px #000000;
  ul {
    li {
      @apply cursor-pointer transition-colors uppercase text-xs sm:text-sm;
    }
  }
  .active {
    @apply text-orange-500;
  }
}
</style>
