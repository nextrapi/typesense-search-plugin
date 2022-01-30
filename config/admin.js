module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8c1650854881e8c11801f78766d05f53'),
  },
});
