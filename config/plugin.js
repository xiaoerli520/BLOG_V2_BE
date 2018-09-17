'use strict';

// had enabled by egg
// exports.static = true;
// 启用模板渲染插件
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
// 启用mysql
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};