/**
 * Created by fan on 17/12/20.
 */

$(function () {
    $("#newnav > li > a").click(function () {
        $(this).parents().siblings().find('#newnav ul').hide(300);
        $(this).siblings('#newnav ul').toggle(300);
        $(this).parents().siblings().find('#newnav ul > li > a').hide();
    })
})


$("span.menu-icon").click(function () {
    $(".nav1").slideToggle(300, function () {
        // Animation complete.
    });
});

