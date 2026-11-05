const styles=[{id:'all',label:'✳ 全部小世界',desc:'从喜欢的一幅开始，不用一次看完。'},{id:'impression',label:'☀ 印象派',name:'光的小花园',desc:'印象派 · 看一看光线、空气和一闪而过的颜色。',music:'阳光在树叶间'},{id:'post',label:'〰 后印象派',name:'会跳舞的笔触',desc:'后印象派 · 不同画家，用颜色、笔触和形状表达自己的世界。',music:'麦田里的散步'},{id:'real',label:'☁ 写实主义',name:'身边的风景',desc:'写实主义 · 认真看看真实世界里的天空、海水和石头。',music:'海边慢慢呼吸'},{id:'ukiyo',label:'≋ 浮世绘',name:'线条的海洋',desc:'浮世绘 · 这是日本版画传统，试着找找轮廓、线条和大小对比。',music:'浪花的摇篮'}];
const works=[
{id:437307,s:'impression',title:'埃拉尼的白杨树',artist:'卡米耶·毕沙罗',date:'1895',intro:'阳光穿过一排排树，落在草地上。画家用许多细小的笔触，留下眼前的光。',alt:'一片绿色田野与高高的白杨树，远处有房屋和明亮的天空。',prompts:['找一找：哪里最亮？哪里藏着树的影子？','如果你走进这片草地，会听见什么？','在纸上画几棵树，再用不同的绿色点出叶子。'],task:'点出一片小树林',text:'先画三根树干，用浅绿、深绿和黄色的小点点添上叶子。你的小树林是什么季节？'},
{id:436535,s:'post',title:'麦田与柏树',artist:'文森特·梵高',date:'1889',intro:'金色的麦田、深绿的树、卷卷的云，笔触像一条条正在移动的小路。',alt:'金色麦田后方有深绿色柏树，蓝天上飘着卷曲的白云。',prompts:['找一条弯弯的线，用手在空中跟着它走一走。','如果云朵会跳舞，它会怎样动？','用蜡笔画三种线：安静的线、奔跑的线和跳舞的线。'],task:'让线条去散步',text:'拿一支蜡笔，在纸上画一条弯弯的路。它经过了哪里？给这条路添上你想象的故事。'},
{id:45434,s:'ukiyo',title:'神奈川冲浪里',artist:'葛饰北斋',date:'约 1830—1832',intro:'巨大的浪花弯了起来，远处的富士山显得小小的。这是一幅用木版印出来的画。',alt:'巨大的蓝白色海浪卷向三条船，远处有小小的富士山。',prompts:['近处的浪和远处的山，谁看起来更大？','浪花像什么？你想给它起什么名字？','在纸上画一个大大的弯，再添上许多小小的浪花。'],task:'一大一小的海浪',text:'用蓝色画一个很大的弯，再画一个小小的弯。它们是大海和小海，还是两只正在玩耍的小动物？'},
{id:435882,s:'post',title:'苹果与报春花盆栽',artist:'保罗·塞尚',date:'约 1890',intro:'圆圆的苹果和向上生长的花朵，被放进同一幅画里。塞尚认真观察物体的形状和位置。',alt:'桌面上有红黄色苹果、白色布和一盆开着花的报春花。',prompts:['找一找圆圆的苹果和长长的叶子。','如果苹果和花能说话，它们会聊什么？','把家里的水果摆在纸旁，画出它们不同的大小。'],task:'水果也来排排队',text:'请大人拿两三个水果。你来决定它们的位置，用圆形和椭圆画出它们，再选自己喜欢的颜色。'},
{id:436005,s:'real',title:'平静的海',artist:'古斯塔夫·库尔贝',date:'1869',intro:'宽宽的天空下，海水轻轻靠近岸边。画家把一次真实的观看，变成了可以慢慢欣赏的风景。',alt:'淡色天空下有平静的海面和沙滩，岸边停着小船。',prompts:['用手指一指：天空和海水在哪里相遇？','你想坐在海边的哪里？为什么？','用三条宽宽的色带画天空、海水和沙滩。'],task:'三种颜色的海边',text:'选三种喜欢的颜色，画成天空、海水、沙滩。不一定要蓝色，想象中的海也可以是粉色。'},
{id:436121,s:'impression',title:'坐在花瓶旁的女子',artist:'埃德加·德加',date:'1865',intro:'一大束花占了画面中间，人物坐在旁边。这是德加早期的作品，可以从这里发现不一样的构图。',alt:'盛开的多色花束放在桌上，一位女子坐在画面右侧。',prompts:['花束在画面的哪里？人又在哪里？','这位女士正在想什么？给她编一个小故事。','把你画的主角放在纸的一边，看看另一边可以住什么。'],task:'主角住在纸的哪边',text:'画一个你喜欢的东西，把它放在纸的左边或右边。剩下的空白可以变成花园，也可以留着呼吸。'},
{id:437980,s:'post',title:'柏树',artist:'文森特·梵高',date:'1889',intro:'高高的柏树像一团向上生长的绿色火焰。你可以沿着笔触，看看画家的手走过的路。',alt:'两棵深绿色柏树耸立在田野中，天空有弯曲的云和月牙。',prompts:['哪一棵树最高？树旁边还有什么？','如果这棵树是一位朋友，它会是什么性格？','站起来伸展双臂，做一棵自己的树，再画下它。'],task:'身体变成一棵树',text:'站起来伸伸手，试试高高的树、弯弯的树、被风吹着的树。最后选一个姿势画在纸上。'},
{id:437310,s:'impression',title:'冬日早晨的蒙马特大道',artist:'卡米耶·毕沙罗',date:'1897',intro:'从高处望下去，道路、马车和行人都变小了。城市的一天，正在画里慢慢开始。',alt:'从高处俯瞰宽阔的巴黎街道，两侧是楼房，路上有马车和行人。',prompts:['找找马车。近处和远处的马车一样大吗？','选一个小小的行人：他今天要去哪里？','画一条通往远处的路，近处放大房子，远处放小房子。'],task:'一条会讲故事的路',text:'在纸上画一条路。路上住着谁？它通往哪里？可以边画边把故事讲给身边的人听。'},
{id:435883,s:'post',title:'苹果与梨的静物',artist:'保罗·塞尚',date:'约 1891—1892',intro:'水果不只是好吃，还藏着圆形、椭圆和许多相近的颜色。慢一点看，也能发现小小的不同。',alt:'白色桌布上摆放着苹果和梨，旁边有盘子与器皿。',prompts:['哪一颗水果更圆？哪一颗上面细、下面宽？','如果这些水果要排队，你会怎么排？','不用画轮廓，先用色块拼出一颗想象中的水果。'],task:'一颗想象中的水果',text:'用两三种色块拼成水果。它叫什么？是什么味道？你可以创造一种世界上还没有的水果。'},
{id:436009,s:'real',title:'林间空地的小溪',artist:'古斯塔夫·库尔贝',date:'可能作于 1862',intro:'石头、树木和小溪，藏在深深浅浅的颜色里。真实的风景也值得像寻宝一样慢慢看。',alt:'树木围绕着石头和一条小溪，阳光照亮林间的空地。',prompts:['哪里有石头？水从哪里经过？','如果你是一片树叶，落进水里会去哪里？','捡一片落叶，观察它的边缘，再把它画下来。'],task:'落叶的旅行',text:'和大人去找一片落叶。看看它的形状，在纸上画下它，再画出它想去旅行的地方。'}
];

