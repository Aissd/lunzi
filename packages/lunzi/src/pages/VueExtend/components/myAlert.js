import Alert from './myAlert.vue';
const alert = {};
alert.install = function (Vue) {
    // 生成一个Vue的子类，同时也是这个子类也就是组件
    const myAlert = Vue.extend(Alert);
    // 实例化一个对象
    const instance = new myAlert();
    // 将这个实例挂载到我创建的div上
    // 并将此div加入全局挂载点的内部
    instance.$mount(document.createElement('div'));
    document.body.appendChild(instance.$el);
    // 通过VUE原型注册一个方法
    // 让所有的实例共享这个方法
    // title - alert标题
    // content - alert内容
    // callback - 关闭后的回调函数
    Vue.prototype.$myAlert = (title, content, callback = () => {}) => {
        instance.title = title ? title : '';
        if (content) instance.content = content;
        if (callback) instance.ok = callback;
        instance.show = true;
    }
};
export default alert;