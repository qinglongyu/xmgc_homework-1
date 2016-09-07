console.log('index.js loading.');

$('#creat').click(function(){
	var dat={
		tid:$('#tid').val(),
		content:$('#content').val(),
		annex:$('#annex').val(),
		mark:$('#mark').val(),
		course:$('#course').val(),
		section:$('#section').val(),
	}
	console.log('>>>>',dat);
	$.post('/api/creatHw',dat,function(res){
		if(res.code==0){
			alert('>>>>创建失败，请检查格式！');
		}
		else{
			alert('>>>>创建成功！');
		}
		console.log('>>>?>',res);
	});

});
