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
.flex-item.auto {
    width: auto;
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
:::

::: details content-distribution
`space-between`: 每行均匀分配弹性元素，相邻元素间间隔相等。

`space-around`: 每行平均分配弹性元素，各弹性元素两侧间隔相等。

`space-evenly`: 每行平均分配弹性元素，各弹性元素间间隔相等。

`stretch`: 空间不足时自动按各元素比例调整。

<JustifyContent type="distribution" />
:::

::: details overflow-position
`unsafe`: 与&lt;content-position&gt;对齐关键字一起使用，不管子元素和容器的相对大小，都使用给定的对齐值。

`safe`: 与&lt;content-position&gt;对齐关键字一起使用，如果选定的关键字导致溢出，将使用start代替。

<JustifyContent type="overflow" />
:::

::: details content-position
`center`: 伸缩元素向每行中点排列，每行第一个元素到行首与最后一个到行尾的距离相等。

`start`: 从行首开始排列，每行第一个元素与行首对齐，后续与前一个对齐。

`end`: 从行尾开始排列，每行最后一个元素与行尾对齐，其他元素与后一个对齐。

`flex-start`: 从行首开始排列，每行第一个弹性元素与行首对齐，后续弹性元素与前一个对齐。

`flex-end`: 从行尾开始排列，每行最后一个弹性元素与行尾对齐，其他元素与后一个对齐。

<JustifyContent type="position" />
:::

::: details left & right
`left`: 伸缩元素依次对齐容器左边缘。

`right`: 伸缩元素依次对齐容器右边缘。

<!-- <JustifyContent type="content" /> -->
:::

#### 5. align-items
子元素沿flex容器交叉轴方向排列方式。

::: tip 语法
align-items: normal | stretch | &lt;baseline-position&gt; | [ &lt;overflow-position&gt;? &lt;self-position&gt; ]

where 

&lt;baseline-position&gt; = [ first | last ]? baseline

&lt;overflow-position&gt; = unsafe | safe

&lt;self-position&gt; = center | start | end | self-start | self-end | flex-start | flex-end
:::

#### 6. align-content

子元素在flex容器中交叉轴方向的空间分布，对单行弹性盒子模型（`flex-wrap: nowrap`）无效。

::: tip 语法
align-content: normal | &lt;baseline-position&gt; | &lt;content-distribution&gt; | &lt;overflow-position&gt; ? &lt;content-position&gt;

where 

&lt;baseline-position&gt; = [ first | last ]? baseline

&lt;content-distribution&gt; = space-between | space-around | space-evenly | stretch

&lt;overflow-position&gt; = unsafe | safe

&lt;content-position&gt; = center | start | end | flex-start | flex-end
:::

<!-- <AlignContent /> -->

### 子元素基本属性

适用于弹性容器中的子元素。

#### 1. flex-grow

flex增长系数，表示在容器主轴方向占据空间的比例，负值无效。

::: tip 语法
flex-grow: &lt;NUMBER&gt;;

默认值：0
:::

<FlexGrow />

#### 2. flex-shrink

指定子元素的收缩规则，仅在默认所占空间大于容器空间时起效，负值无效。

::: tip 语法
flex-shrink: &lt;NUMBER&gt;;

默认值：1
:::

<FlexShrink />

#### 3. flex-basis

指定子元素在主轴方向上的初始大小。

::: tip 语法
flex-basis: content | &lt;width&gt;;

默认值：auto
:::

<FlexBasis />

#### 4. flex

`flex-grow`、`flex-shrink`和`flex-basis`的缩写。

::: tip 语法
flex: &lt;flex-grow&gt; &lt;flex-shrink&gt; &lt;flex-basis&gt;;

默认值：0 1 auto
:::

#### 5. order

子元素在弹性容器中的排列顺序。

::: tip 语法
order: &lt;NUMBER&gt;;

默认值：0
:::

<Order />
