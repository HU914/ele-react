/* 手机适配逻辑 */
(function (doc, win) {
  const docE = doc.documentElement;
  var browser = {
    versions: (function () {
      var u = navigator.userAgent;
      return {
        trident: u.indexOf('Trident') > -1, // IE内核
        presto: u.indexOf('Presto') > -1, // opera内核
        webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
        gecko: u.indexOf('Firefox') > -1, // 火狐内核Gecko
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android
        iPhone: u.indexOf('iPhone') > -1, // iPhone
        iPad: u.indexOf('iPad') > -1, // iPad
        webApp: u.indexOf('Safari') > -1 // Safari
      };
    })()
  };
  if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad) {
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function () {
      var devWh = docE.clientWidth;
      // var scale = 1 / window.devicePixelRatio;
      // document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
      if (!devWh) { return; }
      docE.style.fontSize = devWh / 6.4 + 'px';
    };
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    return;
  }
  docE.style.fontSize = 100 + 'px';
})(document, window);
