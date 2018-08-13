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
// 左侧四块高度设置
$(".body_left>section").css({
    "height": sh / 5,
});
// 左侧树高度
$(".body_left>div.tree_box").css({
    "height": sh - (sh / 7) - 10,
});
// 树结构出现滚动条
$(".body_left>div.tree_box .tree,.body_left>div.tree_box .tree2").css({
    "height": sh - (sh / 7) - 10 - 94,
    "overflow-y": 'auto'
});
// 左侧四块高度设置
$(".tec_list li").css({
    "height": (sh - 3) / 4,
});
// 左侧导航标题高度
$(".body_left .title_left").css({
    "height": (sh / 7)
});
// 左侧导航标题高度
$(".tec_list .title1").css({
    "height": (sh / 6)
});
// 左侧导航标题高度
$(".tec_list .title2").css({
    "height": (sh - (sh / 6)) / 4
});
$(".second_list .table_box").css({
    "height": sh - 45 - 20 - 50 - 150 - 45,
    "overflow-y": 'auto'
});
// 高度判断右侧内容出现滚动条
if (H < 815) {
    $(".index_box").css({
        "width": 1030,
        // "overflow-y": 'auto'
    });
    $(".second_list ul.list").css({
        "height": sh - 45 - 20 - 50,
        "overflow-y": 'auto'
    });
    $(".second_list .data_table").css({
        "height": sh - 45 - 20 - 50 - 68,
        "overflow-y": 'auto'
    });
    $(".second_list .tec_list2,.second_list .right_tree").css({
        "height": sh - 45 - 20 - 50 - 68,
        "overflow-y": 'auto'
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
    // 左侧树高度
    $(".body_left>div.tree_box").css({
        "height": sh - (sh / 7) - 10,
    });
    // 树结构出现滚动条
    $(".body_left>div.tree_box .tree,.body_left>div.tree_box .tree2").css({
        "height": sh - (sh / 7) - 10 - 94,
        "overflow-y": 'auto'
    });
    // 左侧导航标题高度
    $(".body_left .title_left").css({
        "height": (sh / 7)
    });
    // 左侧导航标题高度
    $(".tec_list .title1").css({
        "height": (sh / 6)
    });
    // 左侧导航标题高度
    $(".tec_list .title2").css({
        "height": (sh - (sh / 6)) / 4
    });
    $(".second_list .table_box").css({
        "height": sh - 45 - 20 - 50 - 150 - 45,
        "overflow-y": 'auto'
    });
    // 高度判断右侧内容出现滚动条
    if (H < 815) {
        $(".index_box").css({
            "width": 1030,
            // "overflow-y": 'auto'
        });
        $(".second_list ul.list").css({
            "height": sh - 45 - 20 - 50,
            "overflow-y": 'auto'
        });
        $(".second_list .data_table").css({
            "height": sh - 45 - 20 - 50 - 68,
            "overflow-y": 'auto'
        });
        $(".second_list .tec_list2,.second_list .right_tree").css({
            "height": sh - 45 - 20 - 50 - 68,
            "overflow-y": 'auto'
        });
    }
    if (H > 816) {
        $(".index_box").css({
            "width": 1010,
        });
    }
});