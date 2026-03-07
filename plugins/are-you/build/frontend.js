/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend.scss"
/*!***************************!*\
  !*** ./src/frontend.scss ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/react-dom/client.js"
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) // removed by dead control flow
{} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react-dom"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _frontend_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontend.scss */ "./src/frontend.scss");



document.addEventListener("DOMContentLoaded", function () {
  const divsToUpdate = document.querySelectorAll(".paying-attention-update-me");
  console.log('Found divs to update:', divsToUpdate.length);
  divsToUpdate.forEach(function (div) {
    const preElement = div.querySelector("pre");
    if (preElement) {
      try {
        const data = JSON.parse(preElement.innerHTML);
        console.log('Parsed data:', data);
        // Clear the div and add the frontend class for styling
        div.innerHTML = "";
        div.classList.add("paying-attention-frontend");
        const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(div);
        root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Quiz, data));
      } catch (error) {
        console.error('Error parsing JSON:', error, 'HTML content:', preElement.innerHTML);
      }
    } else {
      console.error("No <pre> element found in div with class 'paying-attention-update-me'");
    }
  });
  function Quiz(props) {
    const [isCorrect, setIsCorrect] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    const [isCorrectDelayed, setIsCorrectDelayed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (isCorrect === false) {
        setTimeout(() => {
          setIsCorrect(undefined);
        }, 2600);
      }
      if (isCorrect === true) {
        setTimeout(() => {
          setIsCorrectDelayed(true);
        }, 1000);
      }
    }, [isCorrect]);
    function handleAnswer(index) {
      if (index === props.correctAnswer) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    }
    if (!props.question || !Array.isArray(props.answers) || props.answers.length === 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "No quiz data available");
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "paying-attention-frontend",
      style: {
        backgroundColor: props?.bgColor || ''
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.question), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, props.answers.map((answer, index) => {
      const liClass = (isCorrectDelayed === true && index === props.correctAnswer ? "no-click" : "") + (isCorrectDelayed === true && index !== props.correctAnswer ? " fade-incorrect" : "");
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: index,
        className: liClass,
        onClick: isCorrect === true ? undefined : () => handleAnswer(index)
      }, isCorrectDelayed === true && index === props.correctAnswer ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        className: "bi bi-check",
        viewBox: "0 0 16 16"
      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
      })) : null, isCorrectDelayed === true && index !== props.correctAnswer ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        className: "bi bi-x",
        viewBox: "0 0 16 16"
      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
      })) : null, answer);
    })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "correct-message" + (isCorrect === true ? " correct-message--visible" : "")
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "That is correct!")), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "incorrect-message" + (isCorrect === false ? " correct-message--visible" : "")
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sorry, try again.")));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map