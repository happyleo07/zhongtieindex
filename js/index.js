    // 初始化高度设置
    var H = document.documentElement.clientHeight; // 浏览器可是区域高度
    console.log(H);
    var sh = H - 120 - 40; //网页内容主体高度
    var ssh = sh - 40 - 250 - 40 - 52; //右侧4大按钮总高度
    console.log(ssh);
    var index_w = $(".index_box").width();
    console.log(index_w);

    // 中间内容区域高度
    $(".index_box,.slide_box").css({
        "height": sh,
    });
    // 侧边栏高度设置
    $(".slide_box .img_box").css({
        "height": (sh / 3) - 40
    });
    // 侧边栏高度设置

    $(".slide_box #chart11").css({
        "height": sh - (sh / 3) * 2
    });
    // 左侧四块高度设置
    $(".body_left>section").css({
        "height": sh / 4,
    });
    // 右侧上下两块高度设置
    $(".body_right .right_part1").css({
        "height": sh / 2 - 20,
    });
    // 右侧整体高度设置
    $(".body_right").css({
        "height": sh - 40,
    });
    // 右下角四小块高度设置
    $(".sys").css({
        // "height": sh - 40 - 250 - 40 - 52,
        "height": sh / 2 - 32,
    });
    $(".sys section").css({
        "height": (sh / 2 - 32) / 2,
    });
    // 高度判断右侧内容出现滚动条
    if (H < 815) {
        // $(".index_box").css({
        //     "width": 1030,
        // });
        $(".body_right").css({
            // "width": index_w - 200 - 330 - 10,
            "overflow-y": 'scroll',
        });
        $(".sys").css({
            "height": 300,
        });
        $(".sys section").css({
            "height": 149,
        });
    }
    if (H > 816) {
        // $(".index_box").css({
        //     "width": 1010,
        // });
        $(".body_right").css({
            // "width": index_w - 200 - 330 - 10,
            "overflow-y": 'hidden',
        });
    }
    // 屏幕变化设置
    $(window).resize(function() {
        var H = document.documentElement.clientHeight; // 浏览器可是区域高度
        console.log(H);
        var sh = H - 120 - 40; //网页内容主体高度
        var ssh = sh - 40 - 250 - 40 - 52; //右侧4大按钮总高度
        var index_w = $(".index_box").width();
        // 中间内容区域高度
        $(".body_right").css({
            // "width": 770,
            "width": index_w - 200 - 330 - 50,
        });
        $(".index_box,.slide_box").css({
            "height": sh,
        });
        // 侧边栏高度设置
        $(".slide_box .img_box").css({
            "height": (sh / 3) - 40
        });
        // 侧边栏高度设置

        $(".slide_box #chart11").css({
            "height": sh - (sh / 3) * 2
        });
        // 左侧四块高度设置
        $(".body_left>section").css({
            "height": sh / 4,
        });
        // 右侧上下两块高度设置
        $(".body_right .right_part1").css({
            "height": sh / 2 - 20,
        });
        // 右侧整体高度设置
        $(".body_right").css({
            "height": sh - 40,
        });
        // 右下角四小块高度设置
        $(".sys").css({
            // "height": sh - 40 - 250 - 40 - 52,
            "height": sh / 2 - 32,
        });
        $(".sys section").css({
            "height": (sh / 2 - 32) / 2,
        });
        // 高度判断右侧内容出现滚动条
        if (H < 815) {
            // $(".index_box").css({
            //     "width": 1030,
            // });
            $(".body_right").css({
                // "width": 790,
                "width": index_w - 200 - 330 - 50,
                "overflow-y": 'scroll',
            });
            $(".sys").css({
                "height": 300,
            });
            $(".sys section").css({
                "height": 149,
            });
        }
        if (H > 816) {
            // $(".index_box").css({
            //     "width": 1010,
            // });
            $(".body_right").css({
                // "width": 770,
                "width": index_w - 200 - 330 - 50,
                "overflow-y": 'hidden',
            });
        }
    });