const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = 'user service'
    return user;
  }
}

module.exports = UserService;