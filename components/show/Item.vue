<template>
  <article
    class="flex flex-col gap-y-3 md:flex-row items-start w-full border-b border-b-white/15 py-5"
    data-aos="fade-up"
    data-aos-duration="500">
    <time
      class="font-bold text-sm text-orange-400 leading-normal tracking-wide whitespace-nowrap"
      datetime=""
      >SEP 13 FRI</time
    >
    <div class="flex flex-col gap-1 md:gap-2 grow lg:flex-row">
      <div class="text-lg font-medium leading-normal md:mx-8">
        Tabularasa, Alfresco Bar, Taj Krishna
      </div>
      <div class="leading-normal md:mx-8">Banjara Hills, Hyderabad</div>
    </div>
    <div class="flex justify-center items-center gap-4">
      <NuxtLink
        class="flex items-center gap-1 rounded-full px-3 py-1 border border-white transition-colors hover:text-gray-900 hover:bg-white"
        :external="true"
        target="_blank"
        to="/">
        <span class="text-xs whitespace-nowrap">Book Tickets</span>
        <Icon name="ri:external-link-fill" size="0.75em" />
      </NuxtLink>
      <button class="text-xs whitespace-nowrap">Know More</button>
    </div>
  </article>
</template>
