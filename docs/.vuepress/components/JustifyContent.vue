<template>
<div class="justify-content">
    <div class="axis" v-if="type === 'distribution'">
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

    <div class="axis" v-if="type === 'overflow'">
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

    <div class="axis" v-if="type === 'position'">
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

    <div class="axis" v-else>
        <div class="container row left" style="flex: 0 0 45%;">
            <span>主轴(start)</span>
            <i>left</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
        </div>
        <div class="container row right" style="flex: 0 0 45%;">
            <span>主轴(start)</span>
            <i>right</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'FlexDirection',
    props: {
        type: String,
        default: null
    }
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
.left {
    justify-content: left;
}
.right {
    justify-content: right;
}
</style>