<template>
<div class="axis">
    <div class="container row" style="flex: 0 0 23%;">
        <span>主轴(start)</span>
        <p>flex-direction: row;</p>
    </div>
    <div class="container row-reverse" style="flex: 0 0 23%;">
        <span>主轴(start)</span>
        <p>flex-direction: row-reverse;</p>
    </div>
    <div class="container column" style="flex: 0 0 23%;">
        <span>主轴(start)</span>
        <p>flex-direction: column;</p>
    </div>
    <div class="container column-reverse" style="flex: 0 0 23%;">
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

<style lang="scss">
.axis {
    display: flex;
    justify-content: space-between;
}
.container {
    position: relative;
    height: 400px;
    font-size: 24px;
    text-align: center;
    color: #333;
    &::before,
    &::after {
        position: absolute;
        content: "";
        border: solid #f96628;
        border-width: 0 4px 4px 0;
        display: inline-block;
        padding: 8px;
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
    border-top: 4px solid #f00;
    border-left: 4px solid #f00;
    &::before {
        top: -12px;
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
    border-top: 4px solid #f00;
    border-right: 4px solid #f00;
    &::before {
        top: -12px;
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
    border-top: 4px solid #f00;
    border-left: 4px solid #f00;
    &::before {
        top: -8px;
        right: 0;
        transform: rotate(-45deg);
        display: none;
    }
    &::after {
        left: -12px;
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
    border-bottom: 4px solid #f00;
    border-left: 4px solid #f00;
    &::before {
        top: 0;
        left: -12px;
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