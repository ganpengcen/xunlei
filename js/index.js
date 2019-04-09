window.onload = function () {
    var oInput = document.getElementsByClassName('searchText')[0];
    var oHidden = document.getElementsByClassName('userArea-r')[0];
    var oHidden2 = document.getElementsByClassName('right-hidden')[0];   //右侧隐藏盒子
    var oMidHidden = document.getElementsByClassName('userArea-m')[0];
    var oMidHidden2 = document.getElementsByClassName('mid-hidden')[0];
    var midHiddenTop = document.getElementsByClassName('mid-hidden-top')[0].getElementsByTagName('span');  //中间隐藏盒子span标签
    var oHistory = document.getElementsByClassName('history')[0];  //历史记录
    var oHistory2 = document.getElementsByClassName('historybox')[0];
    var picSmall = document.getElementById('pic-small');
    var oPic = document.getElementById('pic');
    var picA = picSmall.getElementsByTagName('img');
    var srcA = new Array();  //存储图片地址
    var index = 0;
    lunbo();
    oInput.addEventListener('click', function () {  //点击
        oInput.setAttribute('class', 'change');
        oInput.value = '';
    });
    oInput.addEventListener('blur', function () {  //获取焦点
        oInput.setAttribute('class', 'searchText');
    });
    oHidden.addEventListener('mouseover', function () {  //鼠标移入
        oHidden2.style.display = 'block'
    });
    oHidden.addEventListener('mouseout', function () {  //鼠标移出
        oHidden2.style.display = ''
    });
    oMidHidden.addEventListener('mouseover', function () {  //鼠标移入
        oMidHidden2.style.display = 'block'
    });
    oMidHidden.addEventListener('mouseout', function () {  //鼠标移出
        oMidHidden2.style.display = ''
    });

    oHistory.addEventListener('mouseover', function () {  //鼠标移入
        oHistory2.style.display = 'block'
    });
    oHistory.addEventListener('mouseout', function () {  //鼠标移出
        oHistory2.style.display = ''
    });

    midHiddenTop[0].addEventListener('mouseover', function () {
        this.setAttribute('class', this.getAttribute('class') + ' span_style')
    });
    midHiddenTop[1].addEventListener('mouseover', function () {
        this.setAttribute('class', this.getAttribute('class') + ' span_style')
    });
    midHiddenTop[0].addEventListener('mouseout', function () {
        this.setAttribute('class', 'updata')
    });
    midHiddenTop[1].addEventListener('mouseout', function () {
        this.setAttribute('class', 'history')
    });
    //图片轮播图
    picSmall.addEventListener('mouseover', throttle(change,10));

    function change(ev) {   //改变地址
        var event = ev || window.event;
        var target = event.target || ev.srcElement;
        if (target.nodeName.toLowerCase() == 'img'){
            target.setAttribute('class','hover');
            var src = target.getAttribute('backImg');
          //oPic.setAttribute('backgroundImage','url('+src+')'+'no-repeat center');
           oPic.style.background = 'url('+src+')';
           index = target.getAttribute('index');
           target.onmouseout = function () {
               target.setAttribute('class','');
           }
        }
    }
    function throttle(handel, waiTime) {   //节流函数
            var lastTime = 0;
            return function (e) {
                var nowTime = new Date().getTime();
                if (nowTime - lastTime > waiTime) {
                    handel();
                    lastTime = nowTime;
                }
            }
        }
    function lunbo() {
        for(var i =0;i<12;i++){
            var src = picA[i].getAttribute('backImg');
            srcA.push(src);
        }
        setInterval(function () {
            oPic.style.background = 'url('+srcA[index]+')';
            index++;
            if(index===12) index=0;
        },2000);
    }
};
