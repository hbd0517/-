/**
 * Created by fan on 17/12/20.
 */
$(document).ready(function()
{
    $("#btn_822").click(function()
    {
        $("#date").text("日程安排—8月22日");
        $("#btn_823").show();
        $("#btn_822").hide();
        $("#div_822").show();
        $("#div_823").hide();
    });

    $("#btn_823").click(function()
        {
            $("#date").text("日程安排—8月23日");
            $("#btn_822").show();
            $("#btn_823").hide();
            $("#div_823").show();
            $("#div_822").hide();
        }
    );
});