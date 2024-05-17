<script lang="ts" setup>
interface Props {
  icon: string;
  name: string;
}

defineProps<Props>();
</script>

<template>
  <div class="flex flex-col gap-2 border-l-2 border-orange-500 pl-4">
    <div class="flex items-center gap-x-2 text-sm font-medium tracking-wider text-orange-500">
      <Icon class="text-base" :name="icon" />
      <h3 class="font-primary uppercase">
        {{ name }}
      </h3>
    </div>
    <div class="text-sm font-medium">
      <slot />
    </div>
  </div>
</template>
