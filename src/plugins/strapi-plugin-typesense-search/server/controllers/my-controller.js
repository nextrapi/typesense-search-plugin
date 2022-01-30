'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-plugin-typesense-search')
      .service('myService')
      .getWelcomeMessage();
  },
};
