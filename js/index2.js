/**
 * Created by Administrator on 2017/7/20.
 */
window.onload= function () {
    headerSet();
    timeCutDown();
    banner();
}
function headerSet(){
    var nav=document.querySelector('.jd_nav');
    var navHeight=nav.offsetHeight+nav.offsetTop;
    var header=document.querySelector('.jd_header');
    window.onscroll= function () {
        var scrollHeight=window.document.body.scrollTop;
        if(scrollHeight>navHeight){
            header.style.backgroundColor='rgba(201, 21, 35,1)';
        }else{
            header.style.backgroundColor='rgba(201, 21, 35,0.4)';
        }
    }
}
function timeCutDown(){
    var timeLiArr=document.querySelectorAll('.timeCutDown li');
    var totalhour=3;
    var totalSec=totalhour*3600;
    timeCaculate(totalSec,timeLiArr);
    var timer=setInterval(function () {
        totalSec--;
        if(totalSec<=0){
            clearInterval(timer);
        }
        timeCaculate(totalSec,timeLiArr);
    },1000);
}
function timeCaculate(totalSec,timeLiArr){
    var hour=Math.floor(totalSec/3600);
    var minute=Math.floor(totalSec%3600/60);
    var second=totalSec%60;
    timeLiArr[0].innerHTML=Math.floor(hour/10);
    timeLiArr[1].innerHTML=hour%10;
    timeLiArr[3].innerHTML=Math.floor(minute/10);
    timeLiArr[4].innerHTML=minute%10;
    timeLiArr[6].innerHTML=Math.floor(second/10);
    timeLiArr[7].innerHTML=second%10;
}
function banner(){
    var moveUI=document.querySelector('.banner_images');
    var moveIndexArr=document.querySelectorAll('.banner_index li');
    var width=window.document.body.offsetWidth;
    var index=1;
    //moveUI.style.transform='translateX('+(-index*width)+'px)';
    var timer=setInterval(function () {
        index++;
        moveUI.style.transition='all .3s';
        moveUI.style.transform='translateX('+(-index*width)+'px)';
    },1000);
    moveUI.addEventListener('webkitTransitionEnd', function () {
        if(index>8){
            index=1;
            moveUI.style.transition='';
            moveUI.style.transform='translateX('+(-index*width)+'px)';
        }else if(index<1){
            index=8;
            moveUI.style.transition='';
            moveUI.style.transform='translateX('+(-index*width)+'px)';
        }
        for(var i=0;i<moveIndexArr.length;i++){
            moveIndexArr[i].className="";
        }
        moveIndexArr[index-1].className="current";
    });
    var startX=0;
    var moveX=0;
    var distanceX=0;
    moveUI.addEventListener('touchstart', function (event) {
        clearInterval(timer);
        moveUI.style.transition='';
        startX=event.touches[0].clientX;
    });
    moveUI.addEventListener('touchmove', function (event) {
        moveX=event.touches[0].clientX-startX;
        moveUI.style.transform='translateX('+(moveX-index*width)+'px)';
    });
    moveUI.addEventListener('touchend', function () {
        distanceX=width/3;
        if(Math.abs(moveX)>distanceX){
            if(moveX>0){
                index--;
            }else{
                index++;
            }
            moveUI.style.transition='all .3s';
            moveUI.style.transform='translateX('+(-index*width)+'px)';
        }else{
            moveUI.style.transition='all .3s';
            moveUI.style.transform='translateX('+(-index*width)+'px)';
        }
        timer=setInterval(function () {
            index++;
            moveUI.style.transition='all .3s';
            moveUI.style.transform='translateX('+(-index*width)+'px)';
        },1000);
    });
}

function bannerAutoPlay(){
    var banner_images=document.querySelector(".banner_images");
    var indexLiArr=document.querySelectorAll(".banner_index li");
    var width=window.document.body.offsetWidth;
    var index=1;
    var timer=setInterval(function () {
        index++;
        banner_images.style.transform='translateX('+(-width*index)+'px)';
        banner_images.style.transition='all .3s';
    },1000);
    banner_images.addEventListener('webkitTransitionEnd', function () {
        if(index>8){
            index=1;
            banner_images.style.transition = '';
            banner_images.style.transform='translateX('+(-width*index)+'px)';
        }else if(index<1){
            index=8;
            banner_images.style.transition = '';
            banner_images.style.transform='translateX('+(-width*index)+'px)';
        }
        for(var i=0;i<indexLiArr.length;i++){
            indexLiArr[i].className="";
        }
        indexLiArr[index-1].className="current";
    });
    var startX=0;
    var moveX=0;
    var distanceX=0;
    banner_images.addEventListener('touchstart', function (event) {
        clearInterval(timer);
        banner_images.style.transition = '';
        startX=event.touches[0].clientX;
    });
    banner_images.addEventListener('touchmove', function (event) {
        moveX=event.touches[0].clientX-startX;
        banner_images.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
    });
    banner_images.addEventListener('touchend', function () {
        distanceX=width/3;
        if(Math.abs(moveX)>distanceX){
            if(moveX>0){
                index--;
            }else{
                index++;
            }
            banner_images.style.transition = 'all .3s';
            banner_images.style.transform='translateX('+(-width*index)+'px)';
        }else{
            banner_images.style.transition = 'all .3s';
            banner_images.style.transform='translateX('+(-width*index)+'px)';
        }
        timer=setInterval(function () {
            index++;
            banner_images.style.transform='translateX('+(-width*index)+'px)';
            banner_images.style.transition='all .3s';
        },1000);
    });
}

