


exports.config = {
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    /*multiCapabilities: [
      {'browserName': 'chrome'},
      {'browserName': 'firefox'},
    ],
   */
     capabilities: {
      //'browserName': 'firefox',
      'browserName': 'chrome'
      /*'moz:firefoxOptions': {
        'args': ['--safe-mode']
      }*/
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['AutomationJenkinsGitDemo.js'],

    
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 2000000
    },
    // Assign the test reporter to each running instance
  
    
  };
  