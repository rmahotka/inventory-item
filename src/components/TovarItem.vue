<template>
  <div class="bg-item h-12 w-12"></div>
</template>

<script setup>
defineProps({
  width: { type: String },
  height: { type: String },
  color: { type: String },
  position: { type: String }
})
</script>

<style scoped>
.bg-item {
  position: relative;
  width: v-bind(width);
  height: v-bind(height);
  background: v-bind(color);
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
  left: v-bind(position);
  bottom: v-bind(position);
  z-index: 2;
}
</style>