function banner1() {

    //1 获取变量
    // 屏幕的宽度
    var width = document.body.offsetWidth;
    // console.log(width);\

    //  获取 轮播图的ul
    var moveUl = document.querySelector('.banner_images');

    // 添加过度效果 由于后面已经设置了 所以 这里 已经没有意义了
    // moveUl.style.transition = 'all .3s';

    // 索引的li标签
    var indexLiArr = document.querySelectorAll('.banner_index li');

    // 定义 index 记录 当前的 索引值
    // 默认 我们的ul 已经 往左边 移动了 一倍的宽度
    // (为什么 一位 最左边的图片 是用来做无限轮播的 不希望用户看到) 所以 index =1
    var index = 1;

    // 开启定时器
    var timeId = setInterval(function () {
        // 累加
        index++;

        // 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
        moveUl.style.transition = 'all .3s';

        // 修改 ul的位置
        moveUl.style.transform = 'translateX('+index*width*-1+'px)';

    },1000);


    // 过渡 结束事件 用来 修正 index的值 并修改索引
    moveUl.addEventListener('webkitTransitionEnd',function () {
        console.log('过渡结束');

        //  如果 index 太大了
        if (index>8) {
            index = 1;

            // 关闭过渡
            moveUl.style.transition = '';

            // 瞬间 修改一下 ul 的位置
            moveUl.style.transform = 'translateX('+index*width*-1+'px)';
        }else if(index<1){
            // 跳到倒数第二张
            index= 8;

            // 关闭过渡
            moveUl.style.transition = '';

            // 瞬间 修改一下 ul 的位置
            moveUl.style.transform = 'translateX('+index*width*-1+'px)';
        }

        // 修改 索引li标签的 class
        for (var i = 0; i < indexLiArr.length; i++) {
            indexLiArr[i].className = '';
        }

        // 有一个 1的 差值
        indexLiArr[index-1].className = 'current';

    })


    // 注册 三个 touch事件

    // 定义变量 记录 开始的X
    var startX = 0;

    // 记录移动的值
    var moveX = 0;

    // 记录 distanceX
    var distanceX = 0;


    // 触摸开始
    moveUl.addEventListener('touchstart',function (event) {
        // 关闭定时器
        clearInterval(timeId);

        // 关闭过渡效果
        moveUl.style.transition = '';

        // 记录开始值
        startX = event.touches[0].clientX;

    })

    // 触摸中
    moveUl.addEventListener('touchmove',function (event) {
        // 计算移动的值
        moveX = event.touches[0].clientX - startX;

        // 移动ul
        // 默认的移动值是 index*-1*width
        moveUl.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
    })

    // 触摸结束
    /*
     手指松开的时候 判断 移动的距离 进行 是否吸附
     由于 不需要考虑 正负 只需要考虑 距离 Math.abs()
     吸附回的值是 index*-1*width
     如果移动的距离较大
     需要判断正负
     index++;
     index--;
     index*-1*width
     */
    moveUl.addEventListener('touchend',function (event) {

        // 定义 最大的 偏移值
        var maxDistance = width/3;

        // 判断 是否超过
        if (Math.abs(moveX)>maxDistance) {
            // 判断 到底是 往左 还是往右移动
            if (moveX>0) {
                index--;
            }else{
                index++;
            }
            // 为了好看 将 过渡效果开启
            moveUl.style.transition = 'all .3s';

            // 吸附 一整页
            moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';

        }else{
            // 如果 进到这里了 说明 没有超过 我们定义的 最大偏移值 吸附回去即可

            // 为了好看 将 过渡效果开启
            moveUl.style.transition = 'all .3s';

            // 吸附回去
            moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
        }

        // 记录结束值

        // 开启定时器
        timeId = setInterval(function () {
            // 累加
            index++;

            // 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
            moveUl.style.transition = 'all .3s';

            // 修改 ul的位置
            moveUl.style.transform = 'translateX('+index*width*-1+'px)';
        },1000)
    })

}
