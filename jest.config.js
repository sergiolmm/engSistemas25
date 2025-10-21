// jest.config.js
{
  reporters: [ "default", "jest-junit" ]
}

//module.exports = config;
module.exports = {
      reporters: ['default', ['jest-junit', { outputDirectory: 'reports', outputName: 'junit.xml' }]],
    };