var botui = new BotUI("botui-app");
 
botui.message.add ({
    delay: 200,
    content: "Hi, 你好! 👋
}).then(function() {
    return botui.message.add({
        delay: 1000,
        content: "我是这个网站的博主,一个可爱的蓝孩子~😊"
    })
}).then(function() {
    return botui.message.add({
        delay: 1500,
        content: "我在业余时间玩一下网站！😎"
    })
}).then(function() {
    return botui.action.button({
        delay: 1500,
        action: [{
            text: "然后呢? 🤔",
            value: "and"
        },
        {
            text: "少废话! 😏",
            value: "gg"
        }]
    })
}).then(function(res) {
    if (res.value == "and") {
        other()
    }
    if (res.value == "gg") {
        return botui.message.add({
            delay: 1500,
            content: "![告辞](https://cdn.jsdelivr.net/gh/Qikaile/cdn/img/Hd33fe77ff56f48e4b988d6c4f9091551S.jpg)"
        })
    }
});
 
var other = function() {
    botui.message.add({
        delay: 1500,
        content: "我现在是机械工程专业的研究生"
    }).then(function() {
        return botui.message.add({
            delay: 1500,
            content: "在寒假的时候就想着拥有属于自己的博客,并且对计算机方面有着格外感兴趣。"
        })
    }).then(function() {
        return botui.message.add({
            delay: 2000,
            content: "略懂HTML/CSS/JavaScript，偶尔也折腾PHP、Python"
        })
    }).then(function() {
        return botui.message.add({
            delay: 1800,
            content: "喜欢折腾，热爱折腾，目前正在计算机的道上探索中"
        })
    }).then(function() {
        return botui.action.button({
            delay: 1500,
            action: [{
                text: "为什么叫 TJYS 呢？ ",
                value: "next"
            }]
        })
    }).then(function(res) {
        return botui.message.add({
            delay: 2000,
            content: "emmm..这应该是我在上大学期间给自己QQ名的一个简写吧！"
        })
    }).then(function(res) {
        return botui.message.add({
            delay: 1500,
            content: "那么，仔细看看我的博客吧？😇 "
        })
    });
};
