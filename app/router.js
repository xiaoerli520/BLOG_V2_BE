'use strict';

module.exports = app => {
  const islogin = app.middlewares.islogin();
  const analog = app.middlewares.analog();
  const header = app.middlewares.header();
  app.get('/', analog, 'home.index');
  app.post('/loginact', analog,app.controller.admin.auth.loginact);


  app.post('/addtech', islogin, analog, app.controller.admin.article.inserttech);
  app.post('/modtech', islogin, analog, app.controller.admin.article.modtech);
  app.get('/deltech/:id', islogin, analog, app.controller.admin.article.deltech);

  app.post('/addour', islogin, analog, app.controller.admin.our.insertOur);
  app.post('/modour', islogin, analog, app.controller.admin.our.modOur);
  app.get('/delour/:id', islogin, analog, app.controller.admin.our.delOur);

  app.post('/addlinux', islogin, analog, app.controller.admin.linux.insertlinux);
  app.post('/modlinux', islogin, analog, app.controller.admin.linux.modlinux);
  app.get('/dellinux/:id', islogin, analog, app.controller.admin.linux.dellinux);

  app.get('/read', islogin, analog, app.controller.admin.auth.testread);

  // 前端API
  app.get('/readtech/:page', analog, header,app.controller.api.api.GetTech);
  app.get('/readour/:page', analog, header, app.controller.api.api.GetOur);
  app.get('/readlinux/:page', analog, header, app.controller.api.api.GetLinux);
  app.get('/detail/:id', analog, header, app.controller.api.api.GetDetail);
  app.get('/fdetail/:id', analog, header, app.controller.api.api.GetFrontDetail);
  app.get('/ldetail/:id', analog, header, app.controller.api.api.GetLinuxDetail);

};
