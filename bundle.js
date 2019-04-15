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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  function Game(ctx, environment, hero, platforms) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.environment = environment;
    this.hero = hero;
    this.platforms = platforms;
    this.count = 0;
    this.gameStarted = false;
    this.audio = document.getElementById('bkg');
  }

  _createClass(Game, [{
    key: "render",
    value: function render() {
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(0, 0, canvas.width, canvas.height);
      this.environment.render();
      this.platforms.forEach(function (platform) {
        platform.render();
      });
      this.hero.render();
    }
  }, {
    key: "gameLoop",
    value: function gameLoop() {
      var _this = this;

      // this.audio.play();
      if (this.gameStarted) {
        this.environment.render();
        this.platforms.forEach(function (platform) {
          if (_this.hero.hitBottom(platform)) {
            _this.count += 1;
            platform.setBounce(_this.hero);
          } else if (_this.hero.detectCollision(platform)) {
            // window.alert("you died");    
            // console.log("you died");
            _this.end(); // document.location.reload();

          }

          platform.update();
          platform.render();
        });
        this.ctx.fillText(Math.floor(this.count / this.platforms.length * 100) + '%', 20, 50);
        this.hero.update();
        this.hero.render();
        this.environment.update();
      }

      window.requestAnimationFrame(this.gameLoop.bind(this));
    }
  }, {
    key: "end",
    value: function end() {
      // this.ctx.clearRect(0, 0, 900, 500);
      // this.ctx.fillStyle = 'grey';
      // this.ctx.fillRect(0 ,0 , 900, 500);
      this.ctx.fillStyle = 'white';
      this.ctx.font = "30px Dokdo";
      this.ctx.fillText("You'd better play something else!", 200, 100);
      this.ctx.fillText("Press any key to restart!", 200, 150);
      this.ctx.fillStyle = 'red';
      this.ctx.font = '70px Dokdo';
      this.ctx.fillText(Math.floor(this.count / this.platforms.length * 100) + '%', 20, 50);
      this.gameStarted = false;
      this.audio.pause();
      document.addEventListener('keydown', this.restart.bind(this));
    }
  }, {
    key: "restart",
    value: function restart() {
      document.location.reload();
      this.audio.play();
      document.removeEventListener('keydown', this.restart.bind(this));
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/generatePlatforms.js":
/*!**********************************!*\
  !*** ./src/generatePlatforms.js ***!
  \**********************************/
/*! exports provided: level1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "level1", function() { return level1; });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ "./src/platform.js");

var level1 = function level1(ctx) {
  var platforms = [];
  var startXPos = 250;
  var startYPos = 350 + 20 + 12;
  var gap = 60;
  var width1 = 50;
  var height1 = 23;
  var speed = 2.85;
  var name1 = "platform1";
  var name2 = "platform2";
  var width2 = 50;
  var height2 = 76;

  for (var i = 0; i < 50; ++i) {
    var platform1 = new _platform__WEBPACK_IMPORTED_MODULE_0__["default"](startXPos + gap * i, startYPos - height1, width1, height1, speed, name1, ctx);
    platforms.push(platform1);

    if (i > 3 && i % 4 == 0) {
      var platform2 = new _platform__WEBPACK_IMPORTED_MODULE_0__["default"](startXPos + gap * (i + 1), startYPos - height2, width2, height2, speed, name2, ctx);
      platforms.push(platform2);
      ++i;
    }
  }

  return platforms;
};

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
    this.onGround = false;
    this.width = 40;
    this.height = 40;
    this.velocity_Y = 0;
    this.velocity_X = 0;
    this.ticks = 0;
    this.spriteIndex = 0;
    this.sprites = [document.getElementById("hero1"), document.getElementById("hero2")];
    document.addEventListener('keydown', function (e) {
      if (e.keyCode === 32 && _this.y > 335) {
        if (_this.y >= 349) {
          _this.velocity_Y = -8.7;
        } else if (_this.y >= 347) {
          _this.velocity_Y = -8.6;
        } else if (_this.y >= 344) {
          _this.velocity_Y = -8.5;
        } else if (_this.y >= 341) {
          _this.velocity_Y = -8.4;
        } else if (_this.y >= 339) {
          _this.velocity_Y = -8.3;
        } else if (_this.y >= 337) {
          _this.velocity_Y = -8.2;
        } else {
          _this.velocity_Y = -8.1;
        }
      } // console.log(this.y);
      // console.log(this.velocity_Y);

    });
  }

  _createClass(Hero, [{
    key: "hitBottom",
    value: function hitBottom(platform) {
      this.onGround = this.x >= platform.x && this.x <= platform.x + platform.width && this.y + this.height / 2 >= platform.y + 10;

      this._resetLocation(platform);

      return this.onGround;
    }
  }, {
    key: "_resetLocation",
    value: function _resetLocation(platform) {
      if (this.onGround) {
        this.x = platform.x + platform.width / 2;
      }
    }
  }, {
    key: "detectCollision",
    value: function detectCollision(platform) {
      return this.x + this.width / 2 >= platform.x + 15 && //making sure that when hero is flying over the platform never collide 
      this.x - this.width / 2 < platform.x && this.y + this.height / 2 > platform.y + 12;
    }
  }, {
    key: "update",
    value: function update() {
      this.ticks++;

      if (this.ticks % 10.5 === 0) {
        this.spriteIndex = (this.spriteIndex + 1) % this.sprites.length;
      }

      this.x += this.velocity_X;
      this.y += this.velocity_Y;
      this.velocity_Y += 0.6; // down gravity
      // if (this.y >= 350) { //bounce
      //     this.velocity_Y = -6;
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var renderX = this.x - this.width / 2;
      var renderY = this.y - this.height / 2;
      this.ctx.drawImage(this.sprites[this.spriteIndex], renderX, renderY);
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _generatePlatforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generatePlatforms */ "./src/generatePlatforms.js");




document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var environment = new _environment__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx);
  var hero = new _hero__WEBPACK_IMPORTED_MODULE_1__["default"](275, 350, ctx);
  var platformL1 = Object(_generatePlatforms__WEBPACK_IMPORTED_MODULE_3__["level1"])(ctx);
  var game = new _game__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, environment, hero, platformL1);
  game.render();

  var startGame = function startGame() {
    var startMenus = document.getElementById('start-menus');
    startMenus.classList.add('hidden');
    game.gameStarted = true;
    document.removeEventListener('keydown', startGame);
    game.audio.play();

    if (game.gameStarted) {
      game.gameLoop();
    }
  };

  document.addEventListener('keydown', startGame);
  ctx.font = "50px Dokdo"; // ctx.fillText("Click to Start ", 200, 200);
});

/***/ }),

/***/ "./src/platform.js":
/*!*************************!*\
  !*** ./src/platform.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Platform =
/*#__PURE__*/
function () {
  function Platform(x, y, width, height, speed, name, ctx) {
    _classCallCheck(this, Platform);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.speed = speed;
    this.name = name;
    this.platform = document.getElementById(name);
  }

  _createClass(Platform, [{
    key: "setBounce",
    value: function setBounce(hero) {
      if (this.name === 'platform1') {
        hero.velocity_Y = -6;
      } else if (this.name === 'platform2') {
        if (this.x + this.width / 2 < hero.x) {
          hero.velocity_Y = -3.2;
        } else if (this.x + this.width / 2 >= hero.x) {
          hero.velocity_Y = -3.4;
        }
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.x -= this.speed;
    }
  }, {
    key: "render",
    value: function render() {
      this.ctx.save();
      this.ctx.drawImage(this.platform, this.x, this.y);
      this.ctx.restore();
    }
  }]);

  return Platform;
}();

/* harmony default export */ __webpack_exports__["default"] = (Platform);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map