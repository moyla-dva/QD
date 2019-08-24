var tabs = document.getElementById("sg").getElementsByTagName("li");

var lists = document.getElementById("goods").getElementsByTagName("ul");
for(var i=0;i<tabs.length;i++) {
    tabs[i].onclick = trans;
}

function trans() {
    for (var j=0;j<tabs.length;j++) {
        if (tabs[j] === this) {
            tabs[j].className = "active";
            lists[j].className = "active clearfix";
        }
        else {
            tabs[j].className = "";
            lists[j].className = "clearfix";

        }
    }
}
var seckillNav = document.getElementById("seckillNav");
window.onscroll = function () {
    var fixed = document.documentElement.scrollTop;
    if (fixed >= 260) {
        seckillNav.className = "seckill-nav seckill-fixed";
    } else {
        seckillNav.className = "seckill-nav";

    }

}