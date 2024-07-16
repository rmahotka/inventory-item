<template>
  <div
    class="flex h-[500px] w-[236px] flex-col items-center justify-center rounded-xl border border-[#4D4D4D] bg-[#262626] px-[14px] pb-6 pt-[18px]"
  >
    <img src="@/assets/img/ImgBlur.png" alt="" class="h-[240px] w-[208px]" />
    <SkeletonItem width="190px" height="26px" borderRadius="8px" class="mt-5" />
    <div class="my-6 flex flex-col items-center gap-4">
      <SkeletonItem width="155px" height="10px" borderRadius="4px" />
      <SkeletonItem width="190px" height="10px" borderRadius="4px" />
      <SkeletonItem width="170px" height="10px" borderRadius="4px" />
      <SkeletonItem width="160px" height="10px" borderRadius="4px" />
      <SkeletonItem width="140px" height="10px" borderRadius="4px" />
    </div>
    <SkeletonItem width="80px" height="10px" borderRadius="4px" />
  </div>
</template>

<script setup>
import SkeletonItem from '@/components/SkeletonItem.vue'
</script>

<style scoped></style>
