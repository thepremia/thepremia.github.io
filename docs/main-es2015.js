(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"newsletter\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <form class=\"form-inline\" action=\"/action_page.php\">\r\n                <label for=\"email\">Newsletter </label>\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" id=\"email\">\r\n               <button type=\"submit\" class=\"btn btn-primary\"> Subscribe</button>\r\n              </form>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"contact-info\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                        <p>\r\n                            The Premia Academy<br>\r\n                            Pillar No. 102, 501 Karwan Sahu Road,<br>\r\n                            Attapur, Hyderabad, Telangana 500008\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                        <p>\r\n                            +91 9111 399 399<br>\r\n                            admissions@thepremiaacademy.com<br>\r\n                            enquiry@thepremiaacademy.com\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                        <div>\r\n                            <div class=\"social-net\">\r\n                                <ul>\r\n                                    <li><a href=\"#\">\r\n                                            The Premian story\r\n                                        </a>\r\n                                    </li>\r\n                                    <li><a href=\"#\">\r\n                                            The Study Culture\r\n                                        </a>\r\n                                    </li>\r\n                                    <li><a href=\"#\">\r\n                                            The Premian edge\r\n                                        </a>\r\n                                    </li>\r\n                                    <li><a href=\"#\">\r\n                                            Admissions\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container\">\n    <a href=\"javascript:void(0)\">\n        <img src=\"assets/images/logo.png\">\n    </a>\n    <ul class=\"navbar-nav-list\">\n      <li class=\"nav-item\" *ngFor=\"let item of list; index as i\">\n        <a routerLink=\"{{item.name}}\" routerLinkActive=\"active\"\n        skipLocationChange=true>{{item.name}}</a>\n      </li>\n    </ul>\n  </div>\n</nav> -->\n\n<header>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class=\"container\">\n    <a href=\"javascript:void(0)\">\n      <img src=\"assets/images/logo.png\">\n  </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav mr-auto navbar-nav-list\">\n        <li class=\"nav-item\" *ngFor=\"let item of list; index as i\">\n          <a routerLink=\"{{item.name}}\" routerLinkActive=\"active\"\n          skipLocationChange=true>{{item.name}}</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  </nav>\n</header>\n\n<nav class=\"navbar-vertical\">\n  <a class=\"nav-link\" (click)=\"slideToggel()\">\n    <i class=\"icon icon-small\">\n      <svg focusable=\"false\">\n        <use xlink:href=\"#icon_menu\"></use>\n      </svg>\n    </i>\n  </a> \n  \n  <div class=\"social-net\">\n\n    <ul>\n        <li><a href=\"https://www.facebook.com\" target=\"_blank\">\n                <i class=\"icon icon-ex-small\">\n                    <svg focusable=\"false\">\n                        <use xlink:href=\"#icon_facebook\"></use>\n                    </svg>\n                </i>\n                <span>Facebook</span>\n            </a>\n        </li>\n        <li><a href=\"https://www.instagram.com\" target=\"_blank\">\n                <i class=\"icon icon-ex-small\">\n                    <svg focusable=\"false\">\n                        <use xlink:href=\"#icon_instagram\"></use>\n                    </svg>\n                </i>\n                <span>Linkedin</span>\n            </a>\n        </li>\n        <li><a href=\"https://www.twitter.com\" target=\"_blank\">\n                <i class=\"icon icon-ex-small\">\n                    <svg focusable=\"false\">\n                        <use xlink:href=\"#icon_twitter\"></use>\n                    </svg>\n                </i>\n                <span>Instagram</span>\n            </a>\n        </li>\n    </ul>\n</div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-banner\">\n    <div class=\"picsum-img-wrapper\">\n       \n    </div>\n  </div>\n\n  <section class=\"section-admission\">\n    <div class=\"container\">\n        <div class=\"row\">\n        <div class=\"col-lg-3 col-md-3 col-sm-12 admission-flag\">\n            <div class=\"flag-pos\">\n                <div class=\"v-align\">\n                    <h1>Take<br>\n                        Admission<br>\n                        Now\n                        <br>\n                        <button class=\"btn btn-primary\">LEARN MORE</button></h1>\n                </div>\n                </div>\n        </div>\n\n        <ngx-slick-carousel class=\"carousel col-lg-9 col-md-9 col-sm-12\" #slickModal=\"slick-carousel\" [config]=\"admissionConfig\">\n            <div ngxSlickItem *ngFor=\"let item of admission; index as i\" class=\"slide\">\n                <div class=\"panel\">\n                    <div class=\"panel-front\">\n                        <div class=\"panel-heading\">\n                            <i class=\"icon icon-medium\">\n                                <svg focusable=\"false\">\n                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                </svg>\n                            </i>\n                             \n                                <p>{{item.description}}</p>\n                        </div>\n                     </div>\n                </div>\n            </div>\n        </ngx-slick-carousel>\n       \n    </div>\n</div>\n</section>\n  \n<section class=\"section-info\">\n    <img src=\"assets/images/1.jpg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h1>We don’t just<br>\n                    teach kids,<br>\n                    we nurture them</h1>\n             </div>\n            <div *ngFor=\"let item of solution\" class=\"col-lg-4 col-md-4 col-sm-12 panel-container\">\n                <div class=\"panel\">\n                    <div class=\"panel-front\">\n                        <div class=\"panel-heading\">\n                                <i class=\"icon icon-medium\">\n                                    <svg focusable=\"false\">\n                                        <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                    </svg>\n                                </i>\n                            <h5>{{item.title}}</h5>\n                        </div>\n                        \n                    </div>\n                    <div class=\"panel-back\">\n                        <h5>{{item.title}}</h5>\n                        <p>{{item.description}}\n                        </p>\n                     </div>\n                </div>\n            </div>\n\n        </div>      \n    </div>\n</section>\n\n<section class=\"section-nofify\">\n    <div class=\"container\">\n        <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n            <h1>What<br>\n                drives<br>\n                us?</h1>\n        </div>\n        <div *ngFor=\"let item of notify\" class=\"col-lg-4 col-md-4 col-sm-12\">\n            <div class=\"panel\">\n                <div class=\"panel-front\">\n                    <div class=\"panel-heading\">\n                            <h5>{{item.title}}</h5>\n                            <p>{{item.description}}</p>\n                    </div>\n                 </div>\n            </div>\n        </div>\n       \n    </div>\n</div>\n</section>\n<section class=\"section-curriculum\">\n    <div class=\"row-f\">\n     <div class=\"col-lg-8 col-md-8 col-sm-12 float-right p0\">\n        <img src=\"assets/images/2.jpg\">\n    </div>\n</div>\n<div class=\"clearfix\"></div>\n    <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n            <p class=\"text-highlighter\">Curriculum</p><br>\n            <p> PREMIA ADVANTAGE</p><br>\n            <p> COMMUNICATION<br>\n                AND LANGUAGE</p><br>\n            <p> PERSONAL, SOCIAL AND<br>\n                EMOTIONAL DEVELOPMENT</p><br>\n            <p> PHYSICAL DEVELOPMENT</p><br>\n        </div>\n        <div class=\"col-lg-8 col-md-8 col-sm-12 curriculum-info\">\n            <p>\n                The term curriculum refers to the lessons and academic syllabus taught in a school for students to follow,\nwhich will help them attain their goals and ambitions of life. It is an instructional and educative program\ncomprising of all the subjects to be taught during an academic year.\nAn appropriate curriculum is required to enhance the learning experiences of students. Students today\nneed a curriculum that is not only designed to achieve educational goals but also relevant to the interests\nand needs of the students to enhance their abilities to understand the world around them.\nAn integrated curriculum provides lifelong learning, creating and developing values for the development\nof students according to the changing social requirements. \n            </p>\n            <p>\n                Sustained learning and the ability to apply concepts. <br>\nFacilitate self-confidence and motivation <br>\nA deeper understanding of science and math concepts<br> \nImproved reading and writing skills <br>\nFostering positive attitudes and personal growth. <br>\nCritical thinking skills and improved quality of work. <br>\nRemarkable academic success \n            </p>\n            <button class=\"btn btn-primary\">KNOW MORE</button>\n        </div>\n    </div>\n    </div>\n    </section>\n\n\n<div class=\"clear-float\"></div>\n<section class=\"premian-league\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 center\">\n                <h1>The Premian League</h1>\n             </div>\n        </div>\n        <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\n            <div ngxSlickItem *ngFor=\"let list of premianLeague; index as i\" class=\"slide\">\n                <img src=\"assets/images/premianleague{{i+1}}.jpg\" alt=\"\" width=\"100%\">  \n                <h6>{{list.name}}</h6> \n                <p>{{list.post}}</p>\n                <p> {{list.desc}}</p>\n            </div>\n        </ngx-slick-carousel>\n    </div>\n</section>\n\n\n<section class=\"section-events\"> \n    <div class=\"container\">\n        <div class=\"events-grid\">\n            <li *ngFor=\"let info of events; index as i\" class=\"p2\">\n                <a>\n                    <figure>\n                        <img src=\"assets/images/events/event{{i + 1}}.jpg\" alt=\"Experience\">\n                        <div class=\"show-more-overlay\"></div>  \n                        <figcaption>\n                            <span class=\"show_date\">{{info.eventDate}}</span>\n                            <h2 class=\"show_more-title\">{{info.title}}</h2>\n                            <p class=\"show_more-desc\">\n                                {{info.description}}\n                            </p>\n                            <button class=\"btn btn-primary\">LEARN MORE</button>\n                        </figcaption>\n                    </figure>\n                </a>\n            </li>\n        </div>\n    </div>\n</section>\n");

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");







