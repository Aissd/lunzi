import Vue from 'Vue';
import myToast from './myToast.vue';

const myToastConstructor = Vue.extend(myToast);

function showToast(text, duration) {
    const myToastDom = new myToastConstructor({
        el: document.createElement('div'),
        data() {
            return {
                text: text,
                isShow: true
            };
        }
    });

    document.body.appendChild(myToastDom.$el);

    setTimeout(() => {
        myToastDom.isShow = false;
    }, duration);

}

function toastRegistry() {
    Vue.prototype.$myToast = showToast;
}

export default toastRegistry;