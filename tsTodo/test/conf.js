exports.config = {
  baseUrl: 'http://127.0.0.1:8080/',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/todo-spec.js'],

  capabilities: {
    'browserName': 'firefox'
  },
};
