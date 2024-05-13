<template>
  <nav class="main-nav fixed w-full top-0">
    <ul class="flex flex-row justify-between font-bold items-center">
      <li :class="{ active: activeSection === 'tours-events' }" @click="scrollTo('#tours-events')">
        Tours & Events
      </li>
      <li :class="{ active: activeSection === 'artists' }" @click="scrollTo('#artists')">
        Artists
      </li>
      <li :class="{ active: activeSection === 'home' }" @click="scrollTo('#home')">Home/Logo</li>
      <li :class="{ active: activeSection === 'gallery' }" @click="scrollTo('#gallery')">
        Gallery
      </li>
      <li :class="{ active: activeSection === 'about' }" @click="scrollTo('#about')">About</li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
const { y } = useScroll(window);
const { scrollToAnchor, scrollToTop } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    },
  },
});
const sections = ['tours-events', 'artists', 'home', 'gallery', 'about'];

const activeSection = computed(() => {
  let active = 'home';
  sections.forEach((sectionId) => {
    const el = document?.getElementById(sectionId);
    if (el) {
      const { top, height } = el.getBoundingClientRect();
      const offsetTop = top + window.scrollY;
      if (y.value >= offsetTop && y.value < offsetTop + height) {
        active = sectionId;
      }
    }
  });
  return active;
});
const scrollTo = (id) => {
  scrollToAnchor(id);
};
</script>
<style lang="scss" scoped>
.main-nav {
  @apply text-white;
  min-height: 50px;
  ul {
    @apply px-6;
    height: 50px;
    li {
      @apply cursor-pointer;
    }
  }
  .active {
    @apply underline;
  }
}
</style>
