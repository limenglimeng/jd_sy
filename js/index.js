window.onload= function () {
    headerOpacity();
    timeCountDown();
    bannerAutoPlay();
}/**
 * Created by Administrator on 2017/7/18.
 */
function headerOpacity(){
    var navDom=document.querySelector('.jd_nav');
    var headerDom=document.querySelector('.jd_header');
    var height=navDom.offsetTop+navDom.offsetWidth;
    window.onscroll= function () {
        var scroll=window.document.body.scrollTop;
        if(scroll>height){
            headerDom.style.backgroundColor='rgba(201, 21, 35,1)';
        }else{
            headerDom.style.backgroundColor='rgba(201, 21, 35,0.4)';
        }
    }
}
function timeCountDown(){
    var totalTime=3;
    var totalSec=totalTime*3600;
    var liArr=document.querySelectorAll(".timeCutDown li");
    timeComputer(totalSec,liArr);
    var timer=setInterval(function () {
        if(totalSec<=0){
            clearInterval(timer);
            return;
        }
        totalSec--;
        timeComputer(totalSec,liArr);
    },1000);
}
function timeComputer(totalSec,liArr){
    var hour=Math.floor(totalSec/3600);
    var minute=Math.floor(totalSec%3600/60);
    var second=totalSec%60;
    liArr[0].innerHTML=Math.floor(hour/10);
    liArr[1].innerHTML=hour%10;
    liArr[3].innerHTML=Math.floor(minute/10);
    liArr[4].innerHTML=minute%10;
    liArr[6].innerHTML=Math.floor(second/10);
    liArr[7].innerHTML=second%10;
}


function bannerAutoPlay(){
    var banner_images=document.querySelector(".banner_images");
    var indexLiArr=document.querySelectorAll(".banner_index li");
    var width=window.document.body.offsetWidth;
    var index=1;
    var startTransition= function () {
        banner_images.style.transition='all .3s';
    };
    var endTransition= function () {
        banner_images.style.transition='';
    };
    var setTransform= function (distance) {
        banner_images.style.transform='translateX('+distance+'px)';
    }
    var timer=setInterval(function () {
        index++;
        //banner_images.style.transform='translateX('+(-width*index)+'px)';
        setTransform(-width*index);
        //banner_images.style.transition='all .3s';
        startTransition();
    },1000);
    banner_images.addEventListener('webkitTransitionEnd', function () {
        if(index>8){
            index=1;
            //banner_images.style.transition = '';
            endTransition();
            //banner_images.style.transform='translateX('+(-width*index)+'px)';
            setTransform(-width*index);
        }else if(index<1){
            index=8;
            //banner_images.style.transition = '';
            endTransition();
            //banner_images.style.transform='translateX('+(-width*index)+'px)';
            setTransform(-width*index);
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
        //banner_images.style.transition = '';
        endTransition();
        startX=event.touches[0].clientX;
    });
    banner_images.addEventListener('touchmove', function (event) {
        moveX=event.touches[0].clientX-startX;
        //banner_images.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
        setTransform(moveX+index*-1*width);
    });
    banner_images.addEventListener('touchend', function () {
        distanceX=width/3;
        if(Math.abs(moveX)>distanceX){
            if(moveX>0){
                index--;
            }else{
                index++;
            }
            //banner_images.style.transition = 'all .3s';
            startTransition();
            //banner_images.style.transform='translateX('+(-width*index)+'px)';
            setTransform(-width*index);
        }else{
                //banner_images.style.transition = 'all .3s';
                startTransition();
                //banner_images.style.transform='translateX('+(-width*index)+'px)';
                setTransform(-width*index);
            }
        timer=setInterval(function () {
            index++;
            //banner_images.style.transform='translateX('+(-width*index)+'px)';
            //banner_images.style.transition='all .3s';
            startTransition();
            setTransform(-width*index);
        },1000);
    });
}
