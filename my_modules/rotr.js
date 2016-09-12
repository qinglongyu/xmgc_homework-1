/*http路由分发
接口模式server/:app/:api
*/

var _rotr = {};

//http请求的路由控制
_rotr = new $router();

//访问的请求
_rotr.get('api', '/api/:apiname', apihandler);
_rotr.post('api', '/api/:apiname', apihandler);





/*所有api处理函数都收集到这里
必须是返回promise
各个api处理函数用promise衔接,return传递ctx
*/
_rotr.apis = {};

/*处理Api请求
默认tenk的api直接使用
每个app的独立api格式appname_apiname
*/
function * apihandler(next) {
    var ctx = this;
    var apinm = ctx.params.apiname;

    console.log('API RECV:', apinm);

    //匹配到路由函数,路由函数异常自动返回错误,创建xdat用来传递共享数据
    var apifn = _rotr.apis[apinm];
    ctx.xdat = {
        apiName: apinm
    };

    if (apifn && apifn.constructor == Function) {
        yield apifn.call(ctx, next).then(function() {

            //所有接口都支持JSONP,限定xx.x.xmgc360.com域名
            var jsonpCallback = ctx.query.callback || ctx.request.body.callback;
            if (jsonpCallback && ctx.body) {
                if (_cfg.regx.crossDomains.test(ctx.hostname)) {
                    ctx.body = ctx.query.callback + '(' + JSON.stringify(ctx.body) + ')';
                };
            };

        }, function(err) {
            ctx.body = __newMsg(__errCode.APIERR, [err.message, 'API proc failed:' + apinm + '.']);
            __errhdlr(err);
        });
    } else {
        ctx.body = __newMsg(__errCode.NOTFOUND, ['服务端找不到接口程序', 'API miss:' + apinm + '.']);
    };

    yield next;
};




/*测试接口,返回请求的数据
 */
_rotr.apis.test = function() {
    var ctx = this;
    var co = $co(function * () {

        var resdat = {
            query: ctx.query.nick,
            body: ctx.body,
        };

        ctx.body = __newMsg(1, 'ok', resdat);
        return ctx;
    });
    return co;
};

_rotr.apis.moban = function() {
    var ctx = this;
    var co = $co(function * () {
        var sqlstr = "select * from emp where empId = '7369';";
        var dat = {};
        var rows = yield _ctnu([_mysql.conn,'query'],sqlstr);
        if(!rows) Error("找不到用户");
        dat.user = rows[0];
        ctx.body = dat;
        return ctx;
    });
    return co;
};

_rotr.apis.ceshi = function() {
    var ctx = this;
    var co = $co(function * () {
        var html=require('fs').readFileSync('../xmgc_homework/www/teacherPage/background.html', 'utf8');
        ctx.body =html;
        return ctx;
    });
    return co;
};

_rotr.apis.html = function() {
    var ctx = this;
    var co = $co(function * () {

		var html=require('fs').readFileSync('../xmgc_homework/www/teacherPage/addwork.html', 'utf8');

        ctx.body = html;
        return ctx;
    });
    return co;
};

_rotr.apis.ejs = function() {
    var ctx = this;
    var co = $co(function * () {

	var ejs = require('ejs');
    var str = require('fs').readFileSync('../xmgc_homework/ejs/ejsModen.ejs', 'utf8');

	var ret = ejs.render(str, {
	 names: ['foo', 'bar', 'baz']
	});
	console.log(ret);

        ctx.body =ret;
        return ctx;
    });
    return co;
};

_rotr.apis.creatHw = function() {
    var ctx = this;
	
    var co = $co(function * () {
		var res = {};
		var tid = ctx.query.tid || ctx.request.body.tid;
		var content = ctx.query.content || ctx.request.body.content;
		var annex = ctx.query.annex || ctx.request.body.annex;
		var mark = ctx.query.mark || ctx.request.body.mark;
		var course = ctx.query.course || ctx.request.body.course;
		var section = ctx.query.section || ctx.request.body.section;
		parament=[tid,content,annex,mark,course,section];
		var sqlstr="insert into tw_info(Tid,Content,Annex,Mark,Cid,Section) value(?,?,?,?,?,?)";
		_mysql.conn.query(sqlstr,parament,function(err,rows,fields){
			if(err){res.code=0;console.log(">>>>>插入失败！")}
			else(res.code=1)
			
		})
		
//        if (!appName || !_cfg.regx.appName.test(appName)) throw Error('App标识名格式错误.');

		

        ctx.body = res;
        return ctx;
    });
    return co;
};







var db=[];



/*测试接口,返回请求的数据
 */
_rotr.apis.reg = function() {
    var ctx = this;
    var co = $co(function * () {
        
        //拿到和验证数据
        var name = ctx.query.name || ctx.request.body.name;
        if (!name ) throw Error('你的姓名格式不合法！');
        
        var pw = ctx.query.pw || ctx.request.body.pw;
        if (!pw ) throw Error('你的密码格式不合法！');        
        
        //处理数据 
        //创建一个用户，记录姓名密码
        var usr={
            id:db.length,
            name:name,
            pw:pw,
        };
        
        //加入数据库
        db.push(usr);
        console.log('>>>>push usr',db);
        
        //返回用户id
        var res={
            uid:usr.id,
        };
              
        //返回结果
        ctx.body = res;
        return ctx;
    });
    return co;
};


/*测试接口,返回请求的数据
 */
_rotr.apis.login = function() {
    var ctx = this;
    var co = $co(function * () {
        
        //拿到和验证数据
        var account = ctx.query.account || ctx.request.body.account;
        if (!account ) throw Error('你的账户格式不合法！');
        
        var pw = ctx.query.pw || ctx.request.body.pw;
        if (!pw ) throw Error('你的密码格式不合法！');        
        
        //处理数据 
        var sqlstr1 = "select * from user_info where account = '"+account+"';";
        var rows1 = yield _ctnu([_mysql.conn,'query'],sqlstr1);
        //console.log(">>>>",rows1);
        if(!rows1) Error("找不到用户");

        //var sqlstr2 = "select * from user_info where account = '"+account+"' and password = '"+pw+"';";
        //var rows2 = yield _ctnu([_mysql.conn,'query'],sqlstr2);
        //if(!rows2) Error("密码错误");
        //var res={};
        //
        //if(usr.pw==pw){
        //    res.code=1;
        //}else{
        //    res.code=0;
        //};
              
        //返回结果
        //ctx.body = res;
        //console.log(">>>",ctx);
        return ctx;
    });
    return co;
};




//导出模块
module.exports = _rotr;
