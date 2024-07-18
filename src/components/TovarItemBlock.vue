<template>
	<ItemInfo v-if="visibleInfo && activeItem.id === item.id"
						:item="item"
						@closeBlock="closeInfo"
						@deleteItem="deleteItem" />
	<div @click="openInfo"
			 class="relative flex h-full w-full items-center justify-center transition duration-150 dark:hover:bg-[#2f2f2f] hover:bg-neutral-200">
		<TovarItem width="48px"
							 height="48px"
							 :color="item.color"
							 position="6px" />
		<p
			 class="absolute bottom-0 right-0 h-4 w-4 rounded-tl-md border border-[#4d4d4d] bg-[#262626] text-center text-[10px] text-white opacity-40">
			{{ item.count }}
		</p>
	</div>
</template>

<script setup>
import ItemInfo from '@/components/ItemInfo.vue'
import TovarItem from '@/components/TovarItem.vue'

defineProps({
	item: {
		type: Object
	},
	visibleInfo: {
		type: Boolean,
		required: true
	},
	activeItem: {
		type: Object,
		required: true
	},
	closeInfo: {
		type: Function,
		required: true
	},
	openInfo: {
		type: Function,
		required: true
	},
})

const emit = defineEmits(['deleteItem'])

const deleteItem = (count, id) => {
	emit('deleteItem', count, id)
}
</script>

<style scoped></style>