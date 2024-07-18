<template>
	<button @click="isOpen = true"
					class="dark:bg-[#262626] dark:text-white text-[#262626] py-2 px-5 rounded-lg border transition bg-neutral-100 dark:border-[#4d4d4d] border-neutral-400 dark:hover:bg-[#444] hover:bg-neutral-200">
		{{ $t('addItem') }}
	</button>
	<Teleport to="body">
		<transition>
			<div v-if="isOpen"
					 class="fixed inset-0 bg-black bg-opacity-50 z-40">
				<div
						 class="fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 dark:bg-[#262626] dark:border-[#4d4d4d] border rounded-xl border-neutral-400 bg-neutral-100">
					<div class="relative p-7 flex flex-col gap-2">
						<CloseIcon @click="isOpen = false"
											 class="absolute top-1 right-1 cursor-pointer  fill-black dark:fill-white" />
						<input type="number"
									 :placeholder="$t('count')"
									 id="count"
									 v-model="count"
									 class="h-9 w-[210px] rounded-[4px] border dark:border-[#4d4d4d] dark:bg-[#262626] pl-3 text-sm font-medium dark:text-white dark:opacity-40 text-black">
						<input type="text"
									 :placeholder="$t('color')"
									 id="count"
									 v-model="color"
									 class="h-9 w-[210px] rounded-[4px] border dark:border-[#4d4d4d] dark:bg-[#262626] pl-3 text-sm font-medium dark:text-white dark:opacity-40 text-black">
						<button @click="addNewItem"
										class="bg-[#7faa65] rounded-[4px] py-1 datk:text-[#262626] text-neutral-50 hover:bg-[#7fb161]">
							{{ $t('addItem') }}
						</button>
					</div>
				</div>
			</div>
		</transition>
	</Teleport>
</template>

<script setup>
import { ref } from 'vue';
import CloseIcon from '@/components/icon/CloseIcon.vue';

const isOpen = ref(false)
const count = ref(null)
const color = ref(null)

const emit = defineEmits(['addNewItem'])

const addNewItem = () => {
	emit('addNewItem', count.value, color.value)
	count.value = ''
	color.value = ''
	isOpen.value = false
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>