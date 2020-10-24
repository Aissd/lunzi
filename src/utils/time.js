const Time = {
    // 获取当前时间戳
    getUnix: function() {
        var date = new Date();
        return date.getTime();
    },
    // 获取今天0点0分0秒的时间戳
    getTodayUnix: function() {
        var date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    // 获取今年1月1日0点0分0秒的时间戳
    getYearUnix: function() {
        var date = new Date();
        date.setMonth(0);
        date.setDate(1);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    // 获取标准年月日
    getLastDate: function(time) {
        var date = new Date(time);
        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        return date.getFullYear() + '-' + month + '-' + day;
    },
    // 获取出生至今多少天
    getDayFromBirthday: function(time) {
        var birthdayTimestamp = new Date(time);
        var nowTimestamp = new Date();
        var timestamp = nowTimestamp - birthdayTimestamp;
        return '出生至今已' + Math.floor(timestamp / 1000 / 24 / 60 / 60) + '天';
    },
    // 转换事件
    getFormatTime: function(timestamp) {
        // 当前时间戳
        var now = this.getUnix();
        // 今天0点时间戳
        var today = this.getTodayUnix();
        // 今年0点时间戳
        var year = this.getYearUnix();
        // 转换为秒级时间戳
        var timer = (now - timestamp) / 1000;
        var tip = '';
        if(timer <= 0) {
            tip = '刚刚';
        } else if(Math.floor(timer / 60) <= 0) {
            tip = '刚刚';
        } else if(timer < (60 * 60)) { // 60 * 60 = 3600 -> 1小时
            tip = Math.floor(timer / 60) + '分钟前';
        } else if(timer >= (60 * 60) && (timestamp - today >= 0)) {
            tip = Math.floor(timer / (60 * 60)) + '小时前';
        } else if(Math.ceil(timer / (60 * 60 * 24))) {
            tip = Math.floor(timer / (60 * 60 * 24)) + '天前';
        } else {
            tip = this.getLastDate(timestamp);
        }
        return tip;
    }
};

export default Time;