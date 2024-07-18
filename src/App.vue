<template>
	<div class="flex h-screen items-center justify-center bg-[#1D1D1D]">
		<div class="mx-auto w-[787px] py-8">
			<NewItem @addNewItem="addNewItem" />
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
import { ref, watch } from 'vue';


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