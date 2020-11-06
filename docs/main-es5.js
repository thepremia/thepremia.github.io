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


    __webpack_exports__["default"] = "<div class=\"section-admission\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            Join The Premia Pride\r\n        </a>\r\n    </div>\r\n    <div class=\"container mt-3\">\r\n        <h1 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            Join The Premia Pride\r\n        </h1>\r\n        <p> Our admissions policy ensures an appropriate admission procedure with respect to each\r\n            application received for admission. We pursue to set a selection standard that is fair and\r\n            consistent. Assessment for admissions to preprimary and primary would be an analysis to evaluate\r\n            the developmental preparedness of students, using a range of assessment methods to understand\r\n            the applicant’s skills. Prior to admissions, we assess applicants to determine their readiness\r\n            for our School providing practical and ethical methods of teaching.</p>\r\n\r\n        <!-- <div class=\"col-lg-11 col-md-11 col-sm-12 admission-info\">\r\n\r\n            <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n\r\n                <div class=\"panel-body\">\r\n                    <p>\r\n                        <img class=\"image-wrap\" align=\"right\" src=\"assets/images/9.jpg\" data-aos=\"fade-up\"\r\n                            data-aos-once=\"true\">\r\n                        Thank You for expressing interest in Premia Academy. We at Premia Academy, welcome all learners\r\n                        to a vibrant school community delivering an ethical education in an academic setting.<br><br>\r\n                        Our admissions policy ensures an appropriate admission procedure with respect to each\r\n                        application received for admission. We pursue to set a selection standard that is fair and\r\n                        consistent. Assessment for admissions to preprimary and primary would be an analysis to evaluate\r\n                        the developmental preparedness of students, using a range of assessment methods to understand\r\n                        the applicant’s skills. Prior to admissions, we assess applicants to determine their readiness\r\n                        for our School providing practical and ethical methods of teaching.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row add-spec\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <p>\r\n                        We at Premia Academy, aspire to ensure that our students nurture their passion for knowledge so\r\n                        they may pursue their dreams and become successful\r\n                    </p>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngFor=\"let item of admission; index as i\">\r\n                            <div class=\"panel\">\r\n                                <div class=\"panel-front\">\r\n                                    <div class=\"panel-heading\">\r\n                                        <i class=\"icon icon-medium\">\r\n                                            <svg focusable=\"false\">\r\n                                                <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                                            </svg>\r\n                                        </i>\r\n\r\n                                        <p>{{item.description}}</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"doodle\">\r\n                Join The Premia Pride\r\n            </div>\r\n        </div> -->\r\n\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <section class=\"section-admission-2\">\r\n        <div class=\"container\">\r\n            <div class=\"row addmin-sec\">\r\n                <div class=\"col-lg-3 col-md-3 col-sm-12 add-info\" *ngFor=\"let item of admission_2; index as i\">\r\n                    <div class=\"panel\" data-aos=\"fade\" data-aos-once=\"true\" (click)=\"onClick(i+1)\">\r\n                        <div class=\"panel-heading\">\r\n                            <h3 class=\"bar {{item.bar}}\">\r\n                                {{item.title}}\r\n                            </h3>\r\n                         </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-3 col-sm-12 add-info\">\r\n                    <div class=\"panel\" data-aos=\"fade\" data-aos-once=\"true\" (click)=\"open(content)\">\r\n                        <div class=\"panel-heading\">\r\n                            <h3 class=\"bar pp2\">\r\n                                Enquiry <br>Form\r\n                            </h3>\r\n                         </div>\r\n                    </div>\r\n                </div>\r\n                <a class=\"col-lg-3 col-md-3 col-sm-12 add-info\" href=\"assets/forms.zip\">\r\n                    <div class=\"panel\" data-aos=\"fade\" data-aos-once=\"true\">\r\n                        <div class=\"panel-heading\">\r\n                            <h3 class=\"bar pp3\">\r\n                                Download Admission Forms\r\n                            </h3>\r\n                         </div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n\r\n    <section class=\"section-ethos\">\r\n    <div class=\"container ethos-1\" id=\"1\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 ethos-col\" *ngFor=\"let item of ehtos; index as i\">\r\n              <p>\r\n                {{item.title}}\r\n              </p>\r\n              <div class=\"circle\" (click)=\"onClick(i+1)\">\r\n                <img src=\"assets/images/ethos-{{i+1}}.png\" alt=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n    \r\n          <div class=\"row ethos-2\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 ethos-col-2\" *ngFor=\"let item of ehtos2; index as i\">\r\n              <div class=\"circle\" (click)=\"onClick(i+5)\">\r\n                <img src=\"assets/images/ethos-{{i+5}}.png\" alt=\"\">\r\n              </div>\r\n              <p>\r\n                {{item.title}}\r\n              </p>\r\n            </div>\r\n          </div>   \r\n    </div>\r\n   \r\n    <div class=\"container\" id=\"2\">\r\n    <div class=\"row\">\r\n        <h1 class=\"center col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            Admission Criteria\r\n        </h1>\r\n        <h6 class=\"center col-sm-12\">The pupil should have achieved the competencies of the previous year to the grade to which he/she is applying for.</h6>\r\n        <div class=\"container\">\r\n                <table class=\"table-bordered adm-info-table\">\r\n                    <tr>\r\n                        <td>Grade</td>\r\n                        <td>Minimum Age by June</td>\r\n                    <tr>\r\n                    <tr>\r\n                        <td>Nursery</td>\r\n                        <td>2 Years 6 Months</td>\r\n                    <tr>\r\n                    <tr>\r\n                        <td>PP1</td>\r\n                        <td>3 Years 6 Months</td>\r\n                    <tr>\r\n                    <tr>\r\n                        <td>PP2</td>\r\n                        <td>4 Years 6 Months</td>\r\n                    <tr>\r\n                    <tr>\r\n                        <td>Grade 1</td>\r\n                        <td>5 Years 6 Months</td>\r\n                    <tr>\r\n                    <tr>\r\n                        <td>Grade 2</td>\r\n                        <td>6 Years 6 Months</td>\r\n                    <tr>\r\n                    <tr>\r\n                        <td>Grade 3</td>\r\n                        <td>7 Years 6 Months</td>\r\n                    <tr>\r\n                    <tr>\r\n                        <td>Grade 4</td>\r\n                        <td>8 Years 6 Months</td>\r\n                    <tr>\r\n                    <tr>\r\n                        <td>Grade 5</td>\r\n                        <td>9 Years 6 Months</td>\r\n                    <tr>\r\n                    <tr>\r\n                        <td>Grade 6</td>\r\n                        <td>10 Years 6 Months</td>\r\n                    <tr>\r\n                    \r\n                </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n</section>\r\n</div>\r\n\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Apply</h4>\r\n        <a class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_close\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n    </div>\r\n    <div class=\"modal-body apply-form\">\r\n        <form>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"sel1\">Academic Year</label>\r\n                    <select class=\"form-control\" id=\"sel1\">\r\n                        <option>2020-2021</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <label for=\"pn\">Parent Name</label>\r\n                    <input type=\"pn\" class=\"form-control\" placeholder=\"Parent Name\" name=\"pn\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"pn\">Parent Email ID</label>\r\n                    <input type=\"pi\" class=\"form-control\" placeholder=\"Parent Email ID\" name=\"pi\">\r\n                </div>\r\n                <div class=\"col\">\r\n                    <label for=\"phone\">Parent Mobile No</label>\r\n                    <input type=\"phone\" class=\"form-control\" placeholder=\"Phone\" name=\"phone\">\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Date\">Student DOB</label>\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngModel=\"model\" ngbDatepicker\r\n                                #d=\"ngbDatepicker\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                                    <i class=\"icon icon-ex-small\">\r\n                                        <svg focusable=\"false\">\r\n                                            <use xlink:href=\"#icon_calender\"></use>\r\n                                        </svg>\r\n                                    </i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <label for=\"Grade\">Grade</label>\r\n                    <select class=\"form-control\" id=\"Grade\">\r\n                        <option>Select-class</option>\r\n                        <option>Grade-1</option>\r\n                        <option>Grade-2</option>\r\n                        <option>Grade-3</option>\r\n                        <option>Grade-4</option>\r\n                        <option>Grade-5</option>\r\n                        <option>Grade-6</option>\r\n                        <option>Grade-7</option>\r\n                    </select>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <button class=\"btn btn-primary\">APPLY NOW</button>\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n    </div>\r\n</ng-template>";
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


    __webpack_exports__["default"] = "<section class=\"section-inner-subheader\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            The Premia Corner \r\n        </a>\r\n    </div>\r\n\r\n</section>\r\n\r\n<!-- <section class=\"blob-article\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n              <div class=\"panel\"><h2>Check mate!  We would like to invite you to<br>\r\n                Gorki campus to take part in our traditional<br>\r\n                Сambridge Chess Tournament 2020.</h2>\r\n                <p>\r\n                    We are a group of committed individuals who believe that “What sculpture is to a block of marble, education is to the human soul.” Joseph Addison.\r\n                    <br><br>\r\nOur advisory board comprises of diverse academicians who have a keen interest in providing a unique perspective to our collective vision. Individually they have contributed tremendously to the field of education, together they bring their unique capacities to our advisory board supporting continual improvement and sustainability.\r\n<br><br>\r\nWe want to nurture a confident, compassionate student body that is ready to make a positive difference to the World. We affirm that every child deserves a childhood filled with love and positivism. That is the core belief, with which we will take care of each child, as this will contribute to making exemplary individuals.\r\n                </p></div>\r\n                <div class=\"btn-wrapper\">\r\n                    <div class=\"div-btn\">\r\n                    <button class=\"btn btn-primary\" (click)=\"knowMore('culture');\">\r\n                        READ MORE\r\n                    </button>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section> -->\r\n\r\n<!-- <section class=\"recent-article\">\r\n    <div class=\"container\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n            <h6>The Premia Corner</h6>\r\n            <h2><span>Recent Articles</span></h2>\r\n        </div>\r\n        <div class=\"row\">\r\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\"\r\n                [config]=\"recentConfig\">\r\n                <div ngxSlickItem *ngFor=\"let item of admission; index as i\" class=\"slide col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\">\r\n                        <div class=\"panel-heading\">\r\n                                <p>{{item.date}}</p>\r\n                                 <h3>{{item.title}}</h3>\r\n                        </div>\r\n                        <div class=\"panel-body\">\r\n                            <p>{{item.description}}</p>\r\n                   </div>\r\n                   <button class=\"btn btn-primary\" (click)=\"knowMore('culture');\">\r\n                    READ MORE\r\n                </button>\r\n                    </div>\r\n                </div>\r\n            </ngx-slick-carousel>\r\n        </div>\r\n    </div>  \r\n</section> -->\r\n\r\n\r\n<section class=\"recent-article\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let list of thePremiaCorner; index as i\" class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                <div class=\"panel\">\r\n                <img src=\"assets/images/premia-corner-{{i+1}}.jpg\">\r\n                <h4 class=\"center\" data-aos=\"fade-up\" data-aos-once=\"true\">{{list.description}}</h4>\r\n               </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>";
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


    __webpack_exports__["default"] = "<div class=\"the-urriculum\">\r\n  <div class=\"breadcum\">\r\n    <a>\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_home\"></use>\r\n        </svg>\r\n      </i>\r\n    </a>\r\n    <span> |</span>\r\n    <a>\r\n      Premia Curriculum\r\n    </a>\r\n  </div>\r\n  <section>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n          <h1 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            Premia Curriculum\r\n          </h1>\r\n          <div class=\"panel-body\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <h2 class=\"\">“Integrating the pedagogies of the world, So our little\r\n              global citizens are ignited, inspired and explored.”\r\n            </h2>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 map-marker\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <img src=\"assets/images/map.jpg\">\r\n        </div>\r\n\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <h2>Why an Integrated Curriculum?</h2>\r\n          <p>The Premia Integrated Curriculum offers our students many opportunities for deep learning as they use\r\n            their knowledge to make connections between subjects or disciplines to decode\r\n            the simplicities and intricacies of life</p>\r\n        </div>\r\n\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        <div class=\"row curriculum-info\">\r\n          <div class=\"col col-lg-2 col-md-2 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <p>Students develop\r\n              new levels of\r\n              awareness -</p>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n            <p>\r\n              ● Of the world<br>\r\n              ● Of themselves<br>\r\n              ● And their place in it\r\n\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row curriculum-info\">\r\n          <div class=\"col col-lg-2 col-md-2 col-sm-12 \" data-aos=\"fade-up\" data-aos-once=\"true\"><p >Students develop new levels of awareness -</p></div><div  class=\"col-lg-6 col-md-6 col-sm-12 \" data-aos=\"fade-up\" data-aos-once=\"true\"><p > ● Own their learning and<br > ● Understand how to learn versus what to learn<br > ● Renew their curiosity of the world around them </p></div></div>\r\n      </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"int-curriculum\">\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n      \r\n      <div class=\"col col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        <h1>What is an Integrated Curriculum?</h1>\r\n        <p>An Integrated Curriculum is a unification of all subjects and experiences.\r\n          The intertwining of different approaches to integration such as</p>\r\n      </div>\r\n\r\n        <div class=\"row\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div>\r\n              <h3>\r\n                <i class=\"icon icon-medium\">\r\n                  <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_ethicalEdu\"></use>\r\n                  </svg>\r\n                </i>\r\n                Multi-disciplinary\r\n              </h3>\r\n              <p>Focuses primarily on the various disciplines allowing the students to correlate different\r\n                subjects to a\r\n                common theme.\r\n              </p>\r\n            </div>\r\n\r\n            <div>\r\n              <h3>\r\n                <i class=\"icon icon-medium\">\r\n                  <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_ethicalEdu\"></use>\r\n                  </svg>\r\n                </i>\r\n                Interdisciplinary\r\n              </h3>\r\n              <p>Integrating the sub-disciplines within a subject area makes students nderstand the\r\n                connections between\r\n                the different sub-disciplines and their relationship. Example: Integrating reading, writing,\r\n                and oral\r\n                communication in language arts.\r\n              </p>\r\n            </div>\r\n\r\n            <div>\r\n              <h3>\r\n                <i class=\"icon icon-medium\">\r\n                  <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_ethicalEdu\"></use>\r\n                  </svg>\r\n                </i>\r\n                Transdisciplinary\r\n              </h3>\r\n              <p>Here the curriculum is organized around student questions and concerns.\r\n                Two routes lead to transdisciplinary integration: i.e project-research based and\r\n                collaborative learning.\r\n              </p>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n            <img src=\"assets/images/int-curricolum.jpg\">\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  </section>\r\n\r\n  <section>\r\n    <div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n      <h3>How do we integrate - Premia Niche?</h3>\r\n      <p>The core belief of our curriculum works on Howard Gardner’s Theory of Multiple Intelligences.<br>\r\n        Fulfills the learning outcomes of CBSE, IGCSE, Common Core, Aero & IB<br>\r\n        Considers different types of learners in a class<br>\r\n        Caters to the innate aptitudes and attitudes of every student<br>\r\n        Aids differentiated learning- allows for individual learning processes<br>\r\n        Enables each learner to utilise his or her specific abilities to demonstrate learning.<br><br>\r\n\r\n        <b> Our curriculum is an amalgamation of the different Methodologies & Theories of teaching\r\n          such as Maria Montessori, Reggio Emilio, Jean Piaget etc. Where</b><br><br>\r\n\r\n        Reading and literacy is the base- World class Scholastic Levelled Bookroom 4.0\r\n        Research for a learning experience is encouraged\r\n        Expanding the world view is a norm<br><br>\r\n\r\n        <b> Thus, helping them evolve their authentic self, driven by purpose and fuelled by passion.\r\n          Every well wisher of a child wants the child to be successful and happy, this can be achieved\r\n          if we encourage children to be their true and authentic selves.</b>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n</section>\r\n  <div class='cur-info-slider'>\r\n    <div class=\"container\">\r\n\r\n      <div class=\"gallery-wrap\">\r\n        <div class=\"item item-1\" (click)=\"onClick(1)\" [ngClass]=\"{'active': tab==='tab1'}\">\r\n          <h2>Visual & Spatial</h2>\r\n          <div class=\"panel\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"img-box\">\r\n                <img src=\"assets/images/curriculum-01.png\">\r\n              </div>\r\n              <div class='titles'>\r\n                <h3>Intelligences </h3>\r\n                <h1>Visual & Spatial</h1>\r\n                <h6>Picture Smart</h6>\r\n              </div>\r\n            </div>\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n\r\n              <a href=\"\"> Art and decoration |\r\n                Culinary design | Photography\r\n                Movement and space management\r\n              </a>\r\n\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Sparks: What Excites Them\r\n              </p>\r\n              <a href=\"\">Visualizing colour | drawing painting | maps | graphs | artistic composition |\r\n                visual puzzles and geometry\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Premia Path : Helping Them Thrive\r\n              </p>\r\n              <a href=\"\">Integrated art and design in the curriculum |\r\n                Creya Design Thinking | Yardstick experiential kits\r\n\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Prodigies : The Shining Ones\r\n              </p>\r\n              <a href=\"\">Leonardo\r\n                Da Vinci\r\n                &\r\n                M . F Hussain\r\n              </a>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"item item-2\" (click)=\"onClick(2)\" [ngClass]=\"{'active': tab==='tab2'}\">\r\n          <h2>Linguistic</h2>\r\n          <div class=\"panel\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"img-box\">\r\n                <img src=\"assets/images/curriculum-01.png\">\r\n              </div>\r\n              <div class='titles'>\r\n                <h3>Intelligences </h3>\r\n                <h1>Linguistic -</h1>\r\n                <h6>Word Smart</h6>\r\n              </div>\r\n            </div>\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\"> Reading | Excellent at vocabulary | Use Quotes | Learn Foriegn languages</a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Sparks: What Excites Them\r\n              </p>\r\n              <a href=\"\"> Reading | writing | editing | quoting & Journal writing.\r\n                Is a Multi Linguist | Orator | Poet | Professor | Teacher |\r\n                Translator\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Premia Path : Helping Them Thrive\r\n              </p>\r\n              <a href=\"\">Guided reading program\r\n                Scholastic levelled Bookroom across curriculum | Read alouds | Readers Theatre | Poetry writing | Role\r\n                play and dramatics | Author visits | book talks | Novel reviews etc.\r\n\r\n\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Prodigies : The Shining Ones\r\n              </p>\r\n              <a href=\"\">Helen Keller\r\n                &\r\n                Rabindranath Tagore\r\n\r\n              </a>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"item item-3\" (click)=\"onClick(3)\" [ngClass]=\"{'active': tab==='tab3'}\">\r\n          <h2>Logical / Mathematical</h2>\r\n          <div class=\"panel\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"img-box\">\r\n                <img src=\"assets/images/curriculum-01.png\">\r\n              </div>\r\n              <div class='titles'>\r\n                <h3>Intelligences </h3>\r\n                <h1>Logical / Mathematical</h1>\r\n                <h6>Number & Reasoning smart</h6>\r\n              </div>\r\n            </div>\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\">Logical & Factual |\r\n                Reasoning & rational |\r\n                Good at strategies |\r\n                Data handling |\r\n                Good with numbers |\r\n                Seeks precision |\r\n                Appreciates science\r\n\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\">Number and strategy games |\r\n                Prioritizing and sequencing |\r\n                Likes challenges & crisis management | Analyzes data</a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Premia Path : Helping Them Thrive\r\n              </p>\r\n              <a href=\"\">\r\n                Concept based Singapore based Math curriculum - Alpha Math |\r\n                Number Nagar-math lab |\r\n                Design Thinking by Creya |\r\n                Yardstick |\r\n                Metamorphosis\r\n\r\n\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Prodigies : The Shining Ones\r\n              </p>\r\n              <a href=\"\">Manjul Bhargava\r\n                &\r\n                Shakuntala Devi\r\n\r\n              </a>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"item item-4\" (click)=\"onClick(4)\" [ngClass]=\"{'active': tab==='tab4'}\">\r\n          <h2>Bodily / Kinesthetic</h2>\r\n          <div class=\"panel\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"img-box\">\r\n                <img src=\"assets/images/curriculum-01.png\">\r\n              </div>\r\n              <div class='titles'>\r\n                <h3>Intelligences </h3>\r\n                <h1>Bodily / Kinesthetic</h1>\r\n                <h6>Body smart</h6>\r\n              </div>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\">Very athletic and nimble\r\n                Love outdoors\r\n                Learn by doing\r\n                Chase excitement\r\n                Energetic\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\">Sports\r\n                Hands-on activities\r\n                Gymnastics\r\n                Crafts Construction\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Premia Path : Helping Them Thrive\r\n              </p>\r\n              <a href=\"\">\r\n                Dance\r\n                Futsal field\r\n                Basketball court\r\n                Gymnasium\r\n                Sportsvillage\r\n                Athletic Track\r\n                Volleyball court\r\n                Badminton court\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Prodigies : The Shining Ones\r\n              </p>\r\n              <a href=\"\">Dipa Karmakar,\r\n                Lionel Messi,\r\n                Mansi Joshi\r\n                &\r\n                P V Sindhu\r\n              </a>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"item item-5\" (click)=\"onClick(5)\" [ngClass]=\"{'active': tab==='tab5'}\">\r\n          <h2>Naturalistic\r\n          </h2>\r\n          <div class=\"panel\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"img-box\">\r\n                <img src=\"assets/images/curriculum-01.png\">\r\n              </div>\r\n              <div class='titles'>\r\n                <h3>Intelligences </h3>\r\n                <h1>Naturalistic-\r\n                </h1>\r\n                <h6>\r\n                  Nature smart</h6>\r\n              </div>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\">Align with natural patterns\r\n                Inspired by and appreciate nature\r\n                Aware and concerned about the environment\r\n\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\">Love plants, plants and nature.\r\n                Environmentalists\r\n                Outdoor activities\r\n\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Premia Path : Helping Them Thrive\r\n              </p>\r\n              <a href=\"\">\r\n                Avni- Earth science & Co-Existence |\r\n                Herbal garden tours |\r\n                Field trips |\r\n                Science Labs and kits\r\n\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Prodigies : The Shining Ones\r\n              </p>\r\n              <a href=\"\">Dr Salim Ali\r\n                &\r\n                Jane Goodall\r\n\r\n              </a>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"item item-6\" (click)=\"onClick(6)\" [ngClass]=\"{'active': tab==='tab6'}\">\r\n          <h2>Musical\r\n          </h2>\r\n          <div class=\"panel\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"img-box\">\r\n                <img src=\"assets/images/curriculum-01.png\">\r\n              </div>\r\n              <div class='titles'>\r\n                <h3>Intelligences </h3>\r\n                <h1>Musical-\r\n                </h1>\r\n                <h6>\r\n                  Sound smart</h6>\r\n              </div>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\">Highly auditory\r\n                Sensitive to rhythm, pitch, timber and melody\r\n                Gifted at composing\r\n                Talented with instruments\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\">Music & Singing\r\n                Musical instruments\r\n                Sound tracks\r\n                Rhymes\r\n                Musical beats\r\n                Whistling, choir, Orchestra & Opera\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Premia Path : Helping Them Thrive\r\n              </p>\r\n              <a href=\"\">Music Lab\r\n                Furtado School of Music,\r\n                Musical Plays,\r\n                school Choir &\r\n                Rhyme sessions\r\n\r\n\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Prodigies : The Shining Ones\r\n              </p>\r\n              <a href=\"\">Beethoven,\r\n                Lata Mangeshkar,\r\n                A R Rehman &\r\n                Micheal Jackson\r\n              </a>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"item item-7\" (click)=\"onClick(7)\" [ngClass]=\"{'active': tab==='tab7'}\">\r\n          <h2>Existential\r\n          </h2>\r\n          <div class=\"panel\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"img-box\">\r\n                <img src=\"assets/images/curriculum-01.png\">\r\n              </div>\r\n              <div class='titles'>\r\n                <h3>Intelligences </h3>\r\n                <h1>Existential-\r\n                </h1>\r\n                <h6>\r\n                  Life smart</h6>\r\n              </div>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\">Sensitivity & capacity to seek answers to deep questions about human existence\r\n                Ability to use intuition\r\n\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\">Reflective thinking, Journal writing, Abstract thinking & Philosophy\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Premia Path : Helping Them Thrive\r\n              </p>\r\n              <a href=\"\">\r\n                Swadhyay- Program of experiential awakening.\r\n                Avni- Earth Science & co-existence\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Prodigies : The Shining Ones\r\n              </p>\r\n              <a href=\"\">Martin Luther King,\r\n                Mahatma Gandhi\r\n                & Jay shetty\r\n              </a>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"item item-8\" (click)=\"onClick(8)\" [ngClass]=\"{'active': tab==='tab8'}\">\r\n          <h2>Interpersonal\r\n          </h2>\r\n          <div class=\"panel\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"img-box\">\r\n                <img src=\"assets/images/curriculum-01.png\">\r\n              </div>\r\n              <div class='titles'>\r\n                <h3>Intelligences </h3>\r\n                <h1>Interpersonal-\r\n                </h1>\r\n                <h6>\r\n                  People smart</h6>\r\n              </div>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\">Extroverts\r\n                Empathetic\r\n                Sensitive to others\r\n                Socialize\r\n                Great at family relationships\r\n                Value friendships\r\n                Motivational speakers\r\n                Lectures\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\">Speeches\r\n                Declamation\r\n                Debates, elocution, Turn coats, Stating facts and expressing opinions &\r\n                Team leaders\r\n\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Premia Path : Helping Them Thrive\r\n              </p>\r\n              <a href=\"\">\r\n                Literacy based events and competitions, book reviews, book talks, Model united nations, elections &\r\n                campaigns, Advertisement jingles, time capsules, compering, Narration, sales & Marketing\r\n                Project based learning\r\n\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Prodigies : The Shining Ones\r\n              </p>\r\n              <a href=\"\">Jawaharlal Nehru,\r\n                APJ Kalam\r\n                &\r\n                Malala Yusufzai\r\n              </a>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"item item-9\" (click)=\"onClick(9)\" [ngClass]=\"{'active': tab==='tab9'}\">\r\n          <h2>Interpersonal\r\n          </h2>\r\n          <div class=\"panel\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"img-box\">\r\n                <img src=\"assets/images/curriculum-01.png\">\r\n              </div>\r\n              <div class='titles'>\r\n                <h3>Intelligences </h3>\r\n                <h1>Interpersonal-\r\n                </h1>\r\n                <h6>\r\n                  Self smart</h6>\r\n              </div>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\">Intuitive\r\n                Self reflective\r\n                Independent\r\n                Introvert\r\n                Philosophical\r\n                Exploring\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                Nuances The learner exhibits The Incline /Exclusive:\r\n                Unique skills and likes\r\n              </p>\r\n              <a href=\"\">\r\n                Library, Journal writing, Poetry, Research reports & articles\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Premia Path : Helping Them Thrive\r\n              </p>\r\n              <a href=\"\">\r\n                Story writing, poetry writing, book Reviews, Script writing, Character sketches\r\n              </a>\r\n            </div>\r\n\r\n            <div class='panel-body'>\r\n              <p>\r\n                The Prodigies : The Shining Ones\r\n              </p>\r\n              <a href=\"\">Ruskin Bond,\r\n                Enid Blyton &\r\n                Roald Dahl\r\n              </a>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>";
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


    __webpack_exports__["default"] = "<header>\r\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n    <div class=\"container\">\r\n    <a href=\"javascript:void(0)\" class=\"logo\" routerLink=\"Home\" routerLinkActive=\"active\"\r\n    skipLocationChange=true>\r\n      <img src=\"assets/images/logo.png\">\r\n  </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"slideToggel()\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  </div>\r\n    <ul class=\"navbar-nav navbar-nav-list header-nav\">\r\n      <li class=\"nav-item login dropping\">\r\n     <div class=\"input-group\">\r\n          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                 name=\"dp\" ngModel=\"model\" ngbDatepicker #d=\"ngbDatepicker\" style=\"display: none;\">\r\n          <div class=\"input-group-append\">\r\n            <a class=\"nav-link\">\r\n            <i class=\"icon icon-ex-small\" (click)=\"d.toggle()\">\r\n                    <svg focusable=\"false\">\r\n                      <use xlink:href=\"#icon_calender\"></use>\r\n                    </svg>\r\n                  </i>\r\n                  <br>\r\n                  <span>Calender</span>  \r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n      </li>\r\n      <li class=\"nav-item login\">\r\n        <a class=\"nav-link\">\r\n          <i class=\"icon icon-small\">\r\n            <svg focusable=\"false\">\r\n              <use xlink:href=\"#icon_chatroom\"></use>\r\n            </svg>\r\n          </i><br>\r\n          <span>Chat</span> \r\n        </a>\r\n      </li>\r\n      <!-- <li class=\"nav-item login dropping\">\r\n        <a class=\"nav-link\">\r\n          <i class=\"icon icon-small\">\r\n            <svg focusable=\"false\">\r\n              <use xlink:href=\"#icon_enquiry\"></use>\r\n            </svg>\r\n          </i><br>\r\n         <span>Enquiry</span> \r\n        </a> \r\n\r\n        <div class=\"dropper\">\r\n          <a (click)=\"open(apply)\">\r\n            Admission to Foundation Stage\r\n          </a>\r\n          <a (click)=\"open(apply)\">\r\n            Admission to Preparatory Stage\r\n          </a>\r\n          <a (click)=\"open(apply)\">\r\n            Admission to Middle Stage\r\n          </a>\r\n          <a (click)=\"open(apply)\">\r\n            Admission to Secondary Stage\r\n          </a>\r\n        </div>\r\n  \r\n        <ng-template #apply let-modal>\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Apply</h4>\r\n                <a class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                  <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                      <use xlink:href=\"#icon_close\"></use>\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n          </div>\r\n          <div class=\"modal-body apply-form\">\r\n          \r\n                  <form>\r\n                      <div class=\"row\">\r\n                          <div class=\"col\">\r\n                              <label for=\"sel1\">Academic Year</label>\r\n                              <select class=\"form-control\" id=\"sel1\">\r\n                                  <option>2020-2021</option>\r\n                              </select>\r\n                          </div>\r\n                          <div class=\"col\">\r\n                            <label for=\"pn\">Parent Name</label>\r\n                            <input type=\"pn\" class=\"form-control\" placeholder=\"Parent Name\" name=\"pn\">\r\n                        </div>\r\n                        </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col\">\r\n                          <label for=\"pn\">Parent Email ID</label>\r\n                          <input type=\"pi\" class=\"form-control\" placeholder=\"Parent Email ID\" name=\"pi\">\r\n                        </div>\r\n                          <div class=\"col\">\r\n                              <label for=\"phone\">Parent Mobile No</label>\r\n                              <input type=\"phone\" class=\"form-control\" placeholder=\"Phone\" name=\"phone\">\r\n                          </div>\r\n                         \r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col\">\r\n                          <div class=\"form-group\">\r\n                              <label for=\"Date\">Student DOB</label>\r\n                              <div class=\"input-group\">\r\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                                       name=\"dp\" ngModel=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\">\r\n                                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                                      <i class=\"icon icon-ex-small\">\r\n                                          <svg focusable=\"false\">\r\n                                            <use xlink:href=\"#icon_calender\"></use>\r\n                                          </svg>\r\n                                        </i>\r\n                                  </button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                       </div>\r\n                          <div class=\"col\">\r\n                              <label for=\"Grade\">Grade</label>\r\n                              <select class=\"form-control\" id=\"Grade\">\r\n                                  <option>Select-class</option>\r\n                                  <option>Grade-1</option>\r\n                                  <option>Grade-2</option>\r\n                                  <option>Grade-3</option>\r\n                                  <option>Grade-4</option>\r\n                                  <option>Grade-5</option>\r\n                                  <option>Grade-6</option>\r\n                                  <option>Grade-7</option>\r\n                              </select>\r\n                          </div>\r\n                          \r\n                      </div>\r\n                      <div class=\"row\">\r\n                          <div class=\"col\">\r\n                              <button class=\"btn btn-primary\">APPLY NOW</button>\r\n                          </div>\r\n                      </div>\r\n                      \r\n                  </form>\r\n          \r\n          </div>\r\n        </ng-template>  \r\n      </li>-->\r\n      <li class=\"nav-item login\">\r\n         <a class=\"nav-link\" (click)=\"openlogin(login)\">\r\n           <i class=\"icon icon-small\">\r\n             <svg focusable=\"false\">\r\n               <use xlink:href=\"#icon_login\"></use>\r\n             </svg>\r\n           </i><br>\r\n         <span>Login</span>   \r\n         </a>\r\n  \r\n         <ng-template #login let-modal>\r\n          <div class=\"modal-header\">\r\n             <h4 class=\"modal-title\" id=\"modal-basic-title\">Login/ Register</h4>\r\n                <a class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                  <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                      <use xlink:href=\"#icon_close\"></use>\r\n                    </svg>\r\n                  </i>\r\n                </a>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6 col-md-6 col-sm-12 login-form\">\r\n                <h6>Login</h6>\r\n                <form action=\"\">\r\n               \r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                      <label for=\"userName\">User Name</label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" name=\"userName\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <label for=\"pass\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"pass\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col form-check\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\"> Remember me\r\n                  </label>\r\n                  <a href=\"\" class=\"ml-5\">Forgot Password?</a>\r\n              </div>\r\n              </div>\r\n              <button class=\"btn btn-primary\">Login</button>\r\n              </form>\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-6 col-sm-12 login-form\">\r\n                <h6>Register</h6>\r\n                <form action=\"\">\r\n               \r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <label for=\"userName\">User Name</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" name=\"userName\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      <label for=\"email\">Email ID</label>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Email ID\" name=\"EmailID\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <label for=\"phoneno\">Phone No.</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" name=\"phoneno\">\r\n                </div>\r\n              </div>\r\n                 <button class=\"btn btn-primary\" >Register</button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n  \r\n          </div>\r\n        </ng-template>\r\n  \r\n       </li>\r\n     </ul>\r\n \r\n  \r\n  </nav>\r\n</header>\r\n\r\n<nav class=\"navbar-vertical\">\r\n  <a class=\"nav-link\" (click)=\"slideToggel()\">\r\n    <i class=\"icon icon-small\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_menu\"></use>\r\n      </svg>\r\n    </i>\r\n  </a> \r\n  \r\n  <div class=\"social-net\">\r\n\r\n    <ul>\r\n        <li><a href=\"https://www.facebook.com/ThePremiaAcademy/\" target=\"_blank\">\r\n                <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                        <use xlink:href=\"#icon_facebook\"></use>\r\n                    </svg>\r\n                </i>\r\n                <span>Facebook</span>\r\n            </a>\r\n        </li>\r\n        <li><a href=\"https://www.linkedin.com/company/thepremiaacademy\" target=\"_blank\">\r\n                <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                        <use xlink:href=\"#icon_linkedin\"></use>\r\n                    </svg>\r\n                </i>\r\n                <span>Linkedin</span>\r\n            </a>\r\n        </li>\r\n        <li><a href=\"https://instagram.com/thepremiaacademy?igshid=1qcxjqxa75x37\" target=\"_blank\">\r\n                <i class=\"icon icon-ex-small\">\r\n                    <svg focusable=\"false\">\r\n                        <use xlink:href=\"#icon_instagram\"></use>\r\n                    </svg>\r\n                </i>\r\n                <span>Instagram</span>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"notice-board\"><a  target=\"_blank\" (click)=\"notifyOpen(notify)\">\r\n          <i class=\"icon icon-ex-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_noticeBoard\"></use>\r\n              </svg>\r\n          </i>\r\n          <span>Notice Board</span>\r\n       </a>\r\n    </li>\r\n    </ul>\r\n</div>\r\n</nav>\r\n\r\n<ng-template #notify let-modal>\r\n  <div class=\"modal-header\">\r\n    <i class=\"icon icon-ex-small\">\r\n      <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_noticeBoard\"></use>\r\n      </svg>\r\n  </i>\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">NOTICE BOARD</h4>\r\n        <a class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n          <i class=\"icon icon-ex-small\">\r\n            <svg focusable=\"false\">\r\n              <use xlink:href=\"#icon_close\"></use>\r\n            </svg>\r\n          </i>\r\n        </a>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 v-flex\">\r\n       <p>\r\n        Admissions open<br>\r\n        for the academic<br>\r\n        year of 2020 - 2021\r\n       </p>\r\n       <button class=\"btn btn-primary\"  aria-label=\"Close\" (click)=\"knowMore('admission');\">APPLY NOW</button>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n       <img src=\"assets/images/notice-board.png\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<div class=\"overlay\" [ngClass]=\"isOpen ? '' : 'active'\">\r\n  <img src=\"assets/images/2.jpg\">\r\n  <a class=\"nav-link\" (click)=\"slideToggel()\">\r\n    <i class=\"icon icon-small close-menu\">\r\n      <svg focusable=\"false\">\r\n        <use xlink:href=\"#icon_close\"></use>\r\n      </svg>\r\n    </i>\r\n  </a> \r\n<ul class=\"main-nav\">\r\n      <li class=\"main-nav-list\" *ngFor=\"let item of list; index as i\">\r\n        <a class=\"main-nav-link\" routerLink=\"{{item.name}}\" routerLinkActive=\"active\" skipLocationChange=true (click)=\"slideToggel()\">\r\n          {{item.name | createSpace}}\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav navbar-nav-list notify-show\">\r\n      <li class=\"nav-item social-media\">\r\n\r\n      <a class=\"nav-link\" href=\"https://www.facebook.com/ThePremiaAcademy/\" target=\"_blank\">\r\n          <i class=\"icon icon-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_facebook\"></use>\r\n              </svg>\r\n          </i>\r\n      </a>\r\n      </li>\r\n      <li class=\"nav-item social-media\">\r\n        <a class=\"nav-link\" href=\"https://www.linkedin.com/company/thepremiaacademy\" target=\"_blank\">\r\n          <i class=\"icon icon-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_linkedin\"></use>\r\n              </svg>\r\n          </i>\r\n      </a>\r\n      </li>\r\n      <li class=\"nav-item social-media\">\r\n        <a class=\"nav-link\" href=\"https://instagram.com/thepremiaacademy?igshid=1qcxjqxa75x37\" target=\"_blank\">\r\n          <i class=\"icon icon-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_instagram\"></use>\r\n              </svg>\r\n          </i>\r\n      </a>\r\n       </li>\r\n       <li class=\"nav-item social-media\">\r\n        <a class=\"nav-link\" target=\"_blank\" (click)=\"notifyOpen(notify)\">\r\n          <i class=\"icon icon-small\">\r\n              <svg focusable=\"false\">\r\n                  <use xlink:href=\"#icon_noticeBoard\"></use>\r\n              </svg>\r\n          </i>\r\n       </a>\r\n       </li>\r\n     </ul>\r\n    <div class=\"general-info-nav\">\r\n      <a>Sitemap</a> |\r\n      <a>Privacy Policy</a> |\r\n      <a>FAQ</a> |\r\n      <a>Careers</a>\r\n    </div>\r\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"main-banner\">\r\n  <!-- <ngb-carousel #carousel interval=\"5000\" [showNavigationArrows]=\"showNavigationArrows\" [pauseOnHover]=\"pauseOnHover\"\r\n    (slide)=\"onSlide($event)\">\r\n        <ng-template ngbSlide  *ngFor=\"let info of banner; index as i\">\r\n          <div class=\"picsum-img-wrapper\">\r\n            <img src=\"assets/images/banner{{i+1}}.jpg\" alt=\"Random first slide\">\r\n          </div>\r\n          <div class=\"carousel-caption\">\r\n           <h3>{{info.title}}</h3>\r\n            <p>{{info.description}}</p>\r\n          </div>\r\n        </ng-template>     \r\n      </ngb-carousel> -->\r\n\r\n  <video controls autoplay>\r\n    <source src=\"assets/images/banner.mp4\" type=\"video/mp4\">\r\n    Your browser does not support the video tag.\r\n  </video>\r\n\r\n</div>\r\n\r\n<section class=\"section-admission\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-3 col-sm-12 admission-flag\">\r\n        <div class=\"flag-pos\">\r\n          <div class=\"v-align\">\r\n            <h1>Join<br>\r\n              The Premia<br>\r\n              Family\r\n              <br>\r\n              <button class=\"btn btn-primary\" (click)=\"knowMore('apply');\">Apply Now</button>\r\n            </h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-9 col-md-9 col-sm-12\">\r\n        <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12 admission-new\" *ngFor=\"let item of admission; index as i\">\r\n          <div class=\"panel\">\r\n            <div class=\"panel-front\">\r\n              <div class=\"panel-heading\">\r\n                <i class=\"icon icon-medium\">\r\n                  <svg focusable=\"false\">\r\n                    <use attr.xlink:href=\"{{item.icon}}\"></use>\r\n                  </svg>\r\n                </i>\r\n                <p>{{item.description}}</p>\r\n\r\n                <div class=\"more-viewer\">\r\n                  <p>{{item.description2}}</p>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 text-center heading-spacer\">\r\n      <h1 data-aos=\"fade-up\" data-aos-once=\"true\">What drives us?</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"section-nofify\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let item of notify\" class=\"col col-lg-4 col-md-4 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        <div class=\"panel\">\r\n          <div class=\"panel-front\">\r\n            <div class=\"panel-heading\">\r\n              <h5><span>{{item.title}}</span></h5>\r\n              <p>{{item.description}}</p>\r\n              <ul class=\"list\">\r\n                <li *ngFor=\"let data of item.moreInfo\">\r\n                  {{data.info}}\r\n                </li>\r\n              </ul>\r\n              <p>{{item.desc}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<div class=\"clear-float\"></div>\r\n<section class=\"premian-league\">\r\n \r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <img class=\"concept\" src=\"assets/images/home-concept.png\">\r\n      <div class=\"asset asset_2\"></div>\r\n      <div class=\"asset asset_3\"></div>\r\n      <div class=\"asset asset_4\"></div>\r\n      <div class=\"asset asset_5\"></div>\r\n      <div class=\"col-sm-12 center\">\r\n        <h1 data-aos=\"fade-up\" data-aos-once=\"true\">The Premia Experience</h1>\r\n      </div>\r\n      <div *ngFor=\"let list of premianLeague; index as i\" class=\"col {{list.gridClass}} col-sm-12 col-premia\">\r\n        <div class=\"img-circle\" data-aos=\"zoom-in\" data-aos-once=\"true\">\r\n          <img src=\"assets/images/premia-exp-{{i+1}}.jpg\">\r\n        </div>\r\n        <h6 class=\"center\">{{list.name}}</h6>\r\n      </div>\r\n      <div class=\"col-lg-1 col-md-1 col-sm-12\"></div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n      <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\"\r\n        [config]=\"premianLeagueConfig\">\r\n        <div ngxSlickItem *ngFor=\"let item of partner; index as i\" class=\"slide\">\r\n          <div class=\"panel\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"img-box\">\r\n                <img src=\"assets/images/premia-exp-{{i+1}}.jpg\">\r\n              </div>\r\n              <!-- <p>{{item.description}}</p> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n      </ngx-slick-carousel>\r\n      <h6 class=\"center last-circle\">Who we are</h6>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 center heading-spacer\">\r\n      <h1 data-aos=\"fade-up\" data-aos-once=\"true\">Parents Speak</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"testimonials\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let list of testimonials; index as i\" class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n        <div class=\"img-circle\">\r\n          <img src=\"assets/images/parent-speak-{{i+1}}.jpg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        </div>\r\n        <p>\"{{list.clientView}}\"</p>\r\n        <h6 data-aos=\"fade-up\" data-aos-once=\"true\">{{list.clientName}}</h6>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n<section class=\"partner\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 heading-spacer\">\r\n        <h1 class=\"center\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          Our Partners\r\n        </h1>\r\n        <p data-aos=\"fade-up\" data-aos-once=\"true\">Our quest for creating the perfect learning environment led to\r\n          collaborating with a few organisations whose vision aligned with ours. Each of the programs are well researched\r\n          to cater to the needs of the millennials who require constant innovation. With combined ideologies and\r\n          compassion, successful partnerships are created on a trajectory to deliver nothing but the best! </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <ngx-slick-carousel class=\"carousel col-lg-12 col-md-12 col-sm-12\" #slickModal=\"slick-carousel\"\r\n        [config]=\"partnerConfig\">\r\n        <div ngxSlickItem *ngFor=\"let item of partner; index as i\" class=\"slide\" data-aos=\"fade-up\"\r\n          data-aos-once=\"true\">\r\n          <div class=\"panel\">\r\n            <div class=\"panel-heading\">\r\n              <div class=\"img-box\">\r\n                <img src=\"assets/images/partner{{i+1}}.png\">\r\n              </div>\r\n              <p>{{item.description}}</p>\r\n            </div>\r\n            <div class=\"info-view\">\r\n              <div class=\"panel-heading\">\r\n                <div class=\"img-box\">\r\n                  <img src=\"assets/images/partner{{i+1}}.png\">\r\n                </div>\r\n                <h5>{{item.description}}</h5>\r\n                <p>{{item.description_2}}</p>\r\n                <a href=\"{{item.link}}\" target=\"blank\">{{item.link}}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ngx-slick-carousel>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 center heading-spacer\">\r\n      <h1 data-aos=\"fade-up\" data-aos-once=\"true\">The Premia Corner</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"the-premia-corner\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let list of thePremiaCorner; index as i\" class=\"col-lg-3 col-md-3 col-sm-12\">\r\n        <div class=\"col\">\r\n\r\n          <img src=\"assets/images/premia-corner-{{i+1}}.jpg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n\r\n          <h4 class=\"center\" data-aos=\"fade-up\" data-aos-once=\"true\" (click)=\"knowMore('premiaCorner');\">{{list.description}}</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"newsletter\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <form class=\"form-inline\" action=\"/action_page.php\">\r\n        <label for=\"email\">Newsletter </label>\r\n        <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" id=\"email\">\r\n        <button type=\"submit\" class=\"btn btn-primary\"> Subscribe</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>";
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


    __webpack_exports__["default"] = "<section class=\"premia-ethos\">\r\n  <div class=\"breadcum\">\r\n    <a>\r\n      <i class=\"icon icon-ex-small\">\r\n        <svg focusable=\"false\">\r\n          <use xlink:href=\"#icon_home\"></use>\r\n        </svg>\r\n      </i>\r\n    </a>\r\n    <span> |</span>\r\n    <a>\r\n      Premia ETHOS\r\n    </a>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n        <h1 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          Premia ETHOS\r\n        </h1>\r\n        <div class=\"panel-body\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n          <h2 class=\"\">THE CULTURE AND ATMOSPHERE OF OUR SCHOOL\r\n          </h2>\r\n\r\n          <p class=\"mb-5\">\r\n            The Premia Academy was founded on the belief that every child has the potential to make the world a\r\n            beautiful place. Every child is unique and capable of learning when stimulated properly. Premiaa Academy\r\n            believes in the development of these primary areas. <br>\r\n            Every institution has a framework or ground rules that they function with for the empowerment of every\r\n            stakeholder. We at Premia like to call it the Premia ethos. We aspire to build a positive and progressive\r\n            culture in our school, not only within our corridors and premises but in the very lives of all who are a\r\n            part of our journey-children, parents, teachers, staff and administration. <br>\r\n            We revisit our methods from time to time to ensure that we constantly and consistently keep soaring towards\r\n            our goal of engendering an atmosphere to empower SOCIALLY RESPONSIBLE CITIZENSHIP.<br>\r\n            While most would say food and water and the basic needs of life help a child survive, we at the Premia\r\n            Academy beg to differ, we strongly believe that safety, love and a positive learning environment helps\r\n            children thrive.\r\n\r\n          </p>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-3 col-sm-12 ethos-col\" *ngFor=\"let item of ehtos; index as i\">\r\n          <h3>\r\n            {{item.title}}\r\n          </h3>\r\n          <div class=\"circle\" (click)=\"onClick(i+1)\">\r\n            <img src=\"assets/images/ethos-{{i+1}}.png\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n      <div class=\"row ethos-2\">\r\n        <div class=\"col-lg-3 col-md-3 col-sm-12 ethos-col-2\" *ngFor=\"let item of ehtos2; index as i\">\r\n          <div class=\"circle\" (click)=\"onClick(i+5)\">\r\n            <img src=\"assets/images/ethos-{{i+5}}.png\" alt=\"\">\r\n          </div>\r\n          <h3>\r\n            {{item.title}}\r\n          </h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row white\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        <div class=\"panel\">\r\n          <p> The Premia Academy was founded on the belief that every child has the potential to make the world a\r\n            beautiful place. Every child is unique and capable of learning when stimulated properly. Premiaa Academy\r\n            believes in the development of these primary areas.\r\n            Every institution has a framework or ground rules that they function with for the empowerment of every\r\n            stakeholder. We at Premia like to call it the Premia ethos. We aspire to build a positive and progressive\r\n            culture in our school, not only within our corridors and premises but in the very lives of all who are a\r\n            part\r\n            of our journey-children, parents, teachers, staff and administration.\r\n            We revisit our methods from time to time to ensure that we constantly and consistently keep soaring towards\r\n            our goal of engendering an atmosphere to empower SOCIALLY RESPONSIBLE CITIZENSHIP.\r\n            While most would say food and water and the basic needs of life help a child survive, we at the Premia\r\n            Academy\r\n            beg to differ, we strongly believe that safety, love and a positive learning environment helps children\r\n            thrive. </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row prodigy\" [ngClass]=\"{'active': tab==='tab1'}\" id=\"1\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        <div class=\"panel\">\r\n          <h2> <i class=\"icon icon-medium\">\r\n              <svg focusable=\"false\">\r\n                <use xlink:href=\"#icon_ethicalEdu\"></use>\r\n              </svg>\r\n            </i>The safe and positive environment (Safety isn’t expensive, it's priceless):</h2>\r\n          <p>\r\n            At Premia we believe that a child's health and safety is paramount. A Safe and Positive Learning Environment\r\n            is key to accomplishing our purpose. It is the launch pad that every child takes off from. Keeping this in\r\n            mind has been the reason to ensure that all the facilities provided at The Premia Academy ensures the safety\r\n            of all who enter our premises, including the air they breathe! A sophisticated Air conditioning system that\r\n            allows us to breathe clean, purified air is only one of such thought processes. According to educational\r\n            researcher Sheryl Feinstein’s book From the Brain to the Classroom. It was found that half of the learning\r\n            impact came from light, temperature, and air quality.\r\n          </p>\r\n          <ul class=\"list\">\r\n            <li>\r\n              Centralized AC System in campus with VRF technology-Most ACs recycle 100% of the air which increases CO2\r\n              levels and doesn't filter out or deactivate airborne infections. Premia's state of the air Air\r\n              Conditioning system provides a mixture of fresh and recycled air to allow consistent oxygen levels at a\r\n              pleasant temperature. UV lamps inside the ducting ensure that germs are eradicated.\r\n            </li>\r\n            <li>\r\n              CCTV Surveillance\r\n            </li>\r\n            <li>\r\n              Background verified Staff-All Teaching and Non Teaching staff at Premia have had to go through stringent\r\n              background checks and police verification, undergone training on Premia's safety and security policies.\r\n              Everyone including teaching staff and visitors are vetted and frisked prior to being allowed on campus.\r\n              Visitors once registered in our visitor management system are accompanied by Premia staff at all times.\r\n            </li>\r\n            <li>\r\n              Eco friendly campus - We use state of the art RO & UV plants to provide students with the safe drinking\r\n              water.</li>\r\n            <li> Astroturf 5 aside Futsal field</li>\r\n            <li> Acoustic Walls</li>\r\n            <li> Public Addressing System -Our campus wide audio and video surveillance network consisting of over a 100\r\n              high definition cameras allows our team of trained professionals to monitor, identify and handle any\r\n              situation with ease.</li>\r\n            <li> Safe Transport Facility-All our Buses are operated by highly experienced bus drivers and include female\r\n              attendants. Our buses capture all student entry and exits, have cctv monitoring and gps tracking.</li>\r\n            <li> Kids friendly Infrastructure</li>\r\n            <li> Regular Pest Control and Sanitization </li>\r\n            <li>Tie up with Hospital</li>\r\n            <li>Fully equipped infirmary access -Our on campus infirmary is operated by trained nurses where we maintain\r\n              health records of all students. We have tied up with local hospitals for any emergencies.</li>\r\n            <li> Counselling Support </li>\r\n            <li> No Corporal Punishment</li>\r\n          </ul>\r\n          1. Please see if you can replicate the infographic shared before. <br>\r\n          2. Please remove gray background<br>\r\n          3. Please align :The Culture and….” in the same line and not 3 lines. <br>\r\n          4. Please change the color of subtitle in the infographic as well as in the bottom text (Prodigy etc). <br>\r\n          5. Please use icons next to each subtitles.\r\n\r\n         \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row prodigy\" [ngClass]=\"{'active': tab==='tab2'}\" id=\"2\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        <div class=\"panel\">\r\n          <h2> <i class=\"icon icon-medium\">\r\n              <svg focusable=\"false\">\r\n                <use xlink:href=\"#icon_ethicalEdu\"></use>\r\n              </svg>\r\n            </i>Growth & Innovation mindset (Empower & Inspire)</h2>\r\n          <p>\r\n            All learning and nurturing becomes obsolete without the right mindset and attitude, as an institution we are devoted to raising children who will always choose to be the few who are change makers, risk takers and problem solvers. As young adults will empower and inspire all the lives they touch. <br>\r\nHow do we do this?\r\n\r\n          </p>\r\n          <ul class=\"list\">\r\n            <li>Establish School norms -Self goals are set with essential agreements and conveyed with positive statements.</li> \r\n            <li>\tE4 circuit:  Express, energise, endure & elevate : an initiative that helps with Democratized group work, Choice of tasks which are meaningful and relevant to one’s success and take responsibility for one's actions whilst reflecting and refining the set goals. </li>\r\n            <li>Creya Design thinking program : helps sow the seeds of a constant resonance with a solution based approach. Help our students to identify, evaluate and solve the problem. </li>\r\n            <li>Metamorphosis : an organisation that is the pioneer and expert in the field of teaching young minds the art and science of business and growth. </li>\r\n            <li>Mentor counsel: organises career counselling drives and identifies kids passion and strength. \r\n              \r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row prodigy\" [ngClass]=\"{'active': tab==='tab3'}\" id=\"3\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        <div class=\"panel\">\r\n          <h2> <i class=\"icon icon-medium\">\r\n              <svg focusable=\"false\">\r\n                <use xlink:href=\"#icon_ethicalEdu\"></use>\r\n              </svg>\r\n            </i>Quest for learning (Lifelong learners) </h2>\r\n          <p>\r\n            We as an institution are advocates of the thought process that learning never stops. If it does so does progress. All our children will be equipped with the skills and mindset to be lifelong learners on a quest to impact humanity in a promising and genuine manner. We teach our children how to learn not what to learn, thus ensuring their quest for learning stays ignited. <br>\r\nHow do we do this? \r\n          </p>\r\n          <ul class=\"list\">\r\n            <li>\r\n              \tRobust and well rounded curriculum </li>\r\n                <li>\tDifferentiated learning- we are passionate and morally obligated to help students reach individual student goals </li>\r\n                <li>Yardstick : partnered to bring a tactile and experiential learning to every child </li>\r\n                <li>Number nuger. : to get the foundation of concepts and logic right, to ensure no child feels left behind. </li>\r\n                <li>State of the art library: readers are people who can self learn indefinitely </li>\r\n                <li>Scholastic bookroom. : a program designed to make every pupil a profound reader.\r\n\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row prodigy\" [ngClass]=\"{'active': tab==='tab4'}\" id=\"4\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        <div class=\"panel\">\r\n          <h2> <i class=\"icon icon-medium\">\r\n              <svg focusable=\"false\">\r\n                <use xlink:href=\"#icon_ethicalEdu\"></use>\r\n              </svg>\r\n            </i>Integrity above all (Virtue in our veins) </h2>\r\n          <p>\r\n            the most integral part of our culture and curricula is our endeavour to have each and everyone of The Premia Family to be an exemplary reflection of integrity from the very fibre of our beings. It is emphasised in every area of our interaction with students, parents, teachers, staff and administration. We encourage students to correct their own wrongs as it persuades them to take responsibility for their actions. <br>\r\nHow do we do this? \r\n          </p>\r\n          <ul class=\"list\">\r\n            <li>We walk the talk</li>\r\n                <li>Social emotional learning across all verticals</li>\r\n                <li>Swadhyay -  life enrichment value system- Ethos, ethics and etiquette become a way of life</li>\r\n                <li>guest interactions with people from all walks of life.</li>\r\n                <li>Avani - our sustainable living curricula </li>\r\n                <li>Impetus on Relationship Building – great bonds with family and friends help us become better people everyday.\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row prodigy\" [ngClass]=\"{'active': tab==='tab5'}\" id=\"5\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        <div class=\"panel\">\r\n          <h2> <i class=\"icon icon-medium\">\r\n              <svg focusable=\"false\">\r\n                <use xlink:href=\"#icon_ethicalEdu\"></use>\r\n              </svg>\r\n            </i>Passion(Finding your inner strength)</h2>\r\n          <p>\r\n            our varied platforms and events, help children identify their strengths, weaknesses and  interest areas. \r\nOnce children finish their 10th grade our mentors do career counselling with the help of scientific ability tests and personality tests to further help children choose their direction\r\nOnce kids decide on their chosen fields, experts from the field will be invited to address and explain to our students about the permutations and combinations of their respective fields. \r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row prodigy\" [ngClass]=\"{'active': tab==='tab6'}\" id=\"6\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        <div class=\"panel\">\r\n          <h2> <i class=\"icon icon-medium\">\r\n              <svg focusable=\"false\">\r\n                <use xlink:href=\"#icon_ethicalEdu\"></use>\r\n              </svg>\r\n            </i>Purpose (THe Driving force)</h2>\r\n          <p>\r\n            Good citizenship is about being a tribe that exudes peace and progress, while great citizenship is about impacting and changing lives for the better. We encourage our children to identify the purpose behind their passion and persistence. \r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row prodigy\" [ngClass]=\"{'active': tab==='tab7'}\" id=\"7\">   \r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n        <div class=\"panel\">\r\n          <h2> <i class=\"icon icon-medium\">\r\n              <svg focusable=\"false\">\r\n                <use xlink:href=\"#icon_ethicalEdu\"></use>\r\n              </svg>\r\n            </i>Prodigy (Miracles in making)</h2>\r\n          <p>\r\n            It's our driving force that all our children go on to achieve their aspirations and live lives that inspire one and all. Every step we take, every move we make, is an effort to ensure we awaken the hidden prodigy every pupil. That journey builds itself on the bedrock of integrity, growth and innovation mindset and their tireless quest for knowledge. While everyone focuses on the thirst for materialistic success in life, little do we understand that fame, success and prosperity is the by-product of work done with passion and purpose\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n";
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


    __webpack_exports__["default"] = "<section class=\"premia-partner\">\n    <div class=\"breadcum\">\n        <a>\n            <i class=\"icon icon-ex-small\">\n                <svg focusable=\"false\">\n                    <use xlink:href=\"#icon_home\"></use>\n                </svg>\n            </i>\n        </a>\n        <span> |</span>\n        <a>\n            The\n            Premia Partners\n        </a>\n    </div>\n\n    <div class=\"row-f\">\n        <h1>\n            Premia Partners\n        </h1>\n\n        <h3 class=\"center\">\n            <span class=\"highlighted\">\"</span>When great ideas and good intentions come\ntogether <span class=\"highlighted\">MAGIC HAPPENS</span> meet our friends and\npartners who have joined our mission<span class=\"highlighted\">\"</span>\n        </h3>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 grear-container\" data-aos=\"fade-up\" data-aos-once=\"true\">\n            <div class=\"gears gears-{{i+1}}\" *ngFor=\"let list of partners; index as i\">\n                <a (click)=\"onClick(i+1)\">\n                    <img src=\"assets/images/gear-{{i+1}}.png\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"gears gears-9\">\n                <a href=\"\">\n                    <img src=\"assets/images/gear-9.png\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"gears gears-10\">\n                <a href=\"\">\n                    <img src=\"assets/images/gear-10.png\" alt=\"\">\n                </a>\n            </div>\n            \n        </div>\n    </div>\n\n<div class=\"partner-panel\">\n    <div class=\"row-f\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 partner-grid\" id=\"{{list.id}}\" *ngFor=\"let list of partners; index as i\" data-aos=\"fade-up\" data-aos-once=\"true\">\n           <div class=\"panel\">\n               <div class=\"row\">\n                   <div class=\"col-lg-6 col-md-6 col-sm-12 left-panel\">\n                      <h3>{{list.name}}</h3>\n                       <p>{{list.title}}</p>\n                       <div class=\"number\">0{{i+1}}</div>\n                   </div>\n                   <div class=\"col-lg-6 col-md-6 col-sm-12 right-panel\">\n                    {{list.des}}\n                    <div class='read-more' ngbDropdown container=\"body\">\n                    <div ngbDropdownToggle>READ MORE</div>\n\n                    <div ngbDropdownMenu>\n                        {{list.des2}} \n                      </div>\n                </div>\n                </div>\n               </div>\n           </div>\n        </div>\n    </div>\n    </div>\n\n</section>\n";
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


    __webpack_exports__["default"] = "<section class=\"section-inner-subheader\">\r\n    <div class=\"breadcum\">\r\n        <a>\r\n            <i class=\"icon icon-ex-small\">\r\n                <svg focusable=\"false\">\r\n                    <use xlink:href=\"#icon_home\"></use>\r\n                </svg>\r\n            </i>\r\n        </a>\r\n        <span> |</span>\r\n        <a>\r\n            The Premia League\r\n        </a>\r\n    </div>\r\n    <section>\r\n        <div class=\"container\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col col-lg-12 col-md-12 col-sm-12 center\"  data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                    <h1 class=\"center\">\r\n                        THE PREMIA LEAGUE\r\n                    </h1>\r\n                    <h6 class=\"people-quates\">\r\n                      <span class=\"quates start\"> \r\n                    <i class=\"icon icon-ex-small\">\r\n                        <svg focusable=\"false\">\r\n                            <use xlink:href=\"#icon_quotes\"></use>\r\n                        </svg>\r\n                    </i>\r\n                </span> We are a group of committed individuals who believe that “What sculpture is to a block of marble, education is to the human soul.\r\n                      <span class=\"commatter\">--Joseph Addison.</span>\r\n                      <span class=\"quates end\">\r\n                        <i class=\"icon icon-ex-small\">\r\n                            <svg focusable=\"false\">\r\n                                <use xlink:href=\"#icon_quotes\"></use>\r\n                            </svg>\r\n                        </i>\r\n                      </span>\r\n                       \r\n                    </h6>\r\n                    <P>\r\n                        Our advisory board comprises diverse academicians who have a keen interest in providing a unique perspective to our collective vision. Individually they have contributed tremendously to the field of education, together they bring their unique capacities to our advisory board supporting continual improvement and sustainability. <br><br>   \r\nWe want to nurture a confident, compassionate student body that is ready to make a positive difference to the World. We affirm that every child deserves a childhood filled with love and positivism. That is the core belief, with which we will take care of each child, as this will contribute to making exemplary individuals.\r\n                    </P>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row the-team-info\">\r\n                <div class=\"col col-lg-12 col-md-12 col-sm-12\">\r\n                    <h1 class=\"center\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        THE FOUNDING TEAM\r\n                    </h1>\r\n                </div>\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <div class=\"img-frame\"> \r\n                            <img src=\"assets/images/premianleague4.jpg\">\r\n                        </div>\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">Mr. Nallary\r\n                                Pradeep Reddy\r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                Widely recognized as one of the pioneers of the Information Technology revolution in\r\n                                India, Mr\r\n                                Reddy is the MD of The Interbiz and Infosun Group of Companies. He holds a bachelors in\r\n                                Electronics from IIT, Madras & a Masters in Computer Science from Penn State. He is a\r\n                                visionary\r\n                                and has been a guiding force to the Premia Team.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <div class=\"img-frame\"> \r\n                            <img src=\"assets/images/premianleague5.jpg\">\r\n                        </div>\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">Ms Sinduri Reddy\r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                With a keen interest in education, Ms Sinduri Reddy spearheads the Premia Academy as the Founder and Managing Director. Her focus is to help students and teachers, both, to adapt to the ever changing world of the 21st Century. She is Premia’s strongest pillar!\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row the-team-info\">\r\n                \r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <div class=\"img-frame\"> \r\n                            <img src=\"assets/images/premianleague6.jpg\">\r\n                        </div>\r\n                        \r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                Mr Varun Reddy \r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                A director at The Interbiz and Infosun Group of Companies, he ensures that over 3 Lakh employees spread across 800 clients have access to state-of-the-art Human Resource Automation Applications. He is the CEO and Co-founder of Premia Academy. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <div class=\"img-frame\"> \r\n                            <img src=\"assets/images/premianleague7.jpg\">\r\n                        </div>\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                Mr Subramanayam Kantheti \r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                He is a business management professional with an experience of over 25 years. Mr Kantheti has been instrumental in setting up and managing schools across the country. He is the Co-Founder and COO at Premia. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <div class=\"img-frame\"> \r\n                            <img src=\"assets/images/premianleague8.jpg\">\r\n                        </div>\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">Ms Arti Mandhania \r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                She has an experience of 13 years and currently is the Business Head. A double post graduate in child psychology and business management, when not with kids, she is found with a book or a painting. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row the-team-info\">\r\n                <div class=\"col col-lg-12 col-md-12 col-sm-12\">\r\n                    <h1 class=\"center\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        THE ACADEMIC TEAM\r\n                    </h1>\r\n                </div>\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <div class=\"img-frame\"> \r\n                            <img src=\"assets/images/premianleague1.jpg\">\r\n                        </div>\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                Ms Malini Paul \r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                Her elegant personna often reflects in her role as the Founding Headmistress at Premia. With an experience of more than 30 years, she is an expert at Pre-School and Primary education. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <div class=\"img-frame\"> \r\n                            <img src=\"assets/images/premianleague2.jpg\">\r\n                        </div>\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                MS Rubina Majid\r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                The Curriculum Developer and Master Trainer of Premia Academy, Mr Rubina has worked extensively with schools in India and abroad. At present, besides working with The Premia Academy, Rubina is a consultant with Scholastic India and TCS iON for their educational verticals as well as running the Learning Resource Center, a think tank set up to accelerate and support positive change in our education system. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <div class=\"img-frame\"> \r\n                            <img src=\"assets/images/premianleague3.jpg\">\r\n                        </div>\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">Ms Trupti Rao\r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                Her core belief is to impart quality education for all students based on their social, emotional or physical aspects. As the Principal of Premia Academy, Ms Trupti Rao is a dedicated, resourceful educationist with proven ability to create and monitor policies that promote a happy and a safe learning environment. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row the-team-info\">\r\n\r\n                <div class=\"col col-lg-12 col-md-12 col-sm-12\">\r\n                    <h1 class=\"center\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        THE ADVISORY BOARD\r\n                    </h1>\r\n                </div>\r\n               \r\n\r\n                    <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <div class=\"img-frame\"> \r\n                            <img src=\"assets/images/premianleague9.jpg\">\r\n                        </div>\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">Ms Lalitha Naidu  \r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                An academician carrying values of purpose, passion and pedagogy, Ms Naidu presently heads the Meridian School, Madhapur. She is the Founder Principal of Shadan Group of Modern Schools. \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col col-lg-4 col-md-4 col-sm-12\">\r\n                    <div class=\"panel\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                        <div class=\"img-frame\"> \r\n                            <img src=\"assets/images/premianleague10.jpg\">\r\n                        </div>\r\n                        <div class=\"panel-body blue-bg\" data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                            <h5 data-aos=\"fade-up\" data-aos-once=\"true\">Ms Lalitha Naidu \r\n                            </h5>\r\n                            <p data-aos=\"fade-up\" data-aos-once=\"true\">\r\n                                An academician carrying values of purpose, passion and pedagogy, Ms Naidu presently heads the Meridian School, Madhapur. She is the Founder Principal of Shadan Group of Modern Schools.  \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</section>";
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


    __webpack_exports__["default"] = ".section-admission .adm-info-table {\n  border-radius: 15px;\n  display: table;\n  margin: 0 auto;\n  border-spacing: 0;\n  border-collapse: separate;\n  overflow: hidden;\n}\n.section-admission .adm-info-table td {\n  padding: 5px 30px;\n  text-align: center;\n}\n.section-admission .row-f, .section-admission .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-admission .admission-info {\n  background: #fff;\n}\n.section-admission .add-spec {\n  margin-left: 35px;\n  margin-bottom: 35px;\n}\n.section-admission .add-spec .row {\n  margin: 0px;\n}\n.section-admission .add-spec .panel {\n  padding: 0;\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-admission .add-spec .panel p {\n  margin-top: 25px;\n}\n.section-admission .curriculum {\n  margin-bottom: 0px;\n}\n.section-admission .panel {\n  background: #fff;\n  padding: 50px;\n  padding-bottom: 0px;\n}\n.section-admission .panel .image-wrap {\n  width: 50%;\n  margin: -120px 0 26px 50px;\n}\n.section-admission .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n}\n.section-admission .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-admission .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-admission .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-admission h1 {\n  margin-bottom: 5px;\n}\n.section-admission h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-admission h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-admission .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-admission ul.list {\n  margin: 0px;\n}\n.section-admission ul.list li {\n  color: #000;\n}\n.section-admission ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n.applycation-rules .btn {\n  width: 75%;\n  padding: 15px 0;\n  background: #bf272d;\n  font-family: \"Lora\", serif;\n  margin: 25px auto 0;\n  font-size: 24px;\n  display: block;\n}\n.section-admission-2 {\n  margin: 70px 0px 0 0;\n}\n.section-admission-2 .row {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.section-admission-2 .bar {\n  position: relative;\n  padding-top: 15px;\n}\n.section-admission-2 .bar::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100px;\n  height: 5px;\n}\n.section-admission-2 .pp0::after {\n  background: #3e65ac;\n}\n.section-admission-2 .pp1::after {\n  background: #bf272d;\n}\n.section-admission-2 .pp2::after {\n  background: #000000;\n}\n.section-admission-2 .pp3::after {\n  background: #e4e4e4;\n}\n.section-admission-2 .addmin-sec {\n  padding: 0px;\n}\n.section-admission-2 .addmin-sec .row {\n  margin-left: 0px;\n}\n.section-admission-2 .addmin-sec a.add-info {\n  color: #000;\n  text-decoration: none;\n}\n.section-admission-2 .addmin-sec .add-info {\n  padding: 2px;\n  display: flex;\n}\n.section-admission-2 .addmin-sec .add-info:first-child .panel {\n  margin-left: 0px;\n}\n.section-admission-2 .admission-flag {\n  position: relative;\n  color: #fff;\n  padding: 25px 0;\n  height: 250px;\n}\n.section-admission-2 .admission-flag .btn {\n  border: 1px solid #fff;\n  color: #fff;\n  background: none;\n}\n.section-admission-2 p {\n  white-space: pre;\n  margin-top: 15px;\n}\n.section-admission-2 .panel {\n  background: url('bulb.png') no-repeat 40px -10px #fff;\n  padding-top: 270px;\n  padding-bottom: 50px;\n  width: 100%;\n  border: 1px solid #8b8b8b;\n}\n.section-admission-2 .panel .panel-heading {\n  z-index: 2;\n  position: relative;\n}\n.section-admission-2 .panel .btn {\n  position: absolute;\n  bottom: 15px;\n  border: 2px solid #000;\n  background: none;\n  color: #000;\n  z-index: 2;\n}\n.section-admission-2 .panel:hover .btn {\n  border: 2px solid #fff;\n  background: none;\n  color: #fff;\n}\n.section-admission-2 .panel:hover .panel-heading .bar::after {\n  background: #fff !important;\n}\n.section-admission-2 .panel:hover .panel-heading h3, .section-admission-2 .panel:hover .panel-heading p {\n  color: #fff;\n}\n.section-admission-2 .panel:hover::after {\n  content: \"\";\n  background: url('bulb.jpg') no-repeat -65px -50px #bf272d;\n  position: absolute;\n  top: -25px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% + 50px);\n  padding: 325px 20px 0;\n  z-index: 1;\n  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.section-admission-2 .panel i {\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-admission-2 .panel svg {\n  width: 75px;\n  height: 75px;\n}\n.ethos-col {\n  align-self: center;\n  justify-content: center;\n  display: flex;\n}\n.ethos-col p {\n  display: flex;\n  width: 50%;\n  text-align: center;\n  align-items: center;\n}\n.ethos-col:nth-child(1) .circle:before, .ethos-col:nth-child(2) .circle:before {\n  position: absolute;\n  right: -50px;\n  top: 29px;\n  content: \" \";\n  width: 160px;\n  height: 160px;\n  background: url('a-tail.png') no-repeat top center;\n  transform: rotate(135deg);\n  z-index: -1;\n}\n.circle {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  display: table;\n  background: #be272e;\n  position: relative;\n}\n.circle img {\n  width: 80%;\n  margin: 15px auto;\n  display: block;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.circle img:hover {\n  transform: scale(1.1);\n}\n.circle:after {\n  position: absolute;\n  left: -50px;\n  top: 29px;\n  content: \" \";\n  width: 160px;\n  height: 160px;\n  background: url('a-tail-2.png') no-repeat top center;\n  z-index: -1;\n  transform: rotate(-135deg);\n}\n.ethos-2 {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n.ethos-2 .circle {\n  margin-left: 0px;\n  margin-top: -60px;\n}\n.ethos-2 .circle:after {\n  top: -54px;\n  left: 21px;\n  transform: rotate(47deg);\n}\n.ethos-2 .ethos-col-2 {\n  display: flex;\n}\n.ethos-2 .ethos-col-2 p {\n  display: flex;\n  width: 50%;\n  text-align: center;\n}\n.ethos-2 .ethos-col-2 .circle {\n  background: #4c62ad;\n}\n.ethos-2 .ethos-col-2 .circle:after {\n  background: url('ar-tail.png') no-repeat top center;\n}\n.ethos-2 .ethos-col-2:nth-child(2) .circle:before, .ethos-2 .ethos-col-2:nth-child(3) .circle:before {\n  position: absolute;\n  right: 30px;\n  top: -56px;\n  transform: rotate(-47deg);\n  content: \" \";\n  width: 160px;\n  height: 160px;\n  background: url('ar-tail-2.png') no-repeat top center;\n  z-index: -1;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n\n  .section-admission .panel {\n    padding: 40px 0;\n  }\n  .section-admission .panel .image-wrap {\n    width: 100% !important;\n    margin: 0px !important;\n  }\n  .section-admission .section-admission-2 .addmin-sec .add-info {\n    margin-bottom: 50px;\n  }\n  .section-admission .section-admission-2 .panel {\n    padding: 270px 50px 50px !important;\n    width: 100%;\n  }\n\n  .ethos-1 .row,\n.ethos-1 .row-f, .ethos-2 .row,\n.ethos-2 .row-f {\n    margin: 0 !important;\n  }\n  .ethos-1 .ethos-col, .ethos-1 .ethos-col-2, .ethos-2 .ethos-col, .ethos-2 .ethos-col-2 {\n    display: block;\n  }\n  .ethos-1 .ethos-col p, .ethos-1 .ethos-col-2 p, .ethos-2 .ethos-col p, .ethos-2 .ethos-col-2 p {\n    display: block;\n    width: 100%;\n  }\n  .ethos-1 .ethos-col .circle::after, .ethos-1 .ethos-col .circle::before, .ethos-1 .ethos-col-2 .circle::after, .ethos-1 .ethos-col-2 .circle::before, .ethos-2 .ethos-col .circle::after, .ethos-2 .ethos-col .circle::before, .ethos-2 .ethos-col-2 .circle::after, .ethos-2 .ethos-col-2 .circle::before {\n    display: none;\n  }\n\n  .circle {\n    margin: 0 auto;\n  }\n  .circle:after {\n    display: none;\n  }\n\n  .ethos-2 .circle {\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaXNzaW9ucy9EOlxcYWNhZGVteS9zcmNcXGFwcFxcYWRtaXNzaW9uc1xcYWRtaXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaXNzaW9ucy9hZG1pc3Npb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0FIO0FEQ0c7RUFDRCxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURLQztFQUNDLG9CQUFBO0VBQ0Esa0JBQUE7QUNIRjtBREtJO0VBQ0ksZ0JBQUE7QUNIUjtBREtJO0VBQ0YsaUJBQUE7RUFDQSxtQkFBQTtBQ0hGO0FESVE7RUFDSSxXQUFBO0FDRlo7QURJSztFQUNPLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRlo7QURHWTtFQUNJLGdCQUFBO0FDRGhCO0FES0M7RUFDQyxrQkFBQTtBQ0hGO0FES0M7RUFDQyxnQkFBQTtFQUNNLGFBQUE7RUFDQSxtQkFBQTtBQ0hSO0FESUU7RUFDQyxVQUFBO0VBQ0MsMEJBQUE7QUNGSjtBRElFO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNGSDtBREdHO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0RKO0FERUk7RUFDQyxVQUFBO0VBQ0Esd0JBQUE7RUFDRyxlQUFBO0FDQVI7QURHRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RKO0FETUM7RUFDQyxrQkFBQTtBQ0pGO0FETUM7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0pGO0FES0U7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNISDtBRE1DO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNKRjtBRE1DO0VBQ0MsV0FBQTtBQ0pGO0FES0U7RUFDQyxXQUFBO0FDSEg7QURJRztFQUNDLG1CQUFBO0FDRko7QURRQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDTEQ7QURNQztFQUNDLHdCQUFBO0FDSkY7QURTSTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNOUjtBRFVBO0VBQ0Msb0JBQUE7QUNQRDtBRFFDO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0FDTkY7QURTQztFQUNDLGtCQUFBO0VBQ0EsaUJBQUE7QUNQRjtBRFFFO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ05IO0FEV0U7RUFDQSxtQkFBQTtBQ1RGO0FEV007RUFDSixtQkFBQTtBQ1RGO0FEV007RUFDSixtQkFBQTtBQ1RGO0FEV007RUFDSixtQkFBQTtBQ1RGO0FEWUM7RUFDQyxZQUFBO0FDVkY7QURXRTtFQUNDLGdCQUFBO0FDVEg7QURZRztFQUNDLFdBQUE7RUFDQSxxQkFBQTtBQ1ZKO0FEYUU7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ1hIO0FEYUk7RUFDQyxnQkFBQTtBQ1hMO0FEZ0JDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNkRjtBRGVFO0VBQ0Msc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNiSDtBRGdCQztFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7QUNkRjtBRGdCRTtFQUNDLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ2RIO0FEZUc7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7QUNiSjtBRGVHO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDYko7QURpQkk7RUFDQyxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ2ZMO0FEdUJNO0VBQ0MsMkJBQUE7QUNyQlA7QUR3Qks7RUFDQyxXQUFBO0FDdEJOO0FEMEJJO0VBQ0MsV0FBQTtFQUNBLHlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLCtDQUFBO0FDeEJMO0FENEJHO0VBQ0MsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQzFCSjtBRDRCRztFQUNDLFdBQUE7RUFDQSxZQUFBO0FDMUJKO0FEa0NBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUMvQko7QURnQ0M7RUFDQyxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUM5QkY7QURtQ1E7RUFDTCxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNqQ0w7QUR1Q0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNwQ0o7QURzQ0k7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDcENOO0FEc0NNO0VBQ0UscUJBQUE7QUNwQ1I7QUR3Q0k7RUFDRSxrQkFBQTtFQUNILFdBQUE7RUFDRyxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0RBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUN0Q047QUQwQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ3ZDSjtBRHlDSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUN2Q047QUR5Q007RUFDRSxVQUFBO0VBQ0gsVUFBQTtFQUNBLHdCQUFBO0FDdkNMO0FEMkNJO0VBQ0YsYUFBQTtBQ3pDRjtBRDBDRTtFQUNDLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUN4Q0g7QUQwQ0U7RUFDQyxtQkFBQTtBQ3hDSDtBRDBDRztFQUNFLG1EQUFBO0FDeENMO0FEOENLO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscURBQUE7RUFDQSxXQUFBO0FDNUNOO0FEbURBO0VBSUU7SUFDQyxnQkFBQTtFQ25ERDtFRHFERDtJQUNDLGlCQUFBO0VDbkRBO0VEc0REO0lBQ0MsV0FBQTtFQ3BEQTs7RUQwREQ7SUFDQyxlQUFBO0VDdkRBO0VEd0RBO0lBQ0Msc0JBQUE7SUFDQSxzQkFBQTtFQ3RERDtFRDJEQztJQUNDLG1CQUFBO0VDekRGO0VENERBO0lBQ0MsbUNBQUE7SUFDQSxXQUFBO0VDMUREOztFRGlFQTs7O0lBRUUsb0JBQUE7RUM3REY7RUQrREE7SUFDRCxjQUFBO0VDN0RDO0VEOEREO0lBQ0MsY0FBQTtJQUNBLFdBQUE7RUM1REE7RUQrREE7SUFDQyxhQUFBO0VDN0REOztFRG9FRjtJQUNFLGNBQUE7RUNqRUE7RURtRUE7SUFDRSxhQUFBO0VDakVGOztFRHNFQTtJQUNFLGNBQUE7RUNuRUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWlzc2lvbnMvYWRtaXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWFkbWlzc2lvbntcclxuICAuYWRtLWluZm8tdGFibGV7XHJcblx0ICBib3JkZXItcmFkaXVzOjE1cHg7XHJcblx0ICBkaXNwbGF5OiB0YWJsZTtcclxuXHQgIG1hcmdpbjowIGF1dG87XHJcblx0ICBib3JkZXItc3BhY2luZzogMDtcclxuXHQgIGJvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZTtcclxuXHQgIG92ZXJmbG93OmhpZGRlbjtcclxuXHQgIHRke1xyXG5cdFx0cGFkZGluZzogNXB4IDMwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ICB9XHJcblxyXG4gIH1cclxuXHJcbiAgXHJcblx0LnJvdy1mLCAucm93e1xyXG5cdFx0bWFyZ2luOjcwcHggMCAxMDBweDsgXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuYWRtaXNzaW9uLWluZm97XHJcbiAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgfVxyXG4gICAgLmFkZC1zcGVje1xyXG5cdFx0bWFyZ2luLWxlZnQ6MzVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206MzVweDtcclxuICAgICAgICAucm93e1xyXG4gICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAucGFuZWx7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cdC5jdXJyaWN1bHVte1xyXG5cdFx0bWFyZ2luLWJvdHRvbTowcHg7XHJcblx0fVxyXG5cdC5wYW5lbCB7XHJcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgcGFkZGluZzo1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOjBweDtcclxuXHRcdC5pbWFnZS13cmFwe1xyXG5cdFx0XHR3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAtMTIwcHggMCAyNnB4IDUwcHg7XHJcblx0XHR9XHJcblx0XHQmLnN0b3J5LWluZm97XHJcblx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdC5mbHlpbmctcGxhbmV7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdHRvcDowcHg7XHJcblx0XHRcdFx0c3Zne1xyXG5cdFx0XHRcdFx0ZmlsbDogI2ZmZjtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIFx0XHRcdFx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQmOjphZnRlcntcclxuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OjBweDtcclxuXHRcdFx0XHR0b3A6NTBweDtcclxuXHRcdFx0XHR3aWR0aDogM3B4O1xyXG5cdFx0XHRcdGhlaWdodDogMjBweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblx0aDF7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0fVxyXG5cdGgye1xyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTo1cHg7XHJcblx0XHRsaW5lLWhlaWdodDogNjBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdGNvbnRlbnQ6XCIgXCI7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0Ym90dG9tOjA7XHJcblx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0d2lkdGg6NTBweDtcclxuXHRcdFx0aGVpZ2h0OjJweDtcclxuXHRcdFx0YmFja2dyb3VuZDojZjBmMGYwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDowO1xyXG5cdFx0dG9wOjA7XHJcblx0XHR3aWR0aDogNDAlO1xyXG5cdH1cclxuXHR1bC5saXN0e1xyXG5cdFx0bWFyZ2luOjBweDtcclxuXHRcdGxpe1xyXG5cdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ubW9yZS1pbmZve1xyXG5cdGZsb2F0Om5vbmU7XHJcblx0Y2xlYXI6Ym90aDtcclxuXHRwe1xyXG5cdFx0bWFyZ2luOjUwcHggMCA3MHB4IDc1cHggO1xyXG5cdH1cclxufVxyXG5cclxuLmFwcGx5Y2F0aW9uLXJ1bGVze1xyXG4gICAgLmJ0bntcclxuICAgICAgICB3aWR0aDo3NSU7XHJcbiAgICAgICAgcGFkZGluZzoxNXB4IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDojYmYyNzJkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOjI1cHggYXV0byAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLWFkbWlzc2lvbi0ye1xyXG5cdG1hcmdpbjo3MHB4IDBweCAwIDA7XHJcblx0LnJvd3tcclxuXHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0LmJhcntcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZy10b3A6MTVweDtcclxuXHRcdCY6OmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDowcHg7XHJcblx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHR3aWR0aDoxMDBweDtcclxuXHRcdFx0aGVpZ2h0OjVweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5wcDB7XHJcblx0XHQmOjphZnRlcntcclxuXHRcdGJhY2tncm91bmQ6IzNlNjVhYzt9XHJcblx0fVxyXG5cdC5wcDF7Jjo6YWZ0ZXJ7XHJcblx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7fVxyXG5cdH1cclxuXHQucHAyeyY6OmFmdGVye1xyXG5cdFx0YmFja2dyb3VuZDojMDAwMDAwO31cclxuXHR9XHJcblx0LnBwM3smOjphZnRlcntcclxuXHRcdGJhY2tncm91bmQ6I2U0ZTRlNDt9XHJcblx0fVxyXG5cclxuXHQuYWRkbWluLXNlY3tcclxuXHRcdHBhZGRpbmc6MHB4O1xyXG5cdFx0LnJvd3tcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4O1xyXG5cdFx0fVxyXG5cdFx0YXtcclxuXHRcdFx0Ji5hZGQtaW5mb3tcclxuXHRcdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmFkZC1pbmZve1xyXG5cdFx0XHRwYWRkaW5nOjJweDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0JjpmaXJzdC1jaGlsZHtcclxuXHRcdFx0XHQucGFuZWx7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDowcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5hZG1pc3Npb24tZmxhZ3tcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdHBhZGRpbmc6MjVweCAwO1xyXG5cdFx0aGVpZ2h0OjI1MHB4O1xyXG5cdFx0LmJ0bntcclxuXHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB7XHJcblx0XHR3aGl0ZS1zcGFjZTogcHJlO1xyXG5cdFx0bWFyZ2luLXRvcDoxNXB4O1xyXG5cdH1cclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9idWxiLnBuZykgbm8tcmVwZWF0IDQwcHggLTEwcHggI2ZmZjtcclxuXHRcdFx0cGFkZGluZy10b3A6IDI3MHB4O1xyXG5cdFx0XHRwYWRkaW5nLWJvdHRvbTo1MHB4O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjOGI4YjhiO1x0XHJcblx0XHRcdC5wYW5lbC1oZWFkaW5ne1xyXG5cdFx0XHRcdHotaW5kZXg6IDI7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5idG57XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGJvdHRvbToxNXB4O1xyXG5cdFx0XHRcdGJvcmRlcjoycHggc29saWQgIzAwMDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0XHR6LWluZGV4OiAyO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCY6aG92ZXJ7XHJcblx0XHRcdFx0LmJ0bntcclxuXHRcdFx0XHRcdGJvcmRlcjoycHggc29saWQgI2ZmZjtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6bm9uZTtcclxuXHRcdFx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQmOmhvdmVye1xyXG5cdFx0XHRcdC5wYW5lbC1oZWFkaW5ne1xyXG5cdFx0XHRcdFx0LmJhcntcclxuXHRcdFx0XHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRoMywgcHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQmOjphZnRlcntcclxuXHRcdFx0XHRcdGNvbnRlbnQ6Jyc7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2J1bGIuanBnKSBuby1yZXBlYXQgLTY1cHggLTUwcHggI2JmMjcyZDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHRvcDogLTI1cHg7XHJcblx0XHRcdFx0XHRsZWZ0OiAwcHg7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdGhlaWdodDogY2FsYygxMDAlICsgNTBweCk7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAzMjVweCAyMHB4IDA7XHJcblx0XHRcdFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDJweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpe1xyXG5cdFx0XHRcdG1hcmdpbjowIGF1dG87XHJcblx0XHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdmd7XHJcblx0XHRcdFx0d2lkdGg6NzVweDtcclxuXHRcdFx0XHRoZWlnaHQ6NzVweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHJcbn1cclxuXHJcblxyXG4uZXRob3MtY29sIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHRwe1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCgxKSwgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAuY2lyY2xlIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0cmlnaHQ6IC01MHB4O1xyXG5cdFx0XHR0b3A6IDI5cHg7XHJcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHR3aWR0aDogMTYwcHg7XHJcblx0XHRcdGhlaWdodDogMTYwcHg7XHJcblx0XHRcdGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2EtdGFpbC5wbmcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xyXG5cdFx0ICBcdHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcblx0XHQgIFx0ei1pbmRleDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGJhY2tncm91bmQ6ICNiZTI3MmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdCAgbGVmdDogLTUwcHg7XHJcbiAgICAgIHRvcDogMjlweDtcclxuICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYS10YWlsLTIucG5nKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmV0aG9zLTIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgICAuY2lyY2xlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcblxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICB0b3A6IC01NHB4O1xyXG4gICAgXHRsZWZ0OiAyMXB4O1xyXG4gICAgXHR0cmFuc2Zvcm06IHJvdGF0ZSg0N2RlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZXRob3MtY29sLTIge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHRcdC5jaXJjbGUge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjNGM2MmFkO1xyXG4gIFxyXG5cdFx0XHQmOmFmdGVyIHtcclxuXHRcdFx0ICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9hci10YWlsLnBuZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdCAgfVxyXG5cclxuXHRcdCAgJjpudGgtY2hpbGQoMiksICY6bnRoLWNoaWxkKDMpIHtcclxuXHRcdFx0LmNpcmNsZSB7XHJcblx0XHRcdCAgJjpiZWZvcmUge1xyXG5cdFx0XHRcdCAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdCAgcmlnaHQ6IDMwcHg7XHJcblx0XHRcdFx0ICB0b3A6IC01NnB4O1xyXG5cdFx0XHRcdCAgdHJhbnNmb3JtOiByb3RhdGUoLTQ3ZGVnKTtcclxuXHRcdFx0XHQgIGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHRcdCAgd2lkdGg6IDE2MHB4O1xyXG5cdFx0XHRcdCAgaGVpZ2h0OiAxNjBweDtcclxuXHRcdFx0XHQgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2FyLXRhaWwtMi5wbmcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xyXG5cdFx0XHRcdCAgei1pbmRleDogLTE7XHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9XHJcblx0XHQgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cclxuXHJcblx0LnNlY3Rpb24tc3R1ZHktY3VsdHVyZXtcclxuXHRcdC5yb3ctZiwgLnJvdywgaDF7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjBweDsgXHJcblx0fVxyXG5cdC5icmVhZGN1bXtcclxuXHRcdG1hcmdpbi1sZWZ0OjE1cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4uc2VjdGlvbi1hZG1pc3Npb257XHJcblx0LnBhbmVse1xyXG5cdFx0cGFkZGluZzo0MHB4IDA7XHJcblx0XHQuaW1hZ2Utd3JhcHtcclxuXHRcdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHR9XHJcblx0LnNlY3Rpb24tYWRtaXNzaW9uLTIge1xyXG5cdFx0LmFkZG1pbi1zZWMge1xyXG5cdFx0XHQuYWRkLWluZm97XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTo1MHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdHBhZGRpbmc6IDI3MHB4IDUwcHggNTBweCAhaW1wb3J0YW50O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG4uZXRob3MtMSwgLmV0aG9zLTIge1xyXG4gIC5yb3csXHJcbiAgLnJvdy1mIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZXRob3MtY29sLCAuZXRob3MtY29sLTJ7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdC5jaXJjbGV7XHJcblx0XHQmOjphZnRlciwgJjo6YmVmb3Jle1xyXG5cdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uZXRob3MtMiB7XHJcbiAgLmNpcmNsZSB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbn1cclxufSIsIi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRtLWluZm8tdGFibGUge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5hZG0taW5mby10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDVweCAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnJvdy1mLCAuc2VjdGlvbi1hZG1pc3Npb24gLnJvdyB7XG4gIG1hcmdpbjogNzBweCAwIDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmFkbWlzc2lvbi1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRkLXNwZWMge1xuICBtYXJnaW4tbGVmdDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRkLXNwZWMgLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5hZGQtc3BlYyAucGFuZWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuYWRkLXNwZWMgLnBhbmVsIHAge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5jdXJyaWN1bHVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnBhbmVsIC5pbWFnZS13cmFwIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAtMTIwcHggMCAyNnB4IDUwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnBhbmVsLnN0b3J5LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5wYW5lbC5zdG9yeS1pbmZvIC5mbHlpbmctcGxhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLnBhbmVsLnN0b3J5LWluZm8gLmZseWluZy1wbGFuZSBzdmcge1xuICBmaWxsOiAjZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAucGFuZWwuc3RvcnktaW5mbzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA1MHB4O1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gaDEge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIGgyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuaW1nLWZsYWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA0MCU7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gdWwubGlzdCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIHVsLmxpc3QgbGkge1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiB1bC5saXN0IGxpOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuXG4ubW9yZS1pbmZvIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGNsZWFyOiBib3RoO1xufVxuLm1vcmUtaW5mbyBwIHtcbiAgbWFyZ2luOiA1MHB4IDAgNzBweCA3NXB4O1xufVxuXG4uYXBwbHljYXRpb24tcnVsZXMgLmJ0biB7XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlY3Rpb24tYWRtaXNzaW9uLTIge1xuICBtYXJnaW46IDcwcHggMHB4IDAgMDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5yb3cge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLmJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAuYmFyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDVweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wcDA6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wcDE6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wcDI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wcDM6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2U0ZTRlNDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5hZGRtaW4tc2VjIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLmFkZG1pbi1zZWMgLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAuYWRkbWluLXNlYyBhLmFkZC1pbmZvIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5hZGRtaW4tc2VjIC5hZGQtaW5mbyB7XG4gIHBhZGRpbmc6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5hZGRtaW4tc2VjIC5hZGQtaW5mbzpmaXJzdC1jaGlsZCAucGFuZWwge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLmFkbWlzc2lvbi1mbGFnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjVweCAwO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLmFkbWlzc2lvbi1mbGFnIC5idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIHAge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYnVsYi5wbmcpIG5vLXJlcGVhdCA0MHB4IC0xMHB4ICNmZmY7XG4gIHBhZGRpbmctdG9wOiAyNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOGI4YjhiO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLnBhbmVsIC5wYW5lbC1oZWFkaW5nIHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLnBhbmVsIC5idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG4gIHotaW5kZXg6IDI7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWw6aG92ZXIgLmJ0biB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLnBhbmVsOmhvdmVyIC5wYW5lbC1oZWFkaW5nIC5iYXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLnBhbmVsOmhvdmVyIC5wYW5lbC1oZWFkaW5nIGgzLCAuc2VjdGlvbi1hZG1pc3Npb24tMiAucGFuZWw6aG92ZXIgLnBhbmVsLWhlYWRpbmcgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLnBhbmVsOmhvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2J1bGIuanBnKSBuby1yZXBlYXQgLTY1cHggLTUwcHggI2JmMjcyZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yNXB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDUwcHgpO1xuICBwYWRkaW5nOiAzMjVweCAyMHB4IDA7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uLTIgLnBhbmVsIGkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbi0yIC5wYW5lbCBzdmcge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuXG4uZXRob3MtY29sIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ldGhvcy1jb2wgcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ldGhvcy1jb2w6bnRoLWNoaWxkKDEpIC5jaXJjbGU6YmVmb3JlLCAuZXRob3MtY29sOm50aC1jaGlsZCgyKSAuY2lyY2xlOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC01MHB4O1xuICB0b3A6IDI5cHg7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2EtdGFpbC5wbmcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmNpcmNsZSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgYmFja2dyb3VuZDogI2JlMjcyZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNpcmNsZSBpbWcge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2lyY2xlIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5jaXJjbGU6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC01MHB4O1xuICB0b3A6IDI5cHg7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2EtdGFpbC0yLnBuZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbn1cblxuLmV0aG9zLTIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5ldGhvcy0yIC5jaXJjbGUge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAtNjBweDtcbn1cbi5ldGhvcy0yIC5jaXJjbGU6YWZ0ZXIge1xuICB0b3A6IC01NHB4O1xuICBsZWZ0OiAyMXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0N2RlZyk7XG59XG4uZXRob3MtMiAuZXRob3MtY29sLTIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmV0aG9zLTIgLmV0aG9zLWNvbC0yIHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZXRob3MtMiAuZXRob3MtY29sLTIgLmNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICM0YzYyYWQ7XG59XG4uZXRob3MtMiAuZXRob3MtY29sLTIgLmNpcmNsZTphZnRlciB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2FyLXRhaWwucG5nKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbn1cbi5ldGhvcy0yIC5ldGhvcy1jb2wtMjpudGgtY2hpbGQoMikgLmNpcmNsZTpiZWZvcmUsIC5ldGhvcy0yIC5ldGhvcy1jb2wtMjpudGgtY2hpbGQoMykgLmNpcmNsZTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMHB4O1xuICB0b3A6IC01NnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDdkZWcpO1xuICBjb250ZW50OiBcIiBcIjtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9hci10YWlsLTIucG5nKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgei1pbmRleDogLTE7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3ctZiwgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmJyZWFkY3VtIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zZWN0aW9uLWFkbWlzc2lvbiAucGFuZWwge1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgfVxuICAuc2VjdGlvbi1hZG1pc3Npb24gLnBhbmVsIC5pbWFnZS13cmFwIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb24tYWRtaXNzaW9uIC5zZWN0aW9uLWFkbWlzc2lvbi0yIC5hZGRtaW4tc2VjIC5hZGQtaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICAuc2VjdGlvbi1hZG1pc3Npb24gLnNlY3Rpb24tYWRtaXNzaW9uLTIgLnBhbmVsIHtcbiAgICBwYWRkaW5nOiAyNzBweCA1MHB4IDUwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5ldGhvcy0xIC5yb3csXG4uZXRob3MtMSAucm93LWYsIC5ldGhvcy0yIC5yb3csXG4uZXRob3MtMiAucm93LWYge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5ldGhvcy0xIC5ldGhvcy1jb2wsIC5ldGhvcy0xIC5ldGhvcy1jb2wtMiwgLmV0aG9zLTIgLmV0aG9zLWNvbCwgLmV0aG9zLTIgLmV0aG9zLWNvbC0yIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuZXRob3MtMSAuZXRob3MtY29sIHAsIC5ldGhvcy0xIC5ldGhvcy1jb2wtMiBwLCAuZXRob3MtMiAuZXRob3MtY29sIHAsIC5ldGhvcy0yIC5ldGhvcy1jb2wtMiBwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZXRob3MtMSAuZXRob3MtY29sIC5jaXJjbGU6OmFmdGVyLCAuZXRob3MtMSAuZXRob3MtY29sIC5jaXJjbGU6OmJlZm9yZSwgLmV0aG9zLTEgLmV0aG9zLWNvbC0yIC5jaXJjbGU6OmFmdGVyLCAuZXRob3MtMSAuZXRob3MtY29sLTIgLmNpcmNsZTo6YmVmb3JlLCAuZXRob3MtMiAuZXRob3MtY29sIC5jaXJjbGU6OmFmdGVyLCAuZXRob3MtMiAuZXRob3MtY29sIC5jaXJjbGU6OmJlZm9yZSwgLmV0aG9zLTIgLmV0aG9zLWNvbC0yIC5jaXJjbGU6OmFmdGVyLCAuZXRob3MtMiAuZXRob3MtY29sLTIgLmNpcmNsZTo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNpcmNsZSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmNpcmNsZTphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5ldGhvcy0yIC5jaXJjbGUge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59Il19 */";
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var AdmissionsComponent = /*#__PURE__*/function () {
      function AdmissionsComponent(modalService, viewportScroller) {
        _classCallCheck(this, AdmissionsComponent);

        this.modalService = modalService;
        this.viewportScroller = viewportScroller;
        this.closeResult = '';
        this.ehtos = [{
          title: "The safe and positive environment (Safety isn\u2019t expensive, it's priceless):"
        }, {
          title: "Learn about our beliefs: Our Parent Relationship Managers will contact you to give you more details"
        }, {
          title: "School Tour: Visit our campus or join our online demo classes"
        }];
        this.ehtos2 = [{
          title: "Meet the Principal: Connect with our principal with your child. This stage might include an assessment depending on the class"
        }, {
          title: "Interview with the Academic Team"
        }, {
          title: "Admission : Once approved you will be directed to complete the admission formalities"
        }];
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
          title: "Admission Process ",
          bar: 'pp0',
          description: "Activity Based Learning \nfor 5 years"
        }, {
          title: 'Admission Criteria',
          bar: 'pp1',
          description: "Discovery, Play and Interactive \nClassroom learning \nfor 3 years"
        }];
      }

      _createClass(AdmissionsComponent, [{
        key: "onClick",
        value: function onClick(elementId) {
          if (elementId == 1 || elementId == 2) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }
      }, {
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
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
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
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"]
      }];
    };

    AdmissionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
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
      path: 'ThePremiaCurriculum',
      component: _curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_16__["CurriculumComponent"]
    }, {
      path: 'ThePremiaEthos',
      component: _premiaethos_premiaethos_component__WEBPACK_IMPORTED_MODULE_17__["PremiaethosComponent"]
    }, {
      path: 'PremiaPartners',
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
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 150]
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


    __webpack_exports__["default"] = "body {\n  color: #000;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 14px;\n  background: #FFF;\n}\n\n.left-space {\n  padding-left: 70px;\n  float: left;\n  width: 100%;\n  margin-top: 88px;\n}\n\n.slick-prev:before, .slick-next:before {\n  color: #000;\n}\n\n* {\n  outline: none;\n}\n\na {\n  cursor: pointer;\n}\n\n.remove-scroll {\n  overflow: hidden;\n}\n\n.form-control, .btn {\n  border-radius: 0;\n}\n\n.v-flex {\n  align-self: center;\n}\n\n.breadcum {\n  margin-top: 25px;\n  margin-left: 70px;\n  font-family: \"Lora\", serif;\n}\n\n.breadcum span {\n  margin: 0 15px;\n}\n\n.breadcum .icon-ex-small svg {\n  width: 14px;\n  height: 14px;\n}\n\n.clearfix {\n  clear: both;\n  float: none;\n}\n\n.text-highlighter {\n  color: #bf272d;\n}\n\n.bg-highlighter {\n  background: #bf272d;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.btn {\n  font-weight: bold;\n  font-size: 12px;\n  padding: 5px 10px;\n}\n\nh1 {\n  font-size: 40px;\n  font-family: \"Lora\", serif;\n}\n\nh2 {\n  font-size: 34px;\n  font-family: \"Lora\", serif;\n}\n\nh3 {\n  font-size: 30px;\n}\n\nh4 {\n  font-size: 26px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n  line-height: 32px;\n}\n\nh1 {\n  font-weight: bold;\n}\n\n.center {\n  text-align: center;\n}\n\n.heading-highlight {\n  color: #f7a05c;\n}\n\nsvg {\n  vertical-align: middle;\n  margin: auto;\n  align-content: center;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n.icon-big > svg {\n  width: 100px;\n  height: 100px;\n}\n\n.icon-medium > svg {\n  width: 50px;\n  height: 50px;\n}\n\n.icon-small > svg {\n  width: 34px;\n  height: 34px;\n}\n\n.icon-ex-small > svg {\n  width: 24px;\n  height: 24px;\n}\n\n.partner .slick-slide .panel p {\n  font-family: \"Quicksand\", sans-serif !important;\n  text-align: center;\n}\n\n.section-admission .slick-prev:before, .section-admission .slick-next:before {\n  color: #000;\n}\n\n.section-admission .slick-prev, .section-admission .slick-next {\n  bottom: 0px;\n  top: auto;\n  right: 0;\n  left: auto !important;\n}\n\n.section-admission .slick-prev {\n  right: 25px;\n}\n\n.premian-league .slick-slider .slick-list {\n  padding: 0px !important;\n}\n\n.premian-league .slick-slider .slick-slide img {\n  width: 315px;\n  height: 315px;\n  border-radius: 50%;\n  margin-top: 15px;\n}\n\n.premian-league .slick-prev, .premian-league .slick-next {\n  bottom: -25px;\n  top: auto;\n  right: 0;\n  left: auto !important;\n}\n\n.premian-league .slick-prev:before, .premian-league .slick-next:before {\n  color: #000;\n}\n\n.premian-league .slick-prev {\n  right: 25px;\n}\n\n.slick-slider {\n  width: 100%;\n  margin: auto;\n}\n\n.slick-slider .slick-slide {\n  margin: 0 15px;\n}\n\n.recent-article .slick-prev {\n  right: 60px !important;\n}\n\n.recent-article .slick-prev, .recent-article .slick-next {\n  background: #bf272d;\n  bottom: auto;\n  top: -25px;\n  right: 15px;\n  left: auto !important;\n  padding: 0px 25px;\n}\n\n.recent-article .slick-prev:before, .recent-article .slick-next:before {\n  color: #fff;\n}\n\n.inner-banner {\n  margin-top: 70px;\n  position: relative;\n}\n\n.inner-banner img {\n  width: 100%;\n}\n\n.inner-banner .page-title {\n  position: absolute;\n  bottom: 60px;\n  background: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  padding: 70px 0;\n  color: #214f7a;\n}\n\ntextarea.form-control {\n  border-radius: 15px;\n  resize: none;\n}\n\nimg {\n  width: 100%;\n}\n\n.main-banner .carousel-caption h3 {\n  color: #bf272d;\n  font-size: 40px;\n  font-weight: bold;\n  font-family: \"Lora\", serif;\n}\n\n.main-banner .carousel-caption p {\n  color: #000;\n  font-weight: bold;\n}\n\nul.list {\n  margin-top: 35px;\n}\n\nul.list li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  color: #fff;\n}\n\nul.list li::before {\n  content: \" \";\n  background: #fff;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.sub-header .panel {\n  padding-bottom: 0px !important;\n  padding-right: 0px !important;\n}\n\n.sub-header .doodle {\n  font-size: 72px;\n  font-family: \"Lora\", serif;\n  color: #f0f0f0;\n  text-align: right;\n  line-height: 90px;\n}\n\n.slick-list {\n  padding: 50px 0px !important;\n}\n\n.recent-article .slick-prev, .recent-article .slick-next {\n  top: -100px;\n}\n\n.slick-slider .slick-slide {\n  padding: 0px;\n}\n\n.main-page {\n  float: none;\n}\n\n.main-page .flying-img {\n  display: none;\n}\n\n.flying-img {\n  position: absolute;\n  width: 150px;\n  z-index: -1;\n  opacity: 0.5;\n  height: 100%;\n  top: 0px;\n}\n\n.flying-img.right-fly {\n  background: url('right.png') repeat-y;\n  right: 0px;\n}\n\n.flying-img.left-fly {\n  background: url('left.png') repeat-y;\n  left: 70px;\n}\n\n.apply-form .row {\n  margin: 0 0 15px !important;\n}\n\n.sign h6 {\n  font-weight: bold;\n}\n\n@media (min-width: 1200px) {\n  .navbar-nav-list.notify-show {\n    display: none;\n  }\n}\n\n@media (max-width: 576px) {\n  .section-about, .section-nofify, .premian-league, .section-events, .section-spacing {\n    padding: 30px 0;\n  }\n\n  .premian-league .slick-slider .slick-slide img {\n    width: 215px !important;\n    height: 215px;\n    border-radius: 50%;\n    margin-top: -15px;\n    margin-left: -15px;\n  }\n\n  nav {\n    width: 100% !important;\n  }\n\n  section:first-child {\n    overflow: hidden;\n  }\n\n  .breadcum {\n    margin-left: 15px !important;\n  }\n\n  .row, .row-f {\n    margin: 10px 15px !important;\n  }\n\n  .doodle {\n    display: none;\n  }\n\n  .img-flag, .panel-body {\n    width: 100% !important;\n  }\n\n  .left-space {\n    padding-left: 0px;\n    float: left;\n    margin-top: 70px;\n  }\n\n  .navbar-vertical {\n    display: none;\n  }\n\n  .newsletter .btn {\n    margin: 15px 0 0 0;\n  }\n\n  .slick-slider {\n    width: 90%;\n  }\n\n  .navbar-nav-list.notify-hide {\n    display: none;\n  }\n  .navbar-nav-list.notify-show {\n    display: block;\n    float: none !important;\n    margin: 0 auto;\n  }\n\n  .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n\n  .section-inner-subheader h1, .section-admission h1 {\n    margin-left: 0px !important;\n  }\n\n  .panel {\n    padding: 30px 15px !important;\n  }\n\n  .sign .modal-body {\n    padding: 0px;\n  }\n  .sign h6 {\n    font-weight: bold;\n  }\n\n  .login-form .row {\n    margin-right: -15px !important;\n    margin-left: -15px !important;\n  }\n\n  .apply-form {\n    padding: 1rem 0;\n  }\n  .apply-form .row {\n    display: block;\n  }\n  .apply-form .row .col:first-child {\n    margin-bottom: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGFjYWRlbXkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7QUNDRDs7QURFQTtFQUNDLGFBQUE7QUNDRDs7QURDQTtFQUNDLGVBQUE7QUNFRDs7QURBQTtFQUNDLGdCQUFBO0FDR0Q7O0FEREE7RUFDQyxnQkFBQTtBQ0lEOztBREZBO0VBQ0Msa0JBQUE7QUNLRDs7QURIQTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ01EOztBRExDO0VBQ0MsY0FBQTtBQ09GOztBREpFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNNSDs7QUREQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDSUQ7O0FEQUE7RUFDQyxjQUFBO0FDR0Q7O0FEREE7RUFDQyxtQkFBQTtBQ0lEOztBREZBO0VBQ0MscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0tEOztBREhBO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNNRDs7QURIQTtFQUNDLGVBQUE7RUFDQSwwQkFBQTtBQ01EOztBREpBO0VBQ0MsZUFBQTtFQUNBLDBCQUFBO0FDT0Q7O0FETEE7RUFDQyxlQUFBO0FDUUQ7O0FETkE7RUFDQyxlQUFBO0FDU0Q7O0FEUEE7RUFDQyxlQUFBO0FDVUQ7O0FEUkE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUNXRDs7QURUQTtFQUNDLGlCQUFBO0FDWUQ7O0FEVkE7RUFDQyxrQkFBQTtBQ2FEOztBRFhBO0VBQ0ksY0FBQTtBQ2NKOztBRFhBO0VBQ0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNjRDs7QURaQTtFQUNDLGdCQUFBO0FDZUQ7O0FEYkE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ2dCRDs7QURkQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDaUJEOztBRGZBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNrQkQ7O0FEaEJBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNtQkQ7O0FEYkc7RUFDQywrQ0FBQTtFQUNBLGtCQUFBO0FDZ0JKOztBRFRFO0VBQ0EsV0FBQTtBQ1lGOztBRFZDO0VBQ0MsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ00scUJBQUE7QUNZUjs7QURWQztFQUNDLFdBQUE7QUNZRjs7QURORTtFQUNDLHVCQUFBO0FDU0g7O0FETkU7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNRSDs7QURIQztFQUNDLGFBQUE7RUFDQyxTQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0FDS0g7O0FESkc7RUFDQyxXQUFBO0FDTUo7O0FERkM7RUFDQyxXQUFBO0FDSUY7O0FEQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0dEOztBREZDO0VBQ0MsY0FBQTtBQ0lGOztBRENDO0VBQ0Msc0JBQUE7QUNFRjs7QURBQztFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRERHO0VBQ0MsV0FBQTtBQ0dKOztBREdFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRENJO0VBQ0ksV0FBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDUjs7QURHQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtBQ0FEOztBREdBO0VBQ0MsV0FBQTtBQ0FEOztBREtFO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDRkg7O0FESUU7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUNGSDs7QURPQTtFQUNDLGdCQUFBO0FDSkQ7O0FES0M7RUFDQyxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRElFO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRkg7O0FEa0NDO0VBQ0MsOEJBQUE7RUFDQSw2QkFBQTtBQy9CRjs7QURpQ0M7RUFDRyxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQy9CSjs7QURvQ0M7RUFDQyw0QkFBQTtBQ2pDRjs7QURvQ0M7RUFDQyxXQUFBO0FDakNGOztBRG9DQztFQUNDLFlBQUE7QUNqQ0Y7O0FEb0NBO0VBQ0MsV0FBQTtBQ2pDRDs7QURrQ0M7RUFDQyxhQUFBO0FDaENGOztBRG9DQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUNqQ0Q7O0FEa0NDO0VBQ0MscUNBQUE7RUFDQSxVQUFBO0FDaENGOztBRGtDQztFQUNDLG9DQUFBO0VBQ0EsVUFBQTtBQ2hDRjs7QURxQ0M7RUFDQywyQkFBQTtBQ2xDRjs7QUR1Q0M7RUFDQyxpQkFBQTtBQ3BDRjs7QUR3Q0E7RUFFRTtJQUNFLGFBQUE7RUN0Q0Y7QUFDRjs7QUR5Q0E7RUFDQztJQUNDLGVBQUE7RUN2Q0E7O0VENENDO0lBQ0MsdUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDekNGOztFRGdERDtJQUNDLHNCQUFBO0VDN0NBOztFRCtDRDtJQUNDLGdCQUFBO0VDNUNBOztFRDhDRDtJQUNDLDRCQUFBO0VDM0NBOztFRDZDRDtJQUNDLDRCQUFBO0VDMUNBOztFRDZDRDtJQUNDLGFBQUE7RUMxQ0E7O0VENkNEO0lBQ0Msc0JBQUE7RUMxQ0E7O0VENENEO0lBQ0MsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUN6Q0E7O0VEMkNEO0lBQ0MsYUFBQTtFQ3hDQTs7RUQyQ0E7SUFDQyxrQkFBQTtFQ3hDRDs7RUQyQ0Q7SUFDQyxVQUFBO0VDeENBOztFRDBDQTtJQUNDLGFBQUE7RUN2Q0Q7RUR5Q0E7SUFDRSxjQUFBO0lBQ0Qsc0JBQUE7SUFDQSxjQUFBO0VDdkNEOztFRDBDRDtJQUNBLG1CQUFBO0lBQ0csa0JBQUE7RUN2Q0Y7O0VEMENEO0lBQ0MsMkJBQUE7RUN2Q0E7O0VEeUNEO0lBQ0MsNkJBQUE7RUN0Q0E7O0VEeUNBO0lBQVksWUFBQTtFQ3JDWjtFRHNDQTtJQUNDLGlCQUFBO0VDcENEOztFRHVDRDtJQUNDLDhCQUFBO0lBQ0UsNkJBQUE7RUNwQ0Y7O0VEdUNEO0lBQ0MsZUFBQTtFQ3BDQTtFRHFDQTtJQUNBLGNBQUE7RUNuQ0E7RURvQ0E7SUFDQyxtQkFBQTtFQ2xDRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuXHRjb2xvcjojMDAwO1xyXG5cdGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRiYWNrZ3JvdW5kOiNGRkY7XHJcbn1cclxuXHJcbi5sZWZ0LXNwYWNle1xyXG5cdHBhZGRpbmctbGVmdDogNzBweDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdG1hcmdpbi10b3A6ODhweDtcclxufVxyXG5cclxuLnNsaWNrLXByZXY6YmVmb3JlLCAuc2xpY2stbmV4dDpiZWZvcmV7XHJcblx0Y29sb3I6IzAwMDtcclxufVxyXG5cclxuKntcclxuXHRvdXRsaW5lOm5vbmU7XHJcbn1cclxuYXtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnJlbW92ZS1zY3JvbGx7XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wsIC5idG57XHJcblx0Ym9yZGVyLXJhZGl1czogMDtcclxufVxyXG4udi1mbGV4e1xyXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4uYnJlYWRjdW17XHJcblx0bWFyZ2luLXRvcDoyNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OjcwcHg7XHJcblx0Zm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuXHRzcGFue1xyXG5cdFx0bWFyZ2luOjAgMTVweDtcclxuXHR9XHJcblx0Lmljb24tZXgtc21hbGx7XHJcblx0XHRzdmd7XHJcblx0XHRcdHdpZHRoOiAxNHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDE0cHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG59XHJcbi5jbGVhcmZpeHtcclxuXHRjbGVhcjogYm90aDtcclxuXHRmbG9hdDpub25lO1xyXG5cdFxyXG59XHJcblxyXG4udGV4dC1oaWdobGlnaHRlcntcclxuXHRjb2xvcjojYmYyNzJkO1xyXG59XHJcbi5iZy1oaWdobGlnaHRlcntcclxuXHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcbn1cclxudWx7XHJcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cdG1hcmdpbjowO1xyXG5cdHBhZGRpbmc6MDtcclxufVxyXG4uYnRue1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdFxyXG59XHJcbmgxe1xyXG5cdGZvbnQtc2l6ZTo0MHB4O1xyXG5cdGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xyXG59XHJcbmgye1xyXG5cdGZvbnQtc2l6ZTozNHB4O1xyXG5cdGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcbn1cclxuaDN7XHJcblx0Zm9udC1zaXplOjMwcHg7XHJcbn1cclxuaDR7XHJcblx0Zm9udC1zaXplOjI2cHg7XHJcbn1cclxuaDV7XHJcblx0Zm9udC1zaXplOjIycHg7XHJcbn1cclxuaDZ7XHJcblx0Zm9udC1zaXplOjE4cHg7IFxyXG5cdGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG59XHJcbmgxe1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuLmNlbnRlcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHRcclxuLmhlYWRpbmctaGlnaGxpZ2h0e1xyXG4gICAgY29sb3I6I2Y3YTA1YztcclxufVxyXG5cclxuc3ZnIHtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuc3ZnOm5vdCg6cm9vdCkge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmljb24tYmlnPnN2ZyB7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmljb24tbWVkaXVtPnN2ZyB7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5pY29uLXNtYWxsPnN2ZyB7XHJcblx0d2lkdGg6IDM0cHg7XHJcblx0aGVpZ2h0OiAzNHB4O1xyXG59XHJcbi5pY29uLWV4LXNtYWxsPnN2ZyB7XHJcblx0d2lkdGg6IDI0cHg7XHJcblx0aGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4ucGFydG5lcntcclxuXHQuc2xpY2stc2xpZGV7XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdHB7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6XCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uc2VjdGlvbi1hZG1pc3Npb257XHJcblx0XHQuc2xpY2stcHJldjpiZWZvcmUsIC5zbGljay1uZXh0OmJlZm9yZXtcclxuXHRcdGNvbG9yOiMwMDA7XHJcblx0fVxyXG5cdC5zbGljay1wcmV2LCAuc2xpY2stbmV4dHtcclxuXHRcdGJvdHRvbTotMHB4O1xyXG5cdFx0dG9wOmF1dG87XHJcblx0XHRyaWdodDogMDtcclxuICAgICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5zbGljay1wcmV2e1xyXG5cdFx0cmlnaHQ6MjVweDtcclxuXHR9XHJcbn1cclxuXHJcbi5wcmVtaWFuLWxlYWd1ZXtcclxuXHQuc2xpY2stc2xpZGVye1xyXG5cdFx0LnNsaWNrLWxpc3R7XHJcblx0XHRcdHBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblx0XHQuc2xpY2stc2xpZGV7XHJcblx0XHRpbWd7XHJcblx0XHRcdHdpZHRoOjMxNXB4O1xyXG5cdFx0XHRoZWlnaHQ6MzE1cHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHRtYXJnaW4tdG9wOjE1cHg7XHJcblx0XHR9XHJcblx0XHR9XHJcblx0fVx0XHJcblxyXG5cdC5zbGljay1wcmV2LCAuc2xpY2stbmV4dHtcclxuXHRcdGJvdHRvbTogLTI1cHg7XHJcblx0XHRcdHRvcDogYXV0bztcclxuXHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuXHRcdFx0JjpiZWZvcmV7XHRcclxuXHRcdFx0XHRjb2xvcjogIzAwMDtcclxuXHRcdFx0XHJcblx0XHRcdH1cclxuXHR9XHJcblx0LnNsaWNrLXByZXYge1xyXG5cdFx0cmlnaHQ6IDI1cHg7XHJcblx0fVxyXG5cdFxyXG59XHJcbi5zbGljay1zbGlkZXIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHQuc2xpY2stc2xpZGV7XHJcblx0XHRtYXJnaW46MCAxNXB4O1xyXG5cdH1cclxuICB9XHJcblxyXG4gIC5yZWNlbnQtYXJ0aWNsZXtcclxuXHQuc2xpY2stcHJldntcclxuXHRcdHJpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5zbGljay1wcmV2LCAuc2xpY2stbmV4dHtcclxuXHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdGJvdHRvbTogYXV0bztcclxuXHRcdHRvcDogLTI1cHg7XHJcblx0XHRyaWdodDogMTVweDtcclxuXHRcdGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmc6IDBweCAyNXB4O1xyXG5cdFx0XHQmOmJlZm9yZXtcdFxyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcclxuXHRcdFx0fVxyXG5cdH0gIFxyXG4gIH1cclxuXHJcbiAgLmlubmVyLWJhbm5lcntcclxuICAgIG1hcmdpbi10b3A6NzBweDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbiAgICAucGFnZS10aXRsZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA2MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6cmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogNzBweCAwO1xyXG4gICAgICAgIGNvbG9yOiMyMTRmN2E7XHJcbiAgICB9XHJcbn1cclxuXHJcbnRleHRhcmVhLmZvcm0tY29udHJvbHtcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuaW1ne1xyXG5cdHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5tYWluLWJhbm5lcntcclxuXHQuY2Fyb3VzZWwtY2FwdGlvbntcclxuXHRcdGgze1xyXG5cdFx0XHRjb2xvcjojYmYyNzJkO1xyXG5cdFx0XHRmb250LXNpemU6NDBweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcblx0XHR9XHJcblx0XHRwe1xyXG5cdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbnVsLmxpc3R7XHJcblx0bWFyZ2luLXRvcDozNXB4O1xyXG5cdGxpe1xyXG5cdFx0cGFkZGluZzogMCAwIDIwcHggMjBweDtcclxuXHRcdGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdHRvcDo4cHg7XHJcblx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHR3aWR0aDogMTBweDsgXHJcblx0XHRcdGhlaWdodDoxMHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIC5jb2wsIC5jb2wtMSwgLmNvbC0xMCwgLmNvbC0xMSwgLmNvbC0xMiwgLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04LCAuY29sLTksIC5jb2wtYXV0bywgLmNvbC1sZywgLmNvbC1sZy0xLCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSwgLmNvbC1sZy1hdXRvLCAuY29sLW1kLCAuY29sLW1kLTEsIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLWF1dG8sIC5jb2wtc20sIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tYXV0bywgLmNvbC14bCwgLmNvbC14bC0xLCAuY29sLXhsLTEwLCAuY29sLXhsLTExLCAuY29sLXhsLTEyLCAuY29sLXhsLTIsIC5jb2wteGwtMywgLmNvbC14bC00LCAuY29sLXhsLTUsIC5jb2wteGwtNiwgLmNvbC14bC03LCAuY29sLXhsLTgsIC5jb2wteGwtOSwgLmNvbC14bC1hdXRve1xyXG4vLyBcdHBhZGRpbmctcmlnaHQ6IDBweDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEobWluLXdpZHRoOiA3NjhweCl7XHJcbi8vIFx0LmNvbnRhaW5lcntcclxuLy8gXHR3aWR0aDpjYWxjKDcyMHB4IC0gNjRweCk7XHJcbi8vIFx0bWFyZ2luLXJpZ2h0OjY0cHg7XHJcbi8vIH1cclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhKG1pbi13aWR0aDogOTkycHgpe1xyXG4vLyBcdC5jb250YWluZXJ7XHJcbi8vIFx0d2lkdGg6Y2FsYyg5NjBweCAtIDY0cHgpO1xyXG4vLyBcdG1hcmdpbi1sZWZ0OjY0cHg7XHJcbi8vIH1cclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhKG1pbi13aWR0aDogMTIwMHB4KXtcclxuLy8gXHQuY29udGFpbmVye1xyXG4vLyBcdHdpZHRoOmNhbGMoMTE0MHB4IC0gNjRweCk7XHJcbi8vIFx0bWFyZ2luLWxlZnQ6NjRweDtcclxuLy8gfVxyXG4vLyB9XHJcblxyXG4uc3ViLWhlYWRlcntcclxuXHQucGFuZWx7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTowcHggIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6MHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5kb29kbGV7XHJcblx0ICAgZm9udC1zaXplOiA3MnB4O1xyXG5cdCAgIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcblx0ICAgY29sb3I6I2YwZjBmMDtcclxuXHQgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHQgICBsaW5lLWhlaWdodDogOTBweDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cdC5zbGljay1saXN0e1xyXG5cdFx0cGFkZGluZzo1MHB4IDBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LnJlY2VudC1hcnRpY2xlIC5zbGljay1wcmV2LCAucmVjZW50LWFydGljbGUgLnNsaWNrLW5leHR7XHJcblx0XHR0b3A6IC0xMDBweDtcclxuXHR9XHJcblxyXG5cdC5zbGljay1zbGlkZXIgLnNsaWNrLXNsaWRle1xyXG5cdFx0cGFkZGluZzowcHg7XHJcblx0fVxyXG5cclxuLm1haW4tcGFnZXtcclxuXHRmbG9hdDpub25lO1xyXG5cdC5mbHlpbmctaW1ne1xyXG5cdFx0ZGlzcGxheTpub25lO1xyXG5cdH1cclxufVxyXG5cclxuLmZseWluZy1pbWd7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOjE1MHB4O1xyXG5cdHotaW5kZXg6IC0xO1xyXG5cdG9wYWNpdHk6IDAuNTtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHR0b3A6MHB4O1xyXG5cdCYucmlnaHQtZmx5e1xyXG5cdFx0YmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvZmx5aW5nL3JpZ2h0LnBuZykgcmVwZWF0LXk7XHJcblx0XHRyaWdodDowcHg7XHJcblx0fVxyXG5cdCYubGVmdC1mbHl7XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9mbHlpbmcvbGVmdC5wbmcpIHJlcGVhdC15O1xyXG5cdFx0bGVmdDo3MHB4O1xyXG5cdH1cclxufVxyXG5cclxuLmFwcGx5LWZvcm17XHJcblx0LnJvd3tcclxuXHRcdG1hcmdpbjowIDAgMTVweCAhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG5cclxuLnNpZ257XHJcblx0aDZ7XHJcblx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XHJcblx0Lm5hdmJhci1uYXYtbGlzdHtcclxuXHRcdCYubm90aWZ5LXNob3d7XHJcblx0XHQgIGRpc3BsYXk6IG5vbmU7XHJcblx0ICB9XHJcblx0fVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0LnNlY3Rpb24tYWJvdXQsIC5zZWN0aW9uLW5vZmlmeSwgLnByZW1pYW4tbGVhZ3VlLCAuc2VjdGlvbi1ldmVudHMsIC5zZWN0aW9uLXNwYWNpbmcge1xyXG5cdFx0cGFkZGluZzogMzBweCAwO1xyXG5cdH1cclxuLnByZW1pYW4tbGVhZ3Vle1xyXG5cdC5zbGljay1zbGlkZXJ7XHJcblx0XHQuc2xpY2stc2xpZGV7XHJcblx0XHRcdGltZ3tcclxuXHRcdFx0XHR3aWR0aDogMjE1cHggIWltcG9ydGFudDtcclxuXHRcdFx0XHRoZWlnaHQ6IDIxNXB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAtMTVweDtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogLTE1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblx0bmF2e1xyXG5cdFx0d2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRzZWN0aW9uOmZpcnN0LWNoaWxke1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxuXHR9XHJcblx0LnJvdyAsIC5yb3ctZntcclxuXHRcdG1hcmdpbjoxMHB4IDE1cHggIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5kb29kbGV7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG5cdFxyXG5cdC5pbWctZmxhZywgLnBhbmVsLWJvZHl7XHJcblx0XHR3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5sZWZ0LXNwYWNle1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwcHg7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdG1hcmdpbi10b3A6IDcwcHg7XHJcblx0fVxyXG5cdC5uYXZiYXItdmVydGljYWx7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG5cdC5uZXdzbGV0dGVyIHtcclxuXHRcdC5idG57XHJcblx0XHRcdG1hcmdpbjoxNXB4IDAgMCAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuc2xpY2stc2xpZGVyIHtcclxuXHRcdHdpZHRoOiA5MCU7fSBcdCAgXHJcblx0Lm5hdmJhci1uYXYtbGlzdHtcclxuXHRcdCYubm90aWZ5LWhpZGV7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblx0XHQmLm5vdGlmeS1zaG93e1xyXG5cdFx0ICBkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0ZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0ICB9XHJcblx0fVxyXG5cdC5jb2wsIC5jb2wtMSwgLmNvbC0xMCwgLmNvbC0xMSwgLmNvbC0xMiwgLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04LCAuY29sLTksIC5jb2wtYXV0bywgLmNvbC1sZywgLmNvbC1sZy0xLCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSwgLmNvbC1sZy1hdXRvLCAuY29sLW1kLCAuY29sLW1kLTEsIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLWF1dG8sIC5jb2wtc20sIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tYXV0bywgLmNvbC14bCwgLmNvbC14bC0xLCAuY29sLXhsLTEwLCAuY29sLXhsLTExLCAuY29sLXhsLTEyLCAuY29sLXhsLTIsIC5jb2wteGwtMywgLmNvbC14bC00LCAuY29sLXhsLTUsIC5jb2wteGwtNiwgLmNvbC14bC03LCAuY29sLXhsLTgsIC5jb2wteGwtOSwgLmNvbC14bC1hdXRve1xyXG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblx0fVxyXG5cclxuXHQuc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgaDEsIC5zZWN0aW9uLWFkbWlzc2lvbiBoMXtcclxuXHRcdG1hcmdpbi1sZWZ0OjBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQucGFuZWx7XHJcblx0XHRwYWRkaW5nOjMwcHggMTVweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuc2lnbntcclxuXHRcdC5tb2RhbC1ib2R5e3BhZGRpbmc6MHB4O31cclxuXHRcdGg2e1xyXG5cdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0fVxyXG4gICB9XHJcblx0LmxvZ2luLWZvcm0gLnJvd3tcclxuXHRcdG1hcmdpbi1yaWdodDogLTE1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmFwcGx5LWZvcm0gIHtcclxuXHRcdHBhZGRpbmc6IDFyZW0gMDtcclxuXHRcdC5yb3d7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdC5jb2w6Zmlyc3QtY2hpbGR7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MTVweDtcclxuXHRcdH1cclxuXHR9fVxyXG59IiwiYm9keSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xufVxuXG4ubGVmdC1zcGFjZSB7XG4gIHBhZGRpbmctbGVmdDogNzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA4OHB4O1xufVxuXG4uc2xpY2stcHJldjpiZWZvcmUsIC5zbGljay1uZXh0OmJlZm9yZSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4qIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlbW92ZS1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZm9ybS1jb250cm9sLCAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnYtZmxleCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmJyZWFkY3VtIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG59XG4uYnJlYWRjdW0gc3BhbiB7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuLmJyZWFkY3VtIC5pY29uLWV4LXNtYWxsIHN2ZyB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG59XG5cbi5jbGVhcmZpeCB7XG4gIGNsZWFyOiBib3RoO1xuICBmbG9hdDogbm9uZTtcbn1cblxuLnRleHQtaGlnaGxpZ2h0ZXIge1xuICBjb2xvcjogI2JmMjcyZDtcbn1cblxuLmJnLWhpZ2hsaWdodGVyIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJ0biB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDM0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRpbmctaGlnaGxpZ2h0IHtcbiAgY29sb3I6ICNmN2EwNWM7XG59XG5cbnN2ZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogYXV0bztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG5zdmc6bm90KDpyb290KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pY29uLWJpZyA+IHN2ZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmljb24tbWVkaXVtID4gc3ZnIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmljb24tc21hbGwgPiBzdmcge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uaWNvbi1leC1zbWFsbCA+IHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5wYXJ0bmVyIC5zbGljay1zbGlkZSAucGFuZWwgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tYWRtaXNzaW9uIC5zbGljay1wcmV2OmJlZm9yZSwgLnNlY3Rpb24tYWRtaXNzaW9uIC5zbGljay1uZXh0OmJlZm9yZSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5zbGljay1wcmV2LCAuc2VjdGlvbi1hZG1pc3Npb24gLnNsaWNrLW5leHQge1xuICBib3R0b206IDBweDtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xufVxuLnNlY3Rpb24tYWRtaXNzaW9uIC5zbGljay1wcmV2IHtcbiAgcmlnaHQ6IDI1cHg7XG59XG5cbi5wcmVtaWFuLWxlYWd1ZSAuc2xpY2stc2xpZGVyIC5zbGljay1saXN0IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4ucHJlbWlhbi1sZWFndWUgLnNsaWNrLXNsaWRlciAuc2xpY2stc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDMxNXB4O1xuICBoZWlnaHQ6IDMxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucHJlbWlhbi1sZWFndWUgLnNsaWNrLXByZXYsIC5wcmVtaWFuLWxlYWd1ZSAuc2xpY2stbmV4dCB7XG4gIGJvdHRvbTogLTI1cHg7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5wcmVtaWFuLWxlYWd1ZSAuc2xpY2stcHJldjpiZWZvcmUsIC5wcmVtaWFuLWxlYWd1ZSAuc2xpY2stbmV4dDpiZWZvcmUge1xuICBjb2xvcjogIzAwMDtcbn1cbi5wcmVtaWFuLWxlYWd1ZSAuc2xpY2stcHJldiB7XG4gIHJpZ2h0OiAyNXB4O1xufVxuXG4uc2xpY2stc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5zbGljay1zbGlkZXIgLnNsaWNrLXNsaWRlIHtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG5cbi5yZWNlbnQtYXJ0aWNsZSAuc2xpY2stcHJldiB7XG4gIHJpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG4ucmVjZW50LWFydGljbGUgLnNsaWNrLXByZXYsIC5yZWNlbnQtYXJ0aWNsZSAuc2xpY2stbmV4dCB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGJvdHRvbTogYXV0bztcbiAgdG9wOiAtMjVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4IDI1cHg7XG59XG4ucmVjZW50LWFydGljbGUgLnNsaWNrLXByZXY6YmVmb3JlLCAucmVjZW50LWFydGljbGUgLnNsaWNrLW5leHQ6YmVmb3JlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5pbm5lci1iYW5uZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW5uZXItYmFubmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmlubmVyLWJhbm5lciAucGFnZS10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA3MHB4IDA7XG4gIGNvbG9yOiAjMjE0ZjdhO1xufVxuXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICByZXNpemU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi1iYW5uZXIgLmNhcm91c2VsLWNhcHRpb24gaDMge1xuICBjb2xvcjogI2JmMjcyZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbn1cbi5tYWluLWJhbm5lciAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG51bC5saXN0IHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cbnVsLmxpc3QgbGkge1xuICBwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZjtcbn1cbnVsLmxpc3QgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnN1Yi1oZWFkZXIgLnBhbmVsIHtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cbi5zdWItaGVhZGVyIC5kb29kbGUge1xuICBmb250LXNpemU6IDcycHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG5cbi5zbGljay1saXN0IHtcbiAgcGFkZGluZzogNTBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlY2VudC1hcnRpY2xlIC5zbGljay1wcmV2LCAucmVjZW50LWFydGljbGUgLnNsaWNrLW5leHQge1xuICB0b3A6IC0xMDBweDtcbn1cblxuLnNsaWNrLXNsaWRlciAuc2xpY2stc2xpZGUge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tYWluLXBhZ2Uge1xuICBmbG9hdDogbm9uZTtcbn1cbi5tYWluLXBhZ2UgLmZseWluZy1pbWcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmx5aW5nLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMC41O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMHB4O1xufVxuLmZseWluZy1pbWcucmlnaHQtZmx5IHtcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvZmx5aW5nL3JpZ2h0LnBuZykgcmVwZWF0LXk7XG4gIHJpZ2h0OiAwcHg7XG59XG4uZmx5aW5nLWltZy5sZWZ0LWZseSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2ZseWluZy9sZWZ0LnBuZykgcmVwZWF0LXk7XG4gIGxlZnQ6IDcwcHg7XG59XG5cbi5hcHBseS1mb3JtIC5yb3cge1xuICBtYXJnaW46IDAgMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaWduIGg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm5hdmJhci1uYXYtbGlzdC5ub3RpZnktc2hvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zZWN0aW9uLWFib3V0LCAuc2VjdGlvbi1ub2ZpZnksIC5wcmVtaWFuLWxlYWd1ZSwgLnNlY3Rpb24tZXZlbnRzLCAuc2VjdGlvbi1zcGFjaW5nIHtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gIH1cblxuICAucHJlbWlhbi1sZWFndWUgLnNsaWNrLXNsaWRlciAuc2xpY2stc2xpZGUgaW1nIHtcbiAgICB3aWR0aDogMjE1cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDIxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIH1cblxuICBuYXYge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICBzZWN0aW9uOmZpcnN0LWNoaWxkIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmJyZWFkY3VtIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnJvdywgLnJvdy1mIHtcbiAgICBtYXJnaW46IDEwcHggMTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmRvb2RsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5pbWctZmxhZywgLnBhbmVsLWJvZHkge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubGVmdC1zcGFjZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgfVxuXG4gIC5uYXZiYXItdmVydGljYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubmV3c2xldHRlciAuYnRuIHtcbiAgICBtYXJnaW46IDE1cHggMCAwIDA7XG4gIH1cblxuICAuc2xpY2stc2xpZGVyIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLm5hdmJhci1uYXYtbGlzdC5ub3RpZnktaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubmF2YmFyLW5hdi1saXN0Lm5vdGlmeS1zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmNvbCwgLmNvbC0xLCAuY29sLTEwLCAuY29sLTExLCAuY29sLTEyLCAuY29sLTIsIC5jb2wtMywgLmNvbC00LCAuY29sLTUsIC5jb2wtNiwgLmNvbC03LCAuY29sLTgsIC5jb2wtOSwgLmNvbC1hdXRvLCAuY29sLWxnLCAuY29sLWxnLTEsIC5jb2wtbGctMTAsIC5jb2wtbGctMTEsIC5jb2wtbGctMTIsIC5jb2wtbGctMiwgLmNvbC1sZy0zLCAuY29sLWxnLTQsIC5jb2wtbGctNSwgLmNvbC1sZy02LCAuY29sLWxnLTcsIC5jb2wtbGctOCwgLmNvbC1sZy05LCAuY29sLWxnLWF1dG8sIC5jb2wtbWQsIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtbWQtYXV0bywgLmNvbC1zbSwgLmNvbC1zbS0xLCAuY29sLXNtLTEwLCAuY29sLXNtLTExLCAuY29sLXNtLTEyLCAuY29sLXNtLTIsIC5jb2wtc20tMywgLmNvbC1zbS00LCAuY29sLXNtLTUsIC5jb2wtc20tNiwgLmNvbC1zbS03LCAuY29sLXNtLTgsIC5jb2wtc20tOSwgLmNvbC1zbS1hdXRvLCAuY29sLXhsLCAuY29sLXhsLTEsIC5jb2wteGwtMTAsIC5jb2wteGwtMTEsIC5jb2wteGwtMTIsIC5jb2wteGwtMiwgLmNvbC14bC0zLCAuY29sLXhsLTQsIC5jb2wteGwtNSwgLmNvbC14bC02LCAuY29sLXhsLTcsIC5jb2wteGwtOCwgLmNvbC14bC05LCAuY29sLXhsLWF1dG8ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGgxLCAuc2VjdGlvbi1hZG1pc3Npb24gaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYW5lbCB7XG4gICAgcGFkZGluZzogMzBweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2lnbiAubW9kYWwtYm9keSB7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG4gIC5zaWduIGg2IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5sb2dpbi1mb3JtIC5yb3cge1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hcHBseS1mb3JtIHtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG4gIH1cbiAgLmFwcGx5LWZvcm0gLnJvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmFwcGx5LWZvcm0gLnJvdyAuY29sOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59Il19 */";
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


    __webpack_exports__["default"] = ".section-inner-subheader .row-f, .section-inner-subheader .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-inner-subheader .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-inner-subheader .panel p {\n  font-size: 72px;\n  color: #f0f0f0;\n  font-weight: bold;\n}\n.section-inner-subheader .panel .panel-body {\n  width: 50%;\n}\n.section-inner-subheader h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-inner-subheader h6 {\n  margin-left: 65px;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-inner-subheader .inner-contact-info {\n  background: #fff;\n  padding: 50px;\n}\n.section-inner-subheader .inner-contact-info .row {\n  margin: 0px;\n}\n.section-inner-subheader .inner-contact-info p {\n  color: #000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.section-inner-subheader .inner-contact-info p a {\n  color: #000;\n}\n.section-inner-subheader .inner-contact-info .highlighted {\n  color: #bf272d;\n}\n.section-inner-subheader .inner-contact-info .social-net {\n  float: right;\n}\n.section-inner-subheader .inner-contact-info .social-net li {\n  float: left;\n  margin-right: 15px;\n}\n.section-inner-subheader .inner-contact-info .social-net li svg {\n  fill: #bf272d;\n}\n.blob-article {\n  background: #fff;\n  padding: 70px 0px;\n}\n.blob-article h2 {\n  margin-bottom: 70px;\n}\n.blob-article .btn-wrapper {\n  position: relative;\n}\n.blob-article .btn-wrapper .div-btn {\n  background: #fff;\n  padding-left: 20px;\n  float: right;\n  position: relative;\n  z-index: 1;\n}\n.blob-article .btn-wrapper .div-btn .btn {\n  background: #bf272d;\n  padding: 10px 20px;\n}\n.blob-article .btn-wrapper::after {\n  content: \"\";\n  position: absolute;\n  top: 21px;\n  left: 0px;\n  height: 2px;\n  background: #000;\n  width: 100%;\n}\n.recent-article {\n  background: #bf272d;\n  padding-bottom: 30px;\n}\n.recent-article .container {\n  margin: 70px auto 0px;\n}\n.recent-article .container h6 {\n  color: #fff;\n  padding-top: 20px;\n}\n.recent-article .container h2 {\n  position: relative;\n  padding: 30px 0 0;\n}\n.recent-article .container h2 span {\n  background: #bf272d;\n  padding-right: 30px;\n  z-index: 2;\n  position: relative;\n  display: inline-block;\n  color: #fff;\n}\n.recent-article .container h2::after {\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  height: 1px;\n  width: 100%;\n  background: #fff;\n  content: \"\";\n}\n.recent-article .container .panel {\n  color: #fff;\n  font-family: \"Quicksand\", sans-serif;\n  position: relative;\n  margin-top: 30px;\n  height: 250px;\n  overflow: hidden;\n}\n.recent-article .container .panel:after {\n  content: \" \";\n  position: absolute;\n  background: rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.recent-article .container .panel h4 {\n  position: absolute;\n  bottom: 0px;\n  color: #fff;\n  width: 100%;\n  font-weight: bold;\n  z-index: 10;\n}\n.recent-article .container .panel h3 {\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  border-bottom: 1px solid #fff;\n}\n.recent-article .container .panel .btn {\n  border: 2px solid #fff;\n  background: none !important;\n}\n@media (max-width: 576px) {\n  .row-f, .row, h1 {\n    margin-left: 0px;\n  }\n\n  .breadcum {\n    margin-left: 15px;\n  }\n\n  .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n\n  .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvYi9EOlxcYWNhZGVteS9zcmNcXGFwcFxcYmxvYlxcYmxvYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmxvYi9ibG9iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0Msb0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUM7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0FGO0FERUM7RUFDQyxnQkFBQTtFQUNBLGFBQUE7QUNBRjtBRENFO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NIO0FEQ0U7RUFDQyxVQUFBO0FDQ0g7QURFQztFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREVDO0VBQ0MsaUJBQUE7QUNBRjtBREdDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNERjtBREdDO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0FDREY7QURFRTtFQUNDLFdBQUE7QUNBSDtBREVFO0VBQ0csV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0FMO0FERUs7RUFDQyxXQUFBO0FDQU47QURJRTtFQUNDLGNBQUE7QUNGSDtBREtFO0VBQ0MsWUFBQTtBQ0hIO0FESUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREdJO0VBQ0MsYUFBQTtBQ0RMO0FET0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDSko7QURLSTtFQUNJLG1CQUFBO0FDSFI7QURLQztFQUNDLGtCQUFBO0FDSEY7QURJRTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDRyxVQUFBO0FDRk47QURHRztFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElFO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRkg7QURTQTtFQUNDLG1CQUFBO0VBQ0Esb0JBQUE7QUNORDtBRE9JO0VBRUYscUJBQUE7QUNORjtBRE9FO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0FDTEg7QURPUTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNMWjtBRE1ZO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0poQjtBRE1ZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSmhCO0FET1E7RUFDSSxXQUFBO0VBQ1Qsb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDTEg7QURNRztFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0pKO0FETUc7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0pKO0FETVk7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNKaEI7QURNRztFQUNDLHNCQUFBO0VBQ0EsMkJBQUE7QUNKSjtBRFdBO0VBQ0U7SUFDQyxnQkFBQTtFQ1JEOztFRFVEO0lBQ0MsaUJBQUE7RUNQQTs7RURTRDtJQUNDLGFBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7RUNOQTs7RURRRDtJQUNDLFdBQUE7RUNMQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmxvYi9ibG9iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taW5uZXItc3ViaGVhZGVye1xyXG5cdC5yb3ctZiwgLnJvd3tcclxuXHRcdG1hcmdpbjo3MHB4IDAgMTAwcHg7IFxyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDowO1xyXG5cdFx0dG9wOjA7XHJcblx0XHR3aWR0aDogNDAlO1xyXG5cdH1cclxuXHQucGFuZWwge1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0cGFkZGluZzo1MHB4O1xyXG5cdFx0cHtcclxuXHRcdFx0Zm9udC1zaXplOjcycHg7XHJcblx0XHRcdGNvbG9yOiNmMGYwZjA7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0fVxyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdH1cclxuXHR9XHJcblx0aDF7XHJcblx0XHRtYXJnaW4tbGVmdDo2NXB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzVweDtcclxuXHR9XHJcblx0aDZ7XHJcblx0XHRtYXJnaW4tbGVmdDo2NXB4O1xyXG5cdH1cclxuXHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHR9XHJcblx0LmlubmVyLWNvbnRhY3QtaW5mb3tcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdHBhZGRpbmc6IDUwcHg7IFxyXG5cdFx0LnJvd3tcclxuXHRcdFx0bWFyZ2luOjBweDtcdFxyXG5cdFx0fVxyXG5cdFx0cHtcclxuXHRcdCAgIGNvbG9yOiMwMDA7XHJcblx0XHQgICBmb250LXNpemU6MTRweDsgXHJcblx0XHQgICBmb250LXdlaWdodDpub3JtYWw7XHJcblx0XHQgICBcclxuXHRcdCAgIGF7XHJcblx0XHRcdCAgIGNvbG9yOiMwMDA7XHJcblxyXG5cdFx0ICAgfVxyXG5cdFx0fVxyXG5cdFx0LmhpZ2hsaWdodGVke1xyXG5cdFx0XHRjb2xvcjojYmYyNzJkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5zb2NpYWwtbmV0e1xyXG5cdFx0XHRmbG9hdDpyaWdodDtcclxuXHRcdFx0bGl7XHJcblx0XHRcdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6MTVweDtcclxuXHRcdFx0XHRzdmd7XHJcblx0XHRcdFx0XHRmaWxsOiNiZjI3MmQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi5ibG9iLWFydGljbGV7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICBwYWRkaW5nOjcwcHggMHB4O1xyXG4gICAgaDJ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo3MHB4O1xyXG5cdH1cclxuXHQuYnRuLXdyYXBwZXJ7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHQuZGl2LWJ0bntcclxuXHRcdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6MjBweDtcclxuXHRcdFx0ZmxvYXQ6cmlnaHQ7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHQuYnRue1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0XHRwYWRkaW5nOjEwcHggMjBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOjIxcHg7XHJcblx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRoZWlnaHQ6MnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiMwMDA7XHJcblx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi5yZWNlbnQtYXJ0aWNsZXtcclxuXHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0cGFkZGluZy1ib3R0b206MzBweDtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICBcclxuXHRcdG1hcmdpbjo3MHB4IGF1dG8gMHB4O1xyXG5cdFx0aDZ7XHJcblx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdHBhZGRpbmctdG9wOjIwcHg7XHJcblx0XHR9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweCAwIDA7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjMwcHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDo1MHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVse1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmO1xyXG5cdFx0XHRmb250LWZhbWlseTpcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdG1hcmdpbi10b3A6MzBweDtcclxuXHRcdFx0aGVpZ2h0OiAyNTBweDtcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0JjphZnRlcntcclxuXHRcdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMik7XHJcblx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRoZWlnaHQ6MTAwJTtcclxuXHRcdFx0XHR0b3A6MDtcclxuXHRcdFx0XHRsZWZ0OjA7XHJcblx0XHRcdH1cclxuXHRcdFx0aDR7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGJvdHRvbTowcHg7XHJcblx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MzBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdFx0LmJ0bntcclxuXHRcdFx0XHRib3JkZXI6MnB4IHNvbGlkICNmZmY7XHJcblx0XHRcdFx0YmFja2dyb3VuZDpub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdFx0LnJvdy1mLCAucm93LCBoMXtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4OyBcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG5cdC5wYW5lbC1ib2R5e1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcblxyXG59IiwiLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5yb3ctZiwgLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5yb3cge1xuICBtYXJnaW46IDcwcHggMCAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbWctZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDQwJTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCBwIHtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciBoMSB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGg2IHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmltZy1mbGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gcCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyBwIGEge1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5oaWdobGlnaHRlZCB7XG4gIGNvbG9yOiAjYmYyNzJkO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLnNvY2lhbC1uZXQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCBsaSBzdmcge1xuICBmaWxsOiAjYmYyNzJkO1xufVxuXG4uYmxvYi1hcnRpY2xlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNzBweCAwcHg7XG59XG4uYmxvYi1hcnRpY2xlIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbi5ibG9iLWFydGljbGUgLmJ0bi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJsb2ItYXJ0aWNsZSAuYnRuLXdyYXBwZXIgLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLmJsb2ItYXJ0aWNsZSAuYnRuLXdyYXBwZXIgLmRpdi1idG4gLmJ0biB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5ibG9iLWFydGljbGUgLmJ0bi13cmFwcGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMXB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJlY2VudC1hcnRpY2xlIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4ucmVjZW50LWFydGljbGUgLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogNzBweCBhdXRvIDBweDtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuY29udGFpbmVyIGg2IHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnJlY2VudC1hcnRpY2xlIC5jb250YWluZXIgaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDMwcHggMCAwO1xufVxuLnJlY2VudC1hcnRpY2xlIC5jb250YWluZXIgaDIgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuY29udGFpbmVyIGgyOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29udGVudDogXCJcIjtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuY29udGFpbmVyIC5wYW5lbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnJlY2VudC1hcnRpY2xlIC5jb250YWluZXIgLnBhbmVsOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4ucmVjZW50LWFydGljbGUgLmNvbnRhaW5lciAucGFuZWwgaDQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB6LWluZGV4OiAxMDtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuY29udGFpbmVyIC5wYW5lbCBoMyB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbn1cbi5yZWNlbnQtYXJ0aWNsZSAuY29udGFpbmVyIC5wYW5lbCAuYnRuIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnJvdy1mLCAucm93LCBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuXG4gIC5icmVhZGN1bSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cblxuICAuaW1nLWZsYWcge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */";
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
        this.thePremiaCorner = [{
          icon: '#icon_reading',
          description: "Premia Blogs"
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


    __webpack_exports__["default"] = ".map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n.map::after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-image: linear-gradient(to right, #f1f1f1, rgba(255, 0, 0, 0));\n  width: 50%;\n  height: 100%;\n}\n.map iframe {\n  width: 100%;\n  height: 100%;\n}\n.section-inner-subheader .row-f, .section-inner-subheader .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-inner-subheader .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-inner-subheader .panel p {\n  font-size: 72px;\n  color: #f0f0f0;\n  font-weight: bold;\n}\n.section-inner-subheader .panel .panel-body {\n  width: 50%;\n}\n.section-inner-subheader h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-inner-subheader h6 {\n  margin-left: 65px;\n}\n.section-inner-subheader .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-inner-subheader .inner-contact-info {\n  margin: 50px;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);\n}\n.section-inner-subheader .inner-contact-info .row {\n  margin: 0px;\n}\n.section-inner-subheader .inner-contact-info .contact-form {\n  background: #fff;\n  padding-top: 40px;\n}\n.section-inner-subheader .inner-contact-info .contact-form .row {\n  margin-bottom: 30px;\n}\n.section-inner-subheader .inner-contact-info .contact-form input, .section-inner-subheader .inner-contact-info .contact-form textarea {\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid #d6d6d6;\n  outline: none;\n  padding: 0;\n  box-shadow: none;\n}\n.section-inner-subheader .inner-contact-info .contact-form input:focus, .section-inner-subheader .inner-contact-info .contact-form textarea:focus {\n  border-bottom: 1px solid #007bff;\n}\n.section-inner-subheader .inner-contact-info .contact-form .btn {\n  background: none;\n  border: none;\n  box-shadow: none;\n  float: right;\n}\n.section-inner-subheader .inner-contact-info .contact-form .btn svg {\n  fill: #bf272d;\n  transform: rotate(45deg);\n}\n.section-inner-subheader .inner-contact-info .contact-info {\n  background: url('contact-info.png') repeat-y #bf272d top left;\n  color: #fff;\n}\n.section-inner-subheader .inner-contact-info .contact-info .info-title {\n  padding: 30px 0 40px 120px;\n}\n.section-inner-subheader .inner-contact-info .contact-info .row {\n  margin-bottom: 30px;\n}\n.section-inner-subheader .inner-contact-info .contact-info i {\n  width: 120px;\n  float: left;\n  padding: 0 15px;\n}\n.section-inner-subheader .inner-contact-info .contact-info p {\n  float: left;\n  color: #fff;\n}\n.section-inner-subheader .inner-contact-info .contact-info a {\n  color: #fff;\n}\n.section-inner-subheader .inner-contact-info .contact-info svg {\n  fill: #fff;\n}\n.section-inner-subheader .inner-contact-info p {\n  color: #000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.section-inner-subheader .inner-contact-info p a {\n  color: #000;\n}\n.section-inner-subheader .inner-contact-info .highlighted {\n  color: #bf272d;\n}\n.section-inner-subheader .inner-contact-info .social-net {\n  float: left;\n  margin-bottom: 25px;\n  margin-left: 120px;\n}\n.section-inner-subheader .inner-contact-info .social-net li {\n  float: left;\n  margin-right: 15px;\n}\n.section-inner-subheader .inner-contact-info .social-net li i {\n  width: auto;\n  padding: 0px;\n}\n.flex-end {\n  justify-content: flex-end;\n}\n@media (max-width: 576px) {\n  .row-f, .row, h1 {\n    margin-left: 0px;\n  }\n\n  .breadcum {\n    margin-left: 15px;\n  }\n\n  .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n\n  .panel-body {\n    width: 100%;\n  }\n\n  .contact-info {\n    display: none;\n  }\n\n  form .row {\n    padding: 0px;\n  }\n  form .row .col {\n    margin-bottom: 10px;\n  }\n  form .row:not(:last-child) {\n    display: block;\n    margin-bottom: 15px;\n  }\n\n  .contact-form {\n    padding: 40px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9EOlxcYWNhZGVteS9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NEO0FEQUM7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLHdFQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNFRjtBREFDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNFRjtBREVDO0VBQ0Msb0JBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0M7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0NGO0FEQ0M7RUFDQyxnQkFBQTtFQUNBLGFBQUE7QUNDRjtBREFFO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0VIO0FEQUU7RUFDQyxVQUFBO0FDRUg7QURDQztFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENDO0VBQ0MsaUJBQUE7QUNDRjtBREVDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNBRjtBREVDO0VBQ0MsWUFBQTtFQUNBLDBDQUFBO0FDQUY7QURDRTtFQUNDLFdBQUE7QUNDSDtBRENFO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NIO0FEQUc7RUFDQyxtQkFBQTtBQ0VKO0FEQUc7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRERJO0VBQ0MsZ0NBQUE7QUNHTDtBREFHO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRUo7QURESTtFQUNDLGFBQUE7RUFDQSx3QkFBQTtBQ0dMO0FEQ0U7RUFDQyw2REFBQTtFQUNBLFdBQUE7QUNDSDtBREFHO0VBQ0MsMEJBQUE7QUNFSjtBREFHO0VBQ0MsbUJBQUE7QUNFSjtBREFHO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRUo7QURBRztFQUNDLFdBQUE7RUFDQSxXQUFBO0FDRUo7QURBRztFQUNDLFdBQUE7QUNFSjtBREFHO0VBQ0MsVUFBQTtBQ0VKO0FEQ0U7RUFDRyxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0w7QURDSztFQUNDLFdBQUE7QUNDTjtBREdFO0VBQ0MsY0FBQTtBQ0RIO0FESUU7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZIO0FER0c7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7QUNESjtBREdJO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNETDtBRFFBO0VBRUMseUJBQUE7QUNORDtBRFNBO0VBQ0U7SUFDQyxnQkFBQTtFQ05EOztFRFNEO0lBQ0MsaUJBQUE7RUNOQTs7RURRRDtJQUNDLGFBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7RUNMQTs7RURPRDtJQUNDLFdBQUE7RUNKQTs7RURNRDtJQUNDLGFBQUE7RUNIQTs7RURPQTtJQUNDLFlBQUE7RUNKRDtFREtDO0lBQ0MsbUJBQUE7RUNIRjtFREtDO0lBQ0MsY0FBQTtJQUNBLG1CQUFBO0VDSEY7O0VEUUQ7SUFDQyxpQkFBQTtFQ0xBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwe1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6MDtcclxuXHRsZWZ0OjA7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHR6LWluZGV4Oi0xO1xyXG5cdCY6OmFmdGVye1xyXG5cdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OjA7XHJcblx0XHR0b3A6MDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNDEsMjQxLDI0MSwxKSwgcmdiYSgyNTUsMCwwLDApKTtcclxuXHRcdHdpZHRoOjUwJTtcclxuXHRcdGhlaWdodDoxMDAlO1xyXG5cdH1cclxuXHRpZnJhbWV7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcbn1cclxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVye1xyXG5cdC5yb3ctZiwgLnJvd3tcclxuXHRcdG1hcmdpbjo3MHB4IDAgMTAwcHg7IFxyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDowO1xyXG5cdFx0dG9wOjA7XHJcblx0XHR3aWR0aDogNDAlO1xyXG5cdH1cclxuXHQucGFuZWwge1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0cGFkZGluZzo1MHB4O1xyXG5cdFx0cHtcclxuXHRcdFx0Zm9udC1zaXplOjcycHg7XHJcblx0XHRcdGNvbG9yOiNmMGYwZjA7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0fVxyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdH1cclxuXHR9XHJcblx0aDF7XHJcblx0XHRtYXJnaW4tbGVmdDo2NXB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzVweDtcclxuXHR9XHJcblx0aDZ7XHJcblx0XHRtYXJnaW4tbGVmdDo2NXB4O1xyXG5cdH1cclxuXHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHR9XHJcblx0LmlubmVyLWNvbnRhY3QtaW5mb3tcclxuXHRcdG1hcmdpbjogNTBweDtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMCwwLDAsLjUpO1xyXG5cdFx0LnJvd3tcclxuXHRcdFx0bWFyZ2luOjBweDtcdFxyXG5cdFx0fVxyXG5cdFx0LmNvbnRhY3QtZm9ybXtcclxuXHRcdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0XHRwYWRkaW5nLXRvcDo0MHB4O1xyXG5cdFx0XHQucm93e1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206MzBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpbnB1dCwgdGV4dGFyZWF7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHRcdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNmQ2ZDY7XHJcblx0XHRcdFx0b3V0bGluZTogbm9uZTtcclxuXHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHQmOmZvY3Vze1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDdiZmY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC5idG57XHJcblx0XHRcdFx0YmFja2dyb3VuZDpub25lO1xyXG5cdFx0XHRcdGJvcmRlcjpub25lO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6bm9uZTtcclxuXHRcdFx0XHRmbG9hdDpyaWdodDtcclxuXHRcdFx0XHRzdmd7XHJcblx0XHRcdFx0XHRmaWxsOiNiZjI3MmQ7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuY29udGFjdC1pbmZve1xyXG5cdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRhY3QtaW5mby5wbmcpIHJlcGVhdC15ICNiZjI3MmQgdG9wIGxlZnQ7XHJcblx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdC5pbmZvLXRpdGxle1xyXG5cdFx0XHRcdHBhZGRpbmc6MzBweCAwIDQwcHggMTIwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LnJvd3tcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOjMwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0aXtcclxuXHRcdFx0XHR3aWR0aDoxMjBweDtcclxuXHRcdFx0XHRmbG9hdDpsZWZ0O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDAgMTVweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRwe1xyXG5cdFx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0XHRhe1xyXG5cdFx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdH1cclxuXHRcdFx0c3Zne1xyXG5cdFx0XHRcdGZpbGw6I2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cHtcclxuXHRcdCAgIGNvbG9yOiMwMDA7XHJcblx0XHQgICBmb250LXNpemU6MTRweDsgXHJcblx0XHQgICBmb250LXdlaWdodDpub3JtYWw7XHJcblx0XHQgICBcclxuXHRcdCAgIGF7XHJcblx0XHRcdCAgIGNvbG9yOiMwMDA7XHJcblxyXG5cdFx0ICAgfVxyXG5cdFx0fVxyXG5cdFx0LmhpZ2hsaWdodGVke1xyXG5cdFx0XHRjb2xvcjojYmYyNzJkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5zb2NpYWwtbmV0e1xyXG5cdFx0XHRmbG9hdDpsZWZ0O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMTIwcHg7XHJcblx0XHRcdGxpe1xyXG5cdFx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OjE1cHg7XHJcblxyXG5cdFx0XHRcdGl7XHJcblx0XHRcdFx0XHR3aWR0aDphdXRvO1xyXG5cdFx0XHRcdFx0cGFkZGluZzowcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uZmxleC1lbmRcclxue1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcblx0XHQucm93LWYsIC5yb3csIGgxe1xyXG5cdFx0XHRtYXJnaW4tbGVmdDowcHg7IFxyXG5cdFx0XHJcblx0fVxyXG5cdC5icmVhZGN1bXtcclxuXHRcdG1hcmdpbi1sZWZ0OjE1cHg7XHJcblx0fVxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBhZGRpbmc6MTVweDtcclxuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxuXHQucGFuZWwtYm9keXtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG5cdC5jb250YWN0LWluZm97XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG5cclxuXHRmb3Jte1xyXG5cdFx0LnJvd3tcclxuXHRcdFx0cGFkZGluZzowcHg7XHJcblx0XHRcdC5jb2x7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbToxMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdCY6bm90KDpsYXN0LWNoaWxkKXtcclxuXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206MTVweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmNvbnRhY3QtZm9ybXtcclxuXHRcdHBhZGRpbmc6NDBweCAwcHg7XHJcblx0fVxyXG5cclxufSIsIi5tYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG4ubWFwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjFmMWYxLCByZ2JhKDI1NSwgMCwgMCwgMCkpO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFwIGlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucm93LWYsIC5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucm93IHtcbiAgbWFyZ2luOiA3MHB4IDAgMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW1nLWZsYWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA0MCU7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNTBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwgcCB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgaDEge1xuICBtYXJnaW4tbGVmdDogNjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciBoNiB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbWctZmxhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIHtcbiAgbWFyZ2luOiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAucm93IHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1mb3JtIC5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmNvbnRhY3QtZm9ybSBpbnB1dCwgLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNmQ2ZDY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1mb3JtIGlucHV0OmZvY3VzLCAuc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1mb3JtIHRleHRhcmVhOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDdiZmY7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1mb3JtIC5idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIC5jb250YWN0LWZvcm0gLmJ0biBzdmcge1xuICBmaWxsOiAjYmYyNzJkO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1pbmZvIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGFjdC1pbmZvLnBuZykgcmVwZWF0LXkgI2JmMjcyZCB0b3AgbGVmdDtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1pbmZvIC5pbmZvLXRpdGxlIHtcbiAgcGFkZGluZzogMzBweCAwIDQwcHggMTIwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1pbmZvIC5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmNvbnRhY3QtaW5mbyBpIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmNvbnRhY3QtaW5mbyBwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmNvbnRhY3QtaW5mbyBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuY29udGFjdC1pbmZvIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyBwIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuaW5uZXItY29udGFjdC1pbmZvIHAgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5pbm5lci1jb250YWN0LWluZm8gLmhpZ2hsaWdodGVkIHtcbiAgY29sb3I6ICNiZjI3MmQ7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLmlubmVyLWNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCBsaSBpIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmZsZXgtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5yb3ctZiwgLnJvdywgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cblxuICAuYnJlYWRjdW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgLmltZy1mbGFnIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGFuZWwtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY29udGFjdC1pbmZvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgZm9ybSAucm93IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgZm9ybSAucm93IC5jb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgZm9ybSAucm93Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuICAuY29udGFjdC1mb3JtIHtcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcbiAgfVxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".the-urriculum .breadcum {\n  margin-left: 87px;\n  margin-bottom: 15px;\n}\n.the-urriculum .row {\n  position: relative;\n}\n.the-urriculum .map-marker {\n  margin: 30px 0px;\n}\n.the-urriculum .curriculum-info {\n  margin-bottom: 40px;\n}\n.the-urriculum .curriculum-info .first-child {\n  margin-top: 40px;\n}\n.the-urriculum .curriculum-info .col {\n  border-right: 2px solid #000;\n}\n.the-urriculum .int-curriculum {\n  background: #3e65ac;\n  color: #fff;\n  padding: 20px;\n  margin: 20px 0 70px;\n}\n.the-urriculum .int-curriculum svg {\n  fill: #fff;\n}\n.the-urriculum .int-curriculum .row {\n  margin: 0px;\n}\n.cur-info-slider {\n  margin: 70px 0;\n}\n.cur-info-slider .item-1 {\n  background: #ba262c;\n}\n.cur-info-slider .item-2 {\n  background: #3e65ac;\n}\n.cur-info-slider .item-3 {\n  background: #000000;\n}\n.cur-info-slider .item-4 {\n  background: #5fffb7;\n}\n.cur-info-slider .item-5 {\n  background: #ba262c;\n}\n.cur-info-slider .item-6 {\n  background: #3e65ac;\n}\n.cur-info-slider .item-7 {\n  background: #000000;\n}\n.cur-info-slider .item-8 {\n  background: #5fffb7;\n}\n.cur-info-slider .item-9 {\n  background: #ba262c;\n}\n.cur-info-slider .active.item-1, .cur-info-slider .active.item-2, .cur-info-slider .active.item-3, .cur-info-slider .active.item-4, .cur-info-slider .active.item-5, .cur-info-slider .active.item-6, .cur-info-slider .active.item-7, .cur-info-slider .active.item-8, .cur-info-slider .active.item-9 {\n  background: #fff;\n  transform: scale(1.1);\n}\n.cur-info-slider .active.item-1 {\n  border-left: 20px solid #ba262c;\n}\n.cur-info-slider .active.item-2 {\n  border-left: 20px solid #3e65ac;\n}\n.cur-info-slider .active.item-3 {\n  border-left: 20px solid #000000;\n}\n.cur-info-slider .active.item-4 {\n  border-left: 20px solid #5fffb7;\n}\n.cur-info-slider .active.item-5 {\n  border-left: 20px solid #ba262c;\n}\n.cur-info-slider .active.item-6 {\n  border-left: 20px solid #3e65ac;\n}\n.cur-info-slider .active.item-7 {\n  border-left: 20px solid #000000;\n}\n.cur-info-slider .active.item-8 {\n  border-left: 20px solid #5fffb7;\n}\n.cur-info-slider .active.item-9 {\n  border-left: 20px solid #ba262c;\n}\n.cur-info-slider .img-box {\n  box-sizing: border-box;\n  float: left;\n  height: 130px;\n}\n.cur-info-slider .img-box img {\n  height: 100%;\n}\n.cur-info-slider .img-box ~ div {\n  display: inline-block;\n  margin-left: 20px;\n  word-wrap: break-all;\n}\n.cur-info-slider .img-box ~ div h3 {\n  margin-top: 30px;\n}\n.cur-info-slider .img-box img {\n  width: auto;\n}\n.cur-info-slider .heading-title {\n  display: block;\n  text-align: center;\n  position: relative;\n  margin: 0px;\n}\n.cur-info-slider .heading-title span {\n  padding: 0 15px;\n  position: relative;\n  z-index: 1;\n  color: #fff;\n}\n.cur-info-slider .heading-title::after {\n  content: \" \";\n  position: absolute;\n  top: 20px;\n  left: 1px;\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n.cur-info-slider .gallery-wrap {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100vh;\n}\n.cur-info-slider #style-4::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5;\n}\n.cur-info-slider #style-4::-webkit-scrollbar {\n  width: 10px;\n  background-color: #F5F5F5;\n}\n.cur-info-slider #style-4::-webkit-scrollbar-thumb {\n  background-color: #000000;\n  border: 2px solid #555555;\n}\n.cur-info-slider .titles h3 {\n  font-size: 20px;\n}\n.cur-info-slider .titles h1 {\n  font-size: 22px;\n}\n.cur-info-slider .titles h6 {\n  font-size: 18px;\n}\n.cur-info-slider .item {\n  flex: 1;\n  height: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: none;\n  transition: flex 0.8s ease;\n  cursor: pointer;\n}\n.cur-info-slider .item .panel {\n  display: none;\n}\n.cur-info-slider .item h2 {\n  -webkit-writing-mode: vertical-rl;\n          writing-mode: vertical-rl;\n  color: rgba(255, 255, 255, 0.7);\n  padding-top: 15px;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 15px;\n}\n.cur-info-slider .item.active {\n  flex: 10;\n  padding: 0px 15px;\n  box-shadow: 0 4px 15px 5px rgba(0, 0, 0, 0.15);\n}\n.cur-info-slider .item.active h2 {\n  display: none;\n}\n.cur-info-slider .item.active .panel {\n  display: block;\n}\n.cur-info-slider .item.active .panel .panel-body {\n  padding: 15px;\n  margin-bottom: 15px;\n  margin-top: 15px;\n  background: #f0f0f0;\n}\n.cur-info-slider .item.active .panel .panel-body p {\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.cur-info-slider .social {\n  position: absolute;\n  right: 35px;\n  bottom: 0;\n}\n.cur-info-slider .social img {\n  display: block;\n  width: 32px;\n}\n@media (max-width: 576px) {\n  .our-partners .img-box ~ div {\n    margin-left: 0px;\n  }\n\n  .the-urriculum .int-curriculum {\n    display: block;\n  }\n\n  .cur-info-slider {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmljdWx1bS9EOlxcYWNhZGVteS9zcmNcXGFwcFxcY3VycmljdWx1bVxcY3VycmljdWx1bS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3VycmljdWx1bS9jdXJyaWN1bHVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0FKO0FERUU7RUFDRSxrQkFBQTtBQ0FKO0FER0U7RUFDRSxnQkFBQTtBQ0RKO0FESUU7RUFJRSxtQkFBQTtBQ0xKO0FERUk7RUFDRSxnQkFBQTtBQ0FOO0FER0k7RUFDRSw0QkFBQTtBQ0ROO0FES0U7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNISjtBREtJO0VBQ0UsVUFBQTtBQ0hOO0FETUk7RUFDRSxXQUFBO0FDSk47QURTQTtFQUNFLGNBQUE7QUNORjtBRFFFO0VBQ0UsbUJBQUE7QUNOSjtBRFFFO0VBQ0UsbUJBQUE7QUNOSjtBRFFFO0VBQ0UsbUJBQUE7QUNOSjtBRFFFO0VBQ0UsbUJBQUE7QUNOSjtBRFFFO0VBQ0UsbUJBQUE7QUNOSjtBRFFFO0VBQ0UsbUJBQUE7QUNOSjtBRFFFO0VBQ0UsbUJBQUE7QUNOSjtBRFFFO0VBQ0UsbUJBQUE7QUNOSjtBRFFFO0VBQ0UsbUJBQUE7QUNOSjtBRFVJO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQ1JOO0FEVUk7RUFDRSwrQkFBQTtBQ1JOO0FEVUk7RUFDRSwrQkFBQTtBQ1JOO0FEVUk7RUFDRSwrQkFBQTtBQ1JOO0FEVUk7RUFDRSwrQkFBQTtBQ1JOO0FEVUk7RUFDRSwrQkFBQTtBQ1JOO0FEVUk7RUFDRSwrQkFBQTtBQ1JOO0FEVUk7RUFDRSwrQkFBQTtBQ1JOO0FEVUk7RUFDRSwrQkFBQTtBQ1JOO0FEVUk7RUFDRSwrQkFBQTtBQ1JOO0FEWUU7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDRSxhQUFBO0FDVko7QURXSTtFQUNFLFlBQUE7QUNUTjtBRFdFO0VBQ0MscUJBQUE7RUFDRyxpQkFBQTtFQUNBLG9CQUFBO0FDVE47QURVTTtFQUNFLGdCQUFBO0FDUlI7QURXRTtFQUNDLFdBQUE7QUNUSDtBRFlDO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDVkY7QURXRTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDVEg7QURXRTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1RIO0FEYUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ1hKO0FEY0U7RUFFRCxvREFBQTtFQUNBLHlCQUFBO0FDYkQ7QURnQkE7RUFFQyxXQUFBO0VBQ0EseUJBQUE7QUNmRDtBRGtCQTtFQUVDLHlCQUFBO0VBQ0EseUJBQUE7QUNqQkQ7QURxQkk7RUFDRSxlQUFBO0FDbkJOO0FEcUJJO0VBQ0UsZUFBQTtBQ25CTjtBRHFCSTtFQUNFLGVBQUE7QUNuQk47QUR1QkU7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ3JCSjtBRHNCSTtFQUNFLGFBQUE7QUNwQk47QUR1Qkk7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNyQk47QUR3Qks7RUFDQyxRQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtBQ3RCTjtBRHVCTTtFQUNFLGFBQUE7QUNyQlI7QUR1Qk07RUFDRSxjQUFBO0FDckJSO0FEc0JRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ3BCVjtBRHFCVTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNuQlo7QUR5QkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDdkJKO0FEeUJJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUN2Qk47QUQ0QkE7RUFDRTtJQUNJLGdCQUFBO0VDekJKOztFRDJCQTtJQUNJLGNBQUE7RUN4Qko7O0VEMEJBO0lBQ0UsYUFBQTtFQ3ZCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY3VycmljdWx1bS9jdXJyaWN1bHVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoZS11cnJpY3VsdW0ge1xyXG4gIC5icmVhZGN1bXtcclxuICAgIG1hcmdpbi1sZWZ0Ojg3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLm1hcC1tYXJrZXIge1xyXG4gICAgbWFyZ2luOiAzMHB4IDBweDsgXHJcbiAgfVxyXG5cclxuICAuY3VycmljdWx1bS1pbmZvIHtcclxuICAgIC5maXJzdC1jaGlsZHtcclxuICAgICAgbWFyZ2luLXRvcDo0MHB4O1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gICAgLmNvbCB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW50LWN1cnJpY3VsdW0ge1xyXG4gICAgYmFja2dyb3VuZDogIzNlNjVhYztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gICAgbWFyZ2luOjIwcHggMCA3MHB4O1xyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgIGZpbGw6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdyB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmN1ci1pbmZvLXNsaWRlciB7XHJcbiAgbWFyZ2luOjcwcHggMDtcclxuXHJcbiAgLml0ZW0tMXtcclxuICAgIGJhY2tncm91bmQ6I2JhMjYyYztcclxuICB9XHJcbiAgLml0ZW0tMntcclxuICAgIGJhY2tncm91bmQ6IzNlNjVhYztcclxuICB9XHJcbiAgLml0ZW0tM3tcclxuICAgIGJhY2tncm91bmQ6IzAwMDAwMDtcclxuICB9XHJcbiAgLml0ZW0tNHtcclxuICAgIGJhY2tncm91bmQ6IzVmZmZiNztcclxuICB9XHJcbiAgLml0ZW0tNXtcclxuICAgIGJhY2tncm91bmQ6I2JhMjYyYztcclxuICB9XHJcbiAgLml0ZW0tNntcclxuICAgIGJhY2tncm91bmQ6IzNlNjVhYztcclxuICB9XHJcbiAgLml0ZW0tN3tcclxuICAgIGJhY2tncm91bmQ6IzAwMDAwMDtcclxuICB9XHJcbiAgLml0ZW0tOHtcclxuICAgIGJhY2tncm91bmQ6IzVmZmZiNztcclxuICB9XHJcbiAgLml0ZW0tOXtcclxuICAgIGJhY2tncm91bmQ6I2JhMjYyYztcclxuICB9XHJcblxyXG4gIC5hY3RpdmV7XHJcbiAgICAmLml0ZW0tMSwgJi5pdGVtLTIsICYuaXRlbS0zLCAmLml0ZW0tNCwmLml0ZW0tNSwgJi5pdGVtLTYsICYuaXRlbS03LCAmLml0ZW0tOCwgJi5pdGVtLTl7XHJcbiAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG4gICAgJi5pdGVtLTF7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICNiYTI2MmM7XHJcbiAgICB9XHJcbiAgICAmLml0ZW0tMntcclxuICAgICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgIzNlNjVhYztcclxuICAgIH1cclxuICAgICYuaXRlbS0ze1xyXG4gICAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgfVxyXG4gICAgJi5pdGVtLTR7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICM1ZmZmYjc7XHJcbiAgICB9XHJcbiAgICAmLml0ZW0tNXtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgI2JhMjYyYztcclxuICAgIH1cclxuICAgICYuaXRlbS02e1xyXG4gICAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjM2U2NWFjO1xyXG4gICAgfVxyXG4gICAgJi5pdGVtLTd7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICAmLml0ZW0tOHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgIzVmZmZiNztcclxuICAgIH1cclxuICAgICYuaXRlbS05e1xyXG4gICAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjYmEyNjJjO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmltZy1ib3h7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0ZmxvYXQ6bGVmdDtcclxuICAgIGhlaWdodDoxMzBweDtcclxuICAgIGltZ3tcclxuICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB9XHJcblx0XHQmfmRpdntcclxuXHRcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHRcclxuICAgICAgd29yZC13cmFwOmJyZWFrLWFsbDtcclxuICAgICAgaDN7XHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICB9XHJcblx0XHR9XHJcblx0XHRpbWd7XHJcblx0XHRcdHdpZHRoOmF1dG87XHJcblx0XHR9XHJcblx0fVxyXG5cdC5oZWFkaW5nLXRpdGxle1xyXG5cdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0bWFyZ2luOjBweDtcclxuXHRcdHNwYW57XHJcblx0XHRcdHBhZGRpbmc6MCAxNXB4O1xyXG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdH1cclxuXHRcdCY6OmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6MjBweDtcclxuXHRcdFx0bGVmdDoxcHg7XHJcblx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdGhlaWdodDoxcHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4gIC5nYWxsZXJ5LXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG5cclxuICAjc3R5bGUtNDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcclxue1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG5cclxuI3N0eWxlLTQ6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbntcclxuXHR3aWR0aDogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4jc3R5bGUtNDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcclxue1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0Ym9yZGVyOiAycHggc29saWQgIzU1NTU1NTtcclxufVxyXG5cclxuICAudGl0bGVze1xyXG4gICAgaDN7XHJcbiAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgfVxyXG4gICAgaDZ7XHJcbiAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgfVxyXG59XHJcbiAgXHJcbiAgLml0ZW0ge1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGZsZXggMC44cyBlYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLnBhbmVse1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGgye1xyXG4gICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG4gICAgICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSwgLjcpO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAmLmFjdGl2ZXtcclxuICAgICAgZmxleDogMTA7XHJcbiAgICAgIHBhZGRpbmc6MHB4IDE1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6MCA0cHggMTVweCA1cHggcmdiKDAgMCAwIC8gMTUlKTtcclxuICAgICAgaDJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAucGFuZWx7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLnBhbmVsLWJvZHl7XHJcbiAgICAgICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiNmMGYwZjA7XHJcbiAgICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zb2NpYWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzVweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIFxyXG4gICAgaW1ne1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gIC5vdXItcGFydG5lcnMgLmltZy1ib3ggfiBkaXZ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICB9XHJcbiAgLnRoZS11cnJpY3VsdW0gLmludC1jdXJyaWN1bHVte1xyXG4gICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gIH1cclxuICAuY3VyLWluZm8tc2xpZGVye1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxufSIsIi50aGUtdXJyaWN1bHVtIC5icmVhZGN1bSB7XG4gIG1hcmdpbi1sZWZ0OiA4N3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnRoZS11cnJpY3VsdW0gLnJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50aGUtdXJyaWN1bHVtIC5tYXAtbWFya2VyIHtcbiAgbWFyZ2luOiAzMHB4IDBweDtcbn1cbi50aGUtdXJyaWN1bHVtIC5jdXJyaWN1bHVtLWluZm8ge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnRoZS11cnJpY3VsdW0gLmN1cnJpY3VsdW0taW5mbyAuZmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLnRoZS11cnJpY3VsdW0gLmN1cnJpY3VsdW0taW5mbyAuY29sIHtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwMDtcbn1cbi50aGUtdXJyaWN1bHVtIC5pbnQtY3VycmljdWx1bSB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDIwcHggMCA3MHB4O1xufVxuLnRoZS11cnJpY3VsdW0gLmludC1jdXJyaWN1bHVtIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG4udGhlLXVycmljdWx1bSAuaW50LWN1cnJpY3VsdW0gLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uY3VyLWluZm8tc2xpZGVyIHtcbiAgbWFyZ2luOiA3MHB4IDA7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5pdGVtLTEge1xuICBiYWNrZ3JvdW5kOiAjYmEyNjJjO1xufVxuLmN1ci1pbmZvLXNsaWRlciAuaXRlbS0yIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5jdXItaW5mby1zbGlkZXIgLml0ZW0tMyB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5pdGVtLTQge1xuICBiYWNrZ3JvdW5kOiAjNWZmZmI3O1xufVxuLmN1ci1pbmZvLXNsaWRlciAuaXRlbS01IHtcbiAgYmFja2dyb3VuZDogI2JhMjYyYztcbn1cbi5jdXItaW5mby1zbGlkZXIgLml0ZW0tNiB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5pdGVtLTcge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuLmN1ci1pbmZvLXNsaWRlciAuaXRlbS04IHtcbiAgYmFja2dyb3VuZDogIzVmZmZiNztcbn1cbi5jdXItaW5mby1zbGlkZXIgLml0ZW0tOSB7XG4gIGJhY2tncm91bmQ6ICNiYTI2MmM7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5hY3RpdmUuaXRlbS0xLCAuY3VyLWluZm8tc2xpZGVyIC5hY3RpdmUuaXRlbS0yLCAuY3VyLWluZm8tc2xpZGVyIC5hY3RpdmUuaXRlbS0zLCAuY3VyLWluZm8tc2xpZGVyIC5hY3RpdmUuaXRlbS00LCAuY3VyLWluZm8tc2xpZGVyIC5hY3RpdmUuaXRlbS01LCAuY3VyLWluZm8tc2xpZGVyIC5hY3RpdmUuaXRlbS02LCAuY3VyLWluZm8tc2xpZGVyIC5hY3RpdmUuaXRlbS03LCAuY3VyLWluZm8tc2xpZGVyIC5hY3RpdmUuaXRlbS04LCAuY3VyLWluZm8tc2xpZGVyIC5hY3RpdmUuaXRlbS05IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLmN1ci1pbmZvLXNsaWRlciAuYWN0aXZlLml0ZW0tMSB7XG4gIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICNiYTI2MmM7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5hY3RpdmUuaXRlbS0yIHtcbiAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgIzNlNjVhYztcbn1cbi5jdXItaW5mby1zbGlkZXIgLmFjdGl2ZS5pdGVtLTMge1xuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjMDAwMDAwO1xufVxuLmN1ci1pbmZvLXNsaWRlciAuYWN0aXZlLml0ZW0tNCB7XG4gIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICM1ZmZmYjc7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5hY3RpdmUuaXRlbS01IHtcbiAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgI2JhMjYyYztcbn1cbi5jdXItaW5mby1zbGlkZXIgLmFjdGl2ZS5pdGVtLTYge1xuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjM2U2NWFjO1xufVxuLmN1ci1pbmZvLXNsaWRlciAuYWN0aXZlLml0ZW0tNyB7XG4gIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICMwMDAwMDA7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5hY3RpdmUuaXRlbS04IHtcbiAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgIzVmZmZiNztcbn1cbi5jdXItaW5mby1zbGlkZXIgLmFjdGl2ZS5pdGVtLTkge1xuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjYmEyNjJjO1xufVxuLmN1ci1pbmZvLXNsaWRlciAuaW1nLWJveCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEzMHB4O1xufVxuLmN1ci1pbmZvLXNsaWRlciAuaW1nLWJveCBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5pbWctYm94IH4gZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd29yZC13cmFwOiBicmVhay1hbGw7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5pbWctYm94IH4gZGl2IGgzIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5jdXItaW5mby1zbGlkZXIgLmltZy1ib3ggaW1nIHtcbiAgd2lkdGg6IGF1dG87XG59XG4uY3VyLWluZm8tc2xpZGVyIC5oZWFkaW5nLXRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDBweDtcbn1cbi5jdXItaW5mby1zbGlkZXIgLmhlYWRpbmctdGl0bGUgc3BhbiB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jdXItaW5mby1zbGlkZXIgLmhlYWRpbmctdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5jdXItaW5mby1zbGlkZXIgLmdhbGxlcnktd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmN1ci1pbmZvLXNsaWRlciAjc3R5bGUtNDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuLmN1ci1pbmZvLXNsaWRlciAjc3R5bGUtNDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cbi5jdXItaW5mby1zbGlkZXIgI3N0eWxlLTQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTU1NTtcbn1cbi5jdXItaW5mby1zbGlkZXIgLnRpdGxlcyBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jdXItaW5mby1zbGlkZXIgLnRpdGxlcyBoMSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5jdXItaW5mby1zbGlkZXIgLnRpdGxlcyBoNiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jdXItaW5mby1zbGlkZXIgLml0ZW0ge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XG4gIHRyYW5zaXRpb246IGZsZXggMC44cyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5pdGVtIC5wYW5lbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5pdGVtIGgyIHtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uY3VyLWluZm8tc2xpZGVyIC5pdGVtLmFjdGl2ZSB7XG4gIGZsZXg6IDEwO1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5jdXItaW5mby1zbGlkZXIgLml0ZW0uYWN0aXZlIGgyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jdXItaW5mby1zbGlkZXIgLml0ZW0uYWN0aXZlIC5wYW5lbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmN1ci1pbmZvLXNsaWRlciAuaXRlbS5hY3RpdmUgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cbi5jdXItaW5mby1zbGlkZXIgLml0ZW0uYWN0aXZlIC5wYW5lbCAucGFuZWwtYm9keSBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jdXItaW5mby1zbGlkZXIgLnNvY2lhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIGJvdHRvbTogMDtcbn1cbi5jdXItaW5mby1zbGlkZXIgLnNvY2lhbCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMycHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAub3VyLXBhcnRuZXJzIC5pbWctYm94IH4gZGl2IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG5cbiAgLnRoZS11cnJpY3VsdW0gLmludC1jdXJyaWN1bHVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jdXItaW5mby1zbGlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */";
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

        this.tab = 'tab1';
        this.curSlider = [{
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
        }];
      }

      _createClass(CurriculumComponent, [{
        key: "onClick",
        value: function onClick(check) {
          if (check == 1) {
            this.tab = 'tab1';
          } else if (check == 2) {
            this.tab = 'tab2';
          } else if (check == 3) {
            this.tab = 'tab3';
          } else if (check == 3) {
            this.tab = 'tab4';
          } else if (check == 4) {
            this.tab = 'tab4';
          } else if (check == 5) {
            this.tab = 'tab5';
          } else if (check == 6) {
            this.tab = 'tab6';
          } else if (check == 7) {
            this.tab = 'tab7';
          } else if (check == 8) {
            this.tab = 'tab8';
          } else {
            this.tab = 'tab9';
          }
        }
      }, {
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


    __webpack_exports__["default"] = "::ng-deep .main-page nav {\n  background-color: #fff !important;\n}\n\nnav {\n  background-color: #f0f0f0;\n  width: calc(100% - 70px);\n  z-index: 9;\n  padding: 10px;\n  position: fixed;\n  top: 0px;\n}\n\nnav li:not(.login) {\n  margin-top: 10px;\n}\n\nnav .logo img {\n  height: 50px;\n  width: auto;\n}\n\nnav .login {\n  margin: 0 15px;\n}\n\nnav .login a {\n  color: #000 !important;\n  text-align: center;\n}\n\nnav .login a svg {\n  fill: #bf272d;\n}\n\nnav .login a:hover {\n  background: none !important;\n}\n\nnav .login.dropping {\n  position: relative;\n}\n\nnav .login.dropping:hover .dropper {\n  display: block;\n}\n\nnav .login .dropper {\n  background: #fff;\n  border-bottom: 2px solid #f44336;\n  box-shadow: 1px 3px 6px rgba(72, 71, 71, 0.3);\n  display: none;\n  position: absolute;\n  top: 62px;\n  right: 0px;\n  width: 260px;\n}\n\nnav .login .dropper a {\n  display: block;\n  border-bottom: 1px solid #ccc;\n}\n\nnav .login .dropper a:hover {\n  color: #ccc;\n}\n\nnav .login .dropper a:last-child {\n  border: none;\n}\n\n.navbar-vertical {\n  position: fixed;\n  z-index: 1030;\n  width: 70px;\n  height: 100vh;\n  background-color: #f0f0f0;\n  top: 0px;\n  left: 0px;\n  padding-left: 15px;\n}\n\n.navbar-vertical a {\n  padding: 0px;\n}\n\n.navbar-vertical .social-net {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n}\n\n.navbar-vertical .social-net li {\n  -webkit-writing-mode: vertical-lr;\n          writing-mode: vertical-lr;\n  transform: rotate(180deg);\n  transform-origin: center center;\n  list-style-type: none;\n}\n\n.navbar-vertical .social-net li a {\n  display: block;\n  padding: 0px;\n  margin: 0;\n  margin-right: -5px;\n  color: #000;\n  font-size: 16px;\n  float: left;\n}\n\n.navbar-vertical .social-net li a i {\n  float: left;\n  line-height: 35px;\n}\n\n.navbar-vertical .social-net li a span {\n  margin: 10px;\n  float: left;\n}\n\n.navbar-vertical .social-net li svg {\n  transform: rotate(90deg);\n  fill: #bf272d;\n}\n\n.notice-board {\n  position: fixed;\n  bottom: 10px;\n  left: 3px;\n}\n\n.notice-board i {\n  background: #bf272d;\n  padding: 10px;\n}\n\n.notice-board a {\n  padding: 15px !important;\n}\n\n.notice-board svg {\n  fill: #fff !important;\n  margin: 0 auto;\n  display: block;\n}\n\n::ng-deep .notification-popup.modal {\n  display: flex !important;\n  align-items: center;\n}\n\n::ng-deep .notification-popup.modal .modal-content {\n  background-color: #3e65ac;\n  padding: 0 15px;\n}\n\n::ng-deep .notification-popup.modal .modal-content .modal-title {\n  margin-left: 15px;\n  font-family: \"Lora\", serif;\n  color: #fff;\n}\n\n::ng-deep .notification-popup.modal .modal-content i {\n  margin-top: 9px;\n  display: block;\n}\n\n::ng-deep .notification-popup.modal .modal-content svg {\n  fill: #fff;\n}\n\n::ng-deep .notification-popup.modal .modal-content p {\n  color: #fff;\n  font-size: 28px;\n  align-self: center;\n}\n\n::ng-deep .notification-popup.modal .modal-content .btn {\n  outline: none;\n  background: none;\n  border: 2px solid #fff;\n}\n\n.login-form .row {\n  margin-bottom: 15px;\n}\n\n.login-form:first-child {\n  border-right: 1px solid #ccc;\n}\n\n.login-form .form-check-label {\n  margin-left: 15px;\n}\n\n.navbar-nav-list {\n  float: right;\n  margin-left: auto;\n  list-style-type: none;\n  margin-bottom: 0;\n}\n\n.navbar-nav-list .nav-item {\n  font-size: 14px;\n  float: left;\n}\n\n.navbar-nav-list .nav-item a {\n  padding: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #000;\n  text-decoration: none;\n}\n\n.navbar-nav-list .nav-item a.active, .navbar-nav-list .nav-item a:hover {\n  color: #fff;\n  background: #f44336;\n}\n\n.navbar-nav-list .nav-item.quick-link a {\n  padding-right: 0px;\n}\n\n.navbar-nav-list .nav-item svg {\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n}\n\n.navbar-nav-list .nav-item.social-media svg {\n  width: 24px;\n  height: 24px;\n  margin-right: 5px;\n}\n\n.newsletter {\n  background: #3e65ac;\n  padding: 40px 0;\n}\n\n.newsletter .form-inline {\n  margin: 0 auto;\n}\n\n.newsletter label {\n  color: #000;\n  font-size: 20px;\n  margin-right: 15px;\n}\n\n.newsletter .btn {\n  background: #000;\n  color: #fff;\n  margin-left: 15px;\n  padding: 9px 15px;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\n.overlay {\n  display: none;\n  background: #e1e1e1;\n  position: fixed;\n  width: 100%;\n  height: calc(100vh);\n  top: 0;\n  left: 0;\n  flex-direction: column;\n  /* make main-axis vertical */\n  justify-content: center;\n  /* align items vertically, in this case */\n  align-items: center;\n  /* align items horizontally, in this case */\n}\n\n.overlay.active {\n  display: flex;\n  z-index: 10000;\n}\n\n.overlay img {\n  position: absolute;\n  z-index: -1;\n  opacity: 0.1;\n}\n\n.overlay .close-menu {\n  position: absolute;\n  top: 25px;\n  left: 25px;\n}\n\n.overlay ul.main-nav {\n  float: none;\n}\n\n.overlay ul.main-nav li {\n  float: none;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.overlay ul.main-nav li a {\n  padding: 15px;\n  color: #000;\n  font-size: 18px;\n  font-weight: bold;\n  text-decoration: none;\n}\n\n.overlay ul.main-nav li a:hover, .overlay ul.main-nav li a.active {\n  color: #f44336;\n}\n\n.overlay .general-info-nav {\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n  width: 100%;\n}\n\n.overlay .general-info-nav a {\n  padding: 0 10px;\n}\n\n.overlay .general-info-nav a:hover {\n  color: #f44336;\n}\n\n@media (max-width: 576px) {\n  .login-form:first-child {\n    border-bottom: 1px solid #ccc;\n    border-right: none;\n    padding-bottom: 15px;\n  }\n\n  .header-nav {\n    position: absolute;\n    z-index: 99999999;\n    top: 10px;\n    right: 70px;\n    display: block;\n  }\n  .header-nav .login {\n    margin: 0;\n  }\n  .header-nav .login span {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxhY2FkZW15L3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlDQUFBO0FDQVI7O0FES0E7RUFDUSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQ0ZSOztBRElRO0VBQ0ksZ0JBQUE7QUNGWjs7QURLWTtFQUNJLFlBQUE7RUFDSixXQUFBO0FDSFo7O0FETVE7RUFFSSxjQUFBO0FDTFo7O0FETVk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FDSmhCOztBREtnQjtFQUNJLGFBQUE7QUNIcEI7O0FES2dCO0VBQ0ksMkJBQUE7QUNIcEI7O0FETVk7RUFDSSxrQkFBQTtBQ0poQjs7QURNb0I7RUFDSSxjQUFBO0FDSnhCOztBRFFZO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDTmhCOztBRE9nQjtFQUNJLGNBQUE7RUFDQSw2QkFBQTtBQ0xwQjs7QURNb0I7RUFDSSxXQUFBO0FDSnhCOztBRE1vQjtFQUNJLFlBQUE7QUNKeEI7O0FEWUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDVEo7O0FEVUk7RUFDSSxZQUFBO0FDUlI7O0FEV0k7RUFDSSxhQUFBO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtBQ1RWOztBRFVRO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtBQ1JWOztBRFNTO0VBQ0csY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNQWjs7QURRWTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ05oQjs7QURRWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDTmhCOztBRFNVO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0FDUGQ7O0FEY0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNYSjs7QURZSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ1ZSOztBRFlJO0VBQ0ksd0JBQUE7QUNWUjs7QURZSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNWUjs7QURjQTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUNYSjs7QURZQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ1ZKOztBRFdJO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNUUjs7QURXSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDVFI7O0FEV0k7RUFDSSxVQUFBO0FDVFI7O0FEV0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVFI7O0FEV0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ1RSOztBRGVJO0VBQ0ksbUJBQUE7QUNaUjs7QURjQztFQUNPLDRCQUFBO0FDWlI7O0FEY0k7RUFDSSxpQkFBQTtBQ1pSOztBRGVBO0VBQ1EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1pSOztBRGFJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNYUjs7QURZUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNWWjs7QURXWTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ1RoQjs7QURjWTtFQUNJLGtCQUFBO0FDWmhCOztBRGdCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNkWjs7QURrQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDaEJoQjs7QUR1QkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNwQko7O0FEcUJJO0VBQ0ksY0FBQTtBQ25CUjs7QURxQkk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDbkJSOztBRHNCSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNwQlI7O0FEd0JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFBd0IsNEJBQUE7RUFDeEIsdUJBQUE7RUFBeUIseUNBQUE7RUFDekIsbUJBQUE7RUFBcUIsMkNBQUE7QUNsQnpCOztBRG1CSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDakJSOztBRG1CSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNqQlI7O0FEbUJJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2pCUjs7QURtQks7RUFDTyxXQUFBO0FDakJaOztBRGtCWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDaEJoQjs7QURpQmdCO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ2ZwQjs7QURnQm9CO0VBQ0ksY0FBQTtBQ2R4Qjs7QURvQlE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNsQlo7O0FEbUJZO0VBQ0ksZUFBQTtBQ2pCaEI7O0FEa0JnQjtFQUNJLGNBQUE7QUNoQnBCOztBRHNCQTtFQUdTO0lBQ0csNkJBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0VDckJWOztFRDBCRDtJQUNPLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUN2Qk47RUR3Qk07SUFDSSxTQUFBO0VDdEJWO0VEdUJVO0lBQ0ksYUFBQTtFQ3JCZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWFpbi1wYWdle1xyXG4gICAgbmF2IHsgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5uYXYge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2YwZjBmMDtcclxuICAgICAgICB3aWR0aDpjYWxjKDEwMCUgLSA3MHB4KTtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOjBweDtcclxuICAgICAgIFxyXG4gICAgICAgIGxpOm5vdCgubG9naW4pe1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dve1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICAgICAgd2lkdGg6YXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubG9naW57XHJcbiAgICAgICAgICAgIC8vIGJvcmRlcjoxcHggc29saWQgIzAwMDtcclxuICAgICAgICAgICAgbWFyZ2luOjAgMTVweDtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiMwMDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiNiZjI3MmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZHJvcHBpbmd7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgLmRyb3BwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kcm9wcGVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2Y0NDMzNjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAzcHggNnB4IHJnYig3MiA3MSA3MSAvIDMwJSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA2MnB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5cclxuLm5hdmJhci12ZXJ0aWNhbCB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGF7XHJcbiAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zb2NpYWwtbmV0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjEwcHg7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICAgICAgZmlsbDojYmYyNzJkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5ub3RpY2UtYm9hcmR7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDNweDtcclxuICAgIGl7XHJcbiAgICAgICAgYmFja2dyb3VuZDojYmYyNzJkO1xyXG4gICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgICAgcGFkZGluZzoxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBzdmd7XHJcbiAgICAgICAgZmlsbDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5ub3RpZmljYXRpb24tcG9wdXAubW9kYWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4ubW9kYWwtY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzNlNjVhYztcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIC5tb2RhbC10aXRsZXtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICAgIGl7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgc3Zne1xyXG4gICAgICAgIGZpbGw6I2ZmZjtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICBmb250LXNpemU6MjhweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICAgIGJvcmRlcjoycHggc29saWQgI2ZmZjtcclxuICAgIH1cclxufX1cclxuXHJcblxyXG4ubG9naW4tZm9ybXtcclxuICAgIC5yb3d7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgfVxyXG5cdCY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY2hlY2stbGFiZWx7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgIH1cclxufVxyXG4ubmF2YmFyLW5hdi1saXN0e1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC5uYXYtaXRlbXtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgJi5hY3RpdmUsICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZjQ0MzM2O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICYucXVpY2stbGlua3tcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHN2Z3tcclxuICAgICAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICYuc29jaWFsLW1lZGlhe1xyXG4gICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyNHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjI0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4ubmV3c2xldHRlcntcclxuICAgIGJhY2tncm91bmQ6IzNlNjVhYztcclxuICAgIHBhZGRpbmc6NDBweCAwO1xyXG4gICAgLmZvcm0taW5saW5le1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDoxNXB4O1xyXG5cclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgYmFja2dyb3VuZDojMDAwO1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgICBwYWRkaW5nOjlweCAxNXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vdmVybGF5e1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDIyNSwgMjI1KTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogbWFrZSBtYWluLWF4aXMgdmVydGljYWwgKi9cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBhbGlnbiBpdGVtcyB2ZXJ0aWNhbGx5LCBpbiB0aGlzIGNhc2UgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIGFsaWduIGl0ZW1zIGhvcml6b250YWxseSwgaW4gdGhpcyBjYXNlICovXHJcbiAgICAmLmFjdGl2ZXtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgei1pbmRleDoxMDAwMDtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgb3BhY2l0eTogMC4xO1xyXG4gICAgfVxyXG4gICAgLmNsb3NlLW1lbnV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDoyNXB4O1xyXG4gICAgICAgIGxlZnQ6MjVweDtcclxuICAgIH1cclxuICAgICB1bC5tYWluLW5hdntcclxuICAgICAgICAgICAgZmxvYXQ6bm9uZTtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIsICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojZjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmdlbmVyYWwtaW5mby1uYXZ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOjEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cclxuICAgIC5sb2dpbi1mb3Jte1xyXG4gICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6bm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG5cdC5oZWFkZXItbmF2e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTk5OTk5OTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDcwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLmxvZ2lue1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI6Om5nLWRlZXAgLm1haW4tcGFnZSBuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgei1pbmRleDogOTtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbn1cbm5hdiBsaTpub3QoLmxvZ2luKSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5uYXYgLmxvZ28gaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogYXV0bztcbn1cbm5hdiAubG9naW4ge1xuICBtYXJnaW46IDAgMTVweDtcbn1cbm5hdiAubG9naW4gYSB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm5hdiAubG9naW4gYSBzdmcge1xuICBmaWxsOiAjYmYyNzJkO1xufVxubmF2IC5sb2dpbiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxubmF2IC5sb2dpbi5kcm9wcGluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm5hdiAubG9naW4uZHJvcHBpbmc6aG92ZXIgLmRyb3BwZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbm5hdiAubG9naW4gLmRyb3BwZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y0NDMzNjtcbiAgYm94LXNoYWRvdzogMXB4IDNweCA2cHggcmdiYSg3MiwgNzEsIDcxLCAwLjMpO1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjJweDtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDI2MHB4O1xufVxubmF2IC5sb2dpbiAuZHJvcHBlciBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxubmF2IC5sb2dpbiAuZHJvcHBlciBhOmhvdmVyIHtcbiAgY29sb3I6ICNjY2M7XG59XG5uYXYgLmxvZ2luIC5kcm9wcGVyIGE6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm5hdmJhci12ZXJ0aWNhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAzMDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5uYXZiYXItdmVydGljYWwgYSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5uYXZiYXItdmVydGljYWwgLnNvY2lhbC1uZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm5hdmJhci12ZXJ0aWNhbCAuc29jaWFsLW5ldCBsaSB7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5uYXZiYXItdmVydGljYWwgLnNvY2lhbC1uZXQgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5uYXZiYXItdmVydGljYWwgLnNvY2lhbC1uZXQgbGkgYSBpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuLm5hdmJhci12ZXJ0aWNhbCAuc29jaWFsLW5ldCBsaSBhIHNwYW4ge1xuICBtYXJnaW46IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm5hdmJhci12ZXJ0aWNhbCAuc29jaWFsLW5ldCBsaSBzdmcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIGZpbGw6ICNiZjI3MmQ7XG59XG5cbi5ub3RpY2UtYm9hcmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogM3B4O1xufVxuLm5vdGljZS1ib2FyZCBpIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5ub3RpY2UtYm9hcmQgYSB7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbn1cbi5ub3RpY2UtYm9hcmQgc3ZnIHtcbiAgZmlsbDogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjo6bmctZGVlcCAubm90aWZpY2F0aW9uLXBvcHVwLm1vZGFsIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5ub3RpZmljYXRpb24tcG9wdXAubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U2NWFjO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG46Om5nLWRlZXAgLm5vdGlmaWNhdGlvbi1wb3B1cC5tb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgY29sb3I6ICNmZmY7XG59XG46Om5nLWRlZXAgLm5vdGlmaWNhdGlvbi1wb3B1cC5tb2RhbCAubW9kYWwtY29udGVudCBpIHtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjo6bmctZGVlcCAubm90aWZpY2F0aW9uLXBvcHVwLm1vZGFsIC5tb2RhbC1jb250ZW50IHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG46Om5nLWRlZXAgLm5vdGlmaWNhdGlvbi1wb3B1cC5tb2RhbCAubW9kYWwtY29udGVudCBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5ub3RpZmljYXRpb24tcG9wdXAubW9kYWwgLm1vZGFsLWNvbnRlbnQgLmJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG59XG5cbi5sb2dpbi1mb3JtIC5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmxvZ2luLWZvcm06Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xufVxuLmxvZ2luLWZvcm0gLmZvcm0tY2hlY2stbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLm5hdmJhci1uYXYtbGlzdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIGEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gYS5hY3RpdmUsIC5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtLnF1aWNrLWxpbmsgYSB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0uc29jaWFsLW1lZGlhIHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubmV3c2xldHRlciB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG4gIHBhZGRpbmc6IDQwcHggMDtcbn1cbi5uZXdzbGV0dGVyIC5mb3JtLWlubGluZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm5ld3NsZXR0ZXIgbGFiZWwge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ubmV3c2xldHRlciAuYnRuIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ub3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNlMWUxZTE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLyogbWFrZSBtYWluLWF4aXMgdmVydGljYWwgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIGFsaWduIGl0ZW1zIHZlcnRpY2FsbHksIGluIHRoaXMgY2FzZSAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBhbGlnbiBpdGVtcyBob3Jpem9udGFsbHksIGluIHRoaXMgY2FzZSAqL1xufVxuLm92ZXJsYXkuYWN0aXZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTAwMDA7XG59XG4ub3ZlcmxheSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwLjE7XG59XG4ub3ZlcmxheSAuY2xvc2UtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNXB4O1xuICBsZWZ0OiAyNXB4O1xufVxuLm92ZXJsYXkgdWwubWFpbi1uYXYge1xuICBmbG9hdDogbm9uZTtcbn1cbi5vdmVybGF5IHVsLm1haW4tbmF2IGxpIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5vdmVybGF5IHVsLm1haW4tbmF2IGxpIGEge1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm92ZXJsYXkgdWwubWFpbi1uYXYgbGkgYTpob3ZlciwgLm92ZXJsYXkgdWwubWFpbi1uYXYgbGkgYS5hY3RpdmUge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cbi5vdmVybGF5IC5nZW5lcmFsLWluZm8tbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4ub3ZlcmxheSAuZ2VuZXJhbC1pbmZvLW5hdiBhIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLm92ZXJsYXkgLmdlbmVyYWwtaW5mby1uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmxvZ2luLWZvcm06Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIC5oZWFkZXItbmF2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5OTk5OTk7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiA3MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5oZWFkZXItbmF2IC5sb2dpbiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5oZWFkZXItbmF2IC5sb2dpbiBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */";
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
        }, //{name: 'ThePremiaStory'},
        {
          name: 'ThePremiaLeague'
        }, //{name: 'ThePremiaCulture'},
        //{name: 'ThePremiaEdge'},
        {
          name: 'ThePremiaCurriculum'
        }, {
          name: 'PremiaPartners'
        }, {
          name: 'ThePremiaEthos'
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
        value: function ngOnInit() {//this.modalService.open(this.content, { size: 'lg', windowClass: 'notification-popup' });
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


    __webpack_exports__["default"] = ".section-about, .section-nofify, .premian-league, .section-events, .section-spacing, .testimonials, .partner {\n  padding: 50px 0;\n}\n.section-about h1, .section-nofify h1, .premian-league h1, .section-events h1, .section-spacing h1, .testimonials h1, .partner h1 {\n  margin-bottom: 40px;\n  color: #3e65ac;\n}\n.heading-spacer h1 {\n  margin-bottom: 40px;\n  margin-top: 40px;\n  color: #3e65ac;\n}\n.section-info {\n  background: #3e65ac;\n  position: relative;\n  overflow: hidden;\n  padding: 50px 0;\n}\n.section-info img {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.4;\n}\n.section-info h1, .section-info p {\n  color: #fff;\n}\n.section-info svg {\n  fill: #fff;\n  margin-bottom: 10px;\n}\n.section-info .panel-container {\n  margin: 30px auto 0;\n  display: block;\n  text-align: center;\n}\n.v-align {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 15px 0;\n}\n.section-nofify {\n  padding: 0px;\n}\n.section-nofify .panel {\n  padding: 25px 15px;\n}\n.section-nofify .panel .list {\n  width: 70%;\n}\n.section-nofify .col:nth-child(1) {\n  background: url('wdu-1.png') no-repeat right bottom #3e65ac;\n}\n.section-nofify .col:nth-child(2) {\n  background: url('wdu-2.png') no-repeat right bottom #bf272d;\n}\n.section-nofify .col:nth-child(3) {\n  background: url('wdu-3.png') no-repeat right bottom #3e65ac;\n}\n.section-nofify h5 {\n  display: table;\n  color: #fff;\n}\n.section-nofify h5 span {\n  float: left;\n  position: relative;\n  padding: 0 50px 5px 0;\n}\n.section-nofify h5 span:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n.section-nofify p {\n  color: #fff;\n  white-space: pre-line;\n}\n.section-nofify ul.list li {\n  color: #fff;\n  padding: 0 0 15px 20px;\n  font-size: 14px;\n}\n.section-nofify ul.list li::before {\n  background: #fff;\n  width: 8px;\n  height: 8px;\n}\n.section-admission {\n  background: #ededed;\n}\n.section-admission .admission-flag {\n  position: relative;\n  text-align: center;\n  color: #fff;\n  padding: 25px 0;\n  height: 230px;\n}\n.section-admission .admission-flag .flag-pos {\n  content: \"\";\n  background: #bf272d;\n  position: absolute;\n  top: -25px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% + 70px);\n  z-index: 1;\n  box-shadow: 7px 5px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.section-admission .admission-flag .btn {\n  border: 1px solid #fff;\n  color: #fff;\n  background: none;\n}\n.section-admission p {\n  white-space: pre;\n  margin-top: 15px;\n}\n.section-admission .carousel .panel i {\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-admission .carousel .panel svg {\n  width: 75px;\n  height: 75px;\n}\n.section-admission .carousel .panel p {\n  font-size: 20px;\n  font-family: \"Lora\", serif;\n  text-align: center;\n}\n.section-curriculum ul.list li::before {\n  background: #bf272d;\n}\n.section-curriculum .row-f {\n  float: left;\n  width: 100%;\n}\n.section-curriculum .row-f .p0 {\n  padding: 0px;\n}\n.section-curriculum .section-curriculum-list {\n  margin-top: 15px;\n  position: relative;\n}\n.section-curriculum .section-curriculum-list .drop-down {\n  position: absolute;\n  right: 15px;\n  top: 10px;\n  width: auto;\n  transition: 0.1s;\n}\n.section-curriculum .section-curriculum-list.drop-down-active svg {\n  transform: rotate(-180deg);\n}\n.section-curriculum .section-curriculum-list.nav-pills li .nav-link {\n  color: #000;\n  padding-left: 50px;\n  position: relative;\n  margin-bottom: 30px;\n}\n.section-curriculum .section-curriculum-list.nav-pills li .nav-link.active {\n  background: none;\n  color: #3e65ac;\n}\n.section-curriculum .section-curriculum-list.nav-pills li .nav-link.active::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 17px;\n  width: 40px;\n  height: 2px;\n  background: #3e65ac;\n}\n.section-curriculum .curriculum-info {\n  margin-top: -50px;\n  background: #fff;\n  padding: 30px;\n  color: #000;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 16px;\n}\n.section-curriculum .curriculum-info h5 {\n  font-weight: bold;\n}\n.section-curriculum .curriculum-info .btn {\n  background: none;\n  border: 2px solid #000;\n  color: #000;\n  float: right;\n  font-family: \"Lora\", serif;\n}\n.section-curriculum .curriculum-info p {\n  font-size: 14px;\n}\n.section-curriculum .curriculum-info ul.list li {\n  color: #000;\n}\n.section-curriculum .text-highlighter:after {\n  content: \" \";\n  float: left;\n  width: 40px;\n  height: 2px;\n  background: #3e65ac;\n  margin: 10px 0px 0 -45px;\n}\n.admission-new {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.admission-new .icon-medium svg {\n  width: 80px;\n  height: 80px;\n  margin-top: 20px;\n}\n.admission-new p {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n.admission-new {\n  position: relative;\n}\n.admission-new:hover .more-viewer {\n  display: block;\n}\n.admission-new .more-viewer {\n  display: none;\n  position: absolute;\n  top: 0px;\n  left: 30px;\n  width: 90%;\n  transform: scale(1.1);\n  background: #fff;\n  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);\n  padding: 15px;\n  z-index: 10;\n}\n.admission-new .more-viewer p {\n  font-size: 12px;\n  white-space: pre-wrap;\n}\n.partner {\n  margin-bottom: 70px;\n  background: #efefef;\n  padding: 30px 0;\n}\n.partner p {\n  font-size: 16px;\n  color: #000;\n}\n.partner .panel {\n  height: 300px;\n  position: relative;\n  border: 1px solid rgba(62, 101, 172, 0.15);\n  box-shadow: 2px 1px 4px -2px #3e65ac;\n  background: #fff;\n  padding: 30px;\n}\n.partner .panel:hover .info-view {\n  display: block;\n}\n.partner .img-box {\n  height: 95px;\n  margin-bottom: 25px;\n}\n.partner .img-box img {\n  height: 100%;\n  width: auto;\n  margin: 0 auto;\n  display: block;\n}\n.partner .info-view {\n  padding: 20px;\n  display: none;\n  background: #3e65ac;\n  position: absolute;\n  top: -25px;\n  left: 0px;\n  width: 110%;\n  height: calc(100% + 50px);\n  z-index: 1;\n  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.partner .info-view .img-box {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-bottom: 0;\n  margin-bottom: 20px;\n  background: #fff;\n}\n.partner .info-view p, .partner .info-view h5, .partner .info-view a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.partner .info-view p {\n  font-size: 14px;\n  font-family: \"Quicksand\", sans-serif;\n  word-break: break-all;\n}\n.partner .info-view a {\n  word-break: break-all;\n}\n.partner .info-view h5 {\n  position: relative;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n.partner .info-view h5::after {\n  content: \"\";\n  background: rgba(255, 255, 255, 0.5);\n  height: 1px;\n  width: 50px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.testimonials {\n  padding: 0px;\n}\n.testimonials .col:nth-child(1) {\n  background: #3e65ac;\n}\n.testimonials .col:nth-child(2) {\n  background: #bf272d;\n}\n.testimonials .col:nth-child(3) {\n  background: #3e65ac;\n}\n.testimonials .img-circle {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  overflow: hidden;\n  margin: 0 auto 20px;\n}\n.testimonials .col {\n  padding: 20px 45px;\n}\n.testimonials .col:nth-child(2) {\n  background: #bf272d;\n}\n.testimonials .col p, .testimonials .col h6 {\n  color: #fff;\n  text-align: center;\n}\n.premian-league {\n  width: 100%;\n  position: relative;\n}\n.premian-league .col-premia {\n  position: relative;\n}\n.premian-league h6 {\n  position: absolute;\n  top: 100%;\n  left: 0px;\n  text-align: center;\n  width: 100%;\n  line-height: 22px;\n  font-weight: bold;\n  color: #bf272d;\n}\n.premian-league .row {\n  align-items: center;\n  position: relative;\n}\n.premian-league .row .concept {\n  position: absolute;\n  width: 100%;\n}\n.premian-league .row .asset {\n  position: absolute;\n}\n.premian-league .row .asset_2 {\n  background: url('asset-2.png') no-repeat right bottom;\n  left: 10%;\n  top: 20px;\n  width: 84px;\n  height: 84px;\n  -webkit-animation: spin 10s infinite;\n          animation: spin 10s infinite;\n}\n.premian-league .row .asset_3 {\n  background: url('asset-3.png') no-repeat right bottom;\n  left: 50px;\n  top: 10px;\n  width: 50px;\n  height: 32px;\n  -webkit-animation: mymove3 2s infinite;\n          animation: mymove3 2s infinite;\n}\n.premian-league .row .asset_4 {\n  background: url('asset-4.png') no-repeat right bottom;\n  left: 30%;\n  top: 55px;\n  width: 86px;\n  height: 58px;\n  -webkit-animation: mymove4 2s infinite;\n          animation: mymove4 2s infinite;\n}\n.premian-league .row .asset_5 {\n  background: url('asset-5.png') no-repeat right bottom;\n  left: 50%;\n  top: 70px;\n  width: 140px;\n  height: 65px;\n  -webkit-animation: mymove 2s infinite;\n          animation: mymove 2s infinite;\n}\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes mymove3 {\n  from {\n    top: 10px;\n  }\n  to {\n    top: 12px;\n  }\n}\n@keyframes mymove3 {\n  from {\n    top: 10px;\n  }\n  to {\n    top: 12px;\n  }\n}\n@-webkit-keyframes mymove4 {\n  from {\n    top: 55px;\n  }\n  to {\n    top: 60px;\n  }\n}\n@keyframes mymove4 {\n  from {\n    top: 55px;\n  }\n  to {\n    top: 60px;\n  }\n}\n@-webkit-keyframes mymove {\n  from {\n    top: 70px;\n  }\n  to {\n    top: 90px;\n  }\n}\n@keyframes mymove {\n  from {\n    top: 70px;\n  }\n  to {\n    top: 90px;\n  }\n}\n.premian-league .carousel {\n  border-radius: 50%;\n  border: 2px dashed #3e65ac;\n  overflow: hidden;\n  width: 100%;\n  height: 350px;\n  width: 350px;\n  background: #fff;\n  perspective: 1000px;\n}\n.premian-league .carousel .slick-slide {\n  transition: transform 1s;\n  transform-style: preserve-3d;\n  transform: rotateY(-180deg);\n}\n.premian-league .carousel .slick-slide.slick-active {\n  transform: rotateY(0deg);\n}\n.premian-league .carousel h6 {\n  position: absolute;\n  top: 100%;\n  left: 0px;\n  text-align: center;\n  width: 100%;\n  line-height: 22px;\n  font-weight: bold;\n  color: #bf272d;\n}\n.premian-league .col .img-circle {\n  border-radius: 50%;\n  border: 2px dashed #3e65ac;\n  width: 150px;\n  height: 150px;\n  overflow: hidden;\n  margin: 0 auto 20px;\n  padding: 3px;\n}\n.premian-league .col .img-circle img {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n}\n.premian-league .col:last-child .img-circle {\n  width: 350px;\n  height: 350px;\n}\n.clear-float {\n  clear: both;\n  float: none;\n}\n.main-banner {\n  height: 666px;\n  overflow: hidden;\n}\n.main-banner video {\n  width: 100%;\n}\n.the-premia-corner {\n  margin-bottom: 30px;\n}\n.the-premia-corner .col {\n  background: #3e65ac;\n  padding: 15px;\n  border-radius: 15px;\n}\n.the-premia-corner .col img {\n  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.5);\n  border-radius: 15px;\n}\n.the-premia-corner .col h4 {\n  color: #fff;\n  font-weight: bold;\n  margin-top: 15px;\n  cursor: pointer;\n}\n.newsletter {\n  background: #3e65ac;\n  padding: 40px 15px;\n}\n.newsletter .form-inline {\n  margin: 0 auto;\n}\n.newsletter label {\n  color: #000;\n  font-size: 20px;\n  margin-right: 15px;\n}\n.newsletter .btn {\n  background: #000;\n  color: #fff;\n  margin-left: 15px;\n  padding: 9px 15px;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n@media (max-width: 576px) {\n  .section-nofify .col {\n    background-size: 32% !important;\n  }\n\n  .section-admission .admission-flag .flag-pos {\n    top: 0;\n    left: 0;\n    height: auto;\n  }\n\n  .section-curriculum-list {\n    transition: 1s;\n    display: block;\n    background: #f3f3f3;\n  }\n  .section-curriculum-list a:not(.active) {\n    display: none;\n  }\n  .section-curriculum-list li {\n    width: 100%;\n  }\n  .section-curriculum-list li a {\n    margin: 10px 0 !important;\n  }\n  .section-curriculum-list.drop-down-active a:not(.active) {\n    display: block;\n  }\n\n  .section-curriculum .row-f {\n    width: auto;\n  }\n\n  .section-curriculum .curriculum-info {\n    margin-top: 0px;\n  }\n\n  .section-info {\n    margin-top: 30px;\n    padding-bottom: 0px;\n  }\n  .section-info img {\n    width: auto;\n    height: 100%;\n  }\n  .section-info .panel-container {\n    padding-bottom: 15px;\n    margin-bottom: 30px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  .section-info .panel-container:last-child {\n    margin-bottom: 0;\n    border-bottom: 0;\n  }\n  .section-info svg {\n    width: 75px;\n    height: 75px;\n    margin-bottom: 30px;\n  }\n  .section-info .panel {\n    text-align: center;\n  }\n\n  .section-events {\n    width: 100%;\n  }\n  .section-events .events-grid li {\n    width: 100%;\n  }\n  .section-events .events-grid li figure {\n    width: 100%;\n    margin: 0 0 15px 0;\n  }\n\n  .section-curriculum .row-f {\n    margin-bottom: 30px;\n  }\n\n  .main-banner {\n    height: auto;\n  }\n\n  .newsletter .btn {\n    margin: 15px 0 0 0;\n  }\n\n  .premian-league img {\n    width: 100%;\n  }\n\n  .row {\n    display: block;\n    margin-right: -15px;\n    margin-left: -15px;\n  }\n\n  .premian-league .last-circle {\n    top: 120%;\n  }\n  .premian-league .carousel {\n    height: 250px;\n    width: 250px;\n    top: 45px;\n  }\n  .premian-league .carousel h6 {\n    top: auto;\n    bottom: -70px;\n  }\n\n  .section-nofify, .testimonials {\n    background: none;\n  }\n  .section-nofify .col:nth-child(1), .section-nofify .col:nth-child(3), .testimonials .col:nth-child(1), .testimonials .col:nth-child(3) {\n    background-color: #3e65ac;\n  }\n\n  .the-premia-corner .col {\n    margin-bottom: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcYWNhZGVteS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtBQ0NEO0FEQUM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUNFRjtBREdDO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBRjtBRElBO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0REO0FERUM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNBRjtBREdDO0VBQ0MsV0FBQTtBQ0RGO0FER0M7RUFDQyxVQUFBO0VBQ0EsbUJBQUE7QUNERjtBREdDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNERjtBREtBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0ZEO0FES0E7RUFDQyxZQUFBO0FDRkQ7QURHQztFQUNDLGtCQUFBO0FDREY7QURFRTtFQUNDLFVBQUE7QUNBSDtBREtFO0VBQ0MsMkRBQUE7QUNISDtBREtFO0VBQ0MsMkRBQUE7QUNISDtBREtFO0VBQ0MsMkRBQUE7QUNISDtBRE1DO0VBQ0MsY0FBQTtFQUNBLFdBQUE7QUNKRjtBREtFO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNISDtBRElHO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRko7QURNQztFQUNDLFdBQUE7RUFDQSxxQkFBQTtBQ0pGO0FETUM7RUFDQyxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDSkY7QURLRTtFQUNDLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNISDtBRFFBO0VBQ0MsbUJBQUE7QUNMRDtBRE1DO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0pGO0FES0U7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLCtDQUFBO0FDSEg7QURLUTtFQUNMLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSEg7QURNQztFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRFFHO0VBQ0MsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ05KO0FEUUc7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ05KO0FEUUc7RUFDQyxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ05KO0FEZ0JJO0VBQ0MsbUJBQUE7QUNiTDtBRGtCQztFQUNDLFdBQUE7RUFDQSxXQUFBO0FDaEJGO0FEaUJFO0VBQ0MsWUFBQTtBQ2ZIO0FEb0JDO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtBQ2xCRjtBRG1CRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNqQkg7QURxQkc7RUFDQywwQkFBQTtBQ25CSjtBRHdCSTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN0Qkw7QUR1Qks7RUFDQyxnQkFBQTtFQUNBLGNBQUE7QUNyQk47QURzQk07RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNwQlA7QUQ2QkM7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUMzQkY7QUQ0QkU7RUFDQyxpQkFBQTtBQzFCSDtBRDRCRTtFQUNDLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDMUJIO0FENEJFO0VBQ0MsZUFBQTtBQzFCSDtBRDRCRTtFQUNDLFdBQUE7QUMxQkg7QURnQ0c7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQzlCSDtBRG1DQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDaENEO0FEbUNFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2pDSDtBRG9DQztFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDbENGO0FEc0NBO0VBQ0Msa0JBQUE7QUNuQ0Q7QURxQ0U7RUFDQSxjQUFBO0FDbkNGO0FEc0NBO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDRyxVQUFBO0VBQ0gscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhDQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNwQ0Q7QURxQ0M7RUFDQyxlQUFBO0VBQ0EscUJBQUE7QUNuQ0Y7QUQwQ0E7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ3ZDRDtBRHdDQztFQUNDLGVBQUE7RUFDQSxXQUFBO0FDdENGO0FEd0NDO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ3RDRjtBRHdDRztFQUNDLGNBQUE7QUN0Q0o7QUQyQ0M7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7QUN6Q0Y7QUQwQ0U7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDSSxjQUFBO0FDeENQO0FEMkNDO0VBQ0MsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsK0NBQUE7QUN6Q0Y7QUQwQ0U7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUN4Q0g7QUQwQ0U7RUFDQywrQkFBQTtBQ3hDSDtBRDBDRTtFQUNDLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FDeENIO0FEMkNFO0VBQ0MscUJBQUE7QUN6Q0g7QUQyQ0U7RUFDQyxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUN6Q0g7QUQwQ0c7RUFDQyxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUN4Q0o7QUQ4Q0E7RUFZQyxZQUFBO0FDdEREO0FENkNFO0VBQ0MsbUJBQUE7QUMzQ0g7QUQ2Q0U7RUFDQyxtQkFBQTtBQzNDSDtBRDZDRTtFQUNDLG1CQUFBO0FDM0NIO0FEOENDO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUM1Q0Y7QUQ4Q0M7RUFDQyxrQkFBQTtBQzVDRjtBRDZDRTtFQUNDLG1CQUFBO0FDM0NIO0FENkNFO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0FDM0NIO0FEZ0RBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0FDN0NEO0FEOENDO0VBQ0Msa0JBQUE7QUM1Q0Y7QUQ4Q0M7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUM1Q0Y7QUQrQ0M7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0FDN0NGO0FEOENFO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0FDNUNIO0FEOENFO0VBQ0Msa0JBQUE7QUM1Q0g7QUQ4Q0U7RUFDQyxxREFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDNUNIO0FEOENFO0VBQ0MscURBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQzVDSDtBRDhDRTtFQUNDLHFEQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUM1Q0g7QUQ4Q0U7RUFDQyxxREFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FDNUNIO0FEK0NFO0VBQ0M7SUFBSyx1QkFBQTtFQzVDTjtFRDZDQztJQUFPLHlCQUFBO0VDMUNSO0FBQ0Y7QUR1Q0U7RUFDQztJQUFLLHVCQUFBO0VDNUNOO0VENkNDO0lBQU8seUJBQUE7RUMxQ1I7QUFDRjtBRDJDRTtFQUNDO0lBQU0sU0FBQTtFQ3hDUDtFRHlDQztJQUFNLFNBQUE7RUN0Q1A7QUFDRjtBRG1DRTtFQUNDO0lBQU0sU0FBQTtFQ3hDUDtFRHlDQztJQUFNLFNBQUE7RUN0Q1A7QUFDRjtBRHVDSTtFQUNEO0lBQU0sU0FBQTtFQ3BDUDtFRHFDQztJQUFNLFNBQUE7RUNsQ1A7QUFDRjtBRCtCSTtFQUNEO0lBQU0sU0FBQTtFQ3BDUDtFRHFDQztJQUFNLFNBQUE7RUNsQ1A7QUFDRjtBRG1DRTtFQUNDO0lBQU0sU0FBQTtFQ2hDUDtFRGlDQztJQUFNLFNBQUE7RUM5QlA7QUFDRjtBRDJCRTtFQUNDO0lBQU0sU0FBQTtFQ2hDUDtFRGlDQztJQUFNLFNBQUE7RUM5QlA7QUFDRjtBRGdDQztFQUNDLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUM5QkY7QUQrQkU7RUFFQyx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUM5Qkg7QUQrQkc7RUFDQyx3QkFBQTtBQzdCSjtBRGdDRTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQzlCRjtBRGtDQztFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDaENIO0FEaUNHO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQy9CSjtBRG1DRztFQUNBLFlBQUE7RUFDQSxhQUFBO0FDakNIO0FEdUNBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNwQ0Q7QURzQ0E7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7QUNuQ0Q7QURvQ0M7RUFDQyxXQUFBO0FDbENGO0FEc0NBO0VBQ0MsbUJBQUE7QUNuQ0Q7QURvQ0M7RUFDQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ2xDRjtBRG1DRTtFQUNDLDBDQUFBO0VBQ0EsbUJBQUE7QUNqQ0g7QURvQ0U7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNsQ0g7QUR1Q0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDcENKO0FEcUNJO0VBQ0ksY0FBQTtBQ25DUjtBRHFDSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNuQ1I7QURzQ0k7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDcENSO0FEdUNBO0VBRUU7SUFDQywrQkFBQTtFQ3JDRDs7RUQwQ0M7SUFDQyxNQUFBO0lBQ0EsT0FBQTtJQUNBLFlBQUE7RUN2Q0Y7O0VENENEO0lBQ0MsY0FBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQ3pDQTtFRDBDQTtJQUNDLGFBQUE7RUN4Q0Q7RUQwQ0E7SUFDQyxXQUFBO0VDeENEO0VEeUNDO0lBQ0MseUJBQUE7RUN2Q0Y7RUQyQ0M7SUFDQyxjQUFBO0VDekNGOztFRGlEQTtJQUNDLFdBQUE7RUM5Q0Q7O0VEbURBO0lBQ0MsZUFBQTtFQ2hERDs7RURxREQ7SUFDQyxnQkFBQTtJQUNBLG1CQUFBO0VDbERBO0VEbURBO0lBQ0MsV0FBQTtJQUNBLFlBQUE7RUNqREQ7RURvREE7SUFDQyxvQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaURBQUE7RUNsREQ7RURtREM7SUFDQyxnQkFBQTtJQUNBLGdCQUFBO0VDakRGO0VEb0RBO0lBQ0MsV0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQ2xERDtFRG9EQztJQUNBLGtCQUFBO0VDbEREOztFRHNERDtJQUNDLFdBQUE7RUNuREE7RURxREM7SUFDQyxXQUFBO0VDbkRGO0VEb0RFO0lBQ0MsV0FBQTtJQUNBLGtCQUFBO0VDbERIOztFRHlEQTtJQUNDLG1CQUFBO0VDdEREOztFRDBERDtJQUNDLFlBQUE7RUN2REE7O0VEMERBO0lBQ0Msa0JBQUE7RUN2REQ7O0VEMkRBO0lBQ0MsV0FBQTtFQ3hERDs7RUQ0REQ7SUFDQyxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ3pEQTs7RUQ0REE7SUFDQyxTQUFBO0VDekREO0VEMkRBO0lBQ0MsYUFBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0VDekREO0VEMkRDO0lBQ0MsU0FBQTtJQUNBLGFBQUE7RUN6REY7O0VENkREO0lBQ0MsZ0JBQUE7RUMxREE7RUQ0REM7SUFDQyx5QkFBQTtFQzFERjs7RUQ4REQ7SUFDQyxtQkFBQTtFQzNEQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tYWJvdXQsIC5zZWN0aW9uLW5vZmlmeSwgLnByZW1pYW4tbGVhZ3VlLCAuc2VjdGlvbi1ldmVudHMsIC5zZWN0aW9uLXNwYWNpbmcsIC50ZXN0aW1vbmlhbHMsIC5wYXJ0bmVye1xyXG5cdHBhZGRpbmc6NTBweCAwO1xyXG5cdGgxe1xyXG5cdFx0bWFyZ2luLWJvdHRvbTo0MHB4O1xyXG5cdFx0Y29sb3I6IzNlNjVhYztcclxuXHR9XHJcbn1cclxuXHJcbi5oZWFkaW5nLXNwYWNlcntcclxuXHRoMXtcclxuXHRcdG1hcmdpbi1ib3R0b206NDBweDtcclxuXHRcdG1hcmdpbi10b3A6NDBweDtcclxuXHRcdGNvbG9yOiMzZTY1YWM7XHJcblx0fVxyXG59XHJcblxyXG4uc2VjdGlvbi1pbmZve1xyXG5cdGJhY2tncm91bmQ6IzNlNjVhYztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdHBhZGRpbmc6NTBweCAwO1xyXG5cdGltZ3tcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdG9wYWNpdHk6LjQ7XHJcblx0fVxyXG5cdFxyXG5cdGgxLCBwe1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHR9XHJcblx0c3Zne1xyXG5cdFx0ZmlsbDojZmZmO1xyXG5cdFx0bWFyZ2luLWJvdHRvbToxMHB4O1xyXG5cdH1cclxuXHQucGFuZWwtY29udGFpbmVye1xyXG5cdFx0bWFyZ2luOiAzMHB4IGF1dG8gMDtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxufVxyXG5cclxuLnYtYWxpZ257XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdHBhZGRpbmc6MTVweCAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi1ub2ZpZnl7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdC5wYW5lbHtcclxuXHRcdHBhZGRpbmc6MjVweCAxNXB4O1xyXG5cdFx0Lmxpc3R7XHJcblx0XHRcdHdpZHRoOjcwJTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LmNvbHtcclxuXHRcdCY6bnRoLWNoaWxkKDEpe1xyXG5cdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3dkdS0xLnBuZykgbm8tcmVwZWF0IHJpZ2h0IGJvdHRvbSAjM2U2NWFjO1xyXG5cdFx0fVxyXG5cdFx0JjpudGgtY2hpbGQoMil7XHJcblx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvd2R1LTIucG5nKSBuby1yZXBlYXQgcmlnaHQgYm90dG9tICNiZjI3MmQ7XHJcblx0XHR9XHJcblx0XHQmOm50aC1jaGlsZCgzKXtcclxuXHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy93ZHUtMy5wbmcpIG5vLXJlcGVhdCByaWdodCBib3R0b20gIzNlNjVhYztcclxuXHRcdH1cclxuXHR9XHJcblx0aDV7XHJcblx0XHRkaXNwbGF5OnRhYmxlO1xyXG5cdFx0Y29sb3I6I2ZmZjtcclxuXHRcdHNwYW57XHJcblx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRwYWRkaW5nOjAgNTBweCA1cHggMDtcclxuXHRcdFx0JjphZnRlcnsgXHJcblx0XHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdGJvdHRvbTowcHg7XHJcblx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRoZWlnaHQ6MXB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHJcblx0fVxyXG5cdHB7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0d2hpdGUtc3BhY2U6cHJlLWxpbmU7XHJcblx0fVxyXG5cdHVsLmxpc3QgbGl7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0cGFkZGluZzowIDAgMTVweCAyMHB4O1xyXG5cdFx0Zm9udC1zaXplOjE0cHg7XHJcblx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdFx0d2lkdGg6IDhweDtcclxuXHRcdFx0aGVpZ2h0OiA4cHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uc2VjdGlvbi1hZG1pc3Npb257XHJcblx0YmFja2dyb3VuZDojZWRlZGVkO1xyXG5cdC5hZG1pc3Npb24tZmxhZ3tcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0cGFkZGluZzoyNXB4IDA7XHJcblx0XHRoZWlnaHQ6IDIzMHB4O1xyXG5cdFx0LmZsYWctcG9ze1xyXG5cdFx0XHRjb250ZW50OicnO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOiAtMjVweDtcclxuXHRcdFx0bGVmdDogMHB4O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiBjYWxjKDEwMCUgKyA3MHB4KTtcclxuXHRcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0Ym94LXNoYWRvdzogN3B4IDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0XHR9XHJcbiAgICAgICAgLmJ0bntcclxuXHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB7XHJcblx0XHR3aGl0ZS1zcGFjZTogcHJlO1xyXG5cdFx0bWFyZ2luLXRvcDoxNXB4O1xyXG5cdH1cclxuXHQuY2Fyb3VzZWx7XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdGl7XHJcblx0XHRcdFx0bWFyZ2luOjAgYXV0bztcclxuXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN2Z3tcclxuXHRcdFx0XHR3aWR0aDo3NXB4O1xyXG5cdFx0XHRcdGhlaWdodDo3NXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdHB7XHJcblx0XHRcdFx0Zm9udC1zaXplOjIwcHg7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnNlY3Rpb24tY3VycmljdWx1bXtcclxuXHR1bHtcclxuXHRcdCYubGlzdCB7XHJcblx0XHRcdGxpe1xyXG5cdFx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LnJvdy1me1xyXG5cdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHQucDB7XHJcblx0XHRcdHBhZGRpbmc6MHB4O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHQuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3R7XHJcblx0XHRtYXJnaW4tdG9wOjE1cHg7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdC5kcm9wLWRvd257XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0cmlnaHQ6MTVweDtcclxuXHRcdFx0dG9wOjEwcHg7XHJcblx0XHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiAuMXM7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0Ji5kcm9wLWRvd24tYWN0aXZle1xyXG5cdFx0XHRzdmd7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCYubmF2LXBpbGxze1xyXG5cdFx0XHRsaXtcclxuXHRcdFx0XHQubmF2LWxpbmt7XHJcblx0XHRcdFx0XHRjb2xvcjogIzAwMDtcclxuXHRcdFx0XHRcdHBhZGRpbmctbGVmdDo1MHB4O1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTozMHB4O1xyXG5cdFx0XHRcdFx0Ji5hY3RpdmV7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6bm9uZTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICMzZTY1YWM7XHJcblx0XHRcdFx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0XHRcdFx0XHR0b3A6MTdweDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogNDBweDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDJweDtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjM2U2NWFjO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC5jdXJyaWN1bHVtLWluZm97XHJcblx0XHRtYXJnaW4tdG9wOi01MHB4O1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0cGFkZGluZzozMHB4O1xyXG5cdFx0Y29sb3I6IzAwMDtcclxuXHRcdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG5cdFx0Zm9udC1zaXplOjE2cHg7XHJcblx0XHRoNXtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdH1cclxuXHRcdC5idG57XHJcblx0XHRcdGJhY2tncm91bmQ6bm9uZTtcclxuXHRcdFx0Ym9yZGVyOjJweCBzb2xpZCAjMDAwO1xyXG5cdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHRmbG9hdDpyaWdodDtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuXHRcdH1cclxuXHRcdHB7XHJcblx0XHRcdGZvbnQtc2l6ZToxNHB4O1xyXG5cdFx0fVxyXG5cdFx0dWwubGlzdCBsaXtcclxuXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblxyXG5cdC50ZXh0LWhpZ2hsaWdodGVye1xyXG5cdFx0XHQmOmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDJweDtcclxuXHRcdFx0YmFja2dyb3VuZDogIzNlNjVhYztcclxuXHRcdFx0bWFyZ2luOiAxMHB4IDBweCAwIC00NXB4O1xyXG5cdFx0XHR9XHJcblx0XHR9IFxyXG59XHJcblxyXG4uYWRtaXNzaW9uLW5ld3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHJcblx0Lmljb24tbWVkaXVte1xyXG5cdFx0c3Zne1xyXG5cdFx0XHR3aWR0aDo4MHB4O1xyXG5cdFx0XHRoZWlnaHQ6ODBweDtcclxuXHRcdFx0bWFyZ2luLXRvcDoyMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwe1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0fVxyXG59XHJcblxyXG4uYWRtaXNzaW9uLW5ld3tcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Jjpob3ZlcntcclxuXHRcdC5tb3JlLXZpZXdlcntcclxuXHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0fVxyXG5cdH1cclxuLm1vcmUtdmlld2Vye1xyXG5cdGRpc3BsYXk6bm9uZTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOjBweDtcclxuXHRsZWZ0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcblx0YmFja2dyb3VuZDojZmZmO1xyXG5cdGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0cGFkZGluZzoxNXB4O1xyXG5cdHotaW5kZXg6MTA7XHJcblx0cHtcclxuXHRcdGZvbnQtc2l6ZToxMnB4O1xyXG5cdFx0d2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG5cdH1cclxufVxyXG5cclxufVxyXG5cclxuXHJcbi5wYXJ0bmVye1xyXG5cdG1hcmdpbi1ib3R0b206NzBweDtcclxuXHRiYWNrZ3JvdW5kOiNlZmVmZWY7XHJcblx0cGFkZGluZzozMHB4IDA7XHJcblx0cHtcclxuXHRcdGZvbnQtc2l6ZToxNnB4O1xyXG5cdFx0Y29sb3I6IzAwMDtcclxuXHR9XHJcblx0LnBhbmVse1xyXG5cdFx0aGVpZ2h0OjMwMHB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDYyLCAxMDEsIDE3MiwgLjE1KTtcclxuXHRcdGJveC1zaGFkb3c6IDJweCAxcHggNHB4IC0ycHggIzNlNjVhYztcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdHBhZGRpbmc6MzBweDtcclxuXHRcdCY6aG92ZXJ7XHJcblx0XHRcdC5pbmZvLXZpZXd7XHJcblx0XHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdC5pbWctYm94e1xyXG5cdFx0aGVpZ2h0Ojk1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOjI1cHg7XHJcblx0XHRpbWd7XHJcblx0XHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0XHR3aWR0aDphdXRvO1xyXG5cdFx0XHRtYXJnaW46MCBhdXRvO1xyXG5cdFx0ICAgICBkaXNwbGF5OmJsb2NrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuaW5mby12aWV3e1xyXG5cdFx0cGFkZGluZzoyMHB4O1xyXG5cdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0YmFja2dyb3VuZDojM2U2NWFjO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAtMjVweDtcclxuXHRcdGxlZnQ6IDBweDtcclxuXHRcdHdpZHRoOiAxMTAlO1xyXG5cdFx0aGVpZ2h0OmNhbGMoMTAwJSArIDUwcHgpO1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAycHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdFx0LmltZy1ib3h7XHJcblx0XHRcdHdpZHRoOjc1cHg7XHJcblx0XHRcdGhlaWdodDo3NXB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRcdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjA7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MjBweDtcclxuXHRcdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0fVxyXG5cdFx0cCxoNSxhe1xyXG5cdFx0XHRjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0XHR9XHJcblx0XHRwe1xyXG5cdFx0XHRmb250LXNpemU6MTRweDtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcblx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRhe1xyXG5cdFx0XHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcblx0XHR9XHJcblx0XHRoNXtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjEwcHg7XHJcblx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0YmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0XHRcdFx0aGVpZ2h0OjFweDtcclxuXHRcdFx0XHR3aWR0aDo1MHB4O1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRib3R0b206MDtcclxuXHRcdFx0XHRsZWZ0OjA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbHN7XHJcblx0LmNvbHtcclxuXHJcblx0XHQmOm50aC1jaGlsZCgxKXtcclxuXHRcdFx0YmFja2dyb3VuZDogIzNlNjVhYztcclxuXHRcdH1cclxuXHRcdCY6bnRoLWNoaWxkKDIpe1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHR9XHJcblx0XHQmOm50aC1jaGlsZCgzKXtcclxuXHRcdFx0YmFja2dyb3VuZDogIzNlNjVhYztcclxuXHRcdH19XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdC5pbWctY2lyY2xle1xyXG5cdFx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0XHR3aWR0aDoxNTBweDtcclxuXHRcdGhlaWdodDoxNTBweDtcclxuXHRcdG92ZXJmbG93OmhpZGRlbjtcclxuXHRcdG1hcmdpbjogMCBhdXRvIDIwcHg7XHJcblx0fVxyXG5cdC5jb2x7XHJcblx0XHRwYWRkaW5nOjIwcHggNDVweDtcclxuXHRcdCY6bnRoLWNoaWxkKDIpe1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHR9XHJcblx0XHRwLCBoNntcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ucHJlbWlhbi1sZWFndWV7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdC5jb2wtcHJlbWlhe1xyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0fVxyXG5cdGg2e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOjEwMCU7XHJcblx0XHRsZWZ0OjBweDtcclxuXHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjojYmYyNzJkO1xyXG5cdH1cclxuXHRcclxuXHQucm93e1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdC5jb25jZXB0e1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHR9XHJcblx0XHQuYXNzZXR7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdH1cclxuXHRcdC5hc3NldF8ye1xyXG5cdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fzc2V0LTIucG5nKSBuby1yZXBlYXQgcmlnaHQgYm90dG9tIDtcclxuXHRcdFx0bGVmdDoxMCU7XHJcblx0XHRcdHRvcDoyMHB4O1xyXG5cdFx0XHR3aWR0aDo4NHB4O1xyXG5cdFx0XHRoZWlnaHQ6ODRweDtcclxuXHRcdFx0YW5pbWF0aW9uOiBzcGluIDEwcyBpbmZpbml0ZTtcclxuXHRcdH1cclxuXHRcdC5hc3NldF8ze1xyXG5cdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fzc2V0LTMucG5nKSBuby1yZXBlYXQgcmlnaHQgYm90dG9tIDtcclxuXHRcdFx0bGVmdDo1MHB4O1xyXG5cdFx0XHR0b3A6MTBweDtcclxuXHRcdFx0d2lkdGg6NTBweDtcclxuXHRcdFx0aGVpZ2h0OjMycHg7XHJcblx0XHRcdGFuaW1hdGlvbjogbXltb3ZlMyAycyBpbmZpbml0ZTtcclxuXHRcdH1cclxuXHRcdC5hc3NldF80e1xyXG5cdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fzc2V0LTQucG5nKSBuby1yZXBlYXQgcmlnaHQgYm90dG9tIDtcclxuXHRcdFx0bGVmdDozMCU7XHJcblx0XHRcdHRvcDo1NXB4O1xyXG5cdFx0XHR3aWR0aDo4NnB4O1xyXG5cdFx0XHRoZWlnaHQ6NThweDtcclxuXHRcdFx0YW5pbWF0aW9uOiBteW1vdmU0IDJzIGluZmluaXRlO1xyXG5cdFx0fVxyXG5cdFx0LmFzc2V0XzV7XHJcblx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYXNzZXQtNS5wbmcpIG5vLXJlcGVhdCByaWdodCBib3R0b20gO1xyXG5cdFx0XHRsZWZ0OjUwJTtcclxuXHRcdFx0dG9wOjcwcHg7XHJcblx0XHRcdHdpZHRoOjE0MHB4O1xyXG5cdFx0XHRoZWlnaHQ6NjVweDtcclxuXHRcdFx0YW5pbWF0aW9uOiBteW1vdmUgMnMgaW5maW5pdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0QGtleWZyYW1lcyBzcGluIHtcclxuXHRcdFx0MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG5cdFx0XHQxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG5cdFx0fVxyXG5cdFx0QGtleWZyYW1lcyBteW1vdmUzIHtcclxuXHRcdFx0ZnJvbSB7dG9wOiAxMHB4O31cclxuXHRcdFx0dG8gICB7dG9wOiAxMnB4O31cclxuXHRcdCAgfVxyXG5cdFx0ICBAa2V5ZnJhbWVzIG15bW92ZTQge1xyXG5cdFx0XHRmcm9tIHt0b3A6IDU1cHg7fVxyXG5cdFx0XHR0byAgIHt0b3A6IDYwcHg7fVxyXG5cdFx0ICB9XHJcblx0XHRAa2V5ZnJhbWVzIG15bW92ZSB7XHJcblx0XHRcdGZyb20ge3RvcDogNzBweDt9XHJcblx0XHRcdHRvICAge3RvcDogOTBweDt9XHJcblx0XHQgIH1cclxuXHR9XHJcblx0LmNhcm91c2Vse1xyXG5cdFx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0XHRib3JkZXI6MnB4IGRhc2hlZCAjM2U2NWFjO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAzNTBweDtcclxuXHRcdHdpZHRoOiAzNTBweDtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcblx0XHQuc2xpY2stc2xpZGV7XHJcblx0XHRcdFxyXG5cdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcblx0XHRcdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxuXHRcdFx0Ji5zbGljay1hY3RpdmV7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRoNntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDoxMDAlO1xyXG5cdFx0bGVmdDowcHg7XHJcblx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRsaW5lLWhlaWdodDogMjJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0Y29sb3I6I2JmMjcyZDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNvbHtcclxuXHQuaW1nLWNpcmNsZXtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0XHRcdGJvcmRlcjoycHggZGFzaGVkICMzZTY1YWM7XHJcblx0XHRcdHdpZHRoOjE1MHB4O1xyXG5cdFx0XHRoZWlnaHQ6MTUwcHg7XHJcblx0XHRcdG92ZXJmbG93OmhpZGRlbjtcclxuXHRcdFx0bWFyZ2luOiAwIGF1dG8gMjBweDtcclxuXHRcdFx0cGFkZGluZzozcHg7XHJcblx0XHRcdGltZ3tcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQmOmxhc3QtY2hpbGR7XHJcblx0XHRcdC5pbWctY2lyY2xle1xyXG5cdFx0XHR3aWR0aDozNTBweDtcclxuXHRcdFx0aGVpZ2h0OjM1MHB4O31cclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG4uY2xlYXItZmxvYXR7XHJcblx0Y2xlYXI6Ym90aDtcclxuXHRmbG9hdDpub25lO1xyXG59XHJcbi5tYWluLWJhbm5lcntcclxuXHRoZWlnaHQ6IDY2NnB4O1x0XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdHZpZGVve1xyXG5cdFx0d2lkdGg6MTAwJSA7IFxyXG5cdH1cclxufVxyXG5cclxuLnRoZS1wcmVtaWEtY29ybmVye1xyXG5cdG1hcmdpbi1ib3R0b206MzBweDtcclxuXHQuY29se1xyXG5cdFx0YmFja2dyb3VuZDojM2U2NWFjO1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czoxNXB4O1xyXG5cdFx0aW1ne1xyXG5cdFx0XHRib3gtc2hhZG93OiAxcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6MTVweDtcclxuXHRcdH1cclxuXHJcblx0XHRoNHtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0bWFyZ2luLXRvcDoxNXB4O1xyXG5cdFx0XHRjdXJzb3I6cG9pbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5uZXdzbGV0dGVye1xyXG4gICAgYmFja2dyb3VuZDojM2U2NWFjO1xyXG4gICAgcGFkZGluZzo0MHB4IDE1cHg7XHJcbiAgICAuZm9ybS1pbmxpbmV7XHJcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcblxyXG4gICAgfVxyXG4gICAgLmJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kOiMwMDA7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6OXB4IDE1cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdC5zZWN0aW9uLW5vZmlmeSB7XHJcblx0XHQuY29se1xyXG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6MzIlICFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5zZWN0aW9uLWFkbWlzc2lvbntcclxuXHRcdC5hZG1pc3Npb24tZmxhZ3tcclxuXHRcdFx0LmZsYWctcG9ze1xyXG5cdFx0XHRcdHRvcDowO1xyXG5cdFx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0XHRoZWlnaHQ6YXV0bztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnNlY3Rpb24tY3VycmljdWx1bS1saXN0eyBcclxuXHRcdHRyYW5zaXRpb246IDFzO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcblx0XHRhOm5vdCguYWN0aXZlKXtcclxuXHRcdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0fVxyXG5cdFx0bGl7XHJcblx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdGF7XHJcblx0XHRcdFx0bWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ji5kcm9wLWRvd24tYWN0aXZle1xyXG5cdFx0XHRhOm5vdCguYWN0aXZlKXtcclxuXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRcclxuXHJcblx0LnNlY3Rpb24tY3VycmljdWx1bXtcclxuXHRcdC5yb3ctZntcclxuXHRcdFx0d2lkdGg6YXV0bztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5zZWN0aW9uLWN1cnJpY3VsdW0ge1xyXG5cdFx0LmN1cnJpY3VsdW0taW5mb3tcclxuXHRcdFx0bWFyZ2luLXRvcDowcHg7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnNlY3Rpb24taW5mb3tcclxuXHRcdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTowcHg7XHJcblx0XHRpbWd7XHJcblx0XHRcdHdpZHRoOmF1dG87XHJcblx0XHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5wYW5lbC1jb250YWluZXJ7XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOjE1cHg7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206MzBweDtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG5cdFx0XHQmOmxhc3QtY2hpbGR7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTowO1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206MDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0c3Zne1xyXG5cdFx0XHR3aWR0aDogNzVweDtcclxuXHRcdFx0aGVpZ2h0OiA3NXB4O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOjMwcHg7XHJcblx0XHR9XHJcblx0XHQgLnBhbmVse1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHQgfVxyXG5cdH1cclxuXHJcblx0LnNlY3Rpb24tZXZlbnRze1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdC5ldmVudHMtZ3JpZHtcclxuXHRcdFx0bGl7XHJcblx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRmaWd1cmV7XHJcblx0XHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdFx0bWFyZ2luOjAgMCAxNXB4IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuc2VjdGlvbi1jdXJyaWN1bHVtIHtcclxuXHRcdC5yb3ctZntcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTozMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Lm1haW4tYmFubmVye1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdH1cclxuXHQubmV3c2xldHRlciB7XHJcblx0XHQuYnRue1xyXG5cdFx0XHRtYXJnaW46MTVweCAwIDAgMDtcclxuXHRcdH1cclxuXHR9XHJcblx0LnByZW1pYW4tbGVhZ3Vle1xyXG5cdFx0aW1ne1xyXG5cdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnJvd3tcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuXHR9XHJcblx0LnByZW1pYW4tbGVhZ3Vle1xyXG5cdFx0Lmxhc3QtY2lyY2xle1xyXG5cdFx0XHR0b3A6MTIwJTtcclxuXHRcdH1cclxuXHRcdC5jYXJvdXNlbHtcclxuXHRcdFx0aGVpZ2h0OjI1MHB4O1xyXG5cdFx0XHR3aWR0aDogMjUwcHg7XHJcblx0XHRcdHRvcDo0NXB4O1xyXG5cdFx0XHRcclxuXHRcdFx0aDZ7XHJcblx0XHRcdFx0dG9wOmF1dG87XHJcblx0XHRcdFx0Ym90dG9tOi03MHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5zZWN0aW9uLW5vZmlmeSwgLnRlc3RpbW9uaWFsc3tcclxuXHRcdGJhY2tncm91bmQ6bm9uZTtcclxuXHRcdC5jb2x7XHJcblx0XHRcdCY6bnRoLWNoaWxkKDEpLCAmOm50aC1jaGlsZCgzKXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiMzZTY1YWM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LnRoZS1wcmVtaWEtY29ybmVyIC5jb2x7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdH1cclxufSIsIi5zZWN0aW9uLWFib3V0LCAuc2VjdGlvbi1ub2ZpZnksIC5wcmVtaWFuLWxlYWd1ZSwgLnNlY3Rpb24tZXZlbnRzLCAuc2VjdGlvbi1zcGFjaW5nLCAudGVzdGltb25pYWxzLCAucGFydG5lciB7XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cbi5zZWN0aW9uLWFib3V0IGgxLCAuc2VjdGlvbi1ub2ZpZnkgaDEsIC5wcmVtaWFuLWxlYWd1ZSBoMSwgLnNlY3Rpb24tZXZlbnRzIGgxLCAuc2VjdGlvbi1zcGFjaW5nIGgxLCAudGVzdGltb25pYWxzIGgxLCAucGFydG5lciBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGNvbG9yOiAjM2U2NWFjO1xufVxuXG4uaGVhZGluZy1zcGFjZXIgaDEge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBjb2xvcjogIzNlNjVhYztcbn1cblxuLnNlY3Rpb24taW5mbyB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuLnNlY3Rpb24taW5mbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5zZWN0aW9uLWluZm8gaDEsIC5zZWN0aW9uLWluZm8gcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlY3Rpb24taW5mbyBzdmcge1xuICBmaWxsOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnYtYWxpZ24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG5cbi5zZWN0aW9uLW5vZmlmeSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5zZWN0aW9uLW5vZmlmeSAucGFuZWwge1xuICBwYWRkaW5nOiAyNXB4IDE1cHg7XG59XG4uc2VjdGlvbi1ub2ZpZnkgLnBhbmVsIC5saXN0IHtcbiAgd2lkdGg6IDcwJTtcbn1cbi5zZWN0aW9uLW5vZmlmeSAuY29sOm50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3dkdS0xLnBuZykgbm8tcmVwZWF0IHJpZ2h0IGJvdHRvbSAjM2U2NWFjO1xufVxuLnNlY3Rpb24tbm9maWZ5IC5jb2w6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvd2R1LTIucG5nKSBuby1yZXBlYXQgcmlnaHQgYm90dG9tICNiZjI3MmQ7XG59XG4uc2VjdGlvbi1ub2ZpZnkgLmNvbDpudGgtY2hpbGQoMykge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy93ZHUtMy5wbmcpIG5vLXJlcGVhdCByaWdodCBib3R0b20gIzNlNjVhYztcbn1cbi5zZWN0aW9uLW5vZmlmeSBoNSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zZWN0aW9uLW5vZmlmeSBoNSBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCA1MHB4IDVweCAwO1xufVxuLnNlY3Rpb24tbm9maWZ5IGg1IHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VjdGlvbi1ub2ZpZnkgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG4uc2VjdGlvbi1ub2ZpZnkgdWwubGlzdCBsaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDAgMTVweCAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc2VjdGlvbi1ub2ZpZnkgdWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG59XG5cbi5zZWN0aW9uLWFkbWlzc2lvbiB7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmFkbWlzc2lvbi1mbGFnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyNXB4IDA7XG4gIGhlaWdodDogMjMwcHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmFkbWlzc2lvbi1mbGFnIC5mbGFnLXBvcyB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA3MHB4KTtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogN3B4IDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmFkbWlzc2lvbi1mbGFnIC5idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiBwIHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuY2Fyb3VzZWwgLnBhbmVsIGkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLWFkbWlzc2lvbiAuY2Fyb3VzZWwgLnBhbmVsIHN2ZyB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG4uc2VjdGlvbi1hZG1pc3Npb24gLmNhcm91c2VsIC5wYW5lbCBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uLWN1cnJpY3VsdW0gdWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLnJvdy1mIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAucm93LWYgLnAwIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5zZWN0aW9uLWN1cnJpY3VsdW0tbGlzdCAuZHJvcC1kb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLnNlY3Rpb24tY3VycmljdWx1bS1saXN0LmRyb3AtZG93bi1hY3RpdmUgc3ZnIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5zZWN0aW9uLWN1cnJpY3VsdW0tbGlzdC5uYXYtcGlsbHMgbGkgLm5hdi1saW5rIHtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3QubmF2LXBpbGxzIGxpIC5uYXYtbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzNlNjVhYztcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLnNlY3Rpb24tY3VycmljdWx1bS1saXN0Lm5hdi1waWxscyBsaSAubmF2LWxpbmsuYWN0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAxN3B4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLWluZm8ge1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2VjdGlvbi1jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLWluZm8gaDUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLmN1cnJpY3VsdW0taW5mbyAuYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgY29sb3I6ICMwMDA7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLmN1cnJpY3VsdW0taW5mbyBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNlY3Rpb24tY3VycmljdWx1bSAuY3VycmljdWx1bS1pbmZvIHVsLmxpc3QgbGkge1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWN1cnJpY3VsdW0gLnRleHQtaGlnaGxpZ2h0ZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgbWFyZ2luOiAxMHB4IDBweCAwIC00NXB4O1xufVxuXG4uYWRtaXNzaW9uLW5ldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFkbWlzc2lvbi1uZXcgLmljb24tbWVkaXVtIHN2ZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYWRtaXNzaW9uLW5ldyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWRtaXNzaW9uLW5ldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hZG1pc3Npb24tbmV3OmhvdmVyIC5tb3JlLXZpZXdlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFkbWlzc2lvbi1uZXcgLm1vcmUtdmlld2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMzBweDtcbiAgd2lkdGg6IDkwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwYWRkaW5nOiAxNXB4O1xuICB6LWluZGV4OiAxMDtcbn1cbi5hZG1pc3Npb24tbmV3IC5tb3JlLXZpZXdlciBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5wYXJ0bmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgcGFkZGluZzogMzBweCAwO1xufVxuLnBhcnRuZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDA7XG59XG4ucGFydG5lciAucGFuZWwge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjIsIDEwMSwgMTcyLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMnB4IDFweCA0cHggLTJweCAjM2U2NWFjO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLnBhcnRuZXIgLnBhbmVsOmhvdmVyIC5pbmZvLXZpZXcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wYXJ0bmVyIC5pbWctYm94IHtcbiAgaGVpZ2h0OiA5NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnBhcnRuZXIgLmltZy1ib3ggaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnBhcnRuZXIgLmluZm8tdmlldyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTEwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA1MHB4KTtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ucGFydG5lciAuaW5mby12aWV3IC5pbWctYm94IHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnBhcnRuZXIgLmluZm8tdmlldyBwLCAucGFydG5lciAuaW5mby12aWV3IGg1LCAucGFydG5lciAuaW5mby12aWV3IGEge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLnBhcnRuZXIgLmluZm8tdmlldyBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLnBhcnRuZXIgLmluZm8tdmlldyBhIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLnBhcnRuZXIgLmluZm8tdmlldyBoNSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucGFydG5lciAuaW5mby12aWV3IGg1OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cblxuLnRlc3RpbW9uaWFscyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi50ZXN0aW1vbmlhbHMgLmNvbDpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xufVxuLnRlc3RpbW9uaWFscyAuY29sOm50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4udGVzdGltb25pYWxzIC5jb2w6bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi50ZXN0aW1vbmlhbHMgLmltZy1jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbn1cbi50ZXN0aW1vbmlhbHMgLmNvbCB7XG4gIHBhZGRpbmc6IDIwcHggNDVweDtcbn1cbi50ZXN0aW1vbmlhbHMgLmNvbDpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuLnRlc3RpbW9uaWFscyAuY29sIHAsIC50ZXN0aW1vbmlhbHMgLmNvbCBoNiB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcmVtaWFuLWxlYWd1ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJlbWlhbi1sZWFndWUgLmNvbC1wcmVtaWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJlbWlhbi1sZWFndWUgaDYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYmYyNzJkO1xufVxuLnByZW1pYW4tbGVhZ3VlIC5yb3cge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJlbWlhbi1sZWFndWUgLnJvdyAuY29uY2VwdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJlbWlhbi1sZWFndWUgLnJvdyAuYXNzZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucHJlbWlhbi1sZWFndWUgLnJvdyAuYXNzZXRfMiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fzc2V0LTIucG5nKSBuby1yZXBlYXQgcmlnaHQgYm90dG9tO1xuICBsZWZ0OiAxMCU7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDg0cHg7XG4gIGhlaWdodDogODRweDtcbiAgYW5pbWF0aW9uOiBzcGluIDEwcyBpbmZpbml0ZTtcbn1cbi5wcmVtaWFuLWxlYWd1ZSAucm93IC5hc3NldF8zIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYXNzZXQtMy5wbmcpIG5vLXJlcGVhdCByaWdodCBib3R0b207XG4gIGxlZnQ6IDUwcHg7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzJweDtcbiAgYW5pbWF0aW9uOiBteW1vdmUzIDJzIGluZmluaXRlO1xufVxuLnByZW1pYW4tbGVhZ3VlIC5yb3cgLmFzc2V0XzQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9hc3NldC00LnBuZykgbm8tcmVwZWF0IHJpZ2h0IGJvdHRvbTtcbiAgbGVmdDogMzAlO1xuICB0b3A6IDU1cHg7XG4gIHdpZHRoOiA4NnB4O1xuICBoZWlnaHQ6IDU4cHg7XG4gIGFuaW1hdGlvbjogbXltb3ZlNCAycyBpbmZpbml0ZTtcbn1cbi5wcmVtaWFuLWxlYWd1ZSAucm93IC5hc3NldF81IHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYXNzZXQtNS5wbmcpIG5vLXJlcGVhdCByaWdodCBib3R0b207XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA3MHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNjVweDtcbiAgYW5pbWF0aW9uOiBteW1vdmUgMnMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBteW1vdmUzIHtcbiAgZnJvbSB7XG4gICAgdG9wOiAxMHB4O1xuICB9XG4gIHRvIHtcbiAgICB0b3A6IDEycHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbXltb3ZlNCB7XG4gIGZyb20ge1xuICAgIHRvcDogNTVweDtcbiAgfVxuICB0byB7XG4gICAgdG9wOiA2MHB4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIG15bW92ZSB7XG4gIGZyb20ge1xuICAgIHRvcDogNzBweDtcbiAgfVxuICB0byB7XG4gICAgdG9wOiA5MHB4O1xuICB9XG59XG4ucHJlbWlhbi1sZWFndWUgLmNhcm91c2VsIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzNlNjVhYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cbi5wcmVtaWFuLWxlYWd1ZSAuY2Fyb3VzZWwgLnNsaWNrLXNsaWRlIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG59XG4ucHJlbWlhbi1sZWFndWUgLmNhcm91c2VsIC5zbGljay1zbGlkZS5zbGljay1hY3RpdmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG59XG4ucHJlbWlhbi1sZWFndWUgLmNhcm91c2VsIGg2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2JmMjcyZDtcbn1cbi5wcmVtaWFuLWxlYWd1ZSAuY29sIC5pbWctY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzNlNjVhYztcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG4ucHJlbWlhbi1sZWFndWUgLmNvbCAuaW1nLWNpcmNsZSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJlbWlhbi1sZWFndWUgLmNvbDpsYXN0LWNoaWxkIC5pbWctY2lyY2xlIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xufVxuXG4uY2xlYXItZmxvYXQge1xuICBjbGVhcjogYm90aDtcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi5tYWluLWJhbm5lciB7XG4gIGhlaWdodDogNjY2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbi1iYW5uZXIgdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRoZS1wcmVtaWEtY29ybmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi50aGUtcHJlbWlhLWNvcm5lciAuY29sIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi50aGUtcHJlbWlhLWNvcm5lciAuY29sIGltZyB7XG4gIGJveC1zaGFkb3c6IDFweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi50aGUtcHJlbWlhLWNvcm5lciAuY29sIGg0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXdzbGV0dGVyIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgcGFkZGluZzogNDBweCAxNXB4O1xufVxuLm5ld3NsZXR0ZXIgLmZvcm0taW5saW5lIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubmV3c2xldHRlciBsYWJlbCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5uZXdzbGV0dGVyIC5idG4ge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmc6IDlweCAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VjdGlvbi1ub2ZpZnkgLmNvbCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMiUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zZWN0aW9uLWFkbWlzc2lvbiAuYWRtaXNzaW9uLWZsYWcgLmZsYWctcG9zIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuc2VjdGlvbi1jdXJyaWN1bHVtLWxpc3Qge1xuICAgIHRyYW5zaXRpb246IDFzO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIH1cbiAgLnNlY3Rpb24tY3VycmljdWx1bS1saXN0IGE6bm90KC5hY3RpdmUpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5zZWN0aW9uLWN1cnJpY3VsdW0tbGlzdCBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24tY3VycmljdWx1bS1saXN0IGxpIGEge1xuICAgIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb24tY3VycmljdWx1bS1saXN0LmRyb3AtZG93bi1hY3RpdmUgYTpub3QoLmFjdGl2ZSkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnNlY3Rpb24tY3VycmljdWx1bSAucm93LWYge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgLnNlY3Rpb24tY3VycmljdWx1bSAuY3VycmljdWx1bS1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cblxuICAuc2VjdGlvbi1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cbiAgLnNlY3Rpb24taW5mbyBpbWcge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1pbmZvIC5wYW5lbC1jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgfVxuICAuc2VjdGlvbi1pbmZvIC5wYW5lbC1jb250YWluZXI6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICB9XG4gIC5zZWN0aW9uLWluZm8gc3ZnIHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICAuc2VjdGlvbi1pbmZvIC5wYW5lbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnNlY3Rpb24tZXZlbnRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1ldmVudHMgLmV2ZW50cy1ncmlkIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1ldmVudHMgLmV2ZW50cy1ncmlkIGxpIGZpZ3VyZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMTVweCAwO1xuICB9XG5cbiAgLnNlY3Rpb24tY3VycmljdWx1bSAucm93LWYge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAubWFpbi1iYW5uZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5uZXdzbGV0dGVyIC5idG4ge1xuICAgIG1hcmdpbjogMTVweCAwIDAgMDtcbiAgfVxuXG4gIC5wcmVtaWFuLWxlYWd1ZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnJvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIH1cblxuICAucHJlbWlhbi1sZWFndWUgLmxhc3QtY2lyY2xlIHtcbiAgICB0b3A6IDEyMCU7XG4gIH1cbiAgLnByZW1pYW4tbGVhZ3VlIC5jYXJvdXNlbCB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgdG9wOiA0NXB4O1xuICB9XG4gIC5wcmVtaWFuLWxlYWd1ZSAuY2Fyb3VzZWwgaDYge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IC03MHB4O1xuICB9XG5cbiAgLnNlY3Rpb24tbm9maWZ5LCAudGVzdGltb25pYWxzIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG4gIC5zZWN0aW9uLW5vZmlmeSAuY29sOm50aC1jaGlsZCgxKSwgLnNlY3Rpb24tbm9maWZ5IC5jb2w6bnRoLWNoaWxkKDMpLCAudGVzdGltb25pYWxzIC5jb2w6bnRoLWNoaWxkKDEpLCAudGVzdGltb25pYWxzIC5jb2w6bnRoLWNoaWxkKDMpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U2NWFjO1xuICB9XG5cbiAgLnRoZS1wcmVtaWEtY29ybmVyIC5jb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn0iXX0= */";
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
      // admissionConfig = {
      //   slidesToShow: 3,
      //   slidesToScroll: 1,
      //   infinite: true,
      //   autoplay: true,
      //   autoplaySpeed: 1500,
      //   arrows: false,
      //   responsive: [
      //     {
      //       breakpoint: 768,
      //       settings: {
      //         arrows: true,
      //         centerMode: true,
      //         centerPadding: '40px',
      //         slidesToShow: 1
      //       }
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         arrows: true,
      //         centerMode: true,
      //         centerPadding: '40px',
      //         slidesToShow: 1
      //       }
      //     }
      //   ]
      // };
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
        this.isOpen = true;
        this.admission = [{
          icon: '#icon_reading',
          description: "Sculpting\nYoung\nLearners",
          description2: "For The Premia Academy, holistic education is part of our ethos. Our students are inspired to be well rounded, confident citizens who will be positive contributors to society. A literacy-based, integrated curriculum is offered to our students from preschool age to Grade 5, giving them a solid base of the capability to opt for any board of education from thereon. Social-emotional learning is an integral part of our curriculum. We have included Design Thinking sessions to encourage our children to think beyond and outside the box. Dance/exercise sessions help keep the body fit and flexible. Mindfulness activities during class are used to enhance their awareness of their environs."
        }, {
          icon: '#icon_education',
          description: "Imparting\nHolistic\nEducation",
          description2: "Having a progressive mindset is a must-have addition to any of our members and associates, given that we are so completely unsure of the world of tomorrow that our children are being nurtured towards. We, at The Premia Academy, are open and constantly on the lookout for new ways to channel and challenge our students so that we equip them to the best of our ability for the largely unknown future. Ensuring that our students are fully prepared to think on their feet and rise to the challenges of their tomorrow is something that we commit to being a positive part of. "
        }, {
          icon: '#icon_emoDev',
          description: "Nurturing a\nProgressive\nMindset",
          description2: "Robotics, Design Thinking, Coding, Music, Sports, Performing Arts, Life Skills, Entrepreneurship, Functional Languages, the best of curricula, and much more is what we currently use to equip our young learners to face the challenges of their times. The Premia Academy is not limited to these forms of learning alone. We are constantly in the quest of knowledge to enlarge the capabilities of our young wards and will keep no stone unturned in this deep search."
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
          desc: "Most of all \n      We love our children \n      We love learning \n      We love lifeOur Values:\n      ",
          moreInfo: [{
            info: 'Integrity & ingenuity '
          }, {
            info: 'Energetic & efficient '
          }, {
            info: 'Compassionate & competent '
          }, {
            info: 'Tolerant & tenacious '
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
          } else if (text === 'premiaCorner') {
            this.router.navigateByUrl('/ThePremiaCorner', {
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


    __webpack_exports__["default"] = ".premia-ethos .breadcum {\n  margin-left: 87px;\n  margin-bottom: 15px;\n}\n.premia-ethos .row {\n  position: relative;\n  margin-bottom: 40px;\n}\n.premia-ethos .white {\n  background: #fff;\n}\n.premia-ethos .ethos-col {\n  justify-content: center;\n  align-self: flex-end;\n}\n.premia-ethos .ethos-col:nth-child(3) .circle {\n  background: #f72541;\n}\n.premia-ethos .ethos-col:nth-child(3) .circle:after {\n  background: url('tail-2.png') no-repeat top center;\n}\n.premia-ethos .ethos-col:nth-child(4) .circle {\n  background: #22454f;\n}\n.premia-ethos .ethos-col:nth-child(4) .circle:after {\n  display: none;\n}\n.premia-ethos .circle {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  display: table;\n  background: #ff9f1c;\n  position: relative;\n}\n.premia-ethos .circle img {\n  width: 80%;\n  margin: 15px auto;\n  display: block;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.premia-ethos .circle img:hover {\n  transform: scale(1.1);\n}\n.premia-ethos .circle:after {\n  position: absolute;\n  left: 52px;\n  top: 71px;\n  content: \" \";\n  width: 160px;\n  height: 160px;\n  background: url('tail.png') no-repeat top center;\n  z-index: -1;\n  transform: rotate(7deg);\n}\n.premia-ethos .ethos-2 {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n.premia-ethos .ethos-2 .circle {\n  margin-left: 0px;\n  margin-top: -60px;\n}\n.premia-ethos .ethos-2 .circle:after {\n  top: -75px;\n  left: 56px;\n  transform: rotate(-7deg);\n}\n.premia-ethos .ethos-2 .ethos-col-2:nth-child(1) .circle, .premia-ethos .ethos-2 .ethos-col-2:nth-child(2) .circle {\n  background: #3ddbc7;\n}\n.premia-ethos .ethos-2 .ethos-col-2:nth-child(1) .circle:after, .premia-ethos .ethos-2 .ethos-col-2:nth-child(2) .circle:after {\n  background: url('tail-3.png') no-repeat top center;\n}\n.premia-ethos .ethos-2 .ethos-col-2:nth-child(3) .circle {\n  background: #88a2aa;\n}\n.premia-ethos .ethos-2 .ethos-col-2:nth-child(3) .circle:after {\n  background: url('tail-4.png') no-repeat top center;\n}\n.premia-ethos .ethos-col-2 h3, .premia-ethos .ethos-col h3 {\n  font-size: 16px;\n  white-space: pre-line;\n  visibility: hidden;\n}\n.premia-ethos .ethos-col-2:hover h3, .premia-ethos .ethos-col:hover h3 {\n  visibility: visible;\n}\n.premia-ethos .prodigy {\n  background: #3e65ac;\n  color: #fff;\n}\n.premia-ethos .prodigy .panel {\n  padding: 25px;\n}\n.premia-ethos .prodigy .panel svg {\n  margin-right: 20px;\n}\n.premia-ethos .prodigy:not(.active) {\n  display: none;\n}\n.premia-ethos .prodigy svg {\n  fill: #fff;\n}\n@media (max-width: 576px) {\n  .premia-ethos .row, .premia-ethos .row-f {\n    margin: 0 !important;\n  }\n  .premia-ethos .circle {\n    margin: 0 auto;\n  }\n  .premia-ethos .circle:after {\n    display: none;\n  }\n  .premia-ethos .ethos-col {\n    margin-bottom: 15px;\n  }\n  .premia-ethos .ethos-2 .circle {\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlbWlhZXRob3MvRDpcXGFjYWRlbXkvc3JjXFxhcHBcXHByZW1pYWV0aG9zXFxwcmVtaWFldGhvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJlbWlhZXRob3MvcHJlbWlhZXRob3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURFRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREdFO0VBQ0UsZ0JBQUE7QUNESjtBRElFO0VBQ0UsdUJBQUE7RUFDQSxvQkFBQTtBQ0ZKO0FES007RUFDRSxtQkFBQTtBQ0hSO0FES1E7RUFDRSxrREFBQTtBQ0hWO0FEU007RUFDRSxtQkFBQTtBQ1BSO0FEU1E7RUFDRSxhQUFBO0FDUFY7QURhRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1hKO0FEYUk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDWE47QURhTTtFQUNFLHFCQUFBO0FDWFI7QURlSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ2JOO0FEaUJFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNmSjtBRGlCSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNmTjtBRGlCTTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUNmUjtBRHVCUTtFQUNFLG1CQUFBO0FDckJWO0FEdUJVO0VBQ0Usa0RBQUE7QUNyQlo7QUQyQlE7RUFDRSxtQkFBQTtBQ3pCVjtBRDJCVTtFQUNFLGtEQUFBO0FDekJaO0FEaUNJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUMvQk47QURtQ1E7RUFDRSxtQkFBQTtBQ2pDVjtBRHNDRTtFQVlFLG1CQUFBO0VBQ0EsV0FBQTtBQy9DSjtBRG1DSTtFQUNFLGFBQUE7QUNqQ047QURrQ007RUFDRSxrQkFBQTtBQ2hDUjtBRG9DSTtFQUNFLGFBQUE7QUNsQ047QUR3Q0k7RUFDRSxVQUFBO0FDdENOO0FENkNFO0VBRUk7SUFDRSxvQkFBQTtFQzNDTjtFRDZDSTtJQUNFLGNBQUE7RUMzQ047RUQ0Q007SUFDQyxhQUFBO0VDMUNQO0VENkNJO0lBQ0UsbUJBQUE7RUMzQ047RUQ4Q007SUFDRSxjQUFBO0VDNUNSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcmVtaWFldGhvcy9wcmVtaWFldGhvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmVtaWEtZXRob3Mge1xyXG4gIC5icmVhZGN1bXtcclxuICAgIG1hcmdpbi1sZWZ0Ojg3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcblxyXG4gIC53aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLmV0aG9zLWNvbCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG5cclxuICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3MjU0MTtcclxuXHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy90YWlsLTIucG5nKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjQ1NGY7XHJcblxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jaXJjbGUge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOWYxYztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDUycHg7XHJcbiAgICAgIHRvcDogNzFweDtcclxuICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvdGFpbC5wbmcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZXRob3MtMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgIC5jaXJjbGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuXHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHRvcDogLTc1cHg7XHJcbiAgICAgICAgbGVmdDogNTZweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtN2RlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZXRob3MtY29sLTIge1xyXG5cclxuICAgICAgJjpudGgtY2hpbGQoMSksXHJcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAuY2lyY2xlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMzZGRiYzc7XHJcblxyXG4gICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3RhaWwtMy5wbmcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzg4YTJhYTtcclxuXHJcbiAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvdGFpbC00LnBuZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZXRob3MtY29sLTIsIC5ldGhvcy1jb2x7XHJcbiAgICBoM3tcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgIHZpc2liaWxpdHk6aGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBoM3tcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgLnByb2RpZ3kge1xyXG4gICAgLnBhbmVsIHtcclxuICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgc3Zne1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDoyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLmFjdGl2ZSkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGJhY2tncm91bmQ6IzNlNjVhYztcclxuICAgIGNvbG9yOiNmZmY7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgZmlsbDogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgLnByZW1pYS1ldGhvcyB7XHJcbiAgICAgIC5yb3csIC5yb3ctZntcclxuICAgICAgICBtYXJnaW46MCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5jaXJjbGV7XHJcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmV0aG9zLWNvbHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmV0aG9zLTJ7XHJcbiAgICAgICAgLmNpcmNsZXtcclxuICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgIH19XHJcbiAgICB9XHJcbiAgfVxyXG4iLCIucHJlbWlhLWV0aG9zIC5icmVhZGN1bSB7XG4gIG1hcmdpbi1sZWZ0OiA4N3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnByZW1pYS1ldGhvcyAucm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnByZW1pYS1ldGhvcyAud2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnByZW1pYS1ldGhvcyAuZXRob3MtY29sIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuLnByZW1pYS1ldGhvcyAuZXRob3MtY29sOm50aC1jaGlsZCgzKSAuY2lyY2xlIHtcbiAgYmFja2dyb3VuZDogI2Y3MjU0MTtcbn1cbi5wcmVtaWEtZXRob3MgLmV0aG9zLWNvbDpudGgtY2hpbGQoMykgLmNpcmNsZTphZnRlciB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3RhaWwtMi5wbmcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xufVxuLnByZW1pYS1ldGhvcyAuZXRob3MtY29sOm50aC1jaGlsZCg0KSAuY2lyY2xlIHtcbiAgYmFja2dyb3VuZDogIzIyNDU0Zjtcbn1cbi5wcmVtaWEtZXRob3MgLmV0aG9zLWNvbDpudGgtY2hpbGQoNCkgLmNpcmNsZTphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucHJlbWlhLWV0aG9zIC5jaXJjbGUge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogdGFibGU7XG4gIGJhY2tncm91bmQ6ICNmZjlmMWM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcmVtaWEtZXRob3MgLmNpcmNsZSBpbWcge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJlbWlhLWV0aG9zIC5jaXJjbGUgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLnByZW1pYS1ldGhvcyAuY2lyY2xlOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MnB4O1xuICB0b3A6IDcxcHg7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3RhaWwucG5nKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zZm9ybTogcm90YXRlKDdkZWcpO1xufVxuLnByZW1pYS1ldGhvcyAuZXRob3MtMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLnByZW1pYS1ldGhvcyAuZXRob3MtMiAuY2lyY2xlIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG59XG4ucHJlbWlhLWV0aG9zIC5ldGhvcy0yIC5jaXJjbGU6YWZ0ZXIge1xuICB0b3A6IC03NXB4O1xuICBsZWZ0OiA1NnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtN2RlZyk7XG59XG4ucHJlbWlhLWV0aG9zIC5ldGhvcy0yIC5ldGhvcy1jb2wtMjpudGgtY2hpbGQoMSkgLmNpcmNsZSwgLnByZW1pYS1ldGhvcyAuZXRob3MtMiAuZXRob3MtY29sLTI6bnRoLWNoaWxkKDIpIC5jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjM2RkYmM3O1xufVxuLnByZW1pYS1ldGhvcyAuZXRob3MtMiAuZXRob3MtY29sLTI6bnRoLWNoaWxkKDEpIC5jaXJjbGU6YWZ0ZXIsIC5wcmVtaWEtZXRob3MgLmV0aG9zLTIgLmV0aG9zLWNvbC0yOm50aC1jaGlsZCgyKSAuY2lyY2xlOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvdGFpbC0zLnBuZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG59XG4ucHJlbWlhLWV0aG9zIC5ldGhvcy0yIC5ldGhvcy1jb2wtMjpudGgtY2hpbGQoMykgLmNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICM4OGEyYWE7XG59XG4ucHJlbWlhLWV0aG9zIC5ldGhvcy0yIC5ldGhvcy1jb2wtMjpudGgtY2hpbGQoMykgLmNpcmNsZTphZnRlciB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3RhaWwtNC5wbmcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xufVxuLnByZW1pYS1ldGhvcyAuZXRob3MtY29sLTIgaDMsIC5wcmVtaWEtZXRob3MgLmV0aG9zLWNvbCBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ucHJlbWlhLWV0aG9zIC5ldGhvcy1jb2wtMjpob3ZlciBoMywgLnByZW1pYS1ldGhvcyAuZXRob3MtY29sOmhvdmVyIGgzIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5wcmVtaWEtZXRob3MgLnByb2RpZ3kge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wcmVtaWEtZXRob3MgLnByb2RpZ3kgLnBhbmVsIHtcbiAgcGFkZGluZzogMjVweDtcbn1cbi5wcmVtaWEtZXRob3MgLnByb2RpZ3kgLnBhbmVsIHN2ZyB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5wcmVtaWEtZXRob3MgLnByb2RpZ3k6bm90KC5hY3RpdmUpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5wcmVtaWEtZXRob3MgLnByb2RpZ3kgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wcmVtaWEtZXRob3MgLnJvdywgLnByZW1pYS1ldGhvcyAucm93LWYge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcmVtaWEtZXRob3MgLmNpcmNsZSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLnByZW1pYS1ldGhvcyAuY2lyY2xlOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcmVtaWEtZXRob3MgLmV0aG9zLWNvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAucHJlbWlhLWV0aG9zIC5ldGhvcy0yIC5jaXJjbGUge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59Il19 */";
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PremiaethosComponent = /*#__PURE__*/function () {
      function PremiaethosComponent(viewportScroller) {
        _classCallCheck(this, PremiaethosComponent);

        this.viewportScroller = viewportScroller;
        this.ehtos = [{
          title: "The safe and positive environment (Safety isn\u2019t expensive, it's priceless):"
        }, {
          title: "Growth & Innovation mindset (Empower & Inspire)-"
        }, {
          title: "Quest for \n    learning \n    (Lifelong \n    learners)"
        }, {
          title: "Integrity above all (Virtue in our veins)"
        }];
        this.ehtos2 = [{
          title: "Passion\n  (Finding\n  your inner\n  strength)"
        }, {
          title: "Purpose\n  (The Driving\n  force)"
        }, {
          title: "Prodigy\n  (Miracles\n  in making)"
        }];
        this.tab = 'tab1';
      }

      _createClass(PremiaethosComponent, [{
        key: "onClick",
        value: function onClick(check) {
          this.viewportScroller.scrollToAnchor(check);

          if (check == 1) {
            this.tab = 'tab1';
          } else if (check == 2) {
            this.tab = 'tab2';
          } else if (check == 3) {
            this.tab = 'tab3';
          } else if (check == 3) {
            this.tab = 'tab4';
          } else if (check == 4) {
            this.tab = 'tab4';
          } else if (check == 5) {
            this.tab = 'tab5';
          } else if (check == 6) {
            this.tab = 'tab6';
          } else if (check == 7) {
            this.tab = 'tab7';
          } else if (check == 8) {
            this.tab = 'tab8';
          } else {
            this.tab = 'tab9';
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PremiaethosComponent;
    }();

    PremiaethosComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"]
      }];
    };

    PremiaethosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
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


    __webpack_exports__["default"] = ".premia-partner {\n  background: #fff;\n  padding: 50px 0;\n}\n.premia-partner .highlighted {\n  color: #bf272d;\n}\n.premia-partner .breadcum {\n  margin-bottom: 40px;\n}\n.premia-partner .row-f {\n  margin: 0px 70px;\n}\n.premia-partner .row-f,\n.premia-partner .row {\n  position: relative;\n}\n.premia-partner .partner-panel .partner-grid {\n  border-radius: 15px;\n  border-bottom: 5px solid #cbccce;\n  margin-bottom: 40px;\n  overflow: hidden;\n  height: 155px;\n}\n.premia-partner .partner-panel .partner-grid .panel .left-panel::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 90px solid transparent;\n  border-bottom: 90px solid transparent;\n  top: 0;\n  right: -37px;\n  top: -14px;\n  z-index: -1;\n}\n.premia-partner .partner-panel .partner-grid .panel .left-panel, .premia-partner .partner-panel .partner-grid .panel .right-panel {\n  padding: 35px;\n  position: relative;\n  border-radius: 0 15px 15px;\n  height: 150px;\n}\n.premia-partner .partner-panel .partner-grid .panel .right-panel {\n  padding-left: 70px;\n}\n.premia-partner .partner-panel .partner-grid .panel h3 {\n  text-transform: uppercase;\n}\n.premia-partner .partner-panel .partner-grid .panel h3, .premia-partner .partner-panel .partner-grid .panel p {\n  color: #fff;\n  font-weight: bold;\n}\n.premia-partner .partner-panel .partner-grid .panel .number {\n  position: absolute;\n  top: 50%;\n  right: -50px;\n  margin-top: -25px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.65);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  font-weight: bold;\n}\n.premia-partner .partner-panel .partner-grid .panel .read-more {\n  position: absolute;\n  right: 0px;\n  top: 0;\n  display: flex;\n  height: 90%;\n  justify-content: center;\n  align-items: center;\n  -webkit-writing-mode: vertical-rl;\n          writing-mode: vertical-rl;\n  padding-left: 5px;\n  border-left: 1px solid #000;\n  color: #a7a7a7;\n  font-weight: bold;\n  cursor: pointer;\n}\n.premia-partner .partner-panel .partner-grid .panel .read-more:hover {\n  color: #3e65ac;\n}\n.premia-partner .partner-panel .partner-grid .panel .read-more .dropdown-toggle::after {\n  display: none;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(1) .left-panel {\n  background: #3e65ac;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(1) .left-panel::after {\n  border-left: 50px solid #3e65ac;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(2) .left-panel {\n  background: #bf272d;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(2) .left-panel::after {\n  border-left: 50px solid #bf272d;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(3) .left-panel {\n  background: #000;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(3) .left-panel::after {\n  border-left: 50px solid #000;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(4) .left-panel {\n  background: #3e65ac;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(4) .left-panel::after {\n  border-left: 50px solid #3e65ac;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(5) .left-panel {\n  background: #bf272d;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(5) .left-panel::after {\n  border-left: 50px solid #bf272d;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(6) .left-panel {\n  background: #000;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(6) .left-panel::after {\n  border-left: 50px solid #000;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(7) .left-panel {\n  background: #3e65ac;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(7) .left-panel::after {\n  border-left: 50px solid #3e65ac;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(8) .left-panel {\n  background: #bf272d;\n}\n.premia-partner .partner-panel .partner-grid:nth-child(8) .left-panel::after {\n  border-left: 50px solid #bf272d;\n}\n.grear-container {\n  height: 600px;\n}\n.gears {\n  position: absolute;\n}\n.gears img {\n  transition: all 0.2s;\n}\n.gears:hover img {\n  transform: scale(1.1);\n}\n.gears.gears-1 {\n  top: 157px;\n  left: 245px;\n  width: 175px;\n}\n.gears.gears-2 {\n  top: 105px;\n  left: 400px;\n  width: 180px;\n}\n.gears.gears-3 {\n  top: 270px;\n  left: 350px;\n  width: 215px;\n}\n.gears.gears-4 {\n  top: 291px;\n  right: 385px;\n  width: 165px;\n}\n.gears.gears-5 {\n  width: 185px;\n  top: 228px;\n  right: 210px;\n}\n.gears.gears-6 {\n  top: 35px;\n  right: 200px;\n  width: 170px;\n}\n.gears.gears-7 {\n  top: 123px;\n  right: 335px;\n  width: 165px;\n}\n.gears.gears-8 {\n  top: 155px;\n  right: 145px;\n  width: 100px;\n  height: 100px;\n}\n.gears.gears-9 {\n  top: 305px;\n  left: 215px;\n  width: 100px;\n}\n.gears.gears-10 {\n  top: 232px;\n  right: 485px;\n  width: 80px;\n}\n.gears i {\n  position: relative;\n}\n.gears i a {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n.dropdown-menu {\n  padding: 10px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.65);\n  white-space: pre-line;\n}\n.dropup:not(.read-more), .dropdown:not(.read-more) {\n  width: 50%;\n}\n@media (max-width: 576px) {\n  .grear-container {\n    display: none;\n  }\n\n  .premia-partner .partner-panel .row-f, .premia-partner .partner-panel .row {\n    margin: 0px !important;\n  }\n  .premia-partner .partner-panel .partner-grid {\n    height: auto;\n  }\n  .premia-partner .partner-panel .partner-grid .panel .read-more {\n    position: relative;\n    -webkit-writing-mode: horizontal-tb;\n            writing-mode: horizontal-tb;\n    border: none;\n    border-top: 1px solid #000;\n    height: auto;\n    margin-top: 30px;\n    padding-top: 15px;\n  }\n  .premia-partner .partner-panel .partner-grid .panel .right-panel {\n    padding: 0px !important;\n  }\n  .premia-partner .partner-panel .partner-grid .panel .left-panel {\n    padding: 15px;\n    height: auto;\n    margin-bottom: 30px;\n    border-radius: 0px;\n  }\n  .premia-partner .partner-panel .partner-grid .panel .left-panel::after, .premia-partner .partner-panel .partner-grid .panel .left-panel .number {\n    display: none !important;\n  }\n\n  .dropup:not(.read-more), .dropdown:not(.read-more) {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJtaWFwYXJ0bmVyL0Q6XFxhY2FkZW15L3NyY1xcYXBwXFxwcm1pYXBhcnRuZXJcXHBybWlhcGFydG5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJtaWFwYXJ0bmVyL3BybWlhcGFydG5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRCxjQUFBO0FDRUQ7QURBRTtFQUNDLG1CQUFBO0FDRUg7QURBRTtFQUNFLGdCQUFBO0FDRUo7QURDRTs7RUFFRSxrQkFBQTtBQ0NKO0FERUM7RUFDQyxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNBRjtBRElJO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0ZMO0FES0c7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7QUNISjtBREtHO0VBQ0Msa0JBQUE7QUNISjtBREtHO0VBQ0MseUJBQUE7QUNISjtBREtHO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0FDSEo7QURLRztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNISjtBREtHO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0hKO0FESU07RUFDQyxjQUFBO0FDRlA7QURJSTtFQUNDLGFBQUE7QUNGTDtBRE9HO0VBQ0UsbUJBQUE7QUNMTDtBRE1LO0VBQ0QsK0JBQUE7QUNKSjtBRFVHO0VBQ0UsbUJBQUE7QUNSTDtBRFNLO0VBQ0QsK0JBQUE7QUNQSjtBRFlHO0VBQ0UsZ0JBQUE7QUNWTDtBRFdLO0VBQ0QsNEJBQUE7QUNUSjtBRGNHO0VBQ0UsbUJBQUE7QUNaTDtBRGFLO0VBQ0QsK0JBQUE7QUNYSjtBRGdCRztFQUNFLG1CQUFBO0FDZEw7QURlSztFQUNELCtCQUFBO0FDYko7QURrQkc7RUFDRSxnQkFBQTtBQ2hCTDtBRGlCSztFQUNELDRCQUFBO0FDZko7QURvQkc7RUFDRSxtQkFBQTtBQ2xCTDtBRG1CSztFQUNELCtCQUFBO0FDakJKO0FEc0JHO0VBQ0UsbUJBQUE7QUNwQkw7QURxQks7RUFDRCwrQkFBQTtBQ25CSjtBRDBCQTtFQUNDLGFBQUE7QUN2QkQ7QUR5QkE7RUFDQyxrQkFBQTtBQ3RCRDtBRHVCQztFQUNDLG9CQUFBO0FDckJGO0FEd0JFO0VBQ0MscUJBQUE7QUN0Qkg7QUR5QkM7RUFDQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUN2QkY7QUR5QkM7RUFDQyxVQUFBO0VBQ0csV0FBQTtFQUNBLFlBQUE7QUN2Qkw7QUR5QkM7RUFDQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUN2QkY7QUR5QkM7RUFDQyxVQUFBO0VBQ0csWUFBQTtFQUNDLFlBQUE7QUN2Qk47QUR5QkM7RUFDQyxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUN2QkY7QUR5QkM7RUFDQyxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUN2QkY7QUR5QkM7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUN2QkY7QUR5QkM7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDdkJGO0FEeUJDO0VBQ0MsVUFBQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0FDdkJMO0FEeUJDO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDdkJGO0FEeUJDO0VBQ0Msa0JBQUE7QUN2QkY7QUR3QkU7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDdEJIO0FEMkJBO0VBQ0MsYUFBQTtFQUNBLDJDQUFBO0VBQ0EscUJBQUE7QUN4QkQ7QUQwQkE7RUFDQyxVQUFBO0FDdkJEO0FEMEJBO0VBQ0M7SUFDQyxhQUFBO0VDdkJBOztFRDJCQztJQUNDLHNCQUFBO0VDeEJGO0VEMEJDO0lBQ0MsWUFBQTtFQ3hCRjtFRDBCRztJQUNDLGtCQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VDeEJKO0VEMkJHO0lBQ0MsdUJBQUE7RUN6Qko7RUQ0Qkc7SUFDQyxhQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUMxQko7RUQyQkk7SUFDQyx3QkFBQTtFQ3pCTDs7RURrQ0Q7SUFDQyxXQUFBO0VDL0JBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm1pYXBhcnRuZXIvcHJtaWFwYXJ0bmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZW1pYS1wYXJ0bmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDUwcHggMDtcclxuICAuaGlnaGxpZ2h0ZWR7XHJcblx0Y29sb3I6I2JmMjcyZDtcclxufVxyXG4gIC5icmVhZGN1bXtcclxuXHQgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICB9XHJcbiAgLnJvdy1mIHtcclxuICAgIG1hcmdpbjogMHB4IDcwcHg7XHJcbiAgfVxyXG5cclxuICAucm93LWYsXHJcbiAgLnJvdyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5wYXJ0bmVyLXBhbmVsIHtcclxuXHQucGFydG5lci1ncmlkIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0XHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI2NiY2NjZTsgXHJcblx0XHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGhlaWdodDoxNTVweDtcclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0XHJcblx0XHRcdC5sZWZ0LXBhbmVse1xyXG5cdFx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHdpZHRoOiAwO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXRvcDogOTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDkwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHRyaWdodDogLTM3cHg7XHJcblx0XHRcdFx0XHR0b3A6IC0xNHB4O1xyXG5cdFx0XHRcdFx0ei1pbmRleDogLTFcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LmxlZnQtcGFuZWwsIC5yaWdodC1wYW5lbHtcclxuXHRcdFx0XHRwYWRkaW5nOjM1cHg7XHJcblx0XHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHg7XHJcblx0XHRcdFx0aGVpZ2h0OjE1MHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5yaWdodC1wYW5lbHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6NzBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRoM3tcclxuXHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGgzLCBwIHtcclxuXHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5udW1iZXJ7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDo1MCU7XHJcblx0XHRcdFx0cmlnaHQ6LTUwcHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDotMjVweDtcclxuXHRcdFx0XHR3aWR0aDo1MHB4O1xyXG5cdFx0XHRcdGhlaWdodDo1MHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdFx0XHRib3gtc2hhZG93OjFweCAxcHggMXB4IDFweCByZ2JhKDAsMCwwLC42NSk7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdH1cclxuXHRcdFx0LnJlYWQtbW9yZXtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0cmlnaHQ6MHB4O1xyXG5cdFx0XHRcdHRvcDowO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0aGVpZ2h0OiA5MCU7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHR3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogNXB4O1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjMDAwO1xyXG5cdFx0XHRcdGNvbG9yOiNhN2E3YTc7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0XHRjdXJzb3I6cG9pbnRlcjtcclxuXHRcdFx0XHRcdFx0Jjpob3ZlcntcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjojM2U2NWFjO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0LmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXJ7XHJcblx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQmOm50aC1jaGlsZCgxKSB7XHJcblx0XHRcdC5sZWZ0LXBhbmVsIHtcclxuXHRcdFx0ICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xyXG5cdFx0XHQgICY6OmFmdGVye1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkICMzZTY1YWM7XHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9XHJcblx0XHQgIH1cclxuXHQgIFxyXG5cdFx0ICAmOm50aC1jaGlsZCgyKSB7XHJcblx0XHRcdC5sZWZ0LXBhbmVsIHtcclxuXHRcdFx0ICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xyXG5cdFx0XHQgICY6OmFmdGVye1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkICNiZjI3MmQ7XHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMykge1xyXG5cdFx0XHQubGVmdC1wYW5lbCB7XHJcblx0XHRcdCAgYmFja2dyb3VuZDogIzAwMDtcclxuXHRcdFx0ICAmOjphZnRlcntcclxuXHRcdFx0XHRib3JkZXItbGVmdDogNTBweCBzb2xpZCAjMDAwO1xyXG5cdFx0XHQgIH1cclxuXHRcdFx0fVxyXG5cdFx0ICB9XHJcblx0XHQgICY6bnRoLWNoaWxkKDQpIHtcclxuXHRcdFx0LmxlZnQtcGFuZWwge1xyXG5cdFx0XHQgIGJhY2tncm91bmQ6ICMzZTY1YWM7XHJcblx0XHRcdCAgJjo6YWZ0ZXJ7XHJcblx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDUwcHggc29saWQgIzNlNjVhYztcclxuXHRcdFx0ICB9XHJcblx0XHRcdH1cclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCg1KSB7XHJcblx0XHRcdC5sZWZ0LXBhbmVsIHtcclxuXHRcdFx0ICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xyXG5cdFx0XHQgICY6OmFmdGVye1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkICNiZjI3MmQ7XHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoNikge1xyXG5cdFx0XHQubGVmdC1wYW5lbCB7XHJcblx0XHRcdCAgYmFja2dyb3VuZDogIzAwMDtcclxuXHRcdFx0ICAmOjphZnRlcntcclxuXHRcdFx0XHRib3JkZXItbGVmdDogNTBweCBzb2xpZCAjMDAwO1xyXG5cdFx0XHQgIH1cclxuXHRcdFx0fVxyXG5cdFx0ICB9XHJcblx0XHQgICY6bnRoLWNoaWxkKDcpIHtcclxuXHRcdFx0LmxlZnQtcGFuZWwge1xyXG5cdFx0XHQgIGJhY2tncm91bmQ6ICMzZTY1YWM7XHJcblx0XHRcdCAgJjo6YWZ0ZXJ7XHJcblx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDUwcHggc29saWQgIzNlNjVhYztcclxuXHRcdFx0ICB9XHJcblx0XHRcdH1cclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCg4KSB7XHJcblx0XHRcdC5sZWZ0LXBhbmVsIHtcclxuXHRcdFx0ICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xyXG5cdFx0XHQgICY6OmFmdGVye1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkICNiZjI3MmQ7XHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9XHJcblx0XHQgIH1cclxuXHQgIH1cclxuICB9XHJcbn1cclxuLmdyZWFyLWNvbnRhaW5lcntcclxuXHRoZWlnaHQ6NjAwcHg7XHJcbn1cclxuLmdlYXJze1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRpbWd7XHJcblx0XHR0cmFuc2l0aW9uOmFsbCAuMnM7XHJcblx0fVxyXG5cdCY6aG92ZXJ7XHJcblx0XHRpbWd7XHJcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Ji5nZWFycy0xe1xyXG5cdFx0dG9wOiAxNTdweDtcclxuXHRcdGxlZnQ6IDI0NXB4O1xyXG5cdFx0d2lkdGg6IDE3NXB4O1xyXG5cdH1cclxuXHQmLmdlYXJzLTJ7XHJcblx0XHR0b3A6IDEwNXB4O1xyXG4gICAgXHRsZWZ0OiA0MDBweDtcclxuICAgIFx0d2lkdGg6IDE4MHB4O1xyXG5cdH1cclxuXHQmLmdlYXJzLTN7XHJcblx0XHR0b3A6IDI3MHB4O1xyXG5cdFx0bGVmdDogMzUwcHg7XHJcblx0XHR3aWR0aDogMjE1cHg7XHJcblx0fVxyXG5cdCYuZ2VhcnMtNHtcclxuXHRcdHRvcDogMjkxcHg7XHJcbiAgICBcdHJpZ2h0OiAzODVweDtcclxuICAgXHQgXHR3aWR0aDogMTY1cHg7XHJcblx0fVxyXG5cdCYuZ2VhcnMtNXtcclxuXHRcdHdpZHRoOiAxODVweDtcclxuXHRcdHRvcDogMjI4cHg7XHJcblx0XHRyaWdodDogMjEwcHg7XHJcblx0fVxyXG5cdCYuZ2VhcnMtNntcclxuXHRcdHRvcDogMzVweDtcclxuXHRcdHJpZ2h0OiAyMDBweDtcclxuXHRcdHdpZHRoOiAxNzBweDtcclxuXHR9XHJcblx0Ji5nZWFycy03e1xyXG5cdFx0dG9wOiAxMjNweDtcclxuXHRcdHJpZ2h0OiAzMzVweDtcclxuXHRcdHdpZHRoOiAxNjVweDtcclxuXHR9XHJcblx0Ji5nZWFycy04e1xyXG5cdFx0dG9wOiAxNTVweDtcclxuXHRcdHJpZ2h0OiAxNDVweDtcclxuXHRcdHdpZHRoOiAxMDBweDtcclxuXHRcdGhlaWdodDogMTAwcHg7XHJcblx0fVxyXG5cdCYuZ2VhcnMtOXtcclxuXHRcdHRvcDogMzA1cHg7XHJcbiAgICBcdGxlZnQ6IDIxNXB4O1xyXG4gICAgXHR3aWR0aDogMTAwcHg7XHJcblx0fVxyXG5cdCYuZ2VhcnMtMTB7XHJcblx0XHR0b3A6IDIzMnB4O1xyXG5cdFx0cmlnaHQ6IDQ4NXB4O1xyXG5cdFx0d2lkdGg6IDgwcHg7XHJcblx0fVxyXG5cdGl7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdGF7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOjBweDtcclxuXHRcdFx0bGVmdDowcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudXtcclxuXHRwYWRkaW5nOjEwcHg7XHJcblx0Ym94LXNoYWRvdzoxcHggMXB4IDFweCByZ2JhKDAsMCwwLC42NSk7XHJcblx0d2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcbi5kcm9wdXA6bm90KC5yZWFkLW1vcmUpLCAuZHJvcGRvd246bm90KC5yZWFkLW1vcmUpe1xyXG5cdHdpZHRoOjUwJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQuZ3JlYXItY29udGFpbmVye1xyXG5cdFx0ZGlzcGxheTpub25lO1xyXG5cdH1cclxuXHQucHJlbWlhLXBhcnRuZXIge1xyXG5cdFx0LnBhcnRuZXItcGFuZWwge1xyXG5cdFx0XHQucm93LWYsIC5yb3d7XHJcblx0XHRcdFx0bWFyZ2luOjBweCAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5wYXJ0bmVyLWdyaWR7XHJcblx0XHRcdFx0aGVpZ2h0OmF1dG87XHJcblx0XHRcdFx0LnBhbmVse1xyXG5cdFx0XHRcdFx0LnJlYWQtbW9yZXtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHR3cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGI7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjpub25lO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItdG9wOjFweCBzb2xpZCAjMDAwO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6YXV0bztcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDozMHB4O1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDoxNXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yaWdodC1wYW5lbHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzowcHggIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQubGVmdC1wYW5lbHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6YXV0bztcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTozMHB4O1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOjBweDtcclxuXHRcdFx0XHRcdFx0Jjo6YWZ0ZXIsIC5udW1iZXJ7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmRyb3B1cDpub3QoLnJlYWQtbW9yZSksIC5kcm9wZG93bjpub3QoLnJlYWQtbW9yZSl7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxufVxyXG4iLCIucHJlbWlhLXBhcnRuZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG4ucHJlbWlhLXBhcnRuZXIgLmhpZ2hsaWdodGVkIHtcbiAgY29sb3I6ICNiZjI3MmQ7XG59XG4ucHJlbWlhLXBhcnRuZXIgLmJyZWFkY3VtIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5wcmVtaWEtcGFydG5lciAucm93LWYge1xuICBtYXJnaW46IDBweCA3MHB4O1xufVxuLnByZW1pYS1wYXJ0bmVyIC5yb3ctZixcbi5wcmVtaWEtcGFydG5lciAucm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2NiY2NjZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxNTVweDtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkIC5wYW5lbCAubGVmdC1wYW5lbDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDkwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDkwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC0zN3B4O1xuICB0b3A6IC0xNHB4O1xuICB6LWluZGV4OiAtMTtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkIC5wYW5lbCAubGVmdC1wYW5lbCwgLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQgLnBhbmVsIC5yaWdodC1wYW5lbCB7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZCAucGFuZWwgLnJpZ2h0LXBhbmVsIHtcbiAgcGFkZGluZy1sZWZ0OiA3MHB4O1xufVxuLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQgLnBhbmVsIGgzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkIC5wYW5lbCBoMywgLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQgLnBhbmVsIHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZCAucGFuZWwgLm51bWJlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAtNTBweDtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkIC5wYW5lbCAucmVhZC1tb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogOTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcbiAgY29sb3I6ICNhN2E3YTc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJlbWlhLXBhcnRuZXIgLnBhcnRuZXItcGFuZWwgLnBhcnRuZXItZ3JpZCAucGFuZWwgLnJlYWQtbW9yZTpob3ZlciB7XG4gIGNvbG9yOiAjM2U2NWFjO1xufVxuLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQgLnBhbmVsIC5yZWFkLW1vcmUgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQ6bnRoLWNoaWxkKDEpIC5sZWZ0LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCgxKSAubGVmdC1wYW5lbDo6YWZ0ZXIge1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCAjM2U2NWFjO1xufVxuLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQ6bnRoLWNoaWxkKDIpIC5sZWZ0LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCgyKSAubGVmdC1wYW5lbDo6YWZ0ZXIge1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCAjYmYyNzJkO1xufVxuLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQ6bnRoLWNoaWxkKDMpIC5sZWZ0LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCgzKSAubGVmdC1wYW5lbDo6YWZ0ZXIge1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCAjMDAwO1xufVxuLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQ6bnRoLWNoaWxkKDQpIC5sZWZ0LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCg0KSAubGVmdC1wYW5lbDo6YWZ0ZXIge1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCAjM2U2NWFjO1xufVxuLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQ6bnRoLWNoaWxkKDUpIC5sZWZ0LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCg1KSAubGVmdC1wYW5lbDo6YWZ0ZXIge1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCAjYmYyNzJkO1xufVxuLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQ6bnRoLWNoaWxkKDYpIC5sZWZ0LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCg2KSAubGVmdC1wYW5lbDo6YWZ0ZXIge1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCAjMDAwO1xufVxuLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQ6bnRoLWNoaWxkKDcpIC5sZWZ0LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCg3KSAubGVmdC1wYW5lbDo6YWZ0ZXIge1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCAjM2U2NWFjO1xufVxuLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQ6bnRoLWNoaWxkKDgpIC5sZWZ0LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkOm50aC1jaGlsZCg4KSAubGVmdC1wYW5lbDo6YWZ0ZXIge1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCAjYmYyNzJkO1xufVxuXG4uZ3JlYXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MDBweDtcbn1cblxuLmdlYXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmdlYXJzIGltZyB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLmdlYXJzOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5nZWFycy5nZWFycy0xIHtcbiAgdG9wOiAxNTdweDtcbiAgbGVmdDogMjQ1cHg7XG4gIHdpZHRoOiAxNzVweDtcbn1cbi5nZWFycy5nZWFycy0yIHtcbiAgdG9wOiAxMDVweDtcbiAgbGVmdDogNDAwcHg7XG4gIHdpZHRoOiAxODBweDtcbn1cbi5nZWFycy5nZWFycy0zIHtcbiAgdG9wOiAyNzBweDtcbiAgbGVmdDogMzUwcHg7XG4gIHdpZHRoOiAyMTVweDtcbn1cbi5nZWFycy5nZWFycy00IHtcbiAgdG9wOiAyOTFweDtcbiAgcmlnaHQ6IDM4NXB4O1xuICB3aWR0aDogMTY1cHg7XG59XG4uZ2VhcnMuZ2VhcnMtNSB7XG4gIHdpZHRoOiAxODVweDtcbiAgdG9wOiAyMjhweDtcbiAgcmlnaHQ6IDIxMHB4O1xufVxuLmdlYXJzLmdlYXJzLTYge1xuICB0b3A6IDM1cHg7XG4gIHJpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuLmdlYXJzLmdlYXJzLTcge1xuICB0b3A6IDEyM3B4O1xuICByaWdodDogMzM1cHg7XG4gIHdpZHRoOiAxNjVweDtcbn1cbi5nZWFycy5nZWFycy04IHtcbiAgdG9wOiAxNTVweDtcbiAgcmlnaHQ6IDE0NXB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uZ2VhcnMuZ2VhcnMtOSB7XG4gIHRvcDogMzA1cHg7XG4gIGxlZnQ6IDIxNXB4O1xuICB3aWR0aDogMTAwcHg7XG59XG4uZ2VhcnMuZ2VhcnMtMTAge1xuICB0b3A6IDIzMnB4O1xuICByaWdodDogNDg1cHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuLmdlYXJzIGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ2VhcnMgaSBhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cblxuLmRyb3B1cDpub3QoLnJlYWQtbW9yZSksIC5kcm9wZG93bjpub3QoLnJlYWQtbW9yZSkge1xuICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmdyZWFyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucm93LWYsIC5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucm93IHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQgLnBhbmVsIC5yZWFkLW1vcmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG4gIC5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkIC5wYW5lbCAucmlnaHQtcGFuZWwge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcmVtaWEtcGFydG5lciAucGFydG5lci1wYW5lbCAucGFydG5lci1ncmlkIC5wYW5lbCAubGVmdC1wYW5lbCB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIH1cbiAgLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQgLnBhbmVsIC5sZWZ0LXBhbmVsOjphZnRlciwgLnByZW1pYS1wYXJ0bmVyIC5wYXJ0bmVyLXBhbmVsIC5wYXJ0bmVyLWdyaWQgLnBhbmVsIC5sZWZ0LXBhbmVsIC5udW1iZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kcm9wdXA6bm90KC5yZWFkLW1vcmUpLCAuZHJvcGRvd246bm90KC5yZWFkLW1vcmUpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */";
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
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var PrmiapartnerComponent = /*#__PURE__*/function () {
      function PrmiapartnerComponent(viewportScroller) {
        _classCallCheck(this, PrmiapartnerComponent);

        this.viewportScroller = viewportScroller;
        this.partners = [{
          name: 'Creya',
          id: '1',
          title: 'Design Thinking',
          des: "Design thinking is implemented at Premia Academy during the child's growing years using the mantra-Define, Discover, Dream, Design, Deliver and Debrief!",
          des2: "This course utilizes the spatial and logical intelligences of a child in thinking critically, designing and innovating.\n    Our association with Creya ensures childrens ideas see the light of day and you never know, it might just be revolutionary!\n   "
        }, {
          name: 'Metamorphosis',
          id: '5',
          title: 'Design Thinking',
          des: "The A++ factors - Ask, Acquire, Analyze, Apply and Assess are the foundation of teaching Entrepreneurship at The Premia academy!",
          des2: "Our curricula for  entrepreneurship fostering leadership, risk taking, team building and being a responsible Global Citizen is a platform where children use their intelligence of logical, intra & interpersonal, spatial and naturalistic skills where by they ideate, incubate and create business models.\n    For this we have on board, @metamorphosisedu, who have customized a first of its kind curriculum to nurture entrepreneurial skill-set from  the early years.  "
        }, {
          name: "Furtados School\n    of Music",
          id: '4',
          title: 'Performing Art',
          des: "Did you know that music training helps develop\n    areas of reasoning and language training?\n    That apart, music brings the world together.",
          des2: "\u201CMusic is an inborn delight we all cherish; we just need a little push to realize this passion.\u201D -  Furtados School of Music\n    We couldn\u2019t have asked for a better collaborator whose mission aligns with ours to fine tune the passion in our PREMIA PRIDE!\n    "
        }, {
          name: 'Yardstick',
          id: '6',
          title: 'Experiential Learning',
          des: "Experiences stitched together is what makes the perfect garment we call life. - this thought has inspired us to collaborate with Yardstick",
          des2: "a globally acclaimed programme which provides tailor-made \u2018experience kits\u2019 for children where they use logical, spatial & naturalistic intelligences. We are glad to collaborate with a brand which, like us, believes in experiential learning"
        }, {
          name: "Scholastic\n    levelled\n    BookRoom",
          id: '7',
          title: 'Literacy Based Curriculum',
          des: "Our curriculum lays emphasis on reading as we believe the integences of language and the likes of speaking, creativity,story telling & writing skills are enhanced leading to better comprehension in all other areas of learning",
          des2: "True to Kate DiCamillo\u2019s words -Reading is not presented to our children as a chore, a duty. It is offered as a gift!.-And to our young readers and leaders, our PREMIA PRIDE, here\u2019s the best present we could find - @Scholastic levelled BookRoom 4.0 The largest collection of books across genres, subjects and interests with Over 6,200 texts, 240 books per level, 60 Short Reads per level, 24/7 digital access with the Leveled Bookroom Accelerator. Need we say more? Yes, we do, because we are the only school in Hyderabad to have a campus powered with the Scholastic material."
        }, {
          name: 'Swadhay',
          id: '_6',
          title: "Life Skills - Transforming\n    lives to transform the world",
          des: "Did you know that music training helps develop\n    areas of reasoning and language training?\n    That apart, music brings the world together.\n    Music represents culture. ",
          des2: "The Experiential Awakening is a powerful platform built to nurture values, to empower change, to inculcate new habits, and to initiate a culture of innovation \u2013 things that matter most in life. The Future is more than we think. It is not just about being at the helm of a career, it is about how your presence makes a difference to the world. "
        }, {
          name: 'Sports village',
          id: '3',
          title: '',
          des: "\u201CThe world is full of players, be a game changer!\u201D MS Dhoni At the Premia Academy sports is a wholesome lesson in time management \u2013",
          des2: "\u201CThe world is full of players, be a game changer!\u201D MS Dhoni\n    At the Premia Academy sports is a wholesome lesson in time management \u2013 self-discipline, focus, resilience, grit - as they provide the spirit of competition in our students driving them to go the extra mile in other areas of their learning. The sports program curated by our partner, Sports Village, facilitates students to respect authority and  rules while building self esteem & mental alertness to reduce stress & anxiety.\n   \u201CRun when you can, walk if you have to, crawl if you must, just never give up.\u201D Dean Karnazes. \u201CIt\u2019s hard to beat a person who never gives up!\u201D Babe Ruth\n   "
        }, {
          name: 'Avni  ',
          id: '2',
          title: "Synchronicity, Sagacity\n    and Sustainability",
          des: "\u201CThe greatest threat to our planet is the belief that someone else will save it.\u201D Robert Swan We will not let this be\u2026Everyone can do simple things to make a difference and every little bit counts - stella ma-Cartney",
          des2: "The program focuses on equipping children with the why and how of conscious living. \n    \u25CF\tSustainability - The Intent to ensure that our economic, environmental & social necessities doesn\u2019t compromise the hope of our  future generations living in harmony with nature.\n    \u25CF\tSagacity-The intellect to make the right choices that's good for Our people and for Our planet\n    \u25CF\tSynchronicity-The insight  to generate more equitable outcomes for people, place and the planet. A peaceful Co-existence is the only way forward!\n    "
        }];
      }

      _createClass(PrmiapartnerComponent, [{
        key: "onClick",
        value: function onClick(elementId) {
          this.viewportScroller.scrollToAnchor(elementId);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrmiapartnerComponent;
    }();

    PrmiapartnerComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"]
      }];
    };

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


    __webpack_exports__["default"] = ".section-study-culture .row-f, .section-study-culture .row {\n  margin: 70px 0 100px 70px;\n  position: relative;\n}\n.section-study-culture .curriculum {\n  margin-bottom: 0px;\n}\n.section-study-culture .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-study-culture .panel .panel-body {\n  width: 70%;\n}\n.section-study-culture .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n}\n.section-study-culture .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-study-culture .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-study-culture .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-study-culture h1 {\n  margin-bottom: 35px;\n  font-weight: bold;\n}\n.section-study-culture h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-study-culture h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-study-culture .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-study-culture ul.list {\n  margin: 0px;\n}\n.section-study-culture ul.list li {\n  color: #000;\n}\n.section-study-culture ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n.applycation-rules .btn {\n  width: 75%;\n  padding: 15px 0;\n  background: #bf272d;\n  font-family: \"Lora\", serif;\n  margin: 25px auto 0;\n  font-size: 24px;\n  display: block;\n}\n.edge-info {\n  margin: 0 !important;\n}\n.edge-info .plan-title {\n  margin: 30px 0 50px;\n}\n.edge-info .panel {\n  margin-bottom: 50px;\n}\n.edge-info .panel:nth-child(3n+1) {\n  background: #3e65ac;\n  color: #fff;\n}\n.edge-info .panel:nth-child(3n+2) {\n  background: #bf272d;\n  color: #fff;\n}\n.edge-info .panel:nth-child(3n+3) {\n  background: #000;\n  color: #fff;\n}\n.edge-info .panel.bg-white {\n  background: #fff;\n}\n.edge-info .panel.bg-white p {\n  color: #000;\n}\n.edge-info .panel:nth-child(1) span {\n  background: #3e65ac;\n}\n.edge-info .panel:nth-child(2) span {\n  background: #bf272d;\n}\n.edge-info .panel:nth-child(3) span {\n  background: #000;\n}\n.edge-info .panel:nth-child(4) span {\n  background: #3e65ac;\n}\n.edge-info .panel:nth-child(5) span {\n  background: #bf272d;\n}\n.edge-info .panel span {\n  z-index: 1;\n  position: relative;\n  padding-right: 15px;\n}\n.edge-info .heading-title {\n  position: relative;\n}\n.edge-info .heading-title::after {\n  content: \"\";\n  position: absolute;\n  top: 18px;\n  left: 0px;\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n.edge-info .extra-info {\n  position: relative;\n}\n.edge-info .extra-info .panel .panel-body {\n  width: 50%;\n}\n.section-explicit {\n  margin: 70px 0px;\n}\n.section-explicit .row {\n  margin-top: 40px;\n  margin-bottom: 0;\n}\n.section-explicit h1 {\n  font-weight: normal;\n}\n.section-explicit .bar {\n  position: relative;\n  padding-top: 15px;\n}\n.section-explicit .bar::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100px;\n  height: 5px;\n  background: #bf272d;\n}\n.section-explicit .explicit-sec {\n  padding: 0px;\n}\n.section-explicit .explicit-sec .add-info {\n  position: relative;\n  width: 20%;\n  padding: 0px;\n  display: flex;\n  margin: 0 2px;\n  height: 325px;\n}\n.section-explicit .explicit-sec .add-info:first-child .panel {\n  margin-left: 0px;\n}\n.section-explicit .admission-flag {\n  position: relative;\n  color: #fff;\n  padding: 25px 0;\n  height: 250px;\n}\n.section-explicit .admission-flag .btn {\n  border: 1px solid #fff;\n  color: #fff;\n  background: none;\n}\n.section-explicit p {\n  white-space: pre;\n  margin-top: 15px;\n}\n.section-explicit .panel {\n  margin-left: 5px;\n  padding: 15px;\n  width: 100%;\n  background: #fff;\n  transition: 0.5s;\n}\n.section-explicit .panel a {\n  color: #000;\n}\n.section-explicit .panel h1 {\n  font-family: \"Quicksand\", sans-serif;\n  color: #000;\n}\n.section-explicit .panel h6 {\n  font-family: \"Lora\", serif;\n  color: #000;\n}\n.section-explicit .panel i {\n  margin: 25px auto;\n  display: block;\n}\n.section-explicit .panel svg {\n  width: 75px;\n  height: 75px;\n}\n.section-explicit .panel:hover, .section-explicit .panel.active {\n  border: none;\n  border-radius: 0;\n  background: #bf272d;\n  transform: scale(1.1);\n  z-index: 1;\n  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);\n}\n.section-explicit .panel:hover .panel-heading .bar::after, .section-explicit .panel.active .panel-heading .bar::after {\n  background: #fff !important;\n}\n.section-explicit .panel:hover .panel-heading h6, .section-explicit .panel:hover .panel-heading p, .section-explicit .panel:hover .panel-heading h1, .section-explicit .panel:hover .panel-heading a, .section-explicit .panel.active .panel-heading h6, .section-explicit .panel.active .panel-heading p, .section-explicit .panel.active .panel-heading h1, .section-explicit .panel.active .panel-heading a {\n  color: #fff;\n}\n.section-explicit .panel:hover svg, .section-explicit .panel.active svg {\n  fill: #fff;\n}\n.tab-info {\n  background: #bf272d;\n  padding: 15px;\n  margin-top: 40px;\n  color: #fff;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlcHJlbWlhbmVkZ2UvRDpcXGFjYWRlbXkvc3JjXFxhcHBcXHRoZXByZW1pYW5lZGdlXFx0aGVwcmVtaWFuZWRnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlcHJlbWlhbmVkZ2UvdGhlcHJlbWlhbmVkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyx5QkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQztFQUNDLGtCQUFBO0FDQUY7QURFQztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtBQ0FGO0FEQ0U7RUFDQyxVQUFBO0FDQ0g7QURDRTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0g7QURBRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNFSjtBRERJO0VBQ0MsVUFBQTtFQUNBLHdCQUFBO0VBQ0csZUFBQTtBQ0dSO0FEQUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREdDO0VBQ0MsbUJBQUE7RUFDQSxpQkFBQTtBQ0RGO0FER0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0RGO0FERUU7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBSDtBREdDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNERjtBREdDO0VBQ0MsV0FBQTtBQ0RGO0FERUU7RUFDQyxXQUFBO0FDQUg7QURDRztFQUNDLG1CQUFBO0FDQ0o7QURLQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDRkQ7QURHQztFQUNDLHdCQUFBO0FDREY7QURNSTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNIUjtBRE9BO0VBQ0ksb0JBQUE7QUNKSjtBREtJO0VBQ0ksbUJBQUE7QUNIUjtBRGdCQTtFQUVJLG1CQUFBO0FDZko7QURNSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0pSO0FERUk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNBUjtBREZJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDSVI7QURJRztFQUNLLGdCQUFBO0FDRlI7QURHUTtFQUNJLFdBQUE7QUNEWjtBRE1RO0VBQ0ksbUJBQUE7QUNKWjtBRFFRO0VBQ0ksbUJBQUE7QUNOWjtBRFVRO0VBQ0ksZ0JBQUE7QUNSWjtBRGNRO0VBQ0ksbUJBQUE7QUNaWjtBRGVRO0VBQ0ksbUJBQUE7QUNiWjtBRGdCSTtFQUVJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDZlI7QURtQkk7RUFDSSxrQkFBQTtBQ2pCUjtBRG1CUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2pCWjtBRG9CQztFQUNDLGtCQUFBO0FDbEJGO0FEb0JHO0VBQ0MsVUFBQTtBQ2xCSjtBRHdCQTtFQUNDLGdCQUFBO0FDckJEO0FEc0JDO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtBQ3BCRjtBRHVCQztFQUNDLG1CQUFBO0FDckJGO0FEdUJDO0VBQ0Msa0JBQUE7RUFDQSxpQkFBQTtBQ3JCRjtBRHNCRTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ3BCSDtBRHdCQztFQUNDLFlBQUE7QUN0QkY7QUR3QkU7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDRyxhQUFBO0FDdEJOO0FEd0JJO0VBQ0MsZ0JBQUE7QUN0Qkw7QUQyQkM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ3pCRjtBRDBCRTtFQUNDLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDeEJIO0FEMkJDO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtBQ3pCRjtBRDJCRTtFQUNJLGdCQUFBO0VBQ0gsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDekJIO0FEMEJHO0VBQ0MsV0FBQTtBQ3hCSjtBRDBCRztFQUNDLG9DQUFBO0VBQ0EsV0FBQTtBQ3hCSjtBRDBCRztFQUNDLDBCQUFBO0VBQ0EsV0FBQTtBQ3hCSjtBRDBCRztFQUNDLGlCQUFBO0VBQ0EsY0FBQTtBQ3hCSjtBRDBCRztFQUNDLFdBQUE7RUFDQSxZQUFBO0FDeEJKO0FEMEJHO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtBQ3hCSjtBRDJCTTtFQUNDLDJCQUFBO0FDekJQO0FENEJLO0VBQ0MsV0FBQTtBQzFCTjtBRDZCSTtFQUNDLFVBQUE7QUMzQkw7QUQ0Q0E7RUFDQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUN6Q0Q7QUQ2Q0E7RUFFRTtJQUNDLGdCQUFBO0VDM0NEO0VENkNEO0lBQ0MsaUJBQUE7RUMzQ0E7RUQ2Q0Q7SUFDQyxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VDM0NBO0VENkNEO0lBQ0MsV0FBQTtFQzNDQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGhlcHJlbWlhbmVkZ2UvdGhlcHJlbWlhbmVkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdC5yb3ctZiwgLnJvd3tcclxuXHRcdG1hcmdpbjo3MHB4IDAgMTAwcHggNzBweCA7IFxyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQuY3VycmljdWx1bXtcclxuXHRcdG1hcmdpbi1ib3R0b206MHB4O1xyXG5cdH1cclxuXHQucGFuZWwge1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0cGFkZGluZzo1MHB4O1xyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdHdpZHRoOjcwJTtcclxuXHRcdH1cclxuXHRcdCYuc3RvcnktaW5mb3tcclxuXHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0LmZseWluZy1wbGFuZXtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0dG9wOjBweDtcclxuXHRcdFx0XHRzdmd7XHJcblx0XHRcdFx0XHRmaWxsOiAjZmZmO1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgXHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdHRvcDo1MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAzcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRoMXtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0aDJ7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmctYm90dG9tOjVweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0Y29udGVudDpcIiBcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206MDtcclxuXHRcdFx0bGVmdDowO1xyXG5cdFx0XHR3aWR0aDo1MHB4O1xyXG5cdFx0XHRoZWlnaHQ6MnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNmMGYwZjA7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OjA7XHJcblx0XHR0b3A6MDtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0fVxyXG5cdHVsLmxpc3R7XHJcblx0XHRtYXJnaW46MHB4O1xyXG5cdFx0bGl7XHJcblx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5tb3JlLWluZm97XHJcblx0ZmxvYXQ6bm9uZTtcclxuXHRjbGVhcjpib3RoO1xyXG5cdHB7XHJcblx0XHRtYXJnaW46NTBweCAwIDcwcHggNzVweCA7XHJcblx0fVxyXG59XHJcblxyXG4uYXBwbHljYXRpb24tcnVsZXN7XHJcbiAgICAuYnRue1xyXG4gICAgICAgIHdpZHRoOjc1JTtcclxuICAgICAgICBwYWRkaW5nOjE1cHggMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuICAgICAgICBtYXJnaW46MjVweCBhdXRvIDA7XHJcbiAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuLmVkZ2UtaW5mb3tcclxuICAgIG1hcmdpbjowICFpbXBvcnRhbnQ7XHJcbiAgICAucGxhbi10aXRsZXtcclxuICAgICAgICBtYXJnaW46MzBweCAwIDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJGJnLWNvbG9yczogIzNlNjVhYywgI2JmMjcyZCwgIzAwMDtcclxuQG1peGluIGFsdGVybmF0aW5nLWJhY2tncm91bmQge1xyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRiZy1jb2xvcnMpIHtcclxuICAgICY6bnRoLWNoaWxkKCN7bGVuZ3RoKCRiZy1jb2xvcnMpfW4rI3skaX0pIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAobnRoKCRiZy1jb2xvcnMsICRpKSk7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wYW5lbHtcclxuICAgIEBpbmNsdWRlIGFsdGVybmF0aW5nLWJhY2tncm91bmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgICYuYmctd2hpdGV7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDA7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgXHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNlNjVhYztcclxuICAgIH1cclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiZjI3MmQ7XHJcbiAgICB9IFxyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIH0gXHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdCY6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzZTY1YWM7XHJcblx0fX1cclxuXHQmOm50aC1jaGlsZCg1KXtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xyXG4gICAgfX1cclxuXHJcbiAgICBzcGFue1xyXG4gICAgICAgXHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuICAgIC5oZWFkaW5nLXRpdGxle1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgIFxyXG4gICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDoxOHB4O1xyXG4gICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblx0LmV4dHJhLWluZm97XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdC5wYW5lbC1ib2R5e1xyXG5cdFx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnNlY3Rpb24tZXhwbGljaXR7XHJcblx0bWFyZ2luOjcwcHggMHB4O1xyXG5cdC5yb3d7XHJcblx0XHRtYXJnaW4tdG9wOiA0MHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdGgxe1xyXG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHR9XHJcblx0LmJhcntcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZy10b3A6MTVweDtcclxuXHRcdCY6OmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDowcHg7XHJcblx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHR3aWR0aDoxMDBweDtcclxuXHRcdFx0aGVpZ2h0OjVweDtcclxuXHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmV4cGxpY2l0LXNlY3tcclxuXHRcdHBhZGRpbmc6MHB4O1xyXG5cdFx0XHJcblx0XHQuYWRkLWluZm97XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0d2lkdGg6MjAlO1xyXG5cdFx0XHRwYWRkaW5nOjBweDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0bWFyZ2luOiAwIDJweDtcclxuICAgIFx0XHRoZWlnaHQ6IDMyNXB4O1xyXG5cdFx0XHQmOmZpcnN0LWNoaWxke1xyXG5cdFx0XHRcdC5wYW5lbHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OjBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LmFkbWlzc2lvbi1mbGFne1xyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0cGFkZGluZzoyNXB4IDA7XHJcblx0XHRoZWlnaHQ6MjUwcHg7XHJcblx0XHQuYnRue1xyXG5cdFx0XHRib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcblx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdGJhY2tncm91bmQ6bm9uZTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHtcclxuXHRcdHdoaXRlLXNwYWNlOiBwcmU7XHJcblx0XHRtYXJnaW4tdG9wOjE1cHg7XHJcblx0fVxyXG5cdFx0LnBhbmVse1xyXG5cdFx0ICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0XHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiAuNXM7XHJcblx0XHRcdGF7XHJcblx0XHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRoMXtcclxuXHRcdFx0XHRmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcclxuXHRcdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGg2e1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcblx0XHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpe1xyXG5cdFx0XHRcdG1hcmdpbjogMjVweCBhdXRvO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN2Z3tcclxuXHRcdFx0XHR3aWR0aDo3NXB4O1xyXG5cdFx0XHRcdGhlaWdodDo3NXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdCY6aG92ZXIsICYuYWN0aXZle1xyXG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcblx0XHRcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0XHRib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHRcdFx0XHQucGFuZWwtaGVhZGluZ3tcclxuXHRcdFx0XHRcdC5iYXJ7XHJcblx0XHRcdFx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aDYsIHAsIGgxLCBhe1xyXG5cdFx0XHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzdmd7XHJcblx0XHRcdFx0XHRmaWxsOiNmZmY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQvLyBcdCY6OmFmdGVye1xyXG5cdFx0XHQvLyBcdFx0Y29udGVudDonJztcclxuXHRcdFx0Ly8gXHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0Ly8gXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0Ly8gXHRcdHRvcDogMHB4O1xyXG5cdFx0XHQvLyBcdFx0bGVmdDogMHB4O1xyXG5cdFx0XHQvLyBcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdC8vIFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdC8vIFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHQvLyBcdFx0Ym94LXNoYWRvdzogMHB4IDJweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0XHRcdC8vIH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG59XHJcblxyXG4udGFiLWluZm97XHJcblx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdHBhZGRpbmc6MTVweDtcclxuXHRtYXJnaW4tdG9wOiA0MHB4O1xyXG5cdGNvbG9yOiNmZmY7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdC5zZWN0aW9uLXN0dWR5LWN1bHR1cmV7XHJcblx0XHQucm93LWYsIC5yb3csIGgxe1xyXG5cdFx0XHRtYXJnaW4tbGVmdDowcHg7IFxyXG5cdH1cclxuXHQuYnJlYWRjdW17XHJcblx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwYWRkaW5nOjE1cHg7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcblx0LnBhbmVsLWJvZHl7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxufVxyXG59IiwiLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LWYsIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdyB7XG4gIG1hcmdpbjogNzBweCAwIDEwMHB4IDcwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmN1cnJpY3VsdW0ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIHdpZHRoOiA3MCU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC5zdG9yeS1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsLnN0b3J5LWluZm8gLmZseWluZy1wbGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsLnN0b3J5LWluZm8gLmZseWluZy1wbGFuZSBzdmcge1xuICBmaWxsOiAjZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnBhbmVsLnN0b3J5LWluZm86OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogNTBweDtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmltZy1mbGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSB1bC5saXN0IHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIHVsLmxpc3QgbGkge1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgdWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cblxuLm1vcmUtaW5mbyB7XG4gIGZsb2F0OiBub25lO1xuICBjbGVhcjogYm90aDtcbn1cbi5tb3JlLWluZm8gcCB7XG4gIG1hcmdpbjogNTBweCAwIDcwcHggNzVweDtcbn1cblxuLmFwcGx5Y2F0aW9uLXJ1bGVzIC5idG4ge1xuICB3aWR0aDogNzUlO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIG1hcmdpbjogMjVweCBhdXRvIDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5lZGdlLWluZm8ge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbi5lZGdlLWluZm8gLnBsYW4tdGl0bGUge1xuICBtYXJnaW46IDMwcHggMCA1MHB4O1xufVxuLmVkZ2UtaW5mbyAucGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmVkZ2UtaW5mbyAucGFuZWw6bnRoLWNoaWxkKDNuKzEpIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbiAgY29sb3I6ICNmZmY7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoM24rMikge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgzbiszKSB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmVkZ2UtaW5mbyAucGFuZWwuYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmVkZ2UtaW5mbyAucGFuZWwuYmctd2hpdGUgcCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmVkZ2UtaW5mbyAucGFuZWw6bnRoLWNoaWxkKDEpIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xufVxuLmVkZ2UtaW5mbyAucGFuZWw6bnRoLWNoaWxkKDIpIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuLmVkZ2UtaW5mbyAucGFuZWw6bnRoLWNoaWxkKDMpIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuLmVkZ2UtaW5mbyAucGFuZWw6bnRoLWNoaWxkKDQpIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xufVxuLmVkZ2UtaW5mbyAucGFuZWw6bnRoLWNoaWxkKDUpIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuLmVkZ2UtaW5mbyAucGFuZWwgc3BhbiB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi5lZGdlLWluZm8gLmhlYWRpbmctdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZWRnZS1pbmZvIC5oZWFkaW5nLXRpdGxlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5lZGdlLWluZm8gLmV4dHJhLWluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZWRnZS1pbmZvIC5leHRyYS1pbmZvIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5zZWN0aW9uLWV4cGxpY2l0IHtcbiAgbWFyZ2luOiA3MHB4IDBweDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5yb3cge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgaDEge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLmJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAuYmFyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5leHBsaWNpdC1zZWMge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAuZXhwbGljaXQtc2VjIC5hZGQtaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgMnB4O1xuICBoZWlnaHQ6IDMyNXB4O1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLmV4cGxpY2l0LXNlYyAuYWRkLWluZm86Zmlyc3QtY2hpbGQgLnBhbmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5hZG1pc3Npb24tZmxhZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDI1cHggMDtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5hZG1pc3Npb24tZmxhZyAuYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uc2VjdGlvbi1leHBsaWNpdCBwIHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsIGEge1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbCBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbCBoNiB7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsIGkge1xuICBtYXJnaW46IDI1cHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAucGFuZWwgc3ZnIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbDpob3ZlciwgLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsLmFjdGl2ZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbDpob3ZlciAucGFuZWwtaGVhZGluZyAuYmFyOjphZnRlciwgLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsLmFjdGl2ZSAucGFuZWwtaGVhZGluZyAuYmFyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbDpob3ZlciAucGFuZWwtaGVhZGluZyBoNiwgLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsOmhvdmVyIC5wYW5lbC1oZWFkaW5nIHAsIC5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbDpob3ZlciAucGFuZWwtaGVhZGluZyBoMSwgLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsOmhvdmVyIC5wYW5lbC1oZWFkaW5nIGEsIC5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbC5hY3RpdmUgLnBhbmVsLWhlYWRpbmcgaDYsIC5zZWN0aW9uLWV4cGxpY2l0IC5wYW5lbC5hY3RpdmUgLnBhbmVsLWhlYWRpbmcgcCwgLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsLmFjdGl2ZSAucGFuZWwtaGVhZGluZyBoMSwgLnNlY3Rpb24tZXhwbGljaXQgLnBhbmVsLmFjdGl2ZSAucGFuZWwtaGVhZGluZyBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1leHBsaWNpdCAucGFuZWw6aG92ZXIgc3ZnLCAuc2VjdGlvbi1leHBsaWNpdCAucGFuZWwuYWN0aXZlIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi50YWItaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LWYsIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdywgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5icmVhZGN1bSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuaW1nLWZsYWcge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".section-study-culture .row-f, .section-study-culture .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-study-culture .story {\n  background: #fff;\n}\n.section-study-culture .add-spec {\n  margin: 0 0 0 35px;\n}\n.section-study-culture .add-spec .row {\n  margin: 0px;\n}\n.section-study-culture .add-spec .panel {\n  padding: 0;\n  margin: 0 auto;\n  display: block;\n  text-align: center;\n}\n.section-study-culture .add-spec .panel p {\n  margin-top: 25px;\n}\n.section-study-culture .curriculum {\n  margin-bottom: 0px;\n}\n.section-study-culture .panel {\n  background: #fff;\n  padding: 50px;\n  padding-bottom: 0px;\n}\n.section-study-culture .panel .panel-body {\n  width: 50%;\n}\n.section-study-culture .panel.story-info {\n  background: #bf272d;\n  color: #fff;\n  position: relative;\n  padding-bottom: 30px;\n}\n.section-study-culture .panel.story-info .flying-plane {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.section-study-culture .panel.story-info .flying-plane svg {\n  fill: #fff;\n  transform: rotate(90deg);\n  margin-top: 5px;\n}\n.section-study-culture .panel.story-info::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50px;\n  width: 3px;\n  height: 20px;\n  background: #fff;\n}\n.section-study-culture h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-study-culture h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-study-culture h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-study-culture .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n}\n.section-study-culture ul.list {\n  margin: 0px;\n}\n.section-study-culture ul.list li {\n  color: #000;\n}\n.section-study-culture ul.list li::before {\n  background: #bf272d;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info p {\n  margin: 50px 0 70px 75px;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .panel {\n    padding: 40px 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n  .section-study-culture .sub-header-image {\n    display: none;\n  }\n  .section-study-culture .panel-body {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlcHJlbWlhbnN0b3J5L0Q6XFxhY2FkZW15L3NyY1xcYXBwXFx0aGVwcmVtaWFuc3RvcnlcXHRoZXByZW1pYW5zdG9yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlcHJlbWlhbnN0b3J5L3RoZXByZW1pYW5zdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLG9CQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVDO0VBQ0MsZ0JBQUE7QUNBRjtBREVDO0VBQ08sa0JBQUE7QUNBUjtBRENRO0VBQ0ksV0FBQTtBQ0NaO0FEQ0s7RUFDTyxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQVk7RUFDSSxnQkFBQTtBQ0VoQjtBREVDO0VBQ0Msa0JBQUE7QUNBRjtBREVDO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNBRjtBRENFO0VBQ0MsVUFBQTtBQ0NIO0FEQ0U7RUFDQyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0g7QURBRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNFSjtBRERJO0VBQ0MsVUFBQTtFQUNBLHdCQUFBO0VBQ0csZUFBQTtBQ0dSO0FEQUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREdDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ0RGO0FER0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0RGO0FERUU7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBSDtBREdDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNERjtBREdDO0VBQ0MsV0FBQTtBQ0RGO0FERUU7RUFDQyxXQUFBO0FDQUg7QURDRztFQUNDLG1CQUFBO0FDQ0o7QURLQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDRkQ7QURHQztFQUNDLHdCQUFBO0FDREY7QURLQTtFQUVFO0lBQ0MsZ0JBQUE7RUNIRDtFREtEO0lBQ0MsaUJBQUE7RUNIQTtFREtEO0lBQ0MsaUJBQUE7RUNIQTtFREtEO0lBQ0MsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ0hBO0VES0Q7SUFDQyxhQUFBO0VDSEE7RURLRDtJQUNDLFdBQUE7RUNIQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGhlcHJlbWlhbnN0b3J5L3RoZXByZW1pYW5zdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLXN0dWR5LWN1bHR1cmV7XHJcblx0LnJvdy1mLCAucm93e1xyXG5cdFx0bWFyZ2luOjcwcHggMCAxMDBweDsgXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5zdG9yeXtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHR9XHJcblx0LmFkZC1zcGVje1xyXG4gICAgICAgIG1hcmdpbjowIDAgMCAzNXB4O1xyXG4gICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgfVxyXG4gICAgIC5wYW5lbHtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblx0LmN1cnJpY3VsdW17XHJcblx0XHRtYXJnaW4tYm90dG9tOjBweDtcclxuXHR9XHJcblx0LnBhbmVsIHtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdHBhZGRpbmc6NTBweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAwcHg7XHJcblx0XHQucGFuZWwtYm9keXtcclxuXHRcdFx0d2lkdGg6NTAlO1xyXG5cdFx0fVxyXG5cdFx0Ji5zdG9yeS1pbmZve1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcblx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuXHRcdFx0LmZseWluZy1wbGFuZXtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDowcHg7XHJcblx0XHRcdFx0dG9wOjBweDtcclxuXHRcdFx0XHRzdmd7XHJcblx0XHRcdFx0XHRmaWxsOiAjZmZmO1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgXHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6MHB4O1xyXG5cdFx0XHRcdHRvcDo1MHB4O1xyXG5cdFx0XHRcdHdpZHRoOiAzcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRoMXtcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdH1cclxuXHRoMntcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZy1ib3R0b206NXB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OlwiIFwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTowO1xyXG5cdFx0XHRsZWZ0OjA7XHJcblx0XHRcdHdpZHRoOjUwcHg7XHJcblx0XHRcdGhlaWdodDoycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2YwZjBmMDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6NDAlO1xyXG5cdH1cclxuXHR1bC5saXN0e1xyXG5cdFx0bWFyZ2luOjBweDtcclxuXHRcdGxpe1xyXG5cdFx0XHRjb2xvcjojMDAwO1xyXG5cdFx0XHQmOjpiZWZvcmV7XHJcblx0XHRcdFx0YmFja2dyb3VuZDojYmYyNzJkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ubW9yZS1pbmZve1xyXG5cdGZsb2F0Om5vbmU7XHJcblx0Y2xlYXI6Ym90aDtcclxuXHRwe1xyXG5cdFx0bWFyZ2luOjUwcHggMCA3MHB4IDc1cHggO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdFx0LnJvdy1mLCAucm93LCBoMXtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6MHB4OyBcclxuXHR9XHJcblx0LnBhbmVse1xyXG5cdFx0cGFkZGluZzo0MHB4IDBweDtcclxuXHR9XHJcblx0LmJyZWFkY3Vte1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cGFkZGluZzoxNXB4O1xyXG5cdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG5cdC5zdWItaGVhZGVyLWltYWdle1xyXG5cdFx0ZGlzcGxheTpub25lO1xyXG5cdH1cclxuXHQucGFuZWwtYm9keXtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0fVxyXG59XHJcbn0iLCIuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3ctZiwgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93IHtcbiAgbWFyZ2luOiA3MHB4IDAgMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnN0b3J5IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmFkZC1zcGVjIHtcbiAgbWFyZ2luOiAwIDAgMCAzNXB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuYWRkLXNwZWMgLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuYWRkLXNwZWMgLnBhbmVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5hZGQtc3BlYyAucGFuZWwgcCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwgLnBhbmVsLWJvZHkge1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwuc3RvcnktaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwuc3RvcnktaW5mbyAuZmx5aW5nLXBsYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwuc3RvcnktaW5mbyAuZmx5aW5nLXBsYW5lIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucGFuZWwuc3RvcnktaW5mbzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA1MHB4O1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgxIHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuaW1nLWZsYWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA0MCU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIHVsLmxpc3Qge1xuICBtYXJnaW46IDBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgdWwubGlzdCBsaSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSB1bC5saXN0IGxpOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuXG4ubW9yZS1pbmZvIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGNsZWFyOiBib3RoO1xufVxuLm1vcmUtaW5mbyBwIHtcbiAgbWFyZ2luOiA1MHB4IDAgNzBweCA3NXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LWYsIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdywgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbCB7XG4gICAgcGFkZGluZzogNDBweCAwcHg7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuYnJlYWRjdW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmltZy1mbGFnIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuc3ViLWhlYWRlci1pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".section-study-culture .sub-header {\n  background: #fff;\n}\n.section-study-culture .row-f, .section-study-culture .row {\n  margin: 70px 0 100px;\n  position: relative;\n}\n.section-study-culture .curriculum {\n  margin-bottom: 0px;\n}\n.section-study-culture .curriculum .curriculum-1 {\n  padding: 0;\n  background: #fff;\n}\n.section-study-culture .curriculum .curriculum-1 .panel {\n  padding: 0px 30px;\n}\n.section-study-culture .curriculum .curriculum-1 p {\n  padding: 30px;\n}\n.section-study-culture .curriculum .curriculum-1 .img-flag {\n  width: 100%;\n  top: -100px;\n}\n.section-study-culture .curriculum .curriculum-1 .image-wrap {\n  width: 50%;\n  margin: -120px 0 26px 50px;\n}\n.section-study-culture .panel {\n  background: #fff;\n  padding: 50px;\n}\n.section-study-culture .panel .panel-body {\n  width: 50%;\n}\n.section-study-culture h1 {\n  margin-left: 65px;\n  margin-bottom: 35px;\n}\n.section-study-culture h2 {\n  position: relative;\n  padding-bottom: 5px;\n  line-height: 60px;\n  margin-bottom: 30px;\n}\n.section-study-culture h2::before {\n  content: \" \";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 2px;\n  background: #f0f0f0;\n}\n.section-study-culture .our-mission .img-flag {\n  left: 0px;\n  z-index: 1;\n  top: -25px;\n}\n.section-study-culture .our-mission .panel {\n  float: right;\n}\n.section-study-culture .our-mission .panel-body {\n  margin-left: 50%;\n}\n.section-study-culture .img-flag {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50%;\n}\n.section-study-culture ul.list {\n  margin: 0px;\n}\n.section-study-culture ul.list li {\n  color: #000;\n}\n.section-study-culture ul.list li::before {\n  background: #bf272d;\n}\n.edge-info {\n  margin: 100px 0 0 0 !important;\n}\n.edge-info .plan-title {\n  margin: 80px 0 50px;\n}\n.edge-info .panel {\n  margin-bottom: 50px;\n}\n.edge-info .panel:nth-child(3n+1) {\n  background: #3e65ac;\n  color: #fff;\n}\n.edge-info .panel:nth-child(3n+2) {\n  background: #bf272d;\n  color: #fff;\n}\n.edge-info .panel:nth-child(3n+3) {\n  background: #000;\n  color: #fff;\n}\n.edge-info .panel.bg-white {\n  background: #fff;\n}\n.edge-info .panel.bg-white p {\n  color: #000;\n}\n.edge-info .panel:nth-child(1) span {\n  background: #3e65ac;\n}\n.edge-info .panel:nth-child(2) span {\n  background: #bf272d;\n}\n.edge-info .panel:nth-child(3) span {\n  background: #000;\n}\n.edge-info .panel:nth-child(4) span {\n  background: #3e65ac;\n}\n.edge-info .panel:nth-child(5) span {\n  background: #bf272d;\n}\n.edge-info .panel span {\n  z-index: 1;\n  position: relative;\n  padding-right: 15px;\n}\n.edge-info .heading-title {\n  position: relative;\n}\n.edge-info .heading-title::after {\n  content: \"\";\n  position: absolute;\n  top: 18px;\n  left: 0px;\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n.edge-info .extra-info {\n  position: relative;\n}\n.edge-info .extra-info .panel .panel-body {\n  width: 50%;\n}\n.more-info {\n  float: none;\n  clear: both;\n}\n.more-info h2 {\n  margin: 30px 0 0;\n}\n.more-info .panel {\n  background: #bf272d;\n  margin-top: 35px;\n  margin-bottom: 70px;\n}\n.more-info .panel ul.list li {\n  color: #fff;\n}\n.more-info .panel ul.list li::before {\n  background: #fff;\n}\n.more-info p {\n  color: #fff;\n}\n.more-info-2 .panel {\n  background: #fff;\n}\n.our-belief h2 {\n  color: #bf272d;\n}\n.our-belief .panel {\n  background: #3e65ac;\n  color: #fff;\n}\n.our-belief .panel ul.list li {\n  color: #fff;\n}\n.our-belief .panel ul.list li::before {\n  background: #fff;\n}\n.our-partners .panel {\n  padding: 30px 50px;\n}\n.our-partners .panel p, .our-partners .panel a {\n  color: #fff;\n}\n.our-partners .panel p {\n  font-size: 20px;\n}\n.our-partners .panel a {\n  font-size: 24px;\n}\n.our-partners:nth-child(1) .panel {\n  background: #3e65ac;\n}\n.our-partners:nth-child(1) .panel .heading-title span {\n  background: #3e65ac;\n}\n.our-partners:nth-child(2) .panel {\n  background: #bf272d;\n}\n.our-partners:nth-child(2) .panel .heading-title span {\n  background: #bf272d;\n}\n.our-partners:nth-child(3) .panel {\n  background: #000000;\n}\n.our-partners:nth-child(3) .panel .heading-title span {\n  background: #000000;\n}\n.our-partners:nth-child(4) .panel {\n  background: #e0e0e0;\n}\n.our-partners:nth-child(4) .panel .heading-title span {\n  background: #e0e0e0;\n  color: #000;\n}\n.our-partners:nth-child(4) .panel .heading-title::after {\n  background: #000;\n}\n.our-partners:nth-child(4) .panel p, .our-partners:nth-child(4) .panel a {\n  color: #000;\n}\n.our-partners:nth-child(5) .panel {\n  background: #ffffff;\n}\n.our-partners:nth-child(5) .panel .heading-title span {\n  background: #ffffff;\n  color: #000;\n}\n.our-partners:nth-child(5) .panel .heading-title::after {\n  background: #000;\n}\n.our-partners:nth-child(5) .panel p, .our-partners:nth-child(5) .panel a {\n  color: #000;\n}\n.our-partners:nth-child(6) .panel {\n  background: #3e65ac;\n}\n.our-partners:nth-child(6) .panel .heading-title span {\n  background: #3e65ac;\n}\n.our-partners:nth-child(7) .panel {\n  background: #bf272d;\n}\n.our-partners:nth-child(7) .panel .heading-title span {\n  background: #bf272d;\n}\n.our-partners .img-box {\n  box-sizing: border-box;\n  display: inline;\n  width: 315px;\n}\n.our-partners .img-box ~ div {\n  display: inline-block;\n  margin-left: 20px;\n  word-break: break-all;\n}\n.our-partners .img-box img {\n  width: auto;\n}\n.our-partners .heading-title {\n  display: block;\n  text-align: center;\n  position: relative;\n  margin: 0px;\n}\n.our-partners .heading-title span {\n  padding: 0 15px;\n  position: relative;\n  z-index: 1;\n  color: #fff;\n}\n.our-partners .heading-title::after {\n  content: \" \";\n  position: absolute;\n  top: 20px;\n  left: 1px;\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\n@media (max-width: 576px) {\n  .section-study-culture .row-f, .section-study-culture .row, .section-study-culture h1 {\n    margin-left: 0px;\n  }\n  .section-study-culture .breadcum {\n    margin-left: 15px;\n  }\n  .section-study-culture .img-flag {\n    padding: 15px;\n    position: static;\n    width: 100%;\n  }\n\n  .section-study-culture .our-mission {\n    margin: 0 15px;\n  }\n  .section-study-culture .our-mission .panel-body {\n    margin-left: 0;\n  }\n  .section-study-culture .our-mission .panel {\n    float: none;\n  }\n  .section-study-culture .our-mission .img-flag {\n    padding: 15px 0;\n  }\n  .section-study-culture .curriculum .curriculum-1 .image-wrap {\n    width: 100%;\n    margin: 30px 0;\n  }\n}\n@media (max-width: 576px) {\n  .our-partners .img-box ~ div {\n    margin-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlc3R1ZHljdWx0dXJlL0Q6XFxhY2FkZW15L3NyY1xcYXBwXFx0aGVzdHVkeWN1bHR1cmVcXHRoZXN0dWR5Y3VsdHVyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlc3R1ZHljdWx0dXJlL3RoZXN0dWR5Y3VsdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUFZLGdCQUFBO0FDQ2I7QURBQztFQUNDLG9CQUFBO0VBQ0Esa0JBQUE7QUNFRjtBREFDO0VBQ0Msa0JBQUE7QUNFRjtBRERFO0VBSUMsVUFBQTtFQUNBLGdCQUFBO0FDQUg7QURKRztFQUNDLGlCQUFBO0FDTUo7QURGRztFQUNDLGFBQUE7QUNJSjtBREZHO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNJSjtBREZHO0VBQ0MsVUFBQTtFQUNBLDBCQUFBO0FDSUo7QURBQztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtBQ0VGO0FEREU7RUFDQyxVQUFBO0FDR0g7QURDQztFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENDO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRUg7QURFRTtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0FIO0FERUU7RUFDQyxZQUFBO0FDQUg7QURFRTtFQUNDLGdCQUFBO0FDQUg7QURHQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDREY7QURHQztFQUNDLFdBQUE7QUNERjtBREVFO0VBQ0MsV0FBQTtBQ0FIO0FEQ0c7RUFDQyxtQkFBQTtBQ0NKO0FET0E7RUFDSSw4QkFBQTtBQ0pKO0FES0k7RUFDSSxtQkFBQTtBQ0hSO0FEZ0JBO0VBRUksbUJBQUE7QUNmSjtBRE1JO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDSlI7QURFSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0FSO0FERkk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNJUjtBRElHO0VBQ0ssZ0JBQUE7QUNGUjtBREdRO0VBQ0ksV0FBQTtBQ0RaO0FETVE7RUFDSSxtQkFBQTtBQ0paO0FEUVE7RUFDSSxtQkFBQTtBQ05aO0FEVVE7RUFDSSxnQkFBQTtBQ1JaO0FEY1E7RUFDSSxtQkFBQTtBQ1paO0FEZVE7RUFDSSxtQkFBQTtBQ2JaO0FEZ0JJO0VBRUksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNmUjtBRG1CSTtFQUNJLGtCQUFBO0FDakJSO0FEbUJRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDakJaO0FEb0JDO0VBQ0Msa0JBQUE7QUNsQkY7QURvQkc7RUFDQyxVQUFBO0FDbEJKO0FEeUJBO0VBaUJDLFdBQUE7RUFDQSxXQUFBO0FDdENEO0FEcUJDO0VBQ0MsZ0JBQUE7QUNuQkY7QURxQkM7RUFDQyxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNuQkY7QURxQkc7RUFDQyxXQUFBO0FDbkJKO0FEb0JHO0VBQ0MsZ0JBQUE7QUNsQko7QUR5QkM7RUFDQyxXQUFBO0FDdkJGO0FENEJDO0VBQ0MsZ0JBQUE7QUN6QkY7QUQ4QkM7RUFDQyxjQUFBO0FDM0JGO0FENkJDO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0FDM0JGO0FENkJHO0VBQ0MsV0FBQTtBQzNCSjtBRDRCSTtFQUNDLGdCQUFBO0FDMUJMO0FEa0NDO0VBQ0Msa0JBQUE7QUMvQkY7QURnQ0U7RUFDQyxXQUFBO0FDOUJIO0FEZ0NFO0VBQ0MsZUFBQTtBQzlCSDtBRGdDRTtFQUNDLGVBQUE7QUM5Qkg7QURrQ0U7RUFDQyxtQkFBQTtBQ2hDSDtBRGtDSTtFQUNDLG1CQUFBO0FDaENMO0FEdUNFO0VBQ0MsbUJBQUE7QUNyQ0g7QUR1Q0k7RUFDQyxtQkFBQTtBQ3JDTDtBRDRDRTtFQUNDLG1CQUFBO0FDMUNIO0FENENJO0VBQ0MsbUJBQUE7QUMxQ0w7QURnREU7RUFDQyxtQkFBQTtBQzlDSDtBRGdESTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtBQzlDTDtBRGdESTtFQUNDLGdCQUFBO0FDOUNMO0FEaURHO0VBQ0MsV0FBQTtBQy9DSjtBRG9ERTtFQUNDLG1CQUFBO0FDbERIO0FEb0RJO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0FDbERMO0FEb0RJO0VBQ0MsZ0JBQUE7QUNsREw7QURxREc7RUFDQyxXQUFBO0FDbkRKO0FEd0RFO0VBQ0MsbUJBQUE7QUN0REg7QUR3REk7RUFDQyxtQkFBQTtBQ3RETDtBRDRERTtFQUNDLG1CQUFBO0FDMURIO0FENERJO0VBQ0MsbUJBQUE7QUMxREw7QUQrREM7RUFDQyxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDN0RGO0FEOERFO0VBQ0MscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDNURIO0FEOERFO0VBQ0MsV0FBQTtBQzVESDtBRCtEQztFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQzdERjtBRDhERTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDNURIO0FEOERFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDNURIO0FEaUVBO0VBRUU7SUFDQyxnQkFBQTtFQy9ERDtFRGlFRDtJQUNDLGlCQUFBO0VDL0RBO0VEaUVEO0lBQ0MsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQy9EQTs7RURtRUQ7SUFDQyxjQUFBO0VDaEVBO0VEaUVBO0lBQ0MsY0FBQTtFQy9ERDtFRGlFQTtJQUNDLFdBQUE7RUMvREQ7RURpRUE7SUFDQyxlQUFBO0VDL0REO0VEb0VDO0lBQ0MsV0FBQTtJQUNBLGNBQUE7RUNsRUY7QUFDRjtBRHdFQTtFQUNDO0lBQ0MsZ0JBQUE7RUN0RUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RoZXN0dWR5Y3VsdHVyZS90aGVzdHVkeWN1bHR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1zdHVkeS1jdWx0dXJle1xyXG5cdC5zdWItaGVhZGVye2JhY2tncm91bmQ6I2ZmZjt9XHJcblx0LnJvdy1mLCAucm93e1xyXG5cdFx0bWFyZ2luOjcwcHggMCAxMDBweDsgXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5jdXJyaWN1bHVte1xyXG5cdFx0bWFyZ2luLWJvdHRvbTowcHg7XHJcblx0XHQuY3VycmljdWx1bS0xe1xyXG5cdFx0XHQucGFuZWwge1xyXG5cdFx0XHRcdHBhZGRpbmc6MHB4IDMwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0cGFkZGluZzowO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRcdHB7XHJcblx0XHRcdFx0cGFkZGluZzozMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5pbWctZmxhZ3tcclxuXHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdHRvcDotMTAwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LmltYWdlLXdyYXB7XHJcblx0XHRcdFx0d2lkdGg6IDUwJTtcclxuXHRcdFx0XHRtYXJnaW46IC0xMjBweCAwIDI2cHggNTBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQucGFuZWwge1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0cGFkZGluZzo1MHB4O1xyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRoMXtcclxuXHRcdG1hcmdpbi1sZWZ0OjY1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdH1cclxuXHRoMntcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZy1ib3R0b206NXB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OlwiIFwiO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTowO1xyXG5cdFx0XHRsZWZ0OjA7XHJcblx0XHRcdHdpZHRoOjUwcHg7XHJcblx0XHRcdGhlaWdodDoycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6I2YwZjBmMDtcclxuXHRcdH1cclxuXHR9XHJcblx0Lm91ci1taXNzaW9ue1xyXG5cdFx0LmltZy1mbGFne1xyXG5cdFx0XHRsZWZ0OiAwcHg7XHJcblx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdHRvcDogLTI1cHg7XHJcblx0XHR9XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdGZsb2F0OnJpZ2h0O1xyXG5cdFx0fVxyXG5cdFx0LnBhbmVsLWJvZHl7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjUwJTtcclxuXHRcdH1cclxuXHR9XHJcblx0LmltZy1mbGFne1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6MDtcclxuXHRcdHRvcDowO1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHR9XHJcblx0dWwubGlzdHtcclxuXHRcdG1hcmdpbjowcHg7XHJcblx0XHRsaXtcclxuXHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4uZWRnZS1pbmZve1xyXG4gICAgbWFyZ2luOjEwMHB4IDAgMCAwICFpbXBvcnRhbnQ7XHJcbiAgICAucGxhbi10aXRsZXtcclxuICAgICAgICBtYXJnaW46ODBweCAwIDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJGJnLWNvbG9yczogIzNlNjVhYywgI2JmMjcyZCwgIzAwMDtcclxuQG1peGluIGFsdGVybmF0aW5nLWJhY2tncm91bmQge1xyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRiZy1jb2xvcnMpIHtcclxuICAgICY6bnRoLWNoaWxkKCN7bGVuZ3RoKCRiZy1jb2xvcnMpfW4rI3skaX0pIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAobnRoKCRiZy1jb2xvcnMsICRpKSk7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wYW5lbHtcclxuICAgIEBpbmNsdWRlIGFsdGVybmF0aW5nLWJhY2tncm91bmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgICYuYmctd2hpdGV7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDA7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgXHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNlNjVhYztcclxuICAgIH1cclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiZjI3MmQ7XHJcbiAgICB9IFxyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIH0gXHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdCY6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzZTY1YWM7XHJcblx0fX1cclxuXHQmOm50aC1jaGlsZCg1KXtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xyXG4gICAgfX1cclxuXHJcbiAgICBzcGFue1xyXG4gICAgICAgXHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuICAgIC5oZWFkaW5nLXRpdGxle1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgIFxyXG4gICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDoxOHB4O1xyXG4gICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblx0LmV4dHJhLWluZm97XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdC5wYW5lbC1ib2R5e1xyXG5cdFx0XHRcdHdpZHRoOjUwJTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbi5tb3JlLWluZm97XHJcblx0aDJ7XHJcblx0XHRtYXJnaW46MzBweCAwIDA7XHJcblx0fVxyXG5cdC5wYW5lbHtcclxuXHRcdGJhY2tncm91bmQ6I2JmMjcyZDtcclxuXHRcdG1hcmdpbi10b3A6IDM1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG5cdFx0dWwubGlzdHtcclxuXHRcdFx0bGkge1xyXG5cdFx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHR9XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRmbG9hdDpub25lO1xyXG5cdGNsZWFyOmJvdGg7XHJcblx0cHtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0fVxyXG59XHJcblxyXG4ubW9yZS1pbmZvLTJ7XHJcblx0LnBhbmVse1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdH1cclxufVxyXG5cclxuLm91ci1iZWxpZWZ7XHJcblx0aDJ7XHJcblx0XHRjb2xvcjojYmYyNzJkO1xyXG5cdH1cclxuXHQucGFuZWx7XHJcblx0XHRiYWNrZ3JvdW5kOiMzZTY1YWM7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0dWwubGlzdHtcclxuXHRcdFx0bGl7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0Jjo6YmVmb3Jle1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0XHRcdH1cclxuXHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5vdXItcGFydG5lcnN7XHJcblx0LnBhbmVse1xyXG5cdFx0cGFkZGluZzozMHB4IDUwcHg7XHJcblx0XHRwLGF7XHJcblx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHR9XHJcblx0XHRwe1xyXG5cdFx0XHRmb250LXNpemU6MjBweDtcclxuXHRcdH1cclxuXHRcdGF7XHJcblx0XHRcdGZvbnQtc2l6ZToyNHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQmOm50aC1jaGlsZCgxKXtcclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0YmFja2dyb3VuZDogIzNlNjVhYztcdFxyXG5cdFx0XHQuaGVhZGluZy10aXRsZXtcclxuXHRcdFx0XHRzcGFue1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzNlNjVhYztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQmOm50aC1jaGlsZCgyKXtcclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0YmFja2dyb3VuZDogI2JmMjcyZDtcclxuXHRcdFx0LmhlYWRpbmctdGl0bGV7XHJcblx0XHRcdFx0c3BhbntcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNiZjI3MmQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cdFxyXG5cdFx0fVxyXG5cdH1cclxuXHQmOm50aC1jaGlsZCgzKXtcclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0YmFja2dyb3VuZDogIzAwMDAwMDtcclxuXHRcdFx0LmhlYWRpbmctdGl0bGV7XHJcblx0XHRcdFx0c3BhbntcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHR9XHJcblx0JjpudGgtY2hpbGQoNCl7XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcblx0XHRcdC5oZWFkaW5nLXRpdGxle1xyXG5cdFx0XHRcdHNwYW57XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG5cdFx0XHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Jjo6YWZ0ZXJ7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRwLGF7XHJcblx0XHRcdFx0Y29sb3I6IzAwMDtcclxuXHRcdFx0fVx0XHJcblx0XHR9XHJcblx0fVxyXG5cdCY6bnRoLWNoaWxkKDUpe1xyXG5cdFx0LnBhbmVse1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdFx0XHQuaGVhZGluZy10aXRsZXtcclxuXHRcdFx0XHRzcGFue1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHRcdFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCY6OmFmdGVye1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzAwMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cCxhe1xyXG5cdFx0XHRcdGNvbG9yOiMwMDA7XHJcblx0XHRcdH1cdFxyXG5cdFx0fVxyXG5cdH1cclxuXHQmOm50aC1jaGlsZCg2KXtcclxuXHRcdC5wYW5lbHtcclxuXHRcdFx0YmFja2dyb3VuZDogIzNlNjVhYztcclxuXHRcdFx0LmhlYWRpbmctdGl0bGV7XHJcblx0XHRcdFx0c3BhbntcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzZTY1YWM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHR9XHJcblx0JjpudGgtY2hpbGQoNyl7XHJcblx0XHQucGFuZWx7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNiZjI3MmQ7XHJcblx0XHRcdC5oZWFkaW5nLXRpdGxle1xyXG5cdFx0XHRcdHNwYW57XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjYmYyNzJkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVx0XHJcblx0XHR9XHJcblx0fVxyXG5cdC5pbWctYm94e1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGRpc3BsYXk6aW5saW5lO1xyXG5cdFx0d2lkdGg6MzE1cHg7XHJcblx0XHQmfmRpdntcclxuXHRcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OjIwcHg7XHRcclxuXHRcdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xyXG5cdFx0fVxyXG5cdFx0aW1ne1xyXG5cdFx0XHR3aWR0aDphdXRvO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuaGVhZGluZy10aXRsZXtcclxuXHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdG1hcmdpbjowcHg7XHJcblx0XHRzcGFue1xyXG5cdFx0XHRwYWRkaW5nOjAgMTVweDtcclxuXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHR9XHJcblx0XHQmOjphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOjIwcHg7XHJcblx0XHRcdGxlZnQ6MXB4O1xyXG5cdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6MXB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdC5zZWN0aW9uLXN0dWR5LWN1bHR1cmV7XHJcblx0XHQucm93LWYsIC5yb3csIGgxe1xyXG5cdFx0XHRtYXJnaW4tbGVmdDowcHg7IFxyXG5cdH1cclxuXHQuYnJlYWRjdW17XHJcblx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdH1cclxuXHQuaW1nLWZsYWd7XHJcblx0XHRwYWRkaW5nOjE1cHg7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcbn1cclxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSB7XHJcblx0Lm91ci1taXNzaW9ue1xyXG5cdFx0bWFyZ2luOiAwIDE1cHg7XHJcblx0XHQucGFuZWwtYm9keSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cdFx0LnBhbmVse1xyXG5cdFx0XHRmbG9hdDpub25lO1xyXG5cdFx0fVxyXG5cdFx0LmltZy1mbGFne1xyXG5cdFx0XHRwYWRkaW5nOjE1cHggMDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmN1cnJpY3VsdW17XHJcblx0XHQuY3VycmljdWx1bS0xe1xyXG5cdFx0XHQuaW1hZ2Utd3JhcHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRtYXJnaW46IDMwcHggMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xyXG5cdC5vdXItcGFydG5lcnMgLmltZy1ib3ggfiBkaXZ7XHJcblx0XHRtYXJnaW4tbGVmdDowcHg7XHJcblx0fX0iLCIuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5zdWItaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdy1mLCAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5yb3cge1xuICBtYXJnaW46IDcwcHggMCAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuY3VycmljdWx1bSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLmN1cnJpY3VsdW0gLmN1cnJpY3VsdW0tMSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLTEgLnBhbmVsIHtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLTEgcCB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLTEgLmltZy1mbGFnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogLTEwMHB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuY3VycmljdWx1bSAuY3VycmljdWx1bS0xIC5pbWFnZS13cmFwIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAtMTIwcHggMCAyNnB4IDUwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgxIHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIGgyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgaDI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAub3VyLW1pc3Npb24gLmltZy1mbGFnIHtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAxO1xuICB0b3A6IC0yNXB4O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAub3VyLW1pc3Npb24gLnBhbmVsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAub3VyLW1pc3Npb24gLnBhbmVsLWJvZHkge1xuICBtYXJnaW4tbGVmdDogNTAlO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuaW1nLWZsYWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2VjdGlvbi1zdHVkeS1jdWx0dXJlIHVsLmxpc3Qge1xuICBtYXJnaW46IDBweDtcbn1cbi5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgdWwubGlzdCBsaSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSB1bC5saXN0IGxpOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xufVxuXG4uZWRnZS1pbmZvIHtcbiAgbWFyZ2luOiAxMDBweCAwIDAgMCAhaW1wb3J0YW50O1xufVxuLmVkZ2UtaW5mbyAucGxhbi10aXRsZSB7XG4gIG1hcmdpbjogODBweCAwIDUwcHg7XG59XG4uZWRnZS1pbmZvIC5wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoM24rMSkge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5lZGdlLWluZm8gLnBhbmVsOm50aC1jaGlsZCgzbisyKSB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmVkZ2UtaW5mbyAucGFuZWw6bnRoLWNoaWxkKDNuKzMpIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG4uZWRnZS1pbmZvIC5wYW5lbC5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uZWRnZS1pbmZvIC5wYW5lbC5iZy13aGl0ZSBwIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoMSkgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoMikgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoMykgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoNCkgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG59XG4uZWRnZS1pbmZvIC5wYW5lbDpudGgtY2hpbGQoNSkgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4uZWRnZS1pbmZvIC5wYW5lbCBzcGFuIHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLmVkZ2UtaW5mbyAuaGVhZGluZy10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lZGdlLWluZm8gLmhlYWRpbmctdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmVkZ2UtaW5mbyAuZXh0cmEtaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lZGdlLWluZm8gLmV4dHJhLWluZm8gLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLm1vcmUtaW5mbyB7XG4gIGZsb2F0OiBub25lO1xuICBjbGVhcjogYm90aDtcbn1cbi5tb3JlLWluZm8gaDIge1xuICBtYXJnaW46IDMwcHggMCAwO1xufVxuLm1vcmUtaW5mbyAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjYmYyNzJkO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuLm1vcmUtaW5mbyAucGFuZWwgdWwubGlzdCBsaSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm1vcmUtaW5mbyAucGFuZWwgdWwubGlzdCBsaTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5tb3JlLWluZm8gcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubW9yZS1pbmZvLTIgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLm91ci1iZWxpZWYgaDIge1xuICBjb2xvcjogI2JmMjcyZDtcbn1cbi5vdXItYmVsaWVmIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICMzZTY1YWM7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm91ci1iZWxpZWYgLnBhbmVsIHVsLmxpc3QgbGkge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5vdXItYmVsaWVmIC5wYW5lbCB1bC5saXN0IGxpOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ub3VyLXBhcnRuZXJzIC5wYW5lbCB7XG4gIHBhZGRpbmc6IDMwcHggNTBweDtcbn1cbi5vdXItcGFydG5lcnMgLnBhbmVsIHAsIC5vdXItcGFydG5lcnMgLnBhbmVsIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5vdXItcGFydG5lcnMgLnBhbmVsIHAge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ub3VyLXBhcnRuZXJzIC5wYW5lbCBhIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLm91ci1wYXJ0bmVyczpudGgtY2hpbGQoMSkgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDEpIC5wYW5lbCAuaGVhZGluZy10aXRsZSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDIpIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4ub3VyLXBhcnRuZXJzOm50aC1jaGlsZCgyKSAucGFuZWwgLmhlYWRpbmctdGl0bGUgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4ub3VyLXBhcnRuZXJzOm50aC1jaGlsZCgzKSAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuLm91ci1wYXJ0bmVyczpudGgtY2hpbGQoMykgLnBhbmVsIC5oZWFkaW5nLXRpdGxlIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuLm91ci1wYXJ0bmVyczpudGgtY2hpbGQoNCkgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbn1cbi5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDQpIC5wYW5lbCAuaGVhZGluZy10aXRsZSBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgY29sb3I6ICMwMDA7XG59XG4ub3VyLXBhcnRuZXJzOm50aC1jaGlsZCg0KSAucGFuZWwgLmhlYWRpbmctdGl0bGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cbi5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDQpIC5wYW5lbCBwLCAub3VyLXBhcnRuZXJzOm50aC1jaGlsZCg0KSAucGFuZWwgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLm91ci1wYXJ0bmVyczpudGgtY2hpbGQoNSkgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDUpIC5wYW5lbCAuaGVhZGluZy10aXRsZSBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMwMDA7XG59XG4ub3VyLXBhcnRuZXJzOm50aC1jaGlsZCg1KSAucGFuZWwgLmhlYWRpbmctdGl0bGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cbi5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDUpIC5wYW5lbCBwLCAub3VyLXBhcnRuZXJzOm50aC1jaGlsZCg1KSAucGFuZWwgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLm91ci1wYXJ0bmVyczpudGgtY2hpbGQoNikgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDYpIC5wYW5lbCAuaGVhZGluZy10aXRsZSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzNlNjVhYztcbn1cbi5vdXItcGFydG5lcnM6bnRoLWNoaWxkKDcpIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4ub3VyLXBhcnRuZXJzOm50aC1jaGlsZCg3KSAucGFuZWwgLmhlYWRpbmctdGl0bGUgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNiZjI3MmQ7XG59XG4ub3VyLXBhcnRuZXJzIC5pbWctYm94IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogMzE1cHg7XG59XG4ub3VyLXBhcnRuZXJzIC5pbWctYm94IH4gZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLm91ci1wYXJ0bmVycyAuaW1nLWJveCBpbWcge1xuICB3aWR0aDogYXV0bztcbn1cbi5vdXItcGFydG5lcnMgLmhlYWRpbmctdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4O1xufVxuLm91ci1wYXJ0bmVycyAuaGVhZGluZy10aXRsZSBzcGFuIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm91ci1wYXJ0bmVycyAuaGVhZGluZy10aXRsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAucm93LWYsIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLnJvdywgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5icmVhZGN1bSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAuaW1nLWZsYWcge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zZWN0aW9uLXN0dWR5LWN1bHR1cmUgLm91ci1taXNzaW9uIHtcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5vdXItbWlzc2lvbiAucGFuZWwtYm9keSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLnNlY3Rpb24tc3R1ZHktY3VsdHVyZSAub3VyLW1pc3Npb24gLnBhbmVsIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5vdXItbWlzc2lvbiAuaW1nLWZsYWcge1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgfVxuICAuc2VjdGlvbi1zdHVkeS1jdWx0dXJlIC5jdXJyaWN1bHVtIC5jdXJyaWN1bHVtLTEgLmltYWdlLXdyYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMzBweCAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm91ci1wYXJ0bmVycyAuaW1nLWJveCB+IGRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufSJdfQ== */";
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


    __webpack_exports__["default"] = ".section-inner-subheader {\n  margin-bottom: 50px;\n}\n.section-inner-subheader .the-team-info {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  margin-top: 0px;\n}\n.section-inner-subheader .the-team-info .col {\n  padding: 0;\n}\n.section-inner-subheader .the-team-info .panel.img-info {\n  padding: 0px;\n  margin-bottom: 0;\n}\n.section-inner-subheader .the-team-info h1 {\n  color: #3e65ac;\n}\n.section-inner-subheader .people-quates {\n  border: 1px solid #3e65ac;\n  border-radius: 0px 50px 0 50px;\n  padding: 40px;\n  font-size: 24px;\n  position: relative;\n  margin-bottom: 40px;\n}\n.section-inner-subheader .people-quates .quates {\n  position: absolute;\n  background: #fff;\n  color: #bf272d;\n  line-height: 45px;\n}\n.section-inner-subheader .people-quates .quates svg {\n  fill: #bf272d;\n}\n.section-inner-subheader .people-quates .quates.start {\n  top: 0px;\n  left: -15px;\n  transform: rotate(-180deg);\n}\n.section-inner-subheader .people-quates .quates.end {\n  bottom: 0px;\n  right: -15px;\n}\n.section-inner-subheader .people-quates .commatter {\n  position: absolute;\n  right: 25%;\n  bottom: 10px;\n  color: #3e65ac;\n}\n.section-inner-subheader .panel {\n  color: #fff;\n  padding: 50px;\n  margin-bottom: 50px;\n  height: calc(100% - 190px);\n}\n.section-inner-subheader .panel .panel-body {\n  margin-top: -70px;\n  z-index: -1;\n  position: relative;\n  padding: 80px 20px 1px;\n  border-radius: 25px 25px 0 0;\n  height: 100%;\n}\n.section-inner-subheader .panel .panel-body h5 {\n  font-size: 16px;\n  background: #fff;\n  border-radius: 20px;\n  color: #bf272d;\n  text-align: center;\n  padding: 5px 0;\n  box-shadow: 1px 1px 3px 0px #0e0e0e;\n}\n.section-inner-subheader h1 {\n  margin-top: 30px;\n}\n.section-inner-subheader .avtar {\n  background: #fff;\n}\n.section-inner-subheader .team-info {\n  margin-top: 50px;\n}\n.the-team-info .img-frame {\n  position: relative;\n  padding: 10px;\n}\n.the-team-info .img-frame:after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 33px;\n  width: 75%;\n  height: 68%;\n  border: 2px solid #000;\n  border-bottom: none;\n}\n.the-team-info img {\n  width: 70%;\n  text-align: center;\n  display: block;\n  margin: 0 auto;\n}\n.blue-bg {\n  background: #3e65ac;\n}\n.red-bg {\n  background: #bf272d;\n}\n.black-bg {\n  background: #000;\n}\n@media (max-width: 576px) {\n  .panel {\n    padding: 0px !important;\n    margin-top: 30px;\n  }\n\n  .section-inner-subheader .the-team-info {\n    display: block;\n  }\n\n  .row-f, .row, h1 {\n    display: block;\n  }\n\n  .breadcum {\n    margin-left: 15px;\n  }\n\n  .img-flag {\n    padding: 15px 0px;\n    position: static;\n    width: 100%;\n  }\n\n  .panel-body {\n    width: 100%;\n  }\n\n  .avtar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhldGVhbS9EOlxcYWNhZGVteS9zcmNcXGFwcFxcdGhldGVhbVxcdGhldGVhbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhldGVhbS90aGV0ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7QUNDRDtBREFDO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNFRjtBRERFO0VBQ0MsVUFBQTtBQ0dIO0FEREU7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7QUNHSDtBRERFO0VBQ0MsY0FBQTtBQ0dIO0FEQ0M7RUFDQyx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURBRTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNFSDtBRERHO0VBQ0MsYUFBQTtBQ0dKO0FEQUk7RUFDQyxRQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDRUw7QURBSTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDRUw7QURDRTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0g7QURHQztFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0RGO0FERUU7RUFDQyxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDQUg7QURDRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0FDQ0o7QURHQztFQUNDLGdCQUFBO0FDREY7QURJQztFQUNDLGdCQUFBO0FDRkY7QURJQztFQUNDLGdCQUFBO0FDRkY7QURNQztFQUNDLGtCQUFBO0VBQ0EsYUFBQTtBQ0hGO0FESUU7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0ZIO0FES0M7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0hGO0FETUE7RUFDQyxtQkFBQTtBQ0hEO0FES0E7RUFDQyxtQkFBQTtBQ0ZEO0FESUE7RUFDQyxnQkFBQTtBQ0REO0FESUE7RUFDQztJQUNDLHVCQUFBO0lBQ0EsZ0JBQUE7RUNEQTs7RURJQTtJQUNDLGNBQUE7RUNERDs7RURJQTtJQUNDLGNBQUE7RUNERDs7RURHRDtJQUNDLGlCQUFBO0VDQUE7O0VERUQ7SUFDQyxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ0NBOztFRENEO0lBQ0MsV0FBQTtFQ0VBOztFREFEO0lBQ0MsYUFBQTtFQ0dBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90aGV0ZWFtL3RoZXRlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1pbm5lci1zdWJoZWFkZXJ7XHJcblx0bWFyZ2luLWJvdHRvbTo1MHB4O1xyXG5cdC50aGUtdGVhbS1pbmZve1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblx0XHRtYXJnaW46MDtcdFxyXG5cdFx0bWFyZ2luLXRvcDowcHg7XHJcblx0XHQuY29sIHtcclxuXHRcdFx0cGFkZGluZzowO1xyXG5cdFx0fVxyXG5cdFx0LnBhbmVsLmltZy1pbmZve1xyXG5cdFx0XHRwYWRkaW5nOjBweDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcdFxyXG5cdFx0fVxyXG5cdFx0aDF7XHJcblx0XHRcdGNvbG9yOiMzZTY1YWM7XHJcblx0XHR9XHJcblx0fVx0XHJcblxyXG5cdC5wZW9wbGUtcXVhdGVze1xyXG5cdFx0Ym9yZGVyOjFweCBzb2xpZCAjM2U2NWFjO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMHB4IDUwcHggMCA1MHB4O1xyXG5cdFx0cGFkZGluZzo0MHB4O1xyXG5cdFx0Zm9udC1zaXplOjI0cHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW4tYm90dG9tOjQwcHg7XHJcblx0XHQucXVhdGVze1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdGNvbG9yOiAjYmYyNzJkO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogNDVweDtcclxuXHRcdFx0c3Zne1xyXG5cdFx0XHRcdGZpbGw6I2JmMjcyZDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmLnN0YXJ0e1xyXG5cdFx0XHRcdFx0dG9wOjBweDtcclxuXHRcdFx0XHRcdGxlZnQ6LTE1cHg7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ji5lbmR7XHJcblx0XHRcdFx0XHRib3R0b206MHB4O1xyXG5cdFx0XHRcdFx0cmlnaHQ6LTE1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmNvbW1hdHRlcntcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRyaWdodDogMjUlO1xyXG5cdFx0XHRib3R0b206MTBweDtcclxuXHRcdFx0Y29sb3I6IzNlNjVhYztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5wYW5lbCB7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdFx0cGFkZGluZzo1MHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTo1MHB4O1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSAxOTBweCk7XHJcblx0XHQucGFuZWwtYm9keXtcclxuXHRcdFx0bWFyZ2luLXRvcDogLTcwcHg7XHJcblx0XHRcdHotaW5kZXg6IC0xO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHBhZGRpbmc6ODBweCAyMHB4IDFweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcclxuXHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHRcdGg1e1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRcdFx0Y29sb3I6ICNiZjI3MmQ7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDVweCAwO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDBweCAjMGUwZTBlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGgxe1xyXG5cdFx0bWFyZ2luLXRvcDozMHB4O1xyXG5cdH1cclxuXHJcblx0LmF2dGFye1xyXG5cdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdH1cclxuXHQudGVhbS1pbmZve1xyXG5cdFx0bWFyZ2luLXRvcDo1MHB4O1xyXG5cdH1cclxufVxyXG4udGhlLXRlYW0taW5mb3tcclxuXHQuaW1nLWZyYW1le1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZzoxMHB4O1xyXG5cdFx0JjphZnRlcntcclxuXHRcdFx0Y29udGVudDpcIiBcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6MDtcclxuXHRcdFx0bGVmdDogMzNweDtcclxuXHRcdFx0d2lkdGg6IDc1JTtcclxuXHRcdFx0aGVpZ2h0OiA2OCU7XHJcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cdGltZyB7XHJcblx0XHR3aWR0aDogNzAlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHQgIH1cclxufVxyXG4uYmx1ZS1iZ3tcclxuXHRiYWNrZ3JvdW5kOiMzZTY1YWM7XHJcbn1cclxuLnJlZC1iZ3tcclxuXHRiYWNrZ3JvdW5kOiNiZjI3MmQ7XHJcbn1cclxuLmJsYWNrLWJne1xyXG5cdGJhY2tncm91bmQ6IzAwMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQucGFuZWwge1xyXG5cdFx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcblx0XHRtYXJnaW4tdG9wOjMwcHg7XHJcblx0fVxyXG5cdC5zZWN0aW9uLWlubmVyLXN1YmhlYWRlcntcclxuXHRcdC50aGUtdGVhbS1pbmZve1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdH1cclxuXHRcdH1cclxuXHRcdC5yb3ctZiwgLnJvdywgaDF7XHJcblx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0fVxyXG5cdC5icmVhZGN1bXtcclxuXHRcdG1hcmdpbi1sZWZ0OjE1cHg7XHJcblx0fVxyXG5cdC5pbWctZmxhZ3tcclxuXHRcdHBhZGRpbmc6MTVweCAwcHg7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHR9XHJcblx0LnBhbmVsLWJvZHl7XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdH1cclxuXHQuYXZ0YXJ7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHJcbn0iLCIuc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC50aGUtdGVhbS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC50aGUtdGVhbS1pbmZvIC5jb2wge1xuICBwYWRkaW5nOiAwO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC50aGUtdGVhbS1pbmZvIC5wYW5lbC5pbWctaW5mbyB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAudGhlLXRlYW0taW5mbyBoMSB7XG4gIGNvbG9yOiAjM2U2NWFjO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wZW9wbGUtcXVhdGVzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNlNjVhYztcbiAgYm9yZGVyLXJhZGl1czogMHB4IDUwcHggMCA1MHB4O1xuICBwYWRkaW5nOiA0MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGVvcGxlLXF1YXRlcyAucXVhdGVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogI2JmMjcyZDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG59XG4uc2VjdGlvbi1pbm5lci1zdWJoZWFkZXIgLnBlb3BsZS1xdWF0ZXMgLnF1YXRlcyBzdmcge1xuICBmaWxsOiAjYmYyNzJkO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wZW9wbGUtcXVhdGVzIC5xdWF0ZXMuc3RhcnQge1xuICB0b3A6IDBweDtcbiAgbGVmdDogLTE1cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wZW9wbGUtcXVhdGVzIC5xdWF0ZXMuZW5kIHtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAtMTVweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGVvcGxlLXF1YXRlcyAuY29tbWF0dGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjUlO1xuICBib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjM2U2NWFjO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE5MHB4KTtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAucGFuZWwgLnBhbmVsLWJvZHkge1xuICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogODBweCAyMHB4IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC5wYW5lbCAucGFuZWwtYm9keSBoNSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICNiZjI3MmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDBweCAjMGUwZTBlO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIGgxIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAuYXZ0YXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlY3Rpb24taW5uZXItc3ViaGVhZGVyIC50ZWFtLWluZm8ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4udGhlLXRlYW0taW5mbyAuaW1nLWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnRoZS10ZWFtLWluZm8gLmltZy1mcmFtZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMzNweDtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiA2OCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4udGhlLXRlYW0taW5mbyBpbWcge1xuICB3aWR0aDogNzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJsdWUtYmcge1xuICBiYWNrZ3JvdW5kOiAjM2U2NWFjO1xufVxuXG4ucmVkLWJnIHtcbiAgYmFja2dyb3VuZDogI2JmMjcyZDtcbn1cblxuLmJsYWNrLWJnIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wYW5lbCB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG4gIC5zZWN0aW9uLWlubmVyLXN1YmhlYWRlciAudGhlLXRlYW0taW5mbyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAucm93LWYsIC5yb3csIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5icmVhZGN1bSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cblxuICAuaW1nLWZsYWcge1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGFuZWwtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYXZ0YXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */";
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