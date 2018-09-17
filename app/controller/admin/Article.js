'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  * inserttech(ctx) {
    const title = ctx.request.body.title;
    const content = ctx.request.body.content;
    //仿佛必须用json才能正常访问
    const result = yield this.app.mysql.insert('tech', { title: title, content: content, created_at: (ctx.helper.getCurrStamp() / 1000)});
    if (result.affectedRows === 1 && result.insertId >= 0) {
      ctx.body = {
        code : 0,
        id : result.insertId,
        msg : "add tech ok"
      }
    } else {
      ctx.body = {
        code : -1,
        msg : "add tech not ok"
      }
    }
  }

  * deltech(ctx) {
    const id = ctx.params.id;
    const result = yield this.app.mysql.delete('tech', {
      id: id,
    });
    if (result.affectedRows === 1) {
      ctx.body = {
        code : 0,
        msg : "del tech ok"
      }
    } else {
      ctx.body = {
        code : -1,
        msg : "del tech not ok"
      }
    }
  }

  * modtech(ctx) {
    const row = {
      id: ctx.request.body.id,
      title: ctx.request.body.title,
      content: ctx.request.body.content,
      created_at: (ctx.helper.getCurrStamp() / 1000)
    };
    const result = yield this.app.mysql.update('tech', row);

    if (result.affectedRows === 1) {
      ctx.body = {
        code : 0,
        msg : "mod tech ok"
      }
    } else {
      ctx.body = {
        code : -1,
        msg : "mod tech not ok"
      }
    }
  }
}
module.exports = ArticleController;