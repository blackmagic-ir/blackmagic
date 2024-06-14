<template>
  <div class="flex-space-between">
    <div class="logo">
      <img src="/assets/images/logovue.png" alt="logo.png" />
      <h1 class="font">Black Magic</h1>
    </div>
    <div style="align-self: flex-end">
      <ul class="content">
        <button
          class="list-item font"
          :class="{ active: currentTab === item.id }"
          v-for="item in menu"
          :key="item.id"
          @click="clickTab(item.id, item.name)"
        >
          {{ item.name }}
        </button>
      </ul>
    </div>
    <div class="buttons">
      <button class="btn-dark flat font login">login</button>
      <Icon
        name="mdi:chart-timeline-variant-shimmer"
        size="28"
        class="btn-dark flat icon"
      />
      <button class="btn-dark flat github">
        <p class="font">github</p>
        <Icon name="mdi:github" size="20" />
      </button>
    </div>
  </div>
  <ListDetail :data="tabDetail" />
</template>

<script setup lang="ts">
const showDetail = ref(false);
const currentTab = ref();
const tabDetail = ref();
const menu = ref([]);
fetch("/jsons/menus.json")
  .then((res) => res.json())
  .then((res) => {
    menu.value = res.menuList;
    tabDetail.value = menu.value[0]?.name;
    currentTab.value = menu.value[0]?.id;
  });
function clickTab(id: number, name: string) {
  currentTab.value = id;
  tabDetail.value = name;
}
</script>

<style lang="scss" scoped>
@import url("../assets/styles/navbar.scss");
</style>
