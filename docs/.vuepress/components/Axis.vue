<template>
<div class="axis">
    <div class="container row">
        <span>主轴(start)</span>
        <p>flex-direction: row;</p>
    </div>
    <div class="container row-reverse">
        <span>主轴(start)</span>
        <p>flex-direction: row-reverse;</p>
    </div>
    <div class="container column">
        <span>主轴(start)</span>
        <p>flex-direction: column;</p>
    </div>
    <div class="container column-reverse">
        <span>主轴(start)</span>
        <p>flex-direction: column-reverse;</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Axis'
}
</script>

<style lang="scss" scoped>
.axis {
    display: flex;
    justify-content: space-between;
}
.container {
    position: relative;
    flex: 0 0 24%;
    height: 400px;
    font-size: 24px;
    text-align: center;
    color: #fff;
    &:nth-child(2n - 1) {
        background: #e6c0bc;
    }
    &:nth-child(2n) {
        background: #69c39b;
    }
    &::before,
    &::after {
        position: absolute;
        content: "";
        border: solid #f96628;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 6px;
    }

    span {
        position: absolute;
        color:#f00;
    }

    p {
        position: relative;
        margin: 0;
        line-height: 400px;
        display: inline-block;
    }
}
.row {
    border-top: 2px solid #f00;
    border-left: 2px solid #f00;
    &::before {
        top: -8px;
        right: 0;
        transform: rotate(-45deg);
    }
    &::after {
        left: -8px;
        bottom: 0;
        transform: rotate(45deg);
        display: none;
    }

    span {
        top: 0;
        left: 0;
    }
}
.row-reverse {
    border-top: 2px solid #f00;
    border-right: 2px solid #f00;
    &::before {
        top: -8px;
        left: 0;
        transform: rotate(135deg);
    }
    &::after {
        right: -8px;
        bottom: 0;
        transform: rotate(45deg);
        display: none;
    }

    span {
        top: 0;
        right: 0;
    }
}
.column {
    border-top: 2px solid #f00;
    border-left: 2px solid #f00;
    &::before {
        top: -8px;
        right: 0;
        transform: rotate(-45deg);
        display: none;
    }
    &::after {
        left: -8px;
        bottom: 0;
        transform: rotate(45deg);
    }

    span {
        top: 40px;
        left: -36px;
        transform: rotate(90deg);
    }
}
.column-reverse {
    border-bottom: 2px solid #f00;
    border-left: 2px solid #f00;
    &::before {
        top: 0;
        left: -8px;
        transform: rotate(-135deg);
    }
    &::after {
        right: 0;
        bottom: -8px;
        transform: rotate(-45deg);
        display: none;
    }

    span {
        bottom: 40px;
        left: -36px;
        transform: rotate(90deg);
    }
}
</style>