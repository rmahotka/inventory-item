<template>
	<div
			 class="relative flex rounded-xl border dark:border-[#4D4D4D] dark:bg-[#262626] p-[18px] border-neutral-400 bg-neutral-100">
		<SkeletonItem width="699px"
									height="36px"
									borderRadius="12px" />
		<CloseIcon class="absolute right-2 top-2 cursor-pointer fill-black dark:fill-white" />
	</div>
</template>

<script setup>
import SkeletonItem from '@/components/SkeletonItem.vue'
import CloseIcon from '@/components/icon/CloseIcon.vue'
</script>

<style scoped></style>