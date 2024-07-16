<template>
  <div class="flex h-screen items-center justify-center bg-[#1D1D1D]">
    <div class="mx-auto w-[787px] py-8">
      <div class="mb-6 flex gap-6">
        <AsideMenu />
        <WorkingField />
      </div>
      <FooterItem />
    </div>
  </div>
</template>

<script setup>
import AsideMenu from '@/components/AsideMenu.vue'
import WorkingField from '@/components/WorkingField.vue'
import FooterItem from '@/components/FooterItem.vue'
</script>

<style lang="scss" scoped></style>
