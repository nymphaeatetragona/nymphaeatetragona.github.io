document.getElementById('darkmode').addEventListener('click',function() { //添加点击事件
		toggleBackgroundimg()
	})

if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.querySelector('#web_bg').style.backgroundImage = 'url("https://ooo.0x0.ooo/2025/01/22/OGnMtc.webp")';
    }   //默认深色模式则更换壁纸


function toggleBackgroundimg() {
    var imgContainer = document.querySelector('#web_bg');
    var lightImage = 'url("https://ooo.0x0.ooo/2025/01/22/OGnO2r.webp")';
    var darkImage = 'url("https://ooo.0x0.ooo/2025/01/22/OGnMtc.webp")';
    if (document.documentElement.getAttribute('data-theme') === 'light') {
        imgContainer.style.backgroundImage = darkImage; // 切换深色图片
    } else {
        imgContainer.style.backgroundImage = lightImage; // 切换浅色图片
    }
}



