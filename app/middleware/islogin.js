module.exports = options => {
  return function* islogin(next) {
    yield next;
    // 获得token
    const token = this.query.token;
    const CurrTime = this.helper.getCurrStamp() / 1000;
    //查询数据库
    const result = yield this.app.mysql.get('auth', {
      token: token
    });
    if (result === undefined || result === null || result === '') {
      this.body = {
        code: -1,
        msg: "please login first"
      }
    } else if(result.expire - CurrTime <= 0){
      this.body = {
        code: -2,
        msg: "token expired"
      }
    } else {
      return ;
    }
  };
}