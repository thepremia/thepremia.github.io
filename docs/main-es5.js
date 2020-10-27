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


    __webpack_exports__["default"] = "<section class=\"section-admission\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            Join The Premia Pride\r\n        </a>\r\n    </div>\r\n    <div class=\"row-f sub-header center\">\r\n        <h1 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            Join The Premia Pride\r\n        </h1>\r\n        <p> Our admissions policy ensures an appropriate admission procedure with respect to each\r\n            application received for admission. We pursue to set a selection standard that is fair and\r\n            consistent. Assessment for admissions to preprimary and primary would be an analysis to evaluate\r\n            the developmental preparedness of students, using a range of assessment methods to understand\r\n            the applicant’s skills. Prior to admissions, we assess applicants to determine their readiness\r\n            for our School providing practical and ethical methods of teaching.</p>\r\n\r\n        <!-- <div class=\"col-lg-11 col-md-11 col-sm-12 admission-info\">\r\n\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n\r\n                <div class=\"panel-body\">\r\n                    <p>\r\n                        <img class=\"image-wrap\" align=\"right\" src=\"assets/images/9.jpg\" data-aos=\"fade-up\"\r\n                            data-aos-once=\"true\">\r\n                        Thank You for expressing interest in Premia Academy. We at Premia Academy, welcome all learners\r\n                        to a vibrant school community delivering an ethical education in an academic setting.<br><br>\r\n                        Our admissions policy ensures an appropriate admission procedure with respect to each\r\n                        application received for admission. We pursue to set a selection standard that is fair and\r\n                        consistent. Assessment for admissions to preprimary and primary would be an analysis to evaluate\r\n                        the developmental preparedness of students, using a range of assessment methods to understand\r\n                        the applicant’s skills. Prior to admissions, we assess applicants to determine their readiness\r\n                        for our School providing practical and ethical methods of teaching.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row add-spec\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <p>\r\n                        We at Premia Academy, aspire to ensure that our students nurture their passion for knowledge so\r\n                        they may pursue their dreams and become successful\r\n                    </p>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngFor=\"let item of admission; index as i\">\r\n                            <div class=\"panel\">\r\n                                <div class=\"panel-front\">\r\n                                    <div class=\"panel-heading\">\r\n                                        <i class=\"icon icon-medium\">\r\n                                            <svg focusable=\"false\">\r\n                                                <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                            </svg>\r\n                                        </i>\r\n\r\n                                        <p>{{item.description}}</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"doodle\">\r\n                Join The Premia Pride\r\n            </div>\r\n        </div> -->\r\n\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <section class=\"section-admission-2\">\r\n        <div class=\"container\">\r\n            <div class=\"row addmin-sec\">\r\n                <div class=\"col-lg-3 col-md-3 col-sm-12 add-info\" *ngFor=\"let item of admission_2; index as i\">\r\n                    <div class=\"panel\" data-aos=\"fade\" data-aos-once=\"true\">\r\n                        <div class=\"panel-heading\">\r\n                            <h3 class=\"bar {{item.bar}}\">\r\n                                {{item.title}}\r\n                            </h3>\r\n                            <p>{{item.description}}</p>\r\n\r\n                        </div>\r\n                        <button class=\"btn btn-primary\" (click)=\"open(content)\" data-aos=\"fade-up\"\r\n                            data-aos-once=\"true\">APPLY NOW</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n\r\n    <section>\r\n        <div class=\"row-f sub-header\">\r\n            <h1 class=\"center\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                Admission Process at The Premia Academy\r\n            </h1>\r\n            <h6 class=\"center\">Join The Premia Pride Online Enquiry</h6>\r\n            <div class=\"container\">\r\n                    <img class=\"image-wrap\" src=\"assets/images/join-premia-pride-01.png\" data-aos=\"fade-up\"\r\n                        data-aos-once=\"true\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row-f sub-header\">\r\n            <h1 class=\"center\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                Admission Criteria\r\n            </h1>\r\n            <h6 class=\"center\">The pupil should have achieved the competencies of the previous year to the grade to which he/she is applying for.</h6>\r\n            <div class=\"container\">\r\n                    <table class=\"table-bordered adm-info-table\">\r\n                        <tr>\r\n                            <td>Grade</td>\r\n                            <td>Minimum Age by June</td>\r\n                        <tr>\r\n                        <tr>\r\n                            <td>Nursery</td>\r\n                            <td>2 Years 6 Months</td>\r\n                        <tr>\r\n                        <tr>\r\n                            <td>PP1</td>\r\n                            <td>3 Years 6 Months</td>\r\n                        <tr>\r\n                        <tr>\r\n                            <td>PP2</td>\r\n                            <td>4 Years 6 Months</td>\r\n                        <tr>\r\n                        <tr>\r\n                            <td>Grade 1</td>\r\n                            <td>5 Years 6 Months</td>\r\n                        <tr>\r\n                        <tr>\r\n                            <td>Grade 2</td>\r\n                            <td>6 Years 6 Months</td>\r\n                        <tr>\r\n                        <tr>\r\n                            <td>Grade 3</td>\r\n                            <td>7 Years 6 Months</td>\r\n                        <tr>\r\n                        <tr>\r\n                            <td>Grade 4</td>\r\n                            <td>8 Years 6 Months</td>\r\n                        <tr>\r\n                        <tr>\r\n                            <td>Grade 5</td>\r\n                            <td>9 Years 6 Months</td>\r\n                        <tr>\r\n                        <tr>\r\n                            <td>Grade 6</td>\r\n                            <td>10 Years 6 Months</td>\r\n                        <tr>\r\n                        \r\n                    </table>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</section>\r\n\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Apply</h4>\r\n        <a class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_close\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n    </div>\r\n    <div class=\"modal-body apply-form\">\r\n        <form>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"sel1\">Academic Year</label>\r\n                    <select class=\"form-control\" id=\"sel1\">\r\n                        <option>2020-2021</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <label for=\"pn\">Parent Name</label>\r\n                    <input type=\"pn\" class=\"form-control\" placeholder=\"Parent Name\" name=\"pn\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"pn\">Parent Email ID</label>\r\n                    <input type=\"pi\" class=\"form-control\" placeholder=\"Parent Email ID\" name=\"pi\">\r\n                </div>\r\n                <div class=\"col\">\r\n                    <label for=\"phone\">Parent Mobile No</label>\r\n                    <input type=\"phone\" class=\"form-control\" placeholder=\"Phone\" name=\"phone\">\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Date\">Student DOB</label>\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngModel=\"model\" ngbDatepicker\r\n                                #d=\"ngbDatepicker\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                                    <i class=\"icon icon-ex-small\">\r\n                                        <svg focusable=\"false\">\r\n                                            <use xlink:href=\"#icon_calender\"></use>\r\n                                        </svg>\r\n                                    </i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <label for=\"Grade\">Grade</label>\r\n                    <select class=\"form-control\" id=\"Grade\">\r\n                        <option>Select-class</option>\r\n                        <option>Grade-1</option>\r\n                        <option>Grade-2</option>\r\n                        <option>Grade-3</option>\r\n                        <option>Grade-4</option>\r\n                        <option>Grade-5</option>\r\n                        <option>Grade-6</option>\r\n                        <option>Grade-7</option>\r\n                    </select>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <button class=\"btn btn-primary\">APPLY NOW</button>\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n    </div>\r\n</ng-template>";
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


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>";
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


    __webpack_exports__["default"] = "<section class=\"section-inner-subheader\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            The Premia Corner \r\n        </a>\r\n    </div>\r\n\r\n</section>\r\n\r\n<!-- <section class=\"blob-article\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n              <div class=\"panel\"><h2>Check mate!  We would like to invite you to<br>\r\n                Gorki campus to take part in our traditional<br>\r\n                Сambridge Chess Tournament 2020.</h2>\r\n                <p>\r\n                    We are a group of committed individuals who believe that “What sculpture is to a block of marble, education is to the human soul.” Joseph Addison.\r\n                    <br><br>\r\nOur advisory board comprises of diverse academicians who have a keen interest in providing a unique perspective to our collective vision. Individually they have contributed tremendously to the field of education, together they bring their unique capacities to our advisory board supporting continual improvement and sustainability.\r\n<br><br>\r\nWe want to nurture a confident, compassionate student body that is ready to make a positive difference to the World. We affirm that every child deserves a childhood filled with love and positivism. That is the core belief, with which we will take care of each child, as this will contribute to making exemplary individuals.\r\n                </p></div>\r\n                <div class=\"btn-wrapper\">\r\n                    <div class=\"div-btn\">\r\n                    <button class=\"btn btn-primary\" (click)=\"knowMore('culture');\">\r\n                        READ MORE\r\n                    </button>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section> -->\r\n\r\n<section class=\"recent-article\">\r\n    <div class=\"container\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n            <h6>The Premia Corner</h6>\r\n            <h2><span>Recent Articles</span></h2>\r\n        </div>\r\n        <div class=\"row\">\r\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\"\r\n                [config]=\"recentConfig\">\r\n                <div ngxSlickItem *ngFor=\"let item of admission; index as i\" class=\"slide col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-heading\">\r\n                                <p>{{item.date}}</p>\r\n                                 <h3>{{item.title}}</h3>\r\n                        </div>\r\n                        <div class=\"panel-body\">\r\n                            <p>{{item.description}}</p>\r\n                   </div>\r\n                   <button class=\"btn btn-primary\" (click)=\"knowMore('culture');\">\r\n                    READ MORE\r\n                </button>\r\n                    </div>\r\n                </div>\r\n            </ngx-slick-carousel>\r\n        </div>\r\n    </div>  \r\n</section>";
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


    __webpack_exports__["default"] = "<div class=\"map\">\r\n    <iframe frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"\r\n        src=\"https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Pillar%20No.102,%20PVNR%20Express%20way,%20501%20Karwan%20Sahu%20Road,%20%20Attapur,%20Hyderabad,%20Telangana%20500008,%20India%20Hyderabad+(The%20Premia%20Academy)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed\"></iframe>\r\n    <script type='text/javascript'\r\n        src='https://embedmaps.com/google-maps-authorization/script.js?id=f9059a527fc461bcc6e4ca8c957752c8ece552e0'></script>\r\n</div>\r\n<section class=\"section-inner-subheader\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            Catch Up Over Coffee\r\n        </a>\r\n    </div>\r\n    <div class=\"row\">\r\n        <h1>\r\n            Contact Us\r\n        </h1>\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n            <div class=\"row inner-contact-info\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 contact-form\">\r\n                    <h5 class=\"col\">Get in touch</h5>\r\n                    <form action=\"/action_page.php\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\" name=\"name\">\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"in\" placeholder=\"Last Name\" name=\"ln\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <input type=\"phone\" class=\"form-control\" placeholder=\"Phone\" name=\"phone\">\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Mail ID\" name=\"email\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <label for=\"comment\">Comment:</label>\r\n                                <textarea class=\"form-control\" rows=\"3\" id=\"comment\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row flex-end\">\r\n                        <button type=\"submit\" class=\"btn btn-primary\">\r\n                            <i class=\"icon icon-medium\">\r\n                            <svg focusable=\"false\">\r\n                                <use xlink:href=\"#icon_plane\"></use>\r\n                            </svg>\r\n                            </i> \r\n                        </button>\r\n                    </div>\r\n                    </form>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 contact-info\">\r\n                    <h5 class=\"col info-title\">CONTACT<br>\r\n                        INFORMATION</h5>\r\n                    <div class=\"row tel\">\r\n                        <i class=\"icon icon-small\">\r\n                            <svg focusable=\"false\">\r\n                                <use xlink:href=\"#icon_phone\"></use>\r\n                            </svg>\r\n                        </i>\r\n                        <p>\r\n                            +91 9111 399 399\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"row address\">\r\n                        <i class=\"icon icon-small\">\r\n                            <svg focusable=\"false\">\r\n                                <use xlink:href=\"#icon_map\"></use>\r\n                            </svg>\r\n                        </i>\r\n                        <p>\r\n                            Pillar No.102, PVNR Express way,<br> 501 Karwan Sahu Road, <br>Attapur, Hyderabad, Telangana 500008,<br>\r\n                            India\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"row email\">\r\n                        <i class=\"icon icon-small\">\r\n                            <svg focusable=\"false\">\r\n                                <use xlink:href=\"#icon_message\"></use>\r\n                            </svg>\r\n                        </i>\r\n                        <p>\r\n                            <a href=\"mailto:admissions@thepremiaacademy.com\">admissions@thepremiaacademy.com</a><br>\r\n                            <a href=\"mailto:enquiry@thepremiaacademy.com\">enquiry@thepremiaacademy.com</a>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"social-net\">\r\n                        <ul>\r\n                            <li *ngFor=\"let item of socialNet; index as i\">\r\n                                <a href=\"https://www.{{item.icon}}.com\" target=\"_blank\">\r\n                                    <i class=\"icon icon-ex-small\">\r\n                                        <svg focusable=\"false\">\r\n                                            <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                        </svg>\r\n                                    </i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"clearfix\"></div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCurriculumCurriculumComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"the-urriculum\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            Premia Curriculum\r\n        </a>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n            <h1 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                Premia Curriculum\r\n            </h1>\r\n            <div class=\"panel-body\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h2 class=\"center\">“Integrating the pedagogies of the world, So our little\r\n                    global citizens are ignited, inspired and explored.”\r\n                </h2>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 map-marker\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <img src=\"assets/images/map.jpg\">\r\n        </div>\r\n\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <h2>Why an Integrated Curriculum?</h2>\r\n            <p>The Premia Integrated Curriculum offers our students many opportunities for deep learning as they use\r\n                their knowledge to make connections between subjects or disciplines to decode\r\n                the simplicities and intricacies of life</p>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row curriculum-info\">\r\n        <div class=\"col col-lg-2 col-md-2 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <p>Students develop\r\n                new levels of\r\n                awareness -</p>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <p>Of the world\r\n                Of themselv es\r\n                And their place in it</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row curriculum-info\">\r\n        <div class=\"col col-lg-2 col-md-2 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <p>Students develop\r\n                new levels of\r\n                awareness -</p>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <p>Of the world\r\n                Of themselv es\r\n                And their place in it</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row int-curriculum\">\r\n        <div class=\"col col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <h1>What is an Integrated Curriculum?</h1>\r\n            <p>An Integrated Curriculum is a unification of all subjects and experiences.\r\n                The intertwining of different approaches to integration such as</p>\r\n        </div>\r\n\r\n        <div class=\"col col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                    <div>\r\n                        <h3>\r\n                            <i class=\"icon icon-medium\">\r\n                                <svg focusable=\"false\">\r\n                                    <use xlink:href=\"#icon_ethicalEdu\"></use>\r\n                                </svg>\r\n                            </i>\r\n                            Multi-disciplinary\r\n                        </h3>\r\n                        <p>Focuses primarily on the various disciplines allowing the students to correlate different\r\n                            subjects to a\r\n                            common theme.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h3>\r\n                            <i class=\"icon icon-medium\">\r\n                                <svg focusable=\"false\">\r\n                                    <use xlink:href=\"#icon_ethicalEdu\"></use>\r\n                                </svg>\r\n                            </i>\r\n                            Interdisciplinary\r\n                        </h3>\r\n                        <p>Integrating the sub-disciplines within a subject area makes students nderstand the\r\n                            connections between\r\n                            the different sub-disciplines and their relationship. Example: Integrating reading, writing,\r\n                            and oral\r\n                            communication in language arts.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h3>\r\n                            <i class=\"icon icon-medium\">\r\n                                <svg focusable=\"false\">\r\n                                    <use xlink:href=\"#icon_ethicalEdu\"></use>\r\n                                </svg>\r\n                            </i>\r\n                            Transdisciplinary\r\n                        </h3>\r\n                        <p>Here the curriculum is organized around student questions and concerns.\r\n                            Two routes lead to transdisciplinary integration: i.e project-research based and\r\n                            collaborative learning.\r\n                        </p>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n                    <img src=\"assets/images/int-curricolum.jpg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <h3>How do we integrate - Premia Niche?</h3>\r\n            <p>The core belief of our curriculum works on Howard Gardner’s Theory of Multiple Intelligences.<br>\r\n                Fulfills the learning outcomes of CBSE, IGCSE, Common Core, Aero & IB<br>\r\n                Considers different types of learners in a class<br>\r\n                Caters to the innate aptitudes and attitudes of every student<br>\r\n                Aids differentiated learning- allows for individual learning processes<br>\r\n                Enables each learner to utilise his or her specific abilities to demonstrate learning.<br><br>\r\n\r\n                <b> Our curriculum is an amalgamation of the different Methodologies & Theories of teaching\r\n                    such as Maria Montessori, Reggio Emilio, Jean Piaget etc. Where</b><br><br>\r\n\r\n                Reading and literacy is the base- World class Scholastic Levelled Bookroom 4.0\r\n                Research for a learning experience is encouraged\r\n                Expanding the world view is a norm<br><br>\r\n\r\n                <b> Thus, helping them evolve their authentic self, driven by purpose and fuelled by passion.\r\n                    Every well wisher of a child wants the child to be successful and happy, this can be achieved\r\n                    if we encourage children to be their true and authentic selves.</b>\r\n            </p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class='row cur-info-slider'>\r\n        <input type=\"radio\" id=\"animal\" name=\"wiki\" value=\"Animal\" checked>\r\n<input type=\"radio\" id=\"plant\" name=\"wiki\" value=\"Plant\">\r\n<input type=\"radio\" id=\"space\" name=\"wiki\" value=\"Space\">\r\n<input type=\"radio\" id=\"river\" name=\"wiki\" value=\"River\">\r\n\r\n<ul class=\"accordion\">\r\n  <li data-radio=\"animal\">\r\n    <label for=\"animal\" class=\"accordion-title\">\r\n      <span>01</span>\r\n      <span class=\"accordion-heading\">Visual & Spatial</span>\r\n    </label>\r\n    <div class=\"accordion-content\">Animals are multicellular eukaryotic organisms that form the biological kingdom Animalia. With few exceptions, animals consume organic material, breathe oxygen, are able to move, can reproduce sexually, and grow from a hollow sphere of cells, the blastula, during embryonic development. Over 1.5 million living animal species have been described—of which around 1 million are insects—but it has been estimated there are over 7 million animal species in total. Animals range in length from 8.5 millionths of a metre to 33.6 metres (110 ft). They have complex interactions with each other and their environments, forming intricate food webs. The kingdom Animalia includes humans, but in colloquial use the term animal often refers only to non-human animals. The study of non-human animals is known as zoology.</div>\r\n  </li>\r\n  <li data-radio=\"plant\">\r\n    <label for=\"plant\" class=\"accordion-title\">\r\n      <span>02</span>\r\n      <span class=\"accordion-heading\">Linguistic / Word Smart</span>\r\n    </label>\r\n    <div class=\"accordion-content\">MPlants are mainly multicellular, predominantly photosynthetic eukaryotes of the kingdom Plantae. Historically, plants were treated as one of two kingdoms including all living things that were not animals, and all algae and fungi were treated as plants. However, all current definitions of Plantae exclude the fungi and some algae, as well as the prokaryotes (the archaea and bacteria). By one definition, plants form the clade Viridiplantae (Latin name for \"green plants\"), a group that includes the flowering plants, conifers and other gymnosperms, ferns and their allies, hornworts, liverworts, mosses and the green algae, but excludes the red and brown algae.</div>\r\n  </li>\r\n  <li data-radio=\"space\">\r\n    <label for=\"space\" class=\"accordion-title\">\r\n      <span>03</span>\r\n      <span class=\"accordion-heading\">Logical / Mathematical</span>\r\n    </label>\r\n    <div class=\"accordion-content\">Space is the boundless three-dimensional extent in which objects and events have relative position and direction. Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. The concept of space is considered to be of fundamental importance to an understanding of the physical universe. However, disagreement continues between philosophers over whether it is itself an entity, a relationship between entities, or part of a conceptual framework.</div>\r\n  </li>\r\n  <li data-radio=\"river\">\r\n    <label for=\"river\" class=\"accordion-title\">\r\n      <span>04</span>\r\n      <span class=\"accordion-heading\">Bodily / Kinesthetic</span>\r\n    </label>\r\n    <div class=\"accordion-content\">A river is a natural flowing watercourse, usually freshwater, flowing towards an ocean, sea, lake or another river. In some cases a river flows into the ground and becomes dry at the end of its course without reaching another body of water. Small rivers can be referred to using names such as stream, creek, brook, rivulet, and rill. There are no official definitions for the generic term river as applied to geographic features, although in some countries or communities a stream is defined by its size. Many names for small rivers are specific to geographic location; examples are \"run\" in some parts of the United States, \"burn\" in Scotland and northeast England, and \"beck\" in northern England. Sometimes a river is defined as being larger than a creek, but not always: the language is vague.</div>\r\n  </li>\r\n</ul>\r\n    </div>\r\n\r\n</section>";
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


    __webpack_exports__["default"] = "<div class=\"breadcum\">\n    <a>\n        <i class=\"icon icon-ex-small\">\n            <svg focusable=\"false\">\n                <use xlink:href=\"#icon_home\"></use>\n            </svg>\n        </i>\n    </a>\n    <span> |</span>\n    <a>\n        Page under construction.\n    </a>\n</div>";
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


    __webpack_exports__["default"] = "<section class=\"contact-info\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <p>\r\n                    The Premia Academy<br>\r\n                    Pillar No. 102, 501 Karwan Sahu Road,<br>\r\n                    Attapur, Hyderabad, Telangana 500008\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <p>\r\n                    +91 9111 399 399<br>\r\n                    admissions@thepremiaacademy.com<br>\r\n                    enquiry@thepremiaacademy.com\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <div>\r\n                    <div class=\"social-net\">\r\n                        <ul>\r\n                            <li><a routerLink=\"ThePremiaStory\" routerLinkActive=\"active\" skipLocationChange=true>\r\n                                    The Premia story\r\n                                </a>\r\n                            </li>\r\n                            <li><a routerLink=\"ThePremiaCulture\" routerLinkActive=\"active\" skipLocationChange=true>\r\n                                    The Premia Culture\r\n                                </a>\r\n                            </li>\r\n                            <li><a routerLink=\"ThePremiaEdge\" routerLinkActive=\"active\" skipLocationChange=true>\r\n                                    The Premia Edge\r\n                                </a>\r\n                            </li>\r\n                            <li><a routerLink=\"JoinThePremiaPride\" routerLinkActive=\"active\" skipLocationChange=true>\r\n                                    Join The Premia Pride\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>";
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


    __webpack_exports__["default"] = "<header>\r\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n    <div class=\"container\">\r\n    <a href=\"javascript:void(0)\" class=\"logo\" routerLink=\"Home\" routerLinkActive=\"active\"\r\n    skipLocationChange=true>\r\n      <img src=\"assets/images/logo.png\">\r\n  </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"slideToggel()\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  </div>\r\n    <ul class=\"navbar-nav navbar-nav-list header-nav\">\r\n      <li class=\"nav-item login\">\r\n        <a class=\"nav-link\">\r\n          <i class=\"icon icon-small\">\r\n            <svg focusable=\"false\">\r\n              <use xlink:href=\"#icon_chatroom\"></use>\r\n            </svg>\r\n          </i><br>\r\n          <span>Chat</span> \r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item login dropping\">\r\n        <a class=\"nav-link\">\r\n          <i class=\"icon icon-small\">\r\n            <svg focusable=\"false\">\r\n              <use xlink:href=\"#icon_enquiry\"></use>\r\n            </svg>\r\n          </i><br>\r\n         <span>Enquiry</span> \r\n        </a>\r\n\r\n        <div class=\"dropper\">\r\n          <a (click)=\"open(apply)\">\r\n            Admission to Foundation Stage\r\n          </a>\r\n          <a (click)=\"open(apply)\">\r\n            Admission to Preparatory Stage\r\n          </a>\r\n          <a (click)=\"open(apply)\">\r\n            Admission to Middle Stage\r\n          </a>\r\n          <a (click)=\"open(apply)\">\r\n            Admission to Secondary Stage\r\n          </a>\r\n        </div>\r\n  \r\n        <ng-template #apply let-modal>\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Apply</h4>\r\n                <a class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                  <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                      <use xlink:href=\"#icon_close\"></use>\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n          </div>\r\n          <div class=\"modal-body apply-form\">\r\n          \r\n                  <form>\r\n                      <div class=\"row\">\r\n                          <div class=\"col\">\r\n                              <label for=\"sel1\">Academic Year</label>\r\n                              <select class=\"form-control\" id=\"sel1\">\r\n                                  <option>2020-2021</option>\r\n                              </select>\r\n                          </div>\r\n                          <div class=\"col\">\r\n                            <label for=\"pn\">Parent Name</label>\r\n                            <input type=\"pn\" class=\"form-control\" placeholder=\"Parent Name\" name=\"pn\">\r\n                        </div>\r\n                        </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col\">\r\n                          <label for=\"pn\">Parent Email ID</label>\r\n                          <input type=\"pi\" class=\"form-control\" placeholder=\"Parent Email ID\" name=\"pi\">\r\n                        </div>\r\n                          <div class=\"col\">\r\n                              <label for=\"phone\">Parent Mobile No</label>\r\n                              <input type=\"phone\" class=\"form-control\" placeholder=\"Phone\" name=\"phone\">\r\n                          </div>\r\n                         \r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col\">\r\n                          <div class=\"form-group\">\r\n                              <label for=\"Date\">Student DOB</label>\r\n                              <div class=\"input-group\">\r\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                                       name=\"dp\" ngModel=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\">\r\n                                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                                      <i class=\"icon icon-ex-small\">\r\n                                          <svg focusable=\"false\">\r\n                                            <use xlink:href=\"#icon_calender\"></use>\r\n                                          </svg>\r\n                                        </i>\r\n                                  </button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                       </div>\r\n                          <div class=\"col\">\r\n                              <label for=\"Grade\">Grade</label>\r\n                              <select class=\"form-control\" id=\"Grade\">\r\n                                  <option>Select-class</option>\r\n                                  <option>Grade-1</option>\r\n                                  <option>Grade-2</option>\r\n                                  <option>Grade-3</option>\r\n                                  <option>Grade-4</option>\r\n                                  <option>Grade-5</option>\r\n                                  <option>Grade-6</option>\r\n                                  <option>Grade-7</option>\r\n                              </select>\r\n                          </div>\r\n                          \r\n                      </div>\r\n                      <div class=\"row\">\r\n                          <div class=\"col\">\r\n                              <button class=\"btn btn-primary\">APPLY NOW</button>\r\n                          </div>\r\n                      </div>\r\n                      \r\n                  </form>\r\n          \r\n          </div>\r\n        </ng-template>  \r\n      </li>\r\n      <li class=\"nav-item login\">\r\n         <a class=\"nav-link\" (click)=\"openlogin(login)\">\r\n           <i class=\"icon icon-small\">\r\n             <svg focusable=\"false\">\r\n               <use xlink:href=\"#icon_login\"></use>\r\n             </svg>\r\n           </i><br>\r\n         <span>Login</span>   \r\n         </a>\r\n  \r\n         <ng-template #login let-modal>\r\n          <div class=\"modal-header\">\r\n             <h4 class=\"modal-title\" id=\"modal-basic-title\">Login/ Register</h4>\r\n                <a class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                  <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                      <use xlink:href=\"#icon_close\"></use>\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6 col-md-6 col-sm-12 login-form\">\r\n                <h6>Login</h6>\r\n                <form action=\"\">\r\n               \r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                      <label for=\"userName\">User Name</label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" name=\"userName\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <label for=\"pass\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"pass\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col form-check\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\"> Remember me\r\n                  </label>\r\n                  <a href=\"\" class=\"ml-5\">Forgot Password?</a>\r\n              </div>\r\n              </div>\r\n              <button class=\"btn btn-primary\">Login</button>\r\n              </form>\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-6 col-sm-12 login-form\">\r\n                <h6>Register</h6>\r\n                <form action=\"\">\r\n               \r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <label for=\"userName\">User Name</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" name=\"userName\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      <label for=\"email\">Email ID</label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Email ID\" name=\"EmailID\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <label for=\"phoneno\">Phone No.</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" name=\"phoneno\">\r\n                </div>\r\n              </div>\r\n                 <button class=\"btn btn-primary\" >Register</button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n  \r\n          </div>\r\n        </ng-template>\r\n  \r\n       </li>\r\n     </ul>\r\n \r\n  \r\n  </nav>\r\n</header>\r\n\r\n<nav class=\"navbar-vertical\">\r\n  <a class=\"nav-link\" (click)=\"slideToggel()\">\r\n    <i class=\"icon icon-small\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_menu\"></use>\r\n      </svg>\r\n    </i>\r\n  </a> \r\n  \r\n  <div class=\"social-net\">\r\n\r\n    <ul>\r\n        <li><a href=\"https://www.facebook.com/ThePremiaAcademy/\" target=\"_blank\">\r\n                <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                        <use xlink:href=\"#icon_facebook\"></use>\r\n                    </svg>\r\n                </i>\r\n                <span>Facebook</span>\r\n            </a>\r\n        </li>\r\n        <li><a href=\"https://www.linkedin.com/company/thepremiaacademy\" target=\"_blank\">\r\n                <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                        <use xlink:href=\"#icon_linkedin\"></use>\r\n                    </svg>\r\n                </i>\r\n                <span>Linkedin</span>\r\n            </a>\r\n        </li>\r\n        <li><a href=\"https://instagram.com/thepremiaacademy?igshid=1qcxjqxa75x37\" target=\"_blank\">\r\n                <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                        <use xlink:href=\"#icon_instagram\"></use>\r\n                    </svg>\r\n                </i>\r\n                <span>Instagram</span>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"notice-board\"><a  target=\"_blank\" (click)=\"notifyOpen(notify)\">\r\n          <i class=\"icon icon-ex-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_noticeBoard\"></use>\r\n              </svg>\r\n          </i>\r\n          <span>Notice Board</span>\r\n       </a>\r\n    </li>\r\n    </ul>\r\n</div>\r\n</nav>\r\n\r\n<ng-template #notify let-modal>\r\n  <div class=\"modal-header\">\r\n    <i class=\"icon icon-ex-small\">\r\n      <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_noticeBoard\"></use>\r\n      </svg>\r\n  </i>\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">NOTICE BOARD</h4>\r\n        <a class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n          <i class=\"icon icon-ex-small\">\r\n            <svg focusable=\"false\">\r\n              <use xlink:href=\"#icon_close\"></use>\r\n            </svg>\r\n          </i>\r\n        </a>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 v-flex\">\r\n       <p>\r\n        Admissions open<br>\r\n        for the academic<br>\r\n        year of 2020 - 2021\r\n       </p>\r\n       <button class=\"btn btn-primary\"  aria-label=\"Close\" (click)=\"knowMore('admission');\">APPLY NOW</button>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n       <img src=\"assets/images/notice-board.png\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<div class=\"overlay\" [ngClass]=\"isOpen ? '' : 'active'\">\r\n  <img src=\"assets/images/2.jpg\">\r\n  <a class=\"nav-link\" (click)=\"slideToggel()\">\r\n    <i class=\"icon icon-small close-menu\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_close\"></use>\r\n      </svg>\r\n    </i>\r\n  </a> \r\n<ul class=\"main-nav\">\r\n      <li class=\"main-nav-list\" *ngFor=\"let item of list; index as i\">\r\n        <a class=\"main-nav-link\" routerLink=\"{{item.name}}\" routerLinkActive=\"active\" skipLocationChange=true (click)=\"slideToggel()\">\r\n          {{item.name | createSpace}}\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav navbar-nav-list notify-show\">\r\n      <li class=\"nav-item social-media\">\r\n\r\n      <a class=\"nav-link\" href=\"https://www.facebook.com/ThePremiaAcademy/\" target=\"_blank\">\r\n          <i class=\"icon icon-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_facebook\"></use>\r\n              </svg>\r\n          </i>\r\n      </a>\r\n      </li>\r\n      <li class=\"nav-item social-media\">\r\n        <a class=\"nav-link\" href=\"https://www.linkedin.com/company/thepremiaacademy\" target=\"_blank\">\r\n          <i class=\"icon icon-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_linkedin\"></use>\r\n              </svg>\r\n          </i>\r\n      </a>\r\n      </li>\r\n      <li class=\"nav-item social-media\">\r\n        <a class=\"nav-link\" href=\"https://instagram.com/thepremiaacademy?igshid=1qcxjqxa75x37\" target=\"_blank\">\r\n          <i class=\"icon icon-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_instagram\"></use>\r\n              </svg>\r\n          </i>\r\n      </a>\r\n       </li>\r\n       <li class=\"nav-item social-media\">\r\n        <a class=\"nav-link\" target=\"_blank\" (click)=\"notifyOpen(notify)\">\r\n          <i class=\"icon icon-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_noticeBoard\"></use>\r\n              </svg>\r\n          </i>\r\n       </a>\r\n       </li>\r\n     </ul>\r\n    <div class=\"general-info-nav\">\r\n      <a>Sitemap</a> |\r\n      <a>Privacy Policy</a> |\r\n      <a>FAQ</a> |\r\n      <a>Careers</a>\r\n    </div>\r\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"main-banner\">\r\n  <!-- <ngb-carousel #carousel interval=\"5000\" [showNavigationArrows]=\"showNavigationArrows\" [pauseOnHover]=\"pauseOnHover\"\r\n    (slide)=\"onSlide($event)\">\r\n        <ng-template ngbSlide  *ngFor=\"let info of banner; index as i\">\r\n          <div class=\"picsum-img-wrapper\">\r\n            <img src=\"assets/images/banner{{i+1}}.jpg\" alt=\"Random first slide\">\r\n          </div>\r\n          <div class=\"carousel-caption\">\r\n           <h3>{{info.title}}</h3>\r\n            <p>{{info.description}}</p>\r\n          </div>\r\n        </ng-template>     \r\n      </ngb-carousel> -->\r\n\r\n  <video controls autoplay>\r\n    <source src=\"assets/images/banner.mp4\" type=\"video/mp4\">\r\n    Your browser does not support the video tag.\r\n  </video>\r\n\r\n</div>\r\n\r\n<section class=\"section-admission\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-3 col-sm-12 admission-flag\">\r\n        <div class=\"flag-pos\">\r\n          <div class=\"v-align\">\r\n            <h1>Join<br>\r\n              The Premia<br>\r\n              Family\r\n              <br>\r\n              <button class=\"btn btn-primary\" (click)=\"knowMore('apply');\">Apply Now</button>\r\n            </h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ngx-slick-carousel class=\"carousel col-lg-9 col-md-9 col-sm-12\" #slickModal=\"slick-carousel\"\r\n        [config]=\"admissionConfig\">\r\n        <div ngxSlickItem *ngFor=\"let item of admission; index as i\" class=\"slide\">\r\n          <div class=\"panel\">\r\n            <div class=\"panel-front\">\r\n              <div class=\"panel-heading\">\r\n                <i class=\"icon icon-medium\">\r\n                  <svg focusable=\"false\">\r\n                    <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                  </svg>\r\n                </i>\r\n\r\n                <p>{{item.description}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ngx-slick-carousel>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 text-center heading-spacer\">\r\n      <h1 data-aos=\"fade-up\" data-aos-once=\"true\">What drives us?</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"section-nofify\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let item of notify\" class=\"col col-lg-4 col-md-4 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        <div class=\"panel\">\r\n          <div class=\"panel-front\">\r\n            <div class=\"panel-heading\">\r\n              <h5><span>{{item.title}}</span></h5>\r\n              <p>{{item.description}}</p>\r\n              <ul class=\"list\">\r\n                <li *ngFor=\"let data of item.moreInfo\">\r\n                  {{data.info}}\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<div class=\"clear-float\"></div>\r\n<section class=\"premian-league\">\r\n \r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <img class=\"concept\" src=\"assets/images/home-concept.png\">\r\n      <div class=\"asset asset_2\"></div>\r\n      <div class=\"asset asset_3\"></div>\r\n      <div class=\"asset asset_4\"></div>\r\n      <div class=\"asset asset_5\"></div>\r\n      <div class=\"col-sm-12 center\">\r\n        <h1 data-aos=\"fade-up\" data-aos-once=\"true\">The Premia Experience</h1>\r\n      </div>\r\n      <div *ngFor=\"let list of premianLeague; index as i\" class=\"col {{list.gridClass}} col-sm-12 col-premia\">\r\n        <div class=\"img-circle\" data-aos=\"zoom-in\" data-aos-once=\"true\">\r\n          <img src=\"assets/images/premianleague{{i+1}}.jpg\">\r\n        </div>\r\n        <h6 class=\"center\">{{list.name}}</h6>\r\n      </div>\r\n      <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n      <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\"\r\n        [config]=\"premianLeagueConfig\">\r\n        <div ngxSlickItem *ngFor=\"let item of partner; index as i\" class=\"slide\">\r\n          <div class=\"panel\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"img-box\">\r\n                <img src=\"assets/images/partner{{i+1}}.png\">\r\n              </div>\r\n              <p>{{item.description}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n      </ngx-slick-carousel>\r\n      <h6 class=\"center\">Who we are</h6>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 center heading-spacer\">\r\n      <h1 data-aos=\"fade-up\" data-aos-once=\"true\">Parents Speak</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"testimonials\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let list of testimonials; index as i\" class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n        <div class=\"img-circle\">\r\n          <img src=\"assets/images/premianleague{{i+1}}.jpg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        </div>\r\n        <p>\"{{list.clientView}}\"</p>\r\n        <h6 data-aos=\"fade-up\" data-aos-once=\"true\">{{list.clientName}}</h6>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12 heading-spacer\">\r\n      <h1 class=\"center\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        Our Partners\r\n      </h1>\r\n      <p data-aos=\"fade-up\" data-aos-once=\"true\">Our quest for creating the perfect learning environment led to\r\n        collaborating with a few organisations whose vision aligned with ours. Each of the programs are well researched\r\n        to cater to the needs of the millennials who require constant innovation. With combined ideologies and\r\n        compassion, successful partnerships are created on a trajectory to deliver nothing but the best! </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"partner\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <ngx-slick-carousel class=\"carousel col-lg-12 col-md-12 col-sm-12\" #slickModal=\"slick-carousel\"\r\n        [config]=\"partnerConfig\">\r\n        <div ngxSlickItem *ngFor=\"let item of partner; index as i\" class=\"slide\" data-aos=\"fade-up\"\r\n          data-aos-once=\"true\">\r\n          <div class=\"panel\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"img-box\">\r\n                <img src=\"assets/images/partner{{i+1}}.png\">\r\n              </div>\r\n              <p>{{item.description}}</p>\r\n            </div>\r\n            <div class=\"info-view\">\r\n              <div class=\"panel-heading\">\r\n                <div class=\"img-box\">\r\n                  <img src=\"assets/images/partner{{i+1}}.png\">\r\n                </div>\r\n                <h5>{{item.description}}</h5>\r\n                <p>{{item.description_2}}</p>\r\n                <a href=\"{{item.link}}\" target=\"blank\">{{item.link}}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ngx-slick-carousel>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 center heading-spacer\">\r\n      <h1 data-aos=\"fade-up\" data-aos-once=\"true\">The Premia Corner</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"the-premia-corner\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let list of thePremiaCorner; index as i\" class=\"col-lg-3 col-md-3 col-sm-12\">\r\n        <div class=\"col\">\r\n\r\n          <img src=\"assets/images/premianleague{{i+1}}.jpg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n\r\n          <h4 class=\"center\" data-aos=\"fade-up\" data-aos-once=\"true\">{{list.description}}</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"newsletter\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <form class=\"form-inline\" action=\"/action_page.php\">\r\n        <label for=\"email\">Newsletter </label>\r\n        <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" id=\"email\">\r\n        <button type=\"submit\" class=\"btn btn-primary\"> Subscribe</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/premiaethos/premiaethos.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/premiaethos/premiaethos.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPremiaethosPremiaethosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"premia-ethos\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            Premia ETHOS\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n            <h1 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                Premia ETHOS\r\n            </h1>\r\n            <div class=\"panel-body\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h2 class=\"center\">THE CULTURE AND ATMOSPHERE OF OUR SCHOOL\r\n                </h2>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <img src=\"assets/images/premia-ethos.jpg\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row prodigy\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"panel\">\r\n            <h2> <i class=\"icon icon-medium\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_ethicalEdu\"></use>\r\n                </svg>\r\n            </i>Prodigy (Miracles in making)</h2>\r\n            <p> It's our driving force that all our children go on to achieve their aspirations and live lives that inspire one and all. Every step we take, every move we make, is an effort to ensure we awaken the hidden prodigy every pupil. That journey builds itself on the bedrock of integrity, growth and innovation mindset and their tireless quest for knowledge. While everyone focuses on the thirst for materialistic success in life, little do we understand that\r\n                fame, success and prosperity is the by-product of work done with passion and purpose</p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row white\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n              <div class=\"panel\">\r\n            <p> The Premia Academy was founded on the belief that every child has the potential to make the world a beautiful place. Every child is unique and capable of learning when stimulated properly. Premiaa Academy believes in the development of these primary areas.  \r\n                Every institution has a framework or ground rules that they function with for the empowerment of every stakeholder. We at Premia like to call it the Premia ethos. We aspire to build a positive and progressive culture in our school, not only within our corridors and premises but in the very lives of all who are a part of our journey-children, parents, teachers, staff and administration. \r\n                We revisit our methods from time to time to ensure that we constantly and consistently keep soaring towards our goal of engendering an atmosphere to empower SOCIALLY RESPONSIBLE CITIZENSHIP.\r\n                While most would say food and water and the basic needs of life help a child survive, we at the Premia Academy beg to differ, we strongly believe that safety, love and a positive learning environment helps children thrive. </p>\r\n            </div>\r\n          </div>\r\n  \r\n      </div>\r\n\r\n  </section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/prmiapartner/prmiapartner.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prmiapartner/prmiapartner.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPrmiapartnerPrmiapartnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"premia-partner\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            The\r\n            Premia Partners\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"row-f\">\r\n        <h1>\r\n            Premia Partners\r\n        </h1>\r\n\r\n        <h2 class=\"center\">\r\n            <span class=\"highlighted\">\"</span>When great ideas and good intentions come\r\ntogether <span class=\"highlighted\">MAGIC HAPPENS</span> meet our friends and\r\npartners who have joined our mission<span class=\"highlighted\">\"</span>\r\n        </h2>\r\n\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <img src=\"assets/images/partner-01.png\">\r\n        </div>\r\n\r\n    </div>\r\n<div class=\"partner-panel\">\r\n    <div class=\"row-f\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 partner-grid\" *ngFor=\"let list of partners; index as i\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n           <div class=\"panel\">\r\n               <div class=\"row\">\r\n                   <div class=\"col-lg-6 col-md-6 col-sm-12 left-panel\">\r\n                      <h3>{{list.name}}</h3>\r\n                       <p>{{list.title}}</p>\r\n                       <div class=\"number\">0{{i+1}}</div>\r\n                   </div>\r\n                   <div class=\"col-lg-6 col-md-6 col-sm-12 right-panel\">\r\n                    {{list.des}}\r\n                    <div class='read-more'>READ MORE</div>\r\n                   </div>\r\n               </div>\r\n           </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n\r\n</section>\r\n";
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


    __webpack_exports__["default"] = "<section class=\"section-study-culture\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            The Premia Edge\r\n        </a>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n            <h1 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                The<br>\r\n                Premia Edge\r\n            </h1>\r\n            <div class=\"panel-body\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <p>The integrated curriculum at Premia comprises & aligns with all the learning outcomes in CBSE, IGCSE\r\n                    & AERO standards. The curriculum includes reading, writing, listening, speaking, social studies,\r\n                    math, science, health, physical education, music, and visual arts, experiential learning, public\r\n                    speaking, emphasis on projects, etc. We at Premia will utilize different approaches of integration\r\n                    best suited for the students:\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <img src=\"assets/images/8.jpg\">\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"row edge-info\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 float-right\">\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Multi-Disciplinary Integration</span></h3>\r\n                <p>\r\n                    To focus on reading, writing, and communication in all its forms, in language arts. This approach\r\n                    focuses on integration within one subject area, teaching the content with deeper understanding.\r\n                </p>\r\n            </div>\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Inter-disciplinary integration</span></h3>\r\n                <p>\r\n                    Focuses on project-based learning in more than one subject area. Interdisciplinary integration\r\n                    assembles the teaching of several subjects around common issues, or problems, highlighting thematic\r\n                    concepts in which a common theme is studied.\r\n                </p>\r\n            </div>\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Trans-disciplinary integration</span></h3>\r\n                <p>\r\n                    Involves understanding the student’s interests, and concerns while encouraging them to ask questions\r\n                    to inquire about the subject matter from a variety of perspectives. Interdisciplinary integration\r\n                    incorporates information, involving students’ interests and questions\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"row edge-info\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 float-right\">\r\n            \r\n            <h1 class=\"plan-title\" data-aos=\"fade-up\" data-aos-once=\"true\"><span>Key Areas of Learning</span></h1>\r\n    </div>\r\n       \r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 float-right\">\r\n           \r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Communication and Language</span></h3>\r\n                <p>\r\n                   Communication and language development is about different ways\r\n                a child understands and communicates, using words, gestures or facial expressions. Being an\r\n                indicator of fine motor skill development and a reflection of cognitive development, reading\r\n                is one of the best ways to encourage communication and language development.</p>\r\n            </div>\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Personal, Social and Emotional Development</span></h3>\r\n                <p>\r\n                    It’s essential for children to feel\r\n                comfortable, emotionally and physically to learn effectively. Helping children to learn how\r\n                to regulate and manage their feelings is, therefore, a vital stepping stone for success in\r\n                learning and life.\r\n                </p>\r\n            </div>\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Physical Development</span></h3>\r\n                <p>\r\n                    Children meet a myriad of physical development milestones in the\r\n                first few years of life, from walking to drawing. Physical development focuses on increasing\r\n                the skill and performance of the body. The development of children’s physical skills should\r\n                be developed holistically across all areas of learning.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"section-explicit\">\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            \r\n            <h1 class=\"plan-title\" data-aos=\"fade-up\" data-aos-once=\"true\"><span>Explicit Areas of Learning</span></h1>\r\n    </div>\r\n     <ngx-slick-carousel class=\"row explicit-sec nav-tabs\" ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\"\r\n     #slickModal=\"slick-carousel\" [config]=\"explicitConfig\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n              <li ngxSlickItem class=\"add-info\" ngbNavItem=\"{{i+1}}\"  *ngFor=\"let list of explicit; index as i\">\r\n                  <a ngbNavLink class=\"panel\">\r\n                      <div class=\"panel-heading\">\r\n                          <h1>{{list.bar}}</h1>\r\n                          <i class=\"icon icon-medium\">\r\n                            <svg focusable=\"false\">\r\n                                <use attr.xlink:href=\"{{list.icon}}\"></use>\r\n                            </svg>\r\n                        </i>\r\n                              <h6 class=\"bar _{{list.bar}}\">\r\n                                  {{list.title}}\r\n                              </h6>\r\n                            </div>\r\n                           \r\n                        </a>\r\n                     <ng-template ngbNavContent>\r\n                       {{list.description}}\r\n                    </ng-template>\r\n                </li>\r\n        </ngx-slick-carousel>   \r\n\r\n            <div [ngbNavOutlet]=\"nav\" class=\"tab-info\"></div>\r\n </div> \r\n  </section>";
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


    __webpack_exports__["default"] = "<section class=\"section-study-culture\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            The\r\n            Premia Story\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"row-f\">\r\n        <h1>\r\n            The<br>\r\n            Premia Story\r\n        </h1>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 story sub-header\">\r\n            <div class=\"panel\">\r\n                <h2 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                    Who we are\r\n                </h2>\r\n                <div class=\"panel-body\">\r\n                <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                    <div class=\"img-flag d-sm-block d-md-none\" >\r\n                        <img src=\"assets/images/5.jpg\">\r\n                    </div>\r\n                    We are a group of committed individuals who believe that “What sculpture is to a block of marble, education is to the human soul.” Joseph Addison. \r\n                    <br><br>\r\n                    Our advisory board comprises diverse academicians who have a keen interest in providing a unique perspective to our collective vision. Individually they have contributed tremendously to the field of education, together they bring their unique capacities to our advisory board supporting continual improvement and sustainability.   \r\n                  </div>\r\n            </div>\r\n            <div class=\"row add-spec\">\r\n\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        We want to nurture a confident, compassionate student body that is ready to make a positive difference to the World. We affirm that every child deserves a childhood filled with love and positivism. That is the core belief, with which we will take care of each child, as this will contribute to making exemplary individuals. </p>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngFor=\"let item of story; index as i\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <div class=\"panel\">\r\n                            <div class=\"panel-front\">\r\n                                <div class=\"panel-heading\">\r\n                                    <i class=\"icon icon-medium\">\r\n                                        <svg focusable=\"false\">\r\n                                            <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                        </svg>\r\n                                    </i>\r\n                                     \r\n                                        <p>{{item.description}}</p>\r\n                                </div>\r\n                             </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"doodle\">\r\n                The Premia Story\r\n            </div>\r\n        </div>\r\n        <div class=\"img-flag sub-header-image\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <img src=\"assets/images/5.jpg\">\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row\" >\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12\"> <h2 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            The Quest\r\n        </h2></div>\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12\">\r\n        <div class=\"panel story-info\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <span class=\"flying-plane\">\r\n                <span>.........................................</span>\r\n            <i class=\"icon icon-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_plane\"></use>\r\n                </svg>\r\n            </i> \r\n        </span>\r\n            <p data-aos=\"fade-up\" data-aos-once=\"true\"> Just like any involved parent, our Director, Sinduri Reddy, began a quest to find a school that would nurture her growing preschoolers in the best way possible.  \r\n                <br><br>\r\n                After putting together the best of schools and undergoing immense research, there were still certain factors like cleanliness, Ethos, Curriculum Focus, distance, etc. that made it impossible for her to choose.  \r\n                <br><br>\r\n                So, like a popular thought,” when you can’t find someone to do exactly what you, get up and do it yourself!” That’s exactly what she did!  \r\n                <br><br>\r\n                Her endeavours have snowballed into the Premia Academy. \r\n                </p>\r\n               \r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n</section>";
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


    __webpack_exports__["default"] = "<section class=\"section-study-culture\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            The Premia Culture\r\n        </a>\r\n    </div>\r\n    <div class=\"row-f\">\r\n\r\n        <h1>\r\n            The<br>\r\n            Study Culture\r\n        </h1>\r\n       \r\n        <div class=\"col-lg-8 col-md-8 col-sm-12 sub-header\">\r\n           <div class=\"panel\">\r\n                <h2>\r\n                    Our Vision\r\n                </h2>\r\n                <p>Our vision is to raise, our ‘Premia Pride’ to live their dreams as a<br> generation who are:</p>\r\n                <ul class=\"list\">\r\n                    <li *ngFor=\"let data of vision\">\r\n                        {{data.info}}\r\n                    </li>\r\n                </ul>\r\n        \r\n         <!--<div class=\"doodle\">\r\n            The Premian Story\r\n        </div>-->\r\n    </div>\r\n        </div>\r\n        <div class=\"img-flag\">\r\n            <img src=\"assets/images/3.jpg\">\r\n        </div>\r\n        \r\n    </div> \r\n\r\n   <div class=\"row-f our-mission\"> \r\n        \r\n       \r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 panel\">\r\n        \r\n            <div class=\"panel-body\">\r\n                <h2>\r\n                    Our Mission\r\n                </h2>\r\n                <p>Our students will be equipped to meet the current<br>\r\n                    and future challenges with values of</p>\r\n                <ul class=\"list\">\r\n                    <li *ngFor=\"let data of mission\">\r\n                        {{data.info}}\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"img-flag\">\r\n            <img src=\"assets/images/4.jpg\">\r\n        </div>\r\n    </div> \r\n\r\n\r\n    <!-- <div class=\"row-f\">\r\n        <h1>\r\n            The<br>\r\n            Premia Culture\r\n        </h1>\r\n\r\n\r\n        <div class=\"col-lg-8 col-md-8 col-sm-12 sub-header\">\r\n           \r\n            <div class=\"panel\">\r\n                <div class=\"panel-body\">\r\n                    <h2 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        Our Belief\r\n                    </h2>\r\n                    <p data-aos=\"fade-up\" data-aos-once=\"true\">The Premia Academy was founded on the belief that every child has the potential to make the world\r\n                        a beautiful place. Every child <br>is unique and capable of learning when instructed properly.\r\n                        Premia Academy believes the development of these primary areas -</p>\r\n                    <ul class=\"list\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <li *ngFor=\"let data of belief\">\r\n                            {{data.info}}\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"doodle\">\r\n                    The Premian Story\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"img-flag\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <img src=\"assets/images/3.jpg\">\r\n        </div>\r\n\r\n    </div>-->\r\n\r\n\r\n    <div class=\"clearfix\"></div>\r\n\r\n   <div class=\"row\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 our-belief\">\r\n            <h2>\r\n                Our Belief\r\n            </h2>\r\n            <div class=\"panel\">\r\n              <p>The Premia Academy was founded on the belief that every child has the potential to make the world a beautiful place. Every child <br>is unique and capable of learning when instructed properly. Premia Academy believes the development of these primary areas - \r\n            </p>\r\n                <ul class=\"list row\">\r\n                    <li *ngFor=\"let data of belief\" class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        {{data.info}}\r\n                    </li>\r\n                </ul>\r\n        </div>\r\n        </div>\r\n     \r\n    </div>\r\n\r\n\r\n    <div class=\"row curriculum\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12\">\r\n            <h2 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                Our Curriculum\r\n            </h2>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 curriculum-1\">\r\n\r\n            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <img class=\"image-wrap\"  align=\"right\" src=\"assets/images/14.jpg\">\r\n                An integrated curriculum extends a framework with significant and expressive learning including\r\n                assessments and evaluation to meet the standards and benchmarks of the boards whose learning objectives\r\n                are the guide. Learning through integration stimulates the development of creativity, critical thinking\r\n                and problem-solving. Integration also develops Communication and collaboration within students. Also,\r\n                digital literacy, social and cultural skills, prove to be beneficial, providing students with\r\n                opportunities to acquire enduring skills for life. The attributes of an integrated curriculum include\r\n                experiences to develop children’s attitudes, skills, and knowledge exposing them to a range of\r\n                activities to develop and sustain in the ever-changing and challenging world. Integrated teaching and\r\n                learning processes facilitate continued successful learning and there are multiple benefits of an\r\n                integrated curriculum. \r\n\r\n\r\n                At The Premia Academy we believe that education is not memorizing the facts but training the mind to\r\n                think creatively and critically! APPLICATION- LEARN HOW TO LEARN-\r\n\r\n                Students creating meaningful lifelong experiences!\r\n\r\n                 Premia Academy provides a resourceful environment of learning including technology in order to meet and\r\n                master the challenges of a changing world.\r\n\r\n                 Within the integrated and literacy-based curriculum, students will make connections between all\r\n                subjects, evaluating their work for improvement while utilizing the relevant resources that allow ample\r\n                individualization and choice in learning at the Premia Academy.\r\n\r\n                 The integrated curriculum helps students develop skills and understandings across mathematics, science\r\n                and social studies needed to meet the demands of high school while continuing to inspire a thirst for\r\n                learning. The literacy-based program with the world class Scholastic’s Levelled Book Room provides an\r\n                academic framework that encourages students to embrace and understand the connections between\r\n                traditional subjects and the real world, and to become critical and reflective thinkers.\r\n\r\n                 \r\n\r\n                 Students at The Premia Academy learn to work together to become leaders and learners within the\r\n                classroom and will be ready to face tomorrow’s challenges!\r\n\r\n                 \r\n\r\n                Our goal is to make sure that the students are the best readers, mathematicians, scientists and\r\n                historians that they can be!!\r\n               \r\n            </p>\r\n\r\n        </div>\r\n        <!-- <div class=\"col-lg-6 col-md-6 col-sm-12 curriculum-1\">\r\n            <div class=\"img-flag\">\r\n                <img src=\"assets/images/14.jpg\">\r\n            </div>\r\n        </div> -->\r\n\r\n    </div>\r\n\r\n    <div class=\"clearfix\"></div>\r\n    <!-- <div class=\"row edge-info\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 float-right\">\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Best possible start to learning</span></h3>\r\n                <p>\r\n                    Our caring, experienced teachers and teacher assistants give our youngest students the best possible start to learning. Our play-based learning environment captures their natural curiosity and sense of wonder. Our core subjects are complemented by all core subject classes, including Physical Education, Visual & Performing Arts and Music are all delivered in a warm, nurturing environment.\r\n                </p>\r\n            </div>\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>A positive foundation for learning </span></h3>\r\n                <p>\r\n                    At The Premia Academy children are introduced to a love of play and learning, by creating opportunities to explore, experiment, solve problems and express themselves as individuals. Sustained learning and the ability to apply concepts facilitates self-confidence and motivation. A deeper understanding of science and math concepts, improved reading and writing skills, fostering positive attitudes and personal growth, critical thinking skills and improved quality of work, will result in remarkable academic success.\r\n                </p>\r\n            </div>\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <h3 class=\"heading-title\"><span>Personal development for life</span></h3>\r\n                <p>\r\n                    Along with a positive start to learning, our teachers place an emphasis on oral language development and nurturing social relationships. Our teachers know a structured foundation is important for young children, to help them develop and grow into confident individuals. An exceptional learning space is provided for our young students, with high-quality trained staff who care and guide the young children.   A focus on the building blocks of education – literacy and numeracy- every advantage as the students’ progress through their education.The integrated curriculum helps students develop skills and understandings needed to meet the demands of high school while continuing to inspire a thirst for learning. The literacy-based program with the world class Scholastic’s Levelled Book Room provides an academic framework that encourages students to embrace and understand the connections between traditional subjects and the real world, and to become critical and reflective thinkers.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"more-info\">\r\n\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12 float-right\">\r\n            <!-- <h2 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                Our Approach\r\n            </h2> -->\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <ul class=\"list row\">\r\n                    <li *ngFor=\"let data of curriculum\" class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        {{data.info}}\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n\r\n    <div class=\"more-info-2\">\r\n\r\n        <div class=\"col-lg-9 col-md-9 col-sm-12 float-right\">\r\n            <!-- <h2 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                Our Approach\r\n            </h2> -->\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                <p>\r\n                    These advantages lead to better opportunities for teacher-student \r\n                    planning and cooperative evaluation which leads to enhanced creative \r\n                    teaching and learning activities. The process of learning and teaching \r\n                    from a fusion of knowledge with various activities, resources; and \r\n                    experiencing real-life situations for a solution-based approach. \r\n                    It also instils problem-solving, critical thinking and collaboration \r\n                    in and beyond the classroom. The Premia curriculum will be \r\n                    student-centric with flexibility, innovation and standards of \r\n                    learning outcomes for academic achievements as well as core values \r\n                    essential for practical life experiences. \r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"clearfix\"></div>\r\n\r\n    <div class=\"row\">\r\n         <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n         <div class=\"col-lg-11 col-md-11 col-sm-12\">\r\n             <h2>\r\n                Our Partners\r\n             </h2>\r\n             <div class=\"panel\">\r\n               <p class=\"center\">Our quest for creating the perfect learning environment was further helped by a few organisations who shared our vision. With their ideologies and compassion, we have successfully made a haven for knowledge and growth.\r\n             </p>\r\n         </div>\r\n         </div>\r\n     </div>\r\n    <div>\r\n     <div class=\"row our-partners\" *ngFor=\"let item of partner; index as i\">\r\n        <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n        <div class=\"col-lg-11 col-md-11 col-sm-12\">\r\n           <div class=\"panel\">\r\n                <h3 class=\"heading-title\"><span>{{item.description}}</span></h3>\r\n                   <div class=\"panel-heading\">\r\n                    <div class=\"img-box\">\r\n                      <img src=\"assets/images/partner{{i+1}}.png\">\r\n                    </div>\r\n                    <div>\r\n                        <p>{{item.description_2}}</p>\r\n                        <a>{{item.link}}</a>    \r\n                    </div>\r\n                  </div>\r\n            </div>\r\n            </div>\r\n     </div>\r\n    </div>\r\n</section>";
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


    __webpack_exports__["default"] = "<section class=\"section-inner-subheader\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            The Premia League\r\n        </a>\r\n    </div>\r\n    <section>\r\n        <div class=\"container\">\r\n\r\n            <div class=\"row the-team-info\">\r\n                <div class=\"col col-lg-12 col-md-12 col-sm-12 center\"  data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                    <h3 class=\"center\">\r\n                        THE PREMIA LEAGUE\r\n                    </h3>\r\n                    <h6>\r\n                       \"We are a group of committed individuals who believe that “What sculpture is to a block of marble, education is to the human soul.” \r\n                        --Joseph Addison.\r\n                    </h6>\r\n                    <P>\r\n                        Our advisory board comprises diverse academicians who have a keen interest in providing a unique perspective to our collective vision. Individually they have contributed tremendously to the field of education, together they bring their unique capacities to our advisory board supporting continual improvement and sustainability. <br><br>   \r\nWe want to nurture a confident, compassionate student body that is ready to make a positive difference to the World. We affirm that every child deserves a childhood filled with love and positivism. That is the core belief, with which we will take care of each child, as this will contribute to making exemplary individuals.\r\n                    </P>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row the-team-info\">\r\n                <div class=\"col col-lg-12 col-md-12 col-sm-12\">\r\n                    <h3 class=\"center\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        THE FOUNDING TEAM\r\n                    </h3>\r\n                </div>\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <img src=\"assets/images/premianleague4.jpg\">\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">Mr. Nallary\r\n                                Pradeep Reddy\r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                Widely recognized as one of the pioneers of the Information Technology revolution in\r\n                                India, Mr\r\n                                Reddy is the MD of The Interbiz and Infosun Group of Companies. He holds a bachelors in\r\n                                Electronics from IIT, Madras & a Masters in Computer Science from Penn State. He is a\r\n                                visionary\r\n                                and has been a guiding force to the Premia Team.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <img src=\"assets/images/premianleague5.jpg\">\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">Ms Sinduri Reddy\r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                With a keen interest in education, Ms Sinduri Reddy spearheads the Premia Academy as the Founder and Managing Director. Her focus is to help students and teachers, both, to adapt to the ever changing world of the 21st Century. She is Premia’s strongest pillar!\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row the-team-info\">\r\n                \r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <img src=\"assets/images/premianleague6.jpg\">\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                Mr Varun Reddy \r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                A director at The Interbiz and Infosun Group of Companies, he ensures that over 3 Lakh employees spread across 800 clients have access to state-of-the-art Human Resource Automation Applications. He is the CEO and Co-founder of Premia Academy. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <img src=\"assets/images/premianleague7.jpg\">\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                Mr Subramanayam Kantheti \r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                He is a business management professional with an experience of over 25 years. Mr Kantheti has been instrumental in setting up and managing schools across the country. He is the Co-Founder and COO at Premia. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <img src=\"assets/images/premianleague8.jpg\">\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">Ms Arti Mandhania \r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                She has an experience of 13 years and currently is the Business Head. A double post graduate in child psychology and business management, when not with kids, she is found with a book or a painting. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row the-team-info\">\r\n                <div class=\"col col-lg-12 col-md-12 col-sm-12\">\r\n                    <h3 class=\"center\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        THE ACADEMIC TEAM\r\n                    </h3>\r\n                </div>\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <img src=\"assets/images/premianleague1.jpg\">\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                Ms Malini Paul \r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                Her elegant personna often reflects in her role as the Founding Headmistress at Premia. With an experience of more than 30 years, she is an expert at Pre-School and Primary education. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <img src=\"assets/images/premianleague2.jpg\">\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                MS Rubina Majid\r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                The Curriculum Developer and Master Trainer of Premia Academy, Mr Rubina has worked extensively with schools in India and abroad. At present, besides working with The Premia Academy, Rubina is a consultant with Scholastic India and TCS iON for their educational verticals as well as running the Learning Resource Center, a think tank set up to accelerate and support positive change in our education system. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <img src=\"assets/images/premianleague3.jpg\">\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">Ms Trupti Rao\r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                Her core belief is to impart quality education for all students based on their social, emotional or physical aspects. As the Principal of Premia Academy, Ms Trupti Rao is a dedicated, resourceful educationist with proven ability to create and monitor policies that promote a happy and a safe learning environment. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row the-team-info\">\r\n\r\n                <div class=\"col col-lg-12 col-md-12 col-sm-12\">\r\n                    <h3 class=\"center\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        THE ADVISORY BOARD\r\n                    </h3>\r\n                </div>\r\n               \r\n\r\n                    <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <img src=\"assets/images/premianleague9.jpg\">\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">Ms Lalitha Naidu  \r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                An academician carrying values of purpose, passion and pedagogy, Ms Naidu presently heads the Meridian School, Madhapur. She is the Founder Principal of Shadan Group of Modern Schools. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <img src=\"assets/images/premianleague10.jpg\">\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">Ms Lalitha Naidu \r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                An academician carrying values of purpose, passion and pedagogy, Ms Naidu presently heads the Meridian School, Madhapur. She is the Founder Principal of Shadan Group of Modern Schools.  \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</section>";
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


    __webpack_exports__["default"] = ".section-admission h1 {\n  color: #3e65ac;\n}\n.section-admission .adm-info-table {\n  border-radius: 15px;\n  display: table;\n  margin: 0 auto;\n  border-spacing: 0;\n  border-collapse: separate;\n  overflow: hidden;\n}\n.section-admission .adm-info-table td {\n  padding: 5px 30px;\n  text-align: center;\n}\n.section-admission .row-f, .section-admission .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-admission .admission-info {\n  background: #fff;\n}\n.section-admission .add-spec {\n  margin-left: 35px;\n  margin-bottom: 35px;\n}\n.section-admission .add-spec .row {\n  margin: 0px;\n}\n.section-admission .add-spec .panel {\n  padding: 0;\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-admission .add-spec .panel p {\n  margin-top: 25px;\n}\n.section-admission .curriculum {\n  margin-bottom: 0px;\n}\n.section-admission .panel {\n  background: #fff;\n  padding: 50px;\n  padding-bottom: 0px;\n}\n.section-admission .panel .image-wrap {\n  width: 50%;\n  margin: -120px 0 26px 50px;\n}\n.section-admission .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n}\n.section-admission .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-admission .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-admission .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-admission h1 {\n  margin-bottom: 5px;\n}\n.section-admission h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-admission h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-admission .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-admission ul.list {\n  margin: 0px;\n}\n.section-admission ul.list li {\n  color: #000;\n}\n.section-admission ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n.applycation-rules .btn {\n  width: 75%;\n  padding: 15px 0;\n  background: #bf272d;\n  font-family: \"Lora\", serif;\n  margin: 25px auto 0;\n  font-size: 24px;\n  display: block;\n}\n.section-admission-2 {\n  margin: 70px 0px;\n}\n.section-admission-2 .row {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.section-admission-2 .bar {\n  position: relative;\n  padding-top: 15px;\n}\n.section-admission-2 .bar::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100px;\n  height: 5px;\n}\n.section-admission-2 .pp0::after {\n  background: #3e65ac;\n}\n.section-admission-2 .pp1::after {\n  background: #bf272d;\n}\n.section-admission-2 .pp2::after {\n  background: #000000;\n}\n.section-admission-2 .pp3::after {\n  background: #e4e4e4;\n}\n.section-admission-2 .addmin-sec {\n  padding: 0px;\n}\n.section-admission-2 .addmin-sec .row {\n  margin-left: 0px;\n}\n.section-admission-2 .addmin-sec .add-info {\n  padding: 2px;\n  display: flex;\n}\n.section-admission-2 .addmin-sec .add-info:first-child .panel {\n  margin-left: 0px;\n}\n.section-admission-2 .admission-flag {\n  position: relative;\n  color: #fff;\n  padding: 25px 0;\n  height: 250px;\n}\n.section-admission-2 .admission-flag .btn {\n  border: 1px solid #fff;\n  color: #fff;\n  background: none;\n}\n.section-admission-2 p {\n  white-space: pre;\n  margin-top: 15px;\n}\n.section-admission-2 .panel {\n  background: url('bulb.png') no-repeat 40px -10px #fff;\n  padding-top: 270px;\n  padding-bottom: 50px;\n  width: 100%;\n  border: 1px solid #8b8b8b;\n}\n.section-admission-2 .panel .panel-heading {\n  z-index: 2;\n  position: relative;\n}\n.section-admission-2 .panel .btn {\n  position: absolute;\n  bottom: 15px;\n  border: 2px solid #000;\n  background: none;\n  color: #000;\n  z-index: 2;\n}\n.section-admission-2 .panel:hover .btn {\n  border: 2px solid #fff;\n  background: none;\n  color: #fff;\n}\n.section-admission-2 .panel:hover .panel-heading .bar::after {\n  background: #fff !important;\n}\n.section-admission-2 .panel:hover .panel-heading h3, .section-admission-2 .panel:hover .panel-heading p {\n  color: #fff;\n}\n.section-admission-2 .panel:hover::after {\n  content: \"\";\n  background: url('bulb.jpg') no-repeat -65px -50px #bf272d;\n  position: absolute;\n  top: -25px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% + 50px);\n  padding: 325px 20px 0;\n  z-index: 1;\n  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.section-admission-2 .panel i {\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-admission-2 .panel svg {\n  width: 75px;\n  height: 75px;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n\n  .section-admission .panel {\n    padding: 40px 0;\n  }\n  .section-admission .panel .image-wrap {\n    width: 100% !important;\n    margin: 0px !important;\n  }\n  .section-admission .section-admission-2 .addmin-sec .add-info {\n    margin-bottom: 50px;\n  }\n  .section-admission .section-admission-2 .panel {\n    padding: 270px 50px 50px !important;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaXNzaW9ucy9GOlxcZ2l0aHViXFxhY2FkZW15L3NyY1xcYXBwXFxhZG1pc3Npb25zXFxhZG1pc3Npb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pc3Npb25zL2FkbWlzc2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDQyxjQUFBO0FDQUg7QURHRTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNESDtBREVHO0VBQ0QsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FESUM7RUFDQyxvQkFBQTtFQUNBLGtCQUFBO0FDRkY7QURJSTtFQUNJLGdCQUFBO0FDRlI7QURJSTtFQUNGLGlCQUFBO0VBQ0EsbUJBQUE7QUNGRjtBREdRO0VBQ0ksV0FBQTtBQ0RaO0FER0s7RUFDTyxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0RaO0FERVk7RUFDSSxnQkFBQTtBQ0FoQjtBRElDO0VBQ0Msa0JBQUE7QUNGRjtBRElDO0VBQ0MsZ0JBQUE7RUFDTSxhQUFBO0VBQ0EsbUJBQUE7QUNGUjtBREdFO0VBQ0MsVUFBQTtFQUNDLDBCQUFBO0FDREo7QURHRTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDREg7QURFRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNBSjtBRENJO0VBQ0MsVUFBQTtFQUNBLHdCQUFBO0VBQ0csZUFBQTtBQ0NSO0FERUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREtDO0VBQ0Msa0JBQUE7QUNIRjtBREtDO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNIRjtBRElFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRkg7QURLQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDSEY7QURLQztFQUNDLFdBQUE7QUNIRjtBRElFO0VBQ0MsV0FBQTtBQ0ZIO0FER0c7RUFDQyxtQkFBQTtBQ0RKO0FET0E7RUFDQyxXQUFBO0VBQ0EsV0FBQTtBQ0pEO0FES0M7RUFDQyx3QkFBQTtBQ0hGO0FEUUk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDTFI7QURTQTtFQUNDLGdCQUFBO0FDTkQ7QURPQztFQUNDLGFBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUUM7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0FDTkY7QURPRTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNMSDtBRFVFO0VBQ0EsbUJBQUE7QUNSRjtBRFVNO0VBQ0osbUJBQUE7QUNSRjtBRFVNO0VBQ0osbUJBQUE7QUNSRjtBRFVNO0VBQ0osbUJBQUE7QUNSRjtBRFdDO0VBQ0MsWUFBQTtBQ1RGO0FEVUU7RUFDQyxnQkFBQTtBQ1JIO0FEVUU7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ1JIO0FEVUk7RUFDQyxnQkFBQTtBQ1JMO0FEYUM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ1hGO0FEWUU7RUFDQyxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1ZIO0FEYUM7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FDWEY7QURhRTtFQUNDLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ1hIO0FEWUc7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7QUNWSjtBRFlHO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDVko7QURjSTtFQUNDLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDWkw7QURvQk07RUFDQywyQkFBQTtBQ2xCUDtBRHFCSztFQUNDLFdBQUE7QUNuQk47QUR1Qkk7RUFDQyxXQUFBO0VBQ0EseURBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsK0NBQUE7QUNyQkw7QUR5Qkc7RUFDQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDdkJKO0FEeUJHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUN2Qko7QUQrQkE7RUFJRTtJQUNDLGdCQUFBO0VDL0JEO0VEaUNEO0lBQ0MsaUJBQUE7RUMvQkE7RURrQ0Q7SUFDQyxXQUFBO0VDaENBOztFRHNDRDtJQUNDLGVBQUE7RUNuQ0E7RURvQ0E7SUFDQyxzQkFBQTtJQUNBLHNCQUFBO0VDbENEO0VEdUNDO0lBQ0MsbUJBQUE7RUNyQ0Y7RUR3Q0E7SUFDQyxtQ0FBQTtJQUNBLFdBQUE7RUN0Q0Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWlzc2lvbnMvYWRtaXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWFkbWlzc2lvbntcclxuICBoMXtcclxuXHQgIGNvbG9yOiMzZTY1YWM7XHJcbiAgfVxyXG5cclxuICAuYWRtLWluZm8tdGFibGV7XHJcblx0ICBib3JkZXItcmFkaXVzOjE1cHg7XHJcblx0ICBkaXNwbGF5OiB0YWJsZTtcclxuXHQgIG1hcmdpbjowIGF1dG87XHJcblx0ICBib3JkZXItc3BhY2luZzogMDtcclxuXHQgIGJvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZTtcclxuXHQgIG92ZXJmbG93OmhpZGRlbjtcclxuXHQgIHRke1xyXG5cdFx0cGFkZGluZzogNXB4IDMwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ICB9XHJcblxyXG4gIH1cclxuXHQucm93LWYsIC5yb3d7XHJcblx0XHRtYXJnaW46NzBweCAwIDEwMHB4OyBcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5hZG1pc3Npb24taW5mb3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICB9XHJcbiAgICAuYWRkLXNwZWN7XHJcblx0XHRtYXJnaW4tbGVmdDozNXB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTozNXB4O1xyXG4gICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgfVxyXG4gICAgIC5wYW5lbHtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblx0LmN1cnJpY3VsdW17XHJcblx0XHRtYXJnaW4tYm90dG9tOjBweDtcclxuXHR9XHJcblx0LnBhbmVsIHtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICBwYWRkaW5nOjUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206MHB4O1xyXG5cdFx0LmltYWdlLXdyYXB7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IC0xMjBweCAwIDI2cHggNTBweDtcclxuXHRcdH1cclxuXHRcdCYuc3RvcnktaW5mb3tcclxuXHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0LmZseWluZy1wbGFuZXtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0dG9wOjBweDtcclxuXHRcdFx0XHRzdmd7XHJcblx0XHRcdFx0XHRmaWxsOiAjZmZmO1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgXHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdHRvcDo1MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAzcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRoMXtcclxuXHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHR9XHJcblx0aDJ7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmctYm90dG9tOjVweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0Y29udGVudDpcIiBcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206MDtcclxuXHRcdFx0bGVmdDowO1xyXG5cdFx0XHR3aWR0aDo1MHB4O1xyXG5cdFx0XHRoZWlnaHQ6MnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNmMGYwZjA7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OjA7XHJcblx0XHR0b3A6MDtcclxuXHRcdHdpZHRoOiA0MCU7XHJcblx0fVxyXG5cdHVsLmxpc3R7XHJcblx0XHRtYXJnaW46MHB4O1xyXG5cdFx0bGl7XHJcblx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5tb3JlLWluZm97XHJcblx0ZmxvYXQ6bm9uZTtcclxuXHRjbGVhcjpib3RoO1xyXG5cdHB7XHJcblx0XHRtYXJnaW46NTBweCAwIDcwcHggNzVweCA7XHJcblx0fVxyXG59XHJcblxyXG4uYXBwbHljYXRpb24tcnVsZXN7XHJcbiAgICAuYnRue1xyXG4gICAgICAgIHdpZHRoOjc1JTtcclxuICAgICAgICBwYWRkaW5nOjE1cHggMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuICAgICAgICBtYXJnaW46MjVweCBhdXRvIDA7XHJcbiAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rpb24tYWRtaXNzaW9uLTJ7XHJcblx0bWFyZ2luOjcwcHggMHB4O1xyXG5cdC5yb3d7XHJcblx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5iYXJ7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmctdG9wOjE1cHg7XHJcblx0XHQmOjphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6MHB4O1xyXG5cdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0d2lkdGg6MTAwcHg7XHJcblx0XHRcdGhlaWdodDo1cHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQucHAwe1xyXG5cdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRiYWNrZ3JvdW5kOiMzZTY1YWM7fVxyXG5cdH1cclxuXHQucHAxeyY6OmFmdGVye1xyXG5cdFx0YmFja2dyb3VuZDojYmYyNzJkO31cclxuXHR9XHJcblx0LnBwMnsmOjphZnRlcntcclxuXHRcdGJhY2tncm91bmQ6IzAwMDAwMDt9XHJcblx0fVxyXG5cdC5wcDN7Jjo6YWZ0ZXJ7XHJcblx0XHRiYWNrZ3JvdW5kOiNlNGU0ZTQ7fVxyXG5cdH1cclxuXHJcblx0LmFkZG1pbi1zZWN7XHJcblx0XHRwYWRkaW5nOjBweDtcclxuXHRcdC5yb3d7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjBweDtcclxuXHRcdH1cclxuXHRcdC5hZGQtaW5mb3tcclxuXHRcdFx0cGFkZGluZzoycHg7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCY6Zmlyc3QtY2hpbGR7XHJcblx0XHRcdFx0LnBhbmVse1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuYWRtaXNzaW9uLWZsYWd7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRwYWRkaW5nOjI1cHggMDtcclxuXHRcdGhlaWdodDoyNTBweDtcclxuXHRcdC5idG57XHJcblx0XHRcdGJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwe1xyXG5cdFx0d2hpdGUtc3BhY2U6IHByZTtcclxuXHRcdG1hcmdpbi10b3A6MTVweDtcclxuXHR9XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVsYi5wbmcpIG5vLXJlcGVhdCA0MHB4IC0xMHB4ICNmZmY7XHJcblx0XHRcdHBhZGRpbmctdG9wOiAyNzBweDtcclxuXHRcdFx0cGFkZGluZy1ib3R0b206NTBweDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGJvcmRlcjoxcHggc29saWQgIzhiOGI4YjtcdFxyXG5cdFx0XHQucGFuZWwtaGVhZGluZ3tcclxuXHRcdFx0XHR6LWluZGV4OiAyO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHQuYnRue1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRib3R0b206MTVweDtcclxuXHRcdFx0XHRib3JkZXI6MnB4IHNvbGlkICMwMDA7XHJcblx0XHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdFx0ei1pbmRleDogMjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQmOmhvdmVye1xyXG5cdFx0XHRcdC5idG57XHJcblx0XHRcdFx0XHRib3JkZXI6MnB4IHNvbGlkICNmZmY7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Jjpob3ZlcntcclxuXHRcdFx0XHQucGFuZWwtaGVhZGluZ3tcclxuXHRcdFx0XHRcdC5iYXJ7XHJcblx0XHRcdFx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aDMsIHB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0XHRjb250ZW50OicnO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9idWxiLmpwZykgbm8tcmVwZWF0IC02NXB4IC01MHB4ICNiZjI3MmQ7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHR0b3A6IC0yNXB4O1xyXG5cdFx0XHRcdFx0bGVmdDogMHB4O1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IGNhbGMoMTAwJSArIDUwcHgpO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMzI1cHggMjBweCAwO1xyXG5cdFx0XHRcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aXtcclxuXHRcdFx0XHRtYXJnaW46MCBhdXRvO1xyXG5cdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0c3Zne1xyXG5cdFx0XHRcdHdpZHRoOjc1cHg7XHJcblx0XHRcdFx0aGVpZ2h0Ojc1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHJcblxyXG5cdC5zZWN0aW9uLXN0dWR5LWN1bHR1cmV7XHJcblx0XHQucm93LWYsIC5yb3csIGgxe1xyXG5cdFx0XHRtYXJnaW4tbGVmdDowcHg7IFxyXG5cdH1cclxuXHQuYnJlYWRjdW17XHJcblx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdH1cclxuXHRcclxuXHQucGFuZWwtYm9keXtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLnNlY3Rpb24tYWRtaXNzaW9ue1xyXG5cdC5wYW5lbHtcclxuXHRcdHBhZGRpbmc6NDBweCAwO1xyXG5cdFx0LmltYWdlLXdyYXB7XHJcblx0XHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHRcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5zZWN0aW9uLWFkbWlzc2lvbi0yIHtcclxuXHRcdC5hZGRtaW4tc2VjIHtcclxuXHRcdFx0LmFkZC1pbmZve1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206NTBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LnBhbmVse1xyXG5cdFx0XHRwYWRkaW5nOiAyNzBweCA1MHB4IDUwcHggIWltcG9ydGFudDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxufSIsIi5zZWN0aW9uLWFkbWlzc2lvbiBoMSB7XG4gIGNvbG9yOiAjM2U2NWFjO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5hZG0taW5mby10YWJsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmFkbS1pbmZvLXRhYmxlIHRkIHtcbiAgcGFkZGluZzogNXB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAucm93LWYsIC5zZWN0aW9uLWFkbWlzc2lvbiAucm93IHtcbiAgbWFyZ2luOiA3MHB4IDAgMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRtaXNzaW9uLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5hZGQtc3BlYyB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5hZGQtc3BlYyAucm93IHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmFkZC1zcGVjIC5wYW5lbCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5hZGQtc3BlYyAucGFuZWwgcCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmN1cnJpY3VsdW0ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAucGFuZWwgLmltYWdlLXdyYXAge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IC0xMjBweCAwIDI2cHggNTBweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAucGFuZWwuc3RvcnktaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnBhbmVsLnN0b3J5LWluZm8gLmZseWluZy1wbGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAucGFuZWwuc3RvcnktaW5mbyAuZmx5aW5nLXBsYW5lIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5wYW5lbC5zdG9yeS1pbmZvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDUwcHg7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiBoMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gaDI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5pbWctZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDQwJTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiB1bC5saXN0IHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gdWwubGlzdCBsaSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIHVsLmxpc3QgbGk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG5cbi5tb3JlLWluZm8ge1xuICBmbG9hdDogbm9uZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4ubW9yZS1pbmZvIHAge1xuICBtYXJnaW46IDUwcHggMCA3MHB4IDc1cHg7XG59XG5cbi5hcHBseWNhdGlvbi1ydWxlcyAuYnRuIHtcbiAgd2lkdGg6IDc1JTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICBtYXJnaW46IDI1cHggYXV0byAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VjdGlvbi1hZG1pc3Npb24tMiB7XG4gIG1hcmdpbjogNzBweCAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucm93IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLmJhcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1cHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucHAwOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucHAxOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucHAyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucHAzOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAuYWRkbWluLXNlYyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5hZGRtaW4tc2VjIC5yb3cge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLmFkZG1pbi1zZWMgLmFkZC1pbmZvIHtcbiAgcGFkZGluZzogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLmFkZG1pbi1zZWMgLmFkZC1pbmZvOmZpcnN0LWNoaWxkIC5wYW5lbCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAuYWRtaXNzaW9uLWZsYWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyNXB4IDA7XG4gIGhlaWdodDogMjUwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAuYWRtaXNzaW9uLWZsYWcgLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgcCB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9idWxiLnBuZykgbm8tcmVwZWF0IDQwcHggLTEwcHggI2ZmZjtcbiAgcGFkZGluZy10b3A6IDI3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4YjhiOGI7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWwgLnBhbmVsLWhlYWRpbmcge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWwgLmJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzAwMDtcbiAgei1pbmRleDogMjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wYW5lbDpob3ZlciAuYnRuIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWw6aG92ZXIgLnBhbmVsLWhlYWRpbmcgLmJhcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWw6aG92ZXIgLnBhbmVsLWhlYWRpbmcgaDMsIC5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wYW5lbDpob3ZlciAucGFuZWwtaGVhZGluZyBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWw6aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVsYi5qcGcpIG5vLXJlcGVhdCAtNjVweCAtNTBweCAjYmYyNzJkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI1cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlICsgNTBweCk7XG4gIHBhZGRpbmc6IDMyNXB4IDIwcHggMDtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWwgaSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLnBhbmVsIHN2ZyB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3ctZiwgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmJyZWFkY3VtIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zZWN0aW9uLWFkbWlzc2lvbiAucGFuZWwge1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgfVxuICAuc2VjdGlvbi1hZG1pc3Npb24gLnBhbmVsIC5pbWFnZS13cmFwIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb24tYWRtaXNzaW9uIC5zZWN0aW9uLWFkbWlzc2lvbi0yIC5hZGRtaW4tc2VjIC5hZGQtaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICAuc2VjdGlvbi1hZG1pc3Npb24gLnNlY3Rpb24tYWRtaXNzaW9uLTIgLnBhbmVsIHtcbiAgICBwYWRkaW5nOiAyNzBweCA1MHB4IDUwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */";
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
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var AdmissionsComponent = /*#__PURE__*/function () {
      function AdmissionsComponent(modalService) {
        _classCallCheck(this, AdmissionsComponent);

        this.modalService = modalService;
        this.closeResult = '';
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
          title: "Admission to Foundation Stage",
          bar: 'pp0',
          description: "Activity Based Learning \nfor 5 years"
        }, {
          title: 'Admission to Preparatory Stage',
          bar: 'pp1',
          description: "Discovery, Play and Interactive \nClassroom learning \nfor 3 years"
        }, {
          title: 'Admission to Middle Stage',
          bar: 'pp2',
          description: "Experiential learning in \nMathematics, Science, Arts, etc. \nfor 3 years"
        }, {
          title: 'Admission to Secondary Stage',
          bar: 'pp3',
          description: "Flexibility in choice of subjects \nwith multidisciplinary study \nfor 4 years"
        }];
      }

      _createClass(AdmissionsComponent, [{
        key: "open",
        value: function open(content) {
          var _this = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg'
          }).result.then(function (result) {
            _this.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this.closeResult = "Dismissed ".concat(_this.getDismissReason(reason));
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
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdmissionsComponent;
    }();

    AdmissionsComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

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
    /* harmony import */


    var _curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./curriculum/curriculum.component */
    "./src/app/curriculum/curriculum.component.ts");
    /* harmony import */


    var _premiaethos_premiaethos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./premiaethos/premiaethos.component */
    "./src/app/premiaethos/premiaethos.component.ts");
    /* harmony import */


    var _prmiapartner_prmiapartner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./prmiapartner/prmiapartner.component */
    "./src/app/prmiapartner/prmiapartner.component.ts");

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
      path: 'Curriculum',
      component: _curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_16__["CurriculumComponent"]
    }, {
      path: 'PremiaEthos',
      component: _premiaethos_premiaethos_component__WEBPACK_IMPORTED_MODULE_17__["PremiaethosComponent"]
    }, {
      path: 'PremiaPartner',
      component: _prmiapartner_prmiapartner_component__WEBPACK_IMPORTED_MODULE_18__["PrmiapartnerComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _thestudyculture_thestudyculture_component__WEBPACK_IMPORTED_MODULE_7__["ThestudycultureComponent"], _thepremianstory_thepremianstory_component__WEBPACK_IMPORTED_MODULE_8__["ThepremianstoryComponent"], _thepremianedge_thepremianedge_component__WEBPACK_IMPORTED_MODULE_9__["ThepremianedgeComponent"], _admissions_admissions_component__WEBPACK_IMPORTED_MODULE_10__["AdmissionsComponent"], _apply_apply_component__WEBPACK_IMPORTED_MODULE_11__["ApplyComponent"], _eng_eng_component__WEBPACK_IMPORTED_MODULE_12__["EngComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _blob_blob_component__WEBPACK_IMPORTED_MODULE_14__["BlobComponent"], _theteam_theteam_component__WEBPACK_IMPORTED_MODULE_15__["TheteamComponent"], _curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_16__["CurriculumComponent"], _premiaethos_premiaethos_component__WEBPACK_IMPORTED_MODULE_17__["PremiaethosComponent"], _prmiapartner_prmiapartner_component__WEBPACK_IMPORTED_MODULE_18__["PrmiapartnerComponent"]],
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


    __webpack_exports__["default"] = "body {\n  color: #000;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 14px;\n  background: #FFF;\n}\n\n.left-space {\n  padding-left: 70px;\n  float: left;\n  width: 100%;\n}\n\n.slick-prev:before, .slick-next:before {\n  color: #000;\n}\n\n* {\n  outline: none;\n}\n\na {\n  cursor: pointer;\n}\n\n.remove-scroll {\n  overflow: hidden;\n}\n\n.form-control, .btn {\n  border-radius: 0;\n}\n\n.v-flex {\n  align-self: center;\n}\n\n.breadcum {\n  margin-top: 115px;\n  margin-left: 70px;\n  font-family: \"Lora\", serif;\n}\n\n.breadcum span {\n  margin: 0 15px;\n}\n\n.breadcum .icon-ex-small svg {\n  width: 14px;\n  height: 14px;\n}\n\n.clearfix {\n  clear: both;\n  float: none;\n}\n\n.text-highlighter {\n  color: #bf272d;\n}\n\n.bg-highlighter {\n  background: #bf272d;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.btn {\n  font-weight: bold;\n  font-size: 12px;\n  padding: 5px 10px;\n}\n\nh1 {\n  font-size: 40px;\n  font-family: \"Lora\", serif;\n}\n\nh2 {\n  font-size: 34px;\n  font-family: \"Lora\", serif;\n}\n\nh3 {\n  font-size: 30px;\n}\n\nh4 {\n  font-size: 26px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n  line-height: 32px;\n}\n\nh1 {\n  font-weight: bold;\n}\n\n.center {\n  text-align: center;\n}\n\n.heading-highlight {\n  color: #f7a05c;\n}\n\nsvg {\n  vertical-align: middle;\n  margin: auto;\n  align-content: center;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n.icon-big > svg {\n  width: 100px;\n  height: 100px;\n}\n\n.icon-medium > svg {\n  width: 50px;\n  height: 50px;\n}\n\n.icon-small > svg {\n  width: 34px;\n  height: 34px;\n}\n\n.icon-ex-small > svg {\n  width: 24px;\n  height: 24px;\n}\n\n.section-admission .slick-prev:before, .section-admission .slick-next:before {\n  color: #000;\n}\n\n.section-admission .slick-prev, .section-admission .slick-next {\n  bottom: 0px;\n  top: auto;\n  right: 0;\n  left: auto !important;\n}\n\n.section-admission .slick-prev {\n  right: 25px;\n}\n\n.premian-league .slick-slider .slick-slide {\n  margin: 0 50px;\n}\n\n.premian-league .slick-prev, .premian-league .slick-next {\n  bottom: -25px;\n  top: auto;\n  right: 0;\n  left: auto !important;\n}\n\n.premian-league .slick-prev:before, .premian-league .slick-next:before {\n  color: #000;\n}\n\n.premian-league .slick-prev {\n  right: 25px;\n}\n\n.slick-slider {\n  width: 100%;\n  margin: auto;\n}\n\n.slick-slider .slick-slide {\n  margin: 0 15px;\n}\n\n.recent-article .slick-prev {\n  right: 60px !important;\n}\n\n.recent-article .slick-prev, .recent-article .slick-next {\n  background: #bf272d;\n  bottom: auto;\n  top: -25px;\n  right: 15px;\n  left: auto !important;\n  padding: 0px 25px;\n}\n\n.recent-article .slick-prev:before, .recent-article .slick-next:before {\n  color: #fff;\n}\n\n.inner-banner {\n  margin-top: 70px;\n  position: relative;\n}\n\n.inner-banner img {\n  width: 100%;\n}\n\n.inner-banner .page-title {\n  position: absolute;\n  bottom: 60px;\n  background: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  padding: 70px 0;\n  color: #214f7a;\n}\n\ntextarea.form-control {\n  border-radius: 15px;\n  resize: none;\n}\n\nimg {\n  width: 100%;\n}\n\n.main-banner .carousel-caption h3 {\n  color: #bf272d;\n  font-size: 40px;\n  font-weight: bold;\n  font-family: \"Lora\", serif;\n}\n\n.main-banner .carousel-caption p {\n  color: #000;\n  font-weight: bold;\n}\n\nul.list {\n  margin-top: 35px;\n}\n\nul.list li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  color: #fff;\n}\n\nul.list li::before {\n  content: \" \";\n  background: #fff;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.sub-header .panel {\n  padding-bottom: 0px !important;\n  padding-right: 0px !important;\n}\n\n.sub-header .doodle {\n  font-size: 72px;\n  font-family: \"Lora\", serif;\n  color: #f0f0f0;\n  text-align: right;\n  line-height: 90px;\n}\n\n.slick-list {\n  padding: 50px 0px !important;\n}\n\n.recent-article .slick-prev, .recent-article .slick-next {\n  top: -100px;\n}\n\n.slick-slider .slick-slide {\n  padding: 0px;\n}\n\n.main-page {\n  float: none;\n}\n\n.main-page .flying-img {\n  display: none;\n}\n\n.flying-img {\n  position: absolute;\n  width: 150px;\n  z-index: -1;\n  opacity: 0.5;\n  height: 100%;\n  top: 0px;\n}\n\n.flying-img.right-fly {\n  background: url('right.png') repeat-y;\n  right: 0px;\n}\n\n.flying-img.left-fly {\n  background: url('left.png') repeat-y;\n  left: 70px;\n}\n\n.apply-form .row {\n  margin: 0 0 15px !important;\n}\n\n.sign h6 {\n  font-weight: bold;\n}\n\n@media (min-width: 1200px) {\n  .navbar-nav-list.notify-show {\n    display: none;\n  }\n}\n\n@media (max-width: 576px) {\n  .section-about[_ngcontent-tjf-c4], .section-nofify[_ngcontent-tjf-c4], .premian-league[_ngcontent-tjf-c4], .section-events[_ngcontent-tjf-c4], .section-spacing[_ngcontent-tjf-c4] {\n    padding: 30px 0;\n  }\n\n  nav {\n    width: 100% !important;\n  }\n\n  section:first-child {\n    overflow: hidden;\n  }\n\n  .breadcum {\n    margin-left: 15px !important;\n  }\n\n  .row, .row-f {\n    margin: 10px 15px !important;\n  }\n\n  .doodle {\n    display: none;\n  }\n\n  .img-flag, .panel-body {\n    width: 100% !important;\n  }\n\n  .left-space {\n    padding-left: 0px;\n    float: left;\n  }\n\n  .navbar-vertical {\n    display: none;\n  }\n\n  .newsletter .btn {\n    margin: 15px 0 0 0;\n  }\n\n  .slick-slider {\n    width: 90%;\n  }\n\n  .navbar-nav-list.notify-hide {\n    display: none;\n  }\n  .navbar-nav-list.notify-show {\n    display: block;\n    float: none !important;\n    margin: 0 auto;\n  }\n\n  .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n\n  .section-inner-subheader h1, .section-admission h1 {\n    margin-left: 0px !important;\n  }\n\n  .panel {\n    padding: 30px 15px !important;\n  }\n\n  .sign .modal-body {\n    padding: 0px;\n  }\n  .sign h6 {\n    font-weight: bold;\n  }\n\n  .login-form .row {\n    margin-right: -15px !important;\n    margin-left: -15px !important;\n  }\n\n  .apply-form {\n    padding: 1rem 0;\n  }\n  .apply-form .row {\n    display: block;\n  }\n  .apply-form .row .col:first-child {\n    margin-bottom: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXGdpdGh1YlxcYWNhZGVteS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7QUNDRDs7QURFQTtFQUNDLGFBQUE7QUNDRDs7QURDQTtFQUNDLGVBQUE7QUNFRDs7QURBQTtFQUNDLGdCQUFBO0FDR0Q7O0FEREE7RUFDQyxnQkFBQTtBQ0lEOztBREZBO0VBQ0Msa0JBQUE7QUNLRDs7QURIQTtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ01EOztBRExDO0VBQ0MsY0FBQTtBQ09GOztBREpFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNNSDs7QUREQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDSUQ7O0FEQUE7RUFDQyxjQUFBO0FDR0Q7O0FEREE7RUFDQyxtQkFBQTtBQ0lEOztBREZBO0VBQ0MscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0tEOztBREhBO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNNRDs7QURIQTtFQUNDLGVBQUE7RUFDQSwwQkFBQTtBQ01EOztBREpBO0VBQ0MsZUFBQTtFQUNBLDBCQUFBO0FDT0Q7O0FETEE7RUFDQyxlQUFBO0FDUUQ7O0FETkE7RUFDQyxlQUFBO0FDU0Q7O0FEUEE7RUFDQyxlQUFBO0FDVUQ7O0FEUkE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUNXRDs7QURUQTtFQUNDLGlCQUFBO0FDWUQ7O0FEVkE7RUFDQyxrQkFBQTtBQ2FEOztBRFhBO0VBQ0ksY0FBQTtBQ2NKOztBRFhBO0VBQ0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNjRDs7QURaQTtFQUNDLGdCQUFBO0FDZUQ7O0FEYkE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ2dCRDs7QURkQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDaUJEOztBRGZBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNrQkQ7O0FEaEJBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNtQkQ7O0FEZkU7RUFDQSxXQUFBO0FDa0JGOztBRGhCQztFQUNDLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNNLHFCQUFBO0FDa0JSOztBRGhCQztFQUNDLFdBQUE7QUNrQkY7O0FEWkU7RUFDQyxjQUFBO0FDZUg7O0FEWEM7RUFDQyxhQUFBO0VBQ0MsU0FBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtBQ2FIOztBRFpHO0VBQ0MsV0FBQTtBQ2NKOztBRFZDO0VBQ0MsV0FBQTtBQ1lGOztBRFJBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNXRDs7QURWQztFQUNDLGNBQUE7QUNZRjs7QURQQztFQUNDLHNCQUFBO0FDVUY7O0FEUkM7RUFDQyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNVRjs7QURURztFQUNDLFdBQUE7QUNXSjs7QURMRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QURQSTtFQUNJLFdBQUE7QUNTUjs7QURQSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDU1I7O0FETEE7RUFDQyxtQkFBQTtFQUNBLFlBQUE7QUNRRDs7QURMQTtFQUNDLFdBQUE7QUNRRDs7QURIRTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ01IOztBREpFO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0FDTUg7O0FEREE7RUFDQyxnQkFBQTtBQ0lEOztBREhDO0VBQ0Msc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNLRjs7QURKRTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ01IOztBRDBCQztFQUNDLDhCQUFBO0VBQ0EsNkJBQUE7QUN2QkY7O0FEeUJDO0VBQ0csZUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUN2Qko7O0FENEJDO0VBQ0MsNEJBQUE7QUN6QkY7O0FENEJDO0VBQ0MsV0FBQTtBQ3pCRjs7QUQ0QkM7RUFDQyxZQUFBO0FDekJGOztBRDRCQTtFQUNDLFdBQUE7QUN6QkQ7O0FEMEJDO0VBQ0MsYUFBQTtBQ3hCRjs7QUQ0QkE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FDekJEOztBRDBCQztFQUNDLHFDQUFBO0VBQ0EsVUFBQTtBQ3hCRjs7QUQwQkM7RUFDQyxvQ0FBQTtFQUNBLFVBQUE7QUN4QkY7O0FENkJDO0VBQ0MsMkJBQUE7QUMxQkY7O0FEK0JDO0VBQ0MsaUJBQUE7QUM1QkY7O0FEZ0NBO0VBRUU7SUFDRSxhQUFBO0VDOUJGO0FBQ0Y7O0FEaUNBO0VBQ0M7SUFDQyxlQUFBO0VDL0JBOztFRGtDRDtJQUNDLHNCQUFBO0VDL0JBOztFRGlDRDtJQUNDLGdCQUFBO0VDOUJBOztFRGdDRDtJQUNDLDRCQUFBO0VDN0JBOztFRCtCRDtJQUNDLDRCQUFBO0VDNUJBOztFRCtCRDtJQUNDLGFBQUE7RUM1QkE7O0VEK0JEO0lBQ0Msc0JBQUE7RUM1QkE7O0VEOEJEO0lBQ0MsaUJBQUE7SUFDQSxXQUFBO0VDM0JBOztFRDZCRDtJQUNDLGFBQUE7RUMxQkE7O0VENkJBO0lBQ0Msa0JBQUE7RUMxQkQ7O0VENkJEO0lBQ0MsVUFBQTtFQzFCQTs7RUQ0QkE7SUFDQyxhQUFBO0VDekJEO0VEMkJBO0lBQ0UsY0FBQTtJQUNELHNCQUFBO0lBQ0EsY0FBQTtFQ3pCRDs7RUQ0QkQ7SUFDQSxtQkFBQTtJQUNHLGtCQUFBO0VDekJGOztFRDRCRDtJQUNDLDJCQUFBO0VDekJBOztFRDJCRDtJQUNDLDZCQUFBO0VDeEJBOztFRDJCQTtJQUFZLFlBQUE7RUN2Qlo7RUR3QkE7SUFDQyxpQkFBQTtFQ3RCRDs7RUR5QkQ7SUFDQyw4QkFBQTtJQUNFLDZCQUFBO0VDdEJGOztFRHlCRDtJQUNDLGVBQUE7RUN0QkE7RUR1QkE7SUFDQSxjQUFBO0VDckJBO0VEc0JBO0lBQ0MsbUJBQUE7RUNwQkQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcblx0Y29sb3I6IzAwMDtcclxuXHRmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcblx0YmFja2dyb3VuZDojRkZGO1xyXG59XHJcblxyXG4ubGVmdC1zcGFjZXtcclxuXHRwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnNsaWNrLXByZXY6YmVmb3JlLCAuc2xpY2stbmV4dDpiZWZvcmV7XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG5cclxuKntcclxuXHRvdXRsaW5lOm5vbmU7XHJcbn1cclxuYXtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnJlbW92ZS1zY3JvbGx7XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wsIC5idG57XHJcblx0Ym9yZGVyLXJhZGl1czogMDtcclxufVxyXG4udi1mbGV4e1xyXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4uYnJlYWRjdW17XHJcblx0bWFyZ2luLXRvcDoxMTVweDtcclxuXHRtYXJnaW4tbGVmdDo3MHB4O1xyXG5cdGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcblx0c3BhbntcclxuXHRcdG1hcmdpbjowIDE1cHg7XHJcblx0fVxyXG5cdC5pY29uLWV4LXNtYWxse1xyXG5cdFx0c3Zne1xyXG5cdFx0XHR3aWR0aDogMTRweDtcclxuXHRcdFx0aGVpZ2h0OiAxNHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxufVxyXG4uY2xlYXJmaXh7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0ZmxvYXQ6bm9uZTtcclxuXHRcclxufVxyXG5cclxuLnRleHQtaGlnaGxpZ2h0ZXJ7XHJcblx0Y29sb3I6I2JmMjcyZDtcclxufVxyXG4uYmctaGlnaGxpZ2h0ZXJ7XHJcblx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG59XHJcbnVse1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRtYXJnaW46MDtcclxuXHRwYWRkaW5nOjA7XHJcbn1cclxuLmJ0bntcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRwYWRkaW5nOiA1cHggMTBweDtcclxuXHRcclxufVxyXG5oMXtcclxuXHRmb250LXNpemU6NDBweDtcclxuXHRmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxufVxyXG5oMntcclxuXHRmb250LXNpemU6MzRweDtcclxuXHRmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG59XHJcbmgze1xyXG5cdGZvbnQtc2l6ZTozMHB4O1xyXG59XHJcbmg0e1xyXG5cdGZvbnQtc2l6ZToyNnB4O1xyXG59XHJcbmg1e1xyXG5cdGZvbnQtc2l6ZToyMnB4O1xyXG59XHJcbmg2e1xyXG5cdGZvbnQtc2l6ZToxOHB4OyBcclxuXHRsaW5lLWhlaWdodDogMzJweDtcclxufVxyXG5oMXtcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG59XHJcbi5jZW50ZXJ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyOyBcclxufVx0XHJcbi5oZWFkaW5nLWhpZ2hsaWdodHtcclxuICAgIGNvbG9yOiNmN2EwNWM7XHJcbn1cclxuXHJcbnN2ZyB7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbnN2Zzpub3QoOnJvb3QpIHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pY29uLWJpZz5zdmcge1xyXG5cdHdpZHRoOiAxMDBweDtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5pY29uLW1lZGl1bT5zdmcge1xyXG5cdHdpZHRoOiA1MHB4O1xyXG5cdGhlaWdodDogNTBweDtcclxufVxyXG4uaWNvbi1zbWFsbD5zdmcge1xyXG5cdHdpZHRoOiAzNHB4O1xyXG5cdGhlaWdodDogMzRweDtcclxufVxyXG4uaWNvbi1leC1zbWFsbD5zdmcge1xyXG5cdHdpZHRoOiAyNHB4O1xyXG5cdGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLnNlY3Rpb24tYWRtaXNzaW9ue1xyXG5cdFx0LnNsaWNrLXByZXY6YmVmb3JlLCAuc2xpY2stbmV4dDpiZWZvcmV7XHJcblx0XHRjb2xvcjojMDAwO1xyXG5cdH1cclxuXHQuc2xpY2stcHJldiwgLnNsaWNrLW5leHR7XHJcblx0XHRib3R0b206LTBweDtcclxuXHRcdHRvcDphdXRvO1xyXG5cdFx0cmlnaHQ6IDA7XHJcbiAgICAgICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuc2xpY2stcHJldntcclxuXHRcdHJpZ2h0OjI1cHg7XHJcblx0fVxyXG59XHJcblxyXG4ucHJlbWlhbi1sZWFndWV7XHJcblx0LnNsaWNrLXNsaWRlcntcclxuXHRcdC5zbGljay1zbGlkZXtcclxuXHRcdFx0bWFyZ2luOjAgNTBweDtcclxuXHRcdH1cclxuXHR9XHRcclxuXHJcblx0LnNsaWNrLXByZXYsIC5zbGljay1uZXh0e1xyXG5cdFx0Ym90dG9tOiAtMjVweDtcclxuXHRcdFx0dG9wOiBhdXRvO1xyXG5cdFx0XHRyaWdodDogMDtcclxuXHRcdFx0bGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG5cdFx0XHQmOmJlZm9yZXtcdFxyXG5cdFx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0XHRcclxuXHRcdFx0fVxyXG5cdH1cclxuXHQuc2xpY2stcHJldiB7XHJcblx0XHRyaWdodDogMjVweDtcclxuXHR9XHJcblx0XHJcbn1cclxuLnNsaWNrLXNsaWRlciB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdC5zbGljay1zbGlkZXtcclxuXHRcdG1hcmdpbjowIDE1cHg7XHJcblx0fVxyXG4gIH1cclxuXHJcbiAgLnJlY2VudC1hcnRpY2xle1xyXG5cdC5zbGljay1wcmV2e1xyXG5cdFx0cmlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxuXHR9XHJcblx0LnNsaWNrLXByZXYsIC5zbGljay1uZXh0e1xyXG5cdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0Ym90dG9tOiBhdXRvO1xyXG5cdFx0dG9wOiAtMjVweDtcclxuXHRcdHJpZ2h0OiAxNXB4O1xyXG5cdFx0bGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZzogMHB4IDI1cHg7XHJcblx0XHRcdCY6YmVmb3Jle1x0XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFxyXG5cdFx0XHR9XHJcblx0fSAgXHJcbiAgfVxyXG5cclxuICAuaW5uZXItYmFubmVye1xyXG4gICAgbWFyZ2luLXRvcDo3MHB4O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuICAgIC5wYWdlLXRpdGxle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDYwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDpyZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA3MHB4IDA7XHJcbiAgICAgICAgY29sb3I6IzIxNGY3YTtcclxuICAgIH1cclxufVxyXG5cclxudGV4dGFyZWEuZm9ybS1jb250cm9se1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0cmVzaXplOiBub25lO1xyXG59XHJcblxyXG5pbWd7XHJcblx0d2lkdGg6MTAwJTtcclxufVxyXG5cclxuLm1haW4tYmFubmVye1xyXG5cdC5jYXJvdXNlbC1jYXB0aW9ue1xyXG5cdFx0aDN7XHJcblx0XHRcdGNvbG9yOiNiZjI3MmQ7XHJcblx0XHRcdGZvbnQtc2l6ZTo0MHB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuXHRcdH1cclxuXHRcdHB7XHJcblx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxudWwubGlzdHtcclxuXHRtYXJnaW4tdG9wOjM1cHg7XHJcblx0bGl7XHJcblx0XHRwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xyXG5cdFx0bGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0dG9wOjhweDtcclxuXHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdHdpZHRoOiAxMHB4OyBcclxuXHRcdFx0aGVpZ2h0OjEwcHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gLmNvbCwgLmNvbC0xLCAuY29sLTEwLCAuY29sLTExLCAuY29sLTEyLCAuY29sLTIsIC5jb2wtMywgLmNvbC00LCAuY29sLTUsIC5jb2wtNiwgLmNvbC03LCAuY29sLTgsIC5jb2wtOSwgLmNvbC1hdXRvLCAuY29sLWxnLCAuY29sLWxnLTEsIC5jb2wtbGctMTAsIC5jb2wtbGctMTEsIC5jb2wtbGctMTIsIC5jb2wtbGctMiwgLmNvbC1sZy0zLCAuY29sLWxnLTQsIC5jb2wtbGctNSwgLmNvbC1sZy02LCAuY29sLWxnLTcsIC5jb2wtbGctOCwgLmNvbC1sZy05LCAuY29sLWxnLWF1dG8sIC5jb2wtbWQsIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtbWQtYXV0bywgLmNvbC1zbSwgLmNvbC1zbS0xLCAuY29sLXNtLTEwLCAuY29sLXNtLTExLCAuY29sLXNtLTEyLCAuY29sLXNtLTIsIC5jb2wtc20tMywgLmNvbC1zbS00LCAuY29sLXNtLTUsIC5jb2wtc20tNiwgLmNvbC1zbS03LCAuY29sLXNtLTgsIC5jb2wtc20tOSwgLmNvbC1zbS1hdXRvLCAuY29sLXhsLCAuY29sLXhsLTEsIC5jb2wteGwtMTAsIC5jb2wteGwtMTEsIC5jb2wteGwtMTIsIC5jb2wteGwtMiwgLmNvbC14bC0zLCAuY29sLXhsLTQsIC5jb2wteGwtNSwgLmNvbC14bC02LCAuY29sLXhsLTcsIC5jb2wteGwtOCwgLmNvbC14bC05LCAuY29sLXhsLWF1dG97XHJcbi8vIFx0cGFkZGluZy1yaWdodDogMHB4O1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KXtcclxuLy8gXHQuY29udGFpbmVye1xyXG4vLyBcdHdpZHRoOmNhbGMoNzIwcHggLSA2NHB4KTtcclxuLy8gXHRtYXJnaW4tcmlnaHQ6NjRweDtcclxuLy8gfVxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEobWluLXdpZHRoOiA5OTJweCl7XHJcbi8vIFx0LmNvbnRhaW5lcntcclxuLy8gXHR3aWR0aDpjYWxjKDk2MHB4IC0gNjRweCk7XHJcbi8vIFx0bWFyZ2luLWxlZnQ6NjRweDtcclxuLy8gfVxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEobWluLXdpZHRoOiAxMjAwcHgpe1xyXG4vLyBcdC5jb250YWluZXJ7XHJcbi8vIFx0d2lkdGg6Y2FsYygxMTQwcHggLSA2NHB4KTtcclxuLy8gXHRtYXJnaW4tbGVmdDo2NHB4O1xyXG4vLyB9XHJcbi8vIH1cclxuXHJcbi5zdWItaGVhZGVye1xyXG5cdC5wYW5lbHtcclxuXHRcdHBhZGRpbmctYm90dG9tOjBweCAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZy1yaWdodDowcHggIWltcG9ydGFudDtcclxuXHR9XHJcblx0LmRvb2RsZXtcclxuXHQgICBmb250LXNpemU6IDcycHg7XHJcblx0ICAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuXHQgICBjb2xvcjojZjBmMGYwO1xyXG5cdCAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdCAgIGxpbmUtaGVpZ2h0OiA5MHB4O1xyXG5cdH1cclxufVxyXG5cclxuXHJcblx0LnNsaWNrLWxpc3R7XHJcblx0XHRwYWRkaW5nOjUwcHggMHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQucmVjZW50LWFydGljbGUgLnNsaWNrLXByZXYsIC5yZWNlbnQtYXJ0aWNsZSAuc2xpY2stbmV4dHtcclxuXHRcdHRvcDogLTEwMHB4O1xyXG5cdH1cclxuXHJcblx0LnNsaWNrLXNsaWRlciAuc2xpY2stc2xpZGV7XHJcblx0XHRwYWRkaW5nOjBweDtcclxuXHR9XHJcblxyXG4ubWFpbi1wYWdle1xyXG5cdGZsb2F0Om5vbmU7XHJcblx0LmZseWluZy1pbWd7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG59XHJcblxyXG4uZmx5aW5nLWltZ3tcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6MTUwcHg7XHJcblx0ei1pbmRleDogLTE7XHJcblx0b3BhY2l0eTogMC41O1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdHRvcDowcHg7XHJcblx0Ji5yaWdodC1mbHl7XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9mbHlpbmcvcmlnaHQucG5nKSByZXBlYXQteTtcclxuXHRcdHJpZ2h0OjBweDtcclxuXHR9XHJcblx0Ji5sZWZ0LWZseXtcclxuXHRcdGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2ZseWluZy9sZWZ0LnBuZykgcmVwZWF0LXk7XHJcblx0XHRsZWZ0OjcwcHg7XHJcblx0fVxyXG59XHJcblxyXG4uYXBwbHktZm9ybXtcclxuXHQucm93e1xyXG5cdFx0bWFyZ2luOjAgMCAxNXB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcblxyXG4uc2lnbntcclxuXHRoNntcclxuXHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXtcclxuXHQubmF2YmFyLW5hdi1saXN0e1xyXG5cdFx0Ji5ub3RpZnktc2hvd3tcclxuXHRcdCAgZGlzcGxheTogbm9uZTtcclxuXHQgIH1cclxuXHR9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQuc2VjdGlvbi1hYm91dFtfbmdjb250ZW50LXRqZi1jNF0sIC5zZWN0aW9uLW5vZmlmeVtfbmdjb250ZW50LXRqZi1jNF0sIC5wcmVtaWFuLWxlYWd1ZVtfbmdjb250ZW50LXRqZi1jNF0sIC5zZWN0aW9uLWV2ZW50c1tfbmdjb250ZW50LXRqZi1jNF0sIC5zZWN0aW9uLXNwYWNpbmdbX25nY29udGVudC10amYtYzRdIHtcclxuXHRcdHBhZGRpbmc6IDMwcHggMDtcclxuXHR9XHJcblxyXG5cdG5hdntcclxuXHRcdHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuXHR9XHJcblx0c2VjdGlvbjpmaXJzdC1jaGlsZHtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cdC5icmVhZGN1bXtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5yb3cgLCAucm93LWZ7XHJcblx0XHRtYXJnaW46MTBweCAxNXB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuZG9vZGxle1xyXG5cdFx0ZGlzcGxheTpub25lO1xyXG5cdH1cclxuXHRcclxuXHQuaW1nLWZsYWcsIC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQubGVmdC1zcGFjZXtcclxuXHRcdHBhZGRpbmctbGVmdDogMHB4O1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0fVxyXG5cdC5uYXZiYXItdmVydGljYWx7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG5cdC5uZXdzbGV0dGVyIHtcclxuXHRcdC5idG57XHJcblx0XHRcdG1hcmdpbjoxNXB4IDAgMCAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuc2xpY2stc2xpZGVyIHtcclxuXHRcdHdpZHRoOiA5MCU7fSBcdCAgXHJcblx0Lm5hdmJhci1uYXYtbGlzdHtcclxuXHRcdCYubm90aWZ5LWhpZGV7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblx0XHQmLm5vdGlmeS1zaG93e1xyXG5cdFx0ICBkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0ZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0ICB9XHJcblx0fVxyXG5cdC5jb2wsIC5jb2wtMSwgLmNvbC0xMCwgLmNvbC0xMSwgLmNvbC0xMiwgLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04LCAuY29sLTksIC5jb2wtYXV0bywgLmNvbC1sZywgLmNvbC1sZy0xLCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSwgLmNvbC1sZy1hdXRvLCAuY29sLW1kLCAuY29sLW1kLTEsIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLWF1dG8sIC5jb2wtc20sIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tYXV0bywgLmNvbC14bCwgLmNvbC14bC0xLCAuY29sLXhsLTEwLCAuY29sLXhsLTExLCAuY29sLXhsLTEyLCAuY29sLXhsLTIsIC5jb2wteGwtMywgLmNvbC14bC00LCAuY29sLXhsLTUsIC5jb2wteGwtNiwgLmNvbC14bC03LCAuY29sLXhsLTgsIC5jb2wteGwtOSwgLmNvbC14bC1hdXRve1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblx0fVxyXG5cclxuXHQuc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgaDEsIC5zZWN0aW9uLWFkbWlzc2lvbiBoMXtcclxuXHRcdG1hcmdpbi1sZWZ0OjBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQucGFuZWx7XHJcblx0XHRwYWRkaW5nOjMwcHggMTVweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuc2lnbntcclxuXHRcdC5tb2RhbC1ib2R5e3BhZGRpbmc6MHB4O31cclxuXHRcdGg2e1xyXG5cdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0fVxyXG4gICB9XHJcblx0LmxvZ2luLWZvcm0gLnJvd3tcclxuXHRcdG1hcmdpbi1yaWdodDogLTE1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmFwcGx5LWZvcm0gIHtcclxuXHRcdHBhZGRpbmc6IDFyZW0gMDtcclxuXHRcdC5yb3d7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdC5jb2w6Zmlyc3QtY2hpbGR7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MTVweDtcclxuXHRcdH1cclxuXHR9fVxyXG59IiwiYm9keSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xufVxuXG4ubGVmdC1zcGFjZSB7XG4gIHBhZGRpbmctbGVmdDogNzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2xpY2stcHJldjpiZWZvcmUsIC5zbGljay1uZXh0OmJlZm9yZSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4qIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlbW92ZS1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZm9ybS1jb250cm9sLCAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnYtZmxleCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmJyZWFkY3VtIHtcbiAgbWFyZ2luLXRvcDogMTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xufVxuLmJyZWFkY3VtIHNwYW4ge1xuICBtYXJnaW46IDAgMTVweDtcbn1cbi5icmVhZGN1bSAuaWNvbi1leC1zbWFsbCBzdmcge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuXG4uY2xlYXJmaXgge1xuICBjbGVhcjogYm90aDtcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi50ZXh0LWhpZ2hsaWdodGVyIHtcbiAgY29sb3I6ICNiZjI3MmQ7XG59XG5cbi5iZy1oaWdobGlnaHRlciB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idG4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkaW5nLWhpZ2hsaWdodCB7XG4gIGNvbG9yOiAjZjdhMDVjO1xufVxuXG5zdmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaWNvbi1iaWcgPiBzdmcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5pY29uLW1lZGl1bSA+IHN2ZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5pY29uLXNtYWxsID4gc3ZnIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLmljb24tZXgtc21hbGwgPiBzdmcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uc2VjdGlvbi1hZG1pc3Npb24gLnNsaWNrLXByZXY6YmVmb3JlLCAuc2VjdGlvbi1hZG1pc3Npb24gLnNsaWNrLW5leHQ6YmVmb3JlIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnNsaWNrLXByZXYsIC5zZWN0aW9uLWFkbWlzc2lvbiAuc2xpY2stbmV4dCB7XG4gIGJvdHRvbTogMHB4O1xuICB0b3A6IGF1dG87XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnNsaWNrLXByZXYge1xuICByaWdodDogMjVweDtcbn1cblxuLnByZW1pYW4tbGVhZ3VlIC5zbGljay1zbGlkZXIgLnNsaWNrLXNsaWRlIHtcbiAgbWFyZ2luOiAwIDUwcHg7XG59XG4ucHJlbWlhbi1sZWFndWUgLnNsaWNrLXByZXYsIC5wcmVtaWFuLWxlYWd1ZSAuc2xpY2stbmV4dCB7XG4gIGJvdHRvbTogLTI1cHg7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5wcmVtaWFuLWxlYWd1ZSAuc2xpY2stcHJldjpiZWZvcmUsIC5wcmVtaWFuLWxlYWd1ZSAuc2xpY2stbmV4dDpiZWZvcmUge1xuICBjb2xvcjogIzAwMDtcbn1cbi5wcmVtaWFuLWxlYWd1ZSAuc2xpY2stcHJldiB7XG4gIHJpZ2h0OiAyNXB4O1xufVxuXG4uc2xpY2stc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5zbGljay1zbGlkZXIgLnNsaWNrLXNsaWRlIHtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG5cbi5yZWNlbnQtYXJ0aWNsZSAuc2xpY2stcHJldiB7XG4gIHJpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG4ucmVjZW50LWFydGljbGUgLnNsaWNrLXByZXYsIC5yZWNlbnQtYXJ0aWNsZSAuc2xpY2stbmV4dCB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGJvdHRvbTogYXV0bztcbiAgdG9wOiAtMjVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4IDI1cHg7XG59XG4ucmVjZW50LWFydGljbGUgLnNsaWNrLXByZXY6YmVmb3JlLCAucmVjZW50LWFydGljbGUgLnNsaWNrLW5leHQ6YmVmb3JlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5pbm5lci1iYW5uZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW5uZXItYmFubmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmlubmVyLWJhbm5lciAucGFnZS10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA3MHB4IDA7XG4gIGNvbG9yOiAjMjE0ZjdhO1xufVxuXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICByZXNpemU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi1iYW5uZXIgLmNhcm91c2VsLWNhcHRpb24gaDMge1xuICBjb2xvcjogI2JmMjcyZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbn1cbi5tYWluLWJhbm5lciAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG51bC5saXN0IHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cbnVsLmxpc3QgbGkge1xuICBwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZjtcbn1cbnVsLmxpc3QgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnN1Yi1oZWFkZXIgLnBhbmVsIHtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cbi5zdWItaGVhZGVyIC5kb29kbGUge1xuICBmb250LXNpemU6IDcycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG5cbi5zbGljay1saXN0IHtcbiAgcGFkZGluZzogNTBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlY2VudC1hcnRpY2xlIC5zbGljay1wcmV2LCAucmVjZW50LWFydGljbGUgLnNsaWNrLW5leHQge1xuICB0b3A6IC0xMDBweDtcbn1cblxuLnNsaWNrLXNsaWRlciAuc2xpY2stc2xpZGUge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tYWluLXBhZ2Uge1xuICBmbG9hdDogbm9uZTtcbn1cbi5tYWluLXBhZ2UgLmZseWluZy1pbWcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmx5aW5nLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMC41O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMHB4O1xufVxuLmZseWluZy1pbWcucmlnaHQtZmx5IHtcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvZmx5aW5nL3JpZ2h0LnBuZykgcmVwZWF0LXk7XG4gIHJpZ2h0OiAwcHg7XG59XG4uZmx5aW5nLWltZy5sZWZ0LWZseSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2ZseWluZy9sZWZ0LnBuZykgcmVwZWF0LXk7XG4gIGxlZnQ6IDcwcHg7XG59XG5cbi5hcHBseS1mb3JtIC5yb3cge1xuICBtYXJnaW46IDAgMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaWduIGg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm5hdmJhci1uYXYtbGlzdC5ub3RpZnktc2hvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zZWN0aW9uLWFib3V0W19uZ2NvbnRlbnQtdGpmLWM0XSwgLnNlY3Rpb24tbm9maWZ5W19uZ2NvbnRlbnQtdGpmLWM0XSwgLnByZW1pYW4tbGVhZ3VlW19uZ2NvbnRlbnQtdGpmLWM0XSwgLnNlY3Rpb24tZXZlbnRzW19uZ2NvbnRlbnQtdGpmLWM0XSwgLnNlY3Rpb24tc3BhY2luZ1tfbmdjb250ZW50LXRqZi1jNF0ge1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgfVxuXG4gIG5hdiB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIHNlY3Rpb246Zmlyc3QtY2hpbGQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuYnJlYWRjdW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucm93LCAucm93LWYge1xuICAgIG1hcmdpbjogMTBweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZG9vZGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmltZy1mbGFnLCAucGFuZWwtYm9keSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5sZWZ0LXNwYWNlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC5uYXZiYXItdmVydGljYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubmV3c2xldHRlciAuYnRuIHtcbiAgICBtYXJnaW46IDE1cHggMCAwIDA7XG4gIH1cblxuICAuc2xpY2stc2xpZGVyIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLm5hdmJhci1uYXYtbGlzdC5ub3RpZnktaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubmF2YmFyLW5hdi1saXN0Lm5vdGlmeS1zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmNvbCwgLmNvbC0xLCAuY29sLTEwLCAuY29sLTExLCAuY29sLTEyLCAuY29sLTIsIC5jb2wtMywgLmNvbC00LCAuY29sLTUsIC5jb2wtNiwgLmNvbC03LCAuY29sLTgsIC5jb2wtOSwgLmNvbC1hdXRvLCAuY29sLWxnLCAuY29sLWxnLTEsIC5jb2wtbGctMTAsIC5jb2wtbGctMTEsIC5jb2wtbGctMTIsIC5jb2wtbGctMiwgLmNvbC1sZy0zLCAuY29sLWxnLTQsIC5jb2wtbGctNSwgLmNvbC1sZy02LCAuY29sLWxnLTcsIC5jb2wtbGctOCwgLmNvbC1sZy05LCAuY29sLWxnLWF1dG8sIC5jb2wtbWQsIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtbWQtYXV0bywgLmNvbC1zbSwgLmNvbC1zbS0xLCAuY29sLXNtLTEwLCAuY29sLXNtLTExLCAuY29sLXNtLTEyLCAuY29sLXNtLTIsIC5jb2wtc20tMywgLmNvbC1zbS00LCAuY29sLXNtLTUsIC5jb2wtc20tNiwgLmNvbC1zbS03LCAuY29sLXNtLTgsIC5jb2wtc20tOSwgLmNvbC1zbS1hdXRvLCAuY29sLXhsLCAuY29sLXhsLTEsIC5jb2wteGwtMTAsIC5jb2wteGwtMTEsIC5jb2wteGwtMTIsIC5jb2wteGwtMiwgLmNvbC14bC0zLCAuY29sLXhsLTQsIC5jb2wteGwtNSwgLmNvbC14bC02LCAuY29sLXhsLTcsIC5jb2wteGwtOCwgLmNvbC14bC05LCAuY29sLXhsLWF1dG8ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGgxLCAuc2VjdGlvbi1hZG1pc3Npb24gaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYW5lbCB7XG4gICAgcGFkZGluZzogMzBweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2lnbiAubW9kYWwtYm9keSB7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG4gIC5zaWduIGg2IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5sb2dpbi1mb3JtIC5yb3cge1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hcHBseS1mb3JtIHtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG4gIH1cbiAgLmFwcGx5LWZvcm0gLnJvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmFwcGx5LWZvcm0gLnJvdyAuY29sOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59Il19 */";
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
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        var _this2 = this;

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
              _this2.router.navigate(['/Home'], {
                skipLocationChange: true
              });
            }
          }

          if (_this2.router.url === '/Home') {
            document.body.classList.add('main-page');
          } else {
            document.body.classList.remove('main-page');
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          aos__WEBPACK_IMPORTED_MODULE_3__["init"]();
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


    __webpack_exports__["default"] = ".section-inner-subheader .row-f, .section-inner-subheader .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-inner-subheader .inner-info {\n  background: #fff;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-inner-subheader .panel {\n  background: #fff;\n  padding: 50px;\n  padding-bottom: 0px;\n}\n.section-inner-subheader .panel .panel-body {\n  width: 50%;\n}\n.section-inner-subheader .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n}\n.section-inner-subheader .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-inner-subheader .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-inner-subheader .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-inner-subheader h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-inner-subheader h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-inner-subheader h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-inner-subheader ul.list {\n  margin: 0px;\n}\n.section-inner-subheader ul.list li {\n  color: #000;\n}\n.section-inner-subheader ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n.applycation-rules .btn {\n  padding: 15px 30px;\n  background: #bf272d;\n  font-family: \"Lora\", serif;\n  margin: 0 auto;\n  font-size: 24px;\n  display: block;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbHkvRjpcXGdpdGh1YlxcYWNhZGVteS9zcmNcXGFwcFxcYXBwbHlcXGFwcGx5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHBseS9hcHBseS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLG9CQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVDO0VBQ08sZ0JBQUE7QUNBUjtBREVDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNBRjtBREVDO0VBQ0MsZ0JBQUE7RUFDTSxhQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRENFO0VBQ0MsVUFBQTtBQ0NIO0FEQ0U7RUFDQyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NIO0FEQUc7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDRUo7QURESTtFQUNDLFVBQUE7RUFDQSx3QkFBQTtFQUNHLGVBQUE7QUNHUjtBREFHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRUo7QURHQztFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7QUNERjtBREdDO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNERjtBREVFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQUg7QURHQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDREY7QURHQztFQUNDLFdBQUE7QUNERjtBREVFO0VBQ0MsV0FBQTtBQ0FIO0FEQ0c7RUFDQyxtQkFBQTtBQ0NKO0FES0E7RUFDQyxXQUFBO0VBQ0EsV0FBQTtBQ0ZEO0FER0M7RUFDQyx3QkFBQTtBQ0RGO0FETUM7RUFDTyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNIUjtBRE9BO0VBRUU7SUFDQyxnQkFBQTtFQ0xEO0VET0Q7SUFDQyxpQkFBQTtFQ0xBO0VET0Q7SUFDQyxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VDTEE7RURPRDtJQUNDLFdBQUE7RUNMQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwbHkvYXBwbHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1pbm5lci1zdWJoZWFkZXJ7XHJcblx0LnJvdy1mLCAucm93e1xyXG5cdFx0bWFyZ2luOjcwcHggMCAxMDBweDsgXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5pbm5lci1pbmZve1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDowO1xyXG5cdFx0dG9wOjA7XHJcblx0XHR3aWR0aDogNDAlO1xyXG5cdH1cclxuXHQucGFuZWwge1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6NTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTowcHg7XHJcblx0XHQucGFuZWwtYm9keXtcclxuXHRcdFx0d2lkdGg6NTAlO1xyXG5cdFx0fVxyXG5cdFx0Ji5zdG9yeS1pbmZve1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHQuZmx5aW5nLXBsYW5le1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0XHR0b3A6MHB4O1xyXG5cdFx0XHRcdHN2Z3tcclxuXHRcdFx0XHRcdGZpbGw6ICNmZmY7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICBcdFx0XHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0dG9wOjUwcHg7XHJcblx0XHRcdFx0d2lkdGg6IDNweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdGgxe1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcblx0fVxyXG5cdGgye1xyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTo1cHg7XHJcblx0XHRsaW5lLWhlaWdodDogNjBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdGNvbnRlbnQ6XCIgXCI7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0Ym90dG9tOjA7XHJcblx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0d2lkdGg6NTBweDtcclxuXHRcdFx0aGVpZ2h0OjJweDtcclxuXHRcdFx0YmFja2dyb3VuZDojZjBmMGYwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDowO1xyXG5cdFx0dG9wOjA7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdH1cclxuXHR1bC5saXN0e1xyXG5cdFx0bWFyZ2luOjBweDtcclxuXHRcdGxpe1xyXG5cdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ubW9yZS1pbmZve1xyXG5cdGZsb2F0Om5vbmU7XHJcblx0Y2xlYXI6Ym90aDtcclxuXHRwe1xyXG5cdFx0bWFyZ2luOjUwcHggMCA3MHB4IDc1cHggO1xyXG5cdH1cclxufVxyXG5cclxuLmFwcGx5Y2F0aW9uLXJ1bGVze1xyXG5cdC5idG57XHJcbiAgICAgICAgcGFkZGluZzoxNXB4IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDojYmYyNzJkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdC5zZWN0aW9uLXN0dWR5LWN1bHR1cmV7XHJcblx0XHQucm93LWYsIC5yb3csIGgxe1xyXG5cdFx0XHRtYXJnaW4tbGVmdDowcHg7IFxyXG5cdH1cclxuXHQuYnJlYWRjdW17XHJcblx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwYWRkaW5nOjE1cHg7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcblx0LnBhbmVsLWJvZHl7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxufVxyXG59IiwiLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5yb3ctZiwgLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5yb3cge1xuICBtYXJnaW46IDcwcHggMCAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW1nLWZsYWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA0MCU7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwgLnBhbmVsLWJvZHkge1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbC5zdG9yeS1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwuc3RvcnktaW5mbyAuZmx5aW5nLXBsYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbC5zdG9yeS1pbmZvIC5mbHlpbmctcGxhbmUgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBhbmVsLnN0b3J5LWluZm86OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogNTBweDtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGgxIHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGgyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW1nLWZsYWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgdWwubGlzdCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIHVsLmxpc3QgbGkge1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciB1bC5saXN0IGxpOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuXG4ubW9yZS1pbmZvIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGNsZWFyOiBib3RoO1xufVxuLm1vcmUtaW5mbyBwIHtcbiAgbWFyZ2luOiA1MHB4IDAgNzBweCA3NXB4O1xufVxuXG4uYXBwbHljYXRpb24tcnVsZXMgLmJ0biB7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3ctZiwgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmJyZWFkY3VtIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5pbWctZmxhZyB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsLWJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */";
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


    __webpack_exports__["default"] = ".section-inner-subheader .row-f, .section-inner-subheader .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-inner-subheader .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-inner-subheader .panel p {\n  font-size: 72px;\n  color: #f0f0f0;\n  font-weight: bold;\n}\n.section-inner-subheader .panel .panel-body {\n  width: 50%;\n}\n.section-inner-subheader h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-inner-subheader h6 {\n  margin-left: 65px;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-inner-subheader .inner-contact-info {\n  background: #fff;\n  padding: 50px;\n}\n.section-inner-subheader .inner-contact-info .row {\n  margin: 0px;\n}\n.section-inner-subheader .inner-contact-info p {\n  color: #000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.section-inner-subheader .inner-contact-info p a {\n  color: #000;\n}\n.section-inner-subheader .inner-contact-info .highlighted {\n  color: #bf272d;\n}\n.section-inner-subheader .inner-contact-info .social-net {\n  float: right;\n}\n.section-inner-subheader .inner-contact-info .social-net li {\n  float: left;\n  margin-right: 15px;\n}\n.section-inner-subheader .inner-contact-info .social-net li svg {\n  fill: #bf272d;\n}\n.blob-article {\n  background: #fff;\n  padding: 70px 0px;\n}\n.blob-article h2 {\n  margin-bottom: 70px;\n}\n.blob-article .btn-wrapper {\n  position: relative;\n}\n.blob-article .btn-wrapper .div-btn {\n  background: #fff;\n  padding-left: 20px;\n  float: right;\n  position: relative;\n  z-index: 1;\n}\n.blob-article .btn-wrapper .div-btn .btn {\n  background: #bf272d;\n  padding: 10px 20px;\n}\n.blob-article .btn-wrapper::after {\n  content: \"\";\n  position: absolute;\n  top: 21px;\n  left: 0px;\n  height: 2px;\n  background: #000;\n  width: 100%;\n}\n.recent-article .container {\n  background: #bf272d;\n  margin: 70px auto;\n}\n.recent-article .container h6 {\n  color: #fff;\n  padding-top: 20px;\n}\n.recent-article .container h2 {\n  position: relative;\n  padding: 30px 0 0;\n}\n.recent-article .container h2 span {\n  background: #bf272d;\n  padding-right: 30px;\n  z-index: 2;\n  position: relative;\n  display: inline-block;\n  color: #fff;\n}\n.recent-article .container h2::after {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  height: 1px;\n  width: 100%;\n  background: #fff;\n  content: \"\";\n}\n.recent-article .container .panel {\n  padding: 30px 0;\n  color: #fff;\n  font-family: \"Lora\", serif;\n}\n.recent-article .container .panel h3 {\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  border-bottom: 1px solid #fff;\n}\n.recent-article .container .panel .btn {\n  border: 2px solid #fff;\n  background: none !important;\n}\n@media (max-width: 576px) {\n  .row-f, .row, h1 {\n    margin-left: 0px;\n  }\n\n  .breadcum {\n    margin-left: 15px;\n  }\n\n  .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n\n  .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvYi9GOlxcZ2l0aHViXFxhY2FkZW15L3NyY1xcYXBwXFxibG9iXFxibG9iLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9iL2Jsb2IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxvQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDQUY7QURFQztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtBQ0FGO0FEQ0U7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0g7QURDRTtFQUNDLFVBQUE7QUNDSDtBREVDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ0FGO0FERUM7RUFDQyxpQkFBQTtBQ0FGO0FER0M7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0RGO0FER0M7RUFDQyxnQkFBQTtFQUNBLGFBQUE7QUNERjtBREVFO0VBQ0MsV0FBQTtBQ0FIO0FERUU7RUFDRyxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQUw7QURFSztFQUNDLFdBQUE7QUNBTjtBRElFO0VBQ0MsY0FBQTtBQ0ZIO0FES0U7RUFDQyxZQUFBO0FDSEg7QURJRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FER0k7RUFDQyxhQUFBO0FDREw7QURPQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNKSjtBREtJO0VBQ0ksbUJBQUE7QUNIUjtBREtDO0VBQ0Msa0JBQUE7QUNIRjtBRElFO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNHLFVBQUE7QUNGTjtBREdHO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUU7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNGSDtBRFVJO0VBQ0ksbUJBQUE7RUFDTixpQkFBQTtBQ1BGO0FEUUU7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUNOSDtBRFFRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ05aO0FET1k7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDTGhCO0FET1k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNMaEI7QURRUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNOWjtBRE9ZO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDTGhCO0FET0c7RUFDQyxzQkFBQTtFQUNBLDJCQUFBO0FDTEo7QURZQTtFQUNFO0lBQ0MsZ0JBQUE7RUNURDs7RURXRDtJQUNDLGlCQUFBO0VDUkE7O0VEVUQ7SUFDQyxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VDUEE7O0VEU0Q7SUFDQyxXQUFBO0VDTkE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jsb2IvYmxvYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlcntcclxuXHQucm93LWYsIC5yb3d7XHJcblx0XHRtYXJnaW46NzBweCAwIDEwMHB4OyBcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDQwJTtcclxuXHR9XHJcblx0LnBhbmVsIHtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdHBhZGRpbmc6NTBweDtcclxuXHRcdHB7XHJcblx0XHRcdGZvbnQtc2l6ZTo3MnB4O1xyXG5cdFx0XHRjb2xvcjojZjBmMGYwO1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdH1cclxuXHRcdC5wYW5lbC1ib2R5e1xyXG5cdFx0XHR3aWR0aDo1MCU7XHJcblx0XHR9XHJcblx0fVxyXG5cdGgxe1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcblx0fVxyXG5cdGg2e1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHR9XHJcblxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OjA7XHJcblx0XHR0b3A6MDtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0fVxyXG5cdC5pbm5lci1jb250YWN0LWluZm97XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRwYWRkaW5nOiA1MHB4OyBcclxuXHRcdC5yb3d7XHJcblx0XHRcdG1hcmdpbjowcHg7XHRcclxuXHRcdH1cclxuXHRcdHB7XHJcblx0XHQgICBjb2xvcjojMDAwO1xyXG5cdFx0ICAgZm9udC1zaXplOjE0cHg7IFxyXG5cdFx0ICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG5cdFx0ICAgXHJcblx0XHQgICBhe1xyXG5cdFx0XHQgICBjb2xvcjojMDAwO1xyXG5cclxuXHRcdCAgIH1cclxuXHRcdH1cclxuXHRcdC5oaWdobGlnaHRlZHtcclxuXHRcdFx0Y29sb3I6I2JmMjcyZDtcclxuXHRcdH1cclxuXHJcblx0XHQuc29jaWFsLW5ldHtcclxuXHRcdFx0ZmxvYXQ6cmlnaHQ7XHJcblx0XHRcdGxpe1xyXG5cdFx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OjE1cHg7XHJcblx0XHRcdFx0c3Zne1xyXG5cdFx0XHRcdFx0ZmlsbDojYmYyNzJkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uYmxvYi1hcnRpY2xle1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgcGFkZGluZzo3MHB4IDBweDtcclxuICAgIGgye1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NzBweDtcclxuXHR9XHJcblx0LmJ0bi13cmFwcGVye1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LmRpdi1idG57XHJcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OjIwcHg7XHJcblx0XHRcdGZsb2F0OnJpZ2h0O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0LmJ0bntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdFx0cGFkZGluZzoxMHB4IDIwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCY6OmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDoyMXB4O1xyXG5cdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0aGVpZ2h0OjJweDtcclxuXHRcdFx0YmFja2dyb3VuZDojMDAwO1xyXG5cdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4ucmVjZW50LWFydGljbGV7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdG1hcmdpbjo3MHB4IGF1dG87XHJcblx0XHRoNntcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0cGFkZGluZy10b3A6MjBweDtcclxuXHRcdH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDAgMDtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2JmMjcyZDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MzBweDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOjUwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWx7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MzBweCAwO1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTpcIkxvcmFcIiwgc2VyaWY7XHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MzBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdFx0LmJ0bntcclxuXHRcdFx0XHRib3JkZXI6MnB4IHNvbGlkICNmZmY7XHJcblx0XHRcdFx0YmFja2dyb3VuZDpub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdFx0LnJvdy1mLCAucm93LCBoMXtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4OyBcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG5cdC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcblxyXG59IiwiLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5yb3ctZiwgLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5yb3cge1xuICBtYXJnaW46IDcwcHggMCAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbWctZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDQwJTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCBwIHtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciBoMSB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGg2IHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmltZy1mbGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gcCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyBwIGEge1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5oaWdobGlnaHRlZCB7XG4gIGNvbG9yOiAjYmYyNzJkO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLnNvY2lhbC1uZXQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCBsaSBzdmcge1xuICBmaWxsOiAjYmYyNzJkO1xufVxuXG4uYmxvYi1hcnRpY2xlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNzBweCAwcHg7XG59XG4uYmxvYi1hcnRpY2xlIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbi5ibG9iLWFydGljbGUgLmJ0bi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJsb2ItYXJ0aWNsZSAuYnRuLXdyYXBwZXIgLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLmJsb2ItYXJ0aWNsZSAuYnRuLXdyYXBwZXIgLmRpdi1idG4gLmJ0biB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5ibG9iLWFydGljbGUgLmJ0bi13cmFwcGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMXB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJlY2VudC1hcnRpY2xlIC5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBtYXJnaW46IDcwcHggYXV0bztcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuY29udGFpbmVyIGg2IHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnJlY2VudC1hcnRpY2xlIC5jb250YWluZXIgaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDMwcHggMCAwO1xufVxuLnJlY2VudC1hcnRpY2xlIC5jb250YWluZXIgaDIgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuY29udGFpbmVyIGgyOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29udGVudDogXCJcIjtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuY29udGFpbmVyIC5wYW5lbCB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG59XG4ucmVjZW50LWFydGljbGUgLmNvbnRhaW5lciAucGFuZWwgaDMge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG4ucmVjZW50LWFydGljbGUgLmNvbnRhaW5lciAucGFuZWwgLmJ0biB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5yb3ctZiwgLnJvdywgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cblxuICAuYnJlYWRjdW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgLmltZy1mbGFnIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGFuZWwtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */";
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
              centerPadding: '0px',
              slidesToShow: 1
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
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


    __webpack_exports__["default"] = ".map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n.map::after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-image: linear-gradient(to right, #f1f1f1, rgba(255, 0, 0, 0));\n  width: 50%;\n  height: 100%;\n}\n.map iframe {\n  width: 100%;\n  height: 100%;\n}\n.section-inner-subheader .row-f, .section-inner-subheader .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-inner-subheader .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-inner-subheader .panel p {\n  font-size: 72px;\n  color: #f0f0f0;\n  font-weight: bold;\n}\n.section-inner-subheader .panel .panel-body {\n  width: 50%;\n}\n.section-inner-subheader h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-inner-subheader h6 {\n  margin-left: 65px;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-inner-subheader .inner-contact-info {\n  margin: 50px;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);\n}\n.section-inner-subheader .inner-contact-info .row {\n  margin: 0px;\n}\n.section-inner-subheader .inner-contact-info .contact-form {\n  background: #fff;\n  padding-top: 40px;\n}\n.section-inner-subheader .inner-contact-info .contact-form .row {\n  margin-bottom: 30px;\n}\n.section-inner-subheader .inner-contact-info .contact-form input, .section-inner-subheader .inner-contact-info .contact-form textarea {\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid #d6d6d6;\n  outline: none;\n  padding: 0;\n  box-shadow: none;\n}\n.section-inner-subheader .inner-contact-info .contact-form input:focus, .section-inner-subheader .inner-contact-info .contact-form textarea:focus {\n  border-bottom: 1px solid #007bff;\n}\n.section-inner-subheader .inner-contact-info .contact-form .btn {\n  background: none;\n  border: none;\n  box-shadow: none;\n  float: right;\n}\n.section-inner-subheader .inner-contact-info .contact-form .btn svg {\n  fill: #bf272d;\n  transform: rotate(45deg);\n}\n.section-inner-subheader .inner-contact-info .contact-info {\n  background: url('contact-info.png') repeat-y #bf272d top left;\n  color: #fff;\n}\n.section-inner-subheader .inner-contact-info .contact-info .info-title {\n  padding: 30px 0 40px 120px;\n}\n.section-inner-subheader .inner-contact-info .contact-info .row {\n  margin-bottom: 30px;\n}\n.section-inner-subheader .inner-contact-info .contact-info i {\n  width: 120px;\n  float: left;\n  padding: 0 15px;\n}\n.section-inner-subheader .inner-contact-info .contact-info p {\n  float: left;\n  color: #fff;\n}\n.section-inner-subheader .inner-contact-info .contact-info a {\n  color: #fff;\n}\n.section-inner-subheader .inner-contact-info .contact-info svg {\n  fill: #fff;\n}\n.section-inner-subheader .inner-contact-info p {\n  color: #000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.section-inner-subheader .inner-contact-info p a {\n  color: #000;\n}\n.section-inner-subheader .inner-contact-info .highlighted {\n  color: #bf272d;\n}\n.section-inner-subheader .inner-contact-info .social-net {\n  float: left;\n  margin-bottom: 25px;\n  margin-left: 120px;\n}\n.section-inner-subheader .inner-contact-info .social-net li {\n  float: left;\n  margin-right: 15px;\n}\n.section-inner-subheader .inner-contact-info .social-net li i {\n  width: auto;\n  padding: 0px;\n}\n.flex-end {\n  justify-content: flex-end;\n}\n@media (max-width: 576px) {\n  .row-f, .row, h1 {\n    margin-left: 0px;\n  }\n\n  .breadcum {\n    margin-left: 15px;\n  }\n\n  .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n\n  .panel-body {\n    width: 100%;\n  }\n\n  .contact-info {\n    display: none;\n  }\n\n  form .row {\n    padding: 0px;\n  }\n  form .row .col {\n    margin-bottom: 10px;\n  }\n  form .row:not(:last-child) {\n    display: block;\n    margin-bottom: 15px;\n  }\n\n  .contact-form {\n    padding: 40px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9GOlxcZ2l0aHViXFxhY2FkZW15L3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Q7QURBQztFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esd0VBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0VGO0FEQUM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0VGO0FERUM7RUFDQyxvQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDQ0Y7QURDQztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQUU7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRUg7QURBRTtFQUNDLFVBQUE7QUNFSDtBRENDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0M7RUFDQyxpQkFBQTtBQ0NGO0FERUM7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0FGO0FERUM7RUFDQyxZQUFBO0VBQ0EsMENBQUE7QUNBRjtBRENFO0VBQ0MsV0FBQTtBQ0NIO0FEQ0U7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDQ0g7QURBRztFQUNDLG1CQUFBO0FDRUo7QURBRztFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEREk7RUFDQyxnQ0FBQTtBQ0dMO0FEQUc7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNFSjtBRERJO0VBQ0MsYUFBQTtFQUNBLHdCQUFBO0FDR0w7QURDRTtFQUNDLDZEQUFBO0VBQ0EsV0FBQTtBQ0NIO0FEQUc7RUFDQywwQkFBQTtBQ0VKO0FEQUc7RUFDQyxtQkFBQTtBQ0VKO0FEQUc7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFSjtBREFHO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNFSjtBREFHO0VBQ0MsV0FBQTtBQ0VKO0FEQUc7RUFDQyxVQUFBO0FDRUo7QURDRTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDTDtBRENLO0VBQ0MsV0FBQTtBQ0NOO0FER0U7RUFDQyxjQUFBO0FDREg7QURJRTtFQUNDLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRkg7QURHRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtBQ0RKO0FER0k7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0RMO0FEUUE7RUFFQyx5QkFBQTtBQ05EO0FEU0E7RUFDRTtJQUNDLGdCQUFBO0VDTkQ7O0VEU0Q7SUFDQyxpQkFBQTtFQ05BOztFRFFEO0lBQ0MsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ0xBOztFRE9EO0lBQ0MsV0FBQTtFQ0pBOztFRE1EO0lBQ0MsYUFBQTtFQ0hBOztFRE9BO0lBQ0MsWUFBQTtFQ0pEO0VES0M7SUFDQyxtQkFBQTtFQ0hGO0VES0M7SUFDQyxjQUFBO0lBQ0EsbUJBQUE7RUNIRjs7RURRRDtJQUNDLGlCQUFBO0VDTEE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDowO1xyXG5cdGxlZnQ6MDtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdHotaW5kZXg6LTE7XHJcblx0Jjo6YWZ0ZXJ7XHJcblx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI0MSwyNDEsMjQxLDEpLCByZ2JhKDI1NSwwLDAsMCkpO1xyXG5cdFx0d2lkdGg6NTAlO1xyXG5cdFx0aGVpZ2h0OjEwMCU7XHJcblx0fVxyXG5cdGlmcmFtZXtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxufVxyXG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXJ7XHJcblx0LnJvdy1mLCAucm93e1xyXG5cdFx0bWFyZ2luOjcwcHggMCAxMDBweDsgXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OjA7XHJcblx0XHR0b3A6MDtcclxuXHRcdHdpZHRoOiA0MCU7XHJcblx0fVxyXG5cdC5wYW5lbCB7XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRwYWRkaW5nOjUwcHg7XHJcblx0XHRwe1xyXG5cdFx0XHRmb250LXNpemU6NzJweDtcclxuXHRcdFx0Y29sb3I6I2YwZjBmMDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR9XHJcblx0XHQucGFuZWwtYm9keXtcclxuXHRcdFx0d2lkdGg6NTAlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRoMXtcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdH1cclxuXHRoNntcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0fVxyXG5cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDowO1xyXG5cdFx0dG9wOjA7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdH1cclxuXHQuaW5uZXItY29udGFjdC1pbmZve1xyXG5cdFx0bWFyZ2luOiA1MHB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSgwLDAsMCwuNSk7XHJcblx0XHQucm93e1xyXG5cdFx0XHRtYXJnaW46MHB4O1x0XHJcblx0XHR9XHJcblx0XHQuY29udGFjdC1mb3Jte1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRcdHBhZGRpbmctdG9wOjQwcHg7XHJcblx0XHRcdC5yb3d7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTozMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlucHV0LCB0ZXh0YXJlYXtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q2ZDZkNjtcclxuXHRcdFx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzpub25lO1xyXG5cdFx0XHRcdCY6Zm9jdXN7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwN2JmZjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LmJ0bntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHRcdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzpub25lO1xyXG5cdFx0XHRcdGZsb2F0OnJpZ2h0O1xyXG5cdFx0XHRcdHN2Z3tcclxuXHRcdFx0XHRcdGZpbGw6I2JmMjcyZDtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5jb250YWN0LWluZm97XHJcblx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGFjdC1pbmZvLnBuZykgcmVwZWF0LXkgI2JmMjcyZCB0b3AgbGVmdDtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0LmluZm8tdGl0bGV7XHJcblx0XHRcdFx0cGFkZGluZzozMHB4IDAgNDBweCAxMjBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQucm93e1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206MzBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpe1xyXG5cdFx0XHRcdHdpZHRoOjEyMHB4O1xyXG5cdFx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdHB7XHJcblx0XHRcdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHR9XHJcblx0XHRcdGF7XHJcblx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdmd7XHJcblx0XHRcdFx0ZmlsbDojZmZmO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRwe1xyXG5cdFx0ICAgY29sb3I6IzAwMDtcclxuXHRcdCAgIGZvbnQtc2l6ZToxNHB4OyBcclxuXHRcdCAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuXHRcdCAgIFxyXG5cdFx0ICAgYXtcclxuXHRcdFx0ICAgY29sb3I6IzAwMDtcclxuXHJcblx0XHQgICB9XHJcblx0XHR9XHJcblx0XHQuaGlnaGxpZ2h0ZWR7XHJcblx0XHRcdGNvbG9yOiNiZjI3MmQ7XHJcblx0XHR9XHJcblxyXG5cdFx0LnNvY2lhbC1uZXR7XHJcblx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuXHRcdFx0bGl7XHJcblx0XHRcdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6MTVweDtcclxuXHJcblx0XHRcdFx0aXtcclxuXHRcdFx0XHRcdHdpZHRoOmF1dG87XHJcblx0XHRcdFx0XHRwYWRkaW5nOjBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5mbGV4LWVuZFxyXG57XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHRcdC5yb3ctZiwgLnJvdywgaDF7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjBweDsgXHJcblx0XHRcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG5cdC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcblx0LmNvbnRhY3QtaW5mb3tcclxuXHRcdGRpc3BsYXk6bm9uZTtcclxuXHR9XHJcblxyXG5cdGZvcm17XHJcblx0XHQucm93e1xyXG5cdFx0XHRwYWRkaW5nOjBweDtcclxuXHRcdFx0LmNvbHtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOjEwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0Jjpub3QoOmxhc3QtY2hpbGQpe1xyXG5cdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbToxNXB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuY29udGFjdC1mb3Jte1xyXG5cdFx0cGFkZGluZzo0MHB4IDBweDtcclxuXHR9XHJcblxyXG59IiwiLm1hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cbi5tYXA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMWYxZjEsIHJnYmEoMjU1LCAwLCAwLCAwKSk7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYXAgaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5yb3ctZiwgLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5yb3cge1xuICBtYXJnaW46IDcwcHggMCAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbWctZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDQwJTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCBwIHtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciBoMSB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGg2IHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmltZy1mbGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8ge1xuICBtYXJnaW46IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5yb3cge1xuICBtYXJnaW46IDBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWZvcm0gLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1mb3JtIGlucHV0LCAuc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1mb3JtIHRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q2ZDZkNjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWZvcm0gaW5wdXQ6Zm9jdXMsIC5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwN2JmZjtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWZvcm0gLmJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmNvbnRhY3QtZm9ybSAuYnRuIHN2ZyB7XG4gIGZpbGw6ICNiZjI3MmQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWluZm8ge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9jb250YWN0LWluZm8ucG5nKSByZXBlYXQteSAjYmYyNzJkIHRvcCBsZWZ0O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWluZm8gLmluZm8tdGl0bGUge1xuICBwYWRkaW5nOiAzMHB4IDAgNDBweCAxMjBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWluZm8gLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1pbmZvIGkge1xuICB3aWR0aDogMTIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1pbmZvIHAge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1pbmZvIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWluZm8gc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIHAge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gcCBhIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuaGlnaGxpZ2h0ZWQge1xuICBjb2xvcjogI2JmMjcyZDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IGxpIGkge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uZmxleC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnJvdy1mLCAucm93LCBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuXG4gIC5icmVhZGN1bSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cblxuICAuaW1nLWZsYWcge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWN0LWluZm8ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBmb3JtIC5yb3cge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICBmb3JtIC5yb3cgLmNvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBmb3JtIC5yb3c6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIC5jb250YWN0LWZvcm0ge1xuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xuICB9XG59Il19 */";
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
  "./src/app/curriculum/curriculum.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/curriculum/curriculum.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCurriculumCurriculumComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.the-urriculum .row {\n  margin: 0 0 0 70px;\n  position: relative;\n}\n.the-urriculum .map-marker {\n  margin: 30px 0px;\n}\n.the-urriculum .curriculum-info {\n  margin-bottom: 40px;\n}\n.the-urriculum .curriculum-info .first-child {\n  margin-top: 40px;\n}\n.the-urriculum .curriculum-info .col {\n  border-right: 2px solid #000;\n}\n.the-urriculum .int-curriculum {\n  background: #3e65ac;\n  color: #fff;\n  padding: 20px;\n  margin: 20px 0 70px;\n}\n.the-urriculum .int-curriculum svg {\n  fill: #fff;\n}\n.the-urriculum .int-curriculum .row {\n  margin: 0px;\n}\n.cur-info-slider {\n  /* ACCORDION\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n  /* MQ\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n}\n.cur-info-slider label {\n  cursor: pointer;\n}\n.cur-info-slider ul {\n  list-style: none;\n}\n.cur-info-slider a {\n  text-decoration: none;\n  color: inherit;\n}\n.cur-info-slider input[type=radio] {\n  position: absolute;\n  left: -9999px;\n}\n.cur-info-slider body {\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-height: 100vh;\n  padding: 50px 0;\n  font: 1rem/1.5 \"Muli\", sans-serif;\n}\n.cur-info-slider .accordion {\n  position: relative;\n  width: calc(100% - 20px);\n  min-height: 380px;\n  margin: 0 auto;\n  background: #282828;\n  color: #9b9b9b;\n}\n.cur-info-slider .accordion label {\n  text-align: center;\n}\n.cur-info-slider .accordion,\n.cur-info-slider .accordion li,\n.cur-info-slider .accordion .accordion-title {\n  display: flex;\n}\n.cur-info-slider .accordion li:not(:last-child) {\n  border: 1px solid #292c2d;\n}\n.cur-info-slider .accordion .accordion-title {\n  flex-direction: column;\n  justify-content: space-between;\n  width: 70px;\n  font-size: 1.4rem;\n  font-weight: bold;\n  line-height: normal;\n  padding: 20px 10px;\n  background: #191919;\n  transition: color 0.1s;\n}\n.cur-info-slider .accordion .accordion-title:hover {\n  color: #3e86d2;\n}\n.cur-info-slider .accordion .accordion-heading {\n  display: inline-block;\n  white-space: nowrap;\n  transform-origin: bottom;\n  transform: rotate(-90deg) translate(50%, 50%);\n}\n.cur-info-slider .accordion .accordion-content {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n  padding: 20px;\n}\n.cur-info-slider [value=Animal]:checked ~ .accordion [data-radio=animal],\n.cur-info-slider [value=Plant]:checked ~ .accordion [data-radio=plant],\n.cur-info-slider [value=Space]:checked ~ .accordion [data-radio=space],\n.cur-info-slider [value=River]:checked ~ .accordion [data-radio=river] {\n  flex-grow: 1;\n}\n.cur-info-slider [value=Animal]:checked ~ .accordion [for=animal] + .accordion-content,\n.cur-info-slider [value=Plant]:checked ~ .accordion [for=plant] + .accordion-content,\n.cur-info-slider [value=Space]:checked ~ .accordion [for=space] + .accordion-content,\n.cur-info-slider [value=River]:checked ~ .accordion [for=river] + .accordion-content {\n  display: flex;\n}\n.cur-info-slider [value=Animal]:checked ~ .accordion [for=animal],\n.cur-info-slider [value=Plant]:checked ~ .accordion [for=plant],\n.cur-info-slider [value=Space]:checked ~ .accordion [for=space],\n.cur-info-slider [value=River]:checked ~ .accordion [for=river] {\n  color: #3e86d2;\n}\n@media screen and (max-width: 650px) {\n  .cur-info-slider .accordion {\n    min-height: 0;\n  }\n  .cur-info-slider .accordion,\n.cur-info-slider .accordion li {\n    flex-direction: column;\n  }\n  .cur-info-slider .accordion .accordion-title {\n    flex-direction: row;\n    width: auto;\n  }\n  .cur-info-slider .accordion .accordion-heading {\n    transform: none;\n  }\n  .cur-info-slider .accordion .accordion-title,\n.cur-info-slider .accordion .accordion-content {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmljdWx1bS9jdXJyaWN1bHVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXJyaWN1bHVtL0Y6XFxnaXRodWJcXGFjYWRlbXkvc3JjXFxhcHBcXGN1cnJpY3VsdW1cXGN1cnJpY3VsdW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2Q7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FEQ0o7QUNFRTtFQUNFLGdCQUFBO0FEQUo7QUNHRTtFQUlFLG1CQUFBO0FESko7QUNDSTtFQUNFLGdCQUFBO0FEQ047QUNFSTtFQUNFLDRCQUFBO0FEQU47QUNJRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBREZKO0FDSUk7RUFDRSxVQUFBO0FERk47QUNLSTtFQUNFLFdBQUE7QURITjtBQ1FBO0VBOEJFO3NEQUFBO0VBNEVBO3NEQUFBO0FEM0dGO0FDR0U7RUFDRSxlQUFBO0FEREo7QUNJRTtFQUNFLGdCQUFBO0FERko7QUNLRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBREhKO0FDTUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QURKSjtBQ09FO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBRExKO0FDV0U7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FEVEo7QUNXRTtFQUNFLGtCQUFBO0FEVEo7QUNZRTs7O0VBR0UsYUFBQTtBRFZKO0FDYUU7RUFDRSx5QkFBQTtBRFhKO0FDY0U7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBRFpKO0FDZUU7RUFDRSxjQUFBO0FEYko7QUNnQkU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw2Q0FBQTtBRGRKO0FDaUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRGZKO0FDa0JFOzs7O0VBSUUsWUFBQTtBRGhCSjtBQ21CRTs7OztFQUlFLGFBQUE7QURqQko7QUNvQkU7Ozs7RUFJRSxjQUFBO0FEbEJKO0FDdUJFO0VBQ0U7SUFDRSxhQUFBO0VEckJKO0VDd0JFOztJQUVFLHNCQUFBO0VEdEJKO0VDeUJFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0VEdkJKO0VDMEJFO0lBQ0UsZUFBQTtFRHhCSjtFQzJCRTs7SUFFRSxhQUFBO0VEekJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jdXJyaWN1bHVtL2N1cnJpY3VsdW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udGhlLXVycmljdWx1bSAucm93IHtcbiAgbWFyZ2luOiAwIDAgMCA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGhlLXVycmljdWx1bSAubWFwLW1hcmtlciB7XG4gIG1hcmdpbjogMzBweCAwcHg7XG59XG4udGhlLXVycmljdWx1bSAuY3VycmljdWx1bS1pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi50aGUtdXJyaWN1bHVtIC5jdXJyaWN1bHVtLWluZm8gLmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi50aGUtdXJyaWN1bHVtIC5jdXJyaWN1bHVtLWluZm8gLmNvbCB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDA7XG59XG4udGhlLXVycmljdWx1bSAuaW50LWN1cnJpY3VsdW0ge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAyMHB4IDAgNzBweDtcbn1cbi50aGUtdXJyaWN1bHVtIC5pbnQtY3VycmljdWx1bSBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuLnRoZS11cnJpY3VsdW0gLmludC1jdXJyaWN1bHVtIC5yb3cge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmN1ci1pbmZvLXNsaWRlciB7XG4gIC8qIEFDQ09SRElPTlxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbiAgLyogTVFcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG59XG4uY3VyLWluZm8tc2xpZGVyIGxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmN1ci1pbmZvLXNsaWRlciB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uY3VyLWluZm8tc2xpZGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLmN1ci1pbmZvLXNsaWRlciBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTk5OTlweDtcbn1cbi5jdXItaW5mby1zbGlkZXIgYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgZm9udDogMXJlbS8xLjUgXCJNdWxpXCIsIHNhbnMtc2VyaWY7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5hY2NvcmRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgbWluLWhlaWdodDogMzgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xuICBjb2xvcjogIzliOWI5Yjtcbn1cbi5jdXItaW5mby1zbGlkZXIgLmFjY29yZGlvbiBsYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jdXItaW5mby1zbGlkZXIgLmFjY29yZGlvbixcbi5jdXItaW5mby1zbGlkZXIgLmFjY29yZGlvbiBsaSxcbi5jdXItaW5mby1zbGlkZXIgLmFjY29yZGlvbiAuYWNjb3JkaW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jdXItaW5mby1zbGlkZXIgLmFjY29yZGlvbiBsaTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI5MmMyZDtcbn1cbi5jdXItaW5mby1zbGlkZXIgLmFjY29yZGlvbiAuYWNjb3JkaW9uLXRpdGxlIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogNzBweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMxOTE5MTk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5hY2NvcmRpb24gLmFjY29yZGlvbi10aXRsZTpob3ZlciB7XG4gIGNvbG9yOiAjM2U4NmQyO1xufVxuLmN1ci1pbmZvLXNsaWRlciAuYWNjb3JkaW9uIC5hY2NvcmRpb24taGVhZGluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZSg1MCUsIDUwJSk7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5hY2NvcmRpb24gLmFjY29yZGlvbi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jdXItaW5mby1zbGlkZXIgW3ZhbHVlPUFuaW1hbF06Y2hlY2tlZCB+IC5hY2NvcmRpb24gW2RhdGEtcmFkaW89YW5pbWFsXSxcbi5jdXItaW5mby1zbGlkZXIgW3ZhbHVlPVBsYW50XTpjaGVja2VkIH4gLmFjY29yZGlvbiBbZGF0YS1yYWRpbz1wbGFudF0sXG4uY3VyLWluZm8tc2xpZGVyIFt2YWx1ZT1TcGFjZV06Y2hlY2tlZCB+IC5hY2NvcmRpb24gW2RhdGEtcmFkaW89c3BhY2VdLFxuLmN1ci1pbmZvLXNsaWRlciBbdmFsdWU9Uml2ZXJdOmNoZWNrZWQgfiAuYWNjb3JkaW9uIFtkYXRhLXJhZGlvPXJpdmVyXSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5jdXItaW5mby1zbGlkZXIgW3ZhbHVlPUFuaW1hbF06Y2hlY2tlZCB+IC5hY2NvcmRpb24gW2Zvcj1hbmltYWxdICsgLmFjY29yZGlvbi1jb250ZW50LFxuLmN1ci1pbmZvLXNsaWRlciBbdmFsdWU9UGxhbnRdOmNoZWNrZWQgfiAuYWNjb3JkaW9uIFtmb3I9cGxhbnRdICsgLmFjY29yZGlvbi1jb250ZW50LFxuLmN1ci1pbmZvLXNsaWRlciBbdmFsdWU9U3BhY2VdOmNoZWNrZWQgfiAuYWNjb3JkaW9uIFtmb3I9c3BhY2VdICsgLmFjY29yZGlvbi1jb250ZW50LFxuLmN1ci1pbmZvLXNsaWRlciBbdmFsdWU9Uml2ZXJdOmNoZWNrZWQgfiAuYWNjb3JkaW9uIFtmb3I9cml2ZXJdICsgLmFjY29yZGlvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jdXItaW5mby1zbGlkZXIgW3ZhbHVlPUFuaW1hbF06Y2hlY2tlZCB+IC5hY2NvcmRpb24gW2Zvcj1hbmltYWxdLFxuLmN1ci1pbmZvLXNsaWRlciBbdmFsdWU9UGxhbnRdOmNoZWNrZWQgfiAuYWNjb3JkaW9uIFtmb3I9cGxhbnRdLFxuLmN1ci1pbmZvLXNsaWRlciBbdmFsdWU9U3BhY2VdOmNoZWNrZWQgfiAuYWNjb3JkaW9uIFtmb3I9c3BhY2VdLFxuLmN1ci1pbmZvLXNsaWRlciBbdmFsdWU9Uml2ZXJdOmNoZWNrZWQgfiAuYWNjb3JkaW9uIFtmb3I9cml2ZXJdIHtcbiAgY29sb3I6ICMzZTg2ZDI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAuY3VyLWluZm8tc2xpZGVyIC5hY2NvcmRpb24ge1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gIH1cbiAgLmN1ci1pbmZvLXNsaWRlciAuYWNjb3JkaW9uLFxuLmN1ci1pbmZvLXNsaWRlciAuYWNjb3JkaW9uIGxpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jdXItaW5mby1zbGlkZXIgLmFjY29yZGlvbiAuYWNjb3JkaW9uLXRpdGxlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5jdXItaW5mby1zbGlkZXIgLmFjY29yZGlvbiAuYWNjb3JkaW9uLWhlYWRpbmcge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAuY3VyLWluZm8tc2xpZGVyIC5hY2NvcmRpb24gLmFjY29yZGlvbi10aXRsZSxcbi5jdXItaW5mby1zbGlkZXIgLmFjY29yZGlvbiAuYWNjb3JkaW9uLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbn0iLCIudGhlLXVycmljdWx1bSB7XHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDcwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAubWFwLW1hcmtlciB7XHJcbiAgICBtYXJnaW46IDMwcHggMHB4OyBcclxuICB9XHJcblxyXG4gIC5jdXJyaWN1bHVtLWluZm8ge1xyXG4gICAgLmZpcnN0LWNoaWxke1xyXG4gICAgICBtYXJnaW4tdG9wOjQwcHg7XHJcbiAgICB9XHJcbiAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgICAuY29sIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnQtY3VycmljdWx1bSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBtYXJnaW46MjBweCAwIDcwcHg7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgZmlsbDogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAucm93IHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY3VyLWluZm8tc2xpZGVyIHtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTk5OTlweDtcclxuICB9XHJcblxyXG4gIGJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgIGZvbnQ6IDFyZW0vMS41ICdNdWxpJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG5cclxuICAvKiBBQ0NPUkRJT05cclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICAuYWNjb3JkaW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIG1pbi1oZWlnaHQ6IDM4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xyXG4gICAgY29sb3I6ICM5YjliOWI7XHJcbiAgfVxyXG4gIC5hY2NvcmRpb24gbGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFjY29yZGlvbixcclxuICAuYWNjb3JkaW9uIGxpLFxyXG4gIC5hY2NvcmRpb24gLmFjY29yZGlvbi10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLmFjY29yZGlvbiBsaTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOTJjMmQ7XHJcbiAgfVxyXG5cclxuICAuYWNjb3JkaW9uIC5hY2NvcmRpb24tdGl0bGUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcclxuICB9XHJcblxyXG4gIC5hY2NvcmRpb24gLmFjY29yZGlvbi10aXRsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzNlODZkMjtcclxuICB9XHJcblxyXG4gIC5hY2NvcmRpb24gLmFjY29yZGlvbi1oZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZSg1MCUsIDUwJSk7XHJcbiAgfVxyXG5cclxuICAuYWNjb3JkaW9uIC5hY2NvcmRpb24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIFt2YWx1ZT1cIkFuaW1hbFwiXTpjaGVja2Vkfi5hY2NvcmRpb24gW2RhdGEtcmFkaW89XCJhbmltYWxcIl0sXHJcbiAgW3ZhbHVlPVwiUGxhbnRcIl06Y2hlY2tlZH4uYWNjb3JkaW9uIFtkYXRhLXJhZGlvPVwicGxhbnRcIl0sXHJcbiAgW3ZhbHVlPVwiU3BhY2VcIl06Y2hlY2tlZH4uYWNjb3JkaW9uIFtkYXRhLXJhZGlvPVwic3BhY2VcIl0sXHJcbiAgW3ZhbHVlPVwiUml2ZXJcIl06Y2hlY2tlZH4uYWNjb3JkaW9uIFtkYXRhLXJhZGlvPVwicml2ZXJcIl0ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuXHJcbiAgW3ZhbHVlPVwiQW5pbWFsXCJdOmNoZWNrZWR+LmFjY29yZGlvbiBbZm9yPVwiYW5pbWFsXCJdKy5hY2NvcmRpb24tY29udGVudCxcclxuICBbdmFsdWU9XCJQbGFudFwiXTpjaGVja2Vkfi5hY2NvcmRpb24gW2Zvcj1cInBsYW50XCJdKy5hY2NvcmRpb24tY29udGVudCxcclxuICBbdmFsdWU9XCJTcGFjZVwiXTpjaGVja2Vkfi5hY2NvcmRpb24gW2Zvcj1cInNwYWNlXCJdKy5hY2NvcmRpb24tY29udGVudCxcclxuICBbdmFsdWU9XCJSaXZlclwiXTpjaGVja2Vkfi5hY2NvcmRpb24gW2Zvcj1cInJpdmVyXCJdKy5hY2NvcmRpb24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgW3ZhbHVlPVwiQW5pbWFsXCJdOmNoZWNrZWR+LmFjY29yZGlvbiBbZm9yPVwiYW5pbWFsXCJdLFxyXG4gIFt2YWx1ZT1cIlBsYW50XCJdOmNoZWNrZWR+LmFjY29yZGlvbiBbZm9yPVwicGxhbnRcIl0sXHJcbiAgW3ZhbHVlPVwiU3BhY2VcIl06Y2hlY2tlZH4uYWNjb3JkaW9uIFtmb3I9XCJzcGFjZVwiXSxcclxuICBbdmFsdWU9XCJSaXZlclwiXTpjaGVja2Vkfi5hY2NvcmRpb24gW2Zvcj1cInJpdmVyXCJdIHtcclxuICAgIGNvbG9yOiAjM2U4NmQyO1xyXG4gIH1cclxuXHJcbiAgLyogTVFcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgLmFjY29yZGlvbiB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjY29yZGlvbixcclxuICAgIC5hY2NvcmRpb24gbGkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY2NvcmRpb24gLmFjY29yZGlvbi10aXRsZSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY2NvcmRpb24gLmFjY29yZGlvbi1oZWFkaW5nIHtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY2NvcmRpb24gLmFjY29yZGlvbi10aXRsZSxcclxuICAgIC5hY2NvcmRpb24gLmFjY29yZGlvbi1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/curriculum/curriculum.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/curriculum/curriculum.component.ts ***!
    \****************************************************/

  /*! exports provided: CurriculumComponent */

  /***/
  function srcAppCurriculumCurriculumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumComponent", function () {
      return CurriculumComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CurriculumComponent = /*#__PURE__*/function () {
      function CurriculumComponent() {
        _classCallCheck(this, CurriculumComponent);
      }

      _createClass(CurriculumComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CurriculumComponent;
    }();

    CurriculumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-curriculum',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./curriculum.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/curriculum/curriculum.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./curriculum.component.scss */
      "./src/app/curriculum/curriculum.component.scss"))["default"]]
    })], CurriculumComponent);
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


    __webpack_exports__["default"] = "footer {\n  background: #172947;\n  padding: 35px 0 15px;\n}\nfooter .logo {\n  margin-bottom: 15px;\n}\nfooter a {\n  color: #dddddd;\n}\nfooter p {\n  color: #fff;\n}\nfooter address {\n  color: #dddddd;\n}\nfooter h5 {\n  color: #fff;\n}\nfooter ul.footer-li {\n  list-style: none inside;\n  margin: 0;\n  padding: 10px 0;\n  clear: both;\n}\nfooter ul.footer-li li {\n  padding: 10px 0;\n  line-height: 12px;\n}\nfooter ul.footer-li li a.active {\n  color: #f44336;\n}\nfooter .social-net {\n  padding: 0;\n}\nfooter .social-net ul {\n  list-style: none inside;\n  margin-top: 20px;\n  padding: 0;\n  float: left;\n  width: 100%;\n}\nfooter .social-net ul li {\n  float: left;\n  margin-right: 20px;\n}\nfooter .social-net ul li a {\n  color: #fff;\n  font-size: 12px;\n}\nfooter .social-net ul li svg {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n}\n.contact-info {\n  background: #e8e8e8;\n  padding: 30px 0;\n}\n.contact-info p, .contact-info a {\n  color: #000;\n  font-family: \"Quicksand\", sans-serif;\n}\n.contact-info .social-net {\n  border-left: 1px solid #ccc;\n  padding-left: 25px;\n}\n.contact-info .social-net ul {\n  padding: 0;\n  margin: 0;\n}\n.contact-info .social-net ul li {\n  list-style-type: none;\n}\n.contact-info .social-net ul li span {\n  margin-left: 15px;\n  color: #555555;\n}\n.contact-info .social-net ul li svg {\n  fill: #f7a05c;\n}\n@media (max-width: 576px) {\n  .contact-info .social-net {\n    border: none;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Y6XFxnaXRodWJcXGFjYWRlbXkvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQUk7RUFDSSxtQkFBQTtBQ0VSO0FEQUk7RUFDSSxjQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7QUNFUjtBREFJO0VBQ0ksY0FBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0FDRVI7QURBSTtFQUNJLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRVI7QUREUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0daO0FERGdCO0VBQ0ksY0FBQTtBQ0dwQjtBREVJO0VBQ0ksVUFBQTtBQ0FSO0FEQ1E7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ1o7QURBWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0VoQjtBRERnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDR3BCO0FERGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDR3BCO0FESUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNESjtBREVJO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0FDQVI7QURFQztFQUNPLDJCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENFO0VBQ0MsVUFBQTtFQUNBLFNBQUE7QUNDSDtBREFHO0VBQ0MscUJBQUE7QUNFSjtBRERHO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDR0w7QUREZ0I7RUFDSSxhQUFBO0FDR3BCO0FER0E7RUFFUTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VDRFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzE3Mjk0NztcclxuICAgIHBhZGRpbmc6IDM1cHggMCAxNXB4O1xyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogI2RkZGRkZDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgIGFkZHJlc3Mge1xyXG4gICAgICAgIGNvbG9yOiAjZGRkZGRkO1xyXG4gICAgfVxyXG4gICAgaDV7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgIHVsLmZvb3Rlci1saSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZSBpbnNpZGU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvY2lhbC1uZXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmUgaW5zaWRlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFjdC1pbmZve1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICAgIHBhZGRpbmc6MzBweCAwO1xyXG4gICAgcCwgYXtcclxuICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHQuc29jaWFsLW5ldHtcclxuICAgICAgICBib3JkZXItbGVmdDoxcHggc29saWQgI2NjYztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MjVweDtcclxuXHRcdHVse1xyXG5cdFx0XHRwYWRkaW5nOjA7XHJcblx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRsaXtcclxuXHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0XHRcdHNwYW57XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdFx0XHRcdFx0Y29sb3I6IzU1NTU1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZjdhMDVjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQgICAgLmNvbnRhY3QtaW5mbyB7XHJcbiAgICAgICAgLnNvY2lhbC1uZXR7XHJcbiAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxNzI5NDc7XG4gIHBhZGRpbmc6IDM1cHggMCAxNXB4O1xufVxuZm9vdGVyIC5sb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmZvb3RlciBhIHtcbiAgY29sb3I6ICNkZGRkZGQ7XG59XG5mb290ZXIgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZm9vdGVyIGFkZHJlc3Mge1xuICBjb2xvcjogI2RkZGRkZDtcbn1cbmZvb3RlciBoNSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZm9vdGVyIHVsLmZvb3Rlci1saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgaW5zaWRlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgY2xlYXI6IGJvdGg7XG59XG5mb290ZXIgdWwuZm9vdGVyLWxpIGxpIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cbmZvb3RlciB1bC5mb290ZXItbGkgbGkgYS5hY3RpdmUge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB7XG4gIHBhZGRpbmc6IDA7XG59XG5mb290ZXIgLnNvY2lhbC1uZXQgdWwge1xuICBsaXN0LXN0eWxlOiBub25lIGluc2lkZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9vdGVyIC5zb2NpYWwtbmV0IHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB1bCBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB1bCBsaSBzdmcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmaWxsOiAjZmZmO1xufVxuXG4uY29udGFjdC1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgcGFkZGluZzogMzBweCAwO1xufVxuLmNvbnRhY3QtaW5mbyBwLCAuY29udGFjdC1pbmZvIGEge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG59XG4uY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG4uY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQgdWwgbGkgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogIzU1NTU1NTtcbn1cbi5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQgdWwgbGkgc3ZnIHtcbiAgZmlsbDogI2Y3YTA1Yztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59Il19 */";
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


    __webpack_exports__["default"] = "::ng-deep .main-page nav {\n  background-color: #fff !important;\n}\n\nnav {\n  background-color: #f0f0f0;\n  width: calc(100% - 70px);\n  z-index: 9;\n  padding: 10px;\n  position: fixed;\n  top: 0px;\n}\n\nnav li:not(.login) {\n  margin-top: 10px;\n}\n\nnav .logo img {\n  height: 50px;\n  width: auto;\n}\n\nnav .login {\n  margin: 0 15px;\n}\n\nnav .login a {\n  color: #000 !important;\n  text-align: center;\n}\n\nnav .login a svg {\n  fill: #bf272d;\n}\n\nnav .login a:hover {\n  background: none !important;\n}\n\nnav .login.dropping {\n  position: relative;\n}\n\nnav .login.dropping:hover .dropper {\n  display: block;\n}\n\nnav .login .dropper {\n  background: #fff;\n  border-bottom: 2px solid #f44336;\n  box-shadow: 1px 3px 6px rgba(72, 71, 71, 0.3);\n  display: none;\n  position: absolute;\n  top: 62px;\n  right: 0px;\n  width: 260px;\n}\n\nnav .login .dropper a {\n  display: block;\n  border-bottom: 1px solid #ccc;\n}\n\nnav .login .dropper a:hover {\n  color: #ccc;\n}\n\nnav .login .dropper a:last-child {\n  border: none;\n}\n\n.navbar-vertical {\n  position: fixed;\n  z-index: 1030;\n  width: 70px;\n  height: 100vh;\n  background-color: #f0f0f0;\n  top: 0px;\n  left: 0px;\n  padding-left: 15px;\n}\n\n.navbar-vertical a {\n  padding: 0px;\n}\n\n.navbar-vertical .social-net {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n}\n\n.navbar-vertical .social-net li {\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  transform: rotate(180deg);\n  transform-origin: center center;\n  list-style-type: none;\n}\n\n.navbar-vertical .social-net li a {\n  display: block;\n  padding: 0px;\n  margin: 0;\n  margin-right: -5px;\n  color: #000;\n  font-size: 16px;\n  float: left;\n}\n\n.navbar-vertical .social-net li a i {\n  float: left;\n  line-height: 35px;\n}\n\n.navbar-vertical .social-net li a span {\n  margin: 10px;\n  float: left;\n}\n\n.navbar-vertical .social-net li svg {\n  transform: rotate(90deg);\n  fill: #bf272d;\n}\n\n.notice-board {\n  position: fixed;\n  bottom: 10px;\n  left: 3px;\n}\n\n.notice-board i {\n  background: #bf272d;\n  padding: 10px;\n}\n\n.notice-board a {\n  padding: 15px !important;\n}\n\n.notice-board svg {\n  fill: #fff !important;\n  margin: 0 auto;\n  display: block;\n}\n\n::ng-deep .notification-popup.modal {\n  display: flex !important;\n  align-items: center;\n}\n\n::ng-deep .notification-popup.modal .modal-content {\n  background-color: #3e65ac;\n  padding: 0 15px;\n}\n\n::ng-deep .notification-popup.modal .modal-content .modal-title {\n  margin-left: 15px;\n  font-family: \"Lora\", serif;\n  color: #fff;\n}\n\n::ng-deep .notification-popup.modal .modal-content i {\n  margin-top: 9px;\n  display: block;\n}\n\n::ng-deep .notification-popup.modal .modal-content svg {\n  fill: #fff;\n}\n\n::ng-deep .notification-popup.modal .modal-content p {\n  color: #fff;\n  font-size: 28px;\n  align-self: center;\n}\n\n::ng-deep .notification-popup.modal .modal-content .btn {\n  outline: none;\n  background: none;\n  border: 2px solid #fff;\n}\n\n.login-form .row {\n  margin-bottom: 15px;\n}\n\n.login-form:first-child {\n  border-right: 1px solid #ccc;\n}\n\n.login-form .form-check-label {\n  margin-left: 15px;\n}\n\n.navbar-nav-list {\n  float: right;\n  margin-left: auto;\n  list-style-type: none;\n  margin-bottom: 0;\n}\n\n.navbar-nav-list .nav-item {\n  font-size: 14px;\n  float: left;\n}\n\n.navbar-nav-list .nav-item a {\n  padding: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #000;\n  text-decoration: none;\n}\n\n.navbar-nav-list .nav-item a.active, .navbar-nav-list .nav-item a:hover {\n  color: #fff;\n  background: #f44336;\n}\n\n.navbar-nav-list .nav-item.quick-link a {\n  padding-right: 0px;\n}\n\n.navbar-nav-list .nav-item svg {\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n}\n\n.navbar-nav-list .nav-item.social-media svg {\n  width: 24px;\n  height: 24px;\n  margin-right: 5px;\n}\n\n.newsletter {\n  background: #3e65ac;\n  padding: 40px 0;\n}\n\n.newsletter .form-inline {\n  margin: 0 auto;\n}\n\n.newsletter label {\n  color: #000;\n  font-size: 20px;\n  margin-right: 15px;\n}\n\n.newsletter .btn {\n  background: #000;\n  color: #fff;\n  margin-left: 15px;\n  padding: 9px 15px;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\n.overlay {\n  display: none;\n  background: #e1e1e1;\n  position: fixed;\n  width: 100%;\n  height: calc(100vh);\n  top: 0;\n  left: 0;\n  flex-direction: column;\n  /* make main-axis vertical */\n  justify-content: center;\n  /* align items vertically, in this case */\n  align-items: center;\n  /* align items horizontally, in this case */\n}\n\n.overlay.active {\n  display: flex;\n  z-index: 10000;\n}\n\n.overlay img {\n  position: absolute;\n  z-index: -1;\n  opacity: 0.1;\n}\n\n.overlay .close-menu {\n  position: absolute;\n  top: 25px;\n  left: 25px;\n}\n\n.overlay ul.main-nav {\n  float: none;\n}\n\n.overlay ul.main-nav li {\n  float: none;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.overlay ul.main-nav li a {\n  padding: 15px;\n  color: #000;\n  font-size: 18px;\n  font-weight: bold;\n  text-decoration: none;\n}\n\n.overlay ul.main-nav li a:hover, .overlay ul.main-nav li a.active {\n  color: #f44336;\n}\n\n.overlay .general-info-nav {\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n  width: 100%;\n}\n\n.overlay .general-info-nav a {\n  padding: 0 10px;\n}\n\n.overlay .general-info-nav a:hover {\n  color: #f44336;\n}\n\n@media (max-width: 576px) {\n  .login-form:first-child {\n    border-bottom: 1px solid #ccc;\n    border-right: none;\n    padding-bottom: 15px;\n  }\n\n  .header-nav {\n    position: absolute;\n    z-index: 99999999;\n    top: 10px;\n    right: 70px;\n    display: block;\n  }\n  .header-nav .login {\n    margin: 0;\n  }\n  .header-nav .login span {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Y6XFxnaXRodWJcXGFjYWRlbXkvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUNBQUE7QUNBUjs7QURLQTtFQUNRLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FDRlI7O0FESVE7RUFDSSxnQkFBQTtBQ0ZaOztBREtZO0VBQ0ksWUFBQTtFQUNKLFdBQUE7QUNIWjs7QURNUTtFQUVJLGNBQUE7QUNMWjs7QURNWTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUNKaEI7O0FES2dCO0VBQ0ksYUFBQTtBQ0hwQjs7QURLZ0I7RUFDSSwyQkFBQTtBQ0hwQjs7QURNWTtFQUNJLGtCQUFBO0FDSmhCOztBRE1vQjtFQUNJLGNBQUE7QUNKeEI7O0FEUVk7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNOaEI7O0FET2dCO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0FDTHBCOztBRE1vQjtFQUNJLFdBQUE7QUNKeEI7O0FETW9CO0VBQ0ksWUFBQTtBQ0p4Qjs7QURZQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNUSjs7QURVSTtFQUNJLFlBQUE7QUNSUjs7QURXSTtFQUNJLGFBQUE7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0FDVFY7O0FEVVE7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0FDUlY7O0FEU1M7RUFDRyxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1BaOztBRFFZO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDTmhCOztBRFFZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNOaEI7O0FEU1U7RUFDSSx3QkFBQTtFQUNBLGFBQUE7QUNQZDs7QURjQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ1hKOztBRFlJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDVlI7O0FEWUk7RUFDSSx3QkFBQTtBQ1ZSOztBRFlJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ1ZSOztBRGNBO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtBQ1hKOztBRFlBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDVko7O0FEV0k7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ1RSOztBRFdJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNUUjs7QURXSTtFQUNJLFVBQUE7QUNUUjs7QURXSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNUUjs7QURXSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDVFI7O0FEZUk7RUFDSSxtQkFBQTtBQ1pSOztBRGNDO0VBQ08sNEJBQUE7QUNaUjs7QURjSTtFQUNJLGlCQUFBO0FDWlI7O0FEZUE7RUFDUSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDWlI7O0FEYUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ1hSOztBRFlRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ1ZaOztBRFdZO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDVGhCOztBRGNZO0VBQ0ksa0JBQUE7QUNaaEI7O0FEZ0JRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ2RaOztBRGtCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNoQmhCOztBRHVCQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ3BCSjs7QURxQkk7RUFDSSxjQUFBO0FDbkJSOztBRHFCSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNuQlI7O0FEc0JJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ3BCUjs7QUR3QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUF3Qiw0QkFBQTtFQUN4Qix1QkFBQTtFQUF5Qix5Q0FBQTtFQUN6QixtQkFBQTtFQUFxQiwyQ0FBQTtBQ2xCekI7O0FEbUJJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNqQlI7O0FEbUJJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2pCUjs7QURtQkk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDakJSOztBRG1CSztFQUNPLFdBQUE7QUNqQlo7O0FEa0JZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNoQmhCOztBRGlCZ0I7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDZnBCOztBRGdCb0I7RUFDSSxjQUFBO0FDZHhCOztBRG9CUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2xCWjs7QURtQlk7RUFDSSxlQUFBO0FDakJoQjs7QURrQmdCO0VBQ0ksY0FBQTtBQ2hCcEI7O0FEc0JBO0VBR1M7SUFDRyw2QkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7RUNyQlY7O0VEMEJEO0lBQ08sa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFQ3ZCTjtFRHdCTTtJQUNJLFNBQUE7RUN0QlY7RUR1QlU7SUFDSSxhQUFBO0VDckJkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYWluLXBhZ2V7XHJcbiAgICBuYXYgeyAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjBmMGYwO1xyXG4gICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIDcwcHgpO1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgXHJcbiAgICAgICAgbGk6bm90KC5sb2dpbil7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDphdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dpbntcclxuICAgICAgICAgICAgLy8gYm9yZGVyOjFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgICBtYXJnaW46MCAxNXB4O1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6I2JmMjcyZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kcm9wcGluZ3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAuZHJvcHBlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRyb3BwZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDNweCA2cHggcmdiKDcyIDcxIDcxIC8gMzAlKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDYycHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2NjYztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyLXZlcnRpY2FsIHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgei1pbmRleDogMTAzMDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgYXtcclxuICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNvY2lhbC1uZXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MTBweDtcclxuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICBmaWxsOiNiZjI3MmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLm5vdGljZS1ib2FyZHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogM3B4O1xyXG4gICAgaXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcbiAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgfVxyXG4gICAgYXtcclxuICAgICAgICBwYWRkaW5nOjE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHN2Z3tcclxuICAgICAgICBmaWxsOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm5vdGlmaWNhdGlvbi1wb3B1cC5tb2RhbHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi5tb2RhbC1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2U2NWFjO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgLm1vZGFsLXRpdGxle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgfVxyXG4gICAgaXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICBzdmd7XHJcbiAgICAgICAgZmlsbDojZmZmO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyOHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG59fVxyXG5cclxuXHJcbi5sb2dpbi1mb3Jte1xyXG4gICAgLnJvd3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICB9XHJcblx0JjpmaXJzdC1jaGlsZHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jaGVjay1sYWJlbHtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgfVxyXG59XHJcbi5uYXZiYXItbmF2LWxpc3R7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgLm5hdi1pdGVte1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSwgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmNDQzMzY7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgJi5xdWljay1saW5re1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDowcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgJi5zb2NpYWwtbWVkaWF7XHJcbiAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOjI0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5uZXdzbGV0dGVye1xyXG4gICAgYmFja2dyb3VuZDojM2U2NWFjO1xyXG4gICAgcGFkZGluZzo0MHB4IDA7XHJcbiAgICAuZm9ybS1pbmxpbmV7XHJcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcblxyXG4gICAgfVxyXG4gICAgLmJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kOiMwMDA7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6OXB4IDE1cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxufVxyXG5cclxuLm92ZXJsYXl7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgMjI1LCAyMjUpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBtYWtlIG1haW4tYXhpcyB2ZXJ0aWNhbCAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIGFsaWduIGl0ZW1zIHZlcnRpY2FsbHksIGluIHRoaXMgY2FzZSAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogYWxpZ24gaXRlbXMgaG9yaXpvbnRhbGx5LCBpbiB0aGlzIGNhc2UgKi9cclxuICAgICYuYWN0aXZle1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICB6LWluZGV4OjEwMDAwO1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICB9XHJcbiAgICAuY2xvc2UtbWVudXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjI1cHg7XHJcbiAgICAgICAgbGVmdDoyNXB4O1xyXG4gICAgfVxyXG4gICAgIHVsLm1haW4tbmF2e1xyXG4gICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciwgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmNDQzMzY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2VuZXJhbC1pbmZvLW5hdntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206MTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmNDQzMzY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblxyXG4gICAgLmxvZ2luLWZvcm17XHJcbiAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDpub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcblx0LmhlYWRlci1uYXZ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk5OTk5O1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICByaWdodDogNzBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAubG9naW57XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjo6bmctZGVlcCAubWFpbi1wYWdlIG5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxubmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICB6LWluZGV4OiA5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xufVxubmF2IGxpOm5vdCgubG9naW4pIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbm5hdiAubG9nbyBpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxubmF2IC5sb2dpbiB7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxubmF2IC5sb2dpbiBhIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubmF2IC5sb2dpbiBhIHN2ZyB7XG4gIGZpbGw6ICNiZjI3MmQ7XG59XG5uYXYgLmxvZ2luIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5uYXYgLmxvZ2luLmRyb3BwaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubmF2IC5sb2dpbi5kcm9wcGluZzpob3ZlciAuZHJvcHBlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubmF2IC5sb2dpbiAuZHJvcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjQ0MzM2O1xuICBib3gtc2hhZG93OiAxcHggM3B4IDZweCByZ2JhKDcyLCA3MSwgNzEsIDAuMyk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MnB4O1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMjYwcHg7XG59XG5uYXYgLmxvZ2luIC5kcm9wcGVyIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5uYXYgLmxvZ2luIC5kcm9wcGVyIGE6aG92ZXIge1xuICBjb2xvcjogI2NjYztcbn1cbm5hdiAubG9naW4gLmRyb3BwZXIgYTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubmF2YmFyLXZlcnRpY2FsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDMwO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLm5hdmJhci12ZXJ0aWNhbCBhIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLm5hdmJhci12ZXJ0aWNhbCAuc29jaWFsLW5ldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ubmF2YmFyLXZlcnRpY2FsIC5zb2NpYWwtbmV0IGxpIHtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLm5hdmJhci12ZXJ0aWNhbCAuc29jaWFsLW5ldCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm5hdmJhci12ZXJ0aWNhbCAuc29jaWFsLW5ldCBsaSBhIGkge1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG4ubmF2YmFyLXZlcnRpY2FsIC5zb2NpYWwtbmV0IGxpIGEgc3BhbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2YmFyLXZlcnRpY2FsIC5zb2NpYWwtbmV0IGxpIHN2ZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgZmlsbDogI2JmMjcyZDtcbn1cblxuLm5vdGljZS1ib2FyZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAzcHg7XG59XG4ubm90aWNlLWJvYXJkIGkge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm5vdGljZS1ib2FyZCBhIHtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xufVxuLm5vdGljZS1ib2FyZCBzdmcge1xuICBmaWxsOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuOjpuZy1kZWVwIC5ub3RpZmljYXRpb24tcG9wdXAubW9kYWwge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLm5vdGlmaWNhdGlvbi1wb3B1cC5tb2RhbCAubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTY1YWM7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbjo6bmctZGVlcCAubm90aWZpY2F0aW9uLXBvcHVwLm1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbn1cbjo6bmctZGVlcCAubm90aWZpY2F0aW9uLXBvcHVwLm1vZGFsIC5tb2RhbC1jb250ZW50IGkge1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOjpuZy1kZWVwIC5ub3RpZmljYXRpb24tcG9wdXAubW9kYWwgLm1vZGFsLWNvbnRlbnQgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbn1cbjo6bmctZGVlcCAubm90aWZpY2F0aW9uLXBvcHVwLm1vZGFsIC5tb2RhbC1jb250ZW50IHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLm5vdGlmaWNhdGlvbi1wb3B1cC5tb2RhbCAubW9kYWwtY29udGVudCAuYnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbn1cblxuLmxvZ2luLWZvcm0gLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubG9naW4tZm9ybTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG59XG4ubG9naW4tZm9ybSAuZm9ybS1jaGVjay1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubmF2YmFyLW5hdi1saXN0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSBhLmFjdGl2ZSwgLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0ucXVpY2stbGluayBhIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gc3ZnIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbS5zb2NpYWwtbWVkaWEgc3ZnIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5uZXdzbGV0dGVyIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgcGFkZGluZzogNDBweCAwO1xufVxuLm5ld3NsZXR0ZXIgLmZvcm0taW5saW5lIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubmV3c2xldHRlciBsYWJlbCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5uZXdzbGV0dGVyIC5idG4ge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmc6IDlweCAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5vdmVybGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2UxZTFlMTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvKiBtYWtlIG1haW4tYXhpcyB2ZXJ0aWNhbCAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLyogYWxpZ24gaXRlbXMgdmVydGljYWxseSwgaW4gdGhpcyBjYXNlICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIGFsaWduIGl0ZW1zIGhvcml6b250YWxseSwgaW4gdGhpcyBjYXNlICovXG59XG4ub3ZlcmxheS5hY3RpdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbi5vdmVybGF5IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDAuMTtcbn1cbi5vdmVybGF5IC5jbG9zZS1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1cHg7XG4gIGxlZnQ6IDI1cHg7XG59XG4ub3ZlcmxheSB1bC5tYWluLW5hdiB7XG4gIGZsb2F0OiBub25lO1xufVxuLm92ZXJsYXkgdWwubWFpbi1uYXYgbGkge1xuICBmbG9hdDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm92ZXJsYXkgdWwubWFpbi1uYXYgbGkgYSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ub3ZlcmxheSB1bC5tYWluLW5hdiBsaSBhOmhvdmVyLCAub3ZlcmxheSB1bC5tYWluLW5hdiBsaSBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm92ZXJsYXkgLmdlbmVyYWwtaW5mby1uYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5vdmVybGF5IC5nZW5lcmFsLWluZm8tbmF2IGEge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4ub3ZlcmxheSAuZ2VuZXJhbC1pbmZvLW5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubG9naW4tZm9ybTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgLmhlYWRlci1uYXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDcwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhlYWRlci1uYXYgLmxvZ2luIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmhlYWRlci1uYXYgLmxvZ2luIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */";
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
            this.router.navigateByUrl('/JoinThePremiaPride', {
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
          name: 'Curriculum'
        }, {
          name: 'PremiaPartner'
        }, {
          name: 'PremiaEthos'
        }, {
          name: 'JoinThePremiaPride'
        }, {
          name: 'ThePremiaCorner'
        }, {
          name: 'CatchUpOverCoffee'
        }];
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.modalService.open(this.content, {
            size: 'lg',
            windowClass: 'notification-popup'
          });
        }
      }, {
        key: "open",
        value: function open(content) {
          var _this3 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg'
          }).result.then(function (result) {
            _this3.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this3.closeResult = "Dismissed ".concat(_this3.getDismissReason(reason));
          });
        }
      }, {
        key: "notifyOpen",
        value: function notifyOpen(content) {
          var _this4 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg',
            windowClass: 'notification-popup'
          }).result.then(function (result) {
            _this4.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this4.closeResult = "Dismissed ".concat(_this4.getDismissReason(reason));
          });
        }
      }, {
        key: "openlogin",
        value: function openlogin(content) {
          var _this5 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg',
            windowClass: 'sign'
          }).result.then(function (result) {
            _this5.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this5.closeResult = "Dismissed ".concat(_this5.getDismissReason(reason));
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

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('notify', {
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


    __webpack_exports__["default"] = ".section-about, .section-nofify, .premian-league, .section-events, .section-spacing, .testimonials, .partner {\n  padding: 50px 0;\n}\n.section-about h1, .section-nofify h1, .premian-league h1, .section-events h1, .section-spacing h1, .testimonials h1, .partner h1 {\n  margin-bottom: 40px;\n  color: #3e65ac;\n}\n.heading-spacer h1 {\n  margin-bottom: 40px;\n  margin-top: 40px;\n  color: #3e65ac;\n}\n.section-info {\n  background: #3e65ac;\n  position: relative;\n  overflow: hidden;\n  padding: 50px 0;\n}\n.section-info img {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.4;\n}\n.section-info h1, .section-info p {\n  color: #fff;\n}\n.section-info svg {\n  fill: #fff;\n  margin-bottom: 10px;\n}\n.section-info .panel-container {\n  margin: 30px auto 0;\n  display: block;\n  text-align: center;\n}\n.v-align {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 15px 0;\n}\n.section-nofify {\n  background: #3e65ac;\n  padding: 0px;\n  font-family: \"Comic Neue\", cursive;\n}\n.section-nofify .col {\n  padding: 20px 45px;\n}\n.section-nofify .col:nth-child(1) {\n  background: url('wdu-1.png') no-repeat right bottom;\n}\n.section-nofify .col:nth-child(2) {\n  background: url('wdu-2.png') no-repeat right bottom #bf272d;\n}\n.section-nofify .col:nth-child(3) {\n  background: url('wdu-3.png') no-repeat right bottom;\n}\n.section-nofify h5 {\n  display: table;\n  color: #fff;\n}\n.section-nofify h5 span {\n  float: left;\n  position: relative;\n  padding: 0 50px 5px 0;\n}\n.section-nofify h5 span:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n.section-nofify p {\n  color: #fff;\n}\n.section-nofify ul.list li {\n  color: #fff;\n  padding: 0 0 15px 20px;\n  font-size: 14px;\n}\n.section-nofify ul.list li::before {\n  background: #fff;\n  width: 8px;\n  height: 8px;\n}\n.section-admission {\n  background: #ededed;\n}\n.section-admission .admission-flag {\n  position: relative;\n  text-align: center;\n  color: #fff;\n  padding: 25px 0;\n  height: 250px;\n}\n.section-admission .admission-flag .flag-pos {\n  content: \"\";\n  background: #bf272d;\n  position: absolute;\n  top: -25px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% + 70px);\n  z-index: 1;\n  box-shadow: 7px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.section-admission .admission-flag .btn {\n  border: 1px solid #fff;\n  color: #fff;\n  background: none;\n}\n.section-admission p {\n  white-space: pre;\n  margin-top: 15px;\n}\n.section-admission .carousel .panel i {\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-admission .carousel .panel svg {\n  width: 75px;\n  height: 75px;\n}\n.section-admission .carousel .panel p {\n  font-size: 20px;\n  font-family: \"Lora\", serif;\n  text-align: center;\n}\n.section-curriculum ul.list li::before {\n  background: #bf272d;\n}\n.section-curriculum .row-f {\n  float: left;\n  width: 100%;\n}\n.section-curriculum .row-f .p0 {\n  padding: 0px;\n}\n.section-curriculum .section-curriculum-list {\n  margin-top: 15px;\n  position: relative;\n}\n.section-curriculum .section-curriculum-list .drop-down {\n  position: absolute;\n  right: 15px;\n  top: 10px;\n  width: auto;\n  transition: 0.1s;\n}\n.section-curriculum .section-curriculum-list.drop-down-active svg {\n  transform: rotate(-180deg);\n}\n.section-curriculum .section-curriculum-list.nav-pills li .nav-link {\n  color: #000;\n  padding-left: 50px;\n  position: relative;\n  margin-bottom: 30px;\n}\n.section-curriculum .section-curriculum-list.nav-pills li .nav-link.active {\n  background: none;\n  color: #3e65ac;\n}\n.section-curriculum .section-curriculum-list.nav-pills li .nav-link.active::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 17px;\n  width: 40px;\n  height: 2px;\n  background: #3e65ac;\n}\n.section-curriculum .curriculum-info {\n  margin-top: -50px;\n  background: #fff;\n  padding: 30px;\n  color: #000;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 16px;\n}\n.section-curriculum .curriculum-info h5 {\n  font-weight: bold;\n}\n.section-curriculum .curriculum-info .btn {\n  background: none;\n  border: 2px solid #000;\n  color: #000;\n  float: right;\n  font-family: \"Lora\", serif;\n}\n.section-curriculum .curriculum-info p {\n  font-size: 14px;\n}\n.section-curriculum .curriculum-info ul.list li {\n  color: #000;\n}\n.section-curriculum .text-highlighter:after {\n  content: \" \";\n  float: left;\n  width: 40px;\n  height: 2px;\n  background: #3e65ac;\n  margin: 10px 0px 0 -45px;\n}\n.partner {\n  margin-bottom: 70px;\n  background: #efefef;\n  padding: 30px 0;\n}\n.partner p {\n  font-size: 16px;\n  font-family: \"Quicksand\", sans-serif;\n  color: #fff;\n}\n.partner .panel {\n  height: 300px;\n  position: relative;\n  box-shadow: 2px 1px 4px -2px #3e65ac;\n  background: #fff;\n  padding: 30px;\n}\n.partner .panel:hover .info-view {\n  display: block;\n}\n.partner .img-box {\n  height: 95px;\n  margin-bottom: 25px;\n}\n.partner .img-box img {\n  height: 100%;\n  width: auto;\n  margin: 0 auto;\n  display: block;\n}\n.partner .info-view {\n  padding: 20px;\n  display: none;\n  background: #3e65ac;\n  position: absolute;\n  top: -25px;\n  left: 0px;\n  width: 110%;\n  height: calc(100% + 50px);\n  z-index: 1;\n  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.partner .info-view .img-box {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-bottom: 0;\n  margin-bottom: 20px;\n  background: #fff;\n}\n.partner .info-view p, .partner .info-view h5, .partner .info-view a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.partner .info-view p {\n  font-size: 14px;\n  font-family: \"Quicksand\", sans-serif;\n  word-break: break-all;\n}\n.partner .info-view a {\n  word-break: break-all;\n}\n.partner .info-view h5 {\n  position: relative;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n.partner .info-view h5::after {\n  content: \"\";\n  background: rgba(255, 255, 255, 0.5);\n  height: 1px;\n  width: 50px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.testimonials {\n  background: #3e65ac;\n  padding: 0px;\n}\n.testimonials .img-circle {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  overflow: hidden;\n  margin: 0 auto 20px;\n}\n.testimonials .col {\n  padding: 20px 45px;\n}\n.testimonials .col:nth-child(2) {\n  background: #bf272d;\n}\n.testimonials .col p, .testimonials .col h6 {\n  color: #fff;\n  text-align: center;\n}\n.premian-league {\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.premian-league .col-premia {\n  position: relative;\n}\n.premian-league h6 {\n  position: absolute;\n  top: 100%;\n  left: 0px;\n  text-align: center;\n  width: 100%;\n  line-height: 22px;\n  font-weight: bold;\n  color: #bf272d;\n}\n.premian-league .row {\n  align-items: center;\n  position: relative;\n}\n.premian-league .row .concept {\n  position: absolute;\n  width: 100%;\n}\n.premian-league .row .asset {\n  position: absolute;\n}\n.premian-league .row .asset_2 {\n  background: url('asset-2.png') no-repeat right bottom;\n  left: 10%;\n  top: 20px;\n  width: 84px;\n  height: 84px;\n  -webkit-animation: spin 10s infinite;\n          animation: spin 10s infinite;\n}\n.premian-league .row .asset_3 {\n  background: url('asset-3.png') no-repeat right bottom;\n  left: 50px;\n  top: 10px;\n  width: 50px;\n  height: 32px;\n  -webkit-animation: mymove3 2s infinite;\n          animation: mymove3 2s infinite;\n}\n.premian-league .row .asset_4 {\n  background: url('asset-4.png') no-repeat right bottom;\n  left: 30%;\n  top: 55px;\n  width: 86px;\n  height: 58px;\n  -webkit-animation: mymove4 2s infinite;\n          animation: mymove4 2s infinite;\n}\n.premian-league .row .asset_5 {\n  background: url('asset-5.png') no-repeat right bottom;\n  left: 50%;\n  top: 70px;\n  width: 140px;\n  height: 65px;\n  -webkit-animation: mymove 2s infinite;\n          animation: mymove 2s infinite;\n}\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes mymove3 {\n  from {\n    top: 10px;\n  }\n  to {\n    top: 12px;\n  }\n}\n@keyframes mymove3 {\n  from {\n    top: 10px;\n  }\n  to {\n    top: 12px;\n  }\n}\n@-webkit-keyframes mymove4 {\n  from {\n    top: 55px;\n  }\n  to {\n    top: 60px;\n  }\n}\n@keyframes mymove4 {\n  from {\n    top: 55px;\n  }\n  to {\n    top: 60px;\n  }\n}\n@-webkit-keyframes mymove {\n  from {\n    top: 70px;\n  }\n  to {\n    top: 90px;\n  }\n}\n@keyframes mymove {\n  from {\n    top: 70px;\n  }\n  to {\n    top: 90px;\n  }\n}\n.premian-league .carousel {\n  border-radius: 50%;\n  border: 2px dashed #3e65ac;\n  overflow: hidden;\n  width: 100%;\n  height: 350px;\n  background: #fff;\n  perspective: 1000px;\n}\n.premian-league .carousel .slick-slide {\n  transition: transform 1s;\n  transform-style: preserve-3d;\n  transform: rotateY(-180deg);\n}\n.premian-league .carousel .slick-slide.slick-active {\n  transform: rotateY(0deg);\n}\n.premian-league .carousel h6 {\n  position: absolute;\n  top: 100%;\n  left: 0px;\n  text-align: center;\n  width: 100%;\n  line-height: 22px;\n  font-weight: bold;\n  color: #bf272d;\n}\n.premian-league .col .img-circle {\n  border-radius: 50%;\n  border: 2px dashed #3e65ac;\n  width: 150px;\n  height: 150px;\n  overflow: hidden;\n  margin: 0 auto 20px;\n  padding: 3px;\n}\n.premian-league .col .img-circle img {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n}\n.premian-league .col:last-child .img-circle {\n  width: 350px;\n  height: 350px;\n}\n.clear-float {\n  clear: both;\n  float: none;\n}\n.main-banner {\n  height: 666px;\n  overflow: hidden;\n  margin-top: 70px;\n}\n.main-banner video {\n  width: 100%;\n}\n.the-premia-corner {\n  margin-bottom: 30px;\n}\n.the-premia-corner .col {\n  background: #3e65ac;\n  padding: 15px;\n  border-radius: 15px;\n}\n.the-premia-corner .col img {\n  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.5);\n  border-radius: 15px;\n}\n.the-premia-corner .col h4 {\n  color: #fff;\n  font-weight: bold;\n  margin-top: 15px;\n}\n.newsletter {\n  background: #3e65ac;\n  padding: 40px 15px;\n}\n.newsletter .form-inline {\n  margin: 0 auto;\n}\n.newsletter label {\n  color: #000;\n  font-size: 20px;\n  margin-right: 15px;\n}\n.newsletter .btn {\n  background: #000;\n  color: #fff;\n  margin-left: 15px;\n  padding: 9px 15px;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n@media (max-width: 576px) {\n  .section-admission .admission-flag .flag-pos {\n    top: 0;\n    left: 0;\n    height: auto;\n  }\n\n  .section-curriculum-list {\n    transition: 1s;\n    display: block;\n    background: #f3f3f3;\n  }\n  .section-curriculum-list a:not(.active) {\n    display: none;\n  }\n  .section-curriculum-list li {\n    width: 100%;\n  }\n  .section-curriculum-list li a {\n    margin: 10px 0 !important;\n  }\n  .section-curriculum-list.drop-down-active a:not(.active) {\n    display: block;\n  }\n\n  .section-curriculum .row-f {\n    width: auto;\n  }\n\n  .section-curriculum .curriculum-info {\n    margin-top: 0px;\n  }\n\n  .section-info {\n    margin-top: 30px;\n    padding-bottom: 0px;\n  }\n  .section-info img {\n    width: auto;\n    height: 100%;\n  }\n  .section-info .panel-container {\n    padding-bottom: 15px;\n    margin-bottom: 30px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  .section-info .panel-container:last-child {\n    margin-bottom: 0;\n    border-bottom: 0;\n  }\n  .section-info svg {\n    width: 75px;\n    height: 75px;\n    margin-bottom: 30px;\n  }\n  .section-info .panel {\n    text-align: center;\n  }\n\n  .section-events {\n    width: 100%;\n  }\n  .section-events .events-grid li {\n    width: 100%;\n  }\n  .section-events .events-grid li figure {\n    width: 100%;\n    margin: 0 0 15px 0;\n  }\n\n  .section-curriculum .row-f {\n    margin-bottom: 30px;\n  }\n\n  .main-banner {\n    height: auto;\n  }\n\n  .newsletter .btn {\n    margin: 15px 0 0 0;\n  }\n\n  .premian-league img {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcZ2l0aHViXFxhY2FkZW15L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0FDQ0Q7QURBQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQ0VGO0FER0M7RUFDQyxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FGO0FESUE7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDREQ7QURFQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ0FGO0FER0M7RUFDQyxXQUFBO0FDREY7QURHQztFQUNDLFVBQUE7RUFDQSxtQkFBQTtBQ0RGO0FER0M7RUFDQyxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0RGO0FES0E7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRkQ7QURLQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FDRkQ7QURJQztFQUNDLGtCQUFBO0FDRkY7QURHRTtFQUNDLG1EQUFBO0FDREg7QURHRTtFQUNDLDJEQUFBO0FDREg7QURHRTtFQUNDLG1EQUFBO0FDREg7QURJQztFQUNDLGNBQUE7RUFDQSxXQUFBO0FDRkY7QURHRTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDREg7QURFRztFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FKO0FESUM7RUFDQyxXQUFBO0FDRkY7QURJQztFQUNDLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNGRjtBREdFO0VBQ0MsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0RIO0FETUE7RUFDQyxtQkFBQTtBQ0hEO0FESUM7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRkY7QURHRTtFQUNDLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsK0NBQUE7QUNESDtBREdRO0VBQ0wsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNESDtBRElDO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZGO0FETUc7RUFDQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDSko7QURNRztFQUNDLFdBQUE7RUFDQSxZQUFBO0FDSko7QURNRztFQUNDLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDSko7QURjSTtFQUNDLG1CQUFBO0FDWEw7QURnQkM7RUFDQyxXQUFBO0VBQ0EsV0FBQTtBQ2RGO0FEZUU7RUFDQyxZQUFBO0FDYkg7QURrQkM7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FDaEJGO0FEaUJFO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2ZIO0FEbUJHO0VBQ0MsMEJBQUE7QUNqQko7QURzQkk7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDcEJMO0FEcUJLO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FDbkJOO0FEb0JNO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDbEJQO0FEMkJDO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FDekJGO0FEMEJFO0VBQ0MsaUJBQUE7QUN4Qkg7QUQwQkU7RUFDQyxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ3hCSDtBRDBCRTtFQUNDLGVBQUE7QUN4Qkg7QUQwQkU7RUFDQyxXQUFBO0FDeEJIO0FEOEJHO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUM1Qkg7QURpQ0E7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQzlCRDtBRCtCQztFQUNDLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUM3QkY7QUQrQkM7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQzdCRjtBRCtCRztFQUNDLGNBQUE7QUM3Qko7QURnQ0M7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7QUM5QkY7QUQrQkU7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDSSxjQUFBO0FDN0JQO0FEZ0NDO0VBQ0MsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsK0NBQUE7QUM5QkY7QUQrQkU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUM3Qkg7QUQrQkU7RUFDQywrQkFBQTtBQzdCSDtBRCtCRTtFQUNDLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FDN0JIO0FEZ0NFO0VBQ0MscUJBQUE7QUM5Qkg7QURnQ0U7RUFDQyxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUM5Qkg7QUQrQkc7RUFDQyxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUM3Qko7QURtQ0E7RUFDQyxtQkFBQTtFQUNBLFlBQUE7QUNoQ0Q7QURpQ0M7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQy9CRjtBRGlDQztFQUNDLGtCQUFBO0FDL0JGO0FEZ0NFO0VBQ0MsbUJBQUE7QUM5Qkg7QURnQ0U7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7QUM5Qkg7QURtQ0E7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2hDRDtBRGlDQztFQUNDLGtCQUFBO0FDL0JGO0FEaUNDO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDL0JGO0FEa0NDO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtBQ2hDRjtBRGlDRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtBQy9CSDtBRGlDRTtFQUNDLGtCQUFBO0FDL0JIO0FEaUNFO0VBQ0MscURBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQy9CSDtBRGlDRTtFQUNDLHFEQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUMvQkg7QURpQ0U7RUFDQyxxREFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FDL0JIO0FEaUNFO0VBQ0MscURBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQy9CSDtBRGtDRTtFQUNDO0lBQUssdUJBQUE7RUMvQk47RURnQ0M7SUFBTyx5QkFBQTtFQzdCUjtBQUNGO0FEMEJFO0VBQ0M7SUFBSyx1QkFBQTtFQy9CTjtFRGdDQztJQUFPLHlCQUFBO0VDN0JSO0FBQ0Y7QUQ4QkU7RUFDQztJQUFNLFNBQUE7RUMzQlA7RUQ0QkM7SUFBTSxTQUFBO0VDekJQO0FBQ0Y7QURzQkU7RUFDQztJQUFNLFNBQUE7RUMzQlA7RUQ0QkM7SUFBTSxTQUFBO0VDekJQO0FBQ0Y7QUQwQkk7RUFDRDtJQUFNLFNBQUE7RUN2QlA7RUR3QkM7SUFBTSxTQUFBO0VDckJQO0FBQ0Y7QURrQkk7RUFDRDtJQUFNLFNBQUE7RUN2QlA7RUR3QkM7SUFBTSxTQUFBO0VDckJQO0FBQ0Y7QURzQkU7RUFDQztJQUFNLFNBQUE7RUNuQlA7RURvQkM7SUFBTSxTQUFBO0VDakJQO0FBQ0Y7QURjRTtFQUNDO0lBQU0sU0FBQTtFQ25CUDtFRG9CQztJQUFNLFNBQUE7RUNqQlA7QUFDRjtBRG1CQztFQUNDLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2pCRjtBRGtCRTtFQUVDLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ2pCSDtBRGtCRztFQUNDLHdCQUFBO0FDaEJKO0FEbUJFO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDakJGO0FEcUJDO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNuQkg7QURvQkc7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDbEJKO0FEc0JHO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNwQkg7QUQwQkE7RUFDQyxXQUFBO0VBQ0EsV0FBQTtBQ3ZCRDtBRHlCQTtFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDdEJEO0FEdUJDO0VBQ0MsV0FBQTtBQ3JCRjtBRHlCQTtFQUNDLG1CQUFBO0FDdEJEO0FEdUJDO0VBQ0MsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNyQkY7QURzQkU7RUFDQywwQ0FBQTtFQUNBLG1CQUFBO0FDcEJIO0FEdUJFO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNyQkg7QUQwQkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDdkJKO0FEd0JJO0VBQ0ksY0FBQTtBQ3RCUjtBRHdCSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUN0QlI7QUR5Qkk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDdkJSO0FEMEJBO0VBR0c7SUFDQyxNQUFBO0lBQ0EsT0FBQTtJQUNBLFlBQUE7RUN6QkY7O0VEOEJEO0lBQ0MsY0FBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQzNCQTtFRDRCQTtJQUNDLGFBQUE7RUMxQkQ7RUQ0QkE7SUFDQyxXQUFBO0VDMUJEO0VEMkJDO0lBQ0MseUJBQUE7RUN6QkY7RUQ2QkM7SUFDQyxjQUFBO0VDM0JGOztFRG1DQTtJQUNDLFdBQUE7RUNoQ0Q7O0VEeUNBO0lBQ0MsZUFBQTtFQ3RDRDs7RUQyQ0Q7SUFDQyxnQkFBQTtJQUNBLG1CQUFBO0VDeENBO0VEeUNBO0lBQ0MsV0FBQTtJQUNBLFlBQUE7RUN2Q0Q7RUR5Q0E7SUFDQyxvQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaURBQUE7RUN2Q0Q7RUR3Q0M7SUFDQyxnQkFBQTtJQUNBLGdCQUFBO0VDdENGO0VEeUNBO0lBQ0MsV0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQ3ZDRDtFRHlDQztJQUNBLGtCQUFBO0VDdkNEOztFRDJDRDtJQUNDLFdBQUE7RUN4Q0E7RUQwQ0M7SUFDQyxXQUFBO0VDeENGO0VEeUNFO0lBQ0MsV0FBQTtJQUNBLGtCQUFBO0VDdkNIOztFRDhDQTtJQUNDLG1CQUFBO0VDM0NEOztFRCtDRDtJQUNDLFlBQUE7RUM1Q0E7O0VEK0NBO0lBQ0Msa0JBQUE7RUM1Q0Q7O0VEZ0RBO0lBQ0MsV0FBQTtFQzdDRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tYWJvdXQsIC5zZWN0aW9uLW5vZmlmeSwgLnByZW1pYW4tbGVhZ3VlLCAuc2VjdGlvbi1ldmVudHMsIC5zZWN0aW9uLXNwYWNpbmcsIC50ZXN0aW1vbmlhbHMsIC5wYXJ0bmVye1xyXG5cdHBhZGRpbmc6NTBweCAwO1xyXG5cdGgxe1xyXG5cdFx0bWFyZ2luLWJvdHRvbTo0MHB4O1xyXG5cdFx0Y29sb3I6IzNlNjVhYztcclxuXHR9XHJcbn1cclxuXHJcbi5oZWFkaW5nLXNwYWNlcntcclxuXHRoMXtcclxuXHRcdG1hcmdpbi1ib3R0b206NDBweDtcclxuXHRcdG1hcmdpbi10b3A6NDBweDtcclxuXHRcdGNvbG9yOiMzZTY1YWM7XHJcblx0fVxyXG59XHJcblxyXG4uc2VjdGlvbi1pbmZve1xyXG5cdGJhY2tncm91bmQ6IzNlNjVhYztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdHBhZGRpbmc6NTBweCAwO1xyXG5cdGltZ3tcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdG9wYWNpdHk6LjQ7XHJcblx0fVxyXG5cdFxyXG5cdGgxLCBwe1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHR9XHJcblx0c3Zne1xyXG5cdFx0ZmlsbDojZmZmO1xyXG5cdFx0bWFyZ2luLWJvdHRvbToxMHB4O1xyXG5cdH1cclxuXHQucGFuZWwtY29udGFpbmVye1xyXG5cdFx0bWFyZ2luOiAzMHB4IGF1dG8gMDtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxufVxyXG5cclxuLnYtYWxpZ257XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdHBhZGRpbmc6MTVweCAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi1ub2ZpZnl7XHJcblx0YmFja2dyb3VuZDojM2U2NWFjO1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRmb250LWZhbWlseTogJ0NvbWljIE5ldWUnLCBjdXJzaXZlO1xyXG5cdFxyXG5cdC5jb2x7XHJcblx0XHRwYWRkaW5nOjIwcHggNDVweDtcclxuXHRcdCY6bnRoLWNoaWxkKDEpe1xyXG5cdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3dkdS0xLnBuZykgbm8tcmVwZWF0IHJpZ2h0IGJvdHRvbSA7XHJcblx0XHR9XHJcblx0XHQmOm50aC1jaGlsZCgyKXtcclxuXHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy93ZHUtMi5wbmcpIG5vLXJlcGVhdCByaWdodCBib3R0b20gI2JmMjcyZDtcclxuXHRcdH1cclxuXHRcdCY6bnRoLWNoaWxkKDMpe1xyXG5cdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3dkdS0zLnBuZykgbm8tcmVwZWF0IHJpZ2h0IGJvdHRvbSA7XHJcblx0XHR9XHJcblx0fVxyXG5cdGg1e1xyXG5cdFx0ZGlzcGxheTp0YWJsZTtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRzcGFue1xyXG5cdFx0XHRmbG9hdDpsZWZ0O1xyXG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0cGFkZGluZzowIDUwcHggNXB4IDA7XHJcblx0XHRcdCY6YWZ0ZXJ7IFxyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0XHRib3R0b206MHB4O1xyXG5cdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OjFweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRcdH1cclxuXHRcdH1cdFxyXG5cdH1cclxuXHRwe1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHR9XHJcblx0dWwubGlzdCBsaXtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRwYWRkaW5nOjAgMCAxNXB4IDIwcHg7XHJcblx0XHRmb250LXNpemU6MTRweDtcclxuXHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0XHR3aWR0aDogOHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDhweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5zZWN0aW9uLWFkbWlzc2lvbntcclxuXHRiYWNrZ3JvdW5kOiNlZGVkZWQ7XHJcblx0LmFkbWlzc2lvbi1mbGFne1xyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRwYWRkaW5nOjI1cHggMDtcclxuXHRcdGhlaWdodDoyNTBweDtcclxuXHRcdC5mbGFnLXBvc3tcclxuXHRcdFx0Y29udGVudDonJztcclxuXHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogLTI1cHg7XHJcblx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogY2FsYygxMDAlICsgNzBweCk7XHJcblx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdGJveC1zaGFkb3c6IDdweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdFx0fVxyXG4gICAgICAgIC5idG57XHJcblx0XHRcdGJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwe1xyXG5cdFx0d2hpdGUtc3BhY2U6IHByZTtcclxuXHRcdG1hcmdpbi10b3A6MTVweDtcclxuXHR9XHJcblx0LmNhcm91c2Vse1xyXG5cdFx0LnBhbmVse1xyXG5cdFx0XHRpe1xyXG5cdFx0XHRcdG1hcmdpbjowIGF1dG87XHJcblx0XHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdmd7XHJcblx0XHRcdFx0d2lkdGg6NzVweDtcclxuXHRcdFx0XHRoZWlnaHQ6NzVweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRwe1xyXG5cdFx0XHRcdGZvbnQtc2l6ZToyMHB4O1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5zZWN0aW9uLWN1cnJpY3VsdW17XHJcblx0dWx7XHJcblx0XHQmLmxpc3Qge1xyXG5cdFx0XHRsaXtcclxuXHRcdFx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5yb3ctZntcclxuXHRcdGZsb2F0OmxlZnQ7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0LnAwe1xyXG5cdFx0XHRwYWRkaW5nOjBweDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblx0LnNlY3Rpb24tY3VycmljdWx1bS1saXN0e1xyXG5cdFx0bWFyZ2luLXRvcDoxNXB4O1xyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHQuZHJvcC1kb3due1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHJpZ2h0OjE1cHg7XHJcblx0XHRcdHRvcDoxMHB4O1xyXG5cdFx0XHR3aWR0aDogYXV0bztcclxuXHRcdFx0dHJhbnNpdGlvbjogLjFzO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdCYuZHJvcC1kb3duLWFjdGl2ZXtcclxuXHRcdFx0c3Zne1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQmLm5hdi1waWxsc3tcclxuXHRcdFx0bGl7XHJcblx0XHRcdFx0Lm5hdi1saW5re1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6NTBweDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206MzBweDtcclxuXHRcdFx0XHRcdCYuYWN0aXZle1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjM2U2NWFjO1xyXG5cdFx0XHRcdFx0XHQmOjphZnRlcntcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRsZWZ0OjA7XHJcblx0XHRcdFx0XHRcdFx0dG9wOjE3cHg7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAycHg7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzNlNjVhYztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQuY3VycmljdWx1bS1pbmZve1xyXG5cdFx0bWFyZ2luLXRvcDotNTBweDtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdHBhZGRpbmc6MzBweDtcclxuXHRcdGNvbG9yOiMwMDA7XHJcblx0XHRmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcclxuXHRcdGZvbnQtc2l6ZToxNnB4O1xyXG5cdFx0aDV7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0XHR9XHJcblx0XHQuYnRue1xyXG5cdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHRcdGJvcmRlcjoycHggc29saWQgIzAwMDtcclxuXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0ZmxvYXQ6cmlnaHQ7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcblx0XHR9XHJcblx0XHRwe1xyXG5cdFx0XHRmb250LXNpemU6MTRweDtcclxuXHRcdH1cclxuXHRcdHVsLmxpc3QgbGl7XHJcblx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cclxuXHQudGV4dC1oaWdobGlnaHRlcntcclxuXHRcdFx0JjphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHR3aWR0aDogNDBweDtcclxuXHRcdFx0aGVpZ2h0OiAycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICMzZTY1YWM7XHJcblx0XHRcdG1hcmdpbjogMTBweCAwcHggMCAtNDVweDtcclxuXHRcdFx0fVxyXG5cdFx0fSBcclxufVxyXG5cclxuLnBhcnRuZXJ7XHJcblx0bWFyZ2luLWJvdHRvbTo3MHB4O1xyXG5cdGJhY2tncm91bmQ6I2VmZWZlZjtcclxuXHRwYWRkaW5nOjMwcHggMDtcclxuXHRwe1xyXG5cdFx0Zm9udC1zaXplOjE2cHg7XHRcclxuXHRcdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHR9XHJcblx0LnBhbmVse1xyXG5cdFx0aGVpZ2h0OjMwMHB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0Ym94LXNoYWRvdzogMnB4IDFweCA0cHggLTJweCAjM2U2NWFjO1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0cGFkZGluZzozMHB4O1xyXG5cdFx0Jjpob3ZlcntcclxuXHRcdFx0LmluZm8tdmlld3tcclxuXHRcdFx0XHRkaXNwbGF5OmJsb2NrO31cclxuXHRcdH1cclxuXHR9XHJcblx0LmltZy1ib3h7XHJcblx0XHRoZWlnaHQ6OTVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206MjVweDtcclxuXHRcdGltZ3tcclxuXHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHRcdHdpZHRoOmF1dG87XHJcblx0XHRcdG1hcmdpbjowIGF1dG87XHJcblx0XHQgICAgIGRpc3BsYXk6YmxvY2s7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5pbmZvLXZpZXd7XHJcblx0XHRwYWRkaW5nOjIwcHg7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHRiYWNrZ3JvdW5kOiMzZTY1YWM7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IC0yNXB4O1xyXG5cdFx0bGVmdDogMHB4O1xyXG5cdFx0d2lkdGg6IDExMCU7XHJcblx0XHRoZWlnaHQ6Y2FsYygxMDAlICsgNTBweCk7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDJweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0XHQuaW1nLWJveHtcclxuXHRcdFx0d2lkdGg6NzVweDtcclxuXHRcdFx0aGVpZ2h0Ojc1cHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHRvdmVyZmxvdzpoaWRkZW47XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbToyMHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHR9XHJcblx0XHRwLGg1LGF7XHJcblx0XHRcdGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHRcdH1cclxuXHRcdHB7XHJcblx0XHRcdGZvbnQtc2l6ZToxNHB4O1xyXG5cdFx0XHRmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcclxuXHRcdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdGF7XHJcblx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuXHRcdH1cclxuXHRcdGg1e1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOjEwcHg7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MTBweDtcclxuXHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHRcdFx0XHRoZWlnaHQ6MXB4O1xyXG5cdFx0XHRcdHdpZHRoOjUwcHg7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGJvdHRvbTowO1xyXG5cdFx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnRlc3RpbW9uaWFsc3tcclxuXHRiYWNrZ3JvdW5kOiMzZTY1YWM7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdC5pbWctY2lyY2xle1xyXG5cdFx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0XHR3aWR0aDoxNTBweDtcclxuXHRcdGhlaWdodDoxNTBweDtcclxuXHRcdG92ZXJmbG93OmhpZGRlbjtcclxuXHRcdG1hcmdpbjogMCBhdXRvIDIwcHg7XHJcblx0fVxyXG5cdC5jb2x7XHJcblx0XHRwYWRkaW5nOjIwcHggNDVweDtcclxuXHRcdCY6bnRoLWNoaWxkKDIpe1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHR9XHJcblx0XHRwLCBoNntcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ucHJlbWlhbi1sZWFndWV7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LmNvbC1wcmVtaWF7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHR9XHJcblx0aDZ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6MTAwJTtcclxuXHRcdGxlZnQ6MHB4O1xyXG5cdFx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIycHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGNvbG9yOiNiZjI3MmQ7XHJcblx0fVxyXG5cdFxyXG5cdC5yb3d7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LmNvbmNlcHR7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdH1cclxuXHRcdC5hc3NldHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0fVxyXG5cdFx0LmFzc2V0XzJ7XHJcblx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYXNzZXQtMi5wbmcpIG5vLXJlcGVhdCByaWdodCBib3R0b20gO1xyXG5cdFx0XHRsZWZ0OjEwJTtcclxuXHRcdFx0dG9wOjIwcHg7XHJcblx0XHRcdHdpZHRoOjg0cHg7XHJcblx0XHRcdGhlaWdodDo4NHB4O1xyXG5cdFx0XHRhbmltYXRpb246IHNwaW4gMTBzIGluZmluaXRlO1xyXG5cdFx0fVxyXG5cdFx0LmFzc2V0XzN7XHJcblx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYXNzZXQtMy5wbmcpIG5vLXJlcGVhdCByaWdodCBib3R0b20gO1xyXG5cdFx0XHRsZWZ0OjUwcHg7XHJcblx0XHRcdHRvcDoxMHB4O1xyXG5cdFx0XHR3aWR0aDo1MHB4O1xyXG5cdFx0XHRoZWlnaHQ6MzJweDtcclxuXHRcdFx0YW5pbWF0aW9uOiBteW1vdmUzIDJzIGluZmluaXRlO1xyXG5cdFx0fVxyXG5cdFx0LmFzc2V0XzR7XHJcblx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYXNzZXQtNC5wbmcpIG5vLXJlcGVhdCByaWdodCBib3R0b20gO1xyXG5cdFx0XHRsZWZ0OjMwJTtcclxuXHRcdFx0dG9wOjU1cHg7XHJcblx0XHRcdHdpZHRoOjg2cHg7XHJcblx0XHRcdGhlaWdodDo1OHB4O1xyXG5cdFx0XHRhbmltYXRpb246IG15bW92ZTQgMnMgaW5maW5pdGU7XHJcblx0XHR9XHJcblx0XHQuYXNzZXRfNXtcclxuXHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9hc3NldC01LnBuZykgbm8tcmVwZWF0IHJpZ2h0IGJvdHRvbSA7XHJcblx0XHRcdGxlZnQ6NTAlO1xyXG5cdFx0XHR0b3A6NzBweDtcclxuXHRcdFx0d2lkdGg6MTQwcHg7XHJcblx0XHRcdGhlaWdodDo2NXB4O1xyXG5cdFx0XHRhbmltYXRpb246IG15bW92ZSAycyBpbmZpbml0ZTtcclxuXHRcdH1cclxuXHJcblx0XHRAa2V5ZnJhbWVzIHNwaW4ge1xyXG5cdFx0XHQwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcblx0XHRcdDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcblx0XHR9XHJcblx0XHRAa2V5ZnJhbWVzIG15bW92ZTMge1xyXG5cdFx0XHRmcm9tIHt0b3A6IDEwcHg7fVxyXG5cdFx0XHR0byAgIHt0b3A6IDEycHg7fVxyXG5cdFx0ICB9XHJcblx0XHQgIEBrZXlmcmFtZXMgbXltb3ZlNCB7XHJcblx0XHRcdGZyb20ge3RvcDogNTVweDt9XHJcblx0XHRcdHRvICAge3RvcDogNjBweDt9XHJcblx0XHQgIH1cclxuXHRcdEBrZXlmcmFtZXMgbXltb3ZlIHtcclxuXHRcdFx0ZnJvbSB7dG9wOiA3MHB4O31cclxuXHRcdFx0dG8gICB7dG9wOiA5MHB4O31cclxuXHRcdCAgfVxyXG5cdH1cclxuXHQuY2Fyb3VzZWx7XHJcblx0XHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRcdGJvcmRlcjoycHggZGFzaGVkICMzZTY1YWM7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDM1MHB4O1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0cGVyc3BlY3RpdmU6IDEwMDBweDtcclxuXHRcdC5zbGljay1zbGlkZXtcclxuXHRcdFx0XHJcblx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuXHRcdFx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xyXG5cdFx0XHQmLnNsaWNrLWFjdGl2ZXtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGg2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOjEwMCU7XHJcblx0XHRsZWZ0OjBweDtcclxuXHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjojYmYyNzJkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuY29se1xyXG5cdC5pbWctY2lyY2xle1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRcdFx0Ym9yZGVyOjJweCBkYXNoZWQgIzNlNjVhYztcclxuXHRcdFx0d2lkdGg6MTUwcHg7XHJcblx0XHRcdGhlaWdodDoxNTBweDtcclxuXHRcdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdFx0XHRtYXJnaW46IDAgYXV0byAyMHB4O1xyXG5cdFx0XHRwYWRkaW5nOjNweDtcclxuXHRcdFx0aW1ne1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCY6bGFzdC1jaGlsZHtcclxuXHRcdFx0LmltZy1jaXJjbGV7XHJcblx0XHRcdHdpZHRoOjM1MHB4O1xyXG5cdFx0XHRoZWlnaHQ6MzUwcHg7fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbi5jbGVhci1mbG9hdHtcclxuXHRjbGVhcjpib3RoO1xyXG5cdGZsb2F0Om5vbmU7XHJcbn1cclxuLm1haW4tYmFubmVye1xyXG5cdGhlaWdodDogNjY2cHg7XHRcclxuXHRvdmVyZmxvdzpoaWRkZW47XHJcblx0bWFyZ2luLXRvcDo3MHB4O1xyXG5cdHZpZGVve1xyXG5cdFx0d2lkdGg6MTAwJSA7IFxyXG5cdH1cclxufVxyXG5cclxuLnRoZS1wcmVtaWEtY29ybmVye1xyXG5cdG1hcmdpbi1ib3R0b206MzBweDtcclxuXHQuY29se1xyXG5cdFx0YmFja2dyb3VuZDojM2U2NWFjO1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czoxNXB4O1xyXG5cdFx0aW1ne1xyXG5cdFx0XHRib3gtc2hhZG93OiAxcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6MTVweDtcclxuXHRcdH1cclxuXHJcblx0XHRoNHtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0bWFyZ2luLXRvcDoxNXB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLm5ld3NsZXR0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiMzZTY1YWM7XHJcbiAgICBwYWRkaW5nOjQwcHggMTVweDtcclxuICAgIC5mb3JtLWlubGluZXtcclxuICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgfVxyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuXHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzAwMDtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgcGFkZGluZzo5cHggMTVweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0LnNlY3Rpb24tYWRtaXNzaW9ue1xyXG5cdFx0LmFkbWlzc2lvbi1mbGFne1xyXG5cdFx0XHQuZmxhZy1wb3N7XHJcblx0XHRcdFx0dG9wOjA7XHJcblx0XHRcdFx0bGVmdDowO1xyXG5cdFx0XHRcdGhlaWdodDphdXRvO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3R7IFxyXG5cdFx0dHJhbnNpdGlvbjogMXM7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcclxuXHRcdGE6bm90KC5hY3RpdmUpe1xyXG5cdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHR9XHJcblx0XHRsaXtcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0YXtcclxuXHRcdFx0XHRtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQmLmRyb3AtZG93bi1hY3RpdmV7XHJcblx0XHRcdGE6bm90KC5hY3RpdmUpe1xyXG5cdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdFxyXG5cclxuXHQuc2VjdGlvbi1jdXJyaWN1bHVte1xyXG5cdFx0LnJvdy1me1xyXG5cdFx0XHR3aWR0aDphdXRvO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnRlc3RpbW9uaWFscyB7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdC5zZWN0aW9uLWN1cnJpY3VsdW0ge1xyXG5cdFx0LmN1cnJpY3VsdW0taW5mb3tcclxuXHRcdFx0bWFyZ2luLXRvcDowcHg7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnNlY3Rpb24taW5mb3tcclxuXHRcdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTowcHg7XHJcblx0XHRpbWd7XHJcblx0XHRcdHdpZHRoOmF1dG87XHJcblx0XHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0fVxyXG5cdFx0LnBhbmVsLWNvbnRhaW5lcntcclxuXHRcdFx0cGFkZGluZy1ib3R0b206MTVweDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTozMHB4O1xyXG5cdFx0XHRib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcblx0XHRcdCY6bGFzdC1jaGlsZHtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOjA7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTowO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRzdmd7XHJcblx0XHRcdHdpZHRoOiA3NXB4O1xyXG5cdFx0XHRoZWlnaHQ6IDc1cHg7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MzBweDtcclxuXHRcdH1cclxuXHRcdCAucGFuZWx7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdCB9XHJcblx0fVxyXG5cclxuXHQuc2VjdGlvbi1ldmVudHN7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0LmV2ZW50cy1ncmlke1xyXG5cdFx0XHRsaXtcclxuXHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdGZpZ3VyZXtcclxuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0XHRtYXJnaW46MCAwIDE1cHggMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5zZWN0aW9uLWN1cnJpY3VsdW0ge1xyXG5cdFx0LnJvdy1me1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjMwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQubWFpbi1iYW5uZXJ7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0fVxyXG5cdC5uZXdzbGV0dGVyIHtcclxuXHRcdC5idG57XHJcblx0XHRcdG1hcmdpbjoxNXB4IDAgMCAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQucHJlbWlhbi1sZWFndWV7XHJcblx0XHRpbWd7XHJcblx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiLnNlY3Rpb24tYWJvdXQsIC5zZWN0aW9uLW5vZmlmeSwgLnByZW1pYW4tbGVhZ3VlLCAuc2VjdGlvbi1ldmVudHMsIC5zZWN0aW9uLXNwYWNpbmcsIC50ZXN0aW1vbmlhbHMsIC5wYXJ0bmVyIHtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuLnNlY3Rpb24tYWJvdXQgaDEsIC5zZWN0aW9uLW5vZmlmeSBoMSwgLnByZW1pYW4tbGVhZ3VlIGgxLCAuc2VjdGlvbi1ldmVudHMgaDEsIC5zZWN0aW9uLXNwYWNpbmcgaDEsIC50ZXN0aW1vbmlhbHMgaDEsIC5wYXJ0bmVyIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgY29sb3I6ICMzZTY1YWM7XG59XG5cbi5oZWFkaW5nLXNwYWNlciBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGNvbG9yOiAjM2U2NWFjO1xufVxuXG4uc2VjdGlvbi1pbmZvIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG4uc2VjdGlvbi1pbmZvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMC40O1xufVxuLnNlY3Rpb24taW5mbyBoMSwgLnNlY3Rpb24taW5mbyBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1pbmZvIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbC1jb250YWluZXIge1xuICBtYXJnaW46IDMwcHggYXV0byAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udi1hbGlnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cblxuLnNlY3Rpb24tbm9maWZ5IHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgcGFkZGluZzogMHB4O1xuICBmb250LWZhbWlseTogXCJDb21pYyBOZXVlXCIsIGN1cnNpdmU7XG59XG4uc2VjdGlvbi1ub2ZpZnkgLmNvbCB7XG4gIHBhZGRpbmc6IDIwcHggNDVweDtcbn1cbi5zZWN0aW9uLW5vZmlmeSAuY29sOm50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3dkdS0xLnBuZykgbm8tcmVwZWF0IHJpZ2h0IGJvdHRvbTtcbn1cbi5zZWN0aW9uLW5vZmlmeSAuY29sOm50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3dkdS0yLnBuZykgbm8tcmVwZWF0IHJpZ2h0IGJvdHRvbSAjYmYyNzJkO1xufVxuLnNlY3Rpb24tbm9maWZ5IC5jb2w6bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvd2R1LTMucG5nKSBuby1yZXBlYXQgcmlnaHQgYm90dG9tO1xufVxuLnNlY3Rpb24tbm9maWZ5IGg1IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlY3Rpb24tbm9maWZ5IGg1IHNwYW4ge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDUwcHggNXB4IDA7XG59XG4uc2VjdGlvbi1ub2ZpZnkgaDUgc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLW5vZmlmeSBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1ub2ZpZnkgdWwubGlzdCBsaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDAgMTVweCAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc2VjdGlvbi1ub2ZpZnkgdWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG59XG5cbi5zZWN0aW9uLWFkbWlzc2lvbiB7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmFkbWlzc2lvbi1mbGFnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyNXB4IDA7XG4gIGhlaWdodDogMjUwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmFkbWlzc2lvbi1mbGFnIC5mbGFnLXBvcyB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA3MHB4KTtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogN3B4IDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmFkbWlzc2lvbi1mbGFnIC5idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiBwIHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuY2Fyb3VzZWwgLnBhbmVsIGkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuY2Fyb3VzZWwgLnBhbmVsIHN2ZyB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmNhcm91c2VsIC5wYW5lbCBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uLWN1cnJpY3VsdW0gdWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLnJvdy1mIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAucm93LWYgLnAwIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5zZWN0aW9uLWN1cnJpY3VsdW0tbGlzdCAuZHJvcC1kb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLnNlY3Rpb24tY3VycmljdWx1bS1saXN0LmRyb3AtZG93bi1hY3RpdmUgc3ZnIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5zZWN0aW9uLWN1cnJpY3VsdW0tbGlzdC5uYXYtcGlsbHMgbGkgLm5hdi1saW5rIHtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3QubmF2LXBpbGxzIGxpIC5uYXYtbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzNlNjVhYztcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLnNlY3Rpb24tY3VycmljdWx1bS1saXN0Lm5hdi1waWxscyBsaSAubmF2LWxpbmsuYWN0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAxN3B4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLWluZm8ge1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLWluZm8gaDUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLmN1cnJpY3VsdW0taW5mbyAuYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgY29sb3I6ICMwMDA7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLmN1cnJpY3VsdW0taW5mbyBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAuY3VycmljdWx1bS1pbmZvIHVsLmxpc3QgbGkge1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLnRleHQtaGlnaGxpZ2h0ZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgbWFyZ2luOiAxMHB4IDBweCAwIC00NXB4O1xufVxuXG4ucGFydG5lciB7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cbi5wYXJ0bmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYXJ0bmVyIC5wYW5lbCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMnB4IDFweCA0cHggLTJweCAjM2U2NWFjO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLnBhcnRuZXIgLnBhbmVsOmhvdmVyIC5pbmZvLXZpZXcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wYXJ0bmVyIC5pbWctYm94IHtcbiAgaGVpZ2h0OiA5NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnBhcnRuZXIgLmltZy1ib3ggaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnBhcnRuZXIgLmluZm8tdmlldyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTEwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA1MHB4KTtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ucGFydG5lciAuaW5mby12aWV3IC5pbWctYm94IHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnBhcnRuZXIgLmluZm8tdmlldyBwLCAucGFydG5lciAuaW5mby12aWV3IGg1LCAucGFydG5lciAuaW5mby12aWV3IGEge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLnBhcnRuZXIgLmluZm8tdmlldyBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLnBhcnRuZXIgLmluZm8tdmlldyBhIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLnBhcnRuZXIgLmluZm8tdmlldyBoNSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucGFydG5lciAuaW5mby12aWV3IGg1OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cblxuLnRlc3RpbW9uaWFscyB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi50ZXN0aW1vbmlhbHMgLmltZy1jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbn1cbi50ZXN0aW1vbmlhbHMgLmNvbCB7XG4gIHBhZGRpbmc6IDIwcHggNDVweDtcbn1cbi50ZXN0aW1vbmlhbHMgLmNvbDpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuLnRlc3RpbW9uaWFscyAuY29sIHAsIC50ZXN0aW1vbmlhbHMgLmNvbCBoNiB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcmVtaWFuLWxlYWd1ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJlbWlhbi1sZWFndWUgLmNvbC1wcmVtaWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJlbWlhbi1sZWFndWUgaDYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYmYyNzJkO1xufVxuLnByZW1pYW4tbGVhZ3VlIC5yb3cge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJlbWlhbi1sZWFndWUgLnJvdyAuY29uY2VwdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJlbWlhbi1sZWFndWUgLnJvdyAuYXNzZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucHJlbWlhbi1sZWFndWUgLnJvdyAuYXNzZXRfMiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fzc2V0LTIucG5nKSBuby1yZXBlYXQgcmlnaHQgYm90dG9tO1xuICBsZWZ0OiAxMCU7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDg0cHg7XG4gIGhlaWdodDogODRweDtcbiAgYW5pbWF0aW9uOiBzcGluIDEwcyBpbmZpbml0ZTtcbn1cbi5wcmVtaWFuLWxlYWd1ZSAucm93IC5hc3NldF8zIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYXNzZXQtMy5wbmcpIG5vLXJlcGVhdCByaWdodCBib3R0b207XG4gIGxlZnQ6IDUwcHg7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzJweDtcbiAgYW5pbWF0aW9uOiBteW1vdmUzIDJzIGluZmluaXRlO1xufVxuLnByZW1pYW4tbGVhZ3VlIC5yb3cgLmFzc2V0XzQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9hc3NldC00LnBuZykgbm8tcmVwZWF0IHJpZ2h0IGJvdHRvbTtcbiAgbGVmdDogMzAlO1xuICB0b3A6IDU1cHg7XG4gIHdpZHRoOiA4NnB4O1xuICBoZWlnaHQ6IDU4cHg7XG4gIGFuaW1hdGlvbjogbXltb3ZlNCAycyBpbmZpbml0ZTtcbn1cbi5wcmVtaWFuLWxlYWd1ZSAucm93IC5hc3NldF81IHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYXNzZXQtNS5wbmcpIG5vLXJlcGVhdCByaWdodCBib3R0b207XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA3MHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNjVweDtcbiAgYW5pbWF0aW9uOiBteW1vdmUgMnMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBteW1vdmUzIHtcbiAgZnJvbSB7XG4gICAgdG9wOiAxMHB4O1xuICB9XG4gIHRvIHtcbiAgICB0b3A6IDEycHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbXltb3ZlNCB7XG4gIGZyb20ge1xuICAgIHRvcDogNTVweDtcbiAgfVxuICB0byB7XG4gICAgdG9wOiA2MHB4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIG15bW92ZSB7XG4gIGZyb20ge1xuICAgIHRvcDogNzBweDtcbiAgfVxuICB0byB7XG4gICAgdG9wOiA5MHB4O1xuICB9XG59XG4ucHJlbWlhbi1sZWFndWUgLmNhcm91c2VsIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzNlNjVhYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG4ucHJlbWlhbi1sZWFndWUgLmNhcm91c2VsIC5zbGljay1zbGlkZSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xufVxuLnByZW1pYW4tbGVhZ3VlIC5jYXJvdXNlbCAuc2xpY2stc2xpZGUuc2xpY2stYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xufVxuLnByZW1pYW4tbGVhZ3VlIC5jYXJvdXNlbCBoNiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNiZjI3MmQ7XG59XG4ucHJlbWlhbi1sZWFndWUgLmNvbCAuaW1nLWNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggZGFzaGVkICMzZTY1YWM7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgcGFkZGluZzogM3B4O1xufVxuLnByZW1pYW4tbGVhZ3VlIC5jb2wgLmltZy1jaXJjbGUgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnByZW1pYW4tbGVhZ3VlIC5jb2w6bGFzdC1jaGlsZCAuaW1nLWNpcmNsZSB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cblxuLmNsZWFyLWZsb2F0IHtcbiAgY2xlYXI6IGJvdGg7XG4gIGZsb2F0OiBub25lO1xufVxuXG4ubWFpbi1iYW5uZXIge1xuICBoZWlnaHQ6IDY2NnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuLm1haW4tYmFubmVyIHZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aGUtcHJlbWlhLWNvcm5lciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4udGhlLXByZW1pYS1jb3JuZXIgLmNvbCB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4udGhlLXByZW1pYS1jb3JuZXIgLmNvbCBpbWcge1xuICBib3gtc2hhZG93OiAxcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4udGhlLXByZW1pYS1jb3JuZXIgLmNvbCBoNCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLm5ld3NsZXR0ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xuICBwYWRkaW5nOiA0MHB4IDE1cHg7XG59XG4ubmV3c2xldHRlciAuZm9ybS1pbmxpbmUge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5uZXdzbGV0dGVyIGxhYmVsIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLm5ld3NsZXR0ZXIgLmJ0biB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgcGFkZGluZzogOXB4IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zZWN0aW9uLWFkbWlzc2lvbiAuYWRtaXNzaW9uLWZsYWcgLmZsYWctcG9zIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3Qge1xuICAgIHRyYW5zaXRpb246IDFzO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIH1cbiAgLnNlY3Rpb24tY3VycmljdWx1bS1saXN0IGE6bm90KC5hY3RpdmUpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5zZWN0aW9uLWN1cnJpY3VsdW0tbGlzdCBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24tY3VycmljdWx1bS1saXN0IGxpIGEge1xuICAgIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb24tY3VycmljdWx1bS1saXN0LmRyb3AtZG93bi1hY3RpdmUgYTpub3QoLmFjdGl2ZSkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnNlY3Rpb24tY3VycmljdWx1bSAucm93LWYge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgLnNlY3Rpb24tY3VycmljdWx1bSAuY3VycmljdWx1bS1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAuc2VjdGlvbi1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cbiAgLnNlY3Rpb24taW5mbyBpbWcge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1pbmZvIC5wYW5lbC1jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgfVxuICAuc2VjdGlvbi1pbmZvIC5wYW5lbC1jb250YWluZXI6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICB9XG4gIC5zZWN0aW9uLWluZm8gc3ZnIHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICAuc2VjdGlvbi1pbmZvIC5wYW5lbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnNlY3Rpb24tZXZlbnRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1ldmVudHMgLmV2ZW50cy1ncmlkIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1ldmVudHMgLmV2ZW50cy1ncmlkIGxpIGZpZ3VyZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMTVweCAwO1xuICB9XG5cbiAgLnNlY3Rpb24tY3VycmljdWx1bSAucm93LWYge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAubWFpbi1iYW5uZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5uZXdzbGV0dGVyIC5idG4ge1xuICAgIG1hcmdpbjogMTVweCAwIDAgMDtcbiAgfVxuXG4gIC5wcmVtaWFuLWxlYWd1ZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */";
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

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, renderer) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.renderer = renderer;
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
              centerPadding: '0px',
              slidesToShow: 1
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
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
        this.premianLeagueConfig = {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false
        };
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
              slidesToShow: 1
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
              slidesToShow: 1
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
        this.isOpen = true;
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
        this.thePremiaCorner = [{
          icon: '#icon_reading',
          description: "Our Blogs"
        }, {
          icon: '#icon_education',
          description: "Students Work"
        }, {
          icon: '#icon_emoDev',
          description: "Hand on Learning"
        }, {
          icon: '#icon_reading',
          description: "Premia events"
        }];
        this.notify = [{
          title: 'Vision',
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
        }, {
          title: 'Values',
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
          clientView: 'The Premia Academy is the kind of school I was looking for my kid- a perfect balance of curriculum and sports. The school has got all the required facilities for a kid to learn.',
          clientName: "Sweta D.S\n      Parent of Sanketh D.S"
        }, {
          clientView: "I've always believed in holistic education and when I met with academicians at Premia, that's what seemed to be their plan. ",
          clientName: "Sushma Panyam \n      Parent of Nihal Singaraju"
        }, {
          clientView: 'The Premia Academy is the kind of school I was looking for my kid- a perfect balance of curriculum and sports. The school has got all the required facilities for a kid to learn.',
          clientName: "Sweta D.S\n      Parent of Sanketh D.S"
        }]; // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

        this.premianLeague = [{
          name: 'Why we exist',
          gridClass: 'col-md-2 col-md-offset-1'
        }, {
          name: 'What we offer',
          gridClass: 'col-md-2'
        }, {
          name: 'How we make if happen',
          gridClass: 'col-md-2 '
        }];
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;

        this.knowMore = function (text) {
          if (text === 'culture') {
            this.router.navigateByUrl('/ThePremiaCulture', {
              skipLocationChange: true
            });
          } else if (text === 'edge') {
            this.router.navigateByUrl('/ThePremiaEdge', {
              skipLocationChange: true
            });
          } else if (text === 'apply') {
            this.router.navigateByUrl('/JoinThePremiaPride', {
              skipLocationChange: true
            });
          } else if (text === 'admission') {
            this.router.navigateByUrl('/JoinThePremiaPride', {
              skipLocationChange: true
            });
          }
        };
      }

      _createClass(HomeComponent, [{
        key: "drowDownToggle",
        value: function drowDownToggle() {
          this.isOpen = !this.isOpen;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
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

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('collapse', {
      "static": false
    })], HomeComponent.prototype, "collapse", void 0);
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
  "./src/app/premiaethos/premiaethos.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/premiaethos/premiaethos.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPremiaethosPremiaethosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".premia-ethos .row {\n  margin: 70px 0 100px 70px;\n  position: relative;\n}\n.premia-ethos .prodigy {\n  background: #3e65ac;\n  color: #fff;\n}\n.premia-ethos .prodigy svg {\n  fill: #fff;\n}\n.premia-ethos .white {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlbWlhZXRob3MvRjpcXGdpdGh1YlxcYWNhZGVteS9zcmNcXGFwcFxccHJlbWlhZXRob3NcXHByZW1pYWV0aG9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcmVtaWFldGhvcy9wcmVtaWFldGhvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDQVI7QURDUTtFQUNJLFVBQUE7QUNDWjtBREVJO0VBQ0ksZ0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3ByZW1pYWV0aG9zL3ByZW1pYWV0aG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZW1pYS1ldGhvc3tcclxuICAgIC5yb3d7XHJcbiAgICAgICAgbWFyZ2luOjcwcHggMCAxMDBweCA3MHB4IDsgXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnByb2RpZ3l7XHJcbiAgICAgICAgYmFja2dyb3VuZDojM2U2NWFjO1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICBmaWxsOiNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndoaXRle1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIH1cclxufVxyXG4iLCIucHJlbWlhLWV0aG9zIC5yb3cge1xuICBtYXJnaW46IDcwcHggMCAxMDBweCA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJlbWlhLWV0aG9zIC5wcm9kaWd5IHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgY29sb3I6ICNmZmY7XG59XG4ucHJlbWlhLWV0aG9zIC5wcm9kaWd5IHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG4ucHJlbWlhLWV0aG9zIC53aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/premiaethos/premiaethos.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/premiaethos/premiaethos.component.ts ***!
    \******************************************************/

  /*! exports provided: PremiaethosComponent */

  /***/
  function srcAppPremiaethosPremiaethosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PremiaethosComponent", function () {
      return PremiaethosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PremiaethosComponent = /*#__PURE__*/function () {
      function PremiaethosComponent() {
        _classCallCheck(this, PremiaethosComponent);
      }

      _createClass(PremiaethosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PremiaethosComponent;
    }();

    PremiaethosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-premiaethos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./premiaethos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/premiaethos/premiaethos.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./premiaethos.component.scss */
      "./src/app/premiaethos/premiaethos.component.scss"))["default"]]
    })], PremiaethosComponent);
    /***/
  },

  /***/
  "./src/app/prmiapartner/prmiapartner.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/prmiapartner/prmiapartner.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPrmiapartnerPrmiapartnerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".premia-partner {\n  background: #fff;\n  padding: 50px 0;\n}\n.premia-partner .highlighted {\n  color: #bf272d;\n}\n.premia-partner .breadcum {\n  margin-bottom: 40px;\n}\n.premia-partner .row-f {\n  margin: 0px 70px;\n}\n.premia-partner .row-f,\n.premia-partner .row {\n  position: relative;\n}\n.premia-partner .partner-panel .partner-grid {\n  border-radius: 15px;\n  border-bottom: 5px solid #cbccce;\n  margin-bottom: 40px;\n  overflow: hidden;\n  height: 155px;\n}\n.premia-partner .partner-panel .partner-grid .panel .left-panel::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 90px solid transparent;\n  border-bottom: 90px solid transparent;\n  top: 0;\n  right: -37px;\n  top: -14px;\n  z-index: -1;\n}\n.premia-partner .partner-panel .partner-grid .panel .left-panel, .premia-partner .partner-panel .partner-grid .panel .right-panel {\n  padding: 35px;\n  position: relative;\n  border-radius: 0 15px 15px;\n  height: 150px;\n}\n.premia-partner .partner-panel .partner-grid .panel .right-panel {\n  padding-left: 70px;\n}\n.premia-partner .partner-panel .partner-grid .panel h3 {\n  text-transform: uppercase;\n}\n.premia-partner .partner-panel .partner-grid .panel h3, .premia-partner .partner-panel .partner-grid .panel p {\n  color: #fff;\n}\n.premia-partner .partner-panel .partner-grid .panel .number {\n  position: absolute;\n  top: 50%;\n  right: -50px;\n  margin-top: -25px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.65);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\n.premia-partner .partner-panel .partner-grid .panel .read-more {\n  position: absolute;\n  right: 0px;\n  top: 0;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  align-items: center;\n  -webkit-writing-mode: vertical-rl;\n          writing-mode: vertical-rl;\n  padding-left: 5px;\n  border-left: 1px solid #000;\n  color: #a7a7a7;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(1) .left-panel {\n  background: #3e65ac;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(1) .left-panel::after {\n  border-left: 50px solid #3e65ac;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(2) .left-panel {\n  background: #bf272d;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(2) .left-panel::after {\n  border-left: 50px solid #bf272d;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(3) .left-panel {\n  background: #000;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(3) .left-panel::after {\n  border-left: 50px solid #000;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(4) .left-panel {\n  background: #3e65ac;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(4) .left-panel::after {\n  border-left: 50px solid #3e65ac;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(5) .left-panel {\n  background: #bf272d;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(5) .left-panel::after {\n  border-left: 50px solid #bf272d;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(6) .left-panel {\n  background: #000;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(6) .left-panel::after {\n  border-left: 50px solid #000;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(7) .left-panel {\n  background: #3e65ac;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(7) .left-panel::after {\n  border-left: 50px solid #3e65ac;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(8) .left-panel {\n  background: #bf272d;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(8) .left-panel::after {\n  border-left: 50px solid #bf272d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJtaWFwYXJ0bmVyL0Y6XFxnaXRodWJcXGFjYWRlbXkvc3JjXFxhcHBcXHBybWlhcGFydG5lclxccHJtaWFwYXJ0bmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm1pYXBhcnRuZXIvcHJtaWFwYXJ0bmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7QURBRTtFQUNELGNBQUE7QUNFRDtBREFFO0VBQ0MsbUJBQUE7QUNFSDtBREFFO0VBQ0UsZ0JBQUE7QUNFSjtBRENFOztFQUVFLGtCQUFBO0FDQ0o7QURFQztFQUNDLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0FGO0FESUk7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDRkw7QURLRztFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtBQ0hKO0FES0c7RUFDQyxrQkFBQTtBQ0hKO0FES0c7RUFDQyx5QkFBQTtBQ0hKO0FES0c7RUFDQyxXQUFBO0FDSEo7QURLRztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDSEo7QURLRztFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNISjtBRE9HO0VBQ0UsbUJBQUE7QUNMTDtBRE1LO0VBQ0QsK0JBQUE7QUNKSjtBRFVHO0VBQ0UsbUJBQUE7QUNSTDtBRFNLO0VBQ0QsK0JBQUE7QUNQSjtBRFlHO0VBQ0UsZ0JBQUE7QUNWTDtBRFdLO0VBQ0QsNEJBQUE7QUNUSjtBRGNHO0VBQ0UsbUJBQUE7QUNaTDtBRGFLO0VBQ0QsK0JBQUE7QUNYSjtBRGdCRztFQUNFLG1CQUFBO0FDZEw7QURlSztFQUNELCtCQUFBO0FDYko7QURrQkc7RUFDRSxnQkFBQTtBQ2hCTDtBRGlCSztFQUNELDRCQUFBO0FDZko7QURvQkc7RUFDRSxtQkFBQTtBQ2xCTDtBRG1CSztFQUNELCtCQUFBO0FDakJKO0FEc0JHO0VBQ0UsbUJBQUE7QUNwQkw7QURxQks7RUFDRCwrQkFBQTtBQ25CSiIsImZpbGUiOiJzcmMvYXBwL3BybWlhcGFydG5lci9wcm1pYXBhcnRuZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJlbWlhLXBhcnRuZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG4gIC5oaWdobGlnaHRlZHtcclxuXHRjb2xvcjojYmYyNzJkO1xyXG59XHJcbiAgLmJyZWFkY3Vte1xyXG5cdCAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gIH1cclxuICAucm93LWYge1xyXG4gICAgbWFyZ2luOiAwcHggNzBweDtcclxuICB9XHJcblxyXG4gIC5yb3ctZixcclxuICAucm93IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnBhcnRuZXItcGFuZWwge1xyXG5cdC5wYXJ0bmVyLWdyaWQge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHRcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjY2JjY2NlOyBcclxuXHRcdG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0aGVpZ2h0OjE1NXB4O1xyXG5cdFx0LnBhbmVse1xyXG5cdFx0XHRcclxuXHRcdFx0LmxlZnQtcGFuZWx7XHJcblx0XHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDA7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDA7XHJcblx0XHRcdFx0XHRib3JkZXItdG9wOiA5MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogOTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdHJpZ2h0OiAtMzdweDtcclxuXHRcdFx0XHRcdHRvcDogLTE0cHg7XHJcblx0XHRcdFx0XHR6LWluZGV4OiAtMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQubGVmdC1wYW5lbCwgLnJpZ2h0LXBhbmVse1xyXG5cdFx0XHRcdHBhZGRpbmc6MzVweDtcclxuXHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwIDE1cHggMTVweDtcclxuXHRcdFx0XHRoZWlnaHQ6MTUwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LnJpZ2h0LXBhbmVse1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDo3MHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdGgze1xyXG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0aDMsIHAge1xyXG5cdFx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdH1cclxuXHRcdFx0Lm51bWJlcntcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0dG9wOjUwJTtcclxuXHRcdFx0XHRyaWdodDotNTBweDtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOi0yNXB4O1xyXG5cdFx0XHRcdHdpZHRoOjUwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OjUwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0XHRcdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6MXB4IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsLjY1KTtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0fVxyXG5cdFx0XHQucmVhZC1tb3Jle1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRyaWdodDowcHg7XHJcblx0XHRcdFx0dG9wOjA7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRoZWlnaHQ6IDkwJTtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcblx0XHRcdFx0Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICMwMDA7XHJcblx0XHRcdFx0Y29sb3I6I2E3YTdhNztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0JjpudGgtY2hpbGQoMSkge1xyXG5cdFx0XHQubGVmdC1wYW5lbCB7XHJcblx0XHRcdCAgYmFja2dyb3VuZDogIzNlNjVhYztcclxuXHRcdFx0ICAmOjphZnRlcntcclxuXHRcdFx0XHRib3JkZXItbGVmdDogNTBweCBzb2xpZCAjM2U2NWFjO1xyXG5cdFx0XHQgIH1cclxuXHRcdFx0fVxyXG5cdFx0ICB9XHJcblx0ICBcclxuXHRcdCAgJjpudGgtY2hpbGQoMikge1xyXG5cdFx0XHQubGVmdC1wYW5lbCB7XHJcblx0XHRcdCAgYmFja2dyb3VuZDogI2JmMjcyZDtcclxuXHRcdFx0ICAmOjphZnRlcntcclxuXHRcdFx0XHRib3JkZXItbGVmdDogNTBweCBzb2xpZCAjYmYyNzJkO1xyXG5cdFx0XHQgIH1cclxuXHRcdFx0fVxyXG5cdFx0ICB9XHJcblx0XHQgICY6bnRoLWNoaWxkKDMpIHtcclxuXHRcdFx0LmxlZnQtcGFuZWwge1xyXG5cdFx0XHQgIGJhY2tncm91bmQ6ICMwMDA7XHJcblx0XHRcdCAgJjo6YWZ0ZXJ7XHJcblx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDUwcHggc29saWQgIzAwMDtcclxuXHRcdFx0ICB9XHJcblx0XHRcdH1cclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCg0KSB7XHJcblx0XHRcdC5sZWZ0LXBhbmVsIHtcclxuXHRcdFx0ICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xyXG5cdFx0XHQgICY6OmFmdGVye1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkICMzZTY1YWM7XHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoNSkge1xyXG5cdFx0XHQubGVmdC1wYW5lbCB7XHJcblx0XHRcdCAgYmFja2dyb3VuZDogI2JmMjcyZDtcclxuXHRcdFx0ICAmOjphZnRlcntcclxuXHRcdFx0XHRib3JkZXItbGVmdDogNTBweCBzb2xpZCAjYmYyNzJkO1xyXG5cdFx0XHQgIH1cclxuXHRcdFx0fVxyXG5cdFx0ICB9XHJcblx0XHQgICY6bnRoLWNoaWxkKDYpIHtcclxuXHRcdFx0LmxlZnQtcGFuZWwge1xyXG5cdFx0XHQgIGJhY2tncm91bmQ6ICMwMDA7XHJcblx0XHRcdCAgJjo6YWZ0ZXJ7XHJcblx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDUwcHggc29saWQgIzAwMDtcclxuXHRcdFx0ICB9XHJcblx0XHRcdH1cclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCg3KSB7XHJcblx0XHRcdC5sZWZ0LXBhbmVsIHtcclxuXHRcdFx0ICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xyXG5cdFx0XHQgICY6OmFmdGVye1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkICMzZTY1YWM7XHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoOCkge1xyXG5cdFx0XHQubGVmdC1wYW5lbCB7XHJcblx0XHRcdCAgYmFja2dyb3VuZDogI2JmMjcyZDtcclxuXHRcdFx0ICAmOjphZnRlcntcclxuXHRcdFx0XHRib3JkZXItbGVmdDogNTBweCBzb2xpZCAjYmYyNzJkO1xyXG5cdFx0XHQgIH1cclxuXHRcdFx0fVxyXG5cdFx0ICB9XHJcblx0ICB9XHJcbiAgfVxyXG59IiwiLnByZW1pYS1wYXJ0bmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuLnByZW1pYS1wYXJ0bmVyIC5oaWdobGlnaHRlZCB7XG4gIGNvbG9yOiAjYmYyNzJkO1xufVxuLnByZW1pYS1wYXJ0bmVyIC5icmVhZGN1bSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnJvdy1mIHtcbiAgbWFyZ2luOiAwcHggNzBweDtcbn1cbi5wcmVtaWEtcGFydG5lciAucm93LWYsXG4ucHJlbWlhLXBhcnRuZXIgLnJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNjYmNjY2U7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTU1cHg7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZCAucGFuZWwgLmxlZnQtcGFuZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiA5MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA5MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMzdweDtcbiAgdG9wOiAtMTRweDtcbiAgei1pbmRleDogLTE7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZCAucGFuZWwgLmxlZnQtcGFuZWwsIC5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkIC5wYW5lbCAucmlnaHQtcGFuZWwge1xuICBwYWRkaW5nOiAzNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTVweCAxNXB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQgLnBhbmVsIC5yaWdodC1wYW5lbCB7XG4gIHBhZGRpbmctbGVmdDogNzBweDtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkIC5wYW5lbCBoMyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZCAucGFuZWwgaDMsIC5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkIC5wYW5lbCBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZCAucGFuZWwgLm51bWJlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAtNTBweDtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxO1xufVxuLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQgLnBhbmVsIC5yZWFkLW1vcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA5MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xuICBjb2xvcjogI2E3YTdhNztcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCgxKSAubGVmdC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZDpudGgtY2hpbGQoMSkgLmxlZnQtcGFuZWw6OmFmdGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgIzNlNjVhYztcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCgyKSAubGVmdC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZDpudGgtY2hpbGQoMikgLmxlZnQtcGFuZWw6OmFmdGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgI2JmMjcyZDtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCgzKSAubGVmdC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZDpudGgtY2hpbGQoMykgLmxlZnQtcGFuZWw6OmFmdGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgIzAwMDtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCg0KSAubGVmdC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZDpudGgtY2hpbGQoNCkgLmxlZnQtcGFuZWw6OmFmdGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgIzNlNjVhYztcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCg1KSAubGVmdC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZDpudGgtY2hpbGQoNSkgLmxlZnQtcGFuZWw6OmFmdGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgI2JmMjcyZDtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCg2KSAubGVmdC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZDpudGgtY2hpbGQoNikgLmxlZnQtcGFuZWw6OmFmdGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgIzAwMDtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCg3KSAubGVmdC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZDpudGgtY2hpbGQoNykgLmxlZnQtcGFuZWw6OmFmdGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgIzNlNjVhYztcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCg4KSAubGVmdC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZDpudGgtY2hpbGQoOCkgLmxlZnQtcGFuZWw6OmFmdGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgI2JmMjcyZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/prmiapartner/prmiapartner.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/prmiapartner/prmiapartner.component.ts ***!
    \********************************************************/

  /*! exports provided: PrmiapartnerComponent */

  /***/
  function srcAppPrmiapartnerPrmiapartnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrmiapartnerComponent", function () {
      return PrmiapartnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrmiapartnerComponent = /*#__PURE__*/function () {
      function PrmiapartnerComponent() {
        _classCallCheck(this, PrmiapartnerComponent);

        this.partners = [{
          name: 'Creya',
          title: 'Design Thinking',
          des: "Design thinking is implemented at Premia Academy during the child's growing years using the mantra-Define, Discover, Dream, Design, Deliver and Debrief!"
        }, {
          name: 'Metamorphosis',
          title: 'Design Thinking',
          des: "The A++ factors - Ask, Acquire, Analyze, Apply and Assess are the foundation of teaching Entrepreneurship at The Premia academy!"
        }, {
          name: "Furtados School\n    of Music",
          title: 'Performing Art',
          des: "Did you know that music training helps develop\n    areas of reasoning and language training?\n    That apart, music brings the world together."
        }, {
          name: 'Yardstick',
          title: 'Experiential Learning',
          des: "Experiences stitched together is what makes the perfect garment we call life. - this thought has inspired us to collaborate with Yardstick"
        }, {
          name: "Scholastic\n    levelled\n    BookRoom",
          title: 'Literacy Based Curriculum',
          des: "Our curriculum lays emphasis on reading as we believe the integences of language and the likes of speaking, creativity,"
        }, {
          name: 'Swadhay',
          title: "Life Skills - Transforming\n    lives to transform the world",
          des: "Did you know that music training helps develop\n    areas of reasoning and language training?\n    That apart, music brings the world together.\n    Music represents culture. "
        }, {
          name: 'Sports village',
          title: '',
          des: "\u201CThe world is full of players, be a game changer!\u201D MS Dhoni At the Premia Academy sports is a wholesome lesson in time management \u2013"
        }, {
          name: 'Avni  ',
          title: "Synchronicity, Sagacity\n    and Sustainability",
          des: "\u201CThe greatest threat to our planet is the belief that someone else will save it.\u201D Robert Swan We will not let this be\u2026Everyone can do simple things to make a difference and every little bit counts - stella ma-Cartney"
        }];
      }

      _createClass(PrmiapartnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrmiapartnerComponent;
    }();

    PrmiapartnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prmiapartner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./prmiapartner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/prmiapartner/prmiapartner.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./prmiapartner.component.scss */
      "./src/app/prmiapartner/prmiapartner.component.scss"))["default"]]
    })], PrmiapartnerComponent);
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


    __webpack_exports__["default"] = ".section-study-culture .row-f, .section-study-culture .row {\n  margin: 70px 0 100px 70px;\n  position: relative;\n}\n.section-study-culture .curriculum {\n  margin-bottom: 0px;\n}\n.section-study-culture .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-study-culture .panel .panel-body {\n  width: 70%;\n}\n.section-study-culture .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n}\n.section-study-culture .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-study-culture .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-study-culture .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-study-culture h1 {\n  margin-bottom: 35px;\n  font-weight: bold;\n}\n.section-study-culture h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-study-culture h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-study-culture .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-study-culture ul.list {\n  margin: 0px;\n}\n.section-study-culture ul.list li {\n  color: #000;\n}\n.section-study-culture ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n.applycation-rules .btn {\n  width: 75%;\n  padding: 15px 0;\n  background: #bf272d;\n  font-family: \"Lora\", serif;\n  margin: 25px auto 0;\n  font-size: 24px;\n  display: block;\n}\n.edge-info {\n  margin: 0 !important;\n}\n.edge-info .plan-title {\n  margin: 30px 0 50px;\n}\n.edge-info .panel {\n  margin-bottom: 50px;\n}\n.edge-info .panel:nth-child(3n+1) {\n  background: #3e65ac;\n  color: #fff;\n}\n.edge-info .panel:nth-child(3n+2) {\n  background: #bf272d;\n  color: #fff;\n}\n.edge-info .panel:nth-child(3n+3) {\n  background: #000;\n  color: #fff;\n}\n.edge-info .panel.bg-white {\n  background: #fff;\n}\n.edge-info .panel.bg-white p {\n  color: #000;\n}\n.edge-info .panel:nth-child(1) span {\n  background: #3e65ac;\n}\n.edge-info .panel:nth-child(2) span {\n  background: #bf272d;\n}\n.edge-info .panel:nth-child(3) span {\n  background: #000;\n}\n.edge-info .panel:nth-child(4) span {\n  background: #3e65ac;\n}\n.edge-info .panel:nth-child(5) span {\n  background: #bf272d;\n}\n.edge-info .panel span {\n  z-index: 1;\n  position: relative;\n  padding-right: 15px;\n}\n.edge-info .heading-title {\n  position: relative;\n}\n.edge-info .heading-title::after {\n  content: \"\";\n  position: absolute;\n  top: 18px;\n  left: 0px;\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n.edge-info .extra-info {\n  position: relative;\n}\n.edge-info .extra-info .panel .panel-body {\n  width: 50%;\n}\n.section-explicit {\n  margin: 70px 0px;\n}\n.section-explicit .row {\n  margin-top: 40px;\n  margin-bottom: 0;\n}\n.section-explicit h1 {\n  font-weight: normal;\n}\n.section-explicit .bar {\n  position: relative;\n  padding-top: 15px;\n}\n.section-explicit .bar::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100px;\n  height: 5px;\n  background: #bf272d;\n}\n.section-explicit .explicit-sec {\n  padding: 0px;\n}\n.section-explicit .explicit-sec .add-info {\n  position: relative;\n  width: 20%;\n  padding: 0px;\n  display: flex;\n  margin: 0 2px;\n  height: 325px;\n}\n.section-explicit .explicit-sec .add-info:first-child .panel {\n  margin-left: 0px;\n}\n.section-explicit .admission-flag {\n  position: relative;\n  color: #fff;\n  padding: 25px 0;\n  height: 250px;\n}\n.section-explicit .admission-flag .btn {\n  border: 1px solid #fff;\n  color: #fff;\n  background: none;\n}\n.section-explicit p {\n  white-space: pre;\n  margin-top: 15px;\n}\n.section-explicit .panel {\n  margin-left: 5px;\n  padding: 15px;\n  width: 100%;\n  background: #fff;\n  transition: 0.5s;\n}\n.section-explicit .panel a {\n  color: #000;\n}\n.section-explicit .panel h1 {\n  font-family: \"Quicksand\", sans-serif;\n  color: #000;\n}\n.section-explicit .panel h6 {\n  font-family: \"Lora\", serif;\n  color: #000;\n}\n.section-explicit .panel i {\n  margin: 25px auto;\n  display: block;\n}\n.section-explicit .panel svg {\n  width: 75px;\n  height: 75px;\n}\n.section-explicit .panel:hover, .section-explicit .panel.active {\n  border: none;\n  border-radius: 0;\n  background: #bf272d;\n  transform: scale(1.1);\n  z-index: 1;\n  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.section-explicit .panel:hover .panel-heading .bar::after, .section-explicit .panel.active .panel-heading .bar::after {\n  background: #fff !important;\n}\n.section-explicit .panel:hover .panel-heading h6, .section-explicit .panel:hover .panel-heading p, .section-explicit .panel:hover .panel-heading h1, .section-explicit .panel:hover .panel-heading a, .section-explicit .panel.active .panel-heading h6, .section-explicit .panel.active .panel-heading p, .section-explicit .panel.active .panel-heading h1, .section-explicit .panel.active .panel-heading a {\n  color: #fff;\n}\n.section-explicit .panel:hover svg, .section-explicit .panel.active svg {\n  fill: #fff;\n}\n.tab-info {\n  background: #bf272d;\n  padding: 15px;\n  margin-top: 40px;\n  color: #fff;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlcHJlbWlhbmVkZ2UvRjpcXGdpdGh1YlxcYWNhZGVteS9zcmNcXGFwcFxcdGhlcHJlbWlhbmVkZ2VcXHRoZXByZW1pYW5lZGdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVwcmVtaWFuZWRnZS90aGVwcmVtaWFuZWRnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLHlCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVDO0VBQ0Msa0JBQUE7QUNBRjtBREVDO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0FDQUY7QURDRTtFQUNDLFVBQUE7QUNDSDtBRENFO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSDtBREFHO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0VKO0FEREk7RUFDQyxVQUFBO0VBQ0Esd0JBQUE7RUFDRyxlQUFBO0FDR1I7QURBRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0VKO0FER0M7RUFDQyxtQkFBQTtFQUNBLGlCQUFBO0FDREY7QURHQztFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDREY7QURFRTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0FIO0FER0M7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0RGO0FER0M7RUFDQyxXQUFBO0FDREY7QURFRTtFQUNDLFdBQUE7QUNBSDtBRENHO0VBQ0MsbUJBQUE7QUNDSjtBREtBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNGRDtBREdDO0VBQ0Msd0JBQUE7QUNERjtBRE1JO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0hSO0FET0E7RUFDSSxvQkFBQTtBQ0pKO0FES0k7RUFDSSxtQkFBQTtBQ0hSO0FEZ0JBO0VBRUksbUJBQUE7QUNmSjtBRE1JO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDSlI7QURFSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0FSO0FERkk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNJUjtBRElHO0VBQ0ssZ0JBQUE7QUNGUjtBREdRO0VBQ0ksV0FBQTtBQ0RaO0FETVE7RUFDSSxtQkFBQTtBQ0paO0FEUVE7RUFDSSxtQkFBQTtBQ05aO0FEVVE7RUFDSSxnQkFBQTtBQ1JaO0FEY1E7RUFDSSxtQkFBQTtBQ1paO0FEZVE7RUFDSSxtQkFBQTtBQ2JaO0FEZ0JJO0VBRUksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNmUjtBRG1CSTtFQUNJLGtCQUFBO0FDakJSO0FEbUJRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDakJaO0FEb0JDO0VBQ0Msa0JBQUE7QUNsQkY7QURvQkc7RUFDQyxVQUFBO0FDbEJKO0FEd0JBO0VBQ0MsZ0JBQUE7QUNyQkQ7QURzQkM7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FDcEJGO0FEdUJDO0VBQ0MsbUJBQUE7QUNyQkY7QUR1QkM7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0FDckJGO0FEc0JFO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDcEJIO0FEd0JDO0VBQ0MsWUFBQTtBQ3RCRjtBRHdCRTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNHLGFBQUE7QUN0Qk47QUR3Qkk7RUFDQyxnQkFBQTtBQ3RCTDtBRDJCQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDekJGO0FEMEJFO0VBQ0Msc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN4Qkg7QUQyQkM7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FDekJGO0FEMkJFO0VBQ0ksZ0JBQUE7RUFDSCxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUN6Qkg7QUQwQkc7RUFDQyxXQUFBO0FDeEJKO0FEMEJHO0VBQ0Msb0NBQUE7RUFDQSxXQUFBO0FDeEJKO0FEMEJHO0VBQ0MsMEJBQUE7RUFDQSxXQUFBO0FDeEJKO0FEMEJHO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0FDeEJKO0FEMEJHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUN4Qko7QUQwQkc7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLCtDQUFBO0FDeEJKO0FEMkJNO0VBQ0MsMkJBQUE7QUN6QlA7QUQ0Qks7RUFDQyxXQUFBO0FDMUJOO0FENkJJO0VBQ0MsVUFBQTtBQzNCTDtBRDRDQTtFQUNDLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ3pDRDtBRDZDQTtFQUVFO0lBQ0MsZ0JBQUE7RUMzQ0Q7RUQ2Q0Q7SUFDQyxpQkFBQTtFQzNDQTtFRDZDRDtJQUNDLGFBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7RUMzQ0E7RUQ2Q0Q7SUFDQyxXQUFBO0VDM0NBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90aGVwcmVtaWFuZWRnZS90aGVwcmVtaWFuZWRnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLXN0dWR5LWN1bHR1cmV7XHJcblx0LnJvdy1mLCAucm93e1xyXG5cdFx0bWFyZ2luOjcwcHggMCAxMDBweCA3MHB4IDsgXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5jdXJyaWN1bHVte1xyXG5cdFx0bWFyZ2luLWJvdHRvbTowcHg7XHJcblx0fVxyXG5cdC5wYW5lbCB7XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRwYWRkaW5nOjUwcHg7XHJcblx0XHQucGFuZWwtYm9keXtcclxuXHRcdFx0d2lkdGg6NzAlO1xyXG5cdFx0fVxyXG5cdFx0Ji5zdG9yeS1pbmZve1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHQuZmx5aW5nLXBsYW5le1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0XHR0b3A6MHB4O1xyXG5cdFx0XHRcdHN2Z3tcclxuXHRcdFx0XHRcdGZpbGw6ICNmZmY7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICBcdFx0XHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0dG9wOjUwcHg7XHJcblx0XHRcdFx0d2lkdGg6IDNweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdGgxe1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzVweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHRoMntcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZy1ib3R0b206NXB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OlwiIFwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTowO1xyXG5cdFx0XHRsZWZ0OjA7XHJcblx0XHRcdHdpZHRoOjUwcHg7XHJcblx0XHRcdGhlaWdodDoycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2YwZjBmMDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHR9XHJcblx0dWwubGlzdHtcclxuXHRcdG1hcmdpbjowcHg7XHJcblx0XHRsaXtcclxuXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLm1vcmUtaW5mb3tcclxuXHRmbG9hdDpub25lO1xyXG5cdGNsZWFyOmJvdGg7XHJcblx0cHtcclxuXHRcdG1hcmdpbjo1MHB4IDAgNzBweCA3NXB4IDtcclxuXHR9XHJcbn1cclxuXHJcbi5hcHBseWNhdGlvbi1ydWxlc3tcclxuICAgIC5idG57XHJcbiAgICAgICAgd2lkdGg6NzUlO1xyXG4gICAgICAgIHBhZGRpbmc6MTVweCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2JmMjcyZDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG4gICAgICAgIG1hcmdpbjoyNXB4IGF1dG8gMDtcclxuICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZWRnZS1pbmZve1xyXG4gICAgbWFyZ2luOjAgIWltcG9ydGFudDtcclxuICAgIC5wbGFuLXRpdGxle1xyXG4gICAgICAgIG1hcmdpbjozMHB4IDAgNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAkYmctY29sb3JzOiAjM2U2NWFjLCAjYmYyNzJkLCAjMDAwO1xyXG5AbWl4aW4gYWx0ZXJuYXRpbmctYmFja2dyb3VuZCB7XHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGJnLWNvbG9ycykge1xyXG4gICAgJjpudGgtY2hpbGQoI3tsZW5ndGgoJGJnLWNvbG9ycyl9bisjeyRpfSkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IChudGgoJGJnLWNvbG9ycywgJGkpKTtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBhbmVse1xyXG4gICAgQGluY2x1ZGUgYWx0ZXJuYXRpbmctYmFja2dyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICAgJi5iZy13aGl0ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6IzAwMDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICBcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2JmMjcyZDtcclxuICAgIH0gXHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgzKXtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgfSBcclxuXHR9XHJcblx0XHJcblx0XHJcblx0JjpudGgtY2hpbGQoNCl7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNlNjVhYztcclxuXHR9fVxyXG5cdCY6bnRoLWNoaWxkKDUpe1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiZjI3MmQ7XHJcbiAgICB9fVxyXG5cclxuICAgIHNwYW57XHJcbiAgICAgICBcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4gICAgLmhlYWRpbmctdGl0bGV7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgXHJcbiAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOjE4cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHQuZXh0cmEtaW5mb3tcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdFx0d2lkdGg6NTAlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uc2VjdGlvbi1leHBsaWNpdHtcclxuXHRtYXJnaW46NzBweCAwcHg7XHJcblx0LnJvd3tcclxuXHRcdG1hcmdpbi10b3A6IDQwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0aDF7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdH1cclxuXHQuYmFye1xyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nLXRvcDoxNXB4O1xyXG5cdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOjBweDtcclxuXHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdHdpZHRoOjEwMHB4O1xyXG5cdFx0XHRoZWlnaHQ6NXB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuZXhwbGljaXQtc2Vje1xyXG5cdFx0cGFkZGluZzowcHg7XHJcblx0XHRcclxuXHRcdC5hZGQtaW5mb3tcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHR3aWR0aDoyMCU7XHJcblx0XHRcdHBhZGRpbmc6MHB4O1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRtYXJnaW46IDAgMnB4O1xyXG4gICAgXHRcdGhlaWdodDogMzI1cHg7XHJcblx0XHRcdCY6Zmlyc3QtY2hpbGR7XHJcblx0XHRcdFx0LnBhbmVse1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuYWRtaXNzaW9uLWZsYWd7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHRwYWRkaW5nOjI1cHggMDtcclxuXHRcdGhlaWdodDoyNTBweDtcclxuXHRcdC5idG57XHJcblx0XHRcdGJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwe1xyXG5cdFx0d2hpdGUtc3BhY2U6IHByZTtcclxuXHRcdG1hcmdpbi10b3A6MTVweDtcclxuXHR9XHJcblx0XHQucGFuZWx7XHJcblx0XHQgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHRcdFx0cGFkZGluZzogMTVweDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdHRyYW5zaXRpb246IC41cztcclxuXHRcdFx0YXtcclxuXHRcdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGgxe1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdH1cclxuXHRcdFx0aDZ7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuXHRcdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGl7XHJcblx0XHRcdFx0bWFyZ2luOiAyNXB4IGF1dG87XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdH1cclxuXHRcdFx0c3Zne1xyXG5cdFx0XHRcdHdpZHRoOjc1cHg7XHJcblx0XHRcdFx0aGVpZ2h0Ojc1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0Jjpob3ZlciwgJi5hY3RpdmV7XHJcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0XHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuXHRcdFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdFx0XHRcdC5wYW5lbC1oZWFkaW5ne1xyXG5cdFx0XHRcdFx0LmJhcntcclxuXHRcdFx0XHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRoNiwgcCwgaDEsIGF7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHN2Z3tcclxuXHRcdFx0XHRcdGZpbGw6I2ZmZjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdC8vIFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdC8vIFx0XHRjb250ZW50OicnO1xyXG5cdFx0XHQvLyBcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHQvLyBcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHQvLyBcdFx0dG9wOiAwcHg7XHJcblx0XHRcdC8vIFx0XHRsZWZ0OiAwcHg7XHJcblx0XHRcdC8vIFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ly8gXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0Ly8gXHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdC8vIFx0XHRib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHRcdFx0Ly8gfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcbn1cclxuXHJcbi50YWItaW5mb3tcclxuXHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0cGFkZGluZzoxNXB4O1xyXG5cdG1hcmdpbi10b3A6IDQwcHg7XHJcblx0Y29sb3I6I2ZmZjtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0LnNlY3Rpb24tc3R1ZHktY3VsdHVyZXtcclxuXHRcdC5yb3ctZiwgLnJvdywgaDF7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjBweDsgXHJcblx0fVxyXG5cdC5icmVhZGN1bXtcclxuXHRcdG1hcmdpbi1sZWZ0OjE1cHg7XHJcblx0fVxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBhZGRpbmc6MTVweDtcclxuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxuXHQucGFuZWwtYm9keXtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG59XHJcbn0iLCIuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3ctZiwgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93IHtcbiAgbWFyZ2luOiA3MHB4IDAgMTAwcHggNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuY3VycmljdWx1bSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNTBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgd2lkdGg6IDcwJTtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsLnN0b3J5LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwuc3RvcnktaW5mbyAuZmx5aW5nLXBsYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwuc3RvcnktaW5mbyAuZmx5aW5nLXBsYW5lIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwuc3RvcnktaW5mbzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA1MHB4O1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuaW1nLWZsYWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIHVsLmxpc3Qge1xuICBtYXJnaW46IDBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgdWwubGlzdCBsaSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSB1bC5saXN0IGxpOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuXG4ubW9yZS1pbmZvIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGNsZWFyOiBib3RoO1xufVxuLm1vcmUtaW5mbyBwIHtcbiAgbWFyZ2luOiA1MHB4IDAgNzBweCA3NXB4O1xufVxuXG4uYXBwbHljYXRpb24tcnVsZXMgLmJ0biB7XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmVkZ2UtaW5mbyB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuLmVkZ2UtaW5mbyAucGxhbi10aXRsZSB7XG4gIG1hcmdpbjogMzBweCAwIDUwcHg7XG59XG4uZWRnZS1pbmZvIC5wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoM24rMSkge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgzbisyKSB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmVkZ2UtaW5mbyAucGFuZWw6bnRoLWNoaWxkKDNuKzMpIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG4uZWRnZS1pbmZvIC5wYW5lbC5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uZWRnZS1pbmZvIC5wYW5lbC5iZy13aGl0ZSBwIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoMSkgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoMikgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoMykgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoNCkgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoNSkgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4uZWRnZS1pbmZvIC5wYW5lbCBzcGFuIHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLmVkZ2UtaW5mbyAuaGVhZGluZy10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lZGdlLWluZm8gLmhlYWRpbmctdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmVkZ2UtaW5mbyAuZXh0cmEtaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lZGdlLWluZm8gLmV4dHJhLWluZm8gLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnNlY3Rpb24tZXhwbGljaXQge1xuICBtYXJnaW46IDcwcHggMHB4O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnJvdyB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uc2VjdGlvbi1leHBsaWNpdCBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAuYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5iYXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLmV4cGxpY2l0LXNlYyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5leHBsaWNpdC1zZWMgLmFkZC1pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAycHg7XG4gIGhlaWdodDogMzI1cHg7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAuZXhwbGljaXQtc2VjIC5hZGQtaW5mbzpmaXJzdC1jaGlsZCAucGFuZWwge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLmFkbWlzc2lvbi1mbGFnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjVweCAwO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLmFkbWlzc2lvbi1mbGFnIC5idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IHAge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAucGFuZWwgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsIGg2IHtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAucGFuZWwgaSB7XG4gIG1hcmdpbjogMjVweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbCBzdmcge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsOmhvdmVyLCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWwuYWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsOmhvdmVyIC5wYW5lbC1oZWFkaW5nIC5iYXI6OmFmdGVyLCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWwuYWN0aXZlIC5wYW5lbC1oZWFkaW5nIC5iYXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsOmhvdmVyIC5wYW5lbC1oZWFkaW5nIGg2LCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWw6aG92ZXIgLnBhbmVsLWhlYWRpbmcgcCwgLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsOmhvdmVyIC5wYW5lbC1oZWFkaW5nIGgxLCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWw6aG92ZXIgLnBhbmVsLWhlYWRpbmcgYSwgLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsLmFjdGl2ZSAucGFuZWwtaGVhZGluZyBoNiwgLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsLmFjdGl2ZSAucGFuZWwtaGVhZGluZyBwLCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWwuYWN0aXZlIC5wYW5lbC1oZWFkaW5nIGgxLCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWwuYWN0aXZlIC5wYW5lbC1oZWFkaW5nIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbDpob3ZlciBzdmcsIC5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbC5hY3RpdmUgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbn1cblxuLnRhYi1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3ctZiwgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmJyZWFkY3VtIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5pbWctZmxhZyB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsLWJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */";
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

        this.explicitConfig = {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          autoplay: false,
          autoplaySpeed: 1500,
          arrows: false,
          responsive: [{
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }, {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }]
        };
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


    __webpack_exports__["default"] = ".section-study-culture .row-f, .section-study-culture .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-study-culture .story {\n  background: #fff;\n}\n.section-study-culture .add-spec {\n  margin: 0 0 0 35px;\n}\n.section-study-culture .add-spec .row {\n  margin: 0px;\n}\n.section-study-culture .add-spec .panel {\n  padding: 0;\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-study-culture .add-spec .panel p {\n  margin-top: 25px;\n}\n.section-study-culture .curriculum {\n  margin-bottom: 0px;\n}\n.section-study-culture .panel {\n  background: #fff;\n  padding: 50px;\n  padding-bottom: 0px;\n}\n.section-study-culture .panel .panel-body {\n  width: 50%;\n}\n.section-study-culture .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n  padding-bottom: 30px;\n}\n.section-study-culture .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-study-culture .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-study-culture .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-study-culture h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-study-culture h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-study-culture h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-study-culture .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-study-culture ul.list {\n  margin: 0px;\n}\n.section-study-culture ul.list li {\n  color: #000;\n}\n.section-study-culture ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .panel {\n    padding: 40px 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n  .section-study-culture .sub-header-image {\n    display: none;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlcHJlbWlhbnN0b3J5L0Y6XFxnaXRodWJcXGFjYWRlbXkvc3JjXFxhcHBcXHRoZXByZW1pYW5zdG9yeVxcdGhlcHJlbWlhbnN0b3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVwcmVtaWFuc3RvcnkvdGhlcHJlbWlhbnN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0Msb0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUM7RUFDQyxnQkFBQTtBQ0FGO0FERUM7RUFDTyxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxXQUFBO0FDQ1o7QURDSztFQUNPLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ1o7QURBWTtFQUNJLGdCQUFBO0FDRWhCO0FERUM7RUFDQyxrQkFBQTtBQ0FGO0FERUM7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FGO0FEQ0U7RUFDQyxVQUFBO0FDQ0g7QURDRTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNDSDtBREFHO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0VKO0FEREk7RUFDQyxVQUFBO0VBQ0Esd0JBQUE7RUFDRyxlQUFBO0FDR1I7QURBRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0VKO0FER0M7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0FDREY7QURHQztFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDREY7QURFRTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0FIO0FER0M7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0RGO0FER0M7RUFDQyxXQUFBO0FDREY7QURFRTtFQUNDLFdBQUE7QUNBSDtBRENHO0VBQ0MsbUJBQUE7QUNDSjtBREtBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNGRDtBREdDO0VBQ0Msd0JBQUE7QUNERjtBREtBO0VBRUU7SUFDQyxnQkFBQTtFQ0hEO0VES0Q7SUFDQyxpQkFBQTtFQ0hBO0VES0Q7SUFDQyxpQkFBQTtFQ0hBO0VES0Q7SUFDQyxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VDSEE7RURLRDtJQUNDLGFBQUE7RUNIQTtFREtEO0lBQ0MsV0FBQTtFQ0hBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90aGVwcmVtaWFuc3RvcnkvdGhlcHJlbWlhbnN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tc3R1ZHktY3VsdHVyZXtcclxuXHQucm93LWYsIC5yb3d7XHJcblx0XHRtYXJnaW46NzBweCAwIDEwMHB4OyBcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LnN0b3J5e1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdH1cclxuXHQuYWRkLXNwZWN7XHJcbiAgICAgICAgbWFyZ2luOjAgMCAwIDM1cHg7XHJcbiAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICB9XHJcbiAgICAgLnBhbmVse1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHQuY3VycmljdWx1bXtcclxuXHRcdG1hcmdpbi1ib3R0b206MHB4O1xyXG5cdH1cclxuXHQucGFuZWwge1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0cGFkZGluZzo1MHB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDBweDtcclxuXHRcdC5wYW5lbC1ib2R5e1xyXG5cdFx0XHR3aWR0aDo1MCU7XHJcblx0XHR9XHJcblx0XHQmLnN0b3J5LWluZm97XHJcblx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG5cdFx0XHQuZmx5aW5nLXBsYW5le1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0XHR0b3A6MHB4O1xyXG5cdFx0XHRcdHN2Z3tcclxuXHRcdFx0XHRcdGZpbGw6ICNmZmY7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICBcdFx0XHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0dG9wOjUwcHg7XHJcblx0XHRcdFx0d2lkdGg6IDNweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdGgxe1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcblx0fVxyXG5cdGgye1xyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTo1cHg7XHJcblx0XHRsaW5lLWhlaWdodDogNjBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdGNvbnRlbnQ6XCIgXCI7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0Ym90dG9tOjA7XHJcblx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0d2lkdGg6NTBweDtcclxuXHRcdFx0aGVpZ2h0OjJweDtcclxuXHRcdFx0YmFja2dyb3VuZDojZjBmMGYwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDowO1xyXG5cdFx0dG9wOjA7XHJcblx0XHR3aWR0aDo0MCU7XHJcblx0fVxyXG5cdHVsLmxpc3R7XHJcblx0XHRtYXJnaW46MHB4O1xyXG5cdFx0bGl7XHJcblx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5tb3JlLWluZm97XHJcblx0ZmxvYXQ6bm9uZTtcclxuXHRjbGVhcjpib3RoO1xyXG5cdHB7XHJcblx0XHRtYXJnaW46NTBweCAwIDcwcHggNzVweCA7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdC5zZWN0aW9uLXN0dWR5LWN1bHR1cmV7XHJcblx0XHQucm93LWYsIC5yb3csIGgxe1xyXG5cdFx0XHRtYXJnaW4tbGVmdDowcHg7IFxyXG5cdH1cclxuXHQucGFuZWx7XHJcblx0XHRwYWRkaW5nOjQwcHggMHB4O1xyXG5cdH1cclxuXHQuYnJlYWRjdW17XHJcblx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwYWRkaW5nOjE1cHg7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcblx0LnN1Yi1oZWFkZXItaW1hZ2V7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG5cdC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcbn1cclxufSIsIi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdy1mLCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3cge1xuICBtYXJnaW46IDcwcHggMCAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuc3Rvcnkge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuYWRkLXNwZWMge1xuICBtYXJnaW46IDAgMCAwIDM1cHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5hZGQtc3BlYyAucm93IHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5hZGQtc3BlYyAucGFuZWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmFkZC1zcGVjIC5wYW5lbCBwIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmN1cnJpY3VsdW0ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC5zdG9yeS1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC5zdG9yeS1pbmZvIC5mbHlpbmctcGxhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC5zdG9yeS1pbmZvIC5mbHlpbmctcGxhbmUgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC5zdG9yeS1pbmZvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDUwcHg7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDEge1xuICBtYXJnaW4tbGVmdDogNjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMjo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5pbWctZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDQwJTtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgdWwubGlzdCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSB1bC5saXN0IGxpIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIHVsLmxpc3QgbGk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG5cbi5tb3JlLWluZm8ge1xuICBmbG9hdDogbm9uZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4ubW9yZS1pbmZvIHAge1xuICBtYXJnaW46IDUwcHggMCA3MHB4IDc1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3ctZiwgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsIHtcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5icmVhZGN1bSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuaW1nLWZsYWcge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5zdWItaGVhZGVyLWltYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsLWJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */";
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


    __webpack_exports__["default"] = ".section-study-culture .sub-header {\n  background: #fff;\n}\n.section-study-culture .row-f, .section-study-culture .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-study-culture .curriculum {\n  margin-bottom: 0px;\n}\n.section-study-culture .curriculum .curriculum-1 {\n  padding: 0;\n  background: #fff;\n}\n.section-study-culture .curriculum .curriculum-1 .panel {\n  padding: 0px 30px;\n}\n.section-study-culture .curriculum .curriculum-1 p {\n  padding: 30px;\n}\n.section-study-culture .curriculum .curriculum-1 .img-flag {\n  width: 100%;\n  top: -100px;\n}\n.section-study-culture .curriculum .curriculum-1 .image-wrap {\n  width: 50%;\n  margin: -120px 0 26px 50px;\n}\n.section-study-culture .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-study-culture .panel .panel-body {\n  width: 50%;\n}\n.section-study-culture h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-study-culture h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-study-culture h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-study-culture .our-mission .img-flag {\n  left: 0px;\n  z-index: 1;\n  top: -25px;\n}\n.section-study-culture .our-mission .panel {\n  float: right;\n}\n.section-study-culture .our-mission .panel-body {\n  margin-left: 50%;\n}\n.section-study-culture .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-study-culture ul.list {\n  margin: 0px;\n}\n.section-study-culture ul.list li {\n  color: #000;\n}\n.section-study-culture ul.list li::before {\n  background: #bf272d;\n}\n.edge-info {\n  margin: 100px 0 0 0 !important;\n}\n.edge-info .plan-title {\n  margin: 80px 0 50px;\n}\n.edge-info .panel {\n  margin-bottom: 50px;\n}\n.edge-info .panel:nth-child(3n+1) {\n  background: #3e65ac;\n  color: #fff;\n}\n.edge-info .panel:nth-child(3n+2) {\n  background: #bf272d;\n  color: #fff;\n}\n.edge-info .panel:nth-child(3n+3) {\n  background: #000;\n  color: #fff;\n}\n.edge-info .panel.bg-white {\n  background: #fff;\n}\n.edge-info .panel.bg-white p {\n  color: #000;\n}\n.edge-info .panel:nth-child(1) span {\n  background: #3e65ac;\n}\n.edge-info .panel:nth-child(2) span {\n  background: #bf272d;\n}\n.edge-info .panel:nth-child(3) span {\n  background: #000;\n}\n.edge-info .panel:nth-child(4) span {\n  background: #3e65ac;\n}\n.edge-info .panel:nth-child(5) span {\n  background: #bf272d;\n}\n.edge-info .panel span {\n  z-index: 1;\n  position: relative;\n  padding-right: 15px;\n}\n.edge-info .heading-title {\n  position: relative;\n}\n.edge-info .heading-title::after {\n  content: \"\";\n  position: absolute;\n  top: 18px;\n  left: 0px;\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n.edge-info .extra-info {\n  position: relative;\n}\n.edge-info .extra-info .panel .panel-body {\n  width: 50%;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info h2 {\n  margin: 30px 0 0;\n}\n.more-info .panel {\n  background: #bf272d;\n  margin-top: 35px;\n  margin-bottom: 70px;\n}\n.more-info .panel ul.list li {\n  color: #fff;\n}\n.more-info .panel ul.list li::before {\n  background: #fff;\n}\n.more-info p {\n  color: #fff;\n}\n.more-info-2 .panel {\n  background: #fff;\n}\n.our-belief h2 {\n  color: #bf272d;\n}\n.our-belief .panel {\n  background: #3e65ac;\n  color: #fff;\n}\n.our-belief .panel ul.list li {\n  color: #fff;\n}\n.our-belief .panel ul.list li::before {\n  background: #fff;\n}\n.our-partners .panel {\n  padding: 30px 50px;\n}\n.our-partners .panel p, .our-partners .panel a {\n  color: #fff;\n}\n.our-partners .panel p {\n  font-size: 20px;\n}\n.our-partners .panel a {\n  font-size: 24px;\n}\n.our-partners:nth-child(1) .panel {\n  background: #3e65ac;\n}\n.our-partners:nth-child(1) .panel .heading-title span {\n  background: #3e65ac;\n}\n.our-partners:nth-child(2) .panel {\n  background: #bf272d;\n}\n.our-partners:nth-child(2) .panel .heading-title span {\n  background: #bf272d;\n}\n.our-partners:nth-child(3) .panel {\n  background: #000000;\n}\n.our-partners:nth-child(3) .panel .heading-title span {\n  background: #000000;\n}\n.our-partners:nth-child(4) .panel {\n  background: #e0e0e0;\n}\n.our-partners:nth-child(4) .panel .heading-title span {\n  background: #e0e0e0;\n  color: #000;\n}\n.our-partners:nth-child(4) .panel .heading-title::after {\n  background: #000;\n}\n.our-partners:nth-child(4) .panel p, .our-partners:nth-child(4) .panel a {\n  color: #000;\n}\n.our-partners:nth-child(5) .panel {\n  background: #ffffff;\n}\n.our-partners:nth-child(5) .panel .heading-title span {\n  background: #ffffff;\n  color: #000;\n}\n.our-partners:nth-child(5) .panel .heading-title::after {\n  background: #000;\n}\n.our-partners:nth-child(5) .panel p, .our-partners:nth-child(5) .panel a {\n  color: #000;\n}\n.our-partners:nth-child(6) .panel {\n  background: #3e65ac;\n}\n.our-partners:nth-child(6) .panel .heading-title span {\n  background: #3e65ac;\n}\n.our-partners:nth-child(7) .panel {\n  background: #bf272d;\n}\n.our-partners:nth-child(7) .panel .heading-title span {\n  background: #bf272d;\n}\n.our-partners .img-box {\n  box-sizing: border-box;\n  display: inline;\n  width: 315px;\n}\n.our-partners .img-box ~ div {\n  display: inline-block;\n  margin-left: 20px;\n}\n.our-partners .img-box img {\n  width: auto;\n}\n.our-partners .heading-title {\n  display: block;\n  text-align: center;\n  position: relative;\n  margin: 0px;\n}\n.our-partners .heading-title span {\n  padding: 0 15px;\n  position: relative;\n  z-index: 1;\n  color: #fff;\n}\n.our-partners .heading-title::after {\n  content: \" \";\n  position: absolute;\n  top: 20px;\n  left: 1px;\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n\n  .section-study-culture .our-mission {\n    margin: 0 15px;\n  }\n  .section-study-culture .our-mission .panel-body {\n    margin-left: 0;\n  }\n  .section-study-culture .our-mission .panel {\n    float: none;\n  }\n  .section-study-culture .our-mission .img-flag {\n    padding: 15px 0;\n  }\n  .section-study-culture .curriculum .curriculum-1 .image-wrap {\n    width: 100%;\n    margin: 30px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlc3R1ZHljdWx0dXJlL0Y6XFxnaXRodWJcXGFjYWRlbXkvc3JjXFxhcHBcXHRoZXN0dWR5Y3VsdHVyZVxcdGhlc3R1ZHljdWx0dXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVzdHVkeWN1bHR1cmUvdGhlc3R1ZHljdWx0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQVksZ0JBQUE7QUNDYjtBREFDO0VBQ0Msb0JBQUE7RUFDQSxrQkFBQTtBQ0VGO0FEQUM7RUFDQyxrQkFBQTtBQ0VGO0FEREU7RUFJQyxVQUFBO0VBQ0EsZ0JBQUE7QUNBSDtBREpHO0VBQ0MsaUJBQUE7QUNNSjtBREZHO0VBQ0MsYUFBQTtBQ0lKO0FERkc7RUFDQyxXQUFBO0VBQ0EsV0FBQTtBQ0lKO0FERkc7RUFDQyxVQUFBO0VBQ0EsMEJBQUE7QUNJSjtBREFDO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0FDRUY7QURERTtFQUNDLFVBQUE7QUNHSDtBRENDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNFSDtBREVFO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQUg7QURFRTtFQUNDLFlBQUE7QUNBSDtBREVFO0VBQ0MsZ0JBQUE7QUNBSDtBREdDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNERjtBREdDO0VBQ0MsV0FBQTtBQ0RGO0FERUU7RUFDQyxXQUFBO0FDQUg7QURDRztFQUNDLG1CQUFBO0FDQ0o7QURPQTtFQUNJLDhCQUFBO0FDSko7QURLSTtFQUNJLG1CQUFBO0FDSFI7QURnQkE7RUFFSSxtQkFBQTtBQ2ZKO0FETUk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNKUjtBREVJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDQVI7QURGSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQ0lSO0FESUc7RUFDSyxnQkFBQTtBQ0ZSO0FER1E7RUFDSSxXQUFBO0FDRFo7QURNUTtFQUNJLG1CQUFBO0FDSlo7QURRUTtFQUNJLG1CQUFBO0FDTlo7QURVUTtFQUNJLGdCQUFBO0FDUlo7QURjUTtFQUNJLG1CQUFBO0FDWlo7QURlUTtFQUNJLG1CQUFBO0FDYlo7QURnQkk7RUFFSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2ZSO0FEbUJJO0VBQ0ksa0JBQUE7QUNqQlI7QURtQlE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNqQlo7QURvQkM7RUFDQyxrQkFBQTtBQ2xCRjtBRG9CRztFQUNDLFVBQUE7QUNsQko7QUR5QkE7RUFpQkMsV0FBQTtFQUNBLFdBQUE7QUN0Q0Q7QURxQkM7RUFDQyxnQkFBQTtBQ25CRjtBRHFCQztFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ25CRjtBRHFCRztFQUNDLFdBQUE7QUNuQko7QURvQkc7RUFDQyxnQkFBQTtBQ2xCSjtBRHlCQztFQUNDLFdBQUE7QUN2QkY7QUQ0QkM7RUFDQyxnQkFBQTtBQ3pCRjtBRDhCQztFQUNDLGNBQUE7QUMzQkY7QUQ2QkM7RUFDQyxtQkFBQTtFQUNBLFdBQUE7QUMzQkY7QUQ2Qkc7RUFDQyxXQUFBO0FDM0JKO0FENEJJO0VBQ0MsZ0JBQUE7QUMxQkw7QURrQ0M7RUFDQyxrQkFBQTtBQy9CRjtBRGdDRTtFQUNDLFdBQUE7QUM5Qkg7QURnQ0U7RUFDQyxlQUFBO0FDOUJIO0FEZ0NFO0VBQ0MsZUFBQTtBQzlCSDtBRGtDRTtFQUNDLG1CQUFBO0FDaENIO0FEa0NJO0VBQ0MsbUJBQUE7QUNoQ0w7QUR1Q0U7RUFDQyxtQkFBQTtBQ3JDSDtBRHVDSTtFQUNDLG1CQUFBO0FDckNMO0FENENFO0VBQ0MsbUJBQUE7QUMxQ0g7QUQ0Q0k7RUFDQyxtQkFBQTtBQzFDTDtBRGdERTtFQUNDLG1CQUFBO0FDOUNIO0FEZ0RJO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0FDOUNMO0FEZ0RJO0VBQ0MsZ0JBQUE7QUM5Q0w7QURpREc7RUFDQyxXQUFBO0FDL0NKO0FEb0RFO0VBQ0MsbUJBQUE7QUNsREg7QURvREk7RUFDQyxtQkFBQTtFQUNBLFdBQUE7QUNsREw7QURvREk7RUFDQyxnQkFBQTtBQ2xETDtBRHFERztFQUNDLFdBQUE7QUNuREo7QUR3REU7RUFDQyxtQkFBQTtBQ3RESDtBRHdESTtFQUNDLG1CQUFBO0FDdERMO0FENERFO0VBQ0MsbUJBQUE7QUMxREg7QUQ0REk7RUFDQyxtQkFBQTtBQzFETDtBRCtEQztFQUNDLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUM3REY7QUQ4REU7RUFDQyxxQkFBQTtFQUNBLGlCQUFBO0FDNURIO0FEOERFO0VBQ0MsV0FBQTtBQzVESDtBRCtEQztFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQzdERjtBRDhERTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDNURIO0FEOERFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDNURIO0FEaUVBO0VBRUU7SUFDQyxnQkFBQTtFQy9ERDtFRGlFRDtJQUNDLGlCQUFBO0VDL0RBO0VEaUVEO0lBQ0MsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQy9EQTs7RURtRUQ7SUFDQyxjQUFBO0VDaEVBO0VEaUVBO0lBQ0MsY0FBQTtFQy9ERDtFRGlFQTtJQUNDLFdBQUE7RUMvREQ7RURpRUE7SUFDQyxlQUFBO0VDL0REO0VEb0VDO0lBQ0MsV0FBQTtJQUNBLGNBQUE7RUNsRUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RoZXN0dWR5Y3VsdHVyZS90aGVzdHVkeWN1bHR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdC5zdWItaGVhZGVye2JhY2tncm91bmQ6I2ZmZjt9XHJcblx0LnJvdy1mLCAucm93e1xyXG5cdFx0bWFyZ2luOjcwcHggMCAxMDBweDsgXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5jdXJyaWN1bHVte1xyXG5cdFx0bWFyZ2luLWJvdHRvbTowcHg7XHJcblx0XHQuY3VycmljdWx1bS0xe1xyXG5cdFx0XHQucGFuZWwge1xyXG5cdFx0XHRcdHBhZGRpbmc6MHB4IDMwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0cGFkZGluZzowO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRcdHB7XHJcblx0XHRcdFx0cGFkZGluZzozMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5pbWctZmxhZ3tcclxuXHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdHRvcDotMTAwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LmltYWdlLXdyYXB7XHJcblx0XHRcdFx0d2lkdGg6IDUwJTtcclxuXHRcdFx0XHRtYXJnaW46IC0xMjBweCAwIDI2cHggNTBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQucGFuZWwge1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0cGFkZGluZzo1MHB4O1xyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRoMXtcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdH1cclxuXHRoMntcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZy1ib3R0b206NXB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OlwiIFwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTowO1xyXG5cdFx0XHRsZWZ0OjA7XHJcblx0XHRcdHdpZHRoOjUwcHg7XHJcblx0XHRcdGhlaWdodDoycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2YwZjBmMDtcclxuXHRcdH1cclxuXHR9XHJcblx0Lm91ci1taXNzaW9ue1xyXG5cdFx0LmltZy1mbGFne1xyXG5cdFx0XHRsZWZ0OiAwcHg7XHJcblx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdHRvcDogLTI1cHg7XHJcblx0XHR9XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdGZsb2F0OnJpZ2h0O1xyXG5cdFx0fVxyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjUwJTtcclxuXHRcdH1cclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHR9XHJcblx0dWwubGlzdHtcclxuXHRcdG1hcmdpbjowcHg7XHJcblx0XHRsaXtcclxuXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4uZWRnZS1pbmZve1xyXG4gICAgbWFyZ2luOjEwMHB4IDAgMCAwICFpbXBvcnRhbnQ7XHJcbiAgICAucGxhbi10aXRsZXtcclxuICAgICAgICBtYXJnaW46ODBweCAwIDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJGJnLWNvbG9yczogIzNlNjVhYywgI2JmMjcyZCwgIzAwMDtcclxuQG1peGluIGFsdGVybmF0aW5nLWJhY2tncm91bmQge1xyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRiZy1jb2xvcnMpIHtcclxuICAgICY6bnRoLWNoaWxkKCN7bGVuZ3RoKCRiZy1jb2xvcnMpfW4rI3skaX0pIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAobnRoKCRiZy1jb2xvcnMsICRpKSk7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wYW5lbHtcclxuICAgIEBpbmNsdWRlIGFsdGVybmF0aW5nLWJhY2tncm91bmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgICYuYmctd2hpdGV7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDA7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgXHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNlNjVhYztcclxuICAgIH1cclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiZjI3MmQ7XHJcbiAgICB9IFxyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIH0gXHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdCY6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzZTY1YWM7XHJcblx0fX1cclxuXHQmOm50aC1jaGlsZCg1KXtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xyXG4gICAgfX1cclxuXHJcbiAgICBzcGFue1xyXG4gICAgICAgXHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuICAgIC5oZWFkaW5nLXRpdGxle1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgIFxyXG4gICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDoxOHB4O1xyXG4gICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblx0LmV4dHJhLWluZm97XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdC5wYW5lbC1ib2R5e1xyXG5cdFx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbi5tb3JlLWluZm97XHJcblx0aDJ7XHJcblx0XHRtYXJnaW46MzBweCAwIDA7XHJcblx0fVxyXG5cdC5wYW5lbHtcclxuXHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdG1hcmdpbi10b3A6IDM1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG5cdFx0dWwubGlzdHtcclxuXHRcdFx0bGkge1xyXG5cdFx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHR9XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRmbG9hdDpub25lO1xyXG5cdGNsZWFyOmJvdGg7XHJcblx0cHtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0fVxyXG59XHJcblxyXG4ubW9yZS1pbmZvLTJ7XHJcblx0LnBhbmVse1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdH1cclxufVxyXG5cclxuLm91ci1iZWxpZWZ7XHJcblx0aDJ7XHJcblx0XHRjb2xvcjojYmYyNzJkO1xyXG5cdH1cclxuXHQucGFuZWx7XHJcblx0XHRiYWNrZ3JvdW5kOiMzZTY1YWM7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0dWwubGlzdHtcclxuXHRcdFx0bGl7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0XHRcdH1cclxuXHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5vdXItcGFydG5lcnN7XHJcblx0LnBhbmVse1xyXG5cdFx0cGFkZGluZzozMHB4IDUwcHg7XHJcblx0XHRwLGF7XHJcblx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHR9XHJcblx0XHRwe1xyXG5cdFx0XHRmb250LXNpemU6MjBweDtcclxuXHRcdH1cclxuXHRcdGF7XHJcblx0XHRcdGZvbnQtc2l6ZToyNHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQmOm50aC1jaGlsZCgxKXtcclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0YmFja2dyb3VuZDogIzNlNjVhYztcdFxyXG5cdFx0XHQuaGVhZGluZy10aXRsZXtcclxuXHRcdFx0XHRzcGFue1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzNlNjVhYztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQmOm50aC1jaGlsZCgyKXtcclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0YmFja2dyb3VuZDogI2JmMjcyZDtcclxuXHRcdFx0LmhlYWRpbmctdGl0bGV7XHJcblx0XHRcdFx0c3BhbntcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNiZjI3MmQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cdFxyXG5cdFx0fVxyXG5cdH1cclxuXHQmOm50aC1jaGlsZCgzKXtcclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0YmFja2dyb3VuZDogIzAwMDAwMDtcclxuXHRcdFx0LmhlYWRpbmctdGl0bGV7XHJcblx0XHRcdFx0c3BhbntcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHR9XHJcblx0JjpudGgtY2hpbGQoNCl7XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcblx0XHRcdC5oZWFkaW5nLXRpdGxle1xyXG5cdFx0XHRcdHNwYW57XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG5cdFx0XHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRwLGF7XHJcblx0XHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0fVx0XHJcblx0XHR9XHJcblx0fVxyXG5cdCY6bnRoLWNoaWxkKDUpe1xyXG5cdFx0LnBhbmVse1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdFx0XHQuaGVhZGluZy10aXRsZXtcclxuXHRcdFx0XHRzcGFue1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHRcdFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzAwMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cCxhe1xyXG5cdFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdH1cdFxyXG5cdFx0fVxyXG5cdH1cclxuXHQmOm50aC1jaGlsZCg2KXtcclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0YmFja2dyb3VuZDogIzNlNjVhYztcclxuXHRcdFx0LmhlYWRpbmctdGl0bGV7XHJcblx0XHRcdFx0c3BhbntcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzZTY1YWM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHR9XHJcblx0JjpudGgtY2hpbGQoNyl7XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNiZjI3MmQ7XHJcblx0XHRcdC5oZWFkaW5nLXRpdGxle1xyXG5cdFx0XHRcdHNwYW57XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjYmYyNzJkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVx0XHJcblx0XHR9XHJcblx0fVxyXG5cdC5pbWctYm94e1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGRpc3BsYXk6aW5saW5lO1xyXG5cdFx0d2lkdGg6MzE1cHg7XHJcblx0XHQmfmRpdntcclxuXHRcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjIwcHg7XHRcclxuXHRcdH1cclxuXHRcdGltZ3tcclxuXHRcdFx0d2lkdGg6YXV0bztcclxuXHRcdH1cclxuXHR9XHJcblx0LmhlYWRpbmctdGl0bGV7XHJcblx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRtYXJnaW46MHB4O1xyXG5cdFx0c3BhbntcclxuXHRcdFx0cGFkZGluZzowIDE1cHg7XHJcblx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0fVxyXG5cdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDoyMHB4O1xyXG5cdFx0XHRsZWZ0OjFweDtcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0aGVpZ2h0OjFweDtcclxuXHRcdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdFx0LnJvdy1mLCAucm93LCBoMXtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4OyBcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG59XHJcbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUge1xyXG5cdC5vdXItbWlzc2lvbntcclxuXHRcdG1hcmdpbjogMCAxNXB4O1xyXG5cdFx0LnBhbmVsLWJvZHkge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0ZmxvYXQ6bm9uZTtcclxuXHRcdH1cclxuXHRcdC5pbWctZmxhZ3tcclxuXHRcdFx0cGFkZGluZzoxNXB4IDA7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jdXJyaWN1bHVte1xyXG5cdFx0LmN1cnJpY3VsdW0tMXtcclxuXHRcdFx0LmltYWdlLXdyYXB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0bWFyZ2luOiAzMHB4IDA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxufSIsIi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnN1Yi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LWYsIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdyB7XG4gIG1hcmdpbjogNzBweCAwIDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuY3VycmljdWx1bSAuY3VycmljdWx1bS0xIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmN1cnJpY3VsdW0gLmN1cnJpY3VsdW0tMSAucGFuZWwge1xuICBwYWRkaW5nOiAwcHggMzBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmN1cnJpY3VsdW0gLmN1cnJpY3VsdW0tMSBwIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmN1cnJpY3VsdW0gLmN1cnJpY3VsdW0tMSAuaW1nLWZsYWcge1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAtMTAwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLTEgLmltYWdlLXdyYXAge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IC0xMjBweCAwIDI2cHggNTBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNTBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDEge1xuICBtYXJnaW4tbGVmdDogNjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMjo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5vdXItbWlzc2lvbiAuaW1nLWZsYWcge1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogLTI1cHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5vdXItbWlzc2lvbiAucGFuZWwge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5vdXItbWlzc2lvbiAucGFuZWwtYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5pbWctZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgdWwubGlzdCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSB1bC5saXN0IGxpIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIHVsLmxpc3QgbGk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG5cbi5lZGdlLWluZm8ge1xuICBtYXJnaW46IDEwMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG59XG4uZWRnZS1pbmZvIC5wbGFuLXRpdGxlIHtcbiAgbWFyZ2luOiA4MHB4IDAgNTBweDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgzbisxKSB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmVkZ2UtaW5mbyAucGFuZWw6bnRoLWNoaWxkKDNuKzIpIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgY29sb3I6ICNmZmY7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoM24rMykge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5lZGdlLWluZm8gLnBhbmVsLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5lZGdlLWluZm8gLnBhbmVsLmJnLXdoaXRlIHAge1xuICBjb2xvcjogIzAwMDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgxKSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgyKSBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgzKSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCg0KSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCg1KSBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5lZGdlLWluZm8gLnBhbmVsIHNwYW4ge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4uZWRnZS1pbmZvIC5oZWFkaW5nLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmVkZ2UtaW5mbyAuaGVhZGluZy10aXRsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMThweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uZWRnZS1pbmZvIC5leHRyYS1pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmVkZ2UtaW5mbyAuZXh0cmEtaW5mbyAucGFuZWwgLnBhbmVsLWJvZHkge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubW9yZS1pbmZvIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGNsZWFyOiBib3RoO1xufVxuLm1vcmUtaW5mbyBoMiB7XG4gIG1hcmdpbjogMzBweCAwIDA7XG59XG4ubW9yZS1pbmZvIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG4ubW9yZS1pbmZvIC5wYW5lbCB1bC5saXN0IGxpIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubW9yZS1pbmZvIC5wYW5lbCB1bC5saXN0IGxpOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLm1vcmUtaW5mbyBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tb3JlLWluZm8tMiAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ub3VyLWJlbGllZiBoMiB7XG4gIGNvbG9yOiAjYmYyNzJkO1xufVxuLm91ci1iZWxpZWYgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgY29sb3I6ICNmZmY7XG59XG4ub3VyLWJlbGllZiAucGFuZWwgdWwubGlzdCBsaSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm91ci1iZWxpZWYgLnBhbmVsIHVsLmxpc3QgbGk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5vdXItcGFydG5lcnMgLnBhbmVsIHtcbiAgcGFkZGluZzogMzBweCA1MHB4O1xufVxuLm91ci1wYXJ0bmVycyAucGFuZWwgcCwgLm91ci1wYXJ0bmVycyAucGFuZWwgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm91ci1wYXJ0bmVycyAucGFuZWwgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5vdXItcGFydG5lcnMgLnBhbmVsIGEge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4ub3VyLXBhcnRuZXJzOm50aC1jaGlsZCgxKSAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xufVxuLm91ci1wYXJ0bmVyczpudGgtY2hpbGQoMSkgLnBhbmVsIC5oZWFkaW5nLXRpdGxlIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xufVxuLm91ci1wYXJ0bmVyczpudGgtY2hpbGQoMikgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDIpIC5wYW5lbCAuaGVhZGluZy10aXRsZSBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDMpIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG4ub3VyLXBhcnRuZXJzOm50aC1jaGlsZCgzKSAucGFuZWwgLmhlYWRpbmctdGl0bGUgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG4ub3VyLXBhcnRuZXJzOm50aC1jaGlsZCg0KSAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xufVxuLm91ci1wYXJ0bmVyczpudGgtY2hpbGQoNCkgLnBhbmVsIC5oZWFkaW5nLXRpdGxlIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDQpIC5wYW5lbCAuaGVhZGluZy10aXRsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuLm91ci1wYXJ0bmVyczpudGgtY2hpbGQoNCkgLnBhbmVsIHAsIC5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDQpIC5wYW5lbCBhIHtcbiAgY29sb3I6ICMwMDA7XG59XG4ub3VyLXBhcnRuZXJzOm50aC1jaGlsZCg1KSAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLm91ci1wYXJ0bmVyczpudGgtY2hpbGQoNSkgLnBhbmVsIC5oZWFkaW5nLXRpdGxlIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzAwMDtcbn1cbi5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDUpIC5wYW5lbCAuaGVhZGluZy10aXRsZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuLm91ci1wYXJ0bmVyczpudGgtY2hpbGQoNSkgLnBhbmVsIHAsIC5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDUpIC5wYW5lbCBhIHtcbiAgY29sb3I6ICMwMDA7XG59XG4ub3VyLXBhcnRuZXJzOm50aC1jaGlsZCg2KSAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xufVxuLm91ci1wYXJ0bmVyczpudGgtY2hpbGQoNikgLnBhbmVsIC5oZWFkaW5nLXRpdGxlIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xufVxuLm91ci1wYXJ0bmVyczpudGgtY2hpbGQoNykgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDcpIC5wYW5lbCAuaGVhZGluZy10aXRsZSBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5vdXItcGFydG5lcnMgLmltZy1ib3gge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdpZHRoOiAzMTVweDtcbn1cbi5vdXItcGFydG5lcnMgLmltZy1ib3ggfiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm91ci1wYXJ0bmVycyAuaW1nLWJveCBpbWcge1xuICB3aWR0aDogYXV0bztcbn1cbi5vdXItcGFydG5lcnMgLmhlYWRpbmctdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4O1xufVxuLm91ci1wYXJ0bmVycyAuaGVhZGluZy10aXRsZSBzcGFuIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm91ci1wYXJ0bmVycyAuaGVhZGluZy10aXRsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LWYsIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdywgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5icmVhZGN1bSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuaW1nLWZsYWcge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLm91ci1taXNzaW9uIHtcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5vdXItbWlzc2lvbiAucGFuZWwtYm9keSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAub3VyLW1pc3Npb24gLnBhbmVsIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5vdXItbWlzc2lvbiAuaW1nLWZsYWcge1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLTEgLmltYWdlLXdyYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMzBweCAwO1xuICB9XG59Il19 */";
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
          info: ' Literacy'
        }, {
          info: ' Mathematics'
        }, {
          info: ' The World (Science and Social Studies)'
        }, {
          info: ' Expressive Arts and Design '
        }, {
          info: ' Personal, Social and Emotional Development'
        }, {
          info: ' Physical Development'
        }];
        this.curriculum = [{
          info: ' Sustained learning and the ability to apply concepts.'
        }, {
          info: ' Facilitate self-confidence and motivation'
        }, {
          info: ' A deeper understanding of science and math concepts '
        }, {
          info: ' Improved reading and writing skills'
        }, {
          info: ' Fostering positive attitudes and personal growth. '
        }, {
          info: ' Critical thinking skills and improved quality of work. '
        }, {
          info: ' Remarkable academic success'
        }];
        this.partner = [{
          description: "Metamor-\n    phosis",
          description_2: "An organisation that\n    seeks to empower the\n    youth with an\n    entrepreneurial skillset.",
          link: "http://www.metamor\n    phosisedu.com"
        }, {
          description: "Sportz Village",
          description_2: "A platform that focuses on the\n    aspects of physical education",
          link: "https://www.sportzvillage.com/schools/ "
        }, {
          description: "Furtados\n    School Of\n    Music",
          description_2: "One of the largest\n    music educators of India",
          link: "https://furtadosschoolofmusic.com"
        }, {
          description: "Yardstick",
          description_2: "Learning programs that\n    enhance the child's experience",
          link: " http://www.yardstickedu.com"
        }, {
          description: "NumberNagar",
          description_2: "An integrated program for Maths,\n    Science and English",
          link: "https://www.numbernagar.com/"
        }, {
          description: "Creya Learning",
          description_2: "An organisation that helps \n    children become inventors and innovators",
          link: "https://www.creyalearning.com/stem/"
        }, {
          description: "Book room from Scholastic",
          description_2: "Organising your books",
          link: "http://teacher.scholastic.com/products/leveledbookrooms/index.htm"
        }];
        this.moreInfo = [{
          info: ' Best possible start to learning ',
          info_2: 'Our caring, experienced teachers and teacher assistants give our youngest students the best possible start to learning. Our play-based learning environment captures their natural curiosity and sense of wonder. Our core subjects are complemented by all core subject classes, including Physical Education, Visual & Performing Arts and Music are all delivered in a warm, nurturing environment. '
        }, {
          info: ' A positive foundation for learning  ',
          info_2: 'At The Premia Academy children are introduced to a love of play and learning, by creating opportunities to explore, experiment, solve problems and express themselves as individuals. Sustained learning and the ability to apply concepts facilitates self-confidence and motivation. A deeper understanding of science and math concepts, improved reading and writing skills, fostering positive attitudes and personal growth, critical thinking skills and improved quality of work, will result in remarkable academic success. '
        }, {
          info: ' Personal development for life ',
          info_2: "Along with a positive start to learning, our teachers place an emphasis on oral language development and nurturing social relationships. Our teachers know a structured foundation is important for young children, to help them develop and grow into confident individuals. \n\n      An exceptional learning space is provided for our young students, with high-quality trained staff who care and guide the young children. \n      \n      \u202F \n      \n      A focus on the building blocks of education \u2013 literacy and numeracy- every advantage as the students\u2019 progress through their education.The integrated curriculum helps students develop skills and understandings needed to meet the demands of high school while continuing to inspire a thirst for learning. The literacy-based program with the world class Scholastic\u2019s Levelled Book Room provides an academic framework that encourages students to embrace and understand the connections between traditional subjects and the real world, and to become critical and reflective thinkers. "
        }, {
          info: ' Our Approach –   ',
          info_2: "Creating better opportunities for teacher-student planning and cooperative evaluation which leads to enhanced creative teaching and learning. Our process of learning and teaching comes from a fusion of knowledge with various activities, resources; and experiencing real-life situations for a solution-based approach. It also instils problem-solving, critical thinking and collaboration in and beyond the classroom. \n\n      We take a Student Centric approach with flexibility, innovation and other core values for essential life experiences. "
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


    __webpack_exports__["default"] = ".section-inner-subheader {\n  margin-bottom: 50px;\n}\n.section-inner-subheader .the-team-info {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  margin-top: 50px;\n}\n.section-inner-subheader .the-team-info .col {\n  padding: 0;\n}\n.section-inner-subheader .the-team-info .panel.img-info {\n  padding: 0px;\n  margin-bottom: 0;\n}\n.section-inner-subheader .panel {\n  color: #fff;\n  padding: 50px;\n  margin-bottom: 50px;\n}\n.section-inner-subheader .panel .panel-body {\n  margin-top: -70px;\n  z-index: -1;\n  position: relative;\n  padding: 80px 20px 1px;\n  border-radius: 25px 25px 0 0;\n}\n.section-inner-subheader .panel .panel-body h5 {\n  font-size: 16px;\n  background: #fff;\n  border-radius: 20px;\n  color: #bf272d;\n  text-align: center;\n  padding: 5px 0;\n  box-shadow: 1px 1px 3px 0px #0e0e0e;\n}\n.section-inner-subheader h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-inner-subheader h6 {\n  margin-left: 65px;\n}\n.section-inner-subheader .avtar {\n  background: #fff;\n}\n.section-inner-subheader .team-info {\n  margin-top: 50px;\n}\n.the-team-info img {\n  width: 70%;\n  text-align: center;\n  display: block;\n  margin: 0 auto;\n}\n.blue-bg {\n  background: #3e65ac;\n}\n.red-bg {\n  background: #bf272d;\n}\n.black-bg {\n  background: #000;\n}\n@media (max-width: 576px) {\n  .row-f, .row, h1 {\n    display: block;\n  }\n\n  .breadcum {\n    margin-left: 15px;\n  }\n\n  .img-flag {\n    padding: 15px 0px;\n    position: static;\n    width: 100%;\n  }\n\n  .panel-body {\n    width: 100%;\n  }\n\n  .avtar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhldGVhbS9GOlxcZ2l0aHViXFxhY2FkZW15L3NyY1xcYXBwXFx0aGV0ZWFtXFx0aGV0ZWFtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGV0ZWFtL3RoZXRlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBQTtBQ0NEO0FEQUM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0VGO0FEREU7RUFDQyxVQUFBO0FDR0g7QURERTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtBQ0dIO0FEQ0M7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURBRTtFQUNDLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0VIO0FEREc7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtBQ0dKO0FEQ0M7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDQztFQUNDLGlCQUFBO0FDQ0Y7QURDQztFQUNDLGdCQUFBO0FDQ0Y7QURDQztFQUNDLGdCQUFBO0FDQ0Y7QURHQztFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQUY7QURHQTtFQUNDLG1CQUFBO0FDQUQ7QURFQTtFQUNDLG1CQUFBO0FDQ0Q7QURDQTtFQUNDLGdCQUFBO0FDRUQ7QURDQTtFQUNFO0lBQ0MsY0FBQTtFQ0VEOztFREFEO0lBQ0MsaUJBQUE7RUNHQTs7RURERDtJQUNDLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VDSUE7O0VERkQ7SUFDQyxXQUFBO0VDS0E7O0VESEQ7SUFDQyxhQUFBO0VDTUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RoZXRlYW0vdGhldGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlcntcclxuXHRtYXJnaW4tYm90dG9tOjUwcHg7XHJcblx0LnRoZS10ZWFtLWluZm97XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblx0XHRtYXJnaW46MDtcdFxyXG5cdFx0bWFyZ2luLXRvcDo1MHB4O1xyXG5cdFx0LmNvbCB7XHJcblx0XHRcdHBhZGRpbmc6MDtcclxuXHRcdH1cclxuXHRcdC5wYW5lbC5pbWctaW5mb3tcclxuXHRcdFx0cGFkZGluZzowcHg7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cdFxyXG5cdC5wYW5lbCB7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0cGFkZGluZzo1MHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTo1MHB4O1xyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdG1hcmdpbi10b3A6IC03MHB4O1xyXG5cdFx0XHR6LWluZGV4OiAtMTtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRwYWRkaW5nOjgwcHggMjBweCAxcHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XHJcblx0XHRcdGg1e1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRcdFx0Y29sb3I6ICNiZjI3MmQ7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDVweCAwO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDBweCAjMGUwZTBlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGgxe1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcblx0fVxyXG5cdGg2e1xyXG5cdFx0bWFyZ2luLWxlZnQ6NjVweDtcclxuXHR9XHJcblx0LmF2dGFye1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdH1cclxuXHQudGVhbS1pbmZve1xyXG5cdFx0bWFyZ2luLXRvcDo1MHB4O1xyXG5cdH1cclxufVxyXG4udGhlLXRlYW0taW5mb3tcclxuXHRpbWcge1xyXG5cdFx0d2lkdGg6IDcwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0ICB9XHJcbn1cclxuLmJsdWUtYmd7XHJcblx0YmFja2dyb3VuZDojM2U2NWFjO1xyXG59XHJcbi5yZWQtYmd7XHJcblx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG59XHJcbi5ibGFjay1iZ3tcclxuXHRiYWNrZ3JvdW5kOiMwMDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0XHQucm93LWYsIC5yb3csIGgxe1xyXG5cdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdH1cclxuXHQuYnJlYWRjdW17XHJcblx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwYWRkaW5nOjE1cHggMHB4O1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG5cdC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcblx0LmF2dGFye1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG59IiwiLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAudGhlLXRlYW0taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnRoZS10ZWFtLWluZm8gLmNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnRoZS10ZWFtLWluZm8gLnBhbmVsLmltZy1pbmZvIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIG1hcmdpbi10b3A6IC03MHB4O1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA4MHB4IDIwcHggMXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCAucGFuZWwtYm9keSBoNSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICNiZjI3MmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDBweCAjMGUwZTBlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGgxIHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgaDYge1xuICBtYXJnaW4tbGVmdDogNjVweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuYXZ0YXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC50ZWFtLWluZm8ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4udGhlLXRlYW0taW5mbyBpbWcge1xuICB3aWR0aDogNzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJsdWUtYmcge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xufVxuXG4ucmVkLWJnIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cblxuLmJsYWNrLWJnIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5yb3ctZiwgLnJvdywgaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmJyZWFkY3VtIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuXG4gIC5pbWctZmxhZyB7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hdnRhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */";
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
    /*! F:\github\academy\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map