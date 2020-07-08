function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admissions/admissions.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admissions/admissions.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdmissionsAdmissionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-admission\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            Join The Premia Pride\r\n        </a>\r\n    </div>\r\n    <div class=\"row-f sub-header\">\r\n        <h1>\r\n            Join The Premia Pride\r\n        </h1>\r\n\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 admission-info\">\r\n           \r\n         <div class=\"panel\">\r\n              \r\n                <div class=\"panel-body\">\r\n                <p>Thank You for expressing interest in Premia Academy.  We at Premia Academy, welcome all learners to a vibrant school community delivering an ethical education in an academic setting.<br><br>\r\n                    Our admissions policy ensures an appropriate admission procedure with respect to each application received for admission. We pursue to set a selection standard that is fair and consistent. Assessment for admissions to preprimary and primary would be an analysis to evaluate the developmental preparedness of students, using a range of assessment methods to understand the applicant’s skills. Prior to admissions, we assess applicants to determine their readiness for our School providing practical and ethical methods of teaching.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row add-spec\">\r\n\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <p>\r\n                        We at Premia Academy, aspire to ensure that our students nurture their passion for knowledge so they may pursue their dreams and become successful \r\n                    </p>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngFor=\"let item of admission; index as i\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-front\">\r\n                                <div class=\"panel-heading\">\r\n                                    <i class=\"icon icon-medium\">\r\n                                        <svg focusable=\"false\">\r\n                                            <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                        </svg>\r\n                                    </i>\r\n                                     \r\n                                        <p>{{item.description}}</p>\r\n                                </div>\r\n                             </div>\r\n                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"doodle\">\r\n                Join The Premia Pride\r\n            </div>\r\n        </div>\r\n        <div class=\"img-flag\">\r\n            <img src=\"assets/images/9.jpg\">\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <section class=\"section-admission-2\">\r\n      <div class=\"container\">\r\n        <div class=\"row addmin-sec\">\r\n                <div class=\"col-lg-3 col-md-3 col-sm-12 add-info\" *ngFor=\"let item of admission_2; index as i\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-heading\">\r\n                                <h3 class=\"bar {{item.bar}}\">\r\n                                    {{item.title}}\r\n                                </h3>\r\n<!--                                  \r\n                                    <p>{{item.description}}</p> -->\r\n                                    \r\n                            </div>\r\n                            <button class=\"btn btn-primary\" (click)=\"knowMore('admission');\">APPLY NOW</button>\r\n                       </div>\r\n                </div>\r\n      </div>          \r\n   </div>\r\n    \r\n    </section>\r\n</section>\r\n\r\n";
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


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n<!-- <div class=\"flying-img _1\">\r\n    <img src=\"assets/images/flying/1.png\">\r\n</div>\r\n<div class=\"flying-img _2\">\r\n    <img src=\"assets/images/flying/2.png\">\r\n</div>\r\n<div class=\"flying-img _3\">\r\n    <img src=\"assets/images/flying/3.png\">\r\n</div>\r\n<div class=\"flying-img _4\">\r\n    <img src=\"assets/images/flying/4.png\">\r\n</div>\r\n<div class=\"flying-img _5\">\r\n    <img src=\"assets/images/flying/5.png\">\r\n</div>\r\n<div class=\"flying-img _6\">\r\n    <img src=\"assets/images/flying/6.png\">\r\n</div>\r\n<div class=\"flying-img _7\">\r\n    <img src=\"assets/images/flying/7.png\">\r\n</div>\r\n<div class=\"flying-img _8\">\r\n    <img src=\"assets/images/flying/8.png\">\r\n</div>\r\n<div class=\"flying-img _9\">\r\n    <img src=\"assets/images/flying/9.png\">\r\n</div>\r\n<div class=\"flying-img _10\">\r\n    <img src=\"assets/images/flying/10.png\">\r\n</div>\r\n<div class=\"flying-img _11\">\r\n    <img src=\"assets/images/flying/11.png\">\r\n</div>\r\n<div class=\"flying-img _12\">\r\n    <img src=\"assets/images/flying/12.png\">\r\n</div>\r\n<div class=\"flying-img _13\">\r\n    <img src=\"assets/images/flying/13.png\">\r\n</div>\r\n<div class=\"flying-img _14\">\r\n    <img src=\"assets/images/flying/14.png\">\r\n</div>\r\n<div class=\"flying-img _15\">\r\n    <img src=\"assets/images/flying/15.png\">\r\n</div>\r\n<div class=\"flying-img _16\">\r\n    <img src=\"assets/images/flying/16.png\">\r\n</div>\r\n<div class=\"flying-img _17\">\r\n    <img src=\"assets/images/flying/17.png\">\r\n</div>\r\n<div class=\"flying-img _18\">\r\n    <img src=\"assets/images/flying/18.png\">\r\n</div> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/apply/apply.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apply/apply.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppApplyApplyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-study-culture section-inner-subheader\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            How to apply\r\n        </a>\r\n    </div>\r\n\r\n\r\n    <div class=\"row-f sub-header\">\r\n        <h1>\r\n            How to apply?\r\n        </h1>\r\n\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 inner-info\">\r\n           \r\n         <div class=\"panel\">\r\n              \r\n                <div class=\"panel-body\">\r\n                <p>At Premia Academy, our school year calendar will begin from June through April. \r\n                    We encourage parents to submit the admission application, documents and payment as soon as possible. The Admissions Department will review completed applications prior to enrollment.\r\n                   </p>\r\n                \r\n                    <ul class=\"list\">\r\n                        <li *ngFor=\"let data of moreInfo\">\r\n                            {{data.info}}\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class=\"doodle\">\r\n                    How to apply?\r\n                </div>\r\n            </div>\r\n\r\n            </div>\r\n        <div class=\"img-flag\">\r\n            <img src=\"assets/images/10.jpg\">\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row applycation-rules\">\r\n       <button class=\"btn btn-primary \">APPLY</button>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blob/blob.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blob/blob.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlobBlobComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-inner-subheader\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            The Premia Corner \r\n        </a>\r\n    </div>\r\n\r\n</section>\r\n\r\n<!-- <section class=\"blob-article\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n              <div class=\"panel\"><h2>Check mate!  We would like to invite you to<br>\r\n                Gorki campus to take part in our traditional<br>\r\n                Сambridge Chess Tournament 2020.</h2>\r\n                <p>\r\n                    We are a group of committed individuals who believe that “What sculpture is to a block of marble, education is to the human soul.” Joseph Addison.\r\n                    <br><br>\r\nOur advisory board comprises of diverse academicians who have a keen interest in providing a unique perspective to our collective vision. Individually they have contributed tremendously to the field of education, together they bring their unique capacities to our advisory board supporting continual improvement and sustainability.\r\n<br><br>\r\nWe want to nurture a confident, compassionate student body that is ready to make a positive difference to the World. We affirm that every child deserves a childhood filled with love and positivism. That is the core belief, with which we will take care of each child, as this will contribute to making exemplary individuals.\r\n                </p></div>\r\n                <div class=\"btn-wrapper\">\r\n                    <div class=\"div-btn\">\r\n                    <button class=\"btn btn-primary\" (click)=\"knowMore('culture');\">\r\n                        READ MORE\r\n                    </button>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section> -->\r\n\r\n<section class=\"recent-article\">\r\n    <div class=\"container\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n            <h2><span>Recent Articles</span></h2>\r\n        </div>\r\n        <div class=\"row\">\r\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\"\r\n                [config]=\"recentConfig\">\r\n                <div ngxSlickItem *ngFor=\"let item of admission; index as i\" class=\"slide col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-heading\">\r\n                                <p>{{item.date}}</p>\r\n                                 <h3>{{item.title}}</h3>\r\n                        </div>\r\n                        <div class=\"panel-body\">\r\n                            <p>{{item.description}}</p>\r\n                   </div>\r\n                   <button class=\"btn btn-primary\" (click)=\"knowMore('culture');\">\r\n                    READ MORE\r\n                </button>\r\n                    </div>\r\n                </div>\r\n            </ngx-slick-carousel>\r\n        </div>\r\n    </div>  \r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"map\">\r\n    <iframe frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"\r\n        src=\"https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Pillar%20No.102,%20PVNR%20Express%20way,%20501%20Karwan%20Sahu%20Road,%20%20Attapur,%20Hyderabad,%20Telangana%20500008,%20India%20Hyderabad+(The%20Premia%20Academy)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed\"></iframe>\r\n    <script type='text/javascript'\r\n        src='https://embedmaps.com/google-maps-authorization/script.js?id=f9059a527fc461bcc6e4ca8c957752c8ece552e0'></script>\r\n</div>\r\n<section class=\"section-inner-subheader\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            Catch Up Over Coffee\r\n        </a>\r\n    </div>\r\n    <div class=\"row-f\">\r\n        <h1>\r\n            Contact Us\r\n        </h1>\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n            <div class=\"row inner-contact-info\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 contact-form\">\r\n                    <h5 class=\"col\">Get in touch</h5>\r\n                    <form action=\"/action_page.php\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\" name=\"name\">\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"in\" placeholder=\"Last Name\" name=\"ln\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <input type=\"phone\" class=\"form-control\" placeholder=\"Phone\" name=\"phone\">\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Mail ID\" name=\"email\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <label for=\"comment\">Comment:</label>\r\n                                <textarea class=\"form-control\" rows=\"3\" id=\"comment\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <button type=\"submit\" class=\"btn btn-primary\">\r\n                            <i class=\"icon icon-medium\">\r\n                            <svg focusable=\"false\">\r\n                                <use xlink:href=\"#icon_plane\"></use>\r\n                            </svg>\r\n                            </i> \r\n                        </button>\r\n                    </form>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 contact-info\">\r\n                    <h5 class=\"col info-title\">CONTACT<br>\r\n                        INFORMATION</h5>\r\n                    <div class=\"row tel\">\r\n                        <i class=\"icon icon-small\">\r\n                            <svg focusable=\"false\">\r\n                                <use xlink:href=\"#icon_phone\"></use>\r\n                            </svg>\r\n                        </i>\r\n                        <p>\r\n                            +91 9111 399 399\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"row address\">\r\n                        <i class=\"icon icon-small\">\r\n                            <svg focusable=\"false\">\r\n                                <use xlink:href=\"#icon_map\"></use>\r\n                            </svg>\r\n                        </i>\r\n                        <p>\r\n                            Pillar No.102, PVNR Express way,<br> 501 Karwan Sahu Road, <br>Attapur, Hyderabad, Telangana 500008,<br>\r\n                            India\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"row email\">\r\n                        <i class=\"icon icon-small\">\r\n                            <svg focusable=\"false\">\r\n                                <use xlink:href=\"#icon_message\"></use>\r\n                            </svg>\r\n                        </i>\r\n                        <p>\r\n                            <a href=\"mailto:admissions@thepremiaacademy.com\">admissions@thepremiaacademy.com</a><br>\r\n                            <a href=\"mailto:enquiry@thepremiaacademy.com\">enquiry@thepremiaacademy.com</a>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"social-net\">\r\n                        <ul>\r\n                            <li *ngFor=\"let item of socialNet; index as i\">\r\n                                <a href=\"https://www.{{item.icon}}.com\" target=\"_blank\">\r\n                                    <i class=\"icon icon-ex-small\">\r\n                                        <svg focusable=\"false\">\r\n                                            <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                        </svg>\r\n                                    </i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/eng/eng.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eng/eng.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEngEngComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"breadcum\">\r\n    <a>\r\n        <i class=\"icon icon-ex-small\">\r\n            <svg focusable=\"false\">\r\n                <use xlink:href=\"#icon_home\"></use>\r\n            </svg>\r\n        </i>\r\n    </a>\r\n    <span> |</span>\r\n    <a>\r\n        Page under construction.\r\n    </a>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"contact-info\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                        <p>\r\n                            The Premia Academy<br>\r\n                            Pillar No. 102, 501 Karwan Sahu Road,<br>\r\n                            Attapur, Hyderabad, Telangana 500008\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                        <p>\r\n                            +91 9111 399 399<br>\r\n                            admissions@thepremiaacademy.com<br>\r\n                            enquiry@thepremiaacademy.com\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                        <div>\r\n                            <div class=\"social-net\">\r\n                                <ul>\r\n                                    <li><a routerLink=\"ThePremianStory\" routerLinkActive=\"active\" skipLocationChange=true>\r\n                                            The Premian story\r\n                                        </a>\r\n                                    </li>\r\n                                    <li><a routerLink=\"TheStudyCulture\" routerLinkActive=\"active\" skipLocationChange=true>\r\n                                            The Study Culture\r\n                                        </a>\r\n                                    </li>\r\n                                    <li><a routerLink=\"ThePremianEdge\" routerLinkActive=\"active\" skipLocationChange=true>\r\n                                            The Premian edge\r\n                                        </a>\r\n                                    </li>\r\n                                    <li><a routerLink=\"Admissions\" routerLinkActive=\"active\" skipLocationChange=true>\r\n                                            Admissions\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n    <div class=\"container\">\r\n    <a href=\"javascript:void(0)\" class=\"logo\" routerLink=\"Home\" routerLinkActive=\"active\"\r\n    skipLocationChange=true>\r\n      <img src=\"assets/images/logo.png\">\r\n  </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"slideToggel()\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n  </div>\r\n  <ul class=\"navbar-nav navbar-nav-list\">\r\n    <li class=\"nav-item login\">\r\n      <a class=\"nav-link\">\r\n        <i class=\"icon icon-small\">\r\n          <svg focusable=\"false\">\r\n            <use xlink:href=\"#icon_chatroom\"></use>\r\n          </svg>\r\n        </i><br>\r\n        Chat\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item login\">\r\n      <a class=\"nav-link\">\r\n        <i class=\"icon icon-small\">\r\n          <svg focusable=\"false\">\r\n            <use xlink:href=\"#icon_enquiry\"></use>\r\n          </svg>\r\n        </i><br>\r\n        Enquiry\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item login\">\r\n       <a class=\"nav-link\">\r\n         <i class=\"icon icon-small\">\r\n           <svg focusable=\"false\">\r\n             <use xlink:href=\"#icon_login\"></use>\r\n           </svg>\r\n         </i><br>\r\n         Login\r\n       </a>\r\n     </li>\r\n   </ul>\r\n  </nav>\r\n</header>\r\n\r\n<nav class=\"navbar-vertical\">\r\n  <a class=\"nav-link\" (click)=\"slideToggel()\">\r\n    <i class=\"icon icon-small\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_menu\"></use>\r\n      </svg>\r\n    </i>\r\n  </a> \r\n  \r\n  <div class=\"social-net\">\r\n\r\n    <ul>\r\n        <li><a href=\"https://www.facebook.com\" target=\"_blank\">\r\n                <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                        <use xlink:href=\"#icon_facebook\"></use>\r\n                    </svg>\r\n                </i>\r\n                <span>Facebook</span>\r\n            </a>\r\n        </li>\r\n        <li><a href=\"https://www.instagram.com\" target=\"_blank\">\r\n                <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                        <use xlink:href=\"#icon_instagram\"></use>\r\n                    </svg>\r\n                </i>\r\n                <span>Linkedin</span>\r\n            </a>\r\n        </li>\r\n        <li><a href=\"https://www.twitter.com\" target=\"_blank\">\r\n                <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                        <use xlink:href=\"#icon_twitter\"></use>\r\n                    </svg>\r\n                </i>\r\n                <span>Instagram</span>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"notice-board\"><a  target=\"_blank\" (click)=\"open(content)\">\r\n          <i class=\"icon icon-ex-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_noticeBoard\"></use>\r\n              </svg>\r\n          </i>\r\n          <span>Notice Board</span>\r\n       </a>\r\n\r\n       <ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n          <i class=\"icon icon-ex-small\">\r\n            <svg focusable=\"false\">\r\n                <use xlink:href=\"#icon_noticeBoard\"></use>\r\n            </svg>\r\n        </i>\r\n          <h4 class=\"modal-title\" id=\"modal-basic-title\">NOTICE BOARD</h4>\r\n              <a class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                <i class=\"icon icon-ex-small\">\r\n                  <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_close\"></use>\r\n                  </svg>\r\n                </i>\r\n              </a>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 v-flex\">\r\n             <p>\r\n              Admissions open<br>\r\n              for the academic<br>\r\n              year of 2020 - 2021\r\n             </p>\r\n             <button class=\"btn btn-primary\"  aria-label=\"Close\" (click)=\"knowMore('admission');\">APPLY NOW</button>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n             <img src=\"assets/images/notice-board.png\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </ng-template>\r\n  </li>\r\n    </ul>\r\n</div>\r\n</nav>\r\n\r\n\r\n\r\n\r\n<div class=\"overlay\" [ngClass]=\"isOpen ? '' : 'active'\">\r\n  <img src=\"assets/images/2.jpg\">\r\n  <a class=\"nav-link\" (click)=\"slideToggel()\">\r\n    <i class=\"icon icon-small close-menu\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_close\"></use>\r\n      </svg>\r\n    </i>\r\n  </a> \r\n<ul class=\"main-nav\">\r\n      <li class=\"main-nav-list\" *ngFor=\"let item of list; index as i\">\r\n        <a class=\"main-nav-link\" routerLink=\"{{item.name}}\" routerLinkActive=\"active\" skipLocationChange=true (click)=\"slideToggel()\">\r\n          {{item.name | createSpace}}\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"general-info-nav\">\r\n      <a>Sitemap</a> |\r\n      <a>Privacy Policy</a> |\r\n      <a>FAQ</a> |\r\n      <a>Careers</a>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-banner\">\r\n    <!-- <ngb-carousel #carousel interval=\"5000\" [showNavigationArrows]=\"showNavigationArrows\" [pauseOnHover]=\"pauseOnHover\"\r\n    (slide)=\"onSlide($event)\">\r\n        <ng-template ngbSlide  *ngFor=\"let info of banner; index as i\">\r\n          <div class=\"picsum-img-wrapper\">\r\n            <img src=\"assets/images/banner{{i+1}}.jpg\" alt=\"Random first slide\">\r\n          </div>\r\n          <div class=\"carousel-caption\">\r\n           <h3>{{info.title}}</h3>\r\n            <p>{{info.description}}</p>\r\n          </div>\r\n        </ng-template>     \r\n      </ngb-carousel> -->\r\n\r\n    <video controls autoplay>\r\n        <source src=\"https://thepremia.github.io/academy/assets/images/banner.mp4\" type=\"video/mp4\">\r\n        Your browser does not support the video tag.\r\n    </video>\r\n\r\n</div>\r\n\r\n<section class=\"section-admission\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-3 col-sm-12 admission-flag\">\r\n                <div class=\"flag-pos\">\r\n                    <div class=\"v-align\">\r\n                        <h1>Join<br>\r\n                            The Premia<br>\r\n                            Family\r\n                            <br>\r\n                            <button class=\"btn btn-primary\" (click)=\"knowMore('apply');\">Apply Now</button></h1>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <ngx-slick-carousel class=\"carousel col-lg-9 col-md-9 col-sm-12\" #slickModal=\"slick-carousel\"\r\n                [config]=\"admissionConfig\">\r\n                <div ngxSlickItem *ngFor=\"let item of admission; index as i\" class=\"slide\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-front\">\r\n                            <div class=\"panel-heading\">\r\n                                <i class=\"icon icon-medium\">\r\n                                    <svg focusable=\"false\">\r\n                                        <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                    </svg>\r\n                                </i>\r\n\r\n                                <p>{{item.description}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ngx-slick-carousel>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-info\">\r\n    <img src=\"assets/images/1.jpg\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>We don’t just\r\n                    teach kids,<br>\r\n                    we nurture them</h1>\r\n            </div>\r\n            <div *ngFor=\"let item of solution\" class=\"col-lg-4 col-md-4 col-sm-12 panel-container\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-front\">\r\n                        <div class=\"panel-heading\">\r\n                            <i class=\"icon icon-medium\">\r\n                                <svg focusable=\"false\">\r\n                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                </svg>\r\n                            </i>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"panel-back\">\r\n                        <p>{{item.description}}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section-nofify\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n                <h1>What drives<br>\r\n                    us?</h1>\r\n            </div>\r\n            <div *ngFor=\"let item of notify\" class=\"{{item.col}} col-sm-12\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-front\">\r\n                        <div class=\"panel-heading\">\r\n                            <h5><span>{{item.title}}</span></h5>\r\n                            <p>{{item.description}}</p>\r\n                            <ul class=\"list\">\r\n                                <li *ngFor=\"let data of item.moreInfo\">\r\n                                    {{data.info}}\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"section-curriculum\">\r\n    <div class=\"row-f\">\r\n        <div class=\"col-lg-9 col-md-9 col-sm-12 float-right p0\">\r\n            <img src=\"assets/images/2.jpg\">\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"d-flex\">\r\n                <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\"\r\n                    class=\"nav-pills section-curriculum-list col-lg-4 col-md-4 col-sm-12\" orientation=\"vertical\">\r\n                    <li ngbNavItem=\"1\">\r\n                        <a ngbNavLink>CURRICULUM</a>\r\n                        <ng-template ngbNavContent>\r\n                            <p>\r\n                                The term curriculum refers to the lessons and academic syllabus taught in a school for\r\n                                students to follow,\r\n                                which will help them attain their goals and ambitions of life. It is an instructional\r\n                                and educative program\r\n                                comprising of all the subjects to be taught during an academic year.<br><br>\r\n                                An appropriate curriculum is required to enhance the learning experiences of students.\r\n                                Students today\r\n                                need a curriculum that is not only designed to achieve educational goals but also\r\n                                relevant to the interests\r\n                                and needs of the students to enhance their abilities to understand the world around\r\n                                them.<br><br>\r\n                                An integrated curriculum provides lifelong learning, creating and developing values for\r\n                                the development\r\n                                of students according to the changing social requirements.\r\n                            </p>\r\n                            <ul class=\"list\">\r\n                                <li>\r\n                                    <b>Sustained learning and the ability to apply concepts. </b>\r\n                                </li>\r\n                                <li>\r\n                                    <b>Facilitate self-confidence and motivation </b>\r\n                                </li>\r\n                                <li>\r\n                                    <b>A deeper understanding of science and math concepts </b>\r\n                                </li>\r\n                                <li>\r\n                                    <b>Improved reading and writing skills</b>\r\n                                </li>\r\n                                <li>\r\n                                    <b>Fostering positive attitudes and personal growth.</b>\r\n                                </li>\r\n                                <li>\r\n                                    <b> Critical thinking skills and improved quality of work.</b>\r\n                                </li>\r\n                                <li>\r\n                                    <b>Remarkable academic success</b>\r\n                                </li>\r\n                            </ul>\r\n                                <button class=\"btn btn-primary\" (click)=\"knowMore('culture');\">KNOW MORE</button>\r\n                            \r\n                        </ng-template>\r\n                    </li>\r\n                    <li ngbNavItem=\"2\">\r\n                        <a ngbNavLink>PREMIA EDGE</a>\r\n                        <ng-template ngbNavContent>\r\n                            <p>\r\n                                The integrated curriculum at Premia comprises & aligns with all the learning outcomes in\r\n                                CBSE, IGCSE & AERO standards. The curriculum includes reading, writing, listening,\r\n                                speaking, social studies, math, science, health, physical education, music, and visual\r\n                                arts, experiential learning, public speaking, emphasis on projects, etc. We at Premia\r\n                                will utilize different approaches of integration best suited for the students:\r\n                            </p>\r\n                                <ul class=\"list\">\r\n                                    <li>\r\n                                        <b>Multi-Disciplinary Integration -</b><br>\r\n                                To focus on reading, writing, and communication in all its forms, in language arts. This\r\n                                approach focuses on integration within one subject area, teaching the content with\r\n                                deeper understanding.\r\n                                    </li>\r\n                                    <li>\r\n                                        <b>Inter-disciplinary integration -</b><br>\r\n                                        Focuses on project-based learning in more than one subject area. Interdisciplinary\r\n                                        integration assembles the teaching of several subjects around common issues, or\r\n                                        problems, highlighting thematic concepts in which a common theme is studied.\r\n                                    </li>\r\n                                    <li>\r\n                                        <b>Trans-disciplinary integration -</b><br>\r\n                                        Involves understanding the student’s interests, and concerns while encouraging them to\r\n                                        ask questions to inquire about the subject matter from a variety of perspectives.\r\n                                        Interdisciplinary integration incorporates information, involving students’ interests\r\n                                        and questions.\r\n                                    </li>\r\n                              </ul>\r\n                                <button class=\"btn btn-primary\" (click)=\"knowMore('edge');\">KNOW MORE</button>\r\n                            \r\n                        </ng-template>\r\n                    </li>\r\n                    <li ngbNavItem=\"3\">\r\n                        <a ngbNavLink>COMMUNICATION\r\n                            AND LANGUAGE</a>\r\n                        <ng-template ngbNavContent>\r\n                            <p>\r\n                                Communication and language development is about different ways a child understands and\r\n                                communicates, using words, gestures or facial expressions.\r\n                                Being an indicator of fine motor skill development and a reflection of cognitive\r\n                                development, reading is one of the best ways to encourage communication and language\r\n                                development.\r\n\r\n                            </p>\r\n                        </ng-template>\r\n                    </li>\r\n                    <li ngbNavItem=\"4\">\r\n                        <a ngbNavLink>PERSONAL, SOCIAL AND\r\n                            EMOTIONAL DEVELOPMENT</a>\r\n                        <ng-template ngbNavContent>\r\n                            <p>\r\n                                It’s essential for children to feel comfortable, emotionally and physically to learn\r\n                                effectively. Helping children to learn how to regulate and manage their feelings is,\r\n                                therefore, a vital stepping stone for success in learning and life.\r\n                            </p>\r\n                        </ng-template>\r\n                    </li>\r\n                    <li ngbNavItem=\"5\">\r\n                        <a ngbNavLink>PHYSICAL DEVELOPMENT</a>\r\n                        <ng-template ngbNavContent>\r\n                            <p>\r\n                                Children meet a myriad of physical development milestones in the first few years of\r\n                                life, from walking to drawing. Physical development focuses on increasing the skill and\r\n                                performance of the body. The development of children’s physical skills should be\r\n                                developed holistically across all areas of learning.\r\n                            </p>\r\n                        </ng-template>\r\n                    </li>\r\n                </ul>\r\n\r\n                <div [ngbNavOutlet]=\"nav\" class=\"ml-4 col-lg-8 col-md-8 col-sm-12 curriculum-info\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<div class=\"clear-float\"></div>\r\n<section class=\"premian-league\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 center\">\r\n                <h1>The Premia League</h1>\r\n            </div>\r\n        \r\n        <!-- <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\r\n            <div ngxSlickItem *ngFor=\"let list of premianLeague; index as i\" class=\"slide\">\r\n                <img src=\"assets/images/premianleague{{i+1}}.jpg\" alt=\"\" width=\"100%\">\r\n                <h6>{{list.name}}</h6>\r\n                <p>{{list.post}}</p>\r\n                <p>{{list.desc}}</p>\r\n            </div>\r\n        </ngx-slick-carousel> -->\r\n             <div *ngFor=\"let list of premianLeague; index as i\" class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                <img src=\"assets/images/premianleague{{i+1}}.jpg\" >\r\n                <h6>{{list.name}}</h6>\r\n             </div>\r\n       \r\n    </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"testimonials\">\r\n    <img src=\"assets/images/7.jpg\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h1>Parents Speak</h1>\r\n                <ngb-carousel #carousel interval=\"5000\" [showNavigationArrows]='true' [showNavigationIndicators]='false'\r\n                    [pauseOnHover]=\"pauseOnHover\" (slide)=\"onSlide($event)\">\r\n                    <ng-template ngbSlide *ngFor=\"let info of testimonials; index as i\">\r\n                        <p>\r\n                            {{info.clientView_1}}\r\n                        </p>\r\n                        <p>\r\n                            {{info.clientView_2}}\r\n                        </p>\r\n                        <p>\r\n                            {{info.clientView_3}}\r\n                        </p>\r\n                        <p>\r\n                            <span class=\"client-name\"> <b>{{info.clientName}}<br>\r\n                            {{info.desti}}</b></span>\r\n                        </p>\r\n                    </ng-template>\r\n                </ngb-carousel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div class=\"container partner\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 float-right\">\r\n                <h2>\r\n                    Our Partners\r\n                </h2>\r\n                    <p>Our quest for creating the perfect learning environment was further helped by a few organisations\r\n                        who shared our vision. With their ideologies and compassion, we have successfully made a haven\r\n                        for knowledge and growth.</p>\r\n               \r\n            </div>\r\n\r\n            <ngx-slick-carousel class=\"carousel col-lg-12 col-md-12 col-sm-12\" #slickModal=\"slick-carousel\"\r\n                [config]=\"partnerConfig\">\r\n                <div ngxSlickItem *ngFor=\"let item of partner; index as i\" class=\"slide\">\r\n                    <div class=\"panel\">\r\n                       <div class=\"panel-heading\">\r\n                                <div class=\"img-box\">\r\n                                    <img src=\"assets/images/partner{{i+1}}.png\">\r\n                                </div>\r\n                                <p>{{item.description}}</p>\r\n                            </div>\r\n                        <div class=\"info-view\">\r\n                            <div class=\"panel-heading\">\r\n                                <div class=\"img-box\">\r\n                                    <img src=\"assets/images/partner{{i+1}}.png\">\r\n                                </div>\r\n                                <h5>{{item.description}}</h5>\r\n                                <p>{{item.description_2}}</p>\r\n                                <a href=\"{{item.link}}\" target=\"blank\">{{item.link}}</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ngx-slick-carousel>\r\n        </div>\r\n    </div>\r\n \r\n<section class=\"newsletter\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <form class=\"form-inline\" action=\"/action_page.php\">\r\n                <label for=\"email\">Newsletter </label>\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" id=\"email\">\r\n                <button type=\"submit\" class=\"btn btn-primary\"> Subscribe</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/thepremianedge/thepremianedge.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/thepremianedge/thepremianedge.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThepremianedgeThepremianedgeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-study-culture\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            The Premia Edge\r\n        </a>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n            <h2>\r\n                The<br>\r\n                Premia Edge\r\n            </h2>\r\n            <div class=\"panel-body\">\r\n                <p>The integrated curriculum at Premia comprises & aligns with all the learning outcomes in CBSE, IGCSE\r\n                    & AERO standards. The curriculum includes reading, writing, listening, speaking, social studies,\r\n                    math, science, health, physical education, music, and visual arts, experiential learning, public\r\n                    speaking, emphasis on projects, etc. We at Premia will utilize different approaches of integration\r\n                    best suited for the students:\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n            <img src=\"assets/images/8.jpg\">\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"row edge-info\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 float-right\">\r\n            <div class=\"panel\">\r\n                <h3 class=\"heading-title\"><span>Multi-Disciplinary Integration</span></h3>\r\n                <p>\r\n                    To focus on reading, writing, and communication in all its forms, in language arts. This approach\r\n                    focuses on integration within one subject area, teaching the content with deeper understanding.\r\n                </p>\r\n            </div>\r\n            <div class=\"panel\">\r\n                <h3 class=\"heading-title\"><span>Inter-disciplinary integration</span></h3>\r\n                <p>\r\n                    Focuses on project-based learning in more than one subject area. Interdisciplinary integration\r\n                    assembles the teaching of several subjects around common issues, or problems, highlighting thematic\r\n                    concepts in which a common theme is studied.\r\n                </p>\r\n            </div>\r\n            <div class=\"panel\">\r\n                <h3 class=\"heading-title\"><span>Trans-disciplinary integration</span></h3>\r\n                <p>\r\n                    Involves understanding the student’s interests, and concerns while encouraging them to ask questions\r\n                    to inquire about the subject matter from a variety of perspectives. Interdisciplinary integration\r\n                    incorporates information, involving students’ interests and questions\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"row edge-info\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 float-right\">\r\n            \r\n            <h1 class=\"plan-title\"><span>Key Areas of Learning</span></h1>\r\n    </div>\r\n       \r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 float-right\">\r\n           \r\n            <div class=\"panel\">\r\n                <h3 class=\"heading-title\"><span>Communication and Language</span></h3>\r\n                <p>\r\n                   Communication and language development is about different ways\r\n                a child understands and communicates, using words, gestures or facial expressions. Being an\r\n                indicator of fine motor skill development and a reflection of cognitive development, reading\r\n                is one of the best ways to encourage communication and language development.</p>\r\n            </div>\r\n            <div class=\"panel\">\r\n                <h3 class=\"heading-title\"><span>Personal, Social and Emotional Development</span></h3>\r\n                <p>\r\n                    It’s essential for children to feel\r\n                comfortable, emotionally and physically to learn effectively. Helping children to learn how\r\n                to regulate and manage their feelings is, therefore, a vital stepping stone for success in\r\n                learning and life.\r\n                </p>\r\n            </div>\r\n            <div class=\"panel\">\r\n                <h3 class=\"heading-title\"><span>Physical Development</span></h3>\r\n                <p>\r\n                    Children meet a myriad of physical development milestones in the\r\n                first few years of life, from walking to drawing. Physical development focuses on increasing\r\n                the skill and performance of the body. The development of children’s physical skills should\r\n                be developed holistically across all areas of learning.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"section-explicit\">\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            \r\n            <h1 class=\"plan-title\"><span>Explicit Areas of Learning</span></h1>\r\n    </div>\r\n     <ul class=\"row explicit-sec nav-tabs\" ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\">\r\n              <li class=\"add-info\" ngbNavItem=\"{{i+1}}\"  *ngFor=\"let list of explicit; index as i\">\r\n                  <a ngbNavLink class=\"panel\">\r\n                      <div class=\"panel-heading\">\r\n                          <h1>{{list.bar}}</h1>\r\n                          <i class=\"icon icon-medium\">\r\n                            <svg focusable=\"false\">\r\n                                <use attr.xlink:href=\"{{list.icon}}\"></use>\r\n                            </svg>\r\n                        </i>\r\n                              <h6 class=\"bar _{{list.bar}}\">\r\n                                  {{list.title}}\r\n                              </h6>\r\n                            </div>\r\n                           \r\n                        </a>\r\n                     <ng-template ngbNavContent>\r\n                       {{list.description}}\r\n                    </ng-template>\r\n                </li>\r\n\r\n              <div [ngbNavOutlet]=\"nav\" class=\"tab-info\"></div>\r\n            </ul>   \r\n </div> \r\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/thepremianstory/thepremianstory.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/thepremianstory/thepremianstory.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThepremianstoryThepremianstoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-study-culture\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            The\r\n            Premia Story\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"row-f\">\r\n        <h1>\r\n            The<br>\r\n            Premia Story\r\n        </h1>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 story sub-header\">\r\n            <div class=\"panel\">\r\n                <h2>\r\n                    Who we are\r\n                </h2>\r\n                <div class=\"panel-body\">\r\n                <p>We are a group of committed individuals who believe that “What sculpture is to a block of marble, education is to the human soul.” Joseph Addison.\r\n                    <br><br>\r\n                    Our advisory board comprises of diverse academicians who have a keen interest in providing a unique perspective to our collective vision. Individually they have contributed tremendously to the field of education, together they bring their unique capacities to our advisory board supporting continual improvement and sustainability.\r\n               </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row add-spec\">\r\n\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <p>\r\n                        We want to nurture a confident, compassionate student body that is ready to make a positive difference to the World. We affirm that every child deserves a childhood filled with love and positivism. That is the core belief, with which we will take care of each child, as this will contribute to making exemplary individuals. </p>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngFor=\"let item of story; index as i\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-front\">\r\n                                <div class=\"panel-heading\">\r\n                                    <i class=\"icon icon-medium\">\r\n                                        <svg focusable=\"false\">\r\n                                            <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                        </svg>\r\n                                    </i>\r\n                                     \r\n                                        <p>{{item.description}}</p>\r\n                                </div>\r\n                             </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"doodle\">\r\n                The Premia Story\r\n            </div>\r\n        </div>\r\n        <div class=\"img-flag\">\r\n            <img src=\"assets/images/5.jpg\">\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12\"> <h2>\r\n            The Quest\r\n        </h2></div>\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12\">\r\n        <div class=\"panel story-info\">\r\n            <span class=\"flying-plane\">\r\n                <span>.........................................</span>\r\n            <i class=\"icon icon-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_plane\"></use>\r\n                </svg>\r\n            </i> \r\n        </span>\r\n            <p>Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in the best way possible.\r\n                    <br><br>\r\n                    After putting together the best of schools and undergoing immense research, there were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. \r\n                    So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did! \r\n                    <br><br>\r\n                    Her endeavours have snowballed into the Premia Academy.\r\n                </p>\r\n               \r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/thestudyculture/thestudyculture.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/thestudyculture/thestudyculture.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThestudycultureThestudycultureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-study-culture\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            The Premia Culture\r\n        </a>\r\n    </div>\r\n    <!-- <div class=\"row-f sub-header\">\r\n       \r\n        <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n            <h1>\r\n                The<br>\r\n                Study Culture\r\n            </h1>\r\n\r\n\r\n            <div class=\"panel\">\r\n                <h2>\r\n                    Our Vision\r\n                </h2>\r\n                <p>Our vision is to raise, our ‘Premia Pride’ to live their dreams as a<br> generation who are:</p>\r\n                <ul class=\"list\">\r\n                    <li *ngFor=\"let data of vision\">\r\n                        {{data.info}}\r\n                    </li>\r\n                </ul>\r\n        \r\n        <div class=\"doodle\">\r\n            The Premian Story\r\n        </div></div>\r\n        </div>\r\n        <div class=\"img-flag\">\r\n            <img src=\"assets/images/3.jpg\">\r\n        </div>\r\n        \r\n    </div> -->\r\n\r\n    <!-- <div class=\"row-f our-mission\"> \r\n        \r\n       \r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 panel\">\r\n        \r\n            <div class=\"panel-body\">\r\n                <h2>\r\n                    Our Mission\r\n                </h2>\r\n                <p>Our students will be equipped to meet the current<br>\r\n                    and future challenges with values of</p>\r\n                <ul class=\"list\">\r\n                    <li *ngFor=\"let data of mission\">\r\n                        {{data.info}}\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"img-flag\">\r\n            <img src=\"assets/images/4.jpg\">\r\n        </div>\r\n    </div> -->\r\n\r\n\r\n    <div class=\"row-f sub-header\">\r\n\r\n        <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n            <h1>\r\n                The<br>\r\n                Premia Culture\r\n            </h1>\r\n\r\n\r\n            <div class=\"panel\">\r\n                <div class=\"panel-body\">\r\n                    <h2>\r\n                        Our Belief\r\n                    </h2>\r\n                    <p>The Premia Academy was founded on the belief that every child has the potential to make the world\r\n                        a beautiful place. Every child <br>is unique and capable of learning when instructed properly.\r\n                        Premia Academy believes the development of these primary areas -</p>\r\n                    <ul class=\"list\">\r\n                        <li *ngFor=\"let data of belief\">\r\n                            {{data.info}}\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- <div class=\"doodle\">\r\n                    The Premian Story\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"img-flag\">\r\n            <img src=\"assets/images/3.jpg\">\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 our-belief\">\r\n            <h2>\r\n                Our Belief\r\n            </h2>\r\n            <div class=\"panel\">\r\n              <p>The Premia Academy was founded on the belief that every child has the potential to make the world a beautiful place. Every child <br>is unique and capable of learning when instructed properly. Premia Academy believes the development of these primary areas - \r\n            </p>\r\n                <ul class=\"list row\">\r\n                    <li *ngFor=\"let data of belief\" class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        {{data.info}}\r\n                    </li>\r\n                </ul>\r\n        </div>\r\n        </div>\r\n     \r\n    </div> -->\r\n\r\n\r\n    <div class=\"row curriculum\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12\">\r\n            <h2>\r\n                Our Curriculum\r\n            </h2>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-5 col-md-5 col-sm-12 curriculum-1\">\r\n\r\n            <p>An integrated curriculum extends a framework with significant and expressive learning including\r\n                assessments and evaluation to meet the standards and benchmarks of the boards whose learning objectives\r\n                are the guide. Learning through integration stimulates the development of creativity, critical thinking\r\n                and problem-solving. Integration also develops Communication and collaboration within students. Also,\r\n                digital literacy, social and cultural skills, prove to be beneficial, providing students with\r\n                opportunities to acquire enduring skills for life. The attributes of an integrated curriculum include\r\n                experiences to develop children’s attitudes, skills, and knowledge exposing them to a range of\r\n                activities to develop and sustain in the ever-changing and challenging world. Integrated teaching and\r\n                learning processes facilitate continued successful learning and there are multiple benefits of an\r\n                integrated curriculum such as: </p>\r\n\r\n\r\n            <div class=\"panel\">\r\n\r\n                <ul class=\"list\">\r\n                    <li *ngFor=\"let data of moreInfo\">\r\n                        {{data.info}}\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 curriculum-1\">\r\n            <div class=\"img-flag\">\r\n                <img src=\"assets/images/14.jpg\">\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"more-info\">\r\n\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 float-right\">\r\n            <h2>\r\n                Our Approach\r\n            </h2>\r\n            <div class=\"panel\">\r\n                <p>We aim to create better opportunities for teacher-student planning and cooperative evaluation. This\r\n                    leads to enhanced creative teaching and learning.Our process of learning and teaching comes from a\r\n                    fusion of knowledge with various activities, resources; and experiencing real-life situations for a\r\n                    solution-based approach. It also instils problem-solving, critical thinking and collaboration in and\r\n                    beyond the classroom. <br>\r\n                    We take a Student Centric approach with flexibility, innovation and other core values for essential\r\n                    life experiences.\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theteam/theteam.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theteam/theteam.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTheteamTheteamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-inner-subheader\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            The Premia League\r\n        </a>\r\n    </div>\r\n\r\n\r\n    <div class=\"row the-team-info\">\r\n        \r\n        <div class=\"col col-lg-8 col-md-8 col-sm-12\">\r\n            <h1>\r\n                THE FOUNDING TEAM\r\n            </h1>\r\n            <div class=\"panel blue-bg\">\r\n\r\n                <div class=\"panel-body\">\r\n                    <h2>Mr. Nallary\r\n                        Pradeep Reddy\r\n                    </h2>\r\n                    <p>\r\n                        Widely recognized as one of the pioneers of the Information Technology revolution in India, Mr Reddy is the MD of The Interbiz and Infosun Group of Companies. He holds a bachelors in Electronics from IIT, Madras & a Masters in Computer Science from Penn State. He is a visionary and has been a guiding force to the Premia Team.</p>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-body\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"row the-team-info\">\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-body\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\">\r\n\r\n            <div class=\"panel red-bg\">\r\n\r\n                <div class=\"panel-body\">\r\n                    <h2>Ms Sinduri Reddy\r\n                    </h2>\r\n                    <p>\r\n                        With a keen interest in education, Ms Sinduri Reddy spearheads the Premia Academy as the Founder and Managing Director. Her focus is to help students and teachers, both, to adapt to the ever changing world of the 21st Century. She is Premia’s strongest pillar!\r\n                    </p>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row the-team-info\">\r\n        <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\">\r\n\r\n            <div class=\"panel black-bg\">\r\n\r\n                <div class=\"panel-body\">\r\n                    <h2>Mr Varun Reddy\r\n                    </h2>\r\n                    <p>\r\n                        A director at The Interbiz and Infosun Group of Companies, he ensures that over 3 Lakh employees spread across 800 clients have access to state-of-the-art Human Resource Automation Applications. He is the CEO and Co-founder of Premia Academy.\r\n                    </p>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-body\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"row the-team-info\">\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-body\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\">\r\n\r\n            <div class=\"panel blue-bg\">\r\n\r\n                <div class=\"panel-body\">\r\n                    <h2>Mr Subramanayam\r\n                        Kantheti\r\n                    </h2>\r\n                    <p>\r\n                        He is a business management professional with an experience of over 25 years. Mr Kantheti has been instrumental in setting up and managing schools across the country. He is the Co-Founder and COO at Premia. </p>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row the-team-info\">\r\n        <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\">\r\n\r\n            <div class=\"panel red-bg\">\r\n\r\n                <div class=\"panel-body\">\r\n                    <h2>Ms Arti Mandhania\r\n                    </h2>\r\n                    <p>\r\n                        She has an experience of 13 years and currently is the Business Head. A double post graduate in child psychology and business management, when not with kids, she is found with a book or a painting.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-body\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row the-team-info\">\r\n        <div class=\"col-sm-12\">\r\n            <h1>\r\n                THE ACADEMIC TEAM\r\n            </h1>\r\n        </div>\r\n\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-body\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\">\r\n\r\n            <div class=\"panel black-bg\">\r\n\r\n                <div class=\"panel-body\">\r\n                    <h2>Ms Malini Paul\r\n                    </h2>\r\n                    <p>\r\n                        Her elegant personna often reflects in her role as the Founding Headmistress at Premia. With an experience of more than 30 years, she is an expert at Pre-School and Primary education.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row the-team-info\">\r\n\r\n    <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\">\r\n\r\n            <div class=\"panel blue-bg\">\r\n\r\n                <div class=\"panel-body\">\r\n                    <h2>MS Rubina Majid\r\n                    </h2>\r\n                    <p>\r\n                        The Curriculum Developer and Master Trainer of Premia Academy, Mr Rubina has worked extensively with schools in India and abroad. At present, besides working with The Premia Academy, Rubina is a consultant with Scholastic India and TCS iON for their educational verticals as well as running the Learning Resource Center, a think tank set up to accelerate and support positive change in our education system.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-body\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row the-team-info\">\r\n\r\n        <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-body\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\">\r\n    \r\n                <div class=\"panel red-bg\">\r\n    \r\n                    <div class=\"panel-body\">\r\n                        <h2>Ms Trupti Rao\r\n                        </h2>\r\n                        <p>\r\n                            Her core belief is to impart quality education for all students based on their social, emotional or physical aspects. As the Principal of Premia Academy, Ms Trupti Rao is a dedicated, resourceful educationist with proven ability to create and monitor policies that promote a happy and a safe learning environment.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n    \r\n            </div>\r\n    \r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n\r\n\r\n        <div class=\"row the-team-info\">\r\n\r\n            <div class=\"col-sm-12\">\r\n                <h1>\r\n                    THE ADVISORY BOARD\r\n                </h1>\r\n            </div>\r\n\r\n            <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\">\r\n        \r\n                    <div class=\"panel black-bg\">\r\n        \r\n                        <div class=\"panel-body\">\r\n                            <h2>Ms Lalitha Naidu\r\n                            </h2>\r\n                            <p>\r\n                                An academician carrying values of purpose, passion and pedagogy, Ms Naidu presently heads the Meridian School, Madhapur. She is the Founder Principal of Shadan Group of Modern Schools. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n        \r\n                </div>\r\n        \r\n                <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body\">\r\n        \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        \r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n\r\n            <div class=\"row the-team-info\">\r\n\r\n                <div class=\"col col-lg-3 col-md-3 col-sm-12 avtar\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-body\">\r\n        \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col col-lg-8 col-md-8 col-sm-12 team-info\">\r\n            \r\n                        <div class=\"panel blue-bg\">\r\n            \r\n                            <div class=\"panel-body\">\r\n                                <h2>Dr Shivranjani Santosh\r\n                                </h2>\r\n                                <p>\r\n                                    She is the recipient of TOI’s Rising Star Award. Her YouTube channel empowers people on the importance of first aid. Dr Shivranjani is passionate about parent education and preventive paediatrics.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n            \r\n                    </div>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

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


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
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

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
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

        while (_) {
          try {
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
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
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
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
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
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

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
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
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
  "./src/app/admissions/admissions.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/admissions/admissions.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdmissionsAdmissionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-admission .row-f, .section-admission .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-admission .admission-info {\n  background: #fff;\n}\n.section-admission .add-spec {\n  margin: 0 0 0 35px;\n}\n.section-admission .add-spec .row {\n  margin: 0px;\n}\n.section-admission .add-spec .panel {\n  padding: 0;\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-admission .add-spec .panel p {\n  margin-top: 25px;\n}\n.section-admission .curriculum {\n  margin-bottom: 0px;\n}\n.section-admission .panel {\n  background: #fff;\n  padding: 50px;\n  padding-bottom: 0px;\n}\n.section-admission .panel .panel-body {\n  width: 50%;\n}\n.section-admission .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n}\n.section-admission .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-admission .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-admission .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-admission h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-admission h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-admission h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-admission .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-admission ul.list {\n  margin: 0px;\n}\n.section-admission ul.list li {\n  color: #000;\n}\n.section-admission ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n.applycation-rules .btn {\n  width: 75%;\n  padding: 15px 0;\n  background: #bf272d;\n  font-family: \"Lora\", serif;\n  margin: 25px auto 0;\n  font-size: 24px;\n  display: block;\n}\n.section-admission-2 {\n  margin: 70px 0px;\n}\n.section-admission-2 .row {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.section-admission-2 .bar {\n  position: relative;\n  padding-top: 15px;\n}\n.section-admission-2 .bar::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100px;\n  height: 5px;\n}\n.section-admission-2 .pp0::after {\n  background: #3e65ac;\n}\n.section-admission-2 .pp1::after {\n  background: #bf272d;\n}\n.section-admission-2 .pp2::after {\n  background: #000000;\n}\n.section-admission-2 .pp3::after {\n  background: #e4e4e4;\n}\n.section-admission-2 .addmin-sec {\n  padding: 0px;\n}\n.section-admission-2 .addmin-sec .row {\n  margin-left: 0px;\n}\n.section-admission-2 .addmin-sec .add-info {\n  padding: 0px;\n  display: flex;\n}\n.section-admission-2 .addmin-sec .add-info:first-child .panel {\n  margin-left: 0px;\n}\n.section-admission-2 .admission-flag {\n  position: relative;\n  color: #fff;\n  padding: 25px 0;\n  height: 250px;\n}\n.section-admission-2 .admission-flag .btn {\n  border: 1px solid #fff;\n  color: #fff;\n  background: none;\n}\n.section-admission-2 p {\n  white-space: pre;\n  margin-top: 15px;\n}\n.section-admission-2 .panel {\n  background: url('bulb.png') no-repeat 40px -10px #fff;\n  margin-left: 5px;\n  padding-top: 270px;\n  padding-bottom: 50px;\n  width: 100%;\n}\n.section-admission-2 .panel .panel-heading {\n  z-index: 2;\n  position: relative;\n}\n.section-admission-2 .panel .btn {\n  position: absolute;\n  bottom: 15px;\n  border: 2px solid #000;\n  background: none;\n  color: #000;\n  z-index: 2;\n}\n.section-admission-2 .panel:hover .btn {\n  border: 2px solid #fff;\n  background: none;\n  color: #fff;\n}\n.section-admission-2 .panel:hover .panel-heading .bar::after {\n  background: #fff !important;\n}\n.section-admission-2 .panel:hover .panel-heading h3, .section-admission-2 .panel:hover .panel-heading p {\n  color: #fff;\n}\n.section-admission-2 .panel:hover::after {\n  content: \"\";\n  background: url('bulb.jpg') no-repeat -65px -50px #bf272d;\n  position: absolute;\n  top: -25px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% + 50px);\n  padding: 325px 20px 0;\n  z-index: 1;\n  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.section-admission-2 .panel i {\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-admission-2 .panel svg {\n  width: 75px;\n  height: 75px;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaXNzaW9ucy9EOlxcYWNhZGVteS9zcmNcXGFwcFxcYWRtaXNzaW9uc1xcYWRtaXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaXNzaW9ucy9hZG1pc3Npb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0Msb0JBQUE7RUFDQSxrQkFBQTtBQ0RGO0FER0k7RUFDSSxnQkFBQTtBQ0RSO0FER0k7RUFDSSxrQkFBQTtBQ0RSO0FERVE7RUFDSSxXQUFBO0FDQVo7QURFSztFQUNPLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQVo7QURDWTtFQUNJLGdCQUFBO0FDQ2hCO0FER0M7RUFDQyxrQkFBQTtBQ0RGO0FER0M7RUFDQyxnQkFBQTtFQUNNLGFBQUE7RUFDQSxtQkFBQTtBQ0RSO0FERUU7RUFDQyxVQUFBO0FDQUg7QURFRTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQUg7QURDRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNDSjtBREFJO0VBQ0MsVUFBQTtFQUNBLHdCQUFBO0VBQ0csZUFBQTtBQ0VSO0FEQ0c7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRElDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FESUM7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FER0U7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNESDtBRElDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNGRjtBRElDO0VBQ0MsV0FBQTtBQ0ZGO0FER0U7RUFDQyxXQUFBO0FDREg7QURFRztFQUNDLG1CQUFBO0FDQUo7QURNQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDSEQ7QURJQztFQUNDLHdCQUFBO0FDRkY7QURPSTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNKUjtBRFFBO0VBQ0MsZ0JBQUE7QUNMRDtBRE1DO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0FDSkY7QURPQztFQUNDLGtCQUFBO0VBQ0EsaUJBQUE7QUNMRjtBRE1FO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0pIO0FEU0U7RUFDQSxtQkFBQTtBQ1BGO0FEU007RUFDSixtQkFBQTtBQ1BGO0FEU007RUFDSixtQkFBQTtBQ1BGO0FEU007RUFDSixtQkFBQTtBQ1BGO0FEVUM7RUFDQyxZQUFBO0FDUkY7QURTRTtFQUNDLGdCQUFBO0FDUEg7QURTRTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FDUEg7QURTSTtFQUNDLGdCQUFBO0FDUEw7QURZQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDVkY7QURXRTtFQUNDLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDVEg7QURZQztFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7QUNWRjtBRFlFO0VBQ0MscURBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDVkg7QURXRztFQUNDLFVBQUE7RUFDQSxrQkFBQTtBQ1RKO0FEV0c7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNUSjtBRGFJO0VBQ0Msc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNYTDtBRG1CTTtFQUNDLDJCQUFBO0FDakJQO0FEb0JLO0VBQ0MsV0FBQTtBQ2xCTjtBRHNCSTtFQUNDLFdBQUE7RUFDQSx5REFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtBQ3BCTDtBRHdCRztFQUNDLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUN0Qko7QUR3Qkc7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ3RCSjtBRDZCQTtFQUVFO0lBQ0MsZ0JBQUE7RUMzQkQ7RUQ2QkQ7SUFDQyxpQkFBQTtFQzNCQTtFRDZCRDtJQUNDLGFBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7RUMzQkE7RUQ2QkQ7SUFDQyxXQUFBO0VDM0JBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pc3Npb25zL2FkbWlzc2lvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1hZG1pc3Npb257XHJcbiAgXHJcblx0LnJvdy1mLCAucm93e1xyXG5cdFx0bWFyZ2luOjcwcHggMCAxMDBweDsgXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuYWRtaXNzaW9uLWluZm97XHJcbiAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgfVxyXG4gICAgLmFkZC1zcGVje1xyXG4gICAgICAgIG1hcmdpbjowIDAgMCAzNXB4O1xyXG4gICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgfVxyXG4gICAgIC5wYW5lbHtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblx0LmN1cnJpY3VsdW17XHJcblx0XHRtYXJnaW4tYm90dG9tOjBweDtcclxuXHR9XHJcblx0LnBhbmVsIHtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICBwYWRkaW5nOjUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206MHB4O1xyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdH1cclxuXHRcdCYuc3RvcnktaW5mb3tcclxuXHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0LmZseWluZy1wbGFuZXtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0dG9wOjBweDtcclxuXHRcdFx0XHRzdmd7XHJcblx0XHRcdFx0XHRmaWxsOiAjZmZmO1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgXHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdHRvcDo1MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAzcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRoMXtcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdH1cclxuXHRoMntcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZy1ib3R0b206NXB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OlwiIFwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTowO1xyXG5cdFx0XHRsZWZ0OjA7XHJcblx0XHRcdHdpZHRoOjUwcHg7XHJcblx0XHRcdGhlaWdodDoycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2YwZjBmMDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDQwJTtcclxuXHR9XHJcblx0dWwubGlzdHtcclxuXHRcdG1hcmdpbjowcHg7XHJcblx0XHRsaXtcclxuXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLm1vcmUtaW5mb3tcclxuXHRmbG9hdDpub25lO1xyXG5cdGNsZWFyOmJvdGg7XHJcblx0cHtcclxuXHRcdG1hcmdpbjo1MHB4IDAgNzBweCA3NXB4IDtcclxuXHR9XHJcbn1cclxuXHJcbi5hcHBseWNhdGlvbi1ydWxlc3tcclxuICAgIC5idG57XHJcbiAgICAgICAgd2lkdGg6NzUlO1xyXG4gICAgICAgIHBhZGRpbmc6MTVweCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2JmMjcyZDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG4gICAgICAgIG1hcmdpbjoyNXB4IGF1dG8gMDtcclxuICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi1hZG1pc3Npb24tMntcclxuXHRtYXJnaW46NzBweCAwcHg7XHJcblx0LnJvd3tcclxuXHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0LmJhcntcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZy10b3A6MTVweDtcclxuXHRcdCY6OmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDowcHg7XHJcblx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHR3aWR0aDoxMDBweDtcclxuXHRcdFx0aGVpZ2h0OjVweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5wcDB7XHJcblx0XHQmOjphZnRlcntcclxuXHRcdGJhY2tncm91bmQ6IzNlNjVhYzt9XHJcblx0fVxyXG5cdC5wcDF7Jjo6YWZ0ZXJ7XHJcblx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7fVxyXG5cdH1cclxuXHQucHAyeyY6OmFmdGVye1xyXG5cdFx0YmFja2dyb3VuZDojMDAwMDAwO31cclxuXHR9XHJcblx0LnBwM3smOjphZnRlcntcclxuXHRcdGJhY2tncm91bmQ6I2U0ZTRlNDt9XHJcblx0fVxyXG5cclxuXHQuYWRkbWluLXNlY3tcclxuXHRcdHBhZGRpbmc6MHB4O1xyXG5cdFx0LnJvd3tcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4O1xyXG5cdFx0fVxyXG5cdFx0LmFkZC1pbmZve1xyXG5cdFx0XHRwYWRkaW5nOjBweDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0JjpmaXJzdC1jaGlsZHtcclxuXHRcdFx0XHQucGFuZWx7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDowcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5hZG1pc3Npb24tZmxhZ3tcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdHBhZGRpbmc6MjVweCAwO1xyXG5cdFx0aGVpZ2h0OjI1MHB4O1xyXG5cdFx0LmJ0bntcclxuXHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB7XHJcblx0XHR3aGl0ZS1zcGFjZTogcHJlO1xyXG5cdFx0bWFyZ2luLXRvcDoxNXB4O1xyXG5cdH1cclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9idWxiLnBuZykgbm8tcmVwZWF0IDQwcHggLTEwcHggI2ZmZjtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHRcdFx0cGFkZGluZy10b3A6IDI3MHB4O1xyXG5cdFx0XHRwYWRkaW5nLWJvdHRvbTo1MHB4O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0LnBhbmVsLWhlYWRpbmd7XHJcblx0XHRcdFx0ei1pbmRleDogMjtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdH1cclxuXHRcdFx0LmJ0bntcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0Ym90dG9tOjE1cHg7XHJcblx0XHRcdFx0Ym9yZGVyOjJweCBzb2xpZCAjMDAwO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6bm9uZTtcclxuXHRcdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHRcdHotaW5kZXg6IDI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Jjpob3ZlcntcclxuXHRcdFx0XHQuYnRue1xyXG5cdFx0XHRcdFx0Ym9yZGVyOjJweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdCY6aG92ZXJ7XHJcblx0XHRcdFx0LnBhbmVsLWhlYWRpbmd7XHJcblx0XHRcdFx0XHQuYmFye1xyXG5cdFx0XHRcdFx0XHQmOjphZnRlcntcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGgzLCBwe1xyXG5cdFx0XHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdFx0Y29udGVudDonJztcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVsYi5qcGcpIG5vLXJlcGVhdCAtNjVweCAtNTBweCAjYmYyNzJkO1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0dG9wOiAtMjVweDtcclxuXHRcdFx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBjYWxjKDEwMCUgKyA1MHB4KTtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDMyNXB4IDIwcHggMDtcclxuXHRcdFx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGl7XHJcblx0XHRcdFx0bWFyZ2luOjAgYXV0bztcclxuXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN2Z3tcclxuXHRcdFx0XHR3aWR0aDo3NXB4O1xyXG5cdFx0XHRcdGhlaWdodDo3NXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdFx0LnJvdy1mLCAucm93LCBoMXtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4OyBcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG5cdC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcbn1cclxufSIsIi5zZWN0aW9uLWFkbWlzc2lvbiAucm93LWYsIC5zZWN0aW9uLWFkbWlzc2lvbiAucm93IHtcbiAgbWFyZ2luOiA3MHB4IDAgMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRtaXNzaW9uLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5hZGQtc3BlYyB7XG4gIG1hcmdpbjogMCAwIDAgMzVweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRkLXNwZWMgLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5hZGQtc3BlYyAucGFuZWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRkLXNwZWMgLnBhbmVsIHAge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5jdXJyaWN1bHVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAucGFuZWwuc3RvcnktaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnBhbmVsLnN0b3J5LWluZm8gLmZseWluZy1wbGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAucGFuZWwuc3RvcnktaW5mbyAuZmx5aW5nLXBsYW5lIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5wYW5lbC5zdG9yeS1pbmZvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDUwcHg7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiBoMSB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIGgyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiBoMjo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmltZy1mbGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNDAlO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIHVsLmxpc3Qge1xuICBtYXJnaW46IDBweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiB1bC5saXN0IGxpIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gdWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cblxuLm1vcmUtaW5mbyB7XG4gIGZsb2F0OiBub25lO1xuICBjbGVhcjogYm90aDtcbn1cbi5tb3JlLWluZm8gcCB7XG4gIG1hcmdpbjogNTBweCAwIDcwcHggNzVweDtcbn1cblxuLmFwcGx5Y2F0aW9uLXJ1bGVzIC5idG4ge1xuICB3aWR0aDogNzUlO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIG1hcmdpbjogMjVweCBhdXRvIDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIHtcbiAgbWFyZ2luOiA3MHB4IDBweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5yb3cge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLmJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAuYmFyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDVweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wcDA6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wcDE6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wcDI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wcDM6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2U0ZTRlNDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5hZGRtaW4tc2VjIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLmFkZG1pbi1zZWMgLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAuYWRkbWluLXNlYyAuYWRkLWluZm8ge1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAuYWRkbWluLXNlYyAuYWRkLWluZm86Zmlyc3QtY2hpbGQgLnBhbmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5hZG1pc3Npb24tZmxhZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDI1cHggMDtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5hZG1pc3Npb24tZmxhZyAuYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiBwIHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2J1bGIucG5nKSBuby1yZXBlYXQgNDBweCAtMTBweCAjZmZmO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogMjcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wYW5lbCAucGFuZWwtaGVhZGluZyB7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wYW5lbCAuYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjMDAwO1xuICB6LWluZGV4OiAyO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLnBhbmVsOmhvdmVyIC5idG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wYW5lbDpob3ZlciAucGFuZWwtaGVhZGluZyAuYmFyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wYW5lbDpob3ZlciAucGFuZWwtaGVhZGluZyBoMywgLnNlY3Rpb24tYWRtaXNzaW9uLTIgLnBhbmVsOmhvdmVyIC5wYW5lbC1oZWFkaW5nIHAge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wYW5lbDpob3Zlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9idWxiLmpwZykgbm8tcmVwZWF0IC02NXB4IC01MHB4ICNiZjI3MmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA1MHB4KTtcbiAgcGFkZGluZzogMzI1cHggMjBweCAwO1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wYW5lbCBpIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWwgc3ZnIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdy1mLCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3csIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuYnJlYWRjdW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmltZy1mbGFnIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admissions/admissions.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admissions/admissions.component.ts ***!
    \****************************************************/

  /*! exports provided: AdmissionsComponent */

  /***/
  function srcAppAdmissionsAdmissionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmissionsComponent", function () {
      return AdmissionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdmissionsComponent = /*#__PURE__*/function () {
      function AdmissionsComponent() {
        _classCallCheck(this, AdmissionsComponent);

        this.admission = [{
          icon: '#icon_ethicalEdu',
          description: "Ethical\n      Education"
        }, {
          icon: '#icon_nurturing',
          description: "Nurturing\n      Individual\n      Passion"
        }, {
          icon: '#icon_community',
          description: "Building\nA Community"
        }];
        this.admission_2 = [{
          title: "Admission\nto Pre-Primary",
          bar: 'pp0',
          description: "The child will have to \nbe 2 years 6 months as \non 1st June 2020 "
        }, {
          title: 'Admission to Primary',
          bar: 'pp1',
          description: "The child needs to be 3 \nyears 6 months as on\n1st June 2020"
        }, {
          title: 'Admission to Middle School',
          bar: 'pp2',
          description: "The child needs to be 4\nyears 6 months as on 1st \nJune 2020"
        }, {
          title: 'Admission to High School',
          bar: 'pp3',
          description: "The child needs to be 5 \nyears 6 months as on 1st \nJune 2020"
        }];
      }

      _createClass(AdmissionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdmissionsComponent;
    }();

    AdmissionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admissions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admissions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admissions/admissions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admissions.component.scss */
      "./src/app/admissions/admissions.component.scss"))["default"]]
    })], AdmissionsComponent);
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
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _thestudyculture_thestudyculture_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./thestudyculture/thestudyculture.component */
    "./src/app/thestudyculture/thestudyculture.component.ts");
    /* harmony import */


    var _thepremianstory_thepremianstory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./thepremianstory/thepremianstory.component */
    "./src/app/thepremianstory/thepremianstory.component.ts");
    /* harmony import */


    var _thepremianedge_thepremianedge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./thepremianedge/thepremianedge.component */
    "./src/app/thepremianedge/thepremianedge.component.ts");
    /* harmony import */


    var _admissions_admissions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admissions/admissions.component */
    "./src/app/admissions/admissions.component.ts");
    /* harmony import */


    var _apply_apply_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./apply/apply.component */
    "./src/app/apply/apply.component.ts");
    /* harmony import */


    var _eng_eng_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./eng/eng.component */
    "./src/app/eng/eng.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _blob_blob_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./blob/blob.component */
    "./src/app/blob/blob.component.ts");
    /* harmony import */


    var _theteam_theteam_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./theteam/theteam.component */
    "./src/app/theteam/theteam.component.ts");

    var routes = [{
      path: 'Home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'ThePremiaCulture',
      component: _thestudyculture_thestudyculture_component__WEBPACK_IMPORTED_MODULE_7__["ThestudycultureComponent"]
    }, {
      path: 'ThePremiaStory',
      component: _thepremianstory_thepremianstory_component__WEBPACK_IMPORTED_MODULE_8__["ThepremianstoryComponent"]
    }, {
      path: 'ThePremiaEdge',
      component: _thepremianedge_thepremianedge_component__WEBPACK_IMPORTED_MODULE_9__["ThepremianedgeComponent"]
    }, {
      path: 'JoinThePremiaPride',
      component: _admissions_admissions_component__WEBPACK_IMPORTED_MODULE_10__["AdmissionsComponent"]
    }, {
      path: 'HowToApply',
      component: _apply_apply_component__WEBPACK_IMPORTED_MODULE_11__["ApplyComponent"]
    }, {
      path: 'CatchUpOverCoffee',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]
    }, {
      path: 'ThePremiaCorner',
      component: _blob_blob_component__WEBPACK_IMPORTED_MODULE_14__["BlobComponent"]
    }, {
      path: 'ThePremiaLeague',
      component: _theteam_theteam_component__WEBPACK_IMPORTED_MODULE_15__["TheteamComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _thestudyculture_thestudyculture_component__WEBPACK_IMPORTED_MODULE_7__["ThestudycultureComponent"], _thepremianstory_thepremianstory_component__WEBPACK_IMPORTED_MODULE_8__["ThepremianstoryComponent"], _thepremianedge_thepremianedge_component__WEBPACK_IMPORTED_MODULE_9__["ThepremianedgeComponent"], _admissions_admissions_component__WEBPACK_IMPORTED_MODULE_10__["AdmissionsComponent"], _apply_apply_component__WEBPACK_IMPORTED_MODULE_11__["ApplyComponent"], _eng_eng_component__WEBPACK_IMPORTED_MODULE_12__["EngComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _blob_blob_component__WEBPACK_IMPORTED_MODULE_14__["BlobComponent"], _theteam_theteam_component__WEBPACK_IMPORTED_MODULE_15__["TheteamComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        enableTracing: false,
        scrollPositionRestoration: 'enabled'
      }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"]],
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


    __webpack_exports__["default"] = "body {\n  color: #000;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 14px;\n  background: url('body.png') repeat #f0f0f0;\n}\n\n.left-space {\n  padding-left: 70px;\n  float: left;\n  width: 100%;\n}\n\n.slick-prev:before, .slick-next:before {\n  color: #000;\n}\n\n* {\n  outline: none;\n}\n\na {\n  cursor: pointer;\n}\n\n.remove-scroll {\n  overflow: hidden;\n}\n\n.form-control, .btn {\n  border-radius: 0;\n}\n\n.v-flex {\n  align-self: center;\n}\n\n.lines {\n  display: none;\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  background: #fff;\n  top: 0;\n}\n\n.lines._1 {\n  left: 20%;\n}\n\n.lines._2 {\n  left: 40%;\n}\n\n.lines._3 {\n  left: 60%;\n}\n\n.lines._4 {\n  left: 80%;\n}\n\n.lines._5 {\n  left: 100%;\n}\n\n.breadcum {\n  margin-top: 115px;\n  margin-left: 70px;\n  font-family: \"Lora\", serif;\n}\n\n.breadcum span {\n  margin: 0 15px;\n}\n\n.breadcum .icon-ex-small svg {\n  width: 14px;\n  height: 14px;\n}\n\n.clearfix {\n  clear: both;\n  float: none;\n}\n\n.text-highlighter {\n  color: #bf272d;\n}\n\n.bg-highlighter {\n  background: #bf272d;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.btn {\n  font-weight: bold;\n  font-size: 12px;\n  padding: 5px 10px;\n}\n\nh1 {\n  font-size: 40px;\n  font-family: \"Lora\", serif;\n}\n\nh2 {\n  font-size: 34px;\n  font-family: \"Lora\", serif;\n}\n\nh3 {\n  font-size: 30px;\n}\n\nh4 {\n  font-size: 26px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n  line-height: 32px;\n}\n\nh1 {\n  font-weight: bold;\n}\n\n.center {\n  text-align: center;\n}\n\n.heading-highlight {\n  color: #f7a05c;\n}\n\nsvg {\n  vertical-align: middle;\n  margin: auto;\n  align-content: center;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n.icon-big > svg {\n  width: 100px;\n  height: 100px;\n}\n\n.icon-medium > svg {\n  width: 50px;\n  height: 50px;\n}\n\n.icon-small > svg {\n  width: 34px;\n  height: 34px;\n}\n\n.icon-ex-small > svg {\n  width: 24px;\n  height: 24px;\n}\n\n.section-admission .slick-prev:before, .section-admission .slick-next:before {\n  color: #000;\n}\n\n.section-admission .slick-prev, .section-admission .slick-next {\n  bottom: -25px;\n  top: auto;\n  right: 0;\n  left: auto !important;\n}\n\n.section-admission .slick-prev {\n  right: 25px;\n}\n\n.premian-league .slick-slider .slick-slide {\n  margin: 0 50px;\n}\n\n.premian-league .slick-prev, .premian-league .slick-next {\n  bottom: -25px;\n  top: auto;\n  right: 0;\n  left: auto !important;\n}\n\n.premian-league .slick-prev:before, .premian-league .slick-next:before {\n  color: #000;\n}\n\n.premian-league .slick-prev {\n  right: 25px;\n}\n\n.slick-slider {\n  width: 100%;\n  margin: auto;\n}\n\n.slick-slider .slick-slide {\n  margin: 0 15px;\n}\n\n.recent-article .slick-prev {\n  right: 60px !important;\n}\n\n.recent-article .slick-prev, .recent-article .slick-next {\n  background: #bf272d;\n  bottom: auto;\n  top: -25px;\n  right: 15px;\n  left: auto !important;\n  padding: 0px 25px;\n}\n\n.recent-article .slick-prev:before, .recent-article .slick-next:before {\n  color: #fff;\n}\n\n.inner-banner {\n  margin-top: 70px;\n  position: relative;\n}\n\n.inner-banner img {\n  width: 100%;\n}\n\n.inner-banner .page-title {\n  position: absolute;\n  bottom: 60px;\n  background: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  padding: 70px 0;\n  color: #214f7a;\n}\n\ntextarea.form-control {\n  border-radius: 15px;\n  resize: none;\n}\n\nimg {\n  width: 100%;\n}\n\n.main-banner .carousel-caption h3 {\n  color: #bf272d;\n  font-size: 40px;\n  font-weight: bold;\n  font-family: \"Lora\", serif;\n}\n\n.main-banner .carousel-caption p {\n  color: #000;\n  font-weight: bold;\n}\n\nul.list {\n  margin-top: 35px;\n}\n\nul.list li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  color: #fff;\n}\n\nul.list li::before {\n  content: \" \";\n  background: #fff;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.sub-header .panel {\n  padding-bottom: 0px !important;\n  padding-right: 0px !important;\n}\n\n.sub-header .doodle {\n  font-size: 72px;\n  font-family: \"Lora\", serif;\n  color: #f0f0f0;\n  text-align: right;\n  line-height: 90px;\n}\n\n.partner .slick-list {\n  padding: 50px 0px;\n}\n\n.main-page {\n  float: none;\n}\n\n.main-page .flying-img {\n  display: none;\n}\n\n.flying-img {\n  position: absolute;\n  width: 150px;\n  z-index: -1;\n  opacity: 0.5;\n  height: 100%;\n  top: 0px;\n}\n\n.flying-img.right-fly {\n  background: url('right.png') repeat-y;\n  right: 0px;\n}\n\n.flying-img.left-fly {\n  background: url('left.png') repeat-y;\n  left: 70px;\n}\n\n@media (max-width: 576px) {\n  nav {\n    width: 100% !important;\n  }\n\n  section:first-child {\n    margin-top: 150px;\n    overflow: hidden;\n  }\n\n  .row, .row-f {\n    margin: 0 !important;\n  }\n\n  .img-flag, .panel-body {\n    width: 100% !important;\n  }\n\n  .left-space {\n    padding-left: 0px;\n    float: left;\n  }\n\n  .navbar-vertical {\n    display: none;\n  }\n\n  .newsletter .btn {\n    margin: 15px 0 0 0;\n  }\n\n  .navbar-nav-list {\n    float: left;\n  }\n\n  .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGFjYWRlbXkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxlQUFBO0FDRUQ7O0FEQUE7RUFDQyxnQkFBQTtBQ0dEOztBRERBO0VBQ0MsZ0JBQUE7QUNJRDs7QURGQTtFQUNDLGtCQUFBO0FDS0Q7O0FESEE7RUFDQyxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtBQ01EOztBRExDO0VBQ0MsU0FBQTtBQ09GOztBRExDO0VBQ0MsU0FBQTtBQ09GOztBRExDO0VBQ0MsU0FBQTtBQ09GOztBRExDO0VBQ0MsU0FBQTtBQ09GOztBRExDO0VBQ0MsVUFBQTtBQ09GOztBREpBO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDT0Q7O0FETkM7RUFDQyxjQUFBO0FDUUY7O0FETEU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ09IOztBRERBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNJRDs7QURBQTtFQUNDLGNBQUE7QUNHRDs7QUREQTtFQUNDLG1CQUFBO0FDSUQ7O0FERkE7RUFDQyxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDS0Q7O0FESEE7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDRyxpQkFBQTtBQ01KOztBREpBO0VBQ0MsZUFBQTtFQUNBLDBCQUFBO0FDT0Q7O0FETEE7RUFDQyxlQUFBO0VBQ0EsMEJBQUE7QUNRRDs7QUROQTtFQUNDLGVBQUE7QUNTRDs7QURQQTtFQUNDLGVBQUE7QUNVRDs7QURSQTtFQUNDLGVBQUE7QUNXRDs7QURUQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ1lEOztBRFZBO0VBQ0MsaUJBQUE7QUNhRDs7QURYQTtFQUNDLGtCQUFBO0FDY0Q7O0FEWkE7RUFDSSxjQUFBO0FDZUo7O0FEWkE7RUFDQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ2VEOztBRGJBO0VBQ0MsZ0JBQUE7QUNnQkQ7O0FEZEE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ2lCRDs7QURmQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDa0JEOztBRGhCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDbUJEOztBRGpCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDb0JEOztBRGhCRTtFQUNBLFdBQUE7QUNtQkY7O0FEakJDO0VBQ0MsYUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ00scUJBQUE7QUNtQlI7O0FEakJDO0VBQ0MsV0FBQTtBQ21CRjs7QURiRTtFQUNDLGNBQUE7QUNnQkg7O0FEWkM7RUFDQyxhQUFBO0VBQ0MsU0FBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtBQ2NIOztBRGJHO0VBQ0MsV0FBQTtBQ2VKOztBRFhDO0VBQ0MsV0FBQTtBQ2FGOztBRFRBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNZRDs7QURYQztFQUNDLGNBQUE7QUNhRjs7QURSQztFQUNDLHNCQUFBO0FDV0Y7O0FEVEM7RUFDQyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNXRjs7QURWRztFQUNDLFdBQUE7QUNZSjs7QURORTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNTSjs7QURSSTtFQUNJLFdBQUE7QUNVUjs7QURSSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDVVI7O0FETkE7RUFDQyxtQkFBQTtFQUNBLFlBQUE7QUNTRDs7QUROQTtFQUNDLFdBQUE7QUNTRDs7QURKRTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ09IOztBRExFO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0FDT0g7O0FERkE7RUFDQyxnQkFBQTtBQ0tEOztBREpDO0VBQ0Msc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNNRjs7QURMRTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ09IOztBRHlCQztFQUNDLDhCQUFBO0VBQ0EsNkJBQUE7QUN0QkY7O0FEd0JDO0VBQ0csZUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUN0Qko7O0FEMkJDO0VBQ0MsaUJBQUE7QUN4QkY7O0FENkJBO0VBQ0MsV0FBQTtBQzFCRDs7QUQyQkM7RUFDQyxhQUFBO0FDekJGOztBRDZCQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUMxQkQ7O0FEMkJDO0VBQ0MscUNBQUE7RUFDQSxVQUFBO0FDekJGOztBRDJCQztFQUNDLG9DQUFBO0VBQ0EsVUFBQTtBQ3pCRjs7QUR5R0E7RUFDQztJQUNDLHNCQUFBO0VDdEdBOztFRHdHRDtJQUNDLGlCQUFBO0lBQ0EsZ0JBQUE7RUNyR0E7O0VEdUdEO0lBQ0Msb0JBQUE7RUNwR0E7O0VEdUdEO0lBQ0Msc0JBQUE7RUNwR0E7O0VEc0dEO0lBQ0MsaUJBQUE7SUFDQSxXQUFBO0VDbkdBOztFRHFHRDtJQUNDLGFBQUE7RUNsR0E7O0VEcUdBO0lBQ0Msa0JBQUE7RUNsR0Q7O0VEcUdEO0lBQ0MsV0FBQTtFQ2xHQTs7RURvR0Q7SUFDQSxtQkFBQTtJQUNHLGtCQUFBO0VDakdGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG5cdGNvbG9yOiMwMDA7XHJcblx0Zm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdGJhY2tncm91bmQ6dXJsKC4uL2Fzc2V0cy9pbWFnZXMvYm9keS5wbmcpIHJlcGVhdCAjZjBmMGYwO1xyXG59XHJcblxyXG4ubGVmdC1zcGFjZXtcclxuXHRwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnNsaWNrLXByZXY6YmVmb3JlLCAuc2xpY2stbmV4dDpiZWZvcmV7XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG5cclxuKntcclxuXHRvdXRsaW5lOm5vbmU7XHJcbn1cclxuYXtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnJlbW92ZS1zY3JvbGx7XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wsIC5idG57XHJcblx0Ym9yZGVyLXJhZGl1czogMDtcclxufVxyXG4udi1mbGV4e1xyXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4ubGluZXN7XHJcblx0ZGlzcGxheTpub25lO1xyXG5cdHdpZHRoOjJweDtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0YmFja2dyb3VuZDojZmZmO1xyXG5cdHRvcDowO1xyXG5cdCYuXzF7XHJcblx0XHRsZWZ0OjIwJTtcclxuXHR9XHJcblx0Ji5fMntcclxuXHRcdGxlZnQ6NDAlO1xyXG5cdH1cclxuXHQmLl8ze1xyXG5cdFx0bGVmdDo2MCU7XHJcblx0fVxyXG5cdCYuXzR7XHJcblx0XHRsZWZ0OjgwJTtcclxuXHR9XHJcblx0Ji5fNXtcclxuXHRcdGxlZnQ6MTAwJTtcclxuXHR9XHJcbn1cclxuLmJyZWFkY3Vte1xyXG5cdG1hcmdpbi10b3A6MTE1cHg7XHJcblx0bWFyZ2luLWxlZnQ6NzBweDtcclxuXHRmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG5cdHNwYW57XHJcblx0XHRtYXJnaW46MCAxNXB4O1xyXG5cdH1cclxuXHQuaWNvbi1leC1zbWFsbHtcclxuXHRcdHN2Z3tcclxuXHRcdFx0d2lkdGg6IDE0cHg7XHJcblx0XHRcdGhlaWdodDogMTRweDtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbn1cclxuXHJcbi5jbGVhcmZpeHtcclxuXHRjbGVhcjogYm90aDtcclxuXHRmbG9hdDpub25lO1xyXG5cdFxyXG59XHJcblxyXG4udGV4dC1oaWdobGlnaHRlcntcclxuXHRjb2xvcjojYmYyNzJkO1xyXG59XHJcbi5iZy1oaWdobGlnaHRlcntcclxuXHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcbn1cclxudWx7XHJcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cdG1hcmdpbjowO1xyXG5cdHBhZGRpbmc6MDtcclxufVxyXG4uYnRue1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuaDF7XHJcblx0Zm9udC1zaXplOjQwcHg7XHJcblx0Zm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XHJcbn1cclxuaDJ7XHJcblx0Zm9udC1zaXplOjM0cHg7XHJcblx0Zm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxufVxyXG5oM3tcclxuXHRmb250LXNpemU6MzBweDtcclxufVxyXG5oNHtcclxuXHRmb250LXNpemU6MjZweDtcclxufVxyXG5oNXtcclxuXHRmb250LXNpemU6MjJweDtcclxufVxyXG5oNntcclxuXHRmb250LXNpemU6MThweDsgXHJcblx0bGluZS1oZWlnaHQ6IDMycHg7XHJcbn1cclxuaDF7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG4uY2VudGVye1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn1cdFxyXG4uaGVhZGluZy1oaWdobGlnaHR7XHJcbiAgICBjb2xvcjojZjdhMDVjO1xyXG59XHJcblxyXG5zdmcge1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5zdmc6bm90KDpyb290KSB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uaWNvbi1iaWc+c3ZnIHtcclxuXHR3aWR0aDogMTAwcHg7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxufVxyXG4uaWNvbi1tZWRpdW0+c3ZnIHtcclxuXHR3aWR0aDogNTBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmljb24tc21hbGw+c3ZnIHtcclxuXHR3aWR0aDogMzRweDtcclxuXHRoZWlnaHQ6IDM0cHg7XHJcbn1cclxuLmljb24tZXgtc21hbGw+c3ZnIHtcclxuXHR3aWR0aDogMjRweDtcclxuXHRoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWFkbWlzc2lvbntcclxuXHRcdC5zbGljay1wcmV2OmJlZm9yZSwgLnNsaWNrLW5leHQ6YmVmb3Jle1xyXG5cdFx0Y29sb3I6IzAwMDtcclxuXHR9XHJcblx0LnNsaWNrLXByZXYsIC5zbGljay1uZXh0e1xyXG5cdFx0Ym90dG9tOi0yNXB4O1xyXG5cdFx0dG9wOmF1dG87XHJcblx0XHRyaWdodDogMDtcclxuICAgICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5zbGljay1wcmV2e1xyXG5cdFx0cmlnaHQ6MjVweDtcclxuXHR9XHJcbn1cclxuXHJcbi5wcmVtaWFuLWxlYWd1ZXtcclxuXHQuc2xpY2stc2xpZGVye1xyXG5cdFx0LnNsaWNrLXNsaWRle1xyXG5cdFx0XHRtYXJnaW46MCA1MHB4O1xyXG5cdFx0fVxyXG5cdH1cdFxyXG5cclxuXHQuc2xpY2stcHJldiwgLnNsaWNrLW5leHR7XHJcblx0XHRib3R0b206IC0yNXB4O1xyXG5cdFx0XHR0b3A6IGF1dG87XHJcblx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0XHRcdCY6YmVmb3Jle1x0XHJcblx0XHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRcdFxyXG5cdFx0XHR9XHJcblx0fVxyXG5cdC5zbGljay1wcmV2IHtcclxuXHRcdHJpZ2h0OiAyNXB4O1xyXG5cdH1cclxuXHRcclxufVxyXG4uc2xpY2stc2xpZGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0LnNsaWNrLXNsaWRle1xyXG5cdFx0bWFyZ2luOjAgMTVweDtcclxuXHR9XHJcbiAgfVxyXG5cclxuICAucmVjZW50LWFydGljbGV7XHJcblx0LnNsaWNrLXByZXZ7XHJcblx0XHRyaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuc2xpY2stcHJldiwgLnNsaWNrLW5leHR7XHJcblx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRib3R0b206IGF1dG87XHJcblx0XHR0b3A6IC0yNXB4O1xyXG5cdFx0cmlnaHQ6IDE1cHg7XHJcblx0XHRsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nOiAwcHggMjVweDtcclxuXHRcdFx0JjpiZWZvcmV7XHRcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHJcblx0XHRcdH1cclxuXHR9ICBcclxuICB9XHJcblxyXG4gIC5pbm5lci1iYW5uZXJ7XHJcbiAgICBtYXJnaW4tdG9wOjcwcHg7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG4gICAgLnBhZ2UtdGl0bGV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOnJnYigyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDcwcHggMDtcclxuICAgICAgICBjb2xvcjojMjE0ZjdhO1xyXG4gICAgfVxyXG59XHJcblxyXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2x7XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHRyZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbmltZ3tcclxuXHR3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4ubWFpbi1iYW5uZXJ7XHJcblx0LmNhcm91c2VsLWNhcHRpb257XHJcblx0XHRoM3tcclxuXHRcdFx0Y29sb3I6I2JmMjcyZDtcclxuXHRcdFx0Zm9udC1zaXplOjQwcHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG5cdFx0fVxyXG5cdFx0cHtcclxuXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG51bC5saXN0e1xyXG5cdG1hcmdpbi10b3A6MzVweDtcclxuXHRsaXtcclxuXHRcdHBhZGRpbmc6IDAgMCAyMHB4IDIwcHg7XHJcblx0XHRsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHR0b3A6OHB4O1xyXG5cdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0d2lkdGg6IDEwcHg7IFxyXG5cdFx0XHRoZWlnaHQ6MTBweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyAuY29sLCAuY29sLTEsIC5jb2wtMTAsIC5jb2wtMTEsIC5jb2wtMTIsIC5jb2wtMiwgLmNvbC0zLCAuY29sLTQsIC5jb2wtNSwgLmNvbC02LCAuY29sLTcsIC5jb2wtOCwgLmNvbC05LCAuY29sLWF1dG8sIC5jb2wtbGcsIC5jb2wtbGctMSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbGctYXV0bywgLmNvbC1tZCwgLmNvbC1tZC0xLCAuY29sLW1kLTEwLCAuY29sLW1kLTExLCAuY29sLW1kLTEyLCAuY29sLW1kLTIsIC5jb2wtbWQtMywgLmNvbC1tZC00LCAuY29sLW1kLTUsIC5jb2wtbWQtNiwgLmNvbC1tZC03LCAuY29sLW1kLTgsIC5jb2wtbWQtOSwgLmNvbC1tZC1hdXRvLCAuY29sLXNtLCAuY29sLXNtLTEsIC5jb2wtc20tMTAsIC5jb2wtc20tMTEsIC5jb2wtc20tMTIsIC5jb2wtc20tMiwgLmNvbC1zbS0zLCAuY29sLXNtLTQsIC5jb2wtc20tNSwgLmNvbC1zbS02LCAuY29sLXNtLTcsIC5jb2wtc20tOCwgLmNvbC1zbS05LCAuY29sLXNtLWF1dG8sIC5jb2wteGwsIC5jb2wteGwtMSwgLmNvbC14bC0xMCwgLmNvbC14bC0xMSwgLmNvbC14bC0xMiwgLmNvbC14bC0yLCAuY29sLXhsLTMsIC5jb2wteGwtNCwgLmNvbC14bC01LCAuY29sLXhsLTYsIC5jb2wteGwtNywgLmNvbC14bC04LCAuY29sLXhsLTksIC5jb2wteGwtYXV0b3tcclxuLy8gXHRwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpe1xyXG4vLyBcdC5jb250YWluZXJ7XHJcbi8vIFx0d2lkdGg6Y2FsYyg3MjBweCAtIDY0cHgpO1xyXG4vLyBcdG1hcmdpbi1yaWdodDo2NHB4O1xyXG4vLyB9XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYShtaW4td2lkdGg6IDk5MnB4KXtcclxuLy8gXHQuY29udGFpbmVye1xyXG4vLyBcdHdpZHRoOmNhbGMoOTYwcHggLSA2NHB4KTtcclxuLy8gXHRtYXJnaW4tbGVmdDo2NHB4O1xyXG4vLyB9XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYShtaW4td2lkdGg6IDEyMDBweCl7XHJcbi8vIFx0LmNvbnRhaW5lcntcclxuLy8gXHR3aWR0aDpjYWxjKDExNDBweCAtIDY0cHgpO1xyXG4vLyBcdG1hcmdpbi1sZWZ0OjY0cHg7XHJcbi8vIH1cclxuLy8gfVxyXG5cclxuLnN1Yi1oZWFkZXJ7XHJcblx0LnBhbmVse1xyXG5cdFx0cGFkZGluZy1ib3R0b206MHB4ICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OjBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuZG9vZGxle1xyXG5cdCAgIGZvbnQtc2l6ZTogNzJweDtcclxuXHQgICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG5cdCAgIGNvbG9yOiNmMGYwZjA7XHJcblx0ICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0ICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcblx0fVxyXG59XHJcblxyXG4ucGFydG5lcntcclxuXHQuc2xpY2stbGlzdHtcclxuXHRcdHBhZGRpbmc6NTBweCAwcHg7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLm1haW4tcGFnZXtcclxuXHRmbG9hdDpub25lO1xyXG5cdC5mbHlpbmctaW1ne1xyXG5cdFx0ZGlzcGxheTpub25lO1xyXG5cdH1cclxufVxyXG5cclxuLmZseWluZy1pbWd7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOjE1MHB4O1xyXG5cdHotaW5kZXg6IC0xO1xyXG5cdG9wYWNpdHk6IDAuNTtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHR0b3A6MHB4O1xyXG5cdCYucmlnaHQtZmx5e1xyXG5cdFx0YmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvZmx5aW5nL3JpZ2h0LnBuZykgcmVwZWF0LXk7XHJcblx0XHRyaWdodDowcHg7XHJcblx0fVxyXG5cdCYubGVmdC1mbHl7XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9mbHlpbmcvbGVmdC5wbmcpIHJlcGVhdC15O1xyXG5cdFx0bGVmdDo3MHB4O1xyXG5cdH1cclxufVxyXG5cclxuLy8gLmZseWluZy1pbWd7XHJcbi8vIFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4vLyBcdHdpZHRoOjEwMHB4O1xyXG4vLyBcdHotaW5kZXg6IDE7XHJcbi8vIFx0b3BhY2l0eTogMC44O1xyXG4vLyBcdCYuXzF7XHJcbi8vIFx0XHRsZWZ0OjgwcHg7XHJcbi8vIFx0XHR0b3A6MTAwcHg7XHJcbi8vIFx0fVxyXG4vLyBcdCYuXzJ7XHJcbi8vIFx0XHRsZWZ0OjgwcHg7XHJcbi8vIFx0XHR0b3A6MTgwcHg7XHJcbi8vIFx0fVxyXG4vLyBcdCYuXzN7XHJcbi8vIFx0XHRsZWZ0OjgwcHg7XHJcbi8vIFx0XHR0b3A6MTIwcHg7XHJcbi8vIFx0fVxyXG4vLyBcdCYuXzR7XHJcbi8vIFx0XHRyaWdodDo4MHB4O1xyXG4vLyBcdFx0dG9wOjEyMHB4O1xyXG4vLyBcdH1cclxuLy8gXHQmLl81e1xyXG4vLyBcdFx0bGVmdDozMDBweDtcclxuLy8gXHRcdHRvcDo5MHB4O1xyXG4vLyBcdH1cclxuLy8gXHQmLl82e1xyXG4vLyBcdFx0cmlnaHQ6OTBweDtcclxuLy8gXHRcdHRvcDoxNTBweDtcclxuLy8gXHR9XHJcbi8vIFx0Ji5fN3tcclxuLy8gXHRcdGxlZnQ6NzBweDtcclxuLy8gXHRcdHRvcDoxNzBweDtcclxuLy8gXHR9XHJcbi8vIFx0Ji5fOHtcclxuLy8gXHRcdHJpZ2h0OjIwcHg7XHJcbi8vIFx0XHR0b3A6MjAwcHg7XHJcbi8vIFx0fVxyXG4vLyBcdCYuXzl7XHJcbi8vIFx0XHRsZWZ0OjgwcHg7XHJcbi8vIFx0XHR0b3A6MjMwcHg7XHJcbi8vIFx0fVxyXG4vLyBcdCYuXzEwe1xyXG4vLyBcdFx0cmlnaHQ6MTBweDtcclxuLy8gXHRcdHRvcDoyMzBweDtcclxuLy8gXHR9XHJcbi8vIFx0Ji5fMTF7XHJcbi8vIFx0XHRsZWZ0OjBweDtcclxuLy8gXHRcdHRvcDowcHg7XHJcbi8vIFx0fVxyXG4vLyBcdCYuXzEye1xyXG4vLyBcdFx0bGVmdDowcHg7XHJcbi8vIFx0XHR0b3A6MHB4O1xyXG4vLyBcdH1cclxuLy8gXHQmLl8xNHtcclxuLy8gXHRcdHJpZ2h0OjBweDtcclxuLy8gXHRcdHRvcDowcHg7XHJcbi8vIFx0fVxyXG4vLyBcdCYuXzE1e1xyXG4vLyBcdFx0cmlnaHQ6MHB4O1xyXG4vLyBcdFx0dG9wOjBweDtcclxuLy8gXHR9XHJcbi8vIFx0Ji5fMTZ7XHJcbi8vIFx0XHRyaWdodDowcHg7XHJcbi8vIFx0XHR0b3A6MHB4O1xyXG4vLyBcdH1cclxuLy8gXHQmLl8xN3tcclxuLy8gXHRcdGxlZnQ6MHB4O1xyXG4vLyBcdFx0dG9wOjBweDtcclxuLy8gXHR9XHJcbi8vIFx0Ji5fMTh7XHJcbi8vIFx0XHRyaWdodDowcHg7XHJcbi8vIFx0XHR0b3A6MHB4O1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0bmF2e1xyXG5cdFx0d2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRzZWN0aW9uOmZpcnN0LWNoaWxke1xyXG5cdFx0bWFyZ2luLXRvcDoxNTBweDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cdC5yb3cgLCAucm93LWZ7XHJcblx0XHRtYXJnaW46MCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRcclxuXHQuaW1nLWZsYWcsIC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQubGVmdC1zcGFjZXtcclxuXHRcdHBhZGRpbmctbGVmdDogMHB4O1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0fVxyXG5cdC5uYXZiYXItdmVydGljYWx7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG5cdC5uZXdzbGV0dGVyIHtcclxuXHRcdC5idG57XHJcblx0XHRcdG1hcmdpbjoxNXB4IDAgMCAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQubmF2YmFyLW5hdi1saXN0e1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0fVxyXG5cdC5jb2wsIC5jb2wtMSwgLmNvbC0xMCwgLmNvbC0xMSwgLmNvbC0xMiwgLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04LCAuY29sLTksIC5jb2wtYXV0bywgLmNvbC1sZywgLmNvbC1sZy0xLCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSwgLmNvbC1sZy1hdXRvLCAuY29sLW1kLCAuY29sLW1kLTEsIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLWF1dG8sIC5jb2wtc20sIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tYXV0bywgLmNvbC14bCwgLmNvbC14bC0xLCAuY29sLXhsLTEwLCAuY29sLXhsLTExLCAuY29sLXhsLTEyLCAuY29sLXhsLTIsIC5jb2wteGwtMywgLmNvbC14bC00LCAuY29sLXhsLTUsIC5jb2wteGwtNiwgLmNvbC14bC03LCAuY29sLXhsLTgsIC5jb2wteGwtOSwgLmNvbC14bC1hdXRve1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblx0fVxyXG59IiwiYm9keSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9ib2R5LnBuZykgcmVwZWF0ICNmMGYwZjA7XG59XG5cbi5sZWZ0LXNwYWNlIHtcbiAgcGFkZGluZy1sZWZ0OiA3MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbGljay1wcmV2OmJlZm9yZSwgLnNsaWNrLW5leHQ6YmVmb3JlIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbioge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5hIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVtb3ZlLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb3JtLWNvbnRyb2wsIC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4udi1mbGV4IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubGluZXMge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdG9wOiAwO1xufVxuLmxpbmVzLl8xIHtcbiAgbGVmdDogMjAlO1xufVxuLmxpbmVzLl8yIHtcbiAgbGVmdDogNDAlO1xufVxuLmxpbmVzLl8zIHtcbiAgbGVmdDogNjAlO1xufVxuLmxpbmVzLl80IHtcbiAgbGVmdDogODAlO1xufVxuLmxpbmVzLl81IHtcbiAgbGVmdDogMTAwJTtcbn1cblxuLmJyZWFkY3VtIHtcbiAgbWFyZ2luLXRvcDogMTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xufVxuLmJyZWFkY3VtIHNwYW4ge1xuICBtYXJnaW46IDAgMTVweDtcbn1cbi5icmVhZGN1bSAuaWNvbi1leC1zbWFsbCBzdmcge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuXG4uY2xlYXJmaXgge1xuICBjbGVhcjogYm90aDtcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi50ZXh0LWhpZ2hsaWdodGVyIHtcbiAgY29sb3I6ICNiZjI3MmQ7XG59XG5cbi5iZy1oaWdobGlnaHRlciB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idG4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkaW5nLWhpZ2hsaWdodCB7XG4gIGNvbG9yOiAjZjdhMDVjO1xufVxuXG5zdmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaWNvbi1iaWcgPiBzdmcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5pY29uLW1lZGl1bSA+IHN2ZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5pY29uLXNtYWxsID4gc3ZnIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLmljb24tZXgtc21hbGwgPiBzdmcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uc2VjdGlvbi1hZG1pc3Npb24gLnNsaWNrLXByZXY6YmVmb3JlLCAuc2VjdGlvbi1hZG1pc3Npb24gLnNsaWNrLW5leHQ6YmVmb3JlIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnNsaWNrLXByZXYsIC5zZWN0aW9uLWFkbWlzc2lvbiAuc2xpY2stbmV4dCB7XG4gIGJvdHRvbTogLTI1cHg7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuc2xpY2stcHJldiB7XG4gIHJpZ2h0OiAyNXB4O1xufVxuXG4ucHJlbWlhbi1sZWFndWUgLnNsaWNrLXNsaWRlciAuc2xpY2stc2xpZGUge1xuICBtYXJnaW46IDAgNTBweDtcbn1cbi5wcmVtaWFuLWxlYWd1ZSAuc2xpY2stcHJldiwgLnByZW1pYW4tbGVhZ3VlIC5zbGljay1uZXh0IHtcbiAgYm90dG9tOiAtMjVweDtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xufVxuLnByZW1pYW4tbGVhZ3VlIC5zbGljay1wcmV2OmJlZm9yZSwgLnByZW1pYW4tbGVhZ3VlIC5zbGljay1uZXh0OmJlZm9yZSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnByZW1pYW4tbGVhZ3VlIC5zbGljay1wcmV2IHtcbiAgcmlnaHQ6IDI1cHg7XG59XG5cbi5zbGljay1zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnNsaWNrLXNsaWRlciAuc2xpY2stc2xpZGUge1xuICBtYXJnaW46IDAgMTVweDtcbn1cblxuLnJlY2VudC1hcnRpY2xlIC5zbGljay1wcmV2IHtcbiAgcmlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuc2xpY2stcHJldiwgLnJlY2VudC1hcnRpY2xlIC5zbGljay1uZXh0IHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgYm90dG9tOiBhdXRvO1xuICB0b3A6IC0yNXB4O1xuICByaWdodDogMTVweDtcbiAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggMjVweDtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuc2xpY2stcHJldjpiZWZvcmUsIC5yZWNlbnQtYXJ0aWNsZSAuc2xpY2stbmV4dDpiZWZvcmUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmlubmVyLWJhbm5lciB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbm5lci1iYW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW5uZXItYmFubmVyIC5wYWdlLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDYwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDcwcHggMDtcbiAgY29sb3I6ICMyMTRmN2E7XG59XG5cbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLWJhbm5lciAuY2Fyb3VzZWwtY2FwdGlvbiBoMyB7XG4gIGNvbG9yOiAjYmYyNzJkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xufVxuLm1haW4tYmFubmVyIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnVsLmxpc3Qge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxudWwubGlzdCBsaSB7XG4gIHBhZGRpbmc6IDAgMCAyMHB4IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xufVxudWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uc3ViLWhlYWRlciAucGFuZWwge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuLnN1Yi1oZWFkZXIgLmRvb2RsZSB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogOTBweDtcbn1cblxuLnBhcnRuZXIgLnNsaWNrLWxpc3Qge1xuICBwYWRkaW5nOiA1MHB4IDBweDtcbn1cblxuLm1haW4tcGFnZSB7XG4gIGZsb2F0OiBub25lO1xufVxuLm1haW4tcGFnZSAuZmx5aW5nLWltZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mbHlpbmctaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwLjU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwcHg7XG59XG4uZmx5aW5nLWltZy5yaWdodC1mbHkge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9mbHlpbmcvcmlnaHQucG5nKSByZXBlYXQteTtcbiAgcmlnaHQ6IDBweDtcbn1cbi5mbHlpbmctaW1nLmxlZnQtZmx5IHtcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvZmx5aW5nL2xlZnQucG5nKSByZXBlYXQteTtcbiAgbGVmdDogNzBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIG5hdiB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIHNlY3Rpb246Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucm93LCAucm93LWYge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmltZy1mbGFnLCAucGFuZWwtYm9keSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5sZWZ0LXNwYWNlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC5uYXZiYXItdmVydGljYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubmV3c2xldHRlciAuYnRuIHtcbiAgICBtYXJnaW46IDE1cHggMCAwIDA7XG4gIH1cblxuICAubmF2YmFyLW5hdi1saXN0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC5jb2wsIC5jb2wtMSwgLmNvbC0xMCwgLmNvbC0xMSwgLmNvbC0xMiwgLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04LCAuY29sLTksIC5jb2wtYXV0bywgLmNvbC1sZywgLmNvbC1sZy0xLCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSwgLmNvbC1sZy1hdXRvLCAuY29sLW1kLCAuY29sLW1kLTEsIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLWF1dG8sIC5jb2wtc20sIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tYXV0bywgLmNvbC14bCwgLmNvbC14bC0xLCAuY29sLXhsLTEwLCAuY29sLXhsLTExLCAuY29sLXhsLTEyLCAuY29sLXhsLTIsIC5jb2wteGwtMywgLmNvbC14bC00LCAuY29sLXhsLTUsIC5jb2wteGwtNiwgLmNvbC14bC03LCAuY29sLXhsLTgsIC5jb2wteGwtOSwgLmNvbC14bC1hdXRvIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgfVxufSJdfQ== */";
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'premia';

        this.knowMore = function (text) {
          if (text == 'culture') {
            this.router.navigateByUrl('/TheStudyCulture', {
              skipLocationChange: true
            });
          } else if (text == 'edge') {
            this.router.navigateByUrl('/ThePremianEdge', {
              skipLocationChange: true
            });
          }
        };

        this.router.events.subscribe(function (routerEvent) {
          if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            if (routerEvent.url === '/') {
              _this.router.navigate(['/Home'], {
                skipLocationChange: true
              });
            }
          }

          if (_this.router.url === '/Home') {
            document.body.classList.add('main-page');
          } else {
            document.body.classList.remove('main-page');
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// Called after the constructor and called  after the first ngOnChanges() 
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
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


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _space_pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./space.pipe.module */
    "./src/app/space.pipe.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"], _space_pipe_module__WEBPACK_IMPORTED_MODULE_9__["CreateSpacePipe"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/apply/apply.component.scss":
  /*!********************************************!*\
    !*** ./src/app/apply/apply.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppApplyApplyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-inner-subheader .row-f, .section-inner-subheader .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-inner-subheader .inner-info {\n  background: #fff;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-inner-subheader .panel {\n  background: #fff;\n  padding: 50px;\n  padding-bottom: 0px;\n}\n.section-inner-subheader .panel .panel-body {\n  width: 50%;\n}\n.section-inner-subheader .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n}\n.section-inner-subheader .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-inner-subheader .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-inner-subheader .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-inner-subheader h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-inner-subheader h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-inner-subheader h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-inner-subheader ul.list {\n  margin: 0px;\n}\n.section-inner-subheader ul.list li {\n  color: #000;\n}\n.section-inner-subheader ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n.applycation-rules .btn {\n  padding: 15px 30px;\n  background: #bf272d;\n  font-family: \"Lora\", serif;\n  margin: 0 auto;\n  font-size: 24px;\n  display: block;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbHkvRDpcXGFjYWRlbXkvc3JjXFxhcHBcXGFwcGx5XFxhcHBseS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwbHkvYXBwbHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxvQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQztFQUNPLGdCQUFBO0FDQVI7QURFQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDQUY7QURFQztFQUNDLGdCQUFBO0VBQ00sYUFBQTtFQUNBLG1CQUFBO0FDQVI7QURDRTtFQUNDLFVBQUE7QUNDSDtBRENFO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSDtBREFHO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0VKO0FEREk7RUFDQyxVQUFBO0VBQ0Esd0JBQUE7RUFDRyxlQUFBO0FDR1I7QURBRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0VKO0FER0M7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0FDREY7QURHQztFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDREY7QURFRTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0FIO0FER0M7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0RGO0FER0M7RUFDQyxXQUFBO0FDREY7QURFRTtFQUNDLFdBQUE7QUNBSDtBRENHO0VBQ0MsbUJBQUE7QUNDSjtBREtBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNGRDtBREdDO0VBQ0Msd0JBQUE7QUNERjtBRE1DO0VBQ08sa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDSFI7QURPQTtFQUVFO0lBQ0MsZ0JBQUE7RUNMRDtFRE9EO0lBQ0MsaUJBQUE7RUNMQTtFRE9EO0lBQ0MsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ0xBO0VET0Q7SUFDQyxXQUFBO0VDTEE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcGx5L2FwcGx5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taW5uZXItc3ViaGVhZGVye1xyXG5cdC5yb3ctZiwgLnJvd3tcclxuXHRcdG1hcmdpbjo3MHB4IDAgMTAwcHg7IFxyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQuaW5uZXItaW5mb3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICB9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDQwJTtcclxuXHR9XHJcblx0LnBhbmVsIHtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICBwYWRkaW5nOjUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206MHB4O1xyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdH1cclxuXHRcdCYuc3RvcnktaW5mb3tcclxuXHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0LmZseWluZy1wbGFuZXtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0dG9wOjBweDtcclxuXHRcdFx0XHRzdmd7XHJcblx0XHRcdFx0XHRmaWxsOiAjZmZmO1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgXHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdHRvcDo1MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAzcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRoMXtcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdH1cclxuXHRoMntcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZy1ib3R0b206NXB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OlwiIFwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTowO1xyXG5cdFx0XHRsZWZ0OjA7XHJcblx0XHRcdHdpZHRoOjUwcHg7XHJcblx0XHRcdGhlaWdodDoycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2YwZjBmMDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHR9XHJcblx0dWwubGlzdHtcclxuXHRcdG1hcmdpbjowcHg7XHJcblx0XHRsaXtcclxuXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLm1vcmUtaW5mb3tcclxuXHRmbG9hdDpub25lO1xyXG5cdGNsZWFyOmJvdGg7XHJcblx0cHtcclxuXHRcdG1hcmdpbjo1MHB4IDAgNzBweCA3NXB4IDtcclxuXHR9XHJcbn1cclxuXHJcbi5hcHBseWNhdGlvbi1ydWxlc3tcclxuXHQuYnRue1xyXG4gICAgICAgIHBhZGRpbmc6MTVweCAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2JmMjcyZDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdFx0LnJvdy1mLCAucm93LCBoMXtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4OyBcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG5cdC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcbn1cclxufSIsIi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucm93LWYsIC5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucm93IHtcbiAgbWFyZ2luOiA3MHB4IDAgMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmltZy1mbGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNDAlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwuc3RvcnktaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBhbmVsLnN0b3J5LWluZm8gLmZseWluZy1wbGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwuc3RvcnktaW5mbyAuZmx5aW5nLXBsYW5lIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbC5zdG9yeS1pbmZvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDUwcHg7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciBoMSB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGgyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciBoMjo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmltZy1mbGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIHVsLmxpc3Qge1xuICBtYXJnaW46IDBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciB1bC5saXN0IGxpIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgdWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cblxuLm1vcmUtaW5mbyB7XG4gIGZsb2F0OiBub25lO1xuICBjbGVhcjogYm90aDtcbn1cbi5tb3JlLWluZm8gcCB7XG4gIG1hcmdpbjogNTBweCAwIDcwcHggNzVweDtcbn1cblxuLmFwcGx5Y2F0aW9uLXJ1bGVzIC5idG4ge1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LWYsIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdywgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5icmVhZGN1bSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuaW1nLWZsYWcge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/apply/apply.component.ts":
  /*!******************************************!*\
    !*** ./src/app/apply/apply.component.ts ***!
    \******************************************/

  /*! exports provided: ApplyComponent */

  /***/
  function srcAppApplyApplyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplyComponent", function () {
      return ApplyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ApplyComponent = /*#__PURE__*/function () {
      function ApplyComponent() {
        _classCallCheck(this, ApplyComponent);

        this.moreInfo = [{
          info: 'Please fill out and submit the Inquiry Form on our website'
        }, {
          info: 'Visit our school campus or Contact our Admissions office'
        }, {
          info: 'Complete and submit the Application for Admission Form when you visit our school.'
        }, {
          info: 'Once you have completed the application, we will schedule a brief parent interview and an assessment for your child '
        }, {
          info: 'Once accepted, we will complete the admissions and payment procedure'
        }];
      }

      _createClass(ApplyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ApplyComponent;
    }();

    ApplyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-apply',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./apply.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/apply/apply.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./apply.component.scss */
      "./src/app/apply/apply.component.scss"))["default"]]
    })], ApplyComponent);
    /***/
  },

  /***/
  "./src/app/blob/blob.component.scss":
  /*!******************************************!*\
    !*** ./src/app/blob/blob.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlobBlobComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-inner-subheader .row-f, .section-inner-subheader .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-inner-subheader .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-inner-subheader .panel p {\n  font-size: 72px;\n  color: #f0f0f0;\n  font-weight: bold;\n}\n.section-inner-subheader .panel .panel-body {\n  width: 50%;\n}\n.section-inner-subheader h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-inner-subheader h6 {\n  margin-left: 65px;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-inner-subheader .inner-contact-info {\n  background: #fff;\n  padding: 50px;\n}\n.section-inner-subheader .inner-contact-info .row {\n  margin: 0px;\n}\n.section-inner-subheader .inner-contact-info p {\n  color: #000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.section-inner-subheader .inner-contact-info p a {\n  color: #000;\n}\n.section-inner-subheader .inner-contact-info .highlighted {\n  color: #bf272d;\n}\n.section-inner-subheader .inner-contact-info .social-net {\n  float: right;\n}\n.section-inner-subheader .inner-contact-info .social-net li {\n  float: left;\n  margin-right: 15px;\n}\n.section-inner-subheader .inner-contact-info .social-net li svg {\n  fill: #bf272d;\n}\n.blob-article {\n  background: #fff;\n  padding: 70px 0px;\n}\n.blob-article h2 {\n  margin-bottom: 70px;\n}\n.blob-article .btn-wrapper {\n  position: relative;\n}\n.blob-article .btn-wrapper .div-btn {\n  background: #fff;\n  padding-left: 20px;\n  float: right;\n  position: relative;\n  z-index: 1;\n}\n.blob-article .btn-wrapper .div-btn .btn {\n  background: #bf272d;\n  padding: 10px 20px;\n}\n.blob-article .btn-wrapper::after {\n  content: \"\";\n  position: absolute;\n  top: 21px;\n  left: 0px;\n  height: 2px;\n  background: #000;\n  width: 100%;\n}\n.recent-article .container {\n  background: #bf272d;\n  margin: 70px auto;\n}\n.recent-article .container h2 {\n  position: relative;\n  padding: 30px 0 0;\n}\n.recent-article .container h2 span {\n  background: #bf272d;\n  padding-right: 30px;\n  z-index: 2;\n  position: relative;\n  display: inline-block;\n  color: #fff;\n}\n.recent-article .container h2::after {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  height: 1px;\n  width: 100%;\n  background: #fff;\n  content: \"\";\n}\n.recent-article .container .panel {\n  padding: 30px 0;\n  color: #fff;\n  font-family: \"Lora\", serif;\n}\n.recent-article .container .panel h3 {\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  border-bottom: 1px solid #fff;\n}\n.recent-article .container .panel .btn {\n  border: 2px solid #fff;\n  background: none !important;\n}\n@media (max-width: 576px) {\n  .row-f, .row, h1 {\n    margin-left: 0px;\n  }\n\n  .breadcum {\n    margin-left: 15px;\n  }\n\n  .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n\n  .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvYi9EOlxcYWNhZGVteS9zcmNcXGFwcFxcYmxvYlxcYmxvYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmxvYi9ibG9iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0Msb0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUM7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0FGO0FERUM7RUFDQyxnQkFBQTtFQUNBLGFBQUE7QUNBRjtBRENFO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NIO0FEQ0U7RUFDQyxVQUFBO0FDQ0g7QURFQztFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREVDO0VBQ0MsaUJBQUE7QUNBRjtBREdDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNERjtBREdDO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0FDREY7QURFRTtFQUNDLFdBQUE7QUNBSDtBREVFO0VBQ0csV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0FMO0FERUs7RUFDQyxXQUFBO0FDQU47QURJRTtFQUNDLGNBQUE7QUNGSDtBREtFO0VBQ0MsWUFBQTtBQ0hIO0FESUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREdJO0VBQ0MsYUFBQTtBQ0RMO0FET0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDSko7QURLSTtFQUNJLG1CQUFBO0FDSFI7QURLQztFQUNDLGtCQUFBO0FDSEY7QURJRTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDRyxVQUFBO0FDRk47QURHRztFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElFO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRkg7QURVSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNQUjtBRFFRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ05aO0FET1k7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDTGhCO0FET1k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNMaEI7QURRUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNOWjtBRE9ZO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDTGhCO0FET0c7RUFDQyxzQkFBQTtFQUNBLDJCQUFBO0FDTEo7QURZQTtFQUNFO0lBQ0MsZ0JBQUE7RUNURDs7RURXRDtJQUNDLGlCQUFBO0VDUkE7O0VEVUQ7SUFDQyxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VDUEE7O0VEU0Q7SUFDQyxXQUFBO0VDTkE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jsb2IvYmxvYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlcntcclxuXHQucm93LWYsIC5yb3d7XHJcblx0XHRtYXJnaW46NzBweCAwIDEwMHB4OyBcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDQwJTtcclxuXHR9XHJcblx0LnBhbmVsIHtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdHBhZGRpbmc6NTBweDtcclxuXHRcdHB7XHJcblx0XHRcdGZvbnQtc2l6ZTo3MnB4O1xyXG5cdFx0XHRjb2xvcjojZjBmMGYwO1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdH1cclxuXHRcdC5wYW5lbC1ib2R5e1xyXG5cdFx0XHR3aWR0aDo1MCU7XHJcblx0XHR9XHJcblx0fVxyXG5cdGgxe1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcblx0fVxyXG5cdGg2e1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHR9XHJcblxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OjA7XHJcblx0XHR0b3A6MDtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0fVxyXG5cdC5pbm5lci1jb250YWN0LWluZm97XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRwYWRkaW5nOiA1MHB4OyBcclxuXHRcdC5yb3d7XHJcblx0XHRcdG1hcmdpbjowcHg7XHRcclxuXHRcdH1cclxuXHRcdHB7XHJcblx0XHQgICBjb2xvcjojMDAwO1xyXG5cdFx0ICAgZm9udC1zaXplOjE0cHg7IFxyXG5cdFx0ICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG5cdFx0ICAgXHJcblx0XHQgICBhe1xyXG5cdFx0XHQgICBjb2xvcjojMDAwO1xyXG5cclxuXHRcdCAgIH1cclxuXHRcdH1cclxuXHRcdC5oaWdobGlnaHRlZHtcclxuXHRcdFx0Y29sb3I6I2JmMjcyZDtcclxuXHRcdH1cclxuXHJcblx0XHQuc29jaWFsLW5ldHtcclxuXHRcdFx0ZmxvYXQ6cmlnaHQ7XHJcblx0XHRcdGxpe1xyXG5cdFx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OjE1cHg7XHJcblx0XHRcdFx0c3Zne1xyXG5cdFx0XHRcdFx0ZmlsbDojYmYyNzJkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uYmxvYi1hcnRpY2xle1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgcGFkZGluZzo3MHB4IDBweDtcclxuICAgIGgye1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NzBweDtcclxuXHR9XHJcblx0LmJ0bi13cmFwcGVye1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LmRpdi1idG57XHJcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OjIwcHg7XHJcblx0XHRcdGZsb2F0OnJpZ2h0O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0LmJ0bntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdFx0cGFkZGluZzoxMHB4IDIwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCY6OmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDoyMXB4O1xyXG5cdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0aGVpZ2h0OjJweDtcclxuXHRcdFx0YmFja2dyb3VuZDojMDAwO1xyXG5cdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4ucmVjZW50LWFydGljbGV7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2JmMjcyZDtcclxuICAgICAgICBtYXJnaW46NzBweCBhdXRvO1xyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMCAwO1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojYmYyNzJkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDozMHB4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6NTBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjFweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYW5lbHtcclxuICAgICAgICAgICAgcGFkZGluZzozMHB4IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OlwiTG9yYVwiLCBzZXJpZjtcclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTozMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0XHQuYnRue1xyXG5cdFx0XHRcdGJvcmRlcjoycHggc29saWQgI2ZmZjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOm5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0XHQucm93LWYsIC5yb3csIGgxe1xyXG5cdFx0XHRtYXJnaW4tbGVmdDowcHg7IFxyXG5cdH1cclxuXHQuYnJlYWRjdW17XHJcblx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwYWRkaW5nOjE1cHg7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcblx0LnBhbmVsLWJvZHl7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxuXHJcbn0iLCIuc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnJvdy1mLCAuc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnJvdyB7XG4gIG1hcmdpbjogNzBweCAwIDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmltZy1mbGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNDAlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBhbmVsIHAge1xuICBmb250LXNpemU6IDcycHg7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwgLnBhbmVsLWJvZHkge1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGgxIHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgaDYge1xuICBtYXJnaW4tbGVmdDogNjVweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW1nLWZsYWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAucm93IHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyBwIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIHAgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmhpZ2hsaWdodGVkIHtcbiAgY29sb3I6ICNiZjI3MmQ7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IGxpIHN2ZyB7XG4gIGZpbGw6ICNiZjI3MmQ7XG59XG5cbi5ibG9iLWFydGljbGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA3MHB4IDBweDtcbn1cbi5ibG9iLWFydGljbGUgaDIge1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuLmJsb2ItYXJ0aWNsZSAuYnRuLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmxvYi1hcnRpY2xlIC5idG4td3JhcHBlciAuZGl2LWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uYmxvYi1hcnRpY2xlIC5idG4td3JhcHBlciAuZGl2LWJ0biAuYnRuIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLmJsb2ItYXJ0aWNsZSAuYnRuLXdyYXBwZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIxcHg7XG4gIGxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVjZW50LWFydGljbGUgLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIG1hcmdpbjogNzBweCBhdXRvO1xufVxuLnJlY2VudC1hcnRpY2xlIC5jb250YWluZXIgaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDMwcHggMCAwO1xufVxuLnJlY2VudC1hcnRpY2xlIC5jb250YWluZXIgaDIgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuY29udGFpbmVyIGgyOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29udGVudDogXCJcIjtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuY29udGFpbmVyIC5wYW5lbCB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG59XG4ucmVjZW50LWFydGljbGUgLmNvbnRhaW5lciAucGFuZWwgaDMge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG4ucmVjZW50LWFydGljbGUgLmNvbnRhaW5lciAucGFuZWwgLmJ0biB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5yb3ctZiwgLnJvdywgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cblxuICAuYnJlYWRjdW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgLmltZy1mbGFnIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGFuZWwtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/blob/blob.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blob/blob.component.ts ***!
    \****************************************/

  /*! exports provided: BlobComponent */

  /***/
  function srcAppBlobBlobComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlobComponent", function () {
      return BlobComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BlobComponent = /*#__PURE__*/function () {
      function BlobComponent() {
        _classCallCheck(this, BlobComponent);

        this.admission = [{
          date: '2nd May 2020',
          title: "World for all\n      and all for the\n      world!",
          description: "Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in the best way possible.\n      After putting together the best of schools and undergoing immense research, there were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. \n      So, like a popular thought,\u201D when you can\u2019t find someone to do exactly what you, get up and do it yourself!\u201D That\u2019s exactly what she did! \n      Her endeavours have snowballed into the Premia Academy.\n      "
        }, {
          date: '2nd May 2020',
          title: "Gaming\n      Addiction or\n      Enthusiasm",
          description: "Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in the best way possible.\n      After putting together the best of schools and undergoing immense research, there were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. \n      So, like a popular thought,\u201D when you can\u2019t find someone to do exactly what you, get up and do it yourself!\u201D That\u2019s exactly what she did! \n      Her endeavours have snowballed into the Premia Academy.\n      "
        }, {
          date: '2nd May 2020',
          title: "Developing\n      language Across\n      the Curriculum",
          description: "Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in the best way possible.\n      After putting together the best of schools and undergoing immense research, there were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. \n      So, like a popular thought,\u201D when you can\u2019t find someone to do exactly what you, get up and do it yourself!\u201D That\u2019s exactly what she did! \n      Her endeavours have snowballed into the Premia Academy.\n      "
        }, {
          date: '2nd May 2020',
          title: "World for all\n      and all for the\n      world!",
          description: "Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in the best way possible.\n      After putting together the best of schools and undergoing immense research, there were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. \n      So, like a popular thought,\u201D when you can\u2019t find someone to do exactly what you, get up and do it yourself!\u201D That\u2019s exactly what she did! \n      Her endeavours have snowballed into the Premia Academy.\n      "
        }, {
          date: '2nd May 2020',
          title: "Gaming\n      Addiction or\n      Enthusiasm",
          description: "Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in the best way possible.\n      After putting together the best of schools and undergoing immense research, there were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. \n      So, like a popular thought,\u201D when you can\u2019t find someone to do exactly what you, get up and do it yourself!\u201D That\u2019s exactly what she did! \n      Her endeavours have snowballed into the Premia Academy.\n      "
        }, {
          date: '2nd May 2020',
          title: "Developing\n      language Across\n      the Curriculum",
          description: "Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in the best way possible.\n      After putting together the best of schools and undergoing immense research, there were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose. \n      So, like a popular thought,\u201D when you can\u2019t find someone to do exactly what you, get up and do it yourself!\u201D That\u2019s exactly what she did! \n      Her endeavours have snowballed into the Premia Academy.\n      "
        }];
        this.recentConfig = {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }]
        };
      }

      _createClass(BlobComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlobComponent;
    }();

    BlobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blob',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blob.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blob/blob.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blob.component.scss */
      "./src/app/blob/blob.component.scss"))["default"]]
    })], BlobComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.scss":
  /*!************************************************!*\
    !*** ./src/app/contact/contact.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.map::after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-image: linear-gradient(to right, #f1f1f1, rgba(255, 0, 0, 0));\n  width: 50%;\n  height: 100%;\n}\n.map iframe {\n  width: 100%;\n  height: 100%;\n}\n.section-inner-subheader .row-f, .section-inner-subheader .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-inner-subheader .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-inner-subheader .panel p {\n  font-size: 72px;\n  color: #f0f0f0;\n  font-weight: bold;\n}\n.section-inner-subheader .panel .panel-body {\n  width: 50%;\n}\n.section-inner-subheader h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-inner-subheader h6 {\n  margin-left: 65px;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-inner-subheader .inner-contact-info {\n  margin: 50px;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);\n}\n.section-inner-subheader .inner-contact-info .row {\n  margin: 0px;\n}\n.section-inner-subheader .inner-contact-info .contact-form {\n  background: #fff;\n  padding-top: 40px;\n}\n.section-inner-subheader .inner-contact-info .contact-form .row {\n  margin-bottom: 30px;\n}\n.section-inner-subheader .inner-contact-info .contact-form input, .section-inner-subheader .inner-contact-info .contact-form textarea {\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid #d6d6d6;\n  outline: none;\n  padding: 0;\n  box-shadow: none;\n}\n.section-inner-subheader .inner-contact-info .contact-form input:focus, .section-inner-subheader .inner-contact-info .contact-form textarea:focus {\n  border-bottom: 1px solid #007bff;\n}\n.section-inner-subheader .inner-contact-info .contact-form .btn {\n  background: none;\n  border: none;\n  box-shadow: none;\n  float: right;\n}\n.section-inner-subheader .inner-contact-info .contact-form .btn svg {\n  fill: #bf272d;\n  transform: rotate(45deg);\n}\n.section-inner-subheader .inner-contact-info .contact-info {\n  background: url('contact-info.png') repeat-y #bf272d top left;\n  color: #fff;\n}\n.section-inner-subheader .inner-contact-info .contact-info .info-title {\n  padding: 30px 0 40px 120px;\n}\n.section-inner-subheader .inner-contact-info .contact-info .row {\n  margin-bottom: 30px;\n}\n.section-inner-subheader .inner-contact-info .contact-info i {\n  width: 120px;\n  float: left;\n  padding: 0 15px;\n}\n.section-inner-subheader .inner-contact-info .contact-info p {\n  float: left;\n  color: #fff;\n}\n.section-inner-subheader .inner-contact-info .contact-info a {\n  color: #fff;\n}\n.section-inner-subheader .inner-contact-info .contact-info svg {\n  fill: #fff;\n}\n.section-inner-subheader .inner-contact-info p {\n  color: #000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.section-inner-subheader .inner-contact-info p a {\n  color: #000;\n}\n.section-inner-subheader .inner-contact-info .highlighted {\n  color: #bf272d;\n}\n.section-inner-subheader .inner-contact-info .social-net {\n  float: left;\n  margin-bottom: 25px;\n  margin-left: 120px;\n}\n.section-inner-subheader .inner-contact-info .social-net li {\n  float: left;\n  margin-right: 15px;\n}\n.section-inner-subheader .inner-contact-info .social-net li i {\n  width: auto;\n  padding: 0px;\n}\n@media (max-width: 576px) {\n  .row-f, .row, h1 {\n    margin-left: 0px;\n  }\n\n  .breadcum {\n    margin-left: 15px;\n  }\n\n  .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n\n  .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9EOlxcYWNhZGVteS9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Q7QURBQztFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esd0VBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0VGO0FEQUM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0VGO0FERUM7RUFDQyxvQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDQ0Y7QURDQztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQUU7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRUg7QURBRTtFQUNDLFVBQUE7QUNFSDtBRENDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0M7RUFDQyxpQkFBQTtBQ0NGO0FERUM7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0FGO0FERUM7RUFDQyxZQUFBO0VBQ0EsMENBQUE7QUNBRjtBRENFO0VBQ0MsV0FBQTtBQ0NIO0FEQ0U7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDQ0g7QURBRztFQUNDLG1CQUFBO0FDRUo7QURBRztFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEREk7RUFDQyxnQ0FBQTtBQ0dMO0FEQUc7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNFSjtBRERJO0VBQ0MsYUFBQTtFQUNBLHdCQUFBO0FDR0w7QURDRTtFQUNDLDZEQUFBO0VBQ0EsV0FBQTtBQ0NIO0FEQUc7RUFDQywwQkFBQTtBQ0VKO0FEQUc7RUFDQyxtQkFBQTtBQ0VKO0FEQUc7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFSjtBREFHO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNFSjtBREFHO0VBQ0MsV0FBQTtBQ0VKO0FEQUc7RUFDQyxVQUFBO0FDRUo7QURDRTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDTDtBRENLO0VBQ0MsV0FBQTtBQ0NOO0FER0U7RUFDQyxjQUFBO0FDREg7QURJRTtFQUNDLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRkg7QURHRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtBQ0RKO0FER0k7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0RMO0FEU0E7RUFDRTtJQUNDLGdCQUFBO0VDTkQ7O0VEUUQ7SUFDQyxpQkFBQTtFQ0xBOztFRE9EO0lBQ0MsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ0pBOztFRE1EO0lBQ0MsV0FBQTtFQ0hBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwe1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6MDtcclxuXHRsZWZ0OjA7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHQmOjphZnRlcntcclxuXHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDowO1xyXG5cdFx0dG9wOjA7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjQxLDI0MSwyNDEsMSksIHJnYmEoMjU1LDAsMCwwKSk7XHJcblx0XHR3aWR0aDo1MCU7XHJcblx0XHRoZWlnaHQ6MTAwJTtcclxuXHR9XHJcblx0aWZyYW1le1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG59XHJcbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlcntcclxuXHQucm93LWYsIC5yb3d7XHJcblx0XHRtYXJnaW46NzBweCAwIDEwMHB4OyBcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDQwJTtcclxuXHR9XHJcblx0LnBhbmVsIHtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdHBhZGRpbmc6NTBweDtcclxuXHRcdHB7XHJcblx0XHRcdGZvbnQtc2l6ZTo3MnB4O1xyXG5cdFx0XHRjb2xvcjojZjBmMGYwO1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdH1cclxuXHRcdC5wYW5lbC1ib2R5e1xyXG5cdFx0XHR3aWR0aDo1MCU7XHJcblx0XHR9XHJcblx0fVxyXG5cdGgxe1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcblx0fVxyXG5cdGg2e1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHR9XHJcblxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OjA7XHJcblx0XHR0b3A6MDtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0fVxyXG5cdC5pbm5lci1jb250YWN0LWluZm97XHJcblx0XHRtYXJnaW46IDUwcHg7XHJcblx0XHRib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsMCwwLC41KTtcclxuXHRcdC5yb3d7XHJcblx0XHRcdG1hcmdpbjowcHg7XHRcclxuXHRcdH1cclxuXHRcdC5jb250YWN0LWZvcm17XHJcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdFx0cGFkZGluZy10b3A6NDBweDtcclxuXHRcdFx0LnJvd3tcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOjMwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0aW5wdXQsIHRleHRhcmVhe1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDZkNmQ2O1xyXG5cdFx0XHRcdG91dGxpbmU6IG5vbmU7XHJcblx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRib3gtc2hhZG93Om5vbmU7XHJcblx0XHRcdFx0Jjpmb2N1c3tcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA3YmZmO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQuYnRue1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6bm9uZTtcclxuXHRcdFx0XHRib3JkZXI6bm9uZTtcclxuXHRcdFx0XHRib3gtc2hhZG93Om5vbmU7XHJcblx0XHRcdFx0ZmxvYXQ6cmlnaHQ7XHJcblx0XHRcdFx0c3Zne1xyXG5cdFx0XHRcdFx0ZmlsbDojYmYyNzJkO1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmNvbnRhY3QtaW5mb3tcclxuXHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9jb250YWN0LWluZm8ucG5nKSByZXBlYXQteSAjYmYyNzJkIHRvcCBsZWZ0O1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHQuaW5mby10aXRsZXtcclxuXHRcdFx0XHRwYWRkaW5nOjMwcHggMCA0MHB4IDEyMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5yb3d7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTozMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdGl7XHJcblx0XHRcdFx0d2lkdGg6MTIwcHg7XHJcblx0XHRcdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdFx0XHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0cHtcclxuXHRcdFx0XHRmbG9hdDpsZWZ0O1xyXG5cdFx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdH1cclxuXHRcdFx0YXtcclxuXHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN2Z3tcclxuXHRcdFx0XHRmaWxsOiNmZmY7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHB7XHJcblx0XHQgICBjb2xvcjojMDAwO1xyXG5cdFx0ICAgZm9udC1zaXplOjE0cHg7IFxyXG5cdFx0ICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG5cdFx0ICAgXHJcblx0XHQgICBhe1xyXG5cdFx0XHQgICBjb2xvcjojMDAwO1xyXG5cclxuXHRcdCAgIH1cclxuXHRcdH1cclxuXHRcdC5oaWdobGlnaHRlZHtcclxuXHRcdFx0Y29sb3I6I2JmMjcyZDtcclxuXHRcdH1cclxuXHJcblx0XHQuc29jaWFsLW5ldHtcclxuXHRcdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjVweDtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG5cdFx0XHRsaXtcclxuXHRcdFx0XHRmbG9hdDpsZWZ0O1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDoxNXB4O1xyXG5cclxuXHRcdFx0XHRpe1xyXG5cdFx0XHRcdFx0d2lkdGg6YXV0bztcclxuXHRcdFx0XHRcdHBhZGRpbmc6MHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0XHQucm93LWYsIC5yb3csIGgxe1xyXG5cdFx0XHRtYXJnaW4tbGVmdDowcHg7IFxyXG5cdH1cclxuXHQuYnJlYWRjdW17XHJcblx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwYWRkaW5nOjE1cHg7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcblx0LnBhbmVsLWJvZHl7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxuXHJcbn0iLCIubWFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjFmMWYxLCByZ2JhKDI1NSwgMCwgMCwgMCkpO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFwIGlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucm93LWYsIC5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucm93IHtcbiAgbWFyZ2luOiA3MHB4IDAgMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW1nLWZsYWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA0MCU7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNTBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwgcCB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgaDEge1xuICBtYXJnaW4tbGVmdDogNjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciBoNiB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbWctZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIHtcbiAgbWFyZ2luOiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAucm93IHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1mb3JtIC5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmNvbnRhY3QtZm9ybSBpbnB1dCwgLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNmQ2ZDY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1mb3JtIGlucHV0OmZvY3VzLCAuc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1mb3JtIHRleHRhcmVhOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDdiZmY7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1mb3JtIC5idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWZvcm0gLmJ0biBzdmcge1xuICBmaWxsOiAjYmYyNzJkO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1pbmZvIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGFjdC1pbmZvLnBuZykgcmVwZWF0LXkgI2JmMjcyZCB0b3AgbGVmdDtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1pbmZvIC5pbmZvLXRpdGxlIHtcbiAgcGFkZGluZzogMzBweCAwIDQwcHggMTIwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1pbmZvIC5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmNvbnRhY3QtaW5mbyBpIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmNvbnRhY3QtaW5mbyBwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmNvbnRhY3QtaW5mbyBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1pbmZvIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyBwIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIHAgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmhpZ2hsaWdodGVkIHtcbiAgY29sb3I6ICNiZjI3MmQ7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCBsaSBpIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5yb3ctZiwgLnJvdywgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cblxuICAuYnJlYWRjdW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgLmltZy1mbGFnIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGFuZWwtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        this.socialNet = [{
          icon: '#icon_facebook'
        }, {
          icon: '#icon_instagram'
        }, {
          icon: '#icon_twitter'
        }];
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/eng/eng.component.scss":
  /*!****************************************!*\
    !*** ./src/app/eng/eng.component.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppEngEngComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZy9lbmcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/eng/eng.component.ts":
  /*!**************************************!*\
    !*** ./src/app/eng/eng.component.ts ***!
    \**************************************/

  /*! exports provided: EngComponent */

  /***/
  function srcAppEngEngComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EngComponent", function () {
      return EngComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EngComponent = /*#__PURE__*/function () {
      function EngComponent() {
        _classCallCheck(this, EngComponent);
      }

      _createClass(EngComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EngComponent;
    }();

    EngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-eng',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./eng.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/eng/eng.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./eng.component.scss */
      "./src/app/eng/eng.component.scss"))["default"]]
    })], EngComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\n  background: #172947;\n  padding: 35px 0 15px;\n}\nfooter .logo {\n  margin-bottom: 15px;\n}\nfooter a {\n  color: #dddddd;\n}\nfooter p {\n  color: #fff;\n}\nfooter address {\n  color: #dddddd;\n}\nfooter h5 {\n  color: #fff;\n}\nfooter ul.footer-li {\n  list-style: none inside;\n  margin: 0;\n  padding: 10px 0;\n  clear: both;\n}\nfooter ul.footer-li li {\n  padding: 10px 0;\n  line-height: 12px;\n}\nfooter ul.footer-li li a.active {\n  color: #f44336;\n}\nfooter .social-net {\n  padding: 0;\n}\nfooter .social-net ul {\n  list-style: none inside;\n  margin-top: 20px;\n  padding: 0;\n  float: left;\n  width: 100%;\n}\nfooter .social-net ul li {\n  float: left;\n  margin-right: 20px;\n}\nfooter .social-net ul li a {\n  color: #fff;\n  font-size: 12px;\n}\nfooter .social-net ul li svg {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n}\n.contact-info {\n  background: #e8e8e8;\n  padding: 30px 0;\n}\n.contact-info p, .contact-info a {\n  color: #000;\n  font-family: \"Quicksand\", sans-serif;\n}\n.contact-info .social-net {\n  border-left: 1px solid #ccc;\n  padding-left: 25px;\n}\n.contact-info .social-net ul {\n  padding: 0;\n  margin: 0;\n}\n.contact-info .social-net ul li {\n  list-style-type: none;\n}\n.contact-info .social-net ul li span {\n  margin-left: 15px;\n  color: #555555;\n}\n.contact-info .social-net ul li svg {\n  fill: #f7a05c;\n}\n@media (max-width: 576px) {\n  .contact-info .social-net {\n    border: none;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6XFxhY2FkZW15L3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QUNDSjtBREFJO0VBQ0ksbUJBQUE7QUNFUjtBREFJO0VBQ0ksY0FBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0FDRVI7QURBSTtFQUNJLGNBQUE7QUNFUjtBREFJO0VBQ0ksV0FBQTtBQ0VSO0FEQUk7RUFDSSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0VSO0FERFE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNHWjtBRERnQjtFQUNJLGNBQUE7QUNHcEI7QURFSTtFQUNJLFVBQUE7QUNBUjtBRENRO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NaO0FEQVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNFaEI7QUREZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0dwQjtBRERnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0dwQjtBRElBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDREo7QURFSTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtBQ0FSO0FERUM7RUFDTywyQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURDRTtFQUNDLFVBQUE7RUFDQSxTQUFBO0FDQ0g7QURBRztFQUNDLHFCQUFBO0FDRUo7QURERztFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0dMO0FERGdCO0VBQ0ksYUFBQTtBQ0dwQjtBREdBO0VBRVE7SUFDSSxZQUFBO0lBQ0EsVUFBQTtFQ0RWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxNzI5NDc7XHJcbiAgICBwYWRkaW5nOiAzNXB4IDAgMTVweDtcclxuICAgIC5sb2dvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICNkZGRkZGQ7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICB9XHJcbiAgICBhZGRyZXNzIHtcclxuICAgICAgICBjb2xvcjogI2RkZGRkZDtcclxuICAgIH1cclxuICAgIGg1e1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICB9XHJcbiAgICB1bC5mb290ZXItbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmUgaW5zaWRlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2Y0NDMzNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zb2NpYWwtbmV0IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lIGluc2lkZTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhY3QtaW5mb3tcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICBwYWRkaW5nOjMwcHggMDtcclxuICAgIHAsIGF7XHJcbiAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcblx0LnNvY2lhbC1uZXR7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjI1cHg7XHJcblx0XHR1bHtcclxuXHRcdFx0cGFkZGluZzowO1xyXG5cdFx0XHRtYXJnaW46MDtcclxuXHRcdFx0bGl7XHJcblx0XHRcdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cdFx0XHRzcGFue1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHRcdFx0XHRcdGNvbG9yOiM1NTU1NTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogI2Y3YTA1YztcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0ICAgIC5jb250YWN0LWluZm8ge1xyXG4gICAgICAgIC5zb2NpYWwtbmV0e1xyXG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJmb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTcyOTQ3O1xuICBwYWRkaW5nOiAzNXB4IDAgMTVweDtcbn1cbmZvb3RlciAubG9nbyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5mb290ZXIgYSB7XG4gIGNvbG9yOiAjZGRkZGRkO1xufVxuZm9vdGVyIHAge1xuICBjb2xvcjogI2ZmZjtcbn1cbmZvb3RlciBhZGRyZXNzIHtcbiAgY29sb3I6ICNkZGRkZGQ7XG59XG5mb290ZXIgaDUge1xuICBjb2xvcjogI2ZmZjtcbn1cbmZvb3RlciB1bC5mb290ZXItbGkge1xuICBsaXN0LXN0eWxlOiBub25lIGluc2lkZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGNsZWFyOiBib3RoO1xufVxuZm9vdGVyIHVsLmZvb3Rlci1saSBsaSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5mb290ZXIgdWwuZm9vdGVyLWxpIGxpIGEuYWN0aXZlIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5mb290ZXIgLnNvY2lhbC1uZXQge1xuICBwYWRkaW5nOiAwO1xufVxuZm9vdGVyIC5zb2NpYWwtbmV0IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZSBpbnNpZGU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB1bCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5mb290ZXIgLnNvY2lhbC1uZXQgdWwgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5mb290ZXIgLnNvY2lhbC1uZXQgdWwgbGkgc3ZnIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZmlsbDogI2ZmZjtcbn1cblxuLmNvbnRhY3QtaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cbi5jb250YWN0LWluZm8gcCwgLmNvbnRhY3QtaW5mbyBhIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xufVxuLmNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuLmNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQgdWwgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHVsIGxpIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6ICM1NTU1NTU7XG59XG4uY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHVsIGxpIHN2ZyB7XG4gIGZpbGw6ICNmN2EwNWM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .main-page nav {\n  background-color: #fff !important;\n}\n\nnav {\n  background-color: #f0f0f0;\n  width: calc(100% - 70px);\n  z-index: 9;\n  padding: 10px;\n  position: fixed;\n  top: 0px;\n}\n\nnav li:not(.login) {\n  margin-top: 10px;\n}\n\nnav .logo img {\n  height: 50px;\n  width: auto;\n}\n\nnav .login {\n  margin: 0 15px;\n}\n\nnav .login a {\n  color: #000 !important;\n  text-align: center;\n}\n\nnav .login a svg {\n  fill: #000;\n}\n\nnav .login a:hover {\n  background: none !important;\n}\n\n.navbar-vertical {\n  position: fixed;\n  z-index: 1030;\n  width: 70px;\n  height: 100vh;\n  background-color: #f0f0f0;\n  top: 0px;\n  left: 0px;\n  padding-left: 15px;\n}\n\n.navbar-vertical a {\n  padding: 0px;\n}\n\n.navbar-vertical .social-net {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n}\n\n.navbar-vertical .social-net li {\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  transform: rotate(180deg);\n  transform-origin: center center;\n  list-style-type: none;\n}\n\n.navbar-vertical .social-net li a {\n  display: block;\n  padding: 0px;\n  margin: 0;\n  margin-right: -5px;\n  color: #000;\n  font-size: 16px;\n  float: left;\n}\n\n.navbar-vertical .social-net li a i {\n  float: left;\n  line-height: 35px;\n}\n\n.navbar-vertical .social-net li a span {\n  margin: 10px;\n  float: left;\n}\n\n.navbar-vertical .social-net li svg {\n  transform: rotate(90deg);\n  fill: #bf272d;\n}\n\n.notice-board {\n  position: fixed;\n  bottom: 10px;\n  left: 3px;\n}\n\n.notice-board i {\n  background: #bf272d;\n  padding: 10px;\n}\n\n.notice-board a {\n  padding: 15px !important;\n}\n\n.notice-board svg {\n  fill: #fff !important;\n  margin: 0 auto;\n  display: block;\n}\n\n::ng-deep .modal {\n  display: flex !important;\n  align-items: center;\n}\n\n::ng-deep .modal .modal-content {\n  background-color: #3e65ac;\n  padding: 0 15px;\n}\n\n::ng-deep .modal .modal-content .modal-title {\n  margin-left: 15px;\n  font-family: \"Lora\", serif;\n  color: #fff;\n}\n\n::ng-deep .modal .modal-content i {\n  margin-top: 9px;\n  display: block;\n}\n\n::ng-deep .modal .modal-content svg {\n  fill: #fff;\n}\n\n::ng-deep .modal .modal-content p {\n  color: #fff;\n  font-size: 28px;\n  align-self: center;\n}\n\n::ng-deep .modal .modal-content .btn {\n  outline: none;\n  background: none;\n  border: 2px solid #fff;\n}\n\n.navbar-nav-list {\n  float: right;\n  margin-left: auto;\n  list-style-type: none;\n  margin-bottom: 0;\n}\n\n.navbar-nav-list .nav-item {\n  font-size: 14px;\n  float: left;\n}\n\n.navbar-nav-list .nav-item a {\n  padding: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #000;\n  text-decoration: none;\n}\n\n.navbar-nav-list .nav-item a.active, .navbar-nav-list .nav-item a:hover {\n  color: #fff;\n  background: #f44336;\n}\n\n.navbar-nav-list .nav-item.quick-link a {\n  padding-right: 0px;\n}\n\n.navbar-nav-list .nav-item svg {\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n}\n\n.newsletter {\n  background: #3e65ac;\n  padding: 40px 0;\n}\n\n.newsletter .form-inline {\n  margin: 0 auto;\n}\n\n.newsletter label {\n  color: #000;\n  font-size: 20px;\n  margin-right: 15px;\n}\n\n.newsletter .btn {\n  background: #000;\n  color: #fff;\n  margin-left: 15px;\n  padding: 9px 15px;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\n.overlay {\n  display: none;\n  background: #e1e1e1;\n  position: fixed;\n  width: 100%;\n  height: calc(100vh);\n  top: 0;\n  left: 0;\n  flex-direction: column;\n  /* make main-axis vertical */\n  justify-content: center;\n  /* align items vertically, in this case */\n  align-items: center;\n  /* align items horizontally, in this case */\n}\n\n.overlay.active {\n  display: flex;\n  z-index: 10000;\n}\n\n.overlay img {\n  position: absolute;\n  z-index: -1;\n  opacity: 0.1;\n}\n\n.overlay .close-menu {\n  position: absolute;\n  top: 25px;\n  left: 25px;\n}\n\n.overlay ul.main-nav {\n  float: none;\n}\n\n.overlay ul.main-nav li {\n  float: none;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.overlay ul.main-nav li a {\n  padding: 15px;\n  color: #000;\n  font-size: 18px;\n  font-weight: bold;\n  text-decoration: none;\n}\n\n.overlay ul.main-nav li a:hover, .overlay ul.main-nav li a.active {\n  color: #f44336;\n}\n\n.overlay .general-info-nav {\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n  width: 100%;\n}\n\n.overlay .general-info-nav a {\n  padding: 0 10px;\n}\n\n.overlay .general-info-nav a:hover {\n  color: #f44336;\n}\n\n@media (max-width: 576px) {\n  .navbar-nav-list {\n    float: left;\n    width: 100%;\n    margin-top: 30px;\n    border-top: 1px solid #ccc;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxhY2FkZW15L3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlDQUFBO0FDQVI7O0FESUE7RUFDUSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQ0RSOztBREdRO0VBQ0ksZ0JBQUE7QUNEWjs7QURJWTtFQUNJLFlBQUE7RUFDSixXQUFBO0FDRlo7O0FES1E7RUFFSSxjQUFBO0FDSlo7O0FES1k7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FDSGhCOztBRElnQjtFQUNJLFVBQUE7QUNGcEI7O0FESWdCO0VBQ0ksMkJBQUE7QUNGcEI7O0FEU0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDTko7O0FET0k7RUFDSSxZQUFBO0FDTFI7O0FEUUk7RUFDSSxhQUFBO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtBQ05WOztBRE9RO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtBQ0xWOztBRE1TO0VBQ0csY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNKWjs7QURLWTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ0hoQjs7QURLWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDSGhCOztBRE1VO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0FDSmQ7O0FEV0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNSSjs7QURTSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ1BSOztBRFNJO0VBQ0ksd0JBQUE7QUNQUjs7QURTSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNQUjs7QURXQTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUNSSjs7QURTQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ1BKOztBRFFJO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNOUjs7QURRSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDTlI7O0FEUUk7RUFDSSxVQUFBO0FDTlI7O0FEUUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTlI7O0FEUUk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ05SOztBRFNBO0VBQ1EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ05SOztBRE9JO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNMUjs7QURNUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNKWjs7QURLWTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ0hoQjs7QURRWTtFQUNJLGtCQUFBO0FDTmhCOztBRFVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1JaOztBRGNBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDWEo7O0FEWUk7RUFDSSxjQUFBO0FDVlI7O0FEWUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVlI7O0FEYUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDWFI7O0FEZUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUF3Qiw0QkFBQTtFQUN4Qix1QkFBQTtFQUF5Qix5Q0FBQTtFQUN6QixtQkFBQTtFQUFxQiwyQ0FBQTtBQ1R6Qjs7QURVSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDUlI7O0FEVUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUlI7O0FEVUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDUlI7O0FEVUs7RUFDTyxXQUFBO0FDUlo7O0FEU1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1BoQjs7QURRZ0I7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDTnBCOztBRE9vQjtFQUNJLGNBQUE7QUNMeEI7O0FEV1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNUWjs7QURVWTtFQUNJLGVBQUE7QUNSaEI7O0FEU2dCO0VBQ0ksY0FBQTtBQ1BwQjs7QURhQTtFQUNDO0lBQ08sV0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLDBCQUFBO0VDVk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1haW4tcGFnZXtcclxuICAgIG5hdiB7ICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG5uYXYge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2YwZjBmMDtcclxuICAgICAgICB3aWR0aDpjYWxjKDEwMCUgLSA3MHB4KTtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOjBweDtcclxuICAgICAgIFxyXG4gICAgICAgIGxpOm5vdCgubG9naW4pe1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dve1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICAgICAgd2lkdGg6YXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubG9naW57XHJcbiAgICAgICAgICAgIC8vIGJvcmRlcjoxcHggc29saWQgIzAwMDtcclxuICAgICAgICAgICAgbWFyZ2luOjAgMTVweDtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiMwMDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiMwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5cclxuLm5hdmJhci12ZXJ0aWNhbCB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGF7XHJcbiAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zb2NpYWwtbmV0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjEwcHg7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICAgICAgZmlsbDojYmYyNzJkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5ub3RpY2UtYm9hcmR7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDNweDtcclxuICAgIGl7XHJcbiAgICAgICAgYmFja2dyb3VuZDojYmYyNzJkO1xyXG4gICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgICAgcGFkZGluZzoxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBzdmd7XHJcbiAgICAgICAgZmlsbDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5tb2RhbHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi5tb2RhbC1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2U2NWFjO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgLm1vZGFsLXRpdGxle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgfVxyXG4gICAgaXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICBzdmd7XHJcbiAgICAgICAgZmlsbDojZmZmO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyOHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG59fVxyXG4ubmF2YmFyLW5hdi1saXN0e1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC5uYXYtaXRlbXtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgJi5hY3RpdmUsICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZjQ0MzM2O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICYucXVpY2stbGlua3tcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5uZXdzbGV0dGVye1xyXG4gICAgYmFja2dyb3VuZDojM2U2NWFjO1xyXG4gICAgcGFkZGluZzo0MHB4IDA7XHJcbiAgICAuZm9ybS1pbmxpbmV7XHJcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcblxyXG4gICAgfVxyXG4gICAgLmJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kOiMwMDA7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6OXB4IDE1cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxufVxyXG5cclxuLm92ZXJsYXl7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgMjI1LCAyMjUpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBtYWtlIG1haW4tYXhpcyB2ZXJ0aWNhbCAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIGFsaWduIGl0ZW1zIHZlcnRpY2FsbHksIGluIHRoaXMgY2FzZSAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogYWxpZ24gaXRlbXMgaG9yaXpvbnRhbGx5LCBpbiB0aGlzIGNhc2UgKi9cclxuICAgICYuYWN0aXZle1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICB6LWluZGV4OjEwMDAwO1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICB9XHJcbiAgICAuY2xvc2UtbWVudXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjI1cHg7XHJcbiAgICAgICAgbGVmdDoyNXB4O1xyXG4gICAgfVxyXG4gICAgIHVsLm1haW4tbmF2e1xyXG4gICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciwgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmNDQzMzY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2VuZXJhbC1pbmZvLW5hdntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206MTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmNDQzMzY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0Lm5hdmJhci1uYXYtbGlzdHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2NjYztcclxuXHR9XHJcbn1cclxuIiwiOjpuZy1kZWVwIC5tYWluLXBhZ2UgbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gIHotaW5kZXg6IDk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG59XG5uYXYgbGk6bm90KC5sb2dpbikge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxubmF2IC5sb2dvIGltZyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5uYXYgLmxvZ2luIHtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG5uYXYgLmxvZ2luIGEge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5uYXYgLmxvZ2luIGEgc3ZnIHtcbiAgZmlsbDogIzAwMDtcbn1cbm5hdiAubG9naW4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci12ZXJ0aWNhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAzMDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5uYXZiYXItdmVydGljYWwgYSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5uYXZiYXItdmVydGljYWwgLnNvY2lhbC1uZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm5hdmJhci12ZXJ0aWNhbCAuc29jaWFsLW5ldCBsaSB7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5uYXZiYXItdmVydGljYWwgLnNvY2lhbC1uZXQgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5uYXZiYXItdmVydGljYWwgLnNvY2lhbC1uZXQgbGkgYSBpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuLm5hdmJhci12ZXJ0aWNhbCAuc29jaWFsLW5ldCBsaSBhIHNwYW4ge1xuICBtYXJnaW46IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm5hdmJhci12ZXJ0aWNhbCAuc29jaWFsLW5ldCBsaSBzdmcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIGZpbGw6ICNiZjI3MmQ7XG59XG5cbi5ub3RpY2UtYm9hcmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogM3B4O1xufVxuLm5vdGljZS1ib2FyZCBpIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5ub3RpY2UtYm9hcmQgYSB7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbn1cbi5ub3RpY2UtYm9hcmQgc3ZnIHtcbiAgZmlsbDogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjo6bmctZGVlcCAubW9kYWwge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLm1vZGFsIC5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNjVhYztcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuOjpuZy1kZWVwIC5tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgY29sb3I6ICNmZmY7XG59XG46Om5nLWRlZXAgLm1vZGFsIC5tb2RhbC1jb250ZW50IGkge1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOjpuZy1kZWVwIC5tb2RhbCAubW9kYWwtY29udGVudCBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuOjpuZy1kZWVwIC5tb2RhbCAubW9kYWwtY29udGVudCBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5tb2RhbCAubW9kYWwtY29udGVudCAuYnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbn1cblxuLm5hdmJhci1uYXYtbGlzdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIGEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gYS5hY3RpdmUsIC5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtLnF1aWNrLWxpbmsgYSB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubmV3c2xldHRlciB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG4gIHBhZGRpbmc6IDQwcHggMDtcbn1cbi5uZXdzbGV0dGVyIC5mb3JtLWlubGluZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm5ld3NsZXR0ZXIgbGFiZWwge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ubmV3c2xldHRlciAuYnRuIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ub3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNlMWUxZTE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLyogbWFrZSBtYWluLWF4aXMgdmVydGljYWwgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIGFsaWduIGl0ZW1zIHZlcnRpY2FsbHksIGluIHRoaXMgY2FzZSAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBhbGlnbiBpdGVtcyBob3Jpem9udGFsbHksIGluIHRoaXMgY2FzZSAqL1xufVxuLm92ZXJsYXkuYWN0aXZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTAwMDA7XG59XG4ub3ZlcmxheSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwLjE7XG59XG4ub3ZlcmxheSAuY2xvc2UtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNXB4O1xuICBsZWZ0OiAyNXB4O1xufVxuLm92ZXJsYXkgdWwubWFpbi1uYXYge1xuICBmbG9hdDogbm9uZTtcbn1cbi5vdmVybGF5IHVsLm1haW4tbmF2IGxpIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5vdmVybGF5IHVsLm1haW4tbmF2IGxpIGEge1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm92ZXJsYXkgdWwubWFpbi1uYXYgbGkgYTpob3ZlciwgLm92ZXJsYXkgdWwubWFpbi1uYXYgbGkgYS5hY3RpdmUge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cbi5vdmVybGF5IC5nZW5lcmFsLWluZm8tbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4ub3ZlcmxheSAuZ2VuZXJhbC1pbmZvLW5hdiBhIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLm92ZXJsYXkgLmdlbmVyYWwtaW5mby1uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm5hdmJhci1uYXYtbGlzdCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(modalService, router) {
        _classCallCheck(this, HeaderComponent);

        this.modalService = modalService;
        this.router = router;
        this.showNavigationIndicators = false;
        this.showNavigationArrows = false;
        this.isOpen = true;
        this.isSlideOpen = true;
        this.slideConfig = {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }]
        };
        this.closeResult = '';
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;

        this.knowMore = function (text) {
          if (text === 'admission') {
            this.router.navigateByUrl('/Admissions', {
              skipLocationChange: true
            });
            this.modalService.dismissAll();
          }
        };

        this.list = [{
          name: 'Home'
        }, {
          name: 'ThePremiaStory'
        }, {
          name: 'ThePremiaLeague'
        }, {
          name: 'ThePremiaCulture'
        }, {
          name: 'ThePremiaEdge'
        }, {
          name: 'JoinThePremiaPride'
        }, {
          name: 'ThePremiaCorner'
        }, {
          name: 'CatchUpOverCoffee'
        } // {name: 'Eng'},
        //{name: 'HowToApply'},
        ];
      }

      _createClass(HeaderComponent, [{
        key: "open",
        value: function open(content) {
          var _this2 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg'
          }).result.then(function (result) {
            _this2.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this2.closeResult = "Dismissed ".concat(_this2.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "slideToggel",
        value: function slideToggel() {
          var body = document.getElementsByTagName('body')[0];
          this.isOpen = !this.isOpen;

          if (!this.isOpen) {
            body.classList.add('remove-scroll');
          } else {
            body.classList.remove('remove-scroll');
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.modalService.open(this.content, {
            size: 'lg'
          });
        }
      }, {
        key: "togglePaused",
        value: function togglePaused() {
          if (this.paused) {
            this.carousel.cycle();
          } else {
            this.carousel.pause();
          }

          this.paused = !this.paused;
        }
      }, {
        key: "onSlide",
        value: function onSlide(slideEvent) {
          if (this.unpauseOnArrow && slideEvent.paused && (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
          }

          if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      "static": true
    })], HeaderComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', {
      "static": true
    })], HeaderComponent.prototype, "carousel", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-about, .section-nofify, .premian-league, .section-events, .section-spacing {\n  padding: 70px 0;\n}\n.section-about h1, .section-nofify h1, .premian-league h1, .section-events h1, .section-spacing h1 {\n  margin-bottom: 40px;\n}\n.section-info {\n  background: #3e65ac;\n  position: relative;\n  overflow: hidden;\n  padding: 50px 0;\n}\n.section-info img {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.4;\n}\n.section-info h1, .section-info p {\n  color: #fff;\n}\n.section-info svg {\n  fill: #fff;\n  margin-bottom: 10px;\n}\n.section-info .panel-container {\n  margin: 30px auto 0;\n  display: block;\n  text-align: center;\n}\n.v-align {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 15px 0;\n}\n.section-nofify h5 {\n  display: table;\n}\n.section-nofify h5 span {\n  float: left;\n}\n.section-nofify h5:after {\n  content: \" \";\n  float: left;\n  width: 75px;\n  height: 2px;\n  background: #ccc;\n  margin-left: 15px;\n  margin-top: 13px;\n}\n.section-nofify ul.list li {\n  color: #000;\n}\n.section-nofify ul.list li::before {\n  background: #bf272d;\n}\n.section-admission .admission-flag {\n  position: relative;\n  text-align: center;\n  color: #fff;\n  padding: 25px 0;\n  height: 250px;\n}\n.section-admission .admission-flag .flag-pos {\n  content: \"\";\n  background: #bf272d;\n  position: absolute;\n  top: -25px;\n  left: 0px;\n  width: 100%;\n  height: 300px;\n  z-index: 1;\n  box-shadow: 7px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.section-admission .admission-flag .btn {\n  border: 1px solid #fff;\n  color: #fff;\n  background: none;\n}\n.section-admission p {\n  white-space: pre;\n  margin-top: 15px;\n}\n.section-admission .carousel .panel i {\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-admission .carousel .panel svg {\n  width: 75px;\n  height: 75px;\n}\n.section-admission .carousel .panel p {\n  font-size: 20px;\n  font-family: \"Lora\", serif;\n  text-align: center;\n}\n.section-curriculum ul.list li::before {\n  background: #bf272d;\n}\n.section-curriculum .row-f {\n  float: left;\n  width: 100%;\n}\n.section-curriculum .row-f .p0 {\n  padding: 0px;\n}\n.section-curriculum .section-curriculum-list {\n  margin-top: 15px;\n}\n.section-curriculum .section-curriculum-list.nav-pills li {\n  margin-bottom: 30px;\n}\n.section-curriculum .section-curriculum-list.nav-pills li .nav-link {\n  color: #000;\n  padding-left: 50px;\n  position: relative;\n}\n.section-curriculum .section-curriculum-list.nav-pills li .nav-link.active {\n  background: none;\n  color: #3e65ac;\n}\n.section-curriculum .section-curriculum-list.nav-pills li .nav-link.active::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 17px;\n  width: 40px;\n  height: 2px;\n  background: #3e65ac;\n}\n.section-curriculum .curriculum-info {\n  margin-top: -50px;\n  background: #fff;\n  padding: 30px;\n  color: #000;\n  font-family: \"Lora\", serif;\n  font-size: 16px;\n}\n.section-curriculum .curriculum-info .btn {\n  background: none;\n  border: 2px solid #000;\n  color: #000;\n  float: right;\n  font-family: \"Lora\", serif;\n}\n.section-curriculum .curriculum-info p {\n  font-size: 12px;\n}\n.section-curriculum .curriculum-info ul.list li {\n  color: #000;\n}\n.section-curriculum .text-highlighter:after {\n  content: \" \";\n  float: left;\n  width: 40px;\n  height: 2px;\n  background: #3e65ac;\n  margin: 10px 0px 0 -45px;\n}\n::ng-deep .testimonials {\n  background: #bf272d;\n  position: relative;\n  overflow: hidden;\n  padding-top: 50px;\n}\n::ng-deep .testimonials img {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.5;\n}\n::ng-deep .testimonials h1 {\n  color: #fff;\n  margin-bottom: 20px;\n}\n::ng-deep .testimonials p {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 5px;\n}\n::ng-deep .testimonials p:last-child {\n  margin-top: 35px;\n}\n::ng-deep .testimonials .carousel {\n  margin-top: 0;\n  z-index: 1;\n  margin-left: 50px;\n}\n::ng-deep .testimonials .carousel-inner {\n  height: 390px;\n}\n::ng-deep .testimonials .carousel-indicators li {\n  height: 10px;\n  border-radius: 10px;\n  border: 1px solid #fff;\n  background: transparent;\n}\n::ng-deep .testimonials .carousel-indicators li.active {\n  background: #fff;\n}\n::ng-deep .testimonials .carousel-item {\n  transition: opacity 1s ease !important;\n  position: absolute !important;\n  display: block !important;\n  opacity: 0;\n}\n::ng-deep .testimonials .carousel-item.active {\n  position: relative !important;\n  opacity: 1;\n}\n::ng-deep .testimonials .carousel-control-next,\n::ng-deep .testimonials .carousel-control-prev {\n  left: auto;\n  right: 0;\n  top: auto;\n  bottom: 75px;\n}\n::ng-deep .testimonials .carousel-control-prev {\n  right: 100px;\n}\n::ng-deep .testimonials .client-name {\n  font-weight: bold;\n  color: #000;\n  font-size: 20px;\n}\n.partner {\n  margin-top: 70px;\n  margin-bottom: 70px;\n}\n.partner p {\n  font-size: 20px;\n  font-family: \"Quicksand\", sans-serif;\n}\n.partner .panel {\n  height: 300px;\n  position: relative;\n  background: #fff;\n  padding: 30px;\n}\n.partner .panel:hover .info-view {\n  display: block;\n}\n.partner .img-box {\n  height: 95px;\n  margin-bottom: 25px;\n}\n.partner .img-box img {\n  height: 100%;\n  width: auto;\n  margin: 0 auto;\n  display: block;\n}\n.partner .info-view {\n  padding: 20px;\n  display: none;\n  background: #3e65ac;\n  position: absolute;\n  top: -25px;\n  left: 0px;\n  width: 110%;\n  height: calc(100% + 50px);\n  z-index: 1;\n  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.partner .info-view .img-box {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-bottom: 0;\n  margin-bottom: 20px;\n  background: #fff;\n}\n.partner .info-view p, .partner .info-view h5, .partner .info-view a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.partner .info-view p {\n  font-size: 14px;\n  font-family: \"Quicksand\", sans-serif;\n  word-break: break-all;\n}\n.partner .info-view a {\n  word-break: break-all;\n}\n.partner .info-view h5 {\n  position: relative;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n.partner .info-view h5::after {\n  content: \"\";\n  background: rgba(255, 255, 255, 0.5);\n  height: 1px;\n  width: 50px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.premian-league {\n  background-color: rgba(247, 247, 247, 0.5);\n}\n.premian-league .slick-slide img {\n  width: 100%;\n}\n.premian-league .slick-slide h6 {\n  margin-bottom: 0;\n  margin-top: 15px;\n  line-height: 18px;\n  font-weight: bold;\n}\n.premian-league .slick-slide p {\n  white-space: pre;\n}\n.clear-float {\n  clear: both;\n  float: none;\n}\n.main-banner {\n  height: 500px;\n  overflow: hidden;\n  margin-top: 89px;\n}\n.main-banner video {\n  width: 100%;\n}\n.newsletter {\n  background: #3e65ac;\n  padding: 40px 15px;\n}\n.newsletter .form-inline {\n  margin: 0 auto;\n}\n.newsletter label {\n  color: #000;\n  font-size: 20px;\n  margin-right: 15px;\n}\n.newsletter .btn {\n  background: #000;\n  color: #fff;\n  margin-left: 15px;\n  padding: 9px 15px;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n@media (max-width: 576px) {\n  .section-admission .admission-flag .flag-pos {\n    top: 0;\n    left: 0;\n    height: auto;\n  }\n\n  .section-curriculum .curriculum-info {\n    margin-top: 0px;\n  }\n\n  .section-info {\n    padding-bottom: 0px;\n  }\n  .section-info img {\n    width: auto;\n    height: 100%;\n  }\n  .section-info .panel-container {\n    padding-bottom: 15px;\n    margin-bottom: 30px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  .section-info .panel-container:last-child {\n    margin-bottom: 0;\n    border-bottom: 0;\n  }\n  .section-info svg {\n    width: 75px;\n    height: 75px;\n    margin-bottom: 30px;\n  }\n  .section-info .panel {\n    text-align: center;\n  }\n\n  .section-events {\n    width: 100%;\n  }\n  .section-events .events-grid li {\n    width: 100%;\n  }\n  .section-events .events-grid li figure {\n    width: 100%;\n    margin: 0 0 15px 0;\n  }\n\n  .section-curriculum .row-f {\n    margin-bottom: 30px;\n  }\n\n  .main-banner {\n    height: auto;\n  }\n\n  .newsletter .btn {\n    margin: 15px 0 0 0;\n  }\n\n  .premian-league img {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcYWNhZGVteS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtBQ0NEO0FEQUM7RUFDQyxtQkFBQTtBQ0VGO0FER0E7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUQ7QURDQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUM7RUFDQyxXQUFBO0FDQUY7QURFQztFQUNDLFVBQUE7RUFDQSxtQkFBQTtBQ0FGO0FERUM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FGO0FESUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDREQ7QURNQztFQUNDLGNBQUE7QUNIRjtBRElFO0VBQ0MsV0FBQTtBQ0ZIO0FESUU7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRkg7QURLQztFQUNDLFdBQUE7QUNIRjtBRElFO0VBQ0MsbUJBQUE7QUNGSDtBRFFDO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0xGO0FETUU7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsK0NBQUE7QUNKSDtBRE1RO0VBQ0wsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNKSDtBRE9DO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEU0c7RUFDQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDUEo7QURTRztFQUNDLFdBQUE7RUFDQSxZQUFBO0FDUEo7QURTRztFQUNDLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDUEo7QURpQkk7RUFDQyxtQkFBQTtBQ2RMO0FEbUJDO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNqQkY7QURrQkU7RUFDQyxZQUFBO0FDaEJIO0FEcUJDO0VBQ0MsZ0JBQUE7QUNuQkY7QURxQkc7RUFDQyxtQkFBQTtBQ25CSjtBRG9CSTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbEJMO0FEbUJLO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FDakJOO0FEa0JNO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDaEJQO0FEeUJDO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDdkJGO0FEd0JFO0VBQ0MsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUN0Qkg7QUR3QkU7RUFDQyxlQUFBO0FDdEJIO0FEd0JFO0VBQ0MsV0FBQTtBQ3RCSDtBRDRCRztFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDMUJIO0FEK0JBO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUM1QkQ7QUQ2QkM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUMzQkY7QUQ2QkM7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7QUMzQkY7QUQ2QkM7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUMzQkY7QUQ0QkU7RUFDQyxnQkFBQTtBQzFCSDtBRDZCQztFQUNDLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUMzQkY7QUQ2QkM7RUFDQyxhQUFBO0FDM0JGO0FENkJDO0VBQ0MsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQzNCRjtBRDRCRTtFQUNDLGdCQUFBO0FDMUJIO0FENkJDO0VBQ0Msc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQzNCRjtBRDRCRTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQzFCSjtBRDZCRzs7RUFFRCxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDRyxZQUFBO0FDM0JMO0FENkJFO0VBQ0MsWUFBQTtBQzNCSDtBRDZCRTtFQUNDLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUMzQkg7QURnQ0E7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0FDN0JEO0FEOEJDO0VBQ0MsZUFBQTtFQUNBLG9DQUFBO0FDNUJGO0FEOEJDO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDNUJGO0FEOEJHO0VBQ0MsY0FBQTtBQzVCSjtBRCtCQztFQUNDLFlBQUE7RUFDQSxtQkFBQTtBQzdCRjtBRDhCRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNJLGNBQUE7QUM1QlA7QUQrQkM7RUFDQyxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtBQzdCRjtBRDhCRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQzVCSDtBRDhCRTtFQUNDLCtCQUFBO0FDNUJIO0FEOEJFO0VBQ0MsZUFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUM1Qkg7QUQ4QkU7RUFDQyxxQkFBQTtBQzVCSDtBRDhCRTtFQUNDLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQzVCSDtBRDZCRztFQUNDLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQzNCSjtBRGlDQTtFQUNDLDBDQUFBO0FDOUJEO0FEZ0NFO0VBQ0UsV0FBQTtBQzlCSjtBRGdDRTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDOUJIO0FEZ0NFO0VBQ0MsZ0JBQUE7QUM5Qkg7QURtQ0E7RUFDQyxXQUFBO0VBQ0EsV0FBQTtBQ2hDRDtBRGtDQTtFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDL0JEO0FEZ0NDO0VBQ0MsV0FBQTtBQzlCRjtBRG1DQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNoQ0o7QURpQ0k7RUFDSSxjQUFBO0FDL0JSO0FEaUNJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQy9CUjtBRGtDSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNoQ1I7QURtQ0E7RUFHRztJQUNDLE1BQUE7SUFDQSxPQUFBO0lBQ0EsWUFBQTtFQ2xDRjs7RUR3Q0E7SUFDQyxlQUFBO0VDckNEOztFRDBDRDtJQUNDLG1CQUFBO0VDdkNBO0VEd0NBO0lBQ0MsV0FBQTtJQUNBLFlBQUE7RUN0Q0Q7RUR3Q0E7SUFDQyxvQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaURBQUE7RUN0Q0Q7RUR1Q0M7SUFDQyxnQkFBQTtJQUNBLGdCQUFBO0VDckNGO0VEd0NBO0lBQ0MsV0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQ3RDRDtFRHdDQztJQUNBLGtCQUFBO0VDdENEOztFRDBDRDtJQUNDLFdBQUE7RUN2Q0E7RUR5Q0M7SUFDQyxXQUFBO0VDdkNGO0VEd0NFO0lBQ0MsV0FBQTtJQUNBLGtCQUFBO0VDdENIOztFRDZDQTtJQUNDLG1CQUFBO0VDMUNEOztFRDhDRDtJQUNDLFlBQUE7RUMzQ0E7O0VEOENBO0lBQ0Msa0JBQUE7RUMzQ0Q7O0VEK0NBO0lBQ0MsV0FBQTtFQzVDRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tYWJvdXQsIC5zZWN0aW9uLW5vZmlmeSwgLnByZW1pYW4tbGVhZ3VlLCAuc2VjdGlvbi1ldmVudHMsIC5zZWN0aW9uLXNwYWNpbmd7XHJcblx0cGFkZGluZzo3MHB4IDA7XHJcblx0aDF7XHJcblx0XHRtYXJnaW4tYm90dG9tOjQwcHg7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLnNlY3Rpb24taW5mb3tcclxuXHRiYWNrZ3JvdW5kOiMzZTY1YWM7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxuXHRwYWRkaW5nOjUwcHggMDtcclxuXHRpbWd7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRvcGFjaXR5Oi40O1xyXG5cdH1cclxuXHRcclxuXHRoMSwgcHtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0fVxyXG5cdHN2Z3tcclxuXHRcdGZpbGw6I2ZmZjtcclxuXHRcdG1hcmdpbi1ib3R0b206MTBweDtcclxuXHR9XHJcblx0LnBhbmVsLWNvbnRhaW5lcntcclxuXHRcdG1hcmdpbjogMzBweCBhdXRvIDA7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcbn1cclxuXHJcbi52LWFsaWdue1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRwYWRkaW5nOjE1cHggMDtcclxufVxyXG5cclxuLnNlY3Rpb24tbm9maWZ5e1xyXG5cdFxyXG5cdGg1e1xyXG5cdFx0ZGlzcGxheTp0YWJsZTtcclxuXHRcdHNwYW57XHJcblx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHR9XHJcblx0XHQmOmFmdGVyeyBcclxuXHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdHdpZHRoOjc1cHg7XHJcblx0XHRcdGhlaWdodDoycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2NjYztcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHRcdFx0bWFyZ2luLXRvcDogMTNweDtcclxuXHRcdH1cclxuXHR9XHJcblx0dWwubGlzdCBsaXtcclxuXHRcdGNvbG9yOiMwMDA7XHJcblx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5zZWN0aW9uLWFkbWlzc2lvbntcclxuXHQuYWRtaXNzaW9uLWZsYWd7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdHBhZGRpbmc6MjVweCAwO1xyXG5cdFx0aGVpZ2h0OjI1MHB4O1xyXG5cdFx0LmZsYWctcG9ze1xyXG5cdFx0XHRjb250ZW50OicnO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOiAtMjVweDtcclxuXHRcdFx0bGVmdDogMHB4O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiAzMDBweDtcclxuXHRcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0Ym94LXNoYWRvdzogN3B4IDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0XHR9XHJcbiAgICAgICAgLmJ0bntcclxuXHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB7XHJcblx0XHR3aGl0ZS1zcGFjZTogcHJlO1xyXG5cdFx0bWFyZ2luLXRvcDoxNXB4O1xyXG5cdH1cclxuXHQuY2Fyb3VzZWx7XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdGl7XHJcblx0XHRcdFx0bWFyZ2luOjAgYXV0bztcclxuXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN2Z3tcclxuXHRcdFx0XHR3aWR0aDo3NXB4O1xyXG5cdFx0XHRcdGhlaWdodDo3NXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdHB7XHJcblx0XHRcdFx0Zm9udC1zaXplOjIwcHg7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnNlY3Rpb24tY3VycmljdWx1bXtcclxuXHR1bHtcclxuXHRcdCYubGlzdCB7XHJcblx0XHRcdGxpe1xyXG5cdFx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LnJvdy1me1xyXG5cdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHQucDB7XHJcblx0XHRcdHBhZGRpbmc6MHB4O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHQuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3R7XHJcblx0XHRtYXJnaW4tdG9wOjE1cHg7XHJcblx0XHQmLm5hdi1waWxsc3tcclxuXHRcdFx0bGl7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTozMHB4O1xyXG5cdFx0XHRcdC5uYXYtbGlua3tcclxuXHRcdFx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0XHRcdFx0cGFkZGluZy1sZWZ0OjUwcHg7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHQmLmFjdGl2ZXtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzNlNjVhYztcclxuXHRcdFx0XHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0bGVmdDowO1xyXG5cdFx0XHRcdFx0XHRcdHRvcDoxN3B4O1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMnB4O1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzZTY1YWM7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LmN1cnJpY3VsdW0taW5mb3tcclxuXHRcdG1hcmdpbi10b3A6LTUwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRwYWRkaW5nOjMwcHg7XHJcblx0XHRjb2xvcjojMDAwO1xyXG5cdFx0Zm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuXHRcdGZvbnQtc2l6ZToxNnB4O1xyXG5cdFx0LmJ0bntcclxuXHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0XHRib3JkZXI6MnB4IHNvbGlkICMwMDA7XHJcblx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdGZsb2F0OnJpZ2h0O1xyXG5cdFx0XHRmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG5cdFx0fVxyXG5cdFx0cHtcclxuXHRcdFx0Zm9udC1zaXplOjEycHg7XHJcblx0XHR9XHJcblx0XHR1bC5saXN0IGxpe1xyXG5cdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHJcblx0LnRleHQtaGlnaGxpZ2h0ZXJ7XHJcblx0XHRcdCY6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRcdGhlaWdodDogMnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjM2U2NWFjO1xyXG5cdFx0XHRtYXJnaW46IDEwcHggMHB4IDAgLTQ1cHg7XHJcblx0XHRcdH1cclxuXHRcdH0gXHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGVzdGltb25pYWxze1xyXG5cdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBhZGRpbmctdG9wOjUwcHg7XHJcblx0aW1ne1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDowO1xyXG5cdFx0bGVmdDowO1xyXG5cdFx0b3BhY2l0eTowLjU7XHJcblx0fVxyXG5cdGgxe1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdG1hcmdpbi1ib3R0b206MjBweDtcclxuXHR9XHJcblx0cHtcclxuXHRcdGZvbnQtc2l6ZToxOHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6NzAwO1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdG1hcmdpbi1ib3R0b206NXB4O1xyXG5cdFx0JjpsYXN0LWNoaWxke1xyXG5cdFx0XHRtYXJnaW4tdG9wOjM1cHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jYXJvdXNlbHtcclxuXHRcdG1hcmdpbi10b3A6MDtcclxuXHRcdHotaW5kZXg6MTtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG5cdH1cclxuXHQuY2Fyb3VzZWwtaW5uZXJ7XHJcblx0XHRoZWlnaHQ6MzkwcHg7XHJcblx0fVxyXG5cdC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpe1xyXG5cdFx0aGVpZ2h0OjEwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOjEwcHg7XHJcblx0XHRib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcblx0XHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdFx0Ji5hY3RpdmV7XHJcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNhcm91c2VsLWl0ZW0ge1xyXG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlICFpbXBvcnRhbnQ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuXHRcdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0Ji5hY3RpdmUge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdG9wYWNpdHk6IDE7XHJcblx0XHRcdCAgfVxyXG5cdCAgfVxyXG5cdCAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCwgXHJcblx0ICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2e1xyXG5cdFx0bGVmdDphdXRvO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDogYXV0bztcclxuICAgIFx0Ym90dG9tOiA3NXB4O1xyXG5cdFx0fVxyXG5cdFx0LmNhcm91c2VsLWNvbnRyb2wtcHJldntcclxuXHRcdFx0cmlnaHQ6MTAwcHg7XHJcblx0XHR9XHJcblx0XHQuY2xpZW50LW5hbWV7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHR9XHJcbn1cclxuXHJcblxyXG4ucGFydG5lcntcclxuXHRtYXJnaW4tdG9wOjcwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTo3MHB4O1xyXG5cdHB7XHJcblx0XHRmb250LXNpemU6MjBweDtcdFxyXG5cdFx0Zm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcblx0fVxyXG5cdC5wYW5lbHtcclxuXHRcdGhlaWdodDozMDBweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdHBhZGRpbmc6MzBweDtcclxuXHRcdCY6aG92ZXJ7XHJcblx0XHRcdC5pbmZvLXZpZXd7XHJcblx0XHRcdFx0ZGlzcGxheTpibG9jazt9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5pbWctYm94e1xyXG5cdFx0aGVpZ2h0Ojk1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOjI1cHg7XHJcblx0XHRpbWd7XHJcblx0XHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0XHR3aWR0aDphdXRvO1xyXG5cdFx0XHRtYXJnaW46MCBhdXRvO1xyXG5cdFx0ICAgICBkaXNwbGF5OmJsb2NrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuaW5mby12aWV3e1xyXG5cdFx0cGFkZGluZzoyMHB4O1xyXG5cdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0YmFja2dyb3VuZDojM2U2NWFjO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAtMjVweDtcclxuXHRcdGxlZnQ6IDBweDtcclxuXHRcdHdpZHRoOiAxMTAlO1xyXG5cdFx0aGVpZ2h0OmNhbGMoMTAwJSArIDUwcHgpO1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdFx0LmltZy1ib3h7XHJcblx0XHRcdHdpZHRoOjc1cHg7XHJcblx0XHRcdGhlaWdodDo3NXB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRcdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjA7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MjBweDtcclxuXHRcdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0fVxyXG5cdFx0cCxoNSxhe1xyXG5cdFx0XHRjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0XHR9XHJcblx0XHRwe1xyXG5cdFx0XHRmb250LXNpemU6MTRweDtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcblx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuXHRcdH1cclxuXHRcdGF7XHJcblx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuXHRcdH1cclxuXHRcdGg1e1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOjEwcHg7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MTBweDtcclxuXHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHRcdFx0XHRoZWlnaHQ6MXB4O1xyXG5cdFx0XHRcdHdpZHRoOjUwcHg7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGJvdHRvbTowO1xyXG5cdFx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnByZW1pYW4tbGVhZ3Vle1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDcsIDI0NywgLjUpO1xyXG5cdC5zbGljay1zbGlkZXtcclxuXHRcdGltZ3tcclxuXHRcdCAgd2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblx0XHRoNntcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTowO1xyXG5cdFx0XHRtYXJnaW4tdG9wOjE1cHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OjE4cHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0XHR9XHJcblx0XHRwe1xyXG5cdFx0XHR3aGl0ZS1zcGFjZTogcHJlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmNsZWFyLWZsb2F0e1xyXG5cdGNsZWFyOmJvdGg7XHJcblx0ZmxvYXQ6bm9uZTtcclxufVxyXG4ubWFpbi1iYW5uZXJ7XHJcblx0aGVpZ2h0OiA1MDBweDtcdFxyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxuXHRtYXJnaW4tdG9wOjg5cHg7XHJcblx0dmlkZW97XHJcblx0XHR3aWR0aDoxMDAlIDsgXHJcblx0fVxyXG59XHJcblxyXG5cclxuLm5ld3NsZXR0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiMzZTY1YWM7XHJcbiAgICBwYWRkaW5nOjQwcHggMTVweDtcclxuICAgIC5mb3JtLWlubGluZXtcclxuICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgfVxyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuXHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzAwMDtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgcGFkZGluZzo5cHggMTVweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0LnNlY3Rpb24tYWRtaXNzaW9ue1xyXG5cdFx0LmFkbWlzc2lvbi1mbGFne1xyXG5cdFx0XHQuZmxhZy1wb3N7XHJcblx0XHRcdFx0dG9wOjA7XHJcblx0XHRcdFx0bGVmdDowO1xyXG5cdFx0XHRcdGhlaWdodDphdXRvO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuc2VjdGlvbi1jdXJyaWN1bHVtIHtcclxuXHRcdC5jdXJyaWN1bHVtLWluZm97XHJcblx0XHRcdG1hcmdpbi10b3A6MHB4O1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5zZWN0aW9uLWluZm97XHJcblx0XHRwYWRkaW5nLWJvdHRvbTowcHg7XHJcblx0XHRpbWd7XHJcblx0XHRcdHdpZHRoOmF1dG87XHJcblx0XHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0fVxyXG5cdFx0LnBhbmVsLWNvbnRhaW5lcntcclxuXHRcdFx0cGFkZGluZy1ib3R0b206MTVweDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTozMHB4O1xyXG5cdFx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcblx0XHRcdCY6bGFzdC1jaGlsZHtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOjA7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTowO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRzdmd7XHJcblx0XHRcdHdpZHRoOiA3NXB4O1xyXG5cdFx0XHRoZWlnaHQ6IDc1cHg7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MzBweDtcclxuXHRcdH1cclxuXHRcdCAucGFuZWx7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdCB9XHJcblx0fVxyXG5cclxuXHQuc2VjdGlvbi1ldmVudHN7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0LmV2ZW50cy1ncmlke1xyXG5cdFx0XHRsaXtcclxuXHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdGZpZ3VyZXtcclxuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0XHRtYXJnaW46MCAwIDE1cHggMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5zZWN0aW9uLWN1cnJpY3VsdW0ge1xyXG5cdFx0LnJvdy1me1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjMwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQubWFpbi1iYW5uZXJ7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0fVxyXG5cdC5uZXdzbGV0dGVyIHtcclxuXHRcdC5idG57XHJcblx0XHRcdG1hcmdpbjoxNXB4IDAgMCAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQucHJlbWlhbi1sZWFndWV7XHJcblx0XHRpbWd7XHJcblx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiLnNlY3Rpb24tYWJvdXQsIC5zZWN0aW9uLW5vZmlmeSwgLnByZW1pYW4tbGVhZ3VlLCAuc2VjdGlvbi1ldmVudHMsIC5zZWN0aW9uLXNwYWNpbmcge1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG4uc2VjdGlvbi1hYm91dCBoMSwgLnNlY3Rpb24tbm9maWZ5IGgxLCAucHJlbWlhbi1sZWFndWUgaDEsIC5zZWN0aW9uLWV2ZW50cyBoMSwgLnNlY3Rpb24tc3BhY2luZyBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5zZWN0aW9uLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cbi5zZWN0aW9uLWluZm8gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uc2VjdGlvbi1pbmZvIGgxLCAuc2VjdGlvbi1pbmZvIHAge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zZWN0aW9uLWluZm8gc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52LWFsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuXG4uc2VjdGlvbi1ub2ZpZnkgaDUge1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5zZWN0aW9uLW5vZmlmeSBoNSBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uc2VjdGlvbi1ub2ZpZnkgaDU6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG4uc2VjdGlvbi1ub2ZpZnkgdWwubGlzdCBsaSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tbm9maWZ5IHVsLmxpc3QgbGk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG5cbi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRtaXNzaW9uLWZsYWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDI1cHggMDtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRtaXNzaW9uLWZsYWcgLmZsYWctcG9zIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yNXB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiA3cHggNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRtaXNzaW9uLWZsYWcgLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIHAge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5jYXJvdXNlbCAucGFuZWwgaSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5jYXJvdXNlbCAucGFuZWwgc3ZnIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuY2Fyb3VzZWwgLnBhbmVsIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tY3VycmljdWx1bSB1bC5saXN0IGxpOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAucm93LWYge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5yb3ctZiAucDAge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5zZWN0aW9uLWN1cnJpY3VsdW0tbGlzdCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5zZWN0aW9uLWN1cnJpY3VsdW0tbGlzdC5uYXYtcGlsbHMgbGkge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3QubmF2LXBpbGxzIGxpIC5uYXYtbGluayB7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLnNlY3Rpb24tY3VycmljdWx1bS1saXN0Lm5hdi1waWxscyBsaSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICMzZTY1YWM7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5zZWN0aW9uLWN1cnJpY3VsdW0tbGlzdC5uYXYtcGlsbHMgbGkgLm5hdi1saW5rLmFjdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTdweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAuY3VycmljdWx1bS1pbmZvIHtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLWluZm8gLmJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gIGNvbG9yOiAjMDAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLWluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLmN1cnJpY3VsdW0taW5mbyB1bC5saXN0IGxpIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC50ZXh0LWhpZ2hsaWdodGVyOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG4gIG1hcmdpbjogMTBweCAwcHggMCAtNDVweDtcbn1cblxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwLjU7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIHA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwge1xuICBtYXJnaW4tdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIC5jYXJvdXNlbC1pbm5lciB7XG4gIGhlaWdodDogMzkwcHg7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWl0ZW0ge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDA7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIC5jYXJvdXNlbC1jb250cm9sLW5leHQsXG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiA3NXB4O1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gIHJpZ2h0OiAxMDBweDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIC5jbGllbnQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucGFydG5lciB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG4ucGFydG5lciBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbn1cbi5wYXJ0bmVyIC5wYW5lbCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5wYXJ0bmVyIC5wYW5lbDpob3ZlciAuaW5mby12aWV3IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucGFydG5lciAuaW1nLWJveCB7XG4gIGhlaWdodDogOTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5wYXJ0bmVyIC5pbWctYm94IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wYXJ0bmVyIC5pbmZvLXZpZXcge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI1cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDExMCU7XG4gIGhlaWdodDogY2FsYygxMDAlICsgNTBweCk7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLnBhcnRuZXIgLmluZm8tdmlldyAuaW1nLWJveCB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5wYXJ0bmVyIC5pbmZvLXZpZXcgcCwgLnBhcnRuZXIgLmluZm8tdmlldyBoNSwgLnBhcnRuZXIgLmluZm8tdmlldyBhIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5wYXJ0bmVyIC5pbmZvLXZpZXcgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5wYXJ0bmVyIC5pbmZvLXZpZXcgYSB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5wYXJ0bmVyIC5pbmZvLXZpZXcgaDUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnBhcnRuZXIgLmluZm8tdmlldyBoNTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5wcmVtaWFuLWxlYWd1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDcsIDI0NywgMC41KTtcbn1cbi5wcmVtaWFuLWxlYWd1ZSAuc2xpY2stc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJlbWlhbi1sZWFndWUgLnNsaWNrLXNsaWRlIGg2IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByZW1pYW4tbGVhZ3VlIC5zbGljay1zbGlkZSBwIHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbn1cblxuLmNsZWFyLWZsb2F0IHtcbiAgY2xlYXI6IGJvdGg7XG4gIGZsb2F0OiBub25lO1xufVxuXG4ubWFpbi1iYW5uZXIge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiA4OXB4O1xufVxuLm1haW4tYmFubmVyIHZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXdzbGV0dGVyIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgcGFkZGluZzogNDBweCAxNXB4O1xufVxuLm5ld3NsZXR0ZXIgLmZvcm0taW5saW5lIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubmV3c2xldHRlciBsYWJlbCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5uZXdzbGV0dGVyIC5idG4ge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmc6IDlweCAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdGlvbi1hZG1pc3Npb24gLmFkbWlzc2lvbi1mbGFnIC5mbGFnLXBvcyB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnNlY3Rpb24tY3VycmljdWx1bSAuY3VycmljdWx1bS1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAuc2VjdGlvbi1pbmZvIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG4gIC5zZWN0aW9uLWluZm8gaW1nIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24taW5mbyAucGFuZWwtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgLnNlY3Rpb24taW5mbyAucGFuZWwtY29udGFpbmVyOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgfVxuICAuc2VjdGlvbi1pbmZvIHN2ZyB7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgLnNlY3Rpb24taW5mbyAucGFuZWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zZWN0aW9uLWV2ZW50cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24tZXZlbnRzIC5ldmVudHMtZ3JpZCBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24tZXZlbnRzIC5ldmVudHMtZ3JpZCBsaSBmaWd1cmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgfVxuXG4gIC5zZWN0aW9uLWN1cnJpY3VsdW0gLnJvdy1mIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLm1haW4tYmFubmVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAubmV3c2xldHRlciAuYnRuIHtcbiAgICBtYXJnaW46IDE1cHggMCAwIDA7XG4gIH1cblxuICAucHJlbWlhbi1sZWFndWUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    ;

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.partnerConfig = {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }]
        };
        this.partner = [{
          description: "Metamor-\n      phosis",
          description_2: "An organisation that\n      seeks to empower the\n      youth with an\n      entrepreneurial skillset.",
          link: "http://www.metamor\n      phosisedu.com"
        }, {
          description: "Sportz Village",
          description_2: "A platform that focuses on the\n      aspects of physical education",
          link: "https://www.sportzvillage.com/schools/ "
        }, {
          description: "Furtados\n      School Of\n      Music",
          description_2: "One of the largest\n      music educators of India",
          link: "https://furtadosschoolofmusic.com"
        }, {
          description: "Yardstick",
          description_2: "Learning programs that\n      enhance the child's experience",
          link: " http://www.yardstickedu.com"
        }, {
          description: "NumberNagar",
          description_2: "An integrated program for Maths,\n      Science and English",
          link: "https://www.numbernagar.com/"
        }, {
          description: "Creya Learning",
          description_2: "An organisation that helps \n      children become inventors and innovators",
          link: "https://www.creyalearning.com/stem/"
        }, {
          description: "Book room from Scholastic",
          description_2: "Organising your books",
          link: "http://teacher.scholastic.com/products/leveledbookrooms/index.htm"
        }];
        this.banner = [{
          title: 'First slide label',
          description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
          title: 'Second slide label',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
          title: 'Third slide label',
          description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        }];
        this.slideConfig = {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }]
        };
        this.admissionConfig = {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }]
        };
        this.admission = [{
          icon: '#icon_reading',
          description: "Sculpting\nYoung\nLearners"
        }, {
          icon: '#icon_education',
          description: "Imparting\nHolistic\nEducation"
        }, {
          icon: '#icon_emoDev',
          description: "Nurturing a\nProgressive\nMindset"
        }, {
          icon: '#icon_reading',
          description: "Sculpting\nYoung\nLearners"
        }, {
          icon: '#icon_education',
          description: "Imparting\nHolistic\nEducation"
        }, {
          icon: '#icon_emoDev',
          description: "Nurturing a\nProgressive\nMindset"
        }];
        this.notify = [{
          title: 'Vision',
          col: 'col-lg-5 col-md-5',
          description: 'Our vision is to raise, our ‘Premia Pride’ to live their dreams as a generation who are:',
          moreInfo: [{
            info: 'Resilient and Confident lifelong learners'
          }, {
            info: 'Agile and authentic individuals'
          }, {
            info: 'Innovative and intuitive changemakers'
          }, {
            info: 'Socially responsible and humble global citizens'
          }, {
            info: 'Empathetic and humane souls who uphold integrity above all'
          }]
        }, {
          title: 'Mission',
          col: 'col-lg-4 col-md-4',
          description: "Our students will be equipped to meet the current and future challenges with\n      values of\n      ",
          moreInfo: [{
            info: 'Resilience'
          }, {
            info: 'Agility'
          }, {
            info: 'Integrity'
          }, {
            info: 'Social responsibility'
          }, {
            info: 'Empathy'
          }]
        }];
        this.solution = [{
          description: "Comprehensive Development",
          icon: '#icon_termDevelopment'
        }, {
          description: "Communication and\n      Vocational Training",
          icon: '#icon_commTrainning'
        }, {
          description: "Performing Arts",
          icon: '#icon_art'
        }, {
          description: "Sports",
          icon: '#icon_tophy'
        }, {
          description: "Health and Fitness",
          icon: '#icon_health'
        }, {
          description: "Emotional Development",
          icon: '#icon_emoDev'
        }];
        this.testimonials = [{
          clientView_1: 'The Premia Academy is the kind of school I was looking for my kid- a perfect balance of curriculum and sports. The school has got all the required facilities for a kid to learn. Infrastructure is excellent as it is very new and needs to be maintained the same way in the coming years without compromising on quality. Parent relationship is good I should say.',
          clientView_2: ' I like the involvement of school staff with the kids as they make the children comfortable. Principal and the management are making sure the kids, as well as the parents, feel confident about the school which is a good sign and we understand this is the first academic year for Premia.',
          clientView_3: ' We foresee that this will be one of the best school in Hyderabad. All the best and look forward to seeing the school grow in strength and bustling with students at the campus soon..',
          clientName: "Sweta D.S\n      Parent of Sanketh D.S",
          desti: 'Grade 2'
        }, {
          clientView_1: "I've always believed in holistic education and when I met with academicians at Premia, that's what seemed to be their plan. Some of the values that they talk about are very similar to the ones I try to inculcate as a professional and parent.  ",
          clientView_2: "Knowing that my child will be exposed to sports and music at a very young age is comforting. These engagements go a long way in developing certain important skills such as focus, team behavior and dealing with losses in a balanced manner. ",
          clientView_3: "I firmly believe that this tends to impact their attitude in real life social situations too. Although my journey with Premia started only about a month back, I see them do their best in this lock down situation. All I want is my child to be happy in life and  I do hope we lay the foundation of their happy lives together.",
          clientName: "Sushma Panyam \n      Parent of Nihal Singaraju",
          desti: 'Grade 2'
        }, {
          clientView_1: 'The Premia Academy is the kind of school I was looking for my kid- a perfect balance of curriculum and sports. The school has got all the required facilities for a kid to learn. Infrastructure is excellent as it is very new and needs to be maintained the same way in the coming years without compromising on quality. Parent relationship is good I should say.',
          clientView_2: ' I like the involvement of school staff with the kids as they make the children comfortable. Principal and the management are making sure the kids, as well as the parents, feel confident about the school which is a good sign and we understand this is the first academic year for Premia.',
          clientView_3: ' We foresee that this will be one of the best school in Hyderabad. All the best and look forward to seeing the school grow in strength and bustling with students at the campus soon..',
          clientName: "Sweta D.S\n      Parent of Sanketh D.S",
          desti: 'Grade 2'
        }, {
          clientView_1: "I've always believed in holistic education and when I met with academicians at Premia, that's what seemed to be their plan. Some of the values that they talk about are very similar to the ones I try to inculcate as a professional and parent.  ",
          clientView_2: "Knowing that my child will be exposed to sports and music at a very young age is comforting. These engagements go a long way in developing certain important skills such as focus, team behavior and dealing with losses in a balanced manner. ",
          clientView_3: "I firmly believe that this tends to impact their attitude in real life social situations too. Although my journey with Premia started only about a month back, I see them do their best in this lock down situation. All I want is my child to be happy in life and  I do hope we lay the foundation of their happy lives together.",
          clientName: "Sushma Panyam \n      Parent of Nihal Singaraju",
          desti: 'Grade 2'
        }, {
          clientView_1: 'The Premia Academy is the kind of school I was looking for my kid- a perfect balance of curriculum and sports. The school has got all the required facilities for a kid to learn. Infrastructure is excellent as it is very new and needs to be maintained the same way in the coming years without compromising on quality. Parent relationship is good I should say.',
          clientView_2: ' I like the involvement of school staff with the kids as they make the children comfortable. Principal and the management are making sure the kids, as well as the parents, feel confident about the school which is a good sign and we understand this is the first academic year for Premia.',
          clientView_3: ' We foresee that this will be one of the best school in Hyderabad. All the best and look forward to seeing the school grow in strength and bustling with students at the campus soon..',
          clientName: "Sweta D.S\n      Parent of Sanketh D.S",
          desti: 'Grade 2'
        }, {
          clientView_1: "I've always believed in holistic education and when I met with academicians at Premia, that's what seemed to be their plan. Some of the values that they talk about are very similar to the ones I try to inculcate as a professional and parent.  ",
          clientView_2: "Knowing that my child will be exposed to sports and music at a very young age is comforting. These engagements go a long way in developing certain important skills such as focus, team behavior and dealing with losses in a balanced manner. ",
          clientView_3: "I firmly believe that this tends to impact their attitude in real life social situations too. Although my journey with Premia started only about a month back, I see them do their best in this lock down situation. All I want is my child to be happy in life and  I do hope we lay the foundation of their happy lives together.",
          clientName: "Sushma Panyam \n      Parent of Nihal Singaraju",
          desti: 'Grade 2'
        }]; // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

        this.premianLeague = [{
          name: 'MS. MALINI PAUL',
          post: 'HEADMISTRESS',
          desc: "Facilitator, Visionary, educationist\n30+ Years of experience"
        }, {
          name: 'MS. TRUPTI RAO',
          post: 'PRINCIPAL',
          desc: "Educator, Teacher, Achiever\n 21+ Years of experience\n19 years at Meridian"
        }, {
          name: 'MS. RUBINA MAJID',
          post: 'SOCIETY PRESIDENT',
          desc: "IITian\nRenowned\nBusiness Icon"
        }];
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;

        this.knowMore = function (text) {
          if (text == 'culture') {
            this.router.navigateByUrl('/TheStudyCulture', {
              skipLocationChange: true
            });
          } else if (text == 'edge') {
            this.router.navigateByUrl('/ThePremianEdge', {
              skipLocationChange: true
            });
          } else if (text == 'apply') {
            this.router.navigateByUrl('/Admissions', {
              skipLocationChange: true
            });
          } else if (text == 'admission') {
            this.router.navigateByUrl('/Admissions', {
              skipLocationChange: true
            });
          }
        };
      }

      _createClass(HomeComponent, [{
        key: "togglePaused",
        value: function togglePaused() {
          if (this.paused) {
            this.carousel.cycle();
          } else {
            this.carousel.pause();
          }

          this.paused = !this.paused;
        }
      }, {
        key: "onSlide",
        value: function onSlide(slideEvent) {
          if (this.unpauseOnArrow && slideEvent.paused && (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
          }

          if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', {
      "static": true
    })], HomeComponent.prototype, "carousel", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/space.pipe.module.ts":
  /*!**************************************!*\
    !*** ./src/app/space.pipe.module.ts ***!
    \**************************************/

  /*! exports provided: CreateSpacePipe */

  /***/
  function srcAppSpacePipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateSpacePipe", function () {
      return CreateSpacePipe;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _space_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./space.pipe */
    "./src/app/space.pipe.ts");

    var CreateSpacePipe = function CreateSpacePipe() {
      _classCallCheck(this, CreateSpacePipe);
    };

    CreateSpacePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_space_pipe__WEBPACK_IMPORTED_MODULE_3__["CreateSpace"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_space_pipe__WEBPACK_IMPORTED_MODULE_3__["CreateSpace"]] // <---

    })], CreateSpacePipe);
    /***/
  },

  /***/
  "./src/app/space.pipe.ts":
  /*!*******************************!*\
    !*** ./src/app/space.pipe.ts ***!
    \*******************************/

  /*! exports provided: CreateSpace */

  /***/
  function srcAppSpacePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateSpace", function () {
      return CreateSpace;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CreateSpace = /*#__PURE__*/function () {
      function CreateSpace() {
        _classCallCheck(this, CreateSpace);
      }

      _createClass(CreateSpace, [{
        key: "transform",
        value: function transform(value) {
          var newStr = value;
          newStr = newStr.replace(/([A-Z])/g, ' $1').trim();
          return newStr;
        }
      }]);

      return CreateSpace;
    }();

    CreateSpace = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'createSpace'
    })], CreateSpace);
    /***/
  },

  /***/
  "./src/app/thepremianedge/thepremianedge.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/thepremianedge/thepremianedge.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThepremianedgeThepremianedgeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-study-culture .row-f, .section-study-culture .row {\n  margin: 70px 0 100px 70px;\n  position: relative;\n}\n.section-study-culture .curriculum {\n  margin-bottom: 0px;\n}\n.section-study-culture .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-study-culture .panel .panel-body {\n  width: 70%;\n}\n.section-study-culture .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n}\n.section-study-culture .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-study-culture .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-study-culture .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-study-culture h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n  font-weight: normal;\n}\n.section-study-culture h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-study-culture h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-study-culture .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-study-culture ul.list {\n  margin: 0px;\n}\n.section-study-culture ul.list li {\n  color: #000;\n}\n.section-study-culture ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n.applycation-rules .btn {\n  width: 75%;\n  padding: 15px 0;\n  background: #bf272d;\n  font-family: \"Lora\", serif;\n  margin: 25px auto 0;\n  font-size: 24px;\n  display: block;\n}\n.edge-info {\n  margin: 100px 0 0 0 !important;\n}\n.edge-info .plan-title {\n  margin: 80px 0 50px;\n}\n.edge-info .panel {\n  margin-bottom: 50px;\n}\n.edge-info .panel:nth-child(3n+1) {\n  background: #3e65ac;\n  color: #fff;\n}\n.edge-info .panel:nth-child(3n+2) {\n  background: #bf272d;\n  color: #fff;\n}\n.edge-info .panel:nth-child(3n+3) {\n  background: #000;\n  color: #fff;\n}\n.edge-info .panel.bg-white {\n  background: #fff;\n}\n.edge-info .panel.bg-white p {\n  color: #000;\n}\n.edge-info .panel:nth-child(1) span {\n  background: #3e65ac;\n}\n.edge-info .panel:nth-child(2) span {\n  background: #bf272d;\n}\n.edge-info .panel:nth-child(3) span {\n  background: #000;\n}\n.edge-info .panel:nth-child(4) span {\n  background: #3e65ac;\n}\n.edge-info .panel:nth-child(5) span {\n  background: #bf272d;\n}\n.edge-info .panel span {\n  z-index: 1;\n  position: relative;\n  padding-right: 15px;\n}\n.edge-info .heading-title {\n  position: relative;\n}\n.edge-info .heading-title::after {\n  content: \"\";\n  position: absolute;\n  top: 18px;\n  left: 0px;\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n.edge-info .extra-info {\n  position: relative;\n}\n.edge-info .extra-info .panel .panel-body {\n  width: 50%;\n}\n.section-explicit {\n  margin: 70px 0px;\n}\n.section-explicit .row {\n  margin-top: 40px;\n  margin-bottom: 0;\n}\n.section-explicit h1 {\n  font-weight: normal;\n}\n.section-explicit .bar {\n  position: relative;\n  padding-top: 15px;\n}\n.section-explicit .bar::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100px;\n  height: 5px;\n  background: #bf272d;\n}\n.section-explicit .explicit-sec {\n  padding: 0px;\n}\n.section-explicit .explicit-sec .add-info {\n  position: relative;\n  width: 20%;\n  padding: 0px;\n  display: flex;\n}\n.section-explicit .explicit-sec .add-info:first-child .panel {\n  margin-left: 0px;\n}\n.section-explicit .admission-flag {\n  position: relative;\n  color: #fff;\n  padding: 25px 0;\n  height: 250px;\n}\n.section-explicit .admission-flag .btn {\n  border: 1px solid #fff;\n  color: #fff;\n  background: none;\n}\n.section-explicit p {\n  white-space: pre;\n  margin-top: 15px;\n}\n.section-explicit .panel {\n  margin-left: 5px;\n  padding: 15px;\n  width: 100%;\n  background: #fff;\n  transition: 0.5s;\n}\n.section-explicit .panel a {\n  color: #000;\n}\n.section-explicit .panel h1 {\n  font-family: \"Quicksand\", sans-serif;\n  color: #000;\n}\n.section-explicit .panel h6 {\n  font-family: \"Lora\", serif;\n  color: #000;\n}\n.section-explicit .panel i {\n  margin: 25px auto;\n  display: block;\n}\n.section-explicit .panel svg {\n  width: 75px;\n  height: 75px;\n}\n.section-explicit .panel:hover, .section-explicit .panel.active {\n  border: none;\n  border-radius: 0;\n  background: #bf272d;\n  transform: scale(1.1);\n  z-index: 1;\n  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.section-explicit .panel:hover .panel-heading .bar::after, .section-explicit .panel.active .panel-heading .bar::after {\n  background: #fff !important;\n}\n.section-explicit .panel:hover .panel-heading h6, .section-explicit .panel:hover .panel-heading p, .section-explicit .panel:hover .panel-heading h1, .section-explicit .panel:hover .panel-heading a, .section-explicit .panel.active .panel-heading h6, .section-explicit .panel.active .panel-heading p, .section-explicit .panel.active .panel-heading h1, .section-explicit .panel.active .panel-heading a {\n  color: #fff;\n}\n.section-explicit .panel:hover svg, .section-explicit .panel.active svg {\n  fill: #fff;\n}\n.tab-info {\n  background: #bf272d;\n  padding: 15px;\n  margin-top: 40px;\n  color: #fff;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlcHJlbWlhbmVkZ2UvRDpcXGFjYWRlbXkvc3JjXFxhcHBcXHRoZXByZW1pYW5lZGdlXFx0aGVwcmVtaWFuZWRnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlcHJlbWlhbmVkZ2UvdGhlcHJlbWlhbmVkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyx5QkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQztFQUNDLGtCQUFBO0FDQUY7QURFQztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtBQ0FGO0FEQ0U7RUFDQyxVQUFBO0FDQ0g7QURDRTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0g7QURBRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNFSjtBRERJO0VBQ0MsVUFBQTtFQUNBLHdCQUFBO0VBQ0csZUFBQTtBQ0dSO0FEQUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREdDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDREY7QURHQztFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDREY7QURFRTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0FIO0FER0M7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0RGO0FER0M7RUFDQyxXQUFBO0FDREY7QURFRTtFQUNDLFdBQUE7QUNBSDtBRENHO0VBQ0MsbUJBQUE7QUNDSjtBREtBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNGRDtBREdDO0VBQ0Msd0JBQUE7QUNERjtBRE1JO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0hSO0FET0E7RUFDSSw4QkFBQTtBQ0pKO0FES0k7RUFDSSxtQkFBQTtBQ0hSO0FEZ0JBO0VBRUksbUJBQUE7QUNmSjtBRE1JO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDSlI7QURFSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0FSO0FERkk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNJUjtBRElHO0VBQ0ssZ0JBQUE7QUNGUjtBREdRO0VBQ0ksV0FBQTtBQ0RaO0FETVE7RUFDSSxtQkFBQTtBQ0paO0FEUVE7RUFDSSxtQkFBQTtBQ05aO0FEVVE7RUFDSSxnQkFBQTtBQ1JaO0FEY1E7RUFDSSxtQkFBQTtBQ1paO0FEZVE7RUFDSSxtQkFBQTtBQ2JaO0FEZ0JJO0VBRUksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNmUjtBRG1CSTtFQUNJLGtCQUFBO0FDakJSO0FEbUJRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDakJaO0FEb0JDO0VBQ0Msa0JBQUE7QUNsQkY7QURvQkc7RUFDQyxVQUFBO0FDbEJKO0FEd0JBO0VBQ0MsZ0JBQUE7QUNyQkQ7QURzQkM7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FDcEJGO0FEdUJDO0VBQ0MsbUJBQUE7QUNyQkY7QUR1QkM7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0FDckJGO0FEc0JFO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDcEJIO0FEd0JDO0VBQ0MsWUFBQTtBQ3RCRjtBRHdCRTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDdEJIO0FEd0JJO0VBQ0MsZ0JBQUE7QUN0Qkw7QUQyQkM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ3pCRjtBRDBCRTtFQUNDLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDeEJIO0FEMkJDO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtBQ3pCRjtBRDJCRTtFQUNJLGdCQUFBO0VBQ0gsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDekJIO0FEMEJHO0VBQ0MsV0FBQTtBQ3hCSjtBRDBCRztFQUNDLG9DQUFBO0VBQ0EsV0FBQTtBQ3hCSjtBRDBCRztFQUNDLDBCQUFBO0VBQ0EsV0FBQTtBQ3hCSjtBRDBCRztFQUNDLGlCQUFBO0VBQ0EsY0FBQTtBQ3hCSjtBRDBCRztFQUNDLFdBQUE7RUFDQSxZQUFBO0FDeEJKO0FEMEJHO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtBQ3hCSjtBRDJCTTtFQUNDLDJCQUFBO0FDekJQO0FENEJLO0VBQ0MsV0FBQTtBQzFCTjtBRDZCSTtFQUNDLFVBQUE7QUMzQkw7QUQ0Q0E7RUFDQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUN6Q0Q7QUQ0Q0E7RUFFRTtJQUNDLGdCQUFBO0VDMUNEO0VENENEO0lBQ0MsaUJBQUE7RUMxQ0E7RUQ0Q0Q7SUFDQyxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VDMUNBO0VENENEO0lBQ0MsV0FBQTtFQzFDQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGhlcHJlbWlhbmVkZ2UvdGhlcHJlbWlhbmVkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdC5yb3ctZiwgLnJvd3tcclxuXHRcdG1hcmdpbjo3MHB4IDAgMTAwcHggNzBweCA7IFxyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQuY3VycmljdWx1bXtcclxuXHRcdG1hcmdpbi1ib3R0b206MHB4O1xyXG5cdH1cclxuXHQucGFuZWwge1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0cGFkZGluZzo1MHB4O1xyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdHdpZHRoOjcwJTtcclxuXHRcdH1cclxuXHRcdCYuc3RvcnktaW5mb3tcclxuXHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0LmZseWluZy1wbGFuZXtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0dG9wOjBweDtcclxuXHRcdFx0XHRzdmd7XHJcblx0XHRcdFx0XHRmaWxsOiAjZmZmO1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgXHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdHRvcDo1MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAzcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRoMXtcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHR9XHJcblx0aDJ7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmctYm90dG9tOjVweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0Y29udGVudDpcIiBcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206MDtcclxuXHRcdFx0bGVmdDowO1xyXG5cdFx0XHR3aWR0aDo1MHB4O1xyXG5cdFx0XHRoZWlnaHQ6MnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNmMGYwZjA7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OjA7XHJcblx0XHR0b3A6MDtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0fVxyXG5cdHVsLmxpc3R7XHJcblx0XHRtYXJnaW46MHB4O1xyXG5cdFx0bGl7XHJcblx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5tb3JlLWluZm97XHJcblx0ZmxvYXQ6bm9uZTtcclxuXHRjbGVhcjpib3RoO1xyXG5cdHB7XHJcblx0XHRtYXJnaW46NTBweCAwIDcwcHggNzVweCA7XHJcblx0fVxyXG59XHJcblxyXG4uYXBwbHljYXRpb24tcnVsZXN7XHJcbiAgICAuYnRue1xyXG4gICAgICAgIHdpZHRoOjc1JTtcclxuICAgICAgICBwYWRkaW5nOjE1cHggMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuICAgICAgICBtYXJnaW46MjVweCBhdXRvIDA7XHJcbiAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuLmVkZ2UtaW5mb3tcclxuICAgIG1hcmdpbjoxMDBweCAwIDAgMCAhaW1wb3J0YW50O1xyXG4gICAgLnBsYW4tdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luOjgwcHggMCA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICRiZy1jb2xvcnM6ICMzZTY1YWMsICNiZjI3MmQsICMwMDA7XHJcbkBtaXhpbiBhbHRlcm5hdGluZy1iYWNrZ3JvdW5kIHtcclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkYmctY29sb3JzKSB7XHJcbiAgICAmOm50aC1jaGlsZCgje2xlbmd0aCgkYmctY29sb3JzKX1uKyN7JGl9KSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogKG50aCgkYmctY29sb3JzLCAkaSkpO1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGFuZWx7XHJcbiAgICBAaW5jbHVkZSBhbHRlcm5hdGluZy1iYWNrZ3JvdW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gICAmLmJnLXdoaXRle1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjojMDAwOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgxKXtcclxuICAgICAgIFxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzZTY1YWM7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgyKXtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xyXG4gICAgfSBcclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICB9IFxyXG5cdH1cclxuXHRcclxuXHRcclxuXHQmOm50aC1jaGlsZCg0KXtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xyXG5cdH19XHJcblx0JjpudGgtY2hpbGQoNSl7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2JmMjcyZDtcclxuICAgIH19XHJcblxyXG4gICAgc3BhbntcclxuICAgICAgIFxyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAuaGVhZGluZy10aXRsZXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBcclxuICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6MThweDtcclxuICAgICAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDoxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICB9XHJcblx0fVxyXG5cdC5leHRyYS1pbmZve1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LnBhbmVse1xyXG5cdFx0XHQucGFuZWwtYm9keXtcclxuXHRcdFx0XHR3aWR0aDo1MCU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5zZWN0aW9uLWV4cGxpY2l0e1xyXG5cdG1hcmdpbjo3MHB4IDBweDtcclxuXHQucm93e1xyXG5cdFx0bWFyZ2luLXRvcDogNDBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0fVxyXG5cclxuXHRoMXtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0fVxyXG5cdC5iYXJ7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmctdG9wOjE1cHg7XHJcblx0XHQmOjphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6MHB4O1xyXG5cdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0d2lkdGg6MTAwcHg7XHJcblx0XHRcdGhlaWdodDo1cHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5leHBsaWNpdC1zZWN7XHJcblx0XHRwYWRkaW5nOjBweDtcclxuXHRcdFxyXG5cdFx0LmFkZC1pbmZve1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHdpZHRoOjIwJTtcclxuXHRcdFx0cGFkZGluZzowcHg7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCY6Zmlyc3QtY2hpbGR7XHJcblx0XHRcdFx0LnBhbmVse1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuYWRtaXNzaW9uLWZsYWd7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRwYWRkaW5nOjI1cHggMDtcclxuXHRcdGhlaWdodDoyNTBweDtcclxuXHRcdC5idG57XHJcblx0XHRcdGJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwe1xyXG5cdFx0d2hpdGUtc3BhY2U6IHByZTtcclxuXHRcdG1hcmdpbi10b3A6MTVweDtcclxuXHR9XHJcblx0XHQucGFuZWx7XHJcblx0XHQgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHRcdFx0cGFkZGluZzogMTVweDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdHRyYW5zaXRpb246IC41cztcclxuXHRcdFx0YXtcclxuXHRcdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGgxe1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdH1cclxuXHRcdFx0aDZ7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuXHRcdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGl7XHJcblx0XHRcdFx0bWFyZ2luOiAyNXB4IGF1dG87XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdH1cclxuXHRcdFx0c3Zne1xyXG5cdFx0XHRcdHdpZHRoOjc1cHg7XHJcblx0XHRcdFx0aGVpZ2h0Ojc1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0Jjpob3ZlciwgJi5hY3RpdmV7XHJcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0XHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuXHRcdFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdFx0XHRcdC5wYW5lbC1oZWFkaW5ne1xyXG5cdFx0XHRcdFx0LmJhcntcclxuXHRcdFx0XHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRoNiwgcCwgaDEsIGF7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHN2Z3tcclxuXHRcdFx0XHRcdGZpbGw6I2ZmZjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdC8vIFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdC8vIFx0XHRjb250ZW50OicnO1xyXG5cdFx0XHQvLyBcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHQvLyBcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHQvLyBcdFx0dG9wOiAwcHg7XHJcblx0XHRcdC8vIFx0XHRsZWZ0OiAwcHg7XHJcblx0XHRcdC8vIFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ly8gXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0Ly8gXHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdC8vIFx0XHRib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHRcdFx0Ly8gfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcbn1cclxuXHJcbi50YWItaW5mb3tcclxuXHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0cGFkZGluZzoxNXB4O1xyXG5cdG1hcmdpbi10b3A6IDQwcHg7XHJcblx0Y29sb3I6I2ZmZjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdFx0LnJvdy1mLCAucm93LCBoMXtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4OyBcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG5cdC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcbn1cclxufSIsIi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdy1mLCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3cge1xuICBtYXJnaW46IDcwcHggMCAxMDBweCA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwgLnBhbmVsLWJvZHkge1xuICB3aWR0aDogNzAlO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwuc3RvcnktaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC5zdG9yeS1pbmZvIC5mbHlpbmctcGxhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC5zdG9yeS1pbmZvIC5mbHlpbmctcGxhbmUgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC5zdG9yeS1pbmZvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDUwcHg7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDEge1xuICBtYXJnaW4tbGVmdDogNjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMjo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5pbWctZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgdWwubGlzdCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSB1bC5saXN0IGxpIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIHVsLmxpc3QgbGk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG5cbi5tb3JlLWluZm8ge1xuICBmbG9hdDogbm9uZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4ubW9yZS1pbmZvIHAge1xuICBtYXJnaW46IDUwcHggMCA3MHB4IDc1cHg7XG59XG5cbi5hcHBseWNhdGlvbi1ydWxlcyAuYnRuIHtcbiAgd2lkdGg6IDc1JTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICBtYXJnaW46IDI1cHggYXV0byAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZWRnZS1pbmZvIHtcbiAgbWFyZ2luOiAxMDBweCAwIDAgMCAhaW1wb3J0YW50O1xufVxuLmVkZ2UtaW5mbyAucGxhbi10aXRsZSB7XG4gIG1hcmdpbjogODBweCAwIDUwcHg7XG59XG4uZWRnZS1pbmZvIC5wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoM24rMSkge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgzbisyKSB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmVkZ2UtaW5mbyAucGFuZWw6bnRoLWNoaWxkKDNuKzMpIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG4uZWRnZS1pbmZvIC5wYW5lbC5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uZWRnZS1pbmZvIC5wYW5lbC5iZy13aGl0ZSBwIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoMSkgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoMikgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoMykgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoNCkgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoNSkgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4uZWRnZS1pbmZvIC5wYW5lbCBzcGFuIHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLmVkZ2UtaW5mbyAuaGVhZGluZy10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lZGdlLWluZm8gLmhlYWRpbmctdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmVkZ2UtaW5mbyAuZXh0cmEtaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lZGdlLWluZm8gLmV4dHJhLWluZm8gLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnNlY3Rpb24tZXhwbGljaXQge1xuICBtYXJnaW46IDcwcHggMHB4O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnJvdyB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uc2VjdGlvbi1leHBsaWNpdCBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAuYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5iYXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLmV4cGxpY2l0LXNlYyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5leHBsaWNpdC1zZWMgLmFkZC1pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAuZXhwbGljaXQtc2VjIC5hZGQtaW5mbzpmaXJzdC1jaGlsZCAucGFuZWwge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLmFkbWlzc2lvbi1mbGFnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjVweCAwO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLmFkbWlzc2lvbi1mbGFnIC5idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IHAge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAucGFuZWwgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsIGg2IHtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAucGFuZWwgaSB7XG4gIG1hcmdpbjogMjVweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbCBzdmcge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsOmhvdmVyLCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWwuYWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsOmhvdmVyIC5wYW5lbC1oZWFkaW5nIC5iYXI6OmFmdGVyLCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWwuYWN0aXZlIC5wYW5lbC1oZWFkaW5nIC5iYXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsOmhvdmVyIC5wYW5lbC1oZWFkaW5nIGg2LCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWw6aG92ZXIgLnBhbmVsLWhlYWRpbmcgcCwgLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsOmhvdmVyIC5wYW5lbC1oZWFkaW5nIGgxLCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWw6aG92ZXIgLnBhbmVsLWhlYWRpbmcgYSwgLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsLmFjdGl2ZSAucGFuZWwtaGVhZGluZyBoNiwgLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsLmFjdGl2ZSAucGFuZWwtaGVhZGluZyBwLCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWwuYWN0aXZlIC5wYW5lbC1oZWFkaW5nIGgxLCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWwuYWN0aXZlIC5wYW5lbC1oZWFkaW5nIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbDpob3ZlciBzdmcsIC5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbC5hY3RpdmUgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbn1cblxuLnRhYi1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3ctZiwgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmJyZWFkY3VtIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5pbWctZmxhZyB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsLWJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/thepremianedge/thepremianedge.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/thepremianedge/thepremianedge.component.ts ***!
    \************************************************************/

  /*! exports provided: ThepremianedgeComponent */

  /***/
  function srcAppThepremianedgeThepremianedgeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThepremianedgeComponent", function () {
      return ThepremianedgeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ThepremianedgeComponent = /*#__PURE__*/function () {
      function ThepremianedgeComponent() {
        _classCallCheck(this, ThepremianedgeComponent);

        this.explicit = [{
          title: "Literacy",
          icon: "#icon_ethicalEdu",
          bar: '01',
          description: "Having introduced a thematic and literacy-based curriculum, Premia Academy has a\n    levelled book room \u2013 a shared reading resource for successful whole-school learning, to\n    designate the importance of guided reading and journal writing in our teachings."
        }, {
          title: 'Mathematics',
          icon: "#icon_mathematics",
          bar: '02',
          description: "The idea of introducing concepts for the application of mathematical terms in\n      multiple, yet simple ways, serves as a strong base for future calculations with logic.\n      Premia conceptualizes Mathematics in a well- researched, sequential series, enabling\n      children to think out of the box and relate numeracy to everyday life. Topics are introduced\n      using well-planned activities, developing mathematical thinking and problem-solving skills.\n     "
        }, {
          title: 'The World (Experiential Learning)',
          icon: "#icon_worldEqu",
          bar: '03',
          description: "Experiential learning is a process through which\n      students develop knowledge, skills, and values from direct experiences outside a traditional\n      academic setting. Experiential learning encompasses a variety of activities, hands-on\n      learning, etc. Students can understand concepts with concrete experience and reflective\n      observation."
        }, {
          title: 'Expressive Arts and Design',
          icon: "#icon_expressiveArt",
          bar: '04',
          description: "Premia helps children develop their imagination so they can\n      express their ideas in a variety of individual ways within a stimulating learning\n      environment. Expressive arts and design are intended to support learning and development for\n      children."
        }, {
          title: 'Technology and Innovations Lab',
          icon: "#icon_techinnvo",
          bar: '05',
          description: "Our literacy-based curriculum emphasizes subjects through\n      an inquiry-based, thematic, hands-on learning, driven by the goal of closely aligning\n      programs that students will experience in and beyond the classroom. In today\u2019s scenario\n      where content knowledge is interconnected, our STREAM- Labs, mapped with the curriculum, are\n      meticulously planned to deliver and enhance the learning process at Premia."
        }];
      }

      _createClass(ThepremianedgeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return ThepremianedgeComponent;
    }();

    ThepremianedgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-thepremianedge',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./thepremianedge.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/thepremianedge/thepremianedge.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./thepremianedge.component.scss */
      "./src/app/thepremianedge/thepremianedge.component.scss"))["default"]]
    })], ThepremianedgeComponent);
    /***/
  },

  /***/
  "./src/app/thepremianstory/thepremianstory.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/thepremianstory/thepremianstory.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThepremianstoryThepremianstoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-study-culture .row-f, .section-study-culture .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-study-culture .story {\n  background: #fff;\n}\n.section-study-culture .add-spec {\n  margin: 0 0 0 35px;\n}\n.section-study-culture .add-spec .row {\n  margin: 0px;\n}\n.section-study-culture .add-spec .panel {\n  padding: 0;\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-study-culture .add-spec .panel p {\n  margin-top: 25px;\n}\n.section-study-culture .curriculum {\n  margin-bottom: 0px;\n}\n.section-study-culture .panel {\n  background: #fff;\n  padding: 50px;\n  padding-bottom: 0px;\n}\n.section-study-culture .panel .panel-body {\n  width: 50%;\n}\n.section-study-culture .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n  padding-bottom: 30px;\n}\n.section-study-culture .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-study-culture .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-study-culture .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-study-culture h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-study-culture h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-study-culture h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-study-culture .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-study-culture ul.list {\n  margin: 0px;\n}\n.section-study-culture ul.list li {\n  color: #000;\n}\n.section-study-culture ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlcHJlbWlhbnN0b3J5L0Q6XFxhY2FkZW15L3NyY1xcYXBwXFx0aGVwcmVtaWFuc3RvcnlcXHRoZXByZW1pYW5zdG9yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlcHJlbWlhbnN0b3J5L3RoZXByZW1pYW5zdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLG9CQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVDO0VBQ0MsZ0JBQUE7QUNBRjtBREVDO0VBQ08sa0JBQUE7QUNBUjtBRENRO0VBQ0ksV0FBQTtBQ0NaO0FEQ0s7RUFDTyxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQVk7RUFDSSxnQkFBQTtBQ0VoQjtBREVDO0VBQ0Msa0JBQUE7QUNBRjtBREVDO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNBRjtBRENFO0VBQ0MsVUFBQTtBQ0NIO0FEQ0U7RUFDQyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0g7QURBRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNFSjtBRERJO0VBQ0MsVUFBQTtFQUNBLHdCQUFBO0VBQ0csZUFBQTtBQ0dSO0FEQUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREdDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ0RGO0FER0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0RGO0FERUU7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBSDtBREdDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNERjtBREdDO0VBQ0MsV0FBQTtBQ0RGO0FERUU7RUFDQyxXQUFBO0FDQUg7QURDRztFQUNDLG1CQUFBO0FDQ0o7QURLQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDRkQ7QURHQztFQUNDLHdCQUFBO0FDREY7QURLQTtFQUVFO0lBQ0MsZ0JBQUE7RUNIRDtFREtEO0lBQ0MsaUJBQUE7RUNIQTtFREtEO0lBQ0MsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ0hBO0VES0Q7SUFDQyxXQUFBO0VDSEE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RoZXByZW1pYW5zdG9yeS90aGVwcmVtaWFuc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdC5yb3ctZiwgLnJvd3tcclxuXHRcdG1hcmdpbjo3MHB4IDAgMTAwcHg7IFxyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQuc3Rvcnl7XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0fVxyXG5cdC5hZGQtc3BlY3tcclxuICAgICAgICBtYXJnaW46MCAwIDAgMzVweDtcclxuICAgICAgICAucm93e1xyXG4gICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAucGFuZWx7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cdC5jdXJyaWN1bHVte1xyXG5cdFx0bWFyZ2luLWJvdHRvbTowcHg7XHJcblx0fVxyXG5cdC5wYW5lbCB7XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRwYWRkaW5nOjUwcHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdH1cclxuXHRcdCYuc3RvcnktaW5mb3tcclxuXHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0cGFkZGluZy1ib3R0b206IDMwcHg7XHJcblx0XHRcdC5mbHlpbmctcGxhbmV7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdHRvcDowcHg7XHJcblx0XHRcdFx0c3Zne1xyXG5cdFx0XHRcdFx0ZmlsbDogI2ZmZjtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIFx0XHRcdFx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQmOjphZnRlcntcclxuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0XHR0b3A6NTBweDtcclxuXHRcdFx0XHR3aWR0aDogM3B4O1xyXG5cdFx0XHRcdGhlaWdodDogMjBweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblx0aDF7XHJcblx0XHRtYXJnaW4tbGVmdDo2NXB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzVweDtcclxuXHR9XHJcblx0aDJ7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmctYm90dG9tOjVweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0Y29udGVudDpcIiBcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206MDtcclxuXHRcdFx0bGVmdDowO1xyXG5cdFx0XHR3aWR0aDo1MHB4O1xyXG5cdFx0XHRoZWlnaHQ6MnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNmMGYwZjA7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OjA7XHJcblx0XHR0b3A6MDtcclxuXHRcdHdpZHRoOjQwJTtcclxuXHR9XHJcblx0dWwubGlzdHtcclxuXHRcdG1hcmdpbjowcHg7XHJcblx0XHRsaXtcclxuXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLm1vcmUtaW5mb3tcclxuXHRmbG9hdDpub25lO1xyXG5cdGNsZWFyOmJvdGg7XHJcblx0cHtcclxuXHRcdG1hcmdpbjo1MHB4IDAgNzBweCA3NXB4IDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0LnNlY3Rpb24tc3R1ZHktY3VsdHVyZXtcclxuXHRcdC5yb3ctZiwgLnJvdywgaDF7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjBweDsgXHJcblx0fVxyXG5cdC5icmVhZGN1bXtcclxuXHRcdG1hcmdpbi1sZWZ0OjE1cHg7XHJcblx0fVxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBhZGRpbmc6MTVweDtcclxuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxuXHQucGFuZWwtYm9keXtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG59XHJcbn0iLCIuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3ctZiwgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93IHtcbiAgbWFyZ2luOiA3MHB4IDAgMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnN0b3J5IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmFkZC1zcGVjIHtcbiAgbWFyZ2luOiAwIDAgMCAzNXB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuYWRkLXNwZWMgLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuYWRkLXNwZWMgLnBhbmVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5hZGQtc3BlYyAucGFuZWwgcCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwgLnBhbmVsLWJvZHkge1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwuc3RvcnktaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwuc3RvcnktaW5mbyAuZmx5aW5nLXBsYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwuc3RvcnktaW5mbyAuZmx5aW5nLXBsYW5lIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwuc3RvcnktaW5mbzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA1MHB4O1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgxIHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuaW1nLWZsYWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA0MCU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIHVsLmxpc3Qge1xuICBtYXJnaW46IDBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgdWwubGlzdCBsaSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSB1bC5saXN0IGxpOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuXG4ubW9yZS1pbmZvIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGNsZWFyOiBib3RoO1xufVxuLm1vcmUtaW5mbyBwIHtcbiAgbWFyZ2luOiA1MHB4IDAgNzBweCA3NXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LWYsIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdywgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5icmVhZGN1bSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuaW1nLWZsYWcge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/thepremianstory/thepremianstory.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/thepremianstory/thepremianstory.component.ts ***!
    \**************************************************************/

  /*! exports provided: ThepremianstoryComponent */

  /***/
  function srcAppThepremianstoryThepremianstoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThepremianstoryComponent", function () {
      return ThepremianstoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ThepremianstoryComponent = /*#__PURE__*/function () {
      function ThepremianstoryComponent() {
        _classCallCheck(this, ThepremianstoryComponent);

        this.story = [{
          icon: '#icon_termDevelopment',
          description: "Comprehensive\n      Development"
        }, {
          icon: '#icon_commTrainning',
          description: "Communication\n      and vocational\n      training"
        }, {
          icon: '#icon_art',
          description: "Performing\n      arts"
        }];
      }

      _createClass(ThepremianstoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ThepremianstoryComponent;
    }();

    ThepremianstoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-thepremianstory',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./thepremianstory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/thepremianstory/thepremianstory.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./thepremianstory.component.scss */
      "./src/app/thepremianstory/thepremianstory.component.scss"))["default"]]
    })], ThepremianstoryComponent);
    /***/
  },

  /***/
  "./src/app/thestudyculture/thestudyculture.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/thestudyculture/thestudyculture.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThestudycultureThestudycultureComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-study-culture .row-f, .section-study-culture .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-study-culture .curriculum {\n  margin-bottom: 0px;\n}\n.section-study-culture .curriculum .curriculum-1 {\n  padding: 0;\n  background: #fff;\n}\n.section-study-culture .curriculum .curriculum-1 .panel {\n  padding: 0px 30px;\n}\n.section-study-culture .curriculum .curriculum-1 p {\n  padding: 30px;\n}\n.section-study-culture .curriculum .curriculum-1 .img-flag {\n  width: 100%;\n  top: -100px;\n}\n.section-study-culture .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-study-culture .panel .panel-body {\n  width: 50%;\n}\n.section-study-culture h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-study-culture h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-study-culture h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-study-culture .our-mission .img-flag {\n  left: 0px;\n  z-index: 1;\n  top: -25px;\n}\n.section-study-culture .our-mission .panel {\n  float: right;\n}\n.section-study-culture .our-mission .panel-body {\n  margin-left: 50%;\n}\n.section-study-culture .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-study-culture ul.list {\n  margin: 0px;\n}\n.section-study-culture ul.list li {\n  color: #000;\n}\n.section-study-culture ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info h2 {\n  margin: 30px 0 0;\n}\n.more-info .panel {\n  background: #bf272d;\n  margin-top: 35px;\n  margin-bottom: 70px;\n}\n.more-info .panel ul.list li {\n  color: #fff;\n}\n.more-info .panel ul.list li::before {\n  background: #fff;\n}\n.more-info p {\n  color: #fff;\n}\n.our-belief h2 {\n  color: #bf272d;\n}\n.our-belief .panel {\n  background: #3e65ac;\n  color: #fff;\n}\n.our-belief .panel ul.list li {\n  color: #fff;\n}\n.our-belief .panel ul.list li::before {\n  background: #fff;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n\n  .section-study-culture .our-mission {\n    margin: 0 15px;\n  }\n  .section-study-culture .our-mission .panel-body {\n    margin-left: 0;\n  }\n  .section-study-culture .our-mission .panel {\n    float: none;\n  }\n  .section-study-culture .our-mission .img-flag {\n    padding: 15px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlc3R1ZHljdWx0dXJlL0Q6XFxhY2FkZW15L3NyY1xcYXBwXFx0aGVzdHVkeWN1bHR1cmVcXHRoZXN0dWR5Y3VsdHVyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlc3R1ZHljdWx0dXJlL3RoZXN0dWR5Y3VsdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLG9CQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVDO0VBQ0Msa0JBQUE7QUNBRjtBRENFO0VBSUMsVUFBQTtFQUNBLGdCQUFBO0FDRkg7QURGRztFQUNDLGlCQUFBO0FDSUo7QURBRztFQUNDLGFBQUE7QUNFSjtBREFHO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNFSjtBREVDO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0FDQUY7QURDRTtFQUNDLFVBQUE7QUNDSDtBREdDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ0RGO0FER0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0RGO0FERUU7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBSDtBRElFO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDRkg7QURJRTtFQUNDLFlBQUE7QUNGSDtBRElFO0VBQ0MsZ0JBQUE7QUNGSDtBREtDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNIRjtBREtDO0VBQ0MsV0FBQTtBQ0hGO0FESUU7RUFDQyxXQUFBO0FDRkg7QURHRztFQUNDLG1CQUFBO0FDREo7QURPQTtFQWlCQyxXQUFBO0VBQ0EsV0FBQTtBQ3BCRDtBREdDO0VBQ0MsZ0JBQUE7QUNERjtBREdDO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREY7QURHRztFQUNDLFdBQUE7QUNESjtBREVHO0VBQ0MsZ0JBQUE7QUNBSjtBRE9DO0VBQ0MsV0FBQTtBQ0xGO0FEVUM7RUFDQyxjQUFBO0FDUEY7QURTQztFQUNDLG1CQUFBO0VBQ0EsV0FBQTtBQ1BGO0FEU0c7RUFDQyxXQUFBO0FDUEo7QURRSTtFQUNDLGdCQUFBO0FDTkw7QURhQTtFQUVFO0lBQ0MsZ0JBQUE7RUNYRDtFRGFEO0lBQ0MsaUJBQUE7RUNYQTtFRGFEO0lBQ0MsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ1hBOztFRGVEO0lBQ0MsY0FBQTtFQ1pBO0VEYUE7SUFDQyxjQUFBO0VDWEQ7RURhQTtJQUNDLFdBQUE7RUNYRDtFRGFBO0lBQ0MsZUFBQTtFQ1hEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90aGVzdHVkeWN1bHR1cmUvdGhlc3R1ZHljdWx0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tc3R1ZHktY3VsdHVyZXtcclxuXHQucm93LWYsIC5yb3d7XHJcblx0XHRtYXJnaW46NzBweCAwIDEwMHB4OyBcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LmN1cnJpY3VsdW17XHJcblx0XHRtYXJnaW4tYm90dG9tOjBweDtcclxuXHRcdC5jdXJyaWN1bHVtLTF7XHJcblx0XHRcdC5wYW5lbCB7XHJcblx0XHRcdFx0cGFkZGluZzowcHggMzBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRwYWRkaW5nOjA7XHJcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdFx0cHtcclxuXHRcdFx0XHRwYWRkaW5nOjMwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LmltZy1mbGFne1xyXG5cdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0dG9wOi0xMDBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQucGFuZWwge1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0cGFkZGluZzo1MHB4O1xyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRoMXtcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdH1cclxuXHRoMntcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZy1ib3R0b206NXB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OlwiIFwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTowO1xyXG5cdFx0XHRsZWZ0OjA7XHJcblx0XHRcdHdpZHRoOjUwcHg7XHJcblx0XHRcdGhlaWdodDoycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2YwZjBmMDtcclxuXHRcdH1cclxuXHR9XHJcblx0Lm91ci1taXNzaW9ue1xyXG5cdFx0LmltZy1mbGFne1xyXG5cdFx0XHRsZWZ0OiAwcHg7XHJcblx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdHRvcDogLTI1cHg7XHJcblx0XHR9XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdGZsb2F0OnJpZ2h0O1xyXG5cdFx0fVxyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjUwJTtcclxuXHRcdH1cclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHR9XHJcblx0dWwubGlzdHtcclxuXHRcdG1hcmdpbjowcHg7XHJcblx0XHRsaXtcclxuXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLm1vcmUtaW5mb3tcclxuXHRoMntcclxuXHRcdG1hcmdpbjozMHB4IDAgMDtcclxuXHR9XHJcblx0LnBhbmVse1xyXG5cdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0bWFyZ2luLXRvcDogMzVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDcwcHg7XHJcblx0XHR1bC5saXN0e1xyXG5cdFx0XHRsaSB7XHJcblx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdH1cdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGZsb2F0Om5vbmU7XHJcblx0Y2xlYXI6Ym90aDtcclxuXHRwe1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHR9XHJcbn1cclxuXHJcbi5vdXItYmVsaWVme1xyXG5cdGgye1xyXG5cdFx0Y29sb3I6I2JmMjcyZDtcclxuXHR9XHJcblx0LnBhbmVse1xyXG5cdFx0YmFja2dyb3VuZDojM2U2NWFjO1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdHVsLmxpc3R7XHJcblx0XHRcdGxpe1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdFx0XHR9XHJcblx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdC5zZWN0aW9uLXN0dWR5LWN1bHR1cmV7XHJcblx0XHQucm93LWYsIC5yb3csIGgxe1xyXG5cdFx0XHRtYXJnaW4tbGVmdDowcHg7IFxyXG5cdH1cclxuXHQuYnJlYWRjdW17XHJcblx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwYWRkaW5nOjE1cHg7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcbn1cclxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSB7XHJcblx0Lm91ci1taXNzaW9ue1xyXG5cdFx0bWFyZ2luOiAwIDE1cHg7XHJcblx0XHQucGFuZWwtYm9keSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cdFx0LnBhbmVse1xyXG5cdFx0XHRmbG9hdDpub25lO1xyXG5cdFx0fVxyXG5cdFx0LmltZy1mbGFne1xyXG5cdFx0XHRwYWRkaW5nOjE1cHggMDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxufSIsIi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdy1mLCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3cge1xuICBtYXJnaW46IDcwcHggMCAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuY3VycmljdWx1bSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmN1cnJpY3VsdW0gLmN1cnJpY3VsdW0tMSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLTEgLnBhbmVsIHtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLTEgcCB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLTEgLmltZy1mbGFnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogLTEwMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwgLnBhbmVsLWJvZHkge1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMSB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLm91ci1taXNzaW9uIC5pbWctZmxhZyB7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAtMjVweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLm91ci1taXNzaW9uIC5wYW5lbCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLm91ci1taXNzaW9uIC5wYW5lbC1ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmltZy1mbGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSB1bC5saXN0IHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIHVsLmxpc3QgbGkge1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgdWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cblxuLm1vcmUtaW5mbyB7XG4gIGZsb2F0OiBub25lO1xuICBjbGVhcjogYm90aDtcbn1cbi5tb3JlLWluZm8gaDIge1xuICBtYXJnaW46IDMwcHggMCAwO1xufVxuLm1vcmUtaW5mbyAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuLm1vcmUtaW5mbyAucGFuZWwgdWwubGlzdCBsaSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm1vcmUtaW5mbyAucGFuZWwgdWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5tb3JlLWluZm8gcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ub3VyLWJlbGllZiBoMiB7XG4gIGNvbG9yOiAjYmYyNzJkO1xufVxuLm91ci1iZWxpZWYgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgY29sb3I6ICNmZmY7XG59XG4ub3VyLWJlbGllZiAucGFuZWwgdWwubGlzdCBsaSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm91ci1iZWxpZWYgLnBhbmVsIHVsLmxpc3QgbGk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3ctZiwgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmJyZWFkY3VtIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5pbWctZmxhZyB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAub3VyLW1pc3Npb24ge1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLm91ci1taXNzaW9uIC5wYW5lbC1ib2R5IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5vdXItbWlzc2lvbiAucGFuZWwge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLm91ci1taXNzaW9uIC5pbWctZmxhZyB7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/thestudyculture/thestudyculture.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/thestudyculture/thestudyculture.component.ts ***!
    \**************************************************************/

  /*! exports provided: ThestudycultureComponent */

  /***/
  function srcAppThestudycultureThestudycultureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThestudycultureComponent", function () {
      return ThestudycultureComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ThestudycultureComponent = /*#__PURE__*/function () {
      function ThestudycultureComponent() {
        _classCallCheck(this, ThestudycultureComponent);

        this.vision = [{
          info: ' Resilient and Confident lifelong learners'
        }, {
          info: ' Agile and authentic individuals'
        }, {
          info: ' Innovative and intuitive changemakers'
        }, {
          info: ' ResiliSocially responsible and humble global citizens'
        }, {
          info: ' Empathetic and humane souls who uphold integrity above all'
        }];
        this.mission = [{
          info: ' Resilience'
        }, {
          info: ' Agility'
        }, {
          info: ' Integrity'
        }, {
          info: ' Social responsibility'
        }, {
          info: ' Empathy'
        }];
        this.belief = [{
          info: ' Communication and Language'
        }, {
          info: ' Expressive Arts and Design'
        }, {
          info: ' Literacy'
        }, {
          info: ' Personal, Social and Emotional Development'
        }, {
          info: ' Mathematics'
        }, {
          info: ' Physical Development'
        }, {
          info: ' The World (Science and Social Studies) '
        }];
        this.moreInfo = [{
          info: ' Sustained learning and the ability to apply concepts.'
        }, {
          info: ' Facilitate self-confidence and motivation'
        }, {
          info: ' A deeper understanding of science and math concepts '
        }, {
          info: ' Improved reading and writing skills '
        }, {
          info: ' Fostering positive attitudes and personal growth. '
        }, {
          info: ' Critical thinking skills and improved quality of work.'
        }, {
          info: ' Remarkable academic success'
        }];
      }

      _createClass(ThestudycultureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ThestudycultureComponent;
    }();

    ThestudycultureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-thestudyculture',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./thestudyculture.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/thestudyculture/thestudyculture.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./thestudyculture.component.scss */
      "./src/app/thestudyculture/thestudyculture.component.scss"))["default"]]
    })], ThestudycultureComponent);
    /***/
  },

  /***/
  "./src/app/theteam/theteam.component.scss":
  /*!************************************************!*\
    !*** ./src/app/theteam/theteam.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTheteamTheteamComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-inner-subheader {\n  margin-bottom: 50px;\n}\n.section-inner-subheader .the-team-info {\n  margin: 0;\n  margin-top: 50px;\n}\n.section-inner-subheader .the-team-info .col {\n  padding: 0;\n}\n.section-inner-subheader .panel {\n  color: #fff;\n  padding: 50px;\n  margin-bottom: 50px;\n}\n.section-inner-subheader h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-inner-subheader h6 {\n  margin-left: 65px;\n}\n.section-inner-subheader .avtar {\n  background: #fff;\n}\n.section-inner-subheader .team-info {\n  margin-top: 50px;\n}\n.blue-bg {\n  background: #3e65ac;\n}\n.red-bg {\n  background: #bf272d;\n}\n.black-bg {\n  background: #000;\n}\n@media (max-width: 576px) {\n  .row-f, .row, h1 {\n    margin-left: 0px;\n  }\n\n  .breadcum {\n    margin-left: 15px;\n  }\n\n  .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n\n  .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhldGVhbS9EOlxcYWNhZGVteS9zcmNcXGFwcFxcdGhldGVhbVxcdGhldGVhbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhldGVhbS90aGV0ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7QUNDRDtBREFDO0VBQ0MsU0FBQTtFQUNBLGdCQUFBO0FDRUY7QURERTtFQUNDLFVBQUE7QUNHSDtBRENDO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0M7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDQztFQUNDLGlCQUFBO0FDQ0Y7QURFQztFQUNDLGdCQUFBO0FDQUY7QURFQztFQUNDLGdCQUFBO0FDQUY7QURJQTtFQUNDLG1CQUFBO0FDREQ7QURHQTtFQUNDLG1CQUFBO0FDQUQ7QURFQTtFQUNDLGdCQUFBO0FDQ0Q7QURFQTtFQUNFO0lBQ0MsZ0JBQUE7RUNDRDs7RURDRDtJQUNDLGlCQUFBO0VDRUE7O0VEQUQ7SUFDQyxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VDR0E7O0VEREQ7SUFDQyxXQUFBO0VDSUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RoZXRlYW0vdGhldGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlcntcclxuXHRtYXJnaW4tYm90dG9tOjUwcHg7XHJcblx0LnRoZS10ZWFtLWluZm97XHJcblx0XHRtYXJnaW46MDtcdFxyXG5cdFx0bWFyZ2luLXRvcDo1MHB4O1xyXG5cdFx0LmNvbCB7XHJcblx0XHRcdHBhZGRpbmc6MDtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LnBhbmVsIHtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRwYWRkaW5nOjUwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOjUwcHg7XHJcblx0fVxyXG5cdGgxe1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcblx0fVxyXG5cdGg2e1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHR9XHJcblxyXG5cdC5hdnRhcntcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHR9XHJcblx0LnRlYW0taW5mb3tcclxuXHRcdG1hcmdpbi10b3A6NTBweDtcclxuXHR9XHJcbn1cclxuXHJcbi5ibHVlLWJne1xyXG5cdGJhY2tncm91bmQ6IzNlNjVhYztcclxufVxyXG4ucmVkLWJne1xyXG5cdGJhY2tncm91bmQ6I2JmMjcyZDtcclxufVxyXG4uYmxhY2stYmd7XHJcblx0YmFja2dyb3VuZDojMDAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdFx0LnJvdy1mLCAucm93LCBoMXtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4OyBcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG5cdC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcblxyXG59IiwiLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAudGhlLXRlYW0taW5mbyB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAudGhlLXRlYW0taW5mbyAuY29sIHtcbiAgcGFkZGluZzogMDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciBoMSB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGg2IHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmF2dGFyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAudGVhbS1pbmZvIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmJsdWUtYmcge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xufVxuXG4ucmVkLWJnIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cblxuLmJsYWNrLWJnIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5yb3ctZiwgLnJvdywgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cblxuICAuYnJlYWRjdW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgLmltZy1mbGFnIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGFuZWwtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/theteam/theteam.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/theteam/theteam.component.ts ***!
    \**********************************************/

  /*! exports provided: TheteamComponent */

  /***/
  function srcAppTheteamTheteamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TheteamComponent", function () {
      return TheteamComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TheteamComponent = /*#__PURE__*/function () {
      function TheteamComponent() {
        _classCallCheck(this, TheteamComponent);
      }

      _createClass(TheteamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TheteamComponent;
    }();

    TheteamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-theteam',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./theteam.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theteam/theteam.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./theteam.component.scss */
      "./src/app/theteam/theteam.component.scss"))["default"]]
    })], TheteamComponent);
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


    var environment = {
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

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! D:\academy\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map