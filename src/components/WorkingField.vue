<template>
	<div id="tovarBlock"
			 class="relative h-[500px] w-[525px] overflow-hidden rounded-xl border dark:border-[#4d4d4d] dark:bg-[#262626] border-neutral-400 bg-neutral-100">
		<table @dragover.prevent>
			<tr v-for="(_, rowIndex) in 5"
					:key="rowIndex">
				<td v-for="(_, colIndex) in 5"
						:key="colIndex"
						:class="{
							'drag-over': dragOverIndex === (rowIndex * 5 + colIndex),
							dragging: draggingIndex === (rowIndex * 5 + colIndex)
						}"
						class="h-[100px] w-[105px] cursor-pointer border dark:border-[#4d4d4d] border-neutral-400"
						draggable="true"
						@dragover.prevent
						@drop="onDrop(rowIndex * 5 + colIndex)"
						@dragenter="onDragEnter(rowIndex * 5 + colIndex)"
						@dragleave="onDragLeave(rowIndex * 5 + colIndex)"
						@dragstart="startDrag(rowIndex * 5 + colIndex)"
						@dragend="endDrag">
					<TovarItemBlock v-if="items[rowIndex * 5 + colIndex]"
													:item="items[rowIndex * 5 + colIndex]"
													:visibleInfo="visibleInfo"
													:activeItem="activeItem"
													:closeInfo="closeInfo"
													:openInfo="() => onOpenInfo(items[rowIndex * 5 + colIndex])"
													@deleteItem="deleteItem" />
				</td>
			</tr>
		</table>
	</div>
</template>

<script setup>
import TovarItemBlock from '@/components/TovarItemBlock.vue'
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
	items: Array
})

const items = ref(props.items)
const visibleInfo = ref(false)
const activeItem = ref({})
const draggingIndex = ref(null)
const dragOverIndex = ref(null)

const onOpenInfo = (item) => {
	activeItem.value = item
	visibleInfo.value = true
}

const closeInfo = () => {
	visibleInfo.value = false
	activeItem.value = {}
}

const startDrag = (index) => {
	const item = items.value[index]
	if (item) {
		draggingIndex.value = index
		event.dataTransfer.setData('itemID', item.id)
		event.target.classList.add('dragging')
	}
}

const endDrag = () => {
	draggingIndex.value = null
	dragOverIndex.value = null
	document.querySelectorAll('.drag-over').forEach((el) => el.classList.remove('drag-over'))
	document.querySelector('.dragging')?.classList.remove('dragging')
}

const onDrop = (dropIndex) => {
	const itemID = event.dataTransfer.getData('itemID')
	const draggedItemIndex = items.value.findIndex((item) => item && item.id == itemID)
	if (draggedItemIndex !== -1 && draggedItemIndex !== dropIndex && !items.value[dropIndex]) {
		items.value[dropIndex] = items.value[draggedItemIndex]
		items.value[draggedItemIndex] = null
	}
	endDrag()
}

const onDragEnter = (index) => {
	if (draggingIndex.value !== null && draggingIndex.value !== index) {
		dragOverIndex.value = index
		event.target.classList.add('drag-over')
	}
}

const onDragLeave = (index) => {
	if (dragOverIndex.value === index) {
		dragOverIndex.value = null
		event.target.classList.remove('drag-over')
	}
}

const deleteItem = (count, itemId) => {
	console.log(itemId);
	const itemIndex = items.value.findIndex(item => item && item.id === itemId)
	if (itemIndex !== -1) {
		items.value[itemIndex].count -= count
		if (items.value[itemIndex].count <= 0) {
			items.value[itemIndex] = null
		}
	}
}

watch(
	items,
	(newItems) => {
		localStorage.setItem('tovarItems', JSON.stringify(newItems))
	},
	{ deep: true }
)

onMounted(() => {
	items.value = props.items
})
</script>

<style scoped>
.dragging {
	opacity: 0.4;
}

.dark .drag-over {
	background-color: #333;
}

.drag-over {
	background-color: #c2c2c2;
}
</style>