const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', redirectTo: '/Contactus', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  color: #000;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 14px;\n}\n\n.form-control, .btn {\n  border-radius: 0;\n}\n\n.text-highlighter {\n  color: #bf272d;\n}\n\n.bg-highlighter {\n  background: #bf272d;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.btn {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 40px;\n  font-family: \"Lora\", serif;\n}\n\nh2 {\n  font-size: 34px;\n}\n\nh3 {\n  font-size: 30px;\n}\n\nh4 {\n  font-size: 26px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n  line-height: 32px;\n}\n\nh1 {\n  font-weight: bold;\n}\n\n.center {\n  text-align: center;\n}\n\n.heading-highlight {\n  color: #f7a05c;\n}\n\n.btn {\n  padding: 8px 30px;\n}\n\nsvg {\n  vertical-align: middle;\n  margin: auto;\n  align-content: center;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n.icon-big > svg {\n  width: 100px;\n  height: 100px;\n}\n\n.icon-medium > svg {\n  width: 50px;\n  height: 50px;\n}\n\n.icon-small > svg {\n  width: 34px;\n  height: 34px;\n}\n\n.icon-ex-small > svg {\n  width: 24px;\n  height: 24px;\n}\n\n.section-admission .slick-prev:before, .section-admission .slick-next:before {\n  color: #000;\n}\n\n.section-admission .slick-prev, .section-admission .slick-next {\n  bottom: -40px;\n  top: auto;\n  right: 0;\n  left: auto !important;\n}\n\n.section-admission .slick-prev {\n  right: 25px;\n}\n\n.slick-slider {\n  width: 100%;\n  margin: auto;\n}\n\n.slick-slider .slick-slide {\n  margin: 0 15px;\n}\n\n.inner-banner {\n  margin-top: 70px;\n  position: relative;\n}\n\n.inner-banner img {\n  width: 100%;\n}\n\n.inner-banner .page-title {\n  position: absolute;\n  bottom: 60px;\n  background: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  padding: 70px 0;\n  color: #214f7a;\n}\n\ntextarea.form-control {\n  border-radius: 15px;\n  resize: none;\n}\n\nimg {\n  width: 100%;\n}\n\n@media (max-width: 576px) {\n  .main-banner, .navbar-vertical {\n    display: none;\n  }\n\n  .newsletter .btn {\n    margin: 15px 0 0 0;\n  }\n\n  .navbar-nav-list {\n    float: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXEdJVEhVQlxcYWNhZGVteS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxnQkFBQTtBQ0VEOztBRENBO0VBQ0MsY0FBQTtBQ0VEOztBREFBO0VBQ0MsbUJBQUE7QUNHRDs7QUREQTtFQUNDLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNJRDs7QURGQTtFQUNDLGlCQUFBO0FDS0Q7O0FESEE7RUFDQyxlQUFBO0VBQ0EsMEJBQUE7QUNNRDs7QURKQTtFQUNDLGVBQUE7QUNPRDs7QURMQTtFQUNDLGVBQUE7QUNRRDs7QUROQTtFQUNDLGVBQUE7QUNTRDs7QURQQTtFQUNDLGVBQUE7QUNVRDs7QURSQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ1dEOztBRFRBO0VBQ0MsaUJBQUE7QUNZRDs7QURWQTtFQUNDLGtCQUFBO0FDYUQ7O0FEWEE7RUFDSSxjQUFBO0FDY0o7O0FEWkE7RUFDSSxpQkFBQTtBQ2VKOztBRGJBO0VBQ0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNnQkQ7O0FEZEE7RUFDQyxnQkFBQTtBQ2lCRDs7QURmQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FDa0JEOztBRGhCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDbUJEOztBRGpCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDb0JEOztBRGxCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDcUJEOztBRGpCRTtFQUNBLFdBQUE7QUNvQkY7O0FEbEJDO0VBQ0MsYUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ00scUJBQUE7QUNvQlI7O0FEbEJDO0VBQ0MsV0FBQTtBQ29CRjs7QURmQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDa0JEOztBRGpCQztFQUNDLGNBQUE7QUNtQkY7O0FEZkU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDa0JKOztBRGpCSTtFQUNJLFdBQUE7QUNtQlI7O0FEakJJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNtQlI7O0FEZkE7RUFDQyxtQkFBQTtFQUNBLFlBQUE7QUNrQkQ7O0FEZkE7RUFDQyxXQUFBO0FDa0JEOztBRGZBO0VBQ0M7SUFDQyxhQUFBO0VDa0JBOztFRGZBO0lBQ0Msa0JBQUE7RUNrQkQ7O0VEZkQ7SUFDQyxXQUFBO0VDa0JBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuXHRjb2xvcjojMDAwO1xuXHRmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZToxNHB4O1xufVxuLmZvcm0tY29udHJvbCwgLmJ0bntcblx0Ym9yZGVyLXJhZGl1czogMDtcbn1cblxuLnRleHQtaGlnaGxpZ2h0ZXJ7XG5cdGNvbG9yOiNiZjI3MmQ7XG59XG4uYmctaGlnaGxpZ2h0ZXJ7XG5cdGJhY2tncm91bmQ6I2JmMjcyZDtcbn1cbnVse1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdG1hcmdpbjowO1xuXHRwYWRkaW5nOjA7XG59XG4uYnRue1xuXHRmb250LXdlaWdodDpib2xkO1xufVxuaDF7XG5cdGZvbnQtc2l6ZTo0MHB4O1xuXHRmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcbn1cbmgye1xuXHRmb250LXNpemU6MzRweDtcbn1cbmgze1xuXHRmb250LXNpemU6MzBweDtcbn1cbmg0e1xuXHRmb250LXNpemU6MjZweDtcbn1cbmg1e1xuXHRmb250LXNpemU6MjJweDtcbn1cbmg2e1xuXHRmb250LXNpemU6MThweDsgXG5cdGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuaDF7XG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4uY2VudGVye1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IFxufVx0XG4uaGVhZGluZy1oaWdobGlnaHR7XG4gICAgY29sb3I6I2Y3YTA1Yztcbn1cbi5idG57XG4gICAgcGFkZGluZzogOHB4IDMwcHg7XG59XG5zdmcge1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRtYXJnaW46IGF1dG87XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbnN2Zzpub3QoOnJvb3QpIHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pY29uLWJpZz5zdmcge1xuXHR3aWR0aDogMTAwcHg7XG5cdGhlaWdodDogMTAwcHg7XG59XG4uaWNvbi1tZWRpdW0+c3ZnIHtcblx0d2lkdGg6IDUwcHg7XG5cdGhlaWdodDogNTBweDtcbn1cbi5pY29uLXNtYWxsPnN2ZyB7XG5cdHdpZHRoOiAzNHB4O1xuXHRoZWlnaHQ6IDM0cHg7XG59XG4uaWNvbi1leC1zbWFsbD5zdmcge1xuXHR3aWR0aDogMjRweDtcblx0aGVpZ2h0OiAyNHB4O1xufVxuXG4uc2VjdGlvbi1hZG1pc3Npb257XG5cdFx0LnNsaWNrLXByZXY6YmVmb3JlLCAuc2xpY2stbmV4dDpiZWZvcmV7XG5cdFx0Y29sb3I6IzAwMDtcblx0fVxuXHQuc2xpY2stcHJldiwgLnNsaWNrLW5leHR7XG5cdFx0Ym90dG9tOi00MHB4O1xuXHRcdHRvcDphdXRvO1xuXHRcdHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG5cdH1cblx0LnNsaWNrLXByZXZ7XG5cdFx0cmlnaHQ6MjVweDtcblx0fVxufVxuXG5cbi5zbGljay1zbGlkZXIge1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiBhdXRvO1xuXHQuc2xpY2stc2xpZGV7XG5cdFx0bWFyZ2luOjAgMTVweDtcblx0fVxuICB9XG5cbiAgLmlubmVyLWJhbm5lcntcbiAgICBtYXJnaW4tdG9wOjcwcHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgICAucGFnZS10aXRsZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDYwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA3MHB4IDA7XG4gICAgICAgIGNvbG9yOiMyMTRmN2E7XG4gICAgfVxufVxuXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2x7XG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cdHJlc2l6ZTogbm9uZTtcbn1cblxuaW1ne1xuXHR3aWR0aDoxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xuXHQubWFpbi1iYW5uZXIsIC5uYXZiYXItdmVydGljYWx7XG5cdFx0ZGlzcGxheTpub25lO1xuXHR9XG5cdC5uZXdzbGV0dGVyIHtcblx0XHQuYnRue1xuXHRcdFx0bWFyZ2luOjE1cHggMCAwIDA7XG5cdFx0fVxuXHR9XG5cdC5uYXZiYXItbmF2LWxpc3R7XG5cdFx0ZmxvYXQ6IGxlZnQ7XG5cdH1cbn0iLCJib2R5IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb3JtLWNvbnRyb2wsIC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4udGV4dC1oaWdobGlnaHRlciB7XG4gIGNvbG9yOiAjYmYyNzJkO1xufVxuXG4uYmctaGlnaGxpZ2h0ZXIge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYnRuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGluZy1oaWdobGlnaHQge1xuICBjb2xvcjogI2Y3YTA1Yztcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDhweCAzMHB4O1xufVxuXG5zdmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaWNvbi1iaWcgPiBzdmcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5pY29uLW1lZGl1bSA+IHN2ZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5pY29uLXNtYWxsID4gc3ZnIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLmljb24tZXgtc21hbGwgPiBzdmcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uc2VjdGlvbi1hZG1pc3Npb24gLnNsaWNrLXByZXY6YmVmb3JlLCAuc2VjdGlvbi1hZG1pc3Npb24gLnNsaWNrLW5leHQ6YmVmb3JlIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnNsaWNrLXByZXYsIC5zZWN0aW9uLWFkbWlzc2lvbiAuc2xpY2stbmV4dCB7XG4gIGJvdHRvbTogLTQwcHg7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuc2xpY2stcHJldiB7XG4gIHJpZ2h0OiAyNXB4O1xufVxuXG4uc2xpY2stc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5zbGljay1zbGlkZXIgLnNsaWNrLXNsaWRlIHtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG5cbi5pbm5lci1iYW5uZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW5uZXItYmFubmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmlubmVyLWJhbm5lciAucGFnZS10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA3MHB4IDA7XG4gIGNvbG9yOiAjMjE0ZjdhO1xufVxuXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICByZXNpemU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1haW4tYmFubmVyLCAubmF2YmFyLXZlcnRpY2FsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm5ld3NsZXR0ZXIgLmJ0biB7XG4gICAgbWFyZ2luOiAxNXB4IDAgMCAwO1xuICB9XG5cbiAgLm5hdmJhci1uYXYtbGlzdCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'premia';
        this.router.events.subscribe(routerEvent => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (routerEvent.url === '/') {
                    this.router.navigate(['home'], { skipLocationChange: true });
                }
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  background: #172947;\n  padding: 35px 0 15px;\n}\nfooter .logo {\n  margin-bottom: 15px;\n}\nfooter a {\n  color: #dddddd;\n}\nfooter p {\n  color: #fff;\n}\nfooter address {\n  color: #dddddd;\n}\nfooter h5 {\n  color: #fff;\n}\nfooter ul.footer-li {\n  list-style: none inside;\n  margin: 0;\n  padding: 10px 0;\n  clear: both;\n}\nfooter ul.footer-li li {\n  padding: 10px 0;\n  line-height: 12px;\n}\nfooter ul.footer-li li a.active {\n  color: #f44336;\n}\nfooter .social-net {\n  padding: 0;\n}\nfooter .social-net ul {\n  list-style: none inside;\n  margin-top: 20px;\n  padding: 0;\n  float: left;\n  width: 100%;\n}\nfooter .social-net ul li {\n  float: left;\n  margin-right: 20px;\n}\nfooter .social-net ul li a {\n  color: #fff;\n  font-size: 12px;\n}\nfooter .social-net ul li svg {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n}\n.contact-info {\n  background: #e8e8e8;\n  padding: 30px 0;\n}\n.contact-info p, .contact-info a {\n  color: #000;\n  font-family: \"Quicksand\", sans-serif;\n}\n.contact-info .social-net {\n  border-left: 1px solid #ccc;\n  padding-left: 25px;\n}\n.contact-info .social-net ul {\n  padding: 0;\n  margin: 0;\n}\n.contact-info .social-net ul li {\n  list-style-type: none;\n}\n.contact-info .social-net ul li span {\n  margin-left: 15px;\n  color: #555555;\n}\n.contact-info .social-net ul li svg {\n  fill: #f7a05c;\n}\n.newsletter {\n  background: #3e65ac;\n  padding: 40px 0;\n}\n.newsletter .form-inline {\n  margin: 0 auto;\n}\n.newsletter label {\n  color: #000;\n  font-size: 20px;\n  margin-right: 15px;\n}\n.newsletter .btn {\n  background: #000;\n  color: #fff;\n  margin-left: 15px;\n  padding: 9px 15px;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n@media (max-width: 576px) {\n  .newsletter .btn {\n    margin: 15px 0 0 0;\n  }\n\n  .contact-info .social-net {\n    border: none;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Y6XFxHSVRIVUJcXGFjYWRlbXkvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQUk7RUFDSSxtQkFBQTtBQ0VSO0FEQUk7RUFDSSxjQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7QUNFUjtBREFJO0VBQ0ksY0FBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0FDRVI7QURBSTtFQUNJLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRVI7QUREUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0daO0FERGdCO0VBQ0ksY0FBQTtBQ0dwQjtBREVJO0VBQ0ksVUFBQTtBQ0FSO0FEQ1E7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ1o7QURBWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0VoQjtBRERnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDR3BCO0FERGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDR3BCO0FESUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNESjtBREVJO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0FDQVI7QURFQztFQUNPLDJCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENFO0VBQ0MsVUFBQTtFQUNBLFNBQUE7QUNDSDtBREFHO0VBQ0MscUJBQUE7QUNFSjtBRERHO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDR0w7QUREZ0I7RUFDSSxhQUFBO0FDR3BCO0FESUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNESjtBREVJO0VBQ0ksY0FBQTtBQ0FSO0FERUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQVI7QURHSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNEUjtBREtBO0VBRUU7SUFDQyxrQkFBQTtFQ0hEOztFRE9NO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUNKVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTcyOTQ3O1xyXG4gICAgcGFkZGluZzogMzVweCAwIDE1cHg7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjZGRkZGRkO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgfVxyXG4gICAgYWRkcmVzcyB7XHJcbiAgICAgICAgY29sb3I6ICNkZGRkZGQ7XHJcbiAgICB9XHJcbiAgICBoNXtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgfVxyXG4gICAgdWwuZm9vdGVyLWxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lIGluc2lkZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmNDQzMzY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLW5ldCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZSBpbnNpZGU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWN0LWluZm97XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG4gICAgcGFkZGluZzozMHB4IDA7XHJcbiAgICBwLCBhe1xyXG4gICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG5cdC5zb2NpYWwtbmV0e1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDoyNXB4O1xyXG5cdFx0dWx7XHJcblx0XHRcdHBhZGRpbmc6MDtcclxuXHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdGxpe1xyXG5cdFx0XHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRcdFx0c3BhbntcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OjE1cHg7XHJcblx0XHRcdFx0XHRjb2xvcjojNTU1NTU1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmN2EwNWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuICAgIH1cclxufVxyXG5cclxuLm5ld3NsZXR0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiMzZTY1YWM7XHJcbiAgICBwYWRkaW5nOjQwcHggMDtcclxuICAgIC5mb3JtLWlubGluZXtcclxuICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgfVxyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuXHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzAwMDtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgcGFkZGluZzo5cHggMTVweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdC5uZXdzbGV0dGVyIHtcclxuXHRcdC5idG57XHJcblx0XHRcdG1hcmdpbjoxNXB4IDAgMCAwO1xyXG5cdFx0fVxyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtaW5mbyB7XHJcbiAgICAgICAgLnNvY2lhbC1uZXR7XHJcbiAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxNzI5NDc7XG4gIHBhZGRpbmc6IDM1cHggMCAxNXB4O1xufVxuZm9vdGVyIC5sb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmZvb3RlciBhIHtcbiAgY29sb3I6ICNkZGRkZGQ7XG59XG5mb290ZXIgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZm9vdGVyIGFkZHJlc3Mge1xuICBjb2xvcjogI2RkZGRkZDtcbn1cbmZvb3RlciBoNSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZm9vdGVyIHVsLmZvb3Rlci1saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgaW5zaWRlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgY2xlYXI6IGJvdGg7XG59XG5mb290ZXIgdWwuZm9vdGVyLWxpIGxpIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cbmZvb3RlciB1bC5mb290ZXItbGkgbGkgYS5hY3RpdmUge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB7XG4gIHBhZGRpbmc6IDA7XG59XG5mb290ZXIgLnNvY2lhbC1uZXQgdWwge1xuICBsaXN0LXN0eWxlOiBub25lIGluc2lkZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9vdGVyIC5zb2NpYWwtbmV0IHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB1bCBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB1bCBsaSBzdmcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmaWxsOiAjZmZmO1xufVxuXG4uY29udGFjdC1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgcGFkZGluZzogMzBweCAwO1xufVxuLmNvbnRhY3QtaW5mbyBwLCAuY29udGFjdC1pbmZvIGEge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG59XG4uY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG4uY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQgdWwgbGkgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogIzU1NTU1NTtcbn1cbi5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQgdWwgbGkgc3ZnIHtcbiAgZmlsbDogI2Y3YTA1Yztcbn1cblxuLm5ld3NsZXR0ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xuICBwYWRkaW5nOiA0MHB4IDA7XG59XG4ubmV3c2xldHRlciAuZm9ybS1pbmxpbmUge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5uZXdzbGV0dGVyIGxhYmVsIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLm5ld3NsZXR0ZXIgLmJ0biB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgcGFkZGluZzogOXB4IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5uZXdzbGV0dGVyIC5idG4ge1xuICAgIG1hcmdpbjogMTVweCAwIDAgMDtcbiAgfVxuXG4gIC5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav.bg-light {\n  background-color: #fff !important;\n  width: 100%;\n  z-index: 9;\n  padding: 1rem;\n}\n\n.navbar-vertical {\n  position: fixed;\n  z-index: 1030;\n  width: 70px;\n  height: 100vh;\n  background-color: #f0f0f0;\n  top: 0px;\n}\n\n.navbar-vertical a {\n  margin-top: 30px;\n}\n\n.navbar-vertical .social-net {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n}\n\n.navbar-vertical .social-net li {\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  transform: rotate(180deg);\n  transform-origin: center center;\n  list-style-type: none;\n}\n\n.navbar-vertical .social-net li a {\n  display: block;\n  padding: 20px;\n  margin: 0;\n  color: #000;\n  font-size: 16px;\n}\n\n.navbar-vertical .social-net li a span {\n  margin: 10px;\n}\n\n.navbar-vertical .social-net li svg {\n  transform: rotate(90deg);\n  fill: #bf272d;\n}\n\n.navbar-nav-list {\n  float: right;\n  margin-left: auto;\n  list-style-type: none;\n  margin-bottom: 0;\n}\n\n.navbar-nav-list .nav-item {\n  font-size: 14px;\n  float: left;\n  padding: 1rem 1rem;\n}\n\n.navbar-nav-list .nav-item.active, .navbar-nav-list .nav-item:hover {\n  background: #f44336;\n}\n\n.navbar-nav-list .nav-item.active a, .navbar-nav-list .nav-item:hover a {\n  color: #fff;\n}\n\n.navbar-nav-list .nav-item.quick-link a {\n  padding-right: 0px;\n}\n\n.navbar-nav-list .nav-item a {\n  padding: 0px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #000;\n  text-decoration: none;\n}\n\n.navbar-nav-list .nav-item svg {\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n}\n\n@media (max-width: 576px) {\n  .navbar-nav-list {\n    float: left;\n    width: 100%;\n    margin-top: 30px;\n    border-top: 1px solid #ccc;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Y6XFxHSVRIVUJcXGFjYWRlbXkvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNBUjs7QURNQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7QUNISjs7QURJSTtFQUNJLGdCQUFBO0FDRlI7O0FES0k7RUFDSSxhQUFBO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtBQ0hWOztBRElRO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtBQ0ZWOztBREdTO0VBQ0csY0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNEWjs7QURFWTtFQUNJLFlBQUE7QUNBaEI7O0FER1U7RUFDSSx3QkFBQTtFQUNBLGFBQUE7QUNEZDs7QURRQTtFQUNRLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNMUjs7QURNSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNKUjs7QURLUTtFQUNJLG1CQUFBO0FDSFo7O0FESVk7RUFDSSxXQUFBO0FDRmhCOztBRFFZO0VBQ0ksa0JBQUE7QUNOaEI7O0FEU1E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDUFo7O0FEVVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDUlo7O0FEY0E7RUFDQztJQUNPLFdBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSwwQkFBQTtFQ1hOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgICAmLmJnLWxpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgIHBhZGRpbmc6MXJlbTtcbiAgICB9XG4gICBcbn1cblxuXG4ubmF2YmFyLXZlcnRpY2FsIHtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICB6LWluZGV4OiAxMDMwO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICB0b3A6IDBweDtcbiAgICBhe1xuICAgICAgICBtYXJnaW4tdG9wOjMwcHg7IFxuICAgIH1cbiAgICBcbiAgICAuc29jaWFsLW5ldCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBsaSB7XG4gICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcbiAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgY29sb3I6IzAwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBtYXJnaW46MTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc3Zne1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICAgIGZpbGw6I2JmMjcyZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbn1cblxuLm5hdmJhci1uYXYtbGlzdHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIC5uYXYtaXRlbXtcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XG4gICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgIHBhZGRpbmc6MXJlbSAxcmVtO1xuICAgICAgICAmLmFjdGl2ZSwgJjpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2Y0NDMzNjtcbiAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgJi5xdWljay1saW5re1xuICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhe1xuICAgICAgICAgICAgcGFkZGluZzowcHg7XG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgICAgICBjb2xvcjojMDAwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgc3Zne1xuICAgICAgICAgICAgd2lkdGg6MjBweDtcbiAgICAgICAgICAgIGhlaWdodDoyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcbiAgICAgICAgIH1cblxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcblx0Lm5hdmJhci1uYXYtbGlzdHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNjY2M7XG5cdH1cbn1cbiIsIm5hdi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5uYXZiYXItdmVydGljYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMzA7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICB0b3A6IDBweDtcbn1cbi5uYXZiYXItdmVydGljYWwgYSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ubmF2YmFyLXZlcnRpY2FsIC5zb2NpYWwtbmV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5uYXZiYXItdmVydGljYWwgLnNvY2lhbC1uZXQgbGkge1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4ubmF2YmFyLXZlcnRpY2FsIC5zb2NpYWwtbmV0IGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm5hdmJhci12ZXJ0aWNhbCAuc29jaWFsLW5ldCBsaSBhIHNwYW4ge1xuICBtYXJnaW46IDEwcHg7XG59XG4ubmF2YmFyLXZlcnRpY2FsIC5zb2NpYWwtbmV0IGxpIHN2ZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgZmlsbDogI2JmMjcyZDtcbn1cblxuLm5hdmJhci1uYXYtbGlzdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0uYWN0aXZlLCAubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNDQzMzY7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbS5hY3RpdmUgYSwgLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW06aG92ZXIgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0ucXVpY2stbGluayBhIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gYSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm5hdmJhci1uYXYtbGlzdCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let HeaderComponent = class HeaderComponent {
    constructor() {
        this.showNavigationIndicators = false;
        this.showNavigationArrows = false;
        this.slideConfig = {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        this.banner = [
            {
                img: 'assets/images/banner',
                title: 'WE SPECIALIZE IN IMPROVING',
                title_2: 'OPERATIONAL PERFORMANCE AND IT DELIVERY.',
                description: 'We do this by improving the way our clients use people, processes and technologies. Here is the place to envision, discover and fulfil your technology needs.'
            },
        ];
        this.isOpen = true;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.list = [
            { name: 'ThePremianStory' },
            { name: 'TheStudyCulture' },
            { name: 'ThePremianEdge' },
            { name: 'Admissions' },
            { name: 'Apply' },
            { name: 'ENG' }
        ];
    }
    slideToggel() {
        this.isOpen = !this.isOpen;
    }
    ngOnInit() {
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', { static: true })
], HeaderComponent.prototype, "carousel", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-about, .section-nofify, .premian-league, .section-events, .section-spacing {\n  padding: 70px 0;\n}\n.section-about h1, .section-nofify h1, .premian-league h1, .section-events h1, .section-spacing h1 {\n  margin-bottom: 40px;\n}\n.section-info {\n  position: relative;\n  overflow: hidden;\n  padding: 50px 0;\n}\n.section-info img {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.section-info h1 {\n  margin-bottom: 40px;\n}\n.section-info h1, .section-info p {\n  color: #fff;\n}\n.section-info svg {\n  fill: #fff;\n}\n.v-align {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 15px 0;\n}\n.section-admission .admission-flag {\n  position: relative;\n  text-align: center;\n  color: #fff;\n  padding: 25px 0;\n  height: 250px;\n}\n.section-admission .admission-flag .flag-pos {\n  content: \"\";\n  background: #bf272d;\n  position: absolute;\n  top: -25px;\n  left: -45px;\n  width: 100%;\n  height: 300px;\n  z-index: 1;\n  box-shadow: 7px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.section-admission .admission-flag .btn {\n  border: 1px solid #fff;\n  color: #fff;\n  background: none;\n}\n.section-admission p {\n  white-space: pre;\n  margin-top: 15px;\n}\n.section-curriculum .row-f {\n  float: left;\n  width: 100%;\n}\n.section-curriculum .row-f .p0 {\n  padding: 0px;\n}\n.section-curriculum .curriculum-info {\n  margin-top: -50px;\n  background: #000;\n  padding: 30px;\n  color: #fff;\n  font-family: \"Lora\", serif;\n  font-size: 16px;\n}\n.section-curriculum .curriculum-info .btn {\n  background: #fff;\n  color: #000;\n  float: right;\n  font-family: \"Lora\", serif;\n}\n.section-curriculum p + p {\n  font-size: 20px;\n}\n.section-events {\n  position: relative;\n  display: table;\n  width: 75%;\n  margin: 0 auto;\n}\n.section-events h6 {\n  margin: 35px 0 40px;\n}\n.section-events .events-grid li {\n  width: 50%;\n  float: left;\n  list-style-type: none;\n}\n.section-events .events-grid li figure {\n  margin: 0 0 10px 0;\n}\n.section-events .events-grid li:nth-child(4) figure, .section-events .events-grid li:nth-child(5) figure {\n  margin: 0;\n}\n.section-events .events-grid button {\n  background: none;\n  border: 2px solid #fff;\n}\n.section-events .p1 {\n  padding: 1px;\n}\n.section-events figure {\n  position: relative;\n  float: left;\n  overflow: hidden;\n  width: calc(100% - 10px);\n  background-color: #fff;\n  margin: 0;\n  cursor: pointer;\n}\n.section-events figure img {\n  position: relative;\n  display: block;\n  transform: scale(1);\n  transition: 0.5s ease-in-out;\n  max-width: 100%;\n  height: auto;\n}\n.section-events figure .show-more-overlay {\n  background: rgba(0, 0, 0, 0) linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.2) 23%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 68%, rgba(0, 0, 0, 0) 81%, rgba(0, 0, 0, 0) 92%, rgba(0, 0, 0, 0) 100%) repeat scroll 0 0;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translateY(100%);\n  transition: all 0.5s ease 0s;\n}\n.section-events figure figcaption {\n  webkit-backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  bottom: 0px;\n  left: 20px;\n  right: 20px;\n  max-height: 60px;\n  transition: 0.5s ease-in-out;\n  z-index: 2;\n}\n.section-events figure .show_date {\n  color: #fff;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n.section-events figure .show_more-title {\n  color: #fff;\n  font-size: 21px;\n  line-height: 30px;\n  font-weight: 700;\n  margin-bottom: 10px;\n  font-family: \"Lora\", serif;\n}\n.section-events figure .show_more-desc {\n  color: #fff;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 300;\n  padding-top: 15px;\n  position: relative;\n}\n.section-events figure .show_more-desc::after {\n  content: \"\";\n  background: #fff;\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 50px;\n  height: 3px;\n  z-index: 1;\n}\n.section-events figure::after {\n  content: \"\";\n  background: rgba(0, 0, 0, 0.3);\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.section-events figure:hover img {\n  transform: scale(1.1);\n}\n.section-events figure:hover .show-more-overlay {\n  background: rgba(0, 0, 0, 0) linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.2) 100%) repeat scroll 0 0;\n  transform: translateY(0px);\n}\n.section-events figure:hover figcaption {\n  height: auto;\n  max-height: 250px;\n  bottom: 50px;\n}\n.premian-league {\n  background-color: rgba(247, 247, 247, 0.5);\n}\n.premian-league .slick-slide img {\n  width: 100%;\n}\n.premian-league .slick-slide h6 {\n  margin-bottom: 0;\n  margin-top: 15px;\n  line-height: 18px;\n  font-weight: bold;\n}\n.premian-league .slick-slide p {\n  white-space: pre;\n}\n.clear-float {\n  clear: both;\n  float: none;\n}\n.main-banner {\n  height: 500px;\n}\n.picsum-img-wrapper {\n  background-image: url('banner1.jpg');\n  background-color: #cccccc;\n  height: 500px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n@media (max-width: 576px) {\n  .section-admission .admission-flag .flag-pos {\n    top: 0;\n    left: 0;\n    height: auto;\n  }\n\n  .section-curriculum .curriculum-info {\n    margin-top: 0px;\n  }\n\n  .section-info {\n    padding-bottom: 0px;\n  }\n  .section-info img {\n    width: auto;\n    height: 100%;\n  }\n  .section-info .panel-container {\n    padding-bottom: 15px;\n    margin-bottom: 30px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  .section-info .panel-container:last-child {\n    margin-bottom: 0;\n    border-bottom: 0;\n  }\n\n  .section-events {\n    width: 100%;\n  }\n  .section-events .events-grid li {\n    width: 100%;\n  }\n  .section-events .events-grid li figure {\n    width: 100%;\n    margin: 0 0 15px 0;\n  }\n\n  .section-curriculum .row-f {\n    margin-bottom: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcR0lUSFVCXFxhY2FkZW15L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0FDQ0Q7QURBQztFQUNDLG1CQUFBO0FDRUY7QURHQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUQ7QURDQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDQ0Y7QURDQztFQUNDLG1CQUFBO0FDQ0Y7QURDQztFQUNDLFdBQUE7QUNDRjtBRENDO0VBQ0MsVUFBQTtBQ0NGO0FER0E7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQUQ7QURJQztFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNERjtBREVFO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLCtDQUFBO0FDQUg7QURFUTtFQUNMLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQUg7QURHQztFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBRE9DO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNKRjtBREtFO0VBQ0MsWUFBQTtBQ0hIO0FET0M7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNMRjtBRE1FO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDSkg7QURPQztFQUNDLGVBQUE7QUNMRjtBRFFBO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNMRDtBRE1DO0VBQ0MsbUJBQUE7QUNKRjtBRE9FO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0xIO0FETUc7RUFDQyxrQkFBQTtBQ0pKO0FEUUk7RUFDQyxTQUFBO0FDTkw7QURVRTtFQUNDLGdCQUFBO0VBQ0Esc0JBQUE7QUNSSDtBRFdDO0VBQ0MsWUFBQTtBQ1RGO0FEV0M7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ1RGO0FEVUU7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFFQSxtQkFBQTtFQUVBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNSSDtBRFVFO0VBQ0MscU5BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDUkg7QURXRTtFQUNDLGtDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSw0QkFBQTtFQUNBLFVBQUE7QUNUSDtBRFdFO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1RIO0FEV0U7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDVEg7QURZRTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNWSDtBRFdHO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ1RKO0FEV0U7RUFDQyxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDVEg7QURZRztFQUVDLHFCQUFBO0FDVko7QURZRztFQUVDLHVHQUFBO0VBQ0EsMEJBQUE7QUNYSjtBRGFHO0VBRUMsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1pKO0FEbUJBO0VBQ0MsMENBQUE7QUNoQkQ7QURrQkU7RUFDRSxXQUFBO0FDaEJKO0FEa0JFO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNoQkg7QURrQkU7RUFDQyxnQkFBQTtBQ2hCSDtBRHFCQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDbEJEO0FEb0JBO0VBQ0MsYUFBQTtBQ2pCRDtBRG1CQTtFQUNDLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNoQkQ7QURtQkE7RUFHRztJQUNDLE1BQUE7SUFDQSxPQUFBO0lBQ0EsWUFBQTtFQ2xCRjs7RUR3QkE7SUFDQyxlQUFBO0VDckJEOztFRHlCRDtJQUNDLG1CQUFBO0VDdEJBO0VEdUJBO0lBQ0MsV0FBQTtJQUNBLFlBQUE7RUNyQkQ7RUR1QkE7SUFDQyxvQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaURBQUE7RUNyQkQ7RURzQkM7SUFDQyxnQkFBQTtJQUNBLGdCQUFBO0VDcEJGOztFRHlCRDtJQUNDLFdBQUE7RUN0QkE7RUR3QkM7SUFDQyxXQUFBO0VDdEJGO0VEdUJFO0lBQ0MsV0FBQTtJQUNBLGtCQUFBO0VDckJIOztFRDRCQTtJQUNDLG1CQUFBO0VDekJEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1hYm91dCwgLnNlY3Rpb24tbm9maWZ5LCAucHJlbWlhbi1sZWFndWUsIC5zZWN0aW9uLWV2ZW50cywgLnNlY3Rpb24tc3BhY2luZ3tcblx0cGFkZGluZzo3MHB4IDA7XG5cdGgxe1xuXHRcdG1hcmdpbi1ib3R0b206NDBweDtcblx0fVxufVxuXG5cbi5zZWN0aW9uLWluZm97XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6aGlkZGVuO1xuXHRwYWRkaW5nOjUwcHggMDtcblx0aW1ne1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0fVxuXHRoMXtcblx0XHRtYXJnaW4tYm90dG9tOjQwcHg7XG5cdH1cblx0aDEsIHB7XG5cdFx0Y29sb3I6I2ZmZjtcblx0fVxuXHRzdmd7XG5cdFx0ZmlsbDojZmZmO1xuXHR9XG59XG5cbi52LWFsaWdue1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0aGVpZ2h0OjEwMCU7XG5cdHBhZGRpbmc6MTVweCAwO1xufVxuXG4uc2VjdGlvbi1hZG1pc3Npb257XG5cdC5hZG1pc3Npb24tZmxhZ3tcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0XHRjb2xvcjojZmZmO1xuXHRcdHBhZGRpbmc6MjVweCAwO1xuXHRcdGhlaWdodDoyNTBweDtcblx0XHQuZmxhZy1wb3N7XG5cdFx0XHRjb250ZW50OicnO1xuXHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAtMjVweDtcblx0XHRcdGxlZnQ6IC00NXB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdFx0ei1pbmRleDogMTtcblx0XHRcdGJveC1zaGFkb3c6IDdweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuXHRcdH1cbiAgICAgICAgLmJ0bntcblx0XHRcdGJvcmRlcjoxcHggc29saWQgI2ZmZjtcblx0XHRcdGNvbG9yOiNmZmY7XG5cdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XG5cdFx0fVxuXHR9XG5cdHB7XG5cdFx0d2hpdGUtc3BhY2U6IHByZTtcblx0XHRtYXJnaW4tdG9wOjE1cHg7XG5cdH1cblxufVxuXG4uc2VjdGlvbi1jdXJyaWN1bHVte1xuXHQucm93LWZ7XG5cdFx0ZmxvYXQ6bGVmdDtcblx0XHR3aWR0aDoxMDAlO1xuXHRcdC5wMHtcblx0XHRcdHBhZGRpbmc6MHB4O1xuXHRcdH1cblx0fVxuXHRcblx0LmN1cnJpY3VsdW0taW5mb3tcblx0XHRtYXJnaW4tdG9wOi01MHB4O1xuXHRcdGJhY2tncm91bmQ6IzAwMDtcblx0XHRwYWRkaW5nOjMwcHg7XG5cdFx0Y29sb3I6I2ZmZjtcblx0XHRmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuXHRcdGZvbnQtc2l6ZToxNnB4O1xuXHRcdC5idG57XG5cdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XG5cdFx0XHRjb2xvcjojMDAwO1xuXHRcdFx0ZmxvYXQ6cmlnaHQ7XG5cdFx0XHRmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuXHRcdH1cblx0fVxuXHRwICsgcHtcblx0XHRmb250LXNpemU6MjBweDtcblx0fVxufVxuLnNlY3Rpb24tZXZlbnRzIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiB0YWJsZTtcblx0d2lkdGg6IDc1JTtcblx0bWFyZ2luOjAgYXV0bztcblx0aDZ7XG5cdFx0bWFyZ2luOiAzNXB4IDAgNDBweDtcblx0fVxuXHQuZXZlbnRzLWdyaWR7XG5cdFx0bGl7XG5cdFx0XHR3aWR0aDo1MCU7XG5cdFx0XHRmbG9hdDpsZWZ0O1xuXHRcdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRcdFx0ZmlndXJle1xuXHRcdFx0XHRtYXJnaW46MCAwIDEwcHggMDtcblx0XHRcdH1cblx0XHRcblx0XHRcdCY6bnRoLWNoaWxkKDQpLCAmOm50aC1jaGlsZCg1KXtcblx0XHRcdFx0ZmlndXJle1xuXHRcdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGJ1dHRvbntcblx0XHRcdGJhY2tncm91bmQ6bm9uZTtcblx0XHRcdGJvcmRlcjoycHggc29saWQgI2ZmZjtcblx0XHR9XG5cdH1cblx0LnAxe1xuXHRcdHBhZGRpbmc6MXB4O1xuXHR9XG5cdGZpZ3VyZSB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0bWFyZ2luOjA7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdGltZyB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcblx0XHRcdHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcblx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogYXV0bztcblx0XHR9XG5cdFx0LnNob3ctbW9yZS1vdmVybGF5IHtcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjIpIDIzJSwgcmdiYSgwLCAwLCAwLCAwKSA0MCUsIHJnYmEoMCwgMCwgMCwgMCkgNjglLCByZ2JhKDAsIDAsIDAsIDApIDgxJSwgcmdiYSgwLCAwLCAwLCAwKSA5MiUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSkgcmVwZWF0IHNjcm9sbCAwIDA7XG5cdFx0XHRib3R0b206IDA7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xuXHRcdH1cblx0XHRcblx0XHRmaWdjYXB0aW9uIHtcblx0XHRcdHdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0XHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRib3R0b206IDBweDtcblx0XHRcdGxlZnQ6IDIwcHg7XG5cdFx0XHRyaWdodDogMjBweDtcblx0XHRcdG1heC1oZWlnaHQ6IDYwcHg7XG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcblx0XHRcdHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcblx0XHRcdHotaW5kZXg6IDI7XG5cdFx0fVxuXHRcdC5zaG93X2RhdGV7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0fVxuXHRcdC5zaG93X21vcmUtdGl0bGUge1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRmb250LXNpemU6IDIxcHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMzBweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdFx0Zm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcblx0XHRcdFxuXHRcdH1cblx0XHQuc2hvd19tb3JlLWRlc2Mge1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMThweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRwYWRkaW5nLXRvcDoxNXB4O1xuXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XG5cdFx0XHQmOjphZnRlcntcblx0XHRcdFx0Y29udGVudDonJztcblx0XHRcdFx0YmFja2dyb3VuZDojZmZmO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0d2lkdGg6IDUwcHg7XG5cdFx0XHRcdGhlaWdodDozcHg7XG5cdFx0XHRcdHotaW5kZXg6IDE7fVxuXHRcdH1cblx0XHQmOjphZnRlcntcblx0XHRcdGNvbnRlbnQ6Jyc7XG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdFx0XHRib3R0b206IDA7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6MTAwJTtcblx0XHRcdHotaW5kZXg6IDE7XG5cdFx0fVxuXHRcdCY6aG92ZXJ7XG5cdFx0XHRpbWd7XG5cdFx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuXHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG5cdFx0XHR9XG5cdFx0XHQuc2hvdy1tb3JlLW92ZXJsYXlcblx0XHRcdHtcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuMikgMTAwJSkgcmVwZWF0IHNjcm9sbCAwIDA7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuXHRcdFx0fVxuXHRcdFx0ZmlnY2FwdGlvblxuXHRcdFx0e1xuXHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdG1heC1oZWlnaHQ6IDI1MHB4O1xuXHRcdFx0XHRib3R0b206IDUwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cblxuLnByZW1pYW4tbGVhZ3Vle1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ3LCAyNDcsIC41KTtcblx0LnNsaWNrLXNsaWRle1xuXHRcdGltZ3tcblx0XHQgIHdpZHRoOiAxMDAlO1xuXHRcdH1cblx0XHRoNntcblx0XHRcdG1hcmdpbi1ib3R0b206MDtcblx0XHRcdG1hcmdpbi10b3A6MTVweDtcblx0XHRcdGxpbmUtaGVpZ2h0OjE4cHg7XG5cdFx0XHRmb250LXdlaWdodDpib2xkO1xuXHRcdH1cblx0XHRwe1xuXHRcdFx0d2hpdGUtc3BhY2U6IHByZTtcblx0XHR9XG5cdH1cbn1cblxuLmNsZWFyLWZsb2F0e1xuXHRjbGVhcjpib3RoO1xuXHRmbG9hdDpub25lO1xufVxuLm1haW4tYmFubmVye1xuXHRoZWlnaHQ6IDUwMHB4O1x0XG59XG4ucGljc3VtLWltZy13cmFwcGVye1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2Jhbm5lcjEuanBnXCIpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuXHRoZWlnaHQ6IDUwMHB4O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcblx0LnNlY3Rpb24tYWRtaXNzaW9ue1xuXHRcdC5hZG1pc3Npb24tZmxhZ3tcblx0XHRcdC5mbGFnLXBvc3tcblx0XHRcdFx0dG9wOjA7XG5cdFx0XHRcdGxlZnQ6MDtcblx0XHRcdFx0aGVpZ2h0OmF1dG87XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LnNlY3Rpb24tY3VycmljdWx1bSB7XG5cdFx0LmN1cnJpY3VsdW0taW5mb3tcblx0XHRcdG1hcmdpbi10b3A6MHB4O1xuXHRcdH1cblx0fVxuXG5cdC5zZWN0aW9uLWluZm97XG5cdFx0cGFkZGluZy1ib3R0b206MHB4O1xuXHRcdGltZ3tcblx0XHRcdHdpZHRoOmF1dG87XG5cdFx0XHRoZWlnaHQ6MTAwJTtcblx0XHR9XG5cdFx0LnBhbmVsLWNvbnRhaW5lcntcblx0XHRcdHBhZGRpbmctYm90dG9tOjE1cHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOjMwcHg7XG5cdFx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG5cdFx0XHQmOmxhc3QtY2hpbGR7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206MDtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTowO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5zZWN0aW9uLWV2ZW50c3tcblx0XHR3aWR0aDoxMDAlO1xuXHRcdC5ldmVudHMtZ3JpZHtcblx0XHRcdGxpe1xuXHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XHRmaWd1cmV7XG5cdFx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0XHRtYXJnaW46MCAwIDE1cHggMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5zZWN0aW9uLWN1cnJpY3VsdW0ge1xuXHRcdC5yb3ctZntcblx0XHRcdG1hcmdpbi1ib3R0b206MzBweDtcblx0XHR9XG5cdH1cbn0iLCIuc2VjdGlvbi1hYm91dCwgLnNlY3Rpb24tbm9maWZ5LCAucHJlbWlhbi1sZWFndWUsIC5zZWN0aW9uLWV2ZW50cywgLnNlY3Rpb24tc3BhY2luZyB7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cbi5zZWN0aW9uLWFib3V0IGgxLCAuc2VjdGlvbi1ub2ZpZnkgaDEsIC5wcmVtaWFuLWxlYWd1ZSBoMSwgLnNlY3Rpb24tZXZlbnRzIGgxLCAuc2VjdGlvbi1zcGFjaW5nIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnNlY3Rpb24taW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuLnNlY3Rpb24taW5mbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4uc2VjdGlvbi1pbmZvIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5zZWN0aW9uLWluZm8gaDEsIC5zZWN0aW9uLWluZm8gcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlY3Rpb24taW5mbyBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuXG4udi1hbGlnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cblxuLnNlY3Rpb24tYWRtaXNzaW9uIC5hZG1pc3Npb24tZmxhZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjVweCAwO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5hZG1pc3Npb24tZmxhZyAuZmxhZy1wb3Mge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI1cHg7XG4gIGxlZnQ6IC00NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogN3B4IDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmFkbWlzc2lvbi1mbGFnIC5idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiBwIHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnNlY3Rpb24tY3VycmljdWx1bSAucm93LWYge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5yb3ctZiAucDAge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLWluZm8ge1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLmN1cnJpY3VsdW0taW5mbyAuYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gcCArIHAge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zZWN0aW9uLWV2ZW50cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnNlY3Rpb24tZXZlbnRzIGg2IHtcbiAgbWFyZ2luOiAzNXB4IDAgNDBweDtcbn1cbi5zZWN0aW9uLWV2ZW50cyAuZXZlbnRzLWdyaWQgbGkge1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnNlY3Rpb24tZXZlbnRzIC5ldmVudHMtZ3JpZCBsaSBmaWd1cmUge1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG4uc2VjdGlvbi1ldmVudHMgLmV2ZW50cy1ncmlkIGxpOm50aC1jaGlsZCg0KSBmaWd1cmUsIC5zZWN0aW9uLWV2ZW50cyAuZXZlbnRzLWdyaWQgbGk6bnRoLWNoaWxkKDUpIGZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbn1cbi5zZWN0aW9uLWV2ZW50cyAuZXZlbnRzLWdyaWQgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbn1cbi5zZWN0aW9uLWV2ZW50cyAucDEge1xuICBwYWRkaW5nOiAxcHg7XG59XG4uc2VjdGlvbi1ldmVudHMgZmlndXJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWN0aW9uLWV2ZW50cyBmaWd1cmUgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnNlY3Rpb24tZXZlbnRzIGZpZ3VyZSAuc2hvdy1tb3JlLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIGxpbmVhci1ncmFkaWVudCgwZGVnLCBibGFjayAwJSwgcmdiYSgwLCAwLCAwLCAwLjIpIDIzJSwgcmdiYSgwLCAwLCAwLCAwKSA0MCUsIHJnYmEoMCwgMCwgMCwgMCkgNjglLCByZ2JhKDAsIDAsIDAsIDApIDgxJSwgcmdiYSgwLCAwLCAwLCAwKSA5MiUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSkgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XG59XG4uc2VjdGlvbi1ldmVudHMgZmlndXJlIGZpZ2NhcHRpb24ge1xuICB3ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDI7XG59XG4uc2VjdGlvbi1ldmVudHMgZmlndXJlIC5zaG93X2RhdGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNlY3Rpb24tZXZlbnRzIGZpZ3VyZSAuc2hvd19tb3JlLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG59XG4uc2VjdGlvbi1ldmVudHMgZmlndXJlIC5zaG93X21vcmUtZGVzYyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24tZXZlbnRzIGZpZ3VyZSAuc2hvd19tb3JlLWRlc2M6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgei1pbmRleDogMTtcbn1cbi5zZWN0aW9uLWV2ZW50cyBmaWd1cmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cbi5zZWN0aW9uLWV2ZW50cyBmaWd1cmU6aG92ZXIgaW1nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5zZWN0aW9uLWV2ZW50cyBmaWd1cmU6aG92ZXIgLnNob3ctbW9yZS1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBsaW5lYXItZ3JhZGllbnQoMGRlZywgYmxhY2sgMCUsIHJnYmEoMCwgMCwgMCwgMC4yKSAxMDAlKSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG59XG4uc2VjdGlvbi1ldmVudHMgZmlndXJlOmhvdmVyIGZpZ2NhcHRpb24ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICBib3R0b206IDUwcHg7XG59XG5cbi5wcmVtaWFuLWxlYWd1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDcsIDI0NywgMC41KTtcbn1cbi5wcmVtaWFuLWxlYWd1ZSAuc2xpY2stc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJlbWlhbi1sZWFndWUgLnNsaWNrLXNsaWRlIGg2IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByZW1pYW4tbGVhZ3VlIC5zbGljay1zbGlkZSBwIHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbn1cblxuLmNsZWFyLWZsb2F0IHtcbiAgY2xlYXI6IGJvdGg7XG4gIGZsb2F0OiBub25lO1xufVxuXG4ubWFpbi1iYW5uZXIge1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4ucGljc3VtLWltZy13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIxLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdGlvbi1hZG1pc3Npb24gLmFkbWlzc2lvbi1mbGFnIC5mbGFnLXBvcyB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnNlY3Rpb24tY3VycmljdWx1bSAuY3VycmljdWx1bS1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAuc2VjdGlvbi1pbmZvIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG4gIC5zZWN0aW9uLWluZm8gaW1nIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24taW5mbyAucGFuZWwtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgLnNlY3Rpb24taW5mbyAucGFuZWwtY29udGFpbmVyOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5zZWN0aW9uLWV2ZW50cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24tZXZlbnRzIC5ldmVudHMtZ3JpZCBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24tZXZlbnRzIC5ldmVudHMtZ3JpZCBsaSBmaWd1cmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgfVxuXG4gIC5zZWN0aW9uLWN1cnJpY3VsdW0gLnJvdy1mIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let HomeComponent = class HomeComponent {
    constructor() {
        this.slideConfig = {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        this.admissionConfig = {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        this.events = [
            {
                eventDate: 'february 6, 2020',
                title: 'CIS events and school visits impacted by Coronavirus',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                eventDate: 'february 6, 2020',
                title: 'CIS events and school visits impacted by Coronavirus',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                eventDate: 'february 6, 2020',
                title: 'CIS events and school visits impacted by Coronavirus',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                eventDate: 'february 6, 2020',
                title: 'CIS events and school visits impacted by Coronavirus',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            }
        ];
        this.admission = [
            {
                icon: '#icon_softEngg',
                description: `Sculpting
Young
Learners`,
            },
            {
                icon: '#icon_softEngg',
                description: `Imparting
Holistic
Education`,
            },
            {
                icon: '#icon_softEngg',
                description: `Nurturing a
Progressive
Mindset`,
            },
            {
                icon: '#icon_softEngg',
                description: `Sculpting
Young
Learners`,
            },
            {
                icon: '#icon_softEngg',
                description: `Imparting
Holistic
Education`,
            },
            {
                icon: '#icon_softEngg',
                description: `Nurturing a
Progressive
Mindset`,
            },
        ];
        this.notify = [
            {
                title: 'Vision',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            },
            {
                title: 'Mission',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            },
        ];
        this.solution = [
            {
                description: `Comprehensive Development`,
                icon: '#icon_mgmt'
            },
            {
                description: `Communication and
      vocational training`,
                icon: '#icon_softEngg'
            },
            {
                description: `Performing arts`,
                icon: '#icon_training'
            },
            {
                description: `Sports`,
                icon: '#icon_mgmt'
            },
            {
                description: `Health and Fitness`,
                icon: '#icon_softEngg'
            },
            {
                description: `Emotional Development`,
                icon: '#icon_training'
            },
        ];
        // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.premianLeague = [
            {
                name: 'SHRI PRADEEP REDDY',
                post: 'SOCIETY PRESIDENT',
                desc: `IITian
Renowned
Business Icon`
            },
            {
                name: 'MS. TRUPTI RAO',
                post: 'PRINCIPAL',
                desc: `Educator, Teacher, Achiever
 21+ Years of experience
19 years at Meridian`
            },
            {
                name: 'MS. MALINI PAUL',
                post: 'HEADMISTRESS',
                desc: `Facilitator, Visionary,
educationist
30+ Years of
experience`
            },
            {
                name: 'SHRI PRADEEP REDDY',
                post: 'SOCIETY PRESIDENT',
                desc: `IITian
Renowned
Business Icon`
            },
            {
                name: 'MS. TRUPTI RAO',
                post: 'PRINCIPAL',
                desc: `Educator, Teacher, Achiever
21+ Years of experience
19 years at Meridian`
            },
            {
                name: 'MS. MALINI PAUL',
                post: 'HEADMISTRESS',
                desc: `Facilitator, Visionary,
educationist
30+ Years of
experience`
            },
        ];
        this.gallery = [
            { class: 'col-lg-5 col-md-5', description: 'consectetur adipiscing elit' },
            { class: 'col-lg-7 col-md-7', description: 'consectetur adipiscing elit' },
            { class: 'col-lg-6 col-md-6', description: 'consectetur adipiscing elit' },
            { class: 'col-lg-6 col-md-6', description: 'consectetur adipiscing elit' },
            { class: 'col-lg-5 col-md-5', description: 'consectetur adipiscing elit' },
            { class: 'col-lg-7 col-md-7', description: 'consectetur adipiscing elit' }
        ];
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', { static: true })
], HomeComponent.prototype, "carousel", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\GITHUB\academy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map