'use strict';

const Controller = require('egg').Controller;
const md5 = require('md5');

class AuthController extends Controller {
  * loginact(ctx) {
    // 获取params
    const password = ctx.request.body.password;
    const IsLogin = yield ctx.service.admin.auth.ConfirmLogin(password);
    console.log(IsLogin);
    if(IsLogin) {
      // 登录成功 签发一个 + 600s的token
      // 通过当前时间 以及密码联合生成md5
      const expireTime = (ctx.helper.getCurrStamp() / 1000) + 600;
      const token = md5(ctx.app.config.backend_password+expireTime);
      // 先清空数据表
      const truncate_res = yield this.app.mysql.query('TRUNCATE TABLE auth');
      const insert_res = yield this.app.mysql.insert('auth', { token: token, expire: expireTime });
      ctx.body = {
        status:"ok",
        token: token
      }
    } else {
      // 登录失败
      ctx.body = {
        status:"no"
      }
    }
  }

  * testread(ctx) {
    const result = yield this.app.mysql.get('auth', {
      id: 1
    });
    ctx.body = result;
  }





}

module.exports = AuthController;
