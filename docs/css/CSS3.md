# CSS3 新特性

## 弹性布局 Flex

Flexbox是CSS Flexible Box Layout Module的常用名称，是一种用于在单个维度（行或列）中展示子元素（items）的布局模型，其关键特性在于flex布局中的子元素（items）可以缩放，将空间（space）分配到子元素（items）本身、子元素（items）之间或子元素（items）周围。

Flexbox便于子元素的水平对齐和垂直对齐，通过嵌套可以在两个维度上构建布局。

### 弹性容器

display属性：

<div class="box block-flex">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
</div>

<div class="box inline-flex" style="margin-top: 20px;">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
</div>

<style>
.box {
    border-radius: 6px;
    overflow: hidden;
}
.block-flex {
    display: flex;
    background: #282c34;
}
.inline-flex {
    display: inline-flex;
    background: #282c34;
}
.flex-item {
    width: 100px;
    height: 100px;
    font-size: 32px;
    color: #fff;
}
.flex-item:nth-child(2n - 1) {
    background: #eb9738;
}
.flex-item:nth-child(2n) {
    background: #3eaf7c;
}
</style>

::: details 代码
```html {1,5,14,17}
<div class="block-flex">
    <div class="flex-item">...</div>
</div>

<div class="inline-flex">
    <div class="flex-item">...</div>
</div>

<style>
.block-flex {
    display: flex;
}
.inline-flex {
    display: inline-flex;
}
.flex-item {
    width: 100px;
    ...
}
</style>
```
:::

### 兼容性

<Compatibility />

### 主轴与交叉轴

弹性容器的主轴与交叉轴是由属性`flex-direction`定义的。`flex-direction`属性的值为`row`或`row-recerse`时，主轴为水平方向；`flex-direction`属性的值为`column`或`column-recerse`时，主轴为垂直方向；

<Axis />
