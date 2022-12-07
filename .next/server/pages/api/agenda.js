"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/agenda";
exports.ids = ["pages/api/agenda"];
exports.modules = {

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = _interopRequireDefault;\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXcvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanM/ZDlhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "(api)/./knexfile.js":
/*!*********************!*\
  !*** ./knexfile.js ***!
  \*********************/
/***/ ((module) => {

eval("\nmodule.exports = {\n    development: {\n        client: \"mysql\",\n        connection: {\n            host: \"localhost\",\n            port: 3306,\n            database: \"clinica\",\n            user: \"root\",\n            password: \"\"\n        },\n        pool: {\n            min: 0,\n            max: 10\n        },\n        migrations: {\n            tableName: \"knex_migrations\",\n            directory: `${__dirname}/src/database/migrations`\n        },\n        seeds: {\n            directory: `${__dirname}/src/database/seeds`\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9rbmV4ZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQUE7QUFBQUEsT0FBT0MsT0FBTyxHQUFHO0lBQ2JDLGFBQWE7UUFDVEMsUUFBUTtRQUNSQyxZQUFZO1lBQ1JDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLE1BQU07WUFDTkMsVUFBVTtRQUNkO1FBQ0FDLE1BQU07WUFDRkMsS0FBSztZQUNMQyxLQUFLO1FBQ1Q7UUFDQUMsWUFBWTtZQUNSQyxXQUFXO1lBQ1hDLFdBQVcsQ0FBQyxFQUFFQyxVQUFVLHdCQUF3QixDQUFDO1FBQ3JEO1FBQ0FDLE9BQU87WUFDSEYsV0FBVyxDQUFDLEVBQUVDLFVBQVUsbUJBQW1CLENBQUM7UUFDaEQ7SUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3Ly4va25leGZpbGUuanM/MjMzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZXZlbG9wbWVudDoge1xuICAgICAgICBjbGllbnQ6IFwibXlzcWxcIixcbiAgICAgICAgY29ubmVjdGlvbjoge1xuICAgICAgICAgICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICAgICAgICAgIHBvcnQ6IDMzMDYsXG4gICAgICAgICAgICBkYXRhYmFzZTogXCJjbGluaWNhXCIsXG4gICAgICAgICAgICB1c2VyOiBcInJvb3RcIixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgICBwb29sOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICB9LFxuICAgICAgICBtaWdyYXRpb25zOiB7XG4gICAgICAgICAgICB0YWJsZU5hbWU6IFwia25leF9taWdyYXRpb25zXCIsXG4gICAgICAgICAgICBkaXJlY3Rvcnk6IGAke19fZGlybmFtZX0vc3JjL2RhdGFiYXNlL21pZ3JhdGlvbnNgLFxuICAgICAgICB9LFxuICAgICAgICBzZWVkczoge1xuICAgICAgICAgICAgZGlyZWN0b3J5OiBgJHtfX2Rpcm5hbWV9L3NyYy9kYXRhYmFzZS9zZWVkc2AsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImRldmVsb3BtZW50IiwiY2xpZW50IiwiY29ubmVjdGlvbiIsImhvc3QiLCJwb3J0IiwiZGF0YWJhc2UiLCJ1c2VyIiwicGFzc3dvcmQiLCJwb29sIiwibWluIiwibWF4IiwibWlncmF0aW9ucyIsInRhYmxlTmFtZSIsImRpcmVjdG9yeSIsIl9fZGlybmFtZSIsInNlZWRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./knexfile.js\n");

/***/ }),

/***/ "(api)/./src/database/index.js":
/*!*******************************!*\
  !*** ./src/database/index.js ***!
  \*******************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"getDatabaseConnector\", ({\n    enumerable: true,\n    get: ()=>getDatabaseConnector\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _knexfileJs = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! ../../knexfile.js */ \"(api)/./knexfile.js\"));\nconst knex = __webpack_require__(/*! knex */ \"knex\")(_knexfileJs.default.development);\nvar cachedConnection;\nconst getDatabaseConnector = ()=>{\n    if (cachedConnection) {\n        return cachedConnection;\n    }\n    cachedConnection = knex;\n    return cachedConnection;\n};\nmodule.exports = getDatabaseConnector();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGF0YWJhc2UvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7d0RBS2FBOzthQUFBQTs7OzZFQUxZLDhDQUFtQjtBQUM1QyxNQUFNQyxPQUFPQyxtQkFBT0EsQ0FBQyxrQkFBTSxFQUFFQyxtQkFBWSxDQUFDQyxXQUFXO0FBRXJELElBQUlDO0FBRUcsTUFBTUwsdUJBQXVCLElBQU07SUFDeEMsSUFBSUssa0JBQWtCO1FBQ3BCLE9BQU9BO0lBQ1QsQ0FBQztJQUVEQSxtQkFBbUJKO0lBQ25CLE9BQU9JO0FBQ1Q7QUFFQUMsT0FBT0MsT0FBTyxHQUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy8uL3NyYy9kYXRhYmFzZS9pbmRleC5qcz8zNmUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0aW9uREIgZnJvbSBcIi4uLy4uL2tuZXhmaWxlLmpzXCI7XG5jb25zdCBrbmV4ID0gcmVxdWlyZShcImtuZXhcIikoY29ubmVjdGlvbkRCLmRldmVsb3BtZW50KTtcblxudmFyIGNhY2hlZENvbm5lY3Rpb247XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhYmFzZUNvbm5lY3RvciA9ICgpID0+IHtcbiAgaWYgKGNhY2hlZENvbm5lY3Rpb24pIHtcbiAgICByZXR1cm4gY2FjaGVkQ29ubmVjdGlvbjtcbiAgfVxuXG4gIGNhY2hlZENvbm5lY3Rpb24gPSBrbmV4O1xuICByZXR1cm4gY2FjaGVkQ29ubmVjdGlvbjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0RGF0YWJhc2VDb25uZWN0b3IoKTtcbiJdLCJuYW1lcyI6WyJnZXREYXRhYmFzZUNvbm5lY3RvciIsImtuZXgiLCJyZXF1aXJlIiwiY29ubmVjdGlvbkRCIiwiZGV2ZWxvcG1lbnQiLCJjYWNoZWRDb25uZWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/database/index.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/agenda/index.js":
/*!***************************************!*\
  !*** ./src/pages/api/agenda/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database */ \"(api)/./src/database/index.js\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function GetAgenda(request, response) {\n    let results;\n    try {\n        results = await _database__WEBPACK_IMPORTED_MODULE_0___default().select(\"agenda.*\", \"medico.*\", \"pessoa.nome as nomemedico\", \"agenda.codigo as codigo\").from(\"agenda\").join(\"medico\", \"agenda.codigoMedico\", \"medico.codigo\").join(\"pessoa\", \"pessoa.codigo\", \"medico.codigo\");\n        return response.send(results);\n    } catch (error) {\n        return response.json({\n            message: error.message\n        }).send(500);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetAgenda);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FnZW5kYS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFFekMsZUFBZUMsVUFBVUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDeEMsSUFBSUM7SUFDSixJQUFJO1FBQ0FBLFVBQVUsTUFBTUosdURBQ0wsQ0FDSCxZQUNBLFlBQ0EsNkJBQ0EsMkJBRUhNLElBQUksQ0FBQyxVQUNMQyxJQUFJLENBQUMsVUFBVSx1QkFBdUIsaUJBQ3RDQSxJQUFJLENBQUMsVUFBVSxpQkFBaUI7UUFDckMsT0FBT0osU0FBU0ssSUFBSSxDQUFDSjtJQUN6QixFQUFFLE9BQU9LLE9BQU87UUFDWixPQUFPTixTQUFTTyxJQUFJLENBQUM7WUFBRUMsU0FBU0YsTUFBTUUsT0FBTztRQUFDLEdBQUdILElBQUksQ0FBQztJQUMxRDtBQUNKO0FBRUEsaUVBQWVQLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXcvLi9zcmMvcGFnZXMvYXBpL2FnZW5kYS9pbmRleC5qcz8wZDJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhYmFzZSBmcm9tIFwiLi4vLi4vLi4vZGF0YWJhc2VcIjtcblxuYXN5bmMgZnVuY3Rpb24gR2V0QWdlbmRhKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgbGV0IHJlc3VsdHM7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0cyA9IGF3YWl0IGRhdGFiYXNlXG4gICAgICAgICAgICAuc2VsZWN0KFxuICAgICAgICAgICAgICAgIFwiYWdlbmRhLipcIixcbiAgICAgICAgICAgICAgICBcIm1lZGljby4qXCIsXG4gICAgICAgICAgICAgICAgXCJwZXNzb2Eubm9tZSBhcyBub21lbWVkaWNvXCIsXG4gICAgICAgICAgICAgICAgXCJhZ2VuZGEuY29kaWdvIGFzIGNvZGlnb1wiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuZnJvbShcImFnZW5kYVwiKVxuICAgICAgICAgICAgLmpvaW4oXCJtZWRpY29cIiwgXCJhZ2VuZGEuY29kaWdvTWVkaWNvXCIsIFwibWVkaWNvLmNvZGlnb1wiKVxuICAgICAgICAgICAgLmpvaW4oXCJwZXNzb2FcIiwgXCJwZXNzb2EuY29kaWdvXCIsIFwibWVkaWNvLmNvZGlnb1wiKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnNlbmQocmVzdWx0cyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pLnNlbmQoNTAwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdldEFnZW5kYTtcbiJdLCJuYW1lcyI6WyJkYXRhYmFzZSIsIkdldEFnZW5kYSIsInJlcXVlc3QiLCJyZXNwb25zZSIsInJlc3VsdHMiLCJzZWxlY3QiLCJmcm9tIiwiam9pbiIsInNlbmQiLCJlcnJvciIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/agenda/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/agenda/index.js"));
module.exports = __webpack_exports__;

})();