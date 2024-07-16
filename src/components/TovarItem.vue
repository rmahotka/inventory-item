<template>
  <div class="relative flex h-full w-full items-center justify-center">
    <div class="bg-item h-12 w-12"></div>
    <p
      class="absolute bottom-0 right-0 h-4 w-4 rounded-tl-md border border-[#4d4d4d] text-center text-[10px] text-white opacity-40"
    >
      {{ item.count }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object
  }
})
</script>

<style scoped>
.bg-item {
  position: relative;
  width: 48px;
  height: 48px;
  background: v-bind(item.color);
}

.bg-item::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  filter: blur(8px);
  opacity: 0.6;
  z-index: 1;
}

.bg-item::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  box-shadow: inset 0 0 0 3000px rgba(255, 255, 255, 0.274);
  filter: blur(1px);
  opacity: 0.9;
  left: 6px;
  top: -6px;
  z-index: 2;
}
</style>
