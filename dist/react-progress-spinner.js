!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define("react-progress-spinner",["React"],n):"object"==typeof exports?exports["react-progress-spinner"]=n(require("react")):e["react-progress-spinner"]=n(e.React)}(global,(function(e){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist/",t(t.s=5)}([function(e,n,t){var r=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(n,t){n.exports=e},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],s=n.base?a[0]+n.base:a[0],u=t[s]||0,f="".concat(s," ").concat(u);t[s]=u+1;var l=c(f),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:g(p,n),references:1}),r.push(f)}return r}function u(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var f,l=(f=[],function(e,n){return f[e]=n,f.filter(Boolean).join("\n")});function p(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function d(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,m=0;function g(e,n){var t,r,o;if(n.singleton){var a=m++;t=v||(v=u(n)),r=p.bind(null,t,a,!1),o=p.bind(null,t,a,!0)}else t=u(n),r=d.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);i[o].references--}for(var a=s(e,n),u=0;u<t.length;u++){var f=c(t[u]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}t=a}}}},function(e,n,t){(n=t(4)(!1)).push([e.i,"@keyframes _2111 {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(3600deg);\n  }\n}\n\n._4082 {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: fit-content;\n}\n\n._4198 {\n  fill: white;\n}\n\n._3da8 {\n  fill: #e8ebee;\n}\n\n.c203 {\n  color: #cbcbcb;\n  font-size: 0.5em;\n  vertical-align: super;\n}\n\n._56e7 {\n  animation: _2111 12s linear infinite;\n  fill: transparent;\n  stroke-linecap: round;\n  stroke: #2ecc71;\n  transform-origin: 50% 50%;\n}\n\n._5897 {\n  font-size: 0.6em;\n  position: absolute;\n}\n",""]),n.locals={container:"_4082",inset:"_4198",track:"_3da8",percentage:"c203",progress:"_56e7",rotate:"_2111",value:"_5897"},e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([o]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t(1),o=t.n(r),a=t(0),i=t.n(a),c=o.a.createElement,s=function(e){var n=e.percentage,t=void 0===n?0:n,r=e.radius,o=void 0===r?200:r,a=e.thickness,s=void 0===a?12:a,u=2*Math.PI*o,f=u-u/(100/t),l=s/2;return c("div",{className:"".concat(i.a.container," react-progress-spinner-container"),style:{fontSize:"".concat(o,"px")}},c("svg",{className:"".concat(i.a.spinner," react-progress-spinner-spinner"),height:2*(o+l),viewBox:"0 0 ".concat(2*(o+l)," ").concat(2*(o+l)),width:2*(o+l)},c("circle",{className:"".concat(i.a.track," react-progress-spinner-spinner"),r:o+l,cx:o+l,cy:o+l}),c("circle",{className:"".concat(i.a.progress," react-progress-spinner-progress"),r:o,cx:o+l,cy:o+l,style:{strokeDasharray:u,strokeDashoffset:f,strokeWidth:s}}),c("circle",{className:"".concat(i.a.inset," react-progress-spinner-inset"),r:o-l,cx:o+l,cy:o+l})),c("p",{className:"".concat(i.a.value," react-progress-spinner-value")},t,c("span",{className:"".concat(i.a.percentage," react-progress-spinner-percentage")},"%")))}}])}));