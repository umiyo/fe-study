<template>
<div class="axis">
    <div class="container row" style="width: 50%;">
        <span>主轴(start)</span>
        <i>row</i>
        <div class="flex-item auto" style="flex-grow: 0;">1</div>
        <div class="flex-item auto" style="flex-grow: 1;">2</div>
        <div class="flex-item auto" style="flex-grow: 2;">3</div>
        <div class="flex-item auto" style="flex-grow: 3;">4</div>
        <div class="flex-item auto" style="flex-grow: 4;">5</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'FlexGrow'
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
.row {
    flex-direction: row;
}
</style>