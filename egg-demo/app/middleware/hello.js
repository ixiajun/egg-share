'use strict';

module.exports = (options, app) => {
    return async function (ctx, next) {
        console.log('middleware: ', options.text)
        // ctx.body = options.text;
        await next();
    };
};