// 初始化高度设置
var H = document.documentElement.clientHeight; // 浏览器可是区域高度
// console.log(H);
var sh = H - 120 - 40; //网页内容主体高度
// 中间内容区域高度
$(".index_box").css({
    "height": sh,
});
// 左侧四块高度设置
$(".body_left>section").css({
    "height": sh / 4,
});
// 高度判断右侧内容出现滚动条
if (H < 815) {
    $(".index_box").css({
        "width": 1030,
        // "overflow-y": 'auto'
    });

}
if (H > 816) {
    $(".index_box").css({
        "width": 1010,
    });
}
$(window).resize(function() {
    // 初始化高度设置
    var H = document.documentElement.clientHeight; // 浏览器可是区域高度
    // console.log(H);
    var sh = H - 120 - 40; //网页内容主体高度
    var ssh = sh - 40 - 250 - 40 - 52; //右侧4大按钮总高度
    // console.log(ssh);
    // 中间内容区域高度
    $(".index_box").css({
        "height": sh,
    });

    // 高度判断右侧内容出现滚动条
    if (H < 815) {
        $(".index_box").css({
            "width": 1030,
            // "overflow-y": 'auto'
        });

    }
    if (H > 816) {
        $(".index_box").css({
            "width": 1010,
        });
    }
});