<template>
    <div>
        {{ count | currencyFilter }}
        <br />
        {{ timeStamp | timeFilter }}
        <br />
        {{ timeStamp | timeFilter2('YYYY-MM-DD') }}
        <br />
        <table border="1">
            <tr>
                <th>ID</th>
                <th>商品名称</th>
                <th>价格</th>
                <th>状态</th>
            </tr>
            <tr v-for="item in goodsList" :key="item.orderId">
                <td>{{item.orderId}}</td>
                <td>{{item.name}}</td>
                <td>{{ item.price | currencyFilter }}</td>
                <td :class="item.status | orderStatusFilter | statusStyleFilter">{{ item.status | orderStatusFilter }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import moment from 'moment';
import goodsList from './data.js';
import filters from './filters.js';
export default {
    name: 'Filter',
    computed: {
        goodsList() {
            return goodsList;
        }
    },
    data() {
        return {
            count: 50,
            timeStamp: 1602979200000
        };
    },
    filters: {
        // 货币
        currencyFilter: function(value) {
            return `${value.toFixed(2)}元`;
        },
        // 时间
        timeFilter: (value) => {
            return moment(value).format('YYYY-MM-DD');
        },
        // 时间
        timeFilter2: (value, formatter) => {
            return moment(value).format(formatter);
        },
        orderStatusFilter: filters.orderStatus,
        statusStyleFilter: filters.statusStyle
    }
};
</script>

<style lang="scss" scoped>
    .not-pay {
        color: #f00;
    }
    .not-send {
        color: #ff0;
    }
    .not-receive {
        color: #00f;
    }
    .not-comment {
        color: #0f0;
    }

    table {
        width: 100%;
    }
    th, td {
        padding: 10px;
    }
</style>
