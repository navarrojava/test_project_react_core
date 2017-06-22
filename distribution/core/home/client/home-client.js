'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fetchEverywhere = require('fetch-everywhere');

var _fetchEverywhere2 = _interopRequireDefault(_fetchEverywhere);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BASE_URL = 'https://jsonplaceholder.typicode.com';

var HomeClient = function () {
  function HomeClient() {
    _classCallCheck(this, HomeClient);

    this.getEntityUrl = function () {
      return BASE_URL;
    };

    this.getHeaders = function () {
      return {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      };
    };
  }

  _createClass(HomeClient, [{
    key: 'getAllPostsClient',


    /**
     *
     * @returns {Promise}
     */
    value: function getAllPostsClient() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        (0, _fetchEverywhere2.default)(_this.getEntityUrl() + '/posts', {
          method: 'GET',
          headers: _this.getHeaders()
        }).then(function (response) {
          if (response.status !== 200) {
            reject(response.status + ' : ' + response.statusText);
          } else {
            response.json().then(function (posts) {
              return resolve(posts);
            }).catch(function (error) {
              reject(error.message);
            });
          }
        }).catch(function (error) {
          reject(error.message);
        });
      });
    }
  }]);

  return HomeClient;
}();

var homeClient = new HomeClient();

exports.default = homeClient;