<template>
  <div>
    <div
      class="cursor-pointer"
      data-aos="fade-up"
      data-aos-duration="500"
      target="_blank"
      :href="href"
      @click="openModal">
      <NuxtImg class="rounded-md object-cover w-full border border-white/[0.1]" :src="image" />
      <h3 class="font-semibold text-sm line-clamp-1 p-1">{{ title }}</h3>
    </div>
    <Modal @close="closeModal" v-show="isModalVisible">
      <div ref="video">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="w-full aspect-video rounded-md"
          frameborder="0"
          referrerpolicy="strict-origin-when-cross-origin"
          :src="href"></iframe>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  href: string;
  image: string;
  title: string;
};

defineProps<Props>();

const isModalVisible = ref(false);
const video = ref<HTMLElement>();

function closeModal() {
  stopVideo(video.value!);
  isModalVisible.value = false;
  document.body.classList.remove('modal-open');
}

function openModal() {
  isModalVisible.value = true;
  document.body.classList.add('modal-open');
}

function stopVideo(element: HTMLElement) {
  const iframe = element.querySelector('iframe');
  const video = element.querySelector('video');

  if (iframe) {
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
  if (video) {
    video.pause();
  }
}
</script>
