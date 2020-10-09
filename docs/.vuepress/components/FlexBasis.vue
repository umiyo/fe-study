<template>
<div class="axis">
    <div class="container row" style="width: 700px;">
        <span>主轴(start)</span>
        <i>row</i>
        <div class="flex-item" style="flex-basis: 200px;">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'FlexBasis'
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