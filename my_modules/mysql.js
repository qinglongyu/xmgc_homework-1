/*mysql数据模块
*/
var _mysql={};

var conn=_mysql.conn=$mysql.createConnection({
	host:'127.0.0.1',
	port:'3306',
	database:'homework',
	user:'root',
	password:'root'
});

conn.connect();

//导出模块
module.exports = _mysql;