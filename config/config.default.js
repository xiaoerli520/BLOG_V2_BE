'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1507596408111_6968';

  // add your config here
  config.middleware = [];

  config.backend_password = 'guolhe521741';

  config.perPage = 4;

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '47.93.51.10',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'Floating',
      // 数据库名
      database: 'myblog',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.security = {
    csrf: false,
  };

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  return config;
};
