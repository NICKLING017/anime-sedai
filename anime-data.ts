type Data = {
  [key: string]: { title: string; score: number }[];
};

const data: Data = {
  "2006": [
    { title: "死亡笔记", score: 8.4 },
    { title: "银魂", score: 8.7 },
    { title: "寒蝉鸣泣之时", score: 8 },
    { title: "Code Geass 反叛的鲁路修", score: 8.3 },
    { title: "欢迎加入NHK！", score: 8.2 },
    { title: "Fate/stay night", score: 7.1 },
    { title: "凉宫春日的忧郁", score: 8.2 },
    { title: "零之使魔", score: 7 },
    { title: "黑礁", score: 7.8 },
    { title: "Kanon", score: 7.7 },
    { title: "娜娜", score: 8 },
    { title: "×××HOLiC", score: 7.8 },
    { title: "家庭教师HITMAN REBORN!", score: 7.5 },
    { title: "樱兰高校男公关部", score: 7.6 },
    { title: "蜂蜜与四叶草II", score: 8.5 },
  ],
  "2007": [
    { title: "幸运星", score: 8.3 },
    { title: "CLANNAD", score: 8.3 },
    { title: "天元突破 红莲螺岩", score: 8.6 },
    { title: "旋风管家", score: 7.4 },
    { title: "火影忍者疾风传", score: 7.6 },
    { title: "悠久之翼", score: 7.9 },
    { title: "赌博默示录", score: 7.9 },
    { title: "永生之酒", score: 8.2 },
    { title: "机动战士高达00", score: 7.6 },
    { title: "再见绝望先生", score: 7.8 },
    { title: "日在校园", score: 6.3 },
    { title: "南家三姐妹", score: 7.6 },
    { title: "DARKER THAN BLACK -黑之契约者-", score: 8 },
    { title: "濑户的花嫁", score: 7.4 },
    { title: "电脑线圈", score: 8.1 },
    { title: "物怪", score: 8.2 },
    { title: "向阳素描", score: 7.5 },
    { title: "零之使魔 双月骑士", score: 6.9 },
    { title: "sola", score: 7.2 },
  ],
  "2008": [
    { title: "出包王女", score: 6.9 },
    { title: "龙与虎", score: 8 },
    { title: "魔法禁书目录", score: 6.8 },
    { title: "狼与香辛料", score: 7.8 },
    { title: "夏目友人帐", score: 8 },
    { title: "真实之泪", score: 7.5 },
    { title: "神薙", score: 7.1 },
    { title: "我的狐仙女友", score: 6.1 },
    { title: "噬魂师", score: 7.4 },
    { title: "黑执事", score: 7 },
    { title: "俗・再见绝望先生", score: 7.8 },
    { title: "鹡鸰女神", score: 6.2 },
    { title: "强袭魔女", score: 7.1 },
  ],
  "2009": [
    { title: "轻音少女", score: 8.2 },
    { title: "钢之炼金术师 FULLMETAL ALCHEMIST", score: 8.8 },
    { title: "化物语", score: 8.4 },
    { title: "凉宫春日的忧郁 2009", score: 8 },
    { title: "某科学的超电磁炮", score: 7.5 },
    { title: "学生会的一己之见", score: 7.4 },
    { title: "天降之物", score: 7.3 },
    { title: "天才麻将少女", score: 7.5 },
    { title: "白色相簿", score: 7.3 },
    { title: "妖精的尾巴", score: 7.4 },
    { title: "好想告诉你", score: 7.6 },
  ],
  "2010": [
    { title: "吊带袜天使", score: 8 },
    { title: "四叠半神话大系", score: 8.6 },
    { title: "妄想学生会", score: 7.5 },
    { title: "缘之空", score: 6.6 },
    { title: "笨蛋，测验，召唤兽", score: 7.4 },
    { title: "天使的心跳！", score: 7.5 },
    { title: "无头骑士异闻录", score: 7.9 },
    { title: "只有神知道的世界", score: 7.2 },
    { title: "圣诞之吻SS", score: 7.3 },
    { title: "我的妹妹哪有这么可爱！", score: 7.1 },
    { title: "女仆咖啡厅", score: 7.8 },
    { title: "亲吻姐姐", score: 6.7 },
    { title: "迷糊餐厅", score: 7.5 },
    { title: "学园默示录 HIGHSCHOOL OF THE DEAD", score: 6.7 },
    { title: "荒川爆笑团", score: 7.5 },
    { title: "天降之物f", score: 7.3 },
    { title: "爆漫王。", score: 8 },
    { title: "会长是女仆大人！", score: 6.9 },
    { title: "圣痕炼金士", score: 6 },
    { title: "空之音", score: 6.8 },
  ],
  "2011": [
    { title: "命运石之门", score: 8.8 },
    { title: "日常", score: 8.5 },
    { title: "Fate/Zero", score: 8.1 },
    { title: "魔法少女小圆", score: 8.6 },
    { title: "回转企鹅罐", score: 8 },
    { title: "摇曳百合", score: 7.6 },
    { title: "我们仍未知道那天所看见的花的名字。", score: 7.6 },
    { title: "罪恶王冠", score: 6.5 },
    { title: "花开伊吕波", score: 7.5 },
    { title: "偶像大师", score: 8.3 },
    { title: "GOSICK", score: 7.3 },
    { title: "我的朋友很少", score: 6.8 },
    { title: "猎人", score: 8.2 },
    { title: "未来日记", score: 7.2 },
    { title: "电波女与青春男", score: 7.1 },
    { title: "这个是僵尸吗？", score: 6.8 },
    { title: "赌博默示录 破戒录篇", score: 7.8 },
    { title: "迷茫管家与懦弱的我", score: 6.6 },
    { title: "纯白交响曲", score: 6.5 },
    { title: "神的记事本", score: 6.7 },
    { title: "BLOOD-C", score: 6 },
    { title: "丹特丽安的书架", score: 7.1 },
  ],
  "2012": [
    { title: "冰菓", score: 8.2 },
    { title: "JOJO的奇妙冒险", score: 7.8 },
    { title: "男子高中生的日常", score: 7.9 },
    { title: "中二病也要谈恋爱！", score: 7.4 },
    { title: "来自新世界", score: 8.2 },
    { title: "伪物语", score: 7.8 },
    { title: "Another", score: 7 },
    { title: "樱花庄的宠物女孩", score: 7.4 },
    { title: "心理测量者", score: 7.9 },
    { title: "恶魔高校 D×D", score: 6.9 },
    { title: "刀剑神域", score: 7.3 },
    { title: "人类衰退之后", score: 7.9 },
    { title: "Little Busters!", score: 7.1 },
    { title: "潜行吧！奈亚子", score: 7 },
    { title: "邻座的怪同学", score: 7.2 },
    { title: "猫物语（黑）", score: 7.7 },
    { title: "少女与战车", score: 7.6 },
    { title: "心灵链环", score: 7.4 },
    { title: "TARI TARI", score: 7.3 },
    { title: "谜样女友X", score: 7 },
    { title: "就算是哥哥只要有爱就没问题对吧", score: 5.9 },
    { title: "散华礼弥", score: 6.8 },
  ],
  "2013": [
    { title: "进击的巨人", score: 8.2 },
    { title: "斩服少女", score: 8.1 },
    { title: "我的青春恋爱物语果然有问题", score: 7.5 },
    { title: "悠哉日常大王", score: 8 },
    { title: "玉子市场", score: 7.2 },
    { title: "向山进发", score: 7.1 },
    { title: "约会大作战", score: 6.6 },
    { title: "噬血狂袭", score: 6.6 },
    { title: "来自风平浪静的明天", score: 7.5 },
    { title: "我的妹妹哪有这么可爱。", score: 6.9 },
    { title: "我不受欢迎，怎么想都是你们的错！", score: 6.9 },
    { title: "境界的彼方", score: 6.8 },
    { title: "我的脑内选项正在全力妨碍学园恋爱喜剧", score: 6.6 },
    { title: "Fate/kaleid liner 魔法少女☆伊莉雅", score: 6.9 },
    { title: "GJ部", score: 6.9 },
    { title: "弹丸论破 希望学园与绝望高中生", score: 6.6 },
    { title: "黄金拼图", score: 7.3 },
    { title: "Love Live!", score: 7.2 },
    { title: "我女友与青梅竹马的惨烈修罗场", score: 6.4 },
    { title: "我的朋友很少NEXT", score: 6.7 },
  ],
  "2014": [
    { title: "白箱", score: 8.7 },
    { title: "四月是你的谎言", score: 8 },
    { title: "Fate/stay night [Unlimited Blade Works]", score: 7.5 },
    { title: "游戏人生", score: 7.7 },
    { title: "乒乓", score: 8.7 },
    { title: "甘城光辉游乐园", score: 7 },
    { title: "寄生兽 生命的准则", score: 8 },
    { title: "伪恋", score: 7.1 },
    { title: "月刊少女野崎君", score: 7.8 },
    { title: "请问您今天要来点兔子吗？", score: 7.3 },
    { title: "斩·赤红之瞳！", score: 6.6 },
    { title: "太空丹迪", score: 8 },
    { title: "妄想学生会＊", score: 7.6 },
    { title: "东京喰种", score: 6.7 },
    { title: "凭物语", score: 7.5 },
    { title: "灰色的果实", score: 7.1 },
    { title: "花物语", score: 7.3 },
    { title: "农林", score: 6.6 },
    { title: "魔法科高校的劣等生", score: 5.8 },
    { title: "野良神", score: 7.1 },
  ],
  "2015": [
    { title: "路人女主的养成方法", score: 7.2 },
    { title: "暗杀教室", score: 7.3 },
    { title: "一拳超人", score: 8 },
    { title: "新妹魔王的契约者", score: 5.8 },
    { title: "夏洛特", score: 6.3 },
    { title: "OVERLORD", score: 6.9 },
    { title: "监狱学园", score: 7.3 },
    { title: "可塑性记忆", score: 7 },
    { title: "在地下城寻求邂逅是否搞错了什么", score: 6.8 },
    { title: "干物妹！小埋", score: 6.8 },
    { title: "吹响！悠风号", score: 8.3 },
    { title: "终物语", score: 7.8 },
    { title: "旋转少女", score: 7.4 },
    { title: "落第骑士英雄谭", score: 6.5 },
    { title: "没有黄段子存在的无聊世界", score: 6.1 },
  ],
  "2016": [
    { title: "为美好的世界献上祝福！", score: 7.6 },
    { title: "3月的狮子", score: 8.3 },
    { title: "ReLIFE", score: 7.7 },
    { title: "齐木楠雄的灾难", score: 7.7 },
    { title: "Re：从零开始的异世界生活", score: 7.4 },
    { title: "只有我不存在的城市", score: 7.7 },
    { title: "灵能百分百", score: 7.8 },
    { title: "灰与幻想的格林姆迦尔", score: 7.5 },
    { title: "这个美术社大有问题！", score: 7.3 },
    { title: "轻拍翻转小魔女", score: 7.5 },
    { title: "飞翔的魔女", score: 7.5 },
    { title: "NEW GAME!", score: 7.4 },
    { title: "在下坂本，有何贵干？", score: 6.5 },
    { title: "昭和元禄落语心中", score: 8.2 },
    { title: "无彩限的怪灵世界", score: 6.2 },
    { title: "线上游戏的老婆不可能是女生？", score: 6 },
    { title: "亚人", score: 7.3 },
    { title: "甲铁城的卡巴内利", score: 5.9 },
    { title: "剑风传奇", score: 6.8 },
  ],
  "2017": [
    { title: "少女终末旅行", score: 8.1 },
    { title: "来自深渊", score: 8.2 },
    { title: "小林家的龙女仆", score: 7.4 },
    { title: "狂赌之渊", score: 7 },
    { title: "末日时在做什么？有没有空？可以来拯救吗？", score: 7.6 },
    { title: "月色真美", score: 7.9 },
    { title: "重启咲良田", score: 7.9 },
    { title: "BanG Dream!", score: 6.4 },
    { title: "幼女战记", score: 7.2 },
    { title: "小魔女学园", score: 7.7 },
    { title: "Just Because!", score: 7.3 },
    { title: "埃罗芒阿老师", score: 6.6 },
    { title: "人渣的本愿", score: 6.6 },
    { title: "珈百璃的堕落", score: 7.1 },
    { title: "笨女孩", score: 6.6 },
    { title: "黑色五叶草", score: 6.5 },
    { title: "如果有妹妹就好了。", score: 6.6 },
    { title: "徒然喜欢你", score: 7.1 },
    { title: "不正经的魔术讲师与禁忌教典", score: 6.2 },
  ],
  "2018": [
    { title: "摇曳露营△", score: 8.2 },
    { title: "碧蓝之海", score: 7.8 },
    { title: "赛马娘 Pretty Derby", score: 7 },
    { title: "紫罗兰永恒花园", score: 7.5 },
    { title: "强风吹拂", score: 8.3 },
    { title: "少女☆歌剧 Revue Starlight", score: 7.9 },
    { title: "擅长捉弄的高木同学", score: 7.5 },
    { title: "佐贺偶像是传奇", score: 7.8 },
    { title: "比宇宙更远的地方", score: 8.2 },
    { title: "青春笨蛋少年不做兔女郎学姐的梦", score: 7.4 },
    { title: "哥布林杀手", score: 6.7 },
    { title: "终将成为你", score: 7.8 },
    { title: "DARLING in the FRANXX", score: 6.2 },
    { title: "来玩游戏吧", score: 7.6 },
    { title: "邪神与厨二病少女", score: 7 },
    { title: "恋如雨止", score: 7.5 },
    { title: "关于我转生变成史莱姆这档事", score: 6.6 },
    { title: "黄金神威", score: 7.5 },
  ],
  "2019": [
    { title: "冰海战记", score: 8.3 },
    { title: "辉夜大小姐想让我告白～天才们的恋爱头脑战～", score: 7.8 },
    { title: "街角魔族", score: 7.5 },
    { title: "鬼灭之刃", score: 7.3 },
    { title: "炎炎消防队", score: 6.5 },
    { title: "女高中生的无所事事", score: 7.6 },
    { title: "慎重勇者 ～这个勇者明明超强却过分慎重～", score: 6.9 },
    { title: "天使降临到了我身边！", score: 7.3 },
    { title: "不吉波普不笑", score: 7.3 },
    { title: "笨拙之极的上野", score: 6.5 },
    { title: "五等分的新娘", score: 6 },
    { title: "约定的梦幻岛", score: 7.6 },
    { title: "只要可爱即使是变态你也会喜欢我吧？", score: 6.1 },
    { title: "Fate/Grand Order -绝对魔兽战线巴比伦尼亚-", score: 6.8 },
    { title: "家有女友", score: 6.3 },
    { title: "君主·埃尔梅罗二世事件簿 魔眼收集列车 Grace note", score: 6.7 },
    { title: "石纪元", score: 7.2 },
  ],
  "2020": [
    { title: "异种族风俗娘评鉴指南", score: 7.7 },
    { title: "魔女之旅", score: 7.1 },
    { title: "安达与岛村", score: 7.3 },
    { title: "异度侵入", score: 7.5 },
    { title: "别对映像研出手！", score: 8.1 },
    { title: "咒术回战", score: 7.1 },
    { title: "总之就是非常可爱", score: 6.3 },
    { title: "隐瞒之事", score: 7.7 },
    { title: "虚构推理", score: 6.3 },
    { title: "恋爱小行星", score: 6.9 },
    { title: "你与我最后的战场，亦或是世界起始的圣战", score: 5.5 },
    { title: "邪神与厨二病少女’", score: 7.3 },
    { title: "转生成为了只有乙女游戏破灭Flag的邪恶大小姐", score: 6.5 },
    { title: "在魔王城说晚安", score: 7 },
    { title: "租借女友", score: 5.8 },
  ],
  "2021": [
    { title: "86 -不存在的战区-", score: 7.6 },
    { title: "无职转生～", score: 7.9 },
    { title: "回复术士的重来人生", score: 6.2 },
    { title: "奇巧计程车", score: 8.5 },
    { title: "打了300年的史莱姆，不知不觉就练到了满级", score: 6.3 },
    { title: "漂流少年", score: 7.8 },
    { title: "堀与宫村", score: 6.8 },
    { title: "派遣战斗员！", score: 6.3 },
    { title: "古见同学有交流障碍症", score: 7 },
    { title: "奇蛋物语", score: 6.8 },
    { title: "我们的重制人生", score: 6.4 },
    { title: "看得见的女孩", score: 6.8 },
    { title: "异世界迷宫黑心企业", score: 6.7 },
    { title: "女神宿舍的宿管君。", score: 5.8 },
  ],
  "2022": [
    { title: "孤独摇滚！", score: 8.4 },
    { title: "莉可丽丝", score: 6.3 },
    { title: "想要成为影之实力者！", score: 7.1 },
    { title: "夏日重现", score: 7.5 },
    { title: "异世界舅舅", score: 7.6 },
    { title: "更衣人偶坠入爱河", score: 7.2 },
    { title: "彻夜之歌", score: 7.4 },
    { title: "测不准的阿波连同学", score: 6.4 },
    { title: "间谍过家家", score: 7.2 },
    { title: "不道德公会", score: 7.1 },
    { title: "链锯人", score: 6.9 },
    { title: "明日同学的水手服", score: 7.5 },
    { title: "契约之吻", score: 6.9 },
    { title: "相合之物", score: 7.8 },
  ],
  "2023": [
    { title: "葬送的芙莉莲", score: 8.5 },
    { title: "药屋少女的呢喃", score: 7.5 },
    { title: "BanG Dream! It's MyGO!!!!!", score: 8.1 },
    { title: "我心里危险的东西", score: 7.8 },
    { title: "超超超超超喜欢你的100个女朋友", score: 7.3 },
    { title: "别当欧尼酱了！", score: 7.6 },
    { title: "跃动青春", score: 7.7 },
    { title: "宝可梦 地平线", score: 7.5 },
    { title: "香格里拉·弗陇提亚～屎作猎人向神作发起挑战～", score: 6.4 },
    { title: "无神世界的神明活动", score: 6.8 },
    { title: "我推的孩子", score: 7.4 },
    { title: "天国大魔境", score: 7.8 },
    { title: "异世界悠闲农家", score: 6.4 },
  ],
  "2024": [
    { title: "败犬女主太多了！", score: 8 },
    { title: "GIRLS BAND CRY", score: 7.6 },
    { title: "胆大党", score: 7.5 },
    { title: "义妹生活", score: 7.3 },
    { title: "迷宫饭", score: 7.8 },
    { title: "我独自升级", score: 6.5 },
    { title: "小市民系列", score: 6.1 },
    { title: "梦想成为魔法少女", score: 7 },
    { title: "青之箱", score: 6.8 },
    { title: "2.5次元的诱惑", score: 6.7 },
    { title: "地。 ―关于地球的运动―", score: 6.2 },
    { title: "失忆投捕", score: 7.9 },
    { title: "不时轻声地以俄语遮羞的邻座艾莉同学", score: 5.6 },
    { title: "悲喜渔生", score: 7.3 },
    { title: "亚托莉 -我挚爱的时光-", score: 6.3 },
    { title: "缘结甘神家", score: 5.9 },
  ],
};

export default data;
