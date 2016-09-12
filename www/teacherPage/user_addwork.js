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
