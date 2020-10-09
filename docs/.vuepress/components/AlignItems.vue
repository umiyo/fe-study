<template>
<div class="axis">
    <div class="container row">
        <span>主轴(start)</span>
        <i>row</i>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
    </div>
    <div class="container row-reverse">
        <span>主轴(start)</span>
        <i>row-reverse</i>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
    </div>
    <div class="container column">
        <span>主轴(start)</span>
        <i>column</i>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
    </div>
    <div class="container column-reverse">
        <span>主轴(start)</span>
        <i>column-reverse</i>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'AlignItems'
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
.row-reverse {
    flex-direction: row-reverse;
}
.column {
    flex-direction: column;
}
.column-reverse {
    flex-direction: column-reverse;
}
</style>