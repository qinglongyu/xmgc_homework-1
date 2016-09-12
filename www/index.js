console.log('index.js loading.');

$('#login').click(function(){
	var dat={
		account:$('#account').val(),
		pw:$('#password').val()
	};
	console.log('>>>>',dat);
	$.post('/api/login',dat,function(res){
		console.log(">>>>?",res);
		window.open('/teacherPage/addwork.html','_self')
	});
});
