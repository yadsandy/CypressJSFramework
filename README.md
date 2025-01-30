# PlaywrightTSFramework

This repository has test code, written in type script and playwright. I used https://demoqa.com/ testing website to automate some sets of tess cases.

If you want to run test locally, please follow these steps:

1. Clone this repository
2. Prerequisite - `node.js` has to be installed. If it is not installed, please visit [official website](https://nodejs.org/en/download/) for instructions 
3. Please use this command to install node modules Run `npm install` 
4. Install playwright `npm init playwright@latest`
5. Install faker library `npm install @faker-js/faker`
6. That's it, now you can run tests with `npm run test` - it will run test in 3 browsers (chromium, firefox, webkit) in parallel.For now I have commented other browsers it only runs on Chrome , to run on other you can uncomment in config

