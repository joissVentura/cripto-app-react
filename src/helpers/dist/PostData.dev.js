"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostData = void 0;

var PostData = function PostData(url, data) {
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(function () {
    window.location.href = "https://intranet.unjfsc.edu.pe";
  })["catch"](function (error) {});
};

exports.PostData = PostData;