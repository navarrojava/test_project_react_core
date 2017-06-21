var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import fetch from 'isomorphic-fetch';

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
        fetch(_this.getEntityUrl() + '/posts', {
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

export default homeClient;