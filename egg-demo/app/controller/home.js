'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const hello = await ctx.service.hello.find();
    ctx.body = `hi, ${hello}`;
  }

  async view() {
    const { ctx } = this;

    await ctx.render('index.nj', {
      title: 'nj demo',
      data: 'test nunjuck view engine'
    })
  }

  async view2() {
    const { ctx } = this;

    await ctx.render('index2.ejs', {
      title: 'ejs demo',
      data: 'test ejs view engine'
    })
  }
}

module.exports = HomeController;
