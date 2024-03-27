
// loglist.push({
//     'title':'Template',
//     'date':"2023.08.19",
//     'log_content':[
//         "",
//         "",
//         "",
//     ]
// }) 


loglist.push({
    'title':'ass hole in my mind.',
    'date':"2023.08.21",
    'log_content':[
        "markdown is really good thing, but too complex. but maybe the value is at this point? complex? may be json is the better choice? ",
        "不如把数据直接放在js文件里, 就像现在这样, 保存为对象, 里面可以有数组和别的什么, 这样就免得再用json函数来回转换了. 还省去了用ajax家在json. 我这一万多的学费真真的白搭了.忘了个精光. 这个破输入法究竟用的什么智能? ",
        "why made this so poor page, because it feels peace, 踏实 (just now, a sound in my mind raise:'(this is a )中国人', than he said:'废了'(he's Over), may be it is all my illusion, But I really really belive that they are Monitor everything about me, into my mind directly. 为什么我自觉的自己是个'美国的卖国贼'? (为什么翻译到这里我还觉得有那么点羞耻呢?) 因为这些废话, 偶尔会在脑袋里飘过. 也许中国的技术根本监控不了网络数据? 只能直接盯着我的脑袋? 否则的话, 何必呢? 我为什么要用英文? 因为, 和离婚一个原因----除了背叛, 我还能怎样呢? 偷偷摸摸的背叛, 毫无价值. 我卖个屁阿? 作为一个中国人? 有什么好卖的? 除了可笑的面子? 什么叫'卖国'? 就这么个破年代? 什么叫卖国? 你们巴不得的卖不出去! 都是烂货!), 露天席地的感觉, 永远不用担心喜新厌旧的情况发生，这个东西也不会变得更加臃肿，只有内容数据越来越多而以。",
        "但如果想要增加新功能呢？所以，虽然到今天位置，好像已经可以用来记录个日记了，但还是要为下一步的扩展进行准备，而且也是最初有这个想法的。就是第一天提到的三个目录：数据、样式、和一些有用的东西。",
        "刚刚发现只要一个字符串中不出现英文字母, 中文的全角标点就不会提示格式错误. 我习惯在中文中掺杂英文字母的名词, 不习惯用英文书写. 总觉得很多话说不出来. 是的, 花, 我之卖国? 卖了? 钱都是我的? 因为表带年^^^^标点符号的问题? 这个输入法很多花要说呢? 还是说我把美国卖给中国了? ...因为这是个美国圆转的......原装的输入法啊.",
        "我总是感觉很伤心, 可能不是别的问题, 而就是卖国的问题. 是的, 现在, 输入法, 好用多了. ",
        "坐下来输入这些内容之前, 我是有别的事想说来的. 想不起来了. ",
        "baitian，👻",
        "电脑是奴才电脑，鼠标是逻辑鼠标，键盘是小米的，很可疑，等我的美国键盘充好点，就换成美国键盘，就差显示器了，美国显示器我只知道苹果的。买不起。然后用这中国互联网……哈哈哈。心情好多了。",
        "我就用个电脑玩个游戏学个编程, 结果整的跟个神经病似的.",
        "我想起来了, 本来想看会育儿书, 记录点育儿的事. 我觉得离婚应该给我的神经病生活画个句号了吧. "
    ]
}) 


/*
    a1. 乘法 a*b
    a2. 括号加减&乘法 (a+b)*c
    a3. 括号加减乘以括号加减 (a+b)*(c+d)
    a4. 括号加减乘法再加减 (a+b)*c+d

    b1. 除法 a/b
    b2. 括号加减&乘法 (a+b)/c
    b3. 括号加减乘以括号加减 (a+b)/(c+d)
    b4. 括号加减乘法再加减 (a+b)/c+d

    c1. a*b+c/d
    c2. a*(b+c)/d
    c3. a/b/c
    c4. a/b/(c+d)

    M组合 = A与另外n个数 (B,C,D...) 相乘或者相除, A,B,C...可能是一个数字, 也可能是A组合(需要括号), 或者是另外一个这种M组合(不需要括号)
    A组合 = A与另外n个数 (B,C,D...) 相乘或者相加 (减) , A,B,C...可能是一个数字, 也可能是M组合(不需要括号), 或者是另外一个这种A组合(不需要括号)
    A,B,C 的最终结果, 可能是整数, 分数, 小数, 或者整十整百。
*/

