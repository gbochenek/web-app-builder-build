console.log('########## BUILD START TIME: ' + new Date() + ' ##########');

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const utilscripts = require('./utilscripts');
const prepareScript = require('./prebuild');
const copyScript = require('./copyapp');

let appRoot = '..';
let buildOutput = appRoot + path.sep + 'buildOutput';
let appPackages = buildOutput + path.sep + 'app-packages';
let appOutput = buildOutput + path.sep + 'app';

rimraf.sync(buildOutput);
fs.mkdirSync(buildOutput);


prepareScript.setInfo({});


let loadModule = "build";

dojoConfig = {
  baseUrl: "..", // Where we will put our packages
  async: 1, // We want to make sure we are using the "modern" loader
  hasCache: {
    "host-node": 1, // Ensure we "force" the loader into Node.js mode
    "dom": 0 // Ensure that none of the code assumes we have a DOM
  },
  // While it is possible to use config-tlmSiblingOfDojo to tell the
  // loader that your packages share the same root path as the loader,
  // this really isn't always a good idea and it is better to be
  // explicit about our package map.
  packages: [{
    name: "dojo",
    location: "arcgis-js-api/dojo"
  }, 
{    name: "build",
    location: "arcgis-js-api/util/build"
  }],
  deps: [loadModule] // And array of modules to load on "boot"
};

console.log("test",dojoConfig);


process.argv[2] = "load=build";
process.argv[3] = "profile=app.profile.js";


require("../arcgis-js-api/dojo/dojo.js", () => {

  copyScript.copy({},{});

  /*global __dirname */
  let basePath = path.join(__dirname, '..');
  utilscripts.cleanApp(path.join(basePath, 'buildOutput/app'));
  utilscripts.cleanFilesInAppSource(basePath);
  console.log('########## BUILD END TIME: ' + new Date() + ' ##########');
});


