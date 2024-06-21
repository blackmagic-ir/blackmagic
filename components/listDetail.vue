<template>
    <div class="box">
        {{data?.name}}
    </div>
</template>

<script setup lang="ts">
interface Props {
    data?: Object,
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
@import url('../assets/navbar.scss');
</style>