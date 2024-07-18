<template>
	<div class="bg-skeleton"></div>
</template>

<script setup>
defineProps({
	height: { type: String },
	width: { type: String },
	borderRadius: { type: String }
})
</script>

<style scoped>
.bg-skeleton {
	width: v-bind(width);
	height: v-bind(height);
	border-radius: v-bind(borderRadius);
	background: linear-gradient(60deg, #d6d6d6 0%, #ebebeb 10%, #ebebeb 15%, #ebebeb 20%, #d6d6d6 100%);
	background-size: 200% 100%;
	animation: bgAnimation 1.2s linear infinite;
}

.dark .bg-skeleton {
	width: v-bind(width);
	height: v-bind(height);
	border-radius: v-bind(borderRadius);
	background: linear-gradient(60deg, #333 0%, #3c3c3c 10%, #444 15%, #3c3c3c 20%, #333 100%);
	background-size: 200% 100%;
	animation: bgAnimation 1.2s linear infinite;
}


@keyframes bgAnimation {
	0% {
		background-position: 50% 0;
	}

	100% {
		background-position: -150% 0;
	}
}
</style>