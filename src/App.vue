<template>
	<div class="flex h-screen items-center justify-center dark:bg-[#1D1D1D] bg-neutral-50">
		<div class="mx-auto w-[787px] py-8">
			<div class="flex justify-between mb-6">
				<NewItem @addNewItem="addNewItem" />
				<button @click="toggleDark()"
								class="dark:bg-[#262626] dark:text-white bg-neutral-100 text-black rounded-lg border transition dark:border-[#4d4d4d] border-neutral-400 hover:dark:bg-[#444] p-3 hover:bg-neutral-200">
					<component :is="iconTheme" />
				</button>
			</div>
			<div class="mb-6 flex gap-6">
				<AsideMenu />
				<WorkingField :items="items" />
			</div>
			<FooterItem />
		</div>
	</div>
</template>

<script setup>
import AsideMenu from '@/components/AsideMenu.vue'
import WorkingField from '@/components/WorkingField.vue'
import FooterItem from '@/components/FooterItem.vue'
import NewItem from '@/components/NewItem.vue';
import SunIcon from '@/components/icon/SunIcon.vue'
import MoonIcon from '@/components/icon/MoonIcon.vue'
import { computed, ref, watch } from 'vue';
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const iconTheme = computed(() => {
	return isDark.value ? SunIcon : MoonIcon
})

const items = ref([])

const addNewItem = (count, color) => {
	const maxId = items.value.reduce((max, item) => item && item.id > max ? item.id : max, 0);
	const newId = maxId + 1;

	const newItem = {
		id: newId,
		color,
		count
	};

	items.value.push(newItem);
};

const loadItems = () => JSON.parse(localStorage.getItem('tovarItems')) || [];

items.value = loadItems();

watch(items, (newItems) => {
	localStorage.setItem('tovarItems', JSON.stringify(newItems));
}, { deep: true });
</script>

<style scoped></style>