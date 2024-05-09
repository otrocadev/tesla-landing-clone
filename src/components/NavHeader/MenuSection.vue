<template>
  <div class="bg-white flex px-32 py-10 justify-center shadow">
    <div class="flex flex-wrap justify-start basis-auto">
      <a
        :href="element.url"
        class="flex flex-col min-w-52 max-w-60 text-center transition-transform duration-500 hover:scale-110"
        v-for="element in props.cathegoryInfo.elements"
        :key="element.name"
      >
        <img class="max-w-56" :src="element.img" alt="" />
        <h4 class="text-lg">
          {{ element.name }}
        </h4>
      </a>
    </div>
    <ul class="flex flex-col text-lg ml-10">
      <li
        class="transition-all duration-500 hover:text-red-500 hover:scale-110 hover:underline"
        v-for="contentElement in props.cathegoryInfo.related"
        :key="contentElement.name"
      >
        <a :href="contentElement.url">{{ contentElement.name }}</a>
      </li>
    </ul>
    <div class="flex gap-12">
      <ul v-for="column in props.cathegoryInfo.discober" :key="column.name">
        <li class="text-slate-600 pb-4 text-xl">{{ column.name }}</li>
        <li>
          <ul>
            <li
              class="transition-all duration-500 hover:text-red-500 hover:scale-110 hover:underline"
              v-for="element in column.links"
              :key="element.name"
            >
              <a :href="element.url">
                {{ element.name }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cathegoryInfo: Object,
});
</script>
