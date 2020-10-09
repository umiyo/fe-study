<template>
<div class="justify-content">
    <div class="axis" v-if="type === 'distribution'">
        <div class="container row space-between" style="width: 45%;">
            <span>主轴(start)</span>
            <i>space-between</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>
        <div class="container row space-around" style="width: 45%;">
            <span>主轴(start)</span>
            <i>space-around</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>
    </div>

    <div class="axis" v-if="type === 'distribution'" style="margin-top: 30px;">
        <div class="container row space-evenly" style="width: 45%;">
            <span>主轴(start)</span>
            <i>space-evenly</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>
        <div class="container row stretch" style="width: 45%;">
            <span>主轴(start)</span>
            <i>stretch</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>
    </div>

    <div class="axis" v-if="type === 'overflow'">
        <div class="container row unsafe" style="width: 45%;">
            <span>主轴(start)</span>
            <i>unsafe</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
            <div class="flex-item">4</div>
        </div>
        <div class="container row safe" style="width: 45%;">
            <span>主轴(start)</span>
            <i>safe</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
            <div class="flex-item">4</div>
        </div>
    </div>

    <div class="axis" v-if="type === 'position'">
        <div class="container row center" style="width: 45%;">
            <span>主轴(start)</span>
            <i>center</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>
    </div>
    <!-- <div class="axis" v-if="type === 'position'" style="margin-top: 30px;">
        <div class="container row start" style="width: 45%;">
            <span>主轴(start)</span>
            <i>start</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>
        <div class="container row end" style="width: 45%;">
            <span>主轴(start)</span>
            <i>end</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>
    </div> -->
    <div class="axis" v-if="type === 'position'" style="margin-top: 30px;">
        <div class="container row flex-start" style="width: 45%;">
            <span>主轴(start)</span>
            <i>flex-start</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>
        <div class="container row flex-end" style="width: 45%;">
            <span>主轴(start)</span>
            <i>flex-end</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>
    </div>

    <div class="axis" v-if="type === 'content'">
        <div class="container row left" style="flex: 0 0 45%;">
            <span>主轴(start)</span>
            <i>left</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>
        <div class="container row right" style="flex: 0 0 45%;">
            <span>主轴(start)</span>
            <i>right</i>
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'JustifyContent',
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
.space-between {
    justify-content: space-between;
}
.space-around {
    justify-content: space-around;
}
.space-evenly {
    justify-content: space-evenly;
}
.stretch {
    justify-content: stretch;
}
.unsafe {
    justify-content: unsafe center;
}
.safe {
    justify-content: safe center;
}
.center {
    justify-content: center;
}
.start {
    justify-content: start;
}
.end {
    justify-content: end;
}
.flex-start {
    justify-content: flex-start;
}
.flex-end {
    justify-content: flex-end;
}
</style>