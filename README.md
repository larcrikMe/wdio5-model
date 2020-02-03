## WebdriverIO UI web automation base project

### Project uses the following architecture:

 * WebdriverIO as test automation API
 * Page-object pattern
 * MochaJS BDD test framework
 * Chai assertion library


### Requirements for running the tests:

 * Java JDK (recommended version 1.8)
 * NodeJS (LTS version)
 * Chrome (v58+)

### Installation and test run:
 
 * Clone project
 * Run `$> npm install` to install dependencies
 * Run `$> npm test` to run the tests
 * Run `$> npm test -- --spec=specs/your-file-name.js` to run one specific spec
 * To change the number of parallel specs execution (parallel browser session number), change `maxInstances: 1,` in the capabilities section of the wdio.conf.js config file.


### Documentation:

 * [WebdriverIO](http://webdriver.io/api.html) API documentation
 * [MochaJS](https://mochajs.org/) test runner
 * [Chai](http://chaijs.com/api/bdd/) assertion library usage
 * [Page-object](http://webdriver.io/guide/testrunner/pageobjects.html) pattern usage