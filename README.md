# web-app-builder-build
Example of using the Dojo Build with an ArcGIS Web App Builder Application.

Adapted from build scripts provided by @qlqllu at https://geonet.esri.com/docs/DOC-3795

# Sample Build Run
1. Ensure npm, Node.js, and Java are installed.
2. Open a command prompt to the root directory.
3.    npm install
4.    cd buildScripts
5.    npm install
6.    node build.js

The completed build will be located in buildOutput and can be hosted in the same way as any freshly downloaded Web App Builder Application.

# Run on your own application
1. Download a Web App Builder application
2. Copy .bowerrc, bower.json, package.json, and buildScripts/ to the application root
3. Follow the sample build run steps.
