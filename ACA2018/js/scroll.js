/**
 * Created by fan on 17/12/20.
 */
function clickScroll() {
    document.body.scrollTop += 750;
}
$(".tagClick").click(function(){
    imgPath =  $(this).children(".more").attr("src");
    if($.trim(imgPath)== $.trim("images/more.png")){
        $(this).children(".more").attr("src","images/more_1.png");
    }
    if($.trim(imgPath)== $.trim("images/more_1.png")){
        $(this).children(".more").attr("src","images/more.png");
    }
})