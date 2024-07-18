<template>

	<button @click="isOpen = true"
					class="bg-[#262626] text-white py-2 px-5 rounded-lg border transition border-[#4d4d4d] hover:bg-[#444] mb-6">
		Добавить товар
	</button>
	<Teleport to="body">
		<transition>
			<div v-if="isOpen"
					 class="fixed inset-0 bg-black bg-opacity-50 z-40">
				<div
						 class="fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-[#262626] border-[#4d4d4d] border rounded-xl">
					<div class="relative p-7 flex flex-col gap-2">
						<CloseIcon @click="isOpen = false"
											 class="absolute top-1 right-1 cursor-pointer" />
						<div class="flex flex-col">
							<label for="count"
										 class="text-white opacity-40">Количество</label>
							<input type="number"
										 placeholder="Количество"
										 id="count"
										 v-model="count"
										 class="h-9 w-[210px] rounded-[4px] border border-[#4d4d4d] bg-[#262626] pl-3 text-sm font-medium text-white opacity-40">
						</div>
						<div class="
								 flex
								 flex-col">
							<label for="count"
										 class="text-white opacity-40">Цвет</label>
							<input type="text"
										 placeholder="Цвет"
										 id="count"
										 v-model="color"
										 class="h-9 w-[210px] rounded-[4px] border border-[#4d4d4d] bg-[#262626] pl-3 text-sm font-medium text-white opacity-40">
						</div>
						<button @click="addNewItem"
										class="bg-[#7faa65] rounded-[4px] py-1 text-[#262626] hover:bg-[#7fb161]">
							Добавить
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