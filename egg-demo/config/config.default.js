/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1628500044556_1878';

  // add your middleware config here
  config.middleware = ['hello'];

  // add your user config here
  const userConfig = {
    hello: {
      enable: false,
      // match: '/a',
      // ignore: '/b',
      text: 'hello'
    },
    view: {
      root: [
        path.join(appInfo.baseDir, 'app/view'),
        path.join(appInfo.baseDir, 'app/anotherView'),
      ].join(','),
      mapping: {
        '.ejs': "ejs",
        '.nj': 'nunjucks'
      }
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
