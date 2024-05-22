<script lang="ts" setup>
const drawerVisible = ref(false);

const { scrollToAnchor } = useAnchorScroll({
  scrollOptions: {
    behavior: 'smooth',
    offsetTop: -62,
  },
});

function closeDrawer() {
  drawerVisible.value = false;
}

function openDrawer() {
  drawerVisible.value = true;
}

const scrollTo = (id: string) => {
  closeDrawer();
  scrollToAnchor(id);
};
</script>

<template>
  <div class="sm:hidden mobile-nav">
    <button aria-label="Toggle Menu" class="sm:hidden text-2xl p-1" @click="openDrawer">
      <Icon name="heroicons-outline:menu" />
    </button>
    <div
      :class="[
        'absolute top-0 -left-1 overflow-hidden flex flex-col h-dvh border-r border-r-gray-900 bg-gray-950 z-[100] transition-all duration-300 ease-linear max-w-96',
        drawerVisible ? 'w-full' : 'w-0',
      ]">
      <div class="flex justify-between items-start border-b p-6 border-b-gray-900 bg-gray-900">
        <NuxtImg
          alt="Three Logo"
          class="max-w-20 w-full h-auto"
          src="/images/logo-white.webp"
          @click="scrollTo('#home')" />
        <button aria-label="Toggle Menu" class="text-3xl text-gray-200" @click="closeDrawer">
          <Icon name="iconamoon:close-circle-1-thin" />
        </button>
      </div>
      <button class="mobile-nav_item" @click="scrollTo('#shows')">Shows</button>
      <button class="mobile-nav_item" @click="scrollTo('#artists')">Artists</button>
      <button class="mobile-nav_item" @click="scrollTo('#gallery')">Gallery</button>
      <button class="mobile-nav_item" @click="scrollTo('#about')">About</button>
    </div>
    <div
      :class="[
        'absolute -left-1 -right-1 top-0 bg-black/75 z-[99] delay-200 transition-opacity',
        drawerVisible ? 'h-dvh opacity-100' : 'h-0 opacity-0',
      ]"
      @click="closeDrawer"></div>
  </div>
</template>

<style lang="scss" scoped>
.mobile-nav {
  .mobile-nav_item {
    @apply p-6 w-full flex justify-between items-center text-left text-gray-400 border-b border-b-gray-900 font-medium uppercase text-sm;

    &::after {
      @apply content-['→'] text-gray-800;
    }
  }
}
</style>
