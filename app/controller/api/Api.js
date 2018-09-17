'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  * GetTech(ctx) {
    const page = ctx.params.page;
    const results = yield this.app.mysql.select('tech', { // 搜索 post 表
      columns: ['id', 'title', 'content'], // 要查询的表字段
      orders: [['created_at','desc']], // 排序方式
      limit: this.app.config.perPage, // 返回数据量
      offset: (this.app.config.perPage * (page - 1)), // 数据偏移量
    });
    const sum = yield this.app.mysql.query('SELECT id FROM tech');

    ctx.body = {
      code: 0,
      total: sum.length,
      data: results
    }
  }

  * GetOur(ctx) {
    const page = ctx.params.page;
    const results = yield this.app.mysql.select('our', { // 搜索 post 表
      columns: ['id', 'title', 'content'], // 要查询的表字段
      orders: [['created_at','desc']], // 排序方式
      limit: this.app.config.perPage, // 返回数据量
      offset: (this.app.config.perPage * (page - 1)), // 数据偏移量
    });
    const sum = yield this.app.mysql.query('SELECT id FROM our');
    ctx.body = {
      code: 0,
      total: sum.length,
      data: results
    }
  }

  * GetLinux(ctx) {
    const page = ctx.params.page;
    const results = yield this.app.mysql.select('linux', {
      columns: ['id', 'title', 'content'],
      orders: [['created_at', 'desc']],
      limit: this.app.config.perPage,
      offset: (this.app.config.perPage * (page - 1)),
    });
    const sum = yield this.app.mysql.query('SELECT id FROM linux');
    ctx.body = {
      code: 0,
      total: sum.length,
      data: results
    }
  }

  *GetDetail(ctx) {
    const id = ctx.params.id;
    const result = yield this.app.mysql.select('tech', {
      where: { id: id },
      columns: ['id', 'title', 'content'],
    });
    ctx.body = {
      code: 0,
      data: result
    }
  }

  *GetFrontDetail(ctx) {
    const id = ctx.params.id;
    const result = yield this.app.mysql.select('our', {
      where: { id: id },
      columns: ['id', 'title', 'content'],
    });
    ctx.body = {
      code: 0,
      data: result,
    }
  }

  *GetLinuxDetail(ctx) {
    const id = ctx.params.id;
    const result = yield this.app.mysql.select('linux', {
      where: { id: id },
      columns: ['id', 'title', 'content'],
    });
    ctx.body = {
      code: 0,
      data: result,
    }
  }
}

module.exports = ApiController;