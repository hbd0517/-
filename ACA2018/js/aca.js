
$(function clickScroll() {
    document.body.scrollTop += 750;
})
$(".tagClick").click(function(){
    imgPath =  $(this).children(".more").attr("src");
    if($.trim(imgPath)== $.trim("images/more.png")){
        $(this).children(".more").attr("src","images/more_1.png");
    }
    if($.trim(imgPath)== $.trim("images/more_1.png")){
        $(this).children(".more").attr("src","images/more.png");
    }
});
var acm_logo_test="<a href=index.html> <span class='glyphicon glyphicon-home'></span>"+
    "<div class='aca_logo'><span>ACA</span><br><span class='aca_year'></span></div>"+
    " </a>";
$(".acm_logo_test").append(acm_logo_test);

var year=new Date();
$(".aca_year").html(year.getFullYear());
