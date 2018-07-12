!function(){
    var duration = 50
    
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        /*let id = setInterval(()=>{
            n+=1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n>=code.length){
                window.clearInterval(id)
                fn && fn.call()
            }
        },0)*/
        let id
        id = setTimeout(function run(){
            n += 1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n < code.length){
                id = setTimeout(run,duration)
            }else{
                fn && fn.call()
            }
        },duration)
    }
    var code = `
/*
*首先画机器猫的蓝色脑袋～
*/
.head{
    width:318px;
    height:318px;
    border-radius:100%;
    background:#3c9dca;
    border: black solid thick;
    margin: 0 auto;
}
/*
*然后是它的大脸哦!
*/
.white{
    width: 278px;
    height: 245px;
    border-radius: 100%;
    position: relative;
    top: 64px;
    left: 16px;
    background: #FFF;
    border: black solid thin;
    z-index: 0;
}
/*
*接着是机器猫的眼睛 00
*/
.eye_white {
    position: relative;
    top: 32px;
    left: 92px;
    z-index: 1;
}
.eye_white li{
    width: 66px;
    height: 80px;
    border-radius: 100%;
    background: #FFF;
    list-style:none;
    border: black solid thin;
    display:block;
    float:left;
}
/*
*画黑眼珠哦!oo
*/
.eye_black{
    width: 13px;
    height: 24px;
    border-radius: 100%;
    background: #000;
    list-style:none;
    top: 42px;
    position:relative;
    border: black solid thin;
    display:block;
    left: 5px;
    -webkit-animation:move 6s ease infinite;
    animation:move 6s ease infinite;
}
/*
*眼珠子转起来～
*/
@-webkit-keyframes move {
    16%{top:50px;left:16px;}
    32%{top:53px;left:32px;}
    48%{top:42px;left:48px}
    64%{top:53px;left:32px}
    80%{top:50px;left:16px}
}
@keyframes move {
    16%{top:50px;left:16px;}
    32%{top:53px;left:32px;}
    48%{top:42px;left:48px}
    64%{top:53px;left:32px}
    80%{top:50px;left:16px}
}
.eye_black::before{
    content:'';
    width: 5px;
    height: 8px;
    border-radius: 100%;
    background: #fff;
    list-style: none;
    top: 8px;
    position: relative;
    display: block;
    left: 4px;
}
/*
*接着画左边的胡须嘿！(⊙o⊙)
*/
.line_left{
    width: 80px;
    height:1px;
    transform:rotate(20deg);
    top: 48px;
    left: 7px;
    position:relative;
    border-radius: 10%;
    background: #000;
    list-style: none;
    display: block;
}
.line_left::before{
    content:'';
    width: 78px;
    height:1px;
    top: 37px;
    transform:rotate(-20deg);
    position:relative;
    border-radius: 10%;
    background: #000;
    list-style: none;
    display: block;
}
.line_left::after{
    content:'';
    transform:rotate(-40deg);
    width: 80px;
    height:1px;
    top: 64px;
    left: 16px;
    position:relative;
    border-radius: 10%;
    background: #000;
    list-style: none;
    display: block;
}
/*
*然后是右胡须哈O(∩_∩)O！
*/
.line_right{
    width: 80px;
    height:1px;
    transform:rotate(160deg);
    top: 49px;
    left: 188px;
    position:relative;
    border-radius: 10%;
    background: #000;
    list-style: none;
    display: block;
}
.line_right::before{
    content:'';
    width: 80px;
    height:1px;
    bottom: 66px;
    position:relative;
    transform:rotate(39deg);
    border-radius: 10%;
    background: #000;
    list-style: none;
    display: block;
    left:15px;
}
.line_right::after{
    content:'';
    width: 80px;
    height:1px;
    bottom: 36px;
    transform:rotate(19deg);
    left: -1px;
    position:relative;
    border-radius: 10%;
    background: #000;
    list-style: none;
    display: block;
}
/*
*还得画鼻子哦～
*/
.nose{
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background: #b90319;
    list-style: none;
    top: 32px;
    position: relative;
    border: black solid thin;
    display: block;
    left: 129px;
    z-index:2;
}
.nose::after{
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #FFF;
    list-style: none;
    top: 10px;
    position: relative;
    border: black solid thin;
    display: block;
    left:5px;
}
/*
*哆啦A梦也有人中( ⊙ o ⊙ )啊！
*/
.line_vertical{
    width: 1px;
    height: 164px;
    top: 21px;
    left: 140px;
    position: relative;
    border-radius: 10%;
    background: #000;
    z-index: 1;
}
/*
*最后要画嘴巴呦！:)
*/
.mouth{
    width: 212px;
    height: 212px;
    border-radius: 100%;
    top: -190px;
    left: 33px;
    position: relative;
    background: #000;
    z-index: -1;
}
.mouth::after{
    content: '';
    width: 214px;
    height: 213px;
    top: -3px;
    left: -1px;
    border-radius: 100%;
    position: relative;
    display: block;
    background: #FFF;
}
/*
*OK啦,Game Over^_^
Bye~
*/
`
    writeCode('',code)
}.call()
