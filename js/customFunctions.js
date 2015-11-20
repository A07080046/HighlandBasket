/**
 * Created by ghg on 15/11/10.
 */
function clickHomePage()
{
    var x = document.getElementById('comeon');
    for (var i=0;i<15;i++) {
        var html = "<div class='span2' id='goods1'><div class='thumbnail'><a href='http://codeguide.bootcss.com' title='Bootstrap 编码规范' target='_blank' onclick='_hmt.push(['_trackEvent', 'tile', 'click', 'codeguide'])'><img class='lazy' src='img/4.jpg' width='300' height='150'' data-src='http://static.bootcss.com/www/assets/img/codeguide.png' alt='Headroom.js'></a><div class='caption'><h3><a href='http://codeguide.bootcss.com' title='Bootstrap 编码规范：编写灵活、稳定、高质量的 HTML 和 CSS 代码的规范。' target='_blank' onclick='_hmt.push(['_trackEvent', 'tile', 'click', 'codeguide'])'>大豆芽<br><small>贵州大山生长</small></a></h3><p>大山里种的，没用农业，常年非大棚种植，欢迎选购。</p></div></div></div>";
        $(html).appendTo(x);
    }
}

function clickVegetable()
{
    window.open("./html/goodsDetail.html");
}

function clickFreshFruit()
{
    window.open("./html/goodsOrder.html");
}

function clickFreshMeat()
{
    window.open("./html/logistics.html");
}

function clickNut()
{
    window.open("./html/register.html");
}

function clickWildHerbs()
{
    window.open("./html/shoppingTrolley.html");

}

function clickWildFruit()
{


}

function clickGame()
{


}


function clickBasket()
{

}

function clickFavorite()
{

}

function clickOrder()
{

}

function clickAccount()
{

}

function clickLogin()
{

}

/*商品数量+1*/
function clickAdd(){
    var num_add = parseInt(document.getElementById("quantity").value)+1;
    if(document.getElementById("quantity").value ==""){
        num_add = 1;
    }
    document.getElementById("quantity").value = num_add;
    var total = parseFloat(document.getElementById("price").value)*parseInt(document.getElementById("quantity").value);
    document.getElementById("totalPrice").innerHTML = total.toFixed(2);
}

/*商品数量-1*/
function clickSub(){
    var num_dec = parseInt(document.getElementById("quantity").value)-1;
    if(num_dec<1){
        //购买数量必须大于或等于1
        alert("购买数量必须大于或等于1");
    }else{
        document.getElementById("quantity").value = num_dec;
        var total = parseFloat(document.getElementById("price").value)*parseInt(document.getElementById("quantity").value);
        document.getElementById("totalPrice").innerHTML = total.toFixed(2);
    }
}