<template>
    <div class="box">
        {{data}}
    </div>
</template>

<script setup lang="ts">
interface Props {
    data?: String
}
const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
@import url('../assets/styles/navbar.scss');
</style>