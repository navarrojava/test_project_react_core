(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.homeActionTypes = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * Created by NavarroFerreira on 6/21/2017.
   */
  var INCREMENT_REQUESTED = exports.INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
  var INCREMENT = exports.INCREMENT = 'counter/INCREMENT';
  var DECREMENT_REQUESTED = exports.DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
  var DECREMENT = exports.DECREMENT = 'counter/DECREMENT';
  var GET_ALL_POSTS_SUCCESS = exports.GET_ALL_POSTS_SUCCESS = 'get_all_posts_success';
});