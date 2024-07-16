<template>
  <div class="h-[500px] w-[525px] overflow-hidden rounded-xl border border-[#4d4d4d] bg-[#262626]">
    <table>
      <tr v-for="row in 5" :key="row">
        <td
          v-for="col in 5"
          :key="col"
          class="h-[100px] w-[105px] cursor-pointer border border-[#4d4d4d]"
        >
          <TovarItem
            v-if="items[(row - 1) * 5 + (col - 1)]"
            :item="items[(row - 1) * 5 + (col - 1)]"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import TovarItem from '@/components/TovarItem.vue'
import { ref } from 'vue'

const items = ref([
  { id: 1, color: '#7faa65', count: 4 },
  { id: 2, color: '#aa9765', count: 2 },
  { id: 3, color: '#656caa', count: 5 }
])
</script>

<style scoped></style>
