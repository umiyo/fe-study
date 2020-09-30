<template>
<div class="axis">
    <div class="container row nowrap" style="width: 30%;">
        <span>主轴(start)</span>
        <i>nowrap</i>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
    </div>
    <div class="container row wrap" style="width: 30%;">
        <span>主轴(start)</span>
        <i>wrap</i>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
    </div>
    <div class="container row wrap-reverse" style="width: 30%;">
        <span>主轴(start)</span>
        <i>wrap-reverse</i>
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'FlexWrap'
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
.nowrap {
    flex-wrap: nowrap;
}
.wrap {
    flex-wrap: wrap;
}
.wrap-reverse {
    flex-wrap: wrap-reverse;
}
</style>