works.push(...expandedWorks);
const modernWorks=[{id:27992,s:'modern',title:'大碗岛的星期日下午',artist:'乔治·修拉',date:'1884—1886',image:'https://www.artic.edu/iiif/2/2d484387-2509-5e8e-2c43-22f9981972eb/full/843,/0/default.jpg',intro:'许许多多的小点点，远看变成阳光下的公园。修拉让颜色在我们的眼睛里相遇。',alt:'河边公园里有树、人物和小船，画面由许多细小色点组成。',task:'用小点点画阳光',text:'用棉签或笔尖点出一片草地。换两三种颜色，看看它们靠近时会发生什么。',prompts:['找一找：哪些地方藏着许多小点？','站远一点看，颜色有没有变成新的颜色？','用小点点画一片你想去的公园。']},{id:129884,s:'modern',title:'星夜与宇航员',artist:'阿尔玛·托马斯',date:'1972',image:'https://www.artic.edu/iiif/2/c7040677-9f0e-f43d-ae60-bf514b86ac70/full/843,/0/default.jpg',intro:'蓝色的短笔触像夜空，也像从飞机窗口看到的光。画家把对太空的好奇变成了闪闪的颜色。',alt:'蓝色、白色和红橙色短笔触组成一片闪烁的抽象星空，角落有亮色形状。',task:'给夜空铺上短短的光',text:'用短短的彩色线条铺一片天空，再在其中放一颗你想象中的小星星。',prompts:['蓝色的短线朝哪些方向走？','哪一小块颜色像正在发光？','用短线画一片会闪烁的夜空。']},{id:229379,s:'contemporary',title:'Mr. Pointy（尖尖先生）',artist:'村上隆',date:'2011',image:'https://www.artic.edu/iiif/2/229379/full/843,/0/default.jpg',intro:'这是村上隆把日本流行文化、动画感和当代艺术放在一起的作品。尖尖的形状和很多手臂，很适合玩一场想象游戏。',alt:'深色背景中有一个色彩鲜艳、带有尖尖形状和多只手臂的卡通感艺术形象。',task:'发明一个有趣的朋友',text:'画一个有特别形状的朋友。它可以有三只手、五只眼睛，或者会发出彩色的光。',prompts:['找找它身上最尖的地方和最圆的地方。','它是在跳舞、打招呼，还是在保护一个秘密？','发明一个只属于你的奇妙朋友。']},{id:24645,s:'modern',title:'神奈川冲浪里（再发现）',artist:'葛饰北斋',date:'约1830—1832',image:'https://www.artic.edu/iiif/2/24645/full/843,/0/default.jpg',intro:'北斋的浪花影响了很多后来的艺术家。把它和现代、当代的作品放在一起，你可以发现艺术家一直在重新想象自然。',alt:'巨大的蓝色浪花卷起白色浪尖，远处有小小的富士山。',task:'让浪花连接不同时代',text:'先画一朵大浪，再在旁边画一朵属于未来的浪。它会是什么颜色？',prompts:['浪尖的白色像什么形状？','远处的小山为什么看起来那么安静？','画一朵来自未来的浪花。']}];
styles.push({id:'modern',label:'▦ 现代艺术',name:'颜色的新秩序',desc:'现代艺术 · 画家开始用点、短笔触和大胆的结构重新组织世界。',music:'麦田里的散步'});styles.push({id:'contemporary',label:'✦ 当代艺术',name:'想象的游乐场',desc:'当代艺术 · 动画、流行文化和艺术可以一起打开想象。',music:'阳光在树叶间'});
modernWorks.forEach(w=>{w.questions=[...w.prompts,'你在哪里看见了它？','如果它会动，会怎样动？','哪一块颜色最像你的心情？','它在画面前面还是后面？','你想给它配什么声音？','画一个属于你的版本。'];works.push(w);extraQuestions[w.id]=[w.prompts[0],w.prompts[1],w.prompts[2],'你在哪里看见了它？','哪一块颜色最像你的心情？']});
const domiWorks=[
{id:20260125,s:'domi',title:'彩色的大桥与城市',artist:'多米',date:'2026-01-25',image:'assets/domi-20260125.jpg',intro:'这是多米在 2026 年 1 月 25 日画下的作品。画面里有桥、房子、太阳和许多颜色，像一个热闹的城市故事。',alt:'多米的蜡笔画：彩色大桥、房屋、太阳和水面组成的想象城市。',task:'找找城市里的桥',text:'指一指画里的桥、房子和太阳。你觉得这座桥通往哪里？',prompts:['画里最宽的桥在哪里？','你看到了哪些颜色在一起玩？','给这座城市添一个新朋友。']},
{id:20260326,s:'domi',title:'彩色幻想城',artist:'多米',date:'2026-03-26',image:'assets/domi-20260326.jpg',intro:'这是多米在 2026 年 3 月 26 日画下的作品。许多房子、动物、云朵和花被放在同一座想象城市里。',alt:'多米的彩笔画：紫色房屋、动物、河流、花朵和奇妙城市组成的幻想世界。',task:'给幻想城找居民',text:'选一个你最喜欢的角色，再想一想它住在哪一间房子里。',prompts:['你先看到了哪一个角色？','房子、河流和花朵是怎样挨在一起的？','为这座幻想城设计一条规则。']},
{id:20260409,s:'domi',title:'动物朋友的彩色乐园',artist:'多米',date:'2026-04-09',image:'assets/domo-20260409.jpg',intro:'这是多米在 2026 年 4 月 9 日画下的作品。树、动物、房子和数字一起组成了一个快乐的乐园。',alt:'多米的彩笔画：绿色树木、动物、房子、彩色角色和数字组成的乐园。',task:'数一数乐园里的朋友',text:'找出一个动物、一个房子和一个你想认识的角色。',prompts:['哪一个朋友的颜色最亮？','画面里有哪些圆圆的形状？','给乐园画一扇新的门。']},
{id:20260509,s:'domi',title:'小动物的一天',artist:'多米',date:'2026-05-09',image:'assets/domo-20260509.jpg',intro:'这是多米在 2026 年 5 月 9 日画下的作品。天空、花园、房子和三个小角色，好像正在发生一个故事。',alt:'多米的画：蓝色云朵、太阳、花园、房子和三个小角色。',task:'讲讲小动物的一天',text:'看看三个角色分别在做什么，把它们的一天讲给大人听。',prompts:['谁离你最近？谁在最远的地方？','天空里有什么，地面上有什么？','给其中一个角色画一件新衣服。']},
{id:20260727,s:'domi',title:'森林里的动物朋友',artist:'多米',date:'2026-07-27',image:'assets/domi-20260727.jpg',intro:'这是多米在 2026 年 7 月 27 日画下的作品。森林、动物、胡萝卜和房子挤在一起，像一个忙忙碌碌的夏日世界。',alt:'多米的画：森林、动物、房屋、胡萝卜、人物和绿色草地组成的彩色世界。',task:'找一条森林小路',text:'沿着画面里的线条走一走，想象自己从哪里出发、走到哪里。',prompts:['哪一棵树最大？','你能找到几种绿色？','给森林里画一条只属于你的路。']},
{id:20260919,s:'domi',title:'海底生日派对',artist:'多米',date:'2026-09-19',image:'assets/domi-20260919.jpg',intro:'这是多米在 2026 年 9 月 19 日画下的作品。大鱼、小鱼、美人鱼、海草和海星一起组成了热闹的海底派对。',alt:'多米的画：大鱼、小鱼、美人鱼、海草和海星组成的明亮海底世界。',task:'给海底派对送礼物',text:'挑一个海底朋友，想一想你要送它什么礼物。',prompts:['大鱼和小鱼的大小有什么不同？','海底有哪些会弯弯摇摆的线条？','画一件海底派对的新装饰。']}
];
styles.push({id:'domi',label:'♡ 多米的画',name:'多米的小画廊',desc:'多米的小画廊 · 按文件名日期，从 2026 年 1 月到 9 月，看看自己的画怎样慢慢长大。',music:'多米的彩色时光'});
domiWorks.forEach(w=>{w.questions=[...w.prompts,'这幅画让你想到哪一天？','哪一个细节最像你的想法？','如果重新画一次，你还想加什么？','你想给这幅画配什么声音？','把画里的故事讲给大人听。','画一幅今天的新作品。'];works.push(w);extraQuestions[w.id]=[w.prompts[0],w.prompts[1],w.prompts[2],'哪一个细节最像你的想法？','如果重新画一次，你还想加什么？']});
Object.assign(works.find(w=>w.id===437430),{task:'画一个喜欢的家庭时刻',materials:'纸和喜欢的画笔。',text:'想一个你喜欢的家庭时刻：一起吃饭、散步或坐着聊天。画一个角色和周围的事物，不用照着名画画。'});
styles.push(...gardenStyles);
works.unshift(...gardenWorks);
const dimensions=[
{id:'detail',label:'⌕ 找细节',note:'先找一个小发现。可以说，也可以用手指给大人看。',explain:'细致观察：先让孩子描述眼前看到的东西。跟着问“你在哪里看到的？”，不用急着解释画家的意思。'},
{id:'color',label:'● 看颜色',note:'找两种颜色比一比，不认识颜色名字也没关系。',explain:'色彩：比较相近或不同的颜色。可以用生活里的东西来命名，比如“橘子色”。暖色、冷色是可选词，不必背诵。'},
{id:'line',label:'〰 找线条',note:'试着让手指在空中，沿着线条走一走。',explain:'线条与形状：从方向、长短、弯直来感受笔触和轮廓。孩子可以用身体动作回应。'},
{id:'light',label:'◐ 看明暗',note:'找一块亮的地方，再找一块暗的地方。',explain:'明暗：比较颜色深浅和画中的亮暗。不必断言光一定从某个方向来；绘画也可以改变真实的光线。'},
{id:'space',label:'▧ 看位置',note:'找一找谁在前、谁在后，谁占的地方更大。',explain:'构图与空间：用前后、大小、遮挡、留白这些具体关系进入。可以问“如果把它移到另一边，你觉得会怎样？”。'},
{id:'story',label:'✧ 编故事',note:'这是你的想象，不是猜画家的标准答案。',explain:'叙事与想象：分清“画里看得见的”和“我们想象出来的”。接着问“然后呢？”，让孩子自己决定故事方向。'},
{id:'sound',label:'♫ 想声音',note:'这是想象的声音，画本身没有固定的配乐。',explain:'跨感官联想：把视觉与声音、节奏联系。可以先暂停背景音乐再想象，也可以完全不配声音。'},
{id:'make',label:'✎ 动手玩',note:'现在可以离开屏幕，在纸上或生活里试一试。',explain:'创造与回应：把刚刚的发现用自己的方式表达。无需复制原画，也不比较谁画得更像。'}
];
works.forEach(w=>{let q=extraQuestions[w.id];w.questions=[w.prompts[0],q[0],q[1],q[2],q[3],w.prompts[1],q[4],w.prompts[2]]});
// Reviewed question sequences and source mappings, V4.0.
works.forEach(w=>{
 const lesson=littleLessons[w.id];
 if(!lesson)throw new Error('Missing lesson '+w.id);
 w.littleQuestions=lesson;
 w.prompts=[...lesson];
 w.questions[0]=lesson[0];w.questions[5]=lesson[1];w.questions[7]=lesson[2];
 if(modernWorks.includes(w)||domiWorks.includes(w)){
  w.questions=[lesson[0],'哪一种颜色最先吸引你？','选一条喜欢的线，用手指在空中走一走。','你注意到了哪一块比较亮的地方？','看看物体或色块的位置，你发现了什么？',lesson[1],'假如这幅画有声音，你想到什么？',lesson[2]];
 }
});
gardenWorks.forEach(w=>{w.questions=[w.prompts[0],...extraQuestions[w.id].slice(0,4),w.prompts[1],extraQuestions[w.id][4],w.prompts[2]]});
let lessonMode='simple';
const artistNotes={
'亨利·马蒂斯':'法国 · 用纸片与颜色自由创造。','胡安·米罗':'西班牙 · 让形状和线条变成自己的故事。','克劳德·莫奈':'法国 · 观察自然中光与颜色的变化。','瓦西里·康定斯基':'俄罗斯出生 · 发现几何、节奏与色彩。','保罗·克利':'瑞士出生 · 用图形表达想法。','皮特·蒙德里安':'荷兰 · 探索直线、位置与留白。','齐白石':'中国 · 从自然小生命进入水墨。','草间弥生':'日本 · 从圆点和重复探索空间。',
'卡米耶·毕沙罗':'法国 · 一起找找树木和街道里的光。',
'埃德加·德加':'法国 · 看看人物怎样站、怎样动，以及主角放在哪里。',
'奥古斯特·雷诺阿':'法国 · 在人物与花园中发现柔和的色彩。',
'文森特·梵高':'荷兰 · 从风景、花束、鞋子和自画像里找笔触。',
'保罗·塞尚':'法国 · 用水果、房屋和山坡，发现形状与位置。',
'古斯塔夫·库尔贝':'法国 · 看真实风景中的石头、海水和树木。',
'温斯洛·霍默':'美国 · 在乡间景色和儿童游戏里发现生活。',
'葛饰北斋':'日本 · 用版画中的线条、色块和大小关系看世界。',
'乔治·修拉':'法国 · 用小点点观察颜色怎样在眼睛里相遇。',
'阿尔玛·托马斯':'美国 · 从短短的色彩笔触想象星空与光。',
'村上隆':'日本 · 从动画感和流行文化进入当代艺术。',
'多米':'自己的画 · 按日期回看颜色、故事和想象怎样慢慢长大。'
};
const moodLabels=['☀ 开心','☁ 平静','✦ 好奇','！ 惊讶','↗ 兴奋','♡ 温暖','◌ 孤单','☂ 难过','◒ 有点害怕','？ 困惑','～ 有点无聊','… 说不出来'];

