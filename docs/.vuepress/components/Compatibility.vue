<template>
<ul class="explore">
    <li class="explore-item"
        v-for="item in list"
        :key="item.key">
        <img :src="item.url" />
        <p>{{ item.version }}</p>
    </li>
</ul>
</template>

<script>
export default {
    data() {
        return {
            list: [
                { key: 1, version: 'Chrome 21+', url: '/chrome.png' },
                { key: 2, version: 'Safari 6.1+', url: '/safari.png' },
                { key: 3, version: 'Firefox 22+', url: '/firefox.png' },
                { key: 4, version: 'Edge', url: '/edge.png' },
                { key: 5, version: 'IE 10+', url: '/ie.png' },
                { key: 6, version: 'Opera 12.1+', url: '/opera.png' } 
            ]
        }
    }
}
</script>

<style lang="scss">
.explore {
    width: 100%;
    padding-top: 50px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    text-align: center;
    display: table;
    table-layout: fixed;
    &-item {
        display: table-cell;

        img {
            width: 100px;
        }
    }
}
</style>

