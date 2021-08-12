'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // view: {
  //   enable: true,
  //   package: 'egg-view',
  // },
  ejs: {
    enable: true,
    package: 'egg-view-ejs'
  },
  nunjucks: {
    package: 'egg-view-nunjucks'
  }
};
