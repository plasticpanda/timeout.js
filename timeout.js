/*!
 * timeout.js
 * Simone Lusenti
 * MIT license
 */

(function (exports) {
  'use strict';

  function Timeout() {
    this.timeouts = [];
  }
  
  Timeout.prototype.add = function (fn, delay) {
    var timeout = setTimeout(fn, delay);
    this.timeouts.push(timeout);
  };
  
  Timeout.prototype.clearAll = function () {
    this.timeouts.forEach(function (id) {
      clearTimeout(id);
    });
  };

  // Expose the class either via AMD or the global object
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return EventEmitter;
    });
  }
  else {
    exports.EventEmitter = EventEmitter;
  }
}(this));
