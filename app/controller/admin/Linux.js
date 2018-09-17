'use strict';

const Controller = require('egg').Controller;

class LinuxController extends Controller {
  * insertlinux(ctx) {
    const title = ctx.request.body.title;
    const content = ctx.request.body.content;
    const result = yield this.app.mysql.insert('linux', { title: title, content: content, created_at: (ctx.helper.getCurrStamp() / 1000)});

    if (result.affectedRows === 1 && result.insertId >= 0) {
      ctx.body = {
        code: 0,
        id: result.insertId,
        msg: "add linux ok "
      }
    } else {
      ctx.body = {
        code: -1,
        msg: "add linux failed"
      }
    }
  }

  * dellinux(ctx) {
    const id = ctx.params.id;
    const result = yield this.app.mysql.delete('linux', { id: id });

    if (result.affectedRows) {
      ctx.body = {
        code: 0,
        msg: "del linux ok"
      }
    } else {
      ctx.body = {
        code: -1,
        msg: "del linux fail"
      }
    }
  }

  * modlinux(ctx) {
    const row = {
      id: ctx.request.body.id,
      title: ctx.request.body.title,
      content: ctx.request.body.content,
      created_at: ctx.helper.getCurrStamp() / 1000
    };

    const result = yield this.app.mysql.update('linux', row);
    if (result.affectedRows === 1) {
      ctx.body = {
        code : 0,
        msg : "mod linux ok"
      }
    } else {
      ctx.body = {
        code : -1,
        msg : "mod linux not ok"
      }
    }
  }
}

module.exports = LinuxController;