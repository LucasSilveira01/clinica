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
exports.id = "pages/api/paciente/insert";
exports.ids = ["pages/api/paciente/insert"];
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

/***/ "(api)/./src/pages/api/paciente/insert.js":
/*!******************************************!*\
  !*** ./src/pages/api/paciente/insert.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database */ \"(api)/./src/database/index.js\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function InsertPaciente(request, response) {\n    try {\n        if (request.method == \"POST\") {\n            await _database__WEBPACK_IMPORTED_MODULE_0___default()(\"pessoa\").insert({\n                bairro: request.body.bairro,\n                cep: request.body.cep,\n                cidade: request.body.cidade,\n                codigo: request.body.codigo,\n                email: request.body.email,\n                estado: request.body.estado,\n                logradouro: request.body.logradouro,\n                nome: request.body.nome,\n                telefone: request.body.telefone\n            });\n            let codigo = await _database__WEBPACK_IMPORTED_MODULE_0___default()(\"pessoa\").max(\"codigo as codigo\");\n            let insert = \"INSERT INTO paciente values(\" + request.body.peso + \",\" + request.body.altura + \",'\" + request.body.tipo_sanguineo + \"',\" + codigo[0].codigo + \")\";\n            await _database__WEBPACK_IMPORTED_MODULE_0___default().raw(insert);\n        }\n        return response.send(201);\n    } catch (error) {\n        console.log(error.message);\n        response.json({\n            message: error.message\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsertPaciente);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3BhY2llbnRlL2luc2VydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFFekMsZUFBZUMsZUFBZUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDN0MsSUFBSTtRQUNBLElBQUlELFFBQVFFLE1BQU0sSUFBSSxRQUFRO1lBQzFCLE1BQU1KLGdEQUFRQSxDQUFDLFVBQVVLLE1BQU0sQ0FBQztnQkFDNUJDLFFBQVFKLFFBQVFLLElBQUksQ0FBQ0QsTUFBTTtnQkFDM0JFLEtBQUtOLFFBQVFLLElBQUksQ0FBQ0MsR0FBRztnQkFDckJDLFFBQVFQLFFBQVFLLElBQUksQ0FBQ0UsTUFBTTtnQkFDM0JDLFFBQVFSLFFBQVFLLElBQUksQ0FBQ0csTUFBTTtnQkFDM0JDLE9BQU9ULFFBQVFLLElBQUksQ0FBQ0ksS0FBSztnQkFDekJDLFFBQVFWLFFBQVFLLElBQUksQ0FBQ0ssTUFBTTtnQkFDM0JDLFlBQVlYLFFBQVFLLElBQUksQ0FBQ00sVUFBVTtnQkFDbkNDLE1BQU1aLFFBQVFLLElBQUksQ0FBQ08sSUFBSTtnQkFDdkJDLFVBQVViLFFBQVFLLElBQUksQ0FBQ1EsUUFBUTtZQUNuQztZQUVBLElBQUlMLFNBQVMsTUFBTVYsZ0RBQVFBLENBQUMsVUFBVWdCLEdBQUcsQ0FBQztZQUUxQyxJQUFJWCxTQUNBLGlDQUNBSCxRQUFRSyxJQUFJLENBQUNVLElBQUksR0FDakIsTUFDQWYsUUFBUUssSUFBSSxDQUFDVyxNQUFNLEdBQ25CLE9BQ0FoQixRQUFRSyxJQUFJLENBQUNZLGNBQWMsR0FDM0IsT0FDQVQsTUFBTSxDQUFDLEVBQUUsQ0FBQ0EsTUFBTSxHQUNoQjtZQUNKLE1BQU1WLG9EQUFZLENBQUNLO1FBQ3ZCLENBQUM7UUFFRCxPQUFPRixTQUFTa0IsSUFBSSxDQUFDO0lBQ3pCLEVBQUUsT0FBT0MsT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLE9BQU87UUFDekJ0QixTQUFTdUIsSUFBSSxDQUFDO1lBQUVELFNBQVNILE1BQU1HLE9BQU87UUFBQztJQUMzQztBQUNKO0FBRUEsaUVBQWV4QixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3Ly4vc3JjL3BhZ2VzL2FwaS9wYWNpZW50ZS9pbnNlcnQuanM/ZTlhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0YWJhc2UgZnJvbSBcIi4uLy4uLy4uL2RhdGFiYXNlXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIEluc2VydFBhY2llbnRlKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHJlcXVlc3QubWV0aG9kID09IFwiUE9TVFwiKSB7XG4gICAgICAgICAgICBhd2FpdCBkYXRhYmFzZShcInBlc3NvYVwiKS5pbnNlcnQoe1xuICAgICAgICAgICAgICAgIGJhaXJybzogcmVxdWVzdC5ib2R5LmJhaXJybyxcbiAgICAgICAgICAgICAgICBjZXA6IHJlcXVlc3QuYm9keS5jZXAsXG4gICAgICAgICAgICAgICAgY2lkYWRlOiByZXF1ZXN0LmJvZHkuY2lkYWRlLFxuICAgICAgICAgICAgICAgIGNvZGlnbzogcmVxdWVzdC5ib2R5LmNvZGlnbyxcbiAgICAgICAgICAgICAgICBlbWFpbDogcmVxdWVzdC5ib2R5LmVtYWlsLFxuICAgICAgICAgICAgICAgIGVzdGFkbzogcmVxdWVzdC5ib2R5LmVzdGFkbyxcbiAgICAgICAgICAgICAgICBsb2dyYWRvdXJvOiByZXF1ZXN0LmJvZHkubG9ncmFkb3VybyxcbiAgICAgICAgICAgICAgICBub21lOiByZXF1ZXN0LmJvZHkubm9tZSxcbiAgICAgICAgICAgICAgICB0ZWxlZm9uZTogcmVxdWVzdC5ib2R5LnRlbGVmb25lLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBjb2RpZ28gPSBhd2FpdCBkYXRhYmFzZShcInBlc3NvYVwiKS5tYXgoXCJjb2RpZ28gYXMgY29kaWdvXCIpO1xuXG4gICAgICAgICAgICBsZXQgaW5zZXJ0ID1cbiAgICAgICAgICAgICAgICBcIklOU0VSVCBJTlRPIHBhY2llbnRlIHZhbHVlcyhcIiArXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5ib2R5LnBlc28gK1xuICAgICAgICAgICAgICAgIFwiLFwiICtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LmJvZHkuYWx0dXJhICtcbiAgICAgICAgICAgICAgICBcIiwnXCIgK1xuICAgICAgICAgICAgICAgIHJlcXVlc3QuYm9keS50aXBvX3Nhbmd1aW5lbyArXG4gICAgICAgICAgICAgICAgXCInLFwiICtcbiAgICAgICAgICAgICAgICBjb2RpZ29bMF0uY29kaWdvICtcbiAgICAgICAgICAgICAgICBcIilcIjtcbiAgICAgICAgICAgIGF3YWl0IGRhdGFiYXNlLnJhdyhpbnNlcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnNlbmQoMjAxKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgcmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnNlcnRQYWNpZW50ZTtcbiJdLCJuYW1lcyI6WyJkYXRhYmFzZSIsIkluc2VydFBhY2llbnRlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwibWV0aG9kIiwiaW5zZXJ0IiwiYmFpcnJvIiwiYm9keSIsImNlcCIsImNpZGFkZSIsImNvZGlnbyIsImVtYWlsIiwiZXN0YWRvIiwibG9ncmFkb3VybyIsIm5vbWUiLCJ0ZWxlZm9uZSIsIm1heCIsInBlc28iLCJhbHR1cmEiLCJ0aXBvX3Nhbmd1aW5lbyIsInJhdyIsInNlbmQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/paciente/insert.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/paciente/insert.js"));
module.exports = __webpack_exports__;

})();