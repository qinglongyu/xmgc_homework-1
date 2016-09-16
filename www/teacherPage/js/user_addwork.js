$.post('/api/kecheng',function(res){
//	console.log(">>>",res[1],res.length);
	for(var attr in res){
		var data=res[attr];
		var option=$("#option").clone(true,true);
		option.html(data.name);
		option.attr('value',data.name);
		$('#Sselect').append(option);
	}
})






$('#shangchuan').click(function () {
    _fns.uploadFile2($('#shangchuan'), function (f) {
        console.log('>>>>before:', f);
    }, function (f) {
        console.log('>>>>progressAAAA:', f);
        $('#wancheng').css('width', f.percent + '%');
        $('#wancheng').html(f.percent + '%');
        console.log('>>>>>AAAA');
    }, function (f) {
        console.log('>>>>successXXXX:', f);
        $('#wenjian').html(f.url);
        $('#wenjian').attr('href', f.url);
    });
});
