<template>
	<Teleport to="#tovarBlock">
		<transition name="show">
			<div v-show="isVisible"
					 class="absolute right-0 top-0 z-10 block">
				<div
						 class="dark:bg-[#262626e6] bg-neutral-100 relative flex h-[500px] w-[250px] flex-col items-center rounded-r-xl border-l dark:border-[#4d4d4d] px-[15px] border-neutral-400">
					<CloseIcon @click="closeBlock"
										 class="absolute right-2 top-2 cursor-pointer fill-black dark:fill-white" />
					<TovarItem width="115px"
										 height="115px"
										 :color="props.item.color"
										 position="15px"
										 class="mt-[70px]" />
					<div class="mt-[30px] border-y border-[#4d4d4d] pb-6 pt-3">
						<SkeletonItem width="211px"
													height="30px"
													borderRadius="8px" />
						<div class="mt-6 flex flex-col items-center gap-4">
							<SkeletonItem width="211px"
														height="10px"
														borderRadius="4px" />
							<SkeletonItem width="211px"
														height="10px"
														borderRadius="4px" />
							<SkeletonItem width="211px"
														height="10px"
														borderRadius="4px" />
							<SkeletonItem width="180px"
														height="10px"
														borderRadius="4px" />
							<SkeletonItem width="80px"
														height="10px"
														borderRadius="4px" />
						</div>
					</div>
					<button @click="confirmDel = true"
									v-if="!confirmDel"
									class="input-style my-[18px] h-[39px] w-[220px] rounded-lg bg-[#fa7272] text-white transition hover:bg-[#f88]">
						Удалить предмет
					</button>
					<transition name="modalDel">
						<div v-if="confirmDel"
								 class="absolute bottom-0 right-0 flex w-[250px] flex-col items-center border-l border-t border-[#4d4d4d] dark:bg-[#262626] py-5 bg-neutral-100">
							<input v-model="countDel"
										 type="number"
										 placeholder="Введите количество"
										 class="mb-5 h-10 w-[210px] rounded-[4px] border dark:border-[#4d4d4d] dark:bg-[#262626] pl-3 text-sm font-medium dark:text-white dark:opacity-40 text-black" />
							<div class="flex gap-[10px]">
								<button @click="confirmDel = false"
												class="hover-btn-false w-[88px] rounded-lg bg-white py-2 text-sm text-[#2d2d2d] transition border-neutral-300 border dark:border-0">
									Отмена
								</button>
								<button @click="deleteItem"
												class="hover-btn-true w-[112px] rounded-lg bg-[#fa7272] py-2 text-sm text-white transition hover:shadow-[#fa7272]">
									Подтвердить
								</button>
							</div>
						</div>
					</transition>
				</div>
			</div>
		</transition>
	</Teleport>
</template>

<script setup>
import CloseIcon from '@/components/icon/CloseIcon.vue'
import TovarItem from '@/components/TovarItem.vue'
import SkeletonItem from '@/components/SkeletonItem.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
	item: { type: Object },
	onDelite: { type: Function }
})

const emit = defineEmits(['closeBlock', 'deleteItem'])

const countDel = ref(null)
const isVisible = ref(false)
const confirmDel = ref(false)

const deleteItem = () => {
	emit('deleteItem', countDel.value, props.item.id)
	countDel.value = ''
	confirmDel.value = false
}

const closeBlock = () => {
	isVisible.value = false
	setTimeout(() => {
		emit('closeBlock')
	}, 300)
}

onMounted(() => {
	isVisible.value = true
})

onBeforeUnmount(() => {
	isVisible.value = false
})
</script>

<style scoped>
.hover-btn-true:hover {
	box-shadow: 0 1px 11px 0px #fa7272;
}

.hover-btn-false:hover {
	box-shadow: 0 1px 11px 0px #b3b3b3;
}

.dark .hover-btn-false:hover {
	box-shadow: 0 1px 11px 0px #ffffff;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
}

.show-enter-active,
.show-leave-active {
	transition: transform 0.3s ease;
}

.show-enter-from,
.show-leave-to {
	transform: translateX(100%);
}

.modalDel-enter-active,
.modalDel-leave-active {
	transition: transform 0.15s ease;
}

.modalDel-enter-from,
.modalDel-leave-to {
	transform: translateY(100%);
}
</style>