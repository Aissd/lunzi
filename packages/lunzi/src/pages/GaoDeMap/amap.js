const serviceKey = '8054c8f367860c20be76066891305c7e';
const apiKey = '76191c252aebccdcabf090d48f3e69ae';
const version = '1.4.15';

const createScript = url => {
    const script = document.createElement('script');
    script.charset = 'utf-8';
    script.src = url;
    document.head.appendChild(script);
};

export default () => {
    return new Promise((resolve, reject) => {
        // 判断window下有没有AMap对象，再判断是否引入cdn地图
        if (!window.AMap) {
            createScript(`//webapi.amap.com/maps?v=${version}&key=${apiKey}&callback=aMapInitCallback`);
            window.aMapInitCallback = () => {
                console.log('aMapInitCallback');
                createScript('//webapi.amap.com/ui/1.0/main.js?v=1.0.11&callback=amapUiCallback');
                // 创建定时器 当AMapUI有值的时候 清除定时器 并resolve
                let interval = setInterval(() => {
                    if (window.AMapUI) {
                        clearInterval(interval);
                        resolve(window.AMap);
                    }
                }, 50);
            }
            window.amapUiCallback = () => {
                console.log('amapUiCallback');
            };
        } else {
            resolve(window.AMap);
        }
    });
};