loglist.push({
    'title':'Template',
    'date':"2023.08.21",
    'log_content':[

        "a1. 乘法 a*b<br/> a2. 括号加减&乘法 (a+b)*c<br/> a3. 括号加减乘以括号加减 (a+b)*(c+d)<br/> a4. 括号加减乘法再加减 (a+b)*c+d",
    
        "b1. 除法 a/b<br/> b2. 括号加减&乘法 (a+b)/c<br/> b3. 括号加减乘以括号加减 (a+b)/(c+d)<br/> b4. 括号加减乘法再加减 (a+b)/c+d",

        "c1. a*b+c/d<br/> c2. a*(b+c)/d<br/> c3. a/b/c<br/> c4. a/b/(c+d)",

        "M组合 = A与另外n个数 (B,C,D...) 相乘或者相除, A,B,C...可能是一个数字, 也可能是A组合(需要括号), 或者是另外一个这种M组合(不需要括号)<br/> A组合 = A与另外n个数 (B,C,D...) 相乘或者相加 (减) , A,B,C...可能是一个数字, 也可能是M组合(不需要括号), 或者是另外一个这种A组合(不需要括号)<br/> A,B,C 的最终结果, 可能是整数, 分数, 小数, 或者整十整百。"

    ]
}) 

loglist.push({
    'title':'Ghost in my computer',
    'date':"2023.08.20",
    'log_content':[
        "Just 1 minuts ago, i confused the syntax of js and python, the computer struck dumb. then the response on screen start to later 2 or 3 seconds. just like a confused man. Hesitated to let me enter those confusing statements.",
    ]
}) 

loglist.push({
    'title':'"习惯"vs"都忘了"',
    'date':"2023.08.19",
    'log_content':[
        "今天, 咱们的小网页增加了javascript功能。本来早早就学的不错的javascript, 学完了python和c就都忘了。不过一开始做的还是顺风顺水的怎么写怎么好使。直到去菜鸟网查了一个<code>foreach</code>。本来是要查<code>for in</code>的, 结果却在bing搜索中输入了<code>foreach</code>。结果再回来写脚本就怎么写怎么错。箭头函数难道不能直接后面接括号条用么？",
        "标题里的‘都忘了’说的就是这个事, 学了一门语言, 在学别的就会被覆盖, 习惯说的是另外一件事。忘了是什么了。之所以忘了, 肯定是还没成习惯？那学习究竟有多大意义呢？",
        "另外, Nginx也没学进去。",
        "assets的意思： 资产；宝贵的人材；有益的品质；[经] 财产；有利条件  (一项) 财物；资产 (asset的名词复数) ； (商店、破产者等的) 财产；遗产；有价值的人或物",
        "在网上好多文章有介绍assets和static的区别的。",
        "static的意思：n. 静电； (广播、电视里的) 静电噪声, 静电干扰；<美, 非正式>不停的抱怨, 指责；静力学；网络 静态的 /静态 /静止的",
        "原来在webpack和vue中这两个东西还容易混淆呢？<a href='https://zhuanlan.zhihu.com/p/143950140'>链接</a>, 还没细看。突然间链接标签用的是src还是url竟然都忘了。原来是href。怎么突然忘记这么多事情呢。",
        "今天发现人家做的口算出题网站, 一套口算题卖好几块钱, 他们岂不发啦？我好几年前就觉得这东西就应该用计算机生成, 最开始用scratch做出来给我儿子用, 但总感觉一种不祥的氛围开始弥漫……前两天还需要用来的, 想做又觉得儿子都这么大了, 还能用几天……结果最后还是用人家的。什么时候我能干出来点赚钱的事呢。",
        "为什么静电和静止是一个词。老外真是……莫名其妙。",
        "噢噢噢对了, 这个电是不动的。人家那个电都光速移动。",
        "另外今天听说小飞姐病了, 结肠癌。刚做完手术。我爸这边的表兄姐们, 好像全都病了......一半都病死了。难道都是我在消耗能量？",
        "怎么能把这些内容加密呢？",
        "下一步我应该写个脚本把这些文章的顺序掉个个。让新文章排在最上面。然后加密",
        "should i speak from the heart, here?",
        "vscode hate Full-width comma. So i will try to switch to eng to save trouble."

    ]
})


loglist.push({
    'title':'关于为什么会做那一些莫名奇妙好事的思考',
    'date':"2023.08.19",
    'log_content':[
        "主要是刚刚学习了一下nginx, 没必要啊, 上有xmapps, 下有python.http.server. <span class='pp'>要多方便有多方便. </span>",
        "但是, 这都不是行业标准. 要么臃肿不堪, 要么不好扩展, 暂时用用还行. ",

    ]
})


loglist.push({
    'title':'关于网站目录结构的思考',
    'date':"2023.08.19",
    'log_content':[
        "我应该是做网站的老手了. 怎么忘记网站里图片和js什么的怎么放了呢.",
        "MDN 上说, 通常, 有三个文件夹: images, styles, scripts. 这我是了解的. 但 images 可能会有两种: 网站的样式用图, 比如图标啊, 按钮背景什么的, 这些东西现在越来越少用到了. 另外还有一些是数据图片, 比如文章里的照片和插图. 虽然他们都是图片, 但考虑到用途不同, 何不分开存放? ",
        "暂且设置一个 data 文件夹, 一个 style 文件夹, 一个 assets 文件夹... assets 是什么意思? ",

    ]
})