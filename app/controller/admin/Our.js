'use strict';

const Controller = require('egg').Controller;

class OurController extends Controller {
  * insertOur(ctx) {
    const rows = {
      title: ctx.request.body.title,
      content: ctx.request.body.content,
      created_at: (ctx.helper.getCurrStamp() / 1000)
    };

    const result = yield this.app.mysql.insert('our', rows);

    if (result.affectedRows === 1 && result.insertId >= 0) {
      ctx.body = {
        code : 0,
        id : result.insertId,
        msg : "add our ok"
      }
    } else {
      ctx.body = {
        code : -1,
        msg : "add our not ok"
      }
    }
  }

  * modOur(ctx) {
    const rows = {
      id: ctx.request.body.id,
      title: ctx.request.body.title,
      content: ctx.request.body.content,
      created_at: (ctx.helper.getCurrStamp() / 1000)
    }
    const result = yield this.app.mysql.update('our', rows);

    if (result.affectedRows === 1) {
      ctx.body = {
        code : 0,
        msg : "mod our ok"
      }
    } else {
      ctx.body = {
        code : -1,
        msg : "mod our not ok"
      }
    }
  }
  * delOur(ctx) {
    const result = yield this.app.mysql.delete('our', {
      id: ctx.params.id,
    });
    if (result.affectedRows === 1) {
      ctx.body = {
        code : 0,
        msg : "del our ok"
      }
    } else {
      ctx.body = {
        code : -1,
        msg : "del our not ok"
      }
    }
  }
}
module.exports = OurController;