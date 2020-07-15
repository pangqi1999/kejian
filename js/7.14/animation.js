function ani(el, str, end, time) {
    var start = getStyle(el, str);
    start = parseInt(start);
    console.log(str, start);
    var s = end - start; // 求过度值
    time = time * 1000;
    var timer = setInterval(function () {

      start += s / (time / 16.7);
      // s 不同出口条件不同
      if (s > 0) {
        if (start >= end) {
          // 出口前；也需要 el 的str 属性赋值 ；
          // ---> 区分；哪些str 需要px 哪些不需要px
          str == "opacity" || str === "zIndex"
            ? (el.style[str] = end)
            : (el.style[str] = end + "px");
          clearInterval(timer);
        }
      } else {
        if (start <= end) {
          str == "opacity" || str === "zIndex"
            ? (el.style[str] = end)
            : (el.style[str] = end + "px");
          clearInterval(timer);
        }
      }

      if (str == "opacity" || str === "zIndex") {
        el.style[str] = start;
      } else {
        el.style[str] = start + "px";
      }
    }, 16.7); // 浏览器刷新时间是16.7ms
  }