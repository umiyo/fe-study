# CSS3 新特性

## 弹性布局 Flex

Flexbox是CSS Flexible Box Layout Module的常用名称，是一种用于在单个维度（行或列）中展示子元素（items）的布局模型，其关键特性在于flex布局中的子元素（items）可以缩放，将空间（space）分配到子元素（items）本身、子元素（items）之间或子元素（items）周围。

Flexbox便于子元素的水平对齐和垂直对齐，通过嵌套可以在两个维度上构建布局。

### 兼容性

<Compatibility />

### 弹性容器

display属性：

::: tip 语法
display: [ flex | inline-flex ]

`flex`: 以块元素方式定义弹性容器空间

`inline-flex`: 以行元素方式定义弹性容器空间
:::

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
    width: 150px;
    height: 150px;
    font-size: 32px;
    color: #fff;
    line-height: 150px;
    text-align: center;
}
.flex-item:nth-child(2n - 1) {
    background: #1da0de;
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

### 主轴与交叉轴

弹性容器的主轴与交叉轴是由属性`flex-direction`定义的。

`flex-direction`属性的值为`row`或`row-recerse`时，主轴为水平方向；`flex-direction`属性的值为`column`或`column-recerse`时，主轴为垂直方向。

<Axis />

### 基本属性

适用于弹性容器。

#### 1. flex-direction

flex容器主轴方向，定义子元素在容器中的排列方向。

::: tip 语法
flex-direction: [ row | row-reverse | column | column-reverse ];

默认值：row

`row`: 主轴在水平方向，左为起点。

`row-reverse`: 主轴在水平方向，右为起点。

`column`: 主轴在垂直方向，上为起点。

`column`: 主轴在垂直方向，下为起点。
:::

<FlexDirection />

#### 2. flex-wrap

子元素在容器中的换行方式。

::: tip 语法
flex-wrap: [ nowrap | wrap | wrap-reverse ];

默认值：nowrap

`nowrap`: 子元素不换行，可能溢出flex容器。

`wrap`: 子元素换行，多行沿交叉轴起点到止点的方式排列。

`wrap-reverse`: 子元素换行，多行沿交叉轴止点到起点的方式排列。
:::

<FlexWrap />

#### 3. flex-flow

`flex-direction`和`flex-wrap`的简写形式。

::: tip 语法
flex-wrap: [ flex-direction || flex-wrap ];

默认值：row nowrap
:::

#### 4. justify-content

子元素沿flex容器主轴方向排列方式。

::: tip 语法
justify-content: [ normal | &lt;content-distribution&gt; | &lt;overflow-position&gt; ? [ &lt;content-position&gt; | left | right ] ]

默认值：flex-start

`left`: 

`right`:
:::

<JustifyContent />

::: details content-distribution
`space-between`: 

`space-around`:

`space-evenly`:

`stretch`: 
:::

<JustifyContent type="distribution" />

::: details overflow-position
`unsafe`:

`safe`:
:::

<JustifyContent type="overflow" />

::: details content-position
`center`: 

`start`:

`end`:

`flex-start`:

`flex-end`:
:::

<JustifyContent type="position" />

#### 5. align-items

<AlignItems />

#### 6. align-content

子元素在flex容器中交叉轴方向的空间分布，对单行弹性盒子模型（`flex-wrap: nowrap`）无效。

::: tip 语法
align-content: <>
:::

<AlignContent />

### 子元素基本属性

适用于弹性容器中的子元素。

#### 1. flex-grow

flex增长系数，表示在容器主轴方向占据空间的比例。

<FlexGrow />

#### 2. flex-shrink

指定子元素的收缩规则，仅在默认所占空间大于容器空间时起效。

<FlexShrink />

#### 3. flex-basis

指定子元素在主轴方向上的初始大小。

<FlexBasis />

#### 4. flex

`flex-grow`、`flex-shrink`和`flex-basis`的缩写。

#### 5. order

子元素在弹性容器中的排列顺序。

<Order />
