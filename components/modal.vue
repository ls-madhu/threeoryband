<template>
  <transition name="modal-fade">
    <div
      class="fixed top-0 right-0 bottom-0 left-0 z-50 bg-black/85 flex justify-center items-center"
      @click="$emit('close')">
      <div class="shadow-md p-8 max-w-[1024px] w-full" role="dialog">
        <slot />
      </div>
    </div>
  </transition>
</template>

<style>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
