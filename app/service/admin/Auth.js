'use strict';
// 用户相关的service
module.exports = app => {
  class AuthService extends app.Service {
    * ConfirmLogin(password) {
      //  密码是写死在config
      if (password === this.app.config.backend_password) {
        return true;
      }
    }
  }
  return AuthService;
};
