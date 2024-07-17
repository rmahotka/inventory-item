<template>
  <div
    id="tovarBlock"
    class="relative h-[500px] w-[525px] overflow-hidden rounded-xl border border-[#4d4d4d] bg-[#262626]"
  >
    <table @dragover.prevent>
      <tr v-for="row in 5" :key="row">
        <td
          v-for="col in 5"
          :key="col"
          :class="{
            'drag-over': dragOverIndex === (row - 1) * 5 + (col - 1),
            dragging: draggingIndex === (row - 1) * 5 + (col - 1)
          }"
          class="h-[100px] w-[105px] cursor-pointer border border-[#4d4d4d]"
          draggable="true"
          @dragover.prevent
          @drop="onDrop((row - 1) * 5 + (col - 1))"
          @dragenter="onDragEnter((row - 1) * 5 + (col - 1))"
          @dragleave="onDragLeave((row - 1) * 5 + (col - 1))"
          @dragstart="startDrag((row - 1) * 5 + (col - 1))"
          @dragend="endDrag"
        >
          <TovarItemBlock
            v-if="items[(row - 1) * 5 + (col - 1)]"
            :item="items[(row - 1) * 5 + (col - 1)]"
            :visibleInfo="visibleInfo"
            :activeItem="activeItem"
            :closeInfo="closeInfo"
            :openInfo="() => onOpenInfo(items[(row - 1) * 5 + (col - 1)])"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import TovarItemBlock from '@/components/TovarItemBlock.vue'
import { ref, onMounted, watch } from 'vue'

const defaultItems = new Array(25).fill(null).map((_, index) => {
  if (index === 0) return { id: 1, color: '#7faa65', count: 4 }
  if (index === 1) return { id: 2, color: '#aa9765', count: 2 }
  if (index === 2) return { id: 3, color: '#656caa', count: 5 }
  return null
})

const loadItems = () => JSON.parse(localStorage.getItem('tovarItems')) || defaultItems

const items = ref(loadItems())
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

watch(
  items,
  (newItems) => {
    localStorage.setItem('tovarItems', JSON.stringify(newItems))
  },
  { deep: true }
)

onMounted(() => {
  items.value = loadItems()
})
</script>

<style scoped>
.dragging {
  opacity: 0.4;
}

.drag-over {
  background-color: #333;
}
</style>
