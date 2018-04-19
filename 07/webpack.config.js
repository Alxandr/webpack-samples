module.exports = env => {
  switch (env) {
    case 'full':
      console.log('Mode: full');
      return [
        require('./build/webpack.prod'),
        require('./build/webpack.dev')('full'),
      ];

    case 'production':
      console.log('Mode: prod');
      return require('./build/webpack.prod');

    default:
      console.log('Mode: dev');
      return require('./build/webpack.dev')('development');
  }
};
