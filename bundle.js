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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/environment.js":
/*!****************************!*\
  !*** ./src/environment.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Environment =
/*#__PURE__*/
function () {
  function Environment(canvas, ctx) {
    _classCallCheck(this, Environment);

    this.canvas = canvas;
    this.ctx = ctx;
    this.bgPos = 0;
    this.fgPos = 0;
    this.bgSpeed = 2;
    this.bgWidth = 1000;
    this.bgImg = document.getElementById('bgImg');
  }

  _createClass(Environment, [{
    key: "update",
    value: function update() {
      this.bgPos -= this.bgSpeed;

      if (this.bgPos < -this.bgWidth) {
        this.bgPos = 0;
      }
    }
  }, {
    key: "render",
    value: function render() {
      for (var i = 0; i <= this.canvas.width / this.bgWidth + 1; i++) {
        this.ctx.drawImage(this.bgImg, this.bgPos + i * this.bgWidth, 0);
      }
    }
  }]);

  return Environment;
}();

/* harmony default export */ __webpack_exports__["default"] = (Environment);

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hero =
/*#__PURE__*/
function () {
  function Hero(x, y, ctx) {
    var _this = this;

    _classCallCheck(this, Hero);

    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.width = 40;
    this.height = 40;
    this.jumping = false;
    this.velocity_Y = 0;
    this.velocity_X = 0; // this.sprites = [document.getElementById("turtle1"),
    //     document.getElementById("turtle2"),
    //     document.getElementById("turtle3")
    // ];

    this.sprites = [document.getElementById("hero1"), document.getElementById("hero2")];
    document.addEventListener('keydown', function (e) {
      console.log(_this.y);

      if (e.keyCode === 32 && _this.y > 340) {
        _this.velocity_Y = -8;
      }
    });
  } // hitBottom() {
  //     return this.y > 330;
  // }
  // handleJump(e) {
  //     if (e.keyCode === 32 ) {
  //         this.velocity_Y = -8;
  //     }
  // } 


  _createClass(Hero, [{
    key: "update",
    value: function update() {
      // console.log(this.y); 
      debugger;
      this.x += this.velocity_X;
      this.y += this.velocity_Y; // if (this.y <= 320) {

      this.velocity_Y += 0.4; // down gravity
      // }

      if (this.y >= 350) {
        this.velocity_Y = -6;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var renderX = this.x - this.width / 2;
      var renderY = this.y - this.height / 2;
      this.ctx.drawImage(this.sprites[1], renderX, renderY);
    }
  }]);

  return Hero;
}();

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./src/environment.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ "./src/hero.js");


document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var environment = new _environment__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx);
  var hero = new _hero__WEBPACK_IMPORTED_MODULE_1__["default"](150, 350, ctx);
  ctx.fillStyle = 'white';

  var gameLoop = function gameLoop() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    environment.update();
    environment.render();
    hero.update();
    hero.render();
    window.requestAnimationFrame(gameLoop);
  };

  gameLoop(); // ctx.fillStyle = 'black';
  // ctx.beginPath();
  // ctx.arc(250, 400, 10, 0, 2 * Math.PI);
  // ctx.closePath();
  // ctx.fill();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map