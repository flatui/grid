/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/src/components/component-registry.ts":
/*!******************************************************!*\
  !*** ./example/src/components/component-registry.ts ***!
  \******************************************************/
/*! exports provided: ComponentRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRegistry", function() { return ComponentRegistry; });
/* harmony import */ var _demo_home_demo_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-home/demo-home */ "./example/src/components/demo-home/demo-home.ts");
/* harmony import */ var _dev_engage_dev_engage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dev-engage/dev-engage */ "./example/src/components/dev-engage/dev-engage.ts");
/* harmony import */ var _get_started_get_started__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-started/get-started */ "./example/src/components/get-started/get-started.ts");
/* harmony import */ var _grid_intro_grid_intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-intro/grid-intro */ "./example/src/components/grid-intro/grid-intro.ts");
/* harmony import */ var _top_nav_top_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-nav/top-nav */ "./example/src/components/top-nav/top-nav.ts");
/* harmony import */ var _what_why_what_why__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./what-why/what-why */ "./example/src/components/what-why/what-why.ts");






class ComponentRegistry {
    constructor() {
    }
    static registerAppComponents(ko) {
        ko.components.register('top-nav', _top_nav_top_nav__WEBPACK_IMPORTED_MODULE_4__["default"]);
        ko.components.register('grid-intro', _grid_intro_grid_intro__WEBPACK_IMPORTED_MODULE_3__["default"]);
        ko.components.register('dev-engage', _dev_engage_dev_engage__WEBPACK_IMPORTED_MODULE_1__["default"]);
        ko.components.register('home', { template: '<grid-intro></grid-intro><dev-engage></dev-engage>' });
        ko.components.register('demo', _demo_home_demo_home__WEBPACK_IMPORTED_MODULE_0__["default"]);
        ko.components.register('get-started', _get_started_get_started__WEBPACK_IMPORTED_MODULE_2__["default"]);
        ko.components.register('what-and-why', _what_why_what_why__WEBPACK_IMPORTED_MODULE_5__["default"]);
    }
}


/***/ }),

/***/ "./example/src/components/demo-home/demo-home.html":
/*!*********************************************************!*\
  !*** ./example/src/components/demo-home/demo-home.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"row\">\n    <div class=\"col-12\">\n        <h3>Grid demo</h3>\n    </div>\n    <div class=\"col-12\">\n        <gs-grid></gs-grid>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./example/src/components/demo-home/demo-home.ts":
/*!*******************************************************!*\
  !*** ./example/src/components/demo-home/demo-home.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src */ "./src/index.ts");
/* harmony import */ var _src_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/model */ "./src/model/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class DemoHome {
    constructor() {
        const gsGridRef = _src__WEBPACK_IMPORTED_MODULE_0__;
        // setup grid config.
        this.setupGridAndApplyData();
    }
    buildGridColumns() {
        return [
            {
                field: 'name',
                headerName: 'Name'
            },
            {
                field: 'username',
                headerName: 'User name'
            },
            {
                field: 'email',
                headerName: 'Email'
            },
            {
                field: 'phone',
                headerName: 'Phone'
            },
            {
                field: 'website',
                headerName: 'Website'
            },
            {
                field: 'address.city',
                headerName: 'City',
                width: 120
            },
            {
                field: 'company.name',
                headerName: 'Company'
            },
            {
                field: 'address.zipcode',
                headerName: 'Zip',
                width: 100
            }
        ];
    }
    setupGridAndApplyData() {
        return __awaiter(this, void 0, void 0, function* () {
            const gridConfig = new _src_model__WEBPACK_IMPORTED_MODULE_1__["GridConfig"]();
            gridConfig.columnDefs = this.buildGridColumns();
            this.usersList = yield this.getUsers();
            gridConfig.data = this.usersList;
            const gridEl = document.querySelector('gs-grid');
            if (gridEl) {
                _src_model__WEBPACK_IMPORTED_MODULE_1__["GridEvents"].setupGridConfig(gridEl.getAttribute('instance-id'), gridConfig);
            }
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = ({ viewModel: DemoHome, template: __webpack_require__(/*! ./demo-home.html */ "./example/src/components/demo-home/demo-home.html") });


/***/ }),

/***/ "./example/src/components/dev-engage/dev-engage.html":
/*!***********************************************************!*\
  !*** ./example/src/components/dev-engage/dev-engage.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"container\">\n    <div class=\"row d-flex flex-row align-items-stretch\">\n        <div class=\"col-3\">\n            <div class=\"card h-100\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">Get started</h5>\n                  <p class=\"card-text\">Setup <span class=\"text-primary\">gs-grid</span> in the code in minutes & start using it in your project.</p>\n                </div>\n                <div class=\"card-footer bg-white text-right\">\n                    <a role=\"button\" class=\"btn btn-outline-primary\" href=\"#/get-started\">Let's go</a>\n                </div>\n              </div>\n        </div>\n        <div class=\"col-3\">\n            <div class=\"card h-100\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">Visit Docs</h5>\n                  <p class=\"card-text\">Visit documentation & check classes, enums, other type information.</p>\n                </div>\n                <div class=\"card-footer bg-white text-right\">\n                    <a href=\"docs/\" class=\"btn btn-outline-primary\">Let's go</a>\n                </div>\n              </div>\n        </div>\n        <div class=\"col-3\">\n            <div class=\"card h-100\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">View demo</h5>\n                  <p class=\"card-text\">See the <span class=\"text-primary\">gs-grid</span> in action & view few code snippets along.</p>\n                </div>\n                <div class=\"card-footer bg-white text-right\">\n                    <a role=\"button\" class=\"btn btn-outline-primary\" href=\"#/demo\">Let's go</a>\n                </div>\n              </div>\n        </div>\n        <div class=\"col-3\">\n            <div class=\"card h-100\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">What & Why ?</h5>\n                  <p class=\"card-text\">What is <span class=\"text-primary\">gs-grid</span>, let's review its features & why there is a need for it.</p>\n                </div>\n                <div class=\"card-footer bg-white text-right\">\n                    <a role=\"button\" class=\"btn btn-outline-primary\" href=\"#/what-and-why\">Let's go</a>\n                </div>\n              </div>\n        </div>\n    </div>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./example/src/components/dev-engage/dev-engage.ts":
/*!*********************************************************!*\
  !*** ./example/src/components/dev-engage/dev-engage.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class DevEngage {
    constructor() {
    }
}
/* harmony default export */ __webpack_exports__["default"] = ({ viewModel: DevEngage, template: __webpack_require__(/*! ./dev-engage.html */ "./example/src/components/dev-engage/dev-engage.html") });


/***/ }),

/***/ "./example/src/components/get-started/get-started.html":
/*!*************************************************************!*\
  !*** ./example/src/components/get-started/get-started.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"row\">\n    <div class=\"col-12\">\n        <h3>Get started</h3>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./example/src/components/get-started/get-started.ts":
/*!***********************************************************!*\
  !*** ./example/src/components/get-started/get-started.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GetStarted {
    constructor() {
    }
}
/* harmony default export */ __webpack_exports__["default"] = ({ viewModel: GetStarted, template: __webpack_require__(/*! ./get-started.html */ "./example/src/components/get-started/get-started.html") });


/***/ }),

/***/ "./example/src/components/grid-intro/grid-intro.html":
/*!***********************************************************!*\
  !*** ./example/src/components/grid-intro/grid-intro.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"w-75 px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n    <h1 class=\"display-2\">\n        <code class=\"text-primary\">&ltgs-grid/&gt</code>\n    </h1>\n    <p class=\"lead\">\n        A new <span class=\"text-primary\">grid</span> for \n        evolving web, framework <span class=\"text-secondary\">agnostic</span>. \n        Communicates with <span class=\"text-warning\">events</span>. \n        <span class=\"text-info\">Easy</span> to use & \n        <span class=\"text-danger\">powerful</span> features.\n    </p>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./example/src/components/grid-intro/grid-intro.ts":
/*!*********************************************************!*\
  !*** ./example/src/components/grid-intro/grid-intro.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GridIntro {
    constructor() {
    }
}
/* harmony default export */ __webpack_exports__["default"] = ({ viewModel: GridIntro, template: __webpack_require__(/*! ./grid-intro.html */ "./example/src/components/grid-intro/grid-intro.html") });


/***/ }),

/***/ "./example/src/components/top-nav/top-nav.html":
/*!*****************************************************!*\
  !*** ./example/src/components/top-nav/top-nav.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\n    <a role=\"button\" class=\"my-0 mr-md-auto font-weight-normal h5 text-primary text-decoration-none\" href=\"#/\">\n        <code class=\"text-primary\">&ltgs-grid/&gt</code>\n    </a>\n    <nav class=\"my-2 my-md-0 mr-md-3\">\n      <a class=\"p-2 text-primary text-decoration-none\" href=\"#/what-and-why\">Features</a>\n      <a class=\"p-2 text-success text-decoration-none\" href=\"https://github.com/ganesh-vellanki/gs-grid\" target=\"_blank\">Github</a>\n      <a class=\"p-2 text-danger text-decoration-none\" href=\"docs/\">Docs</a>\n    </nav>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./example/src/components/top-nav/top-nav.ts":
/*!***************************************************!*\
  !*** ./example/src/components/top-nav/top-nav.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class TopNav {
    constructor() { }
}
/* harmony default export */ __webpack_exports__["default"] = ({ viewModel: TopNav, template: __webpack_require__(/*! ./top-nav.html */ "./example/src/components/top-nav/top-nav.html") });


/***/ }),

/***/ "./example/src/components/what-why/what-why.html":
/*!*******************************************************!*\
  !*** ./example/src/components/what-why/what-why.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"row\">\n    <div class=\"col-12\">\n        <h3>What & Why</h3>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./example/src/components/what-why/what-why.ts":
/*!*****************************************************!*\
  !*** ./example/src/components/what-why/what-why.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class WhatAndWhy {
    constructor() {
    }
}
/* harmony default export */ __webpack_exports__["default"] = ({ viewModel: WhatAndWhy, template: __webpack_require__(/*! ./what-why.html */ "./example/src/components/what-why/what-why.html") });


/***/ }),

/***/ "./example/src/index.ts":
/*!******************************!*\
  !*** ./example/src/index.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_component_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/component-registry */ "./example/src/components/component-registry.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./example/src/router.ts");



class GridAppViewModel {
    constructor() {
        this.routerHatchId = 'koRouterHatch';
        _components_component_registry__WEBPACK_IMPORTED_MODULE_1__["ComponentRegistry"].registerAppComponents(knockout__WEBPACK_IMPORTED_MODULE_0__);
        this.componentView = knockout__WEBPACK_IMPORTED_MODULE_0__["observable"]('home');
        this.initializeRouter();
    }
    initializeRouter() {
        this.router = new _router__WEBPACK_IMPORTED_MODULE_2__["Router"](this.routerHatchId, this.componentView);
        this.router.addRoutes(this.getRoutes());
    }
    getRoutes() {
        return [
            new _router__WEBPACK_IMPORTED_MODULE_2__["RouteInfo"]({
                path: '/',
                componentTag: 'home'
            }),
            new _router__WEBPACK_IMPORTED_MODULE_2__["RouteInfo"]({
                path: '/demo',
                componentTag: 'demo'
            }),
            new _router__WEBPACK_IMPORTED_MODULE_2__["RouteInfo"]({
                path: '/get-started',
                componentTag: 'get-started'
            }),
            new _router__WEBPACK_IMPORTED_MODULE_2__["RouteInfo"]({
                path: '/what-and-why',
                componentTag: 'what-and-why'
            })
        ];
    }
}
knockout__WEBPACK_IMPORTED_MODULE_0__["applyBindings"](new GridAppViewModel(), document.getElementById('gridApp'));


/***/ }),

/***/ "./example/src/router.ts":
/*!*******************************!*\
  !*** ./example/src/router.ts ***!
  \*******************************/
/*! exports provided: RouteInfo, Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteInfo", function() { return RouteInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
class RouteInfo {
    constructor(args) {
        this.path = args.path;
        this.componentTag = args.componentTag;
        this.text = args.text;
    }
}
class Router {
    constructor(elementId, componentView) {
        this.componentView = componentView;
        this._routes = {};
        this._routerHatch = document.getElementById(elementId);
        this.listenForPathChange();
    }
    addRoute(routeInfo) {
        this._routes[routeInfo.path] = routeInfo;
    }
    addRoutes(routeInfoCollection) {
        routeInfoCollection.forEach(rI => {
            this._routes[rI.path] = rI;
        });
    }
    removeRoute(path) {
        delete this._routes[path];
    }
    onRouteChange() {
        // Current route url (getting rid of '#' in hash as well)
        const url = location.hash.slice(1) || '/';
        // Get route by url
        const routeInfo = this._routes[url];
        if (this._routerHatch && this.isValidRouteInfo(routeInfo)) {
            if (routeInfo.text) {
                this._routerHatch.innerText = routeInfo.text;
            }
            else {
                this.componentView(routeInfo.componentTag);
            }
        }
    }
    isValidRouteInfo(routeInfo) {
        return routeInfo && (routeInfo.componentTag || routeInfo.text);
    }
    listenForPathChange() {
        // Listen on hash change:
        window.addEventListener('hashchange', () => { this.onRouteChange(); });
        // Listen on page load:
        window.addEventListener('load', () => { this.onRouteChange(); });
    }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/knockout/build/output/knockout-latest.js":
/*!***************************************************************!*\
  !*** ./node_modules/knockout/build/output/knockout-latest.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Knockout JavaScript library v3.5.1
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(n){var A=this||(0,eval)("this"),w=A.document,R=A.navigator,v=A.jQuery,H=A.JSON;v||"undefined"===typeof jQuery||(v=jQuery);(function(n){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports,__webpack_require__], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(function(S,T){function K(a,c){return null===a||typeof a in W?a===c:!1}function X(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b()},c))}}function Y(b,c){var d;return function(){clearTimeout(d);
d=a.a.setTimeout(b,c)}}function Z(a,c){c&&"change"!==c?"beforeChange"===c?this.pc(a):this.gb(a,c):this.qc(a)}function aa(a,c){null!==c&&c.s&&c.s()}function ba(a,c){var d=this.qd,e=d[r];e.ra||(this.Qb&&this.mb[c]?(d.uc(c,a,this.mb[c]),this.mb[c]=null,--this.Qb):e.I[c]||d.uc(c,a,e.J?{da:a}:d.$c(a)),a.Ja&&a.gd())}var a="undefined"!==typeof S?S:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.L=function(a,c,d){a[c]=d};a.version="3.5.1";a.b("version",
a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1,foreachHidesDestroyed:!1};a.a=function(){function b(a,b){for(var c in a)f.call(a,c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)f.call(b,c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}function e(b,c,d,e){var l=b[c].match(q)||[];a.a.D(d.match(q),function(b){a.a.Na(l,b,e)});b[c]=l.join(" ")}var f=Object.prototype.hasOwnProperty,g={__proto__:[]}instanceof Array,h="function"===typeof Symbol,m={},k={};m[R&&/Firefox\/2/i.test(R.userAgent)?
"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];m.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(m,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)k[b[c]]=a});var l={propertychange:!0},p=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:n}(),q=/\S+/g,t;return{Jc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
D:function(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a)},A:"function"==typeof Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b)}:function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},Lb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d,a))return a[d];return n},Pa:function(b,c){var d=a.a.A(b,c);0<d?b.splice(d,1):0===d&&b.shift()},wc:function(b){var c=[];b&&a.a.D(b,function(b){0>a.a.A(c,b)&&c.push(b)});return c},Mb:function(a,
b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)d.push(b.call(c,a[e],e));return d},jb:function(a,b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)b.call(c,a[e],e)&&d.push(a[e]);return d},Nb:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},Na:function(b,c,d){var e=a.a.A(a.a.bc(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},Ba:g,extend:c,setPrototypeOf:d,Ab:g?d:c,P:b,Ga:function(a,b,c){if(!a)return a;var d={},e;for(e in a)f.call(a,e)&&(d[e]=
b.call(c,a[e],e,a));return d},Tb:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Yb:function(b){b=a.a.la(b);for(var c=(b[0]&&b[0].ownerDocument||w).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.oa(b[d]));return c},Ca:function(b,c){for(var d=0,e=b.length,l=[];d<e;d++){var k=b[d].cloneNode(!0);l.push(c?a.oa(k):k)}return l},va:function(b,c){a.a.Tb(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},Xc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],
l=e.parentNode,k=0,f=c.length;k<f;k++)l.insertBefore(c[k],e);k=0;for(f=d.length;k<f;k++)a.removeNode(d[k])}},Ua:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),c=c.nextSibling;a.push(d)}}return a},Zc:function(a,b){7>p?a.setAttribute("selected",b):a.selected=b},Db:function(a){return null===a||a===n?"":a.trim?
a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ud:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},vd:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(1!==a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},Sb:function(b){return a.a.vd(b,b.ownerDocument.documentElement)},kd:function(b){return!!a.a.Lb(b,a.a.Sb)},R:function(a){return a&&
a.tagName&&a.tagName.toLowerCase()},Ac:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Ac(b),c)},Gc:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0)},B:function(b,c,d){var e=a.a.Ac(d);d=l[c];if(a.options.useOnlyNativeEvents||d||!v)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var k=function(a){e.call(b,a)},f="on"+c;b.attachEvent(f,
k);a.a.K.za(b,function(){b.detachEvent(f,k)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else t||(t="function"==typeof v(b).on?"on":"bind"),v(b)[t](c,e)},Fb:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.R(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!v||d)if("function"==typeof w.createEvent)if("function"==
typeof b.dispatchEvent)d=w.createEvent(k[c]||"HTMLEvents"),d.initEvent(c,!0,!0,A,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");else v(b).trigger(c)},f:function(b){return a.O(b)?b():b},bc:function(b){return a.O(b)?b.v():b},Eb:function(b,c,d){var l;c&&("object"===typeof b.classList?
(l=b.classList[d?"add":"remove"],a.a.D(c.match(q),function(a){l.call(b.classList,a)})):"string"===typeof b.className.baseVal?e(b.className,"baseVal",c,d):e(b,"className",c,d))},Bb:function(b,c){var d=a.a.f(c);if(null===d||d===n)d="";var e=a.h.firstChild(b);!e||3!=e.nodeType||a.h.nextSibling(e)?a.h.va(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.Ad(b)},Yc:function(a,b){a.name=b;if(7>=p)try{var c=a.name.replace(/[&<>'"]/g,function(a){return"&#"+a.charCodeAt(0)+";"});a.mergeAttributes(w.createElement("<input name='"+
c+"'/>"),!1)}catch(d){}},Ad:function(a){9<=p&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},wd:function(a){if(p){var b=a.style.width;a.style.width=0;a.style.width=b}},Pd:function(b,c){b=a.a.f(b);c=a.a.f(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},la:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Da:function(a){return h?Symbol(a):a},Zd:6===p,$d:7===p,W:p,Lc:function(b,c){for(var d=a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))),
e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},l=[],k=d.length-1;0<=k;k--)e(d[k])&&l.push(d[k]);return l},Nd:function(b){return"string"==typeof b&&(b=a.a.Db(b))?H&&H.parse?H.parse(b):(new Function("return "+b))():null},hc:function(b,c,d){if(!H||!H.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return H.stringify(a.a.f(b),c,d)},Od:function(c,d,e){e=e||{};var l=e.params||{},k=e.includeFields||this.Jc,f=c;if("object"==typeof c&&"form"===a.a.R(c))for(var f=c.action,h=k.length-1;0<=h;h--)for(var g=a.a.Lc(c,k[h]),m=g.length-1;0<=m;m--)l[g[m].name]=g[m].value;d=a.a.f(d);var p=w.createElement("form");p.style.display="none";p.action=f;p.method="post";for(var q in d)c=w.createElement("input"),c.type="hidden",c.name=q,c.value=a.a.hc(a.a.f(d[q])),p.appendChild(c);b(l,function(a,b){var c=w.createElement("input");
c.type="hidden";c.name=a;c.value=b;p.appendChild(c)});w.body.appendChild(p);e.submitter?e.submitter(p):p.submit();setTimeout(function(){p.parentNode.removeChild(p)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.D);a.b("utils.arrayFirst",a.a.Lb);a.b("utils.arrayFilter",a.a.jb);a.b("utils.arrayGetDistinctValues",a.a.wc);a.b("utils.arrayIndexOf",a.a.A);a.b("utils.arrayMap",a.a.Mb);a.b("utils.arrayPushAll",a.a.Nb);a.b("utils.arrayRemoveItem",a.a.Pa);a.b("utils.cloneNodes",a.a.Ca);a.b("utils.createSymbolOrString",
a.a.Da);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Jc);a.b("utils.getFormFields",a.a.Lc);a.b("utils.objectMap",a.a.Ga);a.b("utils.peekObservable",a.a.bc);a.b("utils.postJson",a.a.Od);a.b("utils.parseJson",a.a.Nd);a.b("utils.registerEventHandler",a.a.B);a.b("utils.stringifyJson",a.a.hc);a.b("utils.range",a.a.Pd);a.b("utils.toggleDomNodeCssClass",a.a.Eb);a.b("utils.triggerEvent",a.a.Fb);a.b("utils.unwrapObservable",a.a.f);a.b("utils.objectForEach",a.a.P);a.b("utils.addOrRemoveItem",
a.a.Na);a.b("utils.setTextContent",a.a.Bb);a.b("unwrap",a.a.f);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.g=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={},e,f;a.a.W?(e=function(a,e){var f=a[c];if(!f||"null"===f||!d[f]){if(!e)return n;f=a[c]="ko"+b++;d[f]=
{}}return d[f]},f=function(a){var b=a[c];return b?(delete d[b],a[c]=null,!0):!1}):(e=function(a,b){var d=a[c];!d&&b&&(d=a[c]={});return d},f=function(a){return a[c]?(delete a[c],!0):!1});return{get:function(a,b){var c=e(a,!1);return c&&c[b]},set:function(a,b,c){(a=e(a,c!==n))&&(a[b]=c)},Ub:function(a,b,c){a=e(a,!0);return a[b]||(a[b]=c)},clear:f,Z:function(){return b++ +c}}};a.b("utils.domData",a.a.g);a.b("utils.domData.clear",a.a.g.clear);a.a.K=new function(){function b(b,c){var d=a.a.g.get(b,e);
d===n&&c&&(d=[],a.a.g.set(b,e,d));return d}function c(c){var e=b(c,!1);if(e)for(var e=e.slice(0),k=0;k<e.length;k++)e[k](c);a.a.g.clear(c);a.a.K.cleanExternalData(c);g[c.nodeType]&&d(c.childNodes,!0)}function d(b,d){for(var e=[],l,f=0;f<b.length;f++)if(!d||8===b[f].nodeType)if(c(e[e.length]=l=b[f]),b[f]!==l)for(;f--&&-1==a.a.A(e,b[f]););}var e=a.a.g.Z(),f={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{za:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},yb:function(c,
d){var f=b(c,!1);f&&(a.a.Pa(f,d),0==f.length&&a.a.g.set(c,e,n))},oa:function(b){a.u.G(function(){f[b.nodeType]&&(c(b),g[b.nodeType]&&d(b.getElementsByTagName("*")))});return b},removeNode:function(b){a.oa(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){v&&"function"==typeof v.cleanData&&v.cleanData([a])}}};a.oa=a.a.K.oa;a.removeNode=a.a.K.removeNode;a.b("cleanNode",a.oa);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.K);a.b("utils.domNodeDisposal.addDisposeCallback",
a.a.K.za);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.K.yb);(function(){var b=[0,"",""],c=[1,"<table>","</table>"],d=[3,"<table><tbody><tr>","</tr></tbody></table>"],e=[1,"<select multiple='multiple'>","</select>"],f={thead:c,tbody:c,tfoot:c,tr:[2,"<table><tbody>","</tbody></table>"],td:d,th:d,option:e,optgroup:e},g=8>=a.a.W;a.a.ua=function(c,d){var e;if(v)if(v.parseHTML)e=v.parseHTML(c,d)||[];else{if((e=v.clean([c],d))&&e[0]){for(var l=e[0];l.parentNode&&11!==l.parentNode.nodeType;)l=l.parentNode;
l.parentNode&&l.parentNode.removeChild(l)}}else{(e=d)||(e=w);var l=e.parentWindow||e.defaultView||A,p=a.a.Db(c).toLowerCase(),q=e.createElement("div"),t;t=(p=p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/))&&f[p[1]]||b;p=t[0];t="ignored<div>"+t[1]+c+t[2]+"</div>";"function"==typeof l.innerShiv?q.appendChild(l.innerShiv(t)):(g&&e.body.appendChild(q),q.innerHTML=t,g&&q.parentNode.removeChild(q));for(;p--;)q=q.lastChild;e=a.a.la(q.lastChild.childNodes)}return e};a.a.Md=function(b,c){var d=a.a.ua(b,
c);return d.length&&d[0].parentElement||a.a.Yb(d)};a.a.fc=function(b,c){a.a.Tb(b);c=a.a.f(c);if(null!==c&&c!==n)if("string"!=typeof c&&(c=c.toString()),v)v(b).html(c);else for(var d=a.a.ua(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",a.a.ua);a.b("utils.setHtml",a.a.fc);a.aa=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.aa.Uc(c.nodeValue);null!=f&&e.push({ud:c,Kd:f})}else if(1==c.nodeType)for(var f=0,g=c.childNodes,h=g.length;f<h;f++)b(g[f],
e)}var c={};return{Xb:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},bd:function(a,b){var f=c[a];if(f===n)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),!0}finally{delete c[a]}},cd:function(c,e){var f=
[];b(c,f);for(var g=0,h=f.length;g<h;g++){var m=f[g].ud,k=[m];e&&a.a.Nb(k,e);a.aa.bd(f[g].Kd,k);m.nodeValue="";m.parentNode&&m.parentNode.removeChild(m)}},Uc:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.aa);a.b("memoization.memoize",a.aa.Xb);a.b("memoization.unmemoize",a.aa.bd);a.b("memoization.parseMemoText",a.aa.Uc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.aa.cd);a.na=function(){function b(){if(f)for(var b=f,c=0,d;h<f;)if(d=e[h++]){if(h>b){if(5E3<=
++c){h=f;a.a.Gc(Error("'Too much recursion' after processing "+c+" task groups."));break}b=f}try{d()}catch(p){a.a.Gc(p)}}}function c(){b();h=f=e.length=0}var d,e=[],f=0,g=1,h=0;A.MutationObserver?d=function(a){var b=w.createElement("div");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle("foo")}}(c):d=w&&"onreadystatechange"in w.createElement("script")?function(a){var b=w.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;w.documentElement.removeChild(b);
b=null;a()};w.documentElement.appendChild(b)}:function(a){setTimeout(a,0)};return{scheduler:d,zb:function(b){f||a.na.scheduler(c);e[f++]=b;return g++},cancel:function(a){a=a-(g-f);a>=h&&a<f&&(e[a]=null)},resetForTesting:function(){var a=f-h;h=f=e.length=0;return a},Sd:b}}();a.b("tasks",a.na);a.b("tasks.schedule",a.na.zb);a.b("tasks.runEarly",a.na.Sd);a.Ta={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.$({read:b,write:function(e){clearTimeout(d);d=a.a.setTimeout(function(){b(e)},
c)}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);a.Hb=!1;f="function"==typeof e?e:"notifyWhenChangesStop"==e?Y:X;a.ub(function(a){return f(a,d,c)})},deferred:function(b,c){if(!0!==c)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.Hb||(b.Hb=!0,b.ub(function(c){var e,f=!1;return function(){if(!f){a.na.cancel(e);e=a.na.zb(c);try{f=!0,b.notifySubscribers(n,"dirty")}finally{f=
!1}}}}))},notify:function(a,c){a.equalityComparer="always"==c?null:K}};var W={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Ta);a.ic=function(b,c,d){this.da=b;this.lc=c;this.mc=d;this.Ib=!1;this.fb=this.Jb=null;a.L(this,"dispose",this.s);a.L(this,"disposeWhenNodeIsRemoved",this.l)};a.ic.prototype.s=function(){this.Ib||(this.fb&&a.a.K.yb(this.Jb,this.fb),this.Ib=!0,this.mc(),this.da=this.lc=this.mc=this.Jb=this.fb=null)};a.ic.prototype.l=function(b){this.Jb=b;a.a.K.za(b,this.fb=this.s.bind(this))};
a.T=function(){a.a.Ab(this,D);D.qb(this)};var D={qb:function(a){a.U={change:[]};a.sc=1},subscribe:function(b,c,d){var e=this;d=d||"change";var f=new a.ic(e,c?b.bind(c):b,function(){a.a.Pa(e.U[d],f);e.hb&&e.hb(d)});e.Qa&&e.Qa(d);e.U[d]||(e.U[d]=[]);e.U[d].push(f);return f},notifySubscribers:function(b,c){c=c||"change";"change"===c&&this.Gb();if(this.Wa(c)){var d="change"===c&&this.ed||this.U[c].slice(0);try{a.u.xc();for(var e=0,f;f=d[e];++e)f.Ib||f.lc(b)}finally{a.u.end()}}},ob:function(){return this.sc},
Dd:function(a){return this.ob()!==a},Gb:function(){++this.sc},ub:function(b){var c=this,d=a.O(c),e,f,g,h,m;c.gb||(c.gb=c.notifySubscribers,c.notifySubscribers=Z);var k=b(function(){c.Ja=!1;d&&h===c&&(h=c.nc?c.nc():c());var a=f||m&&c.sb(g,h);m=f=e=!1;a&&c.gb(g=h)});c.qc=function(a,b){b&&c.Ja||(m=!b);c.ed=c.U.change.slice(0);c.Ja=e=!0;h=a;k()};c.pc=function(a){e||(g=a,c.gb(a,"beforeChange"))};c.rc=function(){m=!0};c.gd=function(){c.sb(g,c.v(!0))&&(f=!0)}},Wa:function(a){return this.U[a]&&this.U[a].length},
Bd:function(b){if(b)return this.U[b]&&this.U[b].length||0;var c=0;a.a.P(this.U,function(a,b){"dirty"!==a&&(c+=b.length)});return c},sb:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},toString:function(){return"[object Object]"},extend:function(b){var c=this;b&&a.a.P(b,function(b,e){var f=a.Ta[b];"function"==typeof f&&(c=f(c,e)||c)});return c}};a.L(D,"init",D.qb);a.L(D,"subscribe",D.subscribe);a.L(D,"extend",D.extend);a.L(D,"getSubscriptionsCount",D.Bd);a.a.Ba&&a.a.setPrototypeOf(D,
Function.prototype);a.T.fn=D;a.Qc=function(a){return null!=a&&"function"==typeof a.subscribe&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.T);a.b("isSubscribable",a.Qc);a.S=a.u=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{xc:b,end:c,cc:function(b){if(e){if(!a.Qc(b))throw Error("Only subscribable things can act as dependencies");e.od.call(e.pd,b,b.fd||(b.fd=++f))}},G:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},qa:function(){if(e)return e.o.qa()},
Va:function(){if(e)return e.o.Va()},Ya:function(){if(e)return e.Ya},o:function(){if(e)return e.o}}}();a.b("computedContext",a.S);a.b("computedContext.getDependenciesCount",a.S.qa);a.b("computedContext.getDependencies",a.S.Va);a.b("computedContext.isInitial",a.S.Ya);a.b("computedContext.registerDependency",a.S.cc);a.b("ignoreDependencies",a.Yd=a.u.G);var I=a.a.Da("_latestValue");a.ta=function(b){function c(){if(0<arguments.length)return c.sb(c[I],arguments[0])&&(c.ya(),c[I]=arguments[0],c.xa()),this;
a.u.cc(c);return c[I]}c[I]=b;a.a.Ba||a.a.extend(c,a.T.fn);a.T.fn.qb(c);a.a.Ab(c,F);a.options.deferUpdates&&a.Ta.deferred(c,!0);return c};var F={equalityComparer:K,v:function(){return this[I]},xa:function(){this.notifySubscribers(this[I],"spectate");this.notifySubscribers(this[I])},ya:function(){this.notifySubscribers(this[I],"beforeChange")}};a.a.Ba&&a.a.setPrototypeOf(F,a.T.fn);var G=a.ta.Ma="__ko_proto__";F[G]=a.ta;a.O=function(b){if((b="function"==typeof b&&b[G])&&b!==F[G]&&b!==a.o.fn[G])throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
return!!b};a.Za=function(b){return"function"==typeof b&&(b[G]===F[G]||b[G]===a.o.fn[G]&&b.Nc)};a.b("observable",a.ta);a.b("isObservable",a.O);a.b("isWriteableObservable",a.Za);a.b("isWritableObservable",a.Za);a.b("observable.fn",F);a.L(F,"peek",F.v);a.L(F,"valueHasMutated",F.xa);a.L(F,"valueWillMutate",F.ya);a.Ha=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.ta(b);a.a.Ab(b,
a.Ha.fn);return b.extend({trackArrayChanges:!0})};a.Ha.fn={remove:function(b){for(var c=this.v(),d=[],e="function"!=typeof b||a.O(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];if(e(g)){0===d.length&&this.ya();if(c[f]!==g)throw Error("Array modified during remove; cannot remove item");d.push(g);c.splice(f,1);f--}}d.length&&this.xa();return d},removeAll:function(b){if(b===n){var c=this.v(),d=c.slice(0);this.ya();c.splice(0,c.length);this.xa();return d}return b?this.remove(function(c){return 0<=
a.a.A(b,c)}):[]},destroy:function(b){var c=this.v(),d="function"!=typeof b||a.O(b)?function(a){return a===b}:b;this.ya();for(var e=c.length-1;0<=e;e--){var f=c[e];d(f)&&(f._destroy=!0)}this.xa()},destroyAll:function(b){return b===n?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.A(b,c)}):[]},indexOf:function(b){var c=this();return a.a.A(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.ya(),this.v()[d]=c,this.xa())},sorted:function(a){var c=this().slice(0);
return a?c.sort(a):c.sort()},reversed:function(){return this().slice(0).reverse()}};a.a.Ba&&a.a.setPrototypeOf(a.Ha.fn,a.ta.fn);a.a.D("pop push reverse shift sort splice unshift".split(" "),function(b){a.Ha.fn[b]=function(){var a=this.v();this.ya();this.zc(a,b,arguments);var d=a[b].apply(a,arguments);this.xa();return d===a?this:d}});a.a.D(["slice"],function(b){a.Ha.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.Pc=function(b){return a.O(b)&&"function"==typeof b.remove&&"function"==
typeof b.push};a.b("observableArray",a.Ha);a.b("isObservableArray",a.Pc);a.Ta.trackArrayChanges=function(b,c){function d(){function c(){if(m){var d=[].concat(b.v()||[]),e;if(b.Wa("arrayChange")){if(!f||1<m)f=a.a.Pb(k,d,b.Ob);e=f}k=d;f=null;m=0;e&&e.length&&b.notifySubscribers(e,"arrayChange")}}e?c():(e=!0,h=b.subscribe(function(){++m},null,"spectate"),k=[].concat(b.v()||[]),f=null,g=b.subscribe(c))}b.Ob={};c&&"object"==typeof c&&a.a.extend(b.Ob,c);b.Ob.sparse=!0;if(!b.zc){var e=!1,f=null,g,h,m=0,
k,l=b.Qa,p=b.hb;b.Qa=function(a){l&&l.call(b,a);"arrayChange"===a&&d()};b.hb=function(a){p&&p.call(b,a);"arrayChange"!==a||b.Wa("arrayChange")||(g&&g.s(),h&&h.s(),h=g=null,e=!1,k=n)};b.zc=function(b,c,d){function l(a,b,c){return k[k.length]={status:a,value:b,index:c}}if(e&&!m){var k=[],p=b.length,g=d.length,h=0;switch(c){case "push":h=p;case "unshift":for(c=0;c<g;c++)l("added",d[c],h+c);break;case "pop":h=p-1;case "shift":p&&l("deleted",b[h],h);break;case "splice":c=Math.min(Math.max(0,0>d[0]?p+d[0]:
d[0]),p);for(var p=1===g?p:Math.min(c+(d[1]||0),p),g=c+g-2,h=Math.max(p,g),U=[],L=[],n=2;c<h;++c,++n)c<p&&L.push(l("deleted",b[c],c)),c<g&&U.push(l("added",d[n],c));a.a.Kc(L,U);break;default:return}f=k}}}};var r=a.a.Da("_state");a.o=a.$=function(b,c,d){function e(){if(0<arguments.length){if("function"===typeof f)f.apply(g.nb,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}g.ra||
a.u.cc(e);(g.ka||g.J&&e.Xa())&&e.ha();return g.X}"object"===typeof b?d=b:(d=d||{},b&&(d.read=b));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");var f=d.write,g={X:n,sa:!0,ka:!0,rb:!1,jc:!1,ra:!1,wb:!1,J:!1,Wc:d.read,nb:c||d.owner,l:d.disposeWhenNodeIsRemoved||d.l||null,Sa:d.disposeWhen||d.Sa,Rb:null,I:{},V:0,Ic:null};e[r]=g;e.Nc="function"===typeof f;a.a.Ba||a.a.extend(e,a.T.fn);a.T.fn.qb(e);a.a.Ab(e,C);d.pure?(g.wb=!0,g.J=!0,a.a.extend(e,da)):
d.deferEvaluation&&a.a.extend(e,ea);a.options.deferUpdates&&a.Ta.deferred(e,!0);g.l&&(g.jc=!0,g.l.nodeType||(g.l=null));g.J||d.deferEvaluation||e.ha();g.l&&e.ja()&&a.a.K.za(g.l,g.Rb=function(){e.s()});return e};var C={equalityComparer:K,qa:function(){return this[r].V},Va:function(){var b=[];a.a.P(this[r].I,function(a,d){b[d.Ka]=d.da});return b},Vb:function(b){if(!this[r].V)return!1;var c=this.Va();return-1!==a.a.A(c,b)?!0:!!a.a.Lb(c,function(a){return a.Vb&&a.Vb(b)})},uc:function(a,c,d){if(this[r].wb&&
c===this)throw Error("A 'pure' computed must not be called recursively");this[r].I[a]=d;d.Ka=this[r].V++;d.La=c.ob()},Xa:function(){var a,c,d=this[r].I;for(a in d)if(Object.prototype.hasOwnProperty.call(d,a)&&(c=d[a],this.Ia&&c.da.Ja||c.da.Dd(c.La)))return!0},Jd:function(){this.Ia&&!this[r].rb&&this.Ia(!1)},ja:function(){var a=this[r];return a.ka||0<a.V},Rd:function(){this.Ja?this[r].ka&&(this[r].sa=!0):this.Hc()},$c:function(a){if(a.Hb){var c=a.subscribe(this.Jd,this,"dirty"),d=a.subscribe(this.Rd,
this);return{da:a,s:function(){c.s();d.s()}}}return a.subscribe(this.Hc,this)},Hc:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[r].Ic),this[r].Ic=a.a.setTimeout(function(){b.ha(!0)},c)):b.Ia?b.Ia(!0):b.ha(!0)},ha:function(b){var c=this[r],d=c.Sa,e=!1;if(!c.rb&&!c.ra){if(c.l&&!a.a.Sb(c.l)||d&&d()){if(!c.jc){this.s();return}}else c.jc=!1;c.rb=!0;try{e=this.zd(b)}finally{c.rb=!1}return e}},zd:function(b){var c=this[r],d=!1,e=c.wb?n:!c.V,d={qd:this,mb:c.I,Qb:c.V};a.u.xc({pd:d,
od:ba,o:this,Ya:e});c.I={};c.V=0;var f=this.yd(c,d);c.V?d=this.sb(c.X,f):(this.s(),d=!0);d&&(c.J?this.Gb():this.notifySubscribers(c.X,"beforeChange"),c.X=f,this.notifySubscribers(c.X,"spectate"),!c.J&&b&&this.notifySubscribers(c.X),this.rc&&this.rc());e&&this.notifySubscribers(c.X,"awake");return d},yd:function(b,c){try{var d=b.Wc;return b.nb?d.call(b.nb):d()}finally{a.u.end(),c.Qb&&!b.J&&a.a.P(c.mb,aa),b.sa=b.ka=!1}},v:function(a){var c=this[r];(c.ka&&(a||!c.V)||c.J&&this.Xa())&&this.ha();return c.X},
ub:function(b){a.T.fn.ub.call(this,b);this.nc=function(){this[r].J||(this[r].sa?this.ha():this[r].ka=!1);return this[r].X};this.Ia=function(a){this.pc(this[r].X);this[r].ka=!0;a&&(this[r].sa=!0);this.qc(this,!a)}},s:function(){var b=this[r];!b.J&&b.I&&a.a.P(b.I,function(a,b){b.s&&b.s()});b.l&&b.Rb&&a.a.K.yb(b.l,b.Rb);b.I=n;b.V=0;b.ra=!0;b.sa=!1;b.ka=!1;b.J=!1;b.l=n;b.Sa=n;b.Wc=n;this.Nc||(b.nb=n)}},da={Qa:function(b){var c=this,d=c[r];if(!d.ra&&d.J&&"change"==b){d.J=!1;if(d.sa||c.Xa())d.I=null,d.V=
0,c.ha()&&c.Gb();else{var e=[];a.a.P(d.I,function(a,b){e[b.Ka]=a});a.a.D(e,function(a,b){var e=d.I[a],m=c.$c(e.da);m.Ka=b;m.La=e.La;d.I[a]=m});c.Xa()&&c.ha()&&c.Gb()}d.ra||c.notifySubscribers(d.X,"awake")}},hb:function(b){var c=this[r];c.ra||"change"!=b||this.Wa("change")||(a.a.P(c.I,function(a,b){b.s&&(c.I[a]={da:b.da,Ka:b.Ka,La:b.La},b.s())}),c.J=!0,this.notifySubscribers(n,"asleep"))},ob:function(){var b=this[r];b.J&&(b.sa||this.Xa())&&this.ha();return a.T.fn.ob.call(this)}},ea={Qa:function(a){"change"!=
a&&"beforeChange"!=a||this.v()}};a.a.Ba&&a.a.setPrototypeOf(C,a.T.fn);var N=a.ta.Ma;C[N]=a.o;a.Oc=function(a){return"function"==typeof a&&a[N]===C[N]};a.Fd=function(b){return a.Oc(b)&&b[r]&&b[r].wb};a.b("computed",a.o);a.b("dependentObservable",a.o);a.b("isComputed",a.Oc);a.b("isPureComputed",a.Fd);a.b("computed.fn",C);a.L(C,"peek",C.v);a.L(C,"dispose",C.s);a.L(C,"isActive",C.ja);a.L(C,"getDependenciesCount",C.qa);a.L(C,"getDependencies",C.Va);a.xb=function(b,c){if("function"===typeof b)return a.o(b,
c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.o(b,c)};a.b("pureComputed",a.xb);(function(){function b(a,f,g){g=g||new d;a=f(a);if("object"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};g.save(a,h);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=d;break;case "object":case "undefined":var l=g.get(d);h[c]=l!==
n?l:b(d,f,g)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=[];this.values=[]}a.ad=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.O(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.ad(b);return a.a.hc(b,c,d)};d.prototype={constructor:d,save:function(b,c){var d=a.a.A(this.keys,
b);0<=d?this.values[d]=c:(this.keys.push(b),this.values.push(c))},get:function(b){b=a.a.A(this.keys,b);return 0<=b?this.values[b]:n}}})();a.b("toJS",a.ad);a.b("toJSON",a.toJSON);a.Wd=function(b,c,d){function e(c){var e=a.xb(b,d).extend({ma:"always"}),h=e.subscribe(function(a){a&&(h.s(),c(a))});e.notifySubscribers(e.v());return h}return"function"!==typeof Promise||c?e(c.bind(d)):new Promise(e)};a.b("when",a.Wd);(function(){a.w={M:function(b){switch(a.a.R(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?
a.a.g.get(b,a.c.options.$b):7>=a.a.W?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex]):n;default:return b.value}},cb:function(b,c,d){switch(a.a.R(b)){case "option":"string"===typeof c?(a.a.g.set(b,a.c.options.$b,n),"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__,b.value=c):(a.a.g.set(b,a.c.options.$b,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===
typeof c?c:"");break;case "select":if(""===c||null===c)c=n;for(var e=-1,f=0,g=b.options.length,h;f<g;++f)if(h=a.w.M(b.options[f]),h==c||""===h&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=e,6===a.a.W&&a.a.setTimeout(function(){b.selectedIndex=e},0);break;default:if(null===c||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.w);a.b("selectExtensions.readValue",a.w.M);a.b("selectExtensions.writeValue",a.w.cb);a.m=function(){function b(b){b=a.a.Db(b);123===b.charCodeAt(0)&&(b=b.slice(1,
-1));b+="\n,";var c=[],d=b.match(e),p,q=[],h=0;if(1<d.length){for(var x=0,B;B=d[x];++x){var u=B.charCodeAt(0);if(44===u){if(0>=h){c.push(p&&q.length?{key:p,value:q.join("")}:{unknown:p||q.join("")});p=h=0;q=[];continue}}else if(58===u){if(!h&&!p&&1===q.length){p=q.pop();continue}}else if(47===u&&1<B.length&&(47===B.charCodeAt(1)||42===B.charCodeAt(1)))continue;else 47===u&&x&&1<B.length?(u=d[x-1].match(f))&&!g[u[0]]&&(b=b.substr(b.indexOf(B)+1),d=b.match(e),x=-1,B="/"):40===u||123===u||91===u?++h:
41===u||125===u||93===u?--h:p||q.length||34!==u&&39!==u||(B=B.slice(1,-1));q.push(B)}if(0<h)throw Error("Unbalanced parentheses, braces, or brackets");}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,g={"in":1,"return":1,"typeof":1},
h={};return{Ra:[],wa:h,ac:b,vb:function(e,f){function l(b,e){var f;if(!x){var k=a.getBindingHandler(b);if(k&&k.preprocess&&!(e=k.preprocess(e,b,l)))return;if(k=h[b])f=e,0<=a.a.A(c,f)?f=!1:(k=f.match(d),f=null===k?!1:k[1]?"Object("+k[1]+")"+k[2]:f),k=f;k&&q.push("'"+("string"==typeof h[b]?h[b]:b)+"':function(_z){"+f+"=_z}")}g&&(e="function(){return "+e+" }");p.push("'"+b+"':"+e)}f=f||{};var p=[],q=[],g=f.valueAccessors,x=f.bindingParams,B="string"===typeof e?b(e):e;a.a.D(B,function(a){l(a.key||a.unknown,
a.value)});q.length&&l("_ko_property_writers","{"+q.join(",")+" }");return p.join(",")},Id:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},eb:function(b,c,d,e,f){if(b&&a.O(b))!a.Za(b)||f&&b.v()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.m);a.b("expressionRewriting.bindingRewriteValidators",a.m.Ra);a.b("expressionRewriting.parseObjectLiteral",a.m.ac);a.b("expressionRewriting.preProcessBindings",a.m.vb);a.b("expressionRewriting._twoWayBindings",
a.m.wa);a.b("jsonExpressionRewriting",a.m);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.m.vb);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function d(d,e){for(var f=d,h=1,g=[];f=f.nextSibling;){if(c(f)&&(a.a.g.set(f,k,!0),h--,0===h))return g;g.push(f);b(f)&&h++}if(!e)throw Error("Cannot find closing comment tag to match: "+d.nodeValue);return null}function e(a,b){var c=d(a,b);return c?
0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,g=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,m={ul:!0,ol:!0},k="__ko_matchedEndComment__";a.h={ea:{},childNodes:function(a){return b(a)?d(a):a.childNodes},Ea:function(c){if(b(c)){c=a.h.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.Tb(c)},va:function(c,d){if(b(c)){a.h.Ea(c);for(var e=
c.nextSibling,f=0,k=d.length;f<k;f++)e.parentNode.insertBefore(d[f],e)}else a.a.va(c,d)},Vc:function(a,c){var d;b(a)?(d=a.nextSibling,a=a.parentNode):d=a.firstChild;d?c!==d&&a.insertBefore(c,d):a.appendChild(c)},Wb:function(c,d,e){e?(e=e.nextSibling,b(c)&&(c=c.parentNode),e?d!==e&&c.insertBefore(d,e):c.appendChild(d)):a.h.Vc(c,d)},firstChild:function(a){if(b(a))return!a.nextSibling||c(a.nextSibling)?null:a.nextSibling;if(a.firstChild&&c(a.firstChild))throw Error("Found invalid end comment, as the first child of "+
a);return a.firstChild},nextSibling:function(d){b(d)&&(d=e(d));if(d.nextSibling&&c(d.nextSibling)){var f=d.nextSibling;if(c(f)&&!a.a.g.get(f,k))throw Error("Found end comment without a matching opening comment, as child of "+d);return null}return d.nextSibling},Cd:b,Vd:function(a){return(a=(f?a.text:a.nodeValue).match(g))?a[1]:null},Sc:function(d){if(m[a.a.R(d)]){var f=d.firstChild;if(f){do if(1===f.nodeType){var k;k=f.firstChild;var h=null;if(k){do if(h)h.push(k);else if(b(k)){var g=e(k,!0);g?k=
g:h=[k]}else c(k)&&(h=[k]);while(k=k.nextSibling)}if(k=h)for(h=f.nextSibling,g=0;g<k.length;g++)h?d.insertBefore(k[g],h):d.appendChild(k[g])}while(f=f.nextSibling)}}}}})();a.b("virtualElements",a.h);a.b("virtualElements.allowedBindings",a.h.ea);a.b("virtualElements.emptyNode",a.h.Ea);a.b("virtualElements.insertAfter",a.h.Wb);a.b("virtualElements.prepend",a.h.Vc);a.b("virtualElements.setDomNodeChildren",a.h.va);(function(){a.ga=function(){this.nd={}};a.a.extend(a.ga.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=
b.getAttribute("data-bind")||a.j.getComponentNameForNode(b);case 8:return a.h.Cd(b);default:return!1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.j.tc(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.j.tc(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.h.Vd(b);default:return null}},
parseBindingsString:function(b,c,d,e){try{var f=this.nd,g=b+(e&&e.valueAccessors||""),h;if(!(h=f[g])){var m,k="with($context){with($data||{}){return{"+a.m.vb(b,e)+"}}}";m=new Function("$context","$element",k);h=f[g]=m}return h(c,d)}catch(l){throw l.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+l.message,l;}}});a.ga.instance=new a.ga})();a.b("bindingProvider",a.ga);(function(){function b(b){var c=(b=a.a.g.get(b,z))&&b.N;c&&(b.N=null,c.Tc())}function c(c,d,e){this.node=c;this.yc=
d;this.kb=[];this.H=!1;d.N||a.a.K.za(c,b);e&&e.N&&(e.N.kb.push(c),this.Kb=e)}function d(a){return function(){return a}}function e(a){return a()}function f(b){return a.a.Ga(a.u.G(b),function(a,c){return function(){return b()[c]}})}function g(b,c,e){return"function"===typeof b?f(b.bind(null,c,e)):a.a.Ga(b,d)}function h(a,b){return f(this.getBindings.bind(this,a,b))}function m(b,c){var d=a.h.firstChild(c);if(d){var e,f=a.ga.instance,l=f.preprocessNode;if(l){for(;e=d;)d=a.h.nextSibling(e),l.call(f,e);
d=a.h.firstChild(c)}for(;e=d;)d=a.h.nextSibling(e),k(b,e)}a.i.ma(c,a.i.H)}function k(b,c){var d=b,e=1===c.nodeType;e&&a.h.Sc(c);if(e||a.ga.instance.nodeHasBindings(c))d=p(c,null,b).bindingContextForDescendants;d&&!u[a.a.R(c)]&&m(d,c)}function l(b){var c=[],d={},e=[];a.a.P(b,function ca(f){if(!d[f]){var k=a.getBindingHandler(f);k&&(k.after&&(e.push(f),a.a.D(k.after,function(c){if(b[c]){if(-1!==a.a.A(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));
ca(c)}}),e.length--),c.push({key:f,Mc:k}));d[f]=!0}});return c}function p(b,c,d){var f=a.a.g.Ub(b,z,{}),k=f.hd;if(!c){if(k)throw Error("You cannot apply bindings multiple times to the same element.");f.hd=!0}k||(f.context=d);f.Zb||(f.Zb={});var g;if(c&&"function"!==typeof c)g=c;else{var p=a.ga.instance,q=p.getBindingAccessors||h,m=a.$(function(){if(g=c?c(d,b):q.call(p,b,d)){if(d[t])d[t]();if(d[B])d[B]()}return g},null,{l:b});g&&m.ja()||(m=null)}var x=d,u;if(g){var J=function(){return a.a.Ga(m?m():
g,e)},r=m?function(a){return function(){return e(m()[a])}}:function(a){return g[a]};J.get=function(a){return g[a]&&e(r(a))};J.has=function(a){return a in g};a.i.H in g&&a.i.subscribe(b,a.i.H,function(){var c=(0,g[a.i.H])();if(c){var d=a.h.childNodes(b);d.length&&c(d,a.Ec(d[0]))}});a.i.pa in g&&(x=a.i.Cb(b,d),a.i.subscribe(b,a.i.pa,function(){var c=(0,g[a.i.pa])();c&&a.h.firstChild(b)&&c(b)}));f=l(g);a.a.D(f,function(c){var d=c.Mc.init,e=c.Mc.update,f=c.key;if(8===b.nodeType&&!a.h.ea[f])throw Error("The binding '"+
f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.u.G(function(){var a=d(b,r(f),J,x.$data,x);if(a&&a.controlsDescendantBindings){if(u!==n)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f}}),"function"==typeof e&&a.$(function(){e(b,r(f),J,x.$data,x)},null,{l:b})}catch(k){throw k.message='Unable to process binding "'+f+": "+g[f]+'"\nMessage: '+k.message,
k;}})}f=u===n;return{shouldBindDescendants:f,bindingContextForDescendants:f&&x}}function q(b,c){return b&&b instanceof a.fa?b:new a.fa(b,n,n,c)}var t=a.a.Da("_subscribable"),x=a.a.Da("_ancestorBindingInfo"),B=a.a.Da("_dataDependency");a.c={};var u={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.c[b]};var J={};a.fa=function(b,c,d,e,f){function k(){var b=p?h():h,f=a.a.f(b);c?(a.a.extend(l,c),x in c&&(l[x]=c[x])):(l.$parents=[],l.$root=f,l.ko=a);l[t]=q;g?f=l.$data:(l.$rawData=
b,l.$data=f);d&&(l[d]=f);e&&e(l,c,f);if(c&&c[t]&&!a.S.o().Vb(c[t]))c[t]();m&&(l[B]=m);return l.$data}var l=this,g=b===J,h=g?n:b,p="function"==typeof h&&!a.O(h),q,m=f&&f.dataDependency;f&&f.exportDependencies?k():(q=a.xb(k),q.v(),q.ja()?q.equalityComparer=null:l[t]=n)};a.fa.prototype.createChildContext=function(b,c,d,e){!e&&c&&"object"==typeof c&&(e=c,c=e.as,d=e.extend);if(c&&e&&e.noChildContext){var f="function"==typeof b&&!a.O(b);return new a.fa(J,this,null,function(a){d&&d(a);a[c]=f?b():b},e)}return new a.fa(b,
this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)},e)};a.fa.prototype.extend=function(b,c){return new a.fa(J,this,null,function(c){a.a.extend(c,"function"==typeof b?b(c):b)},c)};var z=a.a.g.Z();c.prototype.Tc=function(){this.Kb&&this.Kb.N&&this.Kb.N.sd(this.node)};c.prototype.sd=function(b){a.a.Pa(this.kb,b);!this.kb.length&&this.H&&this.Cc()};c.prototype.Cc=function(){this.H=!0;this.yc.N&&!this.kb.length&&(this.yc.N=
null,a.a.K.yb(this.node,b),a.i.ma(this.node,a.i.pa),this.Tc())};a.i={H:"childrenComplete",pa:"descendantsComplete",subscribe:function(b,c,d,e,f){var k=a.a.g.Ub(b,z,{});k.Fa||(k.Fa=new a.T);f&&f.notifyImmediately&&k.Zb[c]&&a.u.G(d,e,[b]);return k.Fa.subscribe(d,e,c)},ma:function(b,c){var d=a.a.g.get(b,z);if(d&&(d.Zb[c]=!0,d.Fa&&d.Fa.notifySubscribers(b,c),c==a.i.H))if(d.N)d.N.Cc();else if(d.N===n&&d.Fa&&d.Fa.Wa(a.i.pa))throw Error("descendantsComplete event not supported for bindings on this node");
},Cb:function(b,d){var e=a.a.g.Ub(b,z,{});e.N||(e.N=new c(b,e,d[x]));return d[x]==e?d:d.extend(function(a){a[x]=e})}};a.Td=function(b){return(b=a.a.g.get(b,z))&&b.context};a.ib=function(b,c,d){1===b.nodeType&&a.h.Sc(b);return p(b,c,q(d))};a.ld=function(b,c,d){d=q(d);return a.ib(b,g(c,d,b),d)};a.Oa=function(a,b){1!==b.nodeType&&8!==b.nodeType||m(q(a),b)};a.vc=function(a,b,c){!v&&A.jQuery&&(v=A.jQuery);if(2>arguments.length){if(b=w.body,!b)throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
}else if(!b||1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");k(q(a,c),b)};a.Dc=function(b){return!b||1!==b.nodeType&&8!==b.nodeType?n:a.Td(b)};a.Ec=function(b){return(b=a.Dc(b))?b.$data:n};a.b("bindingHandlers",a.c);a.b("bindingEvent",a.i);a.b("bindingEvent.subscribe",a.i.subscribe);a.b("bindingEvent.startPossiblyAsyncContentBinding",a.i.Cb);a.b("applyBindings",a.vc);a.b("applyBindingsToDescendants",a.Oa);
a.b("applyBindingAccessorsToNode",a.ib);a.b("applyBindingsToNode",a.ld);a.b("contextFor",a.Dc);a.b("dataFor",a.Ec)})();(function(b){function c(c,e){var k=Object.prototype.hasOwnProperty.call(f,c)?f[c]:b,l;k?k.subscribe(e):(k=f[c]=new a.T,k.subscribe(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,Gd:e};delete f[c];l||e?k.notifySubscribers(b):a.na.zb(function(){k.notifySubscribers(b)})}),l=!0)}function d(a,b){e("getConfig",[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,
c)}):b(null,null)})}function e(c,d,f,l){l||(l=a.j.loaders.slice(0));var g=l.shift();if(g){var q=g[c];if(q){var t=!1;if(q.apply(g,d.concat(function(a){t?f(null):null!==a?f(a):e(c,d,f,l)}))!==b&&(t=!0,!g.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,f,l)}else f(null)}var f={},g={};a.j={get:function(d,e){var f=Object.prototype.hasOwnProperty.call(g,d)?g[d]:b;f?f.Gd?a.u.G(function(){e(f.definition)}):
a.na.zb(function(){e(f.definition)}):c(d,e)},Bc:function(a){delete g[a]},oc:e};a.j.loaders=[];a.b("components",a.j);a.b("components.get",a.j.get);a.b("components.clearCachedDefinition",a.j.Bc)})();(function(){function b(b,c,d,e){function g(){0===--B&&e(h)}var h={},B=2,u=d.template;d=d.viewModel;u?f(c,u,function(c){a.j.oc("loadTemplate",[b,c],function(a){h.template=a;g()})}):g();d?f(c,d,function(c){a.j.oc("loadViewModel",[b,c],function(a){h[m]=a;g()})}):g()}function c(a,b,d){if("function"===typeof b)d(function(a){return new b(a)});
else if("function"===typeof b[m])d(b[m]);else if("instance"in b){var e=b.instance;d(function(){return e})}else"viewModel"in b?c(a,b.viewModel,d):a("Unknown viewModel value: "+b)}function d(b){switch(a.a.R(b)){case "script":return a.a.ua(b.text);case "textarea":return a.a.ua(b.value);case "template":if(e(b.content))return a.a.Ca(b.content.childNodes)}return a.a.Ca(b.childNodes)}function e(a){return A.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?
T||A.require?(T||A.require)([b.require],function(a){a&&"object"===typeof a&&a.Xd&&a["default"]&&(a=a["default"]);c(a)}):a("Uses require, but no AMD loader is present"):c(b)}function g(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.j.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.j.tb(b))throw Error("Component "+b+" is already registered");h[b]=c};a.j.tb=function(a){return Object.prototype.hasOwnProperty.call(h,a)};a.j.unregister=function(b){delete h[b];
a.j.Bc(b)};a.j.Fc={getConfig:function(b,c){c(a.j.tb(b)?h[b]:null)},loadComponent:function(a,c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,c,f){b=g(b);if("string"===typeof c)f(a.a.ua(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.la(c.childNodes));else if(c.element)if(c=c.element,A.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if("string"===typeof c){var h=w.getElementById(c);h?f(d(h)):b("Cannot find element with ID "+c)}else b("Unknown element type: "+
c);else b("Unknown template value: "+c)},loadViewModel:function(a,b,d){c(g(a),b,d)}};var m="createViewModel";a.b("components.register",a.j.register);a.b("components.isRegistered",a.j.tb);a.b("components.unregister",a.j.unregister);a.b("components.defaultLoader",a.j.Fc);a.j.loaders.push(a.j.Fc);a.j.dd=h})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ga(f,function(c){return a.o(c,null,{l:b})}),g=a.a.Ga(f,
function(c){var e=c.v();return c.ja()?a.o({read:function(){return a.a.f(c())},write:a.Za(e)&&function(a){c()(a)},l:b}):e});Object.prototype.hasOwnProperty.call(g,"$raw")||(g.$raw=f);return g}return{$raw:{}}}a.j.getComponentNameForNode=function(b){var c=a.a.R(b);if(a.j.tb(c)&&(-1!=c.indexOf("-")||"[object HTMLUnknownElement]"==""+b||8>=a.a.W&&b.tagName===c))return c};a.j.tc=function(c,e,f,g){if(1===e.nodeType){var h=a.j.getComponentNameForNode(e);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');
var m={name:h,params:b(e,f)};c.component=g?function(){return m}:m}}return c};var c=new a.ga;9>a.a.W&&(a.j.register=function(a){return function(b){return a.apply(this,arguments)}}(a.j.register),w.createDocumentFragment=function(b){return function(){var c=b(),f=a.j.dd,g;for(g in f);return c}}(w.createDocumentFragment))})();(function(){function b(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.Ca(c);a.h.va(d,b)}function c(a,b,c){var d=a.createViewModel;return d?d.call(a,
b,c):b}var d=0;a.c.component={init:function(e,f,g,h,m){function k(){var a=l&&l.dispose;"function"===typeof a&&a.call(l);q&&q.s();p=l=q=null}var l,p,q,t=a.a.la(a.h.childNodes(e));a.h.Ea(e);a.a.K.za(e,k);a.o(function(){var g=a.a.f(f()),h,u;"string"===typeof g?h=g:(h=a.a.f(g.name),u=a.a.f(g.params));if(!h)throw Error("No component name specified");var n=a.i.Cb(e,m),z=p=++d;a.j.get(h,function(d){if(p===z){k();if(!d)throw Error("Unknown component '"+h+"'");b(h,d,e);var f=c(d,u,{element:e,templateNodes:t});
d=n.createChildContext(f,{extend:function(a){a.$component=f;a.$componentTemplateNodes=t}});f&&f.koDescendantsComplete&&(q=a.i.subscribe(e,a.i.pa,f.koDescendantsComplete,f));l=f;a.Oa(d,e)}})},null,{l:e});return{controlsDescendantBindings:!0}}};a.h.ea.component=!0})();var V={"class":"className","for":"htmlFor"};a.c.attr={update:function(b,c){var d=a.a.f(c())||{};a.a.P(d,function(c,d){d=a.a.f(d);var g=c.indexOf(":"),g="lookupNamespaceURI"in b&&0<g&&b.lookupNamespaceURI(c.substr(0,g)),h=!1===d||null===
d||d===n;h?g?b.removeAttributeNS(g,c):b.removeAttribute(c):d=d.toString();8>=a.a.W&&c in V?(c=V[c],h?b.removeAttribute(c):b[c]=d):h||(g?b.setAttributeNS(g,c,d):b.setAttribute(c,d));"name"===c&&a.a.Yc(b,h?"":d)})}};(function(){a.c.checked={after:["value","attr"],init:function(b,c,d){function e(){var e=b.checked,f=g();if(!a.S.Ya()&&(e||!m&&!a.S.qa())){var k=a.u.G(c);if(l){var q=p?k.v():k,z=t;t=f;z!==f?e&&(a.a.Na(q,f,!0),a.a.Na(q,z,!1)):a.a.Na(q,f,e);p&&a.Za(k)&&k(q)}else h&&(f===n?f=e:e||(f=n)),a.m.eb(k,
d,"checked",f,!0)}}function f(){var d=a.a.f(c()),e=g();l?(b.checked=0<=a.a.A(d,e),t=e):b.checked=h&&e===n?!!d:g()===d}var g=a.xb(function(){if(d.has("checkedValue"))return a.a.f(d.get("checkedValue"));if(q)return d.has("value")?a.a.f(d.get("value")):b.value}),h="checkbox"==b.type,m="radio"==b.type;if(h||m){var k=c(),l=h&&a.a.f(k)instanceof Array,p=!(l&&k.push&&k.splice),q=m||l,t=l?g():n;m&&!b.name&&a.c.uniqueName.init(b,function(){return!0});a.o(e,null,{l:b});a.a.B(b,"click",e);a.o(f,null,{l:b});
k=n}}};a.m.wa.checked=!0;a.c.checkedValue={update:function(b,c){b.value=a.a.f(c())}}})();a.c["class"]={update:function(b,c){var d=a.a.Db(a.a.f(c()));a.a.Eb(b,b.__ko__cssValue,!1);b.__ko__cssValue=d;a.a.Eb(b,d,!0)}};a.c.css={update:function(b,c){var d=a.a.f(c());null!==d&&"object"==typeof d?a.a.P(d,function(c,d){d=a.a.f(d);a.a.Eb(b,c,d)}):a.c["class"].update(b,c)}};a.c.enable={update:function(b,c){var d=a.a.f(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.c.disable=
{update:function(b,c){a.c.enable.update(b,function(){return!a.a.f(c())})}};a.c.event={init:function(b,c,d,e,f){var g=c()||{};a.a.P(g,function(g){"string"==typeof g&&a.a.B(b,g,function(b){var k,l=c()[g];if(l){try{var p=a.a.la(arguments);e=f.$data;p.unshift(e);k=l.apply(e,p)}finally{!0!==k&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.c.foreach={Rc:function(b){return function(){var c=b(),d=a.a.bc(c);
if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.ba.Ma};a.a.f(c);return{foreach:d.data,as:d.as,noChildContext:d.noChildContext,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.ba.Ma}}},init:function(b,c){return a.c.template.init(b,a.c.foreach.Rc(c))},update:function(b,c,d,e,f){return a.c.template.update(b,a.c.foreach.Rc(c),d,e,f)}};a.m.Ra.foreach=!1;a.h.ea.foreach=
!0;a.c.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(l){g=f.body}e=g===b}f=c();a.m.eb(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.B(b,"focus",f);a.a.B(b,"focusin",f);a.a.B(b,"blur",g);a.a.B(b,"focusout",g);b.__ko_hasfocusLastValue=!1},update:function(b,c){var d=!!a.a.f(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===
d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.u.G(a.a.Fb,null,[b,d?"focusin":"focusout"]))}};a.m.wa.hasfocus=!0;a.c.hasFocus=a.c.hasfocus;a.m.wa.hasFocus="hasfocus";a.c.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.fc(b,c())}};(function(){function b(b,d,e){a.c[b]={init:function(b,c,h,m,k){var l,p,q={},t,x,n;if(d){m=h.get("as");var u=h.get("noChildContext");n=!(m&&u);q={as:m,noChildContext:u,exportDependencies:n}}x=(t=
"render"==h.get("completeOn"))||h.has(a.i.pa);a.o(function(){var h=a.a.f(c()),m=!e!==!h,u=!p,r;if(n||m!==l){x&&(k=a.i.Cb(b,k));if(m){if(!d||n)q.dataDependency=a.S.o();r=d?k.createChildContext("function"==typeof h?h:c,q):a.S.qa()?k.extend(null,q):k}u&&a.S.qa()&&(p=a.a.Ca(a.h.childNodes(b),!0));m?(u||a.h.va(b,a.a.Ca(p)),a.Oa(r,b)):(a.h.Ea(b),t||a.i.ma(b,a.i.H));l=m}},null,{l:b});return{controlsDescendantBindings:!0}}};a.m.Ra[b]=!1;a.h.ea[b]=!0}b("if");b("ifnot",!1,!0);b("with",!0)})();a.c.let={init:function(b,
c,d,e,f){c=f.extend(c);a.Oa(c,b);return{controlsDescendantBindings:!0}}};a.h.ea.let=!0;var Q={};a.c.options={init:function(b){if("select"!==a.a.R(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.jb(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function g(c,d){if(x&&l)a.i.ma(b,a.i.H);else if(t.length){var e=
0<=a.a.A(t,a.w.M(d[0]));a.a.Zc(d[0],e);x&&!e&&a.u.G(a.a.Fb,null,[b,"change"])}}var h=b.multiple,m=0!=b.length&&h?b.scrollTop:null,k=a.a.f(c()),l=d.get("valueAllowUnset")&&d.has("value"),p=d.get("optionsIncludeDestroyed");c={};var q,t=[];l||(h?t=a.a.Mb(e(),a.w.M):0<=b.selectedIndex&&t.push(a.w.M(b.options[b.selectedIndex])));k&&("undefined"==typeof k.length&&(k=[k]),q=a.a.jb(k,function(b){return p||b===n||null===b||!a.a.f(b._destroy)}),d.has("optionsCaption")&&(k=a.a.f(d.get("optionsCaption")),null!==
k&&k!==n&&q.unshift(Q)));var x=!1;c.beforeRemove=function(a){b.removeChild(a)};k=g;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(k=function(b,c){g(0,c);a.u.G(d.get("optionsAfterRender"),null,[c[0],b!==Q?b:n])});a.a.ec(b,q,function(c,e,g){g.length&&(t=!l&&g[0].selected?[a.w.M(g[0])]:[],x=!0);e=b.ownerDocument.createElement("option");c===Q?(a.a.Bb(e,d.get("optionsCaption")),a.w.cb(e,n)):(g=f(c,d.get("optionsValue"),c),a.w.cb(e,a.a.f(g)),c=f(c,d.get("optionsText"),g),
a.a.Bb(e,c));return[e]},c,k);if(!l){var B;h?B=t.length&&e().length<t.length:B=t.length&&0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex])!==t[0]:t.length||0<=b.selectedIndex;B&&a.u.G(a.a.Fb,null,[b,"change"])}(l||a.S.Ya())&&a.i.ma(b,a.i.H);a.a.wd(b);m&&20<Math.abs(m-b.scrollTop)&&(b.scrollTop=m)}};a.c.options.$b=a.a.g.Z();a.c.selectedOptions={init:function(b,c,d){function e(){var e=c(),f=[];a.a.D(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.w.M(b))});a.m.eb(e,d,"selectedOptions",
f)}function f(){var d=a.a.f(c()),e=b.scrollTop;d&&"number"==typeof d.length&&a.a.D(b.getElementsByTagName("option"),function(b){var c=0<=a.a.A(d,a.w.M(b));b.selected!=c&&a.a.Zc(b,c)});b.scrollTop=e}if("select"!=a.a.R(b))throw Error("selectedOptions binding applies only to SELECT elements");var g;a.i.subscribe(b,a.i.H,function(){g?e():(a.a.B(b,"change",e),g=a.o(f,null,{l:b}))},null,{notifyImmediately:!0})},update:function(){}};a.m.wa.selectedOptions=!0;a.c.style={update:function(b,c){var d=a.a.f(c()||
{});a.a.P(d,function(c,d){d=a.a.f(d);if(null===d||d===n||!1===d)d="";if(v)v(b).css(c,d);else if(/^--/.test(c))b.style.setProperty(c,d);else{c=c.replace(/-(\w)/g,function(a,b){return b.toUpperCase()});var g=b.style[c];b.style[c]=d;d===g||b.style[c]!=g||isNaN(d)||(b.style[c]=d+"px")}})}};a.c.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");a.a.B(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,b)}finally{!0!==d&&(a.preventDefault?
a.preventDefault():a.returnValue=!1)}})}};a.c.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Bb(b,c())}};a.h.ea.text=!0;(function(){if(A&&A.navigator){var b=function(a){if(a)return parseFloat(a[1])},c=A.navigator.userAgent,d,e,f,g,h;(d=A.opera&&A.opera.version&&parseInt(A.opera.version()))||(h=b(c.match(/Edge\/([^ ]+)$/)))||b(c.match(/Chrome\/([^ ]+)/))||(e=b(c.match(/Version\/([^ ]+) Safari/)))||(f=b(c.match(/Firefox\/([^ ]+)/)))||(g=a.a.W||b(c.match(/MSIE ([^ ]+)/)))||
(g=b(c.match(/rv:([^ )]+)/)))}if(8<=g&&10>g)var m=a.a.g.Z(),k=a.a.g.Z(),l=function(b){var c=this.activeElement;(c=c&&a.a.g.get(c,k))&&c(b)},p=function(b,c){var d=b.ownerDocument;a.a.g.get(d,m)||(a.a.g.set(d,m,!0),a.a.B(d,"selectionchange",l));a.a.g.set(b,k,c)};a.c.textInput={init:function(b,c,k){function l(c,d){a.a.B(b,c,d)}function m(){var d=a.a.f(c());if(null===d||d===n)d="";L!==n&&d===L?a.a.setTimeout(m,4):b.value!==d&&(y=!0,b.value=d,y=!1,v=b.value)}function r(){w||(L=b.value,w=a.a.setTimeout(z,
4))}function z(){clearTimeout(w);L=w=n;var d=b.value;v!==d&&(v=d,a.m.eb(c(),k,"textInput",d))}var v=b.value,w,L,A=9==a.a.W?r:z,y=!1;g&&l("keypress",z);11>g&&l("propertychange",function(a){y||"value"!==a.propertyName||A(a)});8==g&&(l("keyup",z),l("keydown",z));p&&(p(b,A),l("dragend",r));(!g||9<=g)&&l("input",A);5>e&&"textarea"===a.a.R(b)?(l("keydown",r),l("paste",r),l("cut",r)):11>d?l("keydown",r):4>f?(l("DOMAutoComplete",z),l("dragdrop",z),l("drop",z)):h&&"number"===b.type&&l("keydown",r);l("change",
z);l("blur",z);a.o(m,null,{l:b})}};a.m.wa.textInput=!0;a.c.textinput={preprocess:function(a,b,c){c("textInput",a)}}})();a.c.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.c.uniqueName.rd;a.a.Yc(b,d)}}};a.c.uniqueName.rd=0;a.c.using={init:function(b,c,d,e,f){var g;d.has("as")&&(g={as:d.get("as"),noChildContext:d.get("noChildContext")});c=f.createChildContext(c,g);a.Oa(c,b);return{controlsDescendantBindings:!0}}};a.h.ea.using=!0;a.c.value={init:function(b,c,d){var e=a.a.R(b),f="input"==
e;if(!f||"checkbox"!=b.type&&"radio"!=b.type){var g=[],h=d.get("valueUpdate"),m=!1,k=null;h&&("string"==typeof h?g=[h]:g=a.a.wc(h),a.a.Pa(g,"change"));var l=function(){k=null;m=!1;var e=c(),f=a.w.M(b);a.m.eb(e,d,"value",f)};!a.a.W||!f||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.A(g,"propertychange")||(a.a.B(b,"propertychange",function(){m=!0}),a.a.B(b,"focus",function(){m=!1}),a.a.B(b,"blur",function(){m&&l()}));a.a.D(g,function(c){var d=l;a.a.Ud(c,"after")&&
(d=function(){k=a.w.M(b);a.a.setTimeout(l,0)},c=c.substring(5));a.a.B(b,c,d)});var p;p=f&&"file"==b.type?function(){var d=a.a.f(c());null===d||d===n||""===d?b.value="":a.u.G(l)}:function(){var f=a.a.f(c()),g=a.w.M(b);if(null!==k&&f===k)a.a.setTimeout(p,0);else if(f!==g||g===n)"select"===e?(g=d.get("valueAllowUnset"),a.w.cb(b,f,g),g||f===a.w.M(b)||a.u.G(l)):a.w.cb(b,f)};if("select"===e){var q;a.i.subscribe(b,a.i.H,function(){q?d.get("valueAllowUnset")?p():l():(a.a.B(b,"change",l),q=a.o(p,null,{l:b}))},
null,{notifyImmediately:!0})}else a.a.B(b,"change",l),a.o(p,null,{l:b})}else a.ib(b,{checkedValue:c})},update:function(){}};a.m.wa.value=!0;a.c.visible={update:function(b,c){var d=a.a.f(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};a.c.hidden={update:function(b,c){a.c.visible.update(b,function(){return!a.a.f(c())})}};(function(b){a.c[b]={init:function(c,d,e,f,g){return a.c.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}}})("click");
a.ca=function(){};a.ca.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.ca.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.ca.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.C.F(d)}if(1==b.nodeType||8==b.nodeType)return new a.C.ia(b);throw Error("Unknown template type: "+b);};a.ca.prototype.renderTemplate=
function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,d,e)};a.ca.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.ca.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.ca);a.kc=function(){function b(b,c,d,h){b=a.m.ac(b);for(var m=a.m.Ra,k=0;k<b.length;k++){var l=b[k].key;if(Object.prototype.hasOwnProperty.call(m,
l)){var p=m[l];if("function"===typeof p){if(l=p(b[k].value))throw Error(l);}else if(!p)throw Error("This template engine does not support the '"+l+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.m.vb(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{xd:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.kc.Ld(b,c)},d)},Ld:function(a,f){return a.replace(c,function(a,c,d,e,l){return b(l,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},md:function(b,c){return a.aa.Xb(function(d,h){var m=d.nextSibling;m&&m.nodeName.toLowerCase()===c&&a.ib(m,b,h)})}}}();a.b("__tr_ambtns",a.kc.md);(function(){a.C={};a.C.F=function(b){if(this.F=b){var c=
a.a.R(b);this.ab="script"===c?1:"textarea"===c?2:"template"==c&&b.content&&11===b.content.nodeType?3:4}};a.C.F.prototype.text=function(){var b=1===this.ab?"text":2===this.ab?"value":"innerHTML";if(0==arguments.length)return this.F[b];var c=arguments[0];"innerHTML"===b?a.a.fc(this.F,c):this.F[b]=c};var b=a.a.g.Z()+"_";a.C.F.prototype.data=function(c){if(1===arguments.length)return a.a.g.get(this.F,b+c);a.a.g.set(this.F,b+c,arguments[1])};var c=a.a.g.Z();a.C.F.prototype.nodes=function(){var b=this.F;
if(0==arguments.length){var e=a.a.g.get(b,c)||{},f=e.lb||(3===this.ab?b.content:4===this.ab?b:n);if(!f||e.jd){var g=this.text();g&&g!==e.bb&&(f=a.a.Md(g,b.ownerDocument),a.a.g.set(b,c,{lb:f,bb:g,jd:!0}))}return f}e=arguments[0];this.ab!==n&&this.text("");a.a.g.set(b,c,{lb:e})};a.C.ia=function(a){this.F=a};a.C.ia.prototype=new a.C.F;a.C.ia.prototype.constructor=a.C.ia;a.C.ia.prototype.text=function(){if(0==arguments.length){var b=a.a.g.get(this.F,c)||{};b.bb===n&&b.lb&&(b.bb=b.lb.innerHTML);return b.bb}a.a.g.set(this.F,
c,{bb:arguments[0]})};a.b("templateSources",a.C);a.b("templateSources.domElement",a.C.F);a.b("templateSources.anonymousTemplate",a.C.ia)})();(function(){function b(b,c,d){var e;for(c=a.h.nextSibling(c);b&&(e=b)!==c;)b=a.h.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,h=a.ga.instance,m=h.preprocessNode;if(m){b(e,f,function(a,b){var c=a.previousSibling,d=m.call(h,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):
(c.push(e,f),a.a.Ua(c,g))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.vc(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.aa.cd(b,[d])});a.a.Ua(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,m){m=m||{};var n=(b&&d(b)||f||{}).ownerDocument,B=m.templateEngine||g;a.kc.xd(f,B,n);f=B.renderTemplate(f,h,m,n);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.h.va(b,
f);n=!0;break;case "replaceNode":a.a.Xc(b,f);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}n&&(c(f,h),m.afterRender&&a.u.G(m.afterRender,null,[f,h[m.as||"$data"]]),"replaceChildren"==e&&a.i.ma(b,a.i.H));return f}function f(b,c,d){return a.O(b)?b():"function"===typeof b?b(c,d):b}var g;a.gc=function(b){if(b!=n&&!(b instanceof a.ca))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.dc=function(b,c,h,m,t){h=h||{};if((h.templateEngine||g)==
n)throw Error("Set a template engine before calling renderTemplate");t=t||"replaceChildren";if(m){var x=d(m);return a.$(function(){var g=c&&c instanceof a.fa?c:new a.fa(c,null,null,null,{exportDependencies:!0}),n=f(b,g.$data,g),g=e(m,t,n,g,h);"replaceNode"==t&&(m=g,x=d(m))},null,{Sa:function(){return!x||!a.a.Sb(x)},l:x&&"replaceNode"==t?x.parentNode:x})}return a.aa.Xb(function(d){a.dc(b,c,h,d,"replaceNode")})};a.Qd=function(b,d,g,h,m){function x(b,c){a.u.G(a.a.ec,null,[h,b,u,g,r,c]);a.i.ma(h,a.i.H)}
function r(a,b){c(b,v);g.afterRender&&g.afterRender(b,a);v=null}function u(a,c){v=m.createChildContext(a,{as:z,noChildContext:g.noChildContext,extend:function(a){a.$index=c;z&&(a[z+"Index"]=c)}});var d=f(b,a,v);return e(h,"ignoreTargetNode",d,v,g)}var v,z=g.as,w=!1===g.includeDestroyed||a.options.foreachHidesDestroyed&&!g.includeDestroyed;if(w||g.beforeRemove||!a.Pc(d))return a.$(function(){var b=a.a.f(d)||[];"undefined"==typeof b.length&&(b=[b]);w&&(b=a.a.jb(b,function(b){return b===n||null===b||
!a.a.f(b._destroy)}));x(b)},null,{l:h});x(d.v());var A=d.subscribe(function(a){x(d(),a)},null,"arrayChange");A.l(h);return A};var h=a.a.g.Z(),m=a.a.g.Z();a.c.template={init:function(b,c){var d=a.a.f(c());if("string"==typeof d||"name"in d)a.h.Ea(b);else if("nodes"in d){d=d.nodes||[];if(a.O(d))throw Error('The "nodes" option must be a plain, non-observable array.');var e=d[0]&&d[0].parentNode;e&&a.a.g.get(e,m)||(e=a.a.Yb(d),a.a.g.set(e,m,!0));(new a.C.ia(b)).nodes(e)}else if(d=a.h.childNodes(b),0<d.length)e=
a.a.Yb(d),(new a.C.ia(b)).nodes(e);else throw Error("Anonymous template defined, but no template content was provided");return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c();c=a.a.f(g);d=!0;e=null;"string"==typeof c?c={}:(g="name"in c?c.name:b,"if"in c&&(d=a.a.f(c["if"])),d&&"ifnot"in c&&(d=!a.a.f(c.ifnot)),d&&!g&&(d=!1));"foreach"in c?e=a.Qd(g,d&&c.foreach||[],c,b,f):d?(d=f,"data"in c&&(d=f.createChildContext(c.data,{as:c.as,noChildContext:c.noChildContext,exportDependencies:!0})),
e=a.dc(g,d,c,b)):a.h.Ea(b);f=e;(c=a.a.g.get(b,h))&&"function"==typeof c.s&&c.s();a.a.g.set(b,h,!f||f.ja&&!f.ja()?n:f)}};a.m.Ra.template=function(b){b=a.m.ac(b);return 1==b.length&&b[0].unknown||a.m.Id(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.h.ea.template=!0})();a.b("setTemplateEngine",a.gc);a.b("renderTemplate",a.dc);a.a.Kc=function(a,c,d){if(a.length&&c.length){var e,f,g,h,m;for(e=f=0;(!d||e<d)&&(h=a[f]);++f){for(g=0;m=c[g];++g)if(h.value===
m.value){h.moved=m.index;m.moved=h.index;c.splice(g,1);e=g=0;break}e+=g}}};a.a.Pb=function(){function b(b,d,e,f,g){var h=Math.min,m=Math.max,k=[],l,p=b.length,q,n=d.length,r=n-p||1,v=p+n+1,u,w,z;for(l=0;l<=p;l++)for(w=u,k.push(u=[]),z=h(n,l+r),q=m(0,l-1);q<=z;q++)u[q]=q?l?b[l-1]===d[q-1]?w[q-1]:h(w[q]||v,u[q-1]||v)+1:q+1:l+1;h=[];m=[];r=[];l=p;for(q=n;l||q;)n=k[l][q]-1,q&&n===k[l][q-1]?m.push(h[h.length]={status:e,value:d[--q],index:q}):l&&n===k[l-1][q]?r.push(h[h.length]={status:f,value:b[--l],index:l}):
(--q,--l,g.sparse||h.push({status:"retained",value:d[q]}));a.a.Kc(r,m,!g.dontLimitMoves&&10*p);return h.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Pb);(function(){function b(b,c,d,h,m){var k=[],l=a.$(function(){var l=c(d,m,a.a.Ua(k,b))||[];0<k.length&&(a.a.Xc(k,l),h&&a.u.G(h,null,[d,l,m]));k.length=0;a.a.Nb(k,l)},null,{l:b,Sa:function(){return!a.a.kd(k)}});
return{Y:k,$:l.ja()?l:n}}var c=a.a.g.Z(),d=a.a.g.Z();a.a.ec=function(e,f,g,h,m,k){function l(b){y={Aa:b,pb:a.ta(w++)};v.push(y);r||F.push(y)}function p(b){y=t[b];w!==y.pb.v()&&D.push(y);y.pb(w++);a.a.Ua(y.Y,e);v.push(y)}function q(b,c){if(b)for(var d=0,e=c.length;d<e;d++)a.a.D(c[d].Y,function(a){b(a,d,c[d].Aa)})}f=f||[];"undefined"==typeof f.length&&(f=[f]);h=h||{};var t=a.a.g.get(e,c),r=!t,v=[],u=0,w=0,z=[],A=[],C=[],D=[],F=[],y,I=0;if(r)a.a.D(f,l);else{if(!k||t&&t._countWaitingForRemove){var E=
a.a.Mb(t,function(a){return a.Aa});k=a.a.Pb(E,f,{dontLimitMoves:h.dontLimitMoves,sparse:!0})}for(var E=0,G,H,K;G=k[E];E++)switch(H=G.moved,K=G.index,G.status){case "deleted":for(;u<K;)p(u++);H===n&&(y=t[u],y.$&&(y.$.s(),y.$=n),a.a.Ua(y.Y,e).length&&(h.beforeRemove&&(v.push(y),I++,y.Aa===d?y=null:C.push(y)),y&&z.push.apply(z,y.Y)));u++;break;case "added":for(;w<K;)p(u++);H!==n?(A.push(v.length),p(H)):l(G.value)}for(;w<f.length;)p(u++);v._countWaitingForRemove=I}a.a.g.set(e,c,v);q(h.beforeMove,D);a.a.D(z,
h.beforeRemove?a.oa:a.removeNode);var M,O,P;try{P=e.ownerDocument.activeElement}catch(N){}if(A.length)for(;(E=A.shift())!=n;){y=v[E];for(M=n;E;)if((O=v[--E].Y)&&O.length){M=O[O.length-1];break}for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M)}for(E=0;y=v[E];E++){y.Y||a.a.extend(y,b(e,g,y.Aa,m,y.pb));for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M);!y.Ed&&m&&(m(y.Aa,y.Y,y.pb),y.Ed=!0,M=y.Y[y.Y.length-1])}P&&e.ownerDocument.activeElement!=P&&P.focus();q(h.beforeRemove,C);for(E=0;E<C.length;++E)C[E].Aa=d;q(h.afterMove,D);
q(h.afterAdd,F)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.ec);a.ba=function(){this.allowTemplateRewriting=!1};a.ba.prototype=new a.ca;a.ba.prototype.constructor=a.ba;a.ba.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.W?0:b.nodes)?b.nodes():null)return a.a.la(c.cloneNode(!0).childNodes);b=b.text();return a.a.ua(b,e)};a.ba.Ma=new a.ba;a.gc(a.ba.Ma);a.b("nativeTemplateEngine",a.ba);(function(){a.$a=function(){var a=this.Hd=function(){if(!v||!v.tmpl)return 0;try{if(0<=v.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();
this.renderTemplateSource=function(b,e,f,g){g=g||w;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=v.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=v.extend({koBindingContext:e},f.templateOptions);e=v.tmpl(h,b,e);e.appendTo(g.createElement("div"));v.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+
a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(v.tmpl.tag.ko_code={open:"__.push($1 || '');"},v.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.$a.prototype=new a.ca;a.$a.prototype.constructor=a.$a;var b=new a.$a;0<b.Hd&&a.gc(b);a.b("jqueryTmplTemplateEngine",a.$a)})()})})();})();


/***/ }),

/***/ "./node_modules/rxjs/_esm5/index.js":
/*!******************************************!*\
  !*** ./node_modules/rxjs/_esm5/index.js ***!
  \******************************************/
/*! exports provided: Observable, ConnectableObservable, GroupedObservable, observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, asap, asapScheduler, async, asyncScheduler, queue, queueScheduler, animationFrame, animationFrameScheduler, VirtualTimeScheduler, VirtualAction, Scheduler, Subscription, Subscriber, Notification, NotificationKind, pipe, noop, identity, isObservable, ArgumentOutOfRangeError, EmptyError, ObjectUnsubscribedError, UnsubscriptionError, TimeoutError, bindCallback, bindNodeCallback, combineLatest, concat, defer, empty, forkJoin, from, fromEvent, fromEventPattern, generate, iif, interval, merge, never, of, onErrorResumeNext, pairs, partition, race, range, throwError, timer, using, zip, scheduled, EMPTY, NEVER, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _internal_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony import */ var _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/observable/ConnectableObservable */ "./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__["ConnectableObservable"]; });

/* harmony import */ var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/operators/groupBy */ "./node_modules/rxjs/_esm5/internal/operators/groupBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__["GroupedObservable"]; });

/* harmony import */ var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__["observable"]; });

/* harmony import */ var _internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return _internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]; });

/* harmony import */ var _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/BehaviorSubject */ "./node_modules/rxjs/_esm5/internal/BehaviorSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]; });

/* harmony import */ var _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal/ReplaySubject */ "./node_modules/rxjs/_esm5/internal/ReplaySubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"]; });

/* harmony import */ var _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./internal/AsyncSubject */ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__["AsyncSubject"]; });

/* harmony import */ var _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./internal/scheduler/asap */ "./node_modules/rxjs/_esm5/internal/scheduler/asap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asapScheduler", function() { return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asapScheduler"]; });

/* harmony import */ var _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./internal/scheduler/async */ "./node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "async", function() { return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["async"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncScheduler", function() { return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["asyncScheduler"]; });

/* harmony import */ var _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./internal/scheduler/queue */ "./node_modules/rxjs/_esm5/internal/scheduler/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queueScheduler", function() { return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queueScheduler"]; });

/* harmony import */ var _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./internal/scheduler/animationFrame */ "./node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function() { return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrameScheduler"]; });

/* harmony import */ var _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./internal/scheduler/VirtualTimeScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualTimeScheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualAction"]; });

/* harmony import */ var _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./internal/Scheduler */ "./node_modules/rxjs/_esm5/internal/Scheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__["Scheduler"]; });

/* harmony import */ var _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./internal/Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__["Subscription"]; });

/* harmony import */ var _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./internal/Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__["Subscriber"]; });

/* harmony import */ var _internal_Notification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./internal/Notification */ "./node_modules/rxjs/_esm5/internal/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationKind", function() { return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["NotificationKind"]; });

/* harmony import */ var _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./internal/util/pipe */ "./node_modules/rxjs/_esm5/internal/util/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__["pipe"]; });

/* harmony import */ var _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./internal/util/noop */ "./node_modules/rxjs/_esm5/internal/util/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__["noop"]; });

/* harmony import */ var _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./internal/util/identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__["identity"]; });

/* harmony import */ var _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./internal/util/isObservable */ "./node_modules/rxjs/_esm5/internal/util/isObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__["isObservable"]; });

/* harmony import */ var _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./internal/util/ArgumentOutOfRangeError */ "./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__["ArgumentOutOfRangeError"]; });

/* harmony import */ var _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./internal/util/EmptyError */ "./node_modules/rxjs/_esm5/internal/util/EmptyError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__["EmptyError"]; });

/* harmony import */ var _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./internal/util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__["ObjectUnsubscribedError"]; });

/* harmony import */ var _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./internal/util/UnsubscriptionError */ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__["UnsubscriptionError"]; });

/* harmony import */ var _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./internal/util/TimeoutError */ "./node_modules/rxjs/_esm5/internal/util/TimeoutError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__["TimeoutError"]; });

/* harmony import */ var _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./internal/observable/bindCallback */ "./node_modules/rxjs/_esm5/internal/observable/bindCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__["bindCallback"]; });

/* harmony import */ var _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./internal/observable/bindNodeCallback */ "./node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__["bindNodeCallback"]; });

/* harmony import */ var _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./internal/observable/combineLatest */ "./node_modules/rxjs/_esm5/internal/observable/combineLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__["combineLatest"]; });

/* harmony import */ var _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./internal/observable/concat */ "./node_modules/rxjs/_esm5/internal/observable/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__["concat"]; });

/* harmony import */ var _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./internal/observable/defer */ "./node_modules/rxjs/_esm5/internal/observable/defer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__["defer"]; });

/* harmony import */ var _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["empty"]; });

/* harmony import */ var _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./internal/observable/forkJoin */ "./node_modules/rxjs/_esm5/internal/observable/forkJoin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__["forkJoin"]; });

/* harmony import */ var _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./internal/observable/from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__["from"]; });

/* harmony import */ var _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./internal/observable/fromEvent */ "./node_modules/rxjs/_esm5/internal/observable/fromEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__["fromEvent"]; });

/* harmony import */ var _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./internal/observable/fromEventPattern */ "./node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__["fromEventPattern"]; });

/* harmony import */ var _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./internal/observable/generate */ "./node_modules/rxjs/_esm5/internal/observable/generate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__["generate"]; });

/* harmony import */ var _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./internal/observable/iif */ "./node_modules/rxjs/_esm5/internal/observable/iif.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__["iif"]; });

/* harmony import */ var _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./internal/observable/interval */ "./node_modules/rxjs/_esm5/internal/observable/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__["interval"]; });

/* harmony import */ var _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./internal/observable/merge */ "./node_modules/rxjs/_esm5/internal/observable/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__["merge"]; });

/* harmony import */ var _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/_esm5/internal/observable/never.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "never", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["never"]; });

/* harmony import */ var _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./internal/observable/of */ "./node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__["of"]; });

/* harmony import */ var _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./internal/observable/onErrorResumeNext */ "./node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__["onErrorResumeNext"]; });

/* harmony import */ var _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./internal/observable/pairs */ "./node_modules/rxjs/_esm5/internal/observable/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__["pairs"]; });

/* harmony import */ var _internal_observable_partition__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./internal/observable/partition */ "./node_modules/rxjs/_esm5/internal/observable/partition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _internal_observable_partition__WEBPACK_IMPORTED_MODULE_44__["partition"]; });

/* harmony import */ var _internal_observable_race__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./internal/observable/race */ "./node_modules/rxjs/_esm5/internal/observable/race.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_observable_race__WEBPACK_IMPORTED_MODULE_45__["race"]; });

/* harmony import */ var _internal_observable_range__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./internal/observable/range */ "./node_modules/rxjs/_esm5/internal/observable/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _internal_observable_range__WEBPACK_IMPORTED_MODULE_46__["range"]; });

/* harmony import */ var _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./internal/observable/throwError */ "./node_modules/rxjs/_esm5/internal/observable/throwError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_47__["throwError"]; });

/* harmony import */ var _internal_observable_timer__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./internal/observable/timer */ "./node_modules/rxjs/_esm5/internal/observable/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _internal_observable_timer__WEBPACK_IMPORTED_MODULE_48__["timer"]; });

/* harmony import */ var _internal_observable_using__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./internal/observable/using */ "./node_modules/rxjs/_esm5/internal/observable/using.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "using", function() { return _internal_observable_using__WEBPACK_IMPORTED_MODULE_49__["using"]; });

/* harmony import */ var _internal_observable_zip__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./internal/observable/zip */ "./node_modules/rxjs/_esm5/internal/observable/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _internal_observable_zip__WEBPACK_IMPORTED_MODULE_50__["zip"]; });

/* harmony import */ var _internal_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./internal/scheduled/scheduled */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scheduled", function() { return _internal_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_51__["scheduled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["NEVER"]; });

/* harmony import */ var _internal_config__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./internal/config */ "./node_modules/rxjs/_esm5/internal/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _internal_config__WEBPACK_IMPORTED_MODULE_52__["config"]; });

/** PURE_IMPORTS_START  PURE_IMPORTS_END */























































//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/AsyncSubject.js ***!
  \**********************************************************/
/*! exports provided: AsyncSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return AsyncSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */



var AsyncSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

//# sourceMappingURL=AsyncSubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/BehaviorSubject.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/BehaviorSubject.js ***!
  \*************************************************************/
/*! exports provided: BehaviorSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return BehaviorSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */



var BehaviorSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_2__["ObjectUnsubscribedError"]();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

//# sourceMappingURL=BehaviorSubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/InnerSubscriber.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/InnerSubscriber.js ***!
  \*************************************************************/
/*! exports provided: InnerSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function() { return InnerSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var InnerSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

//# sourceMappingURL=InnerSubscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Notification.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Notification.js ***!
  \**********************************************************/
/*! exports provided: NotificationKind, Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationKind", function() { return NotificationKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/of */ "./node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/throwError */ "./node_modules/rxjs/_esm5/internal/observable/throwError.js");
/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */



var NotificationKind;
/*@__PURE__*/ (function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = /*@__PURE__*/ (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return Object(_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(this.value);
            case 'E':
                return Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.error);
            case 'C':
                return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_0__["empty"])();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());

//# sourceMappingURL=Notification.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Observable.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Observable.js ***!
  \********************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/_esm5/internal/util/toSubscriber.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/_esm5/internal/util/pipe.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */





var Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = Object(_util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__["toSubscriber"])(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_0__["canReportError"])(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipeFromArray"])(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = _config__WEBPACK_IMPORTED_MODULE_4__["config"].Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Observer.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Observer.js ***!
  \******************************************************/
/*! exports provided: empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__["config"].useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__["hostReportError"])(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/OuterSubscriber.js ***!
  \*************************************************************/
/*! exports provided: OuterSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function() { return OuterSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var OuterSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

//# sourceMappingURL=OuterSubscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/ReplaySubject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/ReplaySubject.js ***!
  \***********************************************************/
/*! exports provided: ReplaySubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return ReplaySubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _scheduler_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduler/queue */ "./node_modules/rxjs/_esm5/internal/scheduler/queue.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators/observeOn */ "./node_modules/rxjs/_esm5/internal/operators/observeOn.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/_esm5/internal/SubjectSubscription.js");
/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */







var ReplaySubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) {
            bufferSize = Number.POSITIVE_INFINITY;
        }
        if (windowTime === void 0) {
            windowTime = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        }
        else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        if (!this.isStopped) {
            var _events = this._events;
            _events.push(value);
            if (_events.length > this._bufferSize) {
                _events.shift();
            }
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        if (!this.isStopped) {
            this._events.push(new ReplayEvent(this._getNow(), value));
            this._trimBufferThenGetEvents();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_5__["ObjectUnsubscribedError"]();
        }
        else if (this.isStopped || this.hasError) {
            subscription = _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_6__["SubjectSubscription"](this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__["ObserveOnSubscriber"](subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_2__["queue"]).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

var ReplayEvent = /*@__PURE__*/ (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Scheduler.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Scheduler.js ***!
  \*******************************************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
var Scheduler = /*@__PURE__*/ (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subject.js ***!
  \*****************************************************/
/*! exports provided: SubjectSubscriber, Subject, AnonymousSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscriber", function() { return SubjectSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function() { return AnonymousSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/_esm5/internal/SubjectSubscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */







var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]));

var Subject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_6__["rxSubscriber"]] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__["SubjectSubscription"](this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]));

var AnonymousSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/SubjectSubscription.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/SubjectSubscription.js ***!
  \*****************************************************************/
/*! exports provided: SubjectSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return SubjectSubscription; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var SubjectSubscription = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]));

//# sourceMappingURL=SubjectSubscription.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subscriber.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subscriber.js ***!
  \********************************************************/
/*! exports provided: Subscriber, SafeSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return Subscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeSubscriber", function() { return SafeSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/_esm5/internal/Observer.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */







var Subscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"];
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"];
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__["rxSubscriber"]] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(_Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"]));

var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]) {
                context = Object.create(observerOrNext);
                if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = _config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

//# sourceMappingURL=Subscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subscription.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subscription.js ***!
  \**********************************************************/
/*! exports provided: Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js");
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */




var Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_1__["isObject"])(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"](errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());

function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/config.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/config.js ***!
  \****************************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/innerSubscribe.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/innerSubscribe.js ***!
  \************************************************************/
/*! exports provided: SimpleInnerSubscriber, ComplexInnerSubscriber, SimpleOuterSubscriber, ComplexOuterSubscriber, innerSubscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleInnerSubscriber", function() { return SimpleInnerSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexInnerSubscriber", function() { return ComplexInnerSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleOuterSubscriber", function() { return SimpleOuterSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexOuterSubscriber", function() { return ComplexOuterSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerSubscribe", function() { return innerSubscribe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/subscribeTo */ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_util_subscribeTo PURE_IMPORTS_END */




var SimpleInnerSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SimpleInnerSubscriber, _super);
    function SimpleInnerSubscriber(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
    }
    SimpleInnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(value);
    };
    SimpleInnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    SimpleInnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete();
        this.unsubscribe();
    };
    return SimpleInnerSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

var ComplexInnerSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ComplexInnerSubscriber, _super);
    function ComplexInnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        return _this;
    }
    ComplexInnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
    };
    ComplexInnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    ComplexInnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return ComplexInnerSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

var SimpleOuterSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SimpleOuterSubscriber, _super);
    function SimpleOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleOuterSubscriber.prototype.notifyNext = function (innerValue) {
        this.destination.next(innerValue);
    };
    SimpleOuterSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SimpleOuterSubscriber.prototype.notifyComplete = function () {
        this.destination.complete();
    };
    return SimpleOuterSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

var ComplexOuterSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ComplexOuterSubscriber, _super);
    function ComplexOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComplexOuterSubscriber.prototype.notifyNext = function (_outerValue, innerValue, _outerIndex, _innerSub) {
        this.destination.next(innerValue);
    };
    ComplexOuterSubscriber.prototype.notifyError = function (error) {
        this.destination.error(error);
    };
    ComplexOuterSubscriber.prototype.notifyComplete = function (_innerSub) {
        this.destination.complete();
    };
    return ComplexOuterSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

function innerSubscribe(result, innerSubscriber) {
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
        return result.subscribe(innerSubscriber);
    }
    return Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_3__["subscribeTo"])(result)(innerSubscriber);
}
//# sourceMappingURL=innerSubscribe.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js ***!
  \******************************************************************************/
/*! exports provided: ConnectableObservable, connectableObservableDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return ConnectableObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectableObservableDescriptor", function() { return connectableObservableDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _operators_refCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operators/refCount */ "./node_modules/rxjs/_esm5/internal/operators/refCount.js");
/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */






var ConnectableObservable = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new _Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = _Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return Object(_operators_refCount__WEBPACK_IMPORTED_MODULE_5__["refCount"])()(this);
    };
    return ConnectableObservable;
}(_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]));

var connectableObservableDescriptor = /*@__PURE__*/ (function () {
    var connectableProto = ConnectableObservable.prototype;
    return {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: connectableProto._subscribe },
        _isComplete: { value: connectableProto._isComplete, writable: true },
        getSubject: { value: connectableProto.getSubject },
        connect: { value: connectableProto.connect },
        refCount: { value: connectableProto.refCount }
    };
})();
var ConnectableSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["SubjectSubscriber"]));
var RefCountOperator = /*@__PURE__*/ (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_3__["Subscriber"]));
//# sourceMappingURL=ConnectableObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/bindCallback.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/bindCallback.js ***!
  \*********************************************************************/
/*! exports provided: bindCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return bindCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */






function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_5__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_4__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                var state = {
                    args: args, subscriber: subscriber, params: params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err, subject = state.subject;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js ***!
  \*************************************************************************/
/*! exports provided: bindNodeCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return bindNodeCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */






function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_5__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(dispatch, 0, { params: params, subscriber: subscriber, context: context });
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var err = innerArgs.shift();
            if (err) {
                _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/combineLatest.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/combineLatest.js ***!
  \**********************************************************************/
/*! exports provided: combineLatest, CombineLatestOperator, CombineLatestSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return combineLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function() { return CombineLatestOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestSubscriber", function() { return CombineLatestSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */






var NONE = {};
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = undefined;
    var scheduler = undefined;
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(observables[0])) {
        observables = observables[0];
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_5__["fromArray"])(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
var CombineLatestOperator = /*@__PURE__*/ (function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}());

var CombineLatestSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, observable, undefined, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (_outerValue, innerValue, outerIndex) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__["OuterSubscriber"]));

//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/concat.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/concat.js ***!
  \***************************************************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony import */ var _of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./of */ "./node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony import */ var _operators_concatAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/concatAll */ "./node_modules/rxjs/_esm5/internal/operators/concatAll.js");
/** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */


function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return Object(_operators_concatAll__WEBPACK_IMPORTED_MODULE_1__["concatAll"])()(_of__WEBPACK_IMPORTED_MODULE_0__["of"].apply(void 0, observables));
}
//# sourceMappingURL=concat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/defer.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/defer.js ***!
  \**************************************************************/
/*! exports provided: defer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */



function defer(observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(input) : Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        return source.subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/empty.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/empty.js ***!
  \**************************************************************/
/*! exports provided: EMPTY, empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

var EMPTY = /*@__PURE__*/ new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/forkJoin.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/forkJoin.js ***!
  \*****************************************************************/
/*! exports provided: forkJoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return forkJoin; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isObject */ "./node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_operators_map,_util_isObject,_from PURE_IMPORTS_END */





function forkJoin() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 1) {
        var first_1 = sources[0];
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(first_1)) {
            return forkJoinInternal(first_1, null);
        }
        if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(first_1) && Object.getPrototypeOf(first_1) === Object.prototype) {
            var keys = Object.keys(first_1);
            return forkJoinInternal(keys.map(function (key) { return first_1[key]; }), keys);
        }
    }
    if (typeof sources[sources.length - 1] === 'function') {
        var resultSelector_1 = sources.pop();
        sources = (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(sources[0])) ? sources[0] : sources;
        return forkJoinInternal(sources, null).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) { return resultSelector_1.apply(void 0, args); }));
    }
    return forkJoinInternal(sources, null);
}
function forkJoinInternal(sources, keys) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var len = sources.length;
        if (len === 0) {
            subscriber.complete();
            return;
        }
        var values = new Array(len);
        var completed = 0;
        var emitted = 0;
        var _loop_1 = function (i) {
            var source = Object(_from__WEBPACK_IMPORTED_MODULE_4__["from"])(sources[i]);
            var hasValue = false;
            subscriber.add(source.subscribe({
                next: function (value) {
                    if (!hasValue) {
                        hasValue = true;
                        emitted++;
                    }
                    values[i] = value;
                },
                error: function (err) { return subscriber.error(err); },
                complete: function () {
                    completed++;
                    if (completed === len || !hasValue) {
                        if (emitted === len) {
                            subscriber.next(keys ?
                                keys.reduce(function (result, key, i) { return (result[key] = values[i], result); }, {}) :
                                values);
                        }
                        subscriber.complete();
                    }
                }
            }));
        };
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
    });
}
//# sourceMappingURL=forkJoin.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/from.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/from.js ***!
  \*************************************************************/
/*! exports provided: from */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduled */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js");
/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */



function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
            return input;
        }
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(input));
    }
    else {
        return Object(_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__["scheduled"])(input, scheduler);
    }
}
//# sourceMappingURL=from.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromArray.js ***!
  \******************************************************************/
/*! exports provided: fromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return fromArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToArray */ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js");
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js");
/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */



function fromArray(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__["subscribeToArray"])(input));
    }
    else {
        return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
    }
}
//# sourceMappingURL=fromArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromEvent.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromEvent.js ***!
  \******************************************************************/
/*! exports provided: fromEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return fromEvent; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




var toString = /*@__PURE__*/ (function () { return Object.prototype.toString; })();
function fromEvent(target, eventName, options, resultSelector) {
    if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js ***!
  \*************************************************************************/
/*! exports provided: fromEventPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return fromEventPattern; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(removeHandler)) {
            return undefined;
        }
        return function () { return removeHandler(handler, retValue); };
    });
}
//# sourceMappingURL=fromEventPattern.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/generate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/generate.js ***!
  \*****************************************************************/
/*! exports provided: generate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */



function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__["isScheduler"])(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                subscriber: subscriber,
                iterate: iterate,
                condition: condition,
                resultSelector: resultSelector,
                state: state
            });
        }
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/iif.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/iif.js ***!
  \************************************************************/
/*! exports provided: iif */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return iif; });
/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defer */ "./node_modules/rxjs/_esm5/internal/observable/defer.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */


function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) {
        trueResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
    }
    if (falseResult === void 0) {
        falseResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
    }
    return Object(_defer__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () { return condition() ? trueResult : falseResult; });
}
//# sourceMappingURL=iif.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/interval.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/interval.js ***!
  \*****************************************************************/
/*! exports provided: interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return interval; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/_esm5/internal/util/isNumeric.js");
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */



function interval(period, scheduler) {
    if (period === void 0) {
        period = 0;
    }
    if (scheduler === void 0) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    if (!Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/merge.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/merge.js ***!
  \**************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/mergeAll */ "./node_modules/rxjs/_esm5/internal/operators/mergeAll.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */




function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
        return observables[0];
    }
    return Object(_operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])(concurrent)(Object(_fromArray__WEBPACK_IMPORTED_MODULE_3__["fromArray"])(observables, scheduler));
}
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/never.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/never.js ***!
  \**************************************************************/
/*! exports provided: NEVER, never */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return NEVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "never", function() { return never; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ "./node_modules/rxjs/_esm5/internal/util/noop.js");
/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */


var NEVER = /*@__PURE__*/ new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](_util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"]);
function never() {
    return NEVER;
}
//# sourceMappingURL=never.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/of.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/of.js ***!
  \***********************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "of", function() { return of; });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js");
/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */



function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(scheduler)) {
        args.pop();
        return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(args, scheduler);
    }
    else {
        return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args);
    }
}
//# sourceMappingURL=of.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js ***!
  \**************************************************************************/
/*! exports provided: onErrorResumeNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return onErrorResumeNext; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */




function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 0) {
        return _empty__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
    }
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(first)) {
        return onErrorResumeNext.apply(void 0, first);
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var subNext = function () { return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber)); };
        return Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(first).subscribe({
            next: function (value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/pairs.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/pairs.js ***!
  \**************************************************************/
/*! exports provided: pairs, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function pairs(obj, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            subscription.add(scheduler.schedule(dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
            return subscription;
        });
    }
}
function dispatch(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        }
        else {
            subscriber.complete();
        }
    }
}
//# sourceMappingURL=pairs.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/partition.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/partition.js ***!
  \******************************************************************/
/*! exports provided: partition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony import */ var _util_not__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/not */ "./node_modules/rxjs/_esm5/internal/util/not.js");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/* harmony import */ var _operators_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/filter */ "./node_modules/rxjs/_esm5/internal/operators/filter.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _util_not,_util_subscribeTo,_operators_filter,_Observable PURE_IMPORTS_END */




function partition(source, predicate, thisArg) {
    return [
        Object(_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(predicate, thisArg)(new _Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(source))),
        Object(_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(Object(_util_not__WEBPACK_IMPORTED_MODULE_0__["not"])(predicate, thisArg))(new _Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(source)))
    ];
}
//# sourceMappingURL=partition.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/race.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/race.js ***!
  \*************************************************************/
/*! exports provided: race, RaceOperator, RaceSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceOperator", function() { return RaceOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceSubscriber", function() { return RaceSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */





function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1) {
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_2__["fromArray"])(observables, undefined).lift(new RaceOperator());
}
var RaceOperator = /*@__PURE__*/ (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());

var RaceSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, observable, undefined, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (_outerValue, innerValue, outerIndex) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__["OuterSubscriber"]));

//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/range.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/range.js ***!
  \**************************************************************/
/*! exports provided: range, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function range(start, count, scheduler) {
    if (start === void 0) {
        start = 0;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        if (count === undefined) {
            count = start;
            start = 0;
        }
        var index = 0;
        var current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
function dispatch(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
//# sourceMappingURL=range.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/throwError.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/throwError.js ***!
  \*******************************************************************/
/*! exports provided: throwError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
    }
}
function dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/timer.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/timer.js ***!
  \**************************************************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/_esm5/internal/util/isNumeric.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */




function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) {
        dueTime = 0;
    }
    var period = -1;
    if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var due = Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/using.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/using.js ***!
  \**************************************************************/
/*! exports provided: using */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "using", function() { return using; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */



function using(resourceFactory, observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = result ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(result) : _empty__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        var subscription = source.subscribe(subscriber);
        return function () {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
//# sourceMappingURL=using.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/zip.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/zip.js ***!
  \************************************************************/
/*! exports provided: zip, ZipOperator, ZipSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipOperator", function() { return ZipOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipSubscriber", function() { return ZipSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal/symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../innerSubscribe */ "./node_modules/rxjs/_esm5/internal/innerSubscribe.js");
/** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_.._internal_symbol_iterator,_innerSubscribe PURE_IMPORTS_END */






function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(observables, undefined).lift(new ZipOperator(resultSelector));
}
var ZipOperator = /*@__PURE__*/ (function () {
    function ZipOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    };
    return ZipOperator;
}());

var ZipSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ZipSubscriber, _super);
    function ZipSubscriber(destination, resultSelector, values) {
        if (values === void 0) {
            values = Object.create(null);
        }
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : undefined;
        return _this;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_4__["iterator"]] === 'function') {
            iterators.push(new StaticIterator(value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_4__["iterator"]]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                var destination = this.destination;
                destination.add(iterator.subscribe());
            }
            else {
                this.active--;
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) {
            this._tryresultSelector(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryresultSelector = function (args) {
        var result;
        try {
            result = this.resultSelector.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_3__["Subscriber"]));

var StaticIterator = /*@__PURE__*/ (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return Boolean(nextResult && nextResult.done);
    };
    return StaticIterator;
}());
var StaticArrayIterator = /*@__PURE__*/ (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_4__["iterator"]] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
var ZipBufferIterator = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
    }
    ZipBufferIterator.prototype[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_4__["iterator"]] = function () {
        return this;
    };
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (innerValue) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function () {
        return Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_5__["innerSubscribe"])(this.observable, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_5__["SimpleInnerSubscriber"](this));
    };
    return ZipBufferIterator;
}(_innerSubscribe__WEBPACK_IMPORTED_MODULE_5__["SimpleOuterSubscriber"]));
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/concatAll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/concatAll.js ***!
  \*****************************************************************/
/*! exports provided: concatAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAll", function() { return concatAll; });
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeAll */ "./node_modules/rxjs/_esm5/internal/operators/mergeAll.js");
/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */

function concatAll() {
    return Object(_mergeAll__WEBPACK_IMPORTED_MODULE_0__["mergeAll"])(1);
}
//# sourceMappingURL=concatAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/filter.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/filter.js ***!
  \**************************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
var FilterOperator = /*@__PURE__*/ (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var FilterSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
//# sourceMappingURL=filter.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/groupBy.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/groupBy.js ***!
  \***************************************************************/
/*! exports provided: groupBy, GroupedObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return GroupedObservable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */





function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
var GroupByOperator = /*@__PURE__*/ (function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
var GroupBySubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new _Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]());
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
var GroupDurationSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
var GroupedObservable = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"]));

var InnerRefCountSubscription = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(_Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]));
//# sourceMappingURL=groupBy.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/map.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/map.js ***!
  \***********************************************************/
/*! exports provided: map, MapOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOperator", function() { return MapOperator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());

var MapSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
//# sourceMappingURL=map.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/mergeAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/mergeAll.js ***!
  \****************************************************************/
/*! exports provided: mergeAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return mergeAll; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ "./node_modules/rxjs/_esm5/internal/operators/mergeMap.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */


function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"], concurrent);
}
//# sourceMappingURL=mergeAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/mergeMap.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/mergeMap.js ***!
  \****************************************************************/
/*! exports provided: mergeMap, MergeMapOperator, MergeMapSubscriber, flatMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return mergeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapOperator", function() { return MergeMapOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapSubscriber", function() { return MergeMapSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return flatMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../innerSubscribe */ "./node_modules/rxjs/_esm5/internal/innerSubscribe.js");
/** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */




function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(mergeMap(function (a, i) { return Object(_observable_from__WEBPACK_IMPORTED_MODULE_2__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_1__["map"])(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
}
var MergeMapOperator = /*@__PURE__*/ (function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}());

var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish) {
        var innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_3__["SimpleInnerSubscriber"](this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_3__["innerSubscribe"])(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function (innerValue) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function () {
        var buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(_innerSubscribe__WEBPACK_IMPORTED_MODULE_3__["SimpleOuterSubscriber"]));

var flatMap = mergeMap;
//# sourceMappingURL=mergeMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/observeOn.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/observeOn.js ***!
  \*****************************************************************/
/*! exports provided: observeOn, ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeOn", function() { return observeOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnOperator", function() { return ObserveOnOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnSubscriber", function() { return ObserveOnSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnMessage", function() { return ObserveOnMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Notification */ "./node_modules/rxjs/_esm5/internal/Notification.js");
/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */



function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
var ObserveOnOperator = /*@__PURE__*/ (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());

var ObserveOnSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

var ObserveOnMessage = /*@__PURE__*/ (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());

//# sourceMappingURL=observeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/refCount.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/refCount.js ***!
  \****************************************************************/
/*! exports provided: refCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refCount", function() { return refCount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
var RefCountOperator = /*@__PURE__*/ (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
//# sourceMappingURL=refCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js ***!
  \*********************************************************************/
/*! exports provided: scheduleArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleArray", function() { return scheduleArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function scheduleArray(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js ***!
  \************************************************************************/
/*! exports provided: scheduleIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleIterable", function() { return scheduleIterable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */



function scheduleIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        var iterator;
        sub.add(function () {
            if (iterator && typeof iterator.return === 'function') {
                iterator.return();
            }
        });
        sub.add(scheduler.schedule(function () {
            iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__["iterator"]]();
            sub.add(scheduler.schedule(function () {
                if (subscriber.closed) {
                    return;
                }
                var value;
                var done;
                try {
                    var result = iterator.next();
                    value = result.value;
                    done = result.done;
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleIterable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js ***!
  \**************************************************************************/
/*! exports provided: scheduleObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleObservable", function() { return scheduleObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */



function scheduleObservable(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        sub.add(scheduler.schedule(function () {
            var observable = input[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]();
            sub.add(observable.subscribe({
                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js ***!
  \***********************************************************************/
/*! exports provided: schedulePromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedulePromise", function() { return schedulePromise; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function schedulePromise(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        sub.add(scheduler.schedule(function () {
            return input.then(function (value) {
                sub.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                }));
            }, function (err) {
                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
            });
        }));
        return sub;
    });
}
//# sourceMappingURL=schedulePromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js ***!
  \*****************************************************************/
/*! exports provided: scheduled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduled", function() { return scheduled; });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduleObservable */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js");
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedulePromise */ "./node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js");
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduleArray */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js");
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduleIterable */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js");
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js");
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/_esm5/internal/util/isPromise.js");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/_esm5/internal/util/isArrayLike.js");
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/_esm5/internal/util/isIterable.js");
/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */








function scheduled(input, scheduler) {
    if (input != null) {
        if (Object(_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__["isInteropObservable"])(input)) {
            return Object(_scheduleObservable__WEBPACK_IMPORTED_MODULE_0__["scheduleObservable"])(input, scheduler);
        }
        else if (Object(_util_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(input)) {
            return Object(_schedulePromise__WEBPACK_IMPORTED_MODULE_1__["schedulePromise"])(input, scheduler);
        }
        else if (Object(_util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__["isArrayLike"])(input)) {
            return Object(_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
        }
        else if (Object(_util_isIterable__WEBPACK_IMPORTED_MODULE_7__["isIterable"])(input) || typeof input === 'string') {
            return Object(_scheduleIterable__WEBPACK_IMPORTED_MODULE_3__["scheduleIterable"])(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
//# sourceMappingURL=scheduled.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/Action.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/Action.js ***!
  \**************************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var Action = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]));

//# sourceMappingURL=Action.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js ***!
  \****************************************************************************/
/*! exports provided: AnimationFrameAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameAction", function() { return AnimationFrameAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */


var AnimationFrameAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=AnimationFrameAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js ***!
  \*******************************************************************************/
/*! exports provided: AnimationFrameScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameScheduler", function() { return AnimationFrameScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var AnimationFrameScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=AnimationFrameScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js ***!
  \******************************************************************/
/*! exports provided: AsapAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapAction", function() { return AsapAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Immediate */ "./node_modules/rxjs/_esm5/internal/util/Immediate.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */



var AsapAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_1__["Immediate"].setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            _util_Immediate__WEBPACK_IMPORTED_MODULE_1__["Immediate"].clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_2__["AsyncAction"]));

//# sourceMappingURL=AsapAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js ***!
  \*********************************************************************/
/*! exports provided: AsapScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapScheduler", function() { return AsapScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var AsapScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=AsapScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js ***!
  \*******************************************************************/
/*! exports provided: AsyncAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncAction", function() { return AsyncAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/_esm5/internal/scheduler/Action.js");
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */


var AsyncAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(_Action__WEBPACK_IMPORTED_MODULE_1__["Action"]));

//# sourceMappingURL=AsyncAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js ***!
  \**********************************************************************/
/*! exports provided: AsyncScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncScheduler", function() { return AsyncScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/_esm5/internal/Scheduler.js");
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */


var AsyncScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = _Scheduler__WEBPACK_IMPORTED_MODULE_1__["Scheduler"].now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(_Scheduler__WEBPACK_IMPORTED_MODULE_1__["Scheduler"]));

//# sourceMappingURL=AsyncScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js ***!
  \*******************************************************************/
/*! exports provided: QueueAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueAction", function() { return QueueAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */


var QueueAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=QueueAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js ***!
  \**********************************************************************/
/*! exports provided: QueueScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueScheduler", function() { return QueueScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var QueueScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=QueueScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js ***!
  \****************************************************************************/
/*! exports provided: VirtualTimeScheduler, VirtualAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return VirtualTimeScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return VirtualAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */



var VirtualTimeScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) {
            SchedulerAction = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_2__["AsyncScheduler"]));

var VirtualAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=VirtualTimeScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js ***!
  \**********************************************************************/
/*! exports provided: animationFrameScheduler, animationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function() { return animationFrameScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return animationFrame; });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js");
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js");
/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */


var animationFrameScheduler = /*@__PURE__*/ new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__["AnimationFrameScheduler"](_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__["AnimationFrameAction"]);
var animationFrame = animationFrameScheduler;
//# sourceMappingURL=animationFrame.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/asap.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/asap.js ***!
  \************************************************************/
/*! exports provided: asapScheduler, asap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asapScheduler", function() { return asapScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return asap; });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js");
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js");
/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */


var asapScheduler = /*@__PURE__*/ new _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__["AsapScheduler"](_AsapAction__WEBPACK_IMPORTED_MODULE_0__["AsapAction"]);
var asap = asapScheduler;
//# sourceMappingURL=asap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/async.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/async.js ***!
  \*************************************************************/
/*! exports provided: asyncScheduler, async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncScheduler", function() { return asyncScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */


var asyncScheduler = /*@__PURE__*/ new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"](_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]);
var async = asyncScheduler;
//# sourceMappingURL=async.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/queue.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/queue.js ***!
  \*************************************************************/
/*! exports provided: queueScheduler, queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueScheduler", function() { return queueScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return queue; });
/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueueAction */ "./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js");
/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js");
/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */


var queueScheduler = /*@__PURE__*/ new _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__["QueueScheduler"](_QueueAction__WEBPACK_IMPORTED_MODULE_0__["QueueAction"]);
var queue = queueScheduler;
//# sourceMappingURL=queue.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/iterator.js ***!
  \*************************************************************/
/*! exports provided: getSymbolIterator, iterator, $$iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbolIterator", function() { return getSymbolIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$iterator", function() { return $$iterator; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = /*@__PURE__*/ getSymbolIterator();
var $$iterator = iterator;
//# sourceMappingURL=iterator.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/observable.js ***!
  \***************************************************************/
/*! exports provided: observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js ***!
  \*****************************************************************/
/*! exports provided: rxSubscriber, $$rxSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rxSubscriber", function() { return rxSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$rxSubscriber", function() { return $$rxSubscriber; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = /*@__PURE__*/ (function () {
    return typeof Symbol === 'function'
        ? /*@__PURE__*/ Symbol('rxSubscriber')
        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
})();
var $$rxSubscriber = rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js ***!
  \**************************************************************************/
/*! exports provided: ArgumentOutOfRangeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return ArgumentOutOfRangeError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ArgumentOutOfRangeErrorImpl = /*@__PURE__*/ (function () {
    function ArgumentOutOfRangeErrorImpl() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
    }
    ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ArgumentOutOfRangeErrorImpl;
})();
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/EmptyError.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/EmptyError.js ***!
  \*************************************************************/
/*! exports provided: EmptyError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return EmptyError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var EmptyErrorImpl = /*@__PURE__*/ (function () {
    function EmptyErrorImpl() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
    }
    EmptyErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return EmptyErrorImpl;
})();
var EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/Immediate.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/Immediate.js ***!
  \************************************************************/
/*! exports provided: Immediate, TestTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immediate", function() { return Immediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestTools", function() { return TestTools; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;
var RESOLVED = /*@__PURE__*/ (function () { return /*@__PURE__*/ Promise.resolve(); })();
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
var Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(function () { return findAndClearHandle(handle) && cb(); });
        return handle;
    },
    clearImmediate: function (handle) {
        findAndClearHandle(handle);
    },
};
var TestTools = {
    pending: function () {
        return Object.keys(activeHandles).length;
    }
};
//# sourceMappingURL=Immediate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js ***!
  \**************************************************************************/
/*! exports provided: ObjectUnsubscribedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return ObjectUnsubscribedError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/TimeoutError.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/TimeoutError.js ***!
  \***************************************************************/
/*! exports provided: TimeoutError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var TimeoutErrorImpl = /*@__PURE__*/ (function () {
    function TimeoutErrorImpl() {
        Error.call(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        return this;
    }
    TimeoutErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return TimeoutErrorImpl;
})();
var TimeoutError = TimeoutErrorImpl;
//# sourceMappingURL=TimeoutError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js ***!
  \**********************************************************************/
/*! exports provided: UnsubscriptionError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return UnsubscriptionError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
var UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/canReportError.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/canReportError.js ***!
  \*****************************************************************/
/*! exports provided: canReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canReportError", function() { return canReportError; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */

function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/hostReportError.js ***!
  \******************************************************************/
/*! exports provided: hostReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostReportError", function() { return hostReportError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
//# sourceMappingURL=hostReportError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/identity.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/identity.js ***!
  \***********************************************************/
/*! exports provided: identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isArray.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isArray.js ***!
  \**********************************************************/
/*! exports provided: isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isArrayLike.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isArrayLike.js ***!
  \**************************************************************/
/*! exports provided: isArrayLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isFunction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isFunction.js ***!
  \*************************************************************/
/*! exports provided: isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js ***!
  \**********************************************************************/
/*! exports provided: isInteropObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteropObservable", function() { return isInteropObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

function isInteropObservable(input) {
    return input && typeof input[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]] === 'function';
}
//# sourceMappingURL=isInteropObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isIterable.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isIterable.js ***!
  \*************************************************************/
/*! exports provided: isIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

function isIterable(input) {
    return input && typeof input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]] === 'function';
}
//# sourceMappingURL=isIterable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isNumeric.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isNumeric.js ***!
  \************************************************************/
/*! exports provided: isNumeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */

function isNumeric(val) {
    return !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isObject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isObject.js ***!
  \***********************************************************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isObservable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isObservable.js ***!
  \***************************************************************/
/*! exports provided: isObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function isObservable(obj) {
    return !!obj && (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
//# sourceMappingURL=isObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isPromise.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isPromise.js ***!
  \************************************************************/
/*! exports provided: isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isScheduler.js ***!
  \**************************************************************/
/*! exports provided: isScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScheduler", function() { return isScheduler; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
//# sourceMappingURL=isScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/noop.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/noop.js ***!
  \*******************************************************/
/*! exports provided: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() { }
//# sourceMappingURL=noop.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/not.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/not.js ***!
  \******************************************************/
/*! exports provided: not */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}
//# sourceMappingURL=not.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/pipe.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/pipe.js ***!
  \*******************************************************/
/*! exports provided: pipe, pipeFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipeFromArray", function() { return pipeFromArray; });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return _identity__WEBPACK_IMPORTED_MODULE_0__["identity"];
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeTo.js ***!
  \**************************************************************/
/*! exports provided: subscribeTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return subscribeTo; });
/* harmony import */ var _subscribeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js");
/* harmony import */ var _subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js");
/* harmony import */ var _subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js");
/* harmony import */ var _subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js");
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isArrayLike */ "./node_modules/rxjs/_esm5/internal/util/isArrayLike.js");
/* harmony import */ var _isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isPromise */ "./node_modules/rxjs/_esm5/internal/util/isPromise.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isObject */ "./node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */









var subscribeTo = function (result) {
    if (!!result && typeof result[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__["observable"]] === 'function') {
        return Object(_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__["subscribeToObservable"])(result);
    }
    else if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_4__["isArrayLike"])(result)) {
        return Object(_subscribeToArray__WEBPACK_IMPORTED_MODULE_0__["subscribeToArray"])(result);
    }
    else if (Object(_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(result)) {
        return Object(_subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__["subscribeToPromise"])(result);
    }
    else if (!!result && typeof result[_symbol_iterator__WEBPACK_IMPORTED_MODULE_7__["iterator"]] === 'function') {
        return Object(_subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__["subscribeToIterable"])(result);
    }
    else {
        var value = Object(_isObject__WEBPACK_IMPORTED_MODULE_6__["isObject"])(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js ***!
  \*******************************************************************/
/*! exports provided: subscribeToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToArray", function() { return subscribeToArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    };
};
//# sourceMappingURL=subscribeToArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js ***!
  \**********************************************************************/
/*! exports provided: subscribeToIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function() { return subscribeToIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

var subscribeToIterable = function (iterable) {
    return function (subscriber) {
        var iterator = iterable[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]]();
        do {
            var item = void 0;
            try {
                item = iterator.next();
            }
            catch (err) {
                subscriber.error(err);
                return subscriber;
            }
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) {
                break;
            }
        } while (true);
        if (typeof iterator.return === 'function') {
            subscriber.add(function () {
                if (iterator.return) {
                    iterator.return();
                }
            });
        }
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToIterable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js ***!
  \************************************************************************/
/*! exports provided: subscribeToObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function() { return subscribeToObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

var subscribeToObservable = function (obj) {
    return function (subscriber) {
        var obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        }
        else {
            return obs.subscribe(subscriber);
        }
    };
};
//# sourceMappingURL=subscribeToObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js ***!
  \*********************************************************************/
/*! exports provided: subscribeToPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function() { return subscribeToPromise; });
/* harmony import */ var _hostReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostReportError */ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */

var subscribeToPromise = function (promise) {
    return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, _hostReportError__WEBPACK_IMPORTED_MODULE_0__["hostReportError"]);
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js ***!
  \********************************************************************/
/*! exports provided: subscribeToResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToResult", function() { return subscribeToResult; });
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm5/internal/InnerSubscriber.js");
/* harmony import */ var _subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeTo */ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */



function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
    if (innerSubscriber === void 0) {
        innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__["InnerSubscriber"](outerSubscriber, outerValue, outerIndex);
    }
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
        return result.subscribe(innerSubscriber);
    }
    return Object(_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(result)(innerSubscriber);
}
//# sourceMappingURL=subscribeToResult.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/toSubscriber.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/toSubscriber.js ***!
  \***************************************************************/
/*! exports provided: toSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSubscriber", function() { return toSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/_esm5/internal/Observer.js");
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            return nextOrObserver;
        }
        if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]) {
            return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](_Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]);
    }
    return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/core/cell.utilities.ts":
/*!************************************!*\
  !*** ./src/core/cell.utilities.ts ***!
  \************************************/
/*! exports provided: CellUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellUtilities", function() { return CellUtilities; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model */ "./src/model/index.ts");

/**
 * Cell utilities.
 */
class CellUtilities {
    /**
     * Creates an instance of cell utilities.
     * @param [gridWidth] available grid width.
     */
    constructor(gridWidth) {
        this._cellConfigCache = [];
        this.gridWidth = gridWidth;
    }
    /**
     * Computes cell essentials.
     * @param cells columns of grid config, represents cell of a field.
     * @param forceCalc if true, recalculates width again.
     * @param gridWidth width of grid body.
     * @returns computed grid column widths.
     */
    computeCellEssentials(cells, forceCalc) {
        if (forceCalc) {
            this._cellConfigCache = [];
        }
        if (this._cellConfigCache.length > 0) {
            return this._cellConfigCache;
        }
        let totalCellWidth = 0;
        // calculate total consumed width and set up render width for cells that have user defined widths.
        cells.forEach((cell, index) => {
            if (cell.width !== _model__WEBPACK_IMPORTED_MODULE_0__["CellWidth"].Auto && !isNaN(cell.width)) {
                totalCellWidth += cell.width;
                cell.renderWidth = cell.width + 'px';
            }
        });
        // need to calculate individual cell widths.
        // percentage -> /^[0-9]+%/g
        // px -> /^[0-9]+px/g
        let availableWidthToSpawn = this.gridWidth - totalCellWidth;
        // FIXME: Need to find a way for cell width other than Auto.
        const autoCellsAvailable = cells.filter(c => c.width === _model__WEBPACK_IMPORTED_MODULE_0__["CellWidth"].Auto || c.width === _model__WEBPACK_IMPORTED_MODULE_0__["CellWidth"].FitToContent || _model__WEBPACK_IMPORTED_MODULE_0__["CellWidth"].Flexible).length;
        // set calculated width for each cell & reduce available width for Auto columns.
        cells.forEach((cell, index) => {
            if (/^[0-9]+%/g.test(cell.width.toString())) {
                const renderedWidth = ((Number(cell.width.toString().slice(0, -1)) / 100) * availableWidthToSpawn);
                cell.renderWidth = renderedWidth + 'px';
                availableWidthToSpawn -= renderedWidth;
            }
            if (/^[0-9]+px/g.test(cell.width.toString())) {
                cell.renderWidth = cell.width.toString();
                availableWidthToSpawn -= Number(cell.width.toString().slice(0, -2));
            }
        });
        // span remaining width to auto cells.
        const individualCellWidthForAutoColumns = availableWidthToSpawn / autoCellsAvailable;
        // set calculated widths for Auto cell.
        cells.forEach((cell, index) => {
            if (cell.width === _model__WEBPACK_IMPORTED_MODULE_0__["CellWidth"].Auto) {
                cell.renderWidth = individualCellWidthForAutoColumns + 'px';
            }
        });
        this._cellConfigCache = [...cells];
    }
    /**
     * Gets all cell utils.
     * @returns all cell utils.
     */
    getAllCellUtils() {
        return this._cellConfigCache;
    }
    /**
     * Gets cell utils by field name
     * @param field search by field name.
     * @returns cell utils.
     */
    getCellUtilsByFieldName(field) {
        return this._cellConfigCache.find(c => c.field === field);
    }
}


/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/*! exports provided: CellUtilities, Virtualize, ScrollUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cell_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell.utilities */ "./src/core/cell.utilities.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CellUtilities", function() { return _cell_utilities__WEBPACK_IMPORTED_MODULE_0__["CellUtilities"]; });

/* harmony import */ var _virtualize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virtualize */ "./src/core/virtualize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Virtualize", function() { return _virtualize__WEBPACK_IMPORTED_MODULE_1__["Virtualize"]; });

/* harmony import */ var _scroll_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll.utilities */ "./src/core/scroll.utilities.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollUtilities", function() { return _scroll_utilities__WEBPACK_IMPORTED_MODULE_2__["ScrollUtilities"]; });






/***/ }),

/***/ "./src/core/scroll.utilities.ts":
/*!**************************************!*\
  !*** ./src/core/scroll.utilities.ts ***!
  \**************************************/
/*! exports provided: ScrollUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollUtilities", function() { return ScrollUtilities; });
/**
 * Scroll utilities.
 */
class ScrollUtilities {
    /**
     * Creates an instance of scroll utilities.
     */
    constructor(shadowRoot) {
        /**
         * Drag start callback of scroll utilities.
         */
        this.dragStartCallback = (event) => { this.dragStart(event); };
        /**
         * Drag end callback of scroll utilities.
         */
        this.dragEndCallback = (event) => { this.dragEnd(event); };
        /**
         * Drag callback of scroll utilities.
         */
        this.dragCallback = (event) => { this.drag(event); };
        this.shadowRoot = shadowRoot;
        this.setScrollBounds();
    }
    /**
     * Registers smart scroll events.
     */
    registerSmartScrollEvents() {
        const scrollContainer = this.getGridScrollContainer();
        const viewportContainer = this.getGridViewport();
        scrollContainer.addEventListener("touchstart", this.dragStartCallback, false);
        document.addEventListener("touchend", this.dragEndCallback, false);
        document.addEventListener("touchmove", this.dragCallback, false);
        scrollContainer.addEventListener("mousedown", this.dragStartCallback, false);
        document.addEventListener("mouseup", this.dragEndCallback, false);
        document.addEventListener("mousemove", this.dragCallback, false);
        scrollContainer.onwheel = (event) => {
            this.onScrollContainerWheel(event);
        };
        scrollContainer.onclick = (event) => {
            this.onScrollContainerClick(event);
        };
        viewportContainer.onwheel = (event) => {
            this.onScrollContainerWheel(event);
        };
    }
    /**
     * register smart scroll events.
     */
    unRegisterSmartScrollEvents() {
        const scrollContainer = this.getGridScrollContainer();
        const viewportContainer = this.getGridViewport();
        scrollContainer.removeEventListener("touchstart", this.dragStartCallback, false);
        document.removeEventListener("touchend", this.dragEndCallback, false);
        document.removeEventListener("touchmove", this.dragCallback, false);
        scrollContainer.removeEventListener("mousedown", this.dragStartCallback, false);
        document.removeEventListener("mouseup", this.dragEndCallback, false);
        document.removeEventListener("mousemove", this.dragCallback, false);
        scrollContainer.onclick = null;
        scrollContainer.onwheel = null;
        viewportContainer.onwheel = null;
    }
    /**
     * Drags start event.
     * @param event Mouse event.
     */
    dragStart(event) {
        if (event.type === "touchstart" || event.type === 'mousedown') {
            this.setScrollBounds();
            this.setScrollVisibility();
            const scrollBar = this.getGridScrollBar();
            if (event.target === scrollBar) {
                this.isScrollBarActivated = true;
            }
        }
    }
    /**
     * Drags end event.
     * @param event Mouse event.
     */
    dragEnd(event) {
        this.isScrollBarActivated = false;
        this.resetScrollVisibility();
    }
    /**
     * Drags scroll utilities.
     * @param event Mouse event.
     */
    drag(event) {
        if ((event.type === "touchmove" || event.type === 'mousemove')
            && this.isScrollBarActivated
            && this.isPositionInBounds(event.clientY)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            const scrollBar = this.getGridScrollBar();
            const relativeY = event.clientY - this.yMin;
            scrollBar.style.top = relativeY + 'px';
        }
    }
    /**
     * Wheel event on scroll container.
     * @param event Wheel event.
     */
    onScrollContainerWheel(event) {
        this.setScrollBounds();
        const scrollTarget = event.target;
        event.preventDefault();
        event.stopImmediatePropagation();
        const isPositiveRoll = event.deltaY > 0;
        const scrollStep = 10;
        let nextPosition = 0;
        const scrollBar = this.getGridScrollBar();
        const scrollBarTop = scrollBar.getBoundingClientRect().y;
        if (isPositiveRoll) {
            nextPosition = scrollBarTop + scrollStep;
        }
        else {
            nextPosition = scrollBarTop - scrollStep;
        }
        if (this.isPositionInBounds(nextPosition)) {
            scrollBar.style.top = nextPosition - this.yMin + 'px';
        }
    }
    /**
     * Click event on scroll container.
     * @param event Click event.
     */
    onScrollContainerClick(event) {
        // Dispatch mock drag event for every click as mousemove event.
        this.isScrollBarActivated = true;
        this.setScrollBounds();
        this.enableSmoothScroll();
        this.setScrollVisibility();
        this.drag(new MouseEvent('mousemove', event));
        this.isScrollBarActivated = false;
        this.disableSmoothScroll();
        this.resetScrollVisibility();
    }
    /**
     * Gets scroll element.
     * @returns scroll element;
     */
    getGridScrollBar() {
        return this.shadowRoot.querySelector('.scroll-bar');
    }
    /**
     * Gets grid scroll container.
     * @returns grid scroll container.
     */
    getGridScrollContainer() {
        return this.shadowRoot.querySelector('.smart-scroll');
    }
    getGridViewport() {
        return this.shadowRoot.querySelector('.data-viewport');
    }
    /**
     * Determines whether position is in bounds.
     * @param yPosition position from event.
     * @returns true if in bounds.
     */
    isPositionInBounds(yPosition) {
        return (yPosition >= this.yMin) && (yPosition + this.scrollBarHeight <= this.yMax);
    }
    /**
     * Sets scroll bounds.
     */
    setScrollBounds() {
        const elementContainer = this.getGridScrollContainer();
        const scrollBar = this.getGridScrollBar();
        this.yMin = elementContainer.getBoundingClientRect().top;
        this.yMax = elementContainer.getBoundingClientRect().bottom;
        this.scrollBarHeight = scrollBar.getBoundingClientRect().height;
    }
    /**
     * Sets scroll visibility.
     */
    setScrollVisibility() {
        const scrollContainer = this.getGridScrollContainer();
        scrollContainer.classList.add('scrolling');
    }
    /**
     * Resets scroll visibility to default behavior.
     */
    resetScrollVisibility() {
        const scrollContainer = this.getGridScrollContainer();
        setTimeout(() => {
            scrollContainer.classList.remove('scrolling');
        }, 500);
    }
    /**
     * Enables smooth scroll with transitions.
     */
    enableSmoothScroll() {
        const scrollContainer = this.getGridScrollContainer();
        scrollContainer.classList.add('smooth-scroll');
    }
    /**
     * Disables smooth scroll.
     */
    disableSmoothScroll() {
        const scrollContainer = this.getGridScrollContainer();
        setTimeout(() => {
            scrollContainer.classList.remove('smooth-scroll');
        }, 500);
    }
}


/***/ }),

/***/ "./src/core/virtualize.ts":
/*!********************************!*\
  !*** ./src/core/virtualize.ts ***!
  \********************************/
/*! exports provided: Virtualize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Virtualize", function() { return Virtualize; });
/**
 * Virtualize core.
 */
class Virtualize {
}


/***/ }),

/***/ "./src/gs-grid.ts":
/*!************************!*\
  !*** ./src/gs-grid.ts ***!
  \************************/
/*! exports provided: GsGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsGrid", function() { return GsGrid; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/core/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model/index.ts");
/* harmony import */ var _renderers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderers */ "./src/renderers/index.ts");




/**
 * Gs grid component class.
 */
class GsGrid extends HTMLElement {
    /**
     * Creates an instance of gs-grid.
     */
    constructor() {
        super();
        this.instanceId = this.generateInstanceId();
        this.registerGridEventCallback();
    }
    /**
     * Connected callback of gs-grid component.
     */
    connectedCallback() {
        this.initPropsFromAttrs();
        this.attachShadow({ mode: 'open' });
    }
    /**
     * Initialize all attributes of gs-grid component.
     */
    initPropsFromAttrs() {
        this.setAttribute('instance-id', this.instanceId);
    }
    /**
     * Generates a UUID for instance id.
     * (RFC 4122) Implemented from https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
     * @returns A unique identifier (UUID)
     */
    generateInstanceId() {
        const s = new Array(36);
        const hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = "-";
        return s.join("");
    }
    /**
     * Registers all component event handlers.
     */
    registerGridEventCallback() {
        this.addEventListener('x-gs-config-setup', (event) => {
            const { gridConfig } = event.detail;
            this.onGridConfigSet(gridConfig);
        });
    }
    /**
     * Callback to set event config.
     * @param gridConfig grid config param.
     */
    onGridConfigSet(gridConfig) {
        this.gridConfig = gridConfig;
        this.gridConfig.columnDefs = gridConfig.columnDefs.map(c => new _model__WEBPACK_IMPORTED_MODULE_1__["GridColumn"](c));
        // Initialize Cell utils with params.
        this.cellUtils = new _core__WEBPACK_IMPORTED_MODULE_0__["CellUtilities"](this.getAvailableWidth());
        // Register all renderers.
        this.registerRenderers(this.gridConfig);
        // Initialize styles.
        this.initializeStyles();
        // Render grid header.
        this.initializeHeader();
        // Render data rows.
        this.initializeViewport();
        // Render scroll bar.
        this.initializeScrollBar();
        // Init smart scroll.
        var smartScroll = new _core__WEBPACK_IMPORTED_MODULE_0__["ScrollUtilities"](this.shadowRoot);
        setTimeout(() => {
            smartScroll.registerSmartScrollEvents();
        }, 2000);
    }
    /**
     * Registers renderers of header & column of grid.
     * @param gridConfig
     */
    registerRenderers(gridConfig) {
        const rendererDataSet = gridConfig.columnDefs.map(x => {
            return { displayName: x.headerName, field: x.field, width: x.width, minWidth: x.minWidth };
        });
        // Register header renderer.
        this.headerRenderer = new _renderers__WEBPACK_IMPORTED_MODULE_2__["FlexHeaderRenderer"](rendererDataSet, this.cellUtils);
        // Register data row renderer.
        this.dataRowRenderer = new _renderers__WEBPACK_IMPORTED_MODULE_2__["FlexDataRowRenderer"](rendererDataSet, this.cellUtils);
        // Register viewport scroll renderer.
        this.scrollRenderer = new _renderers__WEBPACK_IMPORTED_MODULE_2__["ScrollRenderer"]();
    }
    /**
     * Initializes header.
     */
    initializeHeader() {
        this.shadowRoot.appendChild(this.headerRenderer.render().cloneNode(true));
    }
    /**
     * Initializes viewport.
     */
    initializeViewport() {
        this.shadowRoot.append(this.dataRowRenderer.render({ data: this.gridConfig.data }));
    }
    /**
     * Initializes scroll bar for viewport.
     */
    initializeScrollBar() {
        const viewport = this.shadowRoot.querySelector('.data-viewport');
        if (viewport) {
            viewport.append(this.scrollRenderer.render());
        }
    }
    /**
     * Initializes styles.
     */
    initializeStyles() {
        const styleRoot = document.createElement('style');
        const gsGridStyles = __webpack_require__(/*! ./styles/gs-grid.scss */ "./src/styles/gs-grid.scss").default[0][1];
        styleRoot.innerText = gsGridStyles.replace(/\n|\r/g, "");
        this.shadowRoot.appendChild(styleRoot);
    }
    /**
     * Gets available width for grid.
     * @returns available width for grid, either itself or parent.
     */
    getAvailableWidth() {
        return this.clientWidth || this.parentElement.clientWidth;
    }
}
customElements.define('gs-grid', GsGrid);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: GsGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gs_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gs-grid */ "./src/gs-grid.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GsGrid", function() { return _gs_grid__WEBPACK_IMPORTED_MODULE_0__["GsGrid"]; });

// MODULE FILE FOR GS-GRID



/***/ }),

/***/ "./src/model/grid-column.ts":
/*!**********************************!*\
  !*** ./src/model/grid-column.ts ***!
  \**********************************/
/*! exports provided: GridColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridColumn", function() { return GridColumn; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/model/index.ts");
/* harmony import */ var _grid_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-constants */ "./src/model/grid-constants.ts");


class GridColumn {
    constructor(args) {
        this.field = args.field;
        this.headerName = args.headerName;
        this.valueFn = args.valueFn || null;
        this.enableSort = args.enableSort || false;
        this.enableFilter = args.enableFilter || false;
        this.pinColumn = args.pinColumn || ___WEBPACK_IMPORTED_MODULE_0__["PinColumn"].None;
        this.width = args.width || _grid_constants__WEBPACK_IMPORTED_MODULE_1__["CellWidth"].Auto;
        this.minWidth = args.minWidth || _grid_constants__WEBPACK_IMPORTED_MODULE_1__["CellWidth"].Auto;
    }
}


/***/ }),

/***/ "./src/model/grid-config.ts":
/*!**********************************!*\
  !*** ./src/model/grid-config.ts ***!
  \**********************************/
/*! exports provided: GridConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridConfig", function() { return GridConfig; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/**
 * Grid configuration class.
 */
class GridConfig {
    /**
     * Creates an instance of grid config.
     */
    constructor() {
        this.renderCompleteSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    /**
     * Determines whether instance ready is
     * @returns true if instance ready
     */
    IsInstanceReady() {
        return this.instanceReady;
    }
    /**
     * Determines whether render is complete.
     * @returns render complete subscription.
     */
    IsRenderComplete() {
        return this.renderCompleteSubscription;
    }
}


/***/ }),

/***/ "./src/model/grid-constants.ts":
/*!*************************************!*\
  !*** ./src/model/grid-constants.ts ***!
  \*************************************/
/*! exports provided: CellWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellWidth", function() { return CellWidth; });
var CellWidth;
(function (CellWidth) {
    CellWidth[CellWidth["Auto"] = 0] = "Auto";
    CellWidth[CellWidth["Flexible"] = 1] = "Flexible";
    CellWidth[CellWidth["FitToContent"] = 2] = "FitToContent";
})(CellWidth || (CellWidth = {}));


/***/ }),

/***/ "./src/model/grid-events.ts":
/*!**********************************!*\
  !*** ./src/model/grid-events.ts ***!
  \**********************************/
/*! exports provided: GridEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridEvents", function() { return GridEvents; });
/**
 * Grid events class.
 */
class GridEvents {
    constructor() {
    }
    /**
     * Setup grid configuration.
     * @param instanceId Grid instance id from instance-id attribute from grid.
     * @param gridConfig Grid config object.
     */
    static setupGridConfig(instanceId, gridConfig) {
        const gridNode = document.querySelector(`gs-grid[instance-id="${instanceId}"]`);
        const gridSetupEvent = new CustomEvent('x-gs-config-setup', {
            bubbles: true,
            composed: true,
            detail: {
                gridConfig
            }
        });
        gridNode.dispatchEvent(gridSetupEvent);
    }
}


/***/ }),

/***/ "./src/model/grid-instance.ts":
/*!************************************!*\
  !*** ./src/model/grid-instance.ts ***!
  \************************************/
/*! exports provided: GridInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridInstance", function() { return GridInstance; });
/**
 * Grid instance to handle operations on rendered grid.
 */
class GridInstance {
    constructor(id) {
        this.id = id;
    }
    refreshGrid(delay) {
        throw new Error("Method not implemented.");
    }
    rebuildGrid(force) {
        throw new Error("Method not implemented.");
    }
    updateData(data) {
        throw new Error("Method not implemented.");
    }
    clearData(data, showNoDataMessage, message) {
        throw new Error("Method not implemented.");
    }
    hideColumn(field) {
        throw new Error("Method not implemented.");
    }
    showColumn(field) {
        throw new Error("Method not implemented.");
    }
    scrollToTop() {
        throw new Error("Method not implemented.");
    }
    scrollToBottom() {
        throw new Error("Method not implemented.");
    }
    scrollTo(position) {
        throw new Error("Method not implemented.");
    }
}


/***/ }),

/***/ "./src/model/index.ts":
/*!****************************!*\
  !*** ./src/model/index.ts ***!
  \****************************/
/*! exports provided: GridColumn, GridConfig, PinColumn, GridEvents, GridInstance, CellWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid_column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-column */ "./src/model/grid-column.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridColumn", function() { return _grid_column__WEBPACK_IMPORTED_MODULE_0__["GridColumn"]; });

/* harmony import */ var _grid_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-config */ "./src/model/grid-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridConfig", function() { return _grid_config__WEBPACK_IMPORTED_MODULE_1__["GridConfig"]; });

/* harmony import */ var _pin_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pin-column */ "./src/model/pin-column.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinColumn", function() { return _pin_column__WEBPACK_IMPORTED_MODULE_2__["PinColumn"]; });

/* harmony import */ var _grid_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-events */ "./src/model/grid-events.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridEvents", function() { return _grid_events__WEBPACK_IMPORTED_MODULE_3__["GridEvents"]; });

/* harmony import */ var _grid_instance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-instance */ "./src/model/grid-instance.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridInstance", function() { return _grid_instance__WEBPACK_IMPORTED_MODULE_4__["GridInstance"]; });

/* harmony import */ var _grid_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-constants */ "./src/model/grid-constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CellWidth", function() { return _grid_constants__WEBPACK_IMPORTED_MODULE_5__["CellWidth"]; });









/***/ }),

/***/ "./src/model/pin-column.ts":
/*!*********************************!*\
  !*** ./src/model/pin-column.ts ***!
  \*********************************/
/*! exports provided: PinColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinColumn", function() { return PinColumn; });
var PinColumn;
(function (PinColumn) {
    PinColumn[PinColumn["PinLeft"] = 0] = "PinLeft";
    PinColumn[PinColumn["PinRight"] = 1] = "PinRight";
    PinColumn[PinColumn["None"] = 2] = "None";
})(PinColumn || (PinColumn = {}));


/***/ }),

/***/ "./src/renderers/data-row.renderer.ts":
/*!********************************************!*\
  !*** ./src/renderers/data-row.renderer.ts ***!
  \********************************************/
/*! exports provided: FlexDataRowRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexDataRowRenderer", function() { return FlexDataRowRenderer; });
/**
 * Flex data row renderer.
 */
class FlexDataRowRenderer {
    /**
     * Creates an instance of flex column renderer.
     * @param columns grid columns.
     */
    constructor(columns, cellUtils) {
        this._renderCols = columns;
        this._cellUtils = cellUtils;
    }
    /**
     * Renders flex column renderer.
     */
    render(renderOptions) {
        const dataViewport = document.createElement('div');
        dataViewport.classList.add('data-viewport');
        if (renderOptions.data && renderOptions.data.length > 0) {
            renderOptions.data.forEach(dataRow => {
                let colTemplate = '';
                this._renderCols.forEach(col => {
                    colTemplate += this.cellTemplateFragmentFn(col.field, dataRow);
                });
                dataViewport.append(this.rowTemplateFragmentFn(colTemplate));
            });
        }
        return dataViewport;
    }
    /**
     * Queues render async.
     * @returns render.
     */
    queueRender() {
        return Promise.resolve(this.render());
    }
    /**
     * Cells template fragment method.
     * @param field cell field.
     * @param data field data.
     * @returns template fragment method.
     */
    cellTemplateFragmentFn(field, data) {
        const cellUtils = this._cellUtils.getCellUtilsByFieldName(field);
        const cellValue = this.getCellValue(field, data);
        return `<div title="${cellValue}" class="cell-column" style="width: ${cellUtils.renderWidth}"><div class="cell-content">${cellValue}</div></div>`;
    }
    /**
     * Rows template fragment method.
     * @param cellTemplate cell template string.
     * @returns template fragment method.
     */
    rowTemplateFragmentFn(cellTemplate) {
        const dataRowContainer = document.createElement('div');
        dataRowContainer.classList.add('data-row');
        dataRowContainer.innerHTML = cellTemplate;
        return dataRowContainer;
    }
    /**
     * Gets cell value for field, including nested dot syntax.
     * @param field cell field.
     * @param data row data object.
     * @returns cell data.
     */
    getCellValue(field, data) {
        const isDotNotated = field.indexOf('.');
        if (isDotNotated > -1) {
            // if field is dot notated reduce it to final value.
            const fieldAsKeys = field.split('.');
            return fieldAsKeys.reduce((p, c) => { return p[c]; }, data);
        }
        return data[field];
    }
}


/***/ }),

/***/ "./src/renderers/header.renderer.ts":
/*!******************************************!*\
  !*** ./src/renderers/header.renderer.ts ***!
  \******************************************/
/*! exports provided: FlexHeaderRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexHeaderRenderer", function() { return FlexHeaderRenderer; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Flex header renderer.
 */
class FlexHeaderRenderer {
    /**
     * Creates an instance of flex header renderer.
     * @param columns
     * @param cellUtils
     */
    constructor(columns, cellUtils) {
        this._renderCols = columns;
        this._cellUtils = cellUtils;
    }
    /**
     * Renders flex header renderer.
     */
    render() {
        const cellConfigItems = this._renderCols.map(c => { return { field: c.field, width: c.width, renderWidth: '' }; });
        this._cellUtils.computeCellEssentials(cellConfigItems, true);
        let colTemplate = '';
        this._renderCols.forEach(col => {
            colTemplate += this.cellTemplateFragmentFn(col.displayName, col.field);
        });
        return this.rowTemplateFragmentFn(colTemplate);
    }
    /**
     * Queues render async.
     * @returns render.
     */
    queueRender() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(this.render());
        });
    }
    /**
     * Cells template fragment method.
     * @param cellValue cell value.
     * @param field cell field.
     * @returns template fragment method.
     */
    cellTemplateFragmentFn(cellValue, field) {
        const cellUtil = this._cellUtils.getCellUtilsByFieldName(field);
        return `<div title="${cellValue}" style="width: ${cellUtil.renderWidth}" class="header-column" data-field="${field}"><div class="cell-content">${cellValue}</div></div>`;
    }
    /**
     * Rows template fragment method.
     * @param cellTemplate template string.
     * @returns row template fragment element.
     */
    rowTemplateFragmentFn(cellTemplate) {
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header-row');
        headerContainer.innerHTML = cellTemplate;
        return headerContainer;
    }
}


/***/ }),

/***/ "./src/renderers/index.ts":
/*!********************************!*\
  !*** ./src/renderers/index.ts ***!
  \********************************/
/*! exports provided: FlexHeaderRenderer, FlexDataRowRenderer, ScrollRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.renderer */ "./src/renderers/header.renderer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexHeaderRenderer", function() { return _header_renderer__WEBPACK_IMPORTED_MODULE_0__["FlexHeaderRenderer"]; });

/* harmony import */ var _data_row_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-row.renderer */ "./src/renderers/data-row.renderer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexDataRowRenderer", function() { return _data_row_renderer__WEBPACK_IMPORTED_MODULE_1__["FlexDataRowRenderer"]; });

/* harmony import */ var _scroll_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll.renderer */ "./src/renderers/scroll.renderer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollRenderer", function() { return _scroll_renderer__WEBPACK_IMPORTED_MODULE_2__["ScrollRenderer"]; });






/***/ }),

/***/ "./src/renderers/scroll.renderer.ts":
/*!******************************************!*\
  !*** ./src/renderers/scroll.renderer.ts ***!
  \******************************************/
/*! exports provided: ScrollRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollRenderer", function() { return ScrollRenderer; });
/**
 * Scroll renderer.
 */
class ScrollRenderer {
    /**
     * Creates an instance of scroll renderer.
     */
    constructor() {
    }
    /**
     * Renders scroll renderer.
     * @param [data] render data.
     * @returns Element to render.
     */
    render(data) {
        return this.getSmartScroll();
    }
    /**
     * Queues render async.
     * @returns Element to render async.
     */
    queueRender() {
        return Promise.resolve(this.render());
    }
    /**
     * Gets scroll bar template.
     * @param [options] render options.
     * @returns scroll bar template.
     */
    getScrollBarTemplate(options) {
        return `<div class="scroll-bar" />`;
    }
    /**
     * Gets smart scroll element.
     * @returns smart scroll.
     */
    getSmartScroll() {
        const scrollElem = document.createElement('div');
        scrollElem.classList.add('smart-scroll');
        scrollElem.innerHTML = this.getScrollBarTemplate();
        return scrollElem;
    }
}


/***/ }),

/***/ "./src/styles/gs-grid.scss":
/*!*********************************!*\
  !*** ./src/styles/gs-grid.scss ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header-row {\n  display: inline-flex;\n  flex-direction: row;\n  background-color: #e8e8e8;\n  border-bottom: 1px solid #d3d3d3;\n  border-right: 1px solid #d3d3d3;\n  border-left: 1px solid #d3d3d3; }\n  .header-row .header-column {\n    padding: 5px 10px;\n    border-right: 1px solid #d3d3d3;\n    display: flex;\n    flex-direction: column;\n    font-size: 14px; }\n    .header-row .header-column .cell-content {\n      overflow: hidden;\n      font-size: 14px;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      width: 90%;\n      display: block;\n      font-weight: bold; }\n    .header-row .header-column:last-child {\n      border-right: 0; }\n\n.data-viewport {\n  display: inline-flex;\n  flex-direction: column;\n  position: relative; }\n  .data-viewport .data-row {\n    display: inline-flex;\n    flex-direction: row;\n    border-bottom: 1px solid #d3d3d3;\n    border-right: 1px solid #d3d3d3;\n    border-left: 1px solid #d3d3d3; }\n    .data-viewport .data-row .cell-column {\n      padding: 5px 10px;\n      border-right: 1px solid #d3d3d3;\n      display: flex;\n      flex-direction: column;\n      overflow: hidden; }\n      .data-viewport .data-row .cell-column .cell-content {\n        overflow: hidden;\n        font-size: 14px;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        width: 90%;\n        display: block; }\n      .data-viewport .data-row .cell-column:last-child {\n        border-right: 0; }\n  .data-viewport .smart-scroll {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 10px;\n    height: 100%;\n    opacity: 0.7;\n    background-color: transparent;\n    transition: background-color 0.5s ease-in-out; }\n    .data-viewport .smart-scroll.scrolling {\n      background-color: #d3d3d3; }\n      .data-viewport .smart-scroll.scrolling .scroll-bar {\n        background-color: black; }\n    .data-viewport .smart-scroll.smooth-scroll .scroll-bar {\n      transition: top 0.4s ease-in-out; }\n    .data-viewport .smart-scroll .scroll-bar {\n      cursor: ns-resize;\n      position: relative;\n      border-radius: 5px;\n      height: 20px;\n      background-color: transparent;\n      opacity: 0.6;\n      width: 10px;\n      transition: background-color 0.5s ease-in-out; }\n  .data-viewport:hover .smart-scroll {\n    background-color: #d3d3d3; }\n    .data-viewport:hover .smart-scroll .scroll-bar {\n      background-color: black; }\n", "",{"version":3,"sources":["webpack://src/styles/gs-grid.scss"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,yBAAyB;EACzB,gCAAgC;EAChC,+BAA+B;EAC/B,8BAA8B,EAAE;EAChC;IACE,iBAAiB;IACjB,+BAA+B;IAC/B,aAAa;IACb,sBAAsB;IACtB,eAAe,EAAE;IACjB;MACE,gBAAgB;MAChB,eAAe;MACf,uBAAuB;MACvB,mBAAmB;MACnB,UAAU;MACV,cAAc;MACd,iBAAiB,EAAE;IACrB;MACE,eAAe,EAAE;;AAEvB;EACE,oBAAoB;EACpB,sBAAsB;EACtB,kBAAkB,EAAE;EACpB;IACE,oBAAoB;IACpB,mBAAmB;IACnB,gCAAgC;IAChC,+BAA+B;IAC/B,8BAA8B,EAAE;IAChC;MACE,iBAAiB;MACjB,+BAA+B;MAC/B,aAAa;MACb,sBAAsB;MACtB,gBAAgB,EAAE;MAClB;QACE,gBAAgB;QAChB,eAAe;QACf,uBAAuB;QACvB,mBAAmB;QACnB,UAAU;QACV,cAAc,EAAE;MAClB;QACE,eAAe,EAAE;EACvB;IACE,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,6BAA6B;IAC7B,6CAA6C,EAAE;IAC/C;MACE,yBAAyB,EAAE;MAC3B;QACE,uBAAuB,EAAE;IAC7B;MACE,gCAAgC,EAAE;IACpC;MACE,iBAAiB;MACjB,kBAAkB;MAClB,kBAAkB;MAClB,YAAY;MACZ,6BAA6B;MAC7B,YAAY;MACZ,WAAW;MACX,6CAA6C,EAAE;EACnD;IACE,yBAAyB,EAAE;IAC3B;MACE,uBAAuB,EAAE","sourcesContent":[".header-row {\n  display: inline-flex;\n  flex-direction: row;\n  background-color: #e8e8e8;\n  border-bottom: 1px solid #d3d3d3;\n  border-right: 1px solid #d3d3d3;\n  border-left: 1px solid #d3d3d3; }\n  .header-row .header-column {\n    padding: 5px 10px;\n    border-right: 1px solid #d3d3d3;\n    display: flex;\n    flex-direction: column;\n    font-size: 14px; }\n    .header-row .header-column .cell-content {\n      overflow: hidden;\n      font-size: 14px;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      width: 90%;\n      display: block;\n      font-weight: bold; }\n    .header-row .header-column:last-child {\n      border-right: 0; }\n\n.data-viewport {\n  display: inline-flex;\n  flex-direction: column;\n  position: relative; }\n  .data-viewport .data-row {\n    display: inline-flex;\n    flex-direction: row;\n    border-bottom: 1px solid #d3d3d3;\n    border-right: 1px solid #d3d3d3;\n    border-left: 1px solid #d3d3d3; }\n    .data-viewport .data-row .cell-column {\n      padding: 5px 10px;\n      border-right: 1px solid #d3d3d3;\n      display: flex;\n      flex-direction: column;\n      overflow: hidden; }\n      .data-viewport .data-row .cell-column .cell-content {\n        overflow: hidden;\n        font-size: 14px;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        width: 90%;\n        display: block; }\n      .data-viewport .data-row .cell-column:last-child {\n        border-right: 0; }\n  .data-viewport .smart-scroll {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 10px;\n    height: 100%;\n    opacity: 0.7;\n    background-color: transparent;\n    transition: background-color 0.5s ease-in-out; }\n    .data-viewport .smart-scroll.scrolling {\n      background-color: #d3d3d3; }\n      .data-viewport .smart-scroll.scrolling .scroll-bar {\n        background-color: black; }\n    .data-viewport .smart-scroll.smooth-scroll .scroll-bar {\n      transition: top 0.4s ease-in-out; }\n    .data-viewport .smart-scroll .scroll-bar {\n      cursor: ns-resize;\n      position: relative;\n      border-radius: 5px;\n      height: 20px;\n      background-color: transparent;\n      opacity: 0.6;\n      width: 10px;\n      transition: background-color 0.5s ease-in-out; }\n  .data-viewport:hover .smart-scroll {\n    background-color: #d3d3d3; }\n    .data-viewport:hover .smart-scroll .scroll-bar {\n      background-color: black; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./example/src/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./example/src/index.ts */"./example/src/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9zcmMvY29tcG9uZW50cy9jb21wb25lbnQtcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9zcmMvY29tcG9uZW50cy9kZW1vLWhvbWUvZGVtby1ob21lLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9zcmMvY29tcG9uZW50cy9kZW1vLWhvbWUvZGVtby1ob21lLnRzIiwid2VicGFjazovLy8uL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvZGV2LWVuZ2FnZS9kZXYtZW5nYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9zcmMvY29tcG9uZW50cy9kZXYtZW5nYWdlL2Rldi1lbmdhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9zcmMvY29tcG9uZW50cy9nZXQtc3RhcnRlZC9nZXQtc3RhcnRlZC5odG1sIiwid2VicGFjazovLy8uL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvZ2V0LXN0YXJ0ZWQvZ2V0LXN0YXJ0ZWQudHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9zcmMvY29tcG9uZW50cy9ncmlkLWludHJvL2dyaWQtaW50cm8uaHRtbCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL3NyYy9jb21wb25lbnRzL2dyaWQtaW50cm8vZ3JpZC1pbnRyby50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL3NyYy9jb21wb25lbnRzL3RvcC1uYXYvdG9wLW5hdi5odG1sIiwid2VicGFjazovLy8uL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvdG9wLW5hdi90b3AtbmF2LnRzIiwid2VicGFjazovLy8uL2V4YW1wbGUvc3JjL2NvbXBvbmVudHMvd2hhdC13aHkvd2hhdC13aHkuaHRtbCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL3NyYy9jb21wb25lbnRzL3doYXQtd2h5L3doYXQtd2h5LnRzIiwid2VicGFjazovLy8uL2V4YW1wbGUvc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL2V4YW1wbGUvc3JjL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rbm9ja291dC9idWlsZC9vdXRwdXQva25vY2tvdXQtbGF0ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL0FzeW5jU3ViamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvSW5uZXJTdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9PYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL09ic2VydmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL091dGVyU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9SZXBsYXlTdWJqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL1NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9TdWJqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL1N1YmplY3RTdWJzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9TdWJzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvY29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL2lubmVyU3Vic2NyaWJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvQ29ubmVjdGFibGVPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvYmluZENhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvYmluZE5vZGVDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9kZWZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2VtcHR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvZm9ya0pvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvZnJvbUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvZnJvbUV2ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvZnJvbUV2ZW50UGF0dGVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2dlbmVyYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvaWlmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL25ldmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9vbkVycm9yUmVzdW1lTmV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL3BhaXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvcGFydGl0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvcmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL3JhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvdGhyb3dFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL3RpbWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvdXNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS96aXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL2NvbmNhdEFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29wZXJhdG9ycy9ncm91cEJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29wZXJhdG9ycy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlQWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29wZXJhdG9ycy9tZXJnZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvb2JzZXJ2ZU9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29wZXJhdG9ycy9yZWZDb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3NjaGVkdWxlci9BbmltYXRpb25GcmFtZUFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL0FzYXBBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL0FzYXBTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL0FzeW5jQWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3NjaGVkdWxlci9Bc3luY1NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvUXVldWVBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL1F1ZXVlU2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3NjaGVkdWxlci9WaXJ0dWFsVGltZVNjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvYW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL2FzYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL2FzeW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3NjaGVkdWxlci9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvc3ltYm9sL29ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvc3ltYm9sL3J4U3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL0FyZ3VtZW50T3V0T2ZSYW5nZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvRW1wdHlFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL0ltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvVGltZW91dEVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL2NhblJlcG9ydEVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvaG9zdFJlcG9ydEVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL2lzSXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9pc051bWVyaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL2lzT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL2lzUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL2lzU2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvbm9vcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL25vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL3BpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9zdWJzY3JpYmVUby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9zdWJzY3JpYmVUb0l0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG9PYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG9Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC90b1N1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jZWxsLnV0aWxpdGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zY3JvbGwudXRpbGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3ZpcnR1YWxpemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dzLWdyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9ncmlkLWNvbHVtbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZ3JpZC1jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2dyaWQtY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9ncmlkLWV2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZ3JpZC1pbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL3Bpbi1jb2x1bW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9kYXRhLXJvdy5yZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2hlYWRlci5yZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc2Nyb2xsLnJlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ3MtZ3JpZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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QXFCLGdCQUFnQixVQUFVLEdBQUcsR0FBRyx3QkFBd0IsZ0NBQWdDLGVBQWUsZ0JBQWdCLHFDQUFxQyxJQUFJLEVBQUUsS0FBSzs7Ozs7Ozs7Ozs7OztBQzFJaFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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Iiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGRlbW9Ib21lIGZyb20gXCIuL2RlbW8taG9tZS9kZW1vLWhvbWVcIjtcbmltcG9ydCBkZXZFbmdhZ2UgZnJvbSBcIi4vZGV2LWVuZ2FnZS9kZXYtZW5nYWdlXCI7XG5pbXBvcnQgZ2V0U3RhcnRlZCBmcm9tIFwiLi9nZXQtc3RhcnRlZC9nZXQtc3RhcnRlZFwiO1xuaW1wb3J0IGdyaWRJbnRybyBmcm9tIFwiLi9ncmlkLWludHJvL2dyaWQtaW50cm9cIjtcbmltcG9ydCB0b3BOYXYgZnJvbSBcIi4vdG9wLW5hdi90b3AtbmF2XCI7XG5pbXBvcnQgd2hhdFdoeSBmcm9tIFwiLi93aGF0LXdoeS93aGF0LXdoeVwiO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlckFwcENvbXBvbmVudHMoa286IGFueSkge1xuICAgICAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKCd0b3AtbmF2JywgdG9wTmF2KTtcbiAgICAgICAga28uY29tcG9uZW50cy5yZWdpc3RlcignZ3JpZC1pbnRybycsIGdyaWRJbnRybyk7XG4gICAgICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ2Rldi1lbmdhZ2UnLCBkZXZFbmdhZ2UpO1xuICAgICAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKCdob21lJywgeyB0ZW1wbGF0ZTogJzxncmlkLWludHJvPjwvZ3JpZC1pbnRybz48ZGV2LWVuZ2FnZT48L2Rldi1lbmdhZ2U+JyB9KTtcbiAgICAgICAga28uY29tcG9uZW50cy5yZWdpc3RlcignZGVtbycsIGRlbW9Ib21lKVxuICAgICAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKCdnZXQtc3RhcnRlZCcsIGdldFN0YXJ0ZWQpXG4gICAgICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ3doYXQtYW5kLXdoeScsIHdoYXRXaHkpXG4gICAgfVxufSIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxuICAgICAgICA8aDM+R3JpZCBkZW1vPC9oMz5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxuICAgICAgICA8Z3MtZ3JpZD48L2dzLWdyaWQ+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsImltcG9ydCAqIGFzIGdzR3JpZCBmcm9tICcuLi8uLi8uLi8uLi9zcmMnO1xuaW1wb3J0IHsgSUdyaWRDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi8uLi9zcmMvaW50ZXJmYWNlJztcbmltcG9ydCB7IEdyaWRDb25maWcsIEdyaWRFdmVudHMgfSBmcm9tICcuLi8uLi8uLi8uLi9zcmMvbW9kZWwnO1xuXG5jbGFzcyBEZW1vSG9tZSB7XG4gICAgdXNlcnNMaXN0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgZ3NHcmlkUmVmID0gZ3NHcmlkO1xuICAgICAgICBcbiAgICAgICAgLy8gc2V0dXAgZ3JpZCBjb25maWcuXG4gICAgICAgIHRoaXMuc2V0dXBHcmlkQW5kQXBwbHlEYXRhKCk7XG4gICAgfVxuXG4gICAgYnVpbGRHcmlkQ29sdW1ucygpOiBJR3JpZENvbHVtbltdIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZDogJ25hbWUnLFxuICAgICAgICAgICAgICAgIGhlYWRlck5hbWU6ICdOYW1lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZDogJ3VzZXJuYW1lJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJOYW1lOiAnVXNlciBuYW1lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJOYW1lOiAnRW1haWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkOiAncGhvbmUnLFxuICAgICAgICAgICAgICAgIGhlYWRlck5hbWU6ICdQaG9uZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQ6ICd3ZWJzaXRlJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJOYW1lOiAnV2Vic2l0ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQ6ICdhZGRyZXNzLmNpdHknLFxuICAgICAgICAgICAgICAgIGhlYWRlck5hbWU6ICdDaXR5JyxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkOiAnY29tcGFueS5uYW1lJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJOYW1lOiAnQ29tcGFueSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGQ6ICdhZGRyZXNzLnppcGNvZGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlck5hbWU6ICdaaXAnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXR1cEdyaWRBbmRBcHBseURhdGEoKSB7XG4gICAgICAgIGNvbnN0IGdyaWRDb25maWcgPSBuZXcgR3JpZENvbmZpZygpO1xuICAgICAgICBncmlkQ29uZmlnLmNvbHVtbkRlZnMgPSB0aGlzLmJ1aWxkR3JpZENvbHVtbnMoKTtcblxuICAgICAgICB0aGlzLnVzZXJzTGlzdCA9IGF3YWl0IHRoaXMuZ2V0VXNlcnMoKTtcbiAgICAgICAgZ3JpZENvbmZpZy5kYXRhID0gdGhpcy51c2Vyc0xpc3Q7XG4gICAgICAgIGNvbnN0IGdyaWRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2dzLWdyaWQnKTtcbiAgICAgICAgaWYgKGdyaWRFbCkge1xuICAgICAgICAgICAgR3JpZEV2ZW50cy5zZXR1cEdyaWRDb25maWcoZ3JpZEVsLmdldEF0dHJpYnV0ZSgnaW5zdGFuY2UtaWQnKSwgZ3JpZENvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRVc2VycygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IHZpZXdNb2RlbDogRGVtb0hvbWUsIHRlbXBsYXRlOiByZXF1aXJlKCcuL2RlbW8taG9tZS5odG1sJykgfSIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtc3RyZXRjaFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtM1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBoLTEwMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5HZXQgc3RhcnRlZDwvaDU+XFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+U2V0dXAgPHNwYW4gY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+Z3MtZ3JpZDwvc3Bhbj4gaW4gdGhlIGNvZGUgaW4gbWludXRlcyAmIHN0YXJ0IHVzaW5nIGl0IGluIHlvdXIgcHJvamVjdC48L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWZvb3RlciBiZy13aGl0ZSB0ZXh0LXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIHJvbGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XFxcIiBocmVmPVxcXCIjL2dldC1zdGFydGVkXFxcIj5MZXQncyBnbzwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTNcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgaC0xMDBcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+VmlzaXQgRG9jczwvaDU+XFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+VmlzaXQgZG9jdW1lbnRhdGlvbiAmIGNoZWNrIGNsYXNzZXMsIGVudW1zLCBvdGhlciB0eXBlIGluZm9ybWF0aW9uLjwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyIGJnLXdoaXRlIHRleHQtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiZG9jcy9cXFwiIGNsYXNzPVxcXCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVxcXCI+TGV0J3MgZ288L2E+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0zXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGgtMTAwXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlZpZXcgZGVtbzwvaDU+XFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+U2VlIHRoZSA8c3BhbiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj5ncy1ncmlkPC9zcGFuPiBpbiBhY3Rpb24gJiB2aWV3IGZldyBjb2RlIHNuaXBwZXRzIGFsb25nLjwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyIGJnLXdoaXRlIHRleHQtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgcm9sZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcXFwiIGhyZWY9XFxcIiMvZGVtb1xcXCI+TGV0J3MgZ288L2E+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0zXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGgtMTAwXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPldoYXQgJiBXaHkgPzwvaDU+XFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+V2hhdCBpcyA8c3BhbiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj5ncy1ncmlkPC9zcGFuPiwgbGV0J3MgcmV2aWV3IGl0cyBmZWF0dXJlcyAmIHdoeSB0aGVyZSBpcyBhIG5lZWQgZm9yIGl0LjwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyIGJnLXdoaXRlIHRleHQtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgcm9sZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcXFwiIGhyZWY9XFxcIiMvd2hhdC1hbmQtd2h5XFxcIj5MZXQncyBnbzwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJjbGFzcyBEZXZFbmdhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgeyB2aWV3TW9kZWw6IERldkVuZ2FnZSwgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZGV2LWVuZ2FnZS5odG1sJykgfSIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxuICAgICAgICA8aDM+R2V0IHN0YXJ0ZWQ8L2gzPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJjbGFzcyBHZXRTdGFydGVkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgdmlld01vZGVsOiBHZXRTdGFydGVkLCB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9nZXQtc3RhcnRlZC5odG1sJykgfSIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInctNzUgcHgtMyBweS0zIHB0LW1kLTUgcGItbWQtNCBteC1hdXRvIHRleHQtY2VudGVyXFxcIj5cXG4gICAgPGgxIGNsYXNzPVxcXCJkaXNwbGF5LTJcXFwiPlxcbiAgICAgICAgPGNvZGUgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+Jmx0Z3MtZ3JpZC8mZ3Q8L2NvZGU+XFxuICAgIDwvaDE+XFxuICAgIDxwIGNsYXNzPVxcXCJsZWFkXFxcIj5cXG4gICAgICAgIEEgbmV3IDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPmdyaWQ8L3NwYW4+IGZvciBcXG4gICAgICAgIGV2b2x2aW5nIHdlYiwgZnJhbWV3b3JrIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LXNlY29uZGFyeVxcXCI+YWdub3N0aWM8L3NwYW4+LiBcXG4gICAgICAgIENvbW11bmljYXRlcyB3aXRoIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LXdhcm5pbmdcXFwiPmV2ZW50czwvc3Bhbj4uIFxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtaW5mb1xcXCI+RWFzeTwvc3Bhbj4gdG8gdXNlICYgXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnBvd2VyZnVsPC9zcGFuPiBmZWF0dXJlcy5cXG4gICAgPC9wPlxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsImNsYXNzIEdyaWRJbnRybyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IHZpZXdNb2RlbDogR3JpZEludHJvLCB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ncmlkLWludHJvLmh0bWwnKSB9OyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgcC0zIHB4LW1kLTQgbWItMyBiZy13aGl0ZSBib3JkZXItYm90dG9tIHNoYWRvdy1zbVxcXCI+XFxuICAgIDxhIHJvbGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIm15LTAgbXItbWQtYXV0byBmb250LXdlaWdodC1ub3JtYWwgaDUgdGV4dC1wcmltYXJ5IHRleHQtZGVjb3JhdGlvbi1ub25lXFxcIiBocmVmPVxcXCIjL1xcXCI+XFxuICAgICAgICA8Y29kZSBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mbHRncy1ncmlkLyZndDwvY29kZT5cXG4gICAgPC9hPlxcbiAgICA8bmF2IGNsYXNzPVxcXCJteS0yIG15LW1kLTAgbXItbWQtM1xcXCI+XFxuICAgICAgPGEgY2xhc3M9XFxcInAtMiB0ZXh0LXByaW1hcnkgdGV4dC1kZWNvcmF0aW9uLW5vbmVcXFwiIGhyZWY9XFxcIiMvd2hhdC1hbmQtd2h5XFxcIj5GZWF0dXJlczwvYT5cXG4gICAgICA8YSBjbGFzcz1cXFwicC0yIHRleHQtc3VjY2VzcyB0ZXh0LWRlY29yYXRpb24tbm9uZVxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2dhbmVzaC12ZWxsYW5raS9ncy1ncmlkXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+R2l0aHViPC9hPlxcbiAgICAgIDxhIGNsYXNzPVxcXCJwLTIgdGV4dC1kYW5nZXIgdGV4dC1kZWNvcmF0aW9uLW5vbmVcXFwiIGhyZWY9XFxcImRvY3MvXFxcIj5Eb2NzPC9hPlxcbiAgICA8L25hdj5cXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJjbGFzcyBUb3BOYXYge1xuICAgIGNvbnN0cnVjdG9yICgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgdmlld01vZGVsOiBUb3BOYXYsIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RvcC1uYXYuaHRtbCcpIH07XG5cbiIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxuICAgICAgICA8aDM+V2hhdCAmIFdoeTwvaDM+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsImNsYXNzIFdoYXRBbmRXaHkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgeyB2aWV3TW9kZWw6IFdoYXRBbmRXaHksIHRlbXBsYXRlOiByZXF1aXJlKCcuL3doYXQtd2h5Lmh0bWwnKSB9IiwiaW1wb3J0ICogYXMga28gZnJvbSAna25vY2tvdXQnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVnaXN0cnkgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50LXJlZ2lzdHJ5JztcbmltcG9ydCB7IFJvdXRlSW5mbywgUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xuXG5jbGFzcyBHcmlkQXBwVmlld01vZGVsIHtcbiAgICByb3V0ZXJIYXRjaElkID0gJ2tvUm91dGVySGF0Y2gnO1xuICAgIHJvdXRlcjogUm91dGVyO1xuICAgIHJvdXRlczogUm91dGVJbmZvW107XG4gICAgY29tcG9uZW50Vmlldzoga28uT2JzZXJ2YWJsZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBDb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckFwcENvbXBvbmVudHMoa28pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFZpZXcgPSBrby5vYnNlcnZhYmxlKCdob21lJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVJvdXRlcigpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemVSb3V0ZXIoKSB7XG4gICAgICAgIHRoaXMucm91dGVyID0gbmV3IFJvdXRlcih0aGlzLnJvdXRlckhhdGNoSWQsIHRoaXMuY29tcG9uZW50Vmlldyk7XG4gICAgICAgIHRoaXMucm91dGVyLmFkZFJvdXRlcyh0aGlzLmdldFJvdXRlcygpKTtcbiAgICB9XG5cbiAgICBnZXRSb3V0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBuZXcgUm91dGVJbmZvKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUYWc6ICdob21lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBuZXcgUm91dGVJbmZvKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJy9kZW1vJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50VGFnOiAnZGVtbydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbmV3IFJvdXRlSW5mbyhcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvZ2V0LXN0YXJ0ZWQnLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUYWc6ICdnZXQtc3RhcnRlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbmV3IFJvdXRlSW5mbyhcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvd2hhdC1hbmQtd2h5JyxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50VGFnOiAnd2hhdC1hbmQtd2h5J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgXTtcbiAgICB9XG59XG5cbmtvLmFwcGx5QmluZGluZ3MobmV3IEdyaWRBcHBWaWV3TW9kZWwoKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWRBcHAnKSk7IiwiZXhwb3J0IGNsYXNzIFJvdXRlSW5mbyB7XG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiAgICBwdWJsaWMgY29tcG9uZW50VGFnPzogc3RyaW5nO1xuICAgIHB1YmxpYyB0ZXh0Pzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoYXJnczogUm91dGVJbmZvKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IGFyZ3MucGF0aDtcbiAgICAgICAgdGhpcy5jb21wb25lbnRUYWcgPSBhcmdzLmNvbXBvbmVudFRhZztcbiAgICAgICAgdGhpcy50ZXh0ID0gYXJncy50ZXh0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XG4gICAgcHJpdmF0ZSBfcm91dGVzOiB7IFtwYXRoOiBzdHJpbmddOiBSb3V0ZUluZm8gfSA9IHt9O1xuICAgIHByaXZhdGUgX3JvdXRlckhhdGNoOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRJZDogc3RyaW5nLCBwcml2YXRlIGNvbXBvbmVudFZpZXc6IGFueSkge1xuICAgICAgICB0aGlzLl9yb3V0ZXJIYXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gICAgICAgIHRoaXMubGlzdGVuRm9yUGF0aENoYW5nZSgpO1xuICAgIH1cblxuICAgIGFkZFJvdXRlKHJvdXRlSW5mbzogUm91dGVJbmZvKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlc1tyb3V0ZUluZm8ucGF0aF0gPSByb3V0ZUluZm87XG4gICAgfVxuXG4gICAgYWRkUm91dGVzKHJvdXRlSW5mb0NvbGxlY3Rpb246IFJvdXRlSW5mb1tdKSB7XG4gICAgICAgIHJvdXRlSW5mb0NvbGxlY3Rpb24uZm9yRWFjaChySSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXNbckkucGF0aF0gPSBySTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUm91dGUocGF0aDogc3RyaW5nKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9yb3V0ZXNbcGF0aF07XG4gICAgfVxuXG4gICAgb25Sb3V0ZUNoYW5nZSgpIHtcbiAgICAgICAgLy8gQ3VycmVudCByb3V0ZSB1cmwgKGdldHRpbmcgcmlkIG9mICcjJyBpbiBoYXNoIGFzIHdlbGwpXG4gICAgICAgIGNvbnN0IHVybCA9IGxvY2F0aW9uLmhhc2guc2xpY2UoMSkgfHwgJy8nO1xuICAgICAgICAvLyBHZXQgcm91dGUgYnkgdXJsXG4gICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHRoaXMuX3JvdXRlc1t1cmxdO1xuXG4gICAgICAgIGlmICh0aGlzLl9yb3V0ZXJIYXRjaCAmJiB0aGlzLmlzVmFsaWRSb3V0ZUluZm8ocm91dGVJbmZvKSkge1xuICAgICAgICAgICAgaWYgKHJvdXRlSW5mby50ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVySGF0Y2guaW5uZXJUZXh0ID0gcm91dGVJbmZvLnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudFZpZXcocm91dGVJbmZvLmNvbXBvbmVudFRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1ZhbGlkUm91dGVJbmZvKHJvdXRlSW5mbzogUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByb3V0ZUluZm8gJiYgKHJvdXRlSW5mby5jb21wb25lbnRUYWcgfHwgcm91dGVJbmZvLnRleHQpO1xuICAgIH1cblxuICAgIGxpc3RlbkZvclBhdGhDaGFuZ2UoKSB7XG4gICAgICAgIC8vIExpc3RlbiBvbiBoYXNoIGNoYW5nZTpcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7IHRoaXMub25Sb3V0ZUNoYW5nZSgpIH0pO1xuXG4gICAgICAgIC8vIExpc3RlbiBvbiBwYWdlIGxvYWQ6XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4geyB0aGlzLm9uUm91dGVDaGFuZ2UoKSB9KTtcbiAgICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLyohXG4gKiBLbm9ja291dCBKYXZhU2NyaXB0IGxpYnJhcnkgdjMuNS4xXG4gKiAoYykgVGhlIEtub2Nrb3V0LmpzIHRlYW0gLSBodHRwOi8va25vY2tvdXRqcy5jb20vXG4gKiBMaWNlbnNlOiBNSVQgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuICovXG5cbihmdW5jdGlvbigpIHsoZnVuY3Rpb24obil7dmFyIEE9dGhpc3x8KDAsZXZhbCkoXCJ0aGlzXCIpLHc9QS5kb2N1bWVudCxSPUEubmF2aWdhdG9yLHY9QS5qUXVlcnksSD1BLkpTT047dnx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBqUXVlcnl8fCh2PWpRdWVyeSk7KGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIixcInJlcXVpcmVcIl0sbik6XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9uKG1vZHVsZS5leHBvcnRzfHxleHBvcnRzKTpuKEEua289e30pfSkoZnVuY3Rpb24oUyxUKXtmdW5jdGlvbiBLKGEsYyl7cmV0dXJuIG51bGw9PT1hfHx0eXBlb2YgYSBpbiBXP2E9PT1jOiExfWZ1bmN0aW9uIFgoYixjKXt2YXIgZDtyZXR1cm4gZnVuY3Rpb24oKXtkfHwoZD1hLmEuc2V0VGltZW91dChmdW5jdGlvbigpe2Q9bjtiKCl9LGMpKX19ZnVuY3Rpb24gWShiLGMpe3ZhciBkO3JldHVybiBmdW5jdGlvbigpe2NsZWFyVGltZW91dChkKTtcbmQ9YS5hLnNldFRpbWVvdXQoYixjKX19ZnVuY3Rpb24gWihhLGMpe2MmJlwiY2hhbmdlXCIhPT1jP1wiYmVmb3JlQ2hhbmdlXCI9PT1jP3RoaXMucGMoYSk6dGhpcy5nYihhLGMpOnRoaXMucWMoYSl9ZnVuY3Rpb24gYWEoYSxjKXtudWxsIT09YyYmYy5zJiZjLnMoKX1mdW5jdGlvbiBiYShhLGMpe3ZhciBkPXRoaXMucWQsZT1kW3JdO2UucmF8fCh0aGlzLlFiJiZ0aGlzLm1iW2NdPyhkLnVjKGMsYSx0aGlzLm1iW2NdKSx0aGlzLm1iW2NdPW51bGwsLS10aGlzLlFiKTplLklbY118fGQudWMoYyxhLGUuSj97ZGE6YX06ZC4kYyhhKSksYS5KYSYmYS5nZCgpKX12YXIgYT1cInVuZGVmaW5lZFwiIT09dHlwZW9mIFM/Uzp7fTthLmI9ZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9Yi5zcGxpdChcIi5cIiksZT1hLGY9MDtmPGQubGVuZ3RoLTE7ZisrKWU9ZVtkW2ZdXTtlW2RbZC5sZW5ndGgtMV1dPWN9O2EuTD1mdW5jdGlvbihhLGMsZCl7YVtjXT1kfTthLnZlcnNpb249XCIzLjUuMVwiO2EuYihcInZlcnNpb25cIixcbmEudmVyc2lvbik7YS5vcHRpb25zPXtkZWZlclVwZGF0ZXM6ITEsdXNlT25seU5hdGl2ZUV2ZW50czohMSxmb3JlYWNoSGlkZXNEZXN0cm95ZWQ6ITF9O2EuYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSxiKXtmb3IodmFyIGMgaW4gYSlmLmNhbGwoYSxjKSYmYihjLGFbY10pfWZ1bmN0aW9uIGMoYSxiKXtpZihiKWZvcih2YXIgYyBpbiBiKWYuY2FsbChiLGMpJiYoYVtjXT1iW2NdKTtyZXR1cm4gYX1mdW5jdGlvbiBkKGEsYil7YS5fX3Byb3RvX189YjtyZXR1cm4gYX1mdW5jdGlvbiBlKGIsYyxkLGUpe3ZhciBsPWJbY10ubWF0Y2gocSl8fFtdO2EuYS5EKGQubWF0Y2gocSksZnVuY3Rpb24oYil7YS5hLk5hKGwsYixlKX0pO2JbY109bC5qb2luKFwiIFwiKX12YXIgZj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LGc9e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5LGg9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCxtPXt9LGs9e307bVtSJiYvRmlyZWZveFxcLzIvaS50ZXN0KFIudXNlckFnZW50KT9cblwiS2V5Ym9hcmRFdmVudFwiOlwiVUlFdmVudHNcIl09W1wia2V5dXBcIixcImtleWRvd25cIixcImtleXByZXNzXCJdO20uTW91c2VFdmVudHM9XCJjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiLnNwbGl0KFwiIFwiKTtiKG0sZnVuY3Rpb24oYSxiKXtpZihiLmxlbmd0aClmb3IodmFyIGM9MCxkPWIubGVuZ3RoO2M8ZDtjKyspa1tiW2NdXT1hfSk7dmFyIGw9e3Byb3BlcnR5Y2hhbmdlOiEwfSxwPXcmJmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTMsYj13LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYz1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaVwiKTtiLmlubmVySFRNTD1cIlxceDNjIS0tW2lmIGd0IElFIFwiKyArK2ErXCJdPjxpPjwvaT48IVtlbmRpZl0tLVxceDNlXCIsY1swXTspO3JldHVybiA0PGE/YTpufSgpLHE9L1xcUysvZyx0O3JldHVybntKYzpbXCJhdXRoZW50aWNpdHlfdG9rZW5cIiwvXl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuKF8uKik/JC9dLFxuRDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWIuY2FsbChjLGFbZF0sZCxhKX0sQTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZj9mdW5jdGlvbihhLGIpe3JldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGEsYil9OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxMYjpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWlmKGIuY2FsbChjLGFbZF0sZCxhKSlyZXR1cm4gYVtkXTtyZXR1cm4gbn0sUGE6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuQShiLGMpOzA8ZD9iLnNwbGljZShkLDEpOjA9PT1kJiZiLnNoaWZ0KCl9LHdjOmZ1bmN0aW9uKGIpe3ZhciBjPVtdO2ImJmEuYS5EKGIsZnVuY3Rpb24oYil7MD5hLmEuQShjLGIpJiZjLnB1c2goYil9KTtyZXR1cm4gY30sTWI6ZnVuY3Rpb24oYSxcbmIsYyl7dmFyIGQ9W107aWYoYSlmb3IodmFyIGU9MCxsPWEubGVuZ3RoO2U8bDtlKyspZC5wdXNoKGIuY2FsbChjLGFbZV0sZSkpO3JldHVybiBkfSxqYjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9W107aWYoYSlmb3IodmFyIGU9MCxsPWEubGVuZ3RoO2U8bDtlKyspYi5jYWxsKGMsYVtlXSxlKSYmZC5wdXNoKGFbZV0pO3JldHVybiBkfSxOYjpmdW5jdGlvbihhLGIpe2lmKGIgaW5zdGFuY2VvZiBBcnJheSlhLnB1c2guYXBwbHkoYSxiKTtlbHNlIGZvcih2YXIgYz0wLGQ9Yi5sZW5ndGg7YzxkO2MrKylhLnB1c2goYltjXSk7cmV0dXJuIGF9LE5hOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmEuQShhLmEuYmMoYiksYyk7MD5lP2QmJmIucHVzaChjKTpkfHxiLnNwbGljZShlLDEpfSxCYTpnLGV4dGVuZDpjLHNldFByb3RvdHlwZU9mOmQsQWI6Zz9kOmMsUDpiLEdhOmZ1bmN0aW9uKGEsYixjKXtpZighYSlyZXR1cm4gYTt2YXIgZD17fSxlO2ZvcihlIGluIGEpZi5jYWxsKGEsZSkmJihkW2VdPVxuYi5jYWxsKGMsYVtlXSxlLGEpKTtyZXR1cm4gZH0sVGI6ZnVuY3Rpb24oYil7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlTm9kZShiLmZpcnN0Q2hpbGQpfSxZYjpmdW5jdGlvbihiKXtiPWEuYS5sYShiKTtmb3IodmFyIGM9KGJbMF0mJmJbMF0ub3duZXJEb2N1bWVudHx8dykuY3JlYXRlRWxlbWVudChcImRpdlwiKSxkPTAsZT1iLmxlbmd0aDtkPGU7ZCsrKWMuYXBwZW5kQ2hpbGQoYS5vYShiW2RdKSk7cmV0dXJuIGN9LENhOmZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aCxsPVtdO2Q8ZTtkKyspe3ZhciBrPWJbZF0uY2xvbmVOb2RlKCEwKTtsLnB1c2goYz9hLm9hKGspOmspfXJldHVybiBsfSx2YTpmdW5jdGlvbihiLGMpe2EuYS5UYihiKTtpZihjKWZvcih2YXIgZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKyliLmFwcGVuZENoaWxkKGNbZF0pfSxYYzpmdW5jdGlvbihiLGMpe3ZhciBkPWIubm9kZVR5cGU/W2JdOmI7aWYoMDxkLmxlbmd0aCl7Zm9yKHZhciBlPWRbMF0sXG5sPWUucGFyZW50Tm9kZSxrPTAsZj1jLmxlbmd0aDtrPGY7aysrKWwuaW5zZXJ0QmVmb3JlKGNba10sZSk7az0wO2ZvcihmPWQubGVuZ3RoO2s8ZjtrKyspYS5yZW1vdmVOb2RlKGRba10pfX0sVWE6ZnVuY3Rpb24oYSxiKXtpZihhLmxlbmd0aCl7Zm9yKGI9OD09PWIubm9kZVR5cGUmJmIucGFyZW50Tm9kZXx8YjthLmxlbmd0aCYmYVswXS5wYXJlbnROb2RlIT09YjspYS5zcGxpY2UoMCwxKTtmb3IoOzE8YS5sZW5ndGgmJmFbYS5sZW5ndGgtMV0ucGFyZW50Tm9kZSE9PWI7KWEubGVuZ3RoLS07aWYoMTxhLmxlbmd0aCl7dmFyIGM9YVswXSxkPWFbYS5sZW5ndGgtMV07Zm9yKGEubGVuZ3RoPTA7YyE9PWQ7KWEucHVzaChjKSxjPWMubmV4dFNpYmxpbmc7YS5wdXNoKGQpfX1yZXR1cm4gYX0sWmM6ZnVuY3Rpb24oYSxiKXs3PnA/YS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLGIpOmEuc2VsZWN0ZWQ9Yn0sRGI6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hfHxhPT09bj9cIlwiOmEudHJpbT9cbmEudHJpbSgpOmEudG9TdHJpbmcoKS5yZXBsYWNlKC9eW1xcc1xceGEwXSt8W1xcc1xceGEwXSskL2csXCJcIil9LFVkOmZ1bmN0aW9uKGEsYil7YT1hfHxcIlwiO3JldHVybiBiLmxlbmd0aD5hLmxlbmd0aD8hMTphLnN1YnN0cmluZygwLGIubGVuZ3RoKT09PWJ9LHZkOmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuITA7aWYoMTE9PT1hLm5vZGVUeXBlKXJldHVybiExO2lmKGIuY29udGFpbnMpcmV0dXJuIGIuY29udGFpbnMoMSE9PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO2lmKGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24pcmV0dXJuIDE2PT0oYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKSYxNik7Zm9yKDthJiZhIT1iOylhPWEucGFyZW50Tm9kZTtyZXR1cm4hIWF9LFNiOmZ1bmN0aW9uKGIpe3JldHVybiBhLmEudmQoYixiLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KX0sa2Q6ZnVuY3Rpb24oYil7cmV0dXJuISFhLmEuTGIoYixhLmEuU2IpfSxSOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZcbmEudGFnTmFtZSYmYS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9LEFjOmZ1bmN0aW9uKGIpe3JldHVybiBhLm9uRXJyb3I/ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIGIuYXBwbHkodGhpcyxhcmd1bWVudHMpfWNhdGNoKGMpe3Rocm93IGEub25FcnJvciYmYS5vbkVycm9yKGMpLGM7fX06Yn0sc2V0VGltZW91dDpmdW5jdGlvbihiLGMpe3JldHVybiBzZXRUaW1lb3V0KGEuYS5BYyhiKSxjKX0sR2M6ZnVuY3Rpb24oYil7c2V0VGltZW91dChmdW5jdGlvbigpe2Eub25FcnJvciYmYS5vbkVycm9yKGIpO3Rocm93IGI7fSwwKX0sQjpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5hLkFjKGQpO2Q9bFtjXTtpZihhLm9wdGlvbnMudXNlT25seU5hdGl2ZUV2ZW50c3x8ZHx8IXYpaWYoZHx8XCJmdW5jdGlvblwiIT10eXBlb2YgYi5hZGRFdmVudExpc3RlbmVyKWlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmF0dGFjaEV2ZW50KXt2YXIgaz1mdW5jdGlvbihhKXtlLmNhbGwoYixhKX0sZj1cIm9uXCIrYztiLmF0dGFjaEV2ZW50KGYsXG5rKTthLmEuSy56YShiLGZ1bmN0aW9uKCl7Yi5kZXRhY2hFdmVudChmLGspfSl9ZWxzZSB0aHJvdyBFcnJvcihcIkJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGFkZEV2ZW50TGlzdGVuZXIgb3IgYXR0YWNoRXZlbnRcIik7ZWxzZSBiLmFkZEV2ZW50TGlzdGVuZXIoYyxlLCExKTtlbHNlIHR8fCh0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHYoYikub24/XCJvblwiOlwiYmluZFwiKSx2KGIpW3RdKGMsZSl9LEZiOmZ1bmN0aW9uKGIsYyl7aWYoIWJ8fCFiLm5vZGVUeXBlKXRocm93IEVycm9yKFwiZWxlbWVudCBtdXN0IGJlIGEgRE9NIG5vZGUgd2hlbiBjYWxsaW5nIHRyaWdnZXJFdmVudFwiKTt2YXIgZDtcImlucHV0XCI9PT1hLmEuUihiKSYmYi50eXBlJiZcImNsaWNrXCI9PWMudG9Mb3dlckNhc2UoKT8oZD1iLnR5cGUsZD1cImNoZWNrYm94XCI9PWR8fFwicmFkaW9cIj09ZCk6ZD0hMTtpZihhLm9wdGlvbnMudXNlT25seU5hdGl2ZUV2ZW50c3x8IXZ8fGQpaWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygdy5jcmVhdGVFdmVudClpZihcImZ1bmN0aW9uXCI9PVxudHlwZW9mIGIuZGlzcGF0Y2hFdmVudClkPXcuY3JlYXRlRXZlbnQoa1tjXXx8XCJIVE1MRXZlbnRzXCIpLGQuaW5pdEV2ZW50KGMsITAsITAsQSwwLDAsMCwwLDAsITEsITEsITEsITEsMCxiKSxiLmRpc3BhdGNoRXZlbnQoZCk7ZWxzZSB0aHJvdyBFcnJvcihcIlRoZSBzdXBwbGllZCBlbGVtZW50IGRvZXNuJ3Qgc3VwcG9ydCBkaXNwYXRjaEV2ZW50XCIpO2Vsc2UgaWYoZCYmYi5jbGljayliLmNsaWNrKCk7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5maXJlRXZlbnQpYi5maXJlRXZlbnQoXCJvblwiK2MpO2Vsc2UgdGhyb3cgRXJyb3IoXCJCcm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0cmlnZ2VyaW5nIGV2ZW50c1wiKTtlbHNlIHYoYikudHJpZ2dlcihjKX0sZjpmdW5jdGlvbihiKXtyZXR1cm4gYS5PKGIpP2IoKTpifSxiYzpmdW5jdGlvbihiKXtyZXR1cm4gYS5PKGIpP2IudigpOmJ9LEViOmZ1bmN0aW9uKGIsYyxkKXt2YXIgbDtjJiYoXCJvYmplY3RcIj09PXR5cGVvZiBiLmNsYXNzTGlzdD9cbihsPWIuY2xhc3NMaXN0W2Q/XCJhZGRcIjpcInJlbW92ZVwiXSxhLmEuRChjLm1hdGNoKHEpLGZ1bmN0aW9uKGEpe2wuY2FsbChiLmNsYXNzTGlzdCxhKX0pKTpcInN0cmluZ1wiPT09dHlwZW9mIGIuY2xhc3NOYW1lLmJhc2VWYWw/ZShiLmNsYXNzTmFtZSxcImJhc2VWYWxcIixjLGQpOmUoYixcImNsYXNzTmFtZVwiLGMsZCkpfSxCYjpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5mKGMpO2lmKG51bGw9PT1kfHxkPT09bilkPVwiXCI7dmFyIGU9YS5oLmZpcnN0Q2hpbGQoYik7IWV8fDMhPWUubm9kZVR5cGV8fGEuaC5uZXh0U2libGluZyhlKT9hLmgudmEoYixbYi5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGQpXSk6ZS5kYXRhPWQ7YS5hLkFkKGIpfSxZYzpmdW5jdGlvbihhLGIpe2EubmFtZT1iO2lmKDc+PXApdHJ5e3ZhciBjPWEubmFtZS5yZXBsYWNlKC9bJjw+J1wiXS9nLGZ1bmN0aW9uKGEpe3JldHVyblwiJiNcIithLmNoYXJDb2RlQXQoMCkrXCI7XCJ9KTthLm1lcmdlQXR0cmlidXRlcyh3LmNyZWF0ZUVsZW1lbnQoXCI8aW5wdXQgbmFtZT0nXCIrXG5jK1wiJy8+XCIpLCExKX1jYXRjaChkKXt9fSxBZDpmdW5jdGlvbihhKXs5PD1wJiYoYT0xPT1hLm5vZGVUeXBlP2E6YS5wYXJlbnROb2RlLGEuc3R5bGUmJihhLnN0eWxlLnpvb209YS5zdHlsZS56b29tKSl9LHdkOmZ1bmN0aW9uKGEpe2lmKHApe3ZhciBiPWEuc3R5bGUud2lkdGg7YS5zdHlsZS53aWR0aD0wO2Euc3R5bGUud2lkdGg9Yn19LFBkOmZ1bmN0aW9uKGIsYyl7Yj1hLmEuZihiKTtjPWEuYS5mKGMpO2Zvcih2YXIgZD1bXSxlPWI7ZTw9YztlKyspZC5wdXNoKGUpO3JldHVybiBkfSxsYTpmdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKyliLnB1c2goYVtjXSk7cmV0dXJuIGJ9LERhOmZ1bmN0aW9uKGEpe3JldHVybiBoP1N5bWJvbChhKTphfSxaZDo2PT09cCwkZDo3PT09cCxXOnAsTGM6ZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9YS5hLmxhKGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSkuY29uY2F0KGEuYS5sYShiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGV4dGFyZWFcIikpKSxcbmU9XCJzdHJpbmdcIj09dHlwZW9mIGM/ZnVuY3Rpb24oYSl7cmV0dXJuIGEubmFtZT09PWN9OmZ1bmN0aW9uKGEpe3JldHVybiBjLnRlc3QoYS5uYW1lKX0sbD1bXSxrPWQubGVuZ3RoLTE7MDw9aztrLS0pZShkW2tdKSYmbC5wdXNoKGRba10pO3JldHVybiBsfSxOZDpmdW5jdGlvbihiKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGI9YS5hLkRiKGIpKT9IJiZILnBhcnNlP0gucGFyc2UoYik6KG5ldyBGdW5jdGlvbihcInJldHVybiBcIitiKSkoKTpudWxsfSxoYzpmdW5jdGlvbihiLGMsZCl7aWYoIUh8fCFILnN0cmluZ2lmeSl0aHJvdyBFcnJvcihcIkNhbm5vdCBmaW5kIEpTT04uc3RyaW5naWZ5KCkuIFNvbWUgYnJvd3NlcnMgKGUuZy4sIElFIDwgOCkgZG9uJ3Qgc3VwcG9ydCBpdCBuYXRpdmVseSwgYnV0IHlvdSBjYW4gb3ZlcmNvbWUgdGhpcyBieSBhZGRpbmcgYSBzY3JpcHQgcmVmZXJlbmNlIHRvIGpzb24yLmpzLCBkb3dubG9hZGFibGUgZnJvbSBodHRwOi8vd3d3Lmpzb24ub3JnL2pzb24yLmpzXCIpO1xucmV0dXJuIEguc3RyaW5naWZ5KGEuYS5mKGIpLGMsZCl9LE9kOmZ1bmN0aW9uKGMsZCxlKXtlPWV8fHt9O3ZhciBsPWUucGFyYW1zfHx7fSxrPWUuaW5jbHVkZUZpZWxkc3x8dGhpcy5KYyxmPWM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGMmJlwiZm9ybVwiPT09YS5hLlIoYykpZm9yKHZhciBmPWMuYWN0aW9uLGg9ay5sZW5ndGgtMTswPD1oO2gtLSlmb3IodmFyIGc9YS5hLkxjKGMsa1toXSksbT1nLmxlbmd0aC0xOzA8PW07bS0tKWxbZ1ttXS5uYW1lXT1nW21dLnZhbHVlO2Q9YS5hLmYoZCk7dmFyIHA9dy5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtwLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7cC5hY3Rpb249ZjtwLm1ldGhvZD1cInBvc3RcIjtmb3IodmFyIHEgaW4gZCljPXcuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGMudHlwZT1cImhpZGRlblwiLGMubmFtZT1xLGMudmFsdWU9YS5hLmhjKGEuYS5mKGRbcV0pKSxwLmFwcGVuZENoaWxkKGMpO2IobCxmdW5jdGlvbihhLGIpe3ZhciBjPXcuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuYy50eXBlPVwiaGlkZGVuXCI7Yy5uYW1lPWE7Yy52YWx1ZT1iO3AuYXBwZW5kQ2hpbGQoYyl9KTt3LmJvZHkuYXBwZW5kQ2hpbGQocCk7ZS5zdWJtaXR0ZXI/ZS5zdWJtaXR0ZXIocCk6cC5zdWJtaXQoKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApfSwwKX19fSgpO2EuYihcInV0aWxzXCIsYS5hKTthLmIoXCJ1dGlscy5hcnJheUZvckVhY2hcIixhLmEuRCk7YS5iKFwidXRpbHMuYXJyYXlGaXJzdFwiLGEuYS5MYik7YS5iKFwidXRpbHMuYXJyYXlGaWx0ZXJcIixhLmEuamIpO2EuYihcInV0aWxzLmFycmF5R2V0RGlzdGluY3RWYWx1ZXNcIixhLmEud2MpO2EuYihcInV0aWxzLmFycmF5SW5kZXhPZlwiLGEuYS5BKTthLmIoXCJ1dGlscy5hcnJheU1hcFwiLGEuYS5NYik7YS5iKFwidXRpbHMuYXJyYXlQdXNoQWxsXCIsYS5hLk5iKTthLmIoXCJ1dGlscy5hcnJheVJlbW92ZUl0ZW1cIixhLmEuUGEpO2EuYihcInV0aWxzLmNsb25lTm9kZXNcIixhLmEuQ2EpO2EuYihcInV0aWxzLmNyZWF0ZVN5bWJvbE9yU3RyaW5nXCIsXG5hLmEuRGEpO2EuYihcInV0aWxzLmV4dGVuZFwiLGEuYS5leHRlbmQpO2EuYihcInV0aWxzLmZpZWxkc0luY2x1ZGVkV2l0aEpzb25Qb3N0XCIsYS5hLkpjKTthLmIoXCJ1dGlscy5nZXRGb3JtRmllbGRzXCIsYS5hLkxjKTthLmIoXCJ1dGlscy5vYmplY3RNYXBcIixhLmEuR2EpO2EuYihcInV0aWxzLnBlZWtPYnNlcnZhYmxlXCIsYS5hLmJjKTthLmIoXCJ1dGlscy5wb3N0SnNvblwiLGEuYS5PZCk7YS5iKFwidXRpbHMucGFyc2VKc29uXCIsYS5hLk5kKTthLmIoXCJ1dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlclwiLGEuYS5CKTthLmIoXCJ1dGlscy5zdHJpbmdpZnlKc29uXCIsYS5hLmhjKTthLmIoXCJ1dGlscy5yYW5nZVwiLGEuYS5QZCk7YS5iKFwidXRpbHMudG9nZ2xlRG9tTm9kZUNzc0NsYXNzXCIsYS5hLkViKTthLmIoXCJ1dGlscy50cmlnZ2VyRXZlbnRcIixhLmEuRmIpO2EuYihcInV0aWxzLnVud3JhcE9ic2VydmFibGVcIixhLmEuZik7YS5iKFwidXRpbHMub2JqZWN0Rm9yRWFjaFwiLGEuYS5QKTthLmIoXCJ1dGlscy5hZGRPclJlbW92ZUl0ZW1cIixcbmEuYS5OYSk7YS5iKFwidXRpbHMuc2V0VGV4dENvbnRlbnRcIixhLmEuQmIpO2EuYihcInVud3JhcFwiLGEuYS5mKTtGdW5jdGlvbi5wcm90b3R5cGUuYmluZHx8KEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGEpe3ZhciBjPXRoaXM7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGMuYXBwbHkoYSxhcmd1bWVudHMpfTt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9ZC5zbGljZSgwKTtlLnB1c2guYXBwbHkoZSxhcmd1bWVudHMpO3JldHVybiBjLmFwcGx5KGEsZSl9fSk7YS5hLmc9bmV3IGZ1bmN0aW9uKCl7dmFyIGI9MCxjPVwiX19rb19fXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksZD17fSxlLGY7YS5hLlc/KGU9ZnVuY3Rpb24oYSxlKXt2YXIgZj1hW2NdO2lmKCFmfHxcIm51bGxcIj09PWZ8fCFkW2ZdKXtpZighZSlyZXR1cm4gbjtmPWFbY109XCJrb1wiK2IrKztkW2ZdPVxue319cmV0dXJuIGRbZl19LGY9ZnVuY3Rpb24oYSl7dmFyIGI9YVtjXTtyZXR1cm4gYj8oZGVsZXRlIGRbYl0sYVtjXT1udWxsLCEwKTohMX0pOihlPWZ1bmN0aW9uKGEsYil7dmFyIGQ9YVtjXTshZCYmYiYmKGQ9YVtjXT17fSk7cmV0dXJuIGR9LGY9ZnVuY3Rpb24oYSl7cmV0dXJuIGFbY10/KGRlbGV0ZSBhW2NdLCEwKTohMX0pO3JldHVybntnZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1lKGEsITEpO3JldHVybiBjJiZjW2JdfSxzZXQ6ZnVuY3Rpb24oYSxiLGMpeyhhPWUoYSxjIT09bikpJiYoYVtiXT1jKX0sVWI6ZnVuY3Rpb24oYSxiLGMpe2E9ZShhLCEwKTtyZXR1cm4gYVtiXXx8KGFbYl09Yyl9LGNsZWFyOmYsWjpmdW5jdGlvbigpe3JldHVybiBiKysgK2N9fX07YS5iKFwidXRpbHMuZG9tRGF0YVwiLGEuYS5nKTthLmIoXCJ1dGlscy5kb21EYXRhLmNsZWFyXCIsYS5hLmcuY2xlYXIpO2EuYS5LPW5ldyBmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjKXt2YXIgZD1hLmEuZy5nZXQoYixlKTtcbmQ9PT1uJiZjJiYoZD1bXSxhLmEuZy5zZXQoYixlLGQpKTtyZXR1cm4gZH1mdW5jdGlvbiBjKGMpe3ZhciBlPWIoYywhMSk7aWYoZSlmb3IodmFyIGU9ZS5zbGljZSgwKSxrPTA7azxlLmxlbmd0aDtrKyspZVtrXShjKTthLmEuZy5jbGVhcihjKTthLmEuSy5jbGVhbkV4dGVybmFsRGF0YShjKTtnW2Mubm9kZVR5cGVdJiZkKGMuY2hpbGROb2RlcywhMCl9ZnVuY3Rpb24gZChiLGQpe2Zvcih2YXIgZT1bXSxsLGY9MDtmPGIubGVuZ3RoO2YrKylpZighZHx8OD09PWJbZl0ubm9kZVR5cGUpaWYoYyhlW2UubGVuZ3RoXT1sPWJbZl0pLGJbZl0hPT1sKWZvcig7Zi0tJiYtMT09YS5hLkEoZSxiW2ZdKTspO312YXIgZT1hLmEuZy5aKCksZj17MTohMCw4OiEwLDk6ITB9LGc9ezE6ITAsOTohMH07cmV0dXJue3phOmZ1bmN0aW9uKGEsYyl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgYyl0aHJvdyBFcnJvcihcIkNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtiKGEsITApLnB1c2goYyl9LHliOmZ1bmN0aW9uKGMsXG5kKXt2YXIgZj1iKGMsITEpO2YmJihhLmEuUGEoZixkKSwwPT1mLmxlbmd0aCYmYS5hLmcuc2V0KGMsZSxuKSl9LG9hOmZ1bmN0aW9uKGIpe2EudS5HKGZ1bmN0aW9uKCl7ZltiLm5vZGVUeXBlXSYmKGMoYiksZ1tiLm5vZGVUeXBlXSYmZChiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSkpfSk7cmV0dXJuIGJ9LHJlbW92ZU5vZGU6ZnVuY3Rpb24oYil7YS5vYShiKTtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKX0sY2xlYW5FeHRlcm5hbERhdGE6ZnVuY3Rpb24oYSl7diYmXCJmdW5jdGlvblwiPT10eXBlb2Ygdi5jbGVhbkRhdGEmJnYuY2xlYW5EYXRhKFthXSl9fX07YS5vYT1hLmEuSy5vYTthLnJlbW92ZU5vZGU9YS5hLksucmVtb3ZlTm9kZTthLmIoXCJjbGVhbk5vZGVcIixhLm9hKTthLmIoXCJyZW1vdmVOb2RlXCIsYS5yZW1vdmVOb2RlKTthLmIoXCJ1dGlscy5kb21Ob2RlRGlzcG9zYWxcIixhLmEuSyk7YS5iKFwidXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFja1wiLFxuYS5hLksuemEpO2EuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbC5yZW1vdmVEaXNwb3NlQ2FsbGJhY2tcIixhLmEuSy55Yik7KGZ1bmN0aW9uKCl7dmFyIGI9WzAsXCJcIixcIlwiXSxjPVsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sZD1bMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLGU9WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sZj17dGhlYWQ6Yyx0Ym9keTpjLHRmb290OmMsdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpkLHRoOmQsb3B0aW9uOmUsb3B0Z3JvdXA6ZX0sZz04Pj1hLmEuVzthLmEudWE9ZnVuY3Rpb24oYyxkKXt2YXIgZTtpZih2KWlmKHYucGFyc2VIVE1MKWU9di5wYXJzZUhUTUwoYyxkKXx8W107ZWxzZXtpZigoZT12LmNsZWFuKFtjXSxkKSkmJmVbMF0pe2Zvcih2YXIgbD1lWzBdO2wucGFyZW50Tm9kZSYmMTEhPT1sLnBhcmVudE5vZGUubm9kZVR5cGU7KWw9bC5wYXJlbnROb2RlO1xubC5wYXJlbnROb2RlJiZsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobCl9fWVsc2V7KGU9ZCl8fChlPXcpO3ZhciBsPWUucGFyZW50V2luZG93fHxlLmRlZmF1bHRWaWV3fHxBLHA9YS5hLkRiKGMpLnRvTG93ZXJDYXNlKCkscT1lLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdDt0PShwPXAubWF0Y2goL14oPzpcXHgzYyEtLS4qPy0tXFx4M2VcXHMqPykqPzwoW2Etel0rKVtcXHM+XS8pKSYmZltwWzFdXXx8YjtwPXRbMF07dD1cImlnbm9yZWQ8ZGl2PlwiK3RbMV0rYyt0WzJdK1wiPC9kaXY+XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgbC5pbm5lclNoaXY/cS5hcHBlbmRDaGlsZChsLmlubmVyU2hpdih0KSk6KGcmJmUuYm9keS5hcHBlbmRDaGlsZChxKSxxLmlubmVySFRNTD10LGcmJnEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChxKSk7Zm9yKDtwLS07KXE9cS5sYXN0Q2hpbGQ7ZT1hLmEubGEocS5sYXN0Q2hpbGQuY2hpbGROb2Rlcyl9cmV0dXJuIGV9O2EuYS5NZD1mdW5jdGlvbihiLGMpe3ZhciBkPWEuYS51YShiLFxuYyk7cmV0dXJuIGQubGVuZ3RoJiZkWzBdLnBhcmVudEVsZW1lbnR8fGEuYS5ZYihkKX07YS5hLmZjPWZ1bmN0aW9uKGIsYyl7YS5hLlRiKGIpO2M9YS5hLmYoYyk7aWYobnVsbCE9PWMmJmMhPT1uKWlmKFwic3RyaW5nXCIhPXR5cGVvZiBjJiYoYz1jLnRvU3RyaW5nKCkpLHYpdihiKS5odG1sKGMpO2Vsc2UgZm9yKHZhciBkPWEuYS51YShjLGIub3duZXJEb2N1bWVudCksZT0wO2U8ZC5sZW5ndGg7ZSsrKWIuYXBwZW5kQ2hpbGQoZFtlXSl9fSkoKTthLmIoXCJ1dGlscy5wYXJzZUh0bWxGcmFnbWVudFwiLGEuYS51YSk7YS5iKFwidXRpbHMuc2V0SHRtbFwiLGEuYS5mYyk7YS5hYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYyxlKXtpZihjKWlmKDg9PWMubm9kZVR5cGUpe3ZhciBmPWEuYWEuVWMoYy5ub2RlVmFsdWUpO251bGwhPWYmJmUucHVzaCh7dWQ6YyxLZDpmfSl9ZWxzZSBpZigxPT1jLm5vZGVUeXBlKWZvcih2YXIgZj0wLGc9Yy5jaGlsZE5vZGVzLGg9Zy5sZW5ndGg7ZjxoO2YrKyliKGdbZl0sXG5lKX12YXIgYz17fTtyZXR1cm57WGI6ZnVuY3Rpb24oYSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgYSl0aHJvdyBFcnJvcihcIllvdSBjYW4gb25seSBwYXNzIGEgZnVuY3Rpb24gdG8ga28ubWVtb2l6YXRpb24ubWVtb2l6ZSgpXCIpO3ZhciBiPSg0Mjk0OTY3Mjk2KigxK01hdGgucmFuZG9tKCkpfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSkrKDQyOTQ5NjcyOTYqKDErTWF0aC5yYW5kb20oKSl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtjW2JdPWE7cmV0dXJuXCJcXHgzYyEtLVtrb19tZW1vOlwiK2IrXCJdLS1cXHgzZVwifSxiZDpmdW5jdGlvbihhLGIpe3ZhciBmPWNbYV07aWYoZj09PW4pdGhyb3cgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGFueSBtZW1vIHdpdGggSUQgXCIrYStcIi4gUGVyaGFwcyBpdCdzIGFscmVhZHkgYmVlbiB1bm1lbW9pemVkLlwiKTt0cnl7cmV0dXJuIGYuYXBwbHkobnVsbCxifHxbXSksITB9ZmluYWxseXtkZWxldGUgY1thXX19LGNkOmZ1bmN0aW9uKGMsZSl7dmFyIGY9XG5bXTtiKGMsZik7Zm9yKHZhciBnPTAsaD1mLmxlbmd0aDtnPGg7ZysrKXt2YXIgbT1mW2ddLnVkLGs9W21dO2UmJmEuYS5OYihrLGUpO2EuYWEuYmQoZltnXS5LZCxrKTttLm5vZGVWYWx1ZT1cIlwiO20ucGFyZW50Tm9kZSYmbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG0pfX0sVWM6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5tYXRjaCgvXlxcW2tvX21lbW9cXDooLio/KVxcXSQvKSk/YVsxXTpudWxsfX19KCk7YS5iKFwibWVtb2l6YXRpb25cIixhLmFhKTthLmIoXCJtZW1vaXphdGlvbi5tZW1vaXplXCIsYS5hYS5YYik7YS5iKFwibWVtb2l6YXRpb24udW5tZW1vaXplXCIsYS5hYS5iZCk7YS5iKFwibWVtb2l6YXRpb24ucGFyc2VNZW1vVGV4dFwiLGEuYWEuVWMpO2EuYihcIm1lbW9pemF0aW9uLnVubWVtb2l6ZURvbU5vZGVBbmREZXNjZW5kYW50c1wiLGEuYWEuY2QpO2EubmE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKCl7aWYoZilmb3IodmFyIGI9ZixjPTAsZDtoPGY7KWlmKGQ9ZVtoKytdKXtpZihoPmIpe2lmKDVFMzw9XG4rK2Mpe2g9ZjthLmEuR2MoRXJyb3IoXCInVG9vIG11Y2ggcmVjdXJzaW9uJyBhZnRlciBwcm9jZXNzaW5nIFwiK2MrXCIgdGFzayBncm91cHMuXCIpKTticmVha31iPWZ9dHJ5e2QoKX1jYXRjaChwKXthLmEuR2MocCl9fX1mdW5jdGlvbiBjKCl7YigpO2g9Zj1lLmxlbmd0aD0wfXZhciBkLGU9W10sZj0wLGc9MSxoPTA7QS5NdXRhdGlvbk9ic2VydmVyP2Q9ZnVuY3Rpb24oYSl7dmFyIGI9dy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyhuZXcgTXV0YXRpb25PYnNlcnZlcihhKSkub2JzZXJ2ZShiLHthdHRyaWJ1dGVzOiEwfSk7cmV0dXJuIGZ1bmN0aW9uKCl7Yi5jbGFzc0xpc3QudG9nZ2xlKFwiZm9vXCIpfX0oYyk6ZD13JiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gdy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpP2Z1bmN0aW9uKGEpe3ZhciBiPXcuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtiLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2Iub25yZWFkeXN0YXRlY2hhbmdlPW51bGw7dy5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYik7XG5iPW51bGw7YSgpfTt3LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChiKX06ZnVuY3Rpb24oYSl7c2V0VGltZW91dChhLDApfTtyZXR1cm57c2NoZWR1bGVyOmQsemI6ZnVuY3Rpb24oYil7Znx8YS5uYS5zY2hlZHVsZXIoYyk7ZVtmKytdPWI7cmV0dXJuIGcrK30sY2FuY2VsOmZ1bmN0aW9uKGEpe2E9YS0oZy1mKTthPj1oJiZhPGYmJihlW2FdPW51bGwpfSxyZXNldEZvclRlc3Rpbmc6ZnVuY3Rpb24oKXt2YXIgYT1mLWg7aD1mPWUubGVuZ3RoPTA7cmV0dXJuIGF9LFNkOmJ9fSgpO2EuYihcInRhc2tzXCIsYS5uYSk7YS5iKFwidGFza3Muc2NoZWR1bGVcIixhLm5hLnpiKTthLmIoXCJ0YXNrcy5ydW5FYXJseVwiLGEubmEuU2QpO2EuVGE9e3Rocm90dGxlOmZ1bmN0aW9uKGIsYyl7Yi50aHJvdHRsZUV2YWx1YXRpb249Yzt2YXIgZD1udWxsO3JldHVybiBhLiQoe3JlYWQ6Yix3cml0ZTpmdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZCk7ZD1hLmEuc2V0VGltZW91dChmdW5jdGlvbigpe2IoZSl9LFxuYyl9fSl9LHJhdGVMaW1pdDpmdW5jdGlvbihhLGMpe3ZhciBkLGUsZjtcIm51bWJlclwiPT10eXBlb2YgYz9kPWM6KGQ9Yy50aW1lb3V0LGU9Yy5tZXRob2QpO2EuSGI9ITE7Zj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6XCJub3RpZnlXaGVuQ2hhbmdlc1N0b3BcIj09ZT9ZOlg7YS51YihmdW5jdGlvbihhKXtyZXR1cm4gZihhLGQsYyl9KX0sZGVmZXJyZWQ6ZnVuY3Rpb24oYixjKXtpZighMCE9PWMpdGhyb3cgRXJyb3IoXCJUaGUgJ2RlZmVycmVkJyBleHRlbmRlciBvbmx5IGFjY2VwdHMgdGhlIHZhbHVlICd0cnVlJywgYmVjYXVzZSBpdCBpcyBub3Qgc3VwcG9ydGVkIHRvIHR1cm4gZGVmZXJyYWwgb2ZmIG9uY2UgZW5hYmxlZC5cIik7Yi5IYnx8KGIuSGI9ITAsYi51YihmdW5jdGlvbihjKXt2YXIgZSxmPSExO3JldHVybiBmdW5jdGlvbigpe2lmKCFmKXthLm5hLmNhbmNlbChlKTtlPWEubmEuemIoYyk7dHJ5e2Y9ITAsYi5ub3RpZnlTdWJzY3JpYmVycyhuLFwiZGlydHlcIil9ZmluYWxseXtmPVxuITF9fX19KSl9LG5vdGlmeTpmdW5jdGlvbihhLGMpe2EuZXF1YWxpdHlDb21wYXJlcj1cImFsd2F5c1wiPT1jP251bGw6S319O3ZhciBXPXt1bmRlZmluZWQ6MSxcImJvb2xlYW5cIjoxLG51bWJlcjoxLHN0cmluZzoxfTthLmIoXCJleHRlbmRlcnNcIixhLlRhKTthLmljPWZ1bmN0aW9uKGIsYyxkKXt0aGlzLmRhPWI7dGhpcy5sYz1jO3RoaXMubWM9ZDt0aGlzLkliPSExO3RoaXMuZmI9dGhpcy5KYj1udWxsO2EuTCh0aGlzLFwiZGlzcG9zZVwiLHRoaXMucyk7YS5MKHRoaXMsXCJkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWRcIix0aGlzLmwpfTthLmljLnByb3RvdHlwZS5zPWZ1bmN0aW9uKCl7dGhpcy5JYnx8KHRoaXMuZmImJmEuYS5LLnliKHRoaXMuSmIsdGhpcy5mYiksdGhpcy5JYj0hMCx0aGlzLm1jKCksdGhpcy5kYT10aGlzLmxjPXRoaXMubWM9dGhpcy5KYj10aGlzLmZiPW51bGwpfTthLmljLnByb3RvdHlwZS5sPWZ1bmN0aW9uKGIpe3RoaXMuSmI9YjthLmEuSy56YShiLHRoaXMuZmI9dGhpcy5zLmJpbmQodGhpcykpfTtcbmEuVD1mdW5jdGlvbigpe2EuYS5BYih0aGlzLEQpO0QucWIodGhpcyl9O3ZhciBEPXtxYjpmdW5jdGlvbihhKXthLlU9e2NoYW5nZTpbXX07YS5zYz0xfSxzdWJzY3JpYmU6ZnVuY3Rpb24oYixjLGQpe3ZhciBlPXRoaXM7ZD1kfHxcImNoYW5nZVwiO3ZhciBmPW5ldyBhLmljKGUsYz9iLmJpbmQoYyk6YixmdW5jdGlvbigpe2EuYS5QYShlLlVbZF0sZik7ZS5oYiYmZS5oYihkKX0pO2UuUWEmJmUuUWEoZCk7ZS5VW2RdfHwoZS5VW2RdPVtdKTtlLlVbZF0ucHVzaChmKTtyZXR1cm4gZn0sbm90aWZ5U3Vic2NyaWJlcnM6ZnVuY3Rpb24oYixjKXtjPWN8fFwiY2hhbmdlXCI7XCJjaGFuZ2VcIj09PWMmJnRoaXMuR2IoKTtpZih0aGlzLldhKGMpKXt2YXIgZD1cImNoYW5nZVwiPT09YyYmdGhpcy5lZHx8dGhpcy5VW2NdLnNsaWNlKDApO3RyeXthLnUueGMoKTtmb3IodmFyIGU9MCxmO2Y9ZFtlXTsrK2UpZi5JYnx8Zi5sYyhiKX1maW5hbGx5e2EudS5lbmQoKX19fSxvYjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNjfSxcbkRkOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9iKCkhPT1hfSxHYjpmdW5jdGlvbigpeysrdGhpcy5zY30sdWI6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcyxkPWEuTyhjKSxlLGYsZyxoLG07Yy5nYnx8KGMuZ2I9Yy5ub3RpZnlTdWJzY3JpYmVycyxjLm5vdGlmeVN1YnNjcmliZXJzPVopO3ZhciBrPWIoZnVuY3Rpb24oKXtjLkphPSExO2QmJmg9PT1jJiYoaD1jLm5jP2MubmMoKTpjKCkpO3ZhciBhPWZ8fG0mJmMuc2IoZyxoKTttPWY9ZT0hMTthJiZjLmdiKGc9aCl9KTtjLnFjPWZ1bmN0aW9uKGEsYil7YiYmYy5KYXx8KG09IWIpO2MuZWQ9Yy5VLmNoYW5nZS5zbGljZSgwKTtjLkphPWU9ITA7aD1hO2soKX07Yy5wYz1mdW5jdGlvbihhKXtlfHwoZz1hLGMuZ2IoYSxcImJlZm9yZUNoYW5nZVwiKSl9O2MucmM9ZnVuY3Rpb24oKXttPSEwfTtjLmdkPWZ1bmN0aW9uKCl7Yy5zYihnLGMudighMCkpJiYoZj0hMCl9fSxXYTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5VW2FdJiZ0aGlzLlVbYV0ubGVuZ3RofSxcbkJkOmZ1bmN0aW9uKGIpe2lmKGIpcmV0dXJuIHRoaXMuVVtiXSYmdGhpcy5VW2JdLmxlbmd0aHx8MDt2YXIgYz0wO2EuYS5QKHRoaXMuVSxmdW5jdGlvbihhLGIpe1wiZGlydHlcIiE9PWEmJihjKz1iLmxlbmd0aCl9KTtyZXR1cm4gY30sc2I6ZnVuY3Rpb24oYSxjKXtyZXR1cm4hdGhpcy5lcXVhbGl0eUNvbXBhcmVyfHwhdGhpcy5lcXVhbGl0eUNvbXBhcmVyKGEsYyl9LHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IE9iamVjdF1cIn0sZXh0ZW5kOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXM7YiYmYS5hLlAoYixmdW5jdGlvbihiLGUpe3ZhciBmPWEuVGFbYl07XCJmdW5jdGlvblwiPT10eXBlb2YgZiYmKGM9ZihjLGUpfHxjKX0pO3JldHVybiBjfX07YS5MKEQsXCJpbml0XCIsRC5xYik7YS5MKEQsXCJzdWJzY3JpYmVcIixELnN1YnNjcmliZSk7YS5MKEQsXCJleHRlbmRcIixELmV4dGVuZCk7YS5MKEQsXCJnZXRTdWJzY3JpcHRpb25zQ291bnRcIixELkJkKTthLmEuQmEmJmEuYS5zZXRQcm90b3R5cGVPZihELFxuRnVuY3Rpb24ucHJvdG90eXBlKTthLlQuZm49RDthLlFjPWZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnN1YnNjcmliZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS5ub3RpZnlTdWJzY3JpYmVyc307YS5iKFwic3Vic2NyaWJhYmxlXCIsYS5UKTthLmIoXCJpc1N1YnNjcmliYWJsZVwiLGEuUWMpO2EuUz1hLnU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEpe2QucHVzaChlKTtlPWF9ZnVuY3Rpb24gYygpe2U9ZC5wb3AoKX12YXIgZD1bXSxlLGY9MDtyZXR1cm57eGM6YixlbmQ6YyxjYzpmdW5jdGlvbihiKXtpZihlKXtpZighYS5RYyhiKSl0aHJvdyBFcnJvcihcIk9ubHkgc3Vic2NyaWJhYmxlIHRoaW5ncyBjYW4gYWN0IGFzIGRlcGVuZGVuY2llc1wiKTtlLm9kLmNhbGwoZS5wZCxiLGIuZmR8fChiLmZkPSsrZikpfX0sRzpmdW5jdGlvbihhLGQsZSl7dHJ5e3JldHVybiBiKCksYS5hcHBseShkLGV8fFtdKX1maW5hbGx5e2MoKX19LHFhOmZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4gZS5vLnFhKCl9LFxuVmE6ZnVuY3Rpb24oKXtpZihlKXJldHVybiBlLm8uVmEoKX0sWWE6ZnVuY3Rpb24oKXtpZihlKXJldHVybiBlLllhfSxvOmZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4gZS5vfX19KCk7YS5iKFwiY29tcHV0ZWRDb250ZXh0XCIsYS5TKTthLmIoXCJjb21wdXRlZENvbnRleHQuZ2V0RGVwZW5kZW5jaWVzQ291bnRcIixhLlMucWEpO2EuYihcImNvbXB1dGVkQ29udGV4dC5nZXREZXBlbmRlbmNpZXNcIixhLlMuVmEpO2EuYihcImNvbXB1dGVkQ29udGV4dC5pc0luaXRpYWxcIixhLlMuWWEpO2EuYihcImNvbXB1dGVkQ29udGV4dC5yZWdpc3RlckRlcGVuZGVuY3lcIixhLlMuY2MpO2EuYihcImlnbm9yZURlcGVuZGVuY2llc1wiLGEuWWQ9YS51LkcpO3ZhciBJPWEuYS5EYShcIl9sYXRlc3RWYWx1ZVwiKTthLnRhPWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoKXtpZigwPGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGMuc2IoY1tJXSxhcmd1bWVudHNbMF0pJiYoYy55YSgpLGNbSV09YXJndW1lbnRzWzBdLGMueGEoKSksdGhpcztcbmEudS5jYyhjKTtyZXR1cm4gY1tJXX1jW0ldPWI7YS5hLkJhfHxhLmEuZXh0ZW5kKGMsYS5ULmZuKTthLlQuZm4ucWIoYyk7YS5hLkFiKGMsRik7YS5vcHRpb25zLmRlZmVyVXBkYXRlcyYmYS5UYS5kZWZlcnJlZChjLCEwKTtyZXR1cm4gY307dmFyIEY9e2VxdWFsaXR5Q29tcGFyZXI6Syx2OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbSV19LHhhOmZ1bmN0aW9uKCl7dGhpcy5ub3RpZnlTdWJzY3JpYmVycyh0aGlzW0ldLFwic3BlY3RhdGVcIik7dGhpcy5ub3RpZnlTdWJzY3JpYmVycyh0aGlzW0ldKX0seWE6ZnVuY3Rpb24oKXt0aGlzLm5vdGlmeVN1YnNjcmliZXJzKHRoaXNbSV0sXCJiZWZvcmVDaGFuZ2VcIil9fTthLmEuQmEmJmEuYS5zZXRQcm90b3R5cGVPZihGLGEuVC5mbik7dmFyIEc9YS50YS5NYT1cIl9fa29fcHJvdG9fX1wiO0ZbR109YS50YTthLk89ZnVuY3Rpb24oYil7aWYoKGI9XCJmdW5jdGlvblwiPT10eXBlb2YgYiYmYltHXSkmJmIhPT1GW0ddJiZiIT09YS5vLmZuW0ddKXRocm93IEVycm9yKFwiSW52YWxpZCBvYmplY3QgdGhhdCBsb29rcyBsaWtlIGFuIG9ic2VydmFibGU7IHBvc3NpYmx5IGZyb20gYW5vdGhlciBLbm9ja291dCBpbnN0YW5jZVwiKTtcbnJldHVybiEhYn07YS5aYT1mdW5jdGlvbihiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBiJiYoYltHXT09PUZbR118fGJbR109PT1hLm8uZm5bR10mJmIuTmMpfTthLmIoXCJvYnNlcnZhYmxlXCIsYS50YSk7YS5iKFwiaXNPYnNlcnZhYmxlXCIsYS5PKTthLmIoXCJpc1dyaXRlYWJsZU9ic2VydmFibGVcIixhLlphKTthLmIoXCJpc1dyaXRhYmxlT2JzZXJ2YWJsZVwiLGEuWmEpO2EuYihcIm9ic2VydmFibGUuZm5cIixGKTthLkwoRixcInBlZWtcIixGLnYpO2EuTChGLFwidmFsdWVIYXNNdXRhdGVkXCIsRi54YSk7YS5MKEYsXCJ2YWx1ZVdpbGxNdXRhdGVcIixGLnlhKTthLkhhPWZ1bmN0aW9uKGIpe2I9Ynx8W107aWYoXCJvYmplY3RcIiE9dHlwZW9mIGJ8fCEoXCJsZW5ndGhcImluIGIpKXRocm93IEVycm9yKFwiVGhlIGFyZ3VtZW50IHBhc3NlZCB3aGVuIGluaXRpYWxpemluZyBhbiBvYnNlcnZhYmxlIGFycmF5IG11c3QgYmUgYW4gYXJyYXksIG9yIG51bGwsIG9yIHVuZGVmaW5lZC5cIik7Yj1hLnRhKGIpO2EuYS5BYihiLFxuYS5IYS5mbik7cmV0dXJuIGIuZXh0ZW5kKHt0cmFja0FycmF5Q2hhbmdlczohMH0pfTthLkhhLmZuPXtyZW1vdmU6ZnVuY3Rpb24oYil7Zm9yKHZhciBjPXRoaXMudigpLGQ9W10sZT1cImZ1bmN0aW9uXCIhPXR5cGVvZiBifHxhLk8oYik/ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifTpiLGY9MDtmPGMubGVuZ3RoO2YrKyl7dmFyIGc9Y1tmXTtpZihlKGcpKXswPT09ZC5sZW5ndGgmJnRoaXMueWEoKTtpZihjW2ZdIT09Zyl0aHJvdyBFcnJvcihcIkFycmF5IG1vZGlmaWVkIGR1cmluZyByZW1vdmU7IGNhbm5vdCByZW1vdmUgaXRlbVwiKTtkLnB1c2goZyk7Yy5zcGxpY2UoZiwxKTtmLS19fWQubGVuZ3RoJiZ0aGlzLnhhKCk7cmV0dXJuIGR9LHJlbW92ZUFsbDpmdW5jdGlvbihiKXtpZihiPT09bil7dmFyIGM9dGhpcy52KCksZD1jLnNsaWNlKDApO3RoaXMueWEoKTtjLnNwbGljZSgwLGMubGVuZ3RoKTt0aGlzLnhhKCk7cmV0dXJuIGR9cmV0dXJuIGI/dGhpcy5yZW1vdmUoZnVuY3Rpb24oYyl7cmV0dXJuIDA8PVxuYS5hLkEoYixjKX0pOltdfSxkZXN0cm95OmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMudigpLGQ9XCJmdW5jdGlvblwiIT10eXBlb2YgYnx8YS5PKGIpP2Z1bmN0aW9uKGEpe3JldHVybiBhPT09Yn06Yjt0aGlzLnlhKCk7Zm9yKHZhciBlPWMubGVuZ3RoLTE7MDw9ZTtlLS0pe3ZhciBmPWNbZV07ZChmKSYmKGYuX2Rlc3Ryb3k9ITApfXRoaXMueGEoKX0sZGVzdHJveUFsbDpmdW5jdGlvbihiKXtyZXR1cm4gYj09PW4/dGhpcy5kZXN0cm95KGZ1bmN0aW9uKCl7cmV0dXJuITB9KTpiP3RoaXMuZGVzdHJveShmdW5jdGlvbihjKXtyZXR1cm4gMDw9YS5hLkEoYixjKX0pOltdfSxpbmRleE9mOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMoKTtyZXR1cm4gYS5hLkEoYyxiKX0scmVwbGFjZTpmdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMuaW5kZXhPZihhKTswPD1kJiYodGhpcy55YSgpLHRoaXMudigpW2RdPWMsdGhpcy54YSgpKX0sc29ydGVkOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMoKS5zbGljZSgwKTtcbnJldHVybiBhP2Muc29ydChhKTpjLnNvcnQoKX0scmV2ZXJzZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcygpLnNsaWNlKDApLnJldmVyc2UoKX19O2EuYS5CYSYmYS5hLnNldFByb3RvdHlwZU9mKGEuSGEuZm4sYS50YS5mbik7YS5hLkQoXCJwb3AgcHVzaCByZXZlcnNlIHNoaWZ0IHNvcnQgc3BsaWNlIHVuc2hpZnRcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYil7YS5IYS5mbltiXT1mdW5jdGlvbigpe3ZhciBhPXRoaXMudigpO3RoaXMueWEoKTt0aGlzLnpjKGEsYixhcmd1bWVudHMpO3ZhciBkPWFbYl0uYXBwbHkoYSxhcmd1bWVudHMpO3RoaXMueGEoKTtyZXR1cm4gZD09PWE/dGhpczpkfX0pO2EuYS5EKFtcInNsaWNlXCJdLGZ1bmN0aW9uKGIpe2EuSGEuZm5bYl09ZnVuY3Rpb24oKXt2YXIgYT10aGlzKCk7cmV0dXJuIGFbYl0uYXBwbHkoYSxhcmd1bWVudHMpfX0pO2EuUGM9ZnVuY3Rpb24oYil7cmV0dXJuIGEuTyhiKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYi5yZW1vdmUmJlwiZnVuY3Rpb25cIj09XG50eXBlb2YgYi5wdXNofTthLmIoXCJvYnNlcnZhYmxlQXJyYXlcIixhLkhhKTthLmIoXCJpc09ic2VydmFibGVBcnJheVwiLGEuUGMpO2EuVGEudHJhY2tBcnJheUNoYW5nZXM9ZnVuY3Rpb24oYixjKXtmdW5jdGlvbiBkKCl7ZnVuY3Rpb24gYygpe2lmKG0pe3ZhciBkPVtdLmNvbmNhdChiLnYoKXx8W10pLGU7aWYoYi5XYShcImFycmF5Q2hhbmdlXCIpKXtpZighZnx8MTxtKWY9YS5hLlBiKGssZCxiLk9iKTtlPWZ9az1kO2Y9bnVsbDttPTA7ZSYmZS5sZW5ndGgmJmIubm90aWZ5U3Vic2NyaWJlcnMoZSxcImFycmF5Q2hhbmdlXCIpfX1lP2MoKTooZT0hMCxoPWIuc3Vic2NyaWJlKGZ1bmN0aW9uKCl7KyttfSxudWxsLFwic3BlY3RhdGVcIiksaz1bXS5jb25jYXQoYi52KCl8fFtdKSxmPW51bGwsZz1iLnN1YnNjcmliZShjKSl9Yi5PYj17fTtjJiZcIm9iamVjdFwiPT10eXBlb2YgYyYmYS5hLmV4dGVuZChiLk9iLGMpO2IuT2Iuc3BhcnNlPSEwO2lmKCFiLnpjKXt2YXIgZT0hMSxmPW51bGwsZyxoLG09MCxcbmssbD1iLlFhLHA9Yi5oYjtiLlFhPWZ1bmN0aW9uKGEpe2wmJmwuY2FsbChiLGEpO1wiYXJyYXlDaGFuZ2VcIj09PWEmJmQoKX07Yi5oYj1mdW5jdGlvbihhKXtwJiZwLmNhbGwoYixhKTtcImFycmF5Q2hhbmdlXCIhPT1hfHxiLldhKFwiYXJyYXlDaGFuZ2VcIil8fChnJiZnLnMoKSxoJiZoLnMoKSxoPWc9bnVsbCxlPSExLGs9bil9O2IuemM9ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGwoYSxiLGMpe3JldHVybiBrW2subGVuZ3RoXT17c3RhdHVzOmEsdmFsdWU6YixpbmRleDpjfX1pZihlJiYhbSl7dmFyIGs9W10scD1iLmxlbmd0aCxnPWQubGVuZ3RoLGg9MDtzd2l0Y2goYyl7Y2FzZSBcInB1c2hcIjpoPXA7Y2FzZSBcInVuc2hpZnRcIjpmb3IoYz0wO2M8ZztjKyspbChcImFkZGVkXCIsZFtjXSxoK2MpO2JyZWFrO2Nhc2UgXCJwb3BcIjpoPXAtMTtjYXNlIFwic2hpZnRcIjpwJiZsKFwiZGVsZXRlZFwiLGJbaF0saCk7YnJlYWs7Y2FzZSBcInNwbGljZVwiOmM9TWF0aC5taW4oTWF0aC5tYXgoMCwwPmRbMF0/cCtkWzBdOlxuZFswXSkscCk7Zm9yKHZhciBwPTE9PT1nP3A6TWF0aC5taW4oYysoZFsxXXx8MCkscCksZz1jK2ctMixoPU1hdGgubWF4KHAsZyksVT1bXSxMPVtdLG49MjtjPGg7KytjLCsrbiljPHAmJkwucHVzaChsKFwiZGVsZXRlZFwiLGJbY10sYykpLGM8ZyYmVS5wdXNoKGwoXCJhZGRlZFwiLGRbbl0sYykpO2EuYS5LYyhMLFUpO2JyZWFrO2RlZmF1bHQ6cmV0dXJufWY9a319fX07dmFyIHI9YS5hLkRhKFwiX3N0YXRlXCIpO2Eubz1hLiQ9ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGUoKXtpZigwPGFyZ3VtZW50cy5sZW5ndGgpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmKWYuYXBwbHkoZy5uYixhcmd1bWVudHMpO2Vsc2UgdGhyb3cgRXJyb3IoXCJDYW5ub3Qgd3JpdGUgYSB2YWx1ZSB0byBhIGtvLmNvbXB1dGVkIHVubGVzcyB5b3Ugc3BlY2lmeSBhICd3cml0ZScgb3B0aW9uLiBJZiB5b3Ugd2lzaCB0byByZWFkIHRoZSBjdXJyZW50IHZhbHVlLCBkb24ndCBwYXNzIGFueSBwYXJhbWV0ZXJzLlwiKTtyZXR1cm4gdGhpc31nLnJhfHxcbmEudS5jYyhlKTsoZy5rYXx8Zy5KJiZlLlhhKCkpJiZlLmhhKCk7cmV0dXJuIGcuWH1cIm9iamVjdFwiPT09dHlwZW9mIGI/ZD1iOihkPWR8fHt9LGImJihkLnJlYWQ9YikpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGQucmVhZCl0aHJvdyBFcnJvcihcIlBhc3MgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBrby5jb21wdXRlZFwiKTt2YXIgZj1kLndyaXRlLGc9e1g6bixzYTohMCxrYTohMCxyYjohMSxqYzohMSxyYTohMSx3YjohMSxKOiExLFdjOmQucmVhZCxuYjpjfHxkLm93bmVyLGw6ZC5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWR8fGQubHx8bnVsbCxTYTpkLmRpc3Bvc2VXaGVufHxkLlNhLFJiOm51bGwsSTp7fSxWOjAsSWM6bnVsbH07ZVtyXT1nO2UuTmM9XCJmdW5jdGlvblwiPT09dHlwZW9mIGY7YS5hLkJhfHxhLmEuZXh0ZW5kKGUsYS5ULmZuKTthLlQuZm4ucWIoZSk7YS5hLkFiKGUsQyk7ZC5wdXJlPyhnLndiPSEwLGcuSj0hMCxhLmEuZXh0ZW5kKGUsZGEpKTpcbmQuZGVmZXJFdmFsdWF0aW9uJiZhLmEuZXh0ZW5kKGUsZWEpO2Eub3B0aW9ucy5kZWZlclVwZGF0ZXMmJmEuVGEuZGVmZXJyZWQoZSwhMCk7Zy5sJiYoZy5qYz0hMCxnLmwubm9kZVR5cGV8fChnLmw9bnVsbCkpO2cuSnx8ZC5kZWZlckV2YWx1YXRpb258fGUuaGEoKTtnLmwmJmUuamEoKSYmYS5hLksuemEoZy5sLGcuUmI9ZnVuY3Rpb24oKXtlLnMoKX0pO3JldHVybiBlfTt2YXIgQz17ZXF1YWxpdHlDb21wYXJlcjpLLHFhOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbcl0uVn0sVmE6ZnVuY3Rpb24oKXt2YXIgYj1bXTthLmEuUCh0aGlzW3JdLkksZnVuY3Rpb24oYSxkKXtiW2QuS2FdPWQuZGF9KTtyZXR1cm4gYn0sVmI6ZnVuY3Rpb24oYil7aWYoIXRoaXNbcl0uVilyZXR1cm4hMTt2YXIgYz10aGlzLlZhKCk7cmV0dXJuLTEhPT1hLmEuQShjLGIpPyEwOiEhYS5hLkxiKGMsZnVuY3Rpb24oYSl7cmV0dXJuIGEuVmImJmEuVmIoYil9KX0sdWM6ZnVuY3Rpb24oYSxjLGQpe2lmKHRoaXNbcl0ud2ImJlxuYz09PXRoaXMpdGhyb3cgRXJyb3IoXCJBICdwdXJlJyBjb21wdXRlZCBtdXN0IG5vdCBiZSBjYWxsZWQgcmVjdXJzaXZlbHlcIik7dGhpc1tyXS5JW2FdPWQ7ZC5LYT10aGlzW3JdLlYrKztkLkxhPWMub2IoKX0sWGE6ZnVuY3Rpb24oKXt2YXIgYSxjLGQ9dGhpc1tyXS5JO2ZvcihhIGluIGQpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGQsYSkmJihjPWRbYV0sdGhpcy5JYSYmYy5kYS5KYXx8Yy5kYS5EZChjLkxhKSkpcmV0dXJuITB9LEpkOmZ1bmN0aW9uKCl7dGhpcy5JYSYmIXRoaXNbcl0ucmImJnRoaXMuSWEoITEpfSxqYTpmdW5jdGlvbigpe3ZhciBhPXRoaXNbcl07cmV0dXJuIGEua2F8fDA8YS5WfSxSZDpmdW5jdGlvbigpe3RoaXMuSmE/dGhpc1tyXS5rYSYmKHRoaXNbcl0uc2E9ITApOnRoaXMuSGMoKX0sJGM6ZnVuY3Rpb24oYSl7aWYoYS5IYil7dmFyIGM9YS5zdWJzY3JpYmUodGhpcy5KZCx0aGlzLFwiZGlydHlcIiksZD1hLnN1YnNjcmliZSh0aGlzLlJkLFxudGhpcyk7cmV0dXJue2RhOmEsczpmdW5jdGlvbigpe2MucygpO2QucygpfX19cmV0dXJuIGEuc3Vic2NyaWJlKHRoaXMuSGMsdGhpcyl9LEhjOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcyxjPWIudGhyb3R0bGVFdmFsdWF0aW9uO2MmJjA8PWM/KGNsZWFyVGltZW91dCh0aGlzW3JdLkljKSx0aGlzW3JdLkljPWEuYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yi5oYSghMCl9LGMpKTpiLklhP2IuSWEoITApOmIuaGEoITApfSxoYTpmdW5jdGlvbihiKXt2YXIgYz10aGlzW3JdLGQ9Yy5TYSxlPSExO2lmKCFjLnJiJiYhYy5yYSl7aWYoYy5sJiYhYS5hLlNiKGMubCl8fGQmJmQoKSl7aWYoIWMuamMpe3RoaXMucygpO3JldHVybn19ZWxzZSBjLmpjPSExO2MucmI9ITA7dHJ5e2U9dGhpcy56ZChiKX1maW5hbGx5e2MucmI9ITF9cmV0dXJuIGV9fSx6ZDpmdW5jdGlvbihiKXt2YXIgYz10aGlzW3JdLGQ9ITEsZT1jLndiP246IWMuVixkPXtxZDp0aGlzLG1iOmMuSSxRYjpjLlZ9O2EudS54Yyh7cGQ6ZCxcbm9kOmJhLG86dGhpcyxZYTplfSk7Yy5JPXt9O2MuVj0wO3ZhciBmPXRoaXMueWQoYyxkKTtjLlY/ZD10aGlzLnNiKGMuWCxmKToodGhpcy5zKCksZD0hMCk7ZCYmKGMuSj90aGlzLkdiKCk6dGhpcy5ub3RpZnlTdWJzY3JpYmVycyhjLlgsXCJiZWZvcmVDaGFuZ2VcIiksYy5YPWYsdGhpcy5ub3RpZnlTdWJzY3JpYmVycyhjLlgsXCJzcGVjdGF0ZVwiKSwhYy5KJiZiJiZ0aGlzLm5vdGlmeVN1YnNjcmliZXJzKGMuWCksdGhpcy5yYyYmdGhpcy5yYygpKTtlJiZ0aGlzLm5vdGlmeVN1YnNjcmliZXJzKGMuWCxcImF3YWtlXCIpO3JldHVybiBkfSx5ZDpmdW5jdGlvbihiLGMpe3RyeXt2YXIgZD1iLldjO3JldHVybiBiLm5iP2QuY2FsbChiLm5iKTpkKCl9ZmluYWxseXthLnUuZW5kKCksYy5RYiYmIWIuSiYmYS5hLlAoYy5tYixhYSksYi5zYT1iLmthPSExfX0sdjpmdW5jdGlvbihhKXt2YXIgYz10aGlzW3JdOyhjLmthJiYoYXx8IWMuVil8fGMuSiYmdGhpcy5YYSgpKSYmdGhpcy5oYSgpO3JldHVybiBjLlh9LFxudWI6ZnVuY3Rpb24oYil7YS5ULmZuLnViLmNhbGwodGhpcyxiKTt0aGlzLm5jPWZ1bmN0aW9uKCl7dGhpc1tyXS5KfHwodGhpc1tyXS5zYT90aGlzLmhhKCk6dGhpc1tyXS5rYT0hMSk7cmV0dXJuIHRoaXNbcl0uWH07dGhpcy5JYT1mdW5jdGlvbihhKXt0aGlzLnBjKHRoaXNbcl0uWCk7dGhpc1tyXS5rYT0hMDthJiYodGhpc1tyXS5zYT0hMCk7dGhpcy5xYyh0aGlzLCFhKX19LHM6ZnVuY3Rpb24oKXt2YXIgYj10aGlzW3JdOyFiLkomJmIuSSYmYS5hLlAoYi5JLGZ1bmN0aW9uKGEsYil7Yi5zJiZiLnMoKX0pO2IubCYmYi5SYiYmYS5hLksueWIoYi5sLGIuUmIpO2IuST1uO2IuVj0wO2IucmE9ITA7Yi5zYT0hMTtiLmthPSExO2IuSj0hMTtiLmw9bjtiLlNhPW47Yi5XYz1uO3RoaXMuTmN8fChiLm5iPW4pfX0sZGE9e1FhOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMsZD1jW3JdO2lmKCFkLnJhJiZkLkomJlwiY2hhbmdlXCI9PWIpe2QuSj0hMTtpZihkLnNhfHxjLlhhKCkpZC5JPW51bGwsZC5WPVxuMCxjLmhhKCkmJmMuR2IoKTtlbHNle3ZhciBlPVtdO2EuYS5QKGQuSSxmdW5jdGlvbihhLGIpe2VbYi5LYV09YX0pO2EuYS5EKGUsZnVuY3Rpb24oYSxiKXt2YXIgZT1kLklbYV0sbT1jLiRjKGUuZGEpO20uS2E9YjttLkxhPWUuTGE7ZC5JW2FdPW19KTtjLlhhKCkmJmMuaGEoKSYmYy5HYigpfWQucmF8fGMubm90aWZ5U3Vic2NyaWJlcnMoZC5YLFwiYXdha2VcIil9fSxoYjpmdW5jdGlvbihiKXt2YXIgYz10aGlzW3JdO2MucmF8fFwiY2hhbmdlXCIhPWJ8fHRoaXMuV2EoXCJjaGFuZ2VcIil8fChhLmEuUChjLkksZnVuY3Rpb24oYSxiKXtiLnMmJihjLklbYV09e2RhOmIuZGEsS2E6Yi5LYSxMYTpiLkxhfSxiLnMoKSl9KSxjLko9ITAsdGhpcy5ub3RpZnlTdWJzY3JpYmVycyhuLFwiYXNsZWVwXCIpKX0sb2I6ZnVuY3Rpb24oKXt2YXIgYj10aGlzW3JdO2IuSiYmKGIuc2F8fHRoaXMuWGEoKSkmJnRoaXMuaGEoKTtyZXR1cm4gYS5ULmZuLm9iLmNhbGwodGhpcyl9fSxlYT17UWE6ZnVuY3Rpb24oYSl7XCJjaGFuZ2VcIiE9XG5hJiZcImJlZm9yZUNoYW5nZVwiIT1hfHx0aGlzLnYoKX19O2EuYS5CYSYmYS5hLnNldFByb3RvdHlwZU9mKEMsYS5ULmZuKTt2YXIgTj1hLnRhLk1hO0NbTl09YS5vO2EuT2M9ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmYVtOXT09PUNbTl19O2EuRmQ9ZnVuY3Rpb24oYil7cmV0dXJuIGEuT2MoYikmJmJbcl0mJmJbcl0ud2J9O2EuYihcImNvbXB1dGVkXCIsYS5vKTthLmIoXCJkZXBlbmRlbnRPYnNlcnZhYmxlXCIsYS5vKTthLmIoXCJpc0NvbXB1dGVkXCIsYS5PYyk7YS5iKFwiaXNQdXJlQ29tcHV0ZWRcIixhLkZkKTthLmIoXCJjb21wdXRlZC5mblwiLEMpO2EuTChDLFwicGVla1wiLEMudik7YS5MKEMsXCJkaXNwb3NlXCIsQy5zKTthLkwoQyxcImlzQWN0aXZlXCIsQy5qYSk7YS5MKEMsXCJnZXREZXBlbmRlbmNpZXNDb3VudFwiLEMucWEpO2EuTChDLFwiZ2V0RGVwZW5kZW5jaWVzXCIsQy5WYSk7YS54Yj1mdW5jdGlvbihiLGMpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXJldHVybiBhLm8oYixcbmMse3B1cmU6ITB9KTtiPWEuYS5leHRlbmQoe30sYik7Yi5wdXJlPSEwO3JldHVybiBhLm8oYixjKX07YS5iKFwicHVyZUNvbXB1dGVkXCIsYS54Yik7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhLGYsZyl7Zz1nfHxuZXcgZDthPWYoYSk7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGF8fG51bGw9PT1hfHxhPT09bnx8YSBpbnN0YW5jZW9mIFJlZ0V4cHx8YSBpbnN0YW5jZW9mIERhdGV8fGEgaW5zdGFuY2VvZiBTdHJpbmd8fGEgaW5zdGFuY2VvZiBOdW1iZXJ8fGEgaW5zdGFuY2VvZiBCb29sZWFuKXJldHVybiBhO3ZhciBoPWEgaW5zdGFuY2VvZiBBcnJheT9bXTp7fTtnLnNhdmUoYSxoKTtjKGEsZnVuY3Rpb24oYyl7dmFyIGQ9ZihhW2NdKTtzd2l0Y2godHlwZW9mIGQpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJzdHJpbmdcIjpjYXNlIFwiZnVuY3Rpb25cIjpoW2NdPWQ7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJ1bmRlZmluZWRcIjp2YXIgbD1nLmdldChkKTtoW2NdPWwhPT1cbm4/bDpiKGQsZixnKX19KTtyZXR1cm4gaH1mdW5jdGlvbiBjKGEsYil7aWYoYSBpbnN0YW5jZW9mIEFycmF5KXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyliKGMpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGEudG9KU09OJiZiKFwidG9KU09OXCIpfWVsc2UgZm9yKGMgaW4gYSliKGMpfWZ1bmN0aW9uIGQoKXt0aGlzLmtleXM9W107dGhpcy52YWx1ZXM9W119YS5hZD1mdW5jdGlvbihjKXtpZigwPT1hcmd1bWVudHMubGVuZ3RoKXRocm93IEVycm9yKFwiV2hlbiBjYWxsaW5nIGtvLnRvSlMsIHBhc3MgdGhlIG9iamVjdCB5b3Ugd2FudCB0byBjb252ZXJ0LlwiKTtyZXR1cm4gYihjLGZ1bmN0aW9uKGIpe2Zvcih2YXIgYz0wO2EuTyhiKSYmMTA+YztjKyspYj1iKCk7cmV0dXJuIGJ9KX07YS50b0pTT049ZnVuY3Rpb24oYixjLGQpe2I9YS5hZChiKTtyZXR1cm4gYS5hLmhjKGIsYyxkKX07ZC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmQsc2F2ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5BKHRoaXMua2V5cyxcbmIpOzA8PWQ/dGhpcy52YWx1ZXNbZF09YzoodGhpcy5rZXlzLnB1c2goYiksdGhpcy52YWx1ZXMucHVzaChjKSl9LGdldDpmdW5jdGlvbihiKXtiPWEuYS5BKHRoaXMua2V5cyxiKTtyZXR1cm4gMDw9Yj90aGlzLnZhbHVlc1tiXTpufX19KSgpO2EuYihcInRvSlNcIixhLmFkKTthLmIoXCJ0b0pTT05cIixhLnRvSlNPTik7YS5XZD1mdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZShjKXt2YXIgZT1hLnhiKGIsZCkuZXh0ZW5kKHttYTpcImFsd2F5c1wifSksaD1lLnN1YnNjcmliZShmdW5jdGlvbihhKXthJiYoaC5zKCksYyhhKSl9KTtlLm5vdGlmeVN1YnNjcmliZXJzKGUudigpKTtyZXR1cm4gaH1yZXR1cm5cImZ1bmN0aW9uXCIhPT10eXBlb2YgUHJvbWlzZXx8Yz9lKGMuYmluZChkKSk6bmV3IFByb21pc2UoZSl9O2EuYihcIndoZW5cIixhLldkKTsoZnVuY3Rpb24oKXthLnc9e006ZnVuY3Rpb24oYil7c3dpdGNoKGEuYS5SKGIpKXtjYXNlIFwib3B0aW9uXCI6cmV0dXJuITA9PT1iLl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fP1xuYS5hLmcuZ2V0KGIsYS5jLm9wdGlvbnMuJGIpOjc+PWEuYS5XP2IuZ2V0QXR0cmlidXRlTm9kZShcInZhbHVlXCIpJiZiLmdldEF0dHJpYnV0ZU5vZGUoXCJ2YWx1ZVwiKS5zcGVjaWZpZWQ/Yi52YWx1ZTpiLnRleHQ6Yi52YWx1ZTtjYXNlIFwic2VsZWN0XCI6cmV0dXJuIDA8PWIuc2VsZWN0ZWRJbmRleD9hLncuTShiLm9wdGlvbnNbYi5zZWxlY3RlZEluZGV4XSk6bjtkZWZhdWx0OnJldHVybiBiLnZhbHVlfX0sY2I6ZnVuY3Rpb24oYixjLGQpe3N3aXRjaChhLmEuUihiKSl7Y2FzZSBcIm9wdGlvblwiOlwic3RyaW5nXCI9PT10eXBlb2YgYz8oYS5hLmcuc2V0KGIsYS5jLm9wdGlvbnMuJGIsbiksXCJfX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfX1wiaW4gYiYmZGVsZXRlIGIuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX18sYi52YWx1ZT1jKTooYS5hLmcuc2V0KGIsYS5jLm9wdGlvbnMuJGIsYyksYi5fX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXz0hMCxiLnZhbHVlPVwibnVtYmVyXCI9PT1cbnR5cGVvZiBjP2M6XCJcIik7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmlmKFwiXCI9PT1jfHxudWxsPT09YyljPW47Zm9yKHZhciBlPS0xLGY9MCxnPWIub3B0aW9ucy5sZW5ndGgsaDtmPGc7KytmKWlmKGg9YS53Lk0oYi5vcHRpb25zW2ZdKSxoPT1jfHxcIlwiPT09aCYmYz09PW4pe2U9ZjticmVha31pZihkfHwwPD1lfHxjPT09biYmMTxiLnNpemUpYi5zZWxlY3RlZEluZGV4PWUsNj09PWEuYS5XJiZhLmEuc2V0VGltZW91dChmdW5jdGlvbigpe2Iuc2VsZWN0ZWRJbmRleD1lfSwwKTticmVhaztkZWZhdWx0OmlmKG51bGw9PT1jfHxjPT09biljPVwiXCI7Yi52YWx1ZT1jfX19fSkoKTthLmIoXCJzZWxlY3RFeHRlbnNpb25zXCIsYS53KTthLmIoXCJzZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZVwiLGEudy5NKTthLmIoXCJzZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWVcIixhLncuY2IpO2EubT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYil7Yj1hLmEuRGIoYik7MTIzPT09Yi5jaGFyQ29kZUF0KDApJiYoYj1iLnNsaWNlKDEsXG4tMSkpO2IrPVwiXFxuLFwiO3ZhciBjPVtdLGQ9Yi5tYXRjaChlKSxwLHE9W10saD0wO2lmKDE8ZC5sZW5ndGgpe2Zvcih2YXIgeD0wLEI7Qj1kW3hdOysreCl7dmFyIHU9Qi5jaGFyQ29kZUF0KDApO2lmKDQ0PT09dSl7aWYoMD49aCl7Yy5wdXNoKHAmJnEubGVuZ3RoP3trZXk6cCx2YWx1ZTpxLmpvaW4oXCJcIil9Ont1bmtub3duOnB8fHEuam9pbihcIlwiKX0pO3A9aD0wO3E9W107Y29udGludWV9fWVsc2UgaWYoNTg9PT11KXtpZighaCYmIXAmJjE9PT1xLmxlbmd0aCl7cD1xLnBvcCgpO2NvbnRpbnVlfX1lbHNlIGlmKDQ3PT09dSYmMTxCLmxlbmd0aCYmKDQ3PT09Qi5jaGFyQ29kZUF0KDEpfHw0Mj09PUIuY2hhckNvZGVBdCgxKSkpY29udGludWU7ZWxzZSA0Nz09PXUmJngmJjE8Qi5sZW5ndGg/KHU9ZFt4LTFdLm1hdGNoKGYpKSYmIWdbdVswXV0mJihiPWIuc3Vic3RyKGIuaW5kZXhPZihCKSsxKSxkPWIubWF0Y2goZSkseD0tMSxCPVwiL1wiKTo0MD09PXV8fDEyMz09PXV8fDkxPT09dT8rK2g6XG40MT09PXV8fDEyNT09PXV8fDkzPT09dT8tLWg6cHx8cS5sZW5ndGh8fDM0IT09dSYmMzkhPT11fHwoQj1CLnNsaWNlKDEsLTEpKTtxLnB1c2goQil9aWYoMDxoKXRocm93IEVycm9yKFwiVW5iYWxhbmNlZCBwYXJlbnRoZXNlcywgYnJhY2VzLCBvciBicmFja2V0c1wiKTt9cmV0dXJuIGN9dmFyIGM9W1widHJ1ZVwiLFwiZmFsc2VcIixcIm51bGxcIixcInVuZGVmaW5lZFwiXSxkPS9eKD86WyRfYS16XVskXFx3XSp8KC4rKShcXC5cXHMqWyRfYS16XVskXFx3XSp8XFxbLitcXF0pKSQvaSxlPVJlZ0V4cChcIlxcXCIoPzpcXFxcXFxcXC58W15cXFwiXSkqXFxcInwnKD86XFxcXFxcXFwufFteJ10pKid8YCg/OlxcXFxcXFxcLnxbXmBdKSpgfC9cXFxcKig/OlteKl18XFxcXCorW14qL10pKlxcXFwqKy98Ly8uKlxcbnwvKD86XFxcXFxcXFwufFteL10pKy93KnxbXlxcXFxzOiwvXVteLFxcXCInYHt9KCkvOltcXFxcXV0qW15cXFxccyxcXFwiJ2B7fSgpLzpbXFxcXF1dfFteXFxcXHNdXCIsXCJnXCIpLGY9L1tcXF0pXCInQS1aYS16MC05XyRdKyQvLGc9e1wiaW5cIjoxLFwicmV0dXJuXCI6MSxcInR5cGVvZlwiOjF9LFxuaD17fTtyZXR1cm57UmE6W10sd2E6aCxhYzpiLHZiOmZ1bmN0aW9uKGUsZil7ZnVuY3Rpb24gbChiLGUpe3ZhciBmO2lmKCF4KXt2YXIgaz1hLmdldEJpbmRpbmdIYW5kbGVyKGIpO2lmKGsmJmsucHJlcHJvY2VzcyYmIShlPWsucHJlcHJvY2VzcyhlLGIsbCkpKXJldHVybjtpZihrPWhbYl0pZj1lLDA8PWEuYS5BKGMsZik/Zj0hMTooaz1mLm1hdGNoKGQpLGY9bnVsbD09PWs/ITE6a1sxXT9cIk9iamVjdChcIitrWzFdK1wiKVwiK2tbMl06Ziksaz1mO2smJnEucHVzaChcIidcIisoXCJzdHJpbmdcIj09dHlwZW9mIGhbYl0/aFtiXTpiKStcIic6ZnVuY3Rpb24oX3ope1wiK2YrXCI9X3p9XCIpfWcmJihlPVwiZnVuY3Rpb24oKXtyZXR1cm4gXCIrZStcIiB9XCIpO3AucHVzaChcIidcIitiK1wiJzpcIitlKX1mPWZ8fHt9O3ZhciBwPVtdLHE9W10sZz1mLnZhbHVlQWNjZXNzb3JzLHg9Zi5iaW5kaW5nUGFyYW1zLEI9XCJzdHJpbmdcIj09PXR5cGVvZiBlP2IoZSk6ZTthLmEuRChCLGZ1bmN0aW9uKGEpe2woYS5rZXl8fGEudW5rbm93bixcbmEudmFsdWUpfSk7cS5sZW5ndGgmJmwoXCJfa29fcHJvcGVydHlfd3JpdGVyc1wiLFwie1wiK3Euam9pbihcIixcIikrXCIgfVwiKTtyZXR1cm4gcC5qb2luKFwiLFwiKX0sSWQ6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylpZihhW2NdLmtleT09YilyZXR1cm4hMDtyZXR1cm4hMX0sZWI6ZnVuY3Rpb24oYixjLGQsZSxmKXtpZihiJiZhLk8oYikpIWEuWmEoYil8fGYmJmIudigpPT09ZXx8YihlKTtlbHNlIGlmKChiPWMuZ2V0KFwiX2tvX3Byb3BlcnR5X3dyaXRlcnNcIikpJiZiW2RdKWJbZF0oZSl9fX0oKTthLmIoXCJleHByZXNzaW9uUmV3cml0aW5nXCIsYS5tKTthLmIoXCJleHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9yc1wiLGEubS5SYSk7YS5iKFwiZXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWxcIixhLm0uYWMpO2EuYihcImV4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzXCIsYS5tLnZiKTthLmIoXCJleHByZXNzaW9uUmV3cml0aW5nLl90d29XYXlCaW5kaW5nc1wiLFxuYS5tLndhKTthLmIoXCJqc29uRXhwcmVzc2lvblJld3JpdGluZ1wiLGEubSk7YS5iKFwianNvbkV4cHJlc3Npb25SZXdyaXRpbmcuaW5zZXJ0UHJvcGVydHlBY2Nlc3NvcnNJbnRvSnNvblwiLGEubS52Yik7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhKXtyZXR1cm4gOD09YS5ub2RlVHlwZSYmZy50ZXN0KGY/YS50ZXh0OmEubm9kZVZhbHVlKX1mdW5jdGlvbiBjKGEpe3JldHVybiA4PT1hLm5vZGVUeXBlJiZoLnRlc3QoZj9hLnRleHQ6YS5ub2RlVmFsdWUpfWZ1bmN0aW9uIGQoZCxlKXtmb3IodmFyIGY9ZCxoPTEsZz1bXTtmPWYubmV4dFNpYmxpbmc7KXtpZihjKGYpJiYoYS5hLmcuc2V0KGYsaywhMCksaC0tLDA9PT1oKSlyZXR1cm4gZztnLnB1c2goZik7YihmKSYmaCsrfWlmKCFlKXRocm93IEVycm9yKFwiQ2Fubm90IGZpbmQgY2xvc2luZyBjb21tZW50IHRhZyB0byBtYXRjaDogXCIrZC5ub2RlVmFsdWUpO3JldHVybiBudWxsfWZ1bmN0aW9uIGUoYSxiKXt2YXIgYz1kKGEsYik7cmV0dXJuIGM/XG4wPGMubGVuZ3RoP2NbYy5sZW5ndGgtMV0ubmV4dFNpYmxpbmc6YS5uZXh0U2libGluZzpudWxsfXZhciBmPXcmJlwiXFx4M2MhLS10ZXN0LS1cXHgzZVwiPT09dy5jcmVhdGVDb21tZW50KFwidGVzdFwiKS50ZXh0LGc9Zj8vXlxceDNjIS0tXFxzKmtvKD86XFxzKyhbXFxzXFxTXSspKT9cXHMqLS1cXHgzZSQvOi9eXFxzKmtvKD86XFxzKyhbXFxzXFxTXSspKT9cXHMqJC8saD1mPy9eXFx4M2MhLS1cXHMqXFwva29cXHMqLS1cXHgzZSQvOi9eXFxzKlxcL2tvXFxzKiQvLG09e3VsOiEwLG9sOiEwfSxrPVwiX19rb19tYXRjaGVkRW5kQ29tbWVudF9fXCI7YS5oPXtlYTp7fSxjaGlsZE5vZGVzOmZ1bmN0aW9uKGEpe3JldHVybiBiKGEpP2QoYSk6YS5jaGlsZE5vZGVzfSxFYTpmdW5jdGlvbihjKXtpZihiKGMpKXtjPWEuaC5jaGlsZE5vZGVzKGMpO2Zvcih2YXIgZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKylhLnJlbW92ZU5vZGUoY1tkXSl9ZWxzZSBhLmEuVGIoYyl9LHZhOmZ1bmN0aW9uKGMsZCl7aWYoYihjKSl7YS5oLkVhKGMpO2Zvcih2YXIgZT1cbmMubmV4dFNpYmxpbmcsZj0wLGs9ZC5sZW5ndGg7ZjxrO2YrKyllLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRbZl0sZSl9ZWxzZSBhLmEudmEoYyxkKX0sVmM6ZnVuY3Rpb24oYSxjKXt2YXIgZDtiKGEpPyhkPWEubmV4dFNpYmxpbmcsYT1hLnBhcmVudE5vZGUpOmQ9YS5maXJzdENoaWxkO2Q/YyE9PWQmJmEuaW5zZXJ0QmVmb3JlKGMsZCk6YS5hcHBlbmRDaGlsZChjKX0sV2I6ZnVuY3Rpb24oYyxkLGUpe2U/KGU9ZS5uZXh0U2libGluZyxiKGMpJiYoYz1jLnBhcmVudE5vZGUpLGU/ZCE9PWUmJmMuaW5zZXJ0QmVmb3JlKGQsZSk6Yy5hcHBlbmRDaGlsZChkKSk6YS5oLlZjKGMsZCl9LGZpcnN0Q2hpbGQ6ZnVuY3Rpb24oYSl7aWYoYihhKSlyZXR1cm4hYS5uZXh0U2libGluZ3x8YyhhLm5leHRTaWJsaW5nKT9udWxsOmEubmV4dFNpYmxpbmc7aWYoYS5maXJzdENoaWxkJiZjKGEuZmlyc3RDaGlsZCkpdGhyb3cgRXJyb3IoXCJGb3VuZCBpbnZhbGlkIGVuZCBjb21tZW50LCBhcyB0aGUgZmlyc3QgY2hpbGQgb2YgXCIrXG5hKTtyZXR1cm4gYS5maXJzdENoaWxkfSxuZXh0U2libGluZzpmdW5jdGlvbihkKXtiKGQpJiYoZD1lKGQpKTtpZihkLm5leHRTaWJsaW5nJiZjKGQubmV4dFNpYmxpbmcpKXt2YXIgZj1kLm5leHRTaWJsaW5nO2lmKGMoZikmJiFhLmEuZy5nZXQoZixrKSl0aHJvdyBFcnJvcihcIkZvdW5kIGVuZCBjb21tZW50IHdpdGhvdXQgYSBtYXRjaGluZyBvcGVuaW5nIGNvbW1lbnQsIGFzIGNoaWxkIG9mIFwiK2QpO3JldHVybiBudWxsfXJldHVybiBkLm5leHRTaWJsaW5nfSxDZDpiLFZkOmZ1bmN0aW9uKGEpe3JldHVybihhPShmP2EudGV4dDphLm5vZGVWYWx1ZSkubWF0Y2goZykpP2FbMV06bnVsbH0sU2M6ZnVuY3Rpb24oZCl7aWYobVthLmEuUihkKV0pe3ZhciBmPWQuZmlyc3RDaGlsZDtpZihmKXtkbyBpZigxPT09Zi5ub2RlVHlwZSl7dmFyIGs7az1mLmZpcnN0Q2hpbGQ7dmFyIGg9bnVsbDtpZihrKXtkbyBpZihoKWgucHVzaChrKTtlbHNlIGlmKGIoaykpe3ZhciBnPWUoaywhMCk7Zz9rPVxuZzpoPVtrXX1lbHNlIGMoaykmJihoPVtrXSk7d2hpbGUoaz1rLm5leHRTaWJsaW5nKX1pZihrPWgpZm9yKGg9Zi5uZXh0U2libGluZyxnPTA7ZzxrLmxlbmd0aDtnKyspaD9kLmluc2VydEJlZm9yZShrW2ddLGgpOmQuYXBwZW5kQ2hpbGQoa1tnXSl9d2hpbGUoZj1mLm5leHRTaWJsaW5nKX19fX19KSgpO2EuYihcInZpcnR1YWxFbGVtZW50c1wiLGEuaCk7YS5iKFwidmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5nc1wiLGEuaC5lYSk7YS5iKFwidmlydHVhbEVsZW1lbnRzLmVtcHR5Tm9kZVwiLGEuaC5FYSk7YS5iKFwidmlydHVhbEVsZW1lbnRzLmluc2VydEFmdGVyXCIsYS5oLldiKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMucHJlcGVuZFwiLGEuaC5WYyk7YS5iKFwidmlydHVhbEVsZW1lbnRzLnNldERvbU5vZGVDaGlsZHJlblwiLGEuaC52YSk7KGZ1bmN0aW9uKCl7YS5nYT1mdW5jdGlvbigpe3RoaXMubmQ9e319O2EuYS5leHRlbmQoYS5nYS5wcm90b3R5cGUse25vZGVIYXNCaW5kaW5nczpmdW5jdGlvbihiKXtzd2l0Y2goYi5ub2RlVHlwZSl7Y2FzZSAxOnJldHVybiBudWxsIT1cbmIuZ2V0QXR0cmlidXRlKFwiZGF0YS1iaW5kXCIpfHxhLmouZ2V0Q29tcG9uZW50TmFtZUZvck5vZGUoYik7Y2FzZSA4OnJldHVybiBhLmguQ2QoYik7ZGVmYXVsdDpyZXR1cm4hMX19LGdldEJpbmRpbmdzOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9dGhpcy5nZXRCaW5kaW5nc1N0cmluZyhiLGMpLGQ9ZD90aGlzLnBhcnNlQmluZGluZ3NTdHJpbmcoZCxjLGIpOm51bGw7cmV0dXJuIGEuai50YyhkLGIsYywhMSl9LGdldEJpbmRpbmdBY2Nlc3NvcnM6ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLmdldEJpbmRpbmdzU3RyaW5nKGIsYyksZD1kP3RoaXMucGFyc2VCaW5kaW5nc1N0cmluZyhkLGMsYix7dmFsdWVBY2Nlc3NvcnM6ITB9KTpudWxsO3JldHVybiBhLmoudGMoZCxiLGMsITApfSxnZXRCaW5kaW5nc1N0cmluZzpmdW5jdGlvbihiKXtzd2l0Y2goYi5ub2RlVHlwZSl7Y2FzZSAxOnJldHVybiBiLmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKTtjYXNlIDg6cmV0dXJuIGEuaC5WZChiKTtkZWZhdWx0OnJldHVybiBudWxsfX0sXG5wYXJzZUJpbmRpbmdzU3RyaW5nOmZ1bmN0aW9uKGIsYyxkLGUpe3RyeXt2YXIgZj10aGlzLm5kLGc9YisoZSYmZS52YWx1ZUFjY2Vzc29yc3x8XCJcIiksaDtpZighKGg9ZltnXSkpe3ZhciBtLGs9XCJ3aXRoKCRjb250ZXh0KXt3aXRoKCRkYXRhfHx7fSl7cmV0dXJue1wiK2EubS52YihiLGUpK1wifX19XCI7bT1uZXcgRnVuY3Rpb24oXCIkY29udGV4dFwiLFwiJGVsZW1lbnRcIixrKTtoPWZbZ109bX1yZXR1cm4gaChjLGQpfWNhdGNoKGwpe3Rocm93IGwubWVzc2FnZT1cIlVuYWJsZSB0byBwYXJzZSBiaW5kaW5ncy5cXG5CaW5kaW5ncyB2YWx1ZTogXCIrYitcIlxcbk1lc3NhZ2U6IFwiK2wubWVzc2FnZSxsO319fSk7YS5nYS5pbnN0YW5jZT1uZXcgYS5nYX0pKCk7YS5iKFwiYmluZGluZ1Byb3ZpZGVyXCIsYS5nYSk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiKXt2YXIgYz0oYj1hLmEuZy5nZXQoYix6KSkmJmIuTjtjJiYoYi5OPW51bGwsYy5UYygpKX1mdW5jdGlvbiBjKGMsZCxlKXt0aGlzLm5vZGU9Yzt0aGlzLnljPVxuZDt0aGlzLmtiPVtdO3RoaXMuSD0hMTtkLk58fGEuYS5LLnphKGMsYik7ZSYmZS5OJiYoZS5OLmtiLnB1c2goYyksdGhpcy5LYj1lKX1mdW5jdGlvbiBkKGEpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhfX1mdW5jdGlvbiBlKGEpe3JldHVybiBhKCl9ZnVuY3Rpb24gZihiKXtyZXR1cm4gYS5hLkdhKGEudS5HKGIpLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGIoKVtjXX19KX1mdW5jdGlvbiBnKGIsYyxlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9mKGIuYmluZChudWxsLGMsZSkpOmEuYS5HYShiLGQpfWZ1bmN0aW9uIGgoYSxiKXtyZXR1cm4gZih0aGlzLmdldEJpbmRpbmdzLmJpbmQodGhpcyxhLGIpKX1mdW5jdGlvbiBtKGIsYyl7dmFyIGQ9YS5oLmZpcnN0Q2hpbGQoYyk7aWYoZCl7dmFyIGUsZj1hLmdhLmluc3RhbmNlLGw9Zi5wcmVwcm9jZXNzTm9kZTtpZihsKXtmb3IoO2U9ZDspZD1hLmgubmV4dFNpYmxpbmcoZSksbC5jYWxsKGYsZSk7XG5kPWEuaC5maXJzdENoaWxkKGMpfWZvcig7ZT1kOylkPWEuaC5uZXh0U2libGluZyhlKSxrKGIsZSl9YS5pLm1hKGMsYS5pLkgpfWZ1bmN0aW9uIGsoYixjKXt2YXIgZD1iLGU9MT09PWMubm9kZVR5cGU7ZSYmYS5oLlNjKGMpO2lmKGV8fGEuZ2EuaW5zdGFuY2Uubm9kZUhhc0JpbmRpbmdzKGMpKWQ9cChjLG51bGwsYikuYmluZGluZ0NvbnRleHRGb3JEZXNjZW5kYW50cztkJiYhdVthLmEuUihjKV0mJm0oZCxjKX1mdW5jdGlvbiBsKGIpe3ZhciBjPVtdLGQ9e30sZT1bXTthLmEuUChiLGZ1bmN0aW9uIGNhKGYpe2lmKCFkW2ZdKXt2YXIgaz1hLmdldEJpbmRpbmdIYW5kbGVyKGYpO2smJihrLmFmdGVyJiYoZS5wdXNoKGYpLGEuYS5EKGsuYWZ0ZXIsZnVuY3Rpb24oYyl7aWYoYltjXSl7aWYoLTEhPT1hLmEuQShlLGMpKXRocm93IEVycm9yKFwiQ2Fubm90IGNvbWJpbmUgdGhlIGZvbGxvd2luZyBiaW5kaW5ncywgYmVjYXVzZSB0aGV5IGhhdmUgYSBjeWNsaWMgZGVwZW5kZW5jeTogXCIrZS5qb2luKFwiLCBcIikpO1xuY2EoYyl9fSksZS5sZW5ndGgtLSksYy5wdXNoKHtrZXk6ZixNYzprfSkpO2RbZl09ITB9fSk7cmV0dXJuIGN9ZnVuY3Rpb24gcChiLGMsZCl7dmFyIGY9YS5hLmcuVWIoYix6LHt9KSxrPWYuaGQ7aWYoIWMpe2lmKGspdGhyb3cgRXJyb3IoXCJZb3UgY2Fubm90IGFwcGx5IGJpbmRpbmdzIG11bHRpcGxlIHRpbWVzIHRvIHRoZSBzYW1lIGVsZW1lbnQuXCIpO2YuaGQ9ITB9a3x8KGYuY29udGV4dD1kKTtmLlpifHwoZi5aYj17fSk7dmFyIGc7aWYoYyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGMpZz1jO2Vsc2V7dmFyIHA9YS5nYS5pbnN0YW5jZSxxPXAuZ2V0QmluZGluZ0FjY2Vzc29yc3x8aCxtPWEuJChmdW5jdGlvbigpe2lmKGc9Yz9jKGQsYik6cS5jYWxsKHAsYixkKSl7aWYoZFt0XSlkW3RdKCk7aWYoZFtCXSlkW0JdKCl9cmV0dXJuIGd9LG51bGwse2w6Yn0pO2cmJm0uamEoKXx8KG09bnVsbCl9dmFyIHg9ZCx1O2lmKGcpe3ZhciBKPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYS5HYShtP20oKTpcbmcsZSl9LHI9bT9mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZShtKClbYV0pfX06ZnVuY3Rpb24oYSl7cmV0dXJuIGdbYV19O0ouZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBnW2FdJiZlKHIoYSkpfTtKLmhhcz1mdW5jdGlvbihhKXtyZXR1cm4gYSBpbiBnfTthLmkuSCBpbiBnJiZhLmkuc3Vic2NyaWJlKGIsYS5pLkgsZnVuY3Rpb24oKXt2YXIgYz0oMCxnW2EuaS5IXSkoKTtpZihjKXt2YXIgZD1hLmguY2hpbGROb2RlcyhiKTtkLmxlbmd0aCYmYyhkLGEuRWMoZFswXSkpfX0pO2EuaS5wYSBpbiBnJiYoeD1hLmkuQ2IoYixkKSxhLmkuc3Vic2NyaWJlKGIsYS5pLnBhLGZ1bmN0aW9uKCl7dmFyIGM9KDAsZ1thLmkucGFdKSgpO2MmJmEuaC5maXJzdENoaWxkKGIpJiZjKGIpfSkpO2Y9bChnKTthLmEuRChmLGZ1bmN0aW9uKGMpe3ZhciBkPWMuTWMuaW5pdCxlPWMuTWMudXBkYXRlLGY9Yy5rZXk7aWYoOD09PWIubm9kZVR5cGUmJiFhLmguZWFbZl0pdGhyb3cgRXJyb3IoXCJUaGUgYmluZGluZyAnXCIrXG5mK1wiJyBjYW5ub3QgYmUgdXNlZCB3aXRoIHZpcnR1YWwgZWxlbWVudHNcIik7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIGQmJmEudS5HKGZ1bmN0aW9uKCl7dmFyIGE9ZChiLHIoZiksSix4LiRkYXRhLHgpO2lmKGEmJmEuY29udHJvbHNEZXNjZW5kYW50QmluZGluZ3Mpe2lmKHUhPT1uKXRocm93IEVycm9yKFwiTXVsdGlwbGUgYmluZGluZ3MgKFwiK3UrXCIgYW5kIFwiK2YrXCIpIGFyZSB0cnlpbmcgdG8gY29udHJvbCBkZXNjZW5kYW50IGJpbmRpbmdzIG9mIHRoZSBzYW1lIGVsZW1lbnQuIFlvdSBjYW5ub3QgdXNlIHRoZXNlIGJpbmRpbmdzIHRvZ2V0aGVyIG9uIHRoZSBzYW1lIGVsZW1lbnQuXCIpO3U9Zn19KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZhLiQoZnVuY3Rpb24oKXtlKGIscihmKSxKLHguJGRhdGEseCl9LG51bGwse2w6Yn0pfWNhdGNoKGspe3Rocm93IGsubWVzc2FnZT0nVW5hYmxlIHRvIHByb2Nlc3MgYmluZGluZyBcIicrZitcIjogXCIrZ1tmXSsnXCJcXG5NZXNzYWdlOiAnK2subWVzc2FnZSxcbms7fX0pfWY9dT09PW47cmV0dXJue3Nob3VsZEJpbmREZXNjZW5kYW50czpmLGJpbmRpbmdDb250ZXh0Rm9yRGVzY2VuZGFudHM6ZiYmeH19ZnVuY3Rpb24gcShiLGMpe3JldHVybiBiJiZiIGluc3RhbmNlb2YgYS5mYT9iOm5ldyBhLmZhKGIsbixuLGMpfXZhciB0PWEuYS5EYShcIl9zdWJzY3JpYmFibGVcIikseD1hLmEuRGEoXCJfYW5jZXN0b3JCaW5kaW5nSW5mb1wiKSxCPWEuYS5EYShcIl9kYXRhRGVwZW5kZW5jeVwiKTthLmM9e307dmFyIHU9e3NjcmlwdDohMCx0ZXh0YXJlYTohMCx0ZW1wbGF0ZTohMH07YS5nZXRCaW5kaW5nSGFuZGxlcj1mdW5jdGlvbihiKXtyZXR1cm4gYS5jW2JdfTt2YXIgSj17fTthLmZhPWZ1bmN0aW9uKGIsYyxkLGUsZil7ZnVuY3Rpb24gaygpe3ZhciBiPXA/aCgpOmgsZj1hLmEuZihiKTtjPyhhLmEuZXh0ZW5kKGwsYykseCBpbiBjJiYobFt4XT1jW3hdKSk6KGwuJHBhcmVudHM9W10sbC4kcm9vdD1mLGwua289YSk7bFt0XT1xO2c/Zj1sLiRkYXRhOihsLiRyYXdEYXRhPVxuYixsLiRkYXRhPWYpO2QmJihsW2RdPWYpO2UmJmUobCxjLGYpO2lmKGMmJmNbdF0mJiFhLlMubygpLlZiKGNbdF0pKWNbdF0oKTttJiYobFtCXT1tKTtyZXR1cm4gbC4kZGF0YX12YXIgbD10aGlzLGc9Yj09PUosaD1nP246YixwPVwiZnVuY3Rpb25cIj09dHlwZW9mIGgmJiFhLk8oaCkscSxtPWYmJmYuZGF0YURlcGVuZGVuY3k7ZiYmZi5leHBvcnREZXBlbmRlbmNpZXM/aygpOihxPWEueGIoaykscS52KCkscS5qYSgpP3EuZXF1YWxpdHlDb21wYXJlcj1udWxsOmxbdF09bil9O2EuZmEucHJvdG90eXBlLmNyZWF0ZUNoaWxkQ29udGV4dD1mdW5jdGlvbihiLGMsZCxlKXshZSYmYyYmXCJvYmplY3RcIj09dHlwZW9mIGMmJihlPWMsYz1lLmFzLGQ9ZS5leHRlbmQpO2lmKGMmJmUmJmUubm9DaGlsZENvbnRleHQpe3ZhciBmPVwiZnVuY3Rpb25cIj09dHlwZW9mIGImJiFhLk8oYik7cmV0dXJuIG5ldyBhLmZhKEosdGhpcyxudWxsLGZ1bmN0aW9uKGEpe2QmJmQoYSk7YVtjXT1mP2IoKTpifSxlKX1yZXR1cm4gbmV3IGEuZmEoYixcbnRoaXMsYyxmdW5jdGlvbihhLGIpe2EuJHBhcmVudENvbnRleHQ9YjthLiRwYXJlbnQ9Yi4kZGF0YTthLiRwYXJlbnRzPShiLiRwYXJlbnRzfHxbXSkuc2xpY2UoMCk7YS4kcGFyZW50cy51bnNoaWZ0KGEuJHBhcmVudCk7ZCYmZChhKX0sZSl9O2EuZmEucHJvdG90eXBlLmV4dGVuZD1mdW5jdGlvbihiLGMpe3JldHVybiBuZXcgYS5mYShKLHRoaXMsbnVsbCxmdW5jdGlvbihjKXthLmEuZXh0ZW5kKGMsXCJmdW5jdGlvblwiPT10eXBlb2YgYj9iKGMpOmIpfSxjKX07dmFyIHo9YS5hLmcuWigpO2MucHJvdG90eXBlLlRjPWZ1bmN0aW9uKCl7dGhpcy5LYiYmdGhpcy5LYi5OJiZ0aGlzLktiLk4uc2QodGhpcy5ub2RlKX07Yy5wcm90b3R5cGUuc2Q9ZnVuY3Rpb24oYil7YS5hLlBhKHRoaXMua2IsYik7IXRoaXMua2IubGVuZ3RoJiZ0aGlzLkgmJnRoaXMuQ2MoKX07Yy5wcm90b3R5cGUuQ2M9ZnVuY3Rpb24oKXt0aGlzLkg9ITA7dGhpcy55Yy5OJiYhdGhpcy5rYi5sZW5ndGgmJih0aGlzLnljLk49XG5udWxsLGEuYS5LLnliKHRoaXMubm9kZSxiKSxhLmkubWEodGhpcy5ub2RlLGEuaS5wYSksdGhpcy5UYygpKX07YS5pPXtIOlwiY2hpbGRyZW5Db21wbGV0ZVwiLHBhOlwiZGVzY2VuZGFudHNDb21wbGV0ZVwiLHN1YnNjcmliZTpmdW5jdGlvbihiLGMsZCxlLGYpe3ZhciBrPWEuYS5nLlViKGIseix7fSk7ay5GYXx8KGsuRmE9bmV3IGEuVCk7ZiYmZi5ub3RpZnlJbW1lZGlhdGVseSYmay5aYltjXSYmYS51LkcoZCxlLFtiXSk7cmV0dXJuIGsuRmEuc3Vic2NyaWJlKGQsZSxjKX0sbWE6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZy5nZXQoYix6KTtpZihkJiYoZC5aYltjXT0hMCxkLkZhJiZkLkZhLm5vdGlmeVN1YnNjcmliZXJzKGIsYyksYz09YS5pLkgpKWlmKGQuTilkLk4uQ2MoKTtlbHNlIGlmKGQuTj09PW4mJmQuRmEmJmQuRmEuV2EoYS5pLnBhKSl0aHJvdyBFcnJvcihcImRlc2NlbmRhbnRzQ29tcGxldGUgZXZlbnQgbm90IHN1cHBvcnRlZCBmb3IgYmluZGluZ3Mgb24gdGhpcyBub2RlXCIpO1xufSxDYjpmdW5jdGlvbihiLGQpe3ZhciBlPWEuYS5nLlViKGIseix7fSk7ZS5OfHwoZS5OPW5ldyBjKGIsZSxkW3hdKSk7cmV0dXJuIGRbeF09PWU/ZDpkLmV4dGVuZChmdW5jdGlvbihhKXthW3hdPWV9KX19O2EuVGQ9ZnVuY3Rpb24oYil7cmV0dXJuKGI9YS5hLmcuZ2V0KGIseikpJiZiLmNvbnRleHR9O2EuaWI9ZnVuY3Rpb24oYixjLGQpezE9PT1iLm5vZGVUeXBlJiZhLmguU2MoYik7cmV0dXJuIHAoYixjLHEoZCkpfTthLmxkPWZ1bmN0aW9uKGIsYyxkKXtkPXEoZCk7cmV0dXJuIGEuaWIoYixnKGMsZCxiKSxkKX07YS5PYT1mdW5jdGlvbihhLGIpezEhPT1iLm5vZGVUeXBlJiY4IT09Yi5ub2RlVHlwZXx8bShxKGEpLGIpfTthLnZjPWZ1bmN0aW9uKGEsYixjKXshdiYmQS5qUXVlcnkmJih2PUEualF1ZXJ5KTtpZigyPmFyZ3VtZW50cy5sZW5ndGgpe2lmKGI9dy5ib2R5LCFiKXRocm93IEVycm9yKFwia28uYXBwbHlCaW5kaW5nczogY291bGQgbm90IGZpbmQgZG9jdW1lbnQuYm9keTsgaGFzIHRoZSBkb2N1bWVudCBiZWVuIGxvYWRlZD9cIik7XG59ZWxzZSBpZighYnx8MSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlKXRocm93IEVycm9yKFwia28uYXBwbHlCaW5kaW5nczogZmlyc3QgcGFyYW1ldGVyIHNob3VsZCBiZSB5b3VyIHZpZXcgbW9kZWw7IHNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgRE9NIG5vZGVcIik7ayhxKGEsYyksYil9O2EuRGM9ZnVuY3Rpb24oYil7cmV0dXJuIWJ8fDEhPT1iLm5vZGVUeXBlJiY4IT09Yi5ub2RlVHlwZT9uOmEuVGQoYil9O2EuRWM9ZnVuY3Rpb24oYil7cmV0dXJuKGI9YS5EYyhiKSk/Yi4kZGF0YTpufTthLmIoXCJiaW5kaW5nSGFuZGxlcnNcIixhLmMpO2EuYihcImJpbmRpbmdFdmVudFwiLGEuaSk7YS5iKFwiYmluZGluZ0V2ZW50LnN1YnNjcmliZVwiLGEuaS5zdWJzY3JpYmUpO2EuYihcImJpbmRpbmdFdmVudC5zdGFydFBvc3NpYmx5QXN5bmNDb250ZW50QmluZGluZ1wiLGEuaS5DYik7YS5iKFwiYXBwbHlCaW5kaW5nc1wiLGEudmMpO2EuYihcImFwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzXCIsYS5PYSk7XG5hLmIoXCJhcHBseUJpbmRpbmdBY2Nlc3NvcnNUb05vZGVcIixhLmliKTthLmIoXCJhcHBseUJpbmRpbmdzVG9Ob2RlXCIsYS5sZCk7YS5iKFwiY29udGV4dEZvclwiLGEuRGMpO2EuYihcImRhdGFGb3JcIixhLkVjKX0pKCk7KGZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoYyxlKXt2YXIgaz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZixjKT9mW2NdOmIsbDtrP2suc3Vic2NyaWJlKGUpOihrPWZbY109bmV3IGEuVCxrLnN1YnNjcmliZShlKSxkKGMsZnVuY3Rpb24oYixkKXt2YXIgZT0hKCFkfHwhZC5zeW5jaHJvbm91cyk7Z1tjXT17ZGVmaW5pdGlvbjpiLEdkOmV9O2RlbGV0ZSBmW2NdO2x8fGU/ay5ub3RpZnlTdWJzY3JpYmVycyhiKTphLm5hLnpiKGZ1bmN0aW9uKCl7ay5ub3RpZnlTdWJzY3JpYmVycyhiKX0pfSksbD0hMCl9ZnVuY3Rpb24gZChhLGIpe2UoXCJnZXRDb25maWdcIixbYV0sZnVuY3Rpb24oYyl7Yz9lKFwibG9hZENvbXBvbmVudFwiLFthLGNdLGZ1bmN0aW9uKGEpe2IoYSxcbmMpfSk6YihudWxsLG51bGwpfSl9ZnVuY3Rpb24gZShjLGQsZixsKXtsfHwobD1hLmoubG9hZGVycy5zbGljZSgwKSk7dmFyIGc9bC5zaGlmdCgpO2lmKGcpe3ZhciBxPWdbY107aWYocSl7dmFyIHQ9ITE7aWYocS5hcHBseShnLGQuY29uY2F0KGZ1bmN0aW9uKGEpe3Q/ZihudWxsKTpudWxsIT09YT9mKGEpOmUoYyxkLGYsbCl9KSkhPT1iJiYodD0hMCwhZy5zdXBwcmVzc0xvYWRlckV4Y2VwdGlvbnMpKXRocm93IEVycm9yKFwiQ29tcG9uZW50IGxvYWRlcnMgbXVzdCBzdXBwbHkgdmFsdWVzIGJ5IGludm9raW5nIHRoZSBjYWxsYmFjaywgbm90IGJ5IHJldHVybmluZyB2YWx1ZXMgc3luY2hyb25vdXNseS5cIik7fWVsc2UgZShjLGQsZixsKX1lbHNlIGYobnVsbCl9dmFyIGY9e30sZz17fTthLmo9e2dldDpmdW5jdGlvbihkLGUpe3ZhciBmPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChnLGQpP2dbZF06YjtmP2YuR2Q/YS51LkcoZnVuY3Rpb24oKXtlKGYuZGVmaW5pdGlvbil9KTpcbmEubmEuemIoZnVuY3Rpb24oKXtlKGYuZGVmaW5pdGlvbil9KTpjKGQsZSl9LEJjOmZ1bmN0aW9uKGEpe2RlbGV0ZSBnW2FdfSxvYzplfTthLmoubG9hZGVycz1bXTthLmIoXCJjb21wb25lbnRzXCIsYS5qKTthLmIoXCJjb21wb25lbnRzLmdldFwiLGEuai5nZXQpO2EuYihcImNvbXBvbmVudHMuY2xlYXJDYWNoZWREZWZpbml0aW9uXCIsYS5qLkJjKX0pKCk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZCxlKXtmdW5jdGlvbiBnKCl7MD09PS0tQiYmZShoKX12YXIgaD17fSxCPTIsdT1kLnRlbXBsYXRlO2Q9ZC52aWV3TW9kZWw7dT9mKGMsdSxmdW5jdGlvbihjKXthLmoub2MoXCJsb2FkVGVtcGxhdGVcIixbYixjXSxmdW5jdGlvbihhKXtoLnRlbXBsYXRlPWE7ZygpfSl9KTpnKCk7ZD9mKGMsZCxmdW5jdGlvbihjKXthLmoub2MoXCJsb2FkVmlld01vZGVsXCIsW2IsY10sZnVuY3Rpb24oYSl7aFttXT1hO2coKX0pfSk6ZygpfWZ1bmN0aW9uIGMoYSxiLGQpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKWQoZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBiKGEpfSk7XG5lbHNlIGlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiW21dKWQoYlttXSk7ZWxzZSBpZihcImluc3RhbmNlXCJpbiBiKXt2YXIgZT1iLmluc3RhbmNlO2QoZnVuY3Rpb24oKXtyZXR1cm4gZX0pfWVsc2VcInZpZXdNb2RlbFwiaW4gYj9jKGEsYi52aWV3TW9kZWwsZCk6YShcIlVua25vd24gdmlld01vZGVsIHZhbHVlOiBcIitiKX1mdW5jdGlvbiBkKGIpe3N3aXRjaChhLmEuUihiKSl7Y2FzZSBcInNjcmlwdFwiOnJldHVybiBhLmEudWEoYi50ZXh0KTtjYXNlIFwidGV4dGFyZWFcIjpyZXR1cm4gYS5hLnVhKGIudmFsdWUpO2Nhc2UgXCJ0ZW1wbGF0ZVwiOmlmKGUoYi5jb250ZW50KSlyZXR1cm4gYS5hLkNhKGIuY29udGVudC5jaGlsZE5vZGVzKX1yZXR1cm4gYS5hLkNhKGIuY2hpbGROb2Rlcyl9ZnVuY3Rpb24gZShhKXtyZXR1cm4gQS5Eb2N1bWVudEZyYWdtZW50P2EgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50OmEmJjExPT09YS5ub2RlVHlwZX1mdW5jdGlvbiBmKGEsYixjKXtcInN0cmluZ1wiPT09dHlwZW9mIGIucmVxdWlyZT9cblR8fEEucmVxdWlyZT8oVHx8QS5yZXF1aXJlKShbYi5yZXF1aXJlXSxmdW5jdGlvbihhKXthJiZcIm9iamVjdFwiPT09dHlwZW9mIGEmJmEuWGQmJmFbXCJkZWZhdWx0XCJdJiYoYT1hW1wiZGVmYXVsdFwiXSk7YyhhKX0pOmEoXCJVc2VzIHJlcXVpcmUsIGJ1dCBubyBBTUQgbG9hZGVyIGlzIHByZXNlbnRcIik6YyhiKX1mdW5jdGlvbiBnKGEpe3JldHVybiBmdW5jdGlvbihiKXt0aHJvdyBFcnJvcihcIkNvbXBvbmVudCAnXCIrYStcIic6IFwiK2IpO319dmFyIGg9e307YS5qLnJlZ2lzdGVyPWZ1bmN0aW9uKGIsYyl7aWYoIWMpdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGNvbmZpZ3VyYXRpb24gZm9yIFwiK2IpO2lmKGEuai50YihiKSl0aHJvdyBFcnJvcihcIkNvbXBvbmVudCBcIitiK1wiIGlzIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtoW2JdPWN9O2Euai50Yj1mdW5jdGlvbihhKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGgsYSl9O2Euai51bnJlZ2lzdGVyPWZ1bmN0aW9uKGIpe2RlbGV0ZSBoW2JdO1xuYS5qLkJjKGIpfTthLmouRmM9e2dldENvbmZpZzpmdW5jdGlvbihiLGMpe2MoYS5qLnRiKGIpP2hbYl06bnVsbCl9LGxvYWRDb21wb25lbnQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlPWcoYSk7ZihlLGMsZnVuY3Rpb24oYyl7YihhLGUsYyxkKX0pfSxsb2FkVGVtcGxhdGU6ZnVuY3Rpb24oYixjLGYpe2I9ZyhiKTtpZihcInN0cmluZ1wiPT09dHlwZW9mIGMpZihhLmEudWEoYykpO2Vsc2UgaWYoYyBpbnN0YW5jZW9mIEFycmF5KWYoYyk7ZWxzZSBpZihlKGMpKWYoYS5hLmxhKGMuY2hpbGROb2RlcykpO2Vsc2UgaWYoYy5lbGVtZW50KWlmKGM9Yy5lbGVtZW50LEEuSFRNTEVsZW1lbnQ/YyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50OmMmJmMudGFnTmFtZSYmMT09PWMubm9kZVR5cGUpZihkKGMpKTtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgYyl7dmFyIGg9dy5nZXRFbGVtZW50QnlJZChjKTtoP2YoZChoKSk6YihcIkNhbm5vdCBmaW5kIGVsZW1lbnQgd2l0aCBJRCBcIitjKX1lbHNlIGIoXCJVbmtub3duIGVsZW1lbnQgdHlwZTogXCIrXG5jKTtlbHNlIGIoXCJVbmtub3duIHRlbXBsYXRlIHZhbHVlOiBcIitjKX0sbG9hZFZpZXdNb2RlbDpmdW5jdGlvbihhLGIsZCl7YyhnKGEpLGIsZCl9fTt2YXIgbT1cImNyZWF0ZVZpZXdNb2RlbFwiO2EuYihcImNvbXBvbmVudHMucmVnaXN0ZXJcIixhLmoucmVnaXN0ZXIpO2EuYihcImNvbXBvbmVudHMuaXNSZWdpc3RlcmVkXCIsYS5qLnRiKTthLmIoXCJjb21wb25lbnRzLnVucmVnaXN0ZXJcIixhLmoudW5yZWdpc3Rlcik7YS5iKFwiY29tcG9uZW50cy5kZWZhdWx0TG9hZGVyXCIsYS5qLkZjKTthLmoubG9hZGVycy5wdXNoKGEuai5GYyk7YS5qLmRkPWh9KSgpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixlKXt2YXIgZj1iLmdldEF0dHJpYnV0ZShcInBhcmFtc1wiKTtpZihmKXt2YXIgZj1jLnBhcnNlQmluZGluZ3NTdHJpbmcoZixlLGIse3ZhbHVlQWNjZXNzb3JzOiEwLGJpbmRpbmdQYXJhbXM6ITB9KSxmPWEuYS5HYShmLGZ1bmN0aW9uKGMpe3JldHVybiBhLm8oYyxudWxsLHtsOmJ9KX0pLGc9YS5hLkdhKGYsXG5mdW5jdGlvbihjKXt2YXIgZT1jLnYoKTtyZXR1cm4gYy5qYSgpP2Eubyh7cmVhZDpmdW5jdGlvbigpe3JldHVybiBhLmEuZihjKCkpfSx3cml0ZTphLlphKGUpJiZmdW5jdGlvbihhKXtjKCkoYSl9LGw6Yn0pOmV9KTtPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZyxcIiRyYXdcIil8fChnLiRyYXc9Zik7cmV0dXJuIGd9cmV0dXJueyRyYXc6e319fWEuai5nZXRDb21wb25lbnROYW1lRm9yTm9kZT1mdW5jdGlvbihiKXt2YXIgYz1hLmEuUihiKTtpZihhLmoudGIoYykmJigtMSE9Yy5pbmRleE9mKFwiLVwiKXx8XCJbb2JqZWN0IEhUTUxVbmtub3duRWxlbWVudF1cIj09XCJcIitifHw4Pj1hLmEuVyYmYi50YWdOYW1lPT09YykpcmV0dXJuIGN9O2Euai50Yz1mdW5jdGlvbihjLGUsZixnKXtpZigxPT09ZS5ub2RlVHlwZSl7dmFyIGg9YS5qLmdldENvbXBvbmVudE5hbWVGb3JOb2RlKGUpO2lmKGgpe2M9Y3x8e307aWYoYy5jb21wb25lbnQpdGhyb3cgRXJyb3IoJ0Nhbm5vdCB1c2UgdGhlIFwiY29tcG9uZW50XCIgYmluZGluZyBvbiBhIGN1c3RvbSBlbGVtZW50IG1hdGNoaW5nIGEgY29tcG9uZW50Jyk7XG52YXIgbT17bmFtZTpoLHBhcmFtczpiKGUsZil9O2MuY29tcG9uZW50PWc/ZnVuY3Rpb24oKXtyZXR1cm4gbX06bX19cmV0dXJuIGN9O3ZhciBjPW5ldyBhLmdhOzk+YS5hLlcmJihhLmoucmVnaXN0ZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KGEuai5yZWdpc3Rlciksdy5jcmVhdGVEb2N1bWVudEZyYWdtZW50PWZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBjPWIoKSxmPWEuai5kZCxnO2ZvcihnIGluIGYpO3JldHVybiBjfX0ody5jcmVhdGVEb2N1bWVudEZyYWdtZW50KSl9KSgpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjLGQpe2M9Yy50ZW1wbGF0ZTtpZighYyl0aHJvdyBFcnJvcihcIkNvbXBvbmVudCAnXCIrYitcIicgaGFzIG5vIHRlbXBsYXRlXCIpO2I9YS5hLkNhKGMpO2EuaC52YShkLGIpfWZ1bmN0aW9uIGMoYSxiLGMpe3ZhciBkPWEuY3JlYXRlVmlld01vZGVsO3JldHVybiBkP2QuY2FsbChhLFxuYixjKTpifXZhciBkPTA7YS5jLmNvbXBvbmVudD17aW5pdDpmdW5jdGlvbihlLGYsZyxoLG0pe2Z1bmN0aW9uIGsoKXt2YXIgYT1sJiZsLmRpc3Bvc2U7XCJmdW5jdGlvblwiPT09dHlwZW9mIGEmJmEuY2FsbChsKTtxJiZxLnMoKTtwPWw9cT1udWxsfXZhciBsLHAscSx0PWEuYS5sYShhLmguY2hpbGROb2RlcyhlKSk7YS5oLkVhKGUpO2EuYS5LLnphKGUsayk7YS5vKGZ1bmN0aW9uKCl7dmFyIGc9YS5hLmYoZigpKSxoLHU7XCJzdHJpbmdcIj09PXR5cGVvZiBnP2g9ZzooaD1hLmEuZihnLm5hbWUpLHU9YS5hLmYoZy5wYXJhbXMpKTtpZighaCl0aHJvdyBFcnJvcihcIk5vIGNvbXBvbmVudCBuYW1lIHNwZWNpZmllZFwiKTt2YXIgbj1hLmkuQ2IoZSxtKSx6PXA9KytkO2Euai5nZXQoaCxmdW5jdGlvbihkKXtpZihwPT09eil7aygpO2lmKCFkKXRocm93IEVycm9yKFwiVW5rbm93biBjb21wb25lbnQgJ1wiK2grXCInXCIpO2IoaCxkLGUpO3ZhciBmPWMoZCx1LHtlbGVtZW50OmUsdGVtcGxhdGVOb2Rlczp0fSk7XG5kPW4uY3JlYXRlQ2hpbGRDb250ZXh0KGYse2V4dGVuZDpmdW5jdGlvbihhKXthLiRjb21wb25lbnQ9ZjthLiRjb21wb25lbnRUZW1wbGF0ZU5vZGVzPXR9fSk7ZiYmZi5rb0Rlc2NlbmRhbnRzQ29tcGxldGUmJihxPWEuaS5zdWJzY3JpYmUoZSxhLmkucGEsZi5rb0Rlc2NlbmRhbnRzQ29tcGxldGUsZikpO2w9ZjthLk9hKGQsZSl9fSl9LG51bGwse2w6ZX0pO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19fTthLmguZWEuY29tcG9uZW50PSEwfSkoKTt2YXIgVj17XCJjbGFzc1wiOlwiY2xhc3NOYW1lXCIsXCJmb3JcIjpcImh0bWxGb3JcIn07YS5jLmF0dHI9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5mKGMoKSl8fHt9O2EuYS5QKGQsZnVuY3Rpb24oYyxkKXtkPWEuYS5mKGQpO3ZhciBnPWMuaW5kZXhPZihcIjpcIiksZz1cImxvb2t1cE5hbWVzcGFjZVVSSVwiaW4gYiYmMDxnJiZiLmxvb2t1cE5hbWVzcGFjZVVSSShjLnN1YnN0cigwLGcpKSxoPSExPT09ZHx8bnVsbD09PVxuZHx8ZD09PW47aD9nP2IucmVtb3ZlQXR0cmlidXRlTlMoZyxjKTpiLnJlbW92ZUF0dHJpYnV0ZShjKTpkPWQudG9TdHJpbmcoKTs4Pj1hLmEuVyYmYyBpbiBWPyhjPVZbY10saD9iLnJlbW92ZUF0dHJpYnV0ZShjKTpiW2NdPWQpOmh8fChnP2Iuc2V0QXR0cmlidXRlTlMoZyxjLGQpOmIuc2V0QXR0cmlidXRlKGMsZCkpO1wibmFtZVwiPT09YyYmYS5hLlljKGIsaD9cIlwiOmQpfSl9fTsoZnVuY3Rpb24oKXthLmMuY2hlY2tlZD17YWZ0ZXI6W1widmFsdWVcIixcImF0dHJcIl0saW5pdDpmdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZSgpe3ZhciBlPWIuY2hlY2tlZCxmPWcoKTtpZighYS5TLllhKCkmJihlfHwhbSYmIWEuUy5xYSgpKSl7dmFyIGs9YS51LkcoYyk7aWYobCl7dmFyIHE9cD9rLnYoKTprLHo9dDt0PWY7eiE9PWY/ZSYmKGEuYS5OYShxLGYsITApLGEuYS5OYShxLHosITEpKTphLmEuTmEocSxmLGUpO3AmJmEuWmEoaykmJmsocSl9ZWxzZSBoJiYoZj09PW4/Zj1lOmV8fChmPW4pKSxhLm0uZWIoayxcbmQsXCJjaGVja2VkXCIsZiwhMCl9fWZ1bmN0aW9uIGYoKXt2YXIgZD1hLmEuZihjKCkpLGU9ZygpO2w/KGIuY2hlY2tlZD0wPD1hLmEuQShkLGUpLHQ9ZSk6Yi5jaGVja2VkPWgmJmU9PT1uPyEhZDpnKCk9PT1kfXZhciBnPWEueGIoZnVuY3Rpb24oKXtpZihkLmhhcyhcImNoZWNrZWRWYWx1ZVwiKSlyZXR1cm4gYS5hLmYoZC5nZXQoXCJjaGVja2VkVmFsdWVcIikpO2lmKHEpcmV0dXJuIGQuaGFzKFwidmFsdWVcIik/YS5hLmYoZC5nZXQoXCJ2YWx1ZVwiKSk6Yi52YWx1ZX0pLGg9XCJjaGVja2JveFwiPT1iLnR5cGUsbT1cInJhZGlvXCI9PWIudHlwZTtpZihofHxtKXt2YXIgaz1jKCksbD1oJiZhLmEuZihrKWluc3RhbmNlb2YgQXJyYXkscD0hKGwmJmsucHVzaCYmay5zcGxpY2UpLHE9bXx8bCx0PWw/ZygpOm47bSYmIWIubmFtZSYmYS5jLnVuaXF1ZU5hbWUuaW5pdChiLGZ1bmN0aW9uKCl7cmV0dXJuITB9KTthLm8oZSxudWxsLHtsOmJ9KTthLmEuQihiLFwiY2xpY2tcIixlKTthLm8oZixudWxsLHtsOmJ9KTtcbms9bn19fTthLm0ud2EuY2hlY2tlZD0hMDthLmMuY2hlY2tlZFZhbHVlPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXtiLnZhbHVlPWEuYS5mKGMoKSl9fX0pKCk7YS5jW1wiY2xhc3NcIl09e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5EYihhLmEuZihjKCkpKTthLmEuRWIoYixiLl9fa29fX2Nzc1ZhbHVlLCExKTtiLl9fa29fX2Nzc1ZhbHVlPWQ7YS5hLkViKGIsZCwhMCl9fTthLmMuY3NzPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZihjKCkpO251bGwhPT1kJiZcIm9iamVjdFwiPT10eXBlb2YgZD9hLmEuUChkLGZ1bmN0aW9uKGMsZCl7ZD1hLmEuZihkKTthLmEuRWIoYixjLGQpfSk6YS5jW1wiY2xhc3NcIl0udXBkYXRlKGIsYyl9fTthLmMuZW5hYmxlPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZihjKCkpO2QmJmIuZGlzYWJsZWQ/Yi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTpkfHxiLmRpc2FibGVkfHwoYi5kaXNhYmxlZD0hMCl9fTthLmMuZGlzYWJsZT1cbnt1cGRhdGU6ZnVuY3Rpb24oYixjKXthLmMuZW5hYmxlLnVwZGF0ZShiLGZ1bmN0aW9uKCl7cmV0dXJuIWEuYS5mKGMoKSl9KX19O2EuYy5ldmVudD17aW5pdDpmdW5jdGlvbihiLGMsZCxlLGYpe3ZhciBnPWMoKXx8e307YS5hLlAoZyxmdW5jdGlvbihnKXtcInN0cmluZ1wiPT10eXBlb2YgZyYmYS5hLkIoYixnLGZ1bmN0aW9uKGIpe3ZhciBrLGw9YygpW2ddO2lmKGwpe3RyeXt2YXIgcD1hLmEubGEoYXJndW1lbnRzKTtlPWYuJGRhdGE7cC51bnNoaWZ0KGUpO2s9bC5hcHBseShlLHApfWZpbmFsbHl7ITAhPT1rJiYoYi5wcmV2ZW50RGVmYXVsdD9iLnByZXZlbnREZWZhdWx0KCk6Yi5yZXR1cm5WYWx1ZT0hMSl9ITE9PT1kLmdldChnK1wiQnViYmxlXCIpJiYoYi5jYW5jZWxCdWJibGU9ITAsYi5zdG9wUHJvcGFnYXRpb24mJmIuc3RvcFByb3BhZ2F0aW9uKCkpfX0pfSl9fTthLmMuZm9yZWFjaD17UmM6ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9YigpLGQ9YS5hLmJjKGMpO1xuaWYoIWR8fFwibnVtYmVyXCI9PXR5cGVvZiBkLmxlbmd0aClyZXR1cm57Zm9yZWFjaDpjLHRlbXBsYXRlRW5naW5lOmEuYmEuTWF9O2EuYS5mKGMpO3JldHVybntmb3JlYWNoOmQuZGF0YSxhczpkLmFzLG5vQ2hpbGRDb250ZXh0OmQubm9DaGlsZENvbnRleHQsaW5jbHVkZURlc3Ryb3llZDpkLmluY2x1ZGVEZXN0cm95ZWQsYWZ0ZXJBZGQ6ZC5hZnRlckFkZCxiZWZvcmVSZW1vdmU6ZC5iZWZvcmVSZW1vdmUsYWZ0ZXJSZW5kZXI6ZC5hZnRlclJlbmRlcixiZWZvcmVNb3ZlOmQuYmVmb3JlTW92ZSxhZnRlck1vdmU6ZC5hZnRlck1vdmUsdGVtcGxhdGVFbmdpbmU6YS5iYS5NYX19fSxpbml0OmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuYy50ZW1wbGF0ZS5pbml0KGIsYS5jLmZvcmVhY2guUmMoYykpfSx1cGRhdGU6ZnVuY3Rpb24oYixjLGQsZSxmKXtyZXR1cm4gYS5jLnRlbXBsYXRlLnVwZGF0ZShiLGEuYy5mb3JlYWNoLlJjKGMpLGQsZSxmKX19O2EubS5SYS5mb3JlYWNoPSExO2EuaC5lYS5mb3JlYWNoPVxuITA7YS5jLmhhc2ZvY3VzPXtpbml0OmZ1bmN0aW9uKGIsYyxkKXtmdW5jdGlvbiBlKGUpe2IuX19rb19oYXNmb2N1c1VwZGF0aW5nPSEwO3ZhciBmPWIub3duZXJEb2N1bWVudDtpZihcImFjdGl2ZUVsZW1lbnRcImluIGYpe3ZhciBnO3RyeXtnPWYuYWN0aXZlRWxlbWVudH1jYXRjaChsKXtnPWYuYm9keX1lPWc9PT1ifWY9YygpO2EubS5lYihmLGQsXCJoYXNmb2N1c1wiLGUsITApO2IuX19rb19oYXNmb2N1c0xhc3RWYWx1ZT1lO2IuX19rb19oYXNmb2N1c1VwZGF0aW5nPSExfXZhciBmPWUuYmluZChudWxsLCEwKSxnPWUuYmluZChudWxsLCExKTthLmEuQihiLFwiZm9jdXNcIixmKTthLmEuQihiLFwiZm9jdXNpblwiLGYpO2EuYS5CKGIsXCJibHVyXCIsZyk7YS5hLkIoYixcImZvY3Vzb3V0XCIsZyk7Yi5fX2tvX2hhc2ZvY3VzTGFzdFZhbHVlPSExfSx1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD0hIWEuYS5mKGMoKSk7Yi5fX2tvX2hhc2ZvY3VzVXBkYXRpbmd8fGIuX19rb19oYXNmb2N1c0xhc3RWYWx1ZT09PVxuZHx8KGQ/Yi5mb2N1cygpOmIuYmx1cigpLCFkJiZiLl9fa29faGFzZm9jdXNMYXN0VmFsdWUmJmIub3duZXJEb2N1bWVudC5ib2R5LmZvY3VzKCksYS51LkcoYS5hLkZiLG51bGwsW2IsZD9cImZvY3VzaW5cIjpcImZvY3Vzb3V0XCJdKSl9fTthLm0ud2EuaGFzZm9jdXM9ITA7YS5jLmhhc0ZvY3VzPWEuYy5oYXNmb2N1czthLm0ud2EuaGFzRm9jdXM9XCJoYXNmb2N1c1wiO2EuYy5odG1sPXtpbml0OmZ1bmN0aW9uKCl7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyl7YS5hLmZjKGIsYygpKX19OyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkLGUpe2EuY1tiXT17aW5pdDpmdW5jdGlvbihiLGMsaCxtLGspe3ZhciBsLHAscT17fSx0LHgsbjtpZihkKXttPWguZ2V0KFwiYXNcIik7dmFyIHU9aC5nZXQoXCJub0NoaWxkQ29udGV4dFwiKTtuPSEobSYmdSk7cT17YXM6bSxub0NoaWxkQ29udGV4dDp1LGV4cG9ydERlcGVuZGVuY2llczpufX14PSh0PVxuXCJyZW5kZXJcIj09aC5nZXQoXCJjb21wbGV0ZU9uXCIpKXx8aC5oYXMoYS5pLnBhKTthLm8oZnVuY3Rpb24oKXt2YXIgaD1hLmEuZihjKCkpLG09IWUhPT0haCx1PSFwLHI7aWYobnx8bSE9PWwpe3gmJihrPWEuaS5DYihiLGspKTtpZihtKXtpZighZHx8bilxLmRhdGFEZXBlbmRlbmN5PWEuUy5vKCk7cj1kP2suY3JlYXRlQ2hpbGRDb250ZXh0KFwiZnVuY3Rpb25cIj09dHlwZW9mIGg/aDpjLHEpOmEuUy5xYSgpP2suZXh0ZW5kKG51bGwscSk6a311JiZhLlMucWEoKSYmKHA9YS5hLkNhKGEuaC5jaGlsZE5vZGVzKGIpLCEwKSk7bT8odXx8YS5oLnZhKGIsYS5hLkNhKHApKSxhLk9hKHIsYikpOihhLmguRWEoYiksdHx8YS5pLm1hKGIsYS5pLkgpKTtsPW19fSxudWxsLHtsOmJ9KTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fX07YS5tLlJhW2JdPSExO2EuaC5lYVtiXT0hMH1iKFwiaWZcIik7YihcImlmbm90XCIsITEsITApO2IoXCJ3aXRoXCIsITApfSkoKTthLmMubGV0PXtpbml0OmZ1bmN0aW9uKGIsXG5jLGQsZSxmKXtjPWYuZXh0ZW5kKGMpO2EuT2EoYyxiKTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fX07YS5oLmVhLmxldD0hMDt2YXIgUT17fTthLmMub3B0aW9ucz17aW5pdDpmdW5jdGlvbihiKXtpZihcInNlbGVjdFwiIT09YS5hLlIoYikpdGhyb3cgRXJyb3IoXCJvcHRpb25zIGJpbmRpbmcgYXBwbGllcyBvbmx5IHRvIFNFTEVDVCBlbGVtZW50c1wiKTtmb3IoOzA8Yi5sZW5ndGg7KWIucmVtb3ZlKDApO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19LHVwZGF0ZTpmdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZSgpe3JldHVybiBhLmEuamIoYi5vcHRpb25zLGZ1bmN0aW9uKGEpe3JldHVybiBhLnNlbGVjdGVkfSl9ZnVuY3Rpb24gZihhLGIsYyl7dmFyIGQ9dHlwZW9mIGI7cmV0dXJuXCJmdW5jdGlvblwiPT1kP2IoYSk6XCJzdHJpbmdcIj09ZD9hW2JdOmN9ZnVuY3Rpb24gZyhjLGQpe2lmKHgmJmwpYS5pLm1hKGIsYS5pLkgpO2Vsc2UgaWYodC5sZW5ndGgpe3ZhciBlPVxuMDw9YS5hLkEodCxhLncuTShkWzBdKSk7YS5hLlpjKGRbMF0sZSk7eCYmIWUmJmEudS5HKGEuYS5GYixudWxsLFtiLFwiY2hhbmdlXCJdKX19dmFyIGg9Yi5tdWx0aXBsZSxtPTAhPWIubGVuZ3RoJiZoP2Iuc2Nyb2xsVG9wOm51bGwsaz1hLmEuZihjKCkpLGw9ZC5nZXQoXCJ2YWx1ZUFsbG93VW5zZXRcIikmJmQuaGFzKFwidmFsdWVcIikscD1kLmdldChcIm9wdGlvbnNJbmNsdWRlRGVzdHJveWVkXCIpO2M9e307dmFyIHEsdD1bXTtsfHwoaD90PWEuYS5NYihlKCksYS53Lk0pOjA8PWIuc2VsZWN0ZWRJbmRleCYmdC5wdXNoKGEudy5NKGIub3B0aW9uc1tiLnNlbGVjdGVkSW5kZXhdKSkpO2smJihcInVuZGVmaW5lZFwiPT10eXBlb2Ygay5sZW5ndGgmJihrPVtrXSkscT1hLmEuamIoayxmdW5jdGlvbihiKXtyZXR1cm4gcHx8Yj09PW58fG51bGw9PT1ifHwhYS5hLmYoYi5fZGVzdHJveSl9KSxkLmhhcyhcIm9wdGlvbnNDYXB0aW9uXCIpJiYoaz1hLmEuZihkLmdldChcIm9wdGlvbnNDYXB0aW9uXCIpKSxudWxsIT09XG5rJiZrIT09biYmcS51bnNoaWZ0KFEpKSk7dmFyIHg9ITE7Yy5iZWZvcmVSZW1vdmU9ZnVuY3Rpb24oYSl7Yi5yZW1vdmVDaGlsZChhKX07az1nO2QuaGFzKFwib3B0aW9uc0FmdGVyUmVuZGVyXCIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBkLmdldChcIm9wdGlvbnNBZnRlclJlbmRlclwiKSYmKGs9ZnVuY3Rpb24oYixjKXtnKDAsYyk7YS51LkcoZC5nZXQoXCJvcHRpb25zQWZ0ZXJSZW5kZXJcIiksbnVsbCxbY1swXSxiIT09UT9iOm5dKX0pO2EuYS5lYyhiLHEsZnVuY3Rpb24oYyxlLGcpe2cubGVuZ3RoJiYodD0hbCYmZ1swXS5zZWxlY3RlZD9bYS53Lk0oZ1swXSldOltdLHg9ITApO2U9Yi5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7Yz09PVE/KGEuYS5CYihlLGQuZ2V0KFwib3B0aW9uc0NhcHRpb25cIikpLGEudy5jYihlLG4pKTooZz1mKGMsZC5nZXQoXCJvcHRpb25zVmFsdWVcIiksYyksYS53LmNiKGUsYS5hLmYoZykpLGM9ZihjLGQuZ2V0KFwib3B0aW9uc1RleHRcIiksZyksXG5hLmEuQmIoZSxjKSk7cmV0dXJuW2VdfSxjLGspO2lmKCFsKXt2YXIgQjtoP0I9dC5sZW5ndGgmJmUoKS5sZW5ndGg8dC5sZW5ndGg6Qj10Lmxlbmd0aCYmMDw9Yi5zZWxlY3RlZEluZGV4P2Eudy5NKGIub3B0aW9uc1tiLnNlbGVjdGVkSW5kZXhdKSE9PXRbMF06dC5sZW5ndGh8fDA8PWIuc2VsZWN0ZWRJbmRleDtCJiZhLnUuRyhhLmEuRmIsbnVsbCxbYixcImNoYW5nZVwiXSl9KGx8fGEuUy5ZYSgpKSYmYS5pLm1hKGIsYS5pLkgpO2EuYS53ZChiKTttJiYyMDxNYXRoLmFicyhtLWIuc2Nyb2xsVG9wKSYmKGIuc2Nyb2xsVG9wPW0pfX07YS5jLm9wdGlvbnMuJGI9YS5hLmcuWigpO2EuYy5zZWxlY3RlZE9wdGlvbnM9e2luaXQ6ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGUoKXt2YXIgZT1jKCksZj1bXTthLmEuRChiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib3B0aW9uXCIpLGZ1bmN0aW9uKGIpe2Iuc2VsZWN0ZWQmJmYucHVzaChhLncuTShiKSl9KTthLm0uZWIoZSxkLFwic2VsZWN0ZWRPcHRpb25zXCIsXG5mKX1mdW5jdGlvbiBmKCl7dmFyIGQ9YS5hLmYoYygpKSxlPWIuc2Nyb2xsVG9wO2QmJlwibnVtYmVyXCI9PXR5cGVvZiBkLmxlbmd0aCYmYS5hLkQoYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9wdGlvblwiKSxmdW5jdGlvbihiKXt2YXIgYz0wPD1hLmEuQShkLGEudy5NKGIpKTtiLnNlbGVjdGVkIT1jJiZhLmEuWmMoYixjKX0pO2Iuc2Nyb2xsVG9wPWV9aWYoXCJzZWxlY3RcIiE9YS5hLlIoYikpdGhyb3cgRXJyb3IoXCJzZWxlY3RlZE9wdGlvbnMgYmluZGluZyBhcHBsaWVzIG9ubHkgdG8gU0VMRUNUIGVsZW1lbnRzXCIpO3ZhciBnO2EuaS5zdWJzY3JpYmUoYixhLmkuSCxmdW5jdGlvbigpe2c/ZSgpOihhLmEuQihiLFwiY2hhbmdlXCIsZSksZz1hLm8oZixudWxsLHtsOmJ9KSl9LG51bGwse25vdGlmeUltbWVkaWF0ZWx5OiEwfSl9LHVwZGF0ZTpmdW5jdGlvbigpe319O2EubS53YS5zZWxlY3RlZE9wdGlvbnM9ITA7YS5jLnN0eWxlPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZihjKCl8fFxue30pO2EuYS5QKGQsZnVuY3Rpb24oYyxkKXtkPWEuYS5mKGQpO2lmKG51bGw9PT1kfHxkPT09bnx8ITE9PT1kKWQ9XCJcIjtpZih2KXYoYikuY3NzKGMsZCk7ZWxzZSBpZigvXi0tLy50ZXN0KGMpKWIuc3R5bGUuc2V0UHJvcGVydHkoYyxkKTtlbHNle2M9Yy5yZXBsYWNlKC8tKFxcdykvZyxmdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9KTt2YXIgZz1iLnN0eWxlW2NdO2Iuc3R5bGVbY109ZDtkPT09Z3x8Yi5zdHlsZVtjXSE9Z3x8aXNOYU4oZCl8fChiLnN0eWxlW2NdPWQrXCJweFwiKX19KX19O2EuYy5zdWJtaXQ9e2luaXQ6ZnVuY3Rpb24oYixjLGQsZSxmKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBjKCkpdGhyb3cgRXJyb3IoXCJUaGUgdmFsdWUgZm9yIGEgc3VibWl0IGJpbmRpbmcgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO2EuYS5CKGIsXCJzdWJtaXRcIixmdW5jdGlvbihhKXt2YXIgZCxlPWMoKTt0cnl7ZD1lLmNhbGwoZi4kZGF0YSxiKX1maW5hbGx5eyEwIT09ZCYmKGEucHJldmVudERlZmF1bHQ/XG5hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMSl9fSl9fTthLmMudGV4dD17aW5pdDpmdW5jdGlvbigpe3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19LHVwZGF0ZTpmdW5jdGlvbihiLGMpe2EuYS5CYihiLGMoKSl9fTthLmguZWEudGV4dD0hMDsoZnVuY3Rpb24oKXtpZihBJiZBLm5hdmlnYXRvcil7dmFyIGI9ZnVuY3Rpb24oYSl7aWYoYSlyZXR1cm4gcGFyc2VGbG9hdChhWzFdKX0sYz1BLm5hdmlnYXRvci51c2VyQWdlbnQsZCxlLGYsZyxoOyhkPUEub3BlcmEmJkEub3BlcmEudmVyc2lvbiYmcGFyc2VJbnQoQS5vcGVyYS52ZXJzaW9uKCkpKXx8KGg9YihjLm1hdGNoKC9FZGdlXFwvKFteIF0rKSQvKSkpfHxiKGMubWF0Y2goL0Nocm9tZVxcLyhbXiBdKykvKSl8fChlPWIoYy5tYXRjaCgvVmVyc2lvblxcLyhbXiBdKykgU2FmYXJpLykpKXx8KGY9YihjLm1hdGNoKC9GaXJlZm94XFwvKFteIF0rKS8pKSl8fChnPWEuYS5XfHxiKGMubWF0Y2goL01TSUUgKFteIF0rKS8pKSl8fFxuKGc9YihjLm1hdGNoKC9ydjooW14gKV0rKS8pKSl9aWYoODw9ZyYmMTA+Zyl2YXIgbT1hLmEuZy5aKCksaz1hLmEuZy5aKCksbD1mdW5jdGlvbihiKXt2YXIgYz10aGlzLmFjdGl2ZUVsZW1lbnQ7KGM9YyYmYS5hLmcuZ2V0KGMsaykpJiZjKGIpfSxwPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9Yi5vd25lckRvY3VtZW50O2EuYS5nLmdldChkLG0pfHwoYS5hLmcuc2V0KGQsbSwhMCksYS5hLkIoZCxcInNlbGVjdGlvbmNoYW5nZVwiLGwpKTthLmEuZy5zZXQoYixrLGMpfTthLmMudGV4dElucHV0PXtpbml0OmZ1bmN0aW9uKGIsYyxrKXtmdW5jdGlvbiBsKGMsZCl7YS5hLkIoYixjLGQpfWZ1bmN0aW9uIG0oKXt2YXIgZD1hLmEuZihjKCkpO2lmKG51bGw9PT1kfHxkPT09bilkPVwiXCI7TCE9PW4mJmQ9PT1MP2EuYS5zZXRUaW1lb3V0KG0sNCk6Yi52YWx1ZSE9PWQmJih5PSEwLGIudmFsdWU9ZCx5PSExLHY9Yi52YWx1ZSl9ZnVuY3Rpb24gcigpe3d8fChMPWIudmFsdWUsdz1hLmEuc2V0VGltZW91dCh6LFxuNCkpfWZ1bmN0aW9uIHooKXtjbGVhclRpbWVvdXQodyk7TD13PW47dmFyIGQ9Yi52YWx1ZTt2IT09ZCYmKHY9ZCxhLm0uZWIoYygpLGssXCJ0ZXh0SW5wdXRcIixkKSl9dmFyIHY9Yi52YWx1ZSx3LEwsQT05PT1hLmEuVz9yOnoseT0hMTtnJiZsKFwia2V5cHJlc3NcIix6KTsxMT5nJiZsKFwicHJvcGVydHljaGFuZ2VcIixmdW5jdGlvbihhKXt5fHxcInZhbHVlXCIhPT1hLnByb3BlcnR5TmFtZXx8QShhKX0pOzg9PWcmJihsKFwia2V5dXBcIix6KSxsKFwia2V5ZG93blwiLHopKTtwJiYocChiLEEpLGwoXCJkcmFnZW5kXCIscikpOyghZ3x8OTw9ZykmJmwoXCJpbnB1dFwiLEEpOzU+ZSYmXCJ0ZXh0YXJlYVwiPT09YS5hLlIoYik/KGwoXCJrZXlkb3duXCIsciksbChcInBhc3RlXCIsciksbChcImN1dFwiLHIpKToxMT5kP2woXCJrZXlkb3duXCIscik6ND5mPyhsKFwiRE9NQXV0b0NvbXBsZXRlXCIseiksbChcImRyYWdkcm9wXCIseiksbChcImRyb3BcIix6KSk6aCYmXCJudW1iZXJcIj09PWIudHlwZSYmbChcImtleWRvd25cIixyKTtsKFwiY2hhbmdlXCIsXG56KTtsKFwiYmx1clwiLHopO2EubyhtLG51bGwse2w6Yn0pfX07YS5tLndhLnRleHRJbnB1dD0hMDthLmMudGV4dGlucHV0PXtwcmVwcm9jZXNzOmZ1bmN0aW9uKGEsYixjKXtjKFwidGV4dElucHV0XCIsYSl9fX0pKCk7YS5jLnVuaXF1ZU5hbWU9e2luaXQ6ZnVuY3Rpb24oYixjKXtpZihjKCkpe3ZhciBkPVwia29fdW5pcXVlX1wiKyArK2EuYy51bmlxdWVOYW1lLnJkO2EuYS5ZYyhiLGQpfX19O2EuYy51bmlxdWVOYW1lLnJkPTA7YS5jLnVzaW5nPXtpbml0OmZ1bmN0aW9uKGIsYyxkLGUsZil7dmFyIGc7ZC5oYXMoXCJhc1wiKSYmKGc9e2FzOmQuZ2V0KFwiYXNcIiksbm9DaGlsZENvbnRleHQ6ZC5nZXQoXCJub0NoaWxkQ29udGV4dFwiKX0pO2M9Zi5jcmVhdGVDaGlsZENvbnRleHQoYyxnKTthLk9hKGMsYik7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX19O2EuaC5lYS51c2luZz0hMDthLmMudmFsdWU9e2luaXQ6ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEuYS5SKGIpLGY9XCJpbnB1dFwiPT1cbmU7aWYoIWZ8fFwiY2hlY2tib3hcIiE9Yi50eXBlJiZcInJhZGlvXCIhPWIudHlwZSl7dmFyIGc9W10saD1kLmdldChcInZhbHVlVXBkYXRlXCIpLG09ITEsaz1udWxsO2gmJihcInN0cmluZ1wiPT10eXBlb2YgaD9nPVtoXTpnPWEuYS53YyhoKSxhLmEuUGEoZyxcImNoYW5nZVwiKSk7dmFyIGw9ZnVuY3Rpb24oKXtrPW51bGw7bT0hMTt2YXIgZT1jKCksZj1hLncuTShiKTthLm0uZWIoZSxkLFwidmFsdWVcIixmKX07IWEuYS5XfHwhZnx8XCJ0ZXh0XCIhPWIudHlwZXx8XCJvZmZcIj09Yi5hdXRvY29tcGxldGV8fGIuZm9ybSYmXCJvZmZcIj09Yi5mb3JtLmF1dG9jb21wbGV0ZXx8LTEhPWEuYS5BKGcsXCJwcm9wZXJ0eWNoYW5nZVwiKXx8KGEuYS5CKGIsXCJwcm9wZXJ0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7bT0hMH0pLGEuYS5CKGIsXCJmb2N1c1wiLGZ1bmN0aW9uKCl7bT0hMX0pLGEuYS5CKGIsXCJibHVyXCIsZnVuY3Rpb24oKXttJiZsKCl9KSk7YS5hLkQoZyxmdW5jdGlvbihjKXt2YXIgZD1sO2EuYS5VZChjLFwiYWZ0ZXJcIikmJlxuKGQ9ZnVuY3Rpb24oKXtrPWEudy5NKGIpO2EuYS5zZXRUaW1lb3V0KGwsMCl9LGM9Yy5zdWJzdHJpbmcoNSkpO2EuYS5CKGIsYyxkKX0pO3ZhciBwO3A9ZiYmXCJmaWxlXCI9PWIudHlwZT9mdW5jdGlvbigpe3ZhciBkPWEuYS5mKGMoKSk7bnVsbD09PWR8fGQ9PT1ufHxcIlwiPT09ZD9iLnZhbHVlPVwiXCI6YS51LkcobCl9OmZ1bmN0aW9uKCl7dmFyIGY9YS5hLmYoYygpKSxnPWEudy5NKGIpO2lmKG51bGwhPT1rJiZmPT09aylhLmEuc2V0VGltZW91dChwLDApO2Vsc2UgaWYoZiE9PWd8fGc9PT1uKVwic2VsZWN0XCI9PT1lPyhnPWQuZ2V0KFwidmFsdWVBbGxvd1Vuc2V0XCIpLGEudy5jYihiLGYsZyksZ3x8Zj09PWEudy5NKGIpfHxhLnUuRyhsKSk6YS53LmNiKGIsZil9O2lmKFwic2VsZWN0XCI9PT1lKXt2YXIgcTthLmkuc3Vic2NyaWJlKGIsYS5pLkgsZnVuY3Rpb24oKXtxP2QuZ2V0KFwidmFsdWVBbGxvd1Vuc2V0XCIpP3AoKTpsKCk6KGEuYS5CKGIsXCJjaGFuZ2VcIixsKSxxPWEubyhwLG51bGwse2w6Yn0pKX0sXG5udWxsLHtub3RpZnlJbW1lZGlhdGVseTohMH0pfWVsc2UgYS5hLkIoYixcImNoYW5nZVwiLGwpLGEubyhwLG51bGwse2w6Yn0pfWVsc2UgYS5pYihiLHtjaGVja2VkVmFsdWU6Y30pfSx1cGRhdGU6ZnVuY3Rpb24oKXt9fTthLm0ud2EudmFsdWU9ITA7YS5jLnZpc2libGU9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5mKGMoKSksZT1cIm5vbmVcIiE9Yi5zdHlsZS5kaXNwbGF5O2QmJiFlP2Iuc3R5bGUuZGlzcGxheT1cIlwiOiFkJiZlJiYoYi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKX19O2EuYy5oaWRkZW49e3VwZGF0ZTpmdW5jdGlvbihiLGMpe2EuYy52aXNpYmxlLnVwZGF0ZShiLGZ1bmN0aW9uKCl7cmV0dXJuIWEuYS5mKGMoKSl9KX19OyhmdW5jdGlvbihiKXthLmNbYl09e2luaXQ6ZnVuY3Rpb24oYyxkLGUsZixnKXtyZXR1cm4gYS5jLmV2ZW50LmluaXQuY2FsbCh0aGlzLGMsZnVuY3Rpb24oKXt2YXIgYT17fTthW2JdPWQoKTtyZXR1cm4gYX0sZSxmLGcpfX19KShcImNsaWNrXCIpO1xuYS5jYT1mdW5jdGlvbigpe307YS5jYS5wcm90b3R5cGUucmVuZGVyVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcihcIk92ZXJyaWRlIHJlbmRlclRlbXBsYXRlU291cmNlXCIpO307YS5jYS5wcm90b3R5cGUuY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrPWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoXCJPdmVycmlkZSBjcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2tcIik7fTthLmNhLnByb3RvdHlwZS5tYWtlVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYixjKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7Yz1jfHx3O3ZhciBkPWMuZ2V0RWxlbWVudEJ5SWQoYik7aWYoIWQpdGhyb3cgRXJyb3IoXCJDYW5ub3QgZmluZCB0ZW1wbGF0ZSB3aXRoIElEIFwiK2IpO3JldHVybiBuZXcgYS5DLkYoZCl9aWYoMT09Yi5ub2RlVHlwZXx8OD09Yi5ub2RlVHlwZSlyZXR1cm4gbmV3IGEuQy5pYShiKTt0aHJvdyBFcnJvcihcIlVua25vd24gdGVtcGxhdGUgdHlwZTogXCIrYik7fTthLmNhLnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZT1cbmZ1bmN0aW9uKGEsYyxkLGUpe2E9dGhpcy5tYWtlVGVtcGxhdGVTb3VyY2UoYSxlKTtyZXR1cm4gdGhpcy5yZW5kZXJUZW1wbGF0ZVNvdXJjZShhLGMsZCxlKX07YS5jYS5wcm90b3R5cGUuaXNUZW1wbGF0ZVJld3JpdHRlbj1mdW5jdGlvbihhLGMpe3JldHVybiExPT09dGhpcy5hbGxvd1RlbXBsYXRlUmV3cml0aW5nPyEwOnRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsYykuZGF0YShcImlzUmV3cml0dGVuXCIpfTthLmNhLnByb3RvdHlwZS5yZXdyaXRlVGVtcGxhdGU9ZnVuY3Rpb24oYSxjLGQpe2E9dGhpcy5tYWtlVGVtcGxhdGVTb3VyY2UoYSxkKTtjPWMoYS50ZXh0KCkpO2EudGV4dChjKTthLmRhdGEoXCJpc1Jld3JpdHRlblwiLCEwKX07YS5iKFwidGVtcGxhdGVFbmdpbmVcIixhLmNhKTthLmtjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZCxoKXtiPWEubS5hYyhiKTtmb3IodmFyIG09YS5tLlJhLGs9MDtrPGIubGVuZ3RoO2srKyl7dmFyIGw9YltrXS5rZXk7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sXG5sKSl7dmFyIHA9bVtsXTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgcCl7aWYobD1wKGJba10udmFsdWUpKXRocm93IEVycm9yKGwpO31lbHNlIGlmKCFwKXRocm93IEVycm9yKFwiVGhpcyB0ZW1wbGF0ZSBlbmdpbmUgZG9lcyBub3Qgc3VwcG9ydCB0aGUgJ1wiK2wrXCInIGJpbmRpbmcgd2l0aGluIGl0cyB0ZW1wbGF0ZXNcIik7fX1kPVwia28uX190cl9hbWJ0bnMoZnVuY3Rpb24oJGNvbnRleHQsJGVsZW1lbnQpe3JldHVybihmdW5jdGlvbigpe3JldHVybnsgXCIrYS5tLnZiKGIse3ZhbHVlQWNjZXNzb3JzOiEwfSkrXCIgfSB9KSgpfSwnXCIrZC50b0xvd2VyQ2FzZSgpK1wiJylcIjtyZXR1cm4gaC5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2soZCkrY312YXIgYz0vKDwoW2Etel0rXFxkKikoPzpcXHMrKD8hZGF0YS1iaW5kXFxzKj1cXHMqKVthLXowLTlcXC1dKyg/Oj0oPzpcXFwiW15cXFwiXSpcXFwifFxcJ1teXFwnXSpcXCd8W14+XSopKT8pKlxccyspZGF0YS1iaW5kXFxzKj1cXHMqKFtcIiddKShbXFxzXFxTXSo/KVxcMy9naSxcbmQ9L1xceDNjIS0tXFxzKmtvXFxiXFxzKihbXFxzXFxTXSo/KVxccyotLVxceDNlL2c7cmV0dXJue3hkOmZ1bmN0aW9uKGIsYyxkKXtjLmlzVGVtcGxhdGVSZXdyaXR0ZW4oYixkKXx8Yy5yZXdyaXRlVGVtcGxhdGUoYixmdW5jdGlvbihiKXtyZXR1cm4gYS5rYy5MZChiLGMpfSxkKX0sTGQ6ZnVuY3Rpb24oYSxmKXtyZXR1cm4gYS5yZXBsYWNlKGMsZnVuY3Rpb24oYSxjLGQsZSxsKXtyZXR1cm4gYihsLGMsZCxmKX0pLnJlcGxhY2UoZCxmdW5jdGlvbihhLGMpe3JldHVybiBiKGMsXCJcXHgzYyEtLSBrbyAtLVxceDNlXCIsXCIjY29tbWVudFwiLGYpfSl9LG1kOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuYWEuWGIoZnVuY3Rpb24oZCxoKXt2YXIgbT1kLm5leHRTaWJsaW5nO20mJm0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWMmJmEuaWIobSxiLGgpfSl9fX0oKTthLmIoXCJfX3RyX2FtYnRuc1wiLGEua2MubWQpOyhmdW5jdGlvbigpe2EuQz17fTthLkMuRj1mdW5jdGlvbihiKXtpZih0aGlzLkY9Yil7dmFyIGM9XG5hLmEuUihiKTt0aGlzLmFiPVwic2NyaXB0XCI9PT1jPzE6XCJ0ZXh0YXJlYVwiPT09Yz8yOlwidGVtcGxhdGVcIj09YyYmYi5jb250ZW50JiYxMT09PWIuY29udGVudC5ub2RlVHlwZT8zOjR9fTthLkMuRi5wcm90b3R5cGUudGV4dD1mdW5jdGlvbigpe3ZhciBiPTE9PT10aGlzLmFiP1widGV4dFwiOjI9PT10aGlzLmFiP1widmFsdWVcIjpcImlubmVySFRNTFwiO2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuRltiXTt2YXIgYz1hcmd1bWVudHNbMF07XCJpbm5lckhUTUxcIj09PWI/YS5hLmZjKHRoaXMuRixjKTp0aGlzLkZbYl09Y307dmFyIGI9YS5hLmcuWigpK1wiX1wiO2EuQy5GLnByb3RvdHlwZS5kYXRhPWZ1bmN0aW9uKGMpe2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiBhLmEuZy5nZXQodGhpcy5GLGIrYyk7YS5hLmcuc2V0KHRoaXMuRixiK2MsYXJndW1lbnRzWzFdKX07dmFyIGM9YS5hLmcuWigpO2EuQy5GLnByb3RvdHlwZS5ub2Rlcz1mdW5jdGlvbigpe3ZhciBiPXRoaXMuRjtcbmlmKDA9PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciBlPWEuYS5nLmdldChiLGMpfHx7fSxmPWUubGJ8fCgzPT09dGhpcy5hYj9iLmNvbnRlbnQ6ND09PXRoaXMuYWI/YjpuKTtpZighZnx8ZS5qZCl7dmFyIGc9dGhpcy50ZXh0KCk7ZyYmZyE9PWUuYmImJihmPWEuYS5NZChnLGIub3duZXJEb2N1bWVudCksYS5hLmcuc2V0KGIsYyx7bGI6ZixiYjpnLGpkOiEwfSkpfXJldHVybiBmfWU9YXJndW1lbnRzWzBdO3RoaXMuYWIhPT1uJiZ0aGlzLnRleHQoXCJcIik7YS5hLmcuc2V0KGIsYyx7bGI6ZX0pfTthLkMuaWE9ZnVuY3Rpb24oYSl7dGhpcy5GPWF9O2EuQy5pYS5wcm90b3R5cGU9bmV3IGEuQy5GO2EuQy5pYS5wcm90b3R5cGUuY29uc3RydWN0b3I9YS5DLmlhO2EuQy5pYS5wcm90b3R5cGUudGV4dD1mdW5jdGlvbigpe2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciBiPWEuYS5nLmdldCh0aGlzLkYsYyl8fHt9O2IuYmI9PT1uJiZiLmxiJiYoYi5iYj1iLmxiLmlubmVySFRNTCk7cmV0dXJuIGIuYmJ9YS5hLmcuc2V0KHRoaXMuRixcbmMse2JiOmFyZ3VtZW50c1swXX0pfTthLmIoXCJ0ZW1wbGF0ZVNvdXJjZXNcIixhLkMpO2EuYihcInRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50XCIsYS5DLkYpO2EuYihcInRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZVwiLGEuQy5pYSl9KSgpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjLGQpe3ZhciBlO2ZvcihjPWEuaC5uZXh0U2libGluZyhjKTtiJiYoZT1iKSE9PWM7KWI9YS5oLm5leHRTaWJsaW5nKGUpLGQoZSxiKX1mdW5jdGlvbiBjKGMsZCl7aWYoYy5sZW5ndGgpe3ZhciBlPWNbMF0sZj1jW2MubGVuZ3RoLTFdLGc9ZS5wYXJlbnROb2RlLGg9YS5nYS5pbnN0YW5jZSxtPWgucHJlcHJvY2Vzc05vZGU7aWYobSl7YihlLGYsZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnByZXZpb3VzU2libGluZyxkPW0uY2FsbChoLGEpO2QmJihhPT09ZSYmKGU9ZFswXXx8YiksYT09PWYmJihmPWRbZC5sZW5ndGgtMV18fGMpKX0pO2MubGVuZ3RoPTA7aWYoIWUpcmV0dXJuO2U9PT1mP2MucHVzaChlKTpcbihjLnB1c2goZSxmKSxhLmEuVWEoYyxnKSl9YihlLGYsZnVuY3Rpb24oYil7MSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlfHxhLnZjKGQsYil9KTtiKGUsZixmdW5jdGlvbihiKXsxIT09Yi5ub2RlVHlwZSYmOCE9PWIubm9kZVR5cGV8fGEuYWEuY2QoYixbZF0pfSk7YS5hLlVhKGMsZyl9fWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGEubm9kZVR5cGU/YTowPGEubGVuZ3RoP2FbMF06bnVsbH1mdW5jdGlvbiBlKGIsZSxmLGgsbSl7bT1tfHx7fTt2YXIgbj0oYiYmZChiKXx8Znx8e30pLm93bmVyRG9jdW1lbnQsQj1tLnRlbXBsYXRlRW5naW5lfHxnO2Eua2MueGQoZixCLG4pO2Y9Qi5yZW5kZXJUZW1wbGF0ZShmLGgsbSxuKTtpZihcIm51bWJlclwiIT10eXBlb2YgZi5sZW5ndGh8fDA8Zi5sZW5ndGgmJlwibnVtYmVyXCIhPXR5cGVvZiBmWzBdLm5vZGVUeXBlKXRocm93IEVycm9yKFwiVGVtcGxhdGUgZW5naW5lIG11c3QgcmV0dXJuIGFuIGFycmF5IG9mIERPTSBub2Rlc1wiKTtuPSExO3N3aXRjaChlKXtjYXNlIFwicmVwbGFjZUNoaWxkcmVuXCI6YS5oLnZhKGIsXG5mKTtuPSEwO2JyZWFrO2Nhc2UgXCJyZXBsYWNlTm9kZVwiOmEuYS5YYyhiLGYpO249ITA7YnJlYWs7Y2FzZSBcImlnbm9yZVRhcmdldE5vZGVcIjpicmVhaztkZWZhdWx0OnRocm93IEVycm9yKFwiVW5rbm93biByZW5kZXJNb2RlOiBcIitlKTt9biYmKGMoZixoKSxtLmFmdGVyUmVuZGVyJiZhLnUuRyhtLmFmdGVyUmVuZGVyLG51bGwsW2YsaFttLmFzfHxcIiRkYXRhXCJdXSksXCJyZXBsYWNlQ2hpbGRyZW5cIj09ZSYmYS5pLm1hKGIsYS5pLkgpKTtyZXR1cm4gZn1mdW5jdGlvbiBmKGIsYyxkKXtyZXR1cm4gYS5PKGIpP2IoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKGMsZCk6Yn12YXIgZzthLmdjPWZ1bmN0aW9uKGIpe2lmKGIhPW4mJiEoYiBpbnN0YW5jZW9mIGEuY2EpKXRocm93IEVycm9yKFwidGVtcGxhdGVFbmdpbmUgbXVzdCBpbmhlcml0IGZyb20ga28udGVtcGxhdGVFbmdpbmVcIik7Zz1ifTthLmRjPWZ1bmN0aW9uKGIsYyxoLG0sdCl7aD1ofHx7fTtpZigoaC50ZW1wbGF0ZUVuZ2luZXx8Zyk9PVxubil0aHJvdyBFcnJvcihcIlNldCBhIHRlbXBsYXRlIGVuZ2luZSBiZWZvcmUgY2FsbGluZyByZW5kZXJUZW1wbGF0ZVwiKTt0PXR8fFwicmVwbGFjZUNoaWxkcmVuXCI7aWYobSl7dmFyIHg9ZChtKTtyZXR1cm4gYS4kKGZ1bmN0aW9uKCl7dmFyIGc9YyYmYyBpbnN0YW5jZW9mIGEuZmE/YzpuZXcgYS5mYShjLG51bGwsbnVsbCxudWxsLHtleHBvcnREZXBlbmRlbmNpZXM6ITB9KSxuPWYoYixnLiRkYXRhLGcpLGc9ZShtLHQsbixnLGgpO1wicmVwbGFjZU5vZGVcIj09dCYmKG09Zyx4PWQobSkpfSxudWxsLHtTYTpmdW5jdGlvbigpe3JldHVybiF4fHwhYS5hLlNiKHgpfSxsOngmJlwicmVwbGFjZU5vZGVcIj09dD94LnBhcmVudE5vZGU6eH0pfXJldHVybiBhLmFhLlhiKGZ1bmN0aW9uKGQpe2EuZGMoYixjLGgsZCxcInJlcGxhY2VOb2RlXCIpfSl9O2EuUWQ9ZnVuY3Rpb24oYixkLGcsaCxtKXtmdW5jdGlvbiB4KGIsYyl7YS51LkcoYS5hLmVjLG51bGwsW2gsYix1LGcscixjXSk7YS5pLm1hKGgsYS5pLkgpfVxuZnVuY3Rpb24gcihhLGIpe2MoYix2KTtnLmFmdGVyUmVuZGVyJiZnLmFmdGVyUmVuZGVyKGIsYSk7dj1udWxsfWZ1bmN0aW9uIHUoYSxjKXt2PW0uY3JlYXRlQ2hpbGRDb250ZXh0KGEse2FzOnosbm9DaGlsZENvbnRleHQ6Zy5ub0NoaWxkQ29udGV4dCxleHRlbmQ6ZnVuY3Rpb24oYSl7YS4kaW5kZXg9Yzt6JiYoYVt6K1wiSW5kZXhcIl09Yyl9fSk7dmFyIGQ9ZihiLGEsdik7cmV0dXJuIGUoaCxcImlnbm9yZVRhcmdldE5vZGVcIixkLHYsZyl9dmFyIHYsej1nLmFzLHc9ITE9PT1nLmluY2x1ZGVEZXN0cm95ZWR8fGEub3B0aW9ucy5mb3JlYWNoSGlkZXNEZXN0cm95ZWQmJiFnLmluY2x1ZGVEZXN0cm95ZWQ7aWYod3x8Zy5iZWZvcmVSZW1vdmV8fCFhLlBjKGQpKXJldHVybiBhLiQoZnVuY3Rpb24oKXt2YXIgYj1hLmEuZihkKXx8W107XCJ1bmRlZmluZWRcIj09dHlwZW9mIGIubGVuZ3RoJiYoYj1bYl0pO3cmJihiPWEuYS5qYihiLGZ1bmN0aW9uKGIpe3JldHVybiBiPT09bnx8bnVsbD09PWJ8fFxuIWEuYS5mKGIuX2Rlc3Ryb3kpfSkpO3goYil9LG51bGwse2w6aH0pO3goZC52KCkpO3ZhciBBPWQuc3Vic2NyaWJlKGZ1bmN0aW9uKGEpe3goZCgpLGEpfSxudWxsLFwiYXJyYXlDaGFuZ2VcIik7QS5sKGgpO3JldHVybiBBfTt2YXIgaD1hLmEuZy5aKCksbT1hLmEuZy5aKCk7YS5jLnRlbXBsYXRlPXtpbml0OmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmYoYygpKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZHx8XCJuYW1lXCJpbiBkKWEuaC5FYShiKTtlbHNlIGlmKFwibm9kZXNcImluIGQpe2Q9ZC5ub2Rlc3x8W107aWYoYS5PKGQpKXRocm93IEVycm9yKCdUaGUgXCJub2Rlc1wiIG9wdGlvbiBtdXN0IGJlIGEgcGxhaW4sIG5vbi1vYnNlcnZhYmxlIGFycmF5LicpO3ZhciBlPWRbMF0mJmRbMF0ucGFyZW50Tm9kZTtlJiZhLmEuZy5nZXQoZSxtKXx8KGU9YS5hLlliKGQpLGEuYS5nLnNldChlLG0sITApKTsobmV3IGEuQy5pYShiKSkubm9kZXMoZSl9ZWxzZSBpZihkPWEuaC5jaGlsZE5vZGVzKGIpLDA8ZC5sZW5ndGgpZT1cbmEuYS5ZYihkKSwobmV3IGEuQy5pYShiKSkubm9kZXMoZSk7ZWxzZSB0aHJvdyBFcnJvcihcIkFub255bW91cyB0ZW1wbGF0ZSBkZWZpbmVkLCBidXQgbm8gdGVtcGxhdGUgY29udGVudCB3YXMgcHJvdmlkZWRcIik7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyxkLGUsZil7dmFyIGc9YygpO2M9YS5hLmYoZyk7ZD0hMDtlPW51bGw7XCJzdHJpbmdcIj09dHlwZW9mIGM/Yz17fTooZz1cIm5hbWVcImluIGM/Yy5uYW1lOmIsXCJpZlwiaW4gYyYmKGQ9YS5hLmYoY1tcImlmXCJdKSksZCYmXCJpZm5vdFwiaW4gYyYmKGQ9IWEuYS5mKGMuaWZub3QpKSxkJiYhZyYmKGQ9ITEpKTtcImZvcmVhY2hcImluIGM/ZT1hLlFkKGcsZCYmYy5mb3JlYWNofHxbXSxjLGIsZik6ZD8oZD1mLFwiZGF0YVwiaW4gYyYmKGQ9Zi5jcmVhdGVDaGlsZENvbnRleHQoYy5kYXRhLHthczpjLmFzLG5vQ2hpbGRDb250ZXh0OmMubm9DaGlsZENvbnRleHQsZXhwb3J0RGVwZW5kZW5jaWVzOiEwfSkpLFxuZT1hLmRjKGcsZCxjLGIpKTphLmguRWEoYik7Zj1lOyhjPWEuYS5nLmdldChiLGgpKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYy5zJiZjLnMoKTthLmEuZy5zZXQoYixoLCFmfHxmLmphJiYhZi5qYSgpP246Zil9fTthLm0uUmEudGVtcGxhdGU9ZnVuY3Rpb24oYil7Yj1hLm0uYWMoYik7cmV0dXJuIDE9PWIubGVuZ3RoJiZiWzBdLnVua25vd258fGEubS5JZChiLFwibmFtZVwiKT9udWxsOlwiVGhpcyB0ZW1wbGF0ZSBlbmdpbmUgZG9lcyBub3Qgc3VwcG9ydCBhbm9ueW1vdXMgdGVtcGxhdGVzIG5lc3RlZCB3aXRoaW4gaXRzIHRlbXBsYXRlc1wifTthLmguZWEudGVtcGxhdGU9ITB9KSgpO2EuYihcInNldFRlbXBsYXRlRW5naW5lXCIsYS5nYyk7YS5iKFwicmVuZGVyVGVtcGxhdGVcIixhLmRjKTthLmEuS2M9ZnVuY3Rpb24oYSxjLGQpe2lmKGEubGVuZ3RoJiZjLmxlbmd0aCl7dmFyIGUsZixnLGgsbTtmb3IoZT1mPTA7KCFkfHxlPGQpJiYoaD1hW2ZdKTsrK2Ype2ZvcihnPTA7bT1jW2ddOysrZylpZihoLnZhbHVlPT09XG5tLnZhbHVlKXtoLm1vdmVkPW0uaW5kZXg7bS5tb3ZlZD1oLmluZGV4O2Muc3BsaWNlKGcsMSk7ZT1nPTA7YnJlYWt9ZSs9Z319fTthLmEuUGI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsZCxlLGYsZyl7dmFyIGg9TWF0aC5taW4sbT1NYXRoLm1heCxrPVtdLGwscD1iLmxlbmd0aCxxLG49ZC5sZW5ndGgscj1uLXB8fDEsdj1wK24rMSx1LHcsejtmb3IobD0wO2w8PXA7bCsrKWZvcih3PXUsay5wdXNoKHU9W10pLHo9aChuLGwrcikscT1tKDAsbC0xKTtxPD16O3ErKyl1W3FdPXE/bD9iW2wtMV09PT1kW3EtMV0/d1txLTFdOmgod1txXXx8dix1W3EtMV18fHYpKzE6cSsxOmwrMTtoPVtdO209W107cj1bXTtsPXA7Zm9yKHE9bjtsfHxxOyluPWtbbF1bcV0tMSxxJiZuPT09a1tsXVtxLTFdP20ucHVzaChoW2gubGVuZ3RoXT17c3RhdHVzOmUsdmFsdWU6ZFstLXFdLGluZGV4OnF9KTpsJiZuPT09a1tsLTFdW3FdP3IucHVzaChoW2gubGVuZ3RoXT17c3RhdHVzOmYsdmFsdWU6YlstLWxdLGluZGV4Omx9KTpcbigtLXEsLS1sLGcuc3BhcnNlfHxoLnB1c2goe3N0YXR1czpcInJldGFpbmVkXCIsdmFsdWU6ZFtxXX0pKTthLmEuS2MocixtLCFnLmRvbnRMaW1pdE1vdmVzJiYxMCpwKTtyZXR1cm4gaC5yZXZlcnNlKCl9cmV0dXJuIGZ1bmN0aW9uKGEsZCxlKXtlPVwiYm9vbGVhblwiPT09dHlwZW9mIGU/e2RvbnRMaW1pdE1vdmVzOmV9OmV8fHt9O2E9YXx8W107ZD1kfHxbXTtyZXR1cm4gYS5sZW5ndGg8ZC5sZW5ndGg/YihhLGQsXCJhZGRlZFwiLFwiZGVsZXRlZFwiLGUpOmIoZCxhLFwiZGVsZXRlZFwiLFwiYWRkZWRcIixlKX19KCk7YS5iKFwidXRpbHMuY29tcGFyZUFycmF5c1wiLGEuYS5QYik7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZCxoLG0pe3ZhciBrPVtdLGw9YS4kKGZ1bmN0aW9uKCl7dmFyIGw9YyhkLG0sYS5hLlVhKGssYikpfHxbXTswPGsubGVuZ3RoJiYoYS5hLlhjKGssbCksaCYmYS51LkcoaCxudWxsLFtkLGwsbV0pKTtrLmxlbmd0aD0wO2EuYS5OYihrLGwpfSxudWxsLHtsOmIsU2E6ZnVuY3Rpb24oKXtyZXR1cm4hYS5hLmtkKGspfX0pO1xucmV0dXJue1k6aywkOmwuamEoKT9sOm59fXZhciBjPWEuYS5nLlooKSxkPWEuYS5nLlooKTthLmEuZWM9ZnVuY3Rpb24oZSxmLGcsaCxtLGspe2Z1bmN0aW9uIGwoYil7eT17QWE6YixwYjphLnRhKHcrKyl9O3YucHVzaCh5KTtyfHxGLnB1c2goeSl9ZnVuY3Rpb24gcChiKXt5PXRbYl07dyE9PXkucGIudigpJiZELnB1c2goeSk7eS5wYih3KyspO2EuYS5VYSh5LlksZSk7di5wdXNoKHkpfWZ1bmN0aW9uIHEoYixjKXtpZihiKWZvcih2YXIgZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKylhLmEuRChjW2RdLlksZnVuY3Rpb24oYSl7YihhLGQsY1tkXS5BYSl9KX1mPWZ8fFtdO1widW5kZWZpbmVkXCI9PXR5cGVvZiBmLmxlbmd0aCYmKGY9W2ZdKTtoPWh8fHt9O3ZhciB0PWEuYS5nLmdldChlLGMpLHI9IXQsdj1bXSx1PTAsdz0wLHo9W10sQT1bXSxDPVtdLEQ9W10sRj1bXSx5LEk9MDtpZihyKWEuYS5EKGYsbCk7ZWxzZXtpZigha3x8dCYmdC5fY291bnRXYWl0aW5nRm9yUmVtb3ZlKXt2YXIgRT1cbmEuYS5NYih0LGZ1bmN0aW9uKGEpe3JldHVybiBhLkFhfSk7az1hLmEuUGIoRSxmLHtkb250TGltaXRNb3ZlczpoLmRvbnRMaW1pdE1vdmVzLHNwYXJzZTohMH0pfWZvcih2YXIgRT0wLEcsSCxLO0c9a1tFXTtFKyspc3dpdGNoKEg9Ry5tb3ZlZCxLPUcuaW5kZXgsRy5zdGF0dXMpe2Nhc2UgXCJkZWxldGVkXCI6Zm9yKDt1PEs7KXAodSsrKTtIPT09biYmKHk9dFt1XSx5LiQmJih5LiQucygpLHkuJD1uKSxhLmEuVWEoeS5ZLGUpLmxlbmd0aCYmKGguYmVmb3JlUmVtb3ZlJiYodi5wdXNoKHkpLEkrKyx5LkFhPT09ZD95PW51bGw6Qy5wdXNoKHkpKSx5JiZ6LnB1c2guYXBwbHkoeix5LlkpKSk7dSsrO2JyZWFrO2Nhc2UgXCJhZGRlZFwiOmZvcig7dzxLOylwKHUrKyk7SCE9PW4/KEEucHVzaCh2Lmxlbmd0aCkscChIKSk6bChHLnZhbHVlKX1mb3IoO3c8Zi5sZW5ndGg7KXAodSsrKTt2Ll9jb3VudFdhaXRpbmdGb3JSZW1vdmU9SX1hLmEuZy5zZXQoZSxjLHYpO3EoaC5iZWZvcmVNb3ZlLEQpO2EuYS5EKHosXG5oLmJlZm9yZVJlbW92ZT9hLm9hOmEucmVtb3ZlTm9kZSk7dmFyIE0sTyxQO3RyeXtQPWUub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50fWNhdGNoKE4pe31pZihBLmxlbmd0aClmb3IoOyhFPUEuc2hpZnQoKSkhPW47KXt5PXZbRV07Zm9yKE09bjtFOylpZigoTz12Wy0tRV0uWSkmJk8ubGVuZ3RoKXtNPU9bTy5sZW5ndGgtMV07YnJlYWt9Zm9yKGY9MDt1PXkuWVtmXTtNPXUsZisrKWEuaC5XYihlLHUsTSl9Zm9yKEU9MDt5PXZbRV07RSsrKXt5Lll8fGEuYS5leHRlbmQoeSxiKGUsZyx5LkFhLG0seS5wYikpO2ZvcihmPTA7dT15LllbZl07TT11LGYrKylhLmguV2IoZSx1LE0pOyF5LkVkJiZtJiYobSh5LkFhLHkuWSx5LnBiKSx5LkVkPSEwLE09eS5ZW3kuWS5sZW5ndGgtMV0pfVAmJmUub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50IT1QJiZQLmZvY3VzKCk7cShoLmJlZm9yZVJlbW92ZSxDKTtmb3IoRT0wO0U8Qy5sZW5ndGg7KytFKUNbRV0uQWE9ZDtxKGguYWZ0ZXJNb3ZlLEQpO1xucShoLmFmdGVyQWRkLEYpfX0pKCk7YS5iKFwidXRpbHMuc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZ1wiLGEuYS5lYyk7YS5iYT1mdW5jdGlvbigpe3RoaXMuYWxsb3dUZW1wbGF0ZVJld3JpdGluZz0hMX07YS5iYS5wcm90b3R5cGU9bmV3IGEuY2E7YS5iYS5wcm90b3R5cGUuY29uc3RydWN0b3I9YS5iYTthLmJhLnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZVNvdXJjZT1mdW5jdGlvbihiLGMsZCxlKXtpZihjPSg5PmEuYS5XPzA6Yi5ub2Rlcyk/Yi5ub2RlcygpOm51bGwpcmV0dXJuIGEuYS5sYShjLmNsb25lTm9kZSghMCkuY2hpbGROb2Rlcyk7Yj1iLnRleHQoKTtyZXR1cm4gYS5hLnVhKGIsZSl9O2EuYmEuTWE9bmV3IGEuYmE7YS5nYyhhLmJhLk1hKTthLmIoXCJuYXRpdmVUZW1wbGF0ZUVuZ2luZVwiLGEuYmEpOyhmdW5jdGlvbigpe2EuJGE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLkhkPWZ1bmN0aW9uKCl7aWYoIXZ8fCF2LnRtcGwpcmV0dXJuIDA7dHJ5e2lmKDA8PXYudG1wbC50YWcudG1wbC5vcGVuLnRvU3RyaW5nKCkuaW5kZXhPZihcIl9fXCIpKXJldHVybiAyfWNhdGNoKGEpe31yZXR1cm4gMX0oKTtcbnRoaXMucmVuZGVyVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYixlLGYsZyl7Zz1nfHx3O2Y9Znx8e307aWYoMj5hKXRocm93IEVycm9yKFwiWW91ciB2ZXJzaW9uIG9mIGpRdWVyeS50bXBsIGlzIHRvbyBvbGQuIFBsZWFzZSB1cGdyYWRlIHRvIGpRdWVyeS50bXBsIDEuMC4wcHJlIG9yIGxhdGVyLlwiKTt2YXIgaD1iLmRhdGEoXCJwcmVjb21waWxlZFwiKTtofHwoaD1iLnRleHQoKXx8XCJcIixoPXYudGVtcGxhdGUobnVsbCxcInt7a29fd2l0aCAkaXRlbS5rb0JpbmRpbmdDb250ZXh0fX1cIitoK1wie3sva29fd2l0aH19XCIpLGIuZGF0YShcInByZWNvbXBpbGVkXCIsaCkpO2I9W2UuJGRhdGFdO2U9di5leHRlbmQoe2tvQmluZGluZ0NvbnRleHQ6ZX0sZi50ZW1wbGF0ZU9wdGlvbnMpO2U9di50bXBsKGgsYixlKTtlLmFwcGVuZFRvKGcuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7di5mcmFnbWVudHM9e307cmV0dXJuIGV9O3RoaXMuY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrPWZ1bmN0aW9uKGEpe3JldHVyblwie3trb19jb2RlICgoZnVuY3Rpb24oKSB7IHJldHVybiBcIitcbmErXCIgfSkoKSkgfX1cIn07dGhpcy5hZGRUZW1wbGF0ZT1mdW5jdGlvbihhLGIpe3cud3JpdGUoXCI8c2NyaXB0IHR5cGU9J3RleHQvaHRtbCcgaWQ9J1wiK2ErXCInPlwiK2IrXCJcXHgzYy9zY3JpcHQ+XCIpfTswPGEmJih2LnRtcGwudGFnLmtvX2NvZGU9e29wZW46XCJfXy5wdXNoKCQxIHx8ICcnKTtcIn0sdi50bXBsLnRhZy5rb193aXRoPXtvcGVuOlwid2l0aCgkMSkge1wiLGNsb3NlOlwifSBcIn0pfTthLiRhLnByb3RvdHlwZT1uZXcgYS5jYTthLiRhLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hLiRhO3ZhciBiPW5ldyBhLiRhOzA8Yi5IZCYmYS5nYyhiKTthLmIoXCJqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmVcIixhLiRhKX0pKCl9KX0pKCk7fSkoKTtcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbmV4cG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuL2ludGVybmFsL09ic2VydmFibGUnO1xuZXhwb3J0IHsgQ29ubmVjdGFibGVPYnNlcnZhYmxlIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL0Nvbm5lY3RhYmxlT2JzZXJ2YWJsZSc7XG5leHBvcnQgeyBHcm91cGVkT2JzZXJ2YWJsZSB9IGZyb20gJy4vaW50ZXJuYWwvb3BlcmF0b3JzL2dyb3VwQnknO1xuZXhwb3J0IHsgb2JzZXJ2YWJsZSB9IGZyb20gJy4vaW50ZXJuYWwvc3ltYm9sL29ic2VydmFibGUnO1xuZXhwb3J0IHsgU3ViamVjdCB9IGZyb20gJy4vaW50ZXJuYWwvU3ViamVjdCc7XG5leHBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICcuL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdCc7XG5leHBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAnLi9pbnRlcm5hbC9SZXBsYXlTdWJqZWN0JztcbmV4cG9ydCB7IEFzeW5jU3ViamVjdCB9IGZyb20gJy4vaW50ZXJuYWwvQXN5bmNTdWJqZWN0JztcbmV4cG9ydCB7IGFzYXAsIGFzYXBTY2hlZHVsZXIgfSBmcm9tICcuL2ludGVybmFsL3NjaGVkdWxlci9hc2FwJztcbmV4cG9ydCB7IGFzeW5jLCBhc3luY1NjaGVkdWxlciB9IGZyb20gJy4vaW50ZXJuYWwvc2NoZWR1bGVyL2FzeW5jJztcbmV4cG9ydCB7IHF1ZXVlLCBxdWV1ZVNjaGVkdWxlciB9IGZyb20gJy4vaW50ZXJuYWwvc2NoZWR1bGVyL3F1ZXVlJztcbmV4cG9ydCB7IGFuaW1hdGlvbkZyYW1lLCBhbmltYXRpb25GcmFtZVNjaGVkdWxlciB9IGZyb20gJy4vaW50ZXJuYWwvc2NoZWR1bGVyL2FuaW1hdGlvbkZyYW1lJztcbmV4cG9ydCB7IFZpcnR1YWxUaW1lU2NoZWR1bGVyLCBWaXJ0dWFsQWN0aW9uIH0gZnJvbSAnLi9pbnRlcm5hbC9zY2hlZHVsZXIvVmlydHVhbFRpbWVTY2hlZHVsZXInO1xuZXhwb3J0IHsgU2NoZWR1bGVyIH0gZnJvbSAnLi9pbnRlcm5hbC9TY2hlZHVsZXInO1xuZXhwb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9pbnRlcm5hbC9TdWJzY3JpcHRpb24nO1xuZXhwb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vaW50ZXJuYWwvU3Vic2NyaWJlcic7XG5leHBvcnQgeyBOb3RpZmljYXRpb24sIE5vdGlmaWNhdGlvbktpbmQgfSBmcm9tICcuL2ludGVybmFsL05vdGlmaWNhdGlvbic7XG5leHBvcnQgeyBwaXBlIH0gZnJvbSAnLi9pbnRlcm5hbC91dGlsL3BpcGUnO1xuZXhwb3J0IHsgbm9vcCB9IGZyb20gJy4vaW50ZXJuYWwvdXRpbC9ub29wJztcbmV4cG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi9pbnRlcm5hbC91dGlsL2lkZW50aXR5JztcbmV4cG9ydCB7IGlzT2JzZXJ2YWJsZSB9IGZyb20gJy4vaW50ZXJuYWwvdXRpbC9pc09ic2VydmFibGUnO1xuZXhwb3J0IHsgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IgfSBmcm9tICcuL2ludGVybmFsL3V0aWwvQXJndW1lbnRPdXRPZlJhbmdlRXJyb3InO1xuZXhwb3J0IHsgRW1wdHlFcnJvciB9IGZyb20gJy4vaW50ZXJuYWwvdXRpbC9FbXB0eUVycm9yJztcbmV4cG9ydCB7IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yIH0gZnJvbSAnLi9pbnRlcm5hbC91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbmV4cG9ydCB7IFVuc3Vic2NyaXB0aW9uRXJyb3IgfSBmcm9tICcuL2ludGVybmFsL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvcic7XG5leHBvcnQgeyBUaW1lb3V0RXJyb3IgfSBmcm9tICcuL2ludGVybmFsL3V0aWwvVGltZW91dEVycm9yJztcbmV4cG9ydCB7IGJpbmRDYWxsYmFjayB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9iaW5kQ2FsbGJhY2snO1xuZXhwb3J0IHsgYmluZE5vZGVDYWxsYmFjayB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9iaW5kTm9kZUNhbGxiYWNrJztcbmV4cG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvY29tYmluZUxhdGVzdCc7XG5leHBvcnQgeyBjb25jYXQgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvY29uY2F0JztcbmV4cG9ydCB7IGRlZmVyIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2RlZmVyJztcbmV4cG9ydCB7IGVtcHR5IH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2VtcHR5JztcbmV4cG9ydCB7IGZvcmtKb2luIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2ZvcmtKb2luJztcbmV4cG9ydCB7IGZyb20gfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvZnJvbSc7XG5leHBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvZnJvbUV2ZW50JztcbmV4cG9ydCB7IGZyb21FdmVudFBhdHRlcm4gfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvZnJvbUV2ZW50UGF0dGVybic7XG5leHBvcnQgeyBnZW5lcmF0ZSB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9nZW5lcmF0ZSc7XG5leHBvcnQgeyBpaWYgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvaWlmJztcbmV4cG9ydCB7IGludGVydmFsIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2ludGVydmFsJztcbmV4cG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL21lcmdlJztcbmV4cG9ydCB7IG5ldmVyIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL25ldmVyJztcbmV4cG9ydCB7IG9mIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL29mJztcbmV4cG9ydCB7IG9uRXJyb3JSZXN1bWVOZXh0IH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL29uRXJyb3JSZXN1bWVOZXh0JztcbmV4cG9ydCB7IHBhaXJzIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL3BhaXJzJztcbmV4cG9ydCB7IHBhcnRpdGlvbiB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9wYXJ0aXRpb24nO1xuZXhwb3J0IHsgcmFjZSB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9yYWNlJztcbmV4cG9ydCB7IHJhbmdlIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL3JhbmdlJztcbmV4cG9ydCB7IHRocm93RXJyb3IgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvdGhyb3dFcnJvcic7XG5leHBvcnQgeyB0aW1lciB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS90aW1lcic7XG5leHBvcnQgeyB1c2luZyB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS91c2luZyc7XG5leHBvcnQgeyB6aXAgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvemlwJztcbmV4cG9ydCB7IHNjaGVkdWxlZCB9IGZyb20gJy4vaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlZCc7XG5leHBvcnQgeyBFTVBUWSB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9lbXB0eSc7XG5leHBvcnQgeyBORVZFUiB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9uZXZlcic7XG5leHBvcnQgeyBjb25maWcgfSBmcm9tICcuL2ludGVybmFsL2NvbmZpZyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX1N1YmplY3QsX1N1YnNjcmlwdGlvbiBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJy4vU3ViamVjdCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG52YXIgQXN5bmNTdWJqZWN0ID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFzeW5jU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBc3luY1N1YmplY3QoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIF90aGlzLmhhc05leHQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaGFzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXN5bmNTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IodGhpcy50aHJvd25FcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaGFzQ29tcGxldGVkICYmIHRoaXMuaGFzTmV4dCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fc3Vic2NyaWJlLmNhbGwodGhpcywgc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBBc3luY1N1YmplY3QucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5oYXNOZXh0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBpZiAoIXRoaXMuaGFzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmVycm9yLmNhbGwodGhpcywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY1N1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmhhc05leHQpIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUubmV4dC5jYWxsKHRoaXMsIHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuY29tcGxldGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBBc3luY1N1YmplY3Q7XG59KFN1YmplY3QpKTtcbmV4cG9ydCB7IEFzeW5jU3ViamVjdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNTdWJqZWN0LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3ViamVjdCxfdXRpbF9PYmplY3RVbnN1YnNjcmliZWRFcnJvciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJy4vU3ViamVjdCc7XG5pbXBvcnQgeyBPYmplY3RVbnN1YnNjcmliZWRFcnJvciB9IGZyb20gJy4vdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG52YXIgQmVoYXZpb3JTdWJqZWN0ID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEJlaGF2aW9yU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCZWhhdmlvclN1YmplY3QoX3ZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl92YWx1ZSA9IF92YWx1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IF9zdXBlci5wcm90b3R5cGUuX3N1YnNjcmliZS5jYWxsKHRoaXMsIHN1YnNjcmliZXIpO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uICYmICFzdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5fdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICBCZWhhdmlvclN1YmplY3QucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy50aHJvd25FcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJlaGF2aW9yU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLm5leHQuY2FsbCh0aGlzLCB0aGlzLl92YWx1ZSA9IHZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBCZWhhdmlvclN1YmplY3Q7XG59KFN1YmplY3QpKTtcbmV4cG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmVoYXZpb3JTdWJqZWN0LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3Vic2NyaWJlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG52YXIgSW5uZXJTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKElubmVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbm5lclN1YnNjcmliZXIocGFyZW50LCBvdXRlclZhbHVlLCBvdXRlckluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgX3RoaXMub3V0ZXJWYWx1ZSA9IG91dGVyVmFsdWU7XG4gICAgICAgIF90aGlzLm91dGVySW5kZXggPSBvdXRlckluZGV4O1xuICAgICAgICBfdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlOZXh0KHRoaXMub3V0ZXJWYWx1ZSwgdmFsdWUsIHRoaXMub3V0ZXJJbmRleCwgdGhpcy5pbmRleCsrLCB0aGlzKTtcbiAgICB9O1xuICAgIElubmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeUVycm9yKGVycm9yLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgSW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeUNvbXBsZXRlKHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gSW5uZXJTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnQgeyBJbm5lclN1YnNjcmliZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlubmVyU3Vic2NyaWJlci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX29ic2VydmFibGVfZW1wdHksX29ic2VydmFibGVfb2YsX29ic2VydmFibGVfdGhyb3dFcnJvciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBlbXB0eSB9IGZyb20gJy4vb2JzZXJ2YWJsZS9lbXB0eSc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJy4vb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgeyB0aHJvd0Vycm9yIH0gZnJvbSAnLi9vYnNlcnZhYmxlL3Rocm93RXJyb3InO1xuZXhwb3J0IHZhciBOb3RpZmljYXRpb25LaW5kO1xuLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKE5vdGlmaWNhdGlvbktpbmQpIHtcbiAgICBOb3RpZmljYXRpb25LaW5kW1wiTkVYVFwiXSA9IFwiTlwiO1xuICAgIE5vdGlmaWNhdGlvbktpbmRbXCJFUlJPUlwiXSA9IFwiRVwiO1xuICAgIE5vdGlmaWNhdGlvbktpbmRbXCJDT01QTEVURVwiXSA9IFwiQ1wiO1xufSkoTm90aWZpY2F0aW9uS2luZCB8fCAoTm90aWZpY2F0aW9uS2luZCA9IHt9KSk7XG52YXIgTm90aWZpY2F0aW9uID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vdGlmaWNhdGlvbihraW5kLCB2YWx1ZSwgZXJyb3IpIHtcbiAgICAgICAgdGhpcy5raW5kID0ga2luZDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuaGFzVmFsdWUgPSBraW5kID09PSAnTic7XG4gICAgfVxuICAgIE5vdGlmaWNhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBzd2l0Y2ggKHRoaXMua2luZCkge1xuICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLm5leHQgJiYgb2JzZXJ2ZXIubmV4dCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5lcnJvciAmJiBvYnNlcnZlci5lcnJvcih0aGlzLmVycm9yKTtcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5jb21wbGV0ZSAmJiBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLmRvID0gZnVuY3Rpb24gKG5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIga2luZCA9IHRoaXMua2luZDtcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICBjYXNlICdOJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dCAmJiBuZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yICYmIGVycm9yKHRoaXMuZXJyb3IpO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlICYmIGNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24gKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyICYmIHR5cGVvZiBuZXh0T3JPYnNlcnZlci5uZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlKG5leHRPck9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLnRvT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGtpbmQgPSB0aGlzLmtpbmQ7XG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IodGhpcy5lcnJvcik7XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wdHkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuZXhwZWN0ZWQgbm90aWZpY2F0aW9uIGtpbmQgdmFsdWUnKTtcbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5jcmVhdGVOZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbignTicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTm90aWZpY2F0aW9uLnVuZGVmaW5lZFZhbHVlTm90aWZpY2F0aW9uO1xuICAgIH07XG4gICAgTm90aWZpY2F0aW9uLmNyZWF0ZUVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbignRScsIHVuZGVmaW5lZCwgZXJyKTtcbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5jcmVhdGVDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE5vdGlmaWNhdGlvbi5jb21wbGV0ZU5vdGlmaWNhdGlvbjtcbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5jb21wbGV0ZU5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oJ0MnKTtcbiAgICBOb3RpZmljYXRpb24udW5kZWZpbmVkVmFsdWVOb3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKCdOJywgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gTm90aWZpY2F0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE5vdGlmaWNhdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Tm90aWZpY2F0aW9uLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfdXRpbF9jYW5SZXBvcnRFcnJvcixfdXRpbF90b1N1YnNjcmliZXIsX3N5bWJvbF9vYnNlcnZhYmxlLF91dGlsX3BpcGUsX2NvbmZpZyBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBjYW5SZXBvcnRFcnJvciB9IGZyb20gJy4vdXRpbC9jYW5SZXBvcnRFcnJvcic7XG5pbXBvcnQgeyB0b1N1YnNjcmliZXIgfSBmcm9tICcuL3V0aWwvdG9TdWJzY3JpYmVyJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuL3N5bWJvbC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IHBpcGVGcm9tQXJyYXkgfSBmcm9tICcuL3V0aWwvcGlwZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG52YXIgT2JzZXJ2YWJsZSA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZSkge1xuICAgICAgICB0aGlzLl9pc1NjYWxhciA9IGZhbHNlO1xuICAgICAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBvcGVyYXRvciA9IHRoaXMub3BlcmF0b3I7XG4gICAgICAgIHZhciBzaW5rID0gdG9TdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBpZiAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgIHNpbmsuYWRkKG9wZXJhdG9yLmNhbGwoc2luaywgdGhpcy5zb3VyY2UpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNpbmsuYWRkKHRoaXMuc291cmNlIHx8IChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyAmJiAhc2luay5zeW5jRXJyb3JUaHJvd2FibGUpID9cbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUoc2luaykgOlxuICAgICAgICAgICAgICAgIHRoaXMuX3RyeVN1YnNjcmliZShzaW5rKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICBpZiAoc2luay5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICBzaW5rLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChzaW5rLnN5bmNFcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBzaW5rLnN5bmNFcnJvclZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2luaztcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc2luaykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShzaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICBzaW5rLnN5bmNFcnJvclRocm93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2luay5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5SZXBvcnRFcnJvcihzaW5rKSkge1xuICAgICAgICAgICAgICAgIHNpbmsuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKG5leHQsIHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVqZWN0LCByZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgICAgICByZXR1cm4gc291cmNlICYmIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZVtTeW1ib2xfb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3BlcmF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXBlRnJvbUFycmF5KG9wZXJhdGlvbnMpKHRoaXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUudG9Qcm9taXNlID0gZnVuY3Rpb24gKHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAoeCkgeyByZXR1cm4gdmFsdWUgPSB4OyB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiByZWplY3QoZXJyKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh2YWx1ZSk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKHN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlO1xufSgpKTtcbmV4cG9ydCB7IE9ic2VydmFibGUgfTtcbmZ1bmN0aW9uIGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKSB7XG4gICAgaWYgKCFwcm9taXNlQ3Rvcikge1xuICAgICAgICBwcm9taXNlQ3RvciA9IGNvbmZpZy5Qcm9taXNlIHx8IFByb21pc2U7XG4gICAgfVxuICAgIGlmICghcHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBQcm9taXNlIGltcGwgZm91bmQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2VDdG9yO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2YWJsZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2NvbmZpZyxfdXRpbF9ob3N0UmVwb3J0RXJyb3IgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgaG9zdFJlcG9ydEVycm9yIH0gZnJvbSAnLi91dGlsL2hvc3RSZXBvcnRFcnJvcic7XG5leHBvcnQgdmFyIGVtcHR5ID0ge1xuICAgIGNsb3NlZDogdHJ1ZSxcbiAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHsgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2ZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9TdWJzY3JpYmVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbnZhciBPdXRlclN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoT3V0ZXJTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE91dGVyU3Vic2NyaWJlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGlubmVyVmFsdWUpO1xuICAgIH07XG4gICAgT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnJvcik7XG4gICAgfTtcbiAgICBPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBPdXRlclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IE91dGVyU3Vic2NyaWJlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T3V0ZXJTdWJzY3JpYmVyLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3ViamVjdCxfc2NoZWR1bGVyX3F1ZXVlLF9TdWJzY3JpcHRpb24sX29wZXJhdG9yc19vYnNlcnZlT24sX3V0aWxfT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IsX1N1YmplY3RTdWJzY3JpcHRpb24gUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuL1N1YmplY3QnO1xuaW1wb3J0IHsgcXVldWUgfSBmcm9tICcuL3NjaGVkdWxlci9xdWV1ZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZlT25TdWJzY3JpYmVyIH0gZnJvbSAnLi9vcGVyYXRvcnMvb2JzZXJ2ZU9uJztcbmltcG9ydCB7IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yIH0gZnJvbSAnLi91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbmltcG9ydCB7IFN1YmplY3RTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YmplY3RTdWJzY3JpcHRpb24nO1xudmFyIFJlcGxheVN1YmplY3QgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoUmVwbGF5U3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZXBsYXlTdWJqZWN0KGJ1ZmZlclNpemUsIHdpbmRvd1RpbWUsIHNjaGVkdWxlcikge1xuICAgICAgICBpZiAoYnVmZmVyU2l6ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBidWZmZXJTaXplID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3dUaW1lID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHdpbmRvd1RpbWUgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBfdGhpcy5fZXZlbnRzID0gW107XG4gICAgICAgIF90aGlzLl9pbmZpbml0ZVRpbWVXaW5kb3cgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuX2J1ZmZlclNpemUgPSBidWZmZXJTaXplIDwgMSA/IDEgOiBidWZmZXJTaXplO1xuICAgICAgICBfdGhpcy5fd2luZG93VGltZSA9IHdpbmRvd1RpbWUgPCAxID8gMSA6IHdpbmRvd1RpbWU7XG4gICAgICAgIGlmICh3aW5kb3dUaW1lID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcbiAgICAgICAgICAgIF90aGlzLl9pbmZpbml0ZVRpbWVXaW5kb3cgPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMubmV4dCA9IF90aGlzLm5leHRJbmZpbml0ZVRpbWVXaW5kb3c7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5uZXh0ID0gX3RoaXMubmV4dFRpbWVXaW5kb3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBSZXBsYXlTdWJqZWN0LnByb3RvdHlwZS5uZXh0SW5maW5pdGVUaW1lV2luZG93ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBfZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgICAgICAgX2V2ZW50cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChfZXZlbnRzLmxlbmd0aCA+IHRoaXMuX2J1ZmZlclNpemUpIHtcbiAgICAgICAgICAgICAgICBfZXZlbnRzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5uZXh0LmNhbGwodGhpcywgdmFsdWUpO1xuICAgIH07XG4gICAgUmVwbGF5U3ViamVjdC5wcm90b3R5cGUubmV4dFRpbWVXaW5kb3cgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2gobmV3IFJlcGxheUV2ZW50KHRoaXMuX2dldE5vdygpLCB2YWx1ZSkpO1xuICAgICAgICAgICAgdGhpcy5fdHJpbUJ1ZmZlclRoZW5HZXRFdmVudHMoKTtcbiAgICAgICAgfVxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLm5leHQuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBSZXBsYXlTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF9pbmZpbml0ZVRpbWVXaW5kb3cgPSB0aGlzLl9pbmZpbml0ZVRpbWVXaW5kb3c7XG4gICAgICAgIHZhciBfZXZlbnRzID0gX2luZmluaXRlVGltZVdpbmRvdyA/IHRoaXMuX2V2ZW50cyA6IHRoaXMuX3RyaW1CdWZmZXJUaGVuR2V0RXZlbnRzKCk7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgdmFyIGxlbiA9IF9ldmVudHMubGVuZ3RoO1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uO1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdG9wcGVkIHx8IHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBuZXcgU3ViamVjdFN1YnNjcmlwdGlvbih0aGlzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmFkZChzdWJzY3JpYmVyID0gbmV3IE9ic2VydmVPblN1YnNjcmliZXIoc3Vic2NyaWJlciwgc2NoZWR1bGVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9pbmZpbml0ZVRpbWVXaW5kb3cpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KF9ldmVudHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW4gJiYgIXN1YnNjcmliZXIuY2xvc2VkOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoX2V2ZW50c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IodGhpcy50aHJvd25FcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgUmVwbGF5U3ViamVjdC5wcm90b3R5cGUuX2dldE5vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnNjaGVkdWxlciB8fCBxdWV1ZSkubm93KCk7XG4gICAgfTtcbiAgICBSZXBsYXlTdWJqZWN0LnByb3RvdHlwZS5fdHJpbUJ1ZmZlclRoZW5HZXRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub3cgPSB0aGlzLl9nZXROb3coKTtcbiAgICAgICAgdmFyIF9idWZmZXJTaXplID0gdGhpcy5fYnVmZmVyU2l6ZTtcbiAgICAgICAgdmFyIF93aW5kb3dUaW1lID0gdGhpcy5fd2luZG93VGltZTtcbiAgICAgICAgdmFyIF9ldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICAgIHZhciBldmVudHNDb3VudCA9IF9ldmVudHMubGVuZ3RoO1xuICAgICAgICB2YXIgc3BsaWNlQ291bnQgPSAwO1xuICAgICAgICB3aGlsZSAoc3BsaWNlQ291bnQgPCBldmVudHNDb3VudCkge1xuICAgICAgICAgICAgaWYgKChub3cgLSBfZXZlbnRzW3NwbGljZUNvdW50XS50aW1lKSA8IF93aW5kb3dUaW1lKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGxpY2VDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudHNDb3VudCA+IF9idWZmZXJTaXplKSB7XG4gICAgICAgICAgICBzcGxpY2VDb3VudCA9IE1hdGgubWF4KHNwbGljZUNvdW50LCBldmVudHNDb3VudCAtIF9idWZmZXJTaXplKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3BsaWNlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBfZXZlbnRzLnNwbGljZSgwLCBzcGxpY2VDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9ldmVudHM7XG4gICAgfTtcbiAgICByZXR1cm4gUmVwbGF5U3ViamVjdDtcbn0oU3ViamVjdCkpO1xuZXhwb3J0IHsgUmVwbGF5U3ViamVjdCB9O1xudmFyIFJlcGxheUV2ZW50ID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlcGxheUV2ZW50KHRpbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFJlcGxheUV2ZW50O1xufSgpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJlcGxheVN1YmplY3QuanMubWFwXG4iLCJ2YXIgU2NoZWR1bGVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjaGVkdWxlcihTY2hlZHVsZXJBY3Rpb24sIG5vdykge1xuICAgICAgICBpZiAobm93ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG5vdyA9IFNjaGVkdWxlci5ub3c7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5TY2hlZHVsZXJBY3Rpb24gPSBTY2hlZHVsZXJBY3Rpb247XG4gICAgICAgIHRoaXMubm93ID0gbm93O1xuICAgIH1cbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHdvcmssIGRlbGF5LCBzdGF0ZSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5TY2hlZHVsZXJBY3Rpb24odGhpcywgd29yaykuc2NoZWR1bGUoc3RhdGUsIGRlbGF5KTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5ub3cgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBEYXRlLm5vdygpOyB9O1xuICAgIHJldHVybiBTY2hlZHVsZXI7XG59KCkpO1xuZXhwb3J0IHsgU2NoZWR1bGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TY2hlZHVsZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9PYnNlcnZhYmxlLF9TdWJzY3JpYmVyLF9TdWJzY3JpcHRpb24sX3V0aWxfT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IsX1N1YmplY3RTdWJzY3JpcHRpb24sX2ludGVybmFsX3N5bWJvbF9yeFN1YnNjcmliZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBPYmplY3RVbnN1YnNjcmliZWRFcnJvciB9IGZyb20gJy4vdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG5pbXBvcnQgeyBTdWJqZWN0U3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJqZWN0U3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IHJ4U3Vic2NyaWJlciBhcyByeFN1YnNjcmliZXJTeW1ib2wgfSBmcm9tICcuLi9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyJztcbnZhciBTdWJqZWN0U3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhTdWJqZWN0U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJqZWN0U3Vic2NyaWJlcihkZXN0aW5hdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gU3ViamVjdFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IFN1YmplY3RTdWJzY3JpYmVyIH07XG52YXIgU3ViamVjdCA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhTdWJqZWN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3QoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICBfdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnRocm93bkVycm9yID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJqZWN0LnByb3RvdHlwZVtyeFN1YnNjcmliZXJTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFN1YmplY3RTdWJzY3JpYmVyKHRoaXMpO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgc3ViamVjdCA9IG5ldyBBbm9ueW1vdXNTdWJqZWN0KHRoaXMsIHRoaXMpO1xuICAgICAgICBzdWJqZWN0Lm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiBzdWJqZWN0O1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycztcbiAgICAgICAgICAgIHZhciBsZW4gPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3B5W2ldLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aHJvd25FcnJvciA9IGVycjtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnM7XG4gICAgICAgIHZhciBsZW4gPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICB2YXIgY29weSA9IG9ic2VydmVycy5zbGljZSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb3B5W2ldLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMubGVuZ3RoID0gMDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgICAgICB2YXIgbGVuID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29weVtpXS5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbnVsbDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuX3RyeVN1YnNjcmliZS5jYWxsKHRoaXMsIHN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmhhc0Vycm9yKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKHRoaXMudGhyb3duRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN1YmplY3RTdWJzY3JpcHRpb24odGhpcywgc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmFzT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgICAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgU3ViamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gbmV3IEFub255bW91c1N1YmplY3QoZGVzdGluYXRpb24sIHNvdXJjZSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3ViamVjdDtcbn0oT2JzZXJ2YWJsZSkpO1xuZXhwb3J0IHsgU3ViamVjdCB9O1xudmFyIEFub255bW91c1N1YmplY3QgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQW5vbnltb3VzU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBbm9ueW1vdXNTdWJqZWN0KGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgX3RoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uLm5leHQpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uLmVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICBpZiAoZGVzdGluYXRpb24gJiYgZGVzdGluYXRpb24uY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBbm9ueW1vdXNTdWJqZWN0O1xufShTdWJqZWN0KSk7XG5leHBvcnQgeyBBbm9ueW1vdXNTdWJqZWN0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJqZWN0LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3Vic2NyaXB0aW9uIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG52YXIgU3ViamVjdFN1YnNjcmlwdGlvbiA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhTdWJqZWN0U3Vic2NyaXB0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3RTdWJzY3JpcHRpb24oc3ViamVjdCwgc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcbiAgICAgICAgX3RoaXMuc3Vic2NyaWJlciA9IHN1YnNjcmliZXI7XG4gICAgICAgIF90aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YmplY3RTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHZhciBzdWJqZWN0ID0gdGhpcy5zdWJqZWN0O1xuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gc3ViamVjdC5vYnNlcnZlcnM7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IG51bGw7XG4gICAgICAgIGlmICghb2JzZXJ2ZXJzIHx8IG9ic2VydmVycy5sZW5ndGggPT09IDAgfHwgc3ViamVjdC5pc1N0b3BwZWQgfHwgc3ViamVjdC5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaWJlckluZGV4ID0gb2JzZXJ2ZXJzLmluZGV4T2YodGhpcy5zdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2Uoc3Vic2NyaWJlckluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFN1YmplY3RTdWJzY3JpcHRpb247XG59KFN1YnNjcmlwdGlvbikpO1xuZXhwb3J0IHsgU3ViamVjdFN1YnNjcmlwdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3ViamVjdFN1YnNjcmlwdGlvbi5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX3V0aWxfaXNGdW5jdGlvbixfT2JzZXJ2ZXIsX1N1YnNjcmlwdGlvbixfaW50ZXJuYWxfc3ltYm9sX3J4U3Vic2NyaWJlcixfY29uZmlnLF91dGlsX2hvc3RSZXBvcnRFcnJvciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGVtcHR5IGFzIGVtcHR5T2JzZXJ2ZXIgfSBmcm9tICcuL09ic2VydmVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IHJ4U3Vic2NyaWJlciBhcyByeFN1YnNjcmliZXJTeW1ib2wgfSBmcm9tICcuLi9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGhvc3RSZXBvcnRFcnJvciB9IGZyb20gJy4vdXRpbC9ob3N0UmVwb3J0RXJyb3InO1xudmFyIFN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3luY0Vycm9yVmFsdWUgPSBudWxsO1xuICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd24gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGVtcHR5T2JzZXJ2ZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKCFkZXN0aW5hdGlvbk9yTmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGVtcHR5T2JzZXJ2ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uT3JOZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb25Pck5leHQgaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSBkZXN0aW5hdGlvbk9yTmV4dC5zeW5jRXJyb3JUaHJvd2FibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uT3JOZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25Pck5leHQuYWRkKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTYWZlU3Vic2NyaWJlcihfdGhpcywgZGVzdGluYXRpb25Pck5leHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTYWZlU3Vic2NyaWJlcihfdGhpcywgZGVzdGluYXRpb25Pck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZVtyeFN1YnNjcmliZXJTeW1ib2xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcbiAgICBTdWJzY3JpYmVyLmNyZWF0ZSA9IGZ1bmN0aW9uIChuZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBuZXcgU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBzdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5fbmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlQW5kUmVjeWNsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRPclBhcmVudHMgPSB0aGlzLl9wYXJlbnRPclBhcmVudHM7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaWJlcjtcbn0oU3Vic2NyaXB0aW9uKSk7XG5leHBvcnQgeyBTdWJzY3JpYmVyIH07XG52YXIgU2FmZVN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoU2FmZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2FmZVN1YnNjcmliZXIoX3BhcmVudFN1YnNjcmliZXIsIG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3BhcmVudFN1YnNjcmliZXIgPSBfcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHZhciBjb250ZXh0ID0gX3RoaXM7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9ic2VydmVyT3JOZXh0KSkge1xuICAgICAgICAgICAgbmV4dCA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAgICAgICBuZXh0ID0gb2JzZXJ2ZXJPck5leHQubmV4dDtcbiAgICAgICAgICAgIGVycm9yID0gb2JzZXJ2ZXJPck5leHQuZXJyb3I7XG4gICAgICAgICAgICBjb21wbGV0ZSA9IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlO1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyT3JOZXh0ICE9PSBlbXB0eU9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IE9iamVjdC5jcmVhdGUob2JzZXJ2ZXJPck5leHQpO1xuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQudW5zdWJzY3JpYmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkZChjb250ZXh0LnVuc3Vic2NyaWJlLmJpbmQoY29udGV4dCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZXh0LnVuc3Vic2NyaWJlID0gX3RoaXMudW5zdWJzY3JpYmUuYmluZChfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICBfdGhpcy5fbmV4dCA9IG5leHQ7XG4gICAgICAgIF90aGlzLl9lcnJvciA9IGVycm9yO1xuICAgICAgICBfdGhpcy5fY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkICYmIHRoaXMuX25leHQpIHtcbiAgICAgICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JVbnN1Yih0aGlzLl9uZXh0LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50U3Vic2NyaWJlciwgdGhpcy5fbmV4dCwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgICAgICB2YXIgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyA9IGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIodGhpcy5fZXJyb3IsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnRTdWJzY3JpYmVyLCB0aGlzLl9lcnJvciwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclZhbHVlID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICBfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZWRDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9jb21wbGV0ZS5jYWxsKF90aGlzLl9jb250ZXh0KTsgfTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIod3JhcHBlZENvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudFN1YnNjcmliZXIsIHdyYXBwZWRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fX3RyeU9yVW5zdWIgPSBmdW5jdGlvbiAoZm4sIHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMuX2NvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLl9fdHJ5T3JTZXRFcnJvciA9IGZ1bmN0aW9uIChwYXJlbnQsIGZuLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIWNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JhZCBjYWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcy5fY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIHBhcmVudC5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyID0gbnVsbDtcbiAgICAgICAgX3BhcmVudFN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIHJldHVybiBTYWZlU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgU2FmZVN1YnNjcmliZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmliZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF91dGlsX2lzQXJyYXksX3V0aWxfaXNPYmplY3QsX3V0aWxfaXNGdW5jdGlvbixfdXRpbF9VbnN1YnNjcmlwdGlvbkVycm9yIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vdXRpbC9pc09iamVjdCc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgVW5zdWJzY3JpcHRpb25FcnJvciB9IGZyb20gJy4vdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yJztcbnZhciBTdWJzY3JpcHRpb24gPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICBpZiAodW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2N0b3JVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl91bnN1YnNjcmliZSA9IHVuc3Vic2NyaWJlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlcnJvcnM7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIF9wYXJlbnRPclBhcmVudHMgPSBfYS5fcGFyZW50T3JQYXJlbnRzLCBfY3RvclVuc3Vic2NyaWJlID0gX2EuX2N0b3JVbnN1YnNjcmliZSwgX3Vuc3Vic2NyaWJlID0gX2EuX3Vuc3Vic2NyaWJlLCBfc3Vic2NyaXB0aW9ucyA9IF9hLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICBpZiAoX3BhcmVudE9yUGFyZW50cyBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgX3BhcmVudE9yUGFyZW50cy5yZW1vdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX3BhcmVudE9yUGFyZW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IF9wYXJlbnRPclBhcmVudHMubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudF8xID0gX3BhcmVudE9yUGFyZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgcGFyZW50XzEucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKF91bnN1YnNjcmliZSkpIHtcbiAgICAgICAgICAgIGlmIChfY3RvclVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIF91bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMgPSBlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvciA/IGZsYXR0ZW5VbnN1YnNjcmlwdGlvbkVycm9ycyhlLmVycm9ycykgOiBbZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXkoX3N1YnNjcmlwdGlvbnMpKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBfc3Vic2NyaXB0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbikge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSBfc3Vic2NyaXB0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHN1YikpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KGZsYXR0ZW5VbnN1YnNjcmlwdGlvbkVycm9ycyhlLmVycm9ycykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFVuc3Vic2NyaXB0aW9uRXJyb3IoZXJyb3JzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGVhcmRvd24pIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRlYXJkb3duO1xuICAgICAgICBpZiAoIXRlYXJkb3duKSB7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHRlYXJkb3duKSB7XG4gICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbih0ZWFyZG93bik7XG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24gPT09IHRoaXMgfHwgc3Vic2NyaXB0aW9uLmNsb3NlZCB8fCB0eXBlb2Ygc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghKHN1YnNjcmlwdGlvbiBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24uX3N1YnNjcmlwdGlvbnMgPSBbdG1wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnJlY29nbml6ZWQgdGVhcmRvd24gJyArIHRlYXJkb3duICsgJyBhZGRlZCB0byBTdWJzY3JpcHRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9wYXJlbnRPclBhcmVudHMgPSBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgaWYgKF9wYXJlbnRPclBhcmVudHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5fcGFyZW50T3JQYXJlbnRzID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50T3JQYXJlbnRzIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoX3BhcmVudE9yUGFyZW50cyA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cyA9IFtfcGFyZW50T3JQYXJlbnRzLCB0aGlzXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50T3JQYXJlbnRzLmluZGV4T2YodGhpcykgPT09IC0xKSB7XG4gICAgICAgICAgICBfcGFyZW50T3JQYXJlbnRzLnB1c2godGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gdGhpcy5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBbc3Vic2NyaXB0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9ucykge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbkluZGV4ID0gc3Vic2NyaXB0aW9ucy5pbmRleE9mKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9ucy5zcGxpY2Uoc3Vic2NyaXB0aW9uSW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24uRU1QVFkgPSAoZnVuY3Rpb24gKGVtcHR5KSB7XG4gICAgICAgIGVtcHR5LmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9KG5ldyBTdWJzY3JpcHRpb24oKSkpO1xuICAgIHJldHVybiBTdWJzY3JpcHRpb247XG59KCkpO1xuZXhwb3J0IHsgU3Vic2NyaXB0aW9uIH07XG5mdW5jdGlvbiBmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZXJyb3JzKSB7XG4gICAgcmV0dXJuIGVycm9ycy5yZWR1Y2UoZnVuY3Rpb24gKGVycnMsIGVycikgeyByZXR1cm4gZXJycy5jb25jYXQoKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IpID8gZXJyLmVycm9ycyA6IGVycik7IH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmlwdGlvbi5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3MgPSBmYWxzZTtcbmV4cG9ydCB2YXIgY29uZmlnID0ge1xuICAgIFByb21pc2U6IHVuZGVmaW5lZCxcbiAgICBzZXQgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IC8qQF9fUFVSRV9fKi8gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAvKkBfX1BVUkVfXyovIGNvbnNvbGUud2FybignREVQUkVDQVRFRCEgUnhKUyB3YXMgc2V0IHRvIHVzZSBkZXByZWNhdGVkIHN5bmNocm9ub3VzIGVycm9yIGhhbmRsaW5nIGJlaGF2aW9yIGJ5IGNvZGUgYXQ6IFxcbicgKyBlcnJvci5zdGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzKSB7XG4gICAgICAgICAgICAvKkBfX1BVUkVfXyovIGNvbnNvbGUubG9nKCdSeEpTOiBCYWNrIHRvIGEgYmV0dGVyIGVycm9yIGJlaGF2aW9yLiBUaGFuayB5b3UuIDwzJyk7XG4gICAgICAgIH1cbiAgICAgICAgX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZygpIHtcbiAgICAgICAgcmV0dXJuIF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncztcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmZpZy5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX1N1YnNjcmliZXIsX09ic2VydmFibGUsX3V0aWxfc3Vic2NyaWJlVG8gUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzdWJzY3JpYmVUbyB9IGZyb20gJy4vdXRpbC9zdWJzY3JpYmVUbyc7XG52YXIgU2ltcGxlSW5uZXJTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFNpbXBsZUlubmVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTaW1wbGVJbm5lclN1YnNjcmliZXIocGFyZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTaW1wbGVJbm5lclN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeU5leHQodmFsdWUpO1xuICAgIH07XG4gICAgU2ltcGxlSW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQubm90aWZ5RXJyb3IoZXJyb3IpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBTaW1wbGVJbm5lclN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQubm90aWZ5Q29tcGxldGUoKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIFNpbXBsZUlubmVyU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgU2ltcGxlSW5uZXJTdWJzY3JpYmVyIH07XG52YXIgQ29tcGxleElubmVyU3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhDb21wbGV4SW5uZXJTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbXBsZXhJbm5lclN1YnNjcmliZXIocGFyZW50LCBvdXRlclZhbHVlLCBvdXRlckluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgX3RoaXMub3V0ZXJWYWx1ZSA9IG91dGVyVmFsdWU7XG4gICAgICAgIF90aGlzLm91dGVySW5kZXggPSBvdXRlckluZGV4O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbXBsZXhJbm5lclN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeU5leHQodGhpcy5vdXRlclZhbHVlLCB2YWx1ZSwgdGhpcy5vdXRlckluZGV4LCB0aGlzKTtcbiAgICB9O1xuICAgIENvbXBsZXhJbm5lclN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlFcnJvcihlcnJvcik7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIENvbXBsZXhJbm5lclN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQubm90aWZ5Q29tcGxldGUodGhpcyk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIHJldHVybiBDb21wbGV4SW5uZXJTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnQgeyBDb21wbGV4SW5uZXJTdWJzY3JpYmVyIH07XG52YXIgU2ltcGxlT3V0ZXJTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFNpbXBsZU91dGVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTaW1wbGVPdXRlclN1YnNjcmliZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgU2ltcGxlT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlOZXh0ID0gZnVuY3Rpb24gKGlubmVyVmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGlubmVyVmFsdWUpO1xuICAgIH07XG4gICAgU2ltcGxlT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgIH07XG4gICAgU2ltcGxlT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIFNpbXBsZU91dGVyU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgU2ltcGxlT3V0ZXJTdWJzY3JpYmVyIH07XG52YXIgQ29tcGxleE91dGVyU3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhDb21wbGV4T3V0ZXJTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbXBsZXhPdXRlclN1YnNjcmliZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQ29tcGxleE91dGVyU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChfb3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgX291dGVySW5kZXgsIF9pbm5lclN1Yikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgfTtcbiAgICBDb21wbGV4T3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycm9yKTtcbiAgICB9O1xuICAgIENvbXBsZXhPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKF9pbm5lclN1Yikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tcGxleE91dGVyU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgQ29tcGxleE91dGVyU3Vic2NyaWJlciB9O1xuZXhwb3J0IGZ1bmN0aW9uIGlubmVyU3Vic2NyaWJlKHJlc3VsdCwgaW5uZXJTdWJzY3JpYmVyKSB7XG4gICAgaWYgKGlubmVyU3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5zdWJzY3JpYmUoaW5uZXJTdWJzY3JpYmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnNjcmliZVRvKHJlc3VsdCkoaW5uZXJTdWJzY3JpYmVyKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlubmVyU3Vic2NyaWJlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3ViamVjdCxfT2JzZXJ2YWJsZSxfU3Vic2NyaWJlcixfU3Vic2NyaXB0aW9uLF9vcGVyYXRvcnNfcmVmQ291bnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YmplY3RTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3ViamVjdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgcmVmQ291bnQgYXMgaGlnaGVyT3JkZXJSZWZDb3VudCB9IGZyb20gJy4uL29wZXJhdG9ycy9yZWZDb3VudCc7XG52YXIgQ29ubmVjdGFibGVPYnNlcnZhYmxlID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKENvbm5lY3RhYmxlT2JzZXJ2YWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb25uZWN0YWJsZU9ic2VydmFibGUoc291cmNlLCBzdWJqZWN0RmFjdG9yeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIF90aGlzLnN1YmplY3RGYWN0b3J5ID0gc3ViamVjdEZhY3Rvcnk7XG4gICAgICAgIF90aGlzLl9yZWZDb3VudCA9IDA7XG4gICAgICAgIF90aGlzLl9pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29ubmVjdGFibGVPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViamVjdCgpLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9O1xuICAgIENvbm5lY3RhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGUuZ2V0U3ViamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN1YmplY3QgPSB0aGlzLl9zdWJqZWN0O1xuICAgICAgICBpZiAoIXN1YmplY3QgfHwgc3ViamVjdC5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YmplY3QgPSB0aGlzLnN1YmplY3RGYWN0b3J5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YmplY3Q7XG4gICAgfTtcbiAgICBDb25uZWN0YWJsZU9ic2VydmFibGUucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy5fY29ubmVjdGlvbjtcbiAgICAgICAgaWYgKCFjb25uZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICBjb25uZWN0aW9uID0gdGhpcy5fY29ubmVjdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uYWRkKHRoaXMuc291cmNlXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShuZXcgQ29ubmVjdGFibGVTdWJzY3JpYmVyKHRoaXMuZ2V0U3ViamVjdCgpLCB0aGlzKSkpO1xuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcbiAgICB9O1xuICAgIENvbm5lY3RhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGUucmVmQ291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBoaWdoZXJPcmRlclJlZkNvdW50KCkodGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29ubmVjdGFibGVPYnNlcnZhYmxlO1xufShPYnNlcnZhYmxlKSk7XG5leHBvcnQgeyBDb25uZWN0YWJsZU9ic2VydmFibGUgfTtcbmV4cG9ydCB2YXIgY29ubmVjdGFibGVPYnNlcnZhYmxlRGVzY3JpcHRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29ubmVjdGFibGVQcm90byA9IENvbm5lY3RhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGU7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3BlcmF0b3I6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgX3JlZkNvdW50OiB7IHZhbHVlOiAwLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgICAgICBfc3ViamVjdDogeyB2YWx1ZTogbnVsbCwgd3JpdGFibGU6IHRydWUgfSxcbiAgICAgICAgX2Nvbm5lY3Rpb246IHsgdmFsdWU6IG51bGwsIHdyaXRhYmxlOiB0cnVlIH0sXG4gICAgICAgIF9zdWJzY3JpYmU6IHsgdmFsdWU6IGNvbm5lY3RhYmxlUHJvdG8uX3N1YnNjcmliZSB9LFxuICAgICAgICBfaXNDb21wbGV0ZTogeyB2YWx1ZTogY29ubmVjdGFibGVQcm90by5faXNDb21wbGV0ZSwgd3JpdGFibGU6IHRydWUgfSxcbiAgICAgICAgZ2V0U3ViamVjdDogeyB2YWx1ZTogY29ubmVjdGFibGVQcm90by5nZXRTdWJqZWN0IH0sXG4gICAgICAgIGNvbm5lY3Q6IHsgdmFsdWU6IGNvbm5lY3RhYmxlUHJvdG8uY29ubmVjdCB9LFxuICAgICAgICByZWZDb3VudDogeyB2YWx1ZTogY29ubmVjdGFibGVQcm90by5yZWZDb3VudCB9XG4gICAgfTtcbn0pKCk7XG52YXIgQ29ubmVjdGFibGVTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKENvbm5lY3RhYmxlU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb25uZWN0YWJsZVN1YnNjcmliZXIoZGVzdGluYXRpb24sIGNvbm5lY3RhYmxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jb25uZWN0YWJsZSA9IGNvbm5lY3RhYmxlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbm5lY3RhYmxlU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLl9lcnJvci5jYWxsKHRoaXMsIGVycik7XG4gICAgfTtcbiAgICBDb25uZWN0YWJsZVN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0YWJsZS5faXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKCk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuX2NvbXBsZXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBDb25uZWN0YWJsZVN1YnNjcmliZXIucHJvdG90eXBlLl91bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3RhYmxlID0gdGhpcy5jb25uZWN0YWJsZTtcbiAgICAgICAgaWYgKGNvbm5lY3RhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RhYmxlID0gbnVsbDtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uID0gY29ubmVjdGFibGUuX2Nvbm5lY3Rpb247XG4gICAgICAgICAgICBjb25uZWN0YWJsZS5fcmVmQ291bnQgPSAwO1xuICAgICAgICAgICAgY29ubmVjdGFibGUuX3N1YmplY3QgPSBudWxsO1xuICAgICAgICAgICAgY29ubmVjdGFibGUuX2Nvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDb25uZWN0YWJsZVN1YnNjcmliZXI7XG59KFN1YmplY3RTdWJzY3JpYmVyKSk7XG52YXIgUmVmQ291bnRPcGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWZDb3VudE9wZXJhdG9yKGNvbm5lY3RhYmxlKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGFibGUgPSBjb25uZWN0YWJsZTtcbiAgICB9XG4gICAgUmVmQ291bnRPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIGNvbm5lY3RhYmxlID0gdGhpcy5jb25uZWN0YWJsZTtcbiAgICAgICAgY29ubmVjdGFibGUuX3JlZkNvdW50Kys7XG4gICAgICAgIHZhciByZWZDb3VudGVyID0gbmV3IFJlZkNvdW50U3Vic2NyaWJlcihzdWJzY3JpYmVyLCBjb25uZWN0YWJsZSk7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBzb3VyY2Uuc3Vic2NyaWJlKHJlZkNvdW50ZXIpO1xuICAgICAgICBpZiAoIXJlZkNvdW50ZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICByZWZDb3VudGVyLmNvbm5lY3Rpb24gPSBjb25uZWN0YWJsZS5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9O1xuICAgIHJldHVybiBSZWZDb3VudE9wZXJhdG9yO1xufSgpKTtcbnZhciBSZWZDb3VudFN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoUmVmQ291bnRTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlZkNvdW50U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgY29ubmVjdGFibGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNvbm5lY3RhYmxlID0gY29ubmVjdGFibGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUmVmQ291bnRTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0YWJsZSA9IHRoaXMuY29ubmVjdGFibGU7XG4gICAgICAgIGlmICghY29ubmVjdGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25uZWN0YWJsZSA9IG51bGw7XG4gICAgICAgIHZhciByZWZDb3VudCA9IGNvbm5lY3RhYmxlLl9yZWZDb3VudDtcbiAgICAgICAgaWYgKHJlZkNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGFibGUuX3JlZkNvdW50ID0gcmVmQ291bnQgLSAxO1xuICAgICAgICBpZiAocmVmQ291bnQgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uO1xuICAgICAgICB2YXIgc2hhcmVkQ29ubmVjdGlvbiA9IGNvbm5lY3RhYmxlLl9jb25uZWN0aW9uO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICBpZiAoc2hhcmVkQ29ubmVjdGlvbiAmJiAoIWNvbm5lY3Rpb24gfHwgc2hhcmVkQ29ubmVjdGlvbiA9PT0gY29ubmVjdGlvbikpIHtcbiAgICAgICAgICAgIHNoYXJlZENvbm5lY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFJlZkNvdW50U3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29ubmVjdGFibGVPYnNlcnZhYmxlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfQXN5bmNTdWJqZWN0LF9vcGVyYXRvcnNfbWFwLF91dGlsX2NhblJlcG9ydEVycm9yLF91dGlsX2lzQXJyYXksX3V0aWxfaXNTY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQXN5bmNTdWJqZWN0IH0gZnJvbSAnLi4vQXN5bmNTdWJqZWN0JztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4uL29wZXJhdG9ycy9tYXAnO1xuaW1wb3J0IHsgY2FuUmVwb3J0RXJyb3IgfSBmcm9tICcuLi91dGlsL2NhblJlcG9ydEVycm9yJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsL2lzQXJyYXknO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmV4cG9ydCBmdW5jdGlvbiBiaW5kQ2FsbGJhY2soY2FsbGJhY2tGdW5jLCByZXN1bHRTZWxlY3Rvciwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIGlmIChpc1NjaGVkdWxlcihyZXN1bHRTZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHNjaGVkdWxlciA9IHJlc3VsdFNlbGVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRDYWxsYmFjayhjYWxsYmFja0Z1bmMsIHNjaGVkdWxlcikuYXBwbHkodm9pZCAwLCBhcmdzKS5waXBlKG1hcChmdW5jdGlvbiAoYXJncykgeyByZXR1cm4gaXNBcnJheShhcmdzKSA/IHJlc3VsdFNlbGVjdG9yLmFwcGx5KHZvaWQgMCwgYXJncykgOiByZXN1bHRTZWxlY3RvcihhcmdzKTsgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgdmFyIHN1YmplY3Q7XG4gICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgc3ViamVjdDogc3ViamVjdCxcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuYzogY2FsbGJhY2tGdW5jLFxuICAgICAgICAgICAgc2NoZWR1bGVyOiBzY2hlZHVsZXIsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgaWYgKCFzY2hlZHVsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN1YmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdCA9IG5ldyBBc3luY1N1YmplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5uZXJBcmdzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyQXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5uZXh0KGlubmVyQXJncy5sZW5ndGggPD0gMSA/IGlubmVyQXJnc1swXSA6IGlubmVyQXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0LmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja0Z1bmMuYXBwbHkoY29udGV4dCwgYXJncy5jb25jYXQoW2hhbmRsZXJdKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhblJlcG9ydEVycm9yKHN1YmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YmplY3Quc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICBhcmdzOiBhcmdzLCBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyLCBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2gsIDAsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKHN0YXRlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGFyZ3MgPSBzdGF0ZS5hcmdzLCBzdWJzY3JpYmVyID0gc3RhdGUuc3Vic2NyaWJlciwgcGFyYW1zID0gc3RhdGUucGFyYW1zO1xuICAgIHZhciBjYWxsYmFja0Z1bmMgPSBwYXJhbXMuY2FsbGJhY2tGdW5jLCBjb250ZXh0ID0gcGFyYW1zLmNvbnRleHQsIHNjaGVkdWxlciA9IHBhcmFtcy5zY2hlZHVsZXI7XG4gICAgdmFyIHN1YmplY3QgPSBwYXJhbXMuc3ViamVjdDtcbiAgICBpZiAoIXN1YmplY3QpIHtcbiAgICAgICAgc3ViamVjdCA9IHBhcmFtcy5zdWJqZWN0ID0gbmV3IEFzeW5jU3ViamVjdCgpO1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbm5lckFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgaW5uZXJBcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBpbm5lckFyZ3MubGVuZ3RoIDw9IDEgPyBpbm5lckFyZ3NbMF0gOiBpbm5lckFyZ3M7XG4gICAgICAgICAgICBfdGhpcy5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoTmV4dCwgMCwgeyB2YWx1ZTogdmFsdWUsIHN1YmplY3Q6IHN1YmplY3QgfSkpO1xuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2FsbGJhY2tGdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MuY29uY2F0KFtoYW5kbGVyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZChzdWJqZWN0LnN1YnNjcmliZShzdWJzY3JpYmVyKSk7XG59XG5mdW5jdGlvbiBkaXNwYXRjaE5leHQoc3RhdGUpIHtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZSwgc3ViamVjdCA9IHN0YXRlLnN1YmplY3Q7XG4gICAgc3ViamVjdC5uZXh0KHZhbHVlKTtcbiAgICBzdWJqZWN0LmNvbXBsZXRlKCk7XG59XG5mdW5jdGlvbiBkaXNwYXRjaEVycm9yKHN0YXRlKSB7XG4gICAgdmFyIGVyciA9IHN0YXRlLmVyciwgc3ViamVjdCA9IHN0YXRlLnN1YmplY3Q7XG4gICAgc3ViamVjdC5lcnJvcihlcnIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmluZENhbGxiYWNrLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfQXN5bmNTdWJqZWN0LF9vcGVyYXRvcnNfbWFwLF91dGlsX2NhblJlcG9ydEVycm9yLF91dGlsX2lzU2NoZWR1bGVyLF91dGlsX2lzQXJyYXkgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQXN5bmNTdWJqZWN0IH0gZnJvbSAnLi4vQXN5bmNTdWJqZWN0JztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4uL29wZXJhdG9ycy9tYXAnO1xuaW1wb3J0IHsgY2FuUmVwb3J0RXJyb3IgfSBmcm9tICcuLi91dGlsL2NhblJlcG9ydEVycm9yJztcbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9pc1NjaGVkdWxlcic7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5JztcbmV4cG9ydCBmdW5jdGlvbiBiaW5kTm9kZUNhbGxiYWNrKGNhbGxiYWNrRnVuYywgcmVzdWx0U2VsZWN0b3IsIHNjaGVkdWxlcikge1xuICAgIGlmIChyZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICBpZiAoaXNTY2hlZHVsZXIocmVzdWx0U2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBzY2hlZHVsZXIgPSByZXN1bHRTZWxlY3RvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBiaW5kTm9kZUNhbGxiYWNrKGNhbGxiYWNrRnVuYywgc2NoZWR1bGVyKS5hcHBseSh2b2lkIDAsIGFyZ3MpLnBpcGUobWFwKGZ1bmN0aW9uIChhcmdzKSB7IHJldHVybiBpc0FycmF5KGFyZ3MpID8gcmVzdWx0U2VsZWN0b3IuYXBwbHkodm9pZCAwLCBhcmdzKSA6IHJlc3VsdFNlbGVjdG9yKGFyZ3MpOyB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHN1YmplY3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgICAgICBjYWxsYmFja0Z1bmM6IGNhbGxiYWNrRnVuYyxcbiAgICAgICAgICAgIHNjaGVkdWxlcjogc2NoZWR1bGVyLFxuICAgICAgICAgICAgY29udGV4dDogdGhpcyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHBhcmFtcy5jb250ZXh0O1xuICAgICAgICAgICAgdmFyIHN1YmplY3QgPSBwYXJhbXMuc3ViamVjdDtcbiAgICAgICAgICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdWJqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3QgPSBwYXJhbXMuc3ViamVjdCA9IG5ldyBBc3luY1N1YmplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5uZXJBcmdzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyQXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IGlubmVyQXJncy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0Lm5leHQoaW5uZXJBcmdzLmxlbmd0aCA8PSAxID8gaW5uZXJBcmdzWzBdIDogaW5uZXJBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuYy5hcHBseShjb250ZXh0LCBhcmdzLmNvbmNhdChbaGFuZGxlcl0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FuUmVwb3J0RXJyb3Ioc3ViamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0LmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3ViamVjdC5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoLCAwLCB7IHBhcmFtczogcGFyYW1zLCBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyLCBjb250ZXh0OiBjb250ZXh0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gZGlzcGF0Y2goc3RhdGUpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzdGF0ZS5wYXJhbXMsIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyLCBjb250ZXh0ID0gc3RhdGUuY29udGV4dDtcbiAgICB2YXIgY2FsbGJhY2tGdW5jID0gcGFyYW1zLmNhbGxiYWNrRnVuYywgYXJncyA9IHBhcmFtcy5hcmdzLCBzY2hlZHVsZXIgPSBwYXJhbXMuc2NoZWR1bGVyO1xuICAgIHZhciBzdWJqZWN0ID0gcGFyYW1zLnN1YmplY3Q7XG4gICAgaWYgKCFzdWJqZWN0KSB7XG4gICAgICAgIHN1YmplY3QgPSBwYXJhbXMuc3ViamVjdCA9IG5ldyBBc3luY1N1YmplY3QoKTtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5uZXJBcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGlubmVyQXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGVyciA9IGlubmVyQXJncy5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hFcnJvciwgMCwgeyBlcnI6IGVyciwgc3ViamVjdDogc3ViamVjdCB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbm5lckFyZ3MubGVuZ3RoIDw9IDEgPyBpbm5lckFyZ3NbMF0gOiBpbm5lckFyZ3M7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaE5leHQsIDAsIHsgdmFsdWU6IHZhbHVlLCBzdWJqZWN0OiBzdWJqZWN0IH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuYy5hcHBseShjb250ZXh0LCBhcmdzLmNvbmNhdChbaGFuZGxlcl0pKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hFcnJvciwgMCwgeyBlcnI6IGVyciwgc3ViamVjdDogc3ViamVjdCB9KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGQoc3ViamVjdC5zdWJzY3JpYmUoc3Vic2NyaWJlcikpO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2hOZXh0KGFyZykge1xuICAgIHZhciB2YWx1ZSA9IGFyZy52YWx1ZSwgc3ViamVjdCA9IGFyZy5zdWJqZWN0O1xuICAgIHN1YmplY3QubmV4dCh2YWx1ZSk7XG4gICAgc3ViamVjdC5jb21wbGV0ZSgpO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2hFcnJvcihhcmcpIHtcbiAgICB2YXIgZXJyID0gYXJnLmVyciwgc3ViamVjdCA9IGFyZy5zdWJqZWN0O1xuICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJpbmROb2RlQ2FsbGJhY2suanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF91dGlsX2lzU2NoZWR1bGVyLF91dGlsX2lzQXJyYXksX091dGVyU3Vic2NyaWJlcixfdXRpbF9zdWJzY3JpYmVUb1Jlc3VsdCxfZnJvbUFycmF5IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc1NjaGVkdWxlciB9IGZyb20gJy4uL3V0aWwvaXNTY2hlZHVsZXInO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQgeyBPdXRlclN1YnNjcmliZXIgfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9SZXN1bHQgfSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vZnJvbUFycmF5JztcbnZhciBOT05FID0ge307XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdCgpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBvYnNlcnZhYmxlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0U2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgdmFyIHNjaGVkdWxlciA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNTY2hlZHVsZXIob2JzZXJ2YWJsZXNbb2JzZXJ2YWJsZXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgIHNjaGVkdWxlciA9IG9ic2VydmFibGVzLnBvcCgpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlc3VsdFNlbGVjdG9yID0gb2JzZXJ2YWJsZXMucG9wKCk7XG4gICAgfVxuICAgIGlmIChvYnNlcnZhYmxlcy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShvYnNlcnZhYmxlc1swXSkpIHtcbiAgICAgICAgb2JzZXJ2YWJsZXMgPSBvYnNlcnZhYmxlc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21BcnJheShvYnNlcnZhYmxlcywgc2NoZWR1bGVyKS5saWZ0KG5ldyBDb21iaW5lTGF0ZXN0T3BlcmF0b3IocmVzdWx0U2VsZWN0b3IpKTtcbn1cbnZhciBDb21iaW5lTGF0ZXN0T3BlcmF0b3IgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29tYmluZUxhdGVzdE9wZXJhdG9yKHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMucmVzdWx0U2VsZWN0b3IgPSByZXN1bHRTZWxlY3RvcjtcbiAgICB9XG4gICAgQ29tYmluZUxhdGVzdE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5yZXN1bHRTZWxlY3RvcikpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbWJpbmVMYXRlc3RPcGVyYXRvcjtcbn0oKSk7XG5leHBvcnQgeyBDb21iaW5lTGF0ZXN0T3BlcmF0b3IgfTtcbnZhciBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhDb21iaW5lTGF0ZXN0U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgICAgIF90aGlzLmFjdGl2ZSA9IDA7XG4gICAgICAgIF90aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICBfdGhpcy5vYnNlcnZhYmxlcyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uIChvYnNlcnZhYmxlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzLnB1c2goTk9ORSk7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZXMucHVzaChvYnNlcnZhYmxlKTtcbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlcyA9IHRoaXMub2JzZXJ2YWJsZXM7XG4gICAgICAgIHZhciBsZW4gPSBvYnNlcnZhYmxlcy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gbGVuO1xuICAgICAgICAgICAgdGhpcy50b1Jlc3BvbmQgPSBsZW47XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBvYnNlcnZhYmxlc1tpXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCBvYnNlcnZhYmxlLCB1bmRlZmluZWQsIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKHVudXNlZCkge1xuICAgICAgICBpZiAoKHRoaXMuYWN0aXZlIC09IDEpID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlOZXh0ID0gZnVuY3Rpb24gKF9vdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4KSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgdmFyIG9sZFZhbCA9IHZhbHVlc1tvdXRlckluZGV4XTtcbiAgICAgICAgdmFyIHRvUmVzcG9uZCA9ICF0aGlzLnRvUmVzcG9uZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IG9sZFZhbCA9PT0gTk9ORSA/IC0tdGhpcy50b1Jlc3BvbmQgOiB0aGlzLnRvUmVzcG9uZDtcbiAgICAgICAgdmFsdWVzW291dGVySW5kZXhdID0gaW5uZXJWYWx1ZTtcbiAgICAgICAgaWYgKHRvUmVzcG9uZCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cnlSZXN1bHRTZWxlY3Rvcih2YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlcy5zbGljZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIucHJvdG90eXBlLl90cnlSZXN1bHRTZWxlY3RvciA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucmVzdWx0U2VsZWN0b3IuYXBwbHkodGhpcywgdmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHJlc3VsdCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tYmluZUxhdGVzdFN1YnNjcmliZXI7XG59KE91dGVyU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbWJpbmVMYXRlc3QuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9vZixfb3BlcmF0b3JzX2NvbmNhdEFsbCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBvZiB9IGZyb20gJy4vb2YnO1xuaW1wb3J0IHsgY29uY2F0QWxsIH0gZnJvbSAnLi4vb3BlcmF0b3JzL2NvbmNhdEFsbCc7XG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHZhciBvYnNlcnZhYmxlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIG9ic2VydmFibGVzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBjb25jYXRBbGwoKShvZi5hcHBseSh2b2lkIDAsIG9ic2VydmFibGVzKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25jYXQuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF9mcm9tLF9lbXB0eSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi9mcm9tJztcbmltcG9ydCB7IGVtcHR5IH0gZnJvbSAnLi9lbXB0eSc7XG5leHBvcnQgZnVuY3Rpb24gZGVmZXIob2JzZXJ2YWJsZUZhY3RvcnkpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGlucHV0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW5wdXQgPSBvYnNlcnZhYmxlRmFjdG9yeSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNvdXJjZSA9IGlucHV0ID8gZnJvbShpbnB1dCkgOiBlbXB0eSgpO1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmVyLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5leHBvcnQgdmFyIEVNUFRZID0gLypAX19QVVJFX18qLyBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KTtcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eShzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gc2NoZWR1bGVyID8gZW1wdHlTY2hlZHVsZWQoc2NoZWR1bGVyKSA6IEVNUFRZO1xufVxuZnVuY3Rpb24gZW1wdHlTY2hlZHVsZWQoc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7IHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KTsgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbXB0eS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX3V0aWxfaXNBcnJheSxfb3BlcmF0b3JzX21hcCxfdXRpbF9pc09iamVjdCxfZnJvbSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5JztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4uL29wZXJhdG9ycy9tYXAnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi91dGlsL2lzT2JqZWN0JztcbmltcG9ydCB7IGZyb20gfSBmcm9tICcuL2Zyb20nO1xuZXhwb3J0IGZ1bmN0aW9uIGZvcmtKb2luKCkge1xuICAgIHZhciBzb3VyY2VzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgc291cmNlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAoc291cmNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdmFyIGZpcnN0XzEgPSBzb3VyY2VzWzBdO1xuICAgICAgICBpZiAoaXNBcnJheShmaXJzdF8xKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZvcmtKb2luSW50ZXJuYWwoZmlyc3RfMSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzT2JqZWN0KGZpcnN0XzEpICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihmaXJzdF8xKSA9PT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmaXJzdF8xKTtcbiAgICAgICAgICAgIHJldHVybiBmb3JrSm9pbkludGVybmFsKGtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGZpcnN0XzFba2V5XTsgfSksIGtleXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc291cmNlc1tzb3VyY2VzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciByZXN1bHRTZWxlY3Rvcl8xID0gc291cmNlcy5wb3AoKTtcbiAgICAgICAgc291cmNlcyA9IChzb3VyY2VzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KHNvdXJjZXNbMF0pKSA/IHNvdXJjZXNbMF0gOiBzb3VyY2VzO1xuICAgICAgICByZXR1cm4gZm9ya0pvaW5JbnRlcm5hbChzb3VyY2VzLCBudWxsKS5waXBlKG1hcChmdW5jdGlvbiAoYXJncykgeyByZXR1cm4gcmVzdWx0U2VsZWN0b3JfMS5hcHBseSh2b2lkIDAsIGFyZ3MpOyB9KSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JrSm9pbkludGVybmFsKHNvdXJjZXMsIG51bGwpO1xufVxuZnVuY3Rpb24gZm9ya0pvaW5JbnRlcm5hbChzb3VyY2VzLCBrZXlzKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBsZW4gPSBzb3VyY2VzLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgICAgIHZhciBlbWl0dGVkID0gMDtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGZyb20oc291cmNlc1tpXSk7XG4gICAgICAgICAgICB2YXIgaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuYWRkKHNvdXJjZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWl0dGVkKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpOyB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkID09PSBsZW4gfHwgIWhhc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1pdHRlZCA9PT0gbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGtleXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBrZXksIGkpIHsgcmV0dXJuIChyZXN1bHRba2V5XSA9IHZhbHVlc1tpXSwgcmVzdWx0KTsgfSwge30pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ya0pvaW4uanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF91dGlsX3N1YnNjcmliZVRvLF9zY2hlZHVsZWRfc2NoZWR1bGVkIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IHN1YnNjcmliZVRvIH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUbyc7XG5pbXBvcnQgeyBzY2hlZHVsZWQgfSBmcm9tICcuLi9zY2hlZHVsZWQvc2NoZWR1bGVkJztcbmV4cG9ydCBmdW5jdGlvbiBmcm9tKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoIXNjaGVkdWxlcikge1xuICAgICAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZVRvKGlucHV0KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVkKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb20uanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF91dGlsX3N1YnNjcmliZVRvQXJyYXksX3NjaGVkdWxlZF9zY2hlZHVsZUFycmF5IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IHN1YnNjcmliZVRvQXJyYXkgfSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvQXJyYXknO1xuaW1wb3J0IHsgc2NoZWR1bGVBcnJheSB9IGZyb20gJy4uL3NjaGVkdWxlZC9zY2hlZHVsZUFycmF5JztcbmV4cG9ydCBmdW5jdGlvbiBmcm9tQXJyYXkoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmVUb0FycmF5KGlucHV0KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcm9tQXJyYXkuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF91dGlsX2lzQXJyYXksX3V0aWxfaXNGdW5jdGlvbixfb3BlcmF0b3JzX21hcCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5JztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi4vb3BlcmF0b3JzL21hcCc7XG52YXIgdG9TdHJpbmcgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nOyB9KSgpO1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21FdmVudCh0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucywgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgICAgICByZXN1bHRTZWxlY3RvciA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChyZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZnJvbUV2ZW50KHRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zKS5waXBlKG1hcChmdW5jdGlvbiAoYXJncykgeyByZXR1cm4gaXNBcnJheShhcmdzKSA/IHJlc3VsdFNlbGVjdG9yLmFwcGx5KHZvaWQgMCwgYXJncykgOiByZXN1bHRTZWxlY3RvcihhcmdzKTsgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlcihlKSB7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0dXBTdWJzY3JpcHRpb24odGFyZ2V0LCBldmVudE5hbWUsIGhhbmRsZXIsIHN1YnNjcmliZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc2V0dXBTdWJzY3JpcHRpb24oc291cmNlT2JqLCBldmVudE5hbWUsIGhhbmRsZXIsIHN1YnNjcmliZXIsIG9wdGlvbnMpIHtcbiAgICB2YXIgdW5zdWJzY3JpYmU7XG4gICAgaWYgKGlzRXZlbnRUYXJnZXQoc291cmNlT2JqKSkge1xuICAgICAgICB2YXIgc291cmNlXzEgPSBzb3VyY2VPYmo7XG4gICAgICAgIHNvdXJjZU9iai5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIHVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc291cmNlXzEucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpOyB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0pRdWVyeVN0eWxlRXZlbnRFbWl0dGVyKHNvdXJjZU9iaikpIHtcbiAgICAgICAgdmFyIHNvdXJjZV8yID0gc291cmNlT2JqO1xuICAgICAgICBzb3VyY2VPYmoub24oZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzb3VyY2VfMi5vZmYoZXZlbnROYW1lLCBoYW5kbGVyKTsgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOb2RlU3R5bGVFdmVudEVtaXR0ZXIoc291cmNlT2JqKSkge1xuICAgICAgICB2YXIgc291cmNlXzMgPSBzb3VyY2VPYmo7XG4gICAgICAgIHNvdXJjZU9iai5hZGRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgICAgICB1bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvdXJjZV8zLnJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7IH07XG4gICAgfVxuICAgIGVsc2UgaWYgKHNvdXJjZU9iaiAmJiBzb3VyY2VPYmoubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzb3VyY2VPYmoubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHNldHVwU3Vic2NyaXB0aW9uKHNvdXJjZU9ialtpXSwgZXZlbnROYW1lLCBoYW5kbGVyLCBzdWJzY3JpYmVyLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBldmVudCB0YXJnZXQnKTtcbiAgICB9XG4gICAgc3Vic2NyaWJlci5hZGQodW5zdWJzY3JpYmUpO1xufVxuZnVuY3Rpb24gaXNOb2RlU3R5bGVFdmVudEVtaXR0ZXIoc291cmNlT2JqKSB7XG4gICAgcmV0dXJuIHNvdXJjZU9iaiAmJiB0eXBlb2Ygc291cmNlT2JqLmFkZExpc3RlbmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBzb3VyY2VPYmoucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBpc0pRdWVyeVN0eWxlRXZlbnRFbWl0dGVyKHNvdXJjZU9iaikge1xuICAgIHJldHVybiBzb3VyY2VPYmogJiYgdHlwZW9mIHNvdXJjZU9iai5vbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygc291cmNlT2JqLm9mZiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGlzRXZlbnRUYXJnZXQoc291cmNlT2JqKSB7XG4gICAgcmV0dXJuIHNvdXJjZU9iaiAmJiB0eXBlb2Ygc291cmNlT2JqLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHNvdXJjZU9iai5yZW1vdmVFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbUV2ZW50LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfdXRpbF9pc0FycmF5LF91dGlsX2lzRnVuY3Rpb24sX29wZXJhdG9yc19tYXAgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4uL29wZXJhdG9ycy9tYXAnO1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21FdmVudFBhdHRlcm4oYWRkSGFuZGxlciwgcmVtb3ZlSGFuZGxlciwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICBpZiAocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZyb21FdmVudFBhdHRlcm4oYWRkSGFuZGxlciwgcmVtb3ZlSGFuZGxlcikucGlwZShtYXAoZnVuY3Rpb24gKGFyZ3MpIHsgcmV0dXJuIGlzQXJyYXkoYXJncykgPyByZXN1bHRTZWxlY3Rvci5hcHBseSh2b2lkIDAsIGFyZ3MpIDogcmVzdWx0U2VsZWN0b3IoYXJncyk7IH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGUgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgZVtfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliZXIubmV4dChlLmxlbmd0aCA9PT0gMSA/IGVbMF0gOiBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJldFZhbHVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0VmFsdWUgPSBhZGRIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKHJlbW92ZUhhbmRsZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmVIYW5kbGVyKGhhbmRsZXIsIHJldFZhbHVlKTsgfTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb21FdmVudFBhdHRlcm4uanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF91dGlsX2lkZW50aXR5LF91dGlsX2lzU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi4vdXRpbC9pZGVudGl0eSc7XG5pbXBvcnQgeyBpc1NjaGVkdWxlciB9IGZyb20gJy4uL3V0aWwvaXNTY2hlZHVsZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlKGluaXRpYWxTdGF0ZU9yT3B0aW9ucywgY29uZGl0aW9uLCBpdGVyYXRlLCByZXN1bHRTZWxlY3Rvck9yT2JzZXJ2YWJsZSwgc2NoZWR1bGVyKSB7XG4gICAgdmFyIHJlc3VsdFNlbGVjdG9yO1xuICAgIHZhciBpbml0aWFsU3RhdGU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IGluaXRpYWxTdGF0ZU9yT3B0aW9ucztcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gb3B0aW9ucy5pbml0aWFsU3RhdGU7XG4gICAgICAgIGNvbmRpdGlvbiA9IG9wdGlvbnMuY29uZGl0aW9uO1xuICAgICAgICBpdGVyYXRlID0gb3B0aW9ucy5pdGVyYXRlO1xuICAgICAgICByZXN1bHRTZWxlY3RvciA9IG9wdGlvbnMucmVzdWx0U2VsZWN0b3IgfHwgaWRlbnRpdHk7XG4gICAgICAgIHNjaGVkdWxlciA9IG9wdGlvbnMuc2NoZWR1bGVyO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZXN1bHRTZWxlY3Rvck9yT2JzZXJ2YWJsZSA9PT0gdW5kZWZpbmVkIHx8IGlzU2NoZWR1bGVyKHJlc3VsdFNlbGVjdG9yT3JPYnNlcnZhYmxlKSkge1xuICAgICAgICBpbml0aWFsU3RhdGUgPSBpbml0aWFsU3RhdGVPck9wdGlvbnM7XG4gICAgICAgIHJlc3VsdFNlbGVjdG9yID0gaWRlbnRpdHk7XG4gICAgICAgIHNjaGVkdWxlciA9IHJlc3VsdFNlbGVjdG9yT3JPYnNlcnZhYmxlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gaW5pdGlhbFN0YXRlT3JPcHRpb25zO1xuICAgICAgICByZXN1bHRTZWxlY3RvciA9IHJlc3VsdFNlbGVjdG9yT3JPYnNlcnZhYmxlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgICAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoLCAwLCB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlcjogc3Vic2NyaWJlcixcbiAgICAgICAgICAgICAgICBpdGVyYXRlOiBpdGVyYXRlLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxuICAgICAgICAgICAgICAgIHJlc3VsdFNlbGVjdG9yOiByZXN1bHRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgY29uZGl0aW9uUmVzdWx0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblJlc3VsdCA9IGNvbmRpdGlvbihzdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNvbmRpdGlvblJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSByZXN1bHRTZWxlY3RvcihzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHN0YXRlID0gaXRlcmF0ZShzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHRydWUpO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2goc3RhdGUpIHtcbiAgICB2YXIgc3Vic2NyaWJlciA9IHN0YXRlLnN1YnNjcmliZXIsIGNvbmRpdGlvbiA9IHN0YXRlLmNvbmRpdGlvbjtcbiAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHN0YXRlLm5lZWRJdGVyYXRlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0ZSA9IHN0YXRlLml0ZXJhdGUoc3RhdGUuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0YXRlLm5lZWRJdGVyYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgICB2YXIgY29uZGl0aW9uUmVzdWx0ID0gdm9pZCAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uZGl0aW9uUmVzdWx0ID0gY29uZGl0aW9uKHN0YXRlLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY29uZGl0aW9uUmVzdWx0KSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgdmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFsdWUgPSBzdGF0ZS5yZXN1bHRTZWxlY3RvcihzdGF0ZS5zdGF0ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2NoZWR1bGUoc3RhdGUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2VuZXJhdGUuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9kZWZlcixfZW1wdHkgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgZGVmZXIgfSBmcm9tICcuL2RlZmVyJztcbmltcG9ydCB7IEVNUFRZIH0gZnJvbSAnLi9lbXB0eSc7XG5leHBvcnQgZnVuY3Rpb24gaWlmKGNvbmRpdGlvbiwgdHJ1ZVJlc3VsdCwgZmFsc2VSZXN1bHQpIHtcbiAgICBpZiAodHJ1ZVJlc3VsdCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHRydWVSZXN1bHQgPSBFTVBUWTtcbiAgICB9XG4gICAgaWYgKGZhbHNlUmVzdWx0ID09PSB2b2lkIDApIHtcbiAgICAgICAgZmFsc2VSZXN1bHQgPSBFTVBUWTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbmRpdGlvbigpID8gdHJ1ZVJlc3VsdCA6IGZhbHNlUmVzdWx0OyB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlpZi5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX3NjaGVkdWxlcl9hc3luYyxfdXRpbF9pc051bWVyaWMgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICcuLi9zY2hlZHVsZXIvYXN5bmMnO1xuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vdXRpbC9pc051bWVyaWMnO1xuZXhwb3J0IGZ1bmN0aW9uIGludGVydmFsKHBlcmlvZCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKHBlcmlvZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHBlcmlvZCA9IDA7XG4gICAgfVxuICAgIGlmIChzY2hlZHVsZXIgPT09IHZvaWQgMCkge1xuICAgICAgICBzY2hlZHVsZXIgPSBhc3luYztcbiAgICB9XG4gICAgaWYgKCFpc051bWVyaWMocGVyaW9kKSB8fCBwZXJpb2QgPCAwKSB7XG4gICAgICAgIHBlcmlvZCA9IDA7XG4gICAgfVxuICAgIGlmICghc2NoZWR1bGVyIHx8IHR5cGVvZiBzY2hlZHVsZXIuc2NoZWR1bGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2NoZWR1bGVyID0gYXN5bmM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBzdWJzY3JpYmVyLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2gsIHBlcmlvZCwgeyBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyLCBjb3VudGVyOiAwLCBwZXJpb2Q6IHBlcmlvZCB9KSk7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2goc3RhdGUpIHtcbiAgICB2YXIgc3Vic2NyaWJlciA9IHN0YXRlLnN1YnNjcmliZXIsIGNvdW50ZXIgPSBzdGF0ZS5jb3VudGVyLCBwZXJpb2QgPSBzdGF0ZS5wZXJpb2Q7XG4gICAgc3Vic2NyaWJlci5uZXh0KGNvdW50ZXIpO1xuICAgIHRoaXMuc2NoZWR1bGUoeyBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyLCBjb3VudGVyOiBjb3VudGVyICsgMSwgcGVyaW9kOiBwZXJpb2QgfSwgcGVyaW9kKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVydmFsLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfdXRpbF9pc1NjaGVkdWxlcixfb3BlcmF0b3JzX21lcmdlQWxsLF9mcm9tQXJyYXkgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmltcG9ydCB7IG1lcmdlQWxsIH0gZnJvbSAnLi4vb3BlcmF0b3JzL21lcmdlQWxsJztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vZnJvbUFycmF5JztcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBvYnNlcnZhYmxlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgY29uY3VycmVudCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICB2YXIgc2NoZWR1bGVyID0gbnVsbDtcbiAgICB2YXIgbGFzdCA9IG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChpc1NjaGVkdWxlcihsYXN0KSkge1xuICAgICAgICBzY2hlZHVsZXIgPSBvYnNlcnZhYmxlcy5wb3AoKTtcbiAgICAgICAgaWYgKG9ic2VydmFibGVzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgY29uY3VycmVudCA9IG9ic2VydmFibGVzLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBsYXN0ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25jdXJyZW50ID0gb2JzZXJ2YWJsZXMucG9wKCk7XG4gICAgfVxuICAgIGlmIChzY2hlZHVsZXIgPT09IG51bGwgJiYgb2JzZXJ2YWJsZXMubGVuZ3RoID09PSAxICYmIG9ic2VydmFibGVzWzBdIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBtZXJnZUFsbChjb25jdXJyZW50KShmcm9tQXJyYXkob2JzZXJ2YWJsZXMsIHNjaGVkdWxlcikpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2UuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF91dGlsX25vb3AgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4uL3V0aWwvbm9vcCc7XG5leHBvcnQgdmFyIE5FVkVSID0gLypAX19QVVJFX18qLyBuZXcgT2JzZXJ2YWJsZShub29wKTtcbmV4cG9ydCBmdW5jdGlvbiBuZXZlcigpIHtcbiAgICByZXR1cm4gTkVWRVI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZXZlci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3V0aWxfaXNTY2hlZHVsZXIsX2Zyb21BcnJheSxfc2NoZWR1bGVkX3NjaGVkdWxlQXJyYXkgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vZnJvbUFycmF5JztcbmltcG9ydCB7IHNjaGVkdWxlQXJyYXkgfSBmcm9tICcuLi9zY2hlZHVsZWQvc2NoZWR1bGVBcnJheSc7XG5leHBvcnQgZnVuY3Rpb24gb2YoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBzY2hlZHVsZXIgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgaWYgKGlzU2NoZWR1bGVyKHNjaGVkdWxlcikpIHtcbiAgICAgICAgYXJncy5wb3AoKTtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlQXJyYXkoYXJncywgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmcm9tQXJyYXkoYXJncyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2YuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF9mcm9tLF91dGlsX2lzQXJyYXksX2VtcHR5IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICcuL2Zyb20nO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQgeyBFTVBUWSB9IGZyb20gJy4vZW1wdHknO1xuZXhwb3J0IGZ1bmN0aW9uIG9uRXJyb3JSZXN1bWVOZXh0KCkge1xuICAgIHZhciBzb3VyY2VzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgc291cmNlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAoc291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgIH1cbiAgICB2YXIgZmlyc3QgPSBzb3VyY2VzWzBdLCByZW1haW5kZXIgPSBzb3VyY2VzLnNsaWNlKDEpO1xuICAgIGlmIChzb3VyY2VzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KGZpcnN0KSkge1xuICAgICAgICByZXR1cm4gb25FcnJvclJlc3VtZU5leHQuYXBwbHkodm9pZCAwLCBmaXJzdCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc3ViTmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuYWRkKG9uRXJyb3JSZXN1bWVOZXh0LmFwcGx5KHZvaWQgMCwgcmVtYWluZGVyKS5zdWJzY3JpYmUoc3Vic2NyaWJlcikpOyB9O1xuICAgICAgICByZXR1cm4gZnJvbShmaXJzdCkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyBzdWJzY3JpYmVyLm5leHQodmFsdWUpOyB9LFxuICAgICAgICAgICAgZXJyb3I6IHN1Yk5leHQsXG4gICAgICAgICAgICBjb21wbGV0ZTogc3ViTmV4dCxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vbkVycm9yUmVzdW1lTmV4dC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX1N1YnNjcmlwdGlvbiBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIHBhaXJzKG9iaiwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKCFzY2hlZHVsZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChba2V5LCBvYmpba2V5XV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgMCwgeyBrZXlzOiBrZXlzLCBpbmRleDogMCwgc3Vic2NyaWJlcjogc3Vic2NyaWJlciwgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb24sIG9iajogb2JqIH0pKTtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaChzdGF0ZSkge1xuICAgIHZhciBrZXlzID0gc3RhdGUua2V5cywgaW5kZXggPSBzdGF0ZS5pbmRleCwgc3Vic2NyaWJlciA9IHN0YXRlLnN1YnNjcmliZXIsIHN1YnNjcmlwdGlvbiA9IHN0YXRlLnN1YnNjcmlwdGlvbiwgb2JqID0gc3RhdGUub2JqO1xuICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgaWYgKGluZGV4IDwga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChba2V5LCBvYmpba2V5XV0pO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmFkZCh0aGlzLnNjaGVkdWxlKHsga2V5czoga2V5cywgaW5kZXg6IGluZGV4ICsgMSwgc3Vic2NyaWJlcjogc3Vic2NyaWJlciwgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb24sIG9iajogb2JqIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhaXJzLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfdXRpbF9ub3QsX3V0aWxfc3Vic2NyaWJlVG8sX29wZXJhdG9yc19maWx0ZXIsX09ic2VydmFibGUgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vdXRpbC9ub3QnO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG8gfSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJy4uL29wZXJhdG9ycy9maWx0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpdGlvbihzb3VyY2UsIHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgIHJldHVybiBbXG4gICAgICAgIGZpbHRlcihwcmVkaWNhdGUsIHRoaXNBcmcpKG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZVRvKHNvdXJjZSkpKSxcbiAgICAgICAgZmlsdGVyKG5vdChwcmVkaWNhdGUsIHRoaXNBcmcpKShuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmVUbyhzb3VyY2UpKSlcbiAgICBdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFydGl0aW9uLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfdXRpbF9pc0FycmF5LF9mcm9tQXJyYXksX091dGVyU3Vic2NyaWJlcixfdXRpbF9zdWJzY3JpYmVUb1Jlc3VsdCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2Zyb21BcnJheSc7XG5pbXBvcnQgeyBPdXRlclN1YnNjcmliZXIgfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9SZXN1bHQgfSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcbmV4cG9ydCBmdW5jdGlvbiByYWNlKCkge1xuICAgIHZhciBvYnNlcnZhYmxlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIG9ic2VydmFibGVzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGlmIChvYnNlcnZhYmxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkob2JzZXJ2YWJsZXNbMF0pKSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlcyA9IG9ic2VydmFibGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVzWzBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmcm9tQXJyYXkob2JzZXJ2YWJsZXMsIHVuZGVmaW5lZCkubGlmdChuZXcgUmFjZU9wZXJhdG9yKCkpO1xufVxudmFyIFJhY2VPcGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSYWNlT3BlcmF0b3IoKSB7XG4gICAgfVxuICAgIFJhY2VPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IFJhY2VTdWJzY3JpYmVyKHN1YnNjcmliZXIpKTtcbiAgICB9O1xuICAgIHJldHVybiBSYWNlT3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0IHsgUmFjZU9wZXJhdG9yIH07XG52YXIgUmFjZVN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoUmFjZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmFjZVN1YnNjcmliZXIoZGVzdGluYXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmhhc0ZpcnN0ID0gZmFsc2U7XG4gICAgICAgIF90aGlzLm9ic2VydmFibGVzID0gW107XG4gICAgICAgIF90aGlzLnN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBSYWNlU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAob2JzZXJ2YWJsZSkge1xuICAgICAgICB0aGlzLm9ic2VydmFibGVzLnB1c2gob2JzZXJ2YWJsZSk7XG4gICAgfTtcbiAgICBSYWNlU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZXMgPSB0aGlzLm9ic2VydmFibGVzO1xuICAgICAgICB2YXIgbGVuID0gb2JzZXJ2YWJsZXMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbiAmJiAhdGhpcy5oYXNGaXJzdDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBvYnNlcnZhYmxlc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gc3Vic2NyaWJlVG9SZXN1bHQodGhpcywgb2JzZXJ2YWJsZSwgdW5kZWZpbmVkLCBpKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9ic2VydmFibGVzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmFjZVN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAoX291dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0ZpcnN0KSB7XG4gICAgICAgICAgICB0aGlzLmhhc0ZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzY3JpcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IG91dGVySW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaXB0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmFjZVN1YnNjcmliZXI7XG59KE91dGVyU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgUmFjZVN1YnNjcmliZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhY2UuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmV4cG9ydCBmdW5jdGlvbiByYW5nZShzdGFydCwgY291bnQsIHNjaGVkdWxlcikge1xuICAgIGlmIChzdGFydCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHN0YXJ0ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIGlmIChjb3VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb3VudCA9IHN0YXJ0O1xuICAgICAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50ID0gc3RhcnQ7XG4gICAgICAgIGlmIChzY2hlZHVsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2gsIDAsIHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsIGNvdW50OiBjb3VudCwgc3RhcnQ6IHN0YXJ0LCBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXgrKyA+PSBjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoY3VycmVudCsrKTtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaChzdGF0ZSkge1xuICAgIHZhciBzdGFydCA9IHN0YXRlLnN0YXJ0LCBpbmRleCA9IHN0YXRlLmluZGV4LCBjb3VudCA9IHN0YXRlLmNvdW50LCBzdWJzY3JpYmVyID0gc3RhdGUuc3Vic2NyaWJlcjtcbiAgICBpZiAoaW5kZXggPj0gY291bnQpIHtcbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHN1YnNjcmliZXIubmV4dChzdGFydCk7XG4gICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhdGUuaW5kZXggPSBpbmRleCArIDE7XG4gICAgc3RhdGUuc3RhcnQgPSBzdGFydCArIDE7XG4gICAgdGhpcy5zY2hlZHVsZShzdGF0ZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5nZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuZXhwb3J0IGZ1bmN0aW9uIHRocm93RXJyb3IoZXJyb3IsIHNjaGVkdWxlcikge1xuICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnJvcik7IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7IHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2gsIDAsIHsgZXJyb3I6IGVycm9yLCBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyIH0pOyB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBkaXNwYXRjaChfYSkge1xuICAgIHZhciBlcnJvciA9IF9hLmVycm9yLCBzdWJzY3JpYmVyID0gX2Euc3Vic2NyaWJlcjtcbiAgICBzdWJzY3JpYmVyLmVycm9yKGVycm9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRocm93RXJyb3IuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF9zY2hlZHVsZXJfYXN5bmMsX3V0aWxfaXNOdW1lcmljLF91dGlsX2lzU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcbmltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4uL3V0aWwvaXNOdW1lcmljJztcbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9pc1NjaGVkdWxlcic7XG5leHBvcnQgZnVuY3Rpb24gdGltZXIoZHVlVGltZSwgcGVyaW9kT3JTY2hlZHVsZXIsIHNjaGVkdWxlcikge1xuICAgIGlmIChkdWVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgICAgZHVlVGltZSA9IDA7XG4gICAgfVxuICAgIHZhciBwZXJpb2QgPSAtMTtcbiAgICBpZiAoaXNOdW1lcmljKHBlcmlvZE9yU2NoZWR1bGVyKSkge1xuICAgICAgICBwZXJpb2QgPSBOdW1iZXIocGVyaW9kT3JTY2hlZHVsZXIpIDwgMSAmJiAxIHx8IE51bWJlcihwZXJpb2RPclNjaGVkdWxlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU2NoZWR1bGVyKHBlcmlvZE9yU2NoZWR1bGVyKSkge1xuICAgICAgICBzY2hlZHVsZXIgPSBwZXJpb2RPclNjaGVkdWxlcjtcbiAgICB9XG4gICAgaWYgKCFpc1NjaGVkdWxlcihzY2hlZHVsZXIpKSB7XG4gICAgICAgIHNjaGVkdWxlciA9IGFzeW5jO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGR1ZSA9IGlzTnVtZXJpYyhkdWVUaW1lKVxuICAgICAgICAgICAgPyBkdWVUaW1lXG4gICAgICAgICAgICA6ICgrZHVlVGltZSAtIHNjaGVkdWxlci5ub3coKSk7XG4gICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2gsIGR1ZSwge1xuICAgICAgICAgICAgaW5kZXg6IDAsIHBlcmlvZDogcGVyaW9kLCBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2goc3RhdGUpIHtcbiAgICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCwgcGVyaW9kID0gc3RhdGUucGVyaW9kLCBzdWJzY3JpYmVyID0gc3RhdGUuc3Vic2NyaWJlcjtcbiAgICBzdWJzY3JpYmVyLm5leHQoaW5kZXgpO1xuICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYgKHBlcmlvZCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICB9XG4gICAgc3RhdGUuaW5kZXggPSBpbmRleCArIDE7XG4gICAgdGhpcy5zY2hlZHVsZShzdGF0ZSwgcGVyaW9kKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRpbWVyLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfZnJvbSxfZW1wdHkgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJy4vZnJvbSc7XG5pbXBvcnQgeyBFTVBUWSB9IGZyb20gJy4vZW1wdHknO1xuZXhwb3J0IGZ1bmN0aW9uIHVzaW5nKHJlc291cmNlRmFjdG9yeSwgb2JzZXJ2YWJsZUZhY3RvcnkpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHJlc291cmNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzb3VyY2UgPSByZXNvdXJjZUZhY3RvcnkoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBvYnNlcnZhYmxlRmFjdG9yeShyZXNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc291cmNlID0gcmVzdWx0ID8gZnJvbShyZXN1bHQpIDogRU1QVFk7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNpbmcuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9mcm9tQXJyYXksX3V0aWxfaXNBcnJheSxfU3Vic2NyaWJlcixfLi5faW50ZXJuYWxfc3ltYm9sX2l0ZXJhdG9yLF9pbm5lclN1YnNjcmliZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tQXJyYXknO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBpdGVyYXRvciBhcyBTeW1ib2xfaXRlcmF0b3IgfSBmcm9tICcuLi8uLi9pbnRlcm5hbC9zeW1ib2wvaXRlcmF0b3InO1xuaW1wb3J0IHsgU2ltcGxlT3V0ZXJTdWJzY3JpYmVyLCBTaW1wbGVJbm5lclN1YnNjcmliZXIsIGlubmVyU3Vic2NyaWJlIH0gZnJvbSAnLi4vaW5uZXJTdWJzY3JpYmUnO1xuZXhwb3J0IGZ1bmN0aW9uIHppcCgpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBvYnNlcnZhYmxlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0U2VsZWN0b3IgPSBvYnNlcnZhYmxlc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9ic2VydmFibGVzLnBvcCgpO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbUFycmF5KG9ic2VydmFibGVzLCB1bmRlZmluZWQpLmxpZnQobmV3IFppcE9wZXJhdG9yKHJlc3VsdFNlbGVjdG9yKSk7XG59XG52YXIgWmlwT3BlcmF0b3IgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gWmlwT3BlcmF0b3IocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5yZXN1bHRTZWxlY3RvciA9IHJlc3VsdFNlbGVjdG9yO1xuICAgIH1cbiAgICBaaXBPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IFppcFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5yZXN1bHRTZWxlY3RvcikpO1xuICAgIH07XG4gICAgcmV0dXJuIFppcE9wZXJhdG9yO1xufSgpKTtcbmV4cG9ydCB7IFppcE9wZXJhdG9yIH07XG52YXIgWmlwU3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhaaXBTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFppcFN1YnNjcmliZXIoZGVzdGluYXRpb24sIHJlc3VsdFNlbGVjdG9yLCB2YWx1ZXMpIHtcbiAgICAgICAgaWYgKHZhbHVlcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5yZXN1bHRTZWxlY3RvciA9IHJlc3VsdFNlbGVjdG9yO1xuICAgICAgICBfdGhpcy5pdGVyYXRvcnMgPSBbXTtcbiAgICAgICAgX3RoaXMuYWN0aXZlID0gMDtcbiAgICAgICAgX3RoaXMucmVzdWx0U2VsZWN0b3IgPSAodHlwZW9mIHJlc3VsdFNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSA/IHJlc3VsdFNlbGVjdG9yIDogdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFppcFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBpdGVyYXRvcnMgPSB0aGlzLml0ZXJhdG9ycztcbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBpdGVyYXRvcnMucHVzaChuZXcgU3RhdGljQXJyYXlJdGVyYXRvcih2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZVtTeW1ib2xfaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpdGVyYXRvcnMucHVzaChuZXcgU3RhdGljSXRlcmF0b3IodmFsdWVbU3ltYm9sX2l0ZXJhdG9yXSgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpdGVyYXRvcnMucHVzaChuZXcgWmlwQnVmZmVySXRlcmF0b3IodGhpcy5kZXN0aW5hdGlvbiwgdGhpcywgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgWmlwU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXRlcmF0b3JzID0gdGhpcy5pdGVyYXRvcnM7XG4gICAgICAgIHZhciBsZW4gPSBpdGVyYXRvcnMubGVuZ3RoO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGxlbjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JzW2ldO1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yLnN0aWxsVW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5hZGQoaXRlcmF0b3Iuc3Vic2NyaWJlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgWmlwU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5SW5hY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlLS07XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBaaXBTdWJzY3JpYmVyLnByb3RvdHlwZS5jaGVja0l0ZXJhdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9ycyA9IHRoaXMuaXRlcmF0b3JzO1xuICAgICAgICB2YXIgbGVuID0gaXRlcmF0b3JzLmxlbmd0aDtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JzW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvci5oYXNWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXRlcmF0b3IuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgc2hvdWxkQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JzW2ldO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChpdGVyYXRvci5oYXNDb21wbGV0ZWQoKSkge1xuICAgICAgICAgICAgICAgIHNob3VsZENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJncy5wdXNoKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyeXJlc3VsdFNlbGVjdG9yKGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVzdGluYXRpb24ubmV4dChhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFppcFN1YnNjcmliZXIucHJvdG90eXBlLl90cnlyZXN1bHRTZWxlY3RvciA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnJlc3VsdFNlbGVjdG9yLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQocmVzdWx0KTtcbiAgICB9O1xuICAgIHJldHVybiBaaXBTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnQgeyBaaXBTdWJzY3JpYmVyIH07XG52YXIgU3RhdGljSXRlcmF0b3IgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RhdGljSXRlcmF0b3IoaXRlcmF0b3IpIHtcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IGl0ZXJhdG9yO1xuICAgICAgICB0aGlzLm5leHRSZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgfVxuICAgIFN0YXRpY0l0ZXJhdG9yLnByb3RvdHlwZS5oYXNWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBTdGF0aWNJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMubmV4dFJlc3VsdDtcbiAgICAgICAgdGhpcy5uZXh0UmVzdWx0ID0gdGhpcy5pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBTdGF0aWNJdGVyYXRvci5wcm90b3R5cGUuaGFzQ29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmV4dFJlc3VsdCA9IHRoaXMubmV4dFJlc3VsdDtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4obmV4dFJlc3VsdCAmJiBuZXh0UmVzdWx0LmRvbmUpO1xuICAgIH07XG4gICAgcmV0dXJuIFN0YXRpY0l0ZXJhdG9yO1xufSgpKTtcbnZhciBTdGF0aWNBcnJheUl0ZXJhdG9yID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0YXRpY0FycmF5SXRlcmF0b3IoYXJyYXkpIHtcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB9XG4gICAgU3RhdGljQXJyYXlJdGVyYXRvci5wcm90b3R5cGVbU3ltYm9sX2l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBTdGF0aWNBcnJheUl0ZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5pbmRleCsrO1xuICAgICAgICB2YXIgYXJyYXkgPSB0aGlzLmFycmF5O1xuICAgICAgICByZXR1cm4gaSA8IHRoaXMubGVuZ3RoID8geyB2YWx1ZTogYXJyYXlbaV0sIGRvbmU6IGZhbHNlIH0gOiB7IHZhbHVlOiBudWxsLCBkb25lOiB0cnVlIH07XG4gICAgfTtcbiAgICBTdGF0aWNBcnJheUl0ZXJhdG9yLnByb3RvdHlwZS5oYXNWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoID4gdGhpcy5pbmRleDtcbiAgICB9O1xuICAgIFN0YXRpY0FycmF5SXRlcmF0b3IucHJvdG90eXBlLmhhc0NvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoID09PSB0aGlzLmluZGV4O1xuICAgIH07XG4gICAgcmV0dXJuIFN0YXRpY0FycmF5SXRlcmF0b3I7XG59KCkpO1xudmFyIFppcEJ1ZmZlckl0ZXJhdG9yID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFppcEJ1ZmZlckl0ZXJhdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFppcEJ1ZmZlckl0ZXJhdG9yKGRlc3RpbmF0aW9uLCBwYXJlbnQsIG9ic2VydmFibGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgX3RoaXMub2JzZXJ2YWJsZSA9IG9ic2VydmFibGU7XG4gICAgICAgIF90aGlzLnN0aWxsVW5zdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuYnVmZmVyID0gW107XG4gICAgICAgIF90aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBaaXBCdWZmZXJJdGVyYXRvci5wcm90b3R5cGVbU3ltYm9sX2l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBaaXBCdWZmZXJJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgICAgICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBudWxsLCBkb25lOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogYnVmZmVyLnNoaWZ0KCksIGRvbmU6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFppcEJ1ZmZlckl0ZXJhdG9yLnByb3RvdHlwZS5oYXNWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyLmxlbmd0aCA+IDA7XG4gICAgfTtcbiAgICBaaXBCdWZmZXJJdGVyYXRvci5wcm90b3R5cGUuaGFzQ29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXIubGVuZ3RoID09PSAwICYmIHRoaXMuaXNDb21wbGV0ZTtcbiAgICB9O1xuICAgIFppcEJ1ZmZlckl0ZXJhdG9yLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlJbmFjdGl2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBaaXBCdWZmZXJJdGVyYXRvci5wcm90b3R5cGUubm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChpbm5lclZhbHVlKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyLnB1c2goaW5uZXJWYWx1ZSk7XG4gICAgICAgIHRoaXMucGFyZW50LmNoZWNrSXRlcmF0b3JzKCk7XG4gICAgfTtcbiAgICBaaXBCdWZmZXJJdGVyYXRvci5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaW5uZXJTdWJzY3JpYmUodGhpcy5vYnNlcnZhYmxlLCBuZXcgU2ltcGxlSW5uZXJTdWJzY3JpYmVyKHRoaXMpKTtcbiAgICB9O1xuICAgIHJldHVybiBaaXBCdWZmZXJJdGVyYXRvcjtcbn0oU2ltcGxlT3V0ZXJTdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD16aXAuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9tZXJnZUFsbCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBtZXJnZUFsbCB9IGZyb20gJy4vbWVyZ2VBbGwnO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdEFsbCgpIHtcbiAgICByZXR1cm4gbWVyZ2VBbGwoMSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25jYXRBbGwuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9TdWJzY3JpYmVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBmaWx0ZXJPcGVyYXRvckZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IEZpbHRlck9wZXJhdG9yKHByZWRpY2F0ZSwgdGhpc0FyZykpO1xuICAgIH07XG59XG52YXIgRmlsdGVyT3BlcmF0b3IgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRmlsdGVyT3BlcmF0b3IocHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgICAgIHRoaXMucHJlZGljYXRlID0gcHJlZGljYXRlO1xuICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgIH1cbiAgICBGaWx0ZXJPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IEZpbHRlclN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcmVkaWNhdGUsIHRoaXMudGhpc0FyZykpO1xuICAgIH07XG4gICAgcmV0dXJuIEZpbHRlck9wZXJhdG9yO1xufSgpKTtcbnZhciBGaWx0ZXJTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEZpbHRlclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmlsdGVyU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcmVkaWNhdGUgPSBwcmVkaWNhdGU7XG4gICAgICAgIF90aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgICAgICBfdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRmlsdGVyU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJlZGljYXRlLmNhbGwodGhpcy50aGlzQXJnLCB2YWx1ZSwgdGhpcy5jb3VudCsrKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEZpbHRlclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpbHRlci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX1N1YnNjcmliZXIsX1N1YnNjcmlwdGlvbixfT2JzZXJ2YWJsZSxfU3ViamVjdCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuLi9TdWJqZWN0JztcbmV4cG9ydCBmdW5jdGlvbiBncm91cEJ5KGtleVNlbGVjdG9yLCBlbGVtZW50U2VsZWN0b3IsIGR1cmF0aW9uU2VsZWN0b3IsIHN1YmplY3RTZWxlY3Rvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgR3JvdXBCeU9wZXJhdG9yKGtleVNlbGVjdG9yLCBlbGVtZW50U2VsZWN0b3IsIGR1cmF0aW9uU2VsZWN0b3IsIHN1YmplY3RTZWxlY3RvcikpO1xuICAgIH07XG59XG52YXIgR3JvdXBCeU9wZXJhdG9yID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdyb3VwQnlPcGVyYXRvcihrZXlTZWxlY3RvciwgZWxlbWVudFNlbGVjdG9yLCBkdXJhdGlvblNlbGVjdG9yLCBzdWJqZWN0U2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5rZXlTZWxlY3RvciA9IGtleVNlbGVjdG9yO1xuICAgICAgICB0aGlzLmVsZW1lbnRTZWxlY3RvciA9IGVsZW1lbnRTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5kdXJhdGlvblNlbGVjdG9yID0gZHVyYXRpb25TZWxlY3RvcjtcbiAgICAgICAgdGhpcy5zdWJqZWN0U2VsZWN0b3IgPSBzdWJqZWN0U2VsZWN0b3I7XG4gICAgfVxuICAgIEdyb3VwQnlPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IEdyb3VwQnlTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMua2V5U2VsZWN0b3IsIHRoaXMuZWxlbWVudFNlbGVjdG9yLCB0aGlzLmR1cmF0aW9uU2VsZWN0b3IsIHRoaXMuc3ViamVjdFNlbGVjdG9yKSk7XG4gICAgfTtcbiAgICByZXR1cm4gR3JvdXBCeU9wZXJhdG9yO1xufSgpKTtcbnZhciBHcm91cEJ5U3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhHcm91cEJ5U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHcm91cEJ5U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwga2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3RvciwgZHVyYXRpb25TZWxlY3Rvciwgc3ViamVjdFNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5rZXlTZWxlY3RvciA9IGtleVNlbGVjdG9yO1xuICAgICAgICBfdGhpcy5lbGVtZW50U2VsZWN0b3IgPSBlbGVtZW50U2VsZWN0b3I7XG4gICAgICAgIF90aGlzLmR1cmF0aW9uU2VsZWN0b3IgPSBkdXJhdGlvblNlbGVjdG9yO1xuICAgICAgICBfdGhpcy5zdWJqZWN0U2VsZWN0b3IgPSBzdWJqZWN0U2VsZWN0b3I7XG4gICAgICAgIF90aGlzLmdyb3VwcyA9IG51bGw7XG4gICAgICAgIF90aGlzLmF0dGVtcHRlZFRvVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuY291bnQgPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEdyb3VwQnlTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAga2V5ID0gdGhpcy5rZXlTZWxlY3Rvcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2dyb3VwKHZhbHVlLCBrZXkpO1xuICAgIH07XG4gICAgR3JvdXBCeVN1YnNjcmliZXIucHJvdG90eXBlLl9ncm91cCA9IGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhciBncm91cHMgPSB0aGlzLmdyb3VwcztcbiAgICAgICAgaWYgKCFncm91cHMpIHtcbiAgICAgICAgICAgIGdyb3VwcyA9IHRoaXMuZ3JvdXBzID0gbmV3IE1hcCgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBncm91cCA9IGdyb3Vwcy5nZXQoa2V5KTtcbiAgICAgICAgdmFyIGVsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5lbGVtZW50U2VsZWN0b3IodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWdyb3VwKSB7XG4gICAgICAgICAgICBncm91cCA9ICh0aGlzLnN1YmplY3RTZWxlY3RvciA/IHRoaXMuc3ViamVjdFNlbGVjdG9yKCkgOiBuZXcgU3ViamVjdCgpKTtcbiAgICAgICAgICAgIGdyb3Vwcy5zZXQoa2V5LCBncm91cCk7XG4gICAgICAgICAgICB2YXIgZ3JvdXBlZE9ic2VydmFibGUgPSBuZXcgR3JvdXBlZE9ic2VydmFibGUoa2V5LCBncm91cCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoZ3JvdXBlZE9ic2VydmFibGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZHVyYXRpb25TZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHRoaXMuZHVyYXRpb25TZWxlY3RvcihuZXcgR3JvdXBlZE9ic2VydmFibGUoa2V5LCBncm91cCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFkZChkdXJhdGlvbi5zdWJzY3JpYmUobmV3IEdyb3VwRHVyYXRpb25TdWJzY3JpYmVyKGtleSwgZ3JvdXAsIHRoaXMpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFncm91cC5jbG9zZWQpIHtcbiAgICAgICAgICAgIGdyb3VwLm5leHQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEdyb3VwQnlTdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHZhciBncm91cHMgPSB0aGlzLmdyb3VwcztcbiAgICAgICAgaWYgKGdyb3Vwcykge1xuICAgICAgICAgICAgZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBncm91cC5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBncm91cHMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgfTtcbiAgICBHcm91cEJ5U3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ3JvdXBzID0gdGhpcy5ncm91cHM7XG4gICAgICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgICAgIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCwga2V5KSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ3JvdXBzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgR3JvdXBCeVN1YnNjcmliZXIucHJvdG90eXBlLnJlbW92ZUdyb3VwID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmdyb3Vwcy5kZWxldGUoa2V5KTtcbiAgICB9O1xuICAgIEdyb3VwQnlTdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhpcy5hdHRlbXB0ZWRUb1Vuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gR3JvdXBCeVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbnZhciBHcm91cER1cmF0aW9uU3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhHcm91cER1cmF0aW9uU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHcm91cER1cmF0aW9uU3Vic2NyaWJlcihrZXksIGdyb3VwLCBwYXJlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ3JvdXApIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmtleSA9IGtleTtcbiAgICAgICAgX3RoaXMuZ3JvdXAgPSBncm91cDtcbiAgICAgICAgX3RoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEdyb3VwRHVyYXRpb25TdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICBHcm91cER1cmF0aW9uU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBwYXJlbnQgPSBfYS5wYXJlbnQsIGtleSA9IF9hLmtleTtcbiAgICAgICAgdGhpcy5rZXkgPSB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVHcm91cChrZXkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gR3JvdXBEdXJhdGlvblN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbnZhciBHcm91cGVkT2JzZXJ2YWJsZSA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhHcm91cGVkT2JzZXJ2YWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHcm91cGVkT2JzZXJ2YWJsZShrZXksIGdyb3VwU3ViamVjdCwgcmVmQ291bnRTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMua2V5ID0ga2V5O1xuICAgICAgICBfdGhpcy5ncm91cFN1YmplY3QgPSBncm91cFN1YmplY3Q7XG4gICAgICAgIF90aGlzLnJlZkNvdW50U3Vic2NyaXB0aW9uID0gcmVmQ291bnRTdWJzY3JpcHRpb247XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgR3JvdXBlZE9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCByZWZDb3VudFN1YnNjcmlwdGlvbiA9IF9hLnJlZkNvdW50U3Vic2NyaXB0aW9uLCBncm91cFN1YmplY3QgPSBfYS5ncm91cFN1YmplY3Q7XG4gICAgICAgIGlmIChyZWZDb3VudFN1YnNjcmlwdGlvbiAmJiAhcmVmQ291bnRTdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uYWRkKG5ldyBJbm5lclJlZkNvdW50U3Vic2NyaXB0aW9uKHJlZkNvdW50U3Vic2NyaXB0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaXB0aW9uLmFkZChncm91cFN1YmplY3Quc3Vic2NyaWJlKHN1YnNjcmliZXIpKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9O1xuICAgIHJldHVybiBHcm91cGVkT2JzZXJ2YWJsZTtcbn0oT2JzZXJ2YWJsZSkpO1xuZXhwb3J0IHsgR3JvdXBlZE9ic2VydmFibGUgfTtcbnZhciBJbm5lclJlZkNvdW50U3Vic2NyaXB0aW9uID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKElubmVyUmVmQ291bnRTdWJzY3JpcHRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJSZWZDb3VudFN1YnNjcmlwdGlvbihwYXJlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBwYXJlbnQuY291bnQrKztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBJbm5lclJlZkNvdW50U3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgICAgICBpZiAoIXBhcmVudC5jbG9zZWQgJiYgIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBwYXJlbnQuY291bnQgLT0gMTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQuY291bnQgPT09IDAgJiYgcGFyZW50LmF0dGVtcHRlZFRvVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIElubmVyUmVmQ291bnRTdWJzY3JpcHRpb247XG59KFN1YnNjcmlwdGlvbikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3JvdXBCeS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX1N1YnNjcmliZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBtYXAocHJvamVjdCwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBtYXBPcGVyYXRpb24oc291cmNlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvamVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgaXMgbm90IGEgZnVuY3Rpb24uIEFyZSB5b3UgbG9va2luZyBmb3IgYG1hcFRvKClgPycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykpO1xuICAgIH07XG59XG52YXIgTWFwT3BlcmF0b3IgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgIH1cbiAgICBNYXBPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IE1hcFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcm9qZWN0LCB0aGlzLnRoaXNBcmcpKTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBPcGVyYXRvcjtcbn0oKSk7XG5leHBvcnQgeyBNYXBPcGVyYXRvciB9O1xudmFyIE1hcFN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTWFwU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNYXBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBwcm9qZWN0LCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgX3RoaXMuY291bnQgPSAwO1xuICAgICAgICBfdGhpcy50aGlzQXJnID0gdGhpc0FyZyB8fCBfdGhpcztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wcm9qZWN0LmNhbGwodGhpcy50aGlzQXJnLCB2YWx1ZSwgdGhpcy5jb3VudCsrKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHJlc3VsdCk7XG4gICAgfTtcbiAgICByZXR1cm4gTWFwU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfbWVyZ2VNYXAsX3V0aWxfaWRlbnRpdHkgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICcuL21lcmdlTWFwJztcbmltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi4vdXRpbC9pZGVudGl0eSc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VBbGwoY29uY3VycmVudCkge1xuICAgIGlmIChjb25jdXJyZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uY3VycmVudCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlTWFwKGlkZW50aXR5LCBjb25jdXJyZW50KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlQWxsLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfbWFwLF9vYnNlcnZhYmxlX2Zyb20sX2lubmVyU3Vic2NyaWJlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL21hcCc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9mcm9tJztcbmltcG9ydCB7IFNpbXBsZU91dGVyU3Vic2NyaWJlciwgU2ltcGxlSW5uZXJTdWJzY3JpYmVyLCBpbm5lclN1YnNjcmliZSB9IGZyb20gJy4uL2lubmVyU3Vic2NyaWJlJztcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1hcChwcm9qZWN0LCByZXN1bHRTZWxlY3RvciwgY29uY3VycmVudCkge1xuICAgIGlmIChjb25jdXJyZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uY3VycmVudCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXN1bHRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gc291cmNlLnBpcGUobWVyZ2VNYXAoZnVuY3Rpb24gKGEsIGkpIHsgcmV0dXJuIGZyb20ocHJvamVjdChhLCBpKSkucGlwZShtYXAoZnVuY3Rpb24gKGIsIGlpKSB7IHJldHVybiByZXN1bHRTZWxlY3RvcihhLCBiLCBpLCBpaSk7IH0pKTsgfSwgY29uY3VycmVudCkpOyB9O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmN1cnJlbnQgPSByZXN1bHRTZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBNZXJnZU1hcE9wZXJhdG9yKHByb2plY3QsIGNvbmN1cnJlbnQpKTsgfTtcbn1cbnZhciBNZXJnZU1hcE9wZXJhdG9yID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1lcmdlTWFwT3BlcmF0b3IocHJvamVjdCwgY29uY3VycmVudCkge1xuICAgICAgICBpZiAoY29uY3VycmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBjb25jdXJyZW50ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuY29uY3VycmVudCA9IGNvbmN1cnJlbnQ7XG4gICAgfVxuICAgIE1lcmdlTWFwT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAob2JzZXJ2ZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgTWVyZ2VNYXBTdWJzY3JpYmVyKG9ic2VydmVyLCB0aGlzLnByb2plY3QsIHRoaXMuY29uY3VycmVudCkpO1xuICAgIH07XG4gICAgcmV0dXJuIE1lcmdlTWFwT3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0IHsgTWVyZ2VNYXBPcGVyYXRvciB9O1xudmFyIE1lcmdlTWFwU3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNZXJnZU1hcFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWVyZ2VNYXBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBwcm9qZWN0LCBjb25jdXJyZW50KSB7XG4gICAgICAgIGlmIChjb25jdXJyZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNvbmN1cnJlbnQgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICBfdGhpcy5jb25jdXJyZW50ID0gY29uY3VycmVudDtcbiAgICAgICAgX3RoaXMuaGFzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmJ1ZmZlciA9IFtdO1xuICAgICAgICBfdGhpcy5hY3RpdmUgPSAwO1xuICAgICAgICBfdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTWVyZ2VNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUgPCB0aGlzLmNvbmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyeU5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1lcmdlTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX3RyeU5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleCsrO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wcm9qZWN0KHZhbHVlLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlKys7XG4gICAgICAgIHRoaXMuX2lubmVyU3ViKHJlc3VsdCk7XG4gICAgfTtcbiAgICBNZXJnZU1hcFN1YnNjcmliZXIucHJvdG90eXBlLl9pbm5lclN1YiA9IGZ1bmN0aW9uIChpc2gpIHtcbiAgICAgICAgdmFyIGlubmVyU3Vic2NyaWJlciA9IG5ldyBTaW1wbGVJbm5lclN1YnNjcmliZXIodGhpcyk7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGRlc3RpbmF0aW9uLmFkZChpbm5lclN1YnNjcmliZXIpO1xuICAgICAgICB2YXIgaW5uZXJTdWJzY3JpcHRpb24gPSBpbm5lclN1YnNjcmliZShpc2gsIGlubmVyU3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChpbm5lclN1YnNjcmlwdGlvbiAhPT0gaW5uZXJTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5hZGQoaW5uZXJTdWJzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNZXJnZU1hcFN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oYXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUgPT09IDAgJiYgdGhpcy5idWZmZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgTWVyZ2VNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlOZXh0ID0gZnVuY3Rpb24gKGlubmVyVmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGlubmVyVmFsdWUpO1xuICAgIH07XG4gICAgTWVyZ2VNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgICAgICB0aGlzLmFjdGl2ZS0tO1xuICAgICAgICBpZiAoYnVmZmVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX25leHQoYnVmZmVyLnNoaWZ0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWN0aXZlID09PSAwICYmIHRoaXMuaGFzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNZXJnZU1hcFN1YnNjcmliZXI7XG59KFNpbXBsZU91dGVyU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgTWVyZ2VNYXBTdWJzY3JpYmVyIH07XG5leHBvcnQgdmFyIGZsYXRNYXAgPSBtZXJnZU1hcDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlTWFwLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3Vic2NyaWJlcixfTm90aWZpY2F0aW9uIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuLi9Ob3RpZmljYXRpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVPbihzY2hlZHVsZXIsIGRlbGF5KSB7XG4gICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgZGVsYXkgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gb2JzZXJ2ZU9uT3BlcmF0b3JGdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBPYnNlcnZlT25PcGVyYXRvcihzY2hlZHVsZXIsIGRlbGF5KSk7XG4gICAgfTtcbn1cbnZhciBPYnNlcnZlT25PcGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZlT25PcGVyYXRvcihzY2hlZHVsZXIsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICB9XG4gICAgT2JzZXJ2ZU9uT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBPYnNlcnZlT25TdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuc2NoZWR1bGVyLCB0aGlzLmRlbGF5KSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2ZU9uT3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0IHsgT2JzZXJ2ZU9uT3BlcmF0b3IgfTtcbnZhciBPYnNlcnZlT25TdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE9ic2VydmVPblN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT2JzZXJ2ZU9uU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgc2NoZWR1bGVyLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIF90aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JzZXJ2ZU9uU3Vic2NyaWJlci5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgdmFyIG5vdGlmaWNhdGlvbiA9IGFyZy5ub3RpZmljYXRpb24sIGRlc3RpbmF0aW9uID0gYXJnLmRlc3RpbmF0aW9uO1xuICAgICAgICBub3RpZmljYXRpb24ub2JzZXJ2ZShkZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIE9ic2VydmVPblN1YnNjcmliZXIucHJvdG90eXBlLnNjaGVkdWxlTWVzc2FnZSA9IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgZGVzdGluYXRpb24uYWRkKHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlKE9ic2VydmVPblN1YnNjcmliZXIuZGlzcGF0Y2gsIHRoaXMuZGVsYXksIG5ldyBPYnNlcnZlT25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgdGhpcy5kZXN0aW5hdGlvbikpKTtcbiAgICB9O1xuICAgIE9ic2VydmVPblN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVNZXNzYWdlKE5vdGlmaWNhdGlvbi5jcmVhdGVOZXh0KHZhbHVlKSk7XG4gICAgfTtcbiAgICBPYnNlcnZlT25TdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVNZXNzYWdlKE5vdGlmaWNhdGlvbi5jcmVhdGVFcnJvcihlcnIpKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgT2JzZXJ2ZU9uU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlTWVzc2FnZShOb3RpZmljYXRpb24uY3JlYXRlQ29tcGxldGUoKSk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZlT25TdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnQgeyBPYnNlcnZlT25TdWJzY3JpYmVyIH07XG52YXIgT2JzZXJ2ZU9uTWVzc2FnZSA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZlT25NZXNzYWdlKG5vdGlmaWNhdGlvbiwgZGVzdGluYXRpb24pIHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24gPSBub3RpZmljYXRpb247XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIE9ic2VydmVPbk1lc3NhZ2U7XG59KCkpO1xuZXhwb3J0IHsgT2JzZXJ2ZU9uTWVzc2FnZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JzZXJ2ZU9uLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3Vic2NyaWJlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHJlZkNvdW50KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiByZWZDb3VudE9wZXJhdG9yRnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgUmVmQ291bnRPcGVyYXRvcihzb3VyY2UpKTtcbiAgICB9O1xufVxudmFyIFJlZkNvdW50T3BlcmF0b3IgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVmQ291bnRPcGVyYXRvcihjb25uZWN0YWJsZSkge1xuICAgICAgICB0aGlzLmNvbm5lY3RhYmxlID0gY29ubmVjdGFibGU7XG4gICAgfVxuICAgIFJlZkNvdW50T3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHZhciBjb25uZWN0YWJsZSA9IHRoaXMuY29ubmVjdGFibGU7XG4gICAgICAgIGNvbm5lY3RhYmxlLl9yZWZDb3VudCsrO1xuICAgICAgICB2YXIgcmVmQ291bnRlciA9IG5ldyBSZWZDb3VudFN1YnNjcmliZXIoc3Vic2NyaWJlciwgY29ubmVjdGFibGUpO1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gc291cmNlLnN1YnNjcmliZShyZWZDb3VudGVyKTtcbiAgICAgICAgaWYgKCFyZWZDb3VudGVyLmNsb3NlZCkge1xuICAgICAgICAgICAgcmVmQ291bnRlci5jb25uZWN0aW9uID0gY29ubmVjdGFibGUuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICByZXR1cm4gUmVmQ291bnRPcGVyYXRvcjtcbn0oKSk7XG52YXIgUmVmQ291bnRTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFJlZkNvdW50U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZWZDb3VudFN1YnNjcmliZXIoZGVzdGluYXRpb24sIGNvbm5lY3RhYmxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jb25uZWN0YWJsZSA9IGNvbm5lY3RhYmxlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFJlZkNvdW50U3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29ubmVjdGFibGUgPSB0aGlzLmNvbm5lY3RhYmxlO1xuICAgICAgICBpZiAoIWNvbm5lY3RhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ubmVjdGFibGUgPSBudWxsO1xuICAgICAgICB2YXIgcmVmQ291bnQgPSBjb25uZWN0YWJsZS5fcmVmQ291bnQ7XG4gICAgICAgIGlmIChyZWZDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RhYmxlLl9yZWZDb3VudCA9IHJlZkNvdW50IC0gMTtcbiAgICAgICAgaWYgKHJlZkNvdW50ID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMuY29ubmVjdGlvbjtcbiAgICAgICAgdmFyIHNoYXJlZENvbm5lY3Rpb24gPSBjb25uZWN0YWJsZS5fY29ubmVjdGlvbjtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgaWYgKHNoYXJlZENvbm5lY3Rpb24gJiYgKCFjb25uZWN0aW9uIHx8IHNoYXJlZENvbm5lY3Rpb24gPT09IGNvbm5lY3Rpb24pKSB7XG4gICAgICAgICAgICBzaGFyZWRDb25uZWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBSZWZDb3VudFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZkNvdW50LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfU3Vic2NyaXB0aW9uIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGkgPT09IGlucHV0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoaW5wdXRbaSsrXSk7XG4gICAgICAgICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgc3ViLmFkZCh0aGlzLnNjaGVkdWxlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBzdWI7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUFycmF5LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfU3Vic2NyaXB0aW9uLF9zeW1ib2xfaXRlcmF0b3IgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0ZXJhYmxlIGNhbm5vdCBiZSBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc3ViID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICB2YXIgaXRlcmF0b3I7XG4gICAgICAgIHN1Yi5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yICYmIHR5cGVvZiBpdGVyYXRvci5yZXR1cm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yID0gaW5wdXRbU3ltYm9sX2l0ZXJhdG9yXSgpO1xuICAgICAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgZG9uZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHJlc3VsdC5kb25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBzdWI7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUl0ZXJhYmxlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfU3Vic2NyaXB0aW9uLF9zeW1ib2xfb2JzZXJ2YWJsZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4uL3N5bWJvbC9vYnNlcnZhYmxlJztcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZU9ic2VydmFibGUoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc3ViID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGlucHV0W1N5bWJvbF9vYnNlcnZhYmxlXSgpO1xuICAgICAgICAgICAgc3ViLmFkZChvYnNlcnZhYmxlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7IHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7IH0pKTsgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikgeyBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pKTsgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IH0pKTsgfSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gc3ViO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVPYnNlcnZhYmxlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfU3Vic2NyaXB0aW9uIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVQcm9taXNlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IH0pKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpOyB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gc3ViO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVQcm9taXNlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfc2NoZWR1bGVPYnNlcnZhYmxlLF9zY2hlZHVsZVByb21pc2UsX3NjaGVkdWxlQXJyYXksX3NjaGVkdWxlSXRlcmFibGUsX3V0aWxfaXNJbnRlcm9wT2JzZXJ2YWJsZSxfdXRpbF9pc1Byb21pc2UsX3V0aWxfaXNBcnJheUxpa2UsX3V0aWxfaXNJdGVyYWJsZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBzY2hlZHVsZU9ic2VydmFibGUgfSBmcm9tICcuL3NjaGVkdWxlT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzY2hlZHVsZVByb21pc2UgfSBmcm9tICcuL3NjaGVkdWxlUHJvbWlzZSc7XG5pbXBvcnQgeyBzY2hlZHVsZUFycmF5IH0gZnJvbSAnLi9zY2hlZHVsZUFycmF5JztcbmltcG9ydCB7IHNjaGVkdWxlSXRlcmFibGUgfSBmcm9tICcuL3NjaGVkdWxlSXRlcmFibGUnO1xuaW1wb3J0IHsgaXNJbnRlcm9wT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuLi91dGlsL2lzUHJvbWlzZSc7XG5pbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJdGVyYWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVkKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZU9ic2VydmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNQcm9taXNlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlUHJvbWlzZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0FycmF5TGlrZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZUFycmF5KGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzSXRlcmFibGUoaW5wdXQpIHx8IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZUl0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKGlucHV0ICE9PSBudWxsICYmIHR5cGVvZiBpbnB1dCB8fCBpbnB1dCkgKyAnIGlzIG5vdCBvYnNlcnZhYmxlJyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZWQuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9TdWJzY3JpcHRpb24gUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG52YXIgQWN0aW9uID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIEFjdGlvbjtcbn0oU3Vic2NyaXB0aW9uKSk7XG5leHBvcnQgeyBBY3Rpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFjdGlvbi5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX0FzeW5jQWN0aW9uIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBBc3luY0FjdGlvbiB9IGZyb20gJy4vQXN5bmNBY3Rpb24nO1xudmFyIEFuaW1hdGlvbkZyYW1lQWN0aW9uID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFuaW1hdGlvbkZyYW1lQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFuaW1hdGlvbkZyYW1lQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIHdvcmspIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMud29yayA9IHdvcms7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQW5pbWF0aW9uRnJhbWVBY3Rpb24ucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGF5ICE9PSBudWxsICYmIGRlbGF5ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUucmVxdWVzdEFzeW5jSWQuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIGlkLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NoZWR1bGVyLmFjdGlvbnMucHVzaCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZWQgfHwgKHNjaGVkdWxlci5zY2hlZHVsZWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2NoZWR1bGVyLmZsdXNoKG51bGwpOyB9KSk7XG4gICAgfTtcbiAgICBBbmltYXRpb25GcmFtZUFjdGlvbi5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGRlbGF5ICE9PSBudWxsICYmIGRlbGF5ID4gMCkgfHwgKGRlbGF5ID09PSBudWxsICYmIHRoaXMuZGVsYXkgPiAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIGlkLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjaGVkdWxlci5hY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICAgICAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdGlvbkZyYW1lQWN0aW9uO1xufShBc3luY0FjdGlvbikpO1xuZXhwb3J0IHsgQW5pbWF0aW9uRnJhbWVBY3Rpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFuaW1hdGlvbkZyYW1lQWN0aW9uLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfQXN5bmNTY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi9Bc3luY1NjaGVkdWxlcic7XG52YXIgQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVkID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgdmFyIGNvdW50ID0gYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIGFjdGlvbiA9IGFjdGlvbiB8fCBhY3Rpb25zLnNoaWZ0KCk7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChlcnJvciA9IGFjdGlvbi5leGVjdXRlKGFjdGlvbi5zdGF0ZSwgYWN0aW9uLmRlbGF5KSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICgrK2luZGV4IDwgY291bnQgJiYgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkpO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHdoaWxlICgrK2luZGV4IDwgY291bnQgJiYgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXI7XG59KEFzeW5jU2NoZWR1bGVyKSk7XG5leHBvcnQgeyBBbmltYXRpb25GcmFtZVNjaGVkdWxlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF91dGlsX0ltbWVkaWF0ZSxfQXN5bmNBY3Rpb24gUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEltbWVkaWF0ZSB9IGZyb20gJy4uL3V0aWwvSW1tZWRpYXRlJztcbmltcG9ydCB7IEFzeW5jQWN0aW9uIH0gZnJvbSAnLi9Bc3luY0FjdGlvbic7XG52YXIgQXNhcEFjdGlvbiA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhBc2FwQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzYXBBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHNjaGVkdWxlciwgd29yaykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBfdGhpcy53b3JrID0gd29yaztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBc2FwQWN0aW9uLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSAhPT0gbnVsbCAmJiBkZWxheSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkLmNhbGwodGhpcywgc2NoZWR1bGVyLCBpZCwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlci5hY3Rpb25zLnB1c2godGhpcyk7XG4gICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGVkIHx8IChzY2hlZHVsZXIuc2NoZWR1bGVkID0gSW1tZWRpYXRlLnNldEltbWVkaWF0ZShzY2hlZHVsZXIuZmx1c2guYmluZChzY2hlZHVsZXIsIG51bGwpKSk7XG4gICAgfTtcbiAgICBBc2FwQWN0aW9uLnByb3RvdHlwZS5yZWN5Y2xlQXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZGVsYXkgIT09IG51bGwgJiYgZGVsYXkgPiAwKSB8fCAoZGVsYXkgPT09IG51bGwgJiYgdGhpcy5kZWxheSA+IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5yZWN5Y2xlQXN5bmNJZC5jYWxsKHRoaXMsIHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NoZWR1bGVyLmFjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBJbW1lZGlhdGUuY2xlYXJJbW1lZGlhdGUoaWQpO1xuICAgICAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIEFzYXBBY3Rpb247XG59KEFzeW5jQWN0aW9uKSk7XG5leHBvcnQgeyBBc2FwQWN0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc2FwQWN0aW9uLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfQXN5bmNTY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi9Bc3luY1NjaGVkdWxlcic7XG52YXIgQXNhcFNjaGVkdWxlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhBc2FwU2NoZWR1bGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzYXBTY2hlZHVsZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQXNhcFNjaGVkdWxlci5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBhY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICB2YXIgY291bnQgPSBhY3Rpb25zLmxlbmd0aDtcbiAgICAgICAgYWN0aW9uID0gYWN0aW9uIHx8IGFjdGlvbnMuc2hpZnQoKTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKGVycm9yID0gYWN0aW9uLmV4ZWN1dGUoYWN0aW9uLnN0YXRlLCBhY3Rpb24uZGVsYXkpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKCsraW5kZXggPCBjb3VudCAmJiAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgd2hpbGUgKCsraW5kZXggPCBjb3VudCAmJiAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBc2FwU2NoZWR1bGVyO1xufShBc3luY1NjaGVkdWxlcikpO1xuZXhwb3J0IHsgQXNhcFNjaGVkdWxlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXNhcFNjaGVkdWxlci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX0FjdGlvbiBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi9BY3Rpb24nO1xudmFyIEFzeW5jQWN0aW9uID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFzeW5jQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzeW5jQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIHdvcmspIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMud29yayA9IHdvcms7XG4gICAgICAgIF90aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IHRoaXMucmVxdWVzdEFzeW5jSWQoc2NoZWR1bGVyLCB0aGlzLmlkLCBkZWxheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKHNjaGVkdWxlci5mbHVzaC5iaW5kKHNjaGVkdWxlciwgdGhpcyksIGRlbGF5KTtcbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5yZWN5Y2xlQXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSAhPT0gbnVsbCAmJiB0aGlzLmRlbGF5ID09PSBkZWxheSAmJiB0aGlzLnBlbmRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdleGVjdXRpbmcgYSBjYW5jZWxsZWQgYWN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvciA9IHRoaXMuX2V4ZWN1dGUoc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nID09PSBmYWxzZSAmJiB0aGlzLmlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHRoaXMuc2NoZWR1bGVyLCB0aGlzLmlkLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLl9leGVjdXRlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICB2YXIgZXJyb3JlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3JWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMud29yayhzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgZXJyb3JWYWx1ZSA9ICEhZSAmJiBlIHx8IG5ldyBFcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JlZCkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yVmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBzY2hlZHVsZXIuYWN0aW9ucztcbiAgICAgICAgdmFyIGluZGV4ID0gYWN0aW9ucy5pbmRleE9mKHRoaXMpO1xuICAgICAgICB0aGlzLndvcmsgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gbnVsbDtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlbGF5ID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBBc3luY0FjdGlvbjtcbn0oQWN0aW9uKSk7XG5leHBvcnQgeyBBc3luY0FjdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNBY3Rpb24uanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9TY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFNjaGVkdWxlciB9IGZyb20gJy4uL1NjaGVkdWxlcic7XG52YXIgQXN5bmNTY2hlZHVsZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQXN5bmNTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXN5bmNTY2hlZHVsZXIoU2NoZWR1bGVyQWN0aW9uLCBub3cpIHtcbiAgICAgICAgaWYgKG5vdyA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBub3cgPSBTY2hlZHVsZXIubm93O1xuICAgICAgICB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFNjaGVkdWxlckFjdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICYmIEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICE9PSBfdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZS5ub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWN0aW9ucyA9IFtdO1xuICAgICAgICBfdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVkID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFzeW5jU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICh3b3JrLCBkZWxheSwgc3RhdGUpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUgJiYgQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZS5zY2hlZHVsZSh3b3JrLCBkZWxheSwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuc2NoZWR1bGUuY2FsbCh0aGlzLCB3b3JrLCBkZWxheSwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY1NjaGVkdWxlci5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBhY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPSBhY3Rpb24uZXhlY3V0ZShhY3Rpb24uc3RhdGUsIGFjdGlvbi5kZWxheSkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB3aGlsZSAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFzeW5jU2NoZWR1bGVyO1xufShTY2hlZHVsZXIpKTtcbmV4cG9ydCB7IEFzeW5jU2NoZWR1bGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc3luY1NjaGVkdWxlci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX0FzeW5jQWN0aW9uIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBBc3luY0FjdGlvbiB9IGZyb20gJy4vQXN5bmNBY3Rpb24nO1xudmFyIFF1ZXVlQWN0aW9uID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFF1ZXVlQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFF1ZXVlQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIHdvcmspIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMud29yayA9IHdvcms7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUXVldWVBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnNjaGVkdWxlLmNhbGwodGhpcywgc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIuZmx1c2godGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgUXVldWVBY3Rpb24ucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiAoZGVsYXkgPiAwIHx8IHRoaXMuY2xvc2VkKSA/XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmV4ZWN1dGUuY2FsbCh0aGlzLCBzdGF0ZSwgZGVsYXkpIDpcbiAgICAgICAgICAgIHRoaXMuX2V4ZWN1dGUoc3RhdGUsIGRlbGF5KTtcbiAgICB9O1xuICAgIFF1ZXVlQWN0aW9uLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZGVsYXkgIT09IG51bGwgJiYgZGVsYXkgPiAwKSB8fCAoZGVsYXkgPT09IG51bGwgJiYgdGhpcy5kZWxheSA+IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZC5jYWxsKHRoaXMsIHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NoZWR1bGVyLmZsdXNoKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIFF1ZXVlQWN0aW9uO1xufShBc3luY0FjdGlvbikpO1xuZXhwb3J0IHsgUXVldWVBY3Rpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVF1ZXVlQWN0aW9uLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfQXN5bmNTY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi9Bc3luY1NjaGVkdWxlcic7XG52YXIgUXVldWVTY2hlZHVsZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoUXVldWVTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUXVldWVTY2hlZHVsZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFF1ZXVlU2NoZWR1bGVyO1xufShBc3luY1NjaGVkdWxlcikpO1xuZXhwb3J0IHsgUXVldWVTY2hlZHVsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVF1ZXVlU2NoZWR1bGVyLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfQXN5bmNBY3Rpb24sX0FzeW5jU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBBc3luY0FjdGlvbiB9IGZyb20gJy4vQXN5bmNBY3Rpb24nO1xuaW1wb3J0IHsgQXN5bmNTY2hlZHVsZXIgfSBmcm9tICcuL0FzeW5jU2NoZWR1bGVyJztcbnZhciBWaXJ0dWFsVGltZVNjaGVkdWxlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhWaXJ0dWFsVGltZVNjaGVkdWxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWaXJ0dWFsVGltZVNjaGVkdWxlcihTY2hlZHVsZXJBY3Rpb24sIG1heEZyYW1lcykge1xuICAgICAgICBpZiAoU2NoZWR1bGVyQWN0aW9uID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIFNjaGVkdWxlckFjdGlvbiA9IFZpcnR1YWxBY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heEZyYW1lcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBtYXhGcmFtZXMgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgU2NoZWR1bGVyQWN0aW9uLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5mcmFtZTsgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubWF4RnJhbWVzID0gbWF4RnJhbWVzO1xuICAgICAgICBfdGhpcy5mcmFtZSA9IDA7XG4gICAgICAgIF90aGlzLmluZGV4ID0gLTE7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVmlydHVhbFRpbWVTY2hlZHVsZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBhY3Rpb25zID0gX2EuYWN0aW9ucywgbWF4RnJhbWVzID0gX2EubWF4RnJhbWVzO1xuICAgICAgICB2YXIgZXJyb3IsIGFjdGlvbjtcbiAgICAgICAgd2hpbGUgKChhY3Rpb24gPSBhY3Rpb25zWzBdKSAmJiBhY3Rpb24uZGVsYXkgPD0gbWF4RnJhbWVzKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLmZyYW1lID0gYWN0aW9uLmRlbGF5O1xuICAgICAgICAgICAgaWYgKGVycm9yID0gYWN0aW9uLmV4ZWN1dGUoYWN0aW9uLnN0YXRlLCBhY3Rpb24uZGVsYXkpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB3aGlsZSAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlydHVhbFRpbWVTY2hlZHVsZXIuZnJhbWVUaW1lRmFjdG9yID0gMTA7XG4gICAgcmV0dXJuIFZpcnR1YWxUaW1lU2NoZWR1bGVyO1xufShBc3luY1NjaGVkdWxlcikpO1xuZXhwb3J0IHsgVmlydHVhbFRpbWVTY2hlZHVsZXIgfTtcbnZhciBWaXJ0dWFsQWN0aW9uID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFZpcnR1YWxBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmlydHVhbEFjdGlvbihzY2hlZHVsZXIsIHdvcmssIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBpbmRleCA9IHNjaGVkdWxlci5pbmRleCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHNjaGVkdWxlciwgd29yaykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBfdGhpcy53b3JrID0gd29yaztcbiAgICAgICAgX3RoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgX3RoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuaW5kZXggPSBzY2hlZHVsZXIuaW5kZXggPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBWaXJ0dWFsQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnNjaGVkdWxlLmNhbGwodGhpcywgc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgYWN0aW9uID0gbmV3IFZpcnR1YWxBY3Rpb24odGhpcy5zY2hlZHVsZXIsIHRoaXMud29yayk7XG4gICAgICAgIHRoaXMuYWRkKGFjdGlvbik7XG4gICAgICAgIHJldHVybiBhY3Rpb24uc2NoZWR1bGUoc3RhdGUsIGRlbGF5KTtcbiAgICB9O1xuICAgIFZpcnR1YWxBY3Rpb24ucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheSA9IHNjaGVkdWxlci5mcmFtZSArIGRlbGF5O1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHNjaGVkdWxlci5hY3Rpb25zO1xuICAgICAgICBhY3Rpb25zLnB1c2godGhpcyk7XG4gICAgICAgIGFjdGlvbnMuc29ydChWaXJ0dWFsQWN0aW9uLnNvcnRBY3Rpb25zKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBWaXJ0dWFsQWN0aW9uLnByb3RvdHlwZS5yZWN5Y2xlQXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBWaXJ0dWFsQWN0aW9uLnByb3RvdHlwZS5fZXhlY3V0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fZXhlY3V0ZS5jYWxsKHRoaXMsIHN0YXRlLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZpcnR1YWxBY3Rpb24uc29ydEFjdGlvbnMgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoYS5kZWxheSA9PT0gYi5kZWxheSkge1xuICAgICAgICAgICAgaWYgKGEuaW5kZXggPT09IGIuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGEuaW5kZXggPiBiLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYS5kZWxheSA+IGIuZGVsYXkpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVmlydHVhbEFjdGlvbjtcbn0oQXN5bmNBY3Rpb24pKTtcbmV4cG9ydCB7IFZpcnR1YWxBY3Rpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZpcnR1YWxUaW1lU2NoZWR1bGVyLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfQW5pbWF0aW9uRnJhbWVBY3Rpb24sX0FuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IEFuaW1hdGlvbkZyYW1lQWN0aW9uIH0gZnJvbSAnLi9BbmltYXRpb25GcmFtZUFjdGlvbic7XG5pbXBvcnQgeyBBbmltYXRpb25GcmFtZVNjaGVkdWxlciB9IGZyb20gJy4vQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXInO1xuZXhwb3J0IHZhciBhbmltYXRpb25GcmFtZVNjaGVkdWxlciA9IC8qQF9fUFVSRV9fKi8gbmV3IEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKEFuaW1hdGlvbkZyYW1lQWN0aW9uKTtcbmV4cG9ydCB2YXIgYW5pbWF0aW9uRnJhbWUgPSBhbmltYXRpb25GcmFtZVNjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuaW1hdGlvbkZyYW1lLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfQXNhcEFjdGlvbixfQXNhcFNjaGVkdWxlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBBc2FwQWN0aW9uIH0gZnJvbSAnLi9Bc2FwQWN0aW9uJztcbmltcG9ydCB7IEFzYXBTY2hlZHVsZXIgfSBmcm9tICcuL0FzYXBTY2hlZHVsZXInO1xuZXhwb3J0IHZhciBhc2FwU2NoZWR1bGVyID0gLypAX19QVVJFX18qLyBuZXcgQXNhcFNjaGVkdWxlcihBc2FwQWN0aW9uKTtcbmV4cG9ydCB2YXIgYXNhcCA9IGFzYXBTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc2FwLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfQXN5bmNBY3Rpb24sX0FzeW5jU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IEFzeW5jQWN0aW9uIH0gZnJvbSAnLi9Bc3luY0FjdGlvbic7XG5pbXBvcnQgeyBBc3luY1NjaGVkdWxlciB9IGZyb20gJy4vQXN5bmNTY2hlZHVsZXInO1xuZXhwb3J0IHZhciBhc3luY1NjaGVkdWxlciA9IC8qQF9fUFVSRV9fKi8gbmV3IEFzeW5jU2NoZWR1bGVyKEFzeW5jQWN0aW9uKTtcbmV4cG9ydCB2YXIgYXN5bmMgPSBhc3luY1NjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzeW5jLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfUXVldWVBY3Rpb24sX1F1ZXVlU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IFF1ZXVlQWN0aW9uIH0gZnJvbSAnLi9RdWV1ZUFjdGlvbic7XG5pbXBvcnQgeyBRdWV1ZVNjaGVkdWxlciB9IGZyb20gJy4vUXVldWVTY2hlZHVsZXInO1xuZXhwb3J0IHZhciBxdWV1ZVNjaGVkdWxlciA9IC8qQF9fUFVSRV9fKi8gbmV3IFF1ZXVlU2NoZWR1bGVyKFF1ZXVlQWN0aW9uKTtcbmV4cG9ydCB2YXIgcXVldWUgPSBxdWV1ZVNjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXVlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN5bWJvbEl0ZXJhdG9yKCkge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nIHx8ICFTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuICdAQGl0ZXJhdG9yJztcbiAgICB9XG4gICAgcmV0dXJuIFN5bWJvbC5pdGVyYXRvcjtcbn1cbmV4cG9ydCB2YXIgaXRlcmF0b3IgPSAvKkBfX1BVUkVfXyovIGdldFN5bWJvbEl0ZXJhdG9yKCk7XG5leHBvcnQgdmFyICQkaXRlcmF0b3IgPSBpdGVyYXRvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWl0ZXJhdG9yLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IHZhciBvYnNlcnZhYmxlID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSB8fCAnQEBvYnNlcnZhYmxlJzsgfSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmFibGUuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgdmFyIHJ4U3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IC8qQF9fUFVSRV9fKi8gU3ltYm9sKCdyeFN1YnNjcmliZXInKVxuICAgICAgICA6ICdAQHJ4U3Vic2NyaWJlcl8nICsgLypAX19QVVJFX18qLyBNYXRoLnJhbmRvbSgpO1xufSkoKTtcbmV4cG9ydCB2YXIgJCRyeFN1YnNjcmliZXIgPSByeFN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yeFN1YnNjcmliZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9ySW1wbCgpIHtcbiAgICAgICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJ2FyZ3VtZW50IG91dCBvZiByYW5nZSc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdBcmd1bWVudE91dE9mUmFuZ2VFcnJvcic7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBBcmd1bWVudE91dE9mUmFuZ2VFcnJvckltcGwucHJvdG90eXBlID0gLypAX19QVVJFX18qLyBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9ySW1wbDtcbn0pKCk7XG5leHBvcnQgdmFyIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yID0gQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJndW1lbnRPdXRPZlJhbmdlRXJyb3IuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgRW1wdHlFcnJvckltcGwgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRW1wdHlFcnJvckltcGwoKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdubyBlbGVtZW50cyBpbiBzZXF1ZW5jZSc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdFbXB0eUVycm9yJztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIEVtcHR5RXJyb3JJbXBsLnByb3RvdHlwZSA9IC8qQF9fUFVSRV9fKi8gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIHJldHVybiBFbXB0eUVycm9ySW1wbDtcbn0pKCk7XG5leHBvcnQgdmFyIEVtcHR5RXJyb3IgPSBFbXB0eUVycm9ySW1wbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVtcHR5RXJyb3IuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgbmV4dEhhbmRsZSA9IDE7XG52YXIgUkVTT0xWRUQgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7IHJldHVybiAvKkBfX1BVUkVfXyovIFByb21pc2UucmVzb2x2ZSgpOyB9KSgpO1xudmFyIGFjdGl2ZUhhbmRsZXMgPSB7fTtcbmZ1bmN0aW9uIGZpbmRBbmRDbGVhckhhbmRsZShoYW5kbGUpIHtcbiAgICBpZiAoaGFuZGxlIGluIGFjdGl2ZUhhbmRsZXMpIHtcbiAgICAgICAgZGVsZXRlIGFjdGl2ZUhhbmRsZXNbaGFuZGxlXTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCB2YXIgSW1tZWRpYXRlID0ge1xuICAgIHNldEltbWVkaWF0ZTogZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBoYW5kbGUgPSBuZXh0SGFuZGxlKys7XG4gICAgICAgIGFjdGl2ZUhhbmRsZXNbaGFuZGxlXSA9IHRydWU7XG4gICAgICAgIFJFU09MVkVELnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gZmluZEFuZENsZWFySGFuZGxlKGhhbmRsZSkgJiYgY2IoKTsgfSk7XG4gICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgfSxcbiAgICBjbGVhckltbWVkaWF0ZTogZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgICAgICBmaW5kQW5kQ2xlYXJIYW5kbGUoaGFuZGxlKTtcbiAgICB9LFxufTtcbmV4cG9ydCB2YXIgVGVzdFRvb2xzID0ge1xuICAgIHBlbmRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGFjdGl2ZUhhbmRsZXMpLmxlbmd0aDtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW1tZWRpYXRlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbCA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGwoKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdvYmplY3QgdW5zdWJzY3JpYmVkJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbC5wcm90b3R5cGUgPSAvKkBfX1BVUkVfXyovIE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICByZXR1cm4gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsO1xufSkoKTtcbmV4cG9ydCB2YXIgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgPSBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYmplY3RVbnN1YnNjcmliZWRFcnJvci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBUaW1lb3V0RXJyb3JJbXBsID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbWVvdXRFcnJvckltcGwoKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdUaW1lb3V0IGhhcyBvY2N1cnJlZCc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdUaW1lb3V0RXJyb3InO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgVGltZW91dEVycm9ySW1wbC5wcm90b3R5cGUgPSAvKkBfX1BVUkVfXyovIE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICByZXR1cm4gVGltZW91dEVycm9ySW1wbDtcbn0pKCk7XG5leHBvcnQgdmFyIFRpbWVvdXRFcnJvciA9IFRpbWVvdXRFcnJvckltcGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UaW1lb3V0RXJyb3IuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgVW5zdWJzY3JpcHRpb25FcnJvckltcGwgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvckltcGwoZXJyb3JzKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9ycyA/XG4gICAgICAgICAgICBlcnJvcnMubGVuZ3RoICsgXCIgZXJyb3JzIG9jY3VycmVkIGR1cmluZyB1bnN1YnNjcmlwdGlvbjpcXG5cIiArIGVycm9ycy5tYXAoZnVuY3Rpb24gKGVyciwgaSkgeyByZXR1cm4gaSArIDEgKyBcIikgXCIgKyBlcnIudG9TdHJpbmcoKTsgfSkuam9pbignXFxuICAnKSA6ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnVW5zdWJzY3JpcHRpb25FcnJvcic7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgVW5zdWJzY3JpcHRpb25FcnJvckltcGwucHJvdG90eXBlID0gLypAX19QVVJFX18qLyBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsO1xufSkoKTtcbmV4cG9ydCB2YXIgVW5zdWJzY3JpcHRpb25FcnJvciA9IFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VW5zdWJzY3JpcHRpb25FcnJvci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX1N1YnNjcmliZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGNhblJlcG9ydEVycm9yKG9ic2VydmVyKSB7XG4gICAgd2hpbGUgKG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBfYSA9IG9ic2VydmVyLCBjbG9zZWRfMSA9IF9hLmNsb3NlZCwgZGVzdGluYXRpb24gPSBfYS5kZXN0aW5hdGlvbiwgaXNTdG9wcGVkID0gX2EuaXNTdG9wcGVkO1xuICAgICAgICBpZiAoY2xvc2VkXzEgfHwgaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzdGluYXRpb24gJiYgZGVzdGluYXRpb24gaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IGRlc3RpbmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FuUmVwb3J0RXJyb3IuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgZnVuY3Rpb24gaG9zdFJlcG9ydEVycm9yKGVycikge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyB0aHJvdyBlcnI7IH0sIDApO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9zdFJlcG9ydEVycm9yLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KHgpIHtcbiAgICByZXR1cm4geDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlkZW50aXR5LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IHZhciBpc0FycmF5ID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkgeyByZXR1cm4gQXJyYXkuaXNBcnJheSB8fCAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJzsgfSk7IH0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FycmF5LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IHZhciBpc0FycmF5TGlrZSA9IChmdW5jdGlvbiAoeCkgeyByZXR1cm4geCAmJiB0eXBlb2YgeC5sZW5ndGggPT09ICdudW1iZXInICYmIHR5cGVvZiB4ICE9PSAnZnVuY3Rpb24nOyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzQXJyYXlMaWtlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzRnVuY3Rpb24uanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9zeW1ib2xfb2JzZXJ2YWJsZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgJiYgdHlwZW9mIGlucHV0W1N5bWJvbF9vYnNlcnZhYmxlXSA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzSW50ZXJvcE9ic2VydmFibGUuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9zeW1ib2xfaXRlcmF0b3IgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgaXRlcmF0b3IgYXMgU3ltYm9sX2l0ZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9sL2l0ZXJhdG9yJztcbmV4cG9ydCBmdW5jdGlvbiBpc0l0ZXJhYmxlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ICYmIHR5cGVvZiBpbnB1dFtTeW1ib2xfaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNJdGVyYWJsZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2lzQXJyYXkgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4vaXNBcnJheSc7XG5leHBvcnQgZnVuY3Rpb24gaXNOdW1lcmljKHZhbCkge1xuICAgIHJldHVybiAhaXNBcnJheSh2YWwpICYmICh2YWwgLSBwYXJzZUZsb2F0KHZhbCkgKyAxKSA+PSAwO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNOdW1lcmljLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCc7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc09iamVjdC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JzZXJ2YWJsZShvYmopIHtcbiAgICByZXR1cm4gISFvYmogJiYgKG9iaiBpbnN0YW5jZW9mIE9ic2VydmFibGUgfHwgKHR5cGVvZiBvYmoubGlmdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNPYnNlcnZhYmxlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc1Byb21pc2UuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgZnVuY3Rpb24gaXNTY2hlZHVsZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnNjaGVkdWxlID09PSAnZnVuY3Rpb24nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNTY2hlZHVsZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9vcC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbmV4cG9ydCBmdW5jdGlvbiBub3QocHJlZCwgdGhpc0FyZykge1xuICAgIGZ1bmN0aW9uIG5vdFByZWQoKSB7XG4gICAgICAgIHJldHVybiAhKG5vdFByZWQucHJlZC5hcHBseShub3RQcmVkLnRoaXNBcmcsIGFyZ3VtZW50cykpO1xuICAgIH1cbiAgICBub3RQcmVkLnByZWQgPSBwcmVkO1xuICAgIG5vdFByZWQudGhpc0FyZyA9IHRoaXNBcmc7XG4gICAgcmV0dXJuIG5vdFByZWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3QuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9pZGVudGl0eSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknO1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoKSB7XG4gICAgdmFyIGZucyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGZuc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gcGlwZUZyb21BcnJheShmbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBpcGVGcm9tQXJyYXkoZm5zKSB7XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5O1xuICAgIH1cbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZm5zWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gcGlwZWQoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZucy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGZuKSB7IHJldHVybiBmbihwcmV2KTsgfSwgaW5wdXQpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXBlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfc3Vic2NyaWJlVG9BcnJheSxfc3Vic2NyaWJlVG9Qcm9taXNlLF9zdWJzY3JpYmVUb0l0ZXJhYmxlLF9zdWJzY3JpYmVUb09ic2VydmFibGUsX2lzQXJyYXlMaWtlLF9pc1Byb21pc2UsX2lzT2JqZWN0LF9zeW1ib2xfaXRlcmF0b3IsX3N5bWJvbF9vYnNlcnZhYmxlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IHN1YnNjcmliZVRvQXJyYXkgfSBmcm9tICcuL3N1YnNjcmliZVRvQXJyYXknO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9Qcm9taXNlIH0gZnJvbSAnLi9zdWJzY3JpYmVUb1Byb21pc2UnO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9JdGVyYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJlVG9JdGVyYWJsZSc7XG5pbXBvcnQgeyBzdWJzY3JpYmVUb09ic2VydmFibGUgfSBmcm9tICcuL3N1YnNjcmliZVRvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4vaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi9pc1Byb21pc2UnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL2lzT2JqZWN0JztcbmltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuZXhwb3J0IHZhciBzdWJzY3JpYmVUbyA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAoISFyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdFtTeW1ib2xfb2JzZXJ2YWJsZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZVRvT2JzZXJ2YWJsZShyZXN1bHQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5TGlrZShyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb0FycmF5KHJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb1Byb21pc2UocmVzdWx0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoISFyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdFtTeW1ib2xfaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb0l0ZXJhYmxlKHJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgdmFsdWUgPSBpc09iamVjdChyZXN1bHQpID8gJ2FuIGludmFsaWQgb2JqZWN0JyA6IFwiJ1wiICsgcmVzdWx0ICsgXCInXCI7XG4gICAgICAgIHZhciBtc2cgPSBcIllvdSBwcm92aWRlZCBcIiArIHZhbHVlICsgXCIgd2hlcmUgYSBzdHJlYW0gd2FzIGV4cGVjdGVkLlwiXG4gICAgICAgICAgICArICcgWW91IGNhbiBwcm92aWRlIGFuIE9ic2VydmFibGUsIFByb21pc2UsIEFycmF5LCBvciBJdGVyYWJsZS4nO1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1zZyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IHZhciBzdWJzY3JpYmVUb0FycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW4gJiYgIXN1YnNjcmliZXIuY2xvc2VkOyBpKyspIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9BcnJheS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3N5bWJvbF9pdGVyYXRvciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBpdGVyYXRvciBhcyBTeW1ib2xfaXRlcmF0b3IgfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuZXhwb3J0IHZhciBzdWJzY3JpYmVUb0l0ZXJhYmxlID0gZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhYmxlW1N5bWJvbF9pdGVyYXRvcl0oKTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB2b2lkIDA7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uZG9uZSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICh0cnVlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvci5yZXR1cm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9JdGVyYWJsZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3N5bWJvbF9vYnNlcnZhYmxlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5leHBvcnQgdmFyIHN1YnNjcmliZVRvT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIG9icyA9IG9ialtTeW1ib2xfb2JzZXJ2YWJsZV0oKTtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnMuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm92aWRlZCBvYmplY3QgZG9lcyBub3QgY29ycmVjdGx5IGltcGxlbWVudCBTeW1ib2wub2JzZXJ2YWJsZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9icy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvT2JzZXJ2YWJsZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2hvc3RSZXBvcnRFcnJvciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBob3N0UmVwb3J0RXJyb3IgfSBmcm9tICcuL2hvc3RSZXBvcnRFcnJvcic7XG5leHBvcnQgdmFyIHN1YnNjcmliZVRvUHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpOyB9KVxuICAgICAgICAgICAgLnRoZW4obnVsbCwgaG9zdFJlcG9ydEVycm9yKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUb1Byb21pc2UuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9Jbm5lclN1YnNjcmliZXIsX3N1YnNjcmliZVRvLF9PYnNlcnZhYmxlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IElubmVyU3Vic2NyaWJlciB9IGZyb20gJy4uL0lubmVyU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBzdWJzY3JpYmVUbyB9IGZyb20gJy4vc3Vic2NyaWJlVG8nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZVRvUmVzdWx0KG91dGVyU3Vic2NyaWJlciwgcmVzdWx0LCBvdXRlclZhbHVlLCBvdXRlckluZGV4LCBpbm5lclN1YnNjcmliZXIpIHtcbiAgICBpZiAoaW5uZXJTdWJzY3JpYmVyID09PSB2b2lkIDApIHtcbiAgICAgICAgaW5uZXJTdWJzY3JpYmVyID0gbmV3IElubmVyU3Vic2NyaWJlcihvdXRlclN1YnNjcmliZXIsIG91dGVyVmFsdWUsIG91dGVySW5kZXgpO1xuICAgIH1cbiAgICBpZiAoaW5uZXJTdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0LnN1YnNjcmliZShpbm5lclN1YnNjcmliZXIpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic2NyaWJlVG8ocmVzdWx0KShpbm5lclN1YnNjcmliZXIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9SZXN1bHQuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9TdWJzY3JpYmVyLF9zeW1ib2xfcnhTdWJzY3JpYmVyLF9PYnNlcnZlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyByeFN1YnNjcmliZXIgYXMgcnhTdWJzY3JpYmVyU3ltYm9sIH0gZnJvbSAnLi4vc3ltYm9sL3J4U3Vic2NyaWJlcic7XG5pbXBvcnQgeyBlbXB0eSBhcyBlbXB0eU9ic2VydmVyIH0gZnJvbSAnLi4vT2JzZXJ2ZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHRvU3Vic2NyaWJlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgaWYgKG5leHRPck9ic2VydmVyKSB7XG4gICAgICAgIGlmIChuZXh0T3JPYnNlcnZlciBpbnN0YW5jZW9mIFN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0T3JPYnNlcnZlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXJbcnhTdWJzY3JpYmVyU3ltYm9sXSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRPck9ic2VydmVyW3J4U3Vic2NyaWJlclN5bWJvbF0oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW5leHRPck9ic2VydmVyICYmICFlcnJvciAmJiAhY29tcGxldGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpYmVyKGVtcHR5T2JzZXJ2ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFN1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b1N1YnNjcmliZXIuanMubWFwXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jcmVhdGVCaW5kaW5nKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBJQ2VsbENvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IENlbGxXaWR0aCB9IGZyb20gXCIuLi9tb2RlbFwiO1xuXG4vKipcbiAqIENlbGwgdXRpbGl0aWVzLlxuICovXG5leHBvcnQgY2xhc3MgQ2VsbFV0aWxpdGllcyB7XG4gICAgLyoqXG4gICAgICogQ2VsbCBjb25maWcgY2FjaGUuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY2VsbENvbmZpZ0NhY2hlOiBJQ2VsbENvbmZpZ1tdO1xuXG4gICAgLyoqXG4gICAgICogR3JpZCB3aWR0aCBvZiBjZWxsIHV0aWxpdGllc1xuICAgICAqL1xuICAgIHByaXZhdGUgZ3JpZFdpZHRoOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGNlbGwgdXRpbGl0aWVzLlxuICAgICAqIEBwYXJhbSBbZ3JpZFdpZHRoXSBhdmFpbGFibGUgZ3JpZCB3aWR0aC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihncmlkV2lkdGg/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY2VsbENvbmZpZ0NhY2hlID0gW107XG4gICAgICAgIHRoaXMuZ3JpZFdpZHRoID0gZ3JpZFdpZHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIGNlbGwgZXNzZW50aWFscy5cbiAgICAgKiBAcGFyYW0gY2VsbHMgY29sdW1ucyBvZiBncmlkIGNvbmZpZywgcmVwcmVzZW50cyBjZWxsIG9mIGEgZmllbGQuXG4gICAgICogQHBhcmFtIGZvcmNlQ2FsYyBpZiB0cnVlLCByZWNhbGN1bGF0ZXMgd2lkdGggYWdhaW4uXG4gICAgICogQHBhcmFtIGdyaWRXaWR0aCB3aWR0aCBvZiBncmlkIGJvZHkuIFxuICAgICAqIEByZXR1cm5zIGNvbXB1dGVkIGdyaWQgY29sdW1uIHdpZHRocy5cbiAgICAgKi9cbiAgICBjb21wdXRlQ2VsbEVzc2VudGlhbHMoY2VsbHM6IElDZWxsQ29uZmlnW10sIGZvcmNlQ2FsYzogYm9vbGVhbikge1xuICAgICAgICBpZihmb3JjZUNhbGMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NlbGxDb25maWdDYWNoZSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fY2VsbENvbmZpZ0NhY2hlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jZWxsQ29uZmlnQ2FjaGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG90YWxDZWxsV2lkdGggPSAwO1xuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBjb25zdW1lZCB3aWR0aCBhbmQgc2V0IHVwIHJlbmRlciB3aWR0aCBmb3IgY2VsbHMgdGhhdCBoYXZlIHVzZXIgZGVmaW5lZCB3aWR0aHMuXG4gICAgICAgIGNlbGxzLmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2VsbC53aWR0aCAhPT0gQ2VsbFdpZHRoLkF1dG8gJiYgIWlzTmFOKGNlbGwud2lkdGggYXMgbnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHRvdGFsQ2VsbFdpZHRoICs9IGNlbGwud2lkdGggYXMgbnVtYmVyO1xuICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyV2lkdGggPSBjZWxsLndpZHRoIGFzIG51bWJlciArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG5lZWQgdG8gY2FsY3VsYXRlIGluZGl2aWR1YWwgY2VsbCB3aWR0aHMuXG4gICAgICAgIC8vIHBlcmNlbnRhZ2UgLT4gL15bMC05XSslL2dcbiAgICAgICAgLy8gcHggLT4gL15bMC05XStweC9nXG4gICAgICAgIGxldCBhdmFpbGFibGVXaWR0aFRvU3Bhd24gPSB0aGlzLmdyaWRXaWR0aCAtIHRvdGFsQ2VsbFdpZHRoO1xuXG4gICAgICAgIC8vIEZJWE1FOiBOZWVkIHRvIGZpbmQgYSB3YXkgZm9yIGNlbGwgd2lkdGggb3RoZXIgdGhhbiBBdXRvLlxuICAgICAgICBjb25zdCBhdXRvQ2VsbHNBdmFpbGFibGUgPSBjZWxscy5maWx0ZXIoYyA9PiBjLndpZHRoID09PSBDZWxsV2lkdGguQXV0byB8fCBjLndpZHRoID09PSBDZWxsV2lkdGguRml0VG9Db250ZW50IHx8IENlbGxXaWR0aC5GbGV4aWJsZSkubGVuZ3RoO1xuXG4gICAgICAgIC8vIHNldCBjYWxjdWxhdGVkIHdpZHRoIGZvciBlYWNoIGNlbGwgJiByZWR1Y2UgYXZhaWxhYmxlIHdpZHRoIGZvciBBdXRvIGNvbHVtbnMuXG4gICAgICAgIGNlbGxzLmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZigvXlswLTldKyUvZy50ZXN0KGNlbGwud2lkdGgudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJlZFdpZHRoID0gKChOdW1iZXIoY2VsbC53aWR0aC50b1N0cmluZygpLnNsaWNlKDAsIC0xKSkgLyAxMDApICogYXZhaWxhYmxlV2lkdGhUb1NwYXduKTtcbiAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcldpZHRoID0gcmVuZGVyZWRXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlV2lkdGhUb1NwYXduIC09IHJlbmRlcmVkV2lkdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKC9eWzAtOV0rcHgvZy50ZXN0KGNlbGwud2lkdGgudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcldpZHRoID0gY2VsbC53aWR0aC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVdpZHRoVG9TcGF3biAtPSBOdW1iZXIoY2VsbC53aWR0aC50b1N0cmluZygpLnNsaWNlKDAsIC0yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHNwYW4gcmVtYWluaW5nIHdpZHRoIHRvIGF1dG8gY2VsbHMuXG4gICAgICAgIGNvbnN0IGluZGl2aWR1YWxDZWxsV2lkdGhGb3JBdXRvQ29sdW1ucyA9IGF2YWlsYWJsZVdpZHRoVG9TcGF3biAvIGF1dG9DZWxsc0F2YWlsYWJsZTtcblxuICAgICAgICAvLyBzZXQgY2FsY3VsYXRlZCB3aWR0aHMgZm9yIEF1dG8gY2VsbC5cbiAgICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmKGNlbGwud2lkdGggPT09IENlbGxXaWR0aC5BdXRvKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5yZW5kZXJXaWR0aCA9IGluZGl2aWR1YWxDZWxsV2lkdGhGb3JBdXRvQ29sdW1ucyArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2NlbGxDb25maWdDYWNoZSA9IFsuLi5jZWxsc107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhbGwgY2VsbCB1dGlscy5cbiAgICAgKiBAcmV0dXJucyBhbGwgY2VsbCB1dGlscy5cbiAgICAgKi9cbiAgICBnZXRBbGxDZWxsVXRpbHMoKTogSUNlbGxDb25maWdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jZWxsQ29uZmlnQ2FjaGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBjZWxsIHV0aWxzIGJ5IGZpZWxkIG5hbWVcbiAgICAgKiBAcGFyYW0gZmllbGQgc2VhcmNoIGJ5IGZpZWxkIG5hbWUuXG4gICAgICogQHJldHVybnMgY2VsbCB1dGlscy5cbiAgICAgKi9cbiAgICBnZXRDZWxsVXRpbHNCeUZpZWxkTmFtZShmaWVsZDogc3RyaW5nKTogSUNlbGxDb25maWcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2VsbENvbmZpZ0NhY2hlLmZpbmQoYyA9PiBjLmZpZWxkID09PSBmaWVsZCk7XG4gICAgfVxufSIsImV4cG9ydCB7IENlbGxVdGlsaXRpZXMgfSBmcm9tICcuL2NlbGwudXRpbGl0aWVzJ1xuZXhwb3J0IHsgVmlydHVhbGl6ZSB9IGZyb20gJy4vdmlydHVhbGl6ZSc7XG5leHBvcnQgeyBTY3JvbGxVdGlsaXRpZXMgfSBmcm9tICcuL3Njcm9sbC51dGlsaXRpZXMnOyIsIi8qKlxuICogU2Nyb2xsIHV0aWxpdGllcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFNjcm9sbFV0aWxpdGllcyB7XG4gICAgLyoqXG4gICAgICogU2hhZG93IHJvb3Qgb2Ygc2Nyb2xsIHV0aWxpdGllcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNoYWRvd1Jvb3Q6IFNoYWRvd1Jvb3Q7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgc2Nyb2xsIGJhciBhY3RpdmF0ZWQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc1Njcm9sbEJhckFjdGl2YXRlZDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFkgbWF4IG9mIHNjcm9sbCB1dGlsaXRpZXMuXG4gICAgICovXG4gICAgcHJpdmF0ZSB5TWF4OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBZIG1pbiBvZiBzY3JvbGwgdXRpbGl0aWVzLlxuICAgICAqL1xuICAgIHByaXZhdGUgeU1pbjogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGJhciBoZWlnaHQgb2Ygc2Nyb2xsIHV0aWxpdGllcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNjcm9sbEJhckhlaWdodDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogRHJhZyBzdGFydCBjYWxsYmFjayBvZiBzY3JvbGwgdXRpbGl0aWVzLlxuICAgICAqL1xuICAgIHByaXZhdGUgZHJhZ1N0YXJ0Q2FsbGJhY2sgPSAoZXZlbnQ6TW91c2VFdmVudCkgPT4geyB0aGlzLmRyYWdTdGFydChldmVudCkgfTtcblxuICAgIC8qKlxuICAgICAqIERyYWcgZW5kIGNhbGxiYWNrIG9mIHNjcm9sbCB1dGlsaXRpZXMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBkcmFnRW5kQ2FsbGJhY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHt0aGlzLmRyYWdFbmQoZXZlbnQpfTtcblxuICAgIC8qKlxuICAgICAqIERyYWcgY2FsbGJhY2sgb2Ygc2Nyb2xsIHV0aWxpdGllcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIGRyYWdDYWxsYmFjayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge3RoaXMuZHJhZyhldmVudCl9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBzY3JvbGwgdXRpbGl0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNoYWRvd1Jvb3Q6IFNoYWRvd1Jvb3QpIHtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290ID0gc2hhZG93Um9vdDtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxCb3VuZHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgc21hcnQgc2Nyb2xsIGV2ZW50cy5cbiAgICAgKi9cbiAgICByZWdpc3RlclNtYXJ0U2Nyb2xsRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSB0aGlzLmdldEdyaWRTY3JvbGxDb250YWluZXIoKTtcbiAgICAgICAgY29uc3Qgdmlld3BvcnRDb250YWluZXIgPSB0aGlzLmdldEdyaWRWaWV3cG9ydCgpO1xuXG4gICAgICAgIHNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmRyYWdTdGFydENhbGxiYWNrLCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmRyYWdFbmRDYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuZHJhZ0NhbGxiYWNrLCBmYWxzZSk7XG5cbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5kcmFnU3RhcnRDYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLmRyYWdFbmRDYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuZHJhZ0NhbGxiYWNrLCBmYWxzZSk7XG5cbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyLm9ud2hlZWwgPSAoZXZlbnQ6IFdoZWVsRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25TY3JvbGxDb250YWluZXJXaGVlbChldmVudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25TY3JvbGxDb250YWluZXJDbGljayhldmVudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmlld3BvcnRDb250YWluZXIub253aGVlbCA9IChldmVudDogV2hlZWxFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblNjcm9sbENvbnRhaW5lcldoZWVsKGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWdpc3RlciBzbWFydCBzY3JvbGwgZXZlbnRzLlxuICAgICAqL1xuICAgIHVuUmVnaXN0ZXJTbWFydFNjcm9sbEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gdGhpcy5nZXRHcmlkU2Nyb2xsQ29udGFpbmVyKCk7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0Q29udGFpbmVyID0gdGhpcy5nZXRHcmlkVmlld3BvcnQoKTtcblxuICAgICAgICBzY3JvbGxDb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5kcmFnU3RhcnRDYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5kcmFnRW5kQ2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLmRyYWdDYWxsYmFjaywgZmFsc2UpO1xuXG4gICAgICAgIHNjcm9sbENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuZHJhZ1N0YXJ0Q2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5kcmFnRW5kQ2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmRyYWdDYWxsYmFjaywgZmFsc2UpO1xuXG4gICAgICAgIHNjcm9sbENvbnRhaW5lci5vbmNsaWNrID0gbnVsbDtcbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyLm9ud2hlZWwgPSBudWxsO1xuICAgICAgICB2aWV3cG9ydENvbnRhaW5lci5vbndoZWVsID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmFncyBzdGFydCBldmVudC5cbiAgICAgKiBAcGFyYW0gZXZlbnQgTW91c2UgZXZlbnQuXG4gICAgICovXG4gICAgZHJhZ1N0YXJ0KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcInRvdWNoc3RhcnRcIiB8fCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTY3JvbGxCb3VuZHMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2Nyb2xsVmlzaWJpbGl0eSgpO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQmFyID0gdGhpcy5nZXRHcmlkU2Nyb2xsQmFyKCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHNjcm9sbEJhcikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxCYXJBY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhZ3MgZW5kIGV2ZW50LlxuICAgICAqIEBwYXJhbSBldmVudCBNb3VzZSBldmVudC5cbiAgICAgKi9cbiAgICBkcmFnRW5kKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxCYXJBY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbFZpc2liaWxpdHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmFncyBzY3JvbGwgdXRpbGl0aWVzLlxuICAgICAqIEBwYXJhbSBldmVudCBNb3VzZSBldmVudC5cbiAgICAgKi9cbiAgICBkcmFnKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmKChldmVudC50eXBlID09PSBcInRvdWNobW92ZVwiIHx8IGV2ZW50LnR5cGUgPT09ICdtb3VzZW1vdmUnKSBcbiAgICAgICAgICAgICYmIHRoaXMuaXNTY3JvbGxCYXJBY3RpdmF0ZWRcbiAgICAgICAgICAgICYmIHRoaXMuaXNQb3NpdGlvbkluQm91bmRzKGV2ZW50LmNsaWVudFkpKSBcbiAgICAgICAge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQmFyID0gdGhpcy5nZXRHcmlkU2Nyb2xsQmFyKCk7XG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVkgPSBldmVudC5jbGllbnRZIC0gdGhpcy55TWluO1xuICAgICAgICAgICAgc2Nyb2xsQmFyLnN0eWxlLnRvcCA9IHJlbGF0aXZlWSArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVlbCBldmVudCBvbiBzY3JvbGwgY29udGFpbmVyLlxuICAgICAqIEBwYXJhbSBldmVudCBXaGVlbCBldmVudC5cbiAgICAgKi9cbiAgICBvblNjcm9sbENvbnRhaW5lcldoZWVsKGV2ZW50OiBXaGVlbEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsQm91bmRzKCk7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGlzUG9zaXRpdmVSb2xsID0gZXZlbnQuZGVsdGFZID4gMDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsU3RlcCA9IDEwO1xuICAgICAgICBsZXQgbmV4dFBvc2l0aW9uID0gMDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsQmFyID0gdGhpcy5nZXRHcmlkU2Nyb2xsQmFyKCk7XG4gICAgICAgIGNvbnN0IHNjcm9sbEJhclRvcCA9IHNjcm9sbEJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xuXG4gICAgICAgIGlmIChpc1Bvc2l0aXZlUm9sbCkge1xuICAgICAgICAgICAgbmV4dFBvc2l0aW9uID0gc2Nyb2xsQmFyVG9wICsgc2Nyb2xsU3RlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHRQb3NpdGlvbiA9IHNjcm9sbEJhclRvcCAtIHNjcm9sbFN0ZXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1Bvc2l0aW9uSW5Cb3VuZHMobmV4dFBvc2l0aW9uKSkge1xuICAgICAgICAgICAgc2Nyb2xsQmFyLnN0eWxlLnRvcCA9IG5leHRQb3NpdGlvbiAtIHRoaXMueU1pbiArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGljayBldmVudCBvbiBzY3JvbGwgY29udGFpbmVyLlxuICAgICAqIEBwYXJhbSBldmVudCBDbGljayBldmVudC5cbiAgICAgKi9cbiAgICBvblNjcm9sbENvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIC8vIERpc3BhdGNoIG1vY2sgZHJhZyBldmVudCBmb3IgZXZlcnkgY2xpY2sgYXMgbW91c2Vtb3ZlIGV2ZW50LlxuICAgICAgICB0aGlzLmlzU2Nyb2xsQmFyQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxCb3VuZHMoKTtcbiAgICAgICAgdGhpcy5lbmFibGVTbW9vdGhTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxWaXNpYmlsaXR5KCk7XG4gICAgICAgIHRoaXMuZHJhZyhuZXcgTW91c2VFdmVudCgnbW91c2Vtb3ZlJywgZXZlbnQpKTtcbiAgICAgICAgdGhpcy5pc1Njcm9sbEJhckFjdGl2YXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2FibGVTbW9vdGhTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbFZpc2liaWxpdHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHNjcm9sbCBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHNjcm9sbCBlbGVtZW50O1xuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0R3JpZFNjcm9sbEJhcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnNjcm9sbC1iYXInKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGdyaWQgc2Nyb2xsIGNvbnRhaW5lci5cbiAgICAgKiBAcmV0dXJucyBncmlkIHNjcm9sbCBjb250YWluZXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRHcmlkU2Nyb2xsQ29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuc21hcnQtc2Nyb2xsJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRHcmlkVmlld3BvcnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLXZpZXdwb3J0Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHBvc2l0aW9uIGlzIGluIGJvdW5kcy5cbiAgICAgKiBAcGFyYW0geVBvc2l0aW9uIHBvc2l0aW9uIGZyb20gZXZlbnQuXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBpbiBib3VuZHMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc1Bvc2l0aW9uSW5Cb3VuZHMoeVBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuICh5UG9zaXRpb24gPj0gdGhpcy55TWluKSAmJiAoeVBvc2l0aW9uICsgdGhpcy5zY3JvbGxCYXJIZWlnaHQgPD0gdGhpcy55TWF4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHNjcm9sbCBib3VuZHMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRTY3JvbGxCb3VuZHMoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRDb250YWluZXIgPSB0aGlzLmdldEdyaWRTY3JvbGxDb250YWluZXIoKTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsQmFyID0gdGhpcy5nZXRHcmlkU2Nyb2xsQmFyKCk7XG4gICAgICAgIHRoaXMueU1pbiA9IGVsZW1lbnRDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICB0aGlzLnlNYXggPSBlbGVtZW50Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgICAgdGhpcy5zY3JvbGxCYXJIZWlnaHQgPSBzY3JvbGxCYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgc2Nyb2xsIHZpc2liaWxpdHkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRTY3JvbGxWaXNpYmlsaXR5KCkge1xuICAgICAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSB0aGlzLmdldEdyaWRTY3JvbGxDb250YWluZXIoKTtcbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGluZycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyBzY3JvbGwgdmlzaWJpbGl0eSB0byBkZWZhdWx0IGJlaGF2aW9yLlxuICAgICAqL1xuICAgIHByaXZhdGUgcmVzZXRTY3JvbGxWaXNpYmlsaXR5KCkge1xuICAgICAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSB0aGlzLmdldEdyaWRTY3JvbGxDb250YWluZXIoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzY3JvbGxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsaW5nJyk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlcyBzbW9vdGggc2Nyb2xsIHdpdGggdHJhbnNpdGlvbnMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBlbmFibGVTbW9vdGhTY3JvbGwoKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHRoaXMuZ2V0R3JpZFNjcm9sbENvbnRhaW5lcigpO1xuICAgICAgICBzY3JvbGxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc21vb3RoLXNjcm9sbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHNtb290aCBzY3JvbGwuXG4gICAgICovXG4gICAgcHJpdmF0ZSBkaXNhYmxlU21vb3RoU2Nyb2xsKCkge1xuICAgICAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSB0aGlzLmdldEdyaWRTY3JvbGxDb250YWluZXIoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzY3JvbGxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc21vb3RoLXNjcm9sbCcpO1xuICAgICAgICB9LCA1MDApO1xuICAgIH1cbn0iLCIvKipcbiAqIFZpcnR1YWxpemUgY29yZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZpcnR1YWxpemUge1xuICAgIFxufSIsImltcG9ydCB7IENlbGxVdGlsaXRpZXMgfSBmcm9tIFwiLi9jb3JlXCI7XHJcbmltcG9ydCB7IElHcmlkQ29uZmlnLCBJR3JpZFJlbmRlcmVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEdyaWRDb2x1bW4gfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5pbXBvcnQgeyBGbGV4SGVhZGVyUmVuZGVyZXIsIEZsZXhEYXRhUm93UmVuZGVyZXIsIFNjcm9sbFJlbmRlcmVyIH0gZnJvbSBcIi4vcmVuZGVyZXJzXCI7XHJcbmltcG9ydCB7IFNjcm9sbFV0aWxpdGllcyB9IGZyb20gJy4vY29yZSc7XHJcblxyXG4vKipcclxuICogR3MgZ3JpZCBjb21wb25lbnQgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3NHcmlkIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHcmlkIGNvbmZpZ3VyYXRpb24gb2JqZWN0IG9mIGdzLWdyaWQuXHJcbiAgICAgKi9cclxuICAgIGdyaWRDb25maWc6IElHcmlkQ29uZmlnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2Nyb2xsIGluZGV4ZXIgb2YgZ3MtZ3JpZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsSW5kZXhlcjogbnVtYmVyW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXJyZW50IHNjcm9sbCBpbmRleCBvZiBncy1ncmlkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jdXJyZW50U2Nyb2xsSW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc3RhbmNlIGlkIG9mIGdzLWdyaWQgdGhhdCBpcyBzZXQgb24gaW5zdGFuY2UtaWQgYXR0cmlidXRlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluc3RhbmNlSWQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlYWRlciByZW5kZXJlciBvZiBncyBncmlkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhlYWRlclJlbmRlcmVyOiBJR3JpZFJlbmRlcmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGF0YSByb3cgcmVuZGVyZXIgb2YgZ3MgZ3JpZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkYXRhUm93UmVuZGVyZXI6IElHcmlkUmVuZGVyZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTY3JvbGwgcmVuZGVyZXIgb2YgZ3MgZ3JpZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzY3JvbGxSZW5kZXJlcjogSUdyaWRSZW5kZXJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENlbGwgdXRpbHMgb2YgZ3MgZ3JpZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjZWxsVXRpbHM6IENlbGxVdGlsaXRpZXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGdzLWdyaWQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZUlkID0gdGhpcy5nZW5lcmF0ZUluc3RhbmNlSWQoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyR3JpZEV2ZW50Q2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbm5lY3RlZCBjYWxsYmFjayBvZiBncy1ncmlkIGNvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5pbml0UHJvcHNGcm9tQXR0cnMoKTtcclxuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIGFsbCBhdHRyaWJ1dGVzIG9mIGdzLWdyaWQgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRQcm9wc0Zyb21BdHRycygpIHtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaW5zdGFuY2UtaWQnLCB0aGlzLmluc3RhbmNlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGEgVVVJRCBmb3IgaW5zdGFuY2UgaWQuXHJcbiAgICAgKiAoUkZDIDQxMjIpIEltcGxlbWVudGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2hvdy10by1jcmVhdGUtZ3VpZC11dWlkXHJcbiAgICAgKiBAcmV0dXJucyBBIHVuaXF1ZSBpZGVudGlmaWVyIChVVUlEKVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlSW5zdGFuY2VJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHMgPSBuZXcgQXJyYXkoMzYpO1xyXG4gICAgICAgIGNvbnN0IGhleERpZ2l0cyA9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM2OyBpKyspIHtcclxuICAgICAgICAgICAgc1tpXSA9IGhleERpZ2l0cy5zdWJzdHIoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHgxMCksIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc1sxNF0gPSBcIjRcIjtcclxuICAgICAgICBzWzE5XSA9IGhleERpZ2l0cy5zdWJzdHIoKHNbMTldICYgMHgzKSB8IDB4OCwgMSk7XHJcbiAgICAgICAgc1s4XSA9IHNbMTNdID0gc1sxOF0gPSBzWzIzXSA9IFwiLVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gcy5qb2luKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIGFsbCBjb21wb25lbnQgZXZlbnQgaGFuZGxlcnMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJHcmlkRXZlbnRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3gtZ3MtY29uZmlnLXNldHVwJywgKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGdyaWRDb25maWcgfSA9IGV2ZW50LmRldGFpbDtcclxuICAgICAgICAgICAgdGhpcy5vbkdyaWRDb25maWdTZXQoZ3JpZENvbmZpZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayB0byBzZXQgZXZlbnQgY29uZmlnLlxyXG4gICAgICogQHBhcmFtIGdyaWRDb25maWcgZ3JpZCBjb25maWcgcGFyYW0uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb25HcmlkQ29uZmlnU2V0KGdyaWRDb25maWc6IElHcmlkQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkQ29uZmlnID0gZ3JpZENvbmZpZztcclxuICAgICAgICB0aGlzLmdyaWRDb25maWcuY29sdW1uRGVmcyA9IGdyaWRDb25maWcuY29sdW1uRGVmcy5tYXAoYyA9PiBuZXcgR3JpZENvbHVtbihjKSk7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgQ2VsbCB1dGlscyB3aXRoIHBhcmFtcy5cclxuICAgICAgICB0aGlzLmNlbGxVdGlscyA9IG5ldyBDZWxsVXRpbGl0aWVzKHRoaXMuZ2V0QXZhaWxhYmxlV2lkdGgoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUmVnaXN0ZXIgYWxsIHJlbmRlcmVycy5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyUmVuZGVyZXJzKHRoaXMuZ3JpZENvbmZpZyk7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgc3R5bGVzLlxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVN0eWxlcygpO1xyXG5cclxuICAgICAgICAvLyBSZW5kZXIgZ3JpZCBoZWFkZXIuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplSGVhZGVyKCk7XHJcblxyXG4gICAgICAgIC8vIFJlbmRlciBkYXRhIHJvd3MuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVmlld3BvcnQoKTtcclxuXHJcbiAgICAgICAgLy8gUmVuZGVyIHNjcm9sbCBiYXIuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplU2Nyb2xsQmFyKCk7XHJcblxyXG4gICAgICAgIC8vIEluaXQgc21hcnQgc2Nyb2xsLlxyXG4gICAgICAgIHZhciBzbWFydFNjcm9sbCA9IG5ldyBTY3JvbGxVdGlsaXRpZXModGhpcy5zaGFkb3dSb290KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc21hcnRTY3JvbGwucmVnaXN0ZXJTbWFydFNjcm9sbEV2ZW50cygpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIHJlbmRlcmVycyBvZiBoZWFkZXIgJiBjb2x1bW4gb2YgZ3JpZC5cclxuICAgICAqIEBwYXJhbSBncmlkQ29uZmlnIFxyXG4gICAgICovXHJcbiAgICByZWdpc3RlclJlbmRlcmVycyhncmlkQ29uZmlnOiBJR3JpZENvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVyRGF0YVNldCA9IGdyaWRDb25maWcuY29sdW1uRGVmcy5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGRpc3BsYXlOYW1lOiB4LmhlYWRlck5hbWUsIGZpZWxkOiB4LmZpZWxkLCB3aWR0aDogeC53aWR0aCwgbWluV2lkdGg6IHgubWluV2lkdGggfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZWdpc3RlciBoZWFkZXIgcmVuZGVyZXIuXHJcbiAgICAgICAgdGhpcy5oZWFkZXJSZW5kZXJlciA9IG5ldyBGbGV4SGVhZGVyUmVuZGVyZXIocmVuZGVyZXJEYXRhU2V0LCB0aGlzLmNlbGxVdGlscyk7XHJcblxyXG4gICAgICAgIC8vIFJlZ2lzdGVyIGRhdGEgcm93IHJlbmRlcmVyLlxyXG4gICAgICAgIHRoaXMuZGF0YVJvd1JlbmRlcmVyID0gbmV3IEZsZXhEYXRhUm93UmVuZGVyZXIocmVuZGVyZXJEYXRhU2V0LCB0aGlzLmNlbGxVdGlscyk7XHJcblxyXG4gICAgICAgIC8vIFJlZ2lzdGVyIHZpZXdwb3J0IHNjcm9sbCByZW5kZXJlci5cclxuICAgICAgICB0aGlzLnNjcm9sbFJlbmRlcmVyID0gbmV3IFNjcm9sbFJlbmRlcmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBoZWFkZXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUhlYWRlcigpIHtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXJSZW5kZXJlci5yZW5kZXIoKS5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdmlld3BvcnQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVZpZXdwb3J0KCkge1xyXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmQodGhpcy5kYXRhUm93UmVuZGVyZXIucmVuZGVyKHsgZGF0YTogdGhpcy5ncmlkQ29uZmlnLmRhdGEgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgc2Nyb2xsIGJhciBmb3Igdmlld3BvcnQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVNjcm9sbEJhcigpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuZGF0YS12aWV3cG9ydCcpO1xyXG4gICAgICAgIGlmICh2aWV3cG9ydCkge1xyXG4gICAgICAgICAgICB2aWV3cG9ydC5hcHBlbmQodGhpcy5zY3JvbGxSZW5kZXJlci5yZW5kZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgc3R5bGVzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVTdHlsZXMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVSb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICBjb25zdCBnc0dyaWRTdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcy9ncy1ncmlkLnNjc3MnKS5kZWZhdWx0WzBdWzFdO1xyXG4gICAgICAgIHN0eWxlUm9vdC5pbm5lclRleHQgPSBnc0dyaWRTdHlsZXMucmVwbGFjZSgvXFxufFxcci9nLCBcIlwiKTtcclxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoc3R5bGVSb290KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYXZhaWxhYmxlIHdpZHRoIGZvciBncmlkLlxyXG4gICAgICogQHJldHVybnMgYXZhaWxhYmxlIHdpZHRoIGZvciBncmlkLCBlaXRoZXIgaXRzZWxmIG9yIHBhcmVudC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRBdmFpbGFibGVXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudFdpZHRoIHx8IHRoaXMucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdncy1ncmlkJywgR3NHcmlkKTsiLCIvLyBNT0RVTEUgRklMRSBGT1IgR1MtR1JJRFxyXG5leHBvcnQgeyBHc0dyaWQgfSBmcm9tICcuL2dzLWdyaWQnOyIsImltcG9ydCB7IElHcmlkQ29sdW1uIH0gZnJvbSBcIi4uL2ludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBQaW5Db2x1bW4gfSBmcm9tIFwiLlwiO1xyXG5pbXBvcnQgeyBDZWxsV2lkdGggfSBmcm9tIFwiLi9ncmlkLWNvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRDb2x1bW4gaW1wbGVtZW50cyBJR3JpZENvbHVtbiB7XHJcbiAgICBmaWVsZDogc3RyaW5nO1xyXG4gICAgaGVhZGVyTmFtZTogc3RyaW5nO1xyXG4gICAgdmFsdWVGbj86ICgpID0+IHN0cmluZyB8IG51bWJlcjtcclxuICAgIGVuYWJsZVNvcnQ/OiBib29sZWFuO1xyXG4gICAgZW5hYmxlRmlsdGVyPzogYm9vbGVhbjtcclxuICAgIHBpbkNvbHVtbj86IFBpbkNvbHVtbjtcclxuICAgIHdpZHRoOiBudW1iZXIgfCBzdHJpbmcgfCBDZWxsV2lkdGg7XHJcbiAgICBtaW5XaWR0aDogbnVtYmVyIHwgc3RyaW5nIHwgQ2VsbFdpZHRoO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFyZ3M6IElHcmlkQ29sdW1uKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZCA9IGFyZ3MuZmllbGQ7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJOYW1lID0gYXJncy5oZWFkZXJOYW1lO1xyXG4gICAgICAgIHRoaXMudmFsdWVGbiA9IGFyZ3MudmFsdWVGbiB8fCBudWxsO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlU29ydCA9IGFyZ3MuZW5hYmxlU29ydCB8fCBmYWxzZTtcclxuICAgICAgICB0aGlzLmVuYWJsZUZpbHRlciA9IGFyZ3MuZW5hYmxlRmlsdGVyIHx8IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGluQ29sdW1uID0gYXJncy5waW5Db2x1bW4gfHwgUGluQ29sdW1uLk5vbmU7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGFyZ3Mud2lkdGggfHwgQ2VsbFdpZHRoLkF1dG87XHJcbiAgICAgICAgdGhpcy5taW5XaWR0aCA9IGFyZ3MubWluV2lkdGggfHwgQ2VsbFdpZHRoLkF1dG87XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJR3JpZENvbmZpZywgSUdyaWRDb2x1bW4sIElHcmlkSW5zdGFuY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBHcmlkIGNvbmZpZ3VyYXRpb24gY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZENvbmZpZyBpbXBsZW1lbnRzIElHcmlkQ29uZmlnIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgZ3JpZCBpbnN0YW5jZSByZWFkeS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbnN0YW5jZVJlYWR5OiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIGNvbXBsZXRlIHN1YnNjcmlwdGlvbiBvZiBncmlkIGNvbmZpZy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZW5kZXJDb21wbGV0ZVN1YnNjcmlwdGlvbjogU3ViamVjdDxib29sZWFuPjtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBDb2x1bW4gZGVmcyBvZiBncmlkIGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb2x1bW5EZWZzOiBJR3JpZENvbHVtbltdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5zdGFuY2UgIG9mIGdyaWQgY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGluc3RhbmNlOiBJR3JpZEluc3RhbmNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGF0YSBvZiBncmlkIGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBkYXRhPzogYW55W107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGdyaWQgY29uZmlnLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcGxldGVTdWJzY3JpcHRpb24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZXMgd2hldGhlciBpbnN0YW5jZSByZWFkeSBpc1xyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBpbnN0YW5jZSByZWFkeSBcclxuICAgICAqL1xyXG4gICAgSXNJbnN0YW5jZVJlYWR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlUmVhZHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgcmVuZGVyIGlzIGNvbXBsZXRlLlxyXG4gICAgICogQHJldHVybnMgcmVuZGVyIGNvbXBsZXRlIHN1YnNjcmlwdGlvbi5cclxuICAgICAqL1xyXG4gICAgSXNSZW5kZXJDb21wbGV0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wbGV0ZVN1YnNjcmlwdGlvbjtcclxuICAgIH1cclxufSIsImV4cG9ydCBlbnVtIENlbGxXaWR0aCB7XG4gICAgQXV0byxcbiAgICBGbGV4aWJsZSxcbiAgICBGaXRUb0NvbnRlbnRcbn0iLCJpbXBvcnQgeyBJR3JpZENvbmZpZywgSUdyaWRFdmVudHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlXCI7XG5cbi8qKlxuICogR3JpZCBldmVudHMgY2xhc3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBHcmlkRXZlbnRzIGltcGxlbWVudHMgSUdyaWRFdmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHVwIGdyaWQgY29uZmlndXJhdGlvbi5cbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VJZCBHcmlkIGluc3RhbmNlIGlkIGZyb20gaW5zdGFuY2UtaWQgYXR0cmlidXRlIGZyb20gZ3JpZC5cbiAgICAgKiBAcGFyYW0gZ3JpZENvbmZpZyBHcmlkIGNvbmZpZyBvYmplY3QuXG4gICAgICovXG4gICAgc3RhdGljIHNldHVwR3JpZENvbmZpZyhpbnN0YW5jZUlkOiBzdHJpbmcsIGdyaWRDb25maWc6IElHcmlkQ29uZmlnKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGdyaWROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZ3MtZ3JpZFtpbnN0YW5jZS1pZD1cIiR7aW5zdGFuY2VJZH1cIl1gKTtcblxuICAgICAgICBjb25zdCBncmlkU2V0dXBFdmVudCA9IG5ldyBDdXN0b21FdmVudCgneC1ncy1jb25maWctc2V0dXAnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBncmlkQ29uZmlnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdyaWROb2RlLmRpc3BhdGNoRXZlbnQoZ3JpZFNldHVwRXZlbnQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJR3JpZEluc3RhbmNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZVwiO1xuXG4vKipcbiAqIEdyaWQgaW5zdGFuY2UgdG8gaGFuZGxlIG9wZXJhdGlvbnMgb24gcmVuZGVyZWQgZ3JpZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEdyaWRJbnN0YW5jZSBpbXBsZW1lbnRzIElHcmlkSW5zdGFuY2Uge1xuICAgIGlkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG5cbiAgICByZWZyZXNoR3JpZChkZWxheT86IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICByZWJ1aWxkR3JpZChmb3JjZTogYm9vbGVhbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKGRhdGE6IGFueVtdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuICAgIGNsZWFyRGF0YShkYXRhOiBhbnlbXSwgc2hvd05vRGF0YU1lc3NhZ2U6IHRydWUsIG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICBoaWRlQ29sdW1uKGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuXG4gICAgc2hvd0NvbHVtbihmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuICAgIHNjcm9sbFRvVG9wKCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuXG4gICAgc2Nyb2xsVG8ocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG59IiwiZXhwb3J0IHsgR3JpZENvbHVtbiB9IGZyb20gXCIuL2dyaWQtY29sdW1uXCI7XHJcbmV4cG9ydCB7IEdyaWRDb25maWcgfSBmcm9tICcuL2dyaWQtY29uZmlnJztcclxuZXhwb3J0IHsgUGluQ29sdW1uIH0gZnJvbSAnLi9waW4tY29sdW1uJztcclxuZXhwb3J0IHsgR3JpZEV2ZW50cyB9IGZyb20gJy4vZ3JpZC1ldmVudHMnO1xyXG5leHBvcnQgeyBHcmlkSW5zdGFuY2UgfSBmcm9tICcuL2dyaWQtaW5zdGFuY2UnO1xyXG5leHBvcnQgeyBDZWxsV2lkdGggfSBmcm9tICcuL2dyaWQtY29uc3RhbnRzJzsiLCJleHBvcnQgZW51bSBQaW5Db2x1bW4ge1xuICAgIFBpbkxlZnQsXG4gICAgUGluUmlnaHQsXG4gICAgTm9uZVxufSIsImltcG9ydCB7IENlbGxVdGlsaXRpZXMgfSBmcm9tIFwiLi4vY29yZVwiO1xuaW1wb3J0IHsgSUdyaWRSZW5kZXJDb2x1bW4sIElHcmlkUmVuZGVyZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlXCI7XG5cbi8qKlxuICogRmxleCBkYXRhIHJvdyByZW5kZXJlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsZXhEYXRhUm93UmVuZGVyZXIgaW1wbGVtZW50cyBJR3JpZFJlbmRlcmVyIHtcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgY29scyBvZiBmbGV4IGNvbHVtbiByZW5kZXJlci5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9yZW5kZXJDb2xzOiBJR3JpZFJlbmRlckNvbHVtbltdO1xuXG4gICAgLyoqXG4gICAgICogQ2VsbCB1dGlscyBvZiBmbGV4IGhlYWRlciByZW5kZXJlci5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jZWxsVXRpbHM6IENlbGxVdGlsaXRpZXM7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBmbGV4IGNvbHVtbiByZW5kZXJlci5cbiAgICAgKiBAcGFyYW0gY29sdW1ucyBncmlkIGNvbHVtbnMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29sdW1uczogSUdyaWRSZW5kZXJDb2x1bW5bXSwgY2VsbFV0aWxzOiBDZWxsVXRpbGl0aWVzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlckNvbHMgPSBjb2x1bW5zO1xuICAgICAgICB0aGlzLl9jZWxsVXRpbHMgPSBjZWxsVXRpbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBmbGV4IGNvbHVtbiByZW5kZXJlci5cbiAgICAgKi9cbiAgICByZW5kZXIocmVuZGVyT3B0aW9ucz86IGFueSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgZGF0YVZpZXdwb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGFWaWV3cG9ydC5jbGFzc0xpc3QuYWRkKCdkYXRhLXZpZXdwb3J0Jyk7XG5cbiAgICAgICAgaWYocmVuZGVyT3B0aW9ucy5kYXRhICYmIHJlbmRlck9wdGlvbnMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAocmVuZGVyT3B0aW9ucy5kYXRhIGFzIGFueVtdKS5mb3JFYWNoKGRhdGFSb3cgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb2xUZW1wbGF0ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlckNvbHMuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xUZW1wbGF0ZSArPSB0aGlzLmNlbGxUZW1wbGF0ZUZyYWdtZW50Rm4oY29sLmZpZWxkLCBkYXRhUm93KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkYXRhVmlld3BvcnQuYXBwZW5kKHRoaXMucm93VGVtcGxhdGVGcmFnbWVudEZuKGNvbFRlbXBsYXRlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRhdGFWaWV3cG9ydDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBRdWV1ZXMgcmVuZGVyIGFzeW5jLlxuICAgICAqIEByZXR1cm5zIHJlbmRlci5cbiAgICAgKi9cbiAgICBxdWV1ZVJlbmRlcigpOiBQcm9taXNlPEhUTUxFbGVtZW50PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yZW5kZXIoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2VsbHMgdGVtcGxhdGUgZnJhZ21lbnQgbWV0aG9kLlxuICAgICAqIEBwYXJhbSBmaWVsZCBjZWxsIGZpZWxkLlxuICAgICAqIEBwYXJhbSBkYXRhIGZpZWxkIGRhdGEuXG4gICAgICogQHJldHVybnMgdGVtcGxhdGUgZnJhZ21lbnQgbWV0aG9kLlxuICAgICAqL1xuICAgIHByaXZhdGUgY2VsbFRlbXBsYXRlRnJhZ21lbnRGbihmaWVsZDogc3RyaW5nLCBkYXRhOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBjZWxsVXRpbHMgPSB0aGlzLl9jZWxsVXRpbHMuZ2V0Q2VsbFV0aWxzQnlGaWVsZE5hbWUoZmllbGQpO1xuICAgICAgICBjb25zdCBjZWxsVmFsdWUgPSB0aGlzLmdldENlbGxWYWx1ZShmaWVsZCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBgPGRpdiB0aXRsZT1cIiR7Y2VsbFZhbHVlfVwiIGNsYXNzPVwiY2VsbC1jb2x1bW5cIiBzdHlsZT1cIndpZHRoOiAke2NlbGxVdGlscy5yZW5kZXJXaWR0aH1cIj48ZGl2IGNsYXNzPVwiY2VsbC1jb250ZW50XCI+JHtjZWxsVmFsdWV9PC9kaXY+PC9kaXY+YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSb3dzIHRlbXBsYXRlIGZyYWdtZW50IG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gY2VsbFRlbXBsYXRlIGNlbGwgdGVtcGxhdGUgc3RyaW5nLlxuICAgICAqIEByZXR1cm5zIHRlbXBsYXRlIGZyYWdtZW50IG1ldGhvZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHJvd1RlbXBsYXRlRnJhZ21lbnRGbihjZWxsVGVtcGxhdGU6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgZGF0YVJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRhUm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RhdGEtcm93Jyk7XG4gICAgICAgIGRhdGFSb3dDb250YWluZXIuaW5uZXJIVE1MID0gY2VsbFRlbXBsYXRlO1xuICAgICAgICByZXR1cm4gZGF0YVJvd0NvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNlbGwgdmFsdWUgZm9yIGZpZWxkLCBpbmNsdWRpbmcgbmVzdGVkIGRvdCBzeW50YXguXG4gICAgICogQHBhcmFtIGZpZWxkIGNlbGwgZmllbGQuXG4gICAgICogQHBhcmFtIGRhdGEgcm93IGRhdGEgb2JqZWN0LlxuICAgICAqIEByZXR1cm5zIGNlbGwgZGF0YS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldENlbGxWYWx1ZShmaWVsZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgY29uc3QgaXNEb3ROb3RhdGVkID0gZmllbGQuaW5kZXhPZignLicpO1xuXG4gICAgICAgIGlmKGlzRG90Tm90YXRlZCA+IC0xKSB7XG4gICAgICAgICAgICAvLyBpZiBmaWVsZCBpcyBkb3Qgbm90YXRlZCByZWR1Y2UgaXQgdG8gZmluYWwgdmFsdWUuXG4gICAgICAgICAgICBjb25zdCBmaWVsZEFzS2V5cyA9IGZpZWxkLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICByZXR1cm4gZmllbGRBc0tleXMucmVkdWNlKChwLCBjKSA9PiB7IHJldHVybiBwW2NdIH0sIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFbZmllbGRdO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDZWxsVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2NvcmVcIjtcbmltcG9ydCB7IElDZWxsQ29uZmlnLCBJR3JpZFJlbmRlckNvbHVtbiwgSUdyaWRSZW5kZXJlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VcIjtcblxuLyoqXG4gKiBGbGV4IGhlYWRlciByZW5kZXJlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsZXhIZWFkZXJSZW5kZXJlciBpbXBsZW1lbnRzIElHcmlkUmVuZGVyZXIge1xuICAgIC8qKlxuICAgICAqIFJlbmRlciBjb2xzIG9mIGZsZXggaGVhZGVyIHJlbmRlcmVyLlxuICAgICAqL1xuICAgIHByaXZhdGUgX3JlbmRlckNvbHM6IElHcmlkUmVuZGVyQ29sdW1uW107XG5cbiAgICAvKipcbiAgICAgKiBDZWxsIHV0aWxzIG9mIGZsZXggaGVhZGVyIHJlbmRlcmVyLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2NlbGxVdGlsczogQ2VsbFV0aWxpdGllcztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgZmxleCBoZWFkZXIgcmVuZGVyZXIuXG4gICAgICogQHBhcmFtIGNvbHVtbnMgXG4gICAgICogQHBhcmFtIGNlbGxVdGlscyBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb2x1bW5zOiBJR3JpZFJlbmRlckNvbHVtbltdLCBjZWxsVXRpbHM6IENlbGxVdGlsaXRpZXMpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyQ29scyA9IGNvbHVtbnM7XG4gICAgICAgIHRoaXMuX2NlbGxVdGlscyA9IGNlbGxVdGlscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGZsZXggaGVhZGVyIHJlbmRlcmVyLlxuICAgICAqL1xuICAgIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGNlbGxDb25maWdJdGVtczogSUNlbGxDb25maWdbXSA9IHRoaXMuX3JlbmRlckNvbHMubWFwKGMgPT4geyByZXR1cm4ge2ZpZWxkOiBjLmZpZWxkLCB3aWR0aDogYy53aWR0aCwgcmVuZGVyV2lkdGg6ICcnfX0pO1xuICAgICAgICB0aGlzLl9jZWxsVXRpbHMuY29tcHV0ZUNlbGxFc3NlbnRpYWxzKGNlbGxDb25maWdJdGVtcywgdHJ1ZSk7XG4gICAgICAgIGxldCBjb2xUZW1wbGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLl9yZW5kZXJDb2xzLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgICAgIGNvbFRlbXBsYXRlICs9IHRoaXMuY2VsbFRlbXBsYXRlRnJhZ21lbnRGbihjb2wuZGlzcGxheU5hbWUsIGNvbC5maWVsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJvd1RlbXBsYXRlRnJhZ21lbnRGbihjb2xUZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVldWVzIHJlbmRlciBhc3luYy5cbiAgICAgKiBAcmV0dXJucyByZW5kZXIuXG4gICAgICovXG4gICAgYXN5bmMgcXVldWVSZW5kZXIoKTogUHJvbWlzZTxIVE1MRWxlbWVudD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVuZGVyKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENlbGxzIHRlbXBsYXRlIGZyYWdtZW50IG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gY2VsbFZhbHVlIGNlbGwgdmFsdWUuXG4gICAgICogQHBhcmFtIGZpZWxkIGNlbGwgZmllbGQuXG4gICAgICogQHJldHVybnMgdGVtcGxhdGUgZnJhZ21lbnQgbWV0aG9kLlxuICAgICAqL1xuICAgIHByaXZhdGUgY2VsbFRlbXBsYXRlRnJhZ21lbnRGbihjZWxsVmFsdWU6IHN0cmluZywgZmllbGQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGNlbGxVdGlsID0gdGhpcy5fY2VsbFV0aWxzLmdldENlbGxVdGlsc0J5RmllbGROYW1lKGZpZWxkKTtcbiAgICAgICAgcmV0dXJuIGA8ZGl2IHRpdGxlPVwiJHtjZWxsVmFsdWV9XCIgc3R5bGU9XCJ3aWR0aDogJHtjZWxsVXRpbC5yZW5kZXJXaWR0aH1cIiBjbGFzcz1cImhlYWRlci1jb2x1bW5cIiBkYXRhLWZpZWxkPVwiJHtmaWVsZH1cIj48ZGl2IGNsYXNzPVwiY2VsbC1jb250ZW50XCI+JHtjZWxsVmFsdWV9PC9kaXY+PC9kaXY+YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSb3dzIHRlbXBsYXRlIGZyYWdtZW50IG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gY2VsbFRlbXBsYXRlIHRlbXBsYXRlIHN0cmluZy5cbiAgICAgKiBAcmV0dXJucyByb3cgdGVtcGxhdGUgZnJhZ21lbnQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHJvd1RlbXBsYXRlRnJhZ21lbnRGbihjZWxsVGVtcGxhdGU6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1yb3cnKTtcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLmlubmVySFRNTCA9IGNlbGxUZW1wbGF0ZTtcbiAgICAgICAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcbiAgICB9XG59IiwiZXhwb3J0IHsgRmxleEhlYWRlclJlbmRlcmVyIH0gZnJvbSAnLi9oZWFkZXIucmVuZGVyZXInO1xuZXhwb3J0IHsgRmxleERhdGFSb3dSZW5kZXJlciB9IGZyb20gJy4vZGF0YS1yb3cucmVuZGVyZXInO1xuZXhwb3J0IHsgU2Nyb2xsUmVuZGVyZXIgfSBmcm9tICcuL3Njcm9sbC5yZW5kZXJlcic7IiwiaW1wb3J0IHsgSUdyaWRSZW5kZXJlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VcIjtcblxuLyoqXG4gKiBTY3JvbGwgcmVuZGVyZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBTY3JvbGxSZW5kZXJlciBpbXBsZW1lbnRzIElHcmlkUmVuZGVyZXIge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBzY3JvbGwgcmVuZGVyZXIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBzY3JvbGwgcmVuZGVyZXIuXG4gICAgICogQHBhcmFtIFtkYXRhXSByZW5kZXIgZGF0YS5cbiAgICAgKiBAcmV0dXJucyBFbGVtZW50IHRvIHJlbmRlci5cbiAgICAgKi9cbiAgICByZW5kZXIoZGF0YT86IGFueSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U21hcnRTY3JvbGwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBRdWV1ZXMgcmVuZGVyIGFzeW5jLlxuICAgICAqIEByZXR1cm5zIEVsZW1lbnQgdG8gcmVuZGVyIGFzeW5jLlxuICAgICAqL1xuICAgIHF1ZXVlUmVuZGVyKCk6IFByb21pc2U8SFRNTEVsZW1lbnQ+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlbmRlcigpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHNjcm9sbCBiYXIgdGVtcGxhdGUuXG4gICAgICogQHBhcmFtIFtvcHRpb25zXSByZW5kZXIgb3B0aW9ucy5cbiAgICAgKiBAcmV0dXJucyBzY3JvbGwgYmFyIHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0U2Nyb2xsQmFyVGVtcGxhdGUob3B0aW9ucz86IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInNjcm9sbC1iYXJcIiAvPmA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBzbWFydCBzY3JvbGwgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyBzbWFydCBzY3JvbGwuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRTbWFydFNjcm9sbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHNjcm9sbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2Nyb2xsRWxlbS5jbGFzc0xpc3QuYWRkKCdzbWFydC1zY3JvbGwnKTtcbiAgICAgICAgc2Nyb2xsRWxlbS5pbm5lckhUTUwgPSB0aGlzLmdldFNjcm9sbEJhclRlbXBsYXRlKCk7XG4gICAgICAgIHJldHVybiBzY3JvbGxFbGVtO1xuICAgIH1cbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGVyLXJvdyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDNkM2QzO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDNkM2QzOyB9XFxuICAuaGVhZGVyLXJvdyAuaGVhZGVyLWNvbHVtbiB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDNkM2QzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDE0cHg7IH1cXG4gICAgLmhlYWRlci1yb3cgLmhlYWRlci1jb2x1bW4gLmNlbGwtY29udGVudCB7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICB3aWR0aDogOTAlO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgIC5oZWFkZXItcm93IC5oZWFkZXItY29sdW1uOmxhc3QtY2hpbGQge1xcbiAgICAgIGJvcmRlci1yaWdodDogMDsgfVxcblxcbi5kYXRhLXZpZXdwb3J0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmRhdGEtdmlld3BvcnQgLmRhdGEtcm93IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDNkM2QzO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkM2QzZDM7IH1cXG4gICAgLmRhdGEtdmlld3BvcnQgLmRhdGEtcm93IC5jZWxsLWNvbHVtbiB7XFxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZDNkMztcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAgIC5kYXRhLXZpZXdwb3J0IC5kYXRhLXJvdyAuY2VsbC1jb2x1bW4gLmNlbGwtY29udGVudCB7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAgICAgLmRhdGEtdmlld3BvcnQgLmRhdGEtcm93IC5jZWxsLWNvbHVtbjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMDsgfVxcbiAgLmRhdGEtdmlld3BvcnQgLnNtYXJ0LXNjcm9sbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0OyB9XFxuICAgIC5kYXRhLXZpZXdwb3J0IC5zbWFydC1zY3JvbGwuc2Nyb2xsaW5nIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzOyB9XFxuICAgICAgLmRhdGEtdmlld3BvcnQgLnNtYXJ0LXNjcm9sbC5zY3JvbGxpbmcgLnNjcm9sbC1iYXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IH1cXG4gICAgLmRhdGEtdmlld3BvcnQgLnNtYXJ0LXNjcm9sbC5zbW9vdGgtc2Nyb2xsIC5zY3JvbGwtYmFyIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC40cyBlYXNlLWluLW91dDsgfVxcbiAgICAuZGF0YS12aWV3cG9ydCAuc21hcnQtc2Nyb2xsIC5zY3JvbGwtYmFyIHtcXG4gICAgICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBvcGFjaXR5OiAwLjY7XFxuICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0OyB9XFxuICAuZGF0YS12aWV3cG9ydDpob3ZlciAuc21hcnQtc2Nyb2xsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMzsgfVxcbiAgICAuZGF0YS12aWV3cG9ydDpob3ZlciAuc21hcnQtc2Nyb2xsIC5zY3JvbGwtYmFyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dzLWdyaWQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsOEJBQThCLEVBQUU7RUFDaEM7SUFDRSxpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZSxFQUFFO0lBQ2pCO01BQ0UsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixjQUFjO01BQ2QsaUJBQWlCLEVBQUU7SUFDckI7TUFDRSxlQUFlLEVBQUU7O0FBRXZCO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBRTtFQUNwQjtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQiw4QkFBOEIsRUFBRTtJQUNoQztNQUNFLGlCQUFpQjtNQUNqQiwrQkFBK0I7TUFDL0IsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixnQkFBZ0IsRUFBRTtNQUNsQjtRQUNFLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsY0FBYyxFQUFFO01BQ2xCO1FBQ0UsZUFBZSxFQUFFO0VBQ3ZCO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLDZDQUE2QyxFQUFFO0lBQy9DO01BQ0UseUJBQXlCLEVBQUU7TUFDM0I7UUFDRSx1QkFBdUIsRUFBRTtJQUM3QjtNQUNFLGdDQUFnQyxFQUFFO0lBQ3BDO01BQ0UsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLDZCQUE2QjtNQUM3QixZQUFZO01BQ1osV0FBVztNQUNYLDZDQUE2QyxFQUFFO0VBQ25EO0lBQ0UseUJBQXlCLEVBQUU7SUFDM0I7TUFDRSx1QkFBdUIsRUFBRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyLXJvdyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDNkM2QzO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDNkM2QzOyB9XFxuICAuaGVhZGVyLXJvdyAuaGVhZGVyLWNvbHVtbiB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDNkM2QzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDE0cHg7IH1cXG4gICAgLmhlYWRlci1yb3cgLmhlYWRlci1jb2x1bW4gLmNlbGwtY29udGVudCB7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICB3aWR0aDogOTAlO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgIC5oZWFkZXItcm93IC5oZWFkZXItY29sdW1uOmxhc3QtY2hpbGQge1xcbiAgICAgIGJvcmRlci1yaWdodDogMDsgfVxcblxcbi5kYXRhLXZpZXdwb3J0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmRhdGEtdmlld3BvcnQgLmRhdGEtcm93IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDNkM2QzO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkM2QzZDM7IH1cXG4gICAgLmRhdGEtdmlld3BvcnQgLmRhdGEtcm93IC5jZWxsLWNvbHVtbiB7XFxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZDNkMztcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAgIC5kYXRhLXZpZXdwb3J0IC5kYXRhLXJvdyAuY2VsbC1jb2x1bW4gLmNlbGwtY29udGVudCB7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAgICAgLmRhdGEtdmlld3BvcnQgLmRhdGEtcm93IC5jZWxsLWNvbHVtbjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMDsgfVxcbiAgLmRhdGEtdmlld3BvcnQgLnNtYXJ0LXNjcm9sbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0OyB9XFxuICAgIC5kYXRhLXZpZXdwb3J0IC5zbWFydC1zY3JvbGwuc2Nyb2xsaW5nIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzOyB9XFxuICAgICAgLmRhdGEtdmlld3BvcnQgLnNtYXJ0LXNjcm9sbC5zY3JvbGxpbmcgLnNjcm9sbC1iYXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IH1cXG4gICAgLmRhdGEtdmlld3BvcnQgLnNtYXJ0LXNjcm9sbC5zbW9vdGgtc2Nyb2xsIC5zY3JvbGwtYmFyIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC40cyBlYXNlLWluLW91dDsgfVxcbiAgICAuZGF0YS12aWV3cG9ydCAuc21hcnQtc2Nyb2xsIC5zY3JvbGwtYmFyIHtcXG4gICAgICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBvcGFjaXR5OiAwLjY7XFxuICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0OyB9XFxuICAuZGF0YS12aWV3cG9ydDpob3ZlciAuc21hcnQtc2Nyb2xsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMzsgfVxcbiAgICAuZGF0YS12aWV3cG9ydDpob3ZlciAuc21hcnQtc2Nyb2xsIC5zY3JvbGwtYmFyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9