const $=s=>document.querySelector(s);let selected='all',selectedArtist='all',browseMode='style',visibleLimit=12,current=works[0],step=0,liked=new Set();try{liked=new Set(JSON.parse(localStorage.getItem('art-garden-likes')||'[]'))}catch{}
function save(){try{localStorage.setItem('art-garden-likes',JSON.stringify([...liked]))}catch{}}
function toggleLike(id){liked.has(id)?liked.delete(id):liked.add(id);save();render();if($('#painting').open)$('#like').textContent=liked.has(current.id)?'♥ 已收藏喜欢':'♡ 我喜欢这幅'}

function visibleWorks(){return works.filter(w=>(browseMode==='style'?(selected==='all'||w.s===selected):(selectedArtist==='all'||w.artist===selectedArtist))&&(!$('#only-liked').checked||liked.has(w.id)))}
function renderArtists(){
 $('#artist-groups').innerHTML='<button class="all-artists '+(selectedArtist==='all'?'active':'')+'" data-artist="all" aria-pressed="'+(selectedArtist==='all')+'">✳ 全部画家</button>'+[{label:'☀ 印象派',names:['克劳德·莫奈','卡米耶·毕沙罗','埃德加·德加','奥古斯特·雷诺阿']},{label:'〰 后印象派',names:['文森特·梵高','保罗·塞尚']},{label:'☁ 法国写实主义',names:['古斯塔夫·库尔贝']},{label:'☁ 美国写实传统',names:['温斯洛·霍默']},{label:'≋ 浮世绘',names:['葛饰北斋']},{label:'▦ 现代艺术',names:['亨利·马蒂斯','胡安·米罗','瓦西里·康定斯基','保罗·克利','皮特·蒙德里安','乔治·修拉','阿尔玛·托马斯']},{label:'✦ 当代艺术',names:['草间弥生','村上隆']},{label:'墨 中国水墨',names:['齐白石']},{label:'♡ 多米的画',names:['多米']}].map(s=>{
  let names=s.names;
  return `<section class="artist-group"><h3>${s.label}</h3><div>${names.map(name=>{let artistWorks=works.filter(w=>w.artist===name);return `<button class="artist-chip ${selectedArtist===name?'active':''}" aria-pressed="${selectedArtist===name}" data-artist="${name}"><img src="${artistWorks[0].image||`assets/${artistWorks[0].id}.jpg`}" alt="" loading="lazy"><span><b>${name}</b><small>${artistWorks.length} 幅作品</small></span></button>`}).join('')}</div></section>`
 }).join('');
}
function render(){
 document.querySelectorAll('[data-mode]').forEach(b=>{let active=b.dataset.mode===browseMode;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active)});
 $('.filters').hidden=browseMode!=='style';$('#artist-groups').hidden=browseMode!=='artist';
 $('.filters').innerHTML=styles.map(s=>`<button class="${s.id===selected?'active':''}" aria-pressed="${s.id===selected}" data-filter="${s.id}">${s.label}</button>`).join('');renderArtists();
 $('#style-desc').textContent=browseMode==='artist'?(selectedArtist==='all'?'按流派认识画家，再从他的一幅作品开始。':selectedArtist+' · '+artistNotes[selectedArtist]):styles.find(s=>s.id===selected).desc;
 let list=visibleWorks();$('#cards').innerHTML=list.length?list.slice(0,visibleLimit).map(w=>`<article class="card"><button class="card-open" data-open="${w.id}" aria-label="欣赏${w.title}"><div class="card-image"><img src="${w.image||`assets/${w.id}.jpg`}" alt="${w.alt}" loading="lazy"><span class="tag">${styles.find(s=>s.id===w.s).name}</span></div></button><div class="card-info"><div><h3><button data-open="${w.id}">${w.title}</button></h3><p>${w.artist} · ${w.date}</p></div><button class="heart ${liked.has(w.id)?'liked':''}" data-like="${w.id}" aria-label="${liked.has(w.id)?'取消喜欢':'喜欢'}${w.title}" aria-pressed="${liked.has(w.id)}">${liked.has(w.id)?'♥':'♡'}</button></div><button class="card-question" data-open="${w.id}">小发现 · ${w.prompts[0]} ↗</button></article>`).join(''):'<div class="empty"><p>这个分类里还没有你喜欢的作品。可以先关闭“只看我喜欢的”，或者换个分类。</p><button class="outline" id="clear-filters">回到全部作品</button></div>';
 $('#result-count').textContent=`找到 ${list.length} 幅 · 已显示 ${Math.min(visibleLimit,list.length)} 幅`;
 $('#load-more').hidden=list.length<=visibleLimit;
}
$('.browse-modes').onclick=e=>{let b=e.target.closest('[data-mode]');if(b){browseMode=b.dataset.mode;visibleLimit=12;render()}};
$('.filters').onclick=e=>{let b=e.target.closest('[data-filter]');if(b){selected=b.dataset.filter;visibleLimit=12;render();if(selected!=='all')setTheme(selected)}};
$('#artist-groups').onclick=e=>{let b=e.target.closest('[data-artist]');if(b){selectedArtist=b.dataset.artist;visibleLimit=12;render();if(selectedArtist!=='all')setTheme(works.find(w=>w.artist===selectedArtist).s)}};
$('#only-liked').onchange=()=>{visibleLimit=12;render()};$('#load-more').onclick=()=>{visibleLimit+=12;render()};
$('#cards').onclick=e=>{let b=e.target.closest('[data-open]'),h=e.target.closest('[data-like]');if(b)openPainting(Number(b.dataset.open));if(h)toggleLike(Number(h.dataset.like));if(e.target.closest('#clear-filters')){selected='all';selectedArtist='all';$('#only-liked').checked=false;visibleLimit=12;render()}};
function openPainting(id){stopSpeech();current=works.find(w=>w.id===id);step=0;lessonMode='simple';$('#modal-style').textContent=styles.find(s=>s.id===current.s).label+' / '+styles.find(s=>s.id===current.s).name;$('#large-img').src=current.image||`assets/${id}.jpg`;$('#large-img').alt=current.alt;$('#title').textContent=current.title;$('#artist').textContent=current.artist+' / '+current.date;$('#intro').textContent=current.intro;$('#credit').textContent=current.artist==='多米'?`多米的原创作品，《${current.title}》，创作日期 ${current.date}。图片由家长提供，日期来自图片文件名。`:`${current.artist}，《${current.title}》，${current.date}。博物馆馆藏资料与图像来源见作品详情。`;$('#museum').href=current.artist==='多米'?'#':`https://www.metmuseum.org/art/collection/search/${id}`;$('#museum').textContent=current.artist==='多米'?'多米的作品 · 日期来自文件名':'家长查看博物馆原始资料 ↗';$('#like').textContent=liked.has(id)?'♥ 已收藏喜欢':'♡ 我喜欢这幅';$('.painting-area').classList.remove('zoomed');$('#zoom').textContent='＋ 放大看看';$('.painting-copy').scrollTop=0;$('#mood-options').innerHTML=moodLabels.map(m=>`<button aria-pressed="false">${m}</button>`).join('');$('#own-feeling').value='';$('#mood-response').textContent='每个人的感觉都可以不同。';if(current.museum)$('#museum').href=current.museum;if(current.credit)$('#credit').textContent=current.artist+'，《'+current.title+'》，'+current.date+'。'+current.credit;setPrompt();setTheme(current.s==='ink'?'ink':current.s);setActivity(current);if(!$('#painting').open)$('#painting').showModal()}
function setPrompt(){
 stopSpeech();const simple=lessonMode==='simple',items=simple?littleSteps:dimensions,d=items[step];
 $('.lesson-modes').querySelectorAll('button').forEach(b=>{const active=b.dataset.lessonMode===lessonMode;b.setAttribute('aria-pressed',String(active));b.classList.toggle('active',active)});
 $('.steps').innerHTML=items.map((item,i)=>`<button class="step ${i===step?'active':''}" data-step="${i}" aria-pressed="${i===step}">${item.label}</button>`).join('');
 $('#prompt-type').textContent=d.label+(simple?' · 可以只选这一步':' · 家长任选一个角度');
 $('#prompt').textContent=simple?current.littleQuestions[step]:current.questions[step];
 $('#prompt-note').textContent=d.note;$('#dimension-explanation').textContent=d.explain;
 $('#question-rationale').textContent=d.explain;
 $('#question-sources').innerHTML=educationLinks(simple?d.sources:dimensionSources[step]);
 const showWorkshop=(simple&&step===2)||(!simple&&step===7);$('#workshop').hidden=!showWorkshop;$('#workshop-title').textContent=current.task;$('#workshop-materials').textContent='准备：'+(current.materials||'纸、蜡笔或喜欢的画笔；也可以用动作回应。');$('#workshop-text').textContent=current.text;$('.grownup-note').open=false;$('.question-source').open=false;
}
$('.lesson-modes').onclick=e=>{const b=e.target.closest('[data-lesson-mode]');if(b){lessonMode=b.dataset.lessonMode;step=0;setPrompt()}};
$('#large-img').onerror=()=>{$('#image-status').hidden=false;$('.lesson-content').hidden=true;stopSpeech()};
$('#large-img').onload=()=>{$('#image-status').hidden=true;$('.lesson-content').hidden=false};
$('.steps').onclick=e=>{let b=e.target.closest('[data-step]');if(b){step=Number(b.dataset.step);setPrompt()}};$('#zoom').onclick=()=>{let a=$('.painting-area');a.classList.toggle('zoomed');$('#zoom').textContent=a.classList.contains('zoomed')?'－ 回到完整画作':'＋ 放大看看'};$('#like').onclick=()=>toggleLike(current.id);$('#next').onclick=()=>{let list=visibleWorks();if(!list.length)list=[current];let i=list.findIndex(w=>w.id===current.id);openPainting(list[(i+1)%list.length].id)};
function moodResponse(){let labels=[...$('#mood-options').querySelectorAll('.selected')].map(b=>b.textContent.slice(b.textContent.indexOf(' ')+1)),own=$('#own-feeling').value.trim();$('#mood-response').textContent=(labels.length||own)?'你可以同时有不同的感受。愿意说说，画里的什么让你有这种感觉吗？':'每个人的感觉都可以不同。'}
$('#mood-options').onclick=e=>{let b=e.target.closest('button');if(b){let active=b.classList.toggle('selected');b.setAttribute('aria-pressed',active);moodResponse()}};$('#own-feeling').oninput=moodResponse;
let speechActive=false;function stopSpeech(){if('speechSynthesis'in window)window.speechSynthesis.cancel();speechActive=false;$('#read').textContent='♬ 听听问题';if(master)master.gain.value=Number($('#volume').value)/100*.16}
$('#read').onclick=()=>{if(!('speechSynthesis'in window)){$('#prompt-note').textContent='这个浏览器暂不支持朗读，请身边的大人读给你听。';return}if(speechActive){stopSpeech();return}let u=new SpeechSynthesisUtterance($('#prompt').textContent);u.lang='zh-CN';u.rate=.83;speechActive=true;$('#read').textContent='■ 停止朗读';if(master)master.gain.value=0;u.onend=stopSpeech;u.onerror=()=>{stopSpeech();$('#prompt-note').textContent='朗读暂时不可用，请大人帮忙读一读。'};window.speechSynthesis.speak(u)};
document.querySelectorAll('.close').forEach(b=>b.onclick=()=>b.closest('dialog').close());$('#painting').addEventListener('close',stopSpeech);document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){let r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}}));
let activityIndex=1;function setActivity(w){$('#activity-name').textContent=w.task;$('#activity-text').textContent=w.text;$('.activity .materials').textContent='准备：'+(w.materials||'纸 + 蜡笔或彩色铅笔 + 一点点想象力')}$('#another').onclick=()=>{activityIndex=(activityIndex+1)%works.length;setActivity(works[activityIndex])};
const research=educationGuideHTML();
function showInfo(){stopSpeech();$('#info-content').innerHTML=research;$('#info').showModal()}$('#parents').onclick=showInfo;$('#sources').onclick=showInfo;$('#question-guide').onclick=showInfo;
let ctx,master,timer,playing=false,noteIndex=0,theme='impression';const music={ink:{notes:[48,55,60,64,60,55,52,55],beat:1.25,type:'sine'},impression:{notes:[60,64,67,72,69,67,64,62,60,64,67,69,72,67,64,62],beat:.63,type:'sine'},post:{notes:[60,62,64,67,69,67,64,62,64,67,72,69,67,64,62,60],beat:.78,type:'triangle'},real:{notes:[48,55,60,64,60,55,52,55,48,55,62,64,62,55,52,48],beat:1.25,type:'sine'},ukiyo:{notes:[62,65,67,69,72,69,67,65,62,67,69,74,72,69,65,62],beat:.9,type:'sine'},modern:{notes:[60,64,67,72,67,64,60,62,65,69,72,69,65,62,60,64],beat:.72,type:'triangle'},contemporary:{notes:[60,67,64,72,69,76,72,67,64,60,67,72,69,64,60,55],beat:.55,type:'sine'},domi:{notes:[60,64,67,69,72,69,67,64,60,62,65,69,72,69,65,62],beat:.82,type:'triangle'}};
function setTheme(s){theme=s;noteIndex=0;$('#music-title').textContent=styles.find(x=>x.id===s).music;$('#music-note').textContent='原创器乐小循环 · '+(playing?'正在轻轻播放':'点击开启');if(playing){clearTimeout(timer);tick()}}
function tone(midi,time,duration,amp,type){let o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.value=440*Math.pow(2,(midi-69)/12);g.gain.setValueAtTime(0,time);g.gain.linearRampToValueAtTime(amp,time+.045);g.gain.exponentialRampToValueAtTime(.0001,time+duration);o.connect(g);g.connect(master);o.start(time);o.stop(time+duration+.05)}
function tick(){if(!playing)return;const m=music[theme],n=m.notes[noteIndex%m.notes.length],t=ctx.currentTime+.03;tone(n,t,m.beat*2,.46,m.type);if(noteIndex%4===0){tone(n-12,t,m.beat*3,.2,'sine');tone(n-5,t+.12,m.beat*3,.08,'sine')}noteIndex++;timer=setTimeout(tick,m.beat*1000)}
async function startMusic(){try{if(!ctx){ctx=new(window.AudioContext||window.webkitAudioContext)();master=ctx.createGain();master.gain.value=Number($('#volume').value)/100*.16;master.connect(ctx.destination)}await ctx.resume();playing=true;$('#modal-music').textContent='Ⅱ 暂停音乐';$('#music-toggle').textContent='Ⅱ 暂停';$('#music-toggle').setAttribute('aria-label','暂停背景音乐');$('#music-note').textContent='原创器乐小循环 · 正在轻轻播放';if(speechActive)master.gain.value=0;tick()}catch{$('#music-note').textContent='当前浏览器无法播放，请换一个浏览器试试'}}
function pauseMusic(){playing=false;$('#modal-music').textContent='♫ 播放音乐';clearTimeout(timer);if(ctx)ctx.suspend();$('#music-toggle').textContent='▶ 播放';$('#music-toggle').setAttribute('aria-label','播放背景音乐');$('#music-note').textContent='原创器乐小循环 · 已暂停'}$('#music-toggle').onclick=()=>playing?pauseMusic():startMusic();$('#volume').oninput=()=>{if(master&&!speechActive)master.gain.setTargetAtTime(Number($('#volume').value)/100*.16,ctx.currentTime,.1)};document.addEventListener('visibilitychange',()=>{if(document.hidden){pauseMusic();stopSpeech()}});render();setActivity(works[1]);

$('#modal-music').onclick=()=>playing?pauseMusic():startMusic();

const requestedWork=Number(new URLSearchParams(location.search).get('work'));if(requestedWork&&works.some(w=>w.id===requestedWork))openPainting(requestedWork);
