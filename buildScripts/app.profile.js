profile = {
  "basePath": "..",
  "releaseDir": "./buildOutput",
  "action": "release",
  "version": "1.0.0",
  "releaseName": "app-packages",
  "optimize": "closure",
  "useSourceMaps": false,
  "layerOptimize": "closure",
  "cssOptimize": "comments",
  "copyTests": false,
  "internStrings": true,
  "mini": true,
  "localeList": "ar,cs,da,de,en,el,es,et,fi,fr,he,it,ja,ko,lt,lv,nb,nl,pl,pt-br,pt-pt,ro,ru,sv,th,tr,zh-cn,vi",
  "selectorEngine": "acme",
  "stripConsole": "none",
  "packages": [
    {
      "name": "dojo",
      "location": "./arcgis-js-api/dojo"
    },
    {
      "name": "dijit",
      "location": "./arcgis-js-api/dijit"
    },
    {
      "name": "dojox",
      "location": "./arcgis-js-api/dojox"
    },
    {
      "name": "put-selector",
      "location": "./arcgis-js-api/put-selector"
    },
    {
      "name": "xstyle",
      "location": "./arcgis-js-api/xstyle"
    },
    {
      "name": "dgrid",
      "location": "./arcgis-js-api/dgrid"
    },
    {
      "name": "esri",
      "location": "./arcgis-js-api/esri"
    },
    {
      "name": "jimu",
      "location": "./jimu.js"
    },
    {
      "name": "widgets",
      "location": "./widgets"
    },
    {
      "name": "themes",
      "location": "./themes"
    },
    {
      "name": "libs",
      "location": "./libs"
    },
    {
      "name": "dynamic-modules",
      "location": "./dynamic-modules"
    }
  ],
  "layers": {
    "dynamic-modules/preload": {
      "include": [
        "themes/DartTheme/main",
        "themes/DartTheme/widgets/DartController/Widget",
        "widgets/OverviewMap/Widget",
        "widgets/Search/Widget",
        "widgets/ZoomSlider/Widget",
        "widgets/HomeButton/Widget",
        "widgets/MyLocation/Widget"
      ]
    },
    "dynamic-modules/postload": {
      "include": [
        "widgets/LayerList/Widget",
        "widgets/Legend/Widget",
        "widgets/BasemapGallery/Widget",
        "widgets/Bookmark/Widget",
        "widgets/Measurement/Widget",
        "widgets/Draw/Widget",
        "widgets/Print/Widget",
        "widgets/About/Widget"
      ]
    },
    "jimu/main": {
      "include": [
        "jimu/BaseWidget",
        "jimu/BaseWidgetFrame",
        "jimu/BaseWidgetPanel",
        "jimu/BaseWidgetSetting",
        "jimu/symbolUtils",
        "jimu/filterUtils",
        "jimu/utils",
        "jimu/portalUrlUtils",
        "jimu/portalUtils",
        "jimu/tokenUtils",
        "jimu/ConfigManager",
        "jimu/WidgetManager",
        "jimu/PanelManager",
        "jimu/DataManager",
        "jimu/LayoutManager",
        "jimu/PoolControllerMixin",
        "jimu/SpatialReference/utils",
        "jimu/LayerInfos/LayerInfos",
        "jimu/dijit-all",
        "jimu/LayerInfos/LayerInfoForCollection",
        "jimu/LayerInfos/LayerInfoForMapService",
        "jimu/LayerInfos/LayerInfoForKML",
        "jimu/LayerInfos/LayerInfoForGeoRSS",
        "jimu/LayerInfos/LayerInfoForDefault",
        "jimu/LayerInfos/LayerInfoForWMS",
        "jimu/LayerInfos/LayerInfoForGroup",
        "jimu/LayerInfos/LayerInfoForDefaultDynamic",
        "jimu/LayerInfos/LayerInfoForDefaultTile",
        "jimu/LayerInfos/LayerInfoForDefaultWMS",
        "jimu/LayerInfos/LayerInfoForDefaultTable",
        "jimu/LayerInfos/LayerInfoForDefaultImage",
        "jimu/LayerInfos/LayerInfoForDefaultStream"
      ],
      "exclude": [
        "esri/main",
        "libs/main"
      ]
    },
    "jimu/dijit-all": {
      "include": [
        "jimu/dijit/LoadingIndicator",
        "jimu/dijit/LoadingShelter",
        "jimu/dijit/Message",
        "jimu/dijit/Popup",
        "jimu/dijit/RadioBtn",
        "jimu/dijit/CheckBox",
        "jimu/dijit/SymbolChooser",
        "jimu/dijit/Search",
        "jimu/dijit/ServiceURLInput",
        "jimu/dijit/SimpleTable",
        "jimu/dijit/TabContainer",
        "jimu/dijit/ColorPicker",
        "jimu/dijit/TabContainer3",
        "jimu/dijit/TileLayoutContainer",
        "jimu/dijit/DrawBox",
        "jimu/dijit/URLInput"
      ],
      "exclude": [
        "esri/main",
        "libs/main"
      ],
      "discard": true
    },
    "libs/main": {},
    "esri/main": {
      "include": [
        "esri/jsapi"
      ]
    },
    "dgrid/main": {
      "include": [
        "dgrid/OnDemandGrid",
        "dgrid/List",
        "dgrid/util/misc",
        "dgrid/OnDemandList"
      ]
    },
    "xstyle/main": {
      "include": [
        "xstyle/main"
      ]
    },
    "themes/DartTheme/widgets/DartController/Widget": {
      "include": [
        "themes/DartTheme/widgets/DartController/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    },
    "widgets/OverviewMap/Widget": {
      "include": [
        "widgets/OverviewMap/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    },
    "widgets/LayerList/Widget": {
      "include": [
        "widgets/LayerList/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    },
    "widgets/Legend/Widget": {
      "include": [
        "widgets/Legend/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    },
    "widgets/BasemapGallery/Widget": {
      "include": [
        "widgets/BasemapGallery/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    },
    "widgets/Bookmark/Widget": {
      "include": [
        "widgets/Bookmark/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    },
    "widgets/Measurement/Widget": {
      "include": [
        "widgets/Measurement/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    },
    "widgets/Draw/Widget": {
      "include": [
        "widgets/Draw/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    },
    "widgets/Print/Widget": {
      "include": [
        "widgets/Print/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    },
    "widgets/About/Widget": {
      "include": [
        "widgets/About/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    },
    "widgets/Search/Widget": {
      "include": [
        "widgets/Search/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    },
    "widgets/ZoomSlider/Widget": {
      "include": [
        "widgets/ZoomSlider/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    },
    "widgets/HomeButton/Widget": {
      "include": [
        "widgets/HomeButton/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    },
    "widgets/MyLocation/Widget": {
      "include": [
        "widgets/MyLocation/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    },
    "themes/DartTheme/main": {
      "include": [
        "themes/DartTheme/_build-generate_module"
      ],
      "exclude": [
        "jimu/main",
        "libs/main",
        "esri/main"
      ]
    }
  },
  "insertAbsMids": 0,
  "staticHasFeatures": {
    "config-dojo-loader-catches": 0,
    "config-tlmSiblingOfDojo": 0,
    "dojo-amd-factory-scan": 0,
    "dojo-combo-api": 0,
    "dojo-config-api": 1,
    "dojo-config-require": 0,
    "dojo-debug-messages": 0,
    "dojo-dom-ready-api": 1,
    "dojo-firebug": 0,
    "dojo-guarantee-console": 1,
    "dojo-has-api": 1,
    "dojo-inject-api": 1,
    "dojo-loader": 1,
    "dojo-log-api": 0,
    "dojo-modulePaths": 0,
    "dojo-moduleUrl": 0,
    "dojo-publish-privates": 0,
    "dojo-requirejs-api": 0,
    "dojo-sniff": 0,
    "dojo-sync-loader": 0,
    "dojo-test-sniff": 0,
    "dojo-timeout-api": 0,
    "dojo-trace-api": 0,
    "dojo-v1x-i18n-Api": 1,
    "dojo-xhr-factory": 0,
    "dom": 1,
    "host-browser": 1,
    "extend-dojo": 1,
    "extend-esri": 0
  },
  "files": [
    [
      "./widgets/_build-generate_widgets-manifest.json",
      "./widgets/widgets-manifest.json"
    ],
    [
      "./_build-generate_config.json",
      "./config.json"
    ]
  ]
};