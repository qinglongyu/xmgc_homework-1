

var conn;
var wrapper = require('co-mysql');
var wrapperedConn;

function handleError () {

    var conn=_mysql.conn=$mysql.createConnection({
	host:'182.254.151.40',
	port:'3306',
	database:'homework',
	user:'root',
	password:'Abc!@#123'
});

    //连接错误，2秒重试
    conn.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleError , 2000);
        }
    });
    conn.on('error', function (err) {
        console.log('db error', err);
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleError();
        }
        if(err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR'){
            handleError();
        } else {
            handleError();
        }
    });

    setInterval(function(){
        conn.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
            if (err) throw err;

            console.log('The solution is: ', rows[0].solution);
        });
    },3600000);

    console.log('mysql ready!');

    wrapperedConn = wrapper(conn);
}
handleError();



var _Mysql = {
    conn:wrapperedConn
};
module.exports = _Mysql;
