This script is for building app that by WAB.
===================================================
Why do you need to build your app?
------------------------------
Generally speaking, you may have 2 reasons:
* To speed up your app's loading performance.
* You do not want to share your source code to the end user.

How to run?
------------------------------
* Make user you have `Node.js` and `JRE` installed.
* Create a folder that is named `arcgis-js-api` under your app's root folder.
* Download Dojo Toolkit SDK and put `dojo`, `dijit`, `dojox`, `util` under `arcgis-js-api`. The folder tree looks like this:
```
  <app folder>
    |_arcgis-js-api
      |_dojo
      |_dijit
      |_dojox
      |_util
    |_buildScripts
```
* Open `cmd`, cd folder `buildScripts`, run `npm install`, then run `build.bat`.
* Waiting for the build process to complete. The build output will be available at `<app folder>/buildOutput` folder.

**Please note that bacause there is no ArcGIS JavaScript API source code available, there will be some errors when building, but the output works.**