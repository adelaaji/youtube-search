(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/VideoComponents/input-edit/input-edit.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/VideoComponents/input-edit/input-edit.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVideoComponentsInputEditInputEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf='!editMode' (click)='editMode=true' class='cell'> {{ data  }}</div>\n<input *ngIf='editMode' (focusout)=\"onFocusOut()\" (keydown.enter)='$event.target.blur()' [(ngModel)]='data'\n    class='form-control' appAutofocus type='text' (keydown.enter)='$event.target.blur()' (focusout)=\"editMode=false\"\n    placeholder=\"Add a note!\">";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/VideoComponents/video-form/video-form.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/VideoComponents/video-form/video-form.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVideoComponentsVideoFormVideoFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"card p-4 \">\n\n        <div class=\"form-group m-0 \">\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n                    <input type=\"text\" name=\"channelName\" [(ngModel)]=\"channelName\" placeholder=\"Enter Channel Id\"\n                        class=\"form-control\">\n                </div>\n                <div class=\"col-md-3\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\"\n                        [disabled]=\"channelName === ''\">Search</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/VideoComponents/video-item/video-item.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/VideoComponents/video-item/video-item.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVideoComponentsVideoItemVideoItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card h-100 p-2\">\n    <img class=\"card-img-top \" src=\"{{video.imageUrl}}\">\n    <div class=\"card-body p-0\">\n\n        <p class=\"card-title text-success p-2 m-0\">\n            {{video.title}}\n        </p>\n\n        <hr>\n        <app-input-edit [data]='note' (focusOut)='saveNote($event, video)'></app-input-edit>\n\n        <button class=\"play-btn\" (click)='playVideo($event, video)'>Play</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/VideoComponents/video-list/video-list.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/VideoComponents/video-list/video-list.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVideoComponentsVideoListVideoListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"videos.length > 0\">\n    <div class=\"text-right mt-1  mb-4\">\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n\n    <div class=\"row\" [sortablejs]=\"videos\" [sortablejsOptions]=\"eventOptions\">\n        <app-video-item class=\"col-lg-3 col-md-6 mb-4 video-item\"\n            *ngFor=\"let video of videos | paginate: { itemsPerPage: 12, currentPage: p }\" [video]=\"video\">\n        </app-video-item>\n    </div>\n\n</div>\n<div *ngIf=\"videos.length ==0\">\n    <div class=\"alert alert-danger\">\n        No result!\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 mt-5 mb-5 text-center\">\n            <img src=\"https://img.icons8.com/doodle/128/000000/youtube--v1.png\" class=\"mb-4\" />\n            <h6 class=\"text-secondary\">\n                <em>save you notes ..</em>\n            </h6>\n        </div>\n\n        <div class=\"col-md-12\">\n            <app-video-form></app-video-form>\n        </div>\n\n        <div class=\"col-md-12\">\n            <app-video-player></app-video-player>\n        </div>\n\n        <div class=\"col-md-12 mt-5\">\n            <app-video-list></app-video-list>\n        </div>\n\n    </div>\n\n    <simple-notifications></simple-notifications>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/video-player/video-player.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/video-player/video-player.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsVideoPlayerVideoPlayerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <youtube-player *ngIf=\"id != ''\" [videoId]=\"id\" (ready)=\"savePlayer($event)\" (change)=\"onStateChange($event)\">\n</youtube-player> -->\n\n<div *ngIf=\"id != ''\">\n    <div class=\"video-block\">\n        <span class=\"close\" (click)='closeVideo()'>x</span>\n        <youtube-player autoplay=\"1\" [videoId]=\"id\" suggestedQuality=\"highres\" [height]=\"300\" [width]=\"450\"\n            (ready)=\"videoReady($event)\">\n        </youtube-player>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
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
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/VideoComponents/input-edit/input-edit.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/VideoComponents/input-edit/input-edit.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVideoComponentsInputEditInputEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cell {\n  border: 1px solid transparent;\n  padding: 11px 20px;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n  width: 100%;\n}\n.cell:hover {\n  cursor: pointer;\n  border: 1px dashed #c8c8c8;\n}\n.cellInput {\n  border: 2px solid transparent;\n  padding: 11px 20px;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVmlkZW9Db21wb25lbnRzL2lucHV0LWVkaXQvQzpcXFVzZXJzXFxBZGVsXFxEb2N1bWVudHNcXEdpdEh1YlxceW91dHViZS1zZWFyY2gvc3JjXFxhcHBcXFZpZGVvQ29tcG9uZW50c1xcaW5wdXQtZWRpdFxcaW5wdXQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvVmlkZW9Db21wb25lbnRzL2lucHV0LWVkaXQvaW5wdXQtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsV0FBQTtBQ0RGO0FESUU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUNGSjtBRE1BO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9WaWRlb0NvbXBvbmVudHMvaW5wdXQtZWRpdC9pbnB1dC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGxpZ2h0R3JheTogI2M4YzhjODtcclxuXHJcbi5jZWxsIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAxMXB4IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAkbGlnaHRHcmF5O1xyXG4gIH1cclxufVxyXG5cclxuLmNlbGxJbnB1dCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMTFweCAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iLCIuY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxMXB4IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2VsbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNjOGM4Yzg7XG59XG5cbi5jZWxsSW5wdXQge1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTFweCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/VideoComponents/input-edit/input-edit.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/VideoComponents/input-edit/input-edit.component.ts ***!
    \********************************************************************/

  /*! exports provided: InputEditComponent */

  /***/
  function srcAppVideoComponentsInputEditInputEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputEditComponent", function () {
      return InputEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let InputEditComponent = class InputEditComponent {
      constructor() {
        this.focusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editMode = false;
      }

      ngOnInit() {
        this.editMode = this.data == "" ? true : false;
      }

      onFocusOut() {
        this.focusOut.emit(this.data);
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], InputEditComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], InputEditComponent.prototype, "focusOut", void 0);
    InputEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-input-edit",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./input-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/VideoComponents/input-edit/input-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./input-edit.component.scss */
      "./src/app/VideoComponents/input-edit/input-edit.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], InputEditComponent);
    /***/
  },

  /***/
  "./src/app/VideoComponents/video-form/video-form.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/VideoComponents/video-form/video-form.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVideoComponentsVideoFormVideoFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1ZpZGVvQ29tcG9uZW50cy92aWRlby1mb3JtL3ZpZGVvLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/VideoComponents/video-form/video-form.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/VideoComponents/video-form/video-form.component.ts ***!
    \********************************************************************/

  /*! exports provided: VideoFormComponent */

  /***/
  function srcAppVideoComponentsVideoFormVideoFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoFormComponent", function () {
      return VideoFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var src_app_VideoStore_actions_Video_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/VideoStore/actions/Video.action */
    "./src/app/VideoStore/actions/Video.action.ts");
    /* harmony import */


    var src_app_VideoStore_states_video_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/VideoStore/states/video.state */
    "./src/app/VideoStore/states/video.state.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let VideoFormComponent = class VideoFormComponent {
      constructor(store) {
        this.store = store;
      }

      ngOnInit() {
        this.channelId.subscribe(result => {
          this.channelName = result;
        });
      }

      onSubmit() {
        this.store.dispatch(new src_app_VideoStore_actions_Video_action__WEBPACK_IMPORTED_MODULE_3__["Getvideos"](this.channelName));
      }

    };

    VideoFormComponent.ctorParameters = () => [{
      type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(src_app_VideoStore_states_video_state__WEBPACK_IMPORTED_MODULE_4__["VideoState"].getchannelName), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])], VideoFormComponent.prototype, "channelId", void 0);
    VideoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-video-form",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/VideoComponents/video-form/video-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-form.component.scss */
      "./src/app/VideoComponents/video-form/video-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], VideoFormComponent);
    /***/
  },

  /***/
  "./src/app/VideoComponents/video-item/video-item.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/VideoComponents/video-item/video-item.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVideoComponentsVideoItemVideoItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  border: 0 none;\n  border-radius: 4px;\n  box-shadow: 1px 1px 4px rgba(153, 153, 153, 0.5);\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  position: relative;\n  overflow: hidden;\n  cursor: move;\n}\n.card .play-btn {\n  position: absolute;\n  border: 0 none;\n  background-color: #3a3;\n  color: #fff;\n  bottom: -50px;\n  left: 0;\n  width: 100%;\n  z-index: 0;\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease;\n  padding: 12px;\n}\n.card:hover {\n  box-shadow: 1px 1px 6px rgba(153, 153, 153, 0.7);\n}\n.card:hover .play-btn {\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVmlkZW9Db21wb25lbnRzL3ZpZGVvLWl0ZW0vQzpcXFVzZXJzXFxBZGVsXFxEb2N1bWVudHNcXEdpdEh1YlxceW91dHViZS1zZWFyY2gvc3JjXFxhcHBcXFZpZGVvQ29tcG9uZW50c1xcdmlkZW8taXRlbVxcdmlkZW8taXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvVmlkZW9Db21wb25lbnRzL3ZpZGVvLWl0ZW0vdmlkZW8taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsYUFBQTtBQ0VKO0FEQUU7RUFDRSxnREFBQTtBQ0VKO0FEQUk7RUFDRSxTQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC9WaWRlb0NvbXBvbmVudHMvdmlkZW8taXRlbS92aWRlby1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGJvcmRlcjogMCBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKCM5OTksIDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICAucGxheS1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3R0b206IC01MHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA2cHggcmdiYSgjOTk5LCAwLjcpO1xyXG5cclxuICAgIC5wbGF5LWJ0biB7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNhcmQge1xuICBib3JkZXI6IDAgbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNSk7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IG1vdmU7XG59XG4uY2FyZCAucGxheS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMCBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzO1xuICBjb2xvcjogI2ZmZjtcbiAgYm90dG9tOiAtNTBweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgcGFkZGluZzogMTJweDtcbn1cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA2cHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjcpO1xufVxuLmNhcmQ6aG92ZXIgLnBsYXktYnRuIHtcbiAgYm90dG9tOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/VideoComponents/video-item/video-item.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/VideoComponents/video-item/video-item.component.ts ***!
    \********************************************************************/

  /*! exports provided: VideoItemComponent */

  /***/
  function srcAppVideoComponentsVideoItemVideoItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoItemComponent", function () {
      return VideoItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_VideoStore_models_Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/VideoStore/models/Video */
    "./src/app/VideoStore/models/Video.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var src_app_VideoStore_actions_Video_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/VideoStore/actions/Video.action */
    "./src/app/VideoStore/actions/Video.action.ts");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular2-notifications */
    "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");

    let VideoItemComponent = class VideoItemComponent {
      constructor(store, _notifications) {
        this.store = store;
        this._notifications = _notifications;
        this.eventOptions = {
          onUpdate: e => {}
        };
      }

      saveNote(value, video) {
        video.userNote = value;
        this.store.dispatch(new src_app_VideoStore_actions_Video_action__WEBPACK_IMPORTED_MODULE_4__["UpdateUserNote"](video));
        this.note = value;
        const types = ["alert", "error", "info", "warn", "success"];

        this._notifications.create("Note Updated!", null, angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].Info, {
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true
        });
      }

      playVideo(value, video) {
        this.store.dispatch(new src_app_VideoStore_actions_Video_action__WEBPACK_IMPORTED_MODULE_4__["PlayVideo"](video.id));
      }

      ngOnInit() {
        this.note = this.video.userNote;
      }

    };

    VideoItemComponent.ctorParameters = () => [{
      type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }, {
      type: angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_VideoStore_models_Video__WEBPACK_IMPORTED_MODULE_2__["Video"])], VideoItemComponent.prototype, "video", void 0);
    VideoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-video-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/VideoComponents/video-item/video-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-item.component.scss */
      "./src/app/VideoComponents/video-item/video-item.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"], angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]])], VideoItemComponent);
    /***/
  },

  /***/
  "./src/app/VideoComponents/video-list/video-list.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/VideoComponents/video-list/video-list.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVideoComponentsVideoListVideoListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".video-item {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVmlkZW9Db21wb25lbnRzL3ZpZGVvLWxpc3QvQzpcXFVzZXJzXFxBZGVsXFxEb2N1bWVudHNcXEdpdEh1YlxceW91dHViZS1zZWFyY2gvc3JjXFxhcHBcXFZpZGVvQ29tcG9uZW50c1xcdmlkZW8tbGlzdFxcdmlkZW8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvVmlkZW9Db21wb25lbnRzL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3REE7RUFDRSxrQkFBQTtBQ3ZERiIsImZpbGUiOiJzcmMvYXBwL1ZpZGVvQ29tcG9uZW50cy92aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudmlkZW8taXRlbSB7XHJcbi8vICAgLy90cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbi8vICAgLy8gICAmOmhvdmVyIHtcclxuLy8gICAvLyAgICAgYm9yZGVyLWNvbG9yOiAjZWVlO1xyXG4vLyAgIC8vICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xyXG4vLyAgIC8vICAgfVxyXG5cclxuLy8gICAmOm50aC1jaGlsZCgxKSB7XHJcbi8vICAgICBhbmltYXRpb246IDAuMnMgZWFzZSBzbGlkZUluRnJvbUJvdHRvbTtcclxuLy8gICB9XHJcbi8vICAgJjpudGgtY2hpbGQoMikge1xyXG4vLyAgICAgYW5pbWF0aW9uOiAwLjRzIGVhc2Ugc2xpZGVJbkZyb21Cb3R0b207XHJcbi8vICAgfVxyXG5cclxuLy8gICAmOm50aC1jaGlsZCgzKSB7XHJcbi8vICAgICBhbmltYXRpb246IDAuNnMgZWFzZSBzbGlkZUluRnJvbUJvdHRvbTtcclxuLy8gICB9XHJcblxyXG4vLyAgICY6bnRoLWNoaWxkKDQpIHtcclxuLy8gICAgIGFuaW1hdGlvbjogMC44cyBlYXNlIHNsaWRlSW5Gcm9tQm90dG9tO1xyXG4vLyAgIH1cclxuLy8gICAmOm50aC1jaGlsZCg1KSB7XHJcbi8vICAgICBhbmltYXRpb246IDFzIGVhc2Ugc2xpZGVJbkZyb21Cb3R0b207XHJcbi8vICAgfVxyXG4vLyAgICY6bnRoLWNoaWxkKDYpIHtcclxuLy8gICAgIGFuaW1hdGlvbjogMS4ycyBlYXNlIHNsaWRlSW5Gcm9tQm90dG9tO1xyXG4vLyAgIH1cclxuLy8gICAmOm50aC1jaGlsZCg3KSB7XHJcbi8vICAgICBhbmltYXRpb246IDEuNHMgZWFzZSBzbGlkZUluRnJvbUJvdHRvbTtcclxuLy8gICB9XHJcbi8vICAgJjpudGgtY2hpbGQoOCkge1xyXG4vLyAgICAgYW5pbWF0aW9uOiAxLjZzIGVhc2Ugc2xpZGVJbkZyb21Cb3R0b207XHJcbi8vICAgfVxyXG4vLyAgICY6bnRoLWNoaWxkKDkpIHtcclxuLy8gICAgIGFuaW1hdGlvbjogMS44cyBlYXNlIHNsaWRlSW5Gcm9tQm90dG9tO1xyXG4vLyAgIH1cclxuLy8gICAmOm50aC1jaGlsZCgxMCkge1xyXG4vLyAgICAgYW5pbWF0aW9uOiAycyBlYXNlIHNsaWRlSW5Gcm9tQm90dG9tO1xyXG4vLyAgIH1cclxuLy8gICAmOm50aC1jaGlsZCgxMSkge1xyXG4vLyAgICAgYW5pbWF0aW9uOiAyLjJzIGVhc2Ugc2xpZGVJbkZyb21Cb3R0b207XHJcbi8vICAgfVxyXG4vLyAgICY6bnRoLWNoaWxkKDEyKSB7XHJcbi8vICAgICBhbmltYXRpb246IDIuMnMgZWFzZSBzbGlkZUluRnJvbUJvdHRvbTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIEBrZXlmcmFtZXMgc2xpZGVJbkZyb21Cb3R0b20ge1xyXG4vLyAgIDAlIHtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4MHB4KTtcclxuLy8gICB9XHJcbi8vICAgMTAwJSB7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4udmlkZW8taXRlbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiIsIi52aWRlby1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/VideoComponents/video-list/video-list.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/VideoComponents/video-list/video-list.component.ts ***!
    \********************************************************************/

  /*! exports provided: VideoListComponent */

  /***/
  function srcAppVideoComponentsVideoListVideoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoListComponent", function () {
      return VideoListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var src_app_VideoStore_states_video_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/VideoStore/states/video.state */
    "./src/app/VideoStore/states/video.state.ts");
    /* harmony import */


    var src_app_VideoStore_actions_Video_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/VideoStore/actions/Video.action */
    "./src/app/VideoStore/actions/Video.action.ts");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular2-notifications */
    "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");

    let VideoListComponent = class VideoListComponent {
      constructor(store, _notifications) {
        this.store = store;
        this._notifications = _notifications;
        this.eventOptions = {
          animation: 600,
          onUpdate: event => {
            this.store.dispatch(new src_app_VideoStore_actions_Video_action__WEBPACK_IMPORTED_MODULE_5__["ReorderVideosList"](this.videos));

            this._notifications.create("Order Updated!", null, angular2_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationType"].Success, {
              timeOut: 5000,
              showProgressBar: true,
              pauseOnHover: true,
              clickToClose: true
            });
          }
        };
      }

      ngOnInit() {
        this.channelVideos.subscribe(val => {
          this.videos = val;
        });
      }

    };

    VideoListComponent.ctorParameters = () => [{
      type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }, {
      type: angular2_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(src_app_VideoStore_states_video_state__WEBPACK_IMPORTED_MODULE_4__["VideoState"].getvideosList), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])], VideoListComponent.prototype, "channelVideos", void 0);
    VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-video-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/VideoComponents/video-list/video-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-list.component.scss */
      "./src/app/VideoComponents/video-list/video-list.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"], angular2_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"]])], VideoListComponent);
    /***/
  },

  /***/
  "./src/app/VideoStore/actions/Video.action.ts":
  /*!****************************************************!*\
    !*** ./src/app/VideoStore/actions/Video.action.ts ***!
    \****************************************************/

  /*! exports provided: Getvideos, GetVideosList, ReorderVideosList, UpdateUserNote, PlayVideo */

  /***/
  function srcAppVideoStoreActionsVideoActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Getvideos", function () {
      return Getvideos;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetVideosList", function () {
      return GetVideosList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReorderVideosList", function () {
      return ReorderVideosList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserNote", function () {
      return UpdateUserNote;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayVideo", function () {
      return PlayVideo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Getvideos {
      constructor(payload) {
        this.payload = payload;
      }

    }

    Getvideos.type = "[Video] Get";

    class GetVideosList {
      constructor() {}

    }

    GetVideosList.type = "[Video] GetList";

    class ReorderVideosList {
      constructor(payload) {
        this.payload = payload;
      }

    }

    ReorderVideosList.type = "[Video] Reorder";

    class UpdateUserNote {
      constructor(payload) {
        this.payload = payload;
      }

    }

    UpdateUserNote.type = "[Video] update";

    class PlayVideo {
      constructor(payload) {
        this.payload = payload;
      }

    }

    PlayVideo.type = "[Video] play";
    /***/
  },

  /***/
  "./src/app/VideoStore/models/Video.ts":
  /*!********************************************!*\
    !*** ./src/app/VideoStore/models/Video.ts ***!
    \********************************************/

  /*! exports provided: Video */

  /***/
  function srcAppVideoStoreModelsVideoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Video", function () {
      return Video;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Video {}
    /***/

  },

  /***/
  "./src/app/VideoStore/service/video.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/VideoStore/service/video.service.ts ***!
    \*****************************************************/

  /*! exports provided: VideoService */

  /***/
  function srcAppVideoStoreServiceVideoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoService", function () {
      return VideoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let VideoService = class VideoService {
      constructor(http) {
        this.http = http;
        this.apiKey = "AIzaSyBEZt9r7g2awZhT5028t6JVmPwByj9BhsY";

        this.getUrl = (channelName, apiKey) => {
          //&maxResults=${20}
          return "https://www.googleapis.com/youtube/v3/search?key=".concat(apiKey, "&channelId=").concat(channelName, "&part=snippet,id&order=date&maxResults=", 50);
        };
      }

      fetchvideosByChannelId(payload) {
        return this.http.get(this.getUrl(payload, this.apiKey));
      }

    };

    VideoService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    VideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], VideoService);
    /***/
  },

  /***/
  "./src/app/VideoStore/states/video.state.ts":
  /*!**************************************************!*\
    !*** ./src/app/VideoStore/states/video.state.ts ***!
    \**************************************************/

  /*! exports provided: VideoStateModel, VideoState */

  /***/
  function srcAppVideoStoreStatesVideoStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoStateModel", function () {
      return VideoStateModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoState", function () {
      return VideoState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/Video */
    "./src/app/VideoStore/models/Video.ts");
    /* harmony import */


    var _actions_Video_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/Video.action */
    "./src/app/VideoStore/actions/Video.action.ts");
    /* harmony import */


    var _service_video_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/video.service */
    "./src/app/VideoStore/service/video.service.ts");

    class VideoStateModel {}

    let VideoState = class VideoState {
      constructor(videoService) {
        this.videoService = videoService;
      }

      static getvideosByChannelId(state) {
        return state.channelVideos;
      }

      getvideosByChannelId({
        getState,
        setState
      }, params) {
        let videoArray = [];
        return this.videoService.fetchvideosByChannelId(params.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(result => {
          result["items"].forEach(element => {
            let video = new _models_Video__WEBPACK_IMPORTED_MODULE_3__["Video"]();
            video.id = element.id.videoId;
            video.imageUrl = element.snippet.thumbnails.high.url;
            video.title = element.snippet.title;
            video.url = "https://www.youtube.com/watch?v=".concat(element.id.videoId);
            video.userNote = "";
            video.order = -9;
            video.isFavorite = false;
            videoArray.push(video);
          });
          const state = getState();
          localStorage.setItem("channelVideos", JSON.stringify(videoArray));
          localStorage.setItem("channelId", params.payload);
          setState(Object.assign({}, state, {
            channelVideos: videoArray,
            channelId: params.payload
          }));
        }));
      }

      static getvideosList(state) {
        let videos = state.channelVideos;

        if (localStorage.getItem("channelVideos") != null) {
          videos = JSON.parse(localStorage.getItem("channelVideos"));
        }

        return videos;
      }

      static getVideoToPlayId(state) {
        return state.videoToPlay;
      }

      static getchannelName(state) {
        let channelId = "";

        if (localStorage.getItem("channelId") != null) {
          channelId = localStorage.getItem("channelId");
        }

        return channelId;
      }

      getvideosList({
        getState,
        setState
      }) {
        const state = getState();
        let videos = state.channelVideos;

        if (localStorage.getItem("channelVideos") != null) {
          videos = JSON.parse(localStorage.getItem("channelVideos"));
        }

        return videos;
      }

      static reorderList(state) {
        let videos = state.channelVideos;

        if (localStorage.getItem("channelVideos") != null) {
          videos = JSON.parse(localStorage.getItem("channelVideos"));
        }

        return videos;
      }

      reorderVideosList({
        getState,
        setState
      }, params) {
        const state = getState();
        localStorage.setItem("channelVideos", JSON.stringify(params.payload));
        setState(Object.assign({}, state, {
          channelVideos: params.payload
        }));
      }

      updateUserNote({
        getState,
        setState
      }, params) {
        const state = getState();
        let videos = state.channelVideos;

        if (localStorage.getItem("channelVideos") != null) {
          videos = JSON.parse(localStorage.getItem("channelVideos"));
        }

        videos.map(vid => {
          if (vid.id == params.payload.id) {
            vid.userNote = params.payload.userNote;
          }
        });
        localStorage.setItem("channelVideos", JSON.stringify(videos));
        setState(Object.assign({}, state, {
          channelVideos: videos
        }));
      }

      playVideoById({
        getState,
        setState
      }, params) {
        const state = getState();
        setState(Object.assign({}, state, {
          videoToPlay: params.payload
        }));
      }

    };

    VideoState.ctorParameters = () => [{
      type: _service_video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_Video_action__WEBPACK_IMPORTED_MODULE_4__["Getvideos"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], VideoState.prototype, "getvideosByChannelId", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_Video_action__WEBPACK_IMPORTED_MODULE_4__["GetVideosList"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], VideoState.prototype, "getvideosList", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_Video_action__WEBPACK_IMPORTED_MODULE_4__["ReorderVideosList"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], VideoState.prototype, "reorderVideosList", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_Video_action__WEBPACK_IMPORTED_MODULE_4__["UpdateUserNote"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], VideoState.prototype, "updateUserNote", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_Video_action__WEBPACK_IMPORTED_MODULE_4__["PlayVideo"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], VideoState.prototype, "playVideoById", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [VideoStateModel]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], VideoState, "getvideosByChannelId", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [VideoStateModel]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], VideoState, "getvideosList", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [VideoStateModel]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], VideoState, "getVideoToPlayId", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [VideoStateModel]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], VideoState, "getchannelName", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [VideoStateModel]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], VideoState, "reorderList", null);
    VideoState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: "channelVideos",
      defaults: {
        videoToPlay: "",
        channelId: "",
        channelVideos: []
      }
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"]])], VideoState);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    const routes = [];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = "youtube-viewer";
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngxs/devtools-plugin */
    "./node_modules/@ngxs/devtools-plugin/fesm2015/ngxs-devtools-plugin.js");
    /* harmony import */


    var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngxs/logger-plugin */
    "./node_modules/@ngxs/logger-plugin/fesm2015/ngxs-logger-plugin.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _VideoStore_states_video_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./VideoStore/states/video.state */
    "./src/app/VideoStore/states/video.state.ts");
    /* harmony import */


    var _VideoComponents_video_form_video_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./VideoComponents/video-form/video-form.component */
    "./src/app/VideoComponents/video-form/video-form.component.ts");
    /* harmony import */


    var _VideoComponents_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./VideoComponents/video-list/video-list.component */
    "./src/app/VideoComponents/video-list/video-list.component.ts");
    /* harmony import */


    var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-sortablejs */
    "./node_modules/ngx-sortablejs/fesm2015/ngx-sortablejs.js");
    /* harmony import */


    var _VideoComponents_video_item_video_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./VideoComponents/video-item/video-item.component */
    "./src/app/VideoComponents/video-item/video-item.component.ts");
    /* harmony import */


    var _VideoComponents_input_edit_input_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./VideoComponents/input-edit/input-edit.component */
    "./src/app/VideoComponents/input-edit/input-edit.component.ts");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! angular2-notifications */
    "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/youtube-player */
    "./node_modules/@angular/youtube-player/esm2015/youtube-player.js");
    /* harmony import */


    var _components_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/video-player/video-player.component */
    "./src/app/components/video-player/video-player.component.ts"); //import { NgxYoutubePlayerModule } from "ngx-youtube-player";


    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _VideoComponents_video_form_video_form_component__WEBPACK_IMPORTED_MODULE_11__["VideoFormComponent"], _VideoComponents_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_12__["VideoListComponent"], _VideoComponents_video_item_video_item_component__WEBPACK_IMPORTED_MODULE_14__["VideoItemComponent"], _VideoComponents_input_edit_input_edit_component__WEBPACK_IMPORTED_MODULE_15__["InputEditComponent"], _components_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_20__["VideoPlayerComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forRoot([_VideoStore_states_video_state__WEBPACK_IMPORTED_MODULE_10__["VideoState"]]), _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsReduxDevtoolsPluginModule"].forRoot(), _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsLoggerPluginModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], //NgxYoutubePlayerModule.forRoot(),
      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_19__["YouTubePlayerModule"], angular2_notifications__WEBPACK_IMPORTED_MODULE_16__["SimpleNotificationsModule"].forRoot(), ngx_sortablejs__WEBPACK_IMPORTED_MODULE_13__["SortablejsModule"].forRoot({
        animation: 1000
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/video-player/video-player.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/video-player/video-player.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsVideoPlayerVideoPlayerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@-webkit-keyframes slideInFromBottom {\n  0% {\n    -webkit-transform: translateY(120px);\n            transform: translateY(120px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes slideInFromBottom {\n  0% {\n    -webkit-transform: translateY(120px);\n            transform: translateY(120px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.video-block {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 480px;\n  height: 330px;\n  padding: 15px;\n  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);\n  background-color: #222;\n  -webkit-animation: 0.2s ease slideInFromBottom;\n          animation: 0.2s ease slideInFromBottom;\n  z-index: 9999;\n  border-radius: 5px;\n}\n.video-block .close {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  color: #fff;\n  text-align: center;\n  padding-top: 6px;\n  cursor: pointer;\n  font-size: 15px;\n  line-height: 0.4;\n  background-color: red;\n  left: -7px;\n  top: -7px;\n  border-radius: 30px;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlby1wbGF5ZXIvQzpcXFVzZXJzXFxBZGVsXFxEb2N1bWVudHNcXEdpdEh1YlxceW91dHViZS1zZWFyY2gvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHZpZGVvLXBsYXllclxcdmlkZW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNDRjtFRENBO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ0NGO0FBQ0Y7QURQQTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0NGO0VEQ0E7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDQ0Y7QUFDRjtBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlkZW8tcGxheWVyL3ZpZGVvLXBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc2xpZGVJbkZyb21Cb3R0b20ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMjBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuLnZpZGVvLWJsb2NrIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiA0ODBweDtcclxuICBoZWlnaHQ6IDMzMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggcmdiYSgjMDAwLCAwLjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgYW5pbWF0aW9uOiAwLjJzIGVhc2Ugc2xpZGVJbkZyb21Cb3R0b207XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIC5jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBsZWZ0OiAtN3B4O1xyXG4gICAgdG9wOiAtN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbiIsIkBrZXlmcmFtZXMgc2xpZGVJbkZyb21Cb3R0b20ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi52aWRlby1ibG9jayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgd2lkdGg6IDQ4MHB4O1xuICBoZWlnaHQ6IDMzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIGFuaW1hdGlvbjogMC4ycyBlYXNlIHNsaWRlSW5Gcm9tQm90dG9tO1xuICB6LWluZGV4OiA5OTk5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4udmlkZW8tYmxvY2sgLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDAuNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBsZWZ0OiAtN3B4O1xuICB0b3A6IC03cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG9wYWNpdHk6IDE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/video-player/video-player.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/video-player/video-player.component.ts ***!
    \*******************************************************************/

  /*! exports provided: VideoPlayerComponent */

  /***/
  function srcAppComponentsVideoPlayerVideoPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function () {
      return VideoPlayerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_VideoStore_states_video_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/VideoStore/states/video.state */
    "./src/app/VideoStore/states/video.state.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var src_app_VideoStore_actions_Video_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/VideoStore/actions/Video.action */
    "./src/app/VideoStore/actions/Video.action.ts");

    let VideoPlayerComponent = class VideoPlayerComponent {
      constructor(_changeDetectorRef, store) {
        this._changeDetectorRef = _changeDetectorRef;
        this.store = store;
        this.id = "";
        this.videoWidth = 450;
        this.videoHeight = 300;

        this.closeVideo = () => {
          this.store.dispatch(new src_app_VideoStore_actions_Video_action__WEBPACK_IMPORTED_MODULE_4__["PlayVideo"](""));
          this.id = "";
        };
      }

      videoReady(event) {
        console.log("ready for", event.target);
        event.target.playVideo();
      }

      ngOnInit() {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api" + "?autoplay=1";
        document.body.appendChild(tag);
        this.currentVideoToPlay.subscribe(val => {
          console.log("VID NAME ", val);

          if (val != "") {
            this.id = val;
          }
        });
      }

    };

    VideoPlayerComponent.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
    }, {
      type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("demoYouTubePlayer", {
      read: true,
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], VideoPlayerComponent.prototype, "demoYouTubePlayer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(src_app_VideoStore_states_video_state__WEBPACK_IMPORTED_MODULE_2__["VideoState"].getVideoToPlayId), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], VideoPlayerComponent.prototype, "currentVideoToPlay", void 0);
    VideoPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-video-player",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-player.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/video-player/video-player.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-player.component.scss */
      "./src/app/components/video-player/video-player.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])], VideoPlayerComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Adel\Documents\GitHub\youtube-search\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map