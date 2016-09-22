/**
 * Created by Administrator on 2016/9/9.
 */
//公告发布区的发布按钮事件
/*$(function(){
    $("#publish").click(function(){
        $("#noticecontent").submit()
    });
});*/
$(function () {
	$("#clear").click(function () {
		$("#noticecontent").empty();
	});

	$("#quit").click(function () {
		window.close()
	});
	$("#publish").click(function () {
		var dat = {
			userid: userid,
			content: $("#noticecontent").html()
		}
		console.log(">>>", dat)
		if (dat.content == "") {
			alert("请输入通知内容！");
		} else {
			$.get("/homework/api/addNotice", dat, function (res) {
				console.log(res.rows);
				if (res.rows == 1) {
					alert("发布通知成功！");
				} else {
					alert("发布通知失败！");
				}
			});
		}
	});
});
