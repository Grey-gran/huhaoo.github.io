window.onload=function () {
    var hitokoto = document.querySelector('.hitokoto');
    var from = document.querySelector('.from');
    update();
    function update() {
        gethi = new XMLHttpRequest();
//        gethi.open("GET","https://huhaoth.github.io/mztknyl/"+Math.floor(Math.random()*171.999+1)+"/");
        gethi.open("GET","https://v1.hitokoto.cn?c=a");
        //这里选择类别，详见官方文档
        gethi.send();
        gethi.onreadystatechange = function () {
            if (gethi.readyState===4 && gethi.status===200) {
                var Hi = JSON.parse(gethi.responseText);
                hitokoto.innerHTML = Hi.hitokoto;
                from.innerHTML = "—— <i>" + Hi.from + "</i>"; //可自定义输出格式
            }
        }
    